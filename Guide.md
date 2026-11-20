<div align="center">

# 📖 Torn Item Market Profit Calculator — Guidebook

**A field manual for the calculator.** Every control explained, every formula shown, every gotcha covered — so you can trust the numbers.

[**← Back to README**](README.md) · [**Contributing**](CONTRIBUTING.md) · [**License**](LICENSE)

</div>

---

## Table of contents

1. [What this tool does](#1-what-this-tool-does)
2. [The 5% sales tax (read this first)](#2-the-5-sales-tax-read-this-first)
3. [The two modes](#3-the-two-modes)
4. [The two profit bases](#4-the-two-profit-bases)
5. [Field-by-field reference](#5-field-by-field-reference)
6. [Reading the results panel](#6-reading-the-results-panel)
7. [Worked examples](#7-worked-examples)
8. [The math](#8-the-math)
9. [Common mistakes & gotchas](#9-common-mistakes--gotchas)
10. [FAQ](#10-faq)

---

## 1. What this tool does

You buy items — from the item market, a bazaar, a player trade, wherever — then resell them on the **Torn item market**. The market charges a **5% sales tax** on every sale. This calculator tells you:

- **If you know your sell price** → how much profit you actually make, your ROI, your margin, and the lowest price you can sell at without losing money.
- **If you know your target profit %** → the exact sell price per item you need to list at (tax included).

It works for single items and for bulk stacks (e.g. 10× Xanax).

---

## 2. The 5% sales tax (read this first)

**The tax is applied to the sale price, not to your profit.**

If you list an item at `$25,000`, the market takes `$1,250` (5%). You receive `$23,750`.

That means your break-even sell price is **not** your buy price — it's higher, because the tax eats into the sale. To break even on a `$20,000` item you must sell at:

```
$20,000 ÷ 0.95 = $21,052.63
```

The calculator handles this automatically. But if you're doing napkin math, remember: **every sale loses 5% before it reaches you.**

> **On the "Round tax down per item" checkbox:** this is a *display-only* toggle. Torn may round the 5% tax down per individual item in some contexts. Turning it on shows tax as `floor(sell × 0.05) × qty` instead of `gross × 0.05`. It only changes the reported tax/profit — the sell-price solver always uses continuous 5%.

---

## 3. The two modes

Toggle between them at the top under **Mode**.

### 🔓 "Enter sell price" mode

You know what you want to list at. The calculator tells you the profit.

- ✅ **Sell price / item** — editable, you type here
- 🔒 **Profit %** — locked, auto-computed from your sell price

Use this when you're browsing the market and want to sanity-check whether a listing is worth flipping.

### 🎯 "Set profit by %" mode

You know how much profit you want. The calculator tells you the sell price.

- 🔒 **Sell price / item** — locked, auto-computed from your target %
- ✅ **Profit %** — editable, you type here

Use this when you're planning a flip ("I want 20% ROI on this Xanax stack — what do I list at?").

**A locked field has a dashed red border and a `LOCKED` badge next to its label.** Switch modes any time — the calculator carries the current value across so nothing jumps or resets.

---

## 4. The two profit bases

Toggle under **Profit % basis**. This decides what "20%" *means*.

### Markup on cost (ROI)

> Profit as a percentage of **what you paid**.

- Cost = `$200,000`
- Profit = `$40,000`
- ROI = **20%**

This is the standard "return on investment" reading. It's what most traders mean when they say "I make 20%."

### Margin on sale

> Profit as a percentage of the **gross sale amount**.

- Gross sale = `$252,631.58`
- Profit = `$40,000`
- Margin = **15.83%**

This is how retailers think ("my margin is X% of revenue"). It's always **lower than the equivalent ROI** for the same trade.

**⚠️ Margin is capped at 95%.** Because the tax already takes 5%, no sale can ever produce a 95%+ margin — the calculator shows a warning instead of a fake number.

**Rule of thumb:** if you're not sure which to use, pick **Markup on cost (ROI)**. It's what "profit %" almost always means in Torn trading.

---

## 5. Field-by-field reference

| Field | What it does | Notes |
|---|---|---|
| **Item name** | Cosmetic label in the results panel | Doesn't affect math — just for readability |
| **Buy price / item** | What you paid per unit | Enter `0` if the item was free (e.g. found) |
| **Quantity** | How many units you're flipping | Must be ≥ 1; drives all bulk math |
| **Sell price / item** | Your listing price per unit | Editable in *Enter sell price* mode; locked in *%* mode |
| **Profit %** | Target profit (as ROI or margin) | Editable in *%* mode; locked in *sell* mode |
| **Extra fees / costs** | Any other cost added to total | e.g. travel, bazaar fees, courier — anything you want to net out |
| **Round tax down per item** | Display-only tax rounding | See §2 |

**Total cost** = `buy price × quantity + extra fees`. The calculator shows this on the results panel so you always know what it's using.

---

## 6. Reading the results panel

The results card always shows the same rows, top to bottom:

```
┌─────────────────────────────────────────────┐
│  ITEM NAME              [ TARGET or SELL ]  │  ← context tag
│  +$40,000.00                                │  ← headline profit
│  Sell at $25,263.16 each · Qty 10           │  ← one-line summary
├─────────────────────────────────────────────┤
│  Gross sale             $252,631.58         │
│  Sales tax (5%)         −$12,631.58         │
│  Net revenue            $240,000.00         │
│  Total cost             −$200,000.00        │
├─────────────────────────────────────────────┤
│  Profit / item          $4,000.00           │
│  ROI on cost            20.00%              │
│  Margin on sale         15.83%              │
├─────────────────────────────────────────────┤
│  Break-even sell price  $21,052.63          │
└─────────────────────────────────────────────┘
```

**What each row means:**

- **Gross sale** — `sell price × qty`, before tax
- **Sales tax (5%)** — what Torn takes
- **Net revenue** — what lands in your wallet
- **Total cost** — `buy × qty + extra fees`
- **Profit / item** — the headline profit split per unit (useful when comparing to per-item market prices)
- **ROI on cost** — profit ÷ cost (always shown, even in margin mode)
- **Margin on sale** — profit ÷ gross sale (always shown, even in markup mode)
- **Break-even sell price** — the lowest per-item price that produces zero loss after tax

The headline profit is **green** if you're up and **red** if you're down, with a `+`/`−` sign so there's no ambiguity.

---

## 7. Worked examples

### Example A — "Is this flip worth it?" (sell price mode)

You see Xanax on the market at `$20,000`. You want to resell at `$25,000` and you're buying 10.

1. Mode: **Enter sell price**
2. Buy: `20000`, Qty: `10`, Sell: `25000`, Fees: `0`

**Result:**
- Gross: `$250,000`
- Tax: `$12,500`
- Net: `$237,500`
- Cost: `$200,000`
- **Profit: `$37,500`**
- ROI: **18.75%**
- Margin: **15.00%**
- Break-even: `$21,052.63`

✅ Positive and above break-even — good flip.

---

### Example B — "I want 20% ROI, what do I list at?" (% mode)

Same buy — `$20,000` × 10 — but this time you want a guaranteed **20% ROI**.

1. Mode: **Set profit by %**
2. Basis: **Markup on cost**
3. Buy: `20000`, Qty: `10`, Profit %: `20`

**Result:**
- **Sell price (locked): `$25,263.16`**
- Profit: `$40,000` — exactly 20% of your `$200,000` cost ✅

Any lower and you miss your target. Any higher and you're leaving money on the table (or pricing above the market).

---

### Example C — "Include travel costs"

You're paying `$50,000` in travel + misc to complete the trade. Buy is `$20,000 × 10`.

1. Buy: `20000`, Qty: `10`, Fees: `50000`
2. Mode: **Set profit by %**, target: `20`

Total cost = `$200,000 + $50,000 = $250,000`.

**Result:**
- Sell price (locked): `$31,578.95`
- Profit: `$50,000` = 20% of `$250,000` ✅

Notice the required sell price **jumped** — fees eat into profit, so you must list higher to hit the same ROI.

---

### Example D — "What's my floor?"

You don't care about % — you just want to know the lowest price you can list without losing money.

Look at **Break-even sell price** in the results. For a `$20,000` buy, it's `$21,052.63`. Anything below that and you lose money after tax. Anything exactly at that and you profit `$0`.

---

## 8. The math

If you want to verify the calculator or build your own, here are the exact formulas.

**Definitions:**
- `C` = total cost = `buy × qty + fees`
- `S` = gross sale = `sell × qty`
- `tax rate` = `0.05`

**Profit:**
```
profit = S × (1 − 0.05) − C
```

**ROI on cost:**
```
ROI = profit / C × 100
```

**Margin on sale:**
```
margin = profit / S × 100
```

**Break-even sell price per item:**
```
break_even = C / (qty × 0.95)
```

**Solve sell price from target ROI (`p` as decimal):**
```
S = C × (1 + p) / 0.95
sell = S / qty
```

**Solve sell price from target margin (`p` as decimal, `p < 0.95`):**
```
S = C / (0.95 − p)
sell = S / qty
```

The `0.95 − p` denominator is why **margin is capped at 95%** — at `p = 0.95` the denominator hits zero, and above it the equation has no solution (you'd need infinite gross sale).

---

## 9. Common mistakes & gotchas

**❌ "I forgot about the 5% tax."**
The single biggest error. If you buy at `$20,000` and sell at `$21,000` thinking you made `$1,000`, you actually lost money — the market took `$1,050` and you netted `−$50`.

**❌ "I used margin when I meant ROI."**
If you set "20%" and your result feels low, check the basis toggle. 20% margin ≈ 23.5% ROI on the same trade.

**❌ "I forgot extra fees."**
Travel, courier fees, refunds, whatever you spend getting the items — put it in **Extra fees**. If you leave it blank the calculator assumes `$0`.

**❌ "Quantity was 1 but I have a stack of 100."**
The headline profit is for the **whole stack**, not one item. The **Profit / item** row tells you per-unit.

**❌ "I set margin to 96% and it says unreachable."**
That's correct. 95% is the ceiling. Lower the target.

**❌ "Locked field won't let me type."**
That's intentional. Switch modes to unlock it. See §3.

---

## 10. FAQ

**Q: Does the calculator account for Torn's actual rounding rules?**
A: The sell-price solver uses continuous 5% (no rounding), which matches Torn's official tax formula. The **Round tax down per item** checkbox is cosmetic — it only affects the displayed tax in the results panel.

**Q: Can I use this for bazaar sales?**
A: Bazaar has **no 5% tax** — this calculator always applies it. If you're selling via bazaar, use the **Break-even** number as a safe floor but expect more profit than shown.

**Q: What if buy price is 0?**
A: The calculator handles it. ROI will show `0%` (you can't divide by zero cost), but profit, margin, and break-even still work correctly.

**Q: What if my margin target hits exactly 95%?**
A: The result is `Infinity` — mathematically unreachable. The calculator shows a warning instead. Stay below 95%.

**Q: Can I use fractions of an item?**
A: Quantity is always rounded down to the nearest integer (`Math.floor`). Torn items come in whole units.

**Q: Does it save my values when I close the tab?**
A: No. Every reload starts fresh. (Could be added later — localStorage would be the move.)

**Q: Can I use decimals in the sell price?**
A: Yes — the sell field accepts `0.01` precision. Buy price and quantity round to whole numbers.

**Q: Is there an API?**
A: No, it's a fully client-side single HTML file. No network calls, no tracking, works offline.

**Q: Why is my margin so much lower than my ROI?**
A: Because they use different denominators. ROI compares profit to **cost**; margin compares profit to **gross sale**. Since gross sale is always bigger than cost, the same profit produces a smaller percentage. See §4.

**Q: Can I use this for items I got for free?**
A: Yes — set buy price to `0`. Your cost is just the extra fees, and profit/margin/break-even all work correctly. ROI will show `0%` since there's no cost to compare against.

---

<div align="center">

**Need more?**

[Source code](https://github.com/S3THCOD3R) · [Report a bug](https://github.com/S3THCOD3R) · [Contribute](CONTRIBUTING.md)

*Happy flipping.* 🩸

</div>
