'use strict';

const crypto = require('node:crypto');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { promisify } = require('node:util');

const scrypt = promisify(crypto.scrypt);
const PORT = Number(process.env.PORT || 8000);
const HOST = process.env.HOST || '127.0.0.1';
const SESSION_COOKIE = 'retiras_session';
const SESSION_TTL = 7 * 24 * 60 * 60 * 1000;
const MAX_BODY_BYTES = 2 * 1024 * 1024;
const MAX_IMPORT_ROWS = 1000;
const DATA_DIR = process.env.RETIRAS_DATA_DIR || path.join(__dirname, 'data');
const DATABASE_PATH = path.join(DATA_DIR, 'accounts.json');
const ASSETS_DIR = path.join(__dirname, 'assets');
const sessions = new Map();
const authLimits = new Map();
const dummySalt = Buffer.alloc(16, 73);

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function defaultMonth() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

function loadDatabase() {
  fs.mkdirSync(DATA_DIR, { recursive: true, mode: 0o700 });
  if (!fs.existsSync(DATABASE_PATH)) return { users: [] };
  const parsed = JSON.parse(fs.readFileSync(DATABASE_PATH, 'utf8'));
  if (!parsed || !Array.isArray(parsed.users)) {
    throw new Error('The account database has an invalid format.');
  }
  return parsed;
}

const database = loadDatabase();

function persistDatabase() {
  const temporaryPath = `${DATABASE_PATH}.${process.pid}.tmp`;
  fs.writeFileSync(temporaryPath, JSON.stringify(database), { mode: 0o600 });
  fs.renameSync(temporaryPath, DATABASE_PATH);
}

function securityHeaders() {
  return {
    'Cache-Control': 'no-store',
    'Content-Security-Policy': "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'",
    'Referrer-Policy': 'same-origin',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
  };
}

function sendJson(response, status, payload, extraHeaders = {}) {
  response.writeHead(status, {
    ...securityHeaders(),
    'Content-Type': 'application/json; charset=utf-8',
    ...extraHeaders,
  });
  response.end(JSON.stringify(payload));
}

function publicUser(user) {
  return { id: user.id, name: user.name, email: user.email };
}

function publicState(user) {
  return {
    user: publicUser(user),
    settings: user.settings,
    records: user.records,
  };
}

function getCookie(request, name) {
  const cookieHeader = request.headers.cookie || '';
  for (const part of cookieHeader.split(';')) {
    const separator = part.indexOf('=');
    if (separator < 0) continue;
    if (part.slice(0, separator).trim() === name) {
      return decodeURIComponent(part.slice(separator + 1).trim());
    }
  }
  return '';
}

function getCurrentUser(request) {
  const token = getCookie(request, SESSION_COOKIE);
  const session = sessions.get(token);
  if (!session) return null;
  if (session.expiresAt <= Date.now()) {
    sessions.delete(token);
    return null;
  }
  return database.users.find((user) => user.id === session.userId) || null;
}

function setSession(request, response, user) {
  const token = crypto.randomBytes(32).toString('base64url');
  sessions.set(token, { userId: user.id, expiresAt: Date.now() + SESSION_TTL });
  const secure = request.socket.encrypted || (process.env.TRUST_PROXY === '1' && request.headers['x-forwarded-proto'] === 'https')
    ? '; Secure'
    : '';
  response.setHeader(
    'Set-Cookie',
    `${SESSION_COOKIE}=${encodeURIComponent(token)}; HttpOnly; Path=/; SameSite=Strict; Max-Age=${Math.floor(SESSION_TTL / 1000)}${secure}`,
  );
}

function clearSession(request, response) {
  const token = getCookie(request, SESSION_COOKIE);
  if (token) sessions.delete(token);
  const secure = request.socket.encrypted || (process.env.TRUST_PROXY === '1' && request.headers['x-forwarded-proto'] === 'https')
    ? '; Secure'
    : '';
  response.setHeader('Set-Cookie', `${SESSION_COOKIE}=; HttpOnly; Path=/; SameSite=Strict; Max-Age=0${secure}`);
}

function checkSameOrigin(request) {
  const origin = request.headers.origin;
  if (!origin) return true;
  try {
    const originUrl = new URL(origin);
    return ['http:', 'https:'].includes(originUrl.protocol)
      && originUrl.host.toLowerCase() === String(request.headers.host || '').toLowerCase();
  } catch {
    return false;
  }
}

