import { TopicContentPackage } from './types';

export const ECONOMY_PART_A: TopicContentPackage[] = [
  {
    topicTitle: 'GSDP Growth, Per Capita Income & Sectoral Composition',
    materialTitle: 'GSDP Growth, Per Capita Income & Sectoral Composition — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Uttarakhand GSDP, Per Capita Income & Sectoral Structure',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# GSDP Growth, Per Capita Income & Sectoral Composition

## 1. Structural Profile of Uttarakhand's Economy
Since its formation in 2000, Uttarakhand has evolved from a predominantly remittance-and-agrarian hill economy into one of India's fastest-growing smaller states—driven strongly by **industrialization in the plains/foothills** and **tourism/services in the mountains**:
- **Primary Sector (Agriculture, Forestry, Livestock, Mining):** Accounts for roughly **9–11% of GSVA** (declining share as non-farm sectors expand, though still employing the majority of rural hill households).
- **Secondary Sector (Manufacturing, Electricity/Hydropower, Construction):** Exceptionally high for a Himalayan state—contributing roughly **44–47% of GSVA** thanks to **SIDCUL industrial belts** (Haridwar, Pantnagar/Rudrapur, Sitarganj, Selaqui) and **hydroelectric generation** (Tehri, Vishnuprayag, Maneri Bhali, Dhauliganga).
- **Tertiary / Services Sector (Tourism, Hospitality, Transport, Real Estate, Public Administration, IT/Education):** Contributes roughly **42–46% of GSVA**, anchored by Char Dham & leisure tourism, educational hubs (Dehradun–Roorkee–Nainital), and trade.

## 2. Per Capita Income & Spatial Intra-State Disparity
- **Higher-than-National Per Capita Income:** Uttarakhand's **Per Capita NSDP** consistently exceeds the all-India average (ranking among India's top-performing states per state Economic Surveys).
- **The Plains vs Hills Dualism:** Over **70% of industrial output and tax revenue** concentrates in just three plains/valley districts (**Udham Singh Nagar, Haridwar, and Dehradun**), plus **Nainital** foothills—whereas interior hill districts (Almora, Pauri, Tehri, Rudraprayag, Bageshwar, Champawat, Pithoragarh, Chamoli, Uttarkashi) experience lower per-capita GDDP, fragmented landholdings, and out-migration ("money-order economy").
- **Gross Environmental Product (GEP):** Uttarakhand became the **first Indian state** to announce integrating **Gross Environmental Product (GEP)**—valuing forest carbon sequestration, glacier/spring water, soil conservation, and air quality—alongside conventional GDP/GSDP.

## 3. Base Year & Growth Measurement Concepts
- **GSDP vs NSDP:** Net State Domestic Product (NSDP) equals **GSDP minus Depreciation (Consumption of Fixed Capital)**.
- **Constant Prices (Real GSDP — 2011–12 Base)** adjust for inflation to measure physical volume growth, whereas **Current Prices (Nominal GSDP)** reflect prevailing market prices.

## 4. Key Revision Takeaways
- Unlike most mountain states dominated by services/agriculture, Uttarakhand's **Secondary Sector (~45% of GSVA)** rivals or slightly exceeds its Services Sector due to **SIDCUL manufacturing & hydropower**.
- Severe **plains-versus-hills regional disparity** (**Dehradun, Haridwar, Udham Singh Nagar** vs 10 hill districts) is a recurring UKPSC Mains analytical theme.
- **Uttarakhand pioneered Gross Environmental Product (GEP)** accounting to quantify mountain ecological services.`,
    mcqs: [
      {
        stem: 'Which structural feature makes Uttarakhand\'s sectoral GSVA composition unusual compared to most other Indian Himalayan states?',
        options: [
          'Primary agriculture generates over 75% of GSVA',
          'A remarkably large Secondary Sector (over 44% of GSVA) driven by SIDCUL manufacturing belts in the Terai/Doon plains and hydropower generation',
          'Zero contribution from tourism and hospitality services',
          'Absence of any industrial estates',
        ],
        correctOptionIndex: 1,
        explanation: 'Driven by the 2003 Special Industrial Package and SIDCUL hubs (Haridwar, Pantnagar, Sitarganj, Selaqui), Uttarakhand has one of India\'s highest manufacturing shares in GSVA.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which three districts account for the dominant share of Uttarakhand\'s industrial GSVA, private investment, and own-tax collections?',
        options: [
          'Chamoli, Rudraprayag, and Bageshwar',
          'Udham Singh Nagar, Haridwar, and Dehradun (alongside Nainital foothills)',
          'Almora, Champawat, and Pithoragarh',
          'Uttarkashi, Tehri, and Pauri',
        ],
        correctOptionIndex: 1,
        explanation: 'Flat connectivity, rail access, and SIDCUL infrastructure concentrate manufacturing and commercial services in Haridwar, Udham Singh Nagar, Dehradun, and Haldwani–Rudrapur corridors.',
        difficulty: 'foundation',
      },
      {
        stem: 'How is Net State Domestic Product (NSDP) derived mathematically from Gross State Domestic Product (GSDP)?',
        options: [
          'GSDP plus Net Indirect Taxes',
          'GSDP minus Depreciation (Consumption of Fixed Capital)',
          'GSDP divided by total state population',
          'GSDP minus agricultural output',
        ],
        correctOptionIndex: 1,
        explanation: 'Across both national and state accounts, Net = Gross minus Depreciation (Consumption of Fixed Capital); Per Capita Income = NSDP at factor/basic/market basis divided by mid-year population.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which innovative ecological accounting metric did Uttarakhand pioneer at the state level to evaluate forest, water, soil, and air ecosystem services alongside GSDP?',
        options: [
          'Carbon Credit GDP',
          'Gross Environmental Product (GEP)',
          'Himalayan Carbon Tax Index',
          'Gross Tourism Yield',
        ],
        correctOptionIndex: 1,
        explanation: 'Inspired by HESCO (Dr. Anil Prakash Joshi) and state policy initiatives, Uttarakhand adopted GEP valuation to recognize ecological contributions of mountain conservation.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the main analytical difference between GSDP at Constant Prices and GSDP at Current Prices?',
        options: [
          'Constant prices exclude services',
          'Constant prices remove price inflation using a base year (2011–12) to capture real output growth, whereas current prices measure nominal value at prevailing prices',
          'Current prices measure only dollar value',
          'Constant prices apply only to agriculture',
        ],
        correctOptionIndex: 1,
        explanation: 'Real growth rates must always be compared using Constant Prices (base year 2011–12) so inflation does not artificially inflate output figures.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why has Uttarakhand\'s Per Capita Income historically remained well above the national Indian average despite rugged terrain across 86% of its area?',
        options: [
          'Equal industrial factories in every alpine village',
          'Strong industrial/hydropower output in plains/valley pockets plus high-value tourism/remittances spread across a relatively modest population (~1.01 crore in 2011)',
          'Zero dependency on agriculture',
          'Oil reserves in Rudraprayag',
        ],
        correctOptionIndex: 1,
        explanation: 'High secondary/tertiary GSDP in Dehradun, Haridwar, Udham Singh Nagar, and Nainital pulls the state\'s average Per Capita NSDP well above the national mean, masking intra-state hill-plain gaps.',
        difficulty: 'standard',
      },
      {
        stem: 'Which component falls under the "Primary Sector" in Uttarakhand\'s GSVA accounts?',
        options: [
          'Hydroelectric power generation and construction',
          'Crops, livestock, forestry & logging, fishing, and mining & quarrying',
          'Hotels, restaurants, and road transport',
          'Pharmaceutical manufacturing at SIDCUL',
        ],
        correctOptionIndex: 1,
        explanation: 'Primary sector covers agriculture & allied activities (crops, livestock, forestry, fishing) plus mining & quarrying; electricity and construction sit in the Secondary sector.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which economic phenomenon describes the socio-economic vulnerability of interior Uttarakhand hill districts like Pauri, Almora, and Tehri despite rising state-level GSDP?',
        options: [
          'Over-industrialization',
          'Spatial dualism marked by low non-farm local employment, fragmented terraced holdings, and chronic youth out-migration ("ghost villages" / money-order economy)',
          'Severe coastal flooding',
          'Excessive mining revenues',
        ],
        correctOptionIndex: 1,
        explanation: 'Closing the hill–plains economic gap through agro-processing, eco-tourism, homestays, and digital work is Uttarakhand\'s central developmental priority.',
        difficulty: 'standard',
      },
      {
        stem: 'Which sector directly includes Uttarakhand\'s major hydroelectric generation plants (like Tehri, Maneri Bhali, Koteshwar) in state GSVA classification?',
        options: [
          'Primary Sector',
          'Secondary Sector (under Electricity, Gas, Water Supply & Utility Services)',
          'Tertiary Sector',
          'Quaternary Sector only',
        ],
        correctOptionIndex: 1,
        explanation: 'In Indian NAS/GSVA classification, Manufacturing, Construction, and Electricity/Gas/Water Supply constitute the Secondary Sector.',
        difficulty: 'standard',
      },
      {
        stem: 'How does Uttarakhand\'s "Palayan Aayog" (Rural Development and Migration Commission, HQ Pauri) connect to GSDP spatial analysis?',
        options: [
          'It audits stock markets in Mumbai',
          'It studies district-wise demographic out-migration causes (employment, education, health) and designs reverse-migration rural livelihood interventions in lagging hill blocks',
          'It regulates SIDCUL exports',
          'It manages Char Dham helicopters',
        ],
        correctOptionIndex: 1,
        explanation: 'Established in 2017 (initially Rural Development & Migration Commission at Pauri), it maps block-level migration trends to target localized hill livelihoods.',
        difficulty: 'standard',
      },
      {
        stem: 'Within Uttarakhand\'s Tertiary (Services) sector, which sub-sectors drive the largest expansion in hill districts?',
        options: [
          'Heavy shipbuilding and deep-sea ports',
          'Trade, hotels & hospitality (pilgrimage/adventure tourism), transport, real estate, and public/educational services',
          'Coal exports',
          'Automobile assembly',
        ],
        correctOptionIndex: 1,
        explanation: 'Services—especially tourism, hospitality, transport logistics, and schooling/coaching centres—provide the primary non-farm income engine in mountain towns.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is "Gross State Value Added (GSVA)" at Basic Prices?',
        options: [
          'Sum of value added across all producing sectors including production taxes minus production subsidies, BEFORE adding product taxes less product subsidies',
          'Total state government tax collection only',
          'GSDP after subtracting exports',
          'Total household savings in banks',
        ],
        correctOptionIndex: 0,
        explanation: 'Adopted after the 2015 NAS revision: GSDP (at market prices) = GSVA at Basic Prices + Product Taxes − Product Subsidies.',
        difficulty: 'advanced',
      },
      {
        stem: 'Why has the share of Agriculture in Uttarakhand\'s GSDP steadily fallen over the last two decades even though roughly half of rural households still engage in cultivation?',
        options: [
          'Farm output vanished entirely',
          'Manufacturing and Services grew much faster than low-productivity rainfed mountain farming ("structural transformation lag")',
          'Farmers stopped growing rice in Udham Singh Nagar',
          'All agricultural land became urban skyscrapers',
        ],
        correctOptionIndex: 1,
        explanation: 'This employment–output mismatch (high workforce share in agriculture vs ~10% GSVA share) reflects disguised unemployment and low farm value realization in the hills.',
        difficulty: 'standard',
      },
      {
        stem: 'Which state agency publishes the annual Uttarakhand Economic Survey summarizing GSDP, sectoral trends, and fiscal indicators prior to the State Budget?',
        options: [
          'Uttarakhand High Court',
          'Directorate of Economics and Statistics (DES) / Planning Department, Government of Uttarakhand',
          'Reserve Bank of India',
          'UKPSC',
        ],
        correctOptionIndex: 1,
        explanation: 'The Directorate of Economics and Statistics (DES) under the Planning Department compiles state GSDP/NSDP estimates and publishes the annual Economic Survey.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which combination of districts represents the two extremes of Per Capita Income in recent Uttarakhand Economic Survey district domestic product rankings?',
        options: [
          'Rudraprayag highest; Dehradun lowest',
          'Haridwar / Dehradun / Udham Singh Nagar among the highest vs Rudraprayag / Bageshwar / Almora among the lowest in per capita terms',
          'Champawat highest; Haridwar lowest',
          'All 13 districts have identical per capita income',
        ],
        correctOptionIndex: 1,
        explanation: 'Industrial-commercial hubs (Haridwar, Udham Singh Nagar, Dehradun) record dramatically higher per-capita income than interior agricultural hill districts like Rudraprayag or Bageshwar.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Uttarakhand State Budget, FRBM & Finance Commission Transfers',
    materialTitle: 'Uttarakhand State Budget, FRBM & Finance Commission Transfers — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Uttarakhand Fiscal Policy, FRBM & Finance Commission',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Uttarakhand State Budget, FRBM & Finance Commission Transfers

## 1. Constitutional Budget Architecture (Articles 202–207)
The State Budget (**Annual Financial Statement**, **Article 202**) divides receipts and expenditure into:
- **Revenue Account:**
  - *Revenue Receipts:* State's **Own Tax Revenue** (SGST, State Excise, Stamp Duty & Registration, Motor Vehicle Tax, VAT on fuel/liquor) + **Own Non-Tax Revenue** (hydropower royalty/electricity duty, forest revenue, mining) + **Central Transfers** (Share in Central Taxes + Grants-in-Aid).
  - *Revenue Expenditure:* Recurring operational outlays (salaries, pensions, interest payments, subsidies, maintenance—crucial in Uttarakhand where committed salary/pension bills are sizable).
- **Capital Account:**
  - *Capital Receipts:* Market borrowings (State Development Loans — SDLs), Central loans, recoveries.
  - *Capital Expenditure (Capex):* Asset-creating infrastructure spending (roads, bridges, irrigation, schools, hospitals, loan repayments).

## 2. Fiscal Discipline & Uttarakhand FRBM Act, 2005
Enacted following the 12th Finance Commission's debt-relief incentive, the **Uttarakhand Fiscal Responsibility and Budget Management (FRBM) Act, 2005** enforces transparent medium-term fiscal discipline:
- **Key Fiscal Targets:**
  - Maintain **Zero Revenue Deficit / Revenue Surplus** (which Uttarakhand has generally achieved or maintained tightly, unlike many revenue-deficit states!).
  - Keep **Fiscal Deficit within 3% of GSDP** (with 0.5% additional borrowing flexibility linked to power-sector/urban reforms under 15th FC guidelines).
  - Manage **Debt-to-GSDP ratio** sustainably and present Medium-Term Fiscal Policy Statements alongside the Budget.

## 3. Finance Commission Transfers & Green Bonus Debate
Under **Article 280**, the Union Finance Commission governs both vertical and horizontal tax devolution:
- **15th Finance Commission (2021–26, N.K. Singh):**
  - Vertical Devolution: **41%** of divisible pool to States.
  - Horizontal Criteria & Weights: **Income Distance (45%)**, **Population 2011 (15%)**, **Area (15%)**, **Forest & Ecology (10% — huge gain for forest-rich Uttarakhand!)**, **Demographic Performance (12.5%)**, **Tax & Fiscal Effort (2.5%)**.
  - **Uttarakhand's Share in Divisible Pool:** Approximately **1.118%** under 15th FC (alongside SDRF/NDRF disaster grants and Revenue Deficit/Sectoral grants).
- **Special Category Status (90:10 CSS Funding):** Post-14th FC abolition of Planning Commission formula grants, Uttarakhand and other Himalayan states continue to receive **90:10 Centre–State funding** on core Centrally Sponsored Schemes (CSS) and advocate for an explicit **"Green Bonus"** compensating ~71% recorded forest cover and ecological restrictions on dams/industries.

## 4. Key Revision Takeaways
- **Article 202** governs the State Annual Financial Statement; **SGST, State Excise, Stamp Duty, and Fuel VAT** dominate State Own Tax Revenue.
- **Uttarakhand FRBM Act (2005)** targets **Revenue Surplus** and **Fiscal Deficit <= 3% of GSDP** (subject to Centre-sanctioned reform bands).
- **15th Finance Commission** assigned **10% weight to Forest & Ecology** and **1.118% share** to Uttarakhand.`,
    mcqs: [
      {
        stem: 'Which Article of the Constitution mandates the Governor of Uttarakhand to cause the State\'s "Annual Financial Statement" (Budget) to be laid before the Vidhan Sabha?',
        options: ['Article 112', 'Article 202', 'Article 266', 'Article 280'],
        correctOptionIndex: 1,
        explanation: 'Article 112 applies to the Union Parliament, while Article 202 governs the State Annual Financial Statement before the State Legislature.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which tax sources currently form the bulk of Uttarakhand Government\'s "Own Tax Revenue" after GST implementation?',
        options: [
          'Corporate Income Tax and Customs Duty',
          'State GST (SGST), State Excise Duty (liquor), Stamp & Registration Fees, VAT on petroleum products, and Motor Vehicles Tax',
          'Wealth Tax and Securities Transaction Tax',
          'Agricultural Income Tax exclusively',
        ],
        correctOptionIndex: 1,
        explanation: 'States collect SGST alongside non-GST state taxes (excise on alcohol, stamp duties, motor vehicle tax, and fuel VAT/sales tax).',
        difficulty: 'foundation',
      },
      {
        stem: 'What primary fiscal benchmark was enshrined in the Uttarakhand Fiscal Responsibility and Budget Management (FRBM) Act, 2005?',
        options: [
          'Eliminating all capital expenditure',
          'Achieving Revenue Surplus / eliminating Revenue Deficit and capping Fiscal Deficit around 3% of GSDP',
          'Borrowing freely from foreign sovereign markets without limits',
          'Fixing zero salaries for state staff',
        ],
        correctOptionIndex: 1,
        explanation: 'Like sister state FRBM laws prompted by the 12th FC, the 2005 Act commits Uttarakhand to revenue balance and sustainable ~3% fiscal deficit limits.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why does "Committed Expenditure" (salaries, pensions, and interest payments) pose a structural constraint on Uttarakhand\'s State Budget?',
        options: [
          'Because Uttarakhand has zero government employees',
          'High fixed administrative, police, education, and pension commitments in scattered hill terrain leave limited discretionary Revenue fiscal space without central grants or borrowings',
          'Because salaries are paid in foreign currency',
          'Because capital expenditure requires zero funding',
        ],
        correctOptionIndex: 1,
        explanation: 'Maintaining schools, primary health centres, and roads across dispersed hill villages entails high per-capita recurring revenue expenses.',
        difficulty: 'standard',
      },
      {
        stem: 'Under the 15th Finance Commission (2021–26) horizontal devolution formula, which criterion directly rewards Uttarakhand for maintaining large forest cover despite losing commercial timber/land-use revenues?',
        options: [
          'Population Density',
          'Forest & Ecology (10% weight)',
          'Coastal Length',
          'Urban Slum Count',
        ],
        correctOptionIndex: 1,
        explanation: 'Expanded from 7.5% (14th FC) to 10% (15th FC), the Forest & Ecology criterion rewards dense/moderately dense forest canopy conservation.',
        difficulty: 'foundation',
      },
      {
        stem: 'What was Uttarakhand\'s approximate horizontal share in the net proceeds of Union taxes recommended by the 15th Finance Commission (2021–26)?',
        options: ['0.25%', '1.118%', '3.85%', '7.50%'],
        correctOptionIndex: 1,
        explanation: 'The 15th Finance Commission allocated 1.118% of the divisible Central tax pool to Uttarakhand.',
        difficulty: 'standard',
      },
      {
        stem: 'In Uttarakhand State Budget classification, which expenditure head creates durable productive public assets (e.g., constructing district hospitals, roads, or irrigation canals)?',
        options: [
          'Revenue Expenditure',
          'Capital Expenditure (Capex)',
          'Interest Payments',
          'Committed Pension Outlay',
        ],
        correctOptionIndex: 1,
        explanation: 'Capital expenditure either creates physical/financial assets or reduces financial liabilities, yielding long-run economic multipliers.',
        difficulty: 'foundation',
      },
      {
        stem: 'What does "Primary Deficit" indicate when analyzing Uttarakhand\'s fiscal sustainability?',
        options: [
          'Revenue Receipts minus Revenue Expenditure',
          'Fiscal Deficit minus Interest Payments (showing current-year borrowing exclusive of legacy debt servicing)',
          'Total Debt divided by Population',
          'Grants-in-Aid minus SGST',
        ],
        correctOptionIndex: 1,
        explanation: 'Primary Deficit = Fiscal Deficit − Interest Payments; a low or negative primary deficit indicates current fiscal policy is not compounding debt.',
        difficulty: 'standard',
      },
      {
        stem: 'Why has Uttarakhand repeatedly demanded a "Green Bonus" from the Central Government and successive Finance Commissions?',
        options: [
          'To subsidize petrol cars in Dehradun',
          'To compensate the state for opportunity costs suffered because ~71% recorded forest cover and strict eco-sensitive / dam regulations restrict industrial, road, and mining land expansion while benefiting downstream plains with clean air and river water',
          'To fund overseas sports events',
          'To abolish state sales taxes',
        ],
        correctOptionIndex: 1,
        explanation: 'Protecting Himalayan watersheds and forests imposes direct developmental trade-offs on Uttarakhand while generating massive downstream ecological externalities.',
        difficulty: 'foundation',
      },
      {
        stem: 'Following the abolition of the Planning Commission and Special Plan Assistance after 2015, what funding ratio still applies to Uttarakhand for core Centrally Sponsored Schemes (CSS) as a Himalayan state?',
        options: ['50:50', '60:40', '90:10 (Centre : State)', '100:0 for all state schemes'],
        correctOptionIndex: 2,
        explanation: 'While general-category states follow a 60:40 split on core CSS (e.g., Samagra Shiksha, Jal Jeevan Mission), Himalayan and NE states retain the 90:10 ratio.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which non-tax revenue sources hold special significance for Uttarakhand\'s own budget receipts?',
        options: [
          'Offshore oil royalties',
          'Free power / royalty share from Hydroelectric Projects, forest produce, minor minerals, and tourism/transport fees',
          'Diamond export duties',
          'Port customs tariffs',
        ],
        correctOptionIndex: 1,
        explanation: 'Normally, host states receive 12% free power royalty from hydroelectric projects alongside mining royalties and forest department revenues.',
        difficulty: 'standard',
      },
      {
        stem: 'Which 15th Finance Commission criterion carries the SINGLE LARGEST weight (45%) in determining horizontal tax shares among Indian states?',
        options: ['Area (15%)', 'Income Distance (45%)', 'Forest & Ecology (10%)', 'Tax Effort (2.5%)'],
        correctOptionIndex: 1,
        explanation: 'Income Distance (gap from top-earning benchmark state per capita GSDP) carries 45% weight to promote horizontal fiscal equalization.',
        difficulty: 'standard',
      },
      {
        stem: 'Under Article 293(3), why does the Government of India approve annual net borrowing ceilings for Uttarakhand\'s State Development Loans (SDLs)?',
        options: [
          'Because states must seek Central consent to borrow while having outstanding Central loans—enforcing FRBM fiscal ceilings',
          'Because Uttarakhand has no State Treasury',
          'Because only RBI prints state budgets',
          'Because High Court sets borrowing limits',
        ],
        correctOptionIndex: 0,
        explanation: 'Article 293(3) gives the Union Finance Ministry leverage to enforce Finance Commission FRBM borrowing caps across indebted states.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which specific State Finance Commission provision ensures fiscal devolution from Uttarakhand\'s State Consolidated Fund down to Gram/Kshetra/Zila Panchayats and Municipalities?',
        options: [
          'Article 280',
          'Articles 243-I and 243-Y (State Finance Commission constituted every 5 years)',
          'Article 110',
          'Article 360',
        ],
        correctOptionIndex: 1,
        explanation: 'While the Union Finance Commission gives tied/untied local-body grants, the State Finance Commission recommends intrastate tax sharing and grants.',
        difficulty: 'foundation',
      },
      {
        stem: 'How does "Revenue Surplus" alongside a "3% Fiscal Deficit" operate logically in Uttarakhand\'s Budget?',
        options: [
          'It is mathematically impossible',
          'Revenue receipts exceed recurring revenue expenses (leaving a Revenue Surplus), meaning the entire Fiscal Deficit borrowing goes productively toward Capital Expenditure (asset creation) rather than funding day-to-day salaries',
          'It means the state borrowed solely to pay interest',
          'It eliminates all state taxes',
        ],
        correctOptionIndex: 1,
        explanation: 'Running a Revenue Surplus while borrowing within 3% FRBM limits represents "Golden Rule" public finance: borrowed funds finance capital infrastructure, not current consumption.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'Mountain Agriculture, Organic Farming & Horticulture',
    materialTitle: 'Mountain Agriculture, Organic Farming & Horticulture — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Uttarakhand Mountain Farming, Millets & Horticulture',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Mountain Agriculture, Organic Farming & Horticulture

## 1. Dual Agro-Climatic Character of Uttarakhand
Only about **14% of Uttarakhand's geographical area is net sown land**, sharply split into two contrasting farming regimes:
- **Plains & Tarai-Bhabar (Udham Singh Nagar, Haridwar, Doon & Nainital foothills):** ~85%+ irrigated; high-input Green Revolution crops—**Sugarcane, Wheat, Paddy (Basmati), Oilseeds** (Udham Singh Nagar is Uttarakhand's primary foodgrain & sugarcane bowl; Haridwar leads sugarcane/wheat).
- **Hill & Mountain Districts (10+ hill tracts):** ~85–90% **rainfed terrace farming** with tiny fragmented plots, wildlife crop-raiding (wild boars, monkeys), and high female labour share. Naturally low chemical fertilizer use makes the hills **organic by default**!

## 2. Mountain Crops, Millets (Shree Anna) & Barahnaja
- **Barahnaja ("Twelve Grains") Traditional System:** Mixed intercropping of up to 12 synergistic mountain crops (mandua, rajma, amaranth/chaulai, bhatt, gahat, til, lobia) ensuring soil nitrogen fixation, pest resilience, and nutritional security against erratic rain.
- **Millets (*Shree Anna*):** **Mandua (Finger Millet / Ragi)**, **Jhangora (Barnyard Millet)**, and **Chaulai (Amaranth)**—now procured at **MSP** under the **Uttarakhand State Millet Mission** and supplied via PDS/mid-day meals.
- **Pulses & Spices:** **Bhatt** (black soybean), **Gahat** (horse gram), **Tor**, **Harsil/Munsiyari Rajma**, **Chamba/Almora Ginger & Turmeric**, **Kumaoni/Munsiyari Chilli**.

## 3. Organic Farming Leadership & Horticulture
- **First Organic Agriculture Act (2019):** Uttarakhand became **India's first state to enact an Organic Agriculture Act (2019)**, establishing regulated organic blocks/clusters (**Paramparagat Krishi Vikas Yojana [PKVY]** & **Namami Gange Organic Corridor** along the Ganga). Nodal certification agency: **Uttarakhand Organic Commodity Board (UOCB)** (Dehradun).
- **Temperate & Sub-Tropical Horticulture:**
  - **Apple:** Harsil (Uttarkashi), Ramgarh–Mukteshwar (Nainital), Chakrata, Auli/Joshimath; **Apple Mission** promotes high-density rootstock orchards and **CA (Controlled Atmosphere) cold stores**.
  - **Other Fruits & Niche Crops:** Peach, Plum, Pear, Apricot (*Khumani*), **Walnut**, **Litchi** (Dehradun–Ramnagar), **Kiwi**, **Aromatic Plants** (Lemongrass, Lavender, Chamomile, Damask Rose via **CAP — Centre for Aromatic Plants, Selaqui**), **Tejpatta** (first GI-tagged spice from Uttarakhand!), and **Tea** (Kausani, Champawat, Ghorakhal).
- **Important GI Tags of Uttarakhand:** **Uttarakhand Tejpatta (Bay Leaf)**, **Munsiyari Rajma**, **Aipan**, **Kumaon Chyura Oil**, **Tamta Craft**, **Ringal Craft**, **Dehraduni Basmati (shared Indo-Gangetic GI belt)**, **Bhotia Dann**, **Mandua / Jhangora / Berinag Tea / Bichhu Booti** (recent GI wave!).

## 4. Key Revision Takeaways
- **Organic Agriculture Act, 2019:** Uttarakhand was the **first state in India** to enact dedicated statutory organic-farming legislation (**UOCB** nodal board).
- **Barahnaja** = climate-resilient traditional 12-crop mountain polyculture; **Mandua & Jhangora** = core Uttarakhand millets promoted under **State Millet Mission**.
- **Udham Singh Nagar & Haridwar** drive irrigated foodgrain/sugarcane output, while **Harsil (Uttarkashi) & Ramgarh (Nainital)** lead temperate horticulture.`,
    mcqs: [
      {
        stem: 'Which Indian state became the FIRST to enact a dedicated "Organic Agriculture Act" (in 2019) to legally promote and regulate organic farming clusters?',
        options: ['Sikkim', 'Uttarakhand', 'Himachal Pradesh', 'Kerala'],
        correctOptionIndex: 1,
        explanation: 'While Sikkim achieved 100% organic conversion administratively in 2016, Uttarakhand enacted India\'s first dedicated Organic Agriculture Act in 2019.',
        difficulty: 'foundation',
      },
      {
        stem: 'In Uttarakhand\'s traditional hill agriculture, what does "Barahnaja" refer to?',
        options: [
          'Twelve annual land revenue taxes under Gorkha rule',
          'A traditional mixed-cropping system cultivating twelve or more complementary grains, pulses, and oilseeds together on rainfed terraces',
          'A canal irrigation system in Haridwar',
          'A twelve-month storage warehouse at Haldwani',
        ],
        correctOptionIndex: 1,
        explanation: 'Barahnaja combines cereals, millets (mandua), legumes (bhatt, gahat, rajma), and oilseeds to diversify nutrition and hedge against monsoon variability.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which two traditional Uttarakhand hill millets ("Shree Anna") are promoted through Minimum Support Price (MSP) procurement under the State Millet Mission?',
        options: [
          'Bajra and Sorghum only',
          'Mandua (Finger Millet) and Jhangora (Barnyard Millet)',
          'Oats and Quinoa',
          'Wheat and Barley',
        ],
        correctOptionIndex: 1,
        explanation: 'Mandua (ragi) and Jhangora are climate-hardy, calcium- and iron-rich traditional millets prioritized across Almora, Pauri, Chamoli, and Tehri.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which two districts form Uttarakhand\'s primary irrigated agricultural belt accounting for the vast majority of the state\'s wheat, paddy, and sugarcane production?',
        options: [
          'Champawat and Bageshwar',
          'Udham Singh Nagar and Haridwar',
          'Chamoli and Rudraprayag',
          'Uttarkashi and Tehri',
        ],
        correctOptionIndex: 1,
        explanation: 'Udham Singh Nagar and Haridwar (located in the fertile Terai/Ganga plains with canal and tubewell irrigation) drive commercial foodgrain and sugarcane harvests.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which agricultural product became the FIRST from Uttarakhand to receive a Geographical Indication (GI) tag?',
        options: ['Harsil Apple', 'Uttarakhand Tejpatta (Indian Bay Leaf)', 'Munsiyari Rajma', 'Kumaon Chyura Oil'],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand Tejpatta (Cinnamomum tamala) received GI registration in 2016 as the state\'s first GI-tagged agro-forest product.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Uttarakhand valley in Uttarkashi district—alongside Ramgarh–Mukteshwar in Nainital—is nationally famous for high-quality temperate Apple cultivation?',
        options: ['Kashipur', 'Harsil (Bhagirathi Valley)', 'Roorkee', 'Khatima'],
        correctOptionIndex: 1,
        explanation: 'Harsil (famous for Wilson/Red Delicious apples) and Ramgarh ("Fruit Bowl of Kumaon") are Uttarakhand\'s premier temperate orchard belts.',
        difficulty: 'foundation',
      },
      {
        stem: 'Where is the state\'s premier Centre for Aromatic Plants (CAP), driving cultivation of lavender, damask rose, rosemary, and lemongrass among hill farmers, located?',
        options: ['Pantnagar', 'Selaqui (Dehradun)', 'Pithoragarh', 'Kotdwar'],
        correctOptionIndex: 1,
        explanation: 'Located at Selaqui (Dehradun), CAP researches aromatic distillation and supplies high-value essential-oil crops less prone to monkey/wild boar damage.',
        difficulty: 'standard',
      },
      {
        stem: 'Why are aromatic crops, medicinal herbs, and floriculture increasingly promoted by policy planners in Uttarakhand\'s mid-hill districts?',
        options: [
          'They require flooding like paddy',
          'They offer high economic value per unit area and are generally non-palatable to wild boars and monkeys, mitigating human–wildlife crop loss',
          'They grow only below 200 m elevation',
          'They need heavy synthetic pesticides',
        ],
        correctOptionIndex: 1,
        explanation: 'Wild boar and macaque depredation drives farm abandonment in hills; unpalatable aromatic/medicinal crops protect farmer incomes.',
        difficulty: 'standard',
      },
      {
        stem: 'Which nodal state university at Pantnagar (Udham Singh Nagar), established in 1960 as India\'s first agricultural university on the US Land-Grant model, anchored India\'s Green Revolution?',
        options: [
          'HNB Garhwal University',
          'G.B. Pant University of Agriculture and Technology (GBPUAT)',
          'Kumaun University',
          'Uttarakhand Sanskrit University',
        ],
        correctOptionIndex: 1,
        explanation: 'Inaugurated by Jawaharlal Nehru in November 1960 (originally UP Agricultural University), GBPUAT Pantnagar is the cradle of India\'s Green Revolution.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the central objective of the "Ganga Organic Corridor" implemented in Uttarakhand under Paramparagat Krishi Vikas Yojana (PKVY) and Namami Gange?',
        options: [
          'Constructing chemical fertilizer factories on the Ganga bank',
          'Promoting chemical-free organic farming clusters along both banks of the Ganga and tributaries to curb agricultural chemical runoff and boost farmer premiums',
          'Replacing agriculture with sand mining',
          'Importing synthetic pesticides',
        ],
        correctOptionIndex: 1,
        explanation: 'Organic clusters along the Ganga watershed simultaneously protect river water quality and monetize certified organic hill/valley produce.',
        difficulty: 'standard',
      },
      {
        stem: 'Which major structural limitation lowers farm mechanization and credit access in Uttarakhand\'s hill districts compared to Udham Singh Nagar?',
        options: [
          'Excessively huge 100-acre single plots',
          'Small, scattered, terraced marginal landholdings (~0.8 ha average or fragmented strips) where heavy tractors cannot operate',
          'Absence of rainfall',
          'Ban on bank branches in hills',
        ],
        correctOptionIndex: 1,
        explanation: 'Fragmented step-terraces limit large tractors, prompting state subsidies on compact power-tillers/weeders and consolidation ("Chakbandi") experiments.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which traditional cold-season leguminous pulse of Uttarakhand (rich in iron and protein) grows across Munsiyari and Harsil and holds GI recognition for its distinctive taste?',
        options: ['Arhar (Tur)', 'Munsiyari Rajma (kidney bean)', 'Masoor only', 'Groundnut'],
        correctOptionIndex: 1,
        explanation: 'Munsiyari Rajma (alongside Harsil and Joshimath rajma) commands high premium prices for thin skin and quick cooking.',
        difficulty: 'foundation',
      },
      {
        stem: 'What does "High-Density Apple Plantation" promoted under the Uttarakhand Apple Mission achieve compared to traditional standard orchards?',
        options: [
          'Takes 25 years to bear first fruit',
          'Uses dwarf/clonal rootstocks with closer spacing, drip irrigation, and early fruiting (3–4 years), doubling productivity per hectare',
          'Grows apples inside coastal lagoons',
          'Eliminates pollination',
        ],
        correctOptionIndex: 1,
        explanation: 'Clonal high-density orchards yield fruit much sooner with uniform quality, supported by state subsidy and Controlled Atmosphere cold chains.',
        difficulty: 'standard',
      },
      {
        stem: 'Which central research institute in Almora specializes specifically in hill agriculture, cold-tolerant wheat/millets, and Himalayan terrace agronomy?',
        options: [
          'ICAR–IARI New Delhi',
          'ICAR–Vivekananda Parvatiya Krishi Anusandhan Sansthan (VPKAS), Almora',
          'Central Rice Research Institute, Cuttack',
          'National Dairy Research Institute, Karnal',
        ],
        correctOptionIndex: 1,
        explanation: 'Founded originally by Boshi Sen in 1924 (Almora), ICAR–VPKAS develops high-yielding mountain wheat, maize, mandua, and polyhouse vegetable technologies.',
        difficulty: 'standard',
      },
      {
        stem: 'Roughly what percentage of Uttarakhand\'s total geographical area (53,483 sq. km) is available as net sown agricultural land?',
        options: ['About 14% (~7 lakh hectares)', 'About 48%', 'About 65%', 'About 82%'],
        correctOptionIndex: 0,
        explanation: 'Because ~71% is recorded forest land and steep snowbound/rocky terrain dominates high altitudes, net sown area stays near 14%—underscoring intensive high-value horticulture.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'SIDCUL Industrial Estates, MSMEs & Start-up Ecosystem',
    materialTitle: 'SIDCUL Industrial Estates, MSMEs & Start-up Ecosystem — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: SIDCUL Industrialization, MSMEs & Startups',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# SIDCUL Industrial Estates, MSMEs & Start-up Ecosystem

## 1. The 2003 Special Industrial Package & Rise of SIDCUL
Following state creation, the Union Government granted a **10-year Concessional Industrial Package (2003–2010/13)** (100% excise/income tax holidays and capital investment subsidy) to Uttarakhand and Himachal Pradesh. To channel this investment smoothly, the state formed **SIIDCUL / SIDCUL (State Infrastructure and Industrial Development Corporation of Uttarakhand Limited)** in **2002**.
- **Major Integrated Industrial Estates (IIEs):**
  1. **IIE Pantnagar (Rudrapur, Udham Singh Nagar):** Automobile & auto-components hub (**Tata Motors, Bajaj Auto, Ashok Leyland, Mahindra, Titan, Britannia, Nestle**).
  2. **IIE Haridwar (Roshnabad / BHEL-linked):** Pharmaceuticals, FMCG, electricals, consumer goods (**Hero MotoCorp, Hindustan Unilever, ITC, Dabur, BHEL Ranipur legacy**).
  3. **IIE Sitarganj & Kashipur (USN):** Agro-processing, textiles, paper/packaging, steel.
  4. **Selaqui Pharma City & IT Park (Dehradun) / Kotdwar (Sigaddi):** Pharmaceuticals, electronics, IT/ITES, food processing.
- **Sectoral Strengths:** **Pharmaceuticals** (Uttarakhand produces a significant share of India's formulations), **Automobiles/Auto-Ancillaries**, **FMCG**, and **Forest/Agro-based industries**.

## 2. MSME Policy, Hill Industrial Challenges & Logistics
- **Post-Package Transition & Hills Push:** Once Central tax holidays expired, Uttarakhand pivoted to **Ease of Doing Business (Invest Uttarakhand Single Window)**, **MSME Policy** (special **higher capital/interest subsidies for Category A/B remote hill districts** vs Category C/D plains), **Mega Industrial & Investment Policy**, and **District-wise One District Two Products (ODOP)** clusters.
- **Amritsar–Kolkata Industrial Corridor (AKIC):** **Khurpia Farm (Udham Singh Nagar)** is being developed as a major industrial smart-city manufacturing node under NICDC/AKIC.
- **Structural Hurdles:** Heavy spatial skew (>85% factories in plains/foothills), high hill freight costs, limited large flat land banks, and skilled-manpower alignment.

## 3. Start-up Ecosystem & Innovation Policy
- **Uttarakhand Startup Policy (2018, upgraded 2023):** Supports incubators (**IIT Roorkee TIDES**, **IIM Kashipur FIED**, **GBPUAT Pantnagar**, **UPES/Graphic Era**), provides monthly sustenance allowance to recognized startups, patent-filing/marketing grants, and enhanced incentives for **women-led, rural, and green-tech startups** in hill districts.
- **Global Investors Summit (2023, Dehradun):** Emphasized sustainable green growth across **tourism, wellness/AYUSH, pharma, clean energy, food processing, and IT**.

## 4. Key Revision Takeaways
- **SIDCUL (2002)** + **2003 Central Industrial Package** transformed **Haridwar, Pantnagar, Sitarganj, and Selaqui** into northern manufacturing hubs.
- **MSME policies** stratify districts into **Categories A–D** so remote hill blocks receive higher capital and interest subsidies than plains.
- **Khurpia Farm (Udham Singh Nagar)** anchors Uttarakhand's node on the **Amritsar–Kolkata Industrial Corridor (AKIC)**.
- **IIT Roorkee (TIDES)** and **IIM Kashipur (FIED)** anchor Uttarakhand's startup incubation pipeline.`,
    mcqs: [
      {
        stem: 'When was SIIDCUL / SIDCUL (State Infrastructure and Industrial Development Corporation of Uttarakhand Ltd.) established as the nodal agency for industrial infrastructure?',
        options: ['1998', '2002', '2008', '2014'],
        correctOptionIndex: 1,
        explanation: 'Incorporated in 2002, SIDCUL developed Integrated Industrial Estates (IIEs) at Haridwar, Pantnagar, Sitarganj, Selaqui, and Kotdwar.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which policy catalyst in 2003 triggered a massive wave of automobile, pharmaceutical, and FMCG factory investments into Uttarakhand?',
        options: [
          'Abolition of all labour laws',
          'The Central Government\'s Concessional Special Industrial Package (excise/income tax exemptions and capital subsidy) announced in January 2003',
          'Discovery of crude oil in Haridwar',
          'Opening of seaports along the Ganga',
        ],
        correctOptionIndex: 1,
        explanation: 'The 2003 Special Industrial Package (for Uttarakhand and HP) spurred rapid industrial growth across Haridwar, Udham Singh Nagar, and Dehradun.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Integrated Industrial Estate (IIE) of SIDCUL emerged as Uttarakhand\'s premier hub for major automobile and auto-component manufacturers like Tata Motors, Bajaj Auto, and Ashok Leyland?',
        options: ['IIE Selaqui', 'IIE Pantnagar (Udham Singh Nagar)', 'IIE Sigaddi (Kotdwar)', 'IIE Joshimath'],
        correctOptionIndex: 1,
        explanation: 'IIE Pantnagar (near Rudrapur) became a major North Indian automotive cluster alongside Hero MotoCorp at IIE Haridwar.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which manufacturing sector concentrates strongly in Selaqui (Dehradun) and Haridwar, making Uttarakhand one of India\'s top pharmaceutical formulation hubs?',
        options: [
          'Shipbuilding',
          'Pharmaceuticals and Nutraceuticals (alongside FMCG)',
          'Heavy petrochemicals',
          'Diamond cutting',
        ],
        correctOptionIndex: 1,
        explanation: 'Pharma City Selaqui (Dehradun) and Haridwar IIE host hundreds of WHO-GMP compliant pharmaceutical and AYUSH units.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which site in Udham Singh Nagar is being developed as a modern Integrated Manufacturing Cluster (IMC) under the Central Amritsar–Kolkata Industrial Corridor (AKIC)?',
        options: ['Bhimtal', 'Khurpia Farm (Kichha / Udham Singh Nagar)', 'Selaqui', 'Lansdowne'],
        correctOptionIndex: 1,
        explanation: 'Khurpia Farm in Udham Singh Nagar was selected under NICDC\'s Amritsar–Kolkata Industrial Corridor for smart manufacturing infrastructure.',
        difficulty: 'standard',
      },
      {
        stem: 'How does Uttarakhand\'s MSME Policy differentiate financial subsidies between remote mountain districts (Categories A & B) and industrial plains (Categories C & D)?',
        options: [
          'Plains districts receive double the subsidy of hill districts',
          'Remote hill categories receive significantly higher capital investment subsidies, interest subvention, and transport/stamp concessions to offset terrain disadvantages',
          'Only IT companies in Dehradun qualify for MSME support',
          'All subsidies were abolished in 2015',
        ],
        correctOptionIndex: 1,
        explanation: 'Graded territorial categorization (higher incentives in Category A/B interior hill blocks than Category D plains) aims to decentralize MSME jobs into the mountains.',
        difficulty: 'standard',
      },
      {
        stem: 'What is the "Invest Uttarakhand" single-window system designed to streamline?',
        options: [
          'Agricultural crop insurance claims',
          'Online submission, tracking, and time-bound statutory clearances (land, power, pollution NOCs) for industrial and tourism investors',
          'UKPSC examination admit cards',
          'Railway ticket reservations',
        ],
        correctOptionIndex: 1,
        explanation: 'Invest Uttarakhand operates as the state\'s Ease of Doing Business single-window clearance portal.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Central MSME revised composite classification criteria (effective July 2020) currently defines a "Small" Enterprise across India including Uttarakhand?',
        options: [
          'Investment <= Rs 10 lakh',
          'Investment in Plant & Machinery/Equipment <= Rs 10 crore AND Annual Turnover <= Rs 50 crore',
          'Turnover <= Rs 5 crore only',
          'Employing fewer than 5 workers only',
        ],
        correctOptionIndex: 1,
        explanation: 'Under the 2020 unified classification: Micro (Inv <= 1 Cr, Turnover <= 5 Cr), Small (Inv <= 10 Cr, Turnover <= 50 Cr), Medium (Inv <= 50 Cr, Turnover <= 250 Cr).',
        difficulty: 'standard',
      },
      {
        stem: 'Which premier central technical and management institutions within Uttarakhand run major startup incubators (such as TIDES and FIED) supporting state youth entrepreneurship?',
        options: [
          'IIT Roorkee (TIDES) and IIM Kashipur (FIED)',
          'AIIMS Rishikesh and IMA Dehradun only',
          'NIT Srinagar and BHU',
          'Forest Research Institute only',
        ],
        correctOptionIndex: 0,
        explanation: 'IIT Roorkee (TIDES Business Incubator) and IIM Kashipur (Foundation for Innovation & Entrepreneurship Development — FIED) anchor deep-tech and agri-startup incubation.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which flagship scheme of the Uttarakhand Government promotes localized artisanal, food, and craft branding across all 13 districts (similar to UP\'s ODOP)?',
        options: [
          'One District Two Products (ODOP)',
          'Make in Terai',
          'Zero-Defect Mining Scheme',
          'Mega Steel Mission',
        ],
        correctOptionIndex: 0,
        explanation: 'Uttarakhand\'s One District Two Products (ODOP) highlights signature district crafts/foods (e.g., Dehradun bakery/basmati, Nainital Aipan/candle, Almora copperware/baal mithai, Pithoragarh woollens/munsiari rajma).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which public-sector heavy electrical engineering giant established a historic manufacturing township in Haridwar (Ranipur) long before Uttarakhand\'s creation in 2000?',
        options: ['HAL', 'BHEL (Bharat Heavy Electricals Limited)', 'ONGC', 'SAIL'],
        correctOptionIndex: 1,
        explanation: 'BHEL Ranipur (Haridwar) and IDPL Rishikesh / HMT Ranibagh formed the pre-2000 industrial core of the Uttarakhand region.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the Uttarakhand Startup Policy (2023 revision), which additional incentives encourage inclusive mountain entrepreneurship?',
        options: [
          'Only startups in Delhi get funding',
          'Enhanced seed/allowance support for women-led startups, SC/ST/Divyang founders, rural/hill-district ventures, and patent/marketing reimbursement',
          'Mandatory export of Rs 100 crore in year one',
          'Ban on digital apps',
        ],
        correctOptionIndex: 1,
        explanation: 'Extra financial incentives for women, marginalized, and non-plains hill startups aim to spread entrepreneurship beyond Dehradun.',
        difficulty: 'standard',
      },
      {
        stem: 'Why did industrial growth slow temporarily in some SIDCUL units after the expiry of the 2003–2013 Central tax package, prompting new policy priorities?',
        options: [
          'Because electricity was completely shut off',
          'Units attracted purely by temporary excise/income-tax arbitrage faced rising logistics costs post-GST/tax-holiday expiry, highlighting the need for genuine productivity, R&D, and multimodal connectivity',
          'Because workers migrated away from Udham Singh Nagar',
          'Because SIDCUL banned pharma units',
        ],
        correctOptionIndex: 1,
        explanation: 'Transitioning from tax-holiday dependency to genuine infrastructure competitiveness, skilled labour, and green branding defines Uttarakhand\'s post-2017 industrial strategy.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which city in Pauri Garhwal hosts a SIDCUL industrial estate (Sigaddi Growth Centre) aimed at bringing non-farm manufacturing jobs closer to the Garhwal hills?',
        options: ['Joshimath', 'Kotdwar', 'Devprayag', 'Lansdowne'],
        correctOptionIndex: 1,
        explanation: 'Kotdwar (foothill gateway of Pauri Garhwal) hosts the Sigaddi industrial growth centre linking Garhwal hills to plains rail/road transport.',
        difficulty: 'standard',
      },
      {
        stem: 'Which sector in Dehradun benefits strongly from clean-air/cool-climate advantages and presence of institutions like ONGC, Survey of India, WIHG, and IIRS (ISRO)?',
        options: [
          'Heavy blast-furnace steel smelting',
          'Knowledge, IT/ITES, R&D, education, and geospatial/scientific services',
          'Ship-breaking yards',
          'Cotton spinning mills',
        ],
        correctOptionIndex: 1,
        explanation: 'Dehradun\'s cluster of premier scientific and defence academies supports a strong education, IT Park, and knowledge-services ecosystem.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Pilgrimage, Adventure & Eco-Tourism Economy',
    materialTitle: 'Pilgrimage, Adventure & Eco-Tourism Economy — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Uttarakhand Tourism, Pilgrimage & Sustainability',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Pilgrimage, Adventure & Eco-Tourism Economy

## 1. Strategic Pillars of Uttarakhand's Tourism Economy
Tourism and allied hospitality contribute an estimated **15%+ (direct and indirect)** of state economic activity and represent the **largest non-farm employment generator in the hill districts**:
1. **Spiritual & Pilgrimage Tourism:**
   - **Chhota Char Dham:** **Yamunotri** (Uttarkashi), **Gangotri** (Uttarkashi), **Kedarnath** (Rudraprayag), **Badrinath** (Chamoli) — plus **Hemkund Sahib** (Chamoli) and **Haridwar–Rishikesh** (*Panch Prayag*, *Kanwar Yatra*, *Kumbh Mela* at Haridwar every 12 years).
   - **Manaskhand Mandir Mala Mission:** State initiative upgrading ancient Kumaon shrines (**Jageshwar, Kainchi Dham, Patal Bhuvaneshwar, Purnagiri, Bagnath, Chitai Golu Devta, Nanda Devi Almora**) to balance footfall beyond Garhwal's Char Dham.
2. **Adventure Tourism:**
   - **White-water Rafting:** Rishikesh–Shivpuri–Kaudiyala (Ganga).
   - **Skiing & Winter Sports:** **Auli** (Chamoli — winter games slopes), **Dayara Bugyal**, **Munsiyari**.
   - **Trekking & Mountaineering:** **Valley of Flowers**, **Roopkund**, **Kedarkantha**, **Pindari/Milam Glaciers**, supported by **Nehru Institute of Mountaineering (NIM), Uttarkashi**.
   - **Paragliding & Aero-sports:** Naukuchiatal/Bhimtal, Tehri Lake (major water-sports hub!).
3. **Wildlife, Eco-Tourism & Wellness:**
   - **Corbett** and **Rajaji** Tiger Reserves, **Nanda Devi** & **Valley of Flowers** (UNESCO World Heritage), **Asan Conservation Reserve** (first Ramsar site of Uttarakhand, 2020), **Rishikesh ("Yoga Capital of the World")**, and **AYUSH / Wellness resorts**.

## 2. Flagship Policy & Infrastructure Initiatives
- **Deen Dayal Upadhyay Home Stay Development Scheme:** Offers **25–33% capital subsidy** (higher in hilly areas) for converting traditional mountain homes (*Koti Banal* / stone-wood cottages) into registered homestays—retaining tourism rupees inside villages and curbing migration.
- **Char Dham All-Weather Highway & Rishikesh–Karnaprayag Rail Project:** Transform year-round access (while raising serious landslide/carrying-capacity debate).
- **13 Districts, 13 New Destinations & Winter Char Dham:** Decongests summer/monsoon peaks by promoting **Kharsali, Mukhwa, Ukhimath, Joshimath/Pandukeshwar** (winter seats of the Char Dham deities) and lesser-known valleys (**Chaukori, Chakrata, Lansdowne, Kanatal, Adi Kailash / Om Parvat**).

## 3. Carrying Capacity vs Economic Growth (Mains Analytical Core)
- **Vulnerability Lessons:** Following the **2013 Kedarnath disaster** and **2023 Joshimath land subsidence**, unregulated concrete construction, septic seepage, plastic waste, and traffic bottlenecks above ecological carrying capacity highlighted the urgency of **Mandatory Pilgrim Registration**, **Green Cess**, **regulated helicopter corridors**, and **Science-backed Carrying Capacity Audits**.

## 4. Key Revision Takeaways
- **Manaskhand Mandir Mala Mission** promotes heritage temple circuits across **Kumaon** to balance Garhwal's Char Dham surge.
- **Deen Dayal Upadhyay Home Stay Scheme** channels tourist spending directly to rural hill households.
- **Auli** (skiing), **Rishikesh** (rafting & yoga), **Tehri Lake** (water sports), **Asan Barrage** (Ramsar wetland), and **NIM Uttarkashi** (mountaineering) anchor adventure & eco-tourism.`,
    mcqs: [
      {
        stem: 'Which state tourism initiative was launched by the Uttarakhand Government specifically to develop and connect ancient temple circuits across Kumaon Division (such as Jageshwar, Purnagiri, Patal Bhuvaneshwar, and Kainchi Dham)?',
        options: [
          'Char Dham Pariyojana',
          'Manaskhand Mandir Mala Mission',
          'Prasad Himalayan Grid',
          'Kumaon Expressway Plan',
        ],
        correctOptionIndex: 1,
        explanation: 'Complementing Garhwal\'s Kedarkhand (Char Dham) circuit, Manaskhand Mandir Mala Mission upgrades connectivity and heritage shrines in Kumaon.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which scheme of the Uttarakhand Government provides higher capital subsidies in mountain districts to help rural villagers convert traditional houses into tourist homestays, curbing out-migration?',
        options: [
          'PM Awas Urban',
          'Pandit Deen Dayal Upadhyay Home Stay Development Scheme',
          'Swadesh Hotel Mega Park',
          'Make in Rishikesh Scheme',
        ],
        correctOptionIndex: 1,
        explanation: 'Offering up to 33% subsidy (higher cap in hill blocks) plus interest subvention, the Home Stay scheme keeps tourism earnings directly with rural hill families.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pair correctly matches each Char Dham shrine of Uttarakhand with its winter worship seat when the high-altitude portals close after Diwali?',
        options: [
          'Kedarnath -> Joshimath; Badrinath -> Ukhimath',
          'Kedarnath -> Ukhimath (Omkareshwar Temple); Badrinath -> Joshimath (Narasimha Temple) / Pandukeshwar',
          'Gangotri -> Kharsali; Yamunotri -> Mukhwa',
          'All four shift to Haridwar',
        ],
        correctOptionIndex: 1,
        explanation: 'Winter seats: Kedarnath -> Ukhimath (Rudraprayag); Badrinath -> Joshimath/Pandukeshwar (Chamoli); Gangotri -> Mukhwa; Yamunotri -> Kharsali (Uttarkashi).',
        difficulty: 'standard',
      },
      {
        stem: 'Which premier mountaineering training institute in Uttarakhand, established in 1965 in honour of India\'s first Prime Minister, trains adventure climbers and disaster rescue personnel?',
        options: [
          'Himalayan Mountaineering Institute, Darjeeling',
          'Nehru Institute of Mountaineering (NIM), Uttarkashi',
          'Atal Bihari Vajpayee Institute, Manali',
          'Indian Forest Academy, Dehradun',
        ],
        correctOptionIndex: 1,
        explanation: 'NIM Uttarkashi is one of Asia\'s foremost mountaineering schools, also deploying expert instructors during Himalayan search-and-rescue operations.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which wetland located near the Yamuna–Asan confluence in Dehradun district became Uttarakhand\'s FIRST Ramsar Wetland of International Importance (2020)?',
        options: [
          'Naini Lake',
          'Asan Conservation Reserve',
          'Bhimtal Lake',
          'Roopkund',
        ],
        correctOptionIndex: 1,
        explanation: 'Asan Conservation Reserve (Dehradun) was designated a Ramsar site in October 2020 for hosting migratory waterbirds along the Central Asian Flyway.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which massive artificial reservoir in Uttarakhand has been aggressively developed by the state into an international adventure water-sports, houseboat, and paragliding destination?',
        options: ['Gohna Tal', 'Tehri Lake', 'Naukuchiatal', 'Dodital'],
        correctOptionIndex: 1,
        explanation: 'Formed by the Tehri Dam across the Bhagirathi–Bhilangna confluence, Tehri Lake hosts jet-skiing, kayaking, floating huts, and annual water-sports festivals.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which high-altitude meadow destination in Chamoli district is internationally renowned for alpine skiing slopes and cable-car access from Joshimath?',
        options: ['Lansdowne', 'Auli', 'Binsar', 'Chakrata'],
        correctOptionIndex: 1,
        explanation: 'Auli (approx. 2,800 m) has hosted national winter games and SAF winter events overlooking Nanda Devi and Kamet.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why has "Carrying Capacity Assessment" emerged as a central policy requirement for Uttarakhand\'s Char Dham and hill-station tourism after 2013 and 2023?',
        options: [
          'To ban all pilgrims permanently',
          'Unplanned hotel crowding, traffic surges, solid/plastic waste, and slope excavation above fragile Himalayan thresholds risk triggering landslides, subsidence (like Joshimath), and water scarcity',
          'To raise airline taxes exclusively',
          'Because hotels in Dehradun have zero occupancy',
        ],
        correctOptionIndex: 1,
        explanation: 'Balancing rising pilgrim/tourist volume with slope stability, sewage treatment, and mandatory online registration ensures sustainable long-run tourism revenue.',
        difficulty: 'standard',
      },
      {
        stem: 'Which twin cities in Uttarakhand serve as the iconic global hub of Yoga, Vedanta retreats, and Ganga white-water rafting (Shivpuri–Kaudiyala stretch)?',
        options: [
          'Haldwani and Kashipur',
          'Rishikesh and Haridwar',
          'Almora and Ranikhet',
          'Kotdwar and Pauri',
        ],
        correctOptionIndex: 1,
        explanation: 'Rishikesh ("Yoga Capital of the World", hosting International Yoga Festival) and Haridwar anchor spiritual, wellness, and Ganga adventure tourism.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the Central Ministry of Tourism\'s "PRASHAD" scheme, which major Uttarakhand shrine complexes have received dedicated pilgrim infrastructure upgrades?',
        options: [
          'Only private urban malls',
          'Kedarnath, Badrinath, Gangotri, and Yamunotri',
          'Only Haridwar railway station',
          'Only Nainital Boat House',
        ],
        correctOptionIndex: 1,
        explanation: 'PRASHAD (Pilgrimage Rejuvenation and Spiritual, Heritage Augmentation Drive) funds beautification, queue shelters, and amenities at key pilgrimage sites.',
        difficulty: 'standard',
      },
      {
        stem: 'Which dramatic border-pilgrimage peak in Pithoragarh\'s Vyas Valley became directly accessible by motorable road via Dharchula–Gunji–Jolingkong, boosting domestic high-altitude tourism?',
        options: [
          'Adi Kailash (Chhota Kailash) and Om Parvat view corridor',
          'Siachen Glacier',
          'Mt. Abu',
          'Kanchenjunga Base',
        ],
        correctOptionIndex: 0,
        explanation: 'Road upgrades by BRO along the Kali valley opened Adi Kailash and Om Parvat darshan to domestic travellers without crossing into Tibet.',
        difficulty: 'standard',
      },
      {
        stem: 'Which unique conservation-tourism model is exemplified by the "Pawalgarh Conservation Reserve" and village nature guides around Corbett Tiger Reserve?',
        options: [
          'Industrial mining tourism',
          'Community-based Eco-tourism where local villagers earn livelihoods as birding/wildlife guides, homestay hosts, and forest guardians',
          'Mass concrete skyscrapers inside core tiger zones',
          'Commercial timber auctioning',
        ],
        correctOptionIndex: 1,
        explanation: 'Community eco-tourism aligns local village incomes with tiger, bird, and forest conservation across buffer zones like Corbett, Binsar, and Munsiyari.',
        difficulty: 'standard',
      },
      {
        stem: 'Why is promoting "Winter Tourism" (such as Mukhwa, Kharsali, Auli, and Corbett winter wildlife) economically vital for Uttarakhand?',
        options: [
          'Summer months already have zero visitors',
          'It flattens extreme seasonal peaks—sustaining year-round hotel, homestay, and taxi employment instead of leaving mountain workers idle for 5–6 months',
          'It replaces all agriculture in Udham Singh Nagar',
          'It stops snowfall in Chamoli',
        ],
        correctOptionIndex: 1,
        explanation: 'Diversifying off-season snow, winter-seat pilgrimage, and wellness tourism stabilizes year-round mountain jobs and incomes.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which major Central wildlife tourism zone partially lies in Nainital and Pauri Garhwal districts of Uttarakhand and was India\'s FIRST National Park (established 1936 as Hailey National Park)?',
        options: [
          'Rajaji National Park',
          'Jim Corbett National Park',
          'Govind National Park',
          'Askot Sanctuary',
        ],
        correctOptionIndex: 1,
        explanation: 'Established in 1936 (Hailey NP) and renamed Jim Corbett NP, it launched Project Tiger in 1973 and anchors India\'s premier wildlife tourism belt.',
        difficulty: 'foundation',
      },
      {
        stem: 'What dual purpose does the Rishikesh–Karnaprayag Broad Gauge Railway Line (under construction through mountain tunnels) serve for Uttarakhand\'s economy?',
        options: [
          'Exports coal to Tibet',
          'Provides all-weather, landslide-resilient high-capacity passenger/freight access linking plains railheads to Garhwal interior valleys (Devprayag, Srinagar, Rudraprayag, Karnaprayag), boosting both pilgrimage tourism and strategic border logistics',
          'Connects Nainital to Dehradun via tunnels only',
          'Replaces all village footpaths',
        ],
        correctOptionIndex: 1,
        explanation: 'Featuring deep Himalayan tunnels and iconic rail bridges, the Rishikesh–Karnaprayag line cuts travel time and weather disruptions into interior Garhwal.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Self-Employment, Skill & Rural Livelihood Programs',
    materialTitle: 'Self-Employment, Skill & Rural Livelihood Programs — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Employment, Skill & Reverse-Migration Schemes',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Self-Employment, Skill & Rural Livelihood Programs

## 1. Uttarakhand State Self-Employment & Reverse-Migration Schemes
Addressing out-migration (*Palayan*) and rural youth unemployment requires combining credit subsidies with local resource value addition:
- **Mukhyamantri Swarozgar Yojana (MMSY):** Flagship state self-employment credit-linked subsidy scheme supporting youth, returning migrants, and entrepreneurs in **manufacturing, service, and trading units** (15%–25% margin-money subsidy, higher ceiling in hill districts).
- **Veer Chandra Singh Garhwali Tourism Self-Employment Scheme:** Pioneer scheme (launched 2002) providing **capital subsidies (up to 25%–33%)** on bank loans for **vehicles (taxis/buses)** and **non-vehicle tourism units** (cafes, fast-food centres, tent colonies, adventure equipment, hotels) exclusively to Uttarakhand youth.
- **Mukhyamantri Palayan Roktham Yojana:** Targets high-migration border and hill blocks identified by the Rural Development & Migration Commission with cluster livelihoods, polyhouses, dairy, and rural infrastructure.
- **Mukhyamantri Saur Swarozgar Yojana:** Empowers rural youth/farmers to set up small **20–25 kW grid-connected solar power plants** on barren/terraced hill land, earning guaranteed feed-in tariff revenue from **UPCL**.
- **HOPE Portal (Helping Out People Everywhere):** Skill mapping database linking state youth and returnee migrants to private industry and self-employment schemes.

## 2. Central Livelihood & Skill Missions Active in Uttarakhand
| Flagship Program | Implementing Mechanism & Key Impact |
|---|---|
| **MGNREGA (2005)** | Legal guarantee of **100 days unskilled wage employment** per rural household; builds water-conservation *chal-khal*, terrace bunds, and rural connectivity (note: **150 days** in notified forest/drought/disaster situations as permitted) |
| **DAY-NRLM (USRLM)** | Mobilizes rural women into **SHGs**, providing **Revolving Fund**, **Community Investment Fund**, and bank linkage; supports **Lakhpati Didi** & **Ghasyari Kalyan** fodder-relief efforts |
| **PMKVY (Pradhan Mantri Kaushal Vikas Yojana)** & **UKSDM** | Short-term skill certification & RPL (Recognition of Prior Learning) coordinated in the state by **Uttarakhand Skill Development Mission (UKSDM)** |
| **PMEGP & PMFME** | Credit-linked subsidies for micro-enterprises (KVIC/DIC) and **One District One Product micro-food processing units (35% credit-linked subsidy)** |
| **PM Vishwakarma (2023)** | Collateral-free 5% concessional loans, toolkit incentives, and digital onboarding for **18 traditional artisan trades** (carpenters, blacksmiths, *tamta* coppersmiths, tailors, weavers, masons) |

## 3. Key Revision Takeaways
- **Veer Chandra Singh Garhwali Scheme** focuses specifically on **tourism self-employment** (vehicles, cafes, adventure/eco-lodging).
- **Mukhyamantri Saur Swarozgar Yojana** converts non-viable barren hill land into steady **20–25 kW solar income** sold to UPCL.
- **MGNREGA** guarantees **100 days** statutory rural wage work (strengthening *chal-khal* mountain water harvesting) alongside **PM Vishwakarma** for traditional artisans.`,
    mcqs: [
      {
        stem: 'Which long-running Uttarakhand self-employment scheme (named after the Peshawar Hero) provides capital subsidies to local youth for launching tourist transport, eco-camps, adventure gear, and hospitality units?',
        options: [
          'Kalu Singh Mahara Dairy Scheme',
          'Veer Chandra Singh Garhwali Tourism Self-Employment Scheme',
          'Sridev Suman Free Housing Scheme',
          'Badri Datt Pande Industrial Loan Scheme',
        ],
        correctOptionIndex: 1,
        explanation: 'Launched in June 2002, the Veer Chandra Singh Garhwali Tourism Self-Employment Scheme offers substantial bank-loan capital subsidies for vehicle and non-vehicle tourism enterprises.',
        difficulty: 'foundation',
      },
      {
        stem: 'How does Uttarakhand\'s "Mukhyamantri Saur Swarozgar Yojana" turn barren or fallow mountain terraces into a steady livelihood asset for local youth and farmers?',
        options: [
          'By planting commercial eucalyptus trees',
          'By supporting small 20–25 kW solar power plants whose generated electricity is purchased by UPCL under long-term power purchase agreements',
          'By converting terraces into coal mines',
          'By exporting solar panels abroad without state buyers',
        ],
        correctOptionIndex: 1,
        explanation: 'Clean solar micro-plants on uncultivated hill holdings generate predictable income from UPCL power purchase alongside cooperative/MSME bank loans.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which flagship state credit-linked subsidy scheme supports Uttarakhand youth and returnee migrants across manufacturing, services, and trade micro-enterprises?',
        options: [
          'Mukhyamantri Swarozgar Yojana (MMSY)',
          'Atal Ayushman Scheme',
          'Nanda Gaura Yojana',
          'Gauradevi Kanya Dhan',
        ],
        correctOptionIndex: 0,
        explanation: 'Mukhyamantri Swarozgar Yojana provides 15%–25% margin-money subsidies on project loans across manufacturing and service sectors.',
        difficulty: 'foundation',
      },
      {
        stem: 'What was the core purpose of launching the "HOPE" (Helping Out People Everywhere) portal in Uttarakhand?',
        options: [
          'Tracking tourist helicopter bookings',
          'Creating a comprehensive skill-and-employment database connecting resident youth and reverse-migrants with jobs, skill training, and self-employment schemes',
          'Filing online FIRs exclusively',
          'Auctioning timber depots',
        ],
        correctOptionIndex: 1,
        explanation: 'Launched in May 2020 during pandemic reverse migration, HOPE maps skills of unemployed youth to link them with employers and entrepreneurship programs.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Central Government scheme launched in September 2023 supports 18 traditional artisan and craftsperson trades (carpenters, blacksmiths, potters, weavers, coppersmiths) with toolkit grants and collateral-free loans at 5% interest?',
        options: ['Startup India', 'PM Vishwakarma Scheme', 'Stand-Up India', 'MUDRA Shishu only'],
        correctOptionIndex: 1,
        explanation: 'PM Vishwakarma provides PM Vishwakarma Certificate/ID, Rs 15,000 toolkit e-voucher, skill upgradation stipend, and Rs 1 lakh + Rs 2 lakh collateral-free credit at 5%.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under MGNREGA (Mahatma Gandhi National Rural Employment Guarantee Act, 2005), how many days of guaranteed wage employment per financial year is every rural household legally entitled to?',
        options: ['50 days', '100 days (extendable to 150 days in notified drought/disaster/tribal areas)', '200 days fixed nationwide', '30 days'],
        correctOptionIndex: 1,
        explanation: 'MGNREGA provides a legal demand-driven right to 100 days of unskilled manual work (plus up to 50 extra days in notified calamity/drought/FRA-patta contexts).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Central–State scheme provides a 35% credit-linked capital subsidy (up to Rs 10 lakh) specifically to upgrade micro food-processing units aligned with One District One Product (ODOP) in Uttarakhand?',
        options: [
          'PMFME (Pradhan Mantri Formalisation of Micro Food Processing Enterprises)',
          'PM-KISAN',
          'AMRUT 2.0',
          'UDAN',
        ],
        correctOptionIndex: 0,
        explanation: 'PMFME helps hill SHGs, FPOs, and micro-entrepreneurs formalize pickle, juice (buransh/malta), spice, and millet processing units.',
        difficulty: 'standard',
      },
      {
        stem: 'Which nodal state agency coordinates short-term skill training, ITI industry partnerships, and PMKVY execution across Uttarakhand?',
        options: [
          'UKPSC',
          'Uttarakhand Skill Development Mission (UKSDM)',
          'State Election Commission',
          'SIDCUL alone',
        ],
        correctOptionIndex: 1,
        explanation: 'UKSDM aligns vocational curriculum with hospitality, healthcare, electronics, automotive, and green-energy employer demand.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under DAY-NRLM (implemented via Uttarakhand State Rural Livelihoods Mission), what does the "Lakhpati Didi" target signify?',
        options: [
          'Providing Rs 1 lakh cash gift without work',
          'Empowering SHG rural women through diversified livelihood activities (agriculture, livestock, crafts, services) so each earns a sustainable annual household income of Rs 1 lakh or more',
          'Hiring women solely as bank clerks',
          'Granting Rs 1 lakh land plots in Dehradun',
        ],
        correctOptionIndex: 1,
        explanation: 'Lakhpati Didi tracks sustainable annual SHG household incomes exceeding Rs 1 lakh via enterprise clustering, market linkages, and digital finance.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why are traditional "Chal-Khal" (hilltop rainwater recharge ponds) built under MGNREGA and watershed schemes vital for Uttarakhand\'s rural livelihoods?',
        options: [
          'They generate tidal electricity',
          'They recharge drying mountain natural springs (naulas/dharas), securing drinking water and winter soil moisture for hill farming and livestock',
          'They divert river water into mines',
          'They serve as airport runways',
        ],
        correctOptionIndex: 1,
        explanation: 'Over 60% of hill rural water depends on natural springs; MGNREGA trenching and chal-khals directly restore spring discharge and farm resilience.',
        difficulty: 'standard',
      },
      {
        stem: 'What is the core benefit of forming "Farmer Producer Organizations (FPOs)" among smallholders in Uttarakhand?',
        options: [
          'Replacing Gram Panchayats',
          'Aggregating fragmented tiny mountain harvests to gain bulk bargaining power for inputs, cold storage, organic certification, and direct urban/corporate buyers',
          'Converting agricultural land into malls',
          'Increasing middlemen layers',
        ],
        correctOptionIndex: 1,
        explanation: 'Individual 0.5-ha hill farmers lack market scale; FPOs (promoted under the Central 10,000 FPOs scheme & NABARD) solve aggregation and logistics.',
        difficulty: 'standard',
      },
      {
        stem: 'Which state scheme in Uttarakhand specifically aims to reduce the daily fodder-headload drudgery of hill women by supplying subsidized nutrient-rich animal feed/silage locally ("Ghasyari" relief)?',
        options: [
          'Mukhyamantri Ghasyari Kalyan Yojana',
          'Nanda Gaura Yojana',
          'Saur Swarozgar Yojana',
          'Atal Ayushman Scheme',
        ],
        correctOptionIndex: 0,
        explanation: 'Launched in 2021, Mukhyamantri Ghasyari Kalyan Yojana delivers packaged nutritious silage/fodder bags through cooperatives, saving women hours of dangerous hill slope fodder cutting.',
        difficulty: 'standard',
      },
      {
        stem: 'Under the Prime Minister\'s Employment Generation Programme (PMEGP), implemented through KVIC and District Industries Centres (DICs), what higher margin-money subsidy applies to "Special Category" (Women, SC/ST, Hill/Border area) beneficiaries in rural areas?',
        options: ['10%', '15%', '35% of the project cost', '75%'],
        correctOptionIndex: 2,
        explanation: 'In rural areas, PMEGP provides 25% subsidy for general category and 35% subsidy for Special Category (including Hill/Border regions like Uttarakhand hills, Women, SC/ST, Ex-servicemen).',
        difficulty: 'advanced',
      },
      {
        stem: 'Which state initiative specifically targets high-migration ("Palayan") border and mountain gram panchayats by funding localized income clusters to encourage reverse migration?',
        options: [
          'Mukhyamantri Palayan Roktham Yojana',
          'Ujjwala Gas Yojana',
          'Smart Cities Mission',
          'UDAN Regional Connectivity',
        ],
        correctOptionIndex: 0,
        explanation: 'Mukhyamantri Palayan Roktham Yojana directs cluster-based agriculture, animal husbandry, and micro-enterprise funds into the worst migration-affected hill blocks.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why does "Recognition of Prior Learning (RPL)" under PMKVY matter particularly for Uttarakhand\'s workforce?',
        options: [
          'It cancels prior work experience',
          'It assesses and formally certifies existing informal skills of experienced hill masons, cooks, homestay hosts, drivers, and craftsmen—improving wage bargaining and bank creditworthiness',
          'It applies only to PhD scholars',
          'It bans traditional crafts',
        ],
        correctOptionIndex: 1,
        explanation: 'Many skilled hill youth and returnees acquire hospitality or construction skills informally; RPL certification bridges informal experience to formal labour markets.',
        difficulty: 'standard',
      },
    ],
  },
];
