import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const inputPath = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.resolve(scriptDirectory, '..', 'data', 'accounts.json');
const projectUrl = String(process.env.SUPABASE_URL || '').replace(/\/+$/, '');
const serverKey = process.env.SUPABASE_SERVER_KEY || '';

if (!projectUrl || !serverKey) {
  console.error('Set SUPABASE_URL and SUPABASE_SERVER_KEY before running this migration.');
  process.exit(1);
}

let database;
try {
  database = JSON.parse(await readFile(inputPath, 'utf8'));
} catch (error) {
  console.error(`Could not read the local account file at ${inputPath}: ${error.message}`);
  process.exit(1);
}

if (!database || !Array.isArray(database.users)) {
  console.error('The local account file does not have the expected users array.');
  process.exit(1);
}

const endpoint = `${projectUrl}/rest/v1/retiras_state`;
const headers = {
  apikey: serverKey,
  'Content-Type': 'application/json',
};
if (!serverKey.startsWith('sb_secret_')) {
  headers.Authorization = `Bearer ${serverKey}`;
}

try {
  const existingResponse = await fetch(`${endpoint}?id=eq.main&select=id`, { headers });
  if (!existingResponse.ok) throw new Error(`Cloud database check failed (${existingResponse.status}).`);
  const existing = await existingResponse.json();
  if (existing.length > 0) {
    throw new Error('The cloud database already has Retiras data. Migration stopped to avoid overwriting it.');
  }

  const insertResponse = await fetch(endpoint, {
    method: 'POST',
    headers: { ...headers, Prefer: 'return=minimal' },
    body: JSON.stringify({ id: 'main', payload: database }),
  });
  if (!insertResponse.ok) throw new Error(`Cloud database import failed (${insertResponse.status}).`);

  const verifyResponse = await fetch(`${endpoint}?id=eq.main&select=payload`, { headers });
  if (!verifyResponse.ok) throw new Error(`Cloud database verification failed (${verifyResponse.status}).`);
  const verifiedRows = await verifyResponse.json();
  if (verifiedRows.length !== 1 || verifiedRows[0]?.payload?.users?.length !== database.users.length) {
    throw new Error('The cloud database did not return the expected account count after import.');
  }

  console.log(`Imported ${database.users.length} accounts. The local account file was not changed.`);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
