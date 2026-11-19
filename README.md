# Cash Pickup Salary Ledger

This project is a simple HTML-based cash tracking app for recording money pickups and checking how much is left from your monthly salary.

## Features
- Record date and time
- Enter amount received
- Save payer and receiver information
- Track monthly salary and daily income
- Automatically deduct each received cash pickup from the monthly salary
- Store data in the browser using localStorage

## Files
- [index.html](index.html)
- [styles.css](styles.css)
- [app.js](app.js)

## Run it locally
From this folder, start a simple web server:

```bash
cd /data/user/0/com.vscodroid/files/projects
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Salary logic
- Monthly salary is set to $2,500 by default.
- The app divides the monthly salary by the number of days in the selected month.
- Each cash pickup entry is added to the total deductions for that month.
- Salary remaining = monthly salary - total cash pickups for the selected month.
