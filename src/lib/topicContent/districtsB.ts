import { TopicContentPackage } from './types';

export const DISTRICTS_PART_B: TopicContentPackage[] = [
  {
    topicTitle: 'Nainital District Profile',
    materialTitle: 'Nainital District Administrative & Development Profile — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Nainital Tehsils, Lakes, Institutions & Census',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Nainital District Administrative & Development Profile

## 1. Administrative Snapshot
- **Division:** Kumaon | **Area:** **4,251 sq km** | **HQ:** **Nainital** (also seat of the **Uttarakhand High Court**).
- **Major Tehsils:** Nainital, Haldwani, Ramnagar, Kaladhungi, Dhari, Kosyakutoli, Lalkuan, Betalghat, Okhalkanda.
- **Community Development Blocks (8):** Haldwani, Ramnagar, Bhimtal, Kotaabagh, Betalghat, Dhari, Ramgarh, Okhalkanda.
- **Assembly Constituencies (6):** Lalkuan, Bhimtal, Nainital (**SC**), Haldwani, Kaladhungi, Ramnagar.
- **Lok Sabha Link:** Primarily **Nainital–Udham Singh Nagar** parliamentary constituency (with **Ramnagar** segment linked to **Garhwal** parliamentary seat!).

## 2. Demographic & Judicial Highlights (2011 Census)
- **Population:** **9,54,605** | **Literacy Rate:** **83.88%** (Rank #2 in UK, close behind Dehradun).
- **Urbanization:** **38.94%** (Rank #2 in Uttarakhand, anchored by Haldwani–Kathgodam urban agglomeration).
- **Sex Ratio:** **934**.
- **Judicial Capital:** Houses the **High Court of Uttarakhand** (established 9 November 2000 in the former Summer Secretariat / Old Government House complex).

## 3. Geography, Research Institutions & Economy
- **Chhakhata (Sixty Lakes) Region:** **Naini Lake** (kidney-shaped tectonic lake ringed by Naina Peak/Cheena Peak 2,611 m, Deopatha, Ayarpatha), **Bhimtal** (largest lake in Kumaon), **Naukuchiatal** (deepest 9-cornered lake), **Sattal**, **Khurpatal**.
- **Rivers:** **Kosi** (western boundary via Betalghat–Ramnagar), **Gaula** (Kathgodam–Haldwani lifeline), **Nandhaur** (eastern Tarai-Bhabar forest belt).
- **Premier Scientific & Academic Institutions:**
  - **ARIES (Aryabhatta Research Institute of Observational Sciences)** at **Manora Peak** (Devasthal hosts Asia's largest 3.6-m optical telescope & Liquid Mirror Telescope!).
  - **IVRI (Indian Veterinary Research Institute)** campus at **Mukteshwar** (founded 1893 as Imperial Bacteriological Laboratory).
  - **Kumaun University** HQ (Nainital) & **Dr. Susheela Tiwari Government Medical College** (Haldwani).
- **Commerce:** **Haldwani** serves as the premier Kumaon trade gateway ("Gateway to Kumaon"), rail terminus at **Kathgodam**, **Lalkuan** paper/pulp hub, and **Ramgarh–Mukteshwar** temperate fruit bowl (peach, apple, plum).

## 4. Key Revision Takeaways
- **Nainital** ranks **#2 in Literacy (83.88%)** and **#2 in Urbanization (38.94%)** in Uttarakhand.
- **Ramnagar** assembly seat belongs to the **Garhwal** Lok Sabha constituency despite being in Nainital district.`,
    mcqs: [
      {
        stem: 'Which **Nainital district Vidhan Sabha constituency** is uniquely part of the **Garhwal (Pauri) Lok Sabha seat** rather than the Nainital–Udham Singh Nagar seat?',
        options: ['Haldwani', 'Bhimtal', 'Ramnagar', 'Kaladhungi'],
        correctOptionIndex: 2,
        explanation: 'Ramnagar (western Nainital) along with Corbett boundary falls under the Garhwal parliamentary constituency, while Nainital’s other 5 assembly seats lie in Nainital–Udham Singh Nagar.',
        difficulty: 'advanced',
      },
      {
        stem: 'Where in Uttarakhand does **ARIES (Aryabhatta Research Institute of Observational Sciences)** operate its **3.6-metre Devasthal Optical Telescope (DOT)** alongside its Manora Peak headquarters?',
        options: ['Mukteshwar', 'Nainital district (Manora Peak & Devasthal)', 'Ranikhet', 'Pithoragarh'],
        correctOptionIndex: 1,
        explanation: 'ARIES moved from Varanasi to Nainital (Manora Peak, 1955) and installed the 3.6-m DOT and 4-m International Liquid Mirror Telescope (ILMT) at Devasthal in Nainital district.',
        difficulty: 'standard',
      },
      {
        stem: 'According to the **2011 Census**, what rank does **Nainital district** hold in **both Literacy Rate (83.88%) and Urbanization (38.94%)** across Uttarakhand?',
        options: ['1st in both', '2nd in both (after Dehradun)', '4th in both', '7th in both'],
        correctOptionIndex: 1,
        explanation: 'Dehradun leads both literacy (84.25%) and urbanization (55.52%), with Nainital standing second at 83.88% literacy and 38.94% urban share.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which historic veterinary institution was established in **1893 at Mukteshwar (Nainital district)** as the Imperial Bacteriological Laboratory?',
        options: [
          'National Dairy Research Institute',
          'ICAR–Indian Veterinary Research Institute (IVRI) Regional Campus',
          'Forest Research Institute',
          'G.B. Pant University',
        ],
        correctOptionIndex: 1,
        explanation: 'Mukteshwar’s IVRI campus was founded in 1893 under Alfred Lingard to research rinderpest and livestock diseases before shifting main HQ to Izatnagar.',
        difficulty: 'standard',
      },
      {
        stem: 'How many **Community Development Blocks** constitute the rural administrative framework of **Nainital district**?',
        options: ['4 blocks', '8 blocks', '11 blocks', '14 blocks'],
        correctOptionIndex: 1,
        explanation: 'Nainital comprises 8 CD blocks: Haldwani, Ramnagar, Bhimtal, Kotabagh, Betalghat, Dhari, Ramgarh, and Okhalkanda.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Assembly Constituency** of Nainital district is reserved for **Scheduled Castes (SC)**?',
        options: ['Haldwani', 'Nainital', 'Lalkuan', 'Bhimtal'],
        correctOptionIndex: 1,
        explanation: 'Out of 6 seats in Nainital district, Nainital assembly constituency is SC-reserved.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **two rivers** provide the primary drinking and irrigation lifeline to **Ramnagar (west)** and **Haldwani–Bhabar (south-central)** respectively?',
        options: [
          'Tons and Asan',
          'Kosi (Ramnagar) and Gaula (Haldwani)',
          'Bhagirathi and Yamuna',
          'Saryu and Gomti',
        ],
        correctOptionIndex: 1,
        explanation: 'Kosi descends past Betalghat and Ramnagar along Corbett’s eastern edge, while Gaula emerges onto the Bhabar plains at Kathgodam–Haldwani.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Nainital hill belt** (at ~1,789 m elevation) is celebrated as the **"Fruit Bowl of Kumaon"** for apples, peaches, plums, and apricots?',
        options: ['Lalkuan', 'Ramgarh–Mukteshwar–Dhari belt', 'Kaladhungi plains', 'Haldwani mandi'],
        correctOptionIndex: 1,
        explanation: 'Ramgarh and Mukteshwar temperate orchards produce premium stone fruits and apples across Kumaon’s mid-elevation belt.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which major **railway terminus** just north of **Haldwani** serves as the primary broad-gauge rail gateway to Kumaon’s lake region?',
        options: ['Tanakpur', 'Kathgodam', 'Kotdwar', 'Kashipur'],
        correctOptionIndex: 1,
        explanation: 'Kathgodam (connected since 1884 under Rohilkhand & Kumaon Railway) serves Nainital, Almora, and Bageshwar hills.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Wildlife Sanctuary** spanning the **Nainital–Champawat** Bhabar forest corridor protects eastern Kumaon tiger and elephant habitat along the Nandhaur river?',
        options: [
          'Askot Sanctuary',
          'Nandhaur Wildlife Sanctuary',
          'Govind Sanctuary',
          'Kedarnath Sanctuary',
        ],
        correctOptionIndex: 1,
        explanation: 'Notified in 2012, Nandhaur Wildlife Sanctuary lies between the Gaula and Sharda (Kali) river basins across Nainital and Champawat districts.',
        difficulty: 'standard',
      },
      {
        stem: 'In which **year** did Nainital experience the catastrophic **18 September landslide** that swept away the historic Naina Devi Temple on the northern shore?',
        options: ['1857', '1880', '1915', '1942'],
        correctOptionIndex: 1,
        explanation: 'The September 1880 Nainital landslide claimed 151 lives and prompted the construction of the famous stone storm-water drainage network (nallahs) around the basin.',
        difficulty: 'standard',
      },
      {
        stem: 'Which prominent public sector / industrial hub in **southern Nainital district** houses Century Pulp & Paper Mill and dairy cooperative infrastructure?',
        options: ['Bhimtal', 'Lalkuan', 'Jeolikote', 'Sattal'],
        correctOptionIndex: 1,
        explanation: 'Lalkuan lies along the Haldwani–Rudrapur rail/road corridor as a major industrial and forestry-processing junction.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which peak overlooking **Naini Lake** from the north at ~**2,611 m** is the **highest peak** in Nainital town’s immediate ring?',
        options: ['Snow View Peak', 'Naina Peak (Cheena Peak)', 'Tiffin Top (Dorothy’s Seat)', 'Hanuman Garhi'],
        correctOptionIndex: 1,
        explanation: 'Naina Peak (Cheena Peak, 2,611 m) towers over Mallital and offers panoramic views of Nanda Devi and Trisul.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **lake** in Nainital’s Chhakhata group is the **largest by surface area** in the Kumaon region (featuring a central island)?',
        options: ['Naini Lake', 'Bhimtal Lake', 'Khurpatal', 'Garud Tal'],
        correctOptionIndex: 1,
        explanation: 'Bhimtal (47.8 hectares, with an aquarium on its central island) exceeds Naini Lake in surface area, while Naukuchiatal is the deepest.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who founded the colonial hill station of **Nainital** after noticing Naini Lake in **November 1841**?',
        options: [
          'Sir Henry Ramsay',
          'Peter Barron (sugar merchant from Shahjahanpur)',
          'G.W. Traill',
          'Edward Gardner',
        ],
        correctOptionIndex: 1,
        explanation: 'Peter Barron (using the pseudonym "Pilgrim") publicised the lake in 1841–1842, turning Nainital into a planned British resort and summer capital of the North-Western Provinces.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Almora District Profile',
    materialTitle: 'Almora District Administrative & Heritage Profile — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Almora Administration, Heritage & Migration',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Almora District Administrative & Heritage Profile

## 1. Administrative Snapshot
- **Division:** Kumaon | **Area:** **3,139 sq km** | **HQ:** **Almora** (situated on the 5-km Kashaya Hill horse-saddle ridge between **Kosi** and **Suyal** rivers).
- **Formation History:** Originally formed as Kumaon district HQ (1815), carved into Almora district (1891); later **Pithoragarh (1960)** and **Bageshwar (1997)** were separated from it.
- **Tehsils:** Almora, Ranikhet, Bhikiyasain, Dwarahat, Chaukhutiya, Someshwar, Sult, Jainti, Bhanoli, Lamgara, Syalde, Danya.
- **Community Development Blocks (11):** Hawalbagh, Takula, Dhauladevi, Lamgara, Bhaisiyachhana, Tarikhet, Dwarahat, Chaukhutiya, Syalde, Bhikiyasain, Sult.
- **Assembly Constituencies (6):** Dwarahat, Salt (Sult), Ranikhet, Someshwar (**SC**), Almora, Jageshwar.

## 2. Demographic Indicators (2011 Census) — Vital Exam Facts!
- **Population:** **6,22,506** | **Decadal Population Growth Rate:** **-1.28%** (**negative growth!** Almora & Pauri Garhwal were Uttarakhand's only two districts with negative growth in 2001–2011 due to hill out-migration).
- **Sex Ratio:** **1,139 females per 1,000 males** (**Rank #1 Highest Sex Ratio in Uttarakhand!**).
- **Literacy:** **80.47%** | **Urbanization:** **10.01%**.

## 3. Archaeology, Temples & Institutions
- **Lakhudiyar (Barechhina on Suyal River):** Prehistoric rock shelter paintings (1968 discovery by M.P. Joshi).
- **Jageshwar Dham:** Cluster of 125+ stone Nagara-style Shiva shrines dating from Katyuri & post-Gupta periods along the Jataganga.
- **Katarmal Sun Temple:** 9th-century Katyuri-era *Bada Aditya* Surya shrine facing eastward over the Kosi valley.
- **Kasar Devi:** **Van Allen Radiation Belt** geomagnetic anomaly site overlooking Almora ridge; visited by Swami Vivekananda, Rabindranath Tagore, and Lama Govinda.
- **Dwarahat:** Ancient Katyuri cultural town ("Temples Town") with **Mrityunjaya, Gujardeo, and Dunagiri** shrines; **Syalde Bikhauti** festival.
- **Premier Institutions:** **G.B. Pant National Institute of Himalayan Environment (NIHE)** at **Kosi–Katarmal**; **Vivekananda Parvatiya Krishi Anusandhan Sansthan (VPKAS)** at Almora (founded by Boshi Sen); **Soban Singh Jeena (SSJ) University** (Almora); **Kumaon Regimental Centre (KRC)** at **Ranikhet**.

## 4. Key Revision Takeaways
- **Sex Ratio 1,139 (#1 in UK)** and **Decadal Growth -1.28%** make Almora the most heavily cited demographic district in UKPSC papers.
- **11 CD Blocks** and **6 Assembly Seats** (*Someshwar SC*).`,
    mcqs: [
      {
        stem: 'According to the **2011 Census**, which district of Uttarakhand recorded the **highest overall Sex Ratio (1,139 females per 1,000 males)** alongside a **negative decadal population growth (-1.28%)**?',
        options: ['Pauri Garhwal', 'Almora', 'Rudraprayag', 'Chamoli'],
        correctOptionIndex: 1,
        explanation: 'Almora tops Uttarakhand’s sex ratio at 1,139 (followed by Rudraprayag 1,114 and Pauri 1,103) and shares negative 2001–2011 growth (-1.28%) only with Pauri Garhwal (-1.41%).',
        difficulty: 'foundation',
      },
      {
        stem: 'Where in **Almora district** is the headquarters of the **G.B. Pant National Institute of Himalayan Environment (NIHE)** located?',
        options: ['Ranikhet', 'Kosi–Katarmal', 'Dwarahat', 'Jageshwar'],
        correctOptionIndex: 1,
        explanation: 'NIHE (established 1988 under MoEFCC) operates its national headquarters at Kosi–Katarmal in Almora district.',
        difficulty: 'standard',
      },
      {
        stem: 'Which two **rivers** flank the **Kashaya Hill saddle ridge** on which historic **Almora town** is built?',
        options: [
          'Saryu and Gomti',
          'Kosi (west) and Suyal (east)',
          'Western Ramganga and Nayar',
          'Gori and Kali',
        ],
        correctOptionIndex: 1,
        explanation: 'Almora sits atop the 5-km Kashaya Hill ridge bordered by Kosi on the west and Suyal (tributary of Kosi) on the east.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Assembly Constituency** in **Almora district** is reserved for **Scheduled Castes (SC)**?',
        options: ['Ranikhet', 'Someshwar', 'Jageshwar', 'Dwarahat'],
        correctOptionIndex: 1,
        explanation: 'Among Almora’s 6 assembly segments (Dwarahat, Salt, Ranikhet, Someshwar, Almora, Jageshwar), Someshwar is SC-reserved.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **ICAR agricultural research institute** at **Almora** (established originally by scientist **Boshi Sen** in 1924 at Kolkata and shifted to Almora in 1936) specializes in hill agriculture?',
        options: [
          'Indian Institute of Soil and Water Conservation',
          'Vivekananda Parvatiya Krishi Anusandhan Sansthan (VPKAS)',
          'Central Soil Salinity Research Institute',
          'National Bureau of Plant Genetic Resources',
        ],
        correctOptionIndex: 1,
        explanation: 'ICAR–VPKAS Almora develops cold-tolerant wheat, finger millet (mandua), barnyard millet (jhangora), and hill polyhouse varieties.',
        difficulty: 'standard',
      },
      {
        stem: 'How many **Community Development Blocks** are in **Almora district**?',
        options: ['6 blocks', '9 blocks', '11 blocks', '15 blocks'],
        correctOptionIndex: 2,
        explanation: 'Almora has 11 CD blocks: Hawalbagh, Takula, Dhauladevi, Lamgara, Bhaisiyachhana, Tarikhet, Dwarahat, Chaukhutiya, Syalde, Bhikiyasain, and Sult.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **military regimental centre** is headquartered at **Ranikhet** in Almora district?',
        options: [
          'Garhwal Rifles Regimental Centre',
          'Kumaon & Naga Regimental Centre (KRC)',
          'Gorkha Training Centre',
          'Sikh Light Infantry Centre',
        ],
        correctOptionIndex: 1,
        explanation: 'Kumaon Regimental Centre shifted from Agra to Ranikhet in 1948, while the Garhwal Rifles centre is at Lansdowne (Pauri Garhwal).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **two districts** were carved out of the original **Almora district** in **1960** and **1997** respectively?',
        options: [
          'Nainital (1960) and Champawat (1997)',
          'Pithoragarh (1960) and Bageshwar (1997)',
          'Udham Singh Nagar (1960) and Champawat (1997)',
          'Chamoli (1960) and Rudraprayag (1997)',
        ],
        correctOptionIndex: 1,
        explanation: 'Pithoragarh was created from Almora in February 1960 as a border district, and Bageshwar was carved from northern Almora in September 1997.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Kumaoni Chand ruler** shifted the capital of the Chand kingdom from **Champawat to Almora** around the **mid-16th century (c. 1560–1563)**?',
        options: ['Somchand', 'Balo Kalyan Chand (initiated by Bhishma Chand)', 'Baz Bahadur Chand', 'Rudra Chand'],
        correctOptionIndex: 1,
        explanation: 'Bhishma Chand began building Khagmara Fort at Almora, and his successor Balo Kalyan Chand completed shifting the Chand capital from Champawat to Almora.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Almora-born leader** earned the title **"Kumaon Kesari"** during the 1921 Coolie Begar agitation and edited *Shakti* after *Almora Akhbar*?',
        options: [
          'Govind Ballabh Pant',
          'Badridutt Pande',
          'Hargovind Pant',
          'Mohan Singh Mehta',
        ],
        correctOptionIndex: 1,
        explanation: 'Badridutt Pande edited Almora Akhbar (banned 1918), launched Shakti, led the 1921 Bageshwar pledge, and authored *Kumaon Ka Itihas*.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **wildlife sanctuary** in Almora district preserves dense oak–rhododendron mid-elevation forests and offers famed Himalayan peak panoramas from **Zero Point**?',
        options: ['Askot Sanctuary', 'Binsar Wildlife Sanctuary', 'Govind Sanctuary', 'Sonanadi Sanctuary'],
        correctOptionIndex: 1,
        explanation: 'Binsar Wildlife Sanctuary (notified 1988, ~45.59 sq km) lies northeast of Almora town along Jhandi Dhar.',
        difficulty: 'foundation',
      },
      {
        stem: 'In which **Almora block** did the **5 September 1942 Quit India firing incident** ("Kumaon’s Bardoli") take place at **Khumad**?',
        options: ['Hawalbagh', 'Salt (Sult / Khumad)', 'Dhauladevi', 'Chaukhutiya'],
        correctOptionIndex: 1,
        explanation: 'Gangaram and Khimdev were martyred on 5 September 1942 at Khumad in Salt (Almora), remembered every year as Shaheed Diwas.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **famous fair** is celebrated every **Baisakhi / Vishuwat Sankranti (April)** at **Dwarahat** in Almora district featuring traditional Jhora-Chanchari folk dances?',
        options: ['Jauljibi Fair', 'Syalde Bikhauti Fair', 'Bagwal Fair', 'Gendi Fair'],
        correctOptionIndex: 1,
        explanation: 'Syalde Bikhauti at Dwarahat draws traditional regional clans ("Syalde" and "Bikhauti" processions) to the Bibhandeshwar/Dwarahat shrines.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **UNESCO / ASI-protected temple group** in eastern Almora district stands inside a serene deodar valley along the **Jataganga** stream?',
        options: ['Baijnath Group', 'Jageshwar Group of Temples', 'Baleshwar Group', 'Patal Bhuvaneshwar'],
        correctOptionIndex: 1,
        explanation: 'Jageshwar Temple Complex (over 124 stone temples including Dandeshwar, Mrityunjaya, and Nava Durga) is protected by ASI as one of the earliest surviving Himalayan stone clusters.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which newly renamed **state university** headquartered at **Almora** serves Kumaon’s hill campuses (Almora, Pithoragarh, Bageshwar, Champawat)?',
        options: [
          'Sri Dev Suman University',
          'Soban Singh Jeena (SSJ) University',
          'Doon University',
          'Hemvati Nandan Bahuguna Central University',
        ],
        correctOptionIndex: 1,
        explanation: 'Soban Singh Jeena University, Almora was established in 2020 carving out Almora, Pithoragarh, Bageshwar, and Champawat hill campuses from Kumaun University.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Pithoragarh District Profile',
    materialTitle: 'Pithoragarh District Administrative & Border Profile — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Pithoragarh Borders, Glaciers, Tribes & Census',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Pithoragarh District Administrative & Border Profile

## 1. Administrative & Strategic Snapshot
- **Division:** Kumaon | **Area:** **7,090 sq km** (Rank #3 largest in Uttarakhand; **#1 largest in Kumaon division!**).
- **Nickname:** **"Mini Kashmir" (Saur Valley)**.
- **Unique Geopolitics:** **Only district in Uttarakhand sharing international borders with BOTH China/Tibet (north) AND Nepal (east)** — giving it the **longest international boundary (~492+ km combined)** in the state!
- **Creation:** Carved out of Almora on **24 February 1960**; **Champawat** was separated from it on **15 September 1997**.
- **Community Development Blocks (8):** Munakot, Pithoragarh (Bin), Kanalichhina, Didihat, Berinag, Gangolihat, Dharchula, Munsiyari.
- **Assembly Constituencies (4):** Dharchula, Didihat, Pithoragarh, Gangolihat (**SC**).

## 2. Demographic Indicators (2011 Census)
- **Population:** **4,83,439** | **Population Density:** **68 persons/sq km** (3rd lowest after Uttarkashi & Chamoli).
- **Literacy Rate:** **82.25%** (#3 overall in UK) | **Sex Ratio:** **1,020**.
- **Tribal Diversity:** Highest tribal variety in Kumaon hills — **Bhotiya (Shauka/Byansi/Johari)** in Darma, Byans, Chaudans & Johar valleys, AND **Raji (Banrawat)** — Uttarakhand's smallest Particularly Vulnerable Tribal Group (PVTG) concentrated in **Didihat–Kanalichhina–Dharchula**!

## 3. Physiography, Passes, Glaciers & Sanctuaries
- **Rivers:** **Kali (Sharda)** forming the Indo–Nepal border, **Kuti Yankti**, **Eastern Dhauli**, **Goriganga** (Milam glacier), **Eastern Ramganga**, **Saryu** (confluence at Rameshwar Ghat).
- **Glaciers & Peaks:** **Milam Glacier** (largest Kumaon glacier, 16 km), **Ralam**, **Namik**, **Kalabaland**; **Panchachuli (6,904 m)**, **Nanda Kot**, **Adi Kailash (Chhota Kailash)** & **Om Parvat** in Vyas valley.
- **Passes:** **Lipulekh Pass** (Indo–Nepal–Tibet tri-junction; Kailash Mansarovar route via Dharchula–Gunji), **Darwa / Darma Pass**, **Kungri-Bingri**, **Unta Dhura**, **Traill’s Pass** (Pindari–Milam link).
- **Heritage & Ecology:** **Askot Musk Deer Wildlife Sanctuary** (599.93 sq km), **Patal Bhuvaneshwar** limestone cavern (Gangolihat), **Narayan Ashram**, **Dhwaj Temple**, **Haat Kalika**, **Jauljibi Fair** (Kali–Gori confluence), **Naini Saini Airport**.

## 4. Key Revision Takeaways
- **Largest district in Kumaon (7,090 sq km)** and **only district touching both China & Nepal**.
- **Raji (PVTG)** and **Shauka/Bhotiya** valleys (**Johar, Darma, Byans, Chaudans**) are signature exam topics.`,
    mcqs: [
      {
        stem: 'Which distinction makes **Pithoragarh district** geopolitically unique among all 13 districts of Uttarakhand?',
        options: [
          'It touches Himachal Pradesh and Uttar Pradesh',
          'It is the only district sharing international borders with BOTH China (Tibet) and Nepal',
          'It has no river basin',
          'It borders Haryana',
        ],
        correctOptionIndex: 1,
        explanation: 'Pithoragarh borders Tibet (China) to the north via high passes like Lipulekh and Unta Dhura, and Nepal to the east across the Kali River.',
        difficulty: 'foundation',
      },
      {
        stem: 'Among all 6 districts of **Kumaon division**, which district covers the **largest geographical area (7,090 sq km)**?',
        options: ['Nainital', 'Pithoragarh', 'Almora', 'Udham Singh Nagar'],
        correctOptionIndex: 1,
        explanation: 'Pithoragarh (7,090 sq km) is the largest district in Kumaon and 3rd largest in Uttarakhand (behind Chamoli 8,030 and Uttarkashi 8,016 sq km).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Particularly Vulnerable Tribal Group (PVTG)** — also the **smallest Scheduled Tribe by population in Uttarakhand** — lives chiefly in forests of **Didihat, Kanalichhina, and Dharchula (Pithoragarh)**?',
        options: ['Tharu', 'Raji (Banrawat)', 'Bhoxa', 'Jaunsari'],
        correctOptionIndex: 1,
        explanation: 'The Rajis (traditionally hunter-gatherers known for wooden craft and silent barter history) live mainly in Pithoragarh villages (Kimkhola, Madanpuri, Jamtadi, Chaurani) and Champawat.',
        difficulty: 'foundation',
      },
      {
        stem: 'How many **Community Development Blocks** are located in **Pithoragarh district**?',
        options: ['4 blocks', '6 blocks', '8 blocks', '12 blocks'],
        correctOptionIndex: 2,
        explanation: 'Pithoragarh comprises 8 CD blocks: Pithoragarh (Bin), Munakot, Kanalichhina, Didihat, Berinag, Gangolihat, Dharchula, and Munsiyari.',
        difficulty: 'standard',
      },
      {
        stem: 'Which of Pithoragarh district’s **4 Vidhan Sabha constituencies** is reserved for **Scheduled Castes (SC)**?',
        options: ['Dharchula', 'Didihat', 'Gangolihat', 'Pithoragarh'],
        correctOptionIndex: 2,
        explanation: 'Gangolihat is the SC-reserved assembly seat among Pithoragarh’s 4 segments (Dharchula, Didihat, Pithoragarh, Gangolihat).',
        difficulty: 'standard',
      },
      {
        stem: 'At the confluence of which **two rivers** in **Pithoragarh district** is the famous annual **Jauljibi Trade Fair** held every **November** (initiated in 1914 by Gajendra Bahadur Pal)?',
        options: [
          'Saryu and Gomti',
          'Kali and Goriganga',
          'Eastern Ramganga and Saryu',
          'Dhauli and Kuti Yankti',
        ],
        correctOptionIndex: 1,
        explanation: 'Jauljibi sits at the confluence of the Kali and Goriganga rivers on the Indo–Nepal frontier, linking Shauka, Kumaoni, and Dotiyali traders.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **two sacred peaks** — closely associated with the Indian-side **Adi Kailash pilgrimage** via Dharchula & Gunji — are located in **Vyas Valley (Pithoragarh)**?',
        options: [
          'Trisul and Kamet',
          'Adi Kailash (Jolingkong) and Om Parvat',
          'Chaukhamba and Kedarnath Dome',
          'Bandarpunch and Swargarohini',
        ],
        correctOptionIndex: 1,
        explanation: 'Both Om Parvat (Nabhidhang, featuring a natural snow-formed "Om") and Adi Kailash near Jolingkong lake lie inside Dharchula tehsil of Pithoragarh.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **glacier** in the **Johar Valley (Munsiyari tehsil)** is the **largest glacier in Kumaon** (~16 km long) and the source of the **Goriganga River**?',
        options: ['Pindari Glacier', 'Milam Glacier', 'Kafni Glacier', 'Sunderdhunga Glacier'],
        correctOptionIndex: 1,
        explanation: 'Milam Glacier rises near Kohinoor/Hardol peaks in Johar (Munsiyari, Pithoragarh) and feeds the Goriganga; Pindari lies largely in Bageshwar.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which famous **karst (limestone) cave shrine** dedicated to Lord Shiva and 33 crore deities lies near **Gangolihat** in Pithoragarh district?',
        options: ['Jageshwar Cave', 'Patal Bhuvaneshwar', 'Tapkeshwar Cave', 'Vashishtha Gufa'],
        correctOptionIndex: 1,
        explanation: 'Patal Bhuvaneshwar (Gangolihat, Pithoragarh) is an intricate ~160-metre deep limestone cavern system rich in stalactite/stalagmite formations.',
        difficulty: 'foundation',
      },
      {
        stem: 'In which **two neighbouring valleys** of Pithoragarh do the **Darma, Vyas (Byans), and Chaudans Bhotiya (Rung)** subgroups traditionally reside?',
        options: [
          'Niti and Mana valleys',
          'Darma and Kali (Byans/Chaudans) valleys in Dharchula subdivision',
          'Nelang and Jadung valleys',
          'Tons and Yamuna valleys',
        ],
        correctOptionIndex: 1,
        explanation: 'While Johari Bhotiyas inhabit Munsiyari (Goriganga), the Rung/Byansi/Darmiya/Chaudansi communities inhabit Dharchula’s Darma, Byans, and Chaudans valleys.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Wildlife Sanctuary** in Pithoragarh district was specifically notified in **1986** to protect the **Himalayan Musk Deer** (*Moschus chrysogaster*)?',
        options: [
          'Binsar Sanctuary',
          'Askot Wildlife Sanctuary',
          'Nandhaur Sanctuary',
          'Sonanadi Sanctuary',
        ],
        correctOptionIndex: 1,
        explanation: 'Askot Musk Deer Sanctuary (~600 sq km spanning from 600 m up to ~6,900 m peaks) protects the musk deer, snow leopard, and monal.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who founded the **Narayan Ashram** (1936) in **Chaudans Valley (Dharchula, Pithoragarh)** as a spiritual and tribal welfare centre along the Kailash route?',
        options: [
          'Swami Vivekananda',
          'Narayan Swami',
          'Sri Aurobindo',
          'Sundarlal Bahuguna',
        ],
        correctOptionIndex: 1,
        explanation: 'Narayan Swami established Narayan Ashram at ~2,734 m altitude in 1936 near Sosa village.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **domestic airport / airstrip** serves **Pithoragarh** in the Saur Valley?',
        options: ['Gauchar Airport', 'Naini Saini Airport', 'Chinyalisaur Airport', 'Pantnagar Airport'],
        correctOptionIndex: 1,
        explanation: 'Naini Saini Airport (built 1991) connects Pithoragarh under UDAN regional air connectivity.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Pithoragarh hill station** situated in **Berinag / Chaukori** became famous during British rule for **Kumaon tea gardens**?',
        options: ['Lohaghat', 'Berinag and Chaukori', 'Didihat', 'Munsiyari'],
        correctOptionIndex: 1,
        explanation: 'Berinag and Chaukori estates in western Pithoragarh have produced organic Himalayan tea since the 19th century.',
        difficulty: 'standard',
      },
      {
        stem: 'In which **year** was **Pithoragarh district** carved out of **Almora** as a strategic frontier district?',
        options: ['1947', '1960 (24 February)', '1972', '1997'],
        correctOptionIndex: 1,
        explanation: 'Pithoragarh (alongside Chamoli and Uttarkashi) was created on 24 February 1960 to strengthen northern Himalayan border administration.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Udham Singh Nagar District Profile',
    materialTitle: 'Udham Singh Nagar District Administrative & Economic Profile — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Udham Singh Nagar Terai Economy, Tribes & Census',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Udham Singh Nagar District Administrative & Economic Profile

## 1. Administrative Snapshot
- **Division:** Kumaon | **Area:** **2,542 sq km** | **HQ:** **Rudrapur**.
- **Formation:** Carved out of Nainital district in **October 1995**; named after martyr **Shaheed Udham Singh**.
- **Geographical Identity:** Entirely **Terai plain** ("Food Bowl / Rice Bowl of Uttarakhand") bordering **Uttar Pradesh** (Rampur, Moradabad, Bareilly, Pilibhit, Bijnor) AND touching **Nepal** on its easternmost Khatima flank!
- **Community Development Blocks (7):** Rudrapur, Gadarpur, Bazpur, Kashipur, Jaspur, Sitarganj, Khatima.
- **Assembly Constituencies (9):** Jaspur, Kashipur, Bajpur (**SC**), Gadarpur, Rudrapur, Kichha, Sitarganj, Nanakmatta (**ST**), Khatima.

## 2. Demographic & Economic Indicators (2011 Census) — High-Yield!
- **Population:** **16,48,902** (**Rank #3** in UK) | **Decadal Growth:** **33.45%** (**Rank #1 Highest in Uttarakhand!**).
- **Literacy:** **73.10%** (**Lowest Overall Literacy in Uttarakhand!**).
- **Scheduled Tribe Hub:** **#1 Highest ST Population in Uttarakhand** — **Tharu** (Khatima, Sitarganj, Nanakmatta) and **Bhoxa/Buksa** (Bazpur, Gadarpur, Kashipur)!
- **Urbanization:** ~**35.58%**.

## 3. Agriculture, Industry & Heritage
- **Pantnagar (GBPUAT):** **Govind Ballabh Pant University of Agriculture & Technology** (established **17 November 1960** — India's **First Agricultural University**, birthplace of India's Green Revolution; adjacent **Pantnagar Airport**).
- **SIIDCUL Industrial Corridors:** **IIE Pantnagar (Rudrapur)** — Tata Motors, Ashok Leyland, Bajaj Auto, Britannia, Nestle; **Sitarganj IIE & Eldeco Park**; **Kashipur Textile/Paper cluster**; **IIIM Kashipur** (IIM Kashipur!).
- **Sacred & Historical Sites:** **Nanakmatta Sahib** (Gurdwara & Nanak Sagar Dam visited by Guru Nanak Dev Ji), **Drona Sagar & Govishana** (ancient mound at Kashipur visited by Xuanzang), **Chaiti Devi Temple (Kashipur)**, **Atariya Mata (Rudrapur)**.

## 4. Key Revision Takeaways
- **#1 in Decadal Growth (33.45%)**, **#1 in ST Population (Tharu & Bhoxa)**, **Lowest Overall Literacy (73.10%)** in 2011 Census.
- **India's First Agricultural University (GBPUAT, 1960)** and **IIM Kashipur** anchor its knowledge economy.`,
    mcqs: [
      {
        stem: 'Carved out of Nainital in October 1995 and serving as Uttarakhand’s fertile **Terai rice bowl**, which district led the state in **2001–2011 decadal population growth (33.45%)** while recording the **lowest 2011 literacy (73.10%)**?',
        options: ['Haridwar', 'Udham Singh Nagar', 'Dehradun', 'Champawat'],
        correctOptionIndex: 1,
        explanation: 'Udham Singh Nagar topped decadal growth at 33.45% (just ahead of Dehradun 32.33% and Haridwar 30.63%) while posting the lowest literacy (73.10%).',
        difficulty: 'foundation',
      },
      {
        stem: 'On which date was **India’s first Agricultural University — Govind Ballabh Pant University of Agriculture and Technology (GBPUAT)** — inaugurated at **Pantnagar**?',
        options: [
          '15 August 1952',
          '17 November 1960 (by PM Jawaharlal Nehru)',
          '2 October 1965',
          '9 November 2000',
        ],
        correctOptionIndex: 1,
        explanation: 'Patterned on the US Land-Grant system (originally UP Agricultural University), GBPUAT Pantnagar opened on 17 November 1960 and catalyzed India’s Green Revolution.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **district of Uttarakhand** has the **largest Scheduled Tribe (ST) population** in the state, primarily comprising **Tharu** and **Bhoxa** communities?',
        options: ['Dehradun', 'Udham Singh Nagar', 'Pithoragarh', 'Chamoli'],
        correctOptionIndex: 1,
        explanation: 'Udham Singh Nagar holds over 42% of Uttarakhand’s ST population (Tharus in Khatima–Sitarganj–Nanakmatta; Bhoxas in Bazpur–Gadarpur–Kashipur), followed by Dehradun (Jaunsaris).',
        difficulty: 'foundation',
      },
      {
        stem: 'In Udham Singh Nagar’s **9 Vidhan Sabha constituencies**, which seat is reserved for **Scheduled Tribes (ST)** and which for **Scheduled Castes (SC)**?',
        options: [
          'Khatima (ST) and Kashipur (SC)',
          'Nanakmatta (ST) and Bajpur (SC)',
          'Sitarganj (ST) and Rudrapur (SC)',
          'Gadarpur (ST) and Kichha (SC)',
        ],
        correctOptionIndex: 1,
        explanation: 'Nanakmatta (Udham Singh Nagar) and Chakrata (Dehradun) are Uttarakhand’s only two ST-reserved Vidhan Sabha seats; Bajpur is SC-reserved.',
        difficulty: 'standard',
      },
      {
        stem: 'How many **Community Development Blocks** make up **Udham Singh Nagar district**?',
        options: ['5 blocks', '7 blocks (Rudrapur, Gadarpur, Bazpur, Kashipur, Jaspur, Sitarganj, Khatima)', '9 blocks', '11 blocks'],
        correctOptionIndex: 1,
        explanation: 'The 7 CD blocks spanning US Nagar’s Terai belt are Khatima, Sitarganj, Rudrapur, Gadarpur, Bazpur, Kashipur, and Jaspur.',
        difficulty: 'standard',
      },
      {
        stem: 'From which **parent district** was **Udham Singh Nagar** carved out in **October 1995**?',
        options: ['Almora', 'Nainital', 'Haridwar', 'Champawat'],
        correctOptionIndex: 1,
        explanation: 'The Terai plains portion of Nainital district was separated in October 1995 to create Udham Singh Nagar with Rudrapur as HQ.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **ancient city mound** near **Kashipur** was visited by Chinese traveller **Xuanzang (Hiuen Tsang)** in the 7th century CE under the name **Govishana**?',
        options: ['Atariya', 'Govishana (Drona Sagar / Ujjain fort site, Kashipur)', 'Nanakmatta', 'Kichha'],
        correctOptionIndex: 1,
        explanation: 'Kashipur’s ancient mound Govishana preserves Kushana, Gupta, and early medieval brick fortifications alongside the Drona Sagar tank.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **premier management institute (IIM)** of Uttarakhand is located inside **Udham Singh Nagar district**?',
        options: ['IIM Rudrapur', 'IIM Kashipur', 'IIM Pantnagar', 'IIM Haldwani'],
        correctOptionIndex: 1,
        explanation: 'Indian Institute of Management (IIM) Kashipur was established in 2011 in Kundeshwari/Kashipur.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which famous **Sikh shrine** and adjoining **reservoir (Nanak Sagar)** on the **Deoha / Saryu-Terai drainage** lies in eastern Udham Singh Nagar?',
        options: ['Hemkund Sahib', 'Gurdwara Sri Nanakmatta Sahib', 'Reetha Meetha Sahib', 'Paonta Sahib'],
        correctOptionIndex: 1,
        explanation: 'Sri Nanakmatta Sahib (formerly Siddhmata, transformed after Guru Nanak Dev Ji’s visit in the 16th century) sits near Khatima–Sitarganj.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **two SIIDCUL Integrated Industrial Estates (IIE)** inside Udham Singh Nagar turned the district into Uttarakhand’s **automobile, FMCG, and agricultural-machinery hub**?',
        options: [
          'Selaqui and Herbertpur',
          'Pantnagar (Rudrapur) and Sitarganj',
          'Kotdwar and Srinagar',
          'Bhimtal and Almora',
        ],
        correctOptionIndex: 1,
        explanation: 'IIE Pantnagar and IIE Sitarganj (alongside Kashipur Industrial Area) account for massive industrial output alongside Haridwar SIIDCUL.',
        difficulty: 'foundation',
      },
      {
        stem: 'In **Udham Singh Nagar**, where is the famous annual **Chaiti Mela (Bala Sundari Devi Fair)** held during Chaitra Navratri?',
        options: ['Rudrapur', 'Kashipur', 'Khatima', 'Sitarganj'],
        correctOptionIndex: 1,
        explanation: 'The Chaiti Fair at Maa Bala Sundari (Chaiti Devi) temple in Kashipur is among the oldest cultural fairs of the Terai.',
        difficulty: 'foundation',
      },
      {
        stem: 'With which **neighbouring country** does the eastern **Khatima** edge of Udham Singh Nagar share a brief **international border** (alongside 5 UP districts on the south/west)?',
        options: ['China (Tibet)', 'Nepal', 'Bhutan', 'Bangladesh'],
        correctOptionIndex: 1,
        explanation: 'Udham Singh Nagar’s eastern Khatima edge touches Nepal (Kanchanpur), making it one of the 3 Kumaon districts touching Nepal (Pithoragarh, Champawat, US Nagar).',
        difficulty: 'standard',
      },
      {
        stem: 'Which **20th-century freedom fighter** born in Sunam (Punjab), who avenged the Jallianwala Bagh massacre in London (1940), gives **Udham Singh Nagar** its name?',
        options: ['Bhagat Singh', 'Shaheed Udham Singh', 'Kartar Singh Sarabha', 'Madan Lal Dhingra'],
        correctOptionIndex: 1,
        explanation: 'Named in honour of Shaheed Udham Singh (1899–1940), the district acknowledges both freedom-fighter heritage and the Terai’s post-Partition settler communities.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why is **Udham Singh Nagar** consistently titled the **"Rice Bowl / Granary of Uttarakhand"**?',
        options: [
          'Due to terraced hill orchards',
          'Due to flat, fertile Terai alluvial soils, high water table, canal/tubewell irrigation, and Pantnagar HYV crop research',
          'Because it has maximum forest area',
          'Because of alpine Bugyals',
        ],
        correctOptionIndex: 1,
        explanation: 'The marshy Terai reclaimed after Independence yields massive rice, wheat, and sugarcane harvests, supplying the bulk of state foodgrain surplus.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **historical tragedy** occurred on **1 September 1994** in **Khatima** (now in Udham Singh Nagar) during the Uttarakhand statehood movement?',
        options: [
          'Tiladi Firing',
          'Khatima Firing on statehood protesters (1 September 1994)',
          'Coolie Begar Pledge',
          'Chipko Stand',
        ],
        correctOptionIndex: 1,
        explanation: 'Police firing at Khatima on 1 September 1994 (followed by Mussoorie on 2 Sept and Rampur Tiraha on 2 Oct) catalyzed the mass statehood agitation.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Bageshwar District Profile',
    materialTitle: 'Bageshwar District Administrative & Heritage Profile — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Bageshwar Tehsils, Glaciers, Census & Uttarayani',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Bageshwar District Administrative & Heritage Profile

## 1. Administrative Snapshot
- **Division:** Kumaon | **Area:** **2,246 sq km** (3rd smallest in UK) | **HQ:** **Bageshwar**.
- **Formation:** Carved out of northern Almora on **15 September 1997** (officially inaugurated 18 September 1997).
- **Unique Geography:** **Landlocked interior Himalayan district** (touches NO international border and NO other Indian state — bordered solely by Chamoli, Pithoragarh, and Almora!).
- **Tehsils (4/6):** Bageshwar, Garur, Kapkot, Kanda, Dugnakuri, Kafaligair.
- **Community Development Blocks (3):** **Bageshwar, Garur, Kapkot** (smallest block count alongside Rudraprayag's 3 blocks!).
- **Assembly Constituencies (2 — lowest alongside Rudraprayag & Champawat):** **Kapkot** and **Bageshwar (SC)**.

## 2. Demographic Indicators (2011 Census) — Very High Yield!
- **Population:** **2,59,898** (3rd lowest in UK after Rudraprayag & Champawat).
- **Urbanization:** **3.49%** (**Rank #13 — Least Urbanized District in Uttarakhand!** ~96.5% rural).
- **Sex Ratio:** **1,090** (#4 highest in UK) | **Literacy:** **80.01%**.

## 3. Rivers, Glaciers, Minerals & Heritage
- **Sacred Confluence:** **Saryu + Gomti** meet at **Bageshwar (Baghnath Temple)**, flanked by **Nileshwar** and **Bhileshwar** hills and **Agni Kund**.
- **Glaciers (Kapkot Subdivision):** **Pindari Glacier** (30 km trek source of Pindar river flowing to Karnaprayag!), **Kafni Glacier**, **Sunderdhunga** (Maiktoli/Tharkot), **Mrigthuni**, **Nanda Khat**.
- **Baijnath (Katyur Valley):** 12th-century stone temple complex built along the **Gomti River**; capital of the later **Katyuri rulers of Kartikeyapura/Baijnath**.
- **Mineral Wealth:** Leading producer of **Soapstone / Steatite (Talc)** and **Magnesite** (Jhiroli, Kanda-Kapkot belt).
- **Events:** **Uttarayani Fair (Makar Sankranti, January)** — famously where **Badridutt Pande & Kumaon Parishad (13–14 Jan 1921)** immersed the Coolie Begar registers in the Saryu!

## 4. Key Revision Takeaways
- **Least Urbanized District in UK (3.49% urban, 2011)**, **3 CD Blocks** (*Bageshwar, Garur, Kapkot*), and **2 Assembly Seats** (*Kapkot, Bageshwar SC*).
- **Pindari Glacier**, **Baijnath Temple**, **Soapstone/Magnesite**, and **1921 Coolie Begar End** are top-tested facts.`,
    mcqs: [
      {
        stem: 'According to the **2011 Census**, which district of Uttarakhand has the **lowest urbanization percentage (~3.49% urban, ~96.51% rural)**?',
        options: ['Rudraprayag', 'Bageshwar', 'Champawat', 'Uttarkashi'],
        correctOptionIndex: 1,
        explanation: 'Bageshwar (3.49% urban) is Uttarakhand’s least urbanized district, followed closely by Rudraprayag (4.10%).',
        difficulty: 'foundation',
      },
      {
        stem: 'How many **Community Development Blocks** and **Vidhan Sabha seats** comprise **Bageshwar district**?',
        options: [
          '5 blocks and 3 seats',
          '3 blocks (Bageshwar, Garur, Kapkot) and 2 seats (Kapkot and Bageshwar-SC)',
          '4 blocks and 4 seats',
          '6 blocks and 2 seats',
        ],
        correctOptionIndex: 1,
        explanation: 'Bageshwar shares with Rudraprayag the smallest block tally (3) and shares with Rudraprayag and Champawat the smallest Vidhan Sabha seat count (2).',
        difficulty: 'standard',
      },
      {
        stem: 'On the banks of which **river** at **Bageshwar** was the **Coolie Begar (forced unpaid labour) movement** famously declared dead by immersing official registers on **13–14 January 1921**?',
        options: ['Ganga', 'Saryu (at Saryu–Gomti confluence during Uttarayani Fair)', 'Kosi', 'Eastern Ramganga'],
        correctOptionIndex: 1,
        explanation: 'Led by Badridutt Pande, Hargovind Pant, and Chiranjilal Shah at the Uttarayani Fair, villagers pledged to abolish Coolie Begar and threw the patwari registers into the Saryu.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **three celebrated trekking glaciers** lie in the **Kapkot subdivision** of northern Bageshwar district?',
        options: [
          'Gangotri, Yamunotri, Chorabari',
          'Pindari, Kafni, and Sunderdhunga glaciers',
          'Milam, Ralam, Namik',
          'Satopanth, Bhagirath Kharak, Tipra',
        ],
        correctOptionIndex: 1,
        explanation: 'Pindari, Kafni, and Sunderdhunga radiate around the Nanda Devi massif’s southern slopes in Kapkot tehsil of Bageshwar.',
        difficulty: 'foundation',
      },
      {
        stem: 'Along which **river valley** in Garur tehsil of Bageshwar district does the historic **12th-century Baijnath Temple Complex** stand?',
        options: ['Kosi Valley', 'Gomti River (Katyur Valley)', 'Nayar Valley', 'Kali Valley'],
        correctOptionIndex: 1,
        explanation: 'Baijnath (ancient Vaidyanath) on the Gomti River served as the Katyuri winter/valley capital in the Katyur Valley.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **non-metallic mineral** (used in paper, cosmetics, ceramics, and talcum industries) is extracted heavily around **Kanda and Kapkot** in **Bageshwar district**?',
        options: ['Gold', 'Soapstone (Steatite / Talc) and Magnesite (Jhiroli)', 'Coal', 'Bauxite'],
        correctOptionIndex: 1,
        explanation: 'Bageshwar ranks among Uttarakhand’s foremost districts for soapstone/talc (Kanda–Dugnakuri) and crystalline magnesite (Jhiroli).',
        difficulty: 'standard',
      },
      {
        stem: 'Which **two hills** flank Bageshwar’s sacred **Baghnath Temple** at the **Saryu–Gomti sangam** (alongside Agni Kund and Surya Kund)?',
        options: [
          'Naina and Ayarpatha',
          'Nileshwar (east) and Bhileshwar (west)',
          'Chandrashila and Tungnath',
          'Neelkanth and Mansa Devi',
        ],
        correctOptionIndex: 1,
        explanation: 'Bageshwar sits in a warm valley bowl tucked between Nileshwar hill to the east and Bhileshwar hill to the west.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **three districts** border **Bageshwar**, making it a completely **landlocked interior district**?',
        options: [
          'Nainital, Udham Singh Nagar, Champawat',
          'Chamoli, Pithoragarh, and Almora',
          'Rudraprayag, Tehri, Pauri',
          'Dehradun, Haridwar, Nainital',
        ],
        correctOptionIndex: 1,
        explanation: 'Bageshwar (like Almora, Rudraprayag, and Tehri) is one of Uttarakhand’s 4 totally interior districts touching neither Tibet/Nepal nor UP/HP.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **famous hill temple** on a scenic ridge in Bageshwar district near **Garur / Kausani border** was built by Katyuri / Chand rulers and houses ancient metal inscriptions?',
        options: ['Mansa Devi', 'Kot Bhramari (Kotyura Mai)', 'Surkanda Devi', 'Kunjapuri'],
        correctOptionIndex: 1,
        explanation: 'Kot Bhramari at Dangoli near Baijnath in the Katyur valley is the revered patron goddess shrine of the Katyuri rulers.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which **scenic ridge town** famous for panoramic **Nanda Devi, Trisul, and Panchachuli** views (and Gandhi’s *Anashakti Ashram* where he penned *Anasakti Yoga* in 1929) sits right on the **Bageshwar–Almora** boundary?',
        options: ['Mukteshwar', 'Kausani', 'Lansdowne', 'Chakrata'],
        correctOptionIndex: 1,
        explanation: 'Mahatma Gandhi spent two weeks at Kausani in June 1929, admiring it as the "Switzerland of India" while writing his commentary on the Gita.',
        difficulty: 'foundation',
      },
      {
        stem: 'When was **Bageshwar** officially carved out of **Almora** as an independent district?',
        options: ['24 February 1960', 'September 1997', '9 November 2000', '15 August 1975'],
        correctOptionIndex: 1,
        explanation: 'In September 1997, three new Uttarakhand hill districts were notified together: Rudraprayag, Champawat, and Bageshwar.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **high-altitude mountain trail / pass** (~5,312 m) linking the **Pindari Glacier (Bageshwar)** directly across to the **Milam / Martoli Valley (Pithoragarh)** was first crossed by Commissioner **G.W. Traill in 1830**?',
        options: ['Mana Pass', 'Traill’s Pass', 'Kuari Pass', 'Auden’s Col'],
        correctOptionIndex: 1,
        explanation: 'Traill’s Pass sits between Nanda Devi East and Nanda Kot, connecting the Pindar (Bageshwar) and Gori (Pithoragarh) basins.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Bageshwar Assembly Constituency** is reserved for **Scheduled Castes (SC)**?',
        options: ['Kapkot', 'Bageshwar', 'Garur', 'Kanda'],
        correctOptionIndex: 1,
        explanation: 'Bageshwar district has two Vidhan Sabha seats: Kapkot (General) and Bageshwar (SC-reserved).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which prominent **Puranic/ancient name** is associated with **Bageshwar** (believed to be the penance seat of Sage Markandeya visited by Lord Shiva as a tiger — *Vyaghreshwar*)?',
        options: ['Brahmapura', 'Vyaghreshwar / Agni Tirtha', 'Mayapuri', 'Kubjamraka'],
        correctOptionIndex: 1,
        explanation: 'Vyaghreshwar ("Lord of the Tiger") evolved linguistically into Bagheshwar/Bageshwar, venerated as Agni Tirtha.',
        difficulty: 'foundation',
      },
      {
        stem: 'In which **Lok Sabha parliamentary constituency** does **Bageshwar district** fall?',
        options: ['Nainital–Udham Singh Nagar', 'Almora (SC-reserved Lok Sabha seat)', 'Garhwal', 'Haridwar'],
        correctOptionIndex: 1,
        explanation: 'Almora (SC) Lok Sabha constituency comprises the 14 assembly seats across Almora, Bageshwar, Pithoragarh, and Champawat districts.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Champawat District Profile',
    materialTitle: 'Champawat District Administrative & Heritage Profile — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Champawat Early Chand Capital, Heritage & Census',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Champawat District Administrative & Heritage Profile

## 1. Administrative Snapshot
- **Division:** Kumaon | **Area:** **1,766 sq km** (**Rank #13 — Smallest District by Area in Uttarakhand!**).
- **HQ:** **Champawat** | **Formation:** Separated from **Pithoragarh on 15 September 1997**.
- **International Frontier:** Shares eastern border with **Nepal** across the **Kali (Sharda) River** (**Tanakpur–Banbasa** barrage gateway).
- **Tehsils:** Champawat, Lohaghat, Pati, Barakot, Purnagiri (Tanakpur).
- **Community Development Blocks (4):** **Champawat, Lohaghat, Pati, Barakot**.
- **Assembly Constituencies (2):** **Lohaghat** and **Champawat** (both General; 0 reserved).

## 2. Demographic Highlights (2011 Census)
- **Population:** **2,59,648** (**2nd Lowest Population in UK** after Rudraprayag's 2,42,285).
- **Sex Ratio:** **980** | **Literacy:** **79.83%** | **Urbanization:** **14.77%**.

## 3. Chand Heritage, Spiritual Sites & Tourism
- **Seat of Early Chand Dynasty:** Founded by **Somchand** (Rajbunga Fort at Champawat) in the medieval era; remained the Chand capital until **Balo Kalyan Chand** shifted the capital to **Almora (~1563 CE)**.
- **Baleshwar Temple Complex:** Finest example of 10th–12th century Chand/Katyuri stone carving in Kumaon (**Nagnath, Ek Hathiya Ka Naula**, **Krantishwar** nearby).
- **Devidhura (Varahi Devi Temple):** Hosts the famous **Bagwal (Stone/Fruit-throwing Ashadhi Kautik)** festival on **Raksha Bandhan**!
- **Maa Purnagiri Temple:** Major Shakti Peeth above **Tanakpur** overlooking the Kali River gorge.
- **Advaita Ashram (Mayawati):** Founded near **Lohaghat** in **1899** under the inspiration of **Swami Vivekananda** (publishes *Prabuddha Bharata*).
- **Abbott Mount:** Heritage European hill hamlet near Lohaghat; **Pancheshwar** (Kali–Saryu confluence sacred site & proposed multipurpose project); **Shyamlatal** & **Jhilmil Tal**; **Reetha Meetha Sahib** (Pati block, Sikh pilgrimage at **Ladhiya–Ratiya** confluence).

## 4. Key Revision Takeaways
- **Smallest District by Area (1,766 sq km)** and **2nd Lowest Population (2,59,648)**.
- **Rajbunga Fort**, **Baleshwar Temple**, **Devidhura Bagwal**, **Mayawati Ashram**, and **Reetha Meetha Sahib** are classic Champawat questions.`,
    mcqs: [
      {
        stem: 'Which distinction does **Champawat district** hold in **area** among all **13 districts of Uttarakhand**?',
        options: [
          '3rd smallest',
          '1st smallest district by area in Uttarakhand (~1,766 sq km)',
          '7th by area',
          'Largest in Kumaon',
        ],
        correctOptionIndex: 1,
        explanation: 'Champawat (1,766 sq km) is Uttarakhand’s smallest district geographically, followed by Rudraprayag (1,984 sq km) and Bageshwar (2,246 sq km).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which historic **monastery / ashram** near **Lohaghat (Champawat)** was founded in **March 1899** by **Swami Swarupananda** and Captain Sevier under **Swami Vivekananda’s** inspiration?',
        options: [
          'Anashakti Ashram',
          'Advaita Ashram (Mayawati)',
          'Narayan Ashram',
          'Parmarth Niketan',
        ],
        correctOptionIndex: 1,
        explanation: 'Swami Vivekananda visited Mayawati Advaita Ashram in January 1901; the ashram continues publishing Ramakrishna Mission’s English journal *Prabuddha Bharata*.',
        difficulty: 'foundation',
      },
      {
        stem: 'At which temple in **Champawat district (Pati/Lohaghat belt)** is the famous **Bagwal festival** celebrated on **Raksha Bandhan (Shravana Purnima)**?',
        options: [
          'Baleshwar Temple',
          'Maa Varahi Devi Temple, Devidhura',
          'Purnagiri Temple',
          'Golu Devta Temple, Ghorakhal',
        ],
        correctOptionIndex: 1,
        explanation: 'At Devidhura’s Varahi Devi temple, four Kham clans (*Chamyal, Gaharwal, Lamgadiya, Walik*) participate in Bagwal (now observed symbolically with fruits/flowers).',
        difficulty: 'foundation',
      },
      {
        stem: 'Before the **Chand dynasty** shifted its capital to **Almora**, which **Champawat fortification** served as **Somchand’s** original royal seat?',
        options: ['Khagmara Fort', 'Rajbunga Fort', 'Malla Mahal', 'Sira Kot'],
        correctOptionIndex: 1,
        explanation: 'Somchand built Rajbunga Fort in Champawat (ancient Champa Nagar), from which early Chand rulers consolidated Kali Kumaon.',
        difficulty: 'foundation',
      },
      {
        stem: 'At the confluence of which **two streams** in **Pati block (Champawat)** is the revered Sikh pilgrimage **Gurdwara Sri Reetha Meetha Sahib** situated?',
        options: [
          'Saryu and Gomti',
          'Ladhiya and Ratiya streams',
          'Kosi and Suyal',
          'Kali and Gori',
        ],
        correctOptionIndex: 1,
        explanation: 'Reetha Meetha Sahib stands beside the Ladhiya–Ratiya confluence where Guru Nanak Dev Ji turned bitter soapnut (reetha) fruits sweet.',
        difficulty: 'standard',
      },
      {
        stem: 'How many **Community Development Blocks** and **Assembly Constituencies** make up **Champawat district**?',
        options: [
          '3 blocks and 3 seats',
          '4 blocks (Champawat, Lohaghat, Pati, Barakot) and 2 seats (Lohaghat, Champawat)',
          '6 blocks and 4 seats',
          '5 blocks and 2 seats',
        ],
        correctOptionIndex: 1,
        explanation: 'Champawat administers 4 CD blocks and elects 2 MLAs (Champawat and Lohaghat, neither reserved).',
        difficulty: 'standard',
      },
      {
        stem: 'From which **parent district** was **Champawat** separated on **15 September 1997**?',
        options: ['Nainital', 'Pithoragarh', 'Almora', 'Udham Singh Nagar'],
        correctOptionIndex: 1,
        explanation: 'Southern Pithoragarh (originally separated from Almora in 1960) became Champawat district in September 1997.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **shrine perched on the Annapurna peak ridge** above **Tanakpur** in southern Champawat overlooks the Kali/Sharda River as it enters the plains?',
        options: ['Mansa Devi', 'Maa Purnagiri Shakti Peeth', 'Chandi Devi', 'Dhari Devi'],
        correctOptionIndex: 1,
        explanation: 'Maa Purnagiri temple (~3,000 ft above Tanakpur along the Kali gorge) attracts lakhs of pilgrims especially during Chaitra Navratri.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **stone stepwell monument** near **Champawat town** is famed in folklore as **Ek Hathiya Ka Naula**, supposedly carved single-handedly overnight by a one-armed master mason?',
        options: ['Dhwaj Naula', 'Ek Hathiya Ka Naula (near Baleshwar / Champawat)', 'Baijnath Naula', 'Gopeshwar Naula'],
        correctOptionIndex: 1,
        explanation: 'Ek Hathiya Ka Naula (~5 km from Champawat near Dhakna Badola) showcases exquisite medieval Kumaoni stone-water architecture.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **sacred confluence** on the **Champawat–Pithoragarh–Nepal** border joins the **Saryu River** into the **Kali (Mahakali) River**?',
        options: ['Rameshwar Ghat', 'Pancheshwar (Pancheshwar Mahadev)', 'Jauljibi', 'Tanakpur'],
        correctOptionIndex: 1,
        explanation: 'At Pancheshwar (championed for the proposed Indo–Nepal Pancheshwar Multipurpose Project), the combined Saryu–Ramganga East waters merge into the Kali.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **two natural lakes** — one famous for the **Vivekananda / Jhulaghat Ashram & Jhoola Fair** and another near **Tanakpur** — are located in Champawat district?',
        options: [
          'Bhimtal and Sattal',
          'Shyamlatal and Jhilmil Tal',
          'Deoria Tal and Hemkund',
          'Dodital and Nachiketa Tal',
        ],
        correctOptionIndex: 1,
        explanation: 'Shyamlatal (associated with Swami Vivekananda’s disciples and Jhoola Mela near Sukhidhang) and saucer-shaped Jhilmil Tal (near Tanakpur) lie in Champawat.',
        difficulty: 'standard',
      },
      {
        stem: 'What was **Champawat district’s rank** in **total population (2,59,648)** across Uttarakhand in the **2011 Census**?',
        options: [
          'Lowest (13th)',
          '2nd lowest (12th, slightly above Rudraprayag’s 2,42,285)',
          '8th',
          '5th',
        ],
        correctOptionIndex: 1,
        explanation: 'Rudraprayag (2,42,285) has the smallest population, closely followed by Champawat (2,59,648) and Bageshwar (2,59,898).',
        difficulty: 'standard',
      },
      {
        stem: 'Which **10th–12th century stone temple group** in Champawat town is celebrated for intricate relief pillars and the **Nagnath shrine** nearby?',
        options: ['Katarmal', 'Baleshwar Temple Complex', 'Lakhudiyar', 'Tungnath'],
        correctOptionIndex: 1,
        explanation: 'Dedicated to Lord Shiva and protected by ASI, Baleshwar Temple Complex displays Kumaon’s finest medieval stone iconography.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **colonial mountain settlement** (~2,000 m) near **Lohaghat** was developed in the early 20th century by **John Harold Abbott** as a secluded European colony?',
        options: ['Landour', 'Abbott Mount', 'Lansdowne', 'Ranikhet'],
        correctOptionIndex: 1,
        explanation: 'Abbott Mount (Champawat) preserves pre-Independence colonial cottages, a church, and cricket grounds overlooking snowy Himalayan peaks.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **strategic railway station & border barrage town** in southern Champawat district connects the hills via the **Tanakpur–Pithoragarh All-Weather Highway**?',
        options: ['Ramnagar', 'Tanakpur', 'Kathgodam', 'Kotdwar'],
        correctOptionIndex: 1,
        explanation: 'Tanakpur serves as the railhead for Champawat–Pithoragarh and gateway to the Sharda/Banbasa canal barrage and Purnagiri.',
        difficulty: 'foundation',
      },
    ],
  },
];
