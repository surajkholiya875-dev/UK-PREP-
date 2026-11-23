import { TopicContentPackage } from './types';

export const INDIAN_HISTORY_MODERN_PART_A: TopicContentPackage[] = [
  {
    topicTitle: 'Advent of Europeans, Carnatic Wars, Plassey & Buxar',
    materialTitle: 'Advent of Europeans, Carnatic Wars, Plassey & Buxar — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: European Trading Companies & British Ascendancy',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Advent of Europeans, Carnatic Wars, Plassey & Buxar

## 1. Chronology of European Trading Companies in India
| Power | Arrival / Milestone | First Key Factory | Distinct Strategy / Outcome |
|---|---|---|---|
| **Portuguese** | **Vasco da Gama** at Calicut (**1498**); Francisco de Almeida (*Blue Water Policy*); **Alfonso de Albuquerque** (captured Goa, **1510**) | Cochin (1503), Cannanore | Controlled Indian Ocean routes via **Cartaze** permit system; declined after Dutch/English competition |
| **Dutch (VOC)** | Chartered 1602 | Masulipatnam (1605), Pulicat | Focused heavily on Indonesian spice islands; defeated by Travancore (Colachel, 1741) and British (Bedara/Chinsura, 1759) |
| **English (EIC)** | Royal Charter **1600**; Captain William Hawkins (1608–09); **Sir Thomas Roe** (1615–19, Jahangir's court) | Surat (1613 permanent), Masulipatnam (1611) | Presidencies at **Madras (1639)**, **Bombay (1668)**, **Calcutta (1690/1698)**; **Farrukhsiyar's Farman (1717)** (*Dastak*) |
| **Danes** | Arrived 1616 | Tranquebar (1620), Serampore | Minor settlements; sold assets to British in 1845 |
| **French** | Founded **1664** by Colbert | Surat (1668), Masulipatnam (1669), Pondicherry (1673) | Strong military ambition under **Dupleix**; eclipsed by Britain in Carnatic Wars |

## 2. The Three Carnatic Wars (1746–1763)
Anglo-French commercial rivalry turned into proxy dynastic warfare in South India:
- **First Carnatic War (1746–48):** Triggered by War of Austrian Succession. French Governor **Dupleix** seized Madras; Nawab Anwaruddin's army defeated at **Battle of St. Thome (Adyar)**—exposing Indian cavalry vulnerability to disciplined European infantry/artillery. Ended by **Treaty of Aix-la-Chapelle (1748)** (Madras returned for Louisbourg).
- **Second Carnatic War (1749–54):** Succession disputes in Hyderabad and Carnatic. Dupleix backed Muzaffar Jung & Chanda Sahib; **Robert Clive** staged the daring **Siege of Arcot (1751)** turning the tide. Ended with Dupleix's recall and **Treaty of Pondicherry (1754)**.
- **Third Carnatic War (1758–63):** Linked to Seven Years' War. British General **Eyre Coote** defeated Count de Lally at the decisive **Battle of Wandiwash (1760)**. **Treaty of Paris (1763)** stripped French forts of fortifications, leaving them purely commercial enclaves.

## 3. Conquest of Bengal: Plassey (1757) & Buxar (1764)
- **Roots of Conflict:** Abuse of duty-free trade passes (**Dastaks** under the 1717 *Farman*) by EIC servants for private inland trade, plus unauthorized fortification of Fort William.
- **Battle of Plassey (23 June 1757):** Nawab **Siraj-ud-Daulah** confronted Clive, whose secret conspiracy with **Mir Jafar**, Rai Durlabh, and Jagat Seth decided the outcome without full combat. Installed **Mir Jafar**, handing the EIC *zamindari* of **24-Parganas** and massive war indemnities.
- **Mir Qasim & Battle of Buxar (22 October 1764):** Replaced Mir Jafar (1760) but soon abolished all internal duties to stop British *dastak* privilege, triggering war. Combined forces of **Mir Qasim** (Bengal), **Shuja-ud-Daulah** (Awadh), and **Shah Alam II** (Mughal Emperor) were defeated by **Major Hector Munro** at Buxar.
- **Treaty of Allahabad (1765):** Negotiated by Clive:
  - **Shah Alam II** granted **Diwani** (revenue collection rights) of **Bengal, Bihar, and Orissa** to the Company in return for Kara/Allahabad and Rs 26 lakh annual pension.
  - **Shuja-ud-Daulah** surrendered Allahabad/Kara, paid Rs 50 lakh indemnity, and made Awadh a British buffer state.
  - Launched **Dual System of Government in Bengal (1765–1772)**: Company held *Diwani* (power without responsibility), while Nawab held *Nizamat* (responsibility without resources), until abolished by **Warren Hastings** in 1772.

## 4. Key Revision Takeaways
- **Battle of Plassey (1757)** opened political influence through conspiracy; **Battle of Buxar (1764)** established genuine **military and fiscal sovereignty** over eastern India.
- **Battle of Wandiwash (1760)** + **Treaty of Paris (1763)** sealed British dominance over French ambitions in India.
- **Treaty of Allahabad (1765)** legalized Company **Diwani** in Bengal, Bihar, and Orissa.`,
    mcqs: [
      {
        stem: 'Which European power implemented the "Cartaze" naval pass system to monopolize Indian Ocean spice trade during the 16th century?',
        options: ['The Dutch (VOC)', 'The Portuguese', 'The English East India Company', 'The French East India Company'],
        correctOptionIndex: 1,
        explanation: 'The Portuguese required Asian and rival vessels to purchase Cartaze passes or risk seizure of cargo under their maritime dominance.',
        difficulty: 'foundation',
      },
      {
        stem: 'Whose 1717 imperial Farman granted the English East India Company duty-free trade privileges in Bengal through "Dastaks"?',
        options: ['Aurangzeb', 'Bahadur Shah I', 'Farrukhsiyar', 'Muhammad Shah'],
        correctOptionIndex: 2,
        explanation: 'Mughal Emperor Farrukhsiyar issued three farmans in 1717 (often termed the Magna Carta of the Company), expanding duty-free dastak rights in Bengal.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why was the Battle of St. Thome (Adyar, 1746) during the First Carnatic War historically significant?',
        options: [
          'It ended Portuguese rule in Goa',
          'A small disciplined French force defeated the large army of Nawab Anwaruddin, revealing European tactical superiority',
          'It marked the capture of Delhi by Robert Clive',
          'It transferred Pondicherry permanently to the Dutch',
        ],
        correctOptionIndex: 1,
        explanation: 'Captain Paradis\'s compact European-trained infantry and field artillery routed Anwaruddin\'s cavalry, transforming European prestige in Indian courts.',
        difficulty: 'standard',
      },
      {
        stem: 'Which decisive 1760 engagement shattered French political and military ambitions in India?',
        options: ['Battle of Arcot', 'Battle of Wandiwash', 'Battle of Bedara', 'Battle of Porto Novo'],
        correctOptionIndex: 1,
        explanation: 'Sir Eyre Coote defeated Count de Lally at Wandiwash (January 1760), followed by the capture of Pondicherry and the 1763 Treaty of Paris.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why do historians regard the Battle of Buxar (1764) as even more decisive than the Battle of Plassey (1757)?',
        options: [
          'Plassey was won largely through conspiracy, whereas Buxar was an outright military victory over the combined armies of Bengal, Awadh, and the Mughal Emperor',
          'Plassey was fought against the French while Buxar was against the Portuguese',
          'Buxar happened in South India',
          'Plassey lasted for three full years',
        ],
        correctOptionIndex: 0,
        explanation: 'At Buxar (22 October 1764), Hector Munro defeated Mir Qasim, Shuja-ud-Daulah, and Shah Alam II in pitched battle, making the EIC the paramount power in eastern India.',
        difficulty: 'standard',
      },
      {
        stem: 'Who led the English East India Company forces to victory at the Battle of Buxar (1764)?',
        options: ['Robert Clive', 'Major Hector Munro', 'Eyre Coote', 'Warren Hastings'],
        correctOptionIndex: 1,
        explanation: 'Major Hector Munro commanded the British force at Buxar; Robert Clive returned in 1765 to negotiate the Treaty of Allahabad.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the Treaty of Allahabad (1765), what did Mughal Emperor Shah Alam II grant to the English East India Company?',
        options: [
          'Complete sovereignty over Delhi and Agra',
          'Diwani (revenue collection rights) of Bengal, Bihar, and Orissa',
          'Monopoly over Himalayan timber trade',
          'Control over Maratha coastal forts',
        ],
        correctOptionIndex: 1,
        explanation: 'Shah Alam II conferred the Diwani of Bengal, Bihar, and Orissa on the EIC in return for districts of Kara and Allahabad and an annual stipend.',
        difficulty: 'foundation',
      },
      {
        stem: 'What was the core flaw of Robert Clive\'s "Dual System of Government" in Bengal (1765–1772)?',
        options: [
          'The Company enjoyed revenue power (Diwani) without administrative responsibility, while the Nawab had responsibility (Nizamat) without funds',
          'Two governors-general ruled simultaneously from Bombay and Madras',
          'French and British governors shared Calcutta equally',
          'Peasants paid taxes directly in London',
        ],
        correctOptionIndex: 0,
        explanation: 'The Dual System divorced authority from accountability, devastating Bengal\'s economy and contributing to the catastrophic 1770 famine.',
        difficulty: 'standard',
      },
      {
        stem: 'Why did Nawab Mir Qasim come into armed conflict with the English East India Company in 1763?',
        options: [
          'He invited French troops to burn Calcutta',
          'He abolished all internal transit duties to level the playing field against British misuse of Dastaks',
          'He refused to pay his army in silver',
          'He ceded Chittagong to the Portuguese',
        ],
        correctOptionIndex: 1,
        explanation: 'When British servants abused duty-free Dastaks and sold them to Indian merchants, Mir Qasim abolished all internal duties, eliminating the British commercial edge.',
        difficulty: 'standard',
      },
      {
        stem: 'Which British victory in 1759 effectively ended Dutch political ambitions in Bengal?',
        options: ['Battle of Colachel', 'Battle of Bedara (Chinsura)', 'Battle of Plassey', 'Battle of Sholinghur'],
        correctOptionIndex: 1,
        explanation: 'The British defeated the Dutch force at Bedara (near Chinsura) in November 1759, reducing the VOC to a minor trading presence in Bengal.',
        difficulty: 'standard',
      },
      {
        stem: 'Who captured Goa from the Sultan of Bijapur in 1510 CE and encouraged Portuguese-Indian intermarriage to anchor coastal power?',
        options: ['Vasco da Gama', 'Francisco de Almeida', 'Alfonso de Albuquerque', 'Nino da Cunha'],
        correctOptionIndex: 2,
        explanation: 'Alfonso de Albuquerque conquered Goa in 1510 and made it the strategic centre of the Portuguese Estado da India.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which English envoy stayed at Emperor Jahangir\'s court (1615–1619) and secured imperial permission to establish factories across Mughal territories?',
        options: ['Captain William Hawkins', 'Sir Thomas Roe', 'Job Charnock', 'Francis Day'],
        correctOptionIndex: 1,
        explanation: 'Sir Thomas Roe arrived as King James I\'s ambassador in 1615 and obtained favourable trading farmans from Jahangir.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pair correctly matches the Carnatic War with its concluding European treaty?',
        options: [
          'First Carnatic War : Treaty of Paris (1763)',
          'Second Carnatic War : Treaty of Aix-la-Chapelle (1748)',
          'Third Carnatic War : Treaty of Paris (1763)',
          'First Carnatic War : Treaty of Allahabad (1765)',
        ],
        correctOptionIndex: 2,
        explanation: 'First Carnatic War ended with Aix-la-Chapelle (1748), Second with Pondicherry (1754), and Third with the Treaty of Paris (1763).',
        difficulty: 'standard',
      },
      {
        stem: 'Who abolished the Dual System in Bengal in 1772 and brought revenue collection under direct Company supervision?',
        options: ['Lord Cornwallis', 'Warren Hastings', 'Lord Wellesley', 'Sir John Shore'],
        correctOptionIndex: 1,
        explanation: 'Upon becoming Governor of Bengal in 1772, Warren Hastings dismantled the Dual System and established a Board of Revenue in Calcutta.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Mughal alliance partner at the Battle of Buxar was restored to his state as a loyal British buffer after paying Rs 50 lakh indemnity under the Treaty of Allahabad?',
        options: ['Mir Jafar', 'Shuja-ud-Daulah of Awadh', 'Tipu Sultan', 'Nizam Ali Khan'],
        correctOptionIndex: 1,
        explanation: 'Clive kept Awadh intact under Shuja-ud-Daulah as a buffer between Company Bengal and Maratha/Afghan threats.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Colonial Land Revenue & Economic Drain Policies',
    materialTitle: 'Colonial Land Revenue & Economic Drain Policies — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Colonial Agrarian Policies & Economic Drain',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Colonial Land Revenue & Economic Drain Policies

## 1. Three Major Colonial Land Revenue Systems
| Feature | Permanent Settlement (1793) | Ryotwari System (1820) | Mahalwari System (1822 / 1833) |
|---|---|---|---|
| **Architects** | **Lord Cornwallis**, Sir John Shore | **Thomas Munro**, Alexander Read | **Holt Mackenzie** (1822), **Robert Merttins Bird** (1833) |
| **Regions** | Bengal, Bihar, Orissa, Banaras, N. Madras (~19% of British India) | Madras, Bombay, parts of Assam & Coorg (~51%) | North-Western Provinces (UP/Uttarakhand plains-hills), Central India, Punjab (~30%) |
| **Unit of Assessment** | **Zamindar** (recognized as hereditary proprietor) | **Individual Ryot** (cultivator) directly with state | **Mahal** (village community / estate jointly responsible) |
| **Revision & Sunset Law** | Revenue fixed permanently (10/11th to state, 1/11th to zamindar); **Sunset Law** auctioned defaulting estates | Periodically revised (20–30 years) with high nominal demand | Periodically revised (20–30 years); Bird reduced assessment from ~80–95% rental to ~66%, later 50% (Saharanpur Rules 1855) |
| **Agrarian Impact** | Sub-infeudation (*patnidari*), absentee landlordism, rack-renting of unprotected tenants | Crushing debt, moneylender grip, peasant distress without famine buffer | Village headmen (*lambardars*) pressured; fragmented peasant holdings |

## 2. Phases of Colonial Economic Exploitation (R.P. Dutt / Bipan Chandra Framework)
1. **Mercantile Phase (1757–1813):** Direct plunder and using Bengal's own land revenue ("Investment") to buy Indian textiles for export—turning India's trade surplus into unilateral unrequited tribute.
2. **Industrial / Free Trade Phase (1813–1858):** **Charter Act of 1813** ended EIC's Indian trade monopoly (except tea and China trade). Machine-made Lancashire textiles flooded duty-free into India while Indian manufactures faced prohibitive British tariffs, triggering **de-industrialization** ("ruralization" of artisans).
3. **Financial Capitalism Phase (post-1858):** Export of British capital into guaranteed-return **railways** (5% guaranteed interest paid from Indian taxes), **tea/coffee plantations**, jute mills, and managing agency houses.

## 3. The Drain of Wealth Theory
- Pioneered by **Dadabhai Naoroji** (*Poverty and Un-British Rule in India*, 1901; earlier 1867 paper *"England's Debt to India"*), further analyzed by **R.C. Dutt** (*Economic History of India*, 1901–03), **M.G. Ranade**, and **G.V. Joshi**.
- **Components of "Home Charges":** Salaries and pensions of British officials (Secretary of State's establishment, ICS pensions), interest on public debt and guaranteed railway returns, military stores purchases, and cost of overseas imperial wars billed to Indian revenues.
- **Commercialization of Agriculture:** Forced/incentivized shift to cash crops (indigo, raw cotton, opium, jute, tea) exposed cultivators to global price crashes without improving peasant productivity or irrigation investment.

## 4. Colonial Land Settlements & Forest Policies in Uttarakhand
- After the 1815–16 British annexation of Kumaon and British Garhwal, early settlements (E. Gardner, **G.W. Traill's *San Assi* settlement of 1823 / Samvat 1880**, J.H. Batten, Henry Ramsay, and Pauw/Beckett settlements) resembled modified *Mahalwari / Bhaiyachara* hill-village tenures (**Hissedar** proprietors and **Khaikar** / **Sirtan** occupancy/sub-tenants).
- Simultaneously, the British introduced **commercial tea plantations** (1830s–40s in Bhimtal, Hawalbagh, Kaulagarh/Dehradun) and progressive **Forest Reservation** (Imperial Forest Department 1864; Forest Acts of 1865, 1878, and 1927), curbing customary community access to pastures and timber—sparking major resistance in early 20th-century Kumaon and Garhwal.

## 5. Key Revision Takeaways
- **Permanent Settlement (1793)** = Cornwallis; **Ryotwari** = Thomas Munro & Alexander Read; **Mahalwari** = Holt Mackenzie & R.M. Bird.
- **Dadabhai Naoroji** articulated the **Drain of Wealth** in *Poverty and Un-British Rule in India*.
- In Uttarakhand, **G.W. Traill's 1823 (*San Assi*) settlement** defined classic hill village boundaries (*sal assi*) under modified village-level settlement.`,
    mcqs: [
      {
        stem: 'Who introduced the Permanent Settlement (Zamindari system) in Bengal, Bihar, and Orissa in 1793?',
        options: ['Warren Hastings', 'Lord Cornwallis', 'Thomas Munro', 'Holt Mackenzie'],
        correctOptionIndex: 1,
        explanation: 'Lord Cornwallis, overriding some reservations while drawing on John Shore\'s minute, enacted the Permanent Settlement in March 1793.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the Permanent Settlement, what was the "Sunset Law"?',
        options: [
          'Peasants could not work in fields after sunset',
          'If a zamindar failed to deposit the fixed revenue by sunset on the specified due date, his estate could be auctioned',
          'All British factories closed at dusk during monsoons',
          'Land revenue rates were reduced every evening during harvest',
        ],
        correctOptionIndex: 1,
        explanation: 'The rigid Sunset Law forced default-stricken zamindars to lose estates at auction, spawning absentee urban landlords and sub-infeudation.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pair of British administrators is primarily associated with designing and extending the Ryotwari system in Madras Presidency?',
        options: [
          'Lord Cornwallis and John Shore',
          'Alexander Read and Sir Thomas Munro',
          'Holt Mackenzie and Robert Merttins Bird',
          'Lord Wellesley and James Thomason',
        ],
        correctOptionIndex: 1,
        explanation: 'Captain Alexander Read experimented with Ryotwari in Baramahal (1792), and Sir Thomas Munro extended it across Madras Presidency as Governor (1820).',
        difficulty: 'foundation',
      },
      {
        stem: 'In the Mahalwari system (introduced via Regulation VII of 1822), what was the primary unit of revenue settlement?',
        options: [
          'An individual peasant cultivator only',
          'A hereditary Bengal zamindar estate',
          'A village or estate (Mahal) with joint community responsibility',
          'A British tea plantation',
        ],
        correctOptionIndex: 2,
        explanation: 'Proposed by Holt Mackenzie and refined by R.M. Bird (1833), Mahalwari assessed the entire village/mahal collectively through village headmen (lambardars).',
        difficulty: 'foundation',
      },
      {
        stem: 'Approximately what percentage of British India\'s cultivated area fell under the Ryotwari system?',
        options: ['About 19%', 'About 30%', 'About 51%', 'About 85%'],
        correctOptionIndex: 2,
        explanation: 'Ryotwari covered roughly 51% of British Indian territory (Madras, Bombay, Berar, parts of Assam), Mahalwari ~30%, and Permanent Settlement ~19%.',
        difficulty: 'standard',
      },
      {
        stem: 'Who authored "Poverty and Un-British Rule in India" (1901) to systematically demonstrate the Drain of Wealth from India to Britain?',
        options: ['R.C. Dutt', 'Dadabhai Naoroji', 'Gopal Krishna Gokhale', 'Surendranath Banerjea'],
        correctOptionIndex: 1,
        explanation: 'Dadabhai Naoroji compiled his economic critique of unilateral "Home Charges" and unrequited exports in Poverty and Un-British Rule in India.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which two-volume work by R.C. Dutt (1901–1903) critically documented British agrarian and tariff policies in India?',
        options: [
          'Essays on Indian Economics',
          'The Economic History of India',
          'Prosperous British India',
          'Arctic Home in the Vedas',
        ],
        correctOptionIndex: 1,
        explanation: 'Romesh Chunder Dutt\'s Economic History of India exposed how excessive land assessments and tariff inequities caused rural impoverishment and famines.',
        difficulty: 'standard',
      },
      {
        stem: 'How did the Charter Act of 1813 accelerate the "de-industrialization" of Indian handicraft artisans?',
        options: [
          'It banned Indian farmers from growing wheat',
          'It ended the EIC\'s Indian trade monopoly, opening India to duty-free British factory textiles while Indian textiles still faced high British duties',
          'It deported all Indian weavers to Europe',
          'It mandated electric looms in every village',
        ],
        correctOptionIndex: 1,
        explanation: 'One-way free trade flooded Indian markets with cheap Lancashire machine textiles while British tariffs blocked Indian cottons and silks.',
        difficulty: 'standard',
      },
      {
        stem: 'What were "Home Charges" in the context of 19th-century colonial finance?',
        options: [
          'House taxes levied in Calcutta municipalities',
          'Annual sterling remittances paid out of Indian revenues to Britain for civil/military pensions, debt interest, guaranteed railway returns, and India Office expenses',
          'Loans granted to Indian weavers by district collectors',
          'Subsidies paid to Indian princely states',
        ],
        correctOptionIndex: 1,
        explanation: 'Home Charges constituted the central institutional channel of the Drain of Wealth paid in London from Indian tax revenues.',
        difficulty: 'standard',
      },
      {
        stem: 'Why was railway expansion in 19th-century India criticized by nationalist economists like Naoroji and Tilak?',
        options: [
          'Railways carried no passenger traffic',
          'Under the 5% guaranteed-interest system, Indian taxpayers bore construction risks while freight tariffs favoured raw material exports and imported British manufactures',
          'Railways were constructed solely in Bhutan',
          'Only wooden tracks were used',
        ],
        correctOptionIndex: 1,
        explanation: 'Private British railway companies received a risk-free 5% return guaranteed out of Indian revenues, and rate structures served imperial export-import corridors.',
        difficulty: 'advanced',
      },
      {
        stem: 'In colonial Kumaon and Garhwal land revenue history, which famous 1823 settlement established long-standing village boundaries ("San Assi")?',
        options: ['Lord Cornwallis Settlement', 'G.W. Traill\'s San Assi Settlement', 'Thomas Munro Settlement', 'Pauw\'s 1896 Settlement'],
        correctOptionIndex: 1,
        explanation: 'Commissioner George William Traill conducted the Samvat 1880 (1823 CE) settlement, fixing village boundaries still referenced in Uttarakhand revenue records.',
        difficulty: 'standard',
      },
      {
        stem: 'In Uttarakhand\'s traditional hill land tenures codified during British settlements, who held hereditary proprietary rights at the village level?',
        options: ['Sirtans', 'Hissedars', 'Zamindars of Bengal', 'Poligars'],
        correctOptionIndex: 1,
        explanation: 'Hissedars were village co-sharers holding proprietary stakes, while Khaikars (occupancy tenants) and Sirtans (tenants-at-will) cultivated under defined terms.',
        difficulty: 'standard',
      },
      {
        stem: 'Under which Governor-General was the "Bengal Tenancy Act of 1885" enacted to provide modest protection to occupancy ryots against arbitrary zamindari eviction?',
        options: ['Lord Cornwallis', 'Lord Dufferin', 'Lord Ripon (framed earlier, passed under Dufferin)', 'Lord Curzon'],
        correctOptionIndex: 2,
        explanation: 'Initiated under Lord Ripon and passed under Lord Dufferin in 1885, the Bengal Tenancy Act conferred occupancy rights on ryots holding land for 12 years.',
        difficulty: 'advanced',
      },
      {
        stem: 'What was meant by the colonial "Investment" in Bengal during the late 18th century (1765–1813)?',
        options: [
          'Importing British gold bullion to build factories in Murshidabad',
          'Using surplus Bengal land taxes to purchase Indian cottons and silk for export to Europe without bringing bullion into India',
          'Building free village primary schools',
          'Subsidizing Indian indigo cultivators without profit',
        ],
        correctOptionIndex: 1,
        explanation: 'After gaining the 1765 Diwani, the EIC stopped importing bullion and used Bengal\'s own revenue surplus ("Investment") to finance its export purchases.',
        difficulty: 'standard',
      },
      {
        stem: 'Which crop crisis and exploitative advance-contract system ("dadni") triggered widespread peasant resistance in Bengal in 1859–60?',
        options: ['Tea revolt', 'Indigo Revolt (Nil Bidroha)', 'Jute strike', 'Rubber agitation'],
        correctOptionIndex: 1,
        explanation: 'Coercive indigo contracts by European planters triggered the 1859–60 Indigo Revolt (immortalized in Dinabandhu Mitra\'s play Nil Darpan).',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Tribal-Peasant Uprisings & The Revolt of 1857',
    materialTitle: 'Tribal-Peasant Uprisings & The Revolt of 1857 — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Early Uprisings & The Revolt of 1857',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Tribal-Peasant Uprisings & The Revolt of 1857

## 1. Pre-1857 & Post-1857 Tribal and Peasant Uprisings
Colonial forest laws, outsider moneylenders (*dikus*), revenue extortion, and missionary interference triggered numerous localized movements:
- **Sanyasi–Fakir Rebellion (1763–1800, Bengal):** Triggered by famine and pilgrimage restrictions (featured in Bankim Chandra Chattopadhyay's *Anandamath*).
- **Paika Rebellion (1817, Odisha):** Traditional landed militia under **Bakshi Jagabandhu** against British salt monopolies and revenue changes.
- **Ahom (1828) & Khasi Uprising (1829–33, Tirot Singh):** Resistance against Company road projects and annexation in the Northeast.
- **Kol Uprising (1831–32, Chotanagpur, Buddho Bhagat)** and **Santhal Hul (1855–56, Damin-i-Koh, Sidhu & Kanhu Murmu)** against *dikus* (moneylenders/zamindars) and Company courts.
- **Post-1857 Movements:** **Indigo Revolt (1859–60, Digambar & Bishnu Biswas)**, **Pabna Agrarian League (1873–76)**, **Deccan Riots (1875)** against Marwari/Gujarati moneylenders (led to *Deccan Agriculturists' Relief Act, 1879*), **Rampa Rebellion (1879 / 1922–24 Alluri Sitarama Raju)**, and **Munda Ulgulan (1899–1900)** led by **Birsa Munda** against destruction of *khuntkatti* joint tenures (led to *Chotanagpur Tenancy Act, 1908*).

## 2. The Revolt of 1857: Causes, Centres & Leadership
- **Multi-Dimensional Causes:**
  - *Political:* **Doctrine of Lapse** (Dalhousie: Satara 1848, Jhansi 1853, Nagpur 1854) and **Annexation of Awadh (1856)** on pretext of misgovernance—alienating Taluqdars and Awadh-recruited sepoys.
  - *Economic:* Peasant/artisan ruin, summary inam/taluqdar dispossession.
  - *Socio-Religious:* Suspicions over Religious Disabilities Act (1850), General Service Enlistment Act (1856, overseas service crossing *kala pani*), and reform anxieties.
  - *Immediate Trigger:* **Enfield P-53 rifle greased cartridges** (rumoured cow/pig fat); **Mangal Pandey** at Barrackpore (29 March 1857); open mutiny at **Meerut (10 May 1857)**, marching to Delhi (11 May) and proclaiming **Bahadur Shah Zafar** Emperor.

| Centre of Revolt | Indian Leadership | British Suppressor |
|---|---|---|
| **Delhi** | Bahadur Shah Zafar (nominal), **General Bakht Khan** | John Nicholson, Hudson |
| **Kanpur** | **Nana Saheb**, **Tantia Tope**, Azimullah Khan | Colin Campbell, Havelock |
| **Lucknow (Awadh)** | **Begum Hazrat Mahal** (Birjis Qadr), Maulvi Ahmadullah | Colin Campbell |
| **Jhansi & Gwalior** | **Rani Lakshmibai**, Tantia Tope | Sir Hugh Rose |
| **Arrah (Bihar)** | **Kunwar Singh** (Jagdishpur), Amar Singh | William Taylor, Eyre |
| **Bareilly (Rohilkhand)** | **Khan Bahadur Khan** | Colin Campbell |
| **Faizabad** | **Maulvi Ahmadullah Shah** | British forces |

## 3. Uttarakhand During 1857
- **Haldwani–Nainital–Rohilkhand Border:** When Bareilly fell to rebels under **Khan Bahadur Khan**, Nainital became a key British refuge under Commissioner **Henry Ramsay**. Rebels under **Kale Khan** briefly occupied **Haldwani** (September 1857) before being repulsed by Ramsay's Gurkha-irregular forces at Charpura/Chorgalia.
- **Kalu Singh Mahara (Champawat):** Widely recognized in Uttarakhand historical memory as a key regional freedom fighter from **Bisung (Champawat)** who reportedly organized local youths (*Krantiveer* network) in contact with Awadh/Rohilkhand leaders to oppose British authority in eastern Kumaon. (While colonial archival entries are sparse compared to major plains centres, regional records and official state commemorations honour him as Uttarakhand's prominent 1857 resistance figure.)

## 4. Consequences & Historiography of 1857
- **Government of India Act 1858:** Abolished East India Company rule; transferred power to the **British Crown**; created **Secretary of State for India** and turned Governor-General into **Viceroy** (**Lord Canning**).
- **Queen's Proclamation (1 Nov 1858, Allahabad):** Promised no further territorial annexations, non-interference in religious customs, and respect for princes' rights.
- **Army Reorganization (Peel Commission):** Raised European-to-Indian troop ratio (1:2 in Bengal, 1:3 in Madras/Bombay), placed artillery exclusively under Europeans, and shifted recruitment toward designated "martial races" (Punjab, Gurkhas, Garhwalis later).
- **Historians' Views:** Disraeli ("national revolt"), V.D. Savarkar ("First War of Indian Independence"), R.C. Majumdar ("neither first, nor national, nor a war of independence"), S.N. Sen ("began as fight for religion, ended as war of independence").

## 5. Key Revision Takeaways
- **Santhal Hul (1855–56)** was led by **Sidhu and Kanhu**; **Munda Ulgulan (1899–1900)** by **Birsa Munda**.
- **1857 began on 10 May at Meerut**; **Queen's Proclamation** was read on **1 November 1858** at Allahabad by Lord Canning.
- In Uttarakhand, **Kalu Singh Mahara (Champawat)** symbolizes 1857 resistance while **Henry Ramsay** guarded Kumaon/Nainital.`,
    mcqs: [
      {
        stem: 'Which tribal rebellion of 1855–56 in the Rajmahal hills (Damin-i-Koh) was led by Sidhu and Kanhu Murmu against dikus (outsider moneylenders and zamindars)?',
        options: ['Kol Uprising', 'Santhal Hul', 'Munda Ulgulan', 'Khond Rebellion'],
        correctOptionIndex: 1,
        explanation: 'The Santhal Hul (1855–56) led by Sidhu, Kanhu, Chand, and Bhairav Murmu challenged colonial courts and exploitative dikus, prompting the creation of Santhal Parganas.',
        difficulty: 'foundation',
      },
      {
        stem: 'The "Ulgulan" (Great Tumult) of 1899–1900 led by Birsa Munda sought primarily to defend:',
        options: [
          'Permanent Settlement zamindari estates',
          'Traditional collective tribal land tenure (Khuntkatti) against outsider encroachment',
          'British indigo plantations in Bihar',
          'Monopolies over Assam tea exports',
        ],
        correctOptionIndex: 1,
        explanation: 'Birsa Munda\'s movement fought the breakdown of the Munda Khuntkatti (joint lineage ownership) system and forced labour (beth begari), leading to the 1908 Chotanagpur Tenancy Act.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which 1817 uprising in Odisha, led by Bakshi Jagabandhu, was triggered by British land revenue and salt monopoly policies?',
        options: ['Paika Rebellion', 'Moplah Uprising', 'Ramosi Revolt', 'Sanyasi Rebellion'],
        correctOptionIndex: 0,
        explanation: 'The Paikas (traditional landed militia of Khurda) rose under Bakshi Jagabandhu Bidyadhar in 1817 against steep revenue demands and salt price spikes.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which social novel by Bankim Chandra Chattopadhyay drew historical inspiration from the late-18th-century Sanyasi–Fakir Rebellion in Bengal?',
        options: ['Nil Darpan', 'Anandamath', 'Gora', 'Pather Dabi'],
        correctOptionIndex: 1,
        explanation: 'Anandamath (1882), which contains the song "Vande Mataram", was set against the backdrop of the 1770 Bengal famine and the Sanyasi Rebellion.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which policy of Lord Dalhousie particularly alienated Indian princely rulers like Rani Lakshmibai of Jhansi prior to 1857?',
        options: ['Ring-Fence Policy', 'Doctrine of Lapse', 'Masterly Inactivity', 'Subsidiary Alliance only'],
        correctOptionIndex: 1,
        explanation: 'Under the Doctrine of Lapse, states without a natural male heir (Satara, Sambalpur, Jhansi, Nagpur) were annexed by refusing adopted heirs.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why did the General Service Enlistment Act of 1856 provoke widespread resentment among Bengal Army sepoys?',
        options: [
          'It reduced sepoy pensions by half',
          'It required new recruits to serve overseas wherever ordered, clashing with upper-caste taboos against crossing the sea (kala pani)',
          'It banned all religious festivals in cantonments',
          'It replaced muskets with bows and arrows',
        ],
        correctOptionIndex: 1,
        explanation: 'Passed under Lord Canning, the 1856 Act obligated recruits to cross the ocean on imperial expeditions, triggering deep caste-loss fears.',
        difficulty: 'standard',
      },
      {
        stem: 'Who led the rebel forces effectively at Arrah/Jagdishpur (Bihar) at age 80 during the Revolt of 1857?',
        options: ['Khan Bahadur Khan', 'Kunwar Singh', 'Maulvi Ahmadullah', 'General Bakht Khan'],
        correctOptionIndex: 1,
        explanation: 'Babu Kunwar Singh of Jagdishpur conducted skilful guerrilla and conventional operations across Bihar and eastern UP in 1857–58.',
        difficulty: 'foundation',
      },
      {
        stem: 'At Lucknow, who proclaimed her young son Birjis Qadr as Nawab and led the Awadh resistance during 1857–58?',
        options: ['Rani Avantibai', 'Begum Hazrat Mahal', 'Zinat Mahal', 'Rani Jindan'],
        correctOptionIndex: 1,
        explanation: 'Begum Hazrat Mahal rallied taluqdars, peasants, and sepoys at Lucknow in the name of her minor son Birjis Qadr.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who famously praised Rani Lakshmibai of Jhansi as "the best and bravest military leader of the rebels" after capturing Gwalior in 1858?',
        options: ['Colin Campbell', 'Sir Hugh Rose', 'John Lawrence', 'Lord Canning'],
        correctOptionIndex: 1,
        explanation: 'Sir Hugh Rose, commander of the Central India Field Force that fought Lakshmibai at Jhansi and Gwalior, paid tribute to her military leadership.',
        difficulty: 'standard',
      },
      {
        stem: 'In Uttarakhand, who is widely commemorated from Champawat (Bisung) as a leading local organizer of the 1857 anti-British resistance?',
        options: ['Veer Chandra Singh Garhwali', 'Kalu Singh Mahara', 'Sridev Suman', 'Badri Datt Pande'],
        correctOptionIndex: 1,
        explanation: 'Kalu Singh Mahara of Bisung (Champawat) mobilized local resistance in Kumaon during 1857 in coordination with Rohilkhand/Awadh rebels.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Commissioner of Kumaon fortified Nainital as a sanctuary for British families from Rohilkhand and retook Haldwani during 1857?',
        options: ['G.W. Traill', 'Sir Henry Ramsay', 'Edward Gardner', 'J.H. Batten'],
        correctOptionIndex: 1,
        explanation: 'Sir Henry Ramsay ("King of Kumaon") maintained British hold over Kumaon and repulsed rebel forces at Haldwani foothills in 1857–58.',
        difficulty: 'standard',
      },
      {
        stem: 'Which major constitutional change was enacted by the Government of India Act of 1858 immediately after the Revolt?',
        options: [
          'Provincial elections based on adult franchise',
          'Transfer of Indian governance from the East India Company to the British Crown and creation of the Secretary of State for India',
          'Establishment of dyarchy in the provinces',
          'Abolition of the Viceroy\'s post',
        ],
        correctOptionIndex: 1,
        explanation: 'The Act for the Better Government of India (1858) ended Company rule, vested authority in the Crown via a Secretary of State, and styled Canning the first Viceroy.',
        difficulty: 'foundation',
      },
      {
        stem: 'What key military reform followed the Peel Commission recommendations after 1857?',
        options: [
          'Artillery was handed over completely to Bengal sepoys',
          'The ratio of European to Indian troops was raised, key artillery was reserved for Europeans, and recruitment shifted toward "martial races"',
          'All Indian regiments were disbanded permanently',
          'Sepoy pay was doubled across Bengal',
        ],
        correctOptionIndex: 1,
        explanation: 'To prevent another pan-Indian mutiny, Britain raised European troop ratios, kept artillery under British control, and favoured Punjab/hill recruitment.',
        difficulty: 'standard',
      },
      {
        stem: 'Which historian described the 1857 uprising in his work "Eighteen Fifty-Seven" with the observation that it "began as a fight for religion and ended as a war of independence"?',
        options: ['R.C. Majumdar', 'S.N. Sen', 'V.D. Savarkar', 'John Seeley'],
        correctOptionIndex: 1,
        explanation: 'Surendra Nath Sen, in his official centenary history Eighteen Fifty-Seven (1957), formulated this nuanced assessment.',
        difficulty: 'advanced',
      },
      {
        stem: 'The Deccan Riots of 1875 by Kunbi peasants against Gujarati and Marwari moneylenders resulted in which legislative measure?',
        options: [
          'Bengal Tenancy Act of 1885',
          'Deccan Agriculturists\' Relief Act of 1879',
          'Punjab Land Alienation Act of 1900',
          'Forest Act of 1878',
        ],
        correctOptionIndex: 1,
        explanation: 'The Deccan Riots Commission inquiry led to the Deccan Agriculturists\' Relief Act (1879), curbing imprisonment for debt and protecting peasant land.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: '19th-Century Socio-Religious Reformers & Organizations',
    materialTitle: '19th-Century Socio-Religious Reformers & Organizations — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: 19th-Century Socio-Religious Reform Movements',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# 19th-Century Socio-Religious Reformers & Organizations

## 1. Reform vs Revival: Nature of the Indian Renaissance
19th-century Indian intellectuals confronted twin challenges: social evils (Sati, child marriage, untouchability, female illiteracy) and colonial cultural critiques. Historians often distinguish:
- **Reformist Movements** (invoking reason, universal humanism, and selective scriptural reinterpretation): **Brahmo Samaj**, **Prarthana Samaj**, **Aligarh Movement**.
- **Revivalist Movements** (appealing to purified foundational texts while actively reforming contemporary caste/gender orthodoxy): **Arya Samaj**, **Deoband Movement**, **Ramakrishna Mission**.

## 2. Major Reformers & Institutions (Bengal & Western/Southern India)
| Reformer / Leader | Organization & Year | Core Agenda & Milestones |
|---|---|---|
| **Raja Rammohan Roy** | *Atmiya Sabha* (1815), **Brahmo Sabha/Samaj** (1828) | Monotheism (*Tuhfat-ul-Muwahhidin*), campaign leading to **Abolition of Sati (Regulation XVII, 1829 under Bentinck)**, Hindu College (1817), *Sambad Kaumudi* |
| **Henry Vivian Derozio** | **Young Bengal Movement** (1820s–30s) | Radical rationalism at Hindu College; free thought, press freedom, women's education |
| **Debendranath Tagore & Keshab Chandra Sen** | *Tattvabodhini Sabha* (1839); *Brahmo Samaj of India* (1866) / *Sadharan Brahmo Samaj* (1878) | Spread Brahmo ideas; **Native Marriage Act (1872)** raised marriage age & banned polygamy for Brahmos |
| **Ishwar Chandra Vidyasagar** | Bethune School & legislative advocacy | Crucial role in **Hindu Widows' Remarriage Act (1856, Act XV)**; opened dozens of girls' schools |
| **Atmaram Pandurang, M.G. Ranade, R.G. Bhandarkar** | **Prarthana Samaj** (Bombay, 1867); *Deccan Education Society* | Caste reform, widow remarriage, female education, monotheistic bhakti heritage |
| **Jyotirao Phule & Savitribai Phule** | **Satyashodhak Samaj** (Pune, 1873) | Anti-caste assertion; authored ***Gulamgiri*** (1873); opened **first Indian-run girls' school in Pune (1848)** |
| **Swami Dayananda Saraswati** | **Arya Samaj** (Bombay 1875; Lahore HQ 1877) | *"Back to the Vedas"*, opposed idolatry, child marriage & birth-based caste; *Satyarth Prakash*; later founded **DAV** & **Gurukul Kangri** streams |
| **Swami Vivekananda** | **Ramakrishna Mission** (1897, Belur Math) | Practical Vedanta (*Daridra Narayana seva*), universal tolerance (**1893 Chicago Parliament of Religions**); established **Advaita Ashrama at Mayavati (Champawat, 1899)** |
| **Narayana Guru** | **SNDP Yogam** (Kerala, 1903) | *"One Caste, One Religion, One God for Mankind"*; temple entry & Ezhava upliftment |

## 3. Muslim, Parsi & Sikh Reform Movements
- **Sir Syed Ahmad Khan (Aligarh Movement):** Founded *Scientific Society* (1864) and **Muhammadan Anglo-Oriental College (1875, later AMU 1920)**; promoted modern scientific education and rational Quranic exegesis (*Tahzib-ul-Akhlaq*).
- **Deoband Movement (1866, Darul Uloom):** Founded by **Muhammad Qasim Nanautavi** and **Rashid Ahmad Gangohi**; orthodox religious revival combined with firm anti-British nationalism (welcomed INC).
- **Rahnumai Mazdayasnan Sabha (1851):** Dadabhai Naoroji, S.S. Bengalee, K.R. Cama — Parsi social/women's reform (*Rast Goftar*).
- **Singh Sabha (1873) & Akali Movement (1920s):** Modern Sikh education (Khalsa College, Amritsar) and **Gurdwara Reform Act (1925)** freeing shrines from corrupt *mahants*.

## 4. Uttarakhand Milestones in Socio-Religious Reform
- **Swami Vivekananda & Mayavati:** Visited Almora, Kakrighat, and Karnaprayag during 1890–1901; inspired followers Captain J.H. Sevier and Charlotte Sevier to found the **Advaita Ashrama at Mayavati (Champawat, 1899)**, publishing *Prabuddha Bharata*.
- **Swami Shraddhananda & Gurukul Kangri (1902):** Founded the iconic **Gurukul Kangri** near **Haridwar** (initially Kangri village) for Vedic–nationalist education alongside the Arya Samaj reform wave.
- **Anti-Dola-Palki & Shilpkar Upliftment:** In the early 20th century, **Jayanand Bharati** led the **Dola-Palki movement** in Garhwal securing equal wedding palanquin rights for *Shilpkar* communities, while **Hari Prasad Tamta** championed Kumaon Shilpkar education and representation.

## 5. Key Revision Takeaways
- **1829 Sati Abolition** = Raja Rammohan Roy + Bentinck; **1856 Widow Remarriage Act** = Vidyasagar + Canning (drafted under Dalhousie).
- **Satyashodhak Samaj (1873)** & ***Gulamgiri*** = Jyotirao Phule; **Advaita Ashrama Mayavati (1899)** = Vivekananda; **Gurukul Kangri (1902)** = Swami Shraddhananda.
- **Age of Consent Act (1891)** raised marriage consummation age for girls from 10 to 12 (championed by Behramji Malabari).`,
    mcqs: [
      {
        stem: 'Whose relentless scriptural and journalistic campaign led Governor-General Lord William Bentinck to abolish Sati via Regulation XVII in 1829?',
        options: ['Ishwar Chandra Vidyasagar', 'Raja Rammohan Roy', 'Debendranath Tagore', 'Keshab Chandra Sen'],
        correctOptionIndex: 1,
        explanation: 'Raja Rammohan Roy mobilized opinion through Sambad Kaumudi and religious debates, directly enabling Bentinck\'s 1829 prohibition of Sati.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who founded the "Satyashodhak Samaj" in 1873 and authored "Gulamgiri" to challenge Brahminical caste hierarchy?',
        options: ['Gopal Hari Deshmukh', 'Jyotirao Phule', 'M.G. Ranade', 'B.R. Ambedkar'],
        correctOptionIndex: 1,
        explanation: 'Mahatma Jyotirao Phule established Satyashodhak Samaj in Pune (1873) and dedicated Gulamgiri to the abolition of slavery and caste oppression.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which social reformer\'s efforts culminated in the enactment of the Hindu Widows\' Remarriage Act (Act XV) of 1856?',
        options: ['Keshab Chandra Sen', 'Ishwar Chandra Vidyasagar', 'Raja Rammohan Roy', 'Swami Dayananda Saraswati'],
        correctOptionIndex: 1,
        explanation: 'Ishwar Chandra Vidyasagar petitioned the Legislative Council with Vedic-Shastric citations, resulting in the 1856 Widows\' Remarriage Act.',
        difficulty: 'foundation',
      },
      {
        stem: 'Where did Swami Dayananda Saraswati first establish the Arya Samaj in 1875 before shifting its headquarters to Lahore in 1877?',
        options: ['Calcutta', 'Bombay', 'Haridwar', 'Ajmer'],
        correctOptionIndex: 1,
        explanation: 'Arya Samaj was founded in Bombay in April 1875 and gained rapid organizational growth after its Lahore headquarters opened in 1877.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which 19th-century reformer was associated with the "Tattvabodhini Sabha" (1839) and revitalized the Brahmo Samaj after Rammohan Roy\'s death?',
        options: ['Debendranath Tagore', 'Henry Vivian Derozio', 'Ramakrishna Paramahamsa', 'Sir Syed Ahmad Khan'],
        correctOptionIndex: 0,
        explanation: 'Debendranath Tagore founded Tattvabodhini Sabha (1839) and its journal Tattvabodhini Patrika before joining and steering the Brahmo Samaj.',
        difficulty: 'standard',
      },
      {
        stem: 'Who led the "Young Bengal Movement" at Hindu College, Calcutta, urging students to think rationally and question all blind authority?',
        options: ['David Hare', 'Henry Louis Vivian Derozio', 'Surendranath Banerjea', 'Ananda Mohan Bose'],
        correctOptionIndex: 1,
        explanation: 'Anglo-Indian poet-teacher Henry Vivian Derozio inspired the radical rationalist Young Bengal group (1826–1831).',
        difficulty: 'foundation',
      },
      {
        stem: 'In which district of Uttarakhand was the "Advaita Ashrama" at Mayavati established in 1899 under Swami Vivekananda\'s inspiration?',
        options: ['Chamoli', 'Champawat', 'Uttarkashi', 'Haridwar'],
        correctOptionIndex: 1,
        explanation: 'Advaita Ashrama at Mayavati (near Lohaghat, Champawat district) was founded in 1899 by Swami Swarupananda and Captain/Mrs. Sevier.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who founded "Gurukul Kangri" near Haridwar in 1902 to blend Vedic education with patriotic character-building?',
        options: ['Lala Hansraj', 'Swami Shraddhananda (Munshi Ram)', 'Madan Mohan Malaviya', 'Swami Dayananda'],
        correctOptionIndex: 1,
        explanation: 'Swami Shraddhananda led the Gurukul wing of the Arya Samaj and established Gurukul Kangri near Haridwar in 1902.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which reform movement in Kerala raised the slogan "One Caste, One Religion, One God for Mankind" and was founded by Sri Narayana Guru?',
        options: ['Vaikom Satyagraha Committee', 'SNDP Yogam (Sri Narayana Dharma Paripalana Yogam)', 'Justice Party', 'Self-Respect Movement'],
        correctOptionIndex: 1,
        explanation: 'Founded in 1903, SNDP Yogam championed dignity, education, and temple rights for oppressed castes under Narayana Guru\'s spiritual leadership.',
        difficulty: 'foundation',
      },
      {
        stem: 'The "Age of Consent Act of 1891", which raised the statutory age of consent for girls from 10 to 12 years, was championed most actively by:',
        options: ['Behramji Malabari', 'Bal Gangadhar Tilak', 'Radhakanta Deb', 'Lala Lajpat Rai'],
        correctOptionIndex: 0,
        explanation: 'Parsi reformer Behramji Malabari spearheaded the campaign (backed by Ranade and Phule), though Tilak opposed colonial legislative interference in Hindu custom.',
        difficulty: 'standard',
      },
      {
        stem: 'How did the Deoband Movement (1866) differ politically from Sir Syed Ahmad Khan\'s Aligarh Movement?',
        options: [
          'Deoband supported British loyalty and rejected traditional Islamic scholarship',
          'Deoband welcomed the formation of the Indian National Congress and opposed British political rule, whereas Sir Syed urged Muslims to focus on Western education and stay aloof from early Congress politics',
          'Both opposed modern science entirely',
          'Aligarh supported armed jihad against Britain',
        ],
        correctOptionIndex: 1,
        explanation: 'Deoband issued fatwas welcoming the Congress (1888) and criticizing Sir Syed\'s loyalist United Indian Patriotic Association.',
        difficulty: 'advanced',
      },
      {
        stem: 'Who founded the "Prarthana Samaj" in Bombay in 1867 (later popularized across Maharashtra by M.G. Ranade)?',
        options: ['Atmaram Pandurang', 'Gopal Krishna Gokhale', 'Keshab Chandra Sen', 'Dadoba Pandurang'],
        correctOptionIndex: 0,
        explanation: 'Dr. Atmaram Pandurang founded Prarthana Samaj in 1867 following Keshab Chandra Sen\'s visit to Bombay; Ranade and Bhandarkar became its key pillars.',
        difficulty: 'standard',
      },
      {
        stem: 'What was the objective of the "Dola-Palki Movement" led by Jayanand Bharati in early 20th-century Garhwal?',
        options: [
          'Abolition of tea taxes in Dehradun',
          'Securing the equal social right for Shilpkar (Dalit) brides and grooms to use palanquins (dola-palki) in wedding processions',
          'Protecting oak forests against British felling',
          'Constructing pilgrimage bridges on the Bhagirathi',
        ],
        correctOptionIndex: 1,
        explanation: 'Jayanand Bharati challenged upper-caste restrictions barring Shilpkars from using dola-palkis, winning legal and social reform backing.',
        difficulty: 'standard',
      },
      {
        stem: 'Which female Parsi social reformer and journal editor worked alongside Dadabhai Naoroji in the Rahnumai Mazdayasnan Sabha (1851)?',
        options: ['S.S. Bengalee (along with Naoroji Furdonji)', 'Pandita Ramabai', 'Cornelia Sorabji', 'Madam Bhikaiji Cama'],
        correctOptionIndex: 0,
        explanation: 'S.S. Bengalee, Naoroji Furdonji, K.R. Cama, and Dadabhai Naoroji founded Rahnumai Mazdayasnan Sabha and edited Rast Goftar ("Truth Teller").',
        difficulty: 'advanced',
      },
      {
        stem: 'Which 1872 legislation enacted largely due to Keshab Chandra Sen\'s campaign legalized civil marriage, barred child marriage below 14/18, and prohibited polygamy for non-denominational registrants?',
        options: [
          'Special Marriage / Native Marriage Act of 1872',
          'Hindu Marriage Act of 1955',
          'Sharda Act of 1929',
          'Ilbert Bill of 1883',
        ],
        correctOptionIndex: 0,
        explanation: 'Act III of 1872 (Native/Brahmo Marriage Act) applied initially to persons declaring they did not profess Hindu, Muslim, Christian, etc., establishing civil marriage standards.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Foundation of Indian National Congress, Moderates & Extremists',
    materialTitle: 'Foundation of Indian National Congress, Moderates & Extremists — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: INC Foundation, Moderates & Extremists',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Foundation of Indian National Congress, Moderates & Extremists

## 1. Pre-Congress Associations & Foundation of INC (1885)
Before 1885, provincial bodies built political consciousness:
- *Landholders' Society* (1838, Calcutta) and *British Indian Association* (1851).
- **Indian Association of Calcutta (1876):** Founded by **Surendranath Banerjea** and **Ananda Mohan Bose**; led the all-India agitation against lowering ICS age limit (1877) and the **Vernacular Press Act (1878)** & **Ilbert Bill controversy (1883)**.
- *Poona Sarvajanik Sabha* (1870, M.G. Ranade), *Madras Mahajana Sabha* (1884), *Bombay Presidency Association* (1885, Pherozeshah Mehta, K.T. Telang, Badruddin Tyabji).
- **First Session of INC (28–30 December 1885):** Held at **Gokuldas Tejpal Sanskrit College, Bombay** (shifted from Pune due to cholera), attended by **72 delegates**, presided over by **Womesh Chandra Bonnerjee**, with retired ICS officer **A.O. Hume** as General Secretary.
- **Safety Valve Debate:** Lala Lajpat Rai used the "safety valve" critique (drawing on Wedderburn's biography of Hume), whereas modern historians (Bipan Chandra) argue Indian leaders consciously used Hume as a **"lightning conductor"** to shield a nascent pan-Indian organization from immediate colonial suppression.

## 2. The Moderate Phase (1885–1905)
- **Key Leaders:** Dadabhai Naoroji, Pherozeshah Mehta, Dinshaw Wacha, Surendranath Banerjea, Gopal Krishna Gokhale, Madan Mohan Malaviya.
- **Methodology ("3 Ps"):** Prayers, Petitions, and Protests within constitutional bounds—awakening public opinion in India and Britain (*British Committee of INC*, 1889; *India* journal).
- **Major Achievements:**
  - Pioneered the **Economic Critique of Imperialism** (Drain of Wealth, salt tax, home charges).
  - **Indian Councils Act 1892:** Expanded legislative councils slightly and permitted budget discussion (without voting).
  - Demanded Indianization of ICS, separation of executive and judiciary, and reduction of military expenditure.
  - **Welby Commission (1895):** Appointed to inquire into Indian expenditure (Naoroji, Gokhale gave testimony).

## 3. Rise of Extremism / Assertive Nationalism (1905–1918)
- **Causes of Emergence:** Failure of Moderates to win substantive concessions; severe famines (1896–1900) and plague mismanagement; international victories showing European invincibility was a myth (Ethiopia over Italy 1896; **Japan over Russia 1905**); reactionary policies of **Lord Curzon** (Calcutta Corporation Act 1899, Indian Universities Act 1904, Official Secrets Act 1904, **Partition of Bengal 1905**).
- **Key Leaders ("Lal–Bal–Pal" & Aurobindo):** **Lala Lajpat Rai** (Punjab), **Bal Gangadhar Tilak** (Maharashtra — *Kesari* and *Mahratta*; revived **Ganapati [1893]** and **Shivaji [1895]** festivals; slogan *"Swaraj is my birthright"*), **Bipin Chandra Pal** (Bengal), and **Aurobindo Ghosh** (*New Lamps for Old*, *Bande Mataram*).
- **Ideology & Techniques:** Passive resistance, **Swadeshi** (indigenous enterprise), **Boycott** (foreign cloth, schools, courts), and **National Education**—targeting **Swaraj** (self-rule) rather than mere bureaucratic reforms.
- **Surat Split (1907):** Moderates (Rash Behari Ghosh) and Extremists clashed at the **Surat Session (1907)** over extending Swadeshi–Boycott nationwide and presidential choice, resulting in a nine-year split until reconciliation at Lucknow (1916).

## 4. Early Political Awakening in Uttarakhand
- **Almora Akhbar (1871):** Founded by **Buddhi Ballabh Pant** (later edited boldly by **Badri Datt Pande** before suppression in 1918, replaced by ***Shakti***).
- **Debating Club (1870, Almora)** and **Garhwal Sabha / Garhwal Union (1901–1907)** nurtured modern civic consciousness; **Kumaon Parishad (1916)** later became the main vehicle linking Uttarakhand's anti-*Coolie Begar* and forest struggles to the national Congress movement.

## 5. Key Revision Takeaways
- **First INC Session (1885):** Bombay, 72 delegates, President **W.C. Bonnerjee**.
- **Indian Association (1876):** Surendranath Banerjea & Ananda Mohan Bose.
- **Moderate economic critique** laid the ideological foundation for mass nationalism; **Extremists** introduced boycott, passive resistance, and mass mobilization; **Surat Split** occurred in **1907**.`,
    mcqs: [
      {
        stem: 'Who presided over the first session of the Indian National Congress held at Gokuldas Tejpal Sanskrit College, Bombay, in December 1885?',
        options: ['A.O. Hume', 'Dadabhai Naoroji', 'Womesh Chandra Bonnerjee', 'Badruddin Tyabji'],
        correctOptionIndex: 2,
        explanation: 'Womesh Chandra Bonnerjee presided over the inaugural 1885 Bombay session attended by 72 delegates from across India.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pre-Congress organization founded in 1876 by Surendranath Banerjea and Ananda Mohan Bose led nationwide agitations on the ICS age issue and Vernacular Press Act?',
        options: [
          'Landholders\' Society',
          'Indian Association of Calcutta',
          'Madras Mahajana Sabha',
          'Poona Sarvajanik Sabha',
        ],
        correctOptionIndex: 1,
        explanation: 'The Indian Association (1876) was the most dynamic pre-INC nationalist body, organizing the Indian National Conference in 1883 and 1885.',
        difficulty: 'foundation',
      },
      {
        stem: 'What does Bipan Chandra\'s "Lightning Conductor" interpretation argue regarding A.O. Hume\'s role in founding the INC?',
        options: [
          'Indian leaders simply carried out Viceroy Dufferin\'s secret orders blindly',
          'Indian nationalists deliberately used Hume as a protective shield so the colonial state would not immediately crush the infant political body',
          'Hume funded the entire Swadeshi boycott movement',
          'The INC was originally an engineering guild',
        ],
        correctOptionIndex: 1,
        explanation: 'Early nationalists like Gokhale noted that if an Indian had tried to convene an all-India political body, officials would have suppressed it; Hume acted as a "lightning conductor".',
        difficulty: 'standard',
      },
      {
        stem: 'Which constitutional reform represented the primary legislative outcome of the Moderates\' early agitation?',
        options: [
          'Indian Councils Act of 1892',
          'Government of India Act of 1935',
          'Indian Independence Act of 1947',
          'Charter Act of 1853',
        ],
        correctOptionIndex: 0,
        explanation: 'The Indian Councils Act of 1892 enlarged non-official membership in Imperial and Provincial Legislative Councils and allowed members to discuss the annual budget.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which global event of 1904–1905 dramatically shattered the myth of European military invincibility among Indian Extremist nationalists?',
        options: [
          'Treaty of Versailles',
          'Japan\'s victory over Tsarist Russia',
          'American Civil War',
          'Russian Bolshevik Revolution of 1917',
        ],
        correctOptionIndex: 1,
        explanation: 'Alongside Ethiopia\'s defeat of Italy (1896), Asian power Japan\'s triumph over Russia (1905) electrified Indian youth and Extremist leaders.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which two newspapers were edited by Bal Gangadhar Tilak to propagate assertive nationalist ideas?',
        options: [
          'Bengalee and Amrita Bazar Patrika',
          'Kesari (Marathi) and The Mahratta (English)',
          'New India and Commonweal',
          'Young India and Harijan',
        ],
        correctOptionIndex: 1,
        explanation: 'Tilak launched Kesari in Marathi and The Mahratta in English in 1881 to reach both vernacular masses and English-educated circles.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who authored the famous series of articles titled "New Lamps for Old" (1893–94) criticizing Moderate politics as timid and out of touch with the masses?',
        options: ['Lala Lajpat Rai', 'Aurobindo Ghosh', 'Bipin Chandra Pal', 'Gopal Krishna Gokhale'],
        correctOptionIndex: 1,
        explanation: 'Writing in the Indu Prakash (1893–94), Aurobindo Ghosh attacked the Moderate "mendicant" strategy and urged broad-based political regeneration.',
        difficulty: 'standard',
      },
      {
        stem: 'What was the immediate flashpoint behind the "Surat Split" of the Indian National Congress in December 1907?',
        options: [
          'Dispute over supporting World War I',
          'Disagreement between Moderates and Extremists over the 1906 Calcutta resolutions (Swadeshi, Boycott, National Education) and the presidency',
          'Conflict over the Gandhi–Irwin Pact',
          'Disagreement over accepting the Communal Award',
        ],
        correctOptionIndex: 1,
        explanation: 'Extremists wanted Lala Lajpat Rai or Tilak as president and wanted Boycott extended outside Bengal; Moderates installed Rash Behari Ghosh, causing a formal split at Surat.',
        difficulty: 'standard',
      },
      {
        stem: 'Who founded the "Servants of India Society" in 1905 to train dedicated national workers for constitutional and social service?',
        options: ['Bal Gangadhar Tilak', 'Gopal Krishna Gokhale', 'Pherozeshah Mehta', 'M.G. Ranade'],
        correctOptionIndex: 1,
        explanation: 'Moderate statesman Gopal Krishna Gokhale established the Servants of India Society in Pune in 1905.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which reactionary legislative measure of Lord Curzon in 1899 halved the elected Indian members of Calcutta Municipal Corporation?',
        options: [
          'Calcutta Corporation Act, 1899',
          'Ilbert Bill, 1883',
          'Rowlatt Act, 1919',
          'Press Act, 1910',
        ],
        correctOptionIndex: 0,
        explanation: 'Curzon\'s Calcutta Corporation Act (1899) curtailed Indian municipal self-government, fuelling intense resentment in Bengal even before the 1905 partition.',
        difficulty: 'standard',
      },
      {
        stem: 'Who were the first Muslim President (1887, Madras) and first English President (1888, Allahabad) of the INC respectively?',
        options: [
          'Rahimatullah Sayani and A.O. Hume',
          'Badruddin Tyabji and George Yule',
          'Maulana Azad and William Wedderburn',
          'Hakim Ajmal Khan and Henry Cotton',
        ],
        correctOptionIndex: 1,
        explanation: 'Badruddin Tyabji presided at the 1887 Madras session, and Scottish merchant George Yule presided at Allahabad in 1888.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pioneering weekly newspaper, started in 1871 in Uttarakhand by Buddhi Ballabh Pant and later edited by Badri Datt Pande, became a fearless voice against colonial excesses?',
        options: ['Garhwali', 'Almora Akhbar', 'Karmabhoomi', 'Swadheen Praja'],
        correctOptionIndex: 1,
        explanation: 'Almora Akhbar (1871–1918) was Kumaon\'s pioneering Hindi journal; after its forced closure under Badri Datt Pande in 1918, he launched Shakti.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which 1895 Royal Commission was appointed partly due to Moderate persistence to examine British-Indian military and civil expenditure inequities?',
        options: ['Hunter Commission', 'Welby Commission', 'Simon Commission', 'Sadler Commission'],
        correctOptionIndex: 1,
        explanation: 'The Welby Commission (Indian Expenditure Commission, 1895) included Dadabhai Naoroji as a member and heard detailed evidence from G.K. Gokhale and others.',
        difficulty: 'standard',
      },
      {
        stem: 'Why did Moderates attach primary importance to economic nationalism despite avoiding mass civil disobedience?',
        options: [
          'They wanted to preserve Zamindari privileges forever',
          'Their quantitative critique of the Drain of Wealth eroded the moral legitimacy of British "benevolent rule" and built pan-Indian solidarity',
          'They believed Britain had already granted Dominion Status',
          'They aimed only to promote British textiles in Bombay',
        ],
        correctOptionIndex: 1,
        explanation: 'By proving statistically that British rule impoverished India rather than modernizing it, Moderates forged the intellectual core of Indian nationalism.',
        difficulty: 'advanced',
      },
      {
        stem: 'In which year was the "Kumaon Parishad" established to articulate hill grievances such as Coolie Begar and restrictive forest reservations?',
        options: ['1885', '1905', '1916', '1930'],
        correctOptionIndex: 2,
        explanation: 'Founded in 1916 by leaders including Govind Ballabh Pant, Hargovind Pant, Badri Datt Pande, and Prem Ballabh Pande, Kumaon Parishad merged with the INC in 1926.',
        difficulty: 'foundation',
      },
    ],
  },
];