function checkAuthRateLimit(request) {
  const key = request.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const limit = authLimits.get(key);
  if (!limit || now >= limit.resetAt) {
    authLimits.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (limit.count >= 20) return false;
  limit.count += 1;
  return true;
}

function clearAuthRateLimit(request) {
  authLimits.delete(request.socket.remoteAddress || 'unknown');
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let byteCount = 0;
    let tooLarge = false;
    request.on('data', (chunk) => {
      byteCount += chunk.length;
      if (byteCount > MAX_BODY_BYTES) {
        tooLarge = true;
        return;
      }
      chunks.push(chunk);
    });
    request.on('end', () => {
      if (tooLarge) return reject(new HttpError(413, 'Request body is too large.'));
      if (chunks.length === 0) return resolve({});
      try {
        const parsed = JSON.parse(Buffer.concat(chunks).toString('utf8'));
        if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
          reject(new HttpError(400, 'Request body must be a JSON object.'));
          return;
        }
        resolve(parsed);
      } catch {
        reject(new HttpError(400, 'Request body must be valid JSON.'));
      }
    });
    request.on('error', reject);
  });
}

function normalizedEmail(value) {
  return String(value || '').trim().toLowerCase();
}

function validateRecord(input, id = crypto.randomUUID()) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    throw new HttpError(400, 'Each record must be an object.');
  }
  const date = String(input.date || '').trim();
  const time = String(input.time || '').trim();
  const payer = String(input.payer || '').trim();
  const receiver = String(input.receiver || '').trim();
  const note = String(input.note || '').trim();
  const amount = Number(input.amount);
  const parsedDate = new Date(`${date}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)
    || Number.isNaN(parsedDate.getTime())
    || parsedDate.toISOString().slice(0, 10) !== date) {
    throw new HttpError(400, 'A record date must use YYYY-MM-DD format.');
  }
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(time)) {
    throw new HttpError(400, 'A record time must use HH:MM format.');
  }
  if (!Number.isFinite(amount) || amount <= 0 || amount > 1_000_000_000) {
    throw new HttpError(400, 'Record amounts must be greater than zero and less than 1,000,000,000.');
  }
  if (!payer || payer.length > 200 || !receiver || receiver.length > 200 || note.length > 2000) {
    throw new HttpError(400, 'Payer and receiver are required; text fields must stay within their size limits.');
  }
  return { id, date, time, amount, payer, receiver, note };
}

function mimeType(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  return {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
  }[extension] || 'application/octet-stream';
}

async function handleApi(request, response, url) {
  const { pathname } = url;
  const isMutation = !['GET', 'HEAD'].includes(request.method);
  if (isMutation && !checkSameOrigin(request)) {
    sendJson(response, 403, { error: 'Request origin is not allowed.' });
    return;
  }

  if (request.method === 'GET' && pathname === '/api/session') {
    const user = getCurrentUser(request);
    sendJson(response, 200, user ? publicState(user) : { user: null });
    return;
  }

  if (request.method === 'POST' && (pathname === '/api/register' || pathname === '/api/login')) {
    if (!checkAuthRateLimit(request)) {
      sendJson(response, 429, { error: 'Too many sign-in attempts. Please wait 15 minutes and try again.' });
      return;
    }
    const body = await readJson(request);
    const email = normalizedEmail(body.email);
    const password = String(body.password || '');
    if (pathname === '/api/register') {
      const name = String(body.name || '').trim();
      if (!name || name.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
        throw new HttpError(400, 'Enter a name and a valid email address.');
      }
      if (password.length < 10 || password.length > 256) {
        throw new HttpError(400, 'Use a password between 10 and 256 characters.');
      }
      if (database.users.some((user) => user.email === email)) {
        throw new HttpError(409, 'An account with this email already exists. Sign in instead.');
      }
      const salt = crypto.randomBytes(16);
      const passwordHash = await scrypt(password, salt, 64);
      if (database.users.some((user) => user.email === email)) {
        throw new HttpError(409, 'An account with this email already exists. Sign in instead.');
      }
      const user = {
        id: crypto.randomUUID(),
        name,
        email,
        passwordSalt: salt.toString('hex'),
        passwordHash: Buffer.from(passwordHash).toString('hex'),
        settings: { salary: 2500, selectedMonth: defaultMonth() },
        records: [],
      };
      database.users.push(user);
      persistDatabase();
      setSession(request, response, user);
      clearAuthRateLimit(request);
      sendJson(response, 201, publicState(user));
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !password || password.length > 256) {
      throw new HttpError(401, 'Email or password is incorrect.');
    }
    const user = database.users.find((entry) => entry.email === email);
    const salt = user ? Buffer.from(user.passwordSalt, 'hex') : dummySalt;
    const expected = user ? Buffer.from(user.passwordHash, 'hex') : Buffer.alloc(64);
    const actual = Buffer.from(await scrypt(password, salt, 64));
    const valid = expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
    if (!user || !valid) throw new HttpError(401, 'Email or password is incorrect.');
    setSession(request, response, user);
    clearAuthRateLimit(request);
    sendJson(response, 200, publicState(user));
    return;
  }

  if (request.method === 'POST' && pathname === '/api/logout') {
    clearSession(request, response);
    sendJson(response, 200, { ok: true });
    return;
  }

  const user = getCurrentUser(request);
  if (!user) {
    sendJson(response, 401, { error: 'Please sign in to access this account.' });
    return;
  }

  if (request.method === 'PUT' && pathname === '/api/settings') {
    const body = await readJson(request);
    const salary = Number(body.salary);
    const selectedMonth = String(body.selectedMonth || '');
    if (!Number.isFinite(salary) || salary < 0 || salary > 1_000_000_000
      || !/^\d{4}-(0[1-9]|1[0-2])$/.test(selectedMonth)) {
      throw new HttpError(400, 'Enter a valid salary and month.');
    }
    user.settings = { salary, selectedMonth };
    persistDatabase();
    sendJson(response, 200, { settings: user.settings });
    return;
  }

  if (request.method === 'POST' && pathname === '/api/records') {
    const record = validateRecord(await readJson(request));
    user.records.push(record);
    persistDatabase();
    sendJson(response, 201, { record });
    return;
  }

  if (request.method === 'POST' && pathname === '/api/records/import') {
    const body = await readJson(request);
    if (!Array.isArray(body.records) || body.records.length === 0 || body.records.length > MAX_IMPORT_ROWS) {
      throw new HttpError(400, `Choose between 1 and ${MAX_IMPORT_ROWS} CSV rows to import.`);
    }
    const imported = body.records.map((record, index) => {
      try {
        return validateRecord(record);
      } catch (error) {
        if (error instanceof HttpError) {
          throw new HttpError(error.status, `CSV row ${index + 2}: ${error.message}`);
        }
        throw error;
      }
    });
    user.records.push(...imported);
    persistDatabase();
    sendJson(response, 201, { records: imported, imported: imported.length });
    return;
  }

  if (request.method === 'DELETE' && pathname === '/api/records') {
    user.records = [];
    persistDatabase();
    sendJson(response, 200, { ok: true });
    return;
  }

  const recordMatch = pathname.match(/^\/api\/records\/([^/]+)$/);
  if (recordMatch && ['PUT', 'DELETE'].includes(request.method)) {
    const recordId = decodeURIComponent(recordMatch[1]);
    const index = user.records.findIndex((record) => record.id === recordId);
    if (index < 0) throw new HttpError(404, 'Record not found in this account.');
    if (request.method === 'DELETE') {
      user.records.splice(index, 1);
      persistDatabase();
      sendJson(response, 200, { ok: true });
      return;
    }
    const record = validateRecord(await readJson(request), recordId);
    user.records[index] = record;
    persistDatabase();
    sendJson(response, 200, { record });
    return;
  }

  sendJson(response, 404, { error: 'API endpoint not found.' });
}

function serveStatic(request, response, pathname) {
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    sendJson(response, 400, { error: 'Invalid URL path.' });
    return;
  }
  if (decodedPath === '/') decodedPath = '/index.html';
  const knownFiles = new Set(['/index.html', '/styles.css', '/app.js', '/BGP.jpeg']);
  let filePath;
  if (knownFiles.has(decodedPath)) {
    filePath = path.join(__dirname, decodedPath.slice(1));
  } else if (decodedPath.startsWith('/assets/')) {
    filePath = path.resolve(__dirname, `.${decodedPath}`);
    if (!filePath.startsWith(`${ASSETS_DIR}${path.sep}`)) filePath = null;
  }
  if (!filePath || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    response.writeHead(404, { ...securityHeaders(), 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }
  response.writeHead(200, { ...securityHeaders(), 'Content-Type': mimeType(filePath) });
  fs.createReadStream(filePath).pipe(response);
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url, 'http://localhost');
  if (url.pathname.startsWith('/api/')) {
    handleApi(request, response, url).catch((error) => {
      if (response.headersSent) {
        response.destroy();
        return;
      }
      const status = error instanceof HttpError ? error.status : 500;
      if (status >= 500) console.error(error);
      sendJson(response, status, {
        error: status >= 500 ? 'The server could not complete this request.' : error.message,
      });
    });
    return;
  }
  if (request.method !== 'GET') {
    response.writeHead(405, { ...securityHeaders(), Allow: 'GET' });
    response.end('Method not allowed');
    return;
  }
  serveStatic(request, response, url.pathname);
});

server.listen(PORT, HOST, () => {
  console.log(`Retiras is running at http://${HOST}:${PORT}`);
  console.log(`Account data is stored outside the public site files in ${DATA_DIR}`);
});
