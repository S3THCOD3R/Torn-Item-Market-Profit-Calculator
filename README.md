<div align="center">

# 🩸 TORN · Item Market Profit Calculator

**A single-file, dependency-free profit calculator for the Torn item market — with the 5% sales tax baked into every number.**

Enter a sell price to see your real profit, ROI, and margin — or set a target profit % and the calculator solves the exact listing price you need (tax included).

[**Live Demo**](#-live-demo) · [**Guidebook**](Guide.md) · [**Contributing**](CONTRIBUTING.md) · [**License**](LICENSE) · [**💚 Donate**](https://cash.app/$SethKhaneki)

</div>

---

## ✨ Features

- **💰 5% market tax built in** — every figure reflects what actually lands in your wallet
- **🎯 Two modes** — *Enter sell price* or *Set profit by %*
- **📊 Two profit bases** — *Markup on cost (ROI)* or *Margin on sale*
- **🔒 Locked-field UX** — in % mode the sell price is solved and locked; in sell mode the % is solved and locked
- **📉 Break-even sell price** — know your floor before you list
- **📦 Bulk-aware** — quantity and extra fees fold into total cost
- **⚡ Live results** — recalculates on every keystroke, no button needed
- **🌑 Torn-inspired UI** — dark theme, blood-red glow, torn-paper hero, fully responsive
- **📴 Zero dependencies** — one HTML file, vanilla JS, works offline

---

## 🚀 Live Demo

No build step, no server, no install. **Open `index.html` in any modern browser.**

```bash
git clone https://github.com/S3THCOD3R/Torn-Item-Market-Profit-Calculator.git
cd Torn-Item-Market-Profit-Calculator
open index.html          # macOS
# or: xdg-open index.html   (Linux)
# or: start index.html      (Windows)
```

That's it. The whole calculator is one self-contained file.

> **Note:** Two Google Fonts (*Staatliches* and *Barlow Condensed*) load via `<link>`. Without internet the fonts fall back to system defaults — everything still works, it just looks slightly less Torn-y.

---

## 📖 How it works

### The 5% tax matters

The market takes **5% of every sale**, not of your profit. List at `$25,000` and you receive `$23,750`. That means your break-even price is always **higher** than your buy price:

```
break-even = buy price ÷ 0.95
$20,000 ÷ 0.95 = $21,052.63
```

### The two modes

| Mode | You type | Calculator solves |
|---|---|---|
| **Enter sell price** | Sell price / item | Profit % (locked) |
| **Set profit by %** | Target profit % | Sell price / item (locked) |

Switch any time — values carry across, nothing resets.

### The two bases

| Basis | "20%" means | Formula |
|---|---|---|
| **Markup on cost (ROI)** | 20% of what you paid | `sell = cost × 1.20 / 0.95` |
| **Margin on sale** | 20% of gross sale | `sell = cost / (0.95 − 0.20)` |

Margin is capped at **95%** — the 5% tax makes anything above that mathematically unreachable.

> Full math, worked examples, and common pitfalls are in the [**Guidebook**](Guide.md).

---

## 🧮 Quick example

**Buy:** `$20,000` × 10 · **Target:** 20% ROI

- Total cost: `$200,000`
- Required sell price: **`$25,263.16`** each
- Gross sale: `$252,631.58`
- Sales tax (5%): `−$12,631.58`
- Net revenue: `$240,000.00`
- **Profit: `$40,000.00`** = exactly 20% of cost ✅

Any lower and you miss the target. Any higher and you're leaving money on the table.

---

## 🛠 Tech stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, grid, `:has()`, `clip-path`
- **Vanilla JavaScript** — no framework, no bundler, no build step
- **Google Fonts** — *Staatliches* (display) + *Barlow Condensed* (body)

**Total size:** one file, ~30 KB. That's the entire project.

---

## 📁 Repository structure

```
.
├── index.html            # the entire calculator
├── README.md             # this file
├── Guide.md              # user guidebook (features, math, examples)
├── CONTRIBUTING.md       # contribution workflow
├── CODE_OF_CONDUCT.md    # community standards
└── LICENSE               # MIT
```

---

## 🤝 Contributing

Contributions are welcome! Bug reports, feature ideas, UI tweaks, typo fixes — all appreciated.

- Read [**CONTRIBUTING.md**](CONTRIBUTING.md) for the workflow and code style
- Follow the [**Code of Conduct**](CODE_OF_CONDUCT.md)
- Open an issue first for anything large

The whole project is one HTML file — fork it and go.

---

## 🐛 Reporting bugs

If a number looks wrong, include:

1. Your exact **field values** (buy, qty, fees, sell, %)
2. Which **mode** and **basis** you had selected
3. What the calculator showed
4. What you calculated by hand

That lets us verify against the formulas in the [**Guide**](Guide.md) §8 directly.

---

## 💚 Support future works

This project is free, open source, and MIT-licensed — no paywalls, no ads, no tracking. If it saved you time or money, you can buy me a coffee via Cash App:

<div align="center">

### [💚 Donate via Cash App →](https://cash.app/$SethKhaneki)

`$SethKhaneki`

</div>

Donations are **completely optional** — the calculator stays free forever regardless. They just help fund future Torn tools, guidebooks, and open-source projects.

---

## 📜 License

Licensed under the [**MIT License**](LICENSE).

Copyright © 2026 [S3THCOD3R](https://github.com/S3THCOD3R).

You're free to use, modify, and redistribute this code — just keep the copyright notice. See [LICENSE](LICENSE) for the full text.

---

<div align="center">

**Built for the Torn community. Happy flipping.** 🩸

*Not affiliated with Torn City or its developers.*

</div>
