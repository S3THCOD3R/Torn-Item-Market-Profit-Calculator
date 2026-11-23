<div align="center">

# 🩸 T O R N 🩸

### ITEM MARKET · PROFIT CALCULATOR

`[ FIELD OPERATIONS • PROFIT EXTRACTION • LIVE MARKET SCREENER • 5% TAX ACCOUNTED ]`

**The single-file profit calculator and live market screener for Torn's item market — with the 5% sales tax already embedded in the math.**

Enter a sell price to expose your real profit, ROI, and margin — or feed it a target profit % and it back-solves the exact listing price you need. Then scan the live market by item ID **or item name** to see real listings, sorted cheapest-first.

[**⚔️ LIVE OPS**](https://profitcalc4torn.netlify.app) · [**📖 FIELD MANUAL**](Guide.md) · [**🛡️ ENLIST**](CONTRIBUTING.md) · [**📜 ARMISTICE**](LICENSE) · [**💚 FUND THE CAUSE**](https://cash.app/$SethKhaneki)

</div>

---

## 🩸 ARSENAL

- **💰 5% MARKET TAX — INTERNALIZED** — every number reflects what actually lands in your wallet
- **🎯 TWO STRIKE MODES** — *Enter sell price* or *Set profit by %*
- **📊 TWO PROFIT BASES** — *Markup on cost (ROI)* or *Margin on sale*
- **🔒 LOCKED-FIELD PROTOCOL** — one field is solved and sealed; the other stays live
- **📉 BREAK-EVEN FLOOR** — know the line before you list
- **📦 BULK-AWARE** — quantity and extra fees fold into total cost
- **📡 LIVE MARKET SCREENER** — scan real listings by **item ID or item name**, sorted cheapest-first
- **🔑 PER-USER API KEY** — paste your own Torn key; masked as `########`, saved to *your* browser only
- **🛰️ STATELESS PROXY** — key is forwarded per-request server-side to Torn; **not stored, not logged, not shared**
- **🧠 ITEM NAME LOOKUP** — type `Xanax` instead of remembering `206`; catalog cached 1 hour
- **⚡ USE THIS PRICE** — click any listing to load its price and quantity straight into the calculator
- **🌑 TORN-UI** — blood-red glow, torn-paper hero, dark as the pit
- **📴 ZERO DEPENDENCIES** — one HTML file, vanilla JS, runs offline for the calculator

---

## ⚔️ LIVE OPS

> **The calculator is running at:**
>
> ### [🩸 Launch the Calculator →](https://profitcalc4torn.netlify.app)
>
> `https://profitcalc4torn.netlify.app`

No install. No build. No login. Opens in your browser and fires immediately.

---

## 📡 LIVE MARKET SCREENER

Scroll to the **Live Market Screener** card below the calculator. Paste your Torn API key, type an item ID or name, and hit **Scan Market**.

### 🔑 What key do I need?

Any key with **`Public`** or **`Minimal`** access. For **item name lookup** (typing `Xanax` instead of `206`), the key needs **`torn → items`** permission — both Public and Minimal include this by default.

Generate one at **Torn → Preferences → API**:
`https://www.torn.com/preferences#tab=api`

**Numeric IDs always work** — even if your key lacks `torn → items`, you can still scan by typing the ID (e.g. `206`).

### 🛡️ API Terms of Service — How Your Data Is Handled

| Category | Disclosure |
|---|---|
| **Data Storage** | Only locally. Listings are rendered in your browser and not stored server-side. The item catalog is cached in your browser's `localStorage` for 1 hour to reduce API calls. |
| **Data Sharing** | Nobody. Your data is not shared with any third party. |
| **Purpose of Use** | Public community tool — item market profit calculation and price screening. |
| **Key Storage & Sharing** | Stored only in your browser. Transmitted per-request through a stateless proxy; not stored, not logged, not shared. |
| **Key Access Level** | Public or Minimal. Specifically: `market → itemmarket` and `torn → items`. |

**Why a proxy?** Browsers block direct cross-origin requests to `api.torn.com` due to CORS. The proxy is a stateless server-side relay that makes the request on your behalf and returns Torn's JSON response — it does not log, store, or retain your key. Read the entire proxy source: [`netlify/functions/torn-proxy.js`](netlify/functions/torn-proxy.js) (~80 lines, MIT licensed).

### 🔍 How item name lookup works

```
User types "Xanax" or "206"
        │
        ▼
  Is it all digits? ──Yes──▶ Use as item ID directly (fast path)
        │
        No
        ▼
  Fetch item catalog (POST /api/items)
  ├─ Cached in localStorage? → use cached list (1h TTL)
  └─ Else fetch Torn /v2/torn/items → cache it
        │
        ▼
  Search catalog for name match:
  ├─ Exact match          → use that item's ID
  ├─ Single partial match → use it
  ├─ Multiple matches     → show clickable suggestion buttons
  └─ No match             → error, suggest numeric ID
        │
        ▼
  Scan market with resolved ID → render listings table
```

Try typing `Xan` — you'll get clickable suggestion chips for every item containing "xan" (Xanax, Xanax bar, etc.). Click one, and the scan fires automatically.

### 📊 What you see

```
┌──────────────────────────────────────────────────────┐
│ Xanax (ID 206)                         207 LISTINGS  │
│ Average price: $838,621.00 · Cheapest first          │
├───┬────────────────┬──────────┬──────────────────────┤
│ # │ Price / unit   │ Qty      │ Total                │
├───┼────────────────┼──────────┼──────────────────────┤
│ 1 │ $849,999.00    │ 9        │ $7,649,991.00  → Use │
│ 2 │ $850,000.00    │ 20       │ $17,000,000.00 → Use │
│ 3 │ $856,000.00    │ 12       │ $10,272,000.00 → Use │
│ … │                │          │                      │
└───┴────────────────┴──────────┴──────────────────────┘
Showing 20 of 207 listings.
```

- **Item name + ID** and **total listing count** in the header
- **Average price** — Torn's computed market average
- **Cheapest first** — Torn returns listings sorted by price ascending
- **Total** — `price × amount` per row
- **→ Use** — click any row to load its price and quantity into the calculator above, then adjust your sell price to see real profit instantly

### 🧪 Quick test IDs

| Item ID | Item |
|---|---|
| **206** | Xanax |
| **366** | Vicodin |
| **258** | Donator Pack |
| **536** | Erotic DVD |

---

## 🛠 DEPLOYMENT — run it locally

No server required for the calculator. **Open `index.html` and you're in.**

```bash
git clone https://github.com/S3THCOD3R/Torn-Item-Market-Profit-Calculator.git
cd Torn-Item-Market-Profit-Calculator
open index.html          # macOS
# or: xdg-open index.html   (Linux)
# or: start index.html      (Windows)
```

> **FIELD NOTE:** The **calculator works fully offline** — nothing needs the network. The **Live Market Screener** requires the Netlify proxy functions (`/api/market` and `/api/items`) to be running, so it only works on the deployed site (or when using `netlify dev` locally).

### Deploying the proxy yourself

The screener relies on Netlify Functions to bypass browser CORS restrictions. The two routes are wired in `netlify.toml`:

```toml
[[redirects]]
  from = "/api/market"
  to = "/.netlify/functions/torn-proxy"
  status = 200
  force = true

[[redirects]]
  from = "/api/items"
  to = "/.netlify/functions/torn-proxy"
  status = 200
  force = true
```

Both routes hit the same `netlify/functions/torn-proxy.js` file — one function, two endpoints. If you fork and deploy your own copy, no environment variables are needed; the key comes from each user's browser.

---

## 📖 FIELD MANUAL

### 🩸 The 5% tax — read this or lose money

The market takes **5% of every sale**. Not of your profit. Sale. The blood tax comes off the top.

List at `$25,000` → you receive **`$23,750`**.

Which means your break-even is **never** your buy price — it's higher:

```
break-even = buy price ÷ 0.95
$20,000 ÷ 0.95 = $21,052.63
```

### 🎯 The two strike modes

| MODE | YOU INPUT | SYSTEM SOLVES |
|---|---|---|
| **Enter sell price** | Sell price / item | Profit % *(locked)* |
| **Set profit by %** | Target profit % | Sell price / item *(locked)* |

Switch any time — values carry across, nothing resets.

### 📊 The two profit bases

| BASIS | "20%" MEANS | FORMULA |
|---|---|---|
| **Markup on cost (ROI)** | 20% of what you paid | `sell = cost × 1.20 / 0.95` |
| **Margin on sale** | 20% of gross sale | `sell = cost / (0.95 − 0.20)` |

> **💀 THREAT REPORT:** Margin is hard-capped at **95%**. The 5% tax makes anything above that mathematically unreachable — the calculator refuses to lie to you.

> Full intel, worked field reports, combat math, and screener troubleshooting are in the [**Field Manual**](Guide.md).

---

## 🎯 OPS BRIEF — QUICK EXAMPLE

**Deployment:** `$20,000` × 10 · **Target:** 20% ROI

| STEP | VALUE |
|---|---|
| Total cost | `$200,000.00` |
| Required sell price | **`$25,263.16`** each |
| Gross sale | `$252,631.58` |
| Sales tax (5%) | `−$12,631.58` |
| Net revenue | `$240,000.00` |
| **Net profit** | **`$40,000.00`** = exactly 20% of cost ✅ |

Any lower → you miss the target. Any higher → you're bleeding margin.

---

## 🛠 LOADOUT

- **HTML5** — semantic skeleton
- **CSS3** — custom properties, grid, `:has()`, `clip-path`
- **Vanilla JavaScript** — no framework, no bundler, no build
- **Netlify Functions** — stateless serverless proxy for Torn API v2 (`/api/market` + `/api/items`)
- **Torn API v2** — `market/{id}/itemmarket` and `torn/items`
- **Google Fonts** — *Staatliches* + *Barlow Condensed*
- **Hosted on Netlify** — static deploy + functions, auto-redeploy on `git push`

**Payload:** one HTML file + one serverless function. That's the entire operation.

---

## 📁 REPO LAYOUT

```
.
├── index.html                    # the entire calculator + screener
├── netlify.toml                  # build, redirects, security headers
├── netlify/
│   └── functions/
│       ├── package.json          # { "type": "module" }
│       └── torn-proxy.js         # stateless proxy for /api/market + /api/items
├── README.md                     # this briefing
├── Guide.md                      # field manual (features, math, examples, screener)
├── CONTRIBUTING.md               # enlistment protocol
├── CODE_OF_CONDUCT.md            # rules of engagement
└── LICENSE                       # MIT armistice
```

---

## 🛡️ ENLIST

Contributions are welcome. Bug reports, feature ideas, UI tweaks, typo fixes — all considered.

- Read [**CONTRIBUTING.md**](CONTRIBUTING.md) for workflow and code style
- Obey the [**Code of Conduct**](CODE_OF_CONDUCT.md)
- Open an issue first for anything large

The calculator is one HTML file; the screener is one serverless function — fork it and go.

---

## 🐛 THREAT REPORT

If a number looks wrong, hand over:

1. Your exact **field values** (buy, qty, fees, sell, %)
2. Which **mode** and **basis** you had selected
3. What the calculator showed
4. What you calculated by hand

That lets us verify against the formulas in the [**Field Manual**](Guide.md) §8.

**For screener errors:**

- `Item catalog unavailable` → check **Netlify → Functions** shows `torn-proxy` deployed
- `No listings found` → try a different item ID (see the quick test IDs above)
- `Incorrect key` / `Access level` → regenerate with **Public** or **Minimal** access at Torn → Preferences → API

**Privacy questions:** the proxy source is public — [`netlify/functions/torn-proxy.js`](netlify/functions/torn-proxy.js). It reads the key from the request body, forwards it to Torn, returns the response, and discards it. No logging, no database, no retention.

---

## 💚 FUND THE CAUSE

This project is free, MIT-licensed, and stays free — **no paywalls, no ads, no tracking**.

If it saved you time, money, or a bad flip, you can send support:

<div align="center">

### [🩸 Donate via Cash App →](https://cash.app/$SethKhaneki)

`$SethKhaneki`

</div>

Donations are **completely optional**. The calculator and screener remain free forever regardless. They fund future Torn tools, field manuals, and open-source ops.

---

## 📜 ARMISTICE

Licensed under the [**MIT License**](LICENSE).

Copyright © 2026 [S3THCOD3R](https://github.com/S3THCOD3R).

You may use, modify, and redistribute — just keep the copyright notice attached. See [LICENSE](LICENSE) for full text.

---

<div align="center">

**Built for the Torn community. Happy hunting.** 🩸

*Not affiliated with Torn City or its developers.*

</div>
