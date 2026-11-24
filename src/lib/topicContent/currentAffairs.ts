import { TopicContentPackage } from './types';

export const CURRENT_AFFAIRS_TOPICS: TopicContentPackage[] = [
  {
    topicTitle: 'Uttarakhand State Budget, Economic Survey & Fiscal Initiatives',
    materialTitle: 'Uttarakhand Fiscal Framework, GSDP Dynamics & Budgetary Themes — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Uttarakhand Budget, FRBM & Fiscal Policy',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Uttarakhand State Budget, Economic Survey & Fiscal Initiatives

## 1. Structural Profile of Uttarakhand’s Public Finances
- **Secondary Sector Dominance:** Unlike many mountain states, Uttarakhand’s **GSDP** receives over **40–45%** contribution from **Industry/Manufacturing** (driven by post-2003 Special Category industrial incentives & **SIIDCUL** clusters in **Haridwar, US Nagar, Dehradun**), followed by **Services (~40–45%)** and **Agriculture (~10–12%)**.
- **Spatial Fiscal Asymmetry:** Three plain/foothill districts (**Dehradun, Haridwar, Udham Singh Nagar**) generate the overwhelming share of own tax revenue (SGST, State Excise, Stamps & Registration), whereas 10 hill districts rely heavily on **public capital expenditure** and **central transfers**.

## 2. Revenue Streams & Intergovernmental Transfers
- **Own Tax Revenue (OTR):** State GST (SGST), State Excise, Motor Vehicles Tax, Stamp Duty, Land Revenue.
- **Own Non-Tax Revenue (ONTR):** Royalty from hydroelectricity & **free power share**, forest produce/minerals, tourism & user charges.
- **Finance Commission Grants (15th/16th FC):** Share in Central Tax Pool (**41%** vertical pool), **Revenue Deficit Grants (RDG)**, **Disaster Response Fund (SDRF — 90:10 CSS sharing pattern as a Himalayan state)**, and local body grants.
- **CSS Sharing Advantage:** As a **North-Eastern & Himalayan State**, Uttarakhand enjoys a **90:10 Centre–State funding ratio** on Centrally Sponsored Schemes (compared to 60:40 for general states).

## 3. Core Fiscal Initiatives & Green Budgeting
- **FRBM Compliance:** **Uttarakhand Fiscal Responsibility and Budget Management (FRBM) Act, 2005** mandates keeping fiscal deficit within statutory limits (~3% of GSDP base limit plus conditional central borrowing windows) and eliminating/minimizing revenue deficit.
- **Gender Budgeting & Green Accounting:** Dedicated **Gender Budget** statements track women-centric outlays (*Lakhpati Didi, Mahila Poshan, Nanda Gaura*); Uttarakhand also pioneered ecological valuation (**Gross Environment Product — GEP** framework announced to measure annual air, water, forest, and soil additions!).
- **"Green Bonus" Demand:** Persistent state demand before Union Finance Commissions to compensate Himalayan states for keeping **~71% legal forest/biodiversity cover** intact as carbon sinks and river catchments for the Indo-Gangetic plains.

## 4. Key Revision Takeaways
- **90:10 CSS Pattern** and **GEP (Gross Environment Product)** assessment are flagship Uttarakhand fiscal governance highlights.
- **FRBM Act 2005** governs state deficit discipline alongside **capital investment priority** in Char Dham connectivity, helipads, ropeways, and disaster resilience.`,
    mcqs: [
      {
        stem: 'As a **Himalayan State**, what is **Uttarakhand’s standard Centre–State cost-sharing ratio** under **Centrally Sponsored Schemes (CSS)** compared to general category states (60:40)?',
        options: ['50:50', '75:25', '90:10 (90% Central grant, 10% State share)', '100:0'],
        correctOptionIndex: 2,
        explanation: 'Uttarakhand, Himachal Pradesh, and the North-Eastern states receive the advantageous 90:10 funding pattern under restructured Centrally Sponsored Schemes.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pioneering **ecological accounting metric** did **Uttarakhand** launch officially to measure the annual net value of **forest, air, water, and soil conservation** alongside GDP/GSDP?',
        options: [
          'Carbon Intensity Quotient (CIQ)',
          'Gross Environment Product (GEP)',
          'Himalayan Happiness Index',
          'Net Forest Reserve Ratio',
        ],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand became the first Indian state to institutionalize Gross Environment Product (GEP) indexing to track ecological restoration alongside economic growth.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which statutory law passed in **2005** binds the Uttarakhand Government to fiscal deficit ceilings and medium-term fiscal policy disclosures?',
        options: [
          'Uttarakhand Monetary Stability Act',
          'Uttarakhand Fiscal Responsibility and Budget Management (FRBM) Act, 2005',
          'Himalayan Cess Regulation Act',
          'State Debt Ceiling Act 2012',
        ],
        correctOptionIndex: 1,
        explanation: 'The Uttarakhand FRBM Act, 2005 aligns state borrowing and deficit discipline with Finance Commission recommendations.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **three districts** together generate the dominant share of **Uttarakhand’s State Own Tax Revenue (SGST, Stamp Duty, Excise)** and industrial GSDP?',
        options: [
          'Almora, Pithoragarh, Chamoli',
          'Dehradun, Haridwar, and Udham Singh Nagar',
          'Tehri, Pauri, Uttarkashi',
          'Nainital, Bageshwar, Champawat',
        ],
        correctOptionIndex: 1,
        explanation: 'SIIDCUL hubs and dense urban markets in Dehradun, Haridwar, and Udham Singh Nagar generate the vast majority of industrial output and tax receipts.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the core fiscal rationale behind Uttarakhand’s recurring demand for a **"Green Bonus"** before successive **Finance Commissions**?',
        options: [
          'Subsidizing coal mining in hills',
          'Compensating the state for opportunity costs of preserving vast forest cover and Himalayan watersheds that benefit downstream plains',
          'Funding urban metro rail networks',
          'Waiving GST on luxury tourism',
        ],
        correctOptionIndex: 1,
        explanation: 'With ~71% recorded forest area and strict eco-sensitive norms limiting conventional industrialization/mining, hill states seek fiscal compensation for ecological services.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **sectoral contribution trend** distinguishes **Uttarakhand’s GSDP** from most other Indian Himalayan states?',
        options: [
          'Agriculture exceeds 50% of GSDP',
          'A remarkably large Secondary (Manufacturing/Construction/Energy) sector share (~40%+) driven by SIIDCUL & pharma/auto clusters',
          'Zero services sector share',
          'Mining contributes 60% of GSDP',
        ],
        correctOptionIndex: 1,
        explanation: 'Following the 2003 Special Industrial Package, manufacturing and construction grew rapidly in the Terai–Doon belt, giving Uttarakhand an industry-heavy GSDP profile.',
        difficulty: 'standard',
      },
      {
        stem: 'Which major **women’s economic empowerment initiative** is prioritized through **State Rural Livelihood Mission (USRLM) Self-Help Groups** across Uttarakhand’s 13 districts?',
        options: [
          'Free Industrial Plot Scheme',
          'Mukhyamantri Sashakt Bahna Utsav / Lakhpati Didi Mission',
          'Urban Metro Credit Guarantee',
          'Coal Royalty Sharing Scheme',
        ],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand’s Lakhpati Didi and Sashakt Bahna Utsav schemes connect SHG women products (mandua, spices, handicrafts, honey) to guaranteed markets and interest-free credit.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under **Article 280** of the Constitution, what percentage of the **divisible central tax pool** did the **15th Finance Commission** recommend for horizontal devolution among all states (2021–2026)?',
        options: ['32%', '41% (adjusted 1% from 42% after creation of J&K and Ladakh UTs)', '50%', '29.5%'],
        correctOptionIndex: 1,
        explanation: 'The 15th Finance Commission recommended 41% vertical tax devolution plus special sector/disaster/revenue-deficit grants.',
        difficulty: 'standard',
      },
      {
        stem: 'What horizontal parameter in **15th Finance Commission tax devolution** directly rewards Himalayan states like **Uttarakhand** for maintaining dense canopy cover?',
        options: [
          'Population (1971)',
          'Forest and Ecology weight (10% weightage)',
          'Industrial Export Volume',
          'Coastline Length',
        ],
        correctOptionIndex: 1,
        explanation: 'The 15th FC assigned 10% weight to Forest & Ecology (based on moderate + very dense forest share), benefiting Uttarakhand significantly.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **non-tax revenue source** provides free electricity quota and water-royalty revenue to the Uttarakhand Exchequer from central/JV hydro projects?',
        options: [
          '12% free power royalty from major hydroelectric projects commissioned in the state',
          'Marine fisheries licensing fees',
          'Offshore oil royalties',
          'Nuclear fuel tariffs',
        ],
        correctOptionIndex: 0,
        explanation: 'Under national hydro policy, host states like Uttarakhand receive 12% free power (plus 1% local area development share) from large hydro stations.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **budget document component** tracks public allocations specifically aimed at reducing economic and health disparities faced by **women and girls** in Uttarakhand?',
        options: [
          'Contingency Statement',
          'Gender Budget Statement',
          'Capital Sinking Fund',
          'Ways & Means Advance Report',
        ],
        correctOptionIndex: 1,
        explanation: 'Gender Budgeting categorizes Part-A (100% women-targeted like Nanda Gaura) and Part-B (30–99% pro-women schemes) in annual budget books.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **two funds** provide immediate post-disaster relief and mitigation financing in Uttarakhand under the **Disaster Management Act, 2005**?',
        options: [
          'Consolidated Fund only',
          'State Disaster Response Fund (SDRF) & State Disaster Mitigation Fund (SDMF)',
          'RBI Market Stabilization Scheme',
          'SEBI Investor Protection Fund',
        ],
        correctOptionIndex: 1,
        explanation: 'SDRF (90:10 Centre:State for Himalayan states) and SDMF under the 15th FC framework fund immediate rescue and landslide/GLOF mitigation.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which constitutional **Article** requires the **Annual Financial Statement (State Budget)** of Uttarakhand to be laid before the **Vidhan Sabha**?',
        options: ['Article 112', 'Article 202', 'Article 266', 'Article 280'],
        correctOptionIndex: 1,
        explanation: 'Article 112 applies to the Union Parliament, whereas Article 202 mandates the State Annual Financial Statement (State Budget) before the State Legislature.',
        difficulty: 'standard',
      },
      {
        stem: 'Under **Uttarakhand’s State Planning & Fiscal Portal**, which scheme aims at revitalizing **rain-fed hill agriculture and preventing hill out-migration** through integrated cluster farming?',
        options: [
          'SEZ Coastal Export Policy',
          'Mukhyamantri Palayan Roktham Yojana & Paramparagat Krishi Vikas Yojana (Organic Clusters)',
          'Deep-Sea Fishing Mission',
          'Coal Block Auction Fund',
        ],
        correctOptionIndex: 1,
        explanation: 'Mukhyamantri Palayan Roktham Yojana (Border & Hill Migration Prevention) and organic millet/horticulture missions target livelihood retention in hill blocks.',
        difficulty: 'foundation',
      },
      {
        stem: 'What distinguishes **Capital Expenditure (Capex)** in the Uttarakhand State Budget from **Revenue Expenditure**?',
        options: [
          'Capex pays monthly government salaries and pensions',
          'Capex builds long-term physical assets (roads, bridges, hospitals, irrigation canals, schools) or reduces liabilities',
          'Capex includes only subsidies',
          'Capex is never audited by CAG',
        ],
        correctOptionIndex: 1,
        explanation: 'Prioritizing Capital Expenditure boosts long-run hill connectivity, tourism capacity, and GSDP multiplier while revenue expenditure covers salaries, pensions, and interest.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Major State Legislation & Governance Reforms',
    materialTitle: 'Uttarakhand Landmark Laws, Anti-Copying Act, UCC & Governance Reforms — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Uttarakhand Legislation & Governance',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Major State Legislation & Governance Reforms

## 1. Uniform Civil Code (UCC) Uttarakhand Act, 2024
- **Historic Milestone:** Uttarakhand became the **first Indian state post-Independence** to enact a **Uniform Civil Code** (passed by Vidhan Sabha in **February 2024**, received Presidential assent under Article 254 / Concurrent List Entry 5 in **March 2024**, rules notified and enforced from **January 2025**).
- **Drafting Committee:** Headed by **Justice Ranjana Prakash Desai (Retd.)**.
- **Scope:** Uniform rules for marriage (minimum age 21 for men, 18 for women; prohibition of polygamy/halala), divorce, inheritance (equal coparcenary/succession rights), mandatory registration of marriages & live-in relationships.
- **Exemption:** **Scheduled Tribes (STs)** protected under Constitutional safeguards (Articles 342 / Sixth-Fifth protections; Jaunsari, Tharu, Bhoxa, Bhotiya, Raji) are **exempted** from UCC applicability.

## 2. Competitive Examination Integrity: Uttarakhand Anti-Copying Act, 2023
- **Full Name:** *Uttarakhand Competitive Examination (Measures for Control and Prevention of Unfair Means in Recruitment) Act, 2023* (initially Ordinance Feb 2023, then Act).
- **Strict Penalties:** Stringent imprisonment (up to **life imprisonment / 10 years** and heavy fines up to ₹10 crore for organized paper-leak syndicates), attachment/confiscation of illegal assets, and **non-bailable & cognizable** offences for syndicates.
- **Candidate Debarment:** Candidates caught cheating face debarment (3 to 10 years depending on offence).

## 3. State Women’s Horizontal Reservation & Governance Laws
- **30% Horizontal Reservation for Women:** *Uttarakhand Public Services (Horizontal Reservation for Women) Act, 2022* restored **30% horizontal reservation** in state government jobs for **domicile women of Uttarakhand**.
- **Statehood Agitators Reservation:** **10% horizontal reservation** enacted for verified **Uttarakhand Rajya Andolankaris** (statehood activists) and their dependents in state services.
- **Anti-Conversion Law Amendment (2022):** *Uttarakhand Freedom of Religion (Amendment) Act, 2022* made unlawful/forced conversion a cognizable, non-bailable offence with stricter penalties.
- **Right to Service & E-Governance:** **Apuni Sarkar Portal** (citizen certificate delivery within notified timelines), **CM Helpline 1905**, and **e-Cabinet / e-Office** rollout in Secretariat.

## 4. Key Revision Takeaways
- **Justice Ranjana Desai Committee** drafted India’s first post-1947 state **UCC Act (2024)** — **Scheduled Tribes are exempt**.
- **Anti-Copying Act 2023**, **30% Women Horizontal Reservation**, and **10% Rajya Andolankari Reservation** are crucial UKPSC Prelims/Mains facts.`,
    mcqs: [
      {
        stem: 'Who chaired the **five-member expert committee** constituted by the Uttarakhand Government to draft the **Uniform Civil Code (UCC) of Uttarakhand**?',
        options: [
          'Justice M.N. Venkatachaliah',
          'Justice Ranjana Prakash Desai (Retd.)',
          'Justice B.S. Chauhan',
          'Justice Ritu Raj Awasthi',
        ],
        correctOptionIndex: 1,
        explanation: 'Former Supreme Court Judge Justice Ranjana Prakash Desai chaired the drafting panel whose report formed the basis of the UCC Uttarakhand Act, 2024.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which demographic group within Uttarakhand is **expressly exempted** from the applicability of the **Uniform Civil Code (UCC) Uttarakhand Act, 2024**?',
        options: [
          'Government employees',
          'Scheduled Tribes (STs) notified under Article 342 of the Constitution',
          'Residents of municipal corporations',
          'Senior citizens above 60 years',
        ],
        correctOptionIndex: 1,
        explanation: 'Section 2 of the Uttarakhand UCC Act exempts Scheduled Tribes (such as Jaunsari, Bhotiya, Tharu, Bhoxa, and Raji) to safeguard their customary protections.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Constitutional **Article** governs the **Directive Principle of State Policy** calling upon the State to endeavour to secure a **Uniform Civil Code** across India?',
        options: ['Article 40', 'Article 44', 'Article 48A', 'Article 51'],
        correctOptionIndex: 1,
        explanation: 'Article 44 (Part IV DPSP) states: "The State shall endeavour to secure for the citizens a uniform civil code throughout the territory of India."',
        difficulty: 'foundation',
      },
      {
        stem: 'Under which **Legislative List** of the Seventh Schedule do laws relating to **marriage, divorce, wills, intestacy, and succession** fall — enabling a State Legislature to pass a UCC with **Presidential assent (Article 254(2))**?',
        options: [
          'Union List (List I)',
          'Concurrent List (List III — Entry 5)',
          'Residuary Powers (Article 248)',
          'Eleventh Schedule',
        ],
        correctOptionIndex: 1,
        explanation: 'Personal-law subjects sit in Entry 5 of the Concurrent List (List III); Presidential assent under Article 254(2) allowed the state Act to prevail over conflicting central personal laws in Uttarakhand.',
        difficulty: 'standard',
      },
      {
        stem: 'What is the **maximum statutory punishment** prescribed for **organized recruitment paper-leak syndicates** under the **Uttarakhand Anti-Copying Act, 2023**?',
        options: [
          '₹5,000 fine only',
          'Up to Life Imprisonment (or 10 years–life) plus fine up to ₹10 crore and asset attachment',
          '6 months simple imprisonment',
          'Warning letter only',
        ],
        correctOptionIndex: 1,
        explanation: 'The 2023 Act introduced India’s strictest anti-cheating penalties against organized exam mafias—cognizable, non-bailable, up to life imprisonment, ₹10 crore fine, and property confiscation.',
        difficulty: 'foundation',
      },
      {
        stem: 'What percentage of **horizontal reservation in Uttarakhand state public services** was statutorily restored for **domicile women of Uttarakhand** via the **2022–2023 Act**?',
        options: ['15%', '20%', '30%', '50%'],
        correctOptionIndex: 2,
        explanation: 'The Uttarakhand Public Services (Horizontal Reservation for Women) Act, 2022 guarantees 30% horizontal reservation across all categories to Uttarakhand-domiciled women.',
        difficulty: 'foundation',
      },
      {
        stem: 'What **horizontal reservation quota** in state government services was enacted in **2024** (following Governor assent) for verified **Uttarakhand Statehood Agitators (Rajya Andolankaris)** and their dependents?',
        options: ['5%', '10%', '15%', '25%'],
        correctOptionIndex: 1,
        explanation: 'The Uttarakhand Rajya Andolankari Horizontal Reservation legislation provides 10% horizontal reservation in state government jobs to recognized statehood agitators/dependents.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the name of Uttarakhand’s unified **citizen e-governance portal** integrating domicile, caste, income, marriage, and municipal certificates under time-bound **Right to Service** norms?',
        options: ['e-Panchayat Mitra', 'Apuni Sarkar', 'Jan Dhan Kendra', 'Digilocker Hill'],
        correctOptionIndex: 1,
        explanation: 'Apuni Sarkar (plus CM Helpline 1905) enables online application and tracking of citizen services via Common Service Centres (CSCs) across Uttarakhand.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the **Uttarakhand UCC Act**, how many days within entering a **live-in relationship** in the state (or outside by a state resident) is registration with the local **Registrar** mandated?',
        options: [
          'Optional registration',
          'Mandatory registration within 1 month of entering into the relationship',
          'After 5 years',
          'Only if purchasing land',
        ],
        correctOptionIndex: 1,
        explanation: 'The UCC Act requires partners in a live-in relationship to submit a statement to the Registrar within one month (with children born thereof recognized as legitimate).',
        difficulty: 'standard',
      },
      {
        stem: 'Under the **Uttarakhand Right to Service Act (2011)**, what happens if a **Designated Officer** fails to deliver a notified public service within the stipulated time limit without sufficient cause?',
        options: [
          'Nothing happens',
          'Appellate Authority / Right to Service Commission can impose monetary penalties on the erring officer',
          'The citizen must re-apply in Delhi',
          'The application is permanently banned',
        ],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand’s Right to Service Commission enforces statutory timelines via fines on defaulting designated officers.',
        difficulty: 'standard',
      },
      {
        stem: 'In which **month and year** did Uttarakhand implement the **Uniform Civil Code (UCC)** rules statewide via an online registration portal, becoming the first Indian state post-1947 to operationalize it?',
        options: ['August 2022', 'January 2025 (rules notified & portal launched on 27 Jan 2025)', 'March 2021', 'November 2020'],
        correctOptionIndex: 1,
        explanation: 'After Presidential assent in March 2024, the Uttarakhand Government notified UCC Rules and operationalized the state UCC portal on 27 January 2025.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **two constitutional authorities** operate to protect competitive recruitment integrity in Uttarakhand for **Group A/B Gazetted** vs **Group C Non-Gazetted** posts respectively?',
        options: [
          'UPSC and SSC only',
          'UKPSC (Haridwar) and UKSSSC (Dehradun)',
          'High Court and NITI Aayog',
          'CBSE and NTA',
        ],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand Public Service Commission (UKPSC, Haridwar) handles civil/gazetted services and judicial exams, while UKSSSC (Dehradun) conducts Group C recruitments.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Uttarakhand helpline number** serves as the flagship **Chief Minister’s Public Grievance Redressal Helpline** across all 13 districts?',
        options: ['100', '1905', '181', '108'],
        correctOptionIndex: 1,
        explanation: 'CM Helpline 1905 registers citizen complaints, tracks officer disposal, and monitors satisfaction feedback from block to Secretariat level.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the **Uttarakhand Panchayati Raj (Amendment) reforms**, which **minimum educational qualification / two-child norm** criteria were introduced for contesting Panchayat elections (subject to statutory applicability)?',
        options: [
          'Postgraduate degree for all wards',
          'Two-living-children ceiling (post cut-off date) and Class 10 (Class 8 for women/SC/ST) educational threshold',
          'No age limit below 35',
          'Mandatory government job experience',
        ],
        correctOptionIndex: 1,
        explanation: 'The 2019 amendments to the Uttarakhand Panchayati Raj Act 2016 introduced minimum educational standards and the two-child family norm.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **strict state land regulation law** restricts arbitrary purchase of **agricultural land in Uttarakhand by non-residents/outsiders** beyond prescribed urban/municipal limits?',
        options: [
          'Section 154 of the Uttar Pradesh Zamindari Abolition & Land Reforms (UPZALR) Act as adapted by Uttarakhand (and subsequent state land-law amendments)',
          'Article 371G',
          'Forest Conservation Act 1980 only',
          'Transfer of Property Act Section 1',
        ],
        correctOptionIndex: 0,
        explanation: 'Uttarakhand’s state land-law amendments (building on UPZALR Section 154 limits — initially 500 sq m / 250 sq m ceilings and subsequent 2025 strict rural purchase restrictions) protect scarce hill agricultural land.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'State Infrastructure, Tourism, Sports & Awards',
    materialTitle: 'Uttarakhand Strategic Infrastructure, National Games, GI Tags & Honors — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Uttarakhand Infrastructure, Sports & GI Tags',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# State Infrastructure, Tourism, Sports & Awards

## 1. Strategic Connectivity & Mega Projects
- **Rishikesh–Karnaprayag Broad-Gauge Rail Project (~125.2 km):** Over **84% underground tunnels** through fragile Himalayan geology, starting from **Yog Nagari Rishikesh** across 5 districts (**Dehradun, Tehri, Pauri, Rudraprayag, Chamoli**) up to **Sewai/Karnaprayag**.
- **Char Dham All-Weather Highway Project (~889 km):** Widening & landslide protection linking **Yamunotri, Gangotri, Kedarnath, Badrinath** plus **Tanakpur–Pithoragarh** Kailash route.
- **Delhi–Dehradun Economic Corridor (Expressway):** Reduces travel time to ~2.5 hours featuring Asia's longest **elevated wildlife viaduct (12 km)** over **Rajaji National Park**.
- **Ropeways under Parvatmala:** **Gaurikund–Kedarnath** and **Govindghat–Hemkund Sahib** mega ropeways plus **Dehradun–Mussoorie** passenger ropeway.
- **Lakhwar & Jamrani Dams:** Multipurpose hydro-irrigation projects on **Yamuna (Dehradun–Tehri)** and **Gola (Nainital)** rivers.

## 2. 38th National Games (January–February 2025) & Sports Legacy
- **Host State:** Uttarakhand hosted the **38th National Games** (**28 Jan – 14 Feb 2025**) under the motto **"Sankalp Se Shikhar Tak"** (Theme: **Green Games** — e-waste medals & solar operations!).
- **Mascot:** **"Mauli"** (inspired by Uttarakhand's **State Bird — Himalayan Monal**!).
- **Venues:** Anchored at **Rajiv Gandhi International Cricket Stadium (Dehradun)**, **Indira Gandhi International Sports Complex (Haldwani)**, **Rudrapur, Haridwar, Tehri (water sports), Rishikesh, Nainital, Almora, Pithoragarh**.

## 3. GI Tags & State Honours
- **Recent Geographical Indication (GI) Tags from Uttarakhand:** **Uttarakhand Berinag Tea, Mandua (Finger Millet), Jhangora, Buransh Juice, Pahadi Toor Dal, Kalabhatt, Bichhu Booti Fabrics, Nainital Aipan, Munsiyari Rajma, Tejpatta, Ringal Craft, Copper Craft (Tamta)**, **Bhotia Dann Carpets**, **Thulma Blankets**, **Chura Oil (Champawat)**, **Lakhori Mirch**.
- **State Awards:** **Uttarakhand Gaurav Samman** (highest civilian honour — first conferred 2021/2022 on icons like **CDS Gen. Bipin Rawat, Ajit Doval, Prasoon Joshi, Ruskin Bond, Narendra Singh Negi, Girish Chandra Tiwari 'Girda'**), **Devbhoomi Uttarakhand Khel Ratna**, **Dronacharya Award**.

## 4. Key Revision Takeaways
- **38th National Games (2025)** mascot **Mauli (Monal)** & motto **"Sankalp Se Shikhar Tak"**.
- **125.2 km Rishikesh–Karnaprayag Rail** and **12 km Rajaji Elevated Wildlife Viaduct** are high-yield connectivity items.`,
    mcqs: [
      {
        stem: 'What was the **official mascot** and **tagline/motto** of the **38th National Games** hosted across Uttarakhand in **January–February 2025**?',
        options: [
          'Moga and "Khelo Bharat"',
          'Mauli (inspired by the Himalayan Monal) and "Sankalp Se Shikhar Tak"',
          'Shera and "Come Out and Play"',
          'Savaj and "Ek Bharat Shreshtha Bharat"',
        ],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand’s 38th National Games featured "Mauli" (after the state bird Himalayan Monal) and the Green Games motto "Sankalp Se Shikhar Tak".',
        difficulty: 'foundation',
      },
      {
        stem: 'Roughly **how long** is the strategic **Rishikesh–Karnaprayag Broad-Gauge Railway Project**, and which **5 districts** does its alignment traverse?',
        options: [
          '45 km across Haridwar and Dehradun only',
          '~125.2 km across Dehradun, Tehri, Pauri, Rudraprayag, and Chamoli',
          '240 km across Nainital and Pithoragarh',
          '80 km across Uttarkashi and Chamoli',
        ],
        correctOptionIndex: 1,
        explanation: 'Running ~125.2 km from Yog Nagari Rishikesh through 17 tunnels (majority underground) to Karnaprayag, the rail line traverses 5 Garhwal districts.',
        difficulty: 'standard',
      },
      {
        stem: 'Which ecological feature makes the final stretch of the **Delhi–Dehradun Expressway** passing near **Ganeshpur–Mohand** one of Asia’s longest infrastructure marvels?',
        options: [
          'A floating pontoon bridge',
          'A ~12-km elevated wildlife-friendly corridor (viaduct) over the Rajaji National Park elephant corridor',
          'An underground metro line',
          'A sea-link bridge',
        ],
        correctOptionIndex: 1,
        explanation: 'The 12-km elevated viaduct (with sound barriers and underpasses) allows wild elephants, tigers, and deer inside Rajaji–Shivalik forests to cross safely beneath expressway traffic.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Uttarakhand state award** honours individuals who brought national/global distinction in literature, culture, public service, or bravery (including **Ruskin Bond, Narendra Singh Negi, Ajit Doval, Gen. Bipin Rawat**)?',
        options: [
          'Bharat Ratna Hill Award',
          'Uttarakhand Gaurav Samman',
          'Kumaon Kesari Trophy',
          'Himalaya Ratna',
        ],
        correctOptionIndex: 1,
        explanation: 'Instituted on Uttarakhand Foundation Day (2021 onward), Uttarakhand Gaurav Samman is the state’s premier civilian award.',
        difficulty: 'foundation',
      },
      {
        stem: 'In which **two river basins** are the newly accelerated **Lakhwar** and **Jamrani** multipurpose dam projects situated respectively?',
        options: [
          'Bhagirathi and Kosi',
          'Yamuna (Dehradun/Tehri) and Gola (Nainital)',
          'Alaknanda and Saryu',
          'Tons and Eastern Ramganga',
        ],
        correctOptionIndex: 1,
        explanation: 'Lakhwar Dam (300 MW) sits on the Yamuna near Lohari (Dehradun–Tehri border), while Jamrani Dam sits on the Gola River upstream of Kathgodam (Nainital).',
        difficulty: 'standard',
      },
      {
        stem: 'Which **traditional Uttarakhand folk art** featuring geometric rice-paste (*biswar*) motifs on ochre red walls received **Geographical Indication (GI)** status?',
        options: ['Madhubani', 'Uttarakhand Aipan', 'Warli', 'Pattachitra'],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand Aipan (alongside Ringal Craft, Copper Tamta Craft, Munsiyari Rajma, Bhotia Dann, Thulma, and Bichhu Booti fabric) holds GI certification.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **water-sports venue** in Uttarakhand hosted **rowing, kayaking, and canoeing events** during the **38th National Games**?',
        options: ['Naini Lake', 'Tehri Lake (Koti Colony)', 'Bhimtal', 'Sattal'],
        correctOptionIndex: 1,
        explanation: 'Tehri Lake’s expansive reservoir at Koti Colony serves as Uttarakhand’s premier national water-sports and adventure training hub.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **central ropeway development scheme** covers the mega **Gaurikund–Kedarnath** and **Govindghat–Hemkund Sahib** projects in Uttarakhand?',
        options: ['Sagarmala', 'Parvatmala Pariyojana (National Ropeways Development Programme)', 'Bharatmala Phase IV', 'PM Gram Sadak Yojana'],
        correctOptionIndex: 1,
        explanation: 'Under Parvatmala, automated monocable/tricable ropeways dramatically cut travel time on high-gradient pilgrimage routes.',
        difficulty: 'foundation',
      },
      {
        stem: 'From which **Uttarakhand shrub (stinging nettle)** — turned into zero-chemical Himalayan textiles — did Uttarakhand secure a distinct **GI Tag**?',
        options: [
          'Jute',
          'Uttarakhand Bichhu Booti Fabrics (Himalayan Nettle)',
          'Pine bark fibre',
          'Sisal hemp',
        ],
        correctOptionIndex: 1,
        explanation: 'Bichhu Booti (*Girardinia diversifolia*) fibres spun into eco-friendly stoles and textiles by rural cooperatives earned GI protection.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Uttarakhand village** (situated in **Chamoli district** at the gateway to Badrinath) received the **"First Indian Village" (Pehla Bharatiya Gaon)** official designation and **Vibrant Villages Programme (VVP)** focus?',
        options: ['Niti', 'Mana', 'Harsil', 'Nelang'],
        correctOptionIndex: 1,
        explanation: 'Border Roads Organisation & Union Government officially re-designated Mana (formerly "Last Indian Village") as "First Indian Village" under VVP border development.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **highest state sports award** of Uttarakhand is named after the **traditional Himalayan martial/spiritual land** and awarded annually to top state athletes?',
        options: [
          'Kumaon Gold Medal',
          'Devbhoomi Uttarakhand Khel Ratna Award',
          'Ganga Athlete Trophy',
          'Nanda Devi Shield',
        ],
        correctOptionIndex: 1,
        explanation: 'Devbhoomi Uttarakhand Khel Ratna (for athletes), Dronacharya (for coaches), and Lifetime Achievement awards recognize state sports excellence.',
        difficulty: 'foundation',
      },
      {
        stem: 'Where is the **Indira Gandhi International Sports Stadium** that hosted the **closing ceremony** and major athletic fixtures of the **38th National Games**?',
        options: ['Roorkee', 'Haldwani (Gaulapar, Nainital district)', 'Kotdwar', 'Srinagar'],
        correctOptionIndex: 1,
        explanation: 'Gaulapar (Haldwani) hosts the Indira Gandhi International Sports Complex, complementing Dehradun’s Maharana Pratap Sports College & Rajiv Gandhi Stadium.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **rare dark-hued legume** and **red chili** from Uttarakhand hills received **GI tags** recognizing endemic mountain agrobiodiversity?',
        options: [
          'Toor of Vidarbha and Guntur Chili',
          'Uttarakhand Kalabhatt (Black Soybean) / Munsiyari Rajma and Ramnagar/Nainital Lakhori Mirch',
          'Byadgi Chili only',
          'Moong and Masoor',
        ],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand secured GI tags for multiple traditional hill crops including Kalabhatt, Munsiyari Rajma, Mandua, Jhangora, Pahadi Toor Dal, and Lakhori/Almoran chili.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **historic city** of Uttarakhand is linked by the **Tanakpur–Pithoragarh All-Weather Highway** and upgrades under the **Kailash–Manasarovar Border Road** corridor?',
        options: ['Uttarkashi', 'Champawat & Pithoragarh (leading toward Dharchula–Gunji–Lipulekh)', 'Tehri', 'Pauri'],
        correctOptionIndex: 1,
        explanation: 'The Tanakpur–Champawat–Pithoragarh–Dharchula–Lipulekh axis enhances both Kailash yatra logistics and eastern border defence mobility.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under **Uttarakhand’s Heli-Tourism & Regional Air Connectivity**, which **3 airports** form the core fixed-wing civil aviation backbone of the state alongside regional helipads?',
        options: [
          'Nainital, Almora, Kedarnath',
          'Jolly Grant (Dehradun), Pantnagar (US Nagar), and Naini Saini (Pithoragarh)',
          'Haridwar, Tehri, Roorkee',
          'Lansdowne, Mussoorie, Ranikhet',
        ],
        correctOptionIndex: 1,
        explanation: 'Jolly Grant and Pantnagar operate regular commercial flights, while Naini Saini (Pithoragarh), Gauchar (Chamoli), and Chinyalisaur (Uttarkashi) serve regional UDAN/strategic operations.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Union Budget, Economic Survey & Major Indices/Reports',
    materialTitle: 'Union Fiscal Architecture, Macro Indicators & Global Indices — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Union Budget Concepts & Global Indices',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Union Budget, Economic Survey & Major Indices/Reports

## 1. Constitutional & Structural Anchors of the Union Budget
- **Article 112 (Annual Financial Statement):** Presented by the Union Finance Minister before Parliament (**merged Railway & General Budgets since 2017–18** on Bibek Debroy Committee lines, advanced to **1 February**).
- **Accompanying Documents (FRBM Act, 2003):** Macroeconomic Framework Statement, Medium-Term Fiscal Policy-cum-Strategy Statement, and Output-Outcome Monitoring Framework.
- **Four Pillars of Union Fiscal Discipline:**
  1. **Fiscal Deficit** = Total Expenditure – Total Non-Debt Receipts (borrowing requirement).
  2. **Revenue Deficit** = Revenue Expenditure – Revenue Receipts.
  3. **Effective Revenue Deficit** = Revenue Deficit – Grants given to States/UTs for creation of capital assets.
  4. **Primary Deficit** = Fiscal Deficit – Interest Payments.

## 2. Key National Reports & Indices (High-Yield for UKPSC)
| Report / Index | Issuing Organization | Key Focus |
| :--- | :--- | :--- |
| **Economic Survey of India** | Department of Economic Affairs, Ministry of Finance (authored by Chief Economic Adviser) | Annual macroeconomic review, inflation, employment, capex, external sector |
| **SDG India Index** | **NITI Aayog** | State/UT progress on UN Sustainable Development Goals (**Uttarakhand consistently ranks among Front-Runners / #1 in 2023–24 alongside Kerala!**) |
| **Multidimensional Poverty Index (MPI)** | **NITI Aayog** (using NFHS data) / UNDP–OPHI globally | Health, education & living-standard deprivations |
| **Export Preparedness Index** | **NITI Aayog** | Export ecosystem (Uttarakhand leads Himalayan states!) |
| **India State of Forest Report (ISFR)** | **Forest Survey of India (FSI, Dehradun)** | Biennial forest & tree cover, mangroves, carbon stock |

## 3. Global Indices & Publishers (Recurring Prelims Match-the-Following!)
- **Human Development Index (HDI):** **UNDP** (*Health, Education, GNI per capita*).
- **Global Innovation Index (GII):** **WIPO** (*World Intellectual Property Organization*).
- **Global Hunger Index (GHI):** **Concern Worldwide & Welthungerhilfe**.
- **Global Gender Gap Report:** **World Economic Forum (WEF)**.
- **Logistics Performance Index (LPI) / Doing Business successor (B-READY):** **World Bank**.
- **World Press Freedom Index:** **Reporters Without Borders (RSF)**.
- **Corruption Perceptions Index (CPI):** **Transparency International**.
- **Climate Change Performance Index (CCPI):** **Germanwatch, NewClimate Institute & CAN**.

## 4. Key Revision Takeaways
- **SDG India Index 2023–24** saw **Uttarakhand & Kerala** tied as top-performing states (score 79)!
- Know the exact **publisher** of every global index (**UNDP, WIPO, WEF, Transparency International, FSI**).`,
    mcqs: [
      {
        stem: 'Which **two Indian states** emerged as joint **top performers (score 79/100)** in **NITI Aayog’s SDG India Index 2023–24**?',
        options: [
          'Gujarat and Maharashtra',
          'Uttarakhand and Kerala',
          'Tamil Nadu and Karnataka',
          'Himachal Pradesh and Goa',
        ],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand climbed to 79 (joint Rank #1 with Kerala) in NITI Aayog’s SDG India Index 2023–24, improving strongly in poverty reduction, clean energy, and governance.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Uttarakhand-headquartered central agency** publishes the biennial **India State of Forest Report (ISFR)** using IRS satellite imagery and ground inventory?',
        options: [
          'Wildlife Institute of India',
          'Forest Survey of India (FSI), Dehradun',
          'Botanical Survey of India',
          'G.B. Pant NIHE, Almora',
        ],
        correctOptionIndex: 1,
        explanation: 'Forest Survey of India (FSI, Dehradun) has published the biennial ISFR since 1987.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **international body** publishes the annual **Global Innovation Index (GII)**?',
        options: [
          'World Trade Organization (WTO)',
          'World Intellectual Property Organization (WIPO)',
          'World Economic Forum (WEF)',
          'UNESCO',
        ],
        correctOptionIndex: 1,
        explanation: 'WIPO (UN specialized agency based in Geneva) compiles and releases the annual Global Innovation Index.',
        difficulty: 'foundation',
      },
      {
        stem: 'In Union Budget accounting, what does **Primary Deficit** measure?',
        options: [
          'Total Expenditure minus Tax Revenue',
          'Fiscal Deficit minus Interest Payments on past public debt',
          'Capital Expenditure minus Grants to States',
          'Imports minus Exports',
        ],
        correctOptionIndex: 1,
        explanation: 'Primary Deficit = Fiscal Deficit − Interest Payments, indicating current-year fiscal borrowing excluding legacy debt-servicing costs.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who prepares the **Economic Survey of India** presented in Parliament usually a day before the Union Budget?',
        options: [
          'NITI Aayog Vice-Chairperson',
          'Department of Economic Affairs (Ministry of Finance), guided by the Chief Economic Adviser',
          'Reserve Bank of India Governor',
          'Comptroller and Auditor General (CAG)',
        ],
        correctOptionIndex: 1,
        explanation: 'The Economic Division of the Department of Economic Affairs under the Chief Economic Adviser prepares the Economic Survey.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which organization releases the annual **Global Gender Gap Report** evaluating economic, educational, health, and political parity?',
        options: [
          'UN Women',
          'World Economic Forum (WEF)',
          'International Labour Organization (ILO)',
          'IMF',
        ],
        correctOptionIndex: 1,
        explanation: 'The World Economic Forum (Davos/Geneva) publishes the Global Gender Gap Index annually since 2006.',
        difficulty: 'foundation',
      },
      {
        stem: 'From which financial year onward were the **Railway Budget** and **General Union Budget** merged into a single unified presentation?',
        options: ['2014–15', '2017–18 (based on Bibek Debroy Committee recommendation)', '2019–20', '2021–22'],
        correctOptionIndex: 1,
        explanation: 'Ending a 92-year practice begun after the 1921 Acworth Committee, the Railway Budget was merged into the Union Budget in 2017–18.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **three dimensions** are combined to calculate the **Human Development Index (HDI)** published by **UNDP**?',
        options: [
          'Inflation, GDP, Military Spending',
          'Long and healthy life (Life Expectancy), Knowledge (Expected & Mean Years of Schooling), and Decent Standard of Living (GNI per capita PPP)',
          'Forest area, Literacy, Exports',
          'Employment, Patents, FDI',
        ],
        correctOptionIndex: 1,
        explanation: 'UNDP’s HDI uses geometric mean of normalized indices for health, education, and per-capita GNI (PPP $).',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the meaning of **"Effective Revenue Deficit"** introduced into Union Budget reporting via the **2012 amendment to FRBM Act**?',
        options: [
          'Revenue Deficit plus Fiscal Deficit',
          'Revenue Deficit minus Grants-in-aid for creation of capital assets',
          'Tax Revenue minus Customs Duty',
          'Interest Payments minus Disinvestment receipts',
        ],
        correctOptionIndex: 1,
        explanation: 'Because grants given to states/bodies for building roads or schools count as Union Revenue Expenditure technically, Effective Revenue Deficit subtracts such capital-creating grants.',
        difficulty: 'standard',
      },
      {
        stem: 'Which organization publishes the annual **Corruption Perceptions Index (CPI)**?',
        options: [
          'World Bank',
          'Transparency International (Berlin)',
          'FATF',
          'IMF',
        ],
        correctOptionIndex: 1,
        explanation: 'Transparency International compiles the Corruption Perceptions Index annually across 180 countries/territories.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **two European NGOs** jointly publish the annual **Global Hunger Index (GHI)**?',
        options: [
          'FAO and WFP',
          'Concern Worldwide and Welthungerhilfe',
          'Oxfam and Amnesty International',
          'Greenpeace and WWF',
        ],
        correctOptionIndex: 1,
        explanation: 'Concern Worldwide (Ireland) and Welthungerhilfe (Germany) co-publish the GHI using undernourishment, child stunting, child wasting, and child mortality.',
        difficulty: 'standard',
      },
      {
        stem: 'Under **FRBM / NK Singh Committee (2017)** recommendations, what **Debt-to-GDP anchor** (Combined Centre + States, and Centre alone) was originally envisaged as a medium-term ceiling?',
        options: [
          '100% combined / 80% Centre',
          '60% combined General Government Debt (40% Centre + 20% States)',
          '25% combined / 15% Centre',
          '90% States / 10% Centre',
        ],
        correctOptionIndex: 1,
        explanation: 'The FRBM Review Committee (N.K. Singh) targeted 60% combined public debt-to-GDP (40% Union, 20% States) as a sustainable anchor.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **agency** issues the annual **Climate Change Performance Index (CCPI)** evaluating emissions, renewables, energy use, and climate policy?',
        options: [
          'UNEP only',
          'Germanwatch, NewClimate Institute, and Climate Action Network (CAN)',
          'IPCC',
          'IEA',
        ],
        correctOptionIndex: 1,
        explanation: 'Germanwatch and partners leave the top three CCPI ranks vacant to signify no country is fully Paris-1.5°C compliant.',
        difficulty: 'standard',
      },
      {
        stem: 'In **Union Budget classification**, where do **interest receipts, dividends from PSUs/RBI, and user charges** get recorded?',
        options: [
          'Capital Receipts',
          'Non-Tax Revenue Receipts',
          'Public Account of India',
          'Contingency Fund',
        ],
        correctOptionIndex: 1,
        explanation: 'Dividends from RBI/PSUs, interest on loans given, and spectrum/service fees belong to Non-Tax Revenue under Revenue Receipts.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **World Bank** survey/index evaluates trade-logistics efficiency across customs, infrastructure, international shipments, and timeliness?',
        options: [
          'Global Competitiveness Index',
          'Logistics Performance Index (LPI)',
          'World Inequality Report',
          'Basel III Accord',
        ],
        correctOptionIndex: 1,
        explanation: 'The World Bank’s Logistics Performance Index (LPI) tracks countries’ supply-chain and port/customs turnaround performance.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Important Constitutional Amendments, Bills & Supreme Court Judgments',
    materialTitle: 'Recent Constitutional Amendments, New Criminal Codes & SC Rulings — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: 101st–106th Amendments, BNS & SC Judgments',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Important Constitutional Amendments, Bills & Supreme Court Judgments

## 1. Constitutional Amendments (101st to 106th) — Must-Memorize Table
| Amendment | Year | Key Constitutional Provision |
| :--- | :--- | :--- |
| **101st** | 2016 | **GST** framework (Articles **246A**, **269A**, **279A** GST Council) |
| **102nd** | 2018 | Constitutional status to **NCBC (Article 338B)** & **Article 342A** |
| **103rd** | 2019 | **10% EWS Reservation** (Articles **15(6) & 16(6)**; upheld in *Janhit Abhiyan v. UOI*, 2022) |
| **104th** | 2020 | Extended SC/ST seat reservation in Lok Sabha & Assemblies by 10 years (**up to Jan 2030**); **discontinued** Anglo-Indian nominated seats (Arts. 331, 333) |
| **105th** | 2021 | Restored **State Governments’ power** to identify/maintain **SEBC/OBC lists** (modifying Art. 342A) |
| **106th** | 2023 | **Nari Shakti Vandan Adhiniyam**: **33% (one-third) reservation for women** in **Lok Sabha, State Vidhan Sabhas, & Delhi Assembly** (Articles **330A, 332A, 334A** — effective post-delimitation/first census after enactment) |

## 2. Overhaul of India’s Criminal Justice Codes (Effective **1 July 2024**)
- **Bharatiya Nyaya Sanhita (BNS), 2023** replaces **Indian Penal Code (IPC, 1860)** — introduces *community service* punishment, organized crime, mob lynching, and removes colonial sedition (*Rajdroh*) while introducing offences against sovereignty/integrity (*Deshdroh* / Sec. 152).
- **Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023** replaces **CrPC, 1973** — mandates forensic teams for serious crimes (>=7 yrs), **Zero FIR**, **e-FIR**, and audio-video recording of searches/seizures.
- **Bharatiya Sakshya Adhiniyam (BSA), 2023** replaces **Indian Evidence Act, 1872** — recognizes electronic/digital records on par with primary documentary evidence.

## 3. Landmark Supreme Court Constitution Bench Rulings
- ***Association for Democratic Reforms v. UOI* (Feb 2024):** **5-Judge Constitution Bench** struck down the **Electoral Bonds Scheme** as unconstitutional (violating voters’ **Right to Information under Article 19(1)(a)**).
- ***In re: Article 370 of the Constitution* (Dec 2023):** **5-Judge Bench** unanimously upheld the 2019 abrogation of Jammu & Kashmir’s special status (holding Article 370 was a temporary provision).
- ***Supriyo v. UOI* (Oct 2023):** Held marriage equality/legal recognition lies with Parliament/legislatures rather than judicial creation under Special Marriage Act.
- ***Anoop Baranwal v. UOI* (2023):** Directed a transparent selection panel (PM, LoP, CJI) for CEC/EC appointments until Parliament enacted the **Chief Election Commissioner and Other Election Commissioners Act, 2023** (which places PM, LoP, and a Union Cabinet Minister on the panel).
- ***Property Owners Association v. State of Maharashtra* (Nov 2024, 9-Judge Bench):** Held that **not all private property** qualifies automatically as **"material resources of the community"** under **Article 39(b)** (partially overruling *Ranganatha Reddy* observation).
- ***AMU Minority Status Case* (Nov 2024, 7-Judge Bench):** Overruled *Azeez Basha (1967)* in principle, holding an institution incorporated by statute does not lose Article 30 minority eligibility solely due to legislative incorporation.

## 4. Key Revision Takeaways
- **106th Amendment = 33% Women Reservation**; **104th = End of Anglo-Indian nomination**; **1 July 2024 = BNS, BNSS, BSA rollout**.
- **Electoral Bonds** struck down under **Article 19(1)(a)** (*ADR v. UOI*, 2024).`,
    mcqs: [
      {
        stem: 'Which **Constitutional Amendment Act (Nari Shakti Vandan Adhiniyam, 2023)** provides **one-third (33%) reservation for women** in the **Lok Sabha, State Legislative Assemblies, and Delhi Assembly**?',
        options: ['104th Amendment', '105th Amendment', '106th Amendment', '107th Amendment'],
        correctOptionIndex: 2,
        explanation: 'The 106th Constitutional Amendment Act, 2023 inserted Articles 330A, 332A, and 334A for 33% women’s reservation (to commence after delimitation based on the next Census).',
        difficulty: 'foundation',
      },
      {
        stem: 'From **1 July 2024**, which **new criminal code** replaced the **1860 Indian Penal Code (IPC)** as India’s substantive criminal law?',
        options: [
          'Bharatiya Sakshya Adhiniyam (BSA), 2023',
          'Bharatiya Nyaya Sanhita (BNS), 2023',
          'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023',
          'Bharatiya Dand Sanhita, 2024',
        ],
        correctOptionIndex: 1,
        explanation: 'BNS 2023 replaced IPC (1860), BNSS 2023 replaced CrPC (1973), and BSA 2023 replaced the Indian Evidence Act (1872) effective 1 July 2024.',
        difficulty: 'foundation',
      },
      {
        stem: 'On which primary constitutional ground did a **5-Judge Supreme Court Constitution Bench (Feb 2024)** strike down the **Electoral Bonds Scheme**?',
        options: [
          'Violation of Article 368',
          'Violation of citizens’ Right to Information about political funding under Article 19(1)(a)',
          'Violation of Article 280',
          'Violation of Seventh Schedule State List',
        ],
        correctOptionIndex: 1,
        explanation: 'In *ADR v. Union of India* (2024), the SC held anonymous electoral bonds infringed voters’ fundamental right to know under Article 19(1)(a) without satisfying proportionality.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Constitutional Amendment (2020)** discontinued the nomination of **two Anglo-Indian members** to the Lok Sabha and **one to State Legislative Assemblies** while extending SC/ST quotas till 2030?',
        options: ['101st Amendment', '103rd Amendment', '104th Amendment', '105th Amendment'],
        correctOptionIndex: 2,
        explanation: 'The 104th Constitutional Amendment amended Article 334 to extend SC/ST legislative reservation to 2030 but let the Anglo-Indian nomination provision lapse.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **new Constitutional Articles** were specifically inserted by the **103rd Constitutional Amendment Act, 2019** introducing the **10% Economically Weaker Sections (EWS)** quota?',
        options: [
          'Articles 21A and 51A(k)',
          'Articles 15(6) and 16(6)',
          'Articles 338B and 342A',
          'Articles 246A and 279A',
        ],
        correctOptionIndex: 1,
        explanation: '103rd Amendment added clauses (6) to Article 15 (educational institutions) and Article 16 (public employment), upheld by a 3:2 SC majority in *Janhit Abhiyan* (2022).',
        difficulty: 'standard',
      },
      {
        stem: 'Under the **Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023**, forensic expert visits to crime scenes have been made **mandatory** for offences carrying a minimum imprisonment of:',
        options: ['1 year', '3 years', '7 years or more', '14 years'],
        correctOptionIndex: 2,
        explanation: 'Section 176(3) of BNSS mandates forensic examination by a forensic expert at the crime scene for offences punishable with 7 years or more.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Constitutional Amendment (2021)** clarified and restored the authority of **State Governments and UTs** to prepare and maintain their own **OBC / SEBC lists**?',
        options: ['102nd Amendment', '103rd Amendment', '105th Amendment', '106th Amendment'],
        correctOptionIndex: 2,
        explanation: 'Passed after the SC’s Maratha quota ruling (*Jaishri Laxmanrao Patil*, 2021), the 105th Amendment amended Articles 338B, 342A, and 366 to affirm State OBC lists.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the **Chief Election Commissioner and Other Election Commissioners Act, 2023**, who are the **three members** of the Selection Committee recommending appointments to the President?',
        options: [
          'Prime Minister, Chief Justice of India, and Speaker of Lok Sabha',
          'Prime Minister, a Union Cabinet Minister nominated by PM, and Leader of Opposition in Lok Sabha',
          'President, Vice-President, and CAG',
          'Chief Election Commissioner and two Supreme Court Judges',
        ],
        correctOptionIndex: 1,
        explanation: 'Replacing the interim SC *Anoop Baranwal* formula (which included the CJI), the 2023 Act sets a Selection Committee of PM + 1 Union Minister + LoP (or leader of largest opposition party).',
        difficulty: 'standard',
      },
      {
        stem: 'In ***Property Owners Association v. State of Maharashtra* (Nov 2024)**, a **9-Judge Supreme Court Bench** interpreted which Constitutional **Article** concerning private property and **"material resources of the community"**?',
        options: ['Article 31C only', 'Article 39(b)', 'Article 300A only', 'Article 44'],
        correctOptionIndex: 1,
        explanation: 'The 9-Judge Bench held 8:1 that not every privately owned asset constitutes a "material resource of the community" under Article 39(b), overruling Justice Krishna Iyer’s broader 1977 view.',
        difficulty: 'advanced',
      },
      {
        stem: 'What new **non-custodial punishment** for petty offences (such as small thefts < ₹5,000 or public misconduct) was formally introduced in India’s statutory penal law by **BNS 2023**?',
        options: [
          'House exile',
          'Community Service (Section 4(f))',
          'Solitary confinement',
          'Loss of citizenship',
        ],
        correctOptionIndex: 1,
        explanation: 'Bharatiya Nyaya Sanhita introduced "Community Service" for the first time as a formal category of punishment alongside fine and imprisonment.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Uttarakhand-related central provision** did the **5-Judge Bench on Article 370 (Dec 2023)** highlight while discussing **temporary vs permanent constitutional provisions**?',
        options: [
          'Article 370 was a temporary asymmetrical federalism arrangement subject to Presidential power under Art. 370(3) even after the J&K Constituent Assembly dissolved',
          'Article 370 applied to Uttarakhand',
          'Article 371A was struck down',
          'Special Category Status was abolished in Finance Commissions',
        ],
        correctOptionIndex: 0,
        explanation: 'The SC upheld Presidential Order CO 272/273 ending J&K’s special status under Article 370 and affirmed Parliament’s reorganization.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **1967 Supreme Court precedent** regarding **Aligarh Muslim University’s (AMU) Article 30 minority character** was **overruled in principle** by a **7-Judge Bench in November 2024**?',
        options: [
          '*T.M.A. Pai Foundation case*',
          '*S. Azeez Basha v. Union of India*',
          '*St. Stephen’s College case*',
          '*Unni Krishnan case*',
        ],
        correctOptionIndex: 1,
        explanation: 'Chief Justice Chandrachud’s 4:3 majority overruled *Azeez Basha (1967)*, clarifying that statutory incorporation alone does not bar Article 30 minority status.',
        difficulty: 'advanced',
      },
      {
        stem: 'What minimum **legislative majority** is required in Parliament under **Article 368** (plus state ratification where federal clauses apply) to pass a Constitutional Amendment like the **106th Amendment**?',
        options: [
          'Simple majority of members present',
          'Special majority: >50% of total membership of each House AND >=2/3rds of members present and voting',
          'Unanimous consent of all 28 states',
          '75% majority in joint sitting',
        ],
        correctOptionIndex: 1,
        explanation: 'Article 368 does NOT allow joint sittings; each House must pass separately by special majority (plus ratification by >= half the states for specified federal provisions).',
        difficulty: 'foundation',
      },
      {
        stem: 'Under **BNSS 2023**, what is the maximum permissible window for filing an **e-FIR / Zero FIR** regardless of territorial police-station jurisdiction?',
        options: [
          'Zero FIR applies only to Delhi',
          'Any police station must register Zero FIR upon cognizable complaint regardless of jurisdiction and transfer it onward',
          'Requires High Court permission first',
          'Only applicable to civil disputes',
        ],
        correctOptionIndex: 1,
        explanation: 'Section 173 of BNSS codifies both Zero FIR (mandatory registration irrespective of jurisdiction) and electronic FIR (with signature within 3 days).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Supreme Court judgment (1973)** laid down the **Basic Structure Doctrine** that still binds Parliament’s constituent power under Article 368?',
        options: [
          '*Golaknath v. State of Punjab*',
          '*Kesavananda Bharati v. State of Kerala*',
          '*Minerva Mills v. Union of India*',
          '*I.R. Coelho v. State of Tamil Nadu*',
        ],
        correctOptionIndex: 1,
        explanation: 'Decided by a 13-Judge Bench on 24 April 1973, *Kesavananda Bharati* held Parliament can amend any part of the Constitution without destroying its Basic Structure.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'International Summits, Bilateral Visits, Defence Exercises & Space Milestones',
    materialTitle: 'Global Summits, Military Exercises & ISRO Missions — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Summits, Defence Exercises & Space Milestones',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# International Summits, Bilateral Visits, Defence Exercises & Space Milestones

## 1. Major International Groupings & Recent Milestones
- **G20:** India’s 2023 **New Delhi Summit** (**"Vasudhaiva Kutumbakam"**) inducted the **African Union (AU)** as a permanent G20 member and launched the **India–Middle East–Europe Economic Corridor (IMEC)** & **Global Biofuels Alliance**; followed by Brazil (Rio 2024) & South Africa (2025).
- **BRICS Expansion:** Expanded from 5 (**Brazil, Russia, India, China, South Africa**) to include **Egypt, Ethiopia, Iran, UAE** (and **Indonesia** joining in early 2025).
- **SCO (Shanghai Cooperation Organisation):** **Belarus** became the **10th full member** (2024 Astana Summit); India & Pakistan had joined in 2017, Iran in 2023.
- **QUAD:** **India, USA, Japan, Australia** — focuses on Free & Open Indo-Pacific, maritime domain awareness (IPMDA), critical minerals, and vaccine/tech supply chains.

## 2. High-Yield Bilateral & Multilateral Defence Exercises (India)
| Exercise Name | Partner Country / Group | Service / Character |
| :--- | :--- | :--- |
| **Surya Kiran** *(frequent in UKPSC — often held in **Pithoragarh**!)* | **Nepal** | **Army** (mountain & counter-insurgency) |
| **Yudh Abhyas / Vajra Prahar / Malabar / Tiger Triumph** | **USA** *(Malabar includes Japan & Australia)* | Army / Special Forces / Navy / Tri-service |
| **Shakti / Varuna / Garuda** | **France** | Army / Navy / Air Force |
| **Garuda Shakti / Samudra Shakti** | **Indonesia** | Army / Navy |
| **Mitra Shakti / SLINEX** | **Sri Lanka** | Army / Navy |
| **Dharma Guardian / Veer Guardian / JIMEX** | **Japan** | Army / Air Force / Navy |
| **Dustlik** *(also hosted in **Chaubatia/Pithoragarh, UK**!)* | **Uzbekistan** | **Army** |
| **Ajeya Warrior / Konkan / Indradhanush** *(Chaubatia link)* | **United Kingdom** | Army / Navy / Air Force |

## 3. Landmark ISRO & Space Milestones
- **Chandrayaan-3 (23 August 2023):** **Lander Vikram** & **Rover Pragyan** touched down near the **Lunar South Pole** (**Shiv Shakti Point**) — India became **#1 country near lunar south pole** and 4th overall to soft-land on the Moon; **23 August** declared **National Space Day**.
- **Aditya-L1 (2023–2024):** India’s first **solar observatory** placed into a **Halo Orbit around Sun–Earth Lagrange Point L1** (~1.5 million km from Earth).
- **XPoSat (Jan 2024):** X-ray Polarimeter Satellite launched aboard **PSLV-C58** — India’s first dedicated polarimetry mission studying black holes/neutron stars.
- **SpaDeX (Dec 2024–Jan 2025):** **Space Docking Experiment** — India became the **4th country** (after USA, Russia, China) to execute **autonomous orbital space docking** (essential for Chandrayaan-4 sample return & Bharatiya Antariksh Station!).
- **Gaganyaan:** India’s indigenous human spaceflight programme (**LVM3** human-rated).

## 4. Key Revision Takeaways
- **Surya Kiran (Nepal)**, **Dustlik (Uzbekistan)**, and **Ajeya Warrior (UK)** regularly use **Uttarakhand’s Pithoragarh / Chaubatia (Ranikhet)** mountain training nodes!
- **23 August = National Space Day**; **Shiv Shakti Point = Chandrayaan-3 landing site**; **SpaDeX = 4th country to dock in orbit**.`,
    mcqs: [
      {
        stem: 'Which recurring **India–Nepal bilateral Army exercise** has repeatedly been hosted inside Uttarakhand’s **Pithoragarh (Saur Valley)** mountain training node?',
        options: ['Yudh Abhyas', 'Surya Kiran', 'Mitra Shakti', 'Harimau Shakti'],
        correctOptionIndex: 1,
        explanation: 'Exercise Surya Kiran alternates between India (often Pithoragarh) and Nepal (Saljhandi), focusing on high-altitude jungle/mountain warfare and disaster relief.',
        difficulty: 'foundation',
      },
      {
        stem: 'By accomplishing autonomous orbital docking under the **SpaDeX (Space Docking Experiment)** mission, **India** became the **______ country in the world** to achieve this capability:',
        options: ['2nd', '4th (after USA, Russia, and China)', '6th', '8th'],
        correctOptionIndex: 1,
        explanation: 'With SpaDeX’s Chaser and Target satellites docking in January 2025, India joined the USA, Russia, and China in mastering orbital docking.',
        difficulty: 'foundation',
      },
      {
        stem: 'With which Central Asian nation does the **Indian Army** conduct **Exercise DUSTLIK** — multiple editions of which have been hosted at **Chaubatia (Ranikhet)** and **Pithoragarh** in Uttarakhand?',
        options: ['Kazakhstan', 'Uzbekistan', 'Kyrgyzstan', 'Tajikistan'],
        correctOptionIndex: 1,
        explanation: 'Exercise DUSTLIK is the annual India–Uzbekistan Army joint exercise; Chaubatia (2021) and Pithoragarh (2023) hosted key editions in Uttarakhand.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **international regional grouping** inducted the **African Union (AU)** as a permanent full member during the **2023 New Delhi Summit**?',
        options: ['BRICS', 'G20', 'SCO', 'BIMSTEC'],
        correctOptionIndex: 1,
        explanation: 'Under India’s G20 Presidency in September 2023, the 55-nation African Union became a permanent member alongside the European Union.',
        difficulty: 'foundation',
      },
      {
        stem: 'Every year on **23 August**, India celebrates **National Space Day** to commemorate:',
        options: [
          'Launch of Aryabhata in 1975',
          'Successful lunar south-pole soft landing of Chandrayaan-3 (Vikram & Pragyan at Shiv Shakti Point, 2023)',
          'Insertion of Mangalyaan around Mars',
          'Launch of Aditya-L1',
        ],
        correctOptionIndex: 1,
        explanation: '23 August 2023 marked Chandrayaan-3’s historic touchdown at Shiv Shakti Point near the lunar south pole.',
        difficulty: 'foundation',
      },
      {
        stem: 'Where is ISRO’s solar observatory **Aditya-L1** stationed to achieve **continuous, uninterrupted observation of the Sun** without occultation or eclipses?',
        options: [
          'Geostationary Orbit (36,000 km)',
          'Halo Orbit around the Sun–Earth Lagrange Point L1 (~1.5 million km from Earth)',
          'Lunar Orbit',
          'Lagrange Point L2 behind Earth',
        ],
        correctOptionIndex: 1,
        explanation: 'L1 sits between the Sun and Earth where gravitational forces balance orbital motion, letting Aditya-L1 monitor solar flares and CMEs nonstop.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **10th country** joined the **Shanghai Cooperation Organisation (SCO)** as its newest full member at the **2024 Astana Summit**?',
        options: ['Mongolia', 'Belarus', 'Turkey', 'Saudi Arabia'],
        correctOptionIndex: 1,
        explanation: 'Following Iran (2023), Belarus became the 10th full member of SCO in July 2024.',
        difficulty: 'standard',
      },
      {
        stem: 'Match the **France–India joint military exercises**: **Shakti, Varuna, and Garuda** correspond respectively to:',
        options: [
          'Air Force, Army, Navy',
          'Army, Navy, and Air Force',
          'Coast Guard, Space, Army',
          'Submarine, Mountain, Cyber',
        ],
        correctOptionIndex: 1,
        explanation: 'Shakti = Army, Varuna = Navy, and Garuda = Air Force (distinct from *Garuda Shakti* which is India–Indonesia Army!).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Uttarakhand cantonment hill station** in Almora district hosted the **India–UK Joint Army Exercise "Ajeya Warrior"** and **India–US "Yudh Abhyas"** editions?',
        options: ['Chakrata', 'Chaubatia (Ranikhet)', 'Roorkee', 'Dehradun'],
        correctOptionIndex: 1,
        explanation: 'Chaubatia Military Station near Ranikhet (Almora) and Auli (Chamoli) are key Himalayan bilateral combat training venues.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **economic connectivity corridor** connecting India, UAE, Saudi Arabia, Jordan, Israel, and Europe was announced via an MoU at the **2023 New Delhi G20 Summit**?',
        options: [
          'INSTC North–South Corridor',
          'India–Middle East–Europe Economic Corridor (IMEC)',
          'Asian Highway 1',
          'Belt and Road Maritime Silk Route',
        ],
        correctOptionIndex: 1,
        explanation: 'IMEC combines eastern maritime shipping (India–UAE) and northern rail/port links across Saudi Arabia–Jordan–Israel–Europe.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **four countries** form the **QUAD (Quadrilateral Security Dialogue)**?',
        options: [
          'India, UK, France, USA',
          'India, USA, Japan, and Australia',
          'India, Russia, China, Brazil',
          'India, Indonesia, Singapore, Japan',
        ],
        correctOptionIndex: 1,
        explanation: 'QUAD links India, the United States, Japan, and Australia to uphold a free, open, and resilient Indo-Pacific.',
        difficulty: 'foundation',
      },
      {
        stem: 'What does ISRO’s **XPoSat** mission (launched via PSLV-C58 in January 2024) specifically investigate?',
        options: [
          'Soil moisture in the Ganga basin',
          'X-ray polarization from bright celestial sources such as black holes, neutron stars, and pulsar wind nebulae',
          'Atmospheric ozone depletion over Antarctica',
          'Deep-sea mineral plumes',
        ],
        correctOptionIndex: 1,
        explanation: 'XPoSat (with POLIX and XSPECT payloads) made India only the second country (after NASA’s IXPE) with a dedicated space X-ray polarimetry mission.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **India–Japan bilateral exercises** cover **Army (Dharma Guardian), Air Force (Veer Guardian), and Navy (JIMEX)**?',
        options: [
          'Hand-in-Hand and INDRA',
          'Dharma Guardian, Veer Guardian, and JIMEX',
          'Al Nagah and Naseem-Al-Bahr',
          'Surya Kiran and Varuna',
        ],
        correctOptionIndex: 1,
        explanation: 'India and Japan deepen Indo-Pacific interoperability across all three services through Dharma Guardian, Veer Guardian, and JIMEX (plus Malabar).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **four-nation original BRICS** founding bloc expanded in **2024–2025** to include **Egypt, Ethiopia, Iran, UAE, and Indonesia**?',
        options: [
          'Brazil, Russia, India, China (plus South Africa added in 2010)',
          'Britain, Romania, Italy, Canada, Spain',
          'Bangladesh, Russia, Indonesia, Chile, Singapore',
          'Belgium, Russia, India, Colombia, Sweden',
        ],
        correctOptionIndex: 0,
        explanation: 'BRIC (2009) became BRICS with South Africa (2010), and expanded with Egypt, Ethiopia, Iran, UAE (Jan 2024), and Indonesia (Jan 2025).',
        difficulty: 'foundation',
      },
      {
        stem: 'What will be the name of **India’s planned indigenous space station** targeted in multi-module phases following **Gaganyaan** and **SpaDeX**?',
        options: [
          'Aryabhata Orbital Lab',
          'Bharatiya Antariksh Station (BAS)',
          'Vikram Sky Dock',
          'Surya Habitat',
        ],
        correctOptionIndex: 1,
        explanation: 'The Bharatiya Antariksh Station (BAS-1) will leverage India’s LVM3/NGLV launch vehicles and SpaDeX autonomous docking technology.',
        difficulty: 'foundation',
      },
    ],
  },
];
