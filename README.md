# Retiras Cash Pickup Salary Ledger

Retiras lets each person create an account and keep salary settings and cash pickup records in a private account. The server loads and changes records only for the signed-in account.

## Run locally

Requires Node.js 20 or newer. No third-party packages are needed.

```bash
npm start
```

Open `http://127.0.0.1:8000`. Without database environment variables, account data is stored in `data/accounts.json`, which is ignored by Git. Sessions use an HTTP-only cookie and expire after seven days or when the server restarts.

## Free public hosting

The app can run as a free Render web service with account data stored in a free Supabase Postgres project. Both services can pause or sleep when unused, so the first visit after inactivity may take about a minute. Supabase may pause a project after a week with too little database activity. The free plans are intended for hobby projects and do not include backups.

1. Create a Supabase project and run the SQL in [`supabase-schema.sql`](supabase-schema.sql) in its SQL Editor.
2. If you already have local accounts, migrate them once before the public app is opened. On the computer that has `data/accounts.json`, set `SUPABASE_URL` to the project URL and `SUPABASE_SERVER_KEY` to the project's secret API key (`sb_secret_...`), then run `node scripts/migrate-to-supabase.mjs`. The script refuses to overwrite a cloud database row and leaves the local file intact.
3. Push this repository to GitHub and create a Render **Web Service** from its `main` branch. Set the start command to `npm start`.
4. Add these Render environment variables:
   - `SUPABASE_URL` — the Supabase project URL.
   - `SUPABASE_SERVER_KEY` — the Supabase secret API key (`sb_secret_...`). A legacy `service_role` key also works. Keep it private; never put it in browser code or Git.
   - `TRUST_PROXY` — `1`, so HTTPS cookies work behind Render's TLS proxy.
5. Deploy. Render provides a public `onrender.com` URL with HTTPS. Share that URL with users; each person registers their own account.

The Supabase server key is used only by the Node server. The Supabase table has row-level security enabled and grants table access only to that server role. Account data is stored in a private database row and exposed to a browser only through the signed-in user's API session.

## Privacy and account storage

Each API request uses the account session on the server. Record IDs supplied by a browser are never used to select another user's account, and record edits and deletes are looked up only within the signed-in account. Passwords are stored as scrypt hashes. The hosted data row contains all account data and credential hashes, so protect the Supabase server key and account with strong passwords.

The hosted storage currently keeps the app's account collection in one private JSON database row. This suits a small hobby app on one web-service instance; it is not designed for multiple app instances or high-volume concurrent use. The free database has no automatic backups, so periodically export important ledger records from the app.

## Import a CSV

Choose **Import CSV** in the records panel. The CSV must have a header row with `date`, `amount`, and `payer` columns. `time`, `receiver`, and `note` are optional. Dates may use `YYYY-MM-DD` or `MM/DD/YYYY`; missing times default to `00:00`, and missing receivers default to the account name. Quoted fields and commas inside quoted fields are supported. Imports are limited to 1,000 records at a time.

## Main files

- `index.html` — account forms and ledger interface
- `styles.css` — responsive phone-first layout and sticky salary summary
- `app.js` — browser behavior, CSV parsing, and account API requests
- `server.js` — account authentication, private data API, and static file server
- `supabase-schema.sql` — private hosted storage table
- `scripts/migrate-to-supabase.mjs` — one-time copy of existing local accounts to Supabase
- `BGP.jpeg` — site background image served from the public site root
