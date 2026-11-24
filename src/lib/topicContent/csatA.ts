import { TopicContentPackage } from './types';

export const CSAT_PART_A: TopicContentPackage[] = [
  {
    topicTitle: 'Number System, HCF-LCM, Simplification & Averages',
    materialTitle: 'CSAT Arithmetic Foundations: Numbers, HCF-LCM, BODMAS & Averages — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Number System, Divisibility, HCF-LCM & Averages',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Number System, HCF-LCM, Simplification & Averages

## 1. Number Classification & Divisibility Tests
- **Prime Numbers:** Divisible only by 1 and itself (\`2\` is the ONLY even prime; \`1\` is neither prime nor composite; there are **25 primes between 1 and 100** and **15 between 1 and 50**).
- **Quick Divisibility Tests:**
  - **By 3 / 9:** Sum of digits divisible by 3 / 9.
  - **By 4 / 8:** Last **2 digits** divisible by 4 / last **3 digits** divisible by 8.
  - **By 11:** Difference between sum of odd-place digits and even-place digits is \`0\` or multiple of \`11\`.
- **Unit Digit Cyclicity:**
  - \`0, 1, 5, 6\` -> Always repeat the same unit digit!
  - \`4, 9\` -> Cycle of 2 (\`4^odd = 4, 4^even = 6\`; \`9^odd = 9, 9^even = 1\`).
  - \`2, 3, 7, 8\` -> Cycle of 4 (divide exponent by 4; remainder \`0\` corresponds to power \`4\`).

## 2. HCF & LCM Identities
- **Fundamental Product:** For two positive integers $a$ and $b$: $\\text{HCF}(a,b) \\times \\text{LCM}(a,b) = a \\times b$.
- **Fractions:**
  - $\\text{LCM of Fractions} = \\frac{\\text{LCM(Numerators)}}{\\text{HCF(Denominators)}}$
  - $\\text{HCF of Fractions} = \\frac{\\text{HCF(Numerators)}}{\\text{LCM(Denominators)}}$
- **Remainder Models:**
  - Greatest number dividing $x, y, z$ leaving remainders $r_1, r_2, r_3$: $\\text{HCF}(x-r_1, y-r_2, z-r_3)$.
  - Greatest number leaving the **same** remainder: $\\text{HCF}(|x-y|, |y-z|, |z-x|)$.
  - Least number leaving common remainder $r$ when divided by $x, y, z$: $\\text{LCM}(x,y,z) + r$.

## 3. Simplification (VBODMAS) & Averages
- **VBODMAS:** Vinculum (bar) -> Brackets -> Of -> Division -> Multiplication -> Addition -> Subtraction.
- **Sum Shortcuts:**
  - First $n$ natural numbers: $\\frac{n(n+1)}{2}$ (Average = $\\frac{n+1}{2}$).
  - First $n$ odd numbers: Sum = $n^2$ (Average = $n$).
  - Squares: $\\frac{n(n+1)(2n+1)}{6}$.
- **Average Speed over Equal Distances** ($x$ and $y$ km/h): Harmonic Mean = $\\frac{2xy}{x+y}$ (NEVER $\\frac{x+y}{2}$!).
- **Replacement Rule:** When 1 person leaves and a new person joins changing average of $N$ items by $\\Delta$: $\\text{New} = \\text{Old} + N \\cdot \\Delta$.

## 4. Key Revision Takeaways
- **25 primes up to 100**; **2 is the smallest even prime**; **\`1\` is neither prime nor composite**.
- Equal-distance round-trip average speed is always $\\frac{2xy}{x+y}$.`,
    mcqs: [
      {
        stem: 'How many **prime numbers** exist strictly between **1 and 100**, and what is the **only even prime number**?',
        options: [
          '24 primes; 1 is the smallest prime',
          '25 primes; 2 is the only even prime',
          '26 primes; 2 is composite',
          '21 primes; 4 is even prime',
        ],
        correctOptionIndex: 1,
        explanation: 'There are exactly 25 primes from 1 to 100 (starting with 2, 3, 5, 7... up to 97); 1 is neither prime nor composite, and 2 is the unique even prime.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the **unit digit** of the expression $7^{105} + 3^{64}$?',
        options: ['2', '8', '0', '4'],
        correctOptionIndex: 1,
        explanation: '105 mod 4 = 1, so $7^{105}$ ends like $7^1 = 7$. 64 mod 4 = 0, so $3^{64}$ ends like $3^4 = 81 \\rightarrow 1$. Unit digit = $7 + 1 = 8$.',
        difficulty: 'standard',
      },
      {
        stem: 'The **HCF and LCM** of two numbers are **12 and 336** respectively. If one of the numbers is **84**, what is the other number?',
        options: ['36', '48', '72', '96'],
        correctOptionIndex: 1,
        explanation: 'Second number = $(\\text{HCF} \\times \\text{LCM}) / \\text{First} = (12 \\times 336) / 84 = 336 / 7 = 48$.',
        difficulty: 'foundation',
      },
      {
        stem: 'If the 7-digit number **`5432*7`** (i.e. `5432_7` 6-digit) is **completely divisible by 9**, what single digit must replace `*`?',
        options: ['1', '6', '5', '9'],
        correctOptionIndex: 1,
        explanation: 'Digit sum = $5 + 4 + 3 + 2 + * + 7 = 21 + *$. Next multiple of 9 after 21 is 27, so $* = 27 - 21 = 6$.',
        difficulty: 'foundation',
      },
      {
        stem: 'Find the **LCM** of the three fractions: $\\frac{2}{3}, \\frac{4}{9}, \\frac{5}{6}$.',
        options: [
          '$\\frac{1}{18}$',
          '$\\frac{20}{3}$',
          '$\\frac{10}{3}$',
          '$\\frac{40}{9}$',
        ],
        correctOptionIndex: 1,
        explanation: '$\\text{LCM of fractions} = \\frac{\\text{LCM}(2,4,5)}{\\text{HCF}(3,9,6)} = \\frac{20}{3}$.',
        difficulty: 'standard',
      },
      {
        stem: 'A bus climbs from Rishikesh to Devprayag at **30 km/h** and returns over the exact same road at **60 km/h**. What is its **average speed** for the entire round trip?',
        options: ['45 km/h', '40 km/h', '42 km/h', '50 km/h'],
        correctOptionIndex: 1,
        explanation: 'Equal distances yield Harmonic Mean: $\\frac{2 \\times 30 \\times 60}{30 + 60} = \\frac{3600}{90} = 40$ km/h.',
        difficulty: 'foundation',
      },
      {
        stem: 'Find the **least positive number** which when divided separately by **12, 15, 20, and 54** leaves a remainder of **8** in each case.',
        options: ['532', '548', '540', '1088'],
        correctOptionIndex: 1,
        explanation: '$\\text{LCM}(12, 15, 20, 54) = 540$. Adding common remainder 8 gives $540 + 8 = 548$.',
        difficulty: 'foundation',
      },
      {
        stem: 'The **average weight of 8 candidates** increases by **2.5 kg** when a new candidate replaces one weighing **65 kg**. What is the weight of the new candidate?',
        options: ['75 kg', '85 kg', '80 kg', '90 kg'],
        correctOptionIndex: 1,
        explanation: 'Total increase = $8 \\times 2.5 = 20$ kg. Therefore new weight = $65 + 20 = 85$ kg.',
        difficulty: 'foundation',
      },
      {
        stem: 'Four temple bells at Bageshwar toll at intervals of **6, 8, 12, and 18 seconds**. If they toll together at **6:00:00 AM**, after how many minutes will they next toll together simultaneously?',
        options: ['1 minute', '1 minute 12 seconds (72 seconds)', '2 minutes', '3 minutes'],
        correctOptionIndex: 1,
        explanation: '$\\text{LCM}(6, 8, 12, 18) = 72$ seconds = 1 minute 12 seconds.',
        difficulty: 'foundation',
      },
      {
        stem: 'If **`78*3945`** is completely divisible by **11**, what single digit replaces **`*`**?',
        options: ['1', '4', '5', '0'],
        correctOptionIndex: 2,
        explanation: 'Odd positions from right: $5 + 9 + * + 7 = 21 + *$; even positions: $4 + 3 + 8 = 15$. Difference = $(21 + *) - 15 = 6 + *$, which equals 11 when $* = 5$.',
        difficulty: 'standard',
      },
      {
        stem: 'Evaluate cleanly using **VBODMAS**: $48 \\div 12 \\times (\\frac{9}{8} \\text{ of } \\frac{4}{3} \\div \\frac{3}{4} \\text{ of } \\frac{2}{3})$.',
        options: ['4', '12', '8', '16'],
        correctOptionIndex: 1,
        explanation: 'Inside brackets: $(\\frac{9}{8}\\times\\frac{4}{3}) = \\frac{3}{2}$; $(\\frac{3}{4}\\times\\frac{2}{3}) = \\frac{1}{2}$. Division: $\\frac{3}{2} \\div \\frac{1}{2} = 3$. Outside: $(48 \\div 12) \\times 3 = 4 \\times 3 = 12$.',
        difficulty: 'standard',
      },
      {
        stem: 'What is the **average of the first 25 odd natural numbers** ($1, 3, 5, \\dots, 49$)?',
        options: ['12.5', '25', '26', '50'],
        correctOptionIndex: 1,
        explanation: 'The sum of the first $n$ odd natural numbers is $n^2$, so their average is $n^2 / n = n = 25$.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the **greatest number** that will divide **43, 91, and 183** leaving the **exact same remainder** in every case?',
        options: ['2', '4', '8', '13'],
        correctOptionIndex: 1,
        explanation: 'Pairwise differences: $91 - 43 = 48$; $183 - 91 = 92$; $183 - 43 = 140$. $\\text{HCF}(48, 92, 140) = 4$.',
        difficulty: 'standard',
      },
      {
        stem: 'The **average of 11 results** is **60**. If the average of the **first 6** results is **58** and that of the **last 6** is **63**, find the **6th result**.',
        options: ['54', '66', '62', '70'],
        correctOptionIndex: 1,
        explanation: 'Sum of 11 = $11 \\times 60 = 660$. Sum of first 6 + last 6 = $6(58) + 6(63) = 348 + 378 = 726$. Overlap (6th result) = $726 - 660 = 66$.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which one of the following numbers is a **perfect square** whose **unit digit** could occur for an integer squared?',
        options: [
          '15282 (ends in 2)',
          '24025 (ends in 5 — and preceding two digits 20 -> $155^2$)',
          '38973 (ends in 3)',
          '49208 (ends in 8)',
        ],
        correctOptionIndex: 1,
        explanation: 'No perfect square in base 10 can ever end in 2, 3, 7, or 8; $155^2 = 24025$.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Percentages, Profit-Loss, Simple/Compound Interest & Time-Work',
    materialTitle: 'Commercial Arithmetic: Percentage, Profit-Loss, Interest & Time-Work — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Percentages, Profit-Loss, CI/SI & Time-Work',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Percentages, Profit-Loss, Simple/Compound Interest & Time-Work

## 1. Percentage & Successive Change Formulas
- **Fraction Equivalents:** $12.5\\% = \\frac{1}{8}$; $16\\frac{2}{3}\\% = \\frac{1}{6}$; $14\\frac{2}{7}\\% = \\frac{1}{7}$; $37.5\\% = \\frac{3}{8}$.
- **Price–Consumption Invariance:** If price rises by $R\\%$, consumption reduction needed to keep expenditure unchanged = $\\frac{R}{100+R} \\times 100\\%$.
- **Successive Percentage Change ($a\\%, b\\%$):** Net % = $a + b + \\frac{ab}{100}$.
  - *Equal $+x\\%$ and $-x\\%$:* Always results in a **net loss of $\\frac{x^2}{100}\\%$**!

## 2. Profit, Loss & Discount
- **Gain/Loss %** is ALWAYS calculated on **Cost Price (CP)** unless specified on SP.
- **Discount %** is ALWAYS calculated on **Marked Price (MP)**.
- **MP–CP Link:** $\\frac{\\text{CP}}{\\text{MP}} = \\frac{100 - \\text{Discount}\\%}{100 + \\text{Profit}\\%}$.
- **Two articles sold at the SAME SP**, one at $+x\\%$ profit and other at $-x\\%$ loss: Net overall **LOSS of $\\frac{x^2}{100}\\%$**!
- **False Weight:** $\\text{Gain}\\% = \\frac{\\text{Error}}{\\text{True Weight} - \\text{Error}} \\times 100$.

## 3. Simple Interest (SI) & Compound Interest (CI)
- $\\text{SI} = \\frac{P \\times R \\times T}{100}$; **CI Amount:** $A = P\\left(1 + \\frac{R}{100}\\right)^T$.
- **2-Year CI − SI Difference:** $\\text{CI}_2 - \\text{SI}_2 = P\\left(\\frac{R}{100}\\right)^2$.
- **3-Year CI − SI Difference:** $P\\left(\\frac{R}{100}\\right)^2 \\left(3 + \\frac{R}{100}\\right)$.
- **Half-Yearly Compounding:** Rate becomes $R/2$ and periods become $2T$.

## 4. Time & Work, Pipes & Time-Speed-Distance
- **Chain Rule:** $\\frac{M_1 D_1 H_1}{W_1} = \\frac{M_2 D_2 H_2}{W_2}$.
- **Combined Work:** If A finishes in $x$ days and B in $y$ days -> Together = $\\frac{xy}{x+y}$ days (best solved via **LCM Total Work** method!).
- **Trains & Relative Speed:** Same direction = $|v_1 - v_2|$; Opposite = $v_1 + v_2$. Convert km/h $\\rightarrow$ m/s by multiplying by $\\frac{5}{18}$.

## 5. Key Revision Takeaways
- **Same SP at $+x\\%$ and $-x\\%$** always gives **$\frac{x^2}{100}\\%$ Loss**.
- **2-Year $\\text{CI} - \\text{SI} = P(R/100)^2$**.`,
    mcqs: [
      {
        stem: 'A trader sells **two Himalayan woolen shawls at ₹2,400 each**, making a **20% profit** on the first and a **20% loss** on the second. What is his **net profit or loss percentage** on the whole transaction?',
        options: ['No profit, no loss', '4% loss', '4% profit', '2% loss'],
        correctOptionIndex: 1,
        explanation: 'When two items have identical Selling Price at $+x\\%$ and $-x\\%$ respectively, there is ALWAYS a net loss of $\\frac{x^2}{100}\\% = \\frac{400}{100} = 4\\%$.',
        difficulty: 'foundation',
      },
      {
        stem: 'If the price of cooking oil increases by **25%**, by what percentage must a household reduce its consumption so that total **monthly expenditure stays unchanged**?',
        options: ['25%', '20%', '16.67%', '15%'],
        correctOptionIndex: 1,
        explanation: 'Reduction % = $\\frac{25}{100+25} \\times 100 = \\frac{25}{125} \\times 100 = 20\\%$.',
        difficulty: 'foundation',
      },
      {
        stem: 'The difference between **Compound Interest (compounded annually) and Simple Interest** on a sum for **2 years at 10% per annum** is **₹65**. Find the **Principal sum**.',
        options: ['₹5,000', '₹6,500', '₹6,000', '₹7,500'],
        correctOptionIndex: 1,
        explanation: '$\\text{CI}_2 - \\text{SI}_2 = P(R/100)^2 \\Rightarrow 65 = P(10/100)^2 = P/100 \\Rightarrow P = ₹6,500$.',
        difficulty: 'foundation',
      },
      {
        stem: 'A shopkeeper marks his goods **25% above Cost Price** and offers a **12% discount** to customers. What is his **actual profit percentage**?',
        options: ['13%', '10%', '15%', '8%'],
        correctOptionIndex: 1,
        explanation: 'Net % = $+25 - 12 - \\frac{25 \\times 12}{100} = 13 - 3 = 10\\%$ profit.',
        difficulty: 'foundation',
      },
      {
        stem: '**A** can complete a road-repair job in **12 days** and **B** can complete it in **18 days**. If they work together on it, in how many days will the work finish?',
        options: ['7 days', '$7\\frac{1}{5}$ days (7.2 days)', '6.5 days', '8 days'],
        correctOptionIndex: 1,
        explanation: 'Total work = LCM(12,18) = 36 units. Daily rates: A = 3, B = 2 -> Combined = 5 units/day -> $36/5 = 7.2$ days.',
        difficulty: 'foundation',
      },
      {
        stem: 'A **150-metre long passenger train** running at **54 km/h** crosses a railway bridge in **30 seconds**. What is the **length of the bridge**?',
        options: ['250 m', '300 m', '350 m', '450 m'],
        correctOptionIndex: 1,
        explanation: 'Speed = $54 \\times \\frac{5}{18} = 15$ m/s. Distance covered in 30 s = $15 \\times 30 = 450$ m. Bridge length = $450 - 150 = 300$ m.',
        difficulty: 'foundation',
      },
      {
        stem: 'A dishonest grain merchant professes to sell rice at Cost Price, but uses a **900-gram weight instead of 1 kg (1000 g)**. What is his **gain percentage**?',
        options: ['10%', '$11\\frac{1}{9}\\%$', '9%', '12.5%'],
        correctOptionIndex: 1,
        explanation: '$\\text{Gain}\\% = \\frac{1000 - 900}{900} \\times 100 = \\frac{100}{9} = 11\\frac{1}{9}\\%$.',
        difficulty: 'standard',
      },
      {
        stem: 'At **Simple Interest**, a sum of money **doubles itself in 8 years**. In how many years will it become **4 times itself** at the same annual rate?',
        options: ['16 years', '24 years', '32 years', '20 years'],
        correctOptionIndex: 1,
        explanation: 'Doubling means Interest = $1P$ takes 8 years. Becoming $4P$ requires Interest = $3P$, taking $3 \\times 8 = 24$ years.',
        difficulty: 'foundation',
      },
      {
        stem: 'If **18 workers** working **6 hours a day** build a retaining wall in **20 days**, how many days will **15 workers** working **8 hours a day** take to build the same wall?',
        options: ['16 days', '18 days', '20 days', '24 days'],
        correctOptionIndex: 1,
        explanation: '$M_1 D_1 H_1 = M_2 D_2 H_2 \\Rightarrow 18 \\times 20 \\times 6 = 15 \\times D_2 \\times 8 \\Rightarrow D_2 = \\frac{2160}{120} = 18$ days.',
        difficulty: 'foundation',
      },
      {
        stem: 'The **Cost Price of 20 apples** equals the **Selling Price of 16 apples**. Find the **profit or loss percentage**.',
        options: ['20% profit', '25% profit', '20% loss', '25% loss'],
        correctOptionIndex: 1,
        explanation: '$20 \\cdot \\text{CP} = 16 \\cdot \\text{SP} \\Rightarrow \\frac{\\text{SP}}{\\text{CP}} = \\frac{20}{16} = \\frac{5}{4} \\Rightarrow$ Profit = $\\frac{1}{4} \\times 100 = 25\\%$.',
        difficulty: 'foundation',
      },
      {
        stem: 'Pipe A fills a village water tank in **10 hours**, while Pipe B fills it in **15 hours**. An outlet leak Pipe C empties the full tank in **30 hours**. If all three are opened together, when will the tank fill?',
        options: ['6 hours', '7.5 hours', '8 hours', '9 hours'],
        correctOptionIndex: 1,
        explanation: 'LCM(10,15,30) = 30 units. Net hourly fill = $3 + 2 - 1 = 4$ units/hr -> Time = $30 / 4 = 7.5$ hours.',
        difficulty: 'standard',
      },
      {
        stem: 'In a competitive exam, a student scored **32%** marks and failed by **16 marks**, while another scored **38%** and obtained **8 marks above the pass threshold**. What are the **maximum marks**?',
        options: ['300', '400', '500', '600'],
        correctOptionIndex: 1,
        explanation: 'Difference of $(38\\% - 32\\%) = 6\\%$ equals $16 + 8 = 24$ marks -> $1\\% = 4$ -> $100\\% = 400$ maximum marks.',
        difficulty: 'standard',
      },
      {
        stem: 'What **Compound Interest** is earned on **₹8,000** for **1 year at 10% per annum**, if the interest is **compounded half-yearly**?',
        options: ['₹800', '₹820', '₹840', '₹880'],
        correctOptionIndex: 1,
        explanation: 'Half-yearly rate = 5%, periods = 2. Amount = $8000 \\times (1.05)^2 = 8000 \\times 1.1025 = ₹8,820$. Interest = ₹820.',
        difficulty: 'foundation',
      },
      {
        stem: '**A, B, and C** start a hill-spice enterprise with investments in the ratio **$3 : 4 : 5$**, kept for **$4 : 3 : 2$ months** respectively. What is their **profit-sharing ratio**?',
        options: ['$3 : 4 : 5$', '$6 : 6 : 5$', '$12 : 15 : 10$', '$1 : 1 : 1$'],
        correctOptionIndex: 1,
        explanation: 'Profit ratio = $(3\\times 4) : (4\\times 3) : (5\\times 2) = 12 : 12 : 10 = 6 : 6 : 5$.',
        difficulty: 'standard',
      },
      {
        stem: 'A boat rows at **12 km/h in still water** in a stream flowing at **3 km/h**. How long will it take to go **30 km downstream and return 18 km upstream**?',
        options: ['3 hours', '4 hours', '5 hours', '4.5 hours'],
        correctOptionIndex: 1,
        explanation: 'Downstream = $12+3 = 15$ km/h ($30/15 = 2$ h); Upstream = $12-3 = 9$ km/h ($18/9 = 2$ h). Total = $2 + 2 = 4$ hours.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Permutations, Combinations, Probability & Mensuration',
    materialTitle: 'Combinatorics, Probability & 2D/3D Mensuration — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: P&C, Probability, Venn Diagrams & Mensuration',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Permutations, Combinations, Probability & Mensuration

## 1. Permutations (Arrangement) & Combinations (Selection)
- **Permutation (Order Matters):** $^nP_r = \\frac{n!}{(n-r)!}$; arrangements of $n$ items with $p, q$ repeats = $\\frac{n!}{p!q!}$.
  - **Circular Seating:** $(n-1)!$ ways (or $\\frac{(n-1)!}{2}$ for necklaces/garlands where clockwise = anticlockwise).
- **Combination (Order Does Not Matter):** $^nC_r = \\frac{n!}{r!(n-r)!} = {}^nC_{n-r}$.
  - Handshakes among $n$ people = $^nC_2 = \\frac{n(n-1)}{2}$.
  - Diagonals of an $n$-sided convex polygon = $\\frac{n(n-3)}{2}$.
- **Set / Venn Principle:** $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$.

## 2. Probability Basics
- $P(E) = \\frac{\\text{Favourable Outcomes}}{\\text{Total Equally Likely Outcomes}}$, $0 \\le P(E) \\le 1$, and $P(\\text{not } E) = 1 - P(E)$.
- **"At least one"** problems are fastest via **complement**: $1 - P(\\text{none})$.
- **Cards (52 total):** 4 suits of 13 cards each (26 red, 26 black); **12 Face Cards** (4 Kings, 4 Queens, 4 Jacks).
- **Two Dice (36 outcomes):** Sum 7 is most likely ($6/36 = 1/6$); Sum 2 or 12 = $1/36$.

## 3. High-Yield 2D & 3D Mensuration Formulas
- **2D Shapes:**
  - **Equilateral Triangle (side $a$):** Area = $\\frac{\\sqrt{3}}{4}a^2$; Height = $\\frac{\\sqrt{3}}{2}a$.
  - **Heron’s Formula:** $\\sqrt{s(s-a)(s-b)(s-c)}$, $s = \\frac{a+b+c}{2}$.
  - **Circle:** Area = $\\pi r^2$, Circumference = $2\\pi r$. *(Doubling radius quadruples area — +300%!)*
  - **Rhombus:** Area = $\\frac{1}{2} d_1 d_2$.
- **3D Solids:**
  - **Cuboid:** Volume = $lbh$; TSA = $2(lb+bh+hl)$; Diagonal = $\\sqrt{l^2+b^2+h^2}$.
  - **Cylinder:** Volume = $\\pi r^2 h$; CSA = $2\\pi rh$; TSA = $2\\pi r(r+h)$.
  - **Cone:** Volume = $\\frac{1}{3}\\pi r^2 h$; CSA = $\\pi r l$ ($l = \\sqrt{r^2+h^2}$).
  - **Sphere:** Volume = $\\frac{4}{3}\\pi r^3$; Surface Area = $4\\pi r^2$.
  - **Melting / Recasting Rule:** Total **Volume stays conserved**!

## 4. Key Revision Takeaways
- **Handshakes = $\\frac{n(n-1)}{2}$**; **Diagonals = $\\frac{n(n-3)}{2}$**.
- **Recasting solids conserves Volume**; **scaling side/radius by $k$ scales Area by $k^2$ and Volume by $k^3$**.`,
    mcqs: [
      {
        stem: 'In how many distinct ways can the letters of the word **"NAINITAL"** be arranged?',
        options: ['40,320', '5,040', '10,080', '20,160'],
        correctOptionIndex: 1,
        explanation: '"NAINITAL" has 8 letters with N repeated 2 times, A repeated 2 times, and I repeated 2 times -> $\\frac{8!}{2!2!2!} = \\frac{40320}{8} = 5,040$.',
        difficulty: 'standard',
      },
      {
        stem: 'At a district planning meeting, **10 officers** shake hands with every other officer **exactly once**. How many total handshakes take place?',
        options: ['90', '45', '55', '100'],
        correctOptionIndex: 1,
        explanation: '$^{10}C_2 = \\frac{10 \\times 9}{2} = 45$ handshakes.',
        difficulty: 'foundation',
      },
      {
        stem: 'Two fair six-sided dice are thrown simultaneously. What is the **probability of obtaining a sum greater than 9** (i.e., 10, 11, or 12)?',
        options: ['$\\frac{1}{9}$', '$\\frac{1}{6}$', '$\\frac{1}{12}$', '$\\frac{5}{36}$'],
        correctOptionIndex: 1,
        explanation: 'Total = 36. Sums > 9: Sum 10 (4,6; 5,5; 6,4 = 3), Sum 11 (5,6; 6,5 = 2), Sum 12 (6,6 = 1). Total = 6/36 = 1/6.',
        difficulty: 'foundation',
      },
      {
        stem: 'If the **radius of a circular park is increased by 20%**, by what percentage does its **area increase**?',
        options: ['20%', '40%', '44%', '36%'],
        correctOptionIndex: 2,
        explanation: 'Area scales as $r^2$: $20 + 20 + \\frac{20\\times 20}{100} = 44\\%$.',
        difficulty: 'foundation',
      },
      {
        stem: 'In a class of **60 aspirants**, **40 study Hindi**, **30 study English**, and **all study at least one** of the two languages. How many study **both Hindi and English**?',
        options: ['15', '10', '20', '5'],
        correctOptionIndex: 1,
        explanation: '$n(H \\cap E) = 40 + 30 - 60 = 10$.',
        difficulty: 'foundation',
      },
      {
        stem: 'One card is drawn randomly from a well-shuffled pack of **52 playing cards**. What is the **probability that it is a red face card** (Jack, Queen, or King of Hearts/Diamonds)?',
        options: ['$\\frac{3}{26}$', '$\\frac{3}{13}$', '$\\frac{1}{13}$', '$\\frac{1}{26}$'],
        correctOptionIndex: 0,
        explanation: 'Red face cards = 6 (J, Q, K of Hearts + J, Q, K of Diamonds). Probability = $6/52 = 3/26$.',
        difficulty: 'foundation',
      },
      {
        stem: 'A **solid metallic sphere of radius 6 cm** is melted and recast into small spherical pellets of **radius 2 cm**. How many pellets are formed?',
        options: ['9', '27', '18', '36'],
        correctOptionIndex: 1,
        explanation: 'Volume ratio = $(R/r)^3 = (6/2)^3 = 3^3 = 27$ pellets.',
        difficulty: 'foundation',
      },
      {
        stem: 'From a group of **5 men and 4 women**, how many distinct **3-member committees** can be formed containing **exactly 2 men and 1 woman**?',
        options: ['30', '40', '20', '50'],
        correctOptionIndex: 1,
        explanation: '$^5C_2 \\times {}^4C_1 = 10 \\times 4 = 40$ ways.',
        difficulty: 'standard',
      },
      {
        stem: 'Three unbiased coins are tossed simultaneously. What is the **probability of getting at least one Head**?',
        options: ['$\\frac{3}{8}$', '$\\frac{7}{8}$', '$\\frac{1}{2}$', '$\\frac{5}{8}$'],
        correctOptionIndex: 1,
        explanation: 'Complement: $P(\\text{no Head = TTT}) = 1/8$. So $P(\\text{at least one Head}) = 1 - 1/8 = 7/8$.',
        difficulty: 'foundation',
      },
      {
        stem: 'A **right circular cone** and a **right circular cylinder** share the **same base radius $r$ and height $h$**. What is the **ratio of the Volume of the Cone to the Volume of the Cylinder**?',
        options: ['$1 : 2$', '$1 : 3$', '$2 : 3$', '$1 : 4$'],
        correctOptionIndex: 1,
        explanation: '$V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h$ vs $V_{\\text{cyl}} = \\pi r^2 h$, giving $1 : 3$.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the **area of an equilateral triangle** whose perimeter is **24 cm**?',
        options: ['$12\\sqrt{3}\\text{ cm}^2$', '$16\\sqrt{3}\\text{ cm}^2$', '$32\\sqrt{3}\\text{ cm}^2$', '$64\\sqrt{3}\\text{ cm}^2$'],
        correctOptionIndex: 1,
        explanation: 'Side $a = 24 / 3 = 8$ cm. Area = $\\frac{\\sqrt{3}}{4} a^2 = \\frac{\\sqrt{3}}{4}(64) = 16\\sqrt{3}\\text{ cm}^2$.',
        difficulty: 'foundation',
      },
      {
        stem: 'How many **total diagonals** does a regular **octagon (8-sided polygon)** possess?',
        options: ['16', '20', '24', '28'],
        correctOptionIndex: 1,
        explanation: 'Diagonals = $\\frac{n(n-3)}{2} = \\frac{8 \\times 5}{2} = 20$.',
        difficulty: 'foundation',
      },
      {
        stem: 'The **longest bamboo rod** that can fit straight inside a storage hall measuring **$12\\text{ m} \\times 9\\text{ m} \\times 8\\text{ m}$** has length:',
        options: ['15 m', '17 m', '19 m', '21 m'],
        correctOptionIndex: 1,
        explanation: 'Space diagonal = $\\sqrt{12^2 + 9^2 + 8^2} = \\sqrt{144 + 81 + 64} = \\sqrt{289} = 17\\text{ m}$.',
        difficulty: 'standard',
      },
      {
        stem: 'In a lottery, there are **5 prizes and 20 blanks**. What is the **probability of NOT winning a prize** on a single ticket draw?',
        options: ['$\\frac{1}{5}$', '$\\frac{4}{5}$', '$\\frac{1}{4}$', '$\\frac{3}{4}$'],
        correctOptionIndex: 1,
        explanation: 'Total tickets = 25; blanks = 20. $P(\\text{blank}) = 20/25 = 4/5$.',
        difficulty: 'foundation',
      },
      {
        stem: 'The **two diagonals of a rhombus** measure **16 cm and 12 cm**. Find the **perimeter of the rhombus**.',
        options: ['20 cm', '40 cm', '48 cm', '56 cm'],
        correctOptionIndex: 1,
        explanation: 'Diagonals bisect perpendicularly at half-lengths 8 cm and 6 cm -> side = $\\sqrt{8^2 + 6^2} = 10$ cm -> perimeter = $4 \\times 10 = 40$ cm.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Data Interpretation (Tables, Bar Graphs, Line & Pie Charts)',
    materialTitle: 'CSAT Data Interpretation: Ratios, Growth Rates & Pie Degrees — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Tables, Charts, Pie Degrees & Growth Calculations',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Data Interpretation (Tables, Bar Graphs, Line & Pie Charts)

## 1. Core DI Toolkit (Speed & Accuracy)
- **Percentage More / Less Trap (Most Common CSAT Error!):**
  - *"A is what % MORE than B?"* -> $\\frac{A - B}{B} \\times 100$ (**Base is $B$, after "than"**).
  - *"B is what % LESS than A?"* -> $\\frac{A - B}{A} \\times 100$ (**Base is $A$!**).
- **Percentage Growth Rate:** $\\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100$.
- **Percentage Points vs Relative Percentage:** Moving from $20\\%$ to $25\\%$ is **+5 percentage points**, OR a **+25% relative increase** ($\\frac{5}{20}\\times 100$)!

## 2. Pie Chart Angle–Percentage Conversions (Memorize Instantly!)
- Full Circle = **$100\\%$ = $360^\\circ$** -> **$1\\% = 3.6^\\circ$** and **$1^\\circ = \\frac{5}{18}\\%$**.
| Percentage | Central Angle | Percentage | Central Angle |
| :--- | :--- | :--- | :--- |
| **5%** | $18^\\circ$ | **25%** | $90^\\circ$ |
| **10%** | $36^\\circ$ | **30%** | $108^\\circ$ |
| **15%** | $54^\\circ$ | **40%** | $144^\\circ$ |
| **20%** | $72^\\circ$ | **50%** | $180^\\circ$ |

## 3. Reading Tables, Bar Graphs & Line Charts Without Blunders
1. Always read **Units & Scale** first (*in thousands, in crores, index 100, cumulative vs annual*).
2. **Ratio shortcut on Pie Charts:** You do NOT need to convert degrees/percentages into absolute rupee values first when computing ratios between two sectors—compare the percentages or degrees directly!
3. **Approximation Technique:** Round denominators gently to nearby clean numbers and track direction of rounding (*if denominator increases, fraction decreases*).

## 4. Key Revision Takeaways
- **$1\\% = 3.6^\\circ$** on every pie chart; ratios across sectors cancel total base automatically.
- Watch **base discipline**: the word immediately following **"of"** or **"than"** ALWAYS goes in the **denominator**.`,
    mcqs: [
      {
        stem: 'In a pie chart showing Uttarakhand State Budget allocations, **Education receives 20%** and **Rural Infrastructure receives $54^\\circ$**. What is the **combined percentage share** of these two sectors?',
        options: ['30%', '35%', '40%', '45%'],
        correctOptionIndex: 1,
        explanation: '$3.6^\\circ = 1\\%$, so $54^\\circ = 54 / 3.6 = 15\\%$. Combined share = $20\\% + 15\\% = 35\\%$.',
        difficulty: 'foundation',
      },
      {
        stem: 'A hill cooperative’s apple sales rose from **400 tonnes in 2022 to 500 tonnes in 2023**, while **plum sales stood at 250 tonnes in 2023**. By what percent were 2023 **apple sales greater than 2023 plum sales**?',
        options: ['50%', '100%', '200%', '75%'],
        correctOptionIndex: 1,
        explanation: '$\\frac{500 - 250}{250} \\times 100 = 100\\%$ greater.',
        difficulty: 'foundation',
      },
      {
        stem: 'If the **Central Angle** of a pie-chart sector representing Agriculture is **$108^\\circ$** out of a total district grant of **₹120 crore**, what is the exact rupee allocation for Agriculture?',
        options: ['₹30 crore', '₹36 crore', '₹40 crore', '₹28 crore'],
        correctOptionIndex: 1,
        explanation: '$\\frac{108^\\circ}{360^\\circ} \\times 120 = 0.30 \\times 120 = ₹36\\text{ crore}$.',
        difficulty: 'foundation',
      },
      {
        stem: 'If District A’s literacy rate improved from **60% in 2001 to 75% in 2011**, what was the **relative percentage increase** in its literacy rate (not percentage points)?',
        options: ['15%', '25%', '20%', '12.5%'],
        correctOptionIndex: 1,
        explanation: 'Absolute rise = 15 percentage points; relative increase = $\\frac{75 - 60}{60} \\times 100 = 25\\%$.',
        difficulty: 'standard',
      },
      {
        stem: 'A table reports annual millet output (in tonnes) for 4 years: **2020: 120, 2021: 150, 2022: 180, 2023: 230**. In which year was the **percentage annual growth rate** over the previous year **maximum**?',
        options: [
          '2021 (+25%)',
          '2022 (+20%)',
          '2023 (+27.78%)',
          '2021 and 2023 tied',
        ],
        correctOptionIndex: 2,
        explanation: '2021: $30/120 = 25\\%$; 2022: $30/150 = 20\\%$; 2023: $50/180 \\approx 27.78\\%$ (maximum).',
        difficulty: 'standard',
      },
      {
        stem: 'In a stacked bar graph of 500 students, **40% are in Science** and **25% of Science students are from Kumaon**. If **30% of Arts students** (the remaining 300) are from Kumaon, what is the **ratio of Science-Kumaon to Arts-Kumaon** students?',
        options: ['$5 : 9$', '$5 : 18$', '$1 : 2$', '$2 : 3$'],
        correctOptionIndex: 0,
        explanation: 'Science = $40\\%$ of $500 = 200$; Science-Kumaon = $25\\%$ of $200 = 50$. Arts = $300$; Arts-Kumaon = $30\\%$ of $300 = 90$. Ratio = $50 : 90 = 5 : 9$.',
        difficulty: 'standard',
      },
      {
        stem: 'When reading a **Line Chart** displaying *Cumulative Rainfall (mm)* vs *Monthly Rainfall (mm)* from June to September, what does a **flat horizontal segment** between August and September signify on a **Cumulative Rainfall** curve?',
        options: [
          'Maximum flood occurred in September',
          'Zero incremental rainfall fell during September',
          'September rainfall equalled August rainfall',
          'Rainfall became negative',
        ],
        correctOptionIndex: 1,
        explanation: 'On a cumulative graph, slope equals incremental change; zero slope (horizontal line) means zero new addition during that interval.',
        difficulty: 'standard',
      },
      {
        stem: 'Total expenditure of a university is **₹80 crore**: Faculty Salaries **$162^\\circ$**, Lab Infrastructure **$72^\\circ$**, Library **$36^\\circ$**, Student Aid **$90^\\circ$**. How much **more** money goes to **Faculty Salaries** than to **Lab Infrastructure**?',
        options: ['₹16 crore', '₹20 crore', '₹24 crore', '₹12 crore'],
        correctOptionIndex: 1,
        explanation: 'Degree difference = $162^\\circ - 72^\\circ = 90^\\circ = \\frac{1}{4}$ of circle -> $\\frac{1}{4} \\times 80 = ₹20\\text{ crore}$.',
        difficulty: 'foundation',
      },
      {
        stem: 'A multi-column table shows Exports and Imports (in ₹ Cr) across 4 years. Year 1: Exp 240, Imp 200; Year 2: Exp 260, Imp 300; Year 3: Exp 360, Imp 300; Year 4: Exp 400, Imp 440. In how many years was there a **Trade Surplus (Exports > Imports)**?',
        options: ['1 year', '2 years (Years 1 and 3)', '3 years', 'All 4 years'],
        correctOptionIndex: 1,
        explanation: 'Trade Surplus occurs where Exports exceed Imports: Year 1 (240 > 200) and Year 3 (360 > 300) — 2 years.',
        difficulty: 'foundation',
      },
      {
        stem: 'To compare **per-capita income growth** smoothly across 5 districts without being misled by unequal population bases in a single snapshot bar graph, which visual adjustment is essential?',
        options: [
          'Plot total GDP bars ignoring population',
          'Plot per-capita values (Income / Population) or indexed percentages rather than raw totals',
          'Use 3D tilted pie charts',
          'Omit the Y-axis origin',
        ],
        correctOptionIndex: 1,
        explanation: 'Raw district GDP favours populous plain districts unless normalized per capita; omitting Y-axis zero exaggerates visual slopes.',
        difficulty: 'foundation',
      },
      {
        stem: 'In a bar chart of 4 quarters, tourist arrivals (in thousands) are **Q1: 80, Q2: 140, Q3: 60, Q4: 120**. What is the **average quarterly arrival**, and which quarter sits nearest to it?',
        options: [
          '100 thousand; Q4 (120) / Q1 (80) equidistant',
          '110 thousand; Q4',
          '90 thousand; Q1',
          '105 thousand; Q2',
        ],
        correctOptionIndex: 0,
        explanation: '$(80 + 140 + 60 + 120) / 4 = 400 / 4 = 100$ thousand (both Q1 and Q4 sit exactly 20 thousand away).',
        difficulty: 'foundation',
      },
      {
        stem: 'A pie chart splits 2,000 trees planted into Oak (**35%**), Deodar (**25%**), Rhododendron (**18%**), and Walnut (**22%**). What is the **central angle difference** between **Oak and Walnut**?',
        options: ['$40.2^\\circ$', '$46.8^\\circ$', '$50.4^\\circ$', '$36^\\circ$'],
        correctOptionIndex: 1,
        explanation: 'Percentage difference = $35\\% - 22\\% = 13\\%$. Angle difference = $13 \\times 3.6^\\circ = 46.8^\\circ$.',
        difficulty: 'standard',
      },
      {
        stem: 'If Production in 2021 was **500 units**, grew by **20%** in 2022, and then **fell by 10%** in 2023, what is the **2023 output**?',
        options: ['550 units', '540 units', '560 units', '525 units'],
        correctOptionIndex: 1,
        explanation: '$500 \\times 1.20 = 600$ (2022); $600 \\times 0.90 = 540$ units (2023).',
        difficulty: 'foundation',
      },
      {
        stem: 'In a DI problem, *"Find the approximate value of $\\frac{4189}{798} \\times 100$"* — which quick mental estimate is closest?',
        options: ['425', '525', '610', '480'],
        correctOptionIndex: 1,
        explanation: '$4189 / 798 \\approx 4200 / 800 = 5.25$, so $\\times 100 \\approx 525$.',
        difficulty: 'foundation',
      },
      {
        stem: 'If **Sector X** accounts for **$12.5\\%$** of a pie chart, how many **degrees** does Sector X occupy?',
        options: ['$36^\\circ$', '$45^\\circ$', '$40^\\circ$', '$48^\\circ$'],
        correctOptionIndex: 1,
        explanation: '$12.5\\% = \\frac{1}{8}$ of $360^\\circ = 45^\\circ$.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Number/Letter Series, Analogies & Coding-Decoding',
    materialTitle: 'CSAT Reasoning: Series Patterns, Alphabet Positions & Coding — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Series Completion, Odd-One-Out, Analogies & Coding',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Number/Letter Series, Analogies & Coding-Decoding

## 1. Number Series Recognition Checklist (Scan in 15 Seconds!)
1. **Slow linear change:** Check first-order & second-order differences (*constant, arithmetic progression, or prime additions $+2, +3, +5, +7, +11$*).
2. **Rapid explosion:** Multiplication + adjustment (*$\\times 2 + 1$, $\\times 3 - 2$, $\\times n + n$*).
3. **Dip then rise:** Decimal multipliers (*$\\times 0.5 + 0.5, \\times 1 + 1, \\times 1.5 + 1.5...$*).
4. **Squares & Cubes Adjacent:** $n^2 \\pm 1$ ($0, 3, 8, 15, 24, 35$) or $n^3 \\pm n$ ($0, 6, 24, 60, 120, 210$).
5. **Alternating Twin Series:** Odd positions follow one pattern, even positions another.

## 2. Alphabet Coding Speed Tools (**EJOTY** & **Opposite Pairs**)
- **EJOTY Anchor:** \`E = 5, J = 10, O = 15, T = 20, Y = 25\` *(instant position lookup!)*.
- **Opposite Letter Pairs (Sum = 27):** \`A–Z, B–Y, C–X, D–W, E–V, F–U, G–T, H–S, I–R, J–Q, K–P, L–O, M–N\`.
- **Standard Coding Families:**
  - *Forward/Backward Fixed Shift* (\`+3\` or \`-2\`).
  - *Cross-pair / Reversal Coding* (split word in halves or reverse order + shift).
  - *Direct Position / Digit Sum Coding* (\`CAT\` -> \`3+1+20 = 24\`).
  - *Sentence / Chinese Coding* (compare common words across two coded statements).

## 3. Verbal Analogies & Classification (Odd-One-Out)
- Check relationship type strictly: *Worker : Tool*, *State : Capital*, *Instrument : Measurement* (\`Anemometer : Wind :: Barometer : Pressure\`), *Part : Whole*, *Cause : Effect*, *Antonym / Synonym*.

## 4. Key Revision Takeaways
- Memorize **EJOTY (5, 10, 15, 20, 25)** and **sum = 27 opposite pairs**.
- When numbers dip after the first term and climb again (*\`12, 6, 6, 9, 18...\`*), test **fractional multipliers ($\times 0.5, \times 1, \times 1.5, \times 2$)** immediately!`,
    mcqs: [
      {
        stem: 'Find the missing term in the number series: **6, 12, 30, 84, 246, ?**',
        options: ['732', '738', '720', '744'],
        correctOptionIndex: 0,
        explanation: 'Check $\\times 3 - 6$: $6\\times 3 - 6 = 12$; $12\\times 3 - 6 = 30$; $30\\times 3 - 6 = 84$; $84\\times 3 - 6 = 246$; $246\\times 3 - 6 = 738 - 6 = 732$. (Also differences triple: $+6, +18, +54, +162, +486$).',
        difficulty: 'standard',
      },
      {
        stem: 'Identify the next number in the series: **0, 6, 24, 60, 120, 210, ?**',
        options: ['280', '336', '343', '290'],
        correctOptionIndex: 1,
        explanation: 'Pattern is $n^3 - n$: $1^3-1=0$, $2^3-2=6$, $3^3-3=24$, $4^3-4=60$, $5^3-5=120$, $6^3-6=210$, next is $7^3-7 = 343 - 7 = 336$.',
        difficulty: 'foundation',
      },
      {
        stem: 'In a certain code language, **UTTARAKHAND** has `"PAHAR"` coded as **`KZSIZ`** using opposite alphabet pairs ($A\\leftrightarrow Z$). How will **`DOON`** be coded under the exact same rule?',
        options: ['WLLM', 'WLLN', 'VLLM', 'WMMN'],
        correctOptionIndex: 0,
        explanation: 'Opposite pairs (sum = 27): D(4)->W(23), O(15)->L(12), O(15)->L(12), N(14)->M(13) -> **WLLM**.',
        difficulty: 'foundation',
      },
      {
        stem: 'Complete the decimal multiplier series: **16, 8, 8, 12, 24, ?**',
        options: ['48', '60', '72', '36'],
        correctOptionIndex: 1,
        explanation: 'Multipliers increase by $+0.5$: $16\\times 0.5 = 8$, $8\\times 1 = 8$, $8\\times 1.5 = 12$, $12\\times 2 = 24$, $24\\times 2.5 = 60$.',
        difficulty: 'foundation',
      },
      {
        stem: 'In a coding scheme where **odd-position letters shift $+2$** and **even-position letters shift $-1$**, how will the town name **`GARHWAL`** be coded?',
        options: ['IZTJYAN', 'IZTGYZN', 'HBSIXBM', 'IZTJYAM'],
        correctOptionIndex: 1,
        explanation: 'Pos 1 G(+2)=I, Pos 2 A(-1)=Z, Pos 3 R(+2)=T, Pos 4 H(-1)=G, Pos 5 W(+2)=Y, Pos 6 A(-1)=Z, Pos 7 L(+2)=N -> **IZTGYZN**.',
        difficulty: 'standard',
      },
      {
        stem: 'Find the **wrong term** in the series: **3, 7, 15, 31, 63, 125, 255**.',
        options: ['15', '31', '125', '255'],
        correctOptionIndex: 2,
        explanation: 'Each term follows $2n + 1$: $3\\times 2+1=7, 15, 31, 63, 63\\times 2+1 = 127$ (NOT 125!), $127\\times 2+1=255$.',
        difficulty: 'foundation',
      },
      {
        stem: 'Complete the verbal analogy: **Hygrometer : Humidity :: Anemometer : ?**',
        options: ['Atmospheric Pressure', 'Wind Speed / Velocity', 'Earthquake Intensity', 'Water Depth'],
        correctOptionIndex: 1,
        explanation: 'Hygrometer measures humidity; Anemometer measures wind speed (Barometer measures pressure, Seismograph earthquakes).',
        difficulty: 'foundation',
      },
      {
        stem: 'In a code language, **`"tea is hot"` = `246`**, **`"hot hill rain"` = `691`**, and **`"rain is cool"` = `148`**. What digit represents **`"is"`**?',
        options: ['6', '4', '1', '2'],
        correctOptionIndex: 1,
        explanation: 'Comparing statements 1 and 3 ("tea is hot"=246 and "rain is cool"=148), the only common word is "is" and the only common digit is **4**.',
        difficulty: 'foundation',
      },
      {
        stem: 'Choose the **Odd-One-Out** from the following letter-clusters based on alphabetical step difference:',
        options: ['CEG (+2, +2)', 'IKM (+2, +2)', 'OPR (+1, +2)', 'QSU (+2, +2)'],
        correctOptionIndex: 2,
        explanation: 'C-E-G, I-K-M, and Q-S-U step consistently by $+2, +2$, whereas O-P-R steps by $+1, +2$.',
        difficulty: 'foundation',
      },
      {
        stem: 'If **`FIRE`** is coded as **38** ($F=6, I=9, R=18, E=5 \\rightarrow 6+9+18+5=38$), then how is **`SNOW`** coded?',
        options: ['68', '71', '74', '65'],
        correctOptionIndex: 1,
        explanation: '$S(19) + N(14) + O(15) + W(23) = 71$.',
        difficulty: 'foundation',
      },
      {
        stem: 'Find the missing term in the alphanumeric series: **B2D, E4H, H6L, K8P, ?**',
        options: ['N10T', 'M10S', 'N10S', 'O12T'],
        correctOptionIndex: 0,
        explanation: 'First letter $+3$ (B,E,H,K -> N); middle number $+2$ (2,4,6,8 -> 10); last letter $+4$ (D,H,L,P -> T) giving **N10T**.',
        difficulty: 'foundation',
      },
      {
        stem: 'Find the missing number in the alternating series: **4, 15, 7, 13, 10, 11, 13, ?**',
        options: ['16', '9', '10', '8'],
        correctOptionIndex: 1,
        explanation: 'Odd positions rise $+3$ (4, 7, 10, 13); even positions fall $-2$ (15, 13, 11, **9**).',
        difficulty: 'foundation',
      },
      {
        stem: 'Complete the number analogy: **$7 : 56 :: 9 : ?$**',
        options: ['81', '90', '72', '99'],
        correctOptionIndex: 1,
        explanation: 'Relation is $n : n(n+1) \\rightarrow 7\\times 8 = 56$, so $9\\times 10 = 90$.',
        difficulty: 'foundation',
      },
      {
        stem: 'If **`"water"` is called `"sky"`**, **`"sky"` is called `"soil"`**, **`"soil"` is called `"tree"`**, and **`"tree"` is called `"river"`**, then where do **birds fly** according to this code?',
        options: ['water', 'soil', 'sky', 'tree'],
        correctOptionIndex: 1,
        explanation: 'In reality birds fly in the "sky"; the code maps `"sky"` $\\rightarrow$ **`"soil"`**.',
        difficulty: 'foundation',
      },
      {
        stem: 'Complete the prime-difference series: **5, 7, 10, 15, 22, 33, ?**',
        options: ['44', '46', '48', '50'],
        correctOptionIndex: 1,
        explanation: 'Consecutive primes are added: $+2, +3, +5, +7, +11$, next prime $+13 \\rightarrow 33 + 13 = 46$.',
        difficulty: 'standard',
      },
    ],
  },
];
