import { TopicContentPackage } from './types';

export const ECONOMY_PART_B: TopicContentPackage[] = [
  {
    topicTitle: 'Social Welfare, Health & Financial Inclusion Schemes',
    materialTitle: 'Social Welfare, Health & Financial Inclusion Schemes — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Uttarakhand & National Social Welfare Schemes',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Social Welfare, Health & Financial Inclusion Schemes

## 1. Uttarakhand Flagship Social & Women Empowerment Schemes
- **Atal Ayushman Uttarakhand Yojana (AAUY — Dec 2018):** Universalized **Ayushman Bharat–PMJAY** across **ALL families in Uttarakhand** (providing **Rs 5 lakh/year cashless secondary & tertiary health cover per family** via state funding for non-SECC households alongside Central PMJAY beneficiaries!).
- **Nanda Gaura Yojana:** Merged *Nanda Devi Kanya Dhan* and *Gaura Devi Kanya Dhan* to support **girl child birth (first grant)** and **Class 12 graduation (second grant)**—promoting institutional delivery, curbing female foeticide, and delaying early marriage.
- **Mukhyamantri Vatsalya Yojana:** Monthly subsistence/education/health support for children orphaned during COVID-19 (and related state guardianship aid) plus horizontal 5% state-job reservation framework.
- **Mukhyamantri Mahalaxmi Kit Yojana:** Post-delivery maternal & newborn nutrition/hygiene kit for institutional deliveries.
- **Teelu Rauteli Award:** Annual state honour recognizing outstanding women achievers in social work, bravery, sports, and administration across Uttarakhand.
- **State Social Security Pensions:** Old-age, widow, and Divyangjan pensions + **30% Horizontal Reservation for Uttarakhand Domicile Women** in state public services (enacted via state legislation!).

## 2. National Social Security & Financial Inclusion Architecture
| Scheme / Mission | Core Entitlement & Target Group |
|---|---|
| **PM Jan Dhan Yojana (PMJDY, 2014)** | Zero-balance BSBD bank accounts, RuPay debit card, accident cover (Rs 2 lakh), overdraft up to Rs 10,000; backbone of **JAM–DBT** |
| **PM Suraksha Bima (PMSBY) & PM Jeevan Jyoti Bima (PMJJBY)** | Accidental death/disability cover Rs 2 lakh (Rs 20/yr premium) & term life cover Rs 2 lakh (Rs 436/yr premium) |
| **Atal Pension Yojana (APY, 2015)** | Guaranteed monthly pension (Rs 1,000–Rs 5,000) after age 60 for unorganized workers (18–40 yrs entry; non-income taxpayers since Oct 2022) |
| **PM-KISAN & Jal Jeevan Mission (JJM)** | Rs **6,000/yr** DBT in 3 equal instalments to farmer families; functional household tap water (**Har Ghar Jal**) crucial in hill terrains |
| **Beti Bachao Beti Padhao & Poshan 2.0** | Improving Child Sex Ratio (especially critical in **Pithoragarh, Champawat, Haridwar**) and fighting maternal/child anaemia & stunting |
| **NSAP & NFSA (2013)** | *National Food Security Act, 2013* (subsidized grains under **PMGKAY** free-grain extension) & *One Nation One Ration Card (ONORC)* helping migrant workers |

## 3. Financial Inclusion Metrics & Challenges in Mountain Districts
- **Business Correspondents (Bank Mitras / Dak Sevaks / CSC Digipay):** Essential where steep ridges make physical brick-and-mortar bank branches 15–25 km away.
- **Digital Banking Units (DBUs) & UPI Lite / 123PAY:** Extending low-bandwidth digital payments to rural hill markets.

## 4. Key Revision Takeaways
- **Atal Ayushman Uttarakhand Yojana (2018)** extended **Rs 5 lakh/family** cashless health coverage to **every resident family** in the state (universalizing PMJAY).
- **Nanda Gaura Yojana** supports girl-child birth and 12th-pass milestones.
- **PMSBY (Rs 20/yr accidental)**, **PMJJBY (Rs 436/yr life)**, and **APY (pension at 60)** form the Central social-security Jan Suraksha trio.`,
    mcqs: [
      {
        stem: 'How does the "Atal Ayushman Uttarakhand Yojana" (launched December 2018) go beyond the standard Central Ayushman Bharat–PMJAY criteria?',
        options: [
          'It covers only private corporate CEOs',
          'It extends Rs 5 lakh per family annual cashless hospitalization coverage universally to ALL resident families in Uttarakhand (including non-SECC households funded by the State)',
          'It replaces all AIIMS hospitals with ayurvedic clinics only',
          'It covers only dental checkups',
        ],
        correctOptionIndex: 1,
        explanation: 'While Central PMJAY covers bottom ~40% SECC families, Uttarakhand became one of the first states to universalize Rs 5 lakh/family health protection across all resident households.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Uttarakhand state scheme combines financial assistance at the birth of a girl child and upon her passing Class 12 to curb gender discrimination and encourage girls\' higher education?',
        options: [
          'Mahalaxmi Yojana',
          'Nanda Gaura Yojana',
          'Ghasyari Kalyan Yojana',
          'Teelu Rauteli Scheme',
        ],
        correctOptionIndex: 1,
        explanation: 'Nanda Gaura Yojana merged earlier Nanda Devi and Gaura Devi Kanya Dhan schemes into a two-stage conditional cash transfer supporting girl children.',
        difficulty: 'foundation',
      },
      {
        stem: 'What percentage of horizontal reservation did Uttarakhand legally enact in state public services specifically for women domiciled in Uttarakhand?',
        options: ['10%', '20%', '30%', '50%'],
        correctOptionIndex: 2,
        explanation: 'After High Court litigation over executive GOs, the Uttarakhand Assembly passed legislation securing 30% horizontal reservation for domicile women in state government jobs.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Central Jan Suraksha scheme provides a guaranteed minimum monthly pension ranging from Rs 1,000 to Rs 5,000 after attaining age 60, primarily targeting unorganized-sector workers aged 18–40?',
        options: [
          'PM Jeevan Jyoti Bima Yojana',
          'Atal Pension Yojana (APY)',
          'PM Suraksha Bima Yojana',
          'PM Jan Dhan Yojana',
        ],
        correctOptionIndex: 1,
        explanation: 'Administered by PFRDA, APY offers defined monthly pensions (with spouse/nominee protection); since Oct 2022, income-taxpayers are ineligible for new enrolment.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under PM Suraksha Bima Yojana (PMSBY) and PM Jeevan Jyoti Bima Yojana (PMJJBY), what are the respective annual premiums (post-2022 revision) for Rs 2 lakh cover?',
        options: [
          'Rs 12 and Rs 330',
          'Rs 20 (PMSBY) and Rs 436 (PMJJBY)',
          'Rs 100 and Rs 1,000',
          'Free for everyone forever',
        ],
        correctOptionIndex: 1,
        explanation: 'In June 2022, annual premiums were revised from Rs 12/330 to Rs 20 for PMSBY (accident cover, ages 18–70) and Rs 436 for PMJJBY (life cover, ages 18–50).',
        difficulty: 'standard',
      },
      {
        stem: 'What is the significance of the "One Nation One Ration Card (ONORC)" portability system for Uttarakhand\'s migrant workforce?',
        options: [
          'It cancels ration cards if someone moves out of their village',
          'It enables biometric/Aadhaar-authenticated PDS foodgrain withdrawal at any Fair Price Shop nationwide, protecting both out-migrating hill youth in metro cities and in-state seasonal labourers',
          'It replaces bank accounts',
          'It distributes free gold coins',
        ],
        correctOptionIndex: 1,
        explanation: 'Enabled under NFSA 2013, ONORC lets family members back in Uttarakhand villages and migrants working in Delhi/Mumbai split or draw subsidized rations seamlessly.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Uttarakhand welfare initiative distributes a free nutrition and maternal-newborn hygiene kit to mothers upon institutional delivery in government hospitals?',
        options: [
          'Mukhyamantri Mahalaxmi Kit Yojana',
          'Nanda Gaura Yojana',
          'Palayan Roktham Yojana',
          'Saur Swarozgar Yojana',
        ],
        correctOptionIndex: 0,
        explanation: 'Mukhyamantri Mahalaxmi Kit Yojana promotes safe institutional births and early postnatal care for mothers and female/first-two newborns.',
        difficulty: 'foundation',
      },
      {
        stem: 'How do "Business Correspondents (Bank Mitras)" solve the "last-mile financial inclusion" barrier in high-altitude Uttarakhand valleys?',
        options: [
          'By printing sovereign currency notes',
          'By using Aadhaar Enabled Payment System (AePS) micro-ATMs locally inside remote gram panchayats for deposits, pension withdrawals, and DBT cash-out without long mountain bus journeys',
          'By opening stock exchanges in every village',
          'By replacing RBI',
        ],
        correctOptionIndex: 1,
        explanation: 'Where rugged topography makes brick-and-mortar branches sparse, Bank Mitras and India Post Payments Bank (IPPB) Dak Sevaks bring doorstep banking via AePS.',
        difficulty: 'standard',
      },
      {
        stem: 'Under PM-KISAN (Pradhan Mantri Kisan Samman Nidhi), what direct income support is transferred annually via DBT to eligible landholding farmer families?',
        options: [
          'Rs 2,000 per year',
          'Rs 6,000 per year in three equal four-monthly instalments of Rs 2,000',
          'Rs 12,000 per year',
          'Zero cash; fertilizer coupons only',
        ],
        correctOptionIndex: 1,
        explanation: 'PM-KISAN provides Rs 6,000 annually directly into Aadhaar-seeded bank accounts to help small and marginal farmers meet input and domestic needs.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which central rural drinking-water mission aims to provide Functional Household Tap Connections (FHTC — 55 litres per capita per day) to every rural home, dramatically reducing water-fetching drudgery in hill states like Uttarakhand?',
        options: ['Swachh Bharat Grameen', 'Jal Jeevan Mission (Har Ghar Jal)', 'AMRUT', 'Namami Gange'],
        correctOptionIndex: 1,
        explanation: 'Launched in 2019, Jal Jeevan Mission prioritizes gravity-fed and solar-pumped piped tap water across steep mountain villages.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Uttarakhand state scheme was launched to support children who lost parents or earning guardians during the COVID-19 pandemic with monthly financial assistance, free schooling, and rehabilitation?',
        options: [
          'Mukhyamantri Vatsalya Yojana',
          'Veer Chandra Singh Garhwali Yojana',
          'PM Vishwakarma',
          'Ghasyari Yojana',
        ],
        correctOptionIndex: 0,
        explanation: 'Mukhyamantri Vatsalya Yojana provided Rs 3,000/month maintenance aid alongside free education and ration support until age 21.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which national portal registers unorganized-sector workers (construction, agricultural, domestic, gig, and platform workers) with a Universal Account Number (UAN) to streamline social security delivery?',
        options: ['e-Shram Portal', 'GeM Portal', 'SWAYAM', 'PARIVESH'],
        correctOptionIndex: 0,
        explanation: 'Launched by the Ministry of Labour & Employment in 2021, e-Shram builds a national database of unorganized workers linked to PMSBY and welfare benefits.',
        difficulty: 'standard',
      },
      {
        stem: 'What dual benefit did the 2014 Pradhan Mantri Jan Dhan Yojana (PMJDY) unlock for India\'s broader welfare governance?',
        options: [
          'Eliminated all taxes for corporations',
          'Opened near-universal zero-balance bank accounts for women and the poor, enabling Direct Benefit Transfers (DBT) that cut middlemen leakages and duplicate/ghost beneficiaries',
          'Replaced state budgets completely',
          'Abolished cooperative banks',
        ],
        correctOptionIndex: 1,
        explanation: 'Over half of PMJDY accounts belong to women, turning DBT (LPG Pahal, MGNREGA wages, pensions, PM-KISAN) into transparent fiscal delivery.',
        difficulty: 'standard',
      },
      {
        stem: 'Which integrated nutrition mission merges Anganwadi supplementary nutrition, POSHAN Tracker, and maternal/adolescent anaemia reduction under Mission Saksham Anganwadi & Poshan 2.0?',
        options: [
          'PM-POSHAN (formerly Mid-Day Meal) only',
          'POSHAN Abhiyaan (National Nutrition Mission)',
          'Ayushman Bharat Digital Mission',
          'Stand-Up India',
        ],
        correctOptionIndex: 1,
        explanation: 'POSHAN Abhiyaan targets stunting, wasting, underweight prevalence, and anaemia across children (0–6), pregnant women, and lactating mothers.',
        difficulty: 'standard',
      },
      {
        stem: 'Why is the "Stand-Up India" scheme distinct from standard PM Mudra Yojana loans?',
        options: [
          'Stand-Up India covers only male billionaires',
          'Stand-Up India facilitates bank loans between Rs 10 lakh and Rs 1 crore specifically to at least one SC/ST borrower and one Woman borrower per bank branch for setting up greenfield enterprises',
          'Mudra loans exceed Rs 10 crore',
          'Stand-Up India applies only to farming',
        ],
        correctOptionIndex: 1,
        explanation: 'While PMMY (Mudra) offers micro/small loans up to Rs 10 lakh (Shishu <=50k, Kishore 50k–5L, Tarun 5L–10L — recently expanded Tarun Plus up to 20L), Stand-Up India focuses on Rs 10L–1Cr greenfield enterprises for SC/ST and women entrepreneurs.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'National Income Accounting (GDP, GNP, NNP, GVA)',
    materialTitle: 'National Income Accounting (GDP, GNP, NNP, GVA) — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: National Income Concepts (GDP, GNP, NNP, GVA)',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# National Income Accounting (GDP, GNP, NNP, GVA)

## 1. Core Macroeconomic Aggregates & Identities
- **GDP (Gross Domestic Product):** Market value of all **final** goods and services produced **within the domestic territory** of a country during an accounting year (*territory-based* — includes foreign firms producing inside India; excludes Indian citizens earning abroad).
- **GNP (Gross National Product):** \`GNP = GDP + NFIA\` (*Net Factor Income from Abroad* = factor income earned by residents abroad minus factor income paid to non-residents domestically; *citizenship/residency-based*; usually India's \`GNP < GDP\` because NFIA is slightly negative due to outward interest/dividend remittances).
- **NNP (Net National Product) & National Income:** \`NNP = GNP - Depreciation (Consumption of Fixed Capital)\`. Historically **NNP at Factor Cost** equalled **National Income**.
- **Factor Cost vs Basic Prices vs Market Prices (Post-2015 NAS Revision):**
  - \`GVA at Basic Prices = GVA at Factor Cost + Production Taxes - Production Subsidies\` (taxes/subsidies independent of volume, e.g., land revenue, stamp duty).
  - \`GDP at Market Prices = GVA at Basic Prices + Product Taxes - Product Subsidies\` (volume-linked taxes/subsidies like GST, excise, customs, food/fertilizer subsidy).
  - Today, **MoSPI / NSO** reports headline **GDP at Market Prices** (Constant **2011–12** prices) and sectoral **GVA at Basic Prices**.

## 2. Three Methods of Measuring National Income
1. **Product / Value Added Method:** Sum of Gross Value Added across Primary, Secondary, and Tertiary sectors (\`Value of Output - Intermediate Consumption\`)—avoids **double counting**.
2. **Income Method:** Sum of factor incomes: **Wages/Compensation + Rent + Interest + Profit + Mixed Income of Self-Employed** (excludes **transfer payments** like pensions/scholarships and windfall/second-hand sales).
3. **Expenditure Method:** \`GDP = C + I + G + (X - M)\` — Private Final Consumption Expenditure (**C**, ~58–60% of India's GDP), Gross Fixed Capital Formation/Investment (**I**), Government Final Consumption (**G**), Net Exports (**X − M**).

## 3. Real vs Nominal GDP, GDP Deflator & PPP
- **Nominal GDP:** Valued at current market prices; **Real GDP:** Valued at constant base-year prices (**2011–12**).
- **GDP Deflator:** \`(Nominal GDP / Real GDP) × 100\` — broadest measure of economy-wide inflation covering all domestically produced goods & services (unlike CPI/WPI baskets, though excludes imports!).
- **Purchasing Power Parity (PPP):** Adjusts exchange rates for domestic cost-of-living differences (India is **#5/#4 nominal GDP** globally but **#3 in PPP terms** behind China and the US).
- **Personal Income (PI) & Disposable Personal Income (DPI):** \`PI = NI - Undistributed Corporate Profits - Corporate Tax - Net Interest Payments + Transfer Payments\`; \`DPI = PI - Personal Direct Taxes\`.

## 4. Limitations of GDP as a Welfare Metric
- Ignores **income inequality**, **non-market unpaid household/care work**, **informal sector underestimation**, and **environmental depletion** (why **Green GDP** and Uttarakhand's **Gross Environmental Product [GEP]** matter!).

## 5. Key Revision Takeaways
- **Territory = GDP**; **Residency/Nationality = GNP (\`GDP + NFIA\`)**; **Net = Gross − Depreciation**; **GDP (Market Price) = GVA (Basic Price) + Net Product Taxes**.
- **Transfer payments** (old-age pension, scholarships, gifts) and **second-hand goods resales** are **excluded** from current-year GDP.
- **GDP Deflator** covers all domestic goods/services (excluding imported consumer items).`,
    mcqs: [
      {
        stem: 'What is the fundamental conceptual distinction between Gross Domestic Product (GDP) and Gross National Product (GNP)?',
        options: [
          'GDP excludes services while GNP includes services',
          'GDP is territory-based (output produced within domestic frontiers), whereas GNP is residency-based (GDP plus Net Factor Income from Abroad — NFIA)',
          'GNP subtracts depreciation while GDP does not',
          'GDP measures only government expenditure',
        ],
        correctOptionIndex: 1,
        explanation: 'GDP tracks production inside India regardless of firm nationality; GNP adjusts GDP by adding factor income earned by Indian residents abroad and subtracting factor income remitted outward.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the 2015 National Accounts revision by MoSPI/NSO, how is "GDP at Market Prices" derived from "GVA at Basic Prices"?',
        options: [
          'GVA at Basic Prices minus Depreciation',
          'GVA at Basic Prices + Product Taxes − Product Subsidies',
          'GVA at Basic Prices + Net Factor Income from Abroad',
          'GVA at Basic Prices minus Exports',
        ],
        correctOptionIndex: 1,
        explanation: 'Product taxes (GST, customs, excise) and product subsidies are added/subtracted on GVA at Basic Prices to reach headline GDP at Market Prices.',
        difficulty: 'standard',
      },
      {
        stem: 'Why are "Transfer Payments" (such as old-age pensions, unemployment allowances, or PM-KISAN cash transfers) EXCLUDED from National Income calculations?',
        options: [
          'Because the government does not record them',
          'Because they represent income redistribution without any corresponding current-year production of goods or services',
          'Because only private companies count toward GDP',
          'Because they are paid in foreign currency',
        ],
        correctOptionIndex: 1,
        explanation: 'National income tracks value created by factor services (land, labour, capital, enterprise); unilateral transfers are added later to arrive at Personal Income.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which expenditure-method identity represents GDP from the demand side (`Y = C + I + G + X − M`)?',
        options: [
          'Consumption + Imports + Government Taxes + Exports',
          'Private Consumption (C) + Gross Investment (I) + Government Spending (G) + Net Exports (Exports minus Imports)',
          'Wages + Rent + Interest + Profit',
          'Corporate Profits + Indirect Taxes',
        ],
        correctOptionIndex: 1,
        explanation: 'Imports (M) are subtracted because C, I, and G expenditures already include spending on foreign imported goods not produced domestically.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why do national income accountants use the "Value Added" method rather than summing total sales turnover of wheat farmers, flour millers, and bakeries?',
        options: [
          'To hide agricultural output',
          'To avoid the error of "double counting" intermediate inputs already embodied in the final bread price',
          'Because flour millers do not pay taxes',
          'To artificially inflate GDP',
        ],
        correctOptionIndex: 1,
        explanation: 'Counting only Value Added at each stage (or solely the final good price) ensures intermediate goods are not counted repeatedly.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which item IS included when computing India\'s current-year GDP?',
        options: [
          'Sale proceeds of a 5-year-old second-hand car',
          'Commission earned by a property broker for facilitating the resale of an existing house during the current year',
          'Unpaid domestic cooking inside a household',
          'Pure financial transfer buying existing shares on NSE',
        ],
        correctOptionIndex: 1,
        explanation: 'Second-hand asset values are excluded (counted when newly produced), BUT the brokerage/commission represents a real service rendered in the current year.',
        difficulty: 'advanced',
      },
      {
        stem: 'In India\'s official National Accounts Statistics (NSO), which base year is currently used for computing Real GDP at Constant Prices (pending the upcoming base revision)?',
        options: ['2004–05', '2011–12', '2015–16', '2019–20'],
        correctOptionIndex: 1,
        explanation: 'MoSPI shifted the base year from 2004–05 to 2011–12 in January 2015 (also shifting from Factor Cost GDP to Market Price GDP / Basic Price GVA).',
        difficulty: 'foundation',
      },
      {
        stem: 'How is the "GDP Deflator" calculated, and how does its coverage compare with the Consumer Price Index (CPI)?',
        options: [
          '(Real GDP / Nominal GDP) × 100; covers only food items',
          '(Nominal GDP / Real GDP) × 100; covers ALL domestically produced goods & services (including capital goods) with changing current weights, whereas CPI covers a fixed basket of consumer goods & services including imports',
          'WPI minus CPI',
          'Applies only to banking stocks',
        ],
        correctOptionIndex: 1,
        explanation: 'The GDP Deflator reflects comprehensive domestic production price movements (Paasche-type index) without imported consumer price shocks.',
        difficulty: 'standard',
      },
      {
        stem: 'What does "Personal Disposable Income (DPI)" equal?',
        options: [
          'GNP minus exports',
          'Personal Income minus Personal Direct Taxes (and miscellaneous government fees/fines)',
          'Corporate profits plus indirect taxes',
          'Total bank credit in the economy',
        ],
        correctOptionIndex: 1,
        explanation: 'Disposable Personal Income is the net income households actually control to spend on consumption or save.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which factor explains why India ranks significantly higher globally in GDP (Purchasing Power Parity — PPP) (#3 globally) than in Nominal Market-Exchange-Rate GDP?',
        options: [
          'India uses gold coins domestically',
          'Non-tradable services, housing, and local essentials are much cheaper in India in US-dollar terms, increasing real domestic purchasing power per dollar',
          'PPP ignores India\'s population',
          'Nominal GDP excludes services',
        ],
        correctOptionIndex: 1,
        explanation: 'Because domestic prices of haircuts, local transport, food, and services are lower than in high-wage Western economies, PPP conversion boosts India\'s real output comparison.',
        difficulty: 'standard',
      },
      {
        stem: 'In Uttarakhand and India overall, why is "Gross Fixed Capital Formation (GFCF)" tracked closely as a share of GDP?',
        options: [
          'It measures short-term festive shopping',
          'It measures physical investment in machinery, buildings, roads, and infrastructure—the core driver of future productive capacity and long-run growth',
          'It tracks purely foreign aid',
          'It measures money supply',
        ],
        correctOptionIndex: 1,
        explanation: 'Sustained GFCF (~30%+ of GDP) builds long-term capital stock, distinguishing investment-led growth from fleeting consumption booms.',
        difficulty: 'standard',
      },
      {
        stem: 'Why is "GDP" considered an incomplete indicator of genuine societal well-being in ecologically fragile mountain regions like Uttarakhand?',
        options: [
          'Because GDP overcounts unpaid women\'s forest/farm work',
          'Because GDP ignores income distribution, unpaid care/household labour, and counts disaster-reconstruction spending positively while failing to deduct natural capital depletion (forests, topsoil, glaciers)',
          'Because GDP only counts farming',
          'Because GDP cannot be computed for states',
        ],
        correctOptionIndex: 1,
        explanation: 'Even destructive resource extraction or post-disaster rebuilding adds to GDP, motivating supplementary metrics like Green GDP and Uttarakhand\'s GEP.',
        difficulty: 'standard',
      },
      {
        stem: 'If an Indian IT engineer resides and works on a 6-month project in Bengaluru for a German company, where is that output counted?',
        options: [
          'In Germany\'s GDP and India\'s GNP',
          'In India\'s GDP (produced inside Indian domestic territory) and if salaries remain to Indian residents, also India\'s GNP (while repatriated corporate profit affects NFIA)',
          'In neither country',
          'Only in Germany\'s GDP',
        ],
        correctOptionIndex: 1,
        explanation: 'Since production occurs within India\'s domestic boundary, the full value added sits in India\'s GDP; foreign parent profit repatriation is subtracted in NFIA.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which central statistical organization under the Ministry of Statistics and Programme Implementation (MoSPI) compiles and releases India\'s quarterly and annual GDP estimates?',
        options: [
          'Reserve Bank of India (RBI)',
          'National Statistical Office (NSO)',
          'SEBI',
          'Finance Commission',
        ],
        correctOptionIndex: 1,
        explanation: 'Following the 2019 merger of CSO and NSSO, the National Statistical Office (NSO) under MoSPI releases official national accounts.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the difference between "Production Taxes" (like land revenue or factory registration fees) and "Product Taxes" (like GST or excise duty) in Indian GVA accounting?',
        options: [
          'Production taxes depend directly on the number of units sold, while product taxes do not',
          'Production taxes are paid in relation to production regardless of the exact volume/value of output produced, whereas product taxes are levied per unit or value of each good/service transacted',
          'Both terms are completely identical',
          'Product taxes apply only to agriculture',
        ],
        correctOptionIndex: 1,
        explanation: 'GVA at Basic Prices includes net production taxes, whereas GDP at Market Prices adds net product taxes.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'Economic Planning, LPG Reforms (1991) & NITI Aayog',
    materialTitle: 'Economic Planning, LPG Reforms (1991) & NITI Aayog — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Five-Year Plans, 1991 LPG Reforms & NITI Aayog',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Economic Planning, LPG Reforms (1991) & NITI Aayog

## 1. Evolution of Indian Economic Planning (1950–2017)
Influenced by the Soviet model, the **Visvesvaraya Plan (1934)**, *Bombay Plan (1944)*, *Gandhian Plan*, and *People's Plan (M.N. Roy)*, India set up the **Planning Commission (15 March 1950, non-constitutional & non-statutory advisory body)** chaired ex-officio by the Prime Minister, alongside the **National Development Council (NDC, Aug 1952)**:
- **1st Plan (1951–56, Harrod–Domar Model):** Focused on **agriculture, irrigation & price stability** (Bhakra-Nangal, Hirakud).
- **2nd Plan (1956–61, P.C. Mahalanobis Model):** Rapid **heavy & basic industrialization** (Bhilai, Rourkela, Durgapur steel plants; *IPR 1956* "Commanding Heights").
- **3rd Plan (1961–66) & Plan Holiday (1966–69):** Disrupted by 1962/1965 wars & severe droughts; **Green Revolution** launched during the Annual Plans (1966–69).
- **4th Plan (1969–74):** Growth with stability; 14 banks nationalized (1969).
- **5th Plan (1974–79, D.P. Dhar):** ***Garibi Hatao*** & **Minimum Needs Programme**; terminated a year early by Janata Govt (**Rolling Plan, 1978–80**).
- **6th (1980–85) & 7th (1985–90) Plans:** Modernisation, telecom/IT seeds, employment programs (*NREP, RLEGP*).
- **8th Plan (1992–97):** Delayed by 1991 BoP crisis; shifted to **indicative planning** under LPG reforms (**Rao–Manmohan Model**).
- **9th to 12th Plans (1997–2017):** **11th Plan (2007–12)** *"Faster and More Inclusive Growth"*; **12th Plan (2012–17)** *"Faster, Sustainable and More Inclusive Growth"*—last Five-Year Plan!

## 2. The 1991 Balance of Payments Crisis & LPG Reforms
- **Trigger (1990–91):** Gulf War oil shock, Soviet collapse, high fiscal deficit (~8.4% of GDP), inflation (~13%+), and foreign exchange reserves falling below **$1.2 billion (~2 weeks of imports)**—forcing IMF conditionalities & gold pledging.
- **Three Pillars (New Economic Policy, July 1991 — PM P.V. Narasimha Rao & FM Dr. Manmohan Singh):**
  1. **Liberalization:** Abolished industrial **Licence Raj** except a tiny strategic/hazardous list; dismantled MRTP asset caps; liberalized interest rates & SEBI statutory powers (**SEBI Act, 1992**); rupee devaluation (~18–20%) & shift to market-determined **LERMS / unified exchange rate (1993)**; current-account convertibility (**1994**).
  2. **Privatization:** Reduced public-sector reserved list from 17 to 8 (now 2: atomic energy & railway operations); strategic/minority **Disinvestment** (creating DIPAM).
  3. **Globalization:** Slashed peak import customs tariffs dramatically; lifted Quantitative Restrictions (QRs); eased **FDI** caps; joined **WTO (1995)**.

## 3. NITI Aayog (Established 1 January 2015)
Replaced the 65-year-old Planning Commission to shift from top-down centralized fund allocation ("one-size-fits-all") to **Cooperative & Competitive Federalism**:
- **Structure:** **PM (Chairperson)**, **Governing Council** (all State CMs + UTs with legislatures + Lt. Governors), Vice-Chairperson, full-time & ex-officio members, CEO.
- **Key Initiatives:** **3-Year Action Agenda / 7-Year Strategy / 15-Year Vision**, **Aspirational Districts Programme** (includes **Udham Singh Nagar & Haridwar** in Uttarakhand!) & **Aspirational Blocks**, **Atal Innovation Mission (AIM)**, **SDG India Index**, **State Energy & Climate Index**, **Multidimensional Poverty Index (MPI)**, and **DMEO**.
- **Critical Difference from Planning Commission:** NITI Aayog has **NO power to allocate Plan grants/funds to States** (fiscal transfers sit with the Finance Ministry and Constitutional **Finance Commission**).

## 4. Key Revision Takeaways
- **1st Plan** = Harrod–Domar (Agriculture); **2nd Plan** = Mahalanobis (Heavy Industry); **12th Plan (2012–17)** = Final Five-Year Plan.
- **1991 LPG Reforms** ended **Licence Raj**, devalued the rupee, and replaced **FERA** later with **FEMA (1999)**.
- **NITI Aayog (1 Jan 2015)** is a **think-tank without fund-allocation authority**, driving **Cooperative & Competitive Federalism** and **Aspirational Districts/Blocks**.`,
    mcqs: [
      {
        stem: 'Which economic growth model underpinned India\'s First Five-Year Plan (1951–56), and which sector received its highest priority?',
        options: [
          'Mahalanobis Model; Heavy Steel Industry',
          'Harrod–Domar Model; Agriculture, Irrigation, and Community Development',
          'Lewis Dual-Sector Model; IT Exports',
          'Keynesian Model; Aviation',
        ],
        correctOptionIndex: 1,
        explanation: 'Drafted largely by K.N. Raj using Harrod–Domar capital-output intuition, the 1st Plan prioritized food security, irrigation dams, and post-Partition rehabilitation.',
        difficulty: 'foundation',
      },
      {
        stem: 'The Second Five-Year Plan (1956–61), focused on rapid heavy industrialization and capital goods (Bhilai, Rourkela, Durgapur), was formulated by:',
        options: ['D.R. Gadgil', 'Prof. P.C. Mahalanobis', 'John Mathai', 'M. Visvesvaraya'],
        correctOptionIndex: 1,
        explanation: 'Statistician P.C. Mahalanobis designed the 2nd Plan alongside the Industrial Policy Resolution of 1956 establishing public-sector "commanding heights".',
        difficulty: 'foundation',
      },
      {
        stem: 'During which Five-Year Plan (1974–79) was the "Minimum Needs Programme" launched alongside the slogan "Garibi Hatao" before being terminated a year early in 1978?',
        options: ['Third Plan', 'Fourth Plan', 'Fifth Five-Year Plan', 'Sixth Plan'],
        correctOptionIndex: 2,
        explanation: 'Prepared by D.P. Dhar, the 5th Plan prioritized poverty eradication and self-reliance; the Janata Government introduced the Rolling Plan in 1978.',
        difficulty: 'foundation',
      },
      {
        stem: 'What was the immediate macroeconomic trigger behind India\'s landmark July 1991 Liberalization, Privatization, and Globalization (LPG) reforms?',
        options: [
          'Massive foreign exchange surplus',
          'A severe Balance of Payments crisis where foreign exchange reserves dropped to barely two weeks of essential imports (~$1.2 billion), alongside high fiscal deficits and inflation',
          'Sudden abolition of RBI',
          'Over-production of semiconductors',
        ],
        correctOptionIndex: 1,
        explanation: 'Triggered by Gulf War oil spikes and unsustainable external debt/fiscal deficits, the 1991 BoP crisis led PM Narasimha Rao and FM Manmohan Singh to dismantle the Licence–Permit Raj.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which statutory Act replaced the rigid Foreign Exchange Regulation Act (FERA, 1973) in 1999 to facilitate external trade and liberalize forex management?',
        options: [
          'FRBM Act, 2003',
          'FEMA (Foreign Exchange Management Act), 1999',
          'MRTP Act, 1969',
          'SEBI Act, 1992',
        ],
        correctOptionIndex: 1,
        explanation: 'Replacing criminalized FERA violations with civil compounding under FEMA (1999, effective June 2000) aligned currency governance with open trade.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the single most important institutional difference between the erstwhile Planning Commission (1950–2014) and NITI Aayog (established 1 January 2015)?',
        options: [
          'NITI Aayog includes Supreme Court Judges',
          'Unlike the Planning Commission, NITI Aayog has NO power to allocate discretionary Plan funds to States and operates purely as a collaborative policy think-tank promoting Cooperative & Competitive Federalism',
          'Planning Commission was created by Article 280',
          'NITI Aayog passes Union Budgets directly',
        ],
        correctOptionIndex: 1,
        explanation: 'Abolishing "Plan vs Non-Plan" expenditure distinctions and central Planning Commission grants restored fiscal devolution primacy to the Finance Commission.',
        difficulty: 'standard',
      },
      {
        stem: 'Who serves as the ex-officio Chairperson of NITI Aayog and who sits on its Governing Council?',
        options: [
          'Union Finance Minister; State Finance Secretaries',
          'Prime Minister as Chairperson; Governing Council includes Chief Ministers of all States & UTs with legislatures and Lt. Governors of other UTs',
          'President of India; all MPs',
          'RBI Governor; all District Magistrates',
        ],
        correctOptionIndex: 1,
        explanation: 'The PM chairs NITI Aayog while State CMs sit inside its Governing Council—replacing the earlier Planning Commission + separate NDC dichotomy.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which two districts of Uttarakhand were selected under NITI Aayog\'s "Aspirational Districts Programme" (launched 2018) to accelerate health, nutrition, education, and financial inclusion indicators?',
        options: [
          'Dehradun and Nainital',
          'Haridwar and Udham Singh Nagar',
          'Chamoli and Pithoragarh',
          'Almora and Bageshwar',
        ],
        correctOptionIndex: 1,
        explanation: 'Haridwar and Udham Singh Nagar were Uttarakhand\'s two Aspirational Districts ranked regularly on NITI Aayog\'s delta progress dashboard (followed by several mountain blocks under Aspirational Blocks).',
        difficulty: 'standard',
      },
      {
        stem: 'Which plan period was famously termed the "Plan Holiday" (1966–1969), during which India launched the High-Yielding Varieties (Green Revolution) strategy via three Annual Plans?',
        options: ['1956–1959', '1966–1969', '1978–1980', '1990–1992'],
        correctOptionIndex: 1,
        explanation: 'Following the 1965 Indo-Pak war and successive severe droughts (1965–67), India deferred the 4th Plan and ran three Annual Plans.',
        difficulty: 'foundation',
      },
      {
        stem: 'In which Five-Year Plan did India formally embrace "Indicative Planning" (guiding market participants rather than state physical command targets) alongside the 1991 reforms?',
        options: ['Sixth Plan', 'Eighth Five-Year Plan (1992–97)', 'Third Plan', 'Fifth Plan'],
        correctOptionIndex: 1,
        explanation: 'The 8th Plan (delayed by 1990–92 political/BoP turmoil) shifted planning toward indicative private-sector facilitation and human development.',
        difficulty: 'standard',
      },
      {
        stem: 'Which 1969 anti-monopoly statute was eventually replaced by the Competition Act, 2002 (creating the Competition Commission of India) to foster market efficiency rather than penalize firm size alone?',
        options: [
          'Industries (Development and Regulation) Act, 1951',
          'MRTP Act (Monopolies and Restrictive Trade Practices Act), 1969',
          'Essential Commodities Act, 1955',
          'Companies Act, 1956',
        ],
        correctOptionIndex: 1,
        explanation: 'Based on the Raghavan Committee report, the Competition Act (2002) shifted regulatory focus from sheer asset size ("MRTP companies") to curbing anti-competitive abuse of dominance.',
        difficulty: 'standard',
      },
      {
        stem: 'What was the central theme of India\'s Twelfth and final Five-Year Plan (2012–2017)?',
        options: [
          'Heavy Industry and Defence Self-Reliance',
          'Faster, Sustainable and More Inclusive Growth',
          'Zero-Deficit Privatization',
          'Garibi Hatao Alone',
        ],
        correctOptionIndex: 1,
        explanation: 'The 12th Plan added "Sustainable" to the 11th Plan\'s "Faster and More Inclusive Growth" mandate before Five-Year Plans concluded in March 2017.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which NITI Aayog flagship initiative fosters school tinkering labs (Atal Tinkering Labs) and university/sector incubators (Atal Incubation Centres) across Indian districts including Uttarakhand?',
        options: [
          'PM Gati Shakti',
          'Atal Innovation Mission (AIM)',
          'DMEO',
          'Ek Bharat Shreshtha Bharat',
        ],
        correctOptionIndex: 1,
        explanation: 'Set up in 2016 within NITI Aayog, AIM nurtures innovation from Class 6–12 STEM tinkering labs up to deep-tech incubators.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is meant by "Competitive Federalism" championed by NITI Aayog through indices like the SDG India Index, Export Preparedness Index, and Health Index?',
        options: [
          'States waging trade wars against each other',
          'Ranking States transparently on objective governance and outcome benchmarks to spur healthy peer competition and policy learning among State Governments',
          'Allowing States to print separate currencies',
          'Eliminating Central GST transfers',
        ],
        correctOptionIndex: 1,
        explanation: 'Public outcome indices encourage states—including Uttarakhand (a strong performer in SDG India Index & Export/Himalayan rankings)—to improve service delivery.',
        difficulty: 'standard',
      },
      {
        stem: 'Who chaired the 1944 "Bombay Plan" prepared by eight leading Indian industrialists envisioning state-supported infrastructure and industrial growth prior to Independence?',
        options: [
          'Jawaharlal Nehru',
          'Purshotamdas Thakurdas and J.R.D. Tata (co-authors including G.D. Birla, Lala Shri Ram, Kasturbhai Lalbhai, Ardeshir Dalal, A.D. Shroff, John Mathai)',
          'M.N. Roy',
          'Shriman Narayan Agarwal',
        ],
        correctOptionIndex: 1,
        explanation: 'Published in 1944–45 ("A Plan of Economic Development for India"), the Bombay Plan reflected early nationalist business consensus on public infrastructure investment.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'Poverty, Inequality, Unemployment & Human Capital',
    materialTitle: 'Poverty, Inequality, Unemployment & Human Capital — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Poverty, Inequality, Jobs & Human Capital',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Poverty, Inequality, Unemployment & Human Capital

## 1. Evolution of Poverty Measurement in India
- **Early Pre-Independence:** Dadabhai Naoroji (*Jail Cost of Living*); *National Planning Committee (1938)*.
- **Post-Independence Official Committees:**
  - **Alagh Committee (1979):** Fixed nutritional norms: **2,400 kcal/day (rural)** & **2,100 kcal/day (urban)**.
  - **Lakdawala Committee (1993):** Disaggregated state-specific poverty lines anchored to CPI-AL & CPI-IW.
  - **Tendulkar Committee (2009):** Shifted away from calorie-only anchor to broader consumption basket (**education + health included**), using Mixed Recall Period (MRP), estimating **21.9% national poverty in 2011–12** (urban Rs 1,000, rural Rs 816/capita/month).
  - **Rangarajan Committee (2014):** Raised norm using Modified Mixed Recall Period (MMRP) to **29.5% in 2011–12** (rural Rs 972, urban Rs 1,407/capita/month).
- **Multidimensional Poverty Index (MPI):** Jointly pioneered by **UNDP & OPHI (Alkire–Foster methodology)** and adapted by **NITI Aayog's National MPI** across **3 Dimensions (Health, Education, Standard of Living)** and **12 Indicators** (adding Maternal Health and Bank Accounts to the global 10)—recording sharp declines in multidimensional deprivation across India and Uttarakhand (aided by sanitation, cooking fuel, electricity, housing, and banking expansion).

## 2. Inequality Metrics
- **Lorenz Curve & Gini Coefficient:** Lorenz Curve plots cumulative % of population (x-axis) against cumulative % of income/wealth (y-axis) compared to the **45° Line of Perfect Equality**. **Gini Coefficient = Area between Equality Line & Lorenz Curve / Total Area below Equality Line**, ranging from **0 (perfect equality)** to **1 (extreme inequality)**.
- **Kuznets Inverted-U Curve:** Hypothesizes inequality initially rises during early industrialization before narrowing as education and welfare deepen (debated by Piketty).

## 3. Types of Unemployment & Labour Force Surveys
- **Disguised Unemployment:** Marginal productivity of extra labour is **zero**—widespread in **rainfed hill terrace agriculture** in Uttarakhand.
- **Seasonal Unemployment:** Off-season slack in monsoon/winter agriculture or seasonal Char Dham tourism.
- **Structural Unemployment:** Mismatch between workers' outdated skills and modern industry/IT demand.
- **Frictional Unemployment:** Temporary job-search transitions.
- **Cyclical Unemployment:** Macroeconomic demand downturns (Keynesian).
- **PLFS (Periodic Labour Force Survey by NSO):** Tracks **LFPR (Labour Force Participation Rate)**, **WPR (Worker Population Ratio)**, and **Unemployment Rate (UR)** via **Usual Status (ps+ss, 365 days)** and **Current Weekly Status (CWS, 7 days)**.

## 4. Human Capital & Demographic Dividend
- **Human Capital (Theodore Schultz / Gary Becker):** Skills, health, nutrition, and education embodied in people.
- **India's Demographic Dividend:** Large working-age cohort (15–64 years) peaking over 2020–2040s—convertible into prosperity **only** via quality foundational learning (**NEP 2020, NIPUN Bharat**), preventive healthcare (**Ayushman Bharat HWCs**), and rising **Female LFPR**.

## 5. Key Revision Takeaways
- **Alagh (1979)** set **2,400 / 2,100 kcal**; **Tendulkar (2009)** shifted away from pure calorie anchor to include **health & education** (**21.9%** in 2011–12).
- **NITI Aayog National MPI** spans **3 dimensions, 12 indicators** (Alkire–Foster method).
- **Gini = 0** means total equality; **Gini = 1** means total inequality; **Disguised unemployment** implies **zero marginal productivity of labour**.`,
    mcqs: [
      {
        stem: 'Which expert committee first introduced the nutritional calorie benchmarks of 2,400 kcal/day (rural) and 2,100 kcal/day (urban) for India\'s official poverty line?',
        options: [
          'Lakdawala Committee (1993)',
          'Y.K. Alagh Task Force (1979)',
          'Tendulkar Committee (2009)',
          'Rangarajan Committee (2014)',
        ],
        correctOptionIndex: 1,
        explanation: 'The 1979 Task Force on Projections of Minimum Needs and Effective Consumption Demand led by Y.K. Alagh established the 2,400/2,100 kcal poverty line norms.',
        difficulty: 'foundation',
      },
      {
        stem: 'What major methodological departure did the Suresh Tendulkar Committee (2009) make compared to the earlier Lakdawala methodology?',
        options: [
          'It raised rural calorie requirement to 3,500 kcal',
          'It moved away from a calorie-anchored poverty line, incorporated private expenditure on health and education, and adopted a uniform consumption basket using Mixed Recall Period (MRP)',
          'It measured poverty purely by smartphone ownership',
          'It abolished urban poverty lines',
        ],
        correctOptionIndex: 1,
        explanation: 'The Tendulkar Committee moved to the urban poverty-line basket extended to rural areas with health/education spending, yielding 21.9% national poverty for 2011–12.',
        difficulty: 'standard',
      },
      {
        stem: 'Which three broad dimensions—and how many total indicators—constitute NITI Aayog\'s National Multidimensional Poverty Index (MPI)?',
        options: [
          'Income, Wealth, and Taxes (5 indicators)',
          'Health, Education, and Standard of Living (12 indicators, adding Maternal Health and Bank Accounts to the global 10-indicator OPHI/UNDP framework)',
          'Employment, Inflation, and Exports (8 indicators)',
          'Forests, Rivers, and Glaciers (6 indicators)',
        ],
        correctOptionIndex: 1,
        explanation: 'Using the Alkire–Foster method, NITI Aayog\'s National MPI evaluates 3 equal-weighted dimensions across 12 non-monetary deprivation indicators.',
        difficulty: 'foundation',
      },
      {
        stem: 'In a Lorenz Curve analysis, what does a Gini Coefficient value of "0" represent?',
        options: [
          'Maximum absolute inequality (one person holds all income)',
          'Perfect equality (every household holds an identical share of income/wealth)',
          'Zero economic growth',
          '50% poverty rate',
        ],
        correctOptionIndex: 1,
        explanation: 'When the Lorenz Curve coincides with the 45-degree line of equality, the area between them is zero, giving Gini = 0 (while Gini = 1 denotes complete inequality).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which form of unemployment occurs widely on small terraced farms in Uttarakhand hills when removing one or two family workers does NOT reduce total farm output (marginal productivity of labour is zero)?',
        options: [
          'Cyclical Unemployment',
          'Disguised Unemployment',
          'Frictional Unemployment',
          'Seasonal Unemployment only',
        ],
        correctOptionIndex: 1,
        explanation: 'Disguised (hidden) unemployment reflects excess workers absorbed on tiny family holdings with near-zero marginal product.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is "Structural Unemployment"?',
        options: [
          'Brief joblessness while switching jobs for higher salary',
          'Long-term unemployment caused by a fundamental mismatch between workers\' existing skills/location and evolving technological or industrial job demand',
          'Unemployment solely during harvest months',
          'Recessionary layoff for one quarter',
        ],
        correctOptionIndex: 1,
        explanation: 'Structural unemployment requires retraining, skilling (UKSDM/PMKVY), and industrial diversification rather than mere short-term fiscal stimulus.',
        difficulty: 'foundation',
      },
      {
        stem: 'In the Periodic Labour Force Survey (PLFS) conducted by India\'s NSO, how is the "Labour Force Participation Rate (LFPR)" defined?',
        options: [
          'Employed workers divided by total national GDP',
          'Percentage of persons in the population aged 15+ who are in the labour force (either working OR actively seeking/available for work)',
          'Only government employees divided by total adults',
          'Persons above 60 years receiving pensions',
        ],
        correctOptionIndex: 1,
        explanation: 'LFPR = (Employed + Unemployed seeking work) / Total Population (15+ years); note that discouraged non-seekers drop out of the labour force.',
        difficulty: 'standard',
      },
      {
        stem: 'Which macroeconomic hypothesis by Simon Kuznets posits that as an economy industrializes from agriculture, inequality first widens and later narrows as development matures?',
        options: ['Phillips Curve', 'Laffer Curve', 'Kuznets Inverted-U Curve', 'Okun\'s Law'],
        correctOptionIndex: 2,
        explanation: 'The Kuznets Inverted-U Curve charts inequality against per-capita income (and later inspired the "Environmental Kuznets Curve" for pollution vs income).',
        difficulty: 'standard',
      },
      {
        stem: 'What does "Demographic Dividend" mean for India, and what condition is essential to convert it into sustained prosperity?',
        options: [
          'An aging population above age 75 automatically increases taxes',
          'A rising share of the working-age population (15–64 years) lowers dependency ratios—yielding rapid growth ONLY if backed by quality health, foundational education, skill alignment, and female job creation',
          'Rapid population explosion guarantees high per-capita GDP automatically',
          'Banning rural-to-urban migration',
        ],
        correctOptionIndex: 1,
        explanation: 'Without human-capital investment and productive jobs, a youth bulge risks turning into a demographic liability.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under which NEP 2020 foundational mission does India target universal Foundational Literacy and Numeracy (FLN) for every child by Grade 3 (by 2026–27)?',
        options: [
          'RUSA',
          'NIPUN Bharat Mission',
          'Atal Tinkering Mission',
          'PM SHRI only',
        ],
        correctOptionIndex: 1,
        explanation: 'National Initiative for Proficiency in Reading with Understanding and Numeracy (NIPUN Bharat) anchors NEP 2020\'s human-capital base.',
        difficulty: 'foundation',
      },
      {
        stem: 'What does the "Headline Poverty vs Household Consumption Expenditure Survey (HCES 2022–23)" finding highlight about methodological recall periods?',
        options: [
          'Recall periods have zero effect on expenditure estimates',
          'Longer vs shorter recall windows (URP vs MRP vs MMRP) affect measured consumption significantly because households recall frequent food/personal spending more accurately over 7 days than 30 days',
          'HCES only surveys billionaires',
          'HCES measures industrial steel output',
        ],
        correctOptionIndex: 1,
        explanation: 'MMRP (Modified Mixed Recall Period) uses 7-day recall for perishables/beverages, 365-day for durables/education/health, and 30-day for the rest.',
        difficulty: 'advanced',
      },
      {
        stem: 'According to NSO PLFS "Usual Status (Principal + Subsidiary)" criteria, how is a person counted as employed if they pursued an economic activity for at least 30 days during the reference year despite not doing it for the majority of the year?',
        options: [
          'Not employed under any status',
          'Employed under Subsidiary Economic Status (ss), included in Usual Status (ps+ss)',
          'Classified as permanently retired',
          'Counted only in Current Daily Status',
        ],
        correctOptionIndex: 1,
        explanation: 'Principal Status (ps) requires majority time (>=183 days or relative majority), while Subsidiary Status (ss) captures at least 30 days of work—often capturing seasonal rural female farm workers.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which international annual index published by the World Bank measures how effectively a child born today reaches full health and educational productivity by age 18?',
        options: [
          'Global Hunger Index',
          'Human Capital Index (HCI)',
          'Ease of Doing Business Index',
          'Corruption Perceptions Index',
        ],
        correctOptionIndex: 1,
        explanation: 'The World Bank\'s Human Capital Index combines child survival, expected & learning-adjusted years of schooling, and adult health/stunting metrics.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which two indicators inside NITI Aayog\'s National MPI capture the "Education" dimension?',
        options: [
          'Number of smartphones and university PhDs',
          'Years of Schooling and School Attendance',
          'Adult literacy alone and STEM patents',
          'Tuition fees paid and coaching hours',
        ],
        correctOptionIndex: 1,
        explanation: 'In the Alkire–Foster MPI, Education (1/3rd total weight) comprises two equal indicators: Years of Schooling (1/6th) and School Attendance (1/6th).',
        difficulty: 'standard',
      },
      {
        stem: 'Why does "Frictional Unemployment" persist even in a rapidly growing full-employment economy?',
        options: [
          'Because workers are permanently banned from relocating',
          'Because time and information search frictions inevitably exist as individuals leave one job, graduate, or relocate while matching to a better new job',
          'Because machines replace all workers overnight',
          'Because inflation is zero',
        ],
        correctOptionIndex: 1,
        explanation: 'Frictional unemployment is short-run transitional job-search time and forms part of the "natural rate of unemployment".',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'RBI Functions & Monetary Policy Framework',
    materialTitle: 'RBI Functions & Monetary Policy Framework — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Reserve Bank of India & Monetary Policy Tools',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# RBI Functions & Monetary Policy Framework

## 1. Establishment & Core Functions of the Reserve Bank of India (RBI)
- **Statutory Origin:** Established on **1 April 1935** under the **RBI Act, 1934** following the **Hilton Young Commission (1926)**; **nationalized on 1 January 1949**. Central office moved permanently from Calcutta to **Mumbai (1937)**.
- **Seven Core Functions:**
  1. **Monetary Authority:** Formulates and implements monetary policy to maintain **price stability while keeping in mind growth**.
  2. **Issuer of Currency (Section 22, RBI Act):** Sole issuer of all bank notes (**Rs 2 to Rs 2,000**; note: **Rs 1 note & all coins** are issued by the **Government of India / Finance Ministry** under the *Coinage Act, 2011*, signed by the **Finance Secretary**, though distributed by RBI!). Operates under **Minimum Reserve System (1956)** holding minimum **Rs 200 crore** reserve (at least Rs 115 crore in gold + Rs 85 crore foreign securities).
  3. **Banker & Debt Manager to Government:** Manages Central & State accounts, **Ways and Means Advances (WMA)**, and State Development Loans (SDLs).
  4. **Banker's Bank & Lender of Last Resort (LOLR):** Holds commercial bank CRR reserves, clears inter-bank settlements (RTGS/NEFT), and supplies emergency liquidity to solvent banks.
  5. **Regulator & Supervisor of Financial System:** Licenses banks (*Banking Regulation Act, 1949*), NBFCs, Urban Cooperative Banks, and payment systems (NPCI oversight).
  6. **Custodian of Foreign Exchange Reserves (FEMA, 1999):** Holds Foreign Currency Assets, Gold, SDRs, and IMF Reserve Tranche Position; dampens excessive Rupee volatility (*managed float*).
  7. **Developmental & Financial Inclusion Role:** **Priority Sector Lending (PSL — 40% target for SCBs)**, Financial Literacy Centres, e-RUPI / **CBDC (Digital Rupee)** pilots.

## 2. Monetary Policy Committee (MPC) & Flexible Inflation Targeting
- **Legal Mandate (Amended RBI Act, 1934 in 2016; Urjit Patel Committee):** **Flexible Inflation Targeting (FIT)** targeting **CPI-Combined headline inflation at 4% +/- 2% (2% to 6% tolerance band)**. If inflation breaches 2%–6% for **three consecutive quarters**, RBI must submit a formal written report to the Government explaining causes and remedies.
- **MPC Composition (6 Members):** **3 from RBI** (**RBI Governor as ex-officio Chairperson with casting vote**, Dy. Governor in-charge of Monetary Policy, one RBI officer) + **3 External Government-appointed experts** (4-year non-renewable term). Decisions by **majority vote**.

## 3. Quantitative vs Qualitative Monetary Policy Instruments
| Instrument | Mechanism & Impact on Liquidity / Credit |
|---|---|
| **Repo Rate (Policy Rate)** | Interest rate at which RBI lends overnight/short-term funds to banks against eligible G-secs under LAF. **Raising Repo** makes loans costlier → curbs liquidity & inflation (**Hawkish / Tightening**). |
| **Standing Deposit Facility (SDF, introduced 2022)** | **Floor of the LAF corridor** (replacing fixed-rate Reverse Repo as main floor); banks park surplus overnight cash with RBI **WITHOUT collateral**. |
| **Marginal Standing Facility (MSF) & Bank Rate** | **Ceiling of the LAF corridor** (penal overnight borrowing dipping into SLR securities; Bank Rate aligns with MSF for long-term/penal defaults). |
| **CRR (Cash Reserve Ratio)** | % of bank **NDTL** kept mandatorily in **cash with RBI** (earns **zero interest**; statutory minimum/maximum ceilings removed in 2006). |
| **SLR (Statutory Liquidity Ratio)** | % of bank **NDTL** maintained by banks themselves in **liquid gold, cash, or approved G-Secs** (statutory cap **40%** under Banking Regulation Act). |
| **Open Market Operations (OMO)** | Outright buying/selling of Government Securities by RBI to inject or absorb durable rupee liquidity (**MSS** sterilizes excess forex inflows). |
| **Qualitative / Selective Tools** | LTV margin requirements, consumer credit caps, moral suasion, **PCA (Prompt Corrective Action)** framework. |

## 4. Key Revision Takeaways
- **RBI established 1 April 1935**, **nationalized 1 January 1949**; **Minimum Reserve System = Rs 200 crore** (Rs 115 Cr gold + Rs 85 Cr forex).
- **Rs 1 note** = signed by **Finance Secretary (Ministry of Finance)**; all other notes signed by **RBI Governor**.
- **MPC = 6 members (3 RBI + 3 External)** targeting **4% ± 2% CPI-Combined inflation**.
- **LAF Corridor:** **SDF (Floor) < Policy Repo Rate < MSF (Ceiling)**. **CRR earns 0% interest**; **SLR earns return via G-secs**.`,
    mcqs: [
      {
        stem: 'On the recommendation of which Commission was the Reserve Bank of India (RBI) established under the RBI Act, 1934 (commencing operations on 1 April 1935)?',
        options: [
          'Babington Smith Committee',
          'Hilton Young Commission (Royal Commission on Indian Currency and Finance, 1926)',
          'Narasimham Committee',
          'Urjit Patel Committee',
        ],
        correctOptionIndex: 1,
        explanation: 'The Hilton Young Commission (1926) recommended setting up a central bank ("Reserve Bank of India"); RBI was nationalized later on 1 January 1949.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who issues and signs the One Rupee currency note in India?',
        options: [
          'Governor of the Reserve Bank of India',
          'Ministry of Finance, Government of India, bearing the signature of the Union Finance Secretary',
          'Chairman of State Bank of India',
          'Comptroller and Auditor General',
        ],
        correctOptionIndex: 1,
        explanation: 'Under the Coinage Act, coins and Rs 1 notes are issued by the Government of India (Finance Secretary signs Rs 1 notes), whereas Rs 2 and higher notes are issued by RBI under Governor\'s signature.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the Minimum Reserve System adopted by the RBI in 1956–57 for backing currency issuance, what minimum total reserve of gold and foreign securities must RBI maintain?',
        options: [
          'Rs 50 crore',
          'Rs 200 crore (at least Rs 115 crore in gold coin/bullion and Rs 85 crore in foreign securities)',
          'Rs 1,000 crore strictly in silver',
          '100% gold backing for every rupee',
        ],
        correctOptionIndex: 1,
        explanation: 'Moving away from the rigid Proportional Reserve System, the Minimum Reserve System requires a Rs 200 crore floor (minimum Rs 115 Cr gold).',
        difficulty: 'standard',
      },
      {
        stem: 'What is the statutory inflation target assigned to India\'s Monetary Policy Committee (MPC) under the Flexible Inflation Targeting (FIT) framework?',
        options: [
          '2% Wholesale Price Index (WPI) strictly',
          '4% Consumer Price Index (CPI-Combined) with a tolerance band of +/- 2% (i.e., 2% to 6%)',
          '6% to 10% GDP Deflator',
          '0% inflation ceiling',
        ],
        correctOptionIndex: 1,
        explanation: 'Enacted in 2016 following the Urjit Patel Committee report, the CPI-C target of 4% (±2%) triggers mandatory explanatory reporting to the Centre if missed for three consecutive quarters.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the composition and voting rule of the Monetary Policy Committee (MPC) established under Section 45ZB of the RBI Act?',
        options: [
          '5 Finance Ministry officials + 1 RBI Governor',
          '6 members: 3 from RBI (Governor as ex-officio Chair with second/casting vote, Dy. Governor, 1 officer) and 3 external members nominated by the Central Government',
          '12 State Finance Ministers',
          'Only the RBI Governor decides rates unilaterally',
        ],
        correctOptionIndex: 1,
        explanation: 'Each member holds one vote; in case of a 3–3 tie, the RBI Governor exercises a deciding casting vote.',
        difficulty: 'foundation',
      },
      {
        stem: 'In the RBI\'s Liquidity Adjustment Facility (LAF) corridor introduced in April 2022, which instrument serves as the COLLATERAL-FREE "Floor" rate absorbing overnight surplus bank liquidity?',
        options: [
          'Marginal Standing Facility (MSF)',
          'Standing Deposit Facility (SDF)',
          'Cash Reserve Ratio (CRR)',
          'Bank Rate',
        ],
        correctOptionIndex: 1,
        explanation: 'Unlike Reverse Repo (which required RBI to pledge G-secs), the SDF absorbs excess bank liquidity overnight without requiring collateral, fixing the LAF floor below Repo.',
        difficulty: 'standard',
      },
      {
        stem: 'What is the fundamental operational difference between Cash Reserve Ratio (CRR) and Statutory Liquidity Ratio (SLR)?',
        options: [
          'CRR earns 10% interest while SLR earns zero',
          'CRR must be parked strictly as non-interest-bearing cash with the RBI, whereas SLR is held by the banks themselves in approved liquid assets (G-secs, gold, cash) that earn returns',
          'SLR applies only to cooperative banks while CRR applies only to SBI',
          'Both must be held purely in US Dollars',
        ],
        correctOptionIndex: 1,
        explanation: 'CRR directly immobilizes cash balances at RBI earning 0% interest; SLR mandates holding safe liquid securities (supporting sovereign borrowing while preserving bank liquidity).',
        difficulty: 'foundation',
      },
      {
        stem: 'When RBI sells Government Securities in the Open Market (OMO sale) or hikes the Policy Repo Rate, what monetary stance is it executing?',
        options: [
          'Expansionary / Dovish monetary policy to boost borrowing',
          'Contractionary / Hawkish ("Dear Money") policy to drain excess liquidity and tame inflation',
          'Fiscal stimulus',
          'Fixed exchange rate peg',
        ],
        correctOptionIndex: 1,
        explanation: 'Selling G-secs drains rupee liquidity from the banking system and raising Repo makes borrowing costlier, cooling aggregate demand and inflation.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the purpose of "Market Stabilisation Scheme (MSS)" bonds issued in coordination between RBI and the Government of India?',
        options: [
          'To fund the annual fiscal deficit',
          'To "sterilize" (absorb) excess domestic rupee liquidity created when RBI buys heavy foreign-capital inflows to prevent sharp Rupee appreciation',
          'To bail out private airlines',
          'To pay agricultural subsidies directly',
        ],
        correctOptionIndex: 1,
        explanation: 'Proceeds of MSS T-bills/securities are sequestered in a dedicated account at RBI rather than spent on the budget, purely neutralizing excess forex liquidity.',
        difficulty: 'advanced',
      },
      {
        stem: 'Under Priority Sector Lending (PSL) norms, what percentage of Adjusted Net Bank Credit (ANBC) must Domestic Scheduled Commercial Banks direct toward sectors like agriculture, MSMEs, education, housing, and weaker sections?',
        options: ['15%', '25%', '40%', '75%'],
        correctOptionIndex: 2,
        explanation: 'Domestic SCBs must achieve 40% PSL (75% for Regional Rural Banks and Small Finance Banks), with sub-targets for agriculture (18%) and weaker sections (12%).',
        difficulty: 'standard',
      },
      {
        stem: 'What are "Ways and Means Advances (WMA)" extended by the RBI to Central and State Governments (including Uttarakhand)?',
        options: [
          'Permanent non-repayable budget grants',
          'Temporary short-term overdraft/advances to bridge temporary mismatches between government cash receipts and expenditures',
          'Long-term 30-year infrastructure loans',
          'Foreign currency grants from IMF',
        ],
        correctOptionIndex: 1,
        explanation: 'Replacing ad-hoc Treasury Bills in 1997, WMA prevents automatic monetization of deficits while helping states smooth short-term cash timing gaps.',
        difficulty: 'standard',
      },
      {
        stem: 'Which four components comprise India\'s official Foreign Exchange Reserves managed by the RBI?',
        options: [
          'Domestic coins, corporate bonds, real estate, and equities',
          'Foreign Currency Assets (FCA), Gold Reserves, Special Drawing Rights (SDRs), and Reserve Tranche Position (RTP) with the IMF',
          'Only US Dollars and Euros',
          'Only CRR and SLR balances',
        ],
        correctOptionIndex: 1,
        explanation: 'Foreign Currency Assets form the largest share of India\'s forex reserves, supplemented by physical/book gold, IMF SDRs, and RTP.',
        difficulty: 'standard',
      },
      {
        stem: 'How does the "Marginal Standing Facility (MSF)" differ from regular Repo Window borrowing by Scheduled Commercial Banks?',
        options: [
          'MSF is cheaper than Repo',
          'MSF is a penal overnight emergency borrowing window (above Repo Rate) where banks can dip into their mandated SLR G-sec portfolio up to a specified % of NDTL',
          'MSF lasts for 10 years',
          'MSF is open to retail citizens directly',
        ],
        correctOptionIndex: 1,
        explanation: 'Introduced in 2011, MSF acts as the upper ceiling of the LAF corridor to prevent sudden overnight inter-bank call-rate spikes.',
        difficulty: 'standard',
      },
      {
        stem: 'What happens under the RBI\'s "Prompt Corrective Action (PCA)" framework when a commercial bank breaches risk thresholds on Capital Adequacy (CRAR), Net NPAs, or Return on Assets?',
        options: [
          'RBI immediately confiscates all customer deposits',
          'RBI imposes graded corrective restrictions on dividend distribution, branch expansion, risky lending, and management pay until financial health recovers',
          'The bank is exempt from CRR',
          'Parliament liquidates the bank immediately',
        ],
        correctOptionIndex: 1,
        explanation: 'PCA intervenes early to prevent weak banks from deteriorating into systemic insolvency.',
        difficulty: 'standard',
      },
      {
        stem: 'Why does RBI NOT pursue a rigidly "fixed" Rupee-to-Dollar exchange rate, instead operating a "Managed Float"?',
        options: [
          'Because RBI prohibits all international trade',
          'To allow exchange rate flexibility to reflect macroeconomic fundamentals while intervening intermittently via forex buying/selling solely to curb disorderly volatility',
          'Because IMF forbids central banks from holding reserves',
          'Because Indian exporters prefer unpredictable daily crashes',
        ],
        correctOptionIndex: 1,
        explanation: 'India\'s managed float (since 1993 unified exchange rate) avoids defending unsustainable artificial pegs while smoothing speculative shocks.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'Inflation Indices (CPI, WPI) & Financial Inclusion',
    materialTitle: 'Inflation Indices (CPI, WPI) & Financial Inclusion — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Inflation Metrics (CPI/WPI) & Financial Inclusion',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Inflation Indices (CPI, WPI) & Financial Inclusion

## 1. CPI vs WPI: Key Structural Comparison
| Metric | Consumer Price Index — CPI (Combined) | Wholesale Price Index — WPI |
|---|---|---|
| **Compiler & Ministry** | **NSO (National Statistical Office)**, MoSPI | **Office of Economic Adviser**, Ministry of Commerce & Industry (DPIIT) |
| **Base Year** | **2012 = 100** | **2011–12 = 100** |
| **Coverage of Services** | **YES** (health, education, transport, housing rent, telecom — major share!) | **NO Services** (goods only at first-point bulk wholesale stage!) |
| **Weight of Food Items** | Very high (~**45.86%** including beverages in CPI-C; Food & beverages ~39% food alone) | Moderate (~**24.4%** primary food + manufactured food combined) |
| **Taxes Included?** | **Includes** indirect retail taxes (GST, VAT, duties paid by consumers) | **Excludes** indirect taxes (to strip fiscal noise at factory/wholesale gate) |
| **Policy Anchor** | Official nominal anchor of **RBI Monetary Policy Committee (4% ± 2%)** | Used mainly as GDP deflator input for goods & business B2B contract indexing |

## 2. Inflation Concepts, Causes & Variants
- **Demand-Pull Inflation:** "Too much money chasing too few goods" (excess fiscal deficits, credit boom, pent-up consumption).
- **Cost-Push Inflation:** Rising input shocks—crude oil surges, disrupted supply chains, high MSPs/wages, or monsoon crop shocks (e.g., mountain highway landslides spiking hill vegetable prices!).
- **Core Inflation:** Headline inflation **excluding volatile Food and Fuel/Light components**—reveals persistent underlying demand pressures.
- **Disinflation** (falling *rate* of positive inflation) vs **Deflation** (negative inflation / falling general prices) vs **Reflation** (policy-induced recovery from slump) vs **Stagflation** (stagnant growth + high unemployment + high inflation simultaneously).
- **Shrinkflation & Skimpflation:** Reducing pack size or ingredient quality at the same sticker price.
- **Phillips Curve:** Short-run inverse trade-off between **inflation** and **unemployment** (breaks down during stagflation in the long run).

## 3. Financial Inclusion & Payment Architecture
- **Definition:** Timely, affordable access to formal savings, credit, insurance, pensions, and digital payments for vulnerable and remote populations.
- **Key Pillars:**
  - **PMJDY + Business Correspondents (Bank Mitras)** + **Small Finance Banks (SFBs)** & **Payments Banks** (differentiated banking licenses recommended by **Nachiket Mor Committee**).
  - **NPCI Stack:** **UPI** (Unified Payments Interface), **RuPay**, **AePS** (Aadhaar biometric micro-ATMs), **FASTag**, **BBPS**.
  - **Priority Sector Lending Certificates (PSLCs)** & **Account Aggregator (AA)** consent-based financial data sharing reducing collateral barriers for small Uttarakhand businesses.

## 4. Key Revision Takeaways
- **CPI-Combined** (compiled by **NSO**, base **2012**) includes **Services**, carries high **Food (~46%)** weight, and serves as **RBI's MPC target** (since 2014/2016).
- **WPI** (compiled by **OEA / Commerce Ministry**, base **2011–12**) covers **ONLY goods**, **excludes Services**, and excludes indirect taxes.
- **Core Inflation** = Headline CPI minus **Food and Energy/Fuel**; **Stagflation** = Stagnation + High Inflation.`,
    mcqs: [
      {
        stem: 'Which key structural component is captured in India\'s Consumer Price Index (CPI-Combined) but completely EXCLUDED from the Wholesale Price Index (WPI)?',
        options: [
          'Manufactured steel and cement',
          'Services (such as healthcare, education, transport fares, housing rent, and telecom)',
          'Raw agricultural cereals',
          'Crude mineral oils',
        ],
        correctOptionIndex: 1,
        explanation: 'WPI tracks bulk first-point wholesale transactions of goods only, whereas CPI-Combined captures retail prices of both goods and essential household services.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which government office compiles and publishes India\'s Wholesale Price Index (WPI) and what is its current base year?',
        options: [
          'NSO (MoSPI); Base 2012',
          'Office of the Economic Adviser (DPIIT, Ministry of Commerce & Industry); Base 2011–12',
          'Reserve Bank of India; Base 2015–16',
          'Labour Bureau Shimla; Base 2016',
        ],
        correctOptionIndex: 1,
        explanation: 'OEA under the Commerce Ministry publishes monthly WPI (Base 2011–12), while NSO publishes CPI-Rural/Urban/Combined (Base 2012), and Labour Bureau publishes CPI-IW (Base 2016).',
        difficulty: 'foundation',
      },
      {
        stem: 'How does "Core Inflation" differ from "Headline Inflation"?',
        options: [
          'Core inflation includes only gold and silver',
          'Core inflation strips out volatile Food and Fuel/Light items from Headline CPI to gauge sticky underlying demand pressures',
          'Core inflation measures wholesale agricultural seeds only',
          'Headline inflation ignores all food prices',
        ],
        correctOptionIndex: 1,
        explanation: 'Because temporary monsoon or oil spikes skew headline numbers, central banks monitor Core Inflation to assess persistent price momentum.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the precise economic difference between "Disinflation" and "Deflation"?',
        options: [
          'Both mean prices are falling below zero',
          'Disinflation is a slowdown in the positive rate of inflation (e.g., from 7% to 4%—prices still rise, just slower), whereas Deflation is a sustained negative rate where the general price level actually falls',
          'Deflation only occurs during war',
          'Disinflation means hyperinflation',
        ],
        correctOptionIndex: 1,
        explanation: 'Disinflation cools an overheating price rise while staying > 0%; deflation (< 0%) often triggers deferred spending and debt-deflation recessions.',
        difficulty: 'standard',
      },
      {
        stem: 'Which macroeconomic phenomenon is defined by the simultaneous persistence of high inflation, stagnant/slow GDP growth, and elevated unemployment?',
        options: ['Reflation', 'Stagflation', 'Hyper-growth', 'Liquidity Trap'],
        correctOptionIndex: 1,
        explanation: 'Stagflation (stagnation + inflation, e.g., 1970s oil shocks) challenges standard demand-management tools because tightening cools growth further while stimulus worsens inflation.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why did the RBI shift its nominal monetary policy anchor from WPI to CPI-Combined in 2014 (following the Urjit Patel Committee)?',
        options: [
          'Because WPI had too many services',
          'Because CPI-Combined reflects what ordinary households actually pay at retail—including food and services—strengthening inflation-expectations anchoring',
          'Because CPI excludes food entirely',
          'Because WPI was published only once a decade',
        ],
        correctOptionIndex: 1,
        explanation: 'CPI matches consumer cost-of-living far better than factory-gate WPI, making monetary communication credible for wage/price setters.',
        difficulty: 'standard',
      },
      {
        stem: 'Who generally benefits economically in the short run from unexpected moderate inflation, and who loses?',
        options: [
          'Fixed-income bondholders gain while borrowers lose',
          'Debtors/borrowers gain (repaying fixed nominal loans in cheaper real rupees), whereas fixed-income pensioners and fixed-rate creditors lose purchasing power',
          'Both lenders and pensioners always gain identically',
          'Only cash hoarders gain',
        ],
        correctOptionIndex: 1,
        explanation: 'Unanticipated inflation erodes the real value of fixed nominal contracts, transferring real wealth from lenders/fixed-income savers to borrowers.',
        difficulty: 'standard',
      },
      {
        stem: 'Which specialized Labour Bureau index (revised to Base Year 2016 = 100) is used across India to determine Dearness Allowance (DA) for government employees and industrial workers?',
        options: ['WPI', 'CPI-IW (Consumer Price Index for Industrial Workers)', 'GDP Deflator', 'IIP'],
        correctOptionIndex: 1,
        explanation: 'Compiled by the Labour Bureau (Shimla/Chandigarh), CPI-IW benchmarks DA revisions and minimum wage indexation.',
        difficulty: 'standard',
      },
      {
        stem: 'Which committee recommended creating "Differentiated Banks"—specifically Payments Banks and Small Finance Banks—to deepen financial inclusion?',
        options: [
          'Narasimham Committee I',
          'Nachiket Mor Committee (2013–14)',
          'Malegam Committee',
          'Rangarajan Committee',
        ],
        correctOptionIndex: 1,
        explanation: 'The Nachiket Mor Committee on Comprehensive Financial Services for Small Businesses and Low Income Households proposed Payments Banks and Small Finance Banks.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which operational restriction differentiates a "Payments Bank" (such as India Post Payments Bank) from a "Small Finance Bank" in India?',
        options: [
          'Payments Banks can issue unlimited Rs 10 crore corporate loans',
          'Payments Banks can accept restricted deposits (up to Rs 2 lakh per customer) and facilitate remittances/payments, but CANNOT undertake lending/credit cards, whereas Small Finance Banks both accept deposits and lend (with 75% PSL)',
          'Small Finance Banks cannot open branches in hills',
          'Payments Banks are unregulated by RBI',
        ],
        correctOptionIndex: 1,
        explanation: 'Payments Banks focus purely on transaction/payment inclusion without credit risk; SFBs target micro-credit for unserved farmers and MSMEs.',
        difficulty: 'standard',
      },
      {
        stem: 'How does the "Account Aggregator (AA)" framework regulated by the RBI help small entrepreneurs in hill towns access formal credit without heavy land collateral?',
        options: [
          'It prints free currency',
          'With explicit borrower consent, it securely shares verified digital cash-flow data (GST invoices, UPI/bank statements) so lenders can underwrite cash-flow loans rapidly',
          'It replaces all commercial banks with chit funds',
          'It auctions borrower land automatically',
        ],
        correctOptionIndex: 1,
        explanation: 'India\'s Account Aggregator framework enables digital cash-flow lending for thin-file MSMEs and self-employed workers.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which retail tax treatment distinguishes WPI from CPI-Combined?',
        options: [
          'WPI includes GST while CPI excludes GST',
          'CPI includes indirect taxes paid by consumers (GST, excise/VAT on fuel), whereas WPI (since 2011–12 series) excludes indirect taxes to measure pure producer/wholesale price shifts',
          'Neither index reflects indirect taxes',
          'Both include income tax',
        ],
        correctOptionIndex: 1,
        explanation: 'Stripping indirect taxes from the 2011–12 WPI series aligned it closer to a pure Producer Price concept.',
        difficulty: 'advanced',
      },
      {
        stem: 'What is "Shrinkflation" frequently observed in FMCG consumer markets during high input-cost inflation?',
        options: [
          'Massive fall in retail prices',
          'Keeping the packet price unchanged (e.g., Rs 10 biscuit pack) while quietly reducing the net weight/quantity inside',
          'Expanding product quantity at lower price',
          'Cutting interest rates to negative levels',
        ],
        correctOptionIndex: 1,
        explanation: 'Firms use shrinkflation to protect profit margins without triggering consumer sticker-price shock.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which organization operates India\'s Unified Payments Interface (UPI), RuPay, AePS, and Bharat Bill Payment System (BBPS)?',
        options: [
          'SEBI',
          'National Payments Corporation of India (NPCI)',
          'NABARD',
          'SBI alone',
        ],
        correctOptionIndex: 1,
        explanation: 'Established in 2008 as a not-for-profit umbrella entity promoted by RBI and IBA, NPCI powers India\'s interoperable retail payment rails.',
        difficulty: 'foundation',
      },
      {
        stem: 'What happens to Food & Beverages weight in CPI-Combined compared to WPI, explaining why monsoon shocks hit headline CPI much harder than WPI?',
        options: [
          'Food has zero weight in CPI',
          'Food & Beverages account for nearly 45.86% of CPI-Combined, far higher than primary/manufactured food\'s ~24.4% combined weight in WPI',
          'WPI is 90% food',
          'Food weight is identical in both',
        ],
        correctOptionIndex: 1,
        explanation: 'Heavy food share in Indian household consumption makes headline CPI highly sensitive to vegetable, pulse, and cereal supply shocks.',
        difficulty: 'standard',
      },
    ],
  },
];
