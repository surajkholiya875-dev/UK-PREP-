import { TopicContentPackage } from './types';

export const DISTRICTS_PART_A: TopicContentPackage[] = [
  {
    topicTitle: 'Dehradun District Profile',
    materialTitle: 'Dehradun District Administrative & Development Profile — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Dehradun Tehsils, Blocks, Census & Micro-Economy',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Dehradun District Administrative & Development Profile

## 1. Administrative Snapshot
- **Division:** Garhwal | **Area:** **3,088 sq km** | **HQ:** Dehradun (also Provisional/Winter State Capital).
- **Tehsils (7):** Dehradun, Rishikesh, Vikasnagar, Chakrata, Tyuni, Kalsi, Doiwala.
- **Community Development Blocks (6):** Chakrata, Kalsi, Vikasnagar, Sahaspur, Raipur, Doiwala.
- **Assembly Constituencies (10 — highest in Garhwal after Haridwar's 11):** Chakrata (**ST**), Vikasnagar, Sahaspur, Dharampur, Raipur, Rajpur Road (**SC**), Dehradun Cantt, Mussoorie, Doiwala, Rishikesh.
- **Lok Sabha Constituencies:** Split across **Tehri Garhwal** (Dehradun urban/Chakrata/Vikasnagar/Mussoorie) and **Haridwar** (Doiwala, Rishikesh, Dharampur).

## 2. Demographic & Social Indicators (2011 Census)
- **Population:** **16,96,694** (Rank #2 in UK) | **Decadal Growth:** **32.33%** (#2 highest!).
- **Literacy:** **84.25%** (**Rank #1 Overall**, Female ~78.54% #1!) | **Sex Ratio:** **902** | **Urbanization:** **55.52%** (**Rank #1 most urbanized district in UK!**).
- **Tribal Hub:** **Jaunsar–Bawar** (*Chakrata & Kalsi blocks*) forms Uttarakhand’s largest Western Garhwal **Jaunsari** tribal zone (scheduled under 1967 presidential order).

## 3. Infrastructure, Economy & Ecological Assets
- **Transport:** **Jolly Grant Airport** (expanded terminal connecting Dehradun–Delhi–Mumbai–regional heli-hubs); Dehradun–Delhi Expressway (with elevated **Rajaji wildlife viaduct**); Rishikesh–Karnaprayag BG rail starting from **Yog Nagari Rishikesh**!
- **Industrial / Agri Profile:** **Selaqui Pharma/IT SIIDCUL Park**, **IT Park (Sahastradhara Road)**, Dehraduni Basmati, Litchi, Doon Tea, **Malsi Deer Park / Dehradun Zoo**, **Shikhar Falls**, **Buddha Temple (Clement Town)**, **Lachhiwala Nature Park**, **Song & Suswa rivers**, **Asan Conservation Reserve (Ramsar)**.

## 4. Key Revision Takeaways
- **55.52% Urban Population** makes Dehradun the **most urbanized** and **most literate (84.25%)** district in Uttarakhand.
- **6 CD Blocks** (*Chakrata, Kalsi, Vikasnagar, Sahaspur, Raipur, Doiwala*) & **10 Assembly Seats** (*Chakrata ST, Rajpur Road SC*).`,
    mcqs: [
      {
        stem: 'With **55.52%** of its residents living in urban settlements (2011 Census), which rank does **Dehradun district** hold in Uttarakhand for **Urbanization share**?',
        options: [
          '1st (most urbanized district in Uttarakhand)',
          '5th',
          '10th',
          '13th (least urbanized)',
        ],
        correctOptionIndex: 0,
        explanation: 'Dehradun (55.52%) tops urbanization ahead of Nainital (38.94%) and Haridwar (36.66%), whereas Bageshwar (~3.5%) is least urbanized.',
        difficulty: 'foundation',
      },
      {
        stem: 'How many **Community Development Blocks** comprise **Dehradun district’s** rural administration?',
        options: [
          '4 blocks',
          '6 blocks (Chakrata, Kalsi, Vikasnagar, Sahaspur, Raipur, and Doiwala)',
          '12 blocks',
          '15 blocks',
        ],
        correctOptionIndex: 1,
        explanation: 'Dehradun’s 6 blocks span mountainous Jaunsar–Bawar (Chakrata, Kalsi) down to Doon valley (Vikasnagar, Sahaspur, Raipur, Doiwala).',
        difficulty: 'standard',
      },
      {
        stem: 'Which two **Cantonment Boards** operate right adjacent to **Dehradun and Mussoorie** urban limits alongside **Chakrata** and **Clement Town**?',
        options: [
          'Lansdowne and Ranikhet',
          'Dehradun Cantt (Garhi) and Landour Cantt (making 4 of UK’s 9 Cantonments inside Dehradun district!)',
          'Roorkee and Almora',
          'Nainital and Pithoragarh',
        ],
        correctOptionIndex: 1,
        explanation: 'Dehradun district uniquely hosts 4 Cantonment Boards: Dehradun Cantt, Clement Town, Landour (Mussoorie), and Chakrata.',
        difficulty: 'standard',
      },
      {
        stem: 'Out of **10 Vidhan Sabha seats** in Dehradun district, which one is reserved for **Scheduled Castes (SC)** and which one for **Scheduled Tribes (ST)**?',
        options: [
          'Mussoorie (SC) and Doiwala (ST)',
          'Rajpur Road (SC) and Chakrata (ST)',
          'Rishikesh (SC) and Sahaspur (ST)',
          'Vikasnagar (SC) and Raipur (ST)',
        ],
        correctOptionIndex: 1,
        explanation: 'Rajpur Road is SC-reserved and Chakrata is ST-reserved inside Dehradun’s 10-seat tally.',
        difficulty: 'standard',
      },
      {
        stem: 'Which prominent mountain stream flows northward/westward through the eastern Doon valley (**Doiwala–Lachhiwala**) into the Ganga near Raiwala (collecting **Rispana & Bindal** rivulets from Dehradun city)?',
        options: [
          'Tons River',
          'Song–Suswa River System',
          'Ramganga West',
          'Kosi River',
        ],
        correctOptionIndex: 1,
        explanation: 'Dehradun’s urban drainages feed Suswa and Song eastward toward Ganga, while Asan flows westward into the Yamuna.',
        difficulty: 'standard',
      },
      {
        stem: 'What makes the **water divide** running right near **Dehradun’s Rajpur / Clock Tower–Mussoorie foothills ridge** hydrologically remarkable?',
        options: [
          'It separates Indus from Brahmaputra',
          'Western streams (**Asan**) drain westward into the **Yamuna**, while eastern streams (**Song–Suswa**) drain eastward into the **Ganga**!',
          'All rivers vanish underground forever',
          'It flows directly into the Arabian Sea',
        ],
        correctOptionIndex: 1,
        explanation: 'Dehradun sits straddling the watershed crest between the Yamuna (west) and Ganga (east) drainage systems.',
        difficulty: 'standard',
      },
      {
        stem: 'Under Uttarakhand’s **111/125-km Rishikesh–Karnaprayag Broad-Gauge Railway Project**, which newly built station inside **Dehradun district** serves as the starting hub?',
        options: [
          'Haridwar Junction',
          'Yog Nagari Rishikesh',
          'Vikasnagar',
          'Chakrata',
        ],
        correctOptionIndex: 1,
        explanation: 'Yog Nagari Rishikesh inaugurates the strategic mountain railway alignment boring mostly via tunnels up the Alaknanda gorge toward Karnaprayag.',
        difficulty: 'foundation',
      },
      {
        stem: 'In which **Dehradun district** industrial estate are major pharmaceutical, cosmetics, and clean electronics manufacturing plants concentrated?',
        options: [
          'Sitarganj Industrial Estate',
          'Selaqui (Pharma City / SIIDCUL Industrial Estate)',
          'Pantnagar IIE',
          'Kashipur Textile Park',
        ],
        correctOptionIndex: 1,
        explanation: 'Selaqui near Vikasnagar hosts major national pharma formulation units alongside IT Park on Sahastradhara Road.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **five ethnic tribal groups** were notified as **Scheduled Tribes** in Uttar Pradesh / Uttarakhand in **June 1967**, prominently anchored in Dehradun’s **Jaunsar–Bawar**?',
        options: [
          'Gond, Bhil, Santhal, Munda, Oraon',
          'Jaunsari, Bhotiya, Tharu, Bhoxa, and Raji',
          'Naga, Mizo, Khasi, Garo, Bodo',
          'Toda, Irula, Kurumba, Kota, Badaga',
        ],
        correctOptionIndex: 1,
        explanation: 'Those five remain Uttarakhand’s five officially recognized Scheduled Tribes (*Jaunsari* being centered in Chakrata–Kalsi–Tyuni of Dehradun).',
        difficulty: 'foundation',
      },
      {
        stem: 'Where is **Jolly Grant Airport**, Uttarakhand’s busiest commercial air gateway, located?',
        options: [
          'In Roorkee tehsil',
          'In **Doiwala tehsil** between Dehradun and Rishikesh (Dehradun district)',
          'In Mussoorie town centre',
          'In Tehri town',
        ],
        correctOptionIndex: 1,
        explanation: 'Located ~25 km southeast of Dehradun inside Doiwala tehsil, Jolly Grant connects Garhwal with major Indian metros.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which natural **Thermal / Mineral Water Spring** site situated ~14 km northeast of Dehradun city along the Baldi Nadi is renowned for medicinal lime-rich **sulphur pools**?',
        options: ['Tapovan Joshimath', 'Sahastradhara', 'Gauri Kund', 'Badrinath Tapt Kund'],
        correctOptionIndex: 1,
        explanation: 'Limestone caverns and dripping stalactites feed Sahastradhara’s cold sulphur springs ("Thousandfold Spring").',
        difficulty: 'foundation',
      },
      {
        stem: 'Located ~6.5 km from Dehradun on the Tons/Asan tributary stream, **Tapkeshwar Mahadev** is famous for:',
        options: [
          'A natural limestone cave ceiling where groundwater droplets fall continuously onto an ancient Shiva Linga',
          'Being a high-altitude glacier at 5,000 m',
          'Housing Ashoka’s pillar',
          'Mining coal',
        ],
        correctOptionIndex: 0,
        explanation: 'Associated in legend with Guru Dronacharya’s ashram (*Drona Guha*), Tapkeshwar is Dehradun’s iconic cave shrine.',
        difficulty: 'foundation',
      },
      {
        stem: 'On which major river is the **Dakpathar Barrage** and **Dhalipur / Dhakrani** run-of-river hydel cascade located in western Dehradun district?',
        options: [
          'Bhagirathi River',
          'Yamuna River (diverting power channel parallel to Asan/Tons)',
          'Kosi River',
          'Alaknanda River',
        ],
        correctOptionIndex: 1,
        explanation: 'Constructed across the Yamuna near Vikasnagar/Kalsi, Dakpathar feeds the Yamuna hydel stages (Dhakrani, Dhalipur, Kulhal) and Asan Barrage.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Dehradun district** hill feature on the Mussoorie ridge houses the **Surveyor General Sir George Everest’s** restored 1832 observatory estate ("Park Estate")?',
        options: [
          'Dhanaulti',
          'Hathipaon / Mussoorie West Ridge (George Everest House)',
          'Narendranagar',
          'Chakrata Peak',
        ],
        correctOptionIndex: 1,
        explanation: 'Sir George Everest lived and calibrated Great Trigonometrical Survey instruments at Park Estate, Hathipaon, Mussoorie (1832–1843).',
        difficulty: 'standard',
      },
      {
        stem: 'What was **Dehradun’s Sex Ratio** (females per 1,000 males) in the 2011 Census (reflecting high male in-migration for education, defence, and capital administration)?',
        options: ['1,139', '1,002', '902', '810'],
        correctOptionIndex: 2,
        explanation: 'Dehradun’s sex ratio (902) sits below the state average (963) yet higher than Haridwar (880), shaped by in-migration.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Haridwar District Profile',
    materialTitle: 'Haridwar District Administrative & Development Profile — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Haridwar Blocks, 11 MLAs, Census Ranks & Agro-Industry',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Haridwar District Administrative & Development Profile

## 1. Administrative Snapshot
- **Division:** Garhwal | **Created:** **28 Dec 1988** | **Area:** **2,360 sq km** | **HQ:** Roshnabad (Haridwar).
- **Tehsils (4):** Haridwar, Roorkee, Laksar, Bhagwanpur.
- **CD Blocks (6):** Bahadrabad, Bhagwanpur, Khanpur, Laksar, Narsan, Roorkee.
- **Vidhan Sabha Constituencies (11 — HIGHEST among all 13 districts of Uttarakhand!):** Haridwar, BHEL Ranipur, Jwalapur (**SC**), Bhagwanpur (**SC**), Jhabrera (**SC**), Piran Kaliyar, Roorkee, Khanpur, Manglaur, Laksar, Haridwar Rural.

## 2. 2011 Census Standouts
- **Total Population:** **18,90,422** (**#1 Highest in Uttarakhand** — nearly 18.7% of the entire state!).
- **Population Density:** **801/sq km** (**#1 Highest in Uttarakhand**).
- **Overall Sex Ratio:** **880** (**#13 Lowest in Uttarakhand**); **Child Sex Ratio (0–6):** **877**.
- **Literacy Rate:** **73.43%** (2nd lowest in state, just ahead of Udham Singh Nagar’s 73.10%).
- **Highest SC Population in Uttarakhand:** Haridwar holds both the largest absolute **Scheduled Caste** population and three SC-reserved MLAs (*Jwalapur, Bhagwanpur, Jhabrera*)!

## 3. Infrastructure, Industry & Heritage Hubs
- **Engineering & Hydel:** **Upper Ganga Canal (1854)** starting from **Bhimgoda Barrage**, **Pathri & Mohammadpur small hydel stations**, **Solani Aqueduct (Roorkee)**, **Eastern Dedicated Freight Corridor / rail hub at Laksar & Roorkee**.
- **Industrial Base:** **BHEL Ranipur**, **SIDCUL IIE Roshnabad–Haridwar**, **Bhagwanpur Industrial Corridor**, **Patanjali Herbal & Food Park (Padartha)**.
- **Higher Education:** **IIT Roorkee (1847)**, **Gurukul Kangri (Deemed Univ., est. 1902 by Swami Shraddhanand)**, **Dev Sanskriti Vishwavidyalaya (Shantikunj)**, **Uttarakhand Sanskrit University (Haridwar)**, **University of Patanjali**.
- **Biodiversity:** **Rajaji Tiger Reserve** northern foothills + **Jhilmil Jheel Conservation Reserve** (*Barasingha*).

## 4. Key Revision Takeaways
- Haridwar sends **11 MLAs** (maximum of any district in Uttarakhand!) and holds **highest population (18.9 lakh)**, **highest density (801/sq km)**, and **lowest overall sex ratio (880)**.
- **Gurukul Kangri (1902)** was founded by Arya Samaj leader **Swami Shraddhanand (Munshi Ram)**.`,
    mcqs: [
      {
        stem: 'Which district sends the **highest number of elected MLAs (11 Assembly constituencies)** to the 70-member Uttarakhand Vidhan Sabha?',
        options: ['Dehradun (10)', 'Haridwar (11)', 'Udham Singh Nagar (9)', 'Nainital (6)'],
        correctOptionIndex: 1,
        explanation: 'Reflecting its #1 population share (~18.7% of the state), Haridwar holds 11 Assembly constituencies (including 3 SC seats: Jwalapur, Bhagwanpur, Jhabrera).',
        difficulty: 'foundation',
      },
      {
        stem: 'What was **Haridwar district’s overall Sex Ratio** in the 2011 Census—ranking **lowest among all 13 districts** of Uttarakhand?',
        options: ['963', '902', '880', '1,005'],
        correctOptionIndex: 2,
        explanation: 'Haridwar (880) ranks lowest overall, contrasting sharply with hill districts Almora (1,139) and Rudraprayag (1,114).',
        difficulty: 'standard',
      },
      {
        stem: 'Founded in **1902** near Haridwar along the Ganga to revive Vedic–nationalist Gurukul education without colonial grants, **Gurukul Kangri Vishwavidyalaya** was established by:',
        options: [
          'Pt. Madan Mohan Malaviya',
          'Swami Shraddhanand (Mahatma Munshi Ram)',
          'Swami Dayananda directly in 1875',
          'Rabindranath Tagore',
        ],
        correctOptionIndex: 1,
        explanation: 'Moved to Kangri village near Haridwar in 1902, Gurukul Kangri inspired Mahatma Gandhi (who visited thrice) and national freedom leaders.',
        difficulty: 'foundation',
      },
      {
        stem: 'Where is the main administrative **District Collectorate Headquarters** of Haridwar district situated?',
        options: ['Laksar town', 'Roshnabad (Haridwar)', 'Manglaur', 'Bhagwanpur'],
        correctOptionIndex: 1,
        explanation: 'Roshnabad hosts Haridwar’s District Magistrate Collectorate, Sports Stadium (host of women’s hockey talent like Vandana Katariya), and Police Lines.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **six Community Development Blocks** constitute rural governance in Haridwar district?',
        options: [
          'Bahadrabad, Bhagwanpur, Khanpur, Laksar, Narsan, and Roorkee',
          'Doiwala, Raipur, Sahaspur, Vikasnagar, Kalsi, Chakrata',
          'Haldwani, Ramnagar, Kotabagh, Okhalkanda, Betalghat, Dhari',
          'Rudrapur, Khatima, Bazpur, Gadarpur, Jaspur, Sitarganj',
        ],
        correctOptionIndex: 0,
        explanation: 'Haridwar combines 6 rural blocks across Laksar–Khanpur Bangar plains and Roorkee–Bahadrabad Bhabar fringes.',
        difficulty: 'standard',
      },
      {
        stem: 'Where is **Uttarakhand Sanskrit University**, established by the State in 2005 to advance Sanskrit scholarship and traditional Shastras, located?',
        options: ['Almora', 'Haridwar', 'Pauri', 'Nainital'],
        correctOptionIndex: 1,
        explanation: 'Situated along Bahadrabad–Haridwar highway, Uttarakhand Sanskrit University supports Sanskrit education across the "Second Official Language" state.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which engineering marvel constructed across the **Solani River** near Roorkee in the 1850s carried the massive **Upper Ganga Canal** overhead above a natural monsoon riverbed?',
        options: [
          'Tehri Spillway',
          'Solani Aqueduct (Roorkee)',
          'Kalagarh Bridge',
          'Bhimgoda Siphon',
        ],
        correctOptionIndex: 1,
        explanation: 'Featuring brick masonry arches and twin lion statues, the Solani Aqueduct was one of 19th-century India’s grandest hydraulic works.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Haridwar district Assembly seat** shares its name directly with India’s Maharatna heavy-electrical manufacturing PSU located inside the district?',
        options: [
          'Laksar',
          'BHEL Ranipur',
          'Manglaur',
          'Khanpur',
        ],
        correctOptionIndex: 1,
        explanation: 'BHEL Ranipur forms an independent industrial-suburban Assembly constituency in Haridwar.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which spiritual-educational institution founded by **Pt. Shriram Sharma Acharya** in Haridwar (*Shantikunj* / Gayatri Pariwar) runs **Dev Sanskriti Vishwavidyalaya**?',
        options: [
          'Shantikunj / All World Gayatri Pariwar',
          'Kainchi Dham Trust',
          'Mayavati Ashram',
          'Mindrolling Trust',
        ],
        correctOptionIndex: 0,
        explanation: 'Founded in 1971 at Haridwar (DSVV established 2002), Shantikunj anchors yoga, value education, and environmental social campaigns.',
        difficulty: 'foundation',
      },
      {
        stem: 'In terms of **Scheduled Caste (SC) population**, where does Haridwar rank among Uttarakhand’s 13 districts (2011 Census)?',
        options: [
          'Lowest SC population',
          'Highest total SC population (plus highest share among plains districts ~21.8%, driving 3 SC Assembly seats)',
          'Zero SC residents',
          'Rank 10th',
        ],
        correctOptionIndex: 1,
        explanation: 'Haridwar holds the largest absolute SC population (~4.11 lakh in 2011), while Bageshwar has the highest *percentage* SC share (~27.7%)!',
        difficulty: 'standard',
      },
      {
        stem: 'Which ancient Chinese Buddhist pilgrim (**7th century CE**) visited Haridwar, describing **"Mo-yu-lo" (Mayura / Mayapuri)** along the banks of the wide Ganga?',
        options: ['Megasthenes', 'Xuanzang (Hiuen Tsang)', 'Marco Polo', 'Ibn Battuta'],
        correctOptionIndex: 1,
        explanation: 'Xuanzang recorded Mayapuri’s thriving Brahminical shrines, gardens, and sacred bathing tanks (~634 CE).',
        difficulty: 'standard',
      },
      {
        stem: 'What are the four **Tehsils** of Haridwar district?',
        options: [
          'Haridwar, Roorkee, Laksar, and Bhagwanpur',
          'Dehradun, Mussoorie, Chakrata, Tyuni',
          'Kashipur, Bazpur, Khatima, Sitarganj',
          'Kotdwar, Lansdowne, Srinagar, Thalisain',
        ],
        correctOptionIndex: 0,
        explanation: 'Haridwar’s 4 revenue tehsils align neatly with its central riverfront, engineering hub, southern railway junction, and industrial corridor.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Cantonment Board located inside **Haridwar district** (and distinct from Dehradun/Almora hills) is historically home to the **Bengal Engineer Group ("Bengal Sappers")** since 1853?',
        options: [
          'Lansdowne Cantt',
          'Roorkee Cantonment',
          'Chakrata Cantt',
          'Ranikhet Cantt',
        ],
        correctOptionIndex: 1,
        explanation: 'Roorkee Cantt is the proud regimental home of the Indian Army’s Bengal Sappers (*War Memorial* & *Thomason engineering heritage*).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which prominent **agricultural cash crop** dominates the fertile Bangar–Khadar plains of **Laksar, Manglaur, and Bhagwanpur** in Haridwar district alongside paddy and wheat?',
        options: ['Saffron', 'Sugarcane', 'Buckwheat (Ogal)', 'Cardamom'],
        correctOptionIndex: 1,
        explanation: 'Laksar and Iqbalpur sugar mills process extensive irrigated sugarcane acreage across Haridwar.',
        difficulty: 'foundation',
      },
      {
        stem: 'Constructed across the Ganga just upstream of Har Ki Pauri to divert water into the **Upper Ganga Canal**, the historic headworks structure is called:',
        options: [
          'Tehri Dam',
          'Bhimgoda Barrage',
          'Dakpathar Barrage',
          'Kalagarh Dam',
        ],
        correctOptionIndex: 1,
        explanation: 'Originally built in the 1840s–50s and modernized in the 1980s, Bhimgoda Barrage regulates Upper Ganga Canal discharge at Haridwar.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Tehri Garhwal District Profile',
    materialTitle: 'Tehri Garhwal District Administrative & Development Profile — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Tehri Garhwal Blocks, Constituencies, Hydel & Eco-Tourism',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Tehri Garhwal District Administrative & Development Profile

## 1. Administrative Snapshot
- **Division:** Garhwal | **Area:** **3,642 sq km** | **HQ:** **New Tehri** (*only planned hill-top district HQ relocated post-submergence!*).
- **CD Blocks (9):** Bhilangana (largest!), Chamba, Deoprayag, Jakhanidhar, Jaunpur, Kirtinagar, Narendranagar, Pratapnagar, Thauldhar.
- **Vidhan Sabha Constituencies (6):** Ghansali (**SC**), Devprayag, Narendranagar, Pratapnagar, Tehri, Dhanaulti.

## 2. 2011 Census Profile
- **Population:** **6,18,931** | **Density:** **170/sq km**.
- **Sex Ratio:** **1,077** (5th highest in UK — strong female majority!).
- **Literacy:** **76.36%** (Male 89.76%, Female 64.28% — note wide gender gap of ~25.5 percentage points, historically among state's widest!).

## 3. Hydel, Ecological & Cultural Landmarks
- **Tehri Hydropower Complex (THDC):** **Tehri Dam (1,000 MW) + Koteshwar Dam (400 MW) + Tehri Pumped Storage Plant (PSP, 1,000 MW)** = **2,400 MW** clean peaking complex on **Bhagirathi**!
- **Agriculture & Ecology:** **Henvalghati / Jardhargaon** (*Beej Bachao Andolan* birthplace!), **Bhilangana** (*Raksha Sutra Movement*), **Chamba** apple & off-season vegetable belt, **Dhanaulti** eco-parks (*Amber & Dhara*), **Kunjapuri–Narendranagar**, **Panwali Kantha** & **Khatling–Sahastratal–Masar Tal** treks!
- **Adventure Hub:** **Tehri Lake** (*kayaking, parasailing, floating huts at Koti Colony*) + **Kaudiyala–Shivpuri** river rafting downstream near Rishikesh border.

## 4. Key Revision Takeaways
- **New Tehri** sits uniquely as Uttarakhand’s modern planned hill headquarters overlooking **Tehri Reservoir**.
- **9 CD Blocks** (*Jaunpur, Pratapnagar, Bhilangana...*) & **6 MLAs** (*Ghansali SC*).
- **THDC 2,400 MW** complex unites **Tehri Main + Koteshwar + Tehri Pumped Storage**.`,
    mcqs: [
      {
        stem: 'Which district headquarters in Uttarakhand holds the unique distinction of being a completely **planned modern hill-ridge township** constructed to relocate residents of a submerged historical capital?',
        options: [
          'Uttarkashi',
          'New Tehri (replacing Old Tehri submerged under Tehri Reservoir)',
          'Gopeshwar',
          'Pauri',
        ],
        correctOptionIndex: 1,
        explanation: 'Old Tehri at the Bhagirathi–Bhilangana sangam submerged in 2005–06; residents shifted upward to planned sectors in New Tehri (~1,550–1,950 m).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which single **Assembly Constituency** among Tehri Garhwal’s **six Vidhan Sabha seats** is reserved for **Scheduled Castes (SC)**?',
        options: ['Devprayag', 'Pratapnagar', 'Ghansali', 'Dhanaulti'],
        correctOptionIndex: 2,
        explanation: 'Tehri Garhwal’s 6 seats are Tehri, Devprayag, Narendranagar, Pratapnagar, Dhanaulti, and Ghansali (SC).',
        difficulty: 'standard',
      },
      {
        stem: 'What are the three interconnected projects forming the **2,400 MW Tehri Hydropower Complex** operated by **THDC India Limited**?',
        options: [
          'Maneri Bhali I, II, and Dhauliganga',
          'Tehri HPP (1,000 MW), Koteshwar Dam (400 MW downstream), and Tehri Pumped Storage Plant (1,000 MW)',
          'Vishnuprayag, Tapovan, and Srinagar',
          'Tanakpur, Lakhwar, and Vyasi',
        ],
        correctOptionIndex: 1,
        explanation: 'Koteshwar serves as the downstream balancing reservoir enabling Tehri’s reversible Pumped Storage turbines to supply peak grid power.',
        difficulty: 'standard',
      },
      {
        stem: 'Located near Chamba/Narendranagar in **Tehri Garhwal**, **Jardhargaon** in **Henvalghati** became internationally celebrated for:',
        options: [
          'Bauxite mining',
          'Origin of the **Beej Bachao Andolan** and conservation of hundreds of traditional Himalayan heirloom seeds (*Barahnaja*)',
          'India’s first nuclear power plant',
          'Formula-1 racing',
        ],
        correctOptionIndex: 1,
        explanation: 'Vijay Jardhari’s seed-saving movement in Jardhargaon preserved over 300 native rice (*Thapachini, Lal Basmati*) and 200 rajma landraces.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which cluster of scenic glacial/high-altitude **lakes (Tals)**—one of Garhwal’s largest clusters of interconnected alpine lakes—lies above Ghuttu near the **Khatling Glacier** in eastern Tehri?',
        options: [
          'Sattal group',
          'Sahastratal (alongside Masar Tal and Vasuki Tal access)',
          'Roopkund',
          'Nainital lakes',
        ],
        correctOptionIndex: 1,
        explanation: 'Sahastratal ("Thousand Lakes" ridge between Bhilangana & Balganga) sits at ~4,400+ m on the Tehri–Uttarkashi border.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **2011 Census demographic disparity** stood out prominently in **Tehri Garhwal** despite a healthy overall sex ratio of 1,077?',
        options: [
          'Zero male literacy',
          'A sharp **~25.5 percentage-point gap** between Male Literacy (89.76%) and Female Literacy (64.28%)',
          'Urbanization exceeding 90%',
          'Negative infant survival',
        ],
        correctOptionIndex: 1,
        explanation: 'Closing historical female literacy gaps across remote blocks like Bhilangana, Pratapnagar, and Jaunpur remains a key district human-development focus.',
        difficulty: 'standard',
      },
      {
        stem: 'Which scenic **hill resort town** in western Tehri Garhwal (famous for twin forest **Eco-Parks Amber & Dhara**, deodar groves, and winter snow along the Mussoorie–Chamba road) lies inside **Jaunpur/Chamba belt**?',
        options: ['Dhanaulti', 'Munsiyari', 'Ranikhet', 'Binsar'],
        correctOptionIndex: 0,
        explanation: 'At ~2,286 m, Dhanaulti is a quiet eco-tourism stop en route to Surkanda Devi and Chamba.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which historical winter palace overlooking Rishikesh and the Ganga—built by Tehri ruler **Maharaja Narendra Shah** in the 1920s—renamed **Narendranagar** its capital seat?',
        options: [
          'Narendranagar Palace (Oda Thali)',
          'Almora Malla Mahal',
          'Srinagar Rajbhawan',
          'Gopeshwar Fort',
        ],
        correctOptionIndex: 0,
        explanation: 'Constructed on a sunny ridge above Muni Ki Reti (~1,129 m), Narendranagar served as Tehri Riyasat’s winter administrative capital.',
        difficulty: 'standard',
      },
      {
        stem: 'Connected over Tehri Lake to slash hours of mountain road detour for **Pratapnagar** residents, which **longest single-lane motorable suspension bridge in India (~725 m total span)** opened in 2020?',
        options: [
          'Laxman Jhula',
          'Dobra–Chanti Suspension Bridge',
          'Janki Setu',
          'Jauljibi Bridge',
        ],
        correctOptionIndex: 1,
        explanation: 'Spanning ~440 m central cable stretch (725 m overall) across Tehri Lake, Dobra–Chanti restored direct connectivity to Pratapnagar block.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **river corridor** within **Tehri Garhwal’s Narendranagar/Devprayag stretch** (Kaudiyala to Shivpuri–Muni Ki Reti) is acclaimed as India’s premier **White-Water River Rafting** destination?',
        options: [
          'Kosi River stretch',
          'Ganga gorge rapids (Kaudiyala – Marine Drive – Shivpuri – Brahmapuri)',
          'Gomti River at Bageshwar',
          'Gaula River at Haldwani',
        ],
        correctOptionIndex: 1,
        explanation: 'Grade III–IV rapids like *Daniel’s Dip, The Wall, Three Blind Mice, Roller Coaster,* and *Golf Course* drive major youth adventure tourism.',
        difficulty: 'foundation',
      },
      {
        stem: 'Located near Devprayag on the Alaknanda, which town in Tehri Garhwal serves as the tehsil headquarters bordering Srinagar (Pauri) across the river?',
        options: ['Kirtinagar', 'Ghansali', 'Thatyur', 'Nainbagh'],
        correctOptionIndex: 0,
        explanation: 'Founded during King Kirti Shah’s reign along the Alaknanda north bank, Kirtinagar bridges Tehri with Srinagar (Pauri).',
        difficulty: 'standard',
      },
      {
        stem: 'How many **Community Development Blocks** are administered inside Tehri Garhwal district?',
        options: ['4', '6', '9', '13'],
        correctOptionIndex: 2,
        explanation: 'The 9 blocks are Bhilangana, Chamba, Deoprayag, Jakhanidhar, Jaunpur, Kirtinagar, Narendranagar, Pratapnagar, and Thauldhar.',
        difficulty: 'standard',
      },
      {
        stem: 'Near **Chamba** in Tehri Garhwal stands a revered memorial to which World War I hero where a major annual **V.C. Gabar Singh Mela** is held every April?',
        options: [
          'Darwan Singh Negi',
          'Rifleman Gabar Singh Negi (Victoria Cross)',
          'Major Somnath Sharma',
          'Chandra Singh Garhwali',
        ],
        correctOptionIndex: 1,
        explanation: 'Born in Manjoor village near Chamba, Gabar Singh Negi earned the VC at Neuve Chapelle (1915).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **high-altitude scenic meadow trek** spanning the **Bhilangana valley (Tehri) toward Triyuginarayan (Rudraprayag)** offers a ~12-km panoramic ridge walk?',
        options: [
          'Panwali Kantha Bugyal',
          'Pindari Valley',
          'Dayara Bugyal',
          'Darwa Top',
        ],
        correctOptionIndex: 0,
        explanation: 'Panwali Kantha (~3,400 m) links Tehri’s Ghuttu side historically along the ancient Kedar–Gangotri pilgrim footpath.',
        difficulty: 'standard',
      },
      {
        stem: 'Inside Tehri Lake, at which lakeside point has Uttarakhand built its premier **Floating Huts, Water Sports Academy, and Jet-Ski/Kayaking hub**?',
        options: ['Koti Colony', 'Dhanaulti', 'Srinagar', 'Muni Ki Reti'],
        correctOptionIndex: 0,
        explanation: 'Koti Colony (along New Tehri–Panchkoti road) anchors Tehri’s year-round adventure water-sports tourism.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Pauri Garhwal District Profile',
    materialTitle: 'Pauri Garhwal District Administrative & Development Profile — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Pauri Garhwal Blocks, 6 MLAs, Nayar Basin & Development Challenges',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Pauri Garhwal District Administrative & Development Profile

## 1. Administrative Snapshot
- **Division:** Garhwal (**Pauri town IS the Garhwal Divisional HQ!**) | **Area:** **5,329 sq km**.
- **CD Blocks (15 — highest number of blocks in Uttarakhand alongside Almora's 11!):** *Bironkhal, Duggada (Dugadda), Dwarikhal, Ekeshwar, Jaiharikhal, Kaljikhal, Khirsu, Kot, Nainidanda, Pabau, Pauri, Pokhra, Rikhnikhal, Thalisain, Yamkeshwar*.
- **Vidhan Sabha Constituencies (6):** Yamkeshwar, Pauri (**SC**), Srinagar, Chaubattakhal, Lansdowne, Kotdwar.

## 2. 2011 Census Standouts
- **Population:** **6,87,271** | **Density:** **129/sq km** | **Sex Ratio:** **1,103** (#3 highest in UK!).
- **Literacy:** **82.02%** (#4 in UK!).
- **Decadal Growth Rate:** **–1.41%** (**LOWEST / steepest negative population decline in Uttarakhand!** — driving Uttarakhand’s dedicated **Rural Development & Migration Prevention Commission** HQ at Pauri!).

## 3. Physical, Cultural & Economic Profile
- **River Basins:** **East Nayar & West Nayar** (originating from **Dudhatoli**, joining at **Satpuli** and meeting Ganga near **Vyasghat**), **Alaknanda** (northern border), **Khoh** (Kotdwar), **Malini** (Kanvashram), **Western Ramganga** (Kalagarh/Corbett south!).
- **Heritage & Institutions:** **Srinagar** (HNBGU Central Univ., NIT Uttarakhand, Medical College, **Dhari Devi**), **Pauri** (**Kandoliya Devta**, **Kyunkaleshwar Mahadev**), **Khirsu** quiet ridge, **Lansdowne**, **Chaukham / Binsar Mahadev**, **Ufrainkhal** (*Pani Rakho Andolan*), **Sangaon / Kotdwar SIIDCUL**.

## 4. Key Revision Takeaways
- **Pauri Garhwal** has **15 CD Blocks** (most of any district in Uttarakhand!) and houses **Garhwal Division HQ**.
- **–1.41% growth** (2001–11) reflects severe rural out-migration—with **Migration Commission** working out of Pauri.
- **East & West Nayar** unite at **Satpuli** and join the Ganga at **Vyasghat**.`,
    mcqs: [
      {
        stem: 'Which district in Uttarakhand contains the **largest number of Community Development Blocks (15 Blocks)** across its rugged hill and foothills terrain?',
        options: ['Dehradun (6)', 'Pauri Garhwal (15)', 'Rudraprayag (3)', 'Champawat (4)'],
        correctOptionIndex: 1,
        explanation: 'From Yamkeshwar near Rishikesh to Nainidanda/Bironkhal bordering Almora, Pauri Garhwal’s vast terrain is split into 15 CD blocks.',
        difficulty: 'standard',
      },
      {
        stem: 'At which town in Pauri Garhwal do the **East Nayar** and **West Nayar** rivers (both descending from Dudhatoli) unite before flowing westward to join the Ganga at Vyasghat?',
        options: ['Kotdwar', 'Satpuli', 'Srinagar', 'Lansdowne'],
        correctOptionIndex: 1,
        explanation: 'Satpuli sits along the Kotdwar–Pauri highway right at the East–West Nayar confluence.',
        difficulty: 'standard',
      },
      {
        stem: 'Which headquarters office was specifically set up by the Uttarakhand Government at **Pauri** to diagnose and curb distress rural hill out-migration ("Ghost Villages")?',
        options: [
          'SIIDCUL Petrochemical HQ',
          'Rural Development and Migration Prevention Commission (*Palayan Roktham Aayog*)',
          'Marine Fisheries Board',
          'Sugar Mill Corporation',
        ],
        correctOptionIndex: 1,
        explanation: 'Pauri suffered the state’s sharpest population contraction (-1.41% during 2001–11), prompting establishment of the Migration Commission HQ at Pauri.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which single Assembly Constituency among **Pauri Garhwal’s 6 Vidhan Sabha seats** is reserved for **Scheduled Castes (SC)**?',
        options: ['Kotdwar', 'Lansdowne', 'Pauri', 'Yamkeshwar'],
        correctOptionIndex: 2,
        explanation: 'Pauri (SC) sits alongside General seats Yamkeshwar, Srinagar, Chaubattakhal, Lansdowne, and Kotdwar.',
        difficulty: 'standard',
      },
      {
        stem: 'Where is the **National Institute of Technology (NIT) Uttarakhand** established by the Ministry of Education located inside Pauri Garhwal?',
        options: ['Kotdwar', 'Srinagar (Garhwal)', 'Lansdowne', 'Thalisain'],
        correctOptionIndex: 1,
        explanation: 'Srinagar Garhwal forms an educational cluster uniting HNB Garhwal Central University, NIT Uttarakhand, and Veer Chandra Singh Garhwali Medical College.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which historic village/town along the Dogadda–Kotdwar route in Pauri Garhwal served as an active nationalist centre where **Pandit Jawaharlal Nehru** visited during 1930s rallies and **Ramprasad Nautiyal** organized freedom meetings?',
        options: ['Dogadda', 'Khirsu', 'Pabau', 'Vyasghat'],
        correctOptionIndex: 0,
        explanation: 'Surrounded by Silgad streams on the Kotdwar–Lansdowne highway, Dogadda was an active Garhwali nationalist and trade town (*also associated with Chandrashekhar Azad’s historic visit to Bhawani Singh Rawat’s village Nathupur nearby*!).',
        difficulty: 'standard',
      },
      {
        stem: 'Which revered folk and nature sanctuary dedicated to **Kandoliya Devta** sits amid dense oak and pine groves directly overlooking **Pauri town**?',
        options: [
          'Kandoliya Temple & Ransi Stadium ridge',
          'Jageshwar',
          'Surkanda',
          'Naina Peak',
        ],
        correctOptionIndex: 0,
        explanation: 'Adjacent to Ransi (one of Asia’s highest-altitude grassy sports stadiums), Kandoliya offers sweeping views of Chaukhamba and Bandarpunch.',
        difficulty: 'foundation',
      },
      {
        stem: 'Where is the **Chilla Hydroelectric Power Station (144 MW)** and **Chilla Range of Rajaji Tiger Reserve** situated along the Ganga’s eastern bank?',
        options: [
          'Yamkeshwar block of Pauri Garhwal (opposite Haridwar/Rishikesh)',
          'Khatima block',
          'Bageshwar',
          'Gopeshwar',
        ],
        correctOptionIndex: 0,
        explanation: 'Though right beside Haridwar & Rishikesh, Chilla (and Neelkanth Mahadev!) legally lie in Yamkeshwar block of Pauri Garhwal!',
        difficulty: 'standard',
      },
      {
        stem: 'In which district of Uttarakhand does the sacred **Neelkanth Mahadev Temple** (~32 km uphill from Rishikesh across the Ganga) physically fall?',
        options: [
          'Haridwar district',
          'Dehradun district',
          'Pauri Garhwal district (Yamkeshwar block)',
          'Tehri Garhwal district',
        ],
        correctOptionIndex: 2,
        explanation: 'A classic UKPSC trick question: Rishikesh sits in Dehradun (with Muni Ki Reti in Tehri), yet crossing Ram/Laxman Jhula into Neelkanth Mahadev & Swargashram falls inside **Pauri Garhwal**!',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **two blocks/regions of Pauri Garhwal** along the southern **Kalagarh–Sonanadi** boundary embrace a significant western portion of **Jim Corbett Tiger Reserve**?',
        options: [
          'Pauri and Khirsu',
          'Kotdwar / Kalagarh / Sonanadi – Nainidanda – Duggada foothills',
          'Srinagar and Kot',
          'Thalisain only',
        ],
        correctOptionIndex: 1,
        explanation: 'While Ramnagar gateway lies in Nainital, nearly half of Corbett’s core/Sonanadi buffer lies inside Pauri Garhwal!',
        difficulty: 'standard',
      },
      {
        stem: 'At **Kalagarh** in southern Pauri Garhwal, an earthfill irrigation-and-hydel dam (**Ramganga Dam**) is constructed across which major river?',
        options: ['Alaknanda', 'Western Ramganga', 'Ganga', 'Yamuna'],
        correctOptionIndex: 1,
        explanation: 'Completed in the 1970s at the southern Corbett edge, Kalagarh Ramganga Dam irrigates large tracts of western Uttar Pradesh.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which peaceful mountain ridge ~19 km from Pauri town (at ~1,700 m surrounded by oak, deodar, and apple orchards) is promoted as an offbeat eco-tourism destination?',
        options: ['Khirsu', 'Haldwani', 'Kashipur', 'Rudrapur'],
        correctOptionIndex: 0,
        explanation: 'Khirsu looks straight out across a 300-km Himalayan skyline from Bandarpoonch to Nanda Devi.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which revered **Devalgarh** historical complex near Srinagar (Pauri Garhwal) served briefly as the **capital of King Ajay Pal** before he moved to Srinagar in the early 16th century?',
        options: [
          'Devalgarh (Raj Rajeshwari Temple & Gaura Devi / Satyavan sites)',
          'Baleshwar',
          'Lakhamandal',
          'Kalsi',
        ],
        correctOptionIndex: 0,
        explanation: 'Standing on an elevated spur above Alaknanda, Devalgarh preserves Ajay Pal’s Som Ka Manda / *Raj Rajeshwari* Kuldevi heritage.',
        difficulty: 'standard',
      },
      {
        stem: 'In **Ekeshwar / Thalisain** region of Pauri Garhwal, **Tarkeshwar Mahadev** and **Jwalpa Devi** sit respectively amid ancient cedar (*Deodar*) groves and along which river?',
        options: [
          'Tons River',
          'Eastern Nayar River (for Jwalpa Devi)',
          'Kosi River',
          'Saryu River',
        ],
        correctOptionIndex: 1,
        explanation: 'Jwalpa Devi sits beside the East Nayar along the Kotdwar–Pauri road, while Tarkeshwar nestles inside sacred deodars near Lansdowne.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **4th-highest Sex Ratio (1,103)** and **4th-highest Literacy Rate (82.02%)** profile belonged to Pauri Garhwal in the 2011 Census?',
        options: [
          'Low literacy, low sex ratio',
          'High literacy (82.02%) and strong female-majority sex ratio (1,103) paired with negative decadal growth (–1.41%)',
          'Highest urbanization (80%)',
          'Highest density (900/sq km)',
        ],
        correctOptionIndex: 1,
        explanation: 'Educated youth migrating out for service/armed forces explains Pauri’s unique pairing of high literacy + high sex ratio + negative growth.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Uttarkashi District Profile',
    materialTitle: 'Uttarkashi District Administrative & Development Profile — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Uttarkashi Blocks, 3 MLAs, Maneri Bhali & Border Heritage',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Uttarkashi District Administrative & Development Profile

## 1. Administrative Snapshot
- **Division:** Garhwal | **Created:** **24 February 1960** | **Area:** **8,016 sq km** (2nd largest!) | **HQ:** Uttarkashi (*ancient **Barahat**!*).
- **CD Blocks (6):** Bhatwari, Chinyalisaur, Dunda, Mori, Naugaon, Purola.
- **Vidhan Sabha Constituencies (3):** Purola (**SC**), Yamunotri, Gangotri.

## 2. 2011 Census Standouts
- **Population:** **3,30,086** | **Population Density:** **41 persons/sq km** (**#1 Lowest Density in Uttarakhand!**).
- **Sex Ratio:** **958** | **Literacy:** **75.81%**.
- **Cultural Pockets:** **Rawai / Yamuna–Tons** belt (**Mori, Purola, Naugaon** — *Koti Banal* timber-stone architecture, *Mahasu Devta*, *Bissu* fairs) + **Bhagirathi / Taknaur / Jad–Bhotiya** belt (*Harsil, Mukhba, Nelang*).

## 3. Infrastructure, Hydel & Nature Icons
- **Run-of-River Hydel:** **Maneri Bhali Stage-I (90 MW, Tiloth)** & **Stage-II (304 MW, Dharasu)** on Bhagirathi; **Mori–Netwar (60 MW)** on Tons; **Lakhwar–Vyasi** downstream corridor.
- **Protected Areas:** **Gangotri NP (~2,390 sq km — UK's largest!)** & **Govind Pashu Vihar WLS/NP** (*Har-ki-Dun, Ruinsara Tal, Kedarkantha*).
- **Agri & Treks:** **Harsil & Naugaon Apples** (*Wilson’s early orchards in Harsil!*), **Red Rice (*Lal Chawal*) of Purola/Rama Serai**, **Dayara Bugyal** (*Butter Festival / Andhuri Utsav* in August!), **Tapovan–Gaumukh**, **Nachiketa Tal**.

## 4. Key Revision Takeaways
- **6 CD Blocks** (*Bhatwari, Dunda, Chinyalisaur, Naugaon, Purola, Mori*) & **3 MLAs** (*Purola SC, Yamunotri, Gangotri*).
- **Barahat** = ancient name of Uttarkashi; **Maneri Bhali Stages I & II** harness Bhagirathi upstream of Tehri.
- **Dayara Bugyal** (*Andhuri / Butter Festival*), **Har-ki-Dun** (*Tons basin*), and **Purola Red Rice** highlight Uttarkashi's profile.`,
    mcqs: [
      {
        stem: 'What was the historic ancient name of **Uttarkashi** town recorded in early Garhwal copper plates and Puranic traditions?',
        options: ['Champavati', 'Barahat (*Soumya Kashi*)', 'Kartikeyapura', 'Mayapuri'],
        correctOptionIndex: 1,
        explanation: 'Located inside a crescent bend of the Bhagirathi flanked by Varunavat Parvat and Asi/Varuna streams, ancient Barahat mirrors Varanasi ("Uttara-Kashi").',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **three Vidhan Sabha Assembly constituencies** represent **Uttarkashi district** in the Uttarakhand Legislature?',
        options: [
          'Tehri, Pratapnagar, Ghansali',
          'Purola (SC), Yamunotri, and Gangotri',
          'Badrinath, Tharali, Karnaprayag',
          'Chakrata, Vikasnagar, Tyuni',
        ],
        correctOptionIndex: 1,
        explanation: 'Purola (SC reserved), Yamunotri, and Gangotri together form Uttarkashi’s three seats under Tehri Garhwal Lok Sabha.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **six Community Development Blocks** constitute rural administration across Uttarkashi district?',
        options: [
          'Bhatwari, Chinyalisaur, Dunda, Mori, Naugaon, and Purola',
          'Joshimath, Pokhari, Karnaprayag, Gairsain, Narayanbagar, Tharali',
          'Ukhimath, Jakholi, Augustmuni, Chamba, Bhilangana, Thauldhar',
          'Kapkot, Garur, Bageshwar, Sult, Tarikhet, Syalde',
        ],
        correctOptionIndex: 0,
        explanation: 'Mori, Purola, and Naugaon lie along the Tons–Yamuna valleys, while Bhatwari, Dunda, and Chinyalisaur trace the Bhagirathi corridor.',
        difficulty: 'standard',
      },
      {
        stem: 'Located on the Bhagirathi River upstream of Tehri Dam inside Uttarkashi district, the **Maneri Bhali Stage-I (Tiloth, 90 MW)** and **Stage-II (Dharasu, 304 MW)** projects exemplify which engineering design?',
        options: [
          'Massive multi-year storage dams like Tehri',
          'Run-of-the-river diversion projects using barrages and headrace rock tunnels',
          'Coal-fired thermal boilers',
          'Tidal ocean turbines',
        ],
        correctOptionIndex: 1,
        explanation: 'Run-of-river diversions tunnel water across steep river loops without large permanent reservoir submergence.',
        difficulty: 'standard',
      },
      {
        stem: 'Which playful alpine meadow festival—celebrated every August at **Dayara Bugyal** (above Barsu/Raithal in Bhatwari block)—saw villagers smear milk, curd, and butter before evolving into organic eco-tourism (*"Andhuri Utsav"*)?',
        options: [
          'Butter Festival (*Makhan Holi / Andhuri Utsav*)',
          'Bagwal Stone Fair',
          'Jhanda Mela',
          'Kandali Utsav',
        ],
        correctOptionIndex: 0,
        explanation: 'Pastoralists thank Lord Krishna/nature for lush monsoon Bugyal pastures during the traditional *Andhuri* celebration.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who is historically credited in the mid-19th century with introducing **commercial temperate apple orchards** (the famous *Wilson / Harsil apples*) into **Harsil (Uttarkashi)**?',
        options: [
          'Jim Corbett',
          'Frederick "Pahadi" Wilson (a former British soldier turned timber contractor who married locally at Harsil)',
          'Sir Henry Ramsay',
          'G.W. Traill',
        ],
        correctOptionIndex: 1,
        explanation: 'Alongside timber transport along the Bhagirathi, Wilson planted apple varieties in Harsil whose descendants remain prized across India.',
        difficulty: 'standard',
      },
      {
        stem: 'Known for its fragrant **Red Rice (*Lal Chawal*)** grown across fertile river terraces along the Kamal River, **Rama Serai valley** lies inside which block/tehsil of Uttarkashi?',
        options: ['Bhatwari', 'Purola', 'Dunda', 'Chinyalisaur'],
        correctOptionIndex: 1,
        explanation: 'Purola’s broad alluvial **Rama Serai** bowl produces organic Red Rice (*Chaurdhan / Lal dhan*) prized across Uttarakhand.',
        difficulty: 'standard',
      },
      {
        stem: 'Located inside **Govind Wildlife Sanctuary** in the **Mori block** of Uttarkashi, the scenic **Har-ki-Dun** cradle-shaped valley is flanked by peaks like Swargarohini and drained by:',
        options: ['Bhagirathi', 'Supin River (headwater of Tons)', 'Bhilangana', 'Pindar'],
        correctOptionIndex: 1,
        explanation: 'From Sankri and Taluka/Osla, the Har-ki-Dun trail ascends the Supin gorge along ancient timber-carved villages.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which famous ancient bronze/brass trident (**Shakti Stambha**) bearing Sanskrit inscriptions of **King Guha / Nagas / Ganapatinaga** stands prominently inside Uttarkashi’s courtyard?',
        options: [
          'Inside **Kashi Vishwanath / Shakti Temple, Uttarkashi**',
          'Inside Gangotri glacier',
          'Inside Tehri Lake',
          'Inside Kalsi Rock',
        ],
        correctOptionIndex: 0,
        explanation: 'Paired with Gopeshwar’s trident, Uttarkashi’s monumental metallic *Shakti Trishul* reflects ancient North Indian Nagas/Himalayan metallurgy.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **high-altitude glacial tarn** at the foot of Thalaysagar and Bhrigupanth peaks (~4,750 m, accessed via Gangotri) mirrors towering granite spires above the **Kedar Ganga** stream?',
        options: ['Nachiketa Tal', 'Kedar Tal', 'Deoria Tal', 'Naukuchiatal'],
        correctOptionIndex: 1,
        explanation: 'Kedar Tal feeds the Kedar Ganga joining the Bhagirathi right at Gangotri.',
        difficulty: 'standard',
      },
      {
        stem: 'Inside **Bhatwari block**, hot geothermal springs at **Gangnani (*Rishikund*)** are notable geologically for:',
        options: [
          'Sub-zero liquid helium',
          'Natural geothermal water heated along deep **Main Central Thrust (MCT)** crustal fractures before emerging at ~60°C+',
          'Artificial solar geysers',
          'Volcanic basalt lava flows',
        ],
        correctOptionIndex: 1,
        explanation: 'Himalayan geothermal springs (Gangnani, Yamunotri Surya Kund, Tapovan Joshimath) trace active MCT fault circulation.',
        difficulty: 'standard',
      },
      {
        stem: 'Under **Uttarkashi’s winter Char Dham heritage**, which two scenic villages host the winter palanquins (*Doli*) of **Maa Ganga (Gangotri)** and **Maa Yamuna (Yamunotri)** respectively?',
        options: [
          'Ukhimath and Pandukeshwar',
          'Mukhba (Gangotri winter seat) and Kharsali (Yamunotri winter seat)',
          'Nauti and Gopeshwar',
          'Chinyalisaur and Purola',
        ],
        correctOptionIndex: 1,
        explanation: 'Mukhba (near Harsil) hosts Maa Ganga, while Kharsali (near Janki Chatti) hosts Maa Yamuna with its ancient multi-storey Shani/Someshwar timber temple.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **small-plane / helicopter airstrip** in **Uttarkashi district** (along the Dharasu–Tehri route) strengthens emergency disaster airlift and regional UDAN connectivity?',
        options: [
          'Pithoragarh Naini Saini',
          'Chinyalisaur (Maa Ganga Airstrip)',
          'Gauchar Airstrip',
          'Pantnagar Airport',
        ],
        correctOptionIndex: 1,
        explanation: 'Chinyalisaur in Uttarkashi, Gauchar in Chamoli, and Naini Saini in Pithoragarh form Uttarakhand’s strategic mountain airstrip network.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which community living in **Harsil, Bagori, Dunda, and Nelang** of Uttarkashi belongs to the **Bhotiya** ethnolinguistic group and traditionally carried wool and salt across Himalayan passes into Tibet?',
        options: [
          'Jaunsaris',
          'Jads (Jad Bhotiyas)',
          'Tharus',
          'Rajis',
        ],
        correctOptionIndex: 1,
        explanation: 'Jad Bhotiyas winter in Dunda/Veerpur and summer in Harsil/Bagori, preserving Tibetan-border weaving and pastoral culture.',
        difficulty: 'standard',
      },
      {
        stem: 'In 2011 Census rankings, **Uttarkashi** has the **lowest population density (41/sq km)** in Uttarakhand while ranking **second largest in area** (8,016 sq km) just behind:',
        options: ['Pithoragarh', 'Chamoli (8,030 sq km)', 'Pauri Garhwal', 'Nainital'],
        correctOptionIndex: 1,
        explanation: 'Chamoli (8,030 sq km), Uttarkashi (8,016 sq km), and Pithoragarh (7,090 sq km) are Uttarakhand’s three largest mountain districts.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Chamoli District Profile',
    materialTitle: 'Chamoli District Administrative & Development Profile — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Chamoli Blocks, 3 MLAs, Gairsain, Mana & Glaciers',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Chamoli District Administrative & Development Profile

## 1. Administrative Snapshot
- **Division:** Garhwal | **Created:** **24 Feb 1960** | **Area:** **8,030 sq km (#1 Largest in UK!)** | **HQ:** **Gopeshwar** (near Chamoli town).
- **Summer State Capital:** **Bhararisain (Gairsain)**!
- **CD Blocks (9):** Dasholi (Gopeshwar), Dewal, Gairsain, Ghat (Nandanagar), Joshimath (Jyotirmath), Karnaprayag, Narayanbagar, Pokhari, Tharali.
- **Vidhan Sabha Constituencies (3):** Badrinath, Tharali (**SC**), Karnaprayag.

## 2. 2011 Census Profile
- **Population:** **3,91,605** | **Density:** **49/sq km** (**2nd lowest** after Uttarkashi's 41!).
- **Literacy:** **82.65%** (**#3 highest in UK**!) | **Sex Ratio:** **1,019** (healthy female majority).

## 3. Natural, Cultural & Strategic Landmarks
- **River Origins & Confluences:** **Satopanth / Alkapuri Glacier** (*Alaknanda origin*); **Vishnuprayag** (*Alaknanda + Dhauliganga West*), **Nandaprayag** (*+ Nandakini*), **Karnaprayag** (*+ Pindar* — draining Pindari–Kafni–Nanda Devi!).
- **Highest Peaks in India/UK:** **Nanda Devi (7,816 m — highest peak wholly inside India!)**, **Kamet (7,756 m)**, **Mana**, **Trishul**, **Chaukhamba**, **Nilkanth**, **Hathi–Gauri Parvat**.
- **Heritage & Tourism:** **Badrinath Dham**, **Valley of Flowers & Nanda Devi NPs** (UNESCO), **Hemkund Sahib**, **Auli**, **Mana** (Vyas Gufa, Ganesh Gufa, Bhim Pul, Saraswati origin!), **Bedni & Ali Bugyals**, **Gwaldam** (hill station bordering Bageshwar), **Gauchar Airstrip & Mela**, **HRDI Mandal–Gopeshwar**, **Malari** burial archaeology!

## 4. Key Revision Takeaways
- **Chamoli** = **Largest Area (8,030 sq km)**, **2nd Lowest Density (49/sq km)**, **3rd Highest Literacy (82.65%)**.
- Hosts **Bhararisain (Gairsain) Summer Capital**, **Nanda Devi Peak (7,816 m)**, and **9 CD Blocks / 3 MLAs (*Tharali SC*)**.`,
    mcqs: [
      {
        stem: 'Standing at **7,816 metres** inside **Chamoli district**, which mountain summit is the **highest peak located wholly within the territorial boundary of India**?',
        options: [
          'Kangchenjunga (on Nepal–Sikkim border)',
          'Nanda Devi (West / Main Peak, 7,816 m)',
          'Kamet (bordering Tibet)',
          'Panchachuli-II',
        ],
        correctOptionIndex: 1,
        explanation: 'While Kangchenjunga (8,586 m) sits on the India–Nepal border and K2 in PoK, Nanda Devi (7,816 m) lies completely inside Chamoli, Uttarakhand.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **three Vidhan Sabha Assembly constituencies** fall inside **Chamoli district**?',
        options: [
          'Kedarnath, Rudraprayag, Ukhimath',
          'Badrinath, Tharali (SC), and Karnaprayag',
          'Purola, Yamunotri, Gangotri',
          'Srinagar, Pauri, Chaubattakhal',
        ],
        correctOptionIndex: 1,
        explanation: 'Tharali is Chamoli’s SC-reserved seat, sitting alongside Badrinath and Karnaprayag under the Garhwal Lok Sabha seat.',
        difficulty: 'foundation',
      },
      {
        stem: 'From which twin glaciers situated upstream of **Mana village** in Chamoli does the **Alaknanda River** officially originate?',
        options: [
          'Gangotri and Khatling',
          'Satopanth and Bhagirath Kharak Glaciers (Alkapuri Bank)',
          'Milam and Ralam',
          'Pindari and Kafni',
        ],
        correctOptionIndex: 1,
        explanation: 'At the confluence of meltstreams from Satopanth and Bhagirath Kharak glaciers (Alkapuri), the Alaknanda emerges below Nilkanth & Chaukhamba.',
        difficulty: 'standard',
      },
      {
        stem: 'Inside **Chamoli district**, where is the **Bhararisain** Assembly complex situated—serving as Uttarakhand’s **Summer Capital**?',
        options: [
          'Joshimath block',
          'Gairsain block (Ramganga / Dudhatoli fringe centrally bridging Garhwal & Kumaon)',
          'Dewal block',
          'Pokhari block',
        ],
        correctOptionIndex: 1,
        explanation: 'Choosing Gairsain honoured decades-old grassroots statehood sentiment seeking mountain-centric balanced development.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **archaeological site in Chamoli’s Niti Valley** (excavated by Garhwal University historians) revealed ancient pre-iron/iron-age burial chambers yielding **gold masks, horse skeletons, and spoked ceramic vessels**?',
        options: ['Lakhudiyar', 'Malari Village', 'Kalsi', 'Govishan'],
        correctOptionIndex: 1,
        explanation: 'Malari’s trans-Himalayan rock-cut cist burials (~1st millennium BCE–early CE) illuminate ancient central-Asian–Himalayan links.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **two communities of Bhotiyas** traditionally inhabit Chamoli’s **Mana** and **Niti** border valleys respectively?',
        options: [
          'Tharus and Bhoxas',
          'Marchha and Tolchha Bhotiyas',
          'Jaunsaris and Rajis',
          'Joharis and Rungs',
        ],
        correctOptionIndex: 1,
        explanation: 'Marchhas (Mana/Joshimath) and Tolchhas (Niti/Tapovan) practised seasonal transhumance, wintering in Gopeshwar/Chamoli/Ghat.',
        difficulty: 'standard',
      },
      {
        stem: 'Which scenic ridge hamlet on the **Chamoli–Bageshwar border** (known for panoramic Trishul–Nanda Ghunti sunrise views and Sashastra Seema Bal training legacy) sits just past Tharali & Dewal?',
        options: ['Gwaldam', 'Chakrata', 'Dhanaulti', 'Lansdowne'],
        correctOptionIndex: 0,
        explanation: 'Gwaldam connects Chamoli’s Pindar valley directly to Baijnath and Kausani in Bageshwar.',
        difficulty: 'foundation',
      },
      {
        stem: 'In **Mana** (northernmost border village along the Saraswati–Alaknanda confluence beyond Badrinath), which legendary natural rock-boulder bridge spans the roaring **Saraswati River**?',
        options: [
          'Laxman Jhula',
          'Bhim Pul',
          'Dobra–Chanti Bridge',
          'Janki Setu',
        ],
        correctOptionIndex: 1,
        explanation: 'Alongside Vyas Gufa (traditionally linked to Maharishi Veda Vyasa composing the Mahabharata) and Ganesh Gufa, Bhim Pul draws pilgrims to Mana.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **9 Community Development Blocks** administer Chamoli district?',
        options: [
          'Dasholi, Dewal, Gairsain, Nandanagar (Ghat), Joshimath, Karnaprayag, Narayanbagar, Pokhari, and Tharali',
          'Chamba, Bhilangana, Jaunpur, Kirtinagar, Narendranagar, Pratapnagar',
          'Bhatwari, Dunda, Purola, Mori, Naugaon, Chinyalisaur',
          'Laksar, Khanpur, Narsan, Roorkee, Bahadrabad, Bhagwanpur',
        ],
        correctOptionIndex: 0,
        explanation: 'District headquarters Gopeshwar lies inside **Dasholi** block (home of Dasholi Gram Swarajya Mandal!).',
        difficulty: 'standard',
      },
      {
        stem: 'What was Chamoli district’s **Population Density** (persons/sq km) in the 2011 Census—ranking second-lowest in Uttarakhand right after Uttarkashi?',
        options: ['189', '49', '801', '129'],
        correctOptionIndex: 1,
        explanation: 'Across 8,030 sq km (state’s largest), Chamoli’s 3.91 lakh residents yield just 49 persons/sq km.',
        difficulty: 'standard',
      },
      {
        stem: 'Which sacred thermal spring (**Tapt Kund**) and **Panch Shilas** (*Narad, Narsimha, Varaha, Garuda, Markandeya*) are integral ritual features beside which Chamoli Dham?',
        options: [
          'Kedarnath',
          'Badrinath Dham (Vishal Badri)',
          'Gangotri',
          'Tungnath',
        ],
        correctOptionIndex: 1,
        explanation: 'Pilgrims bathe in hot geothermal waters of Tapt Kund beside the freezing Alaknanda before entering Badrinath Temple (served traditionally by Kerala Namboodiri *Rawal* priests!).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **two spectacular high-altitude meadows (Bugyals)** in Chamoli’s **Dewal / Mundoli** corridor serve as the main sacred resting camp along the **Nanda Devi Raj Jat Yatra** below Trishul peak?',
        options: [
          'Dayara and Gidara',
          'Ali Bugyal and Bedni Bugyal',
          'Khaliya Top and Johar',
          'Chopta and Panwali',
        ],
        correctOptionIndex: 1,
        explanation: 'Connected via Wan and Lohajung villages, twin Ali–Bedni Bugyals also lead further upward to Roopkund and Homkund.',
        difficulty: 'foundation',
      },
      {
        stem: 'In **Joshimath (recently restored officially as Jyotirmath)**, which sacred ancient **Kalpavriksha (giant mulberry tree)** stands beside **Adi Shankaracharya’s Jyoteshwar cave**?',
        options: [
          'Banyan tree at Haridwar',
          'Ancient Mulberry **Kalpavriksha** revered as over a millennium old',
          'Deodar at Binsar',
          'Sal tree at Corbett',
        ],
        correctOptionIndex: 1,
        explanation: 'Revered as the spiritual meditation site of Adi Shankaracharya, Joshimath’s Kalpavriksha sits beside Narasimha Temple (Badrinath’s winter shrine).',
        difficulty: 'foundation',
      },
      {
        stem: 'Located ~10 km from Chamoli town at **Mandal**, which **State Research Institute** under Uttarakhand Forest/Horticulture focuses on ex-situ alpine medicinal herb conservation?',
        options: [
          'CBRI',
          'HRDI (Herbal Research and Development Institute)',
          'IIRS',
          'VPKAS',
        ],
        correctOptionIndex: 1,
        explanation: 'HRDI Mandal researches cultivation protocols for *Kutki, Jatamansi, Atis, Brahma Kamal,* and *Salampanja*.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **two mountain tributaries** merge into the Alaknanda inside **Chamoli** before the Pindar joins at Karnaprayag?',
        options: [
          'Bhagirathi and Tons',
          'Western Dhauliganga (at Vishnuprayag) and Nandakini (at Nandaprayag)',
          'Mandakini and Bhilangana',
          'Saryu and Gomti',
        ],
        correctOptionIndex: 1,
        explanation: 'Downstream order of Panch Prayags: Vishnuprayag (+Dhauliganga) -> Nandaprayag (+Nandakini) -> Karnaprayag (+Pindar) -> Rudraprayag (+Mandakini) -> Devprayag (+Bhagirathi).',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Rudraprayag District Profile',
    materialTitle: 'Rudraprayag District Administrative & Development Profile — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Rudraprayag Blocks, 2 MLAs, Mandakini & Kedar Heritage',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Rudraprayag District Administrative & Development Profile

## 1. Administrative Snapshot
- **Division:** Garhwal | **Created:** **16 Sept 1997** (carved from Chamoli, Tehri & Pauri) | **Area:** **1,984 sq km** (2nd smallest district!).
- **CD Blocks (3 — fewest blocks in any Uttarakhand district alongside Bageshwar/Champawat's 3–4!):** **Agastyamuni**, **Jakholi**, **Ukhimath**.
- **Vidhan Sabha Constituencies (2 — tied fewest with Bageshwar & Champawat!):** **Kedarnath**, **Rudraprayag**. *(Note: Rudraprayag lies inside **Garhwal [Pauri] Lok Sabha** constituency).*

## 2. 2011 Census Profile
- **Population:** **2,42,285** (**#1 Lowest Total Population in Uttarakhand!**).
- **Sex Ratio:** **1,114** (**#2 Highest in UK** right after Almora's 1,139!).
- **Literacy:** **81.30%** (#5 in UK!) | **Urbanization:** **4.10%** (**2nd least urbanized** after Bageshwar’s 3.49%!).

## 3. Sacred Geography, Rivers & Eco-Tourism
- **Mandakini Basin:** Originates at **Chorabari Glacier** above **Kedarnath** (3,583 m); collects **Madmaheshwar Ganga**, **Son Ganga**, **Kali Ganga**, and **Laster Gad** before merging with **Alaknanda** at **Rudraprayag**!
- **Key Shrines:** **Kedarnath** (*11th Jyotirlinga*), **Tungnath** (Chopta), **Madmaheshwar**, **Omkareshwar (Ukhimath)**, **Triyuginarayan**, **Kalimath** (one of key *Siddha Peeths* on Saraswati–Mandakini stream!), **Guptkashi** (*Vishwanath & Ardhanarishwar*), **Koteshwar Mahadev** cave, **Kartik Swami** (Kronch Parvat), **Agastyamuni**.
- **Conservation & Wildlife:** Major core of **Kedarnath Wildlife Sanctuary** (*Himalayan Musk Deer* sanctuary) + **Chopta** ("Mini Switzerland of Garhwal") + **Deoria Tal** + **Vasuki Tal** + **Sonprayag** heli-hubs!

## 4. Key Revision Takeaways
- **Rudraprayag** has **3 CD Blocks** (*Agastyamuni, Jakholi, Ukhimath*), **2 Assembly seats** (*Kedarnath, Rudraprayag*), **lowest total population (~2.42 lakh)**, and **2nd highest sex ratio (1,114)**.
- **Mandakini River** flows from **Chorabari (Kedarnath)** straight to **Rudraprayag** (meeting **Alaknanda**).`,
    mcqs: [
      {
        stem: 'Which **three Community Development Blocks** constitute the entire rural block structure of **Rudraprayag district** (smallest population district in Uttarakhand)?',
        options: [
          'Agastyamuni, Jakholi, and Ukhimath',
          'Bhatwari, Dunda, and Mori',
          'Bageshwar, Garur, and Kapkot',
          'Champawat, Lohaghat, and Barakot',
        ],
        correctOptionIndex: 0,
        explanation: 'Rudraprayag and Bageshwar each organize rural development through 3 CD Blocks (Champawat has 4: Champawat, Lohaghat, Barakot, Pati).',
        difficulty: 'standard',
      },
      {
        stem: 'How many **Vidhan Sabha Assembly constituencies** represent **Rudraprayag district**, and what are their names?',
        options: [
          '4 — Kedarnath, Ukhimath, Jakholi, Agastyamuni',
          '2 — Kedarnath and Rudraprayag',
          '3 — Badrinath, Kedarnath, Rudraprayag',
          '1 — Rudraprayag only',
        ],
        correctOptionIndex: 1,
        explanation: 'Rudraprayag, Bageshwar, and Champawat each elect 2 MLAs to the 70-member Uttarakhand Assembly.',
        difficulty: 'foundation',
      },
      {
        stem: 'At **Rudraprayag** town, the **Mandakini River** descending from Kedarnath joins which parent river?',
        options: ['Bhagirathi', 'Alaknanda', 'Bhilangana', 'Yamuna'],
        correctOptionIndex: 1,
        explanation: 'Mandakini joins Alaknanda at Rudraprayag, the 4th of the Panch Prayags descending from Vishnuprayag to Devprayag.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which lush meadow gateway along the **Ukhimath–Gopeshwar** road in Rudraprayag—often nicknamed **"Mini Switzerland of Uttarakhand"**—serves as the trailhead for **Tungnath & Chandrashila**?',
        options: ['Kausani', 'Chopta', 'Auli', 'Dhanaulti'],
        correctOptionIndex: 1,
        explanation: 'Sitting amid thick rhododendron and oak woods inside Kedarnath WLS, Chopta is a prime birding (Monal!) and winter-trekking hub.',
        difficulty: 'foundation',
      },
      {
        stem: 'Situated in a serene valley above Guptkashi along the Saraswati stream (a Mandakini tributary), **Kalimath** is revered primarily as:',
        options: [
          'A colonial tea garden',
          'One of Uttarakhand’s prominent **Shakti Siddha Peeths** (worshipping Goddess Kali in a sacred *Sri Yantra* mound without an external statue inside the *garbhagriha*)',
          'A coal mine',
          'A railway junction',
        ],
        correctOptionIndex: 1,
        explanation: 'Kalimath is renowned in Devi mythology for Goddess Kali slaying Raktabija and stands near Koteshwar/Guptkashi.',
        difficulty: 'standard',
      },
      {
        stem: 'Located atop **Kronch Parvat** near **Kanakchauri** along the Rudraprayag–Pokhari border ridge, the hilltop **Kartik Swami Temple** is dedicated to:',
        options: [
          'Lord Ganesha',
          'Lord Kartikeya (Murugan / Shiva’s elder son)',
          'Lord Surya',
          'Lord Hanuman',
        ],
        correctOptionIndex: 1,
        explanation: 'Kartik Swami is one of very few North Indian mountain temples dedicated specifically to Kartikeya, offering 360-degree Greater Himalayan panoramas.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which revered shrine town ~4 km north of Ukhimath along the Mandakini valley features an ancient stone **Vishwanath Temple** paired with *Manikarnika Kund* (fed by two streams called Ganga and Yamuna)?',
        options: ['Guptkashi', 'Sonprayag', 'Agastyamuni', 'Tilwara'],
        correctOptionIndex: 0,
        explanation: 'Mythologically linked to the Pandavas seeking Shiva before moving toward Kedarnath ("Hidden Kashi" = Guptkashi), it anchors Kedar-valley heritage.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **high-altitude glacial lake** (~4,135 m) located ~8 km above **Kedarnath Temple** beneath Kedar Dome is famous for floating crystal ice slabs and Brahma Kamal blooms?',
        options: ['Deoria Tal', 'Vasuki Tal', 'Dodital', 'Bhimtal'],
        correctOptionIndex: 1,
        explanation: 'Vasuki Tal lies high above Kedarnath’s western ridge across from Chorabari Tal.',
        difficulty: 'standard',
      },
      {
        stem: 'What rank did **Rudraprayag** hold in **Urbanization % (4.10%)** and **Sex Ratio (1,114)** across Uttarakhand in the 2011 Census?',
        options: [
          'Highest urbanized & lowest sex ratio',
          '2nd least urbanized (4.10%, just above Bageshwar) and **2nd highest Sex Ratio (1,114)** right behind Almora',
          '50% urbanized and 900 sex ratio',
          'Equal to Dehradun',
        ],
        correctOptionIndex: 1,
        explanation: 'Nearly 96% of Rudraprayag residents live in rural hill villages sustaining strong community cohesion despite tough terrain.',
        difficulty: 'standard',
      },
      {
        stem: 'At **Sonprayag** in Rudraprayag district along the Kedarnath highway, the Mandakini River receives which sacred tributary coming down from **Triyuginarayan**?',
        options: [
          'Alaknanda',
          'Basuki Ganga / Songanga (also known locally as *Son Ganga* / *Mandakini–Basuki* sangam)',
          'Kosi',
          'Bhagirathi',
        ],
        correctOptionIndex: 1,
        explanation: 'Basuki Ganga joins the Mandakini at Sonprayag, marking the sacred vehicle-transfer gateway up toward Gaurikund and Kedarnath.',
        difficulty: 'standard',
      },
      {
        stem: 'Before its creation on **16 September 1997**, Rudraprayag’s territory belonged originally across which **three adjoining districts**?',
        options: [
          'Nainital, Almora, Pithoragarh',
          'Chamoli, Tehri Garhwal, and Pauri Garhwal',
          'Dehradun, Haridwar, Uttarkashi',
          'Bageshwar, Champawat, US Nagar',
        ],
        correctOptionIndex: 1,
        explanation: 'Jakholi came largely from Tehri, Ukhimath & upper Agastyamuni from Chamoli, and southern Rudraprayag areas from Pauri.',
        difficulty: 'standard',
      },
      {
        stem: 'In **Ukhimath**, which ancient temple houses the **winter seat (*Gaddi*)** of both **Lord Kedarnath** and **Madmaheshwar** throughout snowy winter months?',
        options: [
          'Bagnath Temple',
          'Omkareshwar Temple',
          'Narasimha Temple',
          'Kamleshwar Temple',
        ],
        correctOptionIndex: 1,
        explanation: 'Every autumn post-Bhai Dooj, Kedarnath’s *Panchmukhi Utsav Doli* descends from the shrine via Gaurikund/Guptkashi to Omkareshwar Temple, Ukhimath.',
        difficulty: 'foundation',
      },
      {
        stem: 'Where is **Gauri Kund**—the hot-spring base camp marking the start of the steep ~16–18 km pedestrian/pony ascent to **Kedarnath**—situated?',
        options: [
          'Chamoli district',
          'Rudraprayag district (along Mandakini above Sonprayag)',
          'Uttarkashi district',
          'Tehri district',
        ],
        correctOptionIndex: 1,
        explanation: 'Revered as the meditation site of Goddess Parvati (Gauri) before marrying Shiva, Gaurikund features natural hot thermal springs.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **3rd Panch Kedar shrine** inside Rudraprayag district—reached via **Ransi & Gaundhar** in Ukhimath block—sits dramatically beneath the **Chaukhamba massif**?',
        options: ['Tungnath', 'Madmaheshwar', 'Kalpeshwar', 'Rudranath'],
        correctOptionIndex: 1,
        explanation: 'Known as *Dwitiya Kedar* (2nd Kedar), Madmaheshwar sits at ~3,497 m in the verdant Madmaheshwar Ganga valley.',
        difficulty: 'standard',
      },
      {
        stem: 'Which historic **19th-century wildlife chronicle** by **Jim Corbett** (*The Man-Eating Leopard of Rudraprayag*) unfolded across the Alaknanda–Mandakini pilgrim road between 1918 and 1926?',
        options: [
          'The tracking and elimination of the notorious Rudraprayag leopard near **Gulabrai** (saving Char Dham pilgrims)',
          'Champawat Tigress',
          'Mohan Man-eater',
          'Thak Tiger',
        ],
        correctOptionIndex: 0,
        explanation: 'Jim Corbett spent months patrolling bridges and *chattis* at Rudraprayag–Gulabrai before ending the terror in May 1926.',
        difficulty: 'foundation',
      },
    ],
  },
];
