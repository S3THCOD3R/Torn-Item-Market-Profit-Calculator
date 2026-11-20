<div align="center">

# 🩸 FIELD MANUAL 🩸

### TORN ITEM MARKET · PROFIT CALCULATOR

`[ OPERATION BRIEF • COMBAT MATH • THREAT REPORT ]`

**Everything you need to run the calculator like a pro — every control, every formula, every trap.**

[**← BACK TO BRIEFING**](README.md) · [**🛡️ ENLIST**](CONTRIBUTING.md) · [**📜 ARMISTICE**](LICENSE)

</div>

---

## 📖 TABLE OF INTEL

1. [What this tool does](#1-what-this-tool-does)
2. [The 5% tax — read this or lose money](#2-the-5-tax--read-this-or-lose-money)
3. [The two strike modes](#3-the-two-strike-modes)
4. [The two profit bases](#4-the-two-profit-bases)
5. [Control panel reference](#5-control-panel-reference)
6. [Reading the results console](#6-reading-the-results-console)
7. [Field reports — worked examples](#7-field-reports--worked-examples)
8. [Combat math — the formulas](#8-combat-math--the-formulas)
9. [Threat report — common kills](#9-threat-report--common-kills)
10. [Comms — FAQ](#10-comms--faq)

---

## 1. What this tool does

You buy items — from the market, a bazaar, a player trade, wherever — then resell on the **Torn item market**. The market takes a **5% sales tax** on every sale. This calculator tells you:

- **If you already know your sell price** → what you actually walk away with: profit, ROI, margin, and your absolute floor before the deal goes underwater.
- **If you know your target profit %** → the exact per-item listing price you need, tax already baked in.

It works for single items and for bulk stacks (e.g. 10× Xanax).

---

## 2. The 5% tax — read this or lose money

**The tax hits the sale price, not your profit.** Every sale loses 5% before it reaches your wallet.

> **FIELD NOTE:** List an item at `$25,000`. The market takes `$1,250`. You receive `$23,750`. That's the line.

Which means break-even is **not** your buy price:

```
break-even = buy price ÷ 0.95
$20,000 ÷ 0.95 = $21,052.63
```

The calculator handles it automatically. But if you're doing napkin math, remember: **5% vanishes on every kill.**

> **💀 THREAT REPORT — the "Round tax down per item" checkbox:** this is *display-only*. Torn may floor the 5% tax per individual item in some contexts. Turning it on shows tax as `floor(sell × 0.05) × qty` instead of `gross × 0.05`. It only changes the *reported* tax/profit — the sell-price solver always uses continuous 5%.

---

## 3. The two strike modes

Toggle at the top under **Mode**.

### 🔓 "Enter sell price" — you know the strike price

- ✅ **Sell price / item** — editable, you type here
- 🔒 **Profit %** — locked, solved from your sell price

Use this when you're scanning the market and want to know whether a listing is worth taking.

### 🎯 "Set profit by %" — you know the take

- 🔒 **Sell price / item** — locked, solved from your target %
- ✅ **Profit %** — editable, you type here

Use this when you're planning a hit ("I want 20% ROI on this Xanax stack — what do I list at?").

> **FIELD NOTE:** A locked field has a **dashed red border** and a `LOCKED` badge next to its label. Switch modes any time — values carry across, nothing resets.

---

## 4. The two profit bases

Toggle under **Profit % basis**. This decides what "20%" *actually means*.

### 📊 Markup on cost (ROI)

> Profit as a percentage of **what you paid**.

- Cost = `$200,000`
- Profit = `$40,000`
- ROI = **20%**

This is the standard "return on investment" reading. **Most traders mean this.**

### 📊 Margin on sale

> Profit as a percentage of the **gross sale**.

- Gross sale = `$252,631.58`
- Profit = `$40,000`
- Margin = **15.83%**

This is how retailers think ("my margin is X% of revenue"). It's **always lower** than the equivalent ROI for the same trade.

> **💀 THREAT REPORT:** Margin is **hard-capped at 95%**. Because the tax already takes 5%, no sale can ever produce a 95%+ margin — the calculator shows a warning instead of a fake number.

> **🩸 RULE OF THUMB:** If you're not sure which to use, pick **Markup on cost (ROI)**. It's what "profit %" almost always means in Torn trading.

---

## 5. Control panel reference

| CONTROL | FUNCTION | NOTES |
|---|---|---|
| **Item name** | Cosmetic label on the results console | Doesn't affect math — readability only |
| **Buy price / item** | What you paid per unit | Enter `0` for free pickups |
| **Quantity** | Units being flipped | Must be ≥ 1; drives bulk math |
| **Sell price / item** | Your listing price per unit | Live in *Enter sell price* mode; locked in *%* mode |
| **Profit %** | Target profit (ROI or margin) | Live in *%* mode; locked in *sell* mode |
| **Extra fees / costs** | Any other cost added to total | Travel, bazaar fees, courier — anything to net out |
| **Round tax down per item** | Display-only tax rounding | See §2 |

**Total cost** = `buy × quantity + extra fees`. The results console shows this on every run — you always know what it's using.

---

## 6. Reading the results console

```
┌─────────────────────────────────────────────┐
│  ITEM NAME              [ TARGET or SELL ]  │  ← context tag
│  +$40,000.00                                │  ← headline take
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

**Every row, decoded:**

- **Gross sale** — `sell price × qty`, before tax
- **Sales tax (5%)** — what Torn takes
- **Net revenue** — what lands in your wallet
- **Total cost** — `buy × qty + extra fees`
- **Profit / item** — the headline take per unit
- **ROI on cost** — profit ÷ cost *(always shown, even in margin mode)*
- **Margin on sale** — profit ÷ gross sale *(always shown, even in markup mode)*
- **Break-even sell price** — lowest per-item price that survives the tax

The headline take is **green** if you're up, **red** if you're down, with a `+`/`−` sign so there's no ambiguity.

---

## 7. Field reports — worked examples

### 🩸 FIELD REPORT A — "Is this flip worth it?" *(sell price mode)*

Xanax on market at `$20,000`. Resell at `$25,000`. Buying 10.

1. Mode: **Enter sell price**
2. Buy: `20000`, Qty: `10`, Sell: `25000`, Fees: `0`

**Intel:**
- Gross: `$250,000`
- Tax: `$12,500`
- Net: `$237,500`
- Cost: `$200,000`
- **Profit: `$37,500`**
- ROI: **18.75%**
- Margin: **15.00%**
- Break-even: `$21,052.63`

✅ Positive and above break-even — good hit.

---

### 🩸 FIELD REPORT B — "I want 20% ROI. What do I list at?" *(% mode)*

Same buy — `$20,000` × 10 — but you want a hard **20% ROI**.

1. Mode: **Set profit by %**
2. Basis: **Markup on cost**
3. Buy: `20000`, Qty: `10`, Profit %: `20`

**Intel:**
- **Sell price (locked): `$25,263.16`**
- Profit: `$40,000` — exactly 20% of your `$200,000` cost ✅

Any lower → miss the target. Any higher → leave money on the table.

---

### 🩸 FIELD REPORT C — "Include travel costs"

You're paying `$50,000` in travel + misc. Buy is `$20,000 × 10`.

1. Buy: `20000`, Qty: `10`, Fees: `50000`
2. Mode: **Set profit by %**, target: `20`

Total cost = `$200,000 + $50,000 = $250,000`.

**Intel:**
- Sell price (locked): `$31,578.95`
- Profit: `$50,000` = 20% of `$250,000` ✅

> **FIELD NOTE:** Notice the required sell price **jumped**. Fees eat into profit — you must list higher to hit the same ROI.

---

### 🩸 FIELD REPORT D — "What's my floor?"

You don't care about %. You just want the lowest safe listing.

Check **Break-even sell price**. For a `$20,000` buy: `$21,052.63`. Anything below → loss. At exactly that → `$0` profit.

---

## 8. Combat math — the formulas

Want to verify the calculator or build your own? Here's the exact math.

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

> **💀 THREAT REPORT:** The `0.95 − p` denominator is why **margin caps at 95%** — at `p = 0.95` the denominator hits zero, and above it there's no solution (you'd need infinite gross sale).

---

## 9. Threat report — common kills

**❌ "I forgot the 5% tax."**
The #1 killer. Buy at `$20,000`, sell at `$21,000` thinking you made `$1,000`? You actually **lost money** — the market took `$1,050` and you netted `−$50`.

**❌ "I used margin when I meant ROI."**
If your "20%" result feels weak, check the basis toggle. 20% margin ≈ 23.5% ROI on the same trade.

**❌ "I forgot extra fees."**
Travel, courier, refunds — drop them into **Extra fees**. Blank = `$0` assumed.

**❌ "Quantity was 1, but I have a stack of 100."**
The headline take is for the **whole stack**, not one item. The **Profit / item** row tells you per-unit.

**❌ "I set margin to 96% and it says unreachable."**
Correct. 95% is the ceiling. Lower the target.

**❌ "Locked field won't let me type."**
That's intentional. Switch modes to unlock it. See §3.

---

## 10. Comms — FAQ

**Q: Does the calculator handle Torn's rounding rules?**
A: The sell-price solver uses continuous 5% (no rounding), matching Torn's official tax formula. The **Round tax down per item** checkbox is cosmetic — it only affects the displayed tax.

**Q: Can I use this for bazaar sales?**
A: Bazaar has **no 5% tax** — this calculator always applies it. If selling via bazaar, use **Break-even** as a safe floor but expect more profit than shown.

**Q: What if buy price is 0?**
A: Handled. ROI shows `0%` (can't divide by zero cost), but profit, margin, and break-even all work.

**Q: What if my margin target hits exactly 95%?**
A: `Infinity` — mathematically unreachable. Calculator shows a warning. Stay below 95%.

**Q: Can I use fractions of an item?**
A: Quantity floors to the nearest integer (`Math.floor`). Torn items are whole units.

**Q: Does it save my values when I close the tab?**
A: No. Every reload starts fresh.

**Q: Can I use decimals in the sell price?**
A: Yes — `0.01` precision. Buy price and quantity round to whole numbers.

**Q: Is there an API?**
A: No. Fully client-side single HTML file. No calls, no tracking, works offline.

**Q: Why is my margin so much lower than my ROI?**
A: Different denominators. ROI compares profit to **cost**; margin compares profit to **gross sale**. Gross sale is bigger → smaller percentage. See §4.

**Q: Can I use this for items I got for free?**
A: Yes — set buy price to `0`. ROI shows `0%`, but everything else works correctly.

---

<div align="center">

**Need more?**

[Source](https://github.com/S3THCOD3R) · [Report a kill](https://github.com/S3THCOD3R) · [Enlist](CONTRIBUTING.md)

*Happy hunting.* 🩸

</div>
