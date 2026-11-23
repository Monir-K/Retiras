# Retiras Cash Pickup Salary Ledger

Retiras lets each person create an account and keep their salary settings and cash pickup records in a private account. The browser sends requests to the Node server; account records are loaded and changed only for the signed-in user.

## Run locally

Requires Node.js 20 or newer. No third-party packages are needed.

```bash
node server.js
```

Open `http://127.0.0.1:8000`, then create an account. The server stores account data in `data/accounts.json`; that folder is ignored by Git. Sessions use an HTTP-only cookie and expire after seven days or when the server restarts.

## Use with multiple people

The server binds to `127.0.0.1` by default. To let other people use the app, place it behind an HTTPS reverse proxy and keep the data directory on protected persistent storage. When the proxy is trusted and terminates TLS, start the app with `TRUST_PROXY=1` so it marks session cookies Secure. Set `RETIRAS_DATA_DIR` to a protected path outside the public site files for production data. Do not expose the server over plain HTTP.

Each API request uses the account session on the server. Record IDs supplied by a browser are never used to select another user's account, and record edits and deletes are looked up only within the signed-in account.

## Import a CSV

Choose **Import CSV** in the records panel. The CSV must have a header row with `date`, `amount`, and `payer` columns. `time`, `receiver`, and `note` are optional. Dates may use `YYYY-MM-DD` or `MM/DD/YYYY`; missing times default to `00:00`, and missing receivers default to the account name. Quoted fields and commas inside quoted fields are supported. Imports are limited to 1,000 records at a time.

## Main files

- `index.html` — account forms and ledger interface
- `styles.css` — responsive phone-first layout and sticky salary summary
- `app.js` — browser behavior, CSV parsing, and account API requests
- `server.js` — account authentication, private data API, and static file server
- `BGP.jpeg` — site background image served from the public site root
