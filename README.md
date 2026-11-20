<div align="center">

# 🩸 T O R N 🩸

### ITEM MARKET · PROFIT CALCULATOR

`[ FIELD OPERATIONS • PROFIT EXTRACTION • 5% TAX ACCOUNTED ]`

**The single-file profit calculator for Torn's item market — with the 5% sales tax already embedded in the math.**

Enter a sell price to expose your real profit, ROI, and margin — or feed it a target profit % and it back-solves the exact listing price you need.

[**⚔️ LIVE OPS**](https://s3thcod3r.github.io/Torn-Item-Market-Profit-Calculator/) · [**📖 FIELD MANUAL**](Guide.md) · [**🛡️ ENLIST**](CONTRIBUTING.md) · [**📜 ARMISTICE**](LICENSE) · [**💚 FUND THE CAUSE**](https://cash.app/$SethKhaneki)

</div>

---

## 🩸 ARSENAL

- **💰 5% MARKET TAX — INTERNALIZED** — every number reflects what actually lands in your wallet
- **🎯 TWO STRIKE MODES** — *Enter sell price* or *Set profit by %*
- **📊 TWO PROFIT BASES** — *Markup on cost (ROI)* or *Margin on sale*
- **🔒 LOCKED-FIELD PROTOCOL** — one field is solved and sealed; the other stays live
- **📉 BREAK-EVEN FLOOR** — know the line before you list
- **📦 BULK-AWARE** — quantity and extra fees fold into total cost
- **⚡ LIVE RECALC** — fires on every keystroke; no commit button needed
- **🌑 TORN-UI** — blood-red glow, torn-paper hero, dark as the pit
- **📴 ZERO DEPENDENCIES** — one HTML file, vanilla JS, runs offline

---

## ⚔️ LIVE OPS

No install. No build. No server. **Open `index.html` and you're in.**

```bash
git clone https://github.com/S3THCOD3R/Torn-Item-Market-Profit-Calculator.git
cd Torn-Item-Market-Profit-Calculator
open index.html          # macOS
# or: xdg-open index.html   (Linux)
# or: start index.html      (Windows)
```

> **FIELD NOTE:** Two Google Fonts (*Staatliches* and *Barlow Condensed*) load via `<link>`. Offline, they fall back to system defaults — the calculator still fires, it just loses some teeth.

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

> Full intel, worked field reports, and combat math are in the [**Field Manual**](Guide.md).

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
- **Google Fonts** — *Staatliches* + *Barlow Condensed*

**Payload:** one file, ~30 KB. That's the entire operation.

---

## 📁 REPO LAYOUT

```
.
├── index.html            # the entire calculator
├── README.md             # this briefing
├── Guide.md              # field manual (features, math, examples)
├── CONTRIBUTING.md       # enlistment protocol
├── CODE_OF_CONDUCT.md    # rules of engagement
└── LICENSE               # MIT armistice
```

---

## 🛡️ ENLIST

Contributions are welcome. Bug reports, feature ideas, UI tweaks, typo fixes — all considered.

- Read [**CONTRIBUTING.md**](CONTRIBUTING.md) for workflow and code style
- Obey the [**Code of Conduct**](CODE_OF_CONDUCT.md)
- Open an issue first for anything large

The whole project is one HTML file — fork it and go.

---

## 🐛 THREAT REPORT

If a number looks wrong, hand over:

1. Your exact **field values** (buy, qty, fees, sell, %)
2. Which **mode** and **basis** you had selected
3. What the calculator showed
4. What you calculated by hand

That lets us verify against the formulas in the [**Field Manual**](Guide.md) §8.

---

## 💚 FUND THE CAUSE

This project is free, MIT-licensed, and stays free — **no paywalls, no ads, no tracking**.

If it saved you time, money, or a bad flip, you can send support:

<div align="center">

### [🩸 Donate via Cash App →](https://cash.app/$SethKhaneki)

`$SethKhaneki`

</div>

Donations are **completely optional**. The calculator remains free forever regardless. They fund future Torn tools, field manuals, and open-source ops.

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
