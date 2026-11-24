import { TopicContentPackage } from './types';

export const UTTARAKHAND_GEOGRAPHY_PART_A: TopicContentPackage[] = [
  {
    topicTitle: 'Geographical Location, Boundaries & Strategic Importance of Uttarakhand',
    materialTitle: 'Geographical Location, Boundaries & Strategic Importance of Uttarakhand — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Location & Strategic Importance of Uttarakhand',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Geographical Location, Boundaries & Strategic Importance of Uttarakhand

## 1. Conceptual Overview & Latitudinal–Longitudinal Coordinates
Uttarakhand lies on the southern slope of the central-western Himalayan arc in northern India. Formed on **9 November 2000** as the 27th state of the Indian Union, it forms a critical ecological and geopolitical bridge between the Indo-Gangetic Plains and the Tibetan Plateau.

| Spatial Parameter | Verified Details |
|---|---|
| **Latitudinal Extent** | 28°43' N to 31°27' N (approx. 2°44' span) |
| **Longitudinal Extent** | 77°34' E to 81°02' E (approx. 3°28' span) |
| **Total Geographical Area** | 53,483 sq. km (approx. 1.63% of India's geographical area) |
| **Predominant Terrain** | Nearly 86% mountainous terrain and 14% plains/foothills |
| **Shape & Orientation** | Roughly rectangular, elongated NW to SE along the Himalayan strike |

## 2. International and Inter-State Boundaries
Uttarakhand shares borders with **two sovereign nations** and **two Indian states**:
1. **International Borders (~625 km combined):**
   - **China (Tibet Autonomous Region)** to the north and northeast (~350 km), bordering **Uttarkashi, Chamoli, and Pithoragarh** districts.
   - **Nepal** to the east and southeast (~275 km), mostly demarcated by the **Kali (Mahakali / Sharda)** river, bordering **Pithoragarh, Champawat, and Udham Singh Nagar** districts.
   - **Pithoragarh** is the only district in Uttarakhand sharing an international boundary with both China and Nepal.
2. **Inter-State Borders:**
   - **Himachal Pradesh** to the northwest (Uttarkashi and Dehradun districts, partly along the Tons and Yamuna valleys).
   - **Uttar Pradesh** to the south and southwest (Dehradun, Haridwar, Pauri Garhwal, Nainital, and Udham Singh Nagar districts).

> **Note on Border Territory Claims:** While India administers the Kalapani–Lipulekh–Limpiyadhura corridor as part of Pithoragarh district, Nepal has periodically raised diplomatic claims over parts of this tri-junction area based on differing readings of the 1816 Treaty of Sugauli regarding the headwater branch of the Kali river.

## 3. Administrative Geography (Divisions & Districts)
- **Two Administrative Divisions:** **Garhwal** (7 districts: Dehradun, Haridwar, Tehri Garhwal, Pauri Garhwal, Uttarkashi, Chamoli, Rudraprayag) and **Kumaon** (6 districts: Nainital, Almora, Pithoragarh, Udham Singh Nagar, Bageshwar, Champawat).
- **Largest vs Smallest Districts by Area:** **Chamoli** (8,030 sq. km) is the largest district (slightly larger than Uttarkashi at 8,016 sq. km in current state statistical abstracts, though older gazetteers occasionally noted minor boundary differences), while **Champawat** (1,766 sq. km) is the smallest district.
- **Internal Districts (No external border):** Tehri Garhwal, Rudraprayag, Almora, and Bageshwar are completely landlocked within Uttarakhand.

## 4. Strategic & Geopolitical Significance
- **Central Sector Defence:** Uttarakhand sits in the Central Sector of the India–China Line of Actual Control (LAC), guarded primarily by the **Indo-Tibetan Border Police (ITBP)** alongside the Indian Army.
- **Historical Trans-Himalayan Passes:** Mana, Niti, Kungri-Bingri, Darma, and Lipulekh passes historically enabled Bhotia cross-border trade with Tibet and today serve pilgrimage and border logistics.
- **Hydrological Security ("Water Tower"):** Headwaters of the Ganga (Bhagirathi–Alaknanda) and Yamuna originate here, making mountain stability vital for downstream north Indian states.

## 5. Key Revision Takeaways
- Area: 53,483 sq. km; 2 divisions, 13 districts (7 Garhwal, 6 Kumaon).
- **Pithoragarh** borders both China and Nepal; **4 districts** (Tehri, Rudraprayag, Almora, Bageshwar) are landlocked.
- **Dehradun** borders Himachal Pradesh and Uttar Pradesh; **Udham Singh Nagar** borders Nepal and Uttar Pradesh.
`,
    mcqs: [
      {
        stem: 'Which district of Uttarakhand shares an international boundary with both China (Tibet) and Nepal?',
        options: ['Chamoli', 'Uttarkashi', 'Pithoragarh', 'Champawat'],
        correctOptionIndex: 2,
        explanation: 'Pithoragarh lies in the northeastern corner of Kumaon and touches Tibet (China) to the north and Nepal along the Kali river to the east.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the approximate total geographical area of Uttarakhand?',
        options: ['44,220 sq. km', '53,483 sq. km', '58,912 sq. km', '62,140 sq. km'],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand covers 53,483 sq. km, accounting for roughly 1.63% of India\'s total geographical area.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which group of districts in Uttarakhand is completely internal (neither bordering any foreign country nor any other Indian state)?',
        options: [
          'Tehri Garhwal, Rudraprayag, Almora, Bageshwar',
          'Tehri Garhwal, Chamoli, Almora, Bageshwar',
          'Rudraprayag, Pauri Garhwal, Champawat, Almora',
          'Bageshwar, Udham Singh Nagar, Tehri Garhwal, Rudraprayag',
        ],
        correctOptionIndex: 0,
        explanation: 'Tehri Garhwal, Rudraprayag, Almora, and Bageshwar are the four completely landlocked districts of Uttarakhand.',
        difficulty: 'standard',
      },
      {
        stem: 'Along the eastern boundary of Uttarakhand, which river largely forms the natural border between India and Nepal?',
        options: ['Tons', 'Alaknanda', 'Kali (Sharda)', 'Western Ramganga'],
        correctOptionIndex: 2,
        explanation: 'The Kali (called Sharda in the plains and Mahakali in Nepal) forms the international boundary along Pithoragarh, Champawat, and Udham Singh Nagar.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which two Indian states share an inter-state boundary with Uttarakhand?',
        options: [
          'Himachal Pradesh and Haryana',
          'Himachal Pradesh and Uttar Pradesh',
          'Uttar Pradesh and Punjab',
          'Haryana and Uttar Pradesh',
        ],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand borders Himachal Pradesh to the northwest and Uttar Pradesh to the south and southwest.',
        difficulty: 'foundation',
      },
      {
        stem: 'How many districts of Uttarakhand share a boundary with Uttar Pradesh?',
        options: ['Three', 'Four', 'Five', 'Six'],
        correctOptionIndex: 2,
        explanation: 'Five districts touch Uttar Pradesh: Dehradun, Haridwar, Pauri Garhwal, Nainital, and Udham Singh Nagar.',
        difficulty: 'standard',
      },
      {
        stem: 'Which district of Uttarakhand shares a boundary with the maximum number of internal districts within the state (seven districts)?',
        options: ['Pauri Garhwal', 'Chamoli', 'Almora', 'Nainital'],
        correctOptionIndex: 0,
        explanation: 'Pauri Garhwal borders seven other districts of Uttarakhand: Dehradun, Tehri Garhwal, Rudraprayag, Chamoli, Almora, Nainital, and Haridwar.',
        difficulty: 'standard',
      },
      {
        stem: 'What is the approximate latitudinal extent of Uttarakhand?',
        options: ['26°15\' N to 29°40\' N', '28°43\' N to 31°27\' N', '30°05\' N to 33°10\' N', '27°50\' N to 30°20\' N'],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand extends from 28°43\' N to 31°27\' N latitude and 77°34\' E to 81°02\' E longitude.',
        difficulty: 'standard',
      },
      {
        stem: 'Roughly what proportion of Uttarakhand\'s total geographical area consists of mountainous terrain?',
        options: ['About 54%', 'About 68%', 'About 86%', 'About 96%'],
        correctOptionIndex: 2,
        explanation: 'Approximately 86% of Uttarakhand is mountainous, while around 14% comprises plain/foothill tracts.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pair of administrative divisions and district counts accurately describes Uttarakhand?',
        options: [
          'Garhwal (6) and Kumaon (7)',
          'Garhwal (7) and Kumaon (6)',
          'Garhwal (8) and Kumaon (5)',
          'Garhwal (5) and Kumaon (8)',
        ],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand comprises 13 districts organized into Garhwal Division (7 districts) and Kumaon Division (6 districts).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which district is the smallest in Uttarakhand by geographical area?',
        options: ['Rudraprayag', 'Bageshwar', 'Champawat', 'Haridwar'],
        correctOptionIndex: 2,
        explanation: 'Champawat (1,766 sq. km) is the smallest district in Uttarakhand by area.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which districts of Uttarakhand border China (Tibet Autonomous Region)?',
        options: [
          'Uttarkashi, Chamoli, Rudraprayag',
          'Uttarkashi, Chamoli, Pithoragarh',
          'Chamoli, Bageshwar, Pithoragarh',
          'Uttarkashi, Tehri Garhwal, Chamoli',
        ],
        correctOptionIndex: 1,
        explanation: 'Three northern border districts—Uttarkashi, Chamoli, and Pithoragarh—touch the Tibet Autonomous Region of China.',
        difficulty: 'foundation',
      },
      {
        stem: 'A trader traveling directly from Dehradun to Uttarkashi along the Tons–Yamuna valley moves near which neighbouring state border?',
        options: ['Jammu & Kashmir', 'Punjab', 'Himachal Pradesh', 'Haryana'],
        correctOptionIndex: 2,
        explanation: 'Both Dehradun and Uttarkashi share Uttarakhand\'s northwestern boundary with Himachal Pradesh.',
        difficulty: 'standard',
      },
      {
        stem: 'Why is the Lipulekh Pass in Pithoragarh considered geopolitically sensitive?',
        options: [
          'It lies at the tri-junction zone linking India, Nepal, and Tibet (China)',
          'It connects Dehradun directly with Himachal Pradesh',
          'It is the only rail corridor crossing the Greater Himalaya',
          'It separates Garhwal division from Uttar Pradesh',
        ],
        correctOptionIndex: 0,
        explanation: 'Lipulekh sits near the India–Nepal–China tri-junction in Pithoragarh and serves border security and the traditional Kailash–Mansarovar route.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which border district of Uttarakhand touches both Nepal and Uttar Pradesh?',
        options: ['Champawat', 'Nainital', 'Udham Singh Nagar', 'Pithoragarh'],
        correctOptionIndex: 2,
        explanation: 'Udham Singh Nagar lies in the southeastern Terai and shares its eastern border with Nepal and southern/western borders with Uttar Pradesh.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'Trans-Himalayan & Greater Himalayan Zones (Himadri)',
    materialTitle: 'Trans-Himalayan & Greater Himalayan Zones (Himadri) — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Trans-Himalaya & Himadri Zone',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Trans-Himalayan & Greater Himalayan Zones (Himadri)

## 1. Physiographic Overview
Moving north to south across Uttarakhand, the highest relief comprises the **Trans-Himalayan Zone (Tethyan / Zaskar Belt)** along the Tibetan border and the **Greater Himalaya (Himadri)**, which hosts perpetual snowfields, major glaciers, and peaks exceeding 7,000 m.

## 2. Trans-Himalayan Zone (Tethyan Himalaya)
- **Location & Geology:** Confined to the extreme northern fringe of **Uttarkashi, Chamoli, and Pithoragarh** north of the main Himadri crest. Composed mainly of **Tethyan sedimentary rocks** (limestones, shales, quartzites) containing marine fossils from the ancient Tethys Sea.
- **Climate:** Cold, semi-arid rain-shadow zone with sparse alpine steppe vegetation and winter snow.

## 3. Greater Himalaya (Himadri)
- **Elevation:** Averages 4,500 m to over 7,800 m; width ranges around 30–50 km.
- **Lithology & Tectonics:** Core of Precambrian crystalline rocks—granites, gneisses, and schists—bounded on the south by the **Main Central Thrust (MCT)**, separating it from the Lesser Himalaya.
- **Drainage Role:** Source region for the Bhagirathi, Alaknanda, Dhauliganga, and Gori Ganga rivers, carving deep antecedent gorges.

## 4. Major Peaks of Uttarakhand
| Peak | District | Elevation (approx.) | Significance |
|---|---|---|---|
| **Nanda Devi** | Chamoli | 7,816 m | Highest peak in Uttarakhand |
| **Kamet** | Chamoli | 7,756 m | Highest peak in Zaskar range inside Uttarakhand |
| **Nanda Devi East** | Chamoli–Pithoragarh border | 7,434 m | Twin massif with Nanda Devi West |
| **Chaukhamba I** | Chamoli | 7,138 m | Four-peaked massif above Gangotri–Kedarnath |
| **Trishul I** | Bageshwar–Chamoli | 7,120 m | Trident peak bounding Nanda Devi Sanctuary |
| **Panchachuli II** | Pithoragarh | 6,904 m | Separates Gori & Darma valleys |
| **Bandarpunch** | Uttarkashi | 6,316 m | Source area near Yamunotri |

## 5. Major High Mountain Passes
| Pass | Connects / Location | Key Fact |
|---|---|---|
| **Thaga La, Muling La, Nelang** | Uttarkashi – Tibet | Westernmost Tethyan passes |
| **Mana Pass (Dungri La)** | Chamoli – Tibet | Key historic pass above Badrinath |
| **Niti Pass** | Chamoli – Tibet | Along Dhauliganga valley |
| **Traill's Pass** | Bageshwar – Pithoragarh | Internal pass between Pindari & Milam valleys |
| **Kalindi Khal** | Uttarkashi – Chamoli | Internal glaciated pass connecting Gangotri to Badrinath |
| **Lipulekh, Darma, Limpiyadhura** | Pithoragarh – Tibet | Kailash–Mansarovar corridor |

## 6. Key Revision Takeaways
- **MCT (Main Central Thrust)** separates the Greater Himalaya from the Lesser Himalaya.
- **Nanda Devi (7,816 m)** is Uttarakhand's highest peak; **Kamet (7,756 m)** is second.
- **Traill's Pass** and **Kalindi Khal** are internal Uttarakhand passes, whereas **Mana, Niti, Lipulekh, Thaga La** connect Uttarakhand with Tibet.
`,
    mcqs: [
      {
        stem: 'Which tectonic fault separates the Greater Himalaya (Himadri) from the Lesser Himalaya in Uttarakhand?',
        options: [
          'Himalayan Frontal Thrust (HFT)',
          'Main Boundary Thrust (MBT)',
          'Main Central Thrust (MCT)',
          'Indus–Tsangpo Suture Zone',
        ],
        correctOptionIndex: 2,
        explanation: 'The Main Central Thrust (MCT) divides the crystalline Greater Himalaya to the north from the metasedimentary Lesser Himalaya to the south.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which is the highest mountain peak located within Uttarakhand?',
        options: ['Kamet', 'Nanda Devi', 'Chaukhamba I', 'Trishul'],
        correctOptionIndex: 1,
        explanation: 'Nanda Devi in Chamoli district rises to 7,816 m and is the highest peak of Uttarakhand.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the approximate elevation of Kamet, the second-highest peak of Uttarakhand?',
        options: ['7,120 m', '7,434 m', '7,756 m', '7,816 m'],
        correctOptionIndex: 2,
        explanation: 'Kamet (7,756 m) in the Zaskar range of Chamoli is the second-highest peak in Uttarakhand after Nanda Devi.',
        difficulty: 'standard',
      },
      {
        stem: 'Which of the following passes connects Bageshwar and Pithoragarh internally rather than linking Uttarakhand to Tibet?',
        options: ['Mana Pass', 'Niti Pass', 'Traill\'s Pass', 'Lipulekh Pass'],
        correctOptionIndex: 2,
        explanation: 'Traill\'s Pass (named after Commissioner G.W. Traill) connects the Pindari valley in Bageshwar with the Milam valley in Pithoragarh.',
        difficulty: 'standard',
      },
      {
        stem: 'In which district is the Panchachuli mountain massif located?',
        options: ['Uttarkashi', 'Chamoli', 'Pithoragarh', 'Rudraprayag'],
        correctOptionIndex: 2,
        explanation: 'The five-peaked Panchachuli group rises in Pithoragarh district between the Gori Ganga and Darma valleys.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why are marine fossils frequently found in rocks of Uttarakhand\'s Trans-Himalayan (Tethyan) belt?',
        options: [
          'Because these sediments were deposited on the bed of the ancient Tethys Sea before India–Eurasia collision',
          'Because glacial meltwater carried seashells from the Bay of Bengal',
          'Because the region is formed of recent Deccan basaltic lava flows',
          'Because Shivalik rivers deposited oceanic limestone during the Holocene',
        ],
        correctOptionIndex: 0,
        explanation: 'The Tethyan Himalaya consists of fossiliferous marine sedimentary strata uplifted during the closure of the Tethys Ocean.',
        difficulty: 'standard',
      },
      {
        stem: 'Kalindi Khal is an internal high-altitude glacial pass linking which two districts?',
        options: [
          'Dehradun and Tehri Garhwal',
          'Uttarkashi and Chamoli',
          'Pithoragarh and Champawat',
          'Pauri Garhwal and Almora',
        ],
        correctOptionIndex: 1,
        explanation: 'Kalindi Khal connects the Gangotri basin in Uttarkashi with the Arwa/Alaknanda valley near Badrinath in Chamoli.',
        difficulty: 'standard',
      },
      {
        stem: 'Thaga La, Muling La, and Nelang Pass are situated in which district?',
        options: ['Chamoli', 'Pithoragarh', 'Uttarkashi', 'Bageshwar'],
        correctOptionIndex: 2,
        explanation: 'Thaga La, Muling La, and Nelang are high passes along the northern Uttarkashi–Tibet border.',
        difficulty: 'standard',
      },
      {
        stem: 'Which rock types predominantly form the core of the Greater Himalaya (Himadri)?',
        options: [
          'Unconsolidated Terai alluvium and silt',
          'Precambrian crystalline granites, gneisses, and schists',
          'Recent volcanic scoria and basalt',
          'Soft Miocene river conglomerates',
        ],
        correctOptionIndex: 1,
        explanation: 'The Himadri core consists of high-grade metamorphic gneisses, schists, and intrusive granites.',
        difficulty: 'standard',
      },
      {
        stem: 'Bandarpunch peak, associated with the Yamunotri and Tons glacier sources, lies in which district?',
        options: ['Chamoli', 'Uttarkashi', 'Tehri Garhwal', 'Rudraprayag'],
        correctOptionIndex: 1,
        explanation: 'Bandarpunch (6,316 m) is located in the western Garhwal Himalaya of Uttarkashi district.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pair of mountain peaks and districts is INCORRECTLY matched?',
        options: [
          'Chaukhamba – Chamoli',
          'Panchachuli – Pithoragarh',
          'Bandarpunch – Uttarkashi',
          'Kamet – Pithoragarh',
        ],
        correctOptionIndex: 3,
        explanation: 'Kamet lies in Chamoli district (Zaskar/Garhwal region), not Pithoragarh.',
        difficulty: 'standard',
      },
      {
        stem: 'Which climatic characteristic distinguishes the Trans-Himalayan valleys (like Nelang and upper Niti) from the southern Himadri slopes?',
        options: [
          'Extremely heavy tropical monsoon rainfall above 3,000 mm',
          'Cold rain-shadow aridity with sparse alpine steppe vegetation',
          'Dense evergreen Sal and bamboo cover',
          'Perennial frost-free warm conditions',
        ],
        correctOptionIndex: 1,
        explanation: 'Lying in the rain shadow north of the main Himadri crest, Trans-Himalayan valleys receive much less monsoon rain.',
        difficulty: 'standard',
      },
      {
        stem: 'Arrange the following Uttarakhand peaks in descending order of elevation (highest to lowest):',
        options: [
          'Nanda Devi > Kamet > Chaukhamba I > Trishul I',
          'Kamet > Nanda Devi > Trishul I > Chaukhamba I',
          'Nanda Devi > Trishul I > Kamet > Chaukhamba I',
          'Chaukhamba I > Nanda Devi > Kamet > Trishul I',
        ],
        correctOptionIndex: 0,
        explanation: 'Nanda Devi (7,816 m) > Kamet (7,756 m) > Chaukhamba I (7,138 m) > Trishul I (7,120 m).',
        difficulty: 'advanced',
      },
      {
        stem: 'Which community historically practiced seasonal transhumance and barter trade across Mana, Niti, and Lipulekh passes?',
        options: ['Tharu', 'Bhotia', 'Buksa', 'Jaunsari'],
        correctOptionIndex: 1,
        explanation: 'Bhotia subgroups traditionally conducted summer trans-Himalayan trade across these passes until 1962.',
        difficulty: 'foundation',
      },
      {
        stem: 'If an engineer plans a route across Niti Pass from Joshimath, which tectonic zone is crossed first on leaving the Lesser Himalaya?',
        options: [
          'Himalayan Frontal Thrust',
          'Main Boundary Thrust',
          'Main Central Thrust',
          'Deccan Trap Fault',
        ],
        correctOptionIndex: 2,
        explanation: 'Moving north from the Lesser Himalaya near Joshimath into the Greater/Trans-Himalayan valleys crosses the Main Central Thrust (MCT).',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Lesser Himalaya (Himachal) & Shivalik Ranges',
    materialTitle: 'Lesser Himalaya (Himachal) & Shivalik Ranges — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Lesser Himalaya & Shivaliks',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Lesser Himalaya (Himachal) & Shivalik Ranges

## 1. Position in Uttarakhand's Physiographic Cross-Section
South of the Main Central Thrust (MCT) lie two distinct, densely populated fold-thrust belts: the **Lesser Himalaya (Madhya / Laghu Himalaya)** and the outer **Shivalik Foothills (Outer Himalaya)**, separated by the **Main Boundary Thrust (MBT)** and Dun valleys.

## 2. The Lesser Himalaya (Himachal Range)
- **Elevation & Width:** Generally 1,500 m to 3,000 m, width 70–100 km.
- **Major Sub-Ranges in Uttarakhand:**
  - **Mussoorie Range** and **Nag Tibba** (3,022 m) in Garhwal.
  - **Dudhatoli Range** (spanning Pauri, Chamoli, and Almora)—called **"Pahad ka Pamir"** and origin of five non-glacial rivers (Western Ramganga, Western & Eastern Nayar, Atagad, Vuno).
  - **Nainital / Gagar Ridge**, **Ranikhet**, and **Almora–Binsar** ridges in Kumaon.
- **Lithology:** Slate, limestone, dolomite, quartzite, and phyllite (**Krol belt**).
- **Lakes & Hill Stations:** Most Kumaon lakes (**Nainital, Bhimtal, Sattal, Naukuchiatal**) and colonial hill stations (**Mussoorie, Nainital, Ranikhet, Lansdowne, Almora**) lie here.

## 3. The Shivalik Range (Outer Himalaya)
- **Elevation & Character:** Youngest Himalayan range (600 m to 1,200 m), composed of poorly consolidated Miocene–Pleistocene fluvial sandstones, conglomerates, and clays (**molasse**).
- **Extent in Uttarakhand:** Dehradun–Haridwar (Chandi Devi–Mansa Devi hills) through Kotdwar, Corbett foothills, Haldwani–Kathgodam to Tanakpur.
- **Southern Boundary:** Separated from the Bhabar–Ganga plain by the **Himalayan Frontal Thrust (HFT / MFT)**.

## 4. Tectonic Thrust Summary (North to South)
| Boundary / Fault | Separates |
|---|---|
| **Main Central Thrust (MCT)** | Greater Himalaya (north) from Lesser Himalaya (south) |
| **Main Boundary Thrust (MBT)** | Lesser Himalaya (north) from Shivalik / Dun zone (south) |
| **Himalayan Frontal Thrust (HFT)** | Shivaliks (north) from Bhabar–Ganga Plains (south) |

## 5. Key Revision Takeaways
- **Dudhatoli Range** lies across Pauri, Chamoli, and Almora and feeds non-glacial rivers like Western Ramganga and Nayar.
- **Shivaliks** are the youngest, unconsolidated outer foothills vulnerable to torrential gully erosion (*raos*).
`,
    mcqs: [
      {
        stem: 'Which tectonic fault forms the boundary between the Lesser Himalaya and the Shivalik Range?',
        options: [
          'Main Central Thrust (MCT)',
          'Main Boundary Thrust (MBT)',
          'Himalayan Frontal Thrust (HFT)',
          'Karakoram Fault',
        ],
        correctOptionIndex: 1,
        explanation: 'The Main Boundary Thrust (MBT) separates the Lesser Himalaya to the north from the Shivalik foothills and Dun valleys to the south.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which mountain range in the Lesser Himalaya of Uttarakhand is famously referred to as the "Pamir of the Hills" (Pahad ka Pamir) because five rivers radiate from it?',
        options: ['Nag Tibba Range', 'Mussoorie Range', 'Dudhatoli Range', 'Bandarpunch Range'],
        correctOptionIndex: 2,
        explanation: 'The Dudhatoli Range gives rise to five non-glacial rivers including Western Ramganga and the Nayar rivers.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the typical elevation range of the Shivalik hills in Uttarakhand?',
        options: ['200–400 m', '600–1,200 m', '3,000–4,500 m', '5,000–6,500 m'],
        correctOptionIndex: 1,
        explanation: 'The Outer Himalaya or Shivalik range generally stands between 600 m and 1,200 m above sea level.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which rock composition best describes the Shivalik foothills?',
        options: [
          'Precambrian high-grade metamorphic gneisses',
          'Poorly consolidated Tertiary sandstones, conglomerates, and clays',
          'Deccan plateau volcanic basalt',
          'Pure glacial moraine deposits only',
        ],
        correctOptionIndex: 1,
        explanation: 'The Shivaliks consist of young Tertiary fluvial sediments eroded from the rising Himalaya.',
        difficulty: 'standard',
      },
      {
        stem: 'Most of the Kumaon lake basin towns such as Nainital, Bhimtal, and Naukuchiatal lie within which physiographic zone?',
        options: ['Trans-Himalaya', 'Greater Himalaya', 'Lesser Himalaya', 'Terai Plain'],
        correctOptionIndex: 2,
        explanation: 'Nainital, Bhimtal, and adjacent lakes sit in the southern belt of the Lesser Himalaya near the MBT.',
        difficulty: 'foundation',
      },
      {
        stem: 'The Himalayan Frontal Thrust (HFT) separates which two zones?',
        options: [
          'Trans-Himalaya and Himadri',
          'Himadri and Lesser Himalaya',
          'Shivaliks and the Bhabar–Gangetic Plains',
          'Bhabar and Terai',
        ],
        correctOptionIndex: 2,
        explanation: 'The HFT marks the active tectonic break between the Shivalik foothills and the Indo-Gangetic Plains.',
        difficulty: 'standard',
      },
      {
        stem: 'In Haridwar, the Mansa Devi and Chandi Devi hills represent the two sides of a gorge cut by the Ganga through which range?',
        options: ['Greater Himalaya', 'Shivalik Range', 'Dudhatoli Massif', 'Zaskar Range'],
        correctOptionIndex: 1,
        explanation: 'The Ganga exits the mountains at Haridwar by cutting a gorge through the Shivalik hills between Mansa Devi and Chandi Devi.',
        difficulty: 'standard',
      },
      {
        stem: 'Nag Tibba (approx. 3,022 m) is the highest peak of which Himalayan division in Garhwal?',
        options: ['Trans-Himalaya', 'Shivaliks', 'Lesser Himalaya', 'Terai'],
        correctOptionIndex: 2,
        explanation: 'Nag Tibba in Tehri Garhwal–Dehradun is the highest peak of the Nag Tibba sub-range of the Lesser Himalaya.',
        difficulty: 'standard',
      },
      {
        stem: 'Why are the Shivalik slopes unusually prone to flash floods, sheet erosion, and seasonal torrents (raos)?',
        options: [
          'Perpetual glacier melting on Shivalik peaks',
          'Unconsolidated sedimentary rocks combined with steep slopes and intense monsoon downpours',
          'Presence of active submarine volcanoes',
          'Complete absence of drainage channels',
        ],
        correctOptionIndex: 1,
        explanation: 'Soft, poorly cemented Shivalik conglomerates and sandstones erode rapidly during intense monsoon rainfall, creating seasonal torrential channels called raos.',
        difficulty: 'standard',
      },
      {
        stem: 'Which sequence correctly lists Uttarakhand\'s physiographic zones from NORTH to SOUTH?',
        options: [
          'Shivaliks → Lesser Himalaya → Greater Himalaya → Trans-Himalaya',
          'Trans-Himalaya → Greater Himalaya → Lesser Himalaya → Shivaliks',
          'Greater Himalaya → Trans-Himalaya → Shivaliks → Lesser Himalaya',
          'Lesser Himalaya → Greater Himalaya → Trans-Himalaya → Shivaliks',
        ],
        correctOptionIndex: 1,
        explanation: 'Moving southward from Tibet toward UP: Trans-Himalaya → Greater Himalaya → Lesser Himalaya → Shivaliks.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pair of colonial hill stations in Uttarakhand is situated in the Lesser Himalaya?',
        options: [
          'Haldwani and Rudrapur',
          'Mussoorie and Ranikhet',
          'Haridwar and Kashipur',
          'Tanakpur and Jaspur',
        ],
        correctOptionIndex: 1,
        explanation: 'Mussoorie, Nainital, Ranikhet, Almora, and Lansdowne are Lesser Himalayan hill stations; Haldwani, Rudrapur, and Kashipur lie in Bhabar/Terai.',
        difficulty: 'foundation',
      },
      {
        stem: 'The Krol limestone belt around Dehradun–Mussoorie belongs geologically to which zone?',
        options: ['Lesser Himalaya', 'Trans-Himalaya', 'Terai Plain', 'Ganga Delta'],
        correctOptionIndex: 0,
        explanation: 'The Krol succession of limestones, dolomites, and shales forms part of the Outer Lesser Himalaya.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which major thrust zone must a traveller cross when descending from Mussoorie (2,000 m) into Dehradun Valley (640 m)?',
        options: [
          'Indus Suture Zone',
          'Main Central Thrust (MCT)',
          'Main Boundary Thrust (MBT)',
          'Narmada–Son Lineament',
        ],
        correctOptionIndex: 2,
        explanation: 'The descent from the Mussoorie ridge (Lesser Himalaya) into the Dehradun Dun valley crosses the Main Boundary Thrust (MBT).',
        difficulty: 'standard',
      },
      {
        stem: 'Which three districts meet across the Dudhatoli forest-mountain massif?',
        options: [
          'Pauri Garhwal, Chamoli, and Almora',
          'Dehradun, Haridwar, and Tehri',
          'Uttarkashi, Rudraprayag, and Pithoragarh',
          'Udham Singh Nagar, Nainital, and Champawat',
        ],
        correctOptionIndex: 0,
        explanation: 'Dudhatoli straddles the tri-junction of Pauri Garhwal, Chamoli, and Almora districts.',
        difficulty: 'standard',
      },
      {
        stem: 'Compared to the Greater Himalaya, why do Lesser Himalayan ridges support much higher rural population density?',
        options: [
          'Presence of broad river valleys, terraced slopes, moderate climate, and absence of perpetual ice',
          'Direct coastal maritime climate',
          'Flat alluvial deltaic floodplains throughout',
          'Lower seismic risk than the Deccan Shield',
        ],
        correctOptionIndex: 0,
        explanation: 'Moderate altitudes (1,500–2,500 m), fertile valley terraces, and temperate climates make the Lesser Himalaya Uttarakhand\'s primary hill settlement zone.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Dun Valleys, Bhabar & Terai Plains',
    materialTitle: 'Dun Valleys, Bhabar & Terai Plains — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Dun Valleys, Bhabar & Terai',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Dun Valleys, Bhabar & Terai Plains

## 1. Dun Valleys (Structural Longitudinal Basins)
- **Formation:** Duns are flat-floored longitudinal structural valleys lying **between the Lesser Himalaya and the Shivalik Range**. Temporary lakes formed when rising Shivaliks blocked southward rivers; sediment filling and breaching created fertile valley floors.
- **Important Duns of Uttarakhand:** **Dehradun** (largest, ~75 km long, drained westward by Asan and eastward by Song–Suswa), **Patli Dun & Kota Dun** (Nainital/Corbett), **Chaukhambha Dun & Kothri Dun** (Pauri Garhwal). *(Har ki Dun in Uttarkashi is an alpine glacial valley, not a Shivalik dun).*

## 2. The Bhabar Belt
- **Location & Texture:** Narrow piedmont belt (8–16 km wide) immediately south of the Shivaliks composed of coarse boulders, pebbles, and alluvial fans.
- **Hydrology:** High porosity causes small streams to sink underground; forested (Sal) and marked by exit towns like Kotdwar, Ramnagar, Haldwani, and Tanakpur.

## 3. The Terai Belt
- **Location & Hydrology:** Immediately **south of the Bhabar** (15–30 km wide), prominently spanning **Udham Singh Nagar**, southern **Nainital**, and parts of **Haridwar**. Subsurface Bhabar water **re-emerges at the surface** as springs, forming damp, fine-alluvial soils rich in nitrogen and organic matter.
- **Transformation:** Reclaimed after Independence—spearheaded by **GBPUAT Pantnagar** (established 1960)—into Uttarakhand's prime **rice, wheat, and sugarcane** bowl.

## 4. Comparative Matrix: Bhabar vs Terai
| Feature | Bhabar | Terai |
|---|---|---|
| **Position** | South of Shivaliks | South of Bhabar |
| **Texture** | Coarse boulders & gravel | Fine silt, clay, loam |
| **Drainage** | Streams sink underground | Springs re-emerge; high water table |
| **Key Towns** | Kotdwar, Ramnagar, Haldwani, Tanakpur | Rudrapur, Kashipur, Kichha, Sitarganj |

## 5. Key Revision Takeaways
- **Duns** lie between **Lesser Himalaya and Shivaliks**; streams vanish in **Bhabar** and re-emerge in **Terai**.
`,
    mcqs: [
      {
        stem: 'Geologically, Dun valleys such as Dehradun and Patli Dun are located between which two mountain ranges?',
        options: [
          'Trans-Himalaya and Greater Himalaya',
          'Greater Himalaya and Lesser Himalaya',
          'Lesser Himalaya and Shivalik Range',
          'Shivalik Range and Aravalli Hills',
        ],
        correctOptionIndex: 2,
        explanation: 'Duns are structural longitudinal valleys formed between the Lesser Himalaya to the north and the Shivalik foothills to the south.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why do small Himalayan streams frequently disappear underground when entering the Bhabar belt?',
        options: [
          'Due to extreme desert evaporation',
          'Because the belt consists of highly porous boulders, pebbles, and coarse gravel',
          'Because impermeable granite blocks flow downwards',
          'Because water is diverted directly into volcanic vents',
        ],
        correctOptionIndex: 1,
        explanation: 'The Bhabar consists of coarse alluvial fan deposits with very high permeability, causing smaller streams to infiltrate subsurface.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which district of Uttarakhand lies predominantly in the fertile Terai belt and serves as the state\'s primary food-grain bowl?',
        options: ['Almora', 'Udham Singh Nagar', 'Tehri Garhwal', 'Bageshwar'],
        correctOptionIndex: 1,
        explanation: 'Udham Singh Nagar forms the heart of Uttarakhand\'s fertile Terai agricultural plains.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which of the following is a structural Dun located in the Corbett / Nainital foothill region?',
        options: ['Kota Dun and Patli Dun', 'Har ki Dun', 'Nelang Valley', 'Byans Valley'],
        correctOptionIndex: 0,
        explanation: 'Patli Dun and Kota Dun are prominent Kumaon Duns; Har ki Dun is a high-altitude glacial valley in Uttarkashi.',
        difficulty: 'standard',
      },
      {
        stem: 'Which sequence accurately represents terrain belts from north to south across southern Uttarakhand?',
        options: [
          'Terai → Bhabar → Shivaliks → Dun',
          'Dun → Shivaliks → Bhabar → Terai',
          'Shivaliks → Terai → Bhabar → Dun',
          'Bhabar → Terai → Dun → Shivaliks',
        ],
        correctOptionIndex: 1,
        explanation: 'Moving southward: Dun valleys → Shivaliks → stony Bhabar → marshy/fertile Terai.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which two river systems drain the Dehradun (Doon) valley in opposite directions?',
        options: [
          'Kosi (west) and Gaula (east)',
          'Asan (westward to Yamuna) and Song–Suswa (eastward to Ganga)',
          'Tons (south) and Kali (north)',
          'Bhagirathi (east) and Alaknanda (west)',
        ],
        correctOptionIndex: 1,
        explanation: 'A low water divide near Dehradun city sends the Asan westward to the Yamuna and the Song–Suswa system eastward to the Ganga.',
        difficulty: 'standard',
      },
      {
        stem: 'What characterizes the soil and groundwater condition of the Terai belt compared to the Bhabar?',
        options: [
          'Fine silty/clayey soil with a shallow water table and re-emerging springs',
          'Coarse boulders with an absence of surface springs',
          'Bare glacial moraine and permafrost',
          'Saline desert sand dunes',
        ],
        correctOptionIndex: 0,
        explanation: 'Water sinking in the Bhabar resurfaces in the Terai as springs, creating fine-textured, moisture-rich alluvial soils.',
        difficulty: 'standard',
      },
      {
        stem: 'Which foothill town marks a transition node on the Bhabar gravel fan where the Gaula river emerges from the hills?',
        options: ['Haldwani–Kathgodam', 'Almora', 'Ranikhet', 'Gopeshwar'],
        correctOptionIndex: 0,
        explanation: 'Haldwani–Kathgodam sits on the Bhabar piedmont where the Gaula river leaves the hills.',
        difficulty: 'standard',
      },
      {
        stem: 'Why are artesian wells and high-yielding tube wells common in the Uttarakhand Terai?',
        options: [
          'Confined groundwater moving down-slope from the porous Bhabar becomes pressurized beneath fine Terai clays',
          'Seawater intrudes directly under Udham Singh Nagar',
          'Thermal geysers boil groundwater across the plains',
          'Terai receives snow throughout the summer',
        ],
        correctOptionIndex: 0,
        explanation: 'Water infiltrating the higher Bhabar gravel belt flows beneath less permeable Terai clay layers, producing artesian pressure.',
        difficulty: 'advanced',
      },
      {
        stem: 'Approximately how long is the Dehradun Dun valley along its northwest–southeast axis?',
        options: ['15 km', '35 km', '75 km', '160 km'],
        correctOptionIndex: 2,
        explanation: 'Dehradun is the largest Dun valley in Uttarakhand, stretching roughly 75 km in length.',
        difficulty: 'standard',
      },
      {
        stem: 'How were Dun valleys originally formed during Himalayan uplift?',
        options: [
          'Marine lagoon drying after sea regression',
          'Damming of southward rivers by rising Shivalik anticlines creating temporary lakes that filled with alluvium',
          'Meteorite impacts during the Quaternary',
          'Wind erosion carving sandstone plateaus',
        ],
        correctOptionIndex: 1,
        explanation: 'Uplift of the Shivaliks temporarily ponded Lesser Himalayan streams into synclinal lakes; sediment infilling and river breaching left flat Dun floors.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which agricultural university played a decisive role in transforming the reclaimed Terai region after its founding in 1960?',
        options: [
          'HNB Garhwal University',
          'Govind Ballabh Pant University of Agriculture and Technology (Pantnagar)',
          'Kumaun University, Nainital',
          'Doon University',
        ],
        correctOptionIndex: 1,
        explanation: 'GBPUAT Pantnagar (established 1960 as India\'s first agricultural university) spearheaded Terai agricultural research.',
        difficulty: 'foundation',
      },
      {
        stem: 'If a farmer in Udham Singh Nagar faces waterlogging whereas a farmer near Tanakpur foothills faces rapid soil drainage, what accounts for the difference?',
        options: [
          'Tanakpur foothill tracts lie in porous Bhabar gravels while Udham Singh Nagar lies mostly in low-gradient fine Terai soils',
          'Tanakpur receives zero monsoon rain',
          'Udham Singh Nagar sits above 3,000 m elevation',
          'Bhabar soils contain heavy marine clay',
        ],
        correctOptionIndex: 0,
        explanation: 'Tanakpur lies at the Bhabar exit with coarse permeable sediments, whereas Udham Singh Nagar occupies the low-lying Terai clay/spring zone.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Dun valley pair belongs to Pauri Garhwal district?',
        options: [
          'Kothri Dun and Chaukhambha Dun',
          'Pinjore Dun and Nalagarh Dun',
          'Patli Dun and Kota Dun',
          'Dehradun and Kiarda Dun',
        ],
        correctOptionIndex: 0,
        explanation: 'Kothri Dun and Chaukhambha Dun lie in Pauri Garhwal; Patli and Kota Duns lie primarily in Nainital/Corbett.',
        difficulty: 'advanced',
      },
      {
        stem: 'Why was the Terai sparsely settled prior to the mid-20th century despite its fertile soils?',
        options: [
          'Perpetual snowfall prevented farming',
          'Dense marshy forests, wild fauna, and endemic malaria deterred permanent settlement until reclamation',
          'Toxic heavy metals prevented plant growth',
          'Absence of groundwater made drinking water impossible',
        ],
        correctOptionIndex: 1,
        explanation: 'Dense swampland and severe malaria kept the Terai largely forested until post-1947 reclamation.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Bhagirathi-Alaknanda System & Panch Prayag Confluences',
    materialTitle: 'Bhagirathi–Alaknanda System & Panch Prayag Confluences — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Bhagirathi–Alaknanda & Panch Prayag',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Bhagirathi–Alaknanda System & Panch Prayag Confluences

## 1. Overview of the Upper Ganga Basin
The **Ganga** officially acquires its name at **Devprayag** (Tehri Garhwal), where the **Bhagirathi** meets the **Alaknanda**.

## 2. The Bhagirathi Sub-System
- **Origin:** **Gaumukh** snout of the **Gangotri Glacier** (Uttarkashi).
- **Major Tributaries:** **Jadh Ganga (Janavi)** at Bhaironghati; **Asi Ganga** near Uttarkashi; **Bhilangana** (from **Khatling Glacier**) at Old Tehri / Ganesh Prayag.

## 3. The Alaknanda Sub-System & Panch Prayag
- **Origin:** **Satopanth** and **Bhagirath Kharak** Glaciers near Badrinath (Chamoli). Hydrologically, Alaknanda carries larger volume and drains a bigger basin than Bhagirathi up to Devprayag.

| Confluence (N → S) | Merging River with Alaknanda | District | Source of Tributary |
|---|---|---|---|
| **1. Vishnuprayag** | **Dhauliganga (Western)** | Chamoli | Niti / Kamet region |
| **2. Nandprayag** | **Nandakini** | Chamoli | Trishul / Nanda Ghunti massif |
| **3. Karnaprayag** | **Pindar** | Chamoli | Pindari Glacier (Bageshwar) |
| **4. Rudraprayag** | **Mandakini** | Rudraprayag | Chorabari Glacier (Kedarnath) |
| **5. Devprayag** | **Bhagirathi** | Tehri Garhwal | Gaumukh / Gangotri Glacier |

## 4. Downstream of Devprayag
At **Rishikesh** the Ganga reaches the foothills, receives **Song–Suswa** near Raiwala, and exits through the Shivaliks at **Haridwar**.

## 5. Key Revision Takeaways
- **Devprayag**: Alaknanda + Bhagirathi → **Ganga**.
- **Pindar** meets Alaknanda at **Karnaprayag**; **Mandakini** at **Rudraprayag**.
- **Bhilangana** meets **Bhagirathi** at Tehri (not Alaknanda).
`,
    mcqs: [
      {
        stem: 'Which river merges with the Alaknanda at Karnaprayag?',
        options: ['Dhauliganga', 'Nandakini', 'Pindar', 'Mandakini'],
        correctOptionIndex: 2,
        explanation: 'The Pindar river, originating from the Pindari Glacier in Bageshwar, joins the Alaknanda at Karnaprayag in Chamoli district.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which option lists the Panch Prayag confluences in their correct NORTH to SOUTH geographical order?',
        options: [
          'Vishnuprayag → Nandprayag → Karnaprayag → Rudraprayag → Devprayag',
          'Nandprayag → Vishnuprayag → Karnaprayag → Devprayag → Rudraprayag',
          'Vishnuprayag → Karnaprayag → Nandprayag → Rudraprayag → Devprayag',
          'Devprayag → Rudraprayag → Karnaprayag → Nandprayag → Vishnuprayag',
        ],
        correctOptionIndex: 0,
        explanation: 'From north to south along the Alaknanda: Vishnuprayag → Nandprayag → Karnaprayag → Rudraprayag → Devprayag.',
        difficulty: 'foundation',
      },
      {
        stem: 'The Bhilangana river, which joins the Bhagirathi near Tehri, originates from which glacier?',
        options: ['Gangotri Glacier', 'Satopanth Glacier', 'Khatling Glacier', 'Chorabari Glacier'],
        correctOptionIndex: 2,
        explanation: 'The Bhilangana originates from the Khatling Glacier (Tehri Garhwal) and meets the Bhagirathi at Old Tehri (Ganesh Prayag).',
        difficulty: 'foundation',
      },
      {
        stem: 'From which glacier does the Alaknanda river originate near Badrinath?',
        options: ['Pindari Glacier', 'Satopanth and Bhagirath Kharak Glaciers', 'Milam Glacier', 'Bandarpunch Glacier'],
        correctOptionIndex: 1,
        explanation: 'The Alaknanda originates from the meltwater of Satopanth and Bhagirath Kharak glaciers in Chamoli.',
        difficulty: 'foundation',
      },
      {
        stem: 'At Rudraprayag, the Alaknanda receives which tributary flowing down from the Kedarnath valley?',
        options: ['Nandakini', 'Mandakini', 'Dhauliganga', 'Bhilangana'],
        correctOptionIndex: 1,
        explanation: 'The Mandakini originates from the Chorabari Glacier near Kedarnath and meets the Alaknanda at Rudraprayag.',
        difficulty: 'foundation',
      },
      {
        stem: 'Where does the Jadh Ganga (Janavi) join the Bhagirathi river?',
        options: ['Devprayag', 'Bhaironghati', 'Tehri', 'Uttarkashi town'],
        correctOptionIndex: 1,
        explanation: 'The Jadh Ganga (Janavi) joins the Bhagirathi at Bhaironghati in Uttarkashi district.',
        difficulty: 'standard',
      },
      {
        stem: 'Which of the Panch Prayag confluences lies in Tehri Garhwal district?',
        options: ['Vishnuprayag', 'Karnaprayag', 'Rudraprayag', 'Devprayag'],
        correctOptionIndex: 3,
        explanation: 'Devprayag is situated in Tehri Garhwal, while the first three are in Chamoli and Rudraprayag is in Rudraprayag district.',
        difficulty: 'standard',
      },
      {
        stem: 'Which statement accurately distinguishes the Bhagirathi and Alaknanda up to Devprayag?',
        options: [
          'The Bhagirathi carries a larger volume of water than the Alaknanda',
          'The Alaknanda has a larger drainage area and discharge, while the Bhagirathi is traditionally revered as the source stream',
          'Both rivers originate in Nepal and enter Chamoli via Lipulekh',
          'Neither river receives glacial meltwater',
        ],
        correctOptionIndex: 1,
        explanation: 'Hydrologically, the Alaknanda drains a larger catchment and carries greater discharge up to Devprayag.',
        difficulty: 'standard',
      },
      {
        stem: 'At Vishnuprayag, which river joins the Alaknanda?',
        options: ['Western Dhauliganga', 'Eastern Dhauliganga', 'Kosi', 'Gori Ganga'],
        correctOptionIndex: 0,
        explanation: 'The Western Dhauliganga meets the Alaknanda at Vishnuprayag near Joshimath.',
        difficulty: 'standard',
      },
      {
        stem: 'Which tributary originating near the Trishul–Nanda Ghunti massif joins the Alaknanda at Nandprayag?',
        options: ['Pindar', 'Nandakini', 'Birahi Ganga', 'Saraswati'],
        correctOptionIndex: 1,
        explanation: 'The Nandakini rises near Nanda Ghunti / Trishul and joins the Alaknanda at Nandprayag.',
        difficulty: 'standard',
      },
      {
        stem: 'Where does the Song–Suswa river system from Dehradun valley join the Ganga?',
        options: [
          'At Devprayag',
          'Near Raiwala between Rishikesh and Haridwar',
          'At Karnaprayag',
          'At Tehri Dam',
        ],
        correctOptionIndex: 1,
        explanation: 'The Song–Suswa system drains eastern Doon Valley and joins the Ganga near Raiwala.',
        difficulty: 'standard',
      },
      {
        stem: 'In Garhwali folklore, why is the Bhagirathi at Devprayag affectionately termed "Saas" and the Alaknanda "Bahu"?',
        options: [
          'Bhagirathi descends more noisily and swiftly through a narrow gorge while Alaknanda enters broader and comparatively calmer',
          'Alaknanda dries up completely in summer',
          'Bhagirathi flows from Nepal',
          'They never actually meet at Devprayag',
        ],
        correctOptionIndex: 0,
        explanation: 'Folklore contrasts the swift, turbulent Bhagirathi ("Saas") with the broader, steadier Alaknanda ("Bahu") at Devprayag.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which river flows through Kedarnath shrine valley before joining the Alaknanda downstream?',
        options: ['Mandakini', 'Nandakini', 'Pindar', 'Saraswati'],
        correctOptionIndex: 0,
        explanation: 'The Mandakini flows past Kedarnath from Chorabari Glacier to Rudraprayag.',
        difficulty: 'foundation',
      },
      {
        stem: 'If a heavy cloudburst occurs in Bageshwar\'s Pindari catchment, which Panch Prayag town on the Alaknanda receives the direct tributary surge first?',
        options: ['Vishnuprayag', 'Nandprayag', 'Karnaprayag', 'Devprayag'],
        correctOptionIndex: 2,
        explanation: 'Pindar drains Bageshwar westward directly into the Alaknanda at Karnaprayag.',
        difficulty: 'standard',
      },
      {
        stem: 'Which sacred confluence near Mana above Badrinath involves the Saraswati river meeting the Alaknanda?',
        options: ['Keshavprayag', 'Suryaprayag', 'Indraprayag', 'Ganesh Prayag'],
        correctOptionIndex: 0,
        explanation: 'Keshavprayag at Mana village is the confluence of the Saraswati and Alaknanda rivers.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'Yamuna, Tons & Kali (Sharda) River Systems',
    materialTitle: 'Yamuna, Tons & Kali (Sharda) River Systems — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Yamuna, Tons & Kali River Systems',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Yamuna, Tons & Kali (Sharda) River Systems

## 1. The Yamuna & Tons System (Western Uttarakhand)
- **Yamuna Origin:** **Yamunotri Glacier** on the **Bandarpunch massif** (Uttarkashi).
- **Tons (Tamas):** Largest tributary of Yamuna in Uttarakhand; formed by the **Rupin** and **Supin** rivers at **Naitwar** (Uttarkashi), joining Yamuna near **Kalsi / Dakpathar** (Dehradun) with greater discharge than the upper Yamuna.
- **Asan:** Drains western Dehradun valley into Yamuna near Rampur Mandi.

## 2. The Kali (Sharda / Mahakali) System (Eastern Uttarakhand)
The Kali defines most of Uttarakhand's eastern border with Nepal before becoming the **Sharda** at Tanakpur/Banbasa.
- **Tributaries (North to South):**
  1. **Kutiyankti** (joins near Gunji)
  2. **Eastern Dhauliganga** (joins at **Tawaghat**)
  3. **Gori Ganga** (from **Milam Glacier**, joins at **Jauljibi**)
  4. **Saryu** (largest Uttarakhand tributary of Kali; rises at **Sarmool**, receives **Gomti** at Bageshwar and **Eastern Ramganga** from Namik Glacier at Rameshwar; joins Kali at **Pancheshwar**)
  5. **Ladhiya** (joins near Chuka/Tanakpur)

## 3. Key Revision Takeaways
- **Tons = Rupin + Supin** at Naitwar; meets Yamuna at **Kalsi / Dakpathar**.
- **Gori Ganga** (Milam) meets Kali at **Jauljibi**; **Saryu** meets Kali at **Pancheshwar**.
`,
    mcqs: [
      {
        stem: 'The Tons river, the largest mountain tributary of the Yamuna in Uttarakhand, is formed by the confluence of which two streams at Naitwar?',
        options: ['Asan and Song', 'Rupin and Supin', 'Gori and Saryu', 'Bhilangana and Jadh'],
        correctOptionIndex: 1,
        explanation: 'The Tons is formed at Naitwar (Uttarkashi) by the union of the Rupin and Supin rivers.',
        difficulty: 'foundation',
      },
      {
        stem: 'At which town in Dehradun district does the Tons river merge into the Yamuna?',
        options: ['Kalsi / Dakpathar', 'Rishikesh', 'Mussoorie', 'Chakrata'],
        correctOptionIndex: 0,
        explanation: 'The Tons joins the Yamuna near Kalsi (upstream of Dakpathar barrage in Dehradun).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which river meets the Kali river at Jauljibi in Pithoragarh district?',
        options: ['Eastern Dhauliganga', 'Gori Ganga', 'Saryu', 'Ladhiya'],
        correctOptionIndex: 1,
        explanation: 'The Gori Ganga, originating from the Milam Glacier, merges with the Kali at Jauljibi.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which river is the largest Uttarakhand tributary of the Kali river, joining it at Pancheshwar?',
        options: ['Kutiyankti', 'Saryu', 'Ladhiya', 'Gomti'],
        correctOptionIndex: 1,
        explanation: 'The Saryu is the largest tributary of the Kali in Uttarakhand and meets it at Pancheshwar.',
        difficulty: 'foundation',
      },
      {
        stem: 'By what name is the Kali river known once it enters the plains near Tanakpur / Banbasa?',
        options: ['Ghaghara', 'Sharda', 'Kosi', 'Rapti'],
        correctOptionIndex: 1,
        explanation: 'Upon descending into the plains past Tanakpur/Banbasa, the Kali is known in India as the Sharda river.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which glacier is the source of the Eastern Ramganga river?',
        options: ['Milam Glacier', 'Namik Glacier', 'Gangotri Glacier', 'Pindari Glacier'],
        correctOptionIndex: 1,
        explanation: 'The Eastern Ramganga originates from the Namik Glacier in Pithoragarh and joins the Saryu at Rameshwar.',
        difficulty: 'standard',
      },
      {
        stem: 'At which sacred town does the Gomti river join the Saryu river?',
        options: ['Champawat', 'Bageshwar', 'Almora', 'Pithoragarh'],
        correctOptionIndex: 1,
        explanation: 'Bageshwar town sits at the confluence of the Saryu and Gomti rivers.',
        difficulty: 'foundation',
      },
      {
        stem: 'What makes the Tons river hydrologically distinctive relative to the upper Yamuna at their confluence near Kalsi?',
        options: [
          'The Tons is purely rain-fed and dries up in winter',
          'The Tons carries greater water discharge than the upper Yamuna',
          'The Tons flows northwards into Tibet',
          'The Tons carries saline water',
        ],
        correctOptionIndex: 1,
        explanation: 'At Kalsi, the Tons contributes larger average discharge than the Yamuna stem arriving from Yamunotri.',
        difficulty: 'standard',
      },
      {
        stem: 'Where does the Eastern Dhauliganga meet the Kali river?',
        options: ['Jauljibi', 'Tawaghat', 'Pancheshwar', 'Tanakpur'],
        correctOptionIndex: 1,
        explanation: 'The Eastern Dhauliganga joins the Kali river at Tawaghat near Dharchula in Pithoragarh.',
        difficulty: 'standard',
      },
      {
        stem: 'Which river is the southernmost Uttarakhand tributary joining the Kali near Chuka/Tanakpur?',
        options: ['Kutiyankti', 'Ladhiya', 'Gori Ganga', 'Supin'],
        correctOptionIndex: 1,
        explanation: 'The Ladhiya drains parts of Champawat and Nainital ridges and joins the Kali near Chuka before Tanakpur.',
        difficulty: 'standard',
      },
      {
        stem: 'At Rameshwar (Pithoragarh–Champawat border), which two rivers meet?',
        options: [
          'Saryu and Eastern Ramganga',
          'Kali and Gori Ganga',
          'Yamuna and Asan',
          'Kosi and Gaula',
        ],
        correctOptionIndex: 0,
        explanation: 'The Eastern Ramganga joins the Saryu at Rameshwar before the combined Saryu flows to Pancheshwar.',
        difficulty: 'standard',
      },
      {
        stem: 'Which of the following pairs is INCORRECTLY matched?',
        options: [
          'Saryu origin – Sarmool (Bageshwar)',
          'Gori Ganga origin – Milam Glacier',
          'Supin origin – Har ki Dun / Swargarohini area',
          'Yamuna origin – Khatling Glacier',
        ],
        correctOptionIndex: 3,
        explanation: 'The Yamuna originates at Yamunotri Glacier (Bandarpunch); Khatling Glacier is the source of the Bhilangana.',
        difficulty: 'standard',
      },
      {
        stem: 'Why must the Eastern Ramganga and Western Ramganga never be confused in UKPSC drainage questions?',
        options: [
          'Eastern Ramganga is glacial (Namik) joining Kali via Saryu, whereas Western Ramganga is non-glacial (Dudhatoli) joining the Ganga in UP',
          'Eastern Ramganga drains Dehradun into Yamuna',
          'Western Ramganga flows into Nepal',
          'Both join the Bhagirathi at Tehri',
        ],
        correctOptionIndex: 0,
        explanation: 'Eastern Ramganga rises from Namik Glacier (Kali basin), while Western Ramganga rises in Dudhatoli (Ganga basin).',
        difficulty: 'advanced',
      },
      {
        stem: 'Which river drains the western half of Dehradun Dun valley before entering the Yamuna near Rampur Mandi?',
        options: ['Song', 'Suswa', 'Asan', 'Rispana'],
        correctOptionIndex: 2,
        explanation: 'The Asan river collects streams from western Dehradun valley and joins the Yamuna near Rampur Mandi.',
        difficulty: 'standard',
      },
      {
        stem: 'Arrange these Kali tributaries in order from NORTH to SOUTH along its course:',
        options: [
          'Kutiyankti → Eastern Dhauliganga → Gori Ganga → Saryu → Ladhiya',
          'Gori Ganga → Kutiyankti → Saryu → Eastern Dhauliganga → Ladhiya',
          'Ladhiya → Saryu → Gori Ganga → Eastern Dhauliganga → Kutiyankti',
          'Eastern Dhauliganga → Kutiyankti → Saryu → Gori Ganga → Ladhiya',
        ],
        correctOptionIndex: 0,
        explanation: 'Descending from Gunji to Tanakpur: Kutiyankti → E. Dhauliganga (Tawaghat) → Gori Ganga (Jauljibi) → Saryu (Pancheshwar) → Ladhiya.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'Western Ramganga, Kosi & Gaula River Basins',
    materialTitle: 'Western Ramganga, Kosi & Gaula River Basins — Study Notes',
    estimatedMinutes: 20,
    assessmentTitle: 'Practice Assessment: Western Ramganga, Kosi & Gaula',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Western Ramganga, Kosi & Gaula River Basins

## 1. Nature of Non-Glacial Rivers
**Western Ramganga**, **Kosi**, and **Gaula** are **non-glacial, spring-fed and rain-fed** Lesser Himalayan rivers whose dry-season baseflow depends on Banj Oak watershed conservation and groundwater recharge.

## 2. Basin Profiles
- **Western Ramganga:** Originates in **Dudhatoli Range** (Diwali Khal); flows through Chaukhutiya, Bhikiyasain, and **Patli Dun / Corbett National Park** (**Kalagarh Dam** on Pauri–Bijnor edge), entering UP to join the Ganga near Kannauj. Tributaries: Vinod, Gagas, Mandal.
- **Kosi (Kaushiki):** Originates in **Dharapani / Kausani** hills (Almora); flows past Someshwar, Hawalbagh, receives **Suyal** at Kakrighat, exits hills at **Ramnagar** (Nainital), and joins Western Ramganga in UP.
- **Gaula (Gargi):** Originates in **Paharpani / Motiapathar** (Nainital); flows past **Jamrani** and **Kathgodam–Haldwani**, joining Western Ramganga (via Bahgul) in UP.

## 3. Key Revision Takeaways
- All three are **non-glacial** rivers.
- **Kalagarh Dam** = Western Ramganga; **Ramnagar** = Kosi exit; **Haldwani–Kathgodam** = Gaula exit.
`,
    mcqs: [
      {
        stem: 'What fundamental hydrological feature do the Western Ramganga, Kosi, and Gaula share?',
        options: [
          'All three originate from Trans-Himalayan glaciers above 6,000 m',
          'All three are non-glacial, spring-fed and rain-fed Lesser Himalayan rivers',
          'All three drain northward into Tibet',
          'All three join the Yamuna near Dehradun',
        ],
        correctOptionIndex: 1,
        explanation: 'Western Ramganga, Kosi, and Gaula originate in Lesser Himalayan ranges and rely on springs and monsoon rain rather than glaciers.',
        difficulty: 'foundation',
      },
      {
        stem: 'Near which major foothill town does the Kosi river emerge from the hills onto the Bhabar–Terai edge?',
        options: ['Haldwani', 'Ramnagar', 'Kotdwar', 'Haridwar'],
        correctOptionIndex: 1,
        explanation: 'The Kosi exits the Lesser Himalaya at Ramnagar (Nainital district).',
        difficulty: 'foundation',
      },
      {
        stem: 'On which river is the Kalagarh Dam located at the edge of Corbett National Park?',
        options: ['Eastern Ramganga', 'Western Ramganga', 'Kosi', 'Gaula'],
        correctOptionIndex: 1,
        explanation: 'The Kalagarh Dam is constructed on the Western Ramganga river.',
        difficulty: 'foundation',
      },
      {
        stem: 'Haldwani and Kathgodam lie on the banks of which river?',
        options: ['Kosi', 'Saryu', 'Gaula', 'Western Ramganga'],
        correctOptionIndex: 2,
        explanation: 'The Gaula river emerges through Kathgodam and supplies Haldwani.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which tributary originating near Almora merges with the Kosi river near Kakrighat?',
        options: ['Gagas', 'Suyal', 'Ladhiya', 'Vinod'],
        correctOptionIndex: 1,
        explanation: 'The Suyal river drains the Almora ridge and meets the Kosi at Kakrighat.',
        difficulty: 'standard',
      },
      {
        stem: 'Where does the Western Ramganga originate?',
        options: ['Namik Glacier', 'Dudhatoli Range', 'Milam Glacier', 'Bandarpunch Peak'],
        correctOptionIndex: 1,
        explanation: 'Western Ramganga rises at Diwali Khal in the Dudhatoli range.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which multipurpose dam project upstream of Kathgodam targets Haldwani\'s water supply and Bhabar irrigation?',
        options: ['Lakhwar Project', 'Jamrani Dam Project', 'Tehri Phase II', 'Pancheshwar Project'],
        correctOptionIndex: 1,
        explanation: 'The Jamrani Dam Project sits on the Gaula river upstream of Kathgodam.',
        difficulty: 'standard',
      },
      {
        stem: 'Into which river do both the Kosi and Gaula systems ultimately drain in Uttar Pradesh?',
        options: ['Yamuna', 'Western Ramganga', 'Gomti', 'Chambal'],
        correctOptionIndex: 1,
        explanation: 'Both the Kosi and Gaula drain southward into the Western Ramganga in UP.',
        difficulty: 'standard',
      },
      {
        stem: 'Why are non-glacial rivers like Kosi and Gaula experiencing steeper summer baseflow decline than glacial rivers?',
        options: [
          'They have zero watershed forest cover',
          'Replacement of moisture-retaining Banj Oak by Chir Pine, road cutting, and forest fires reduce groundwater spring recharge',
          'Glaciers in Almora have shifted northward',
          'They flow through basaltic plateaus',
        ],
        correctOptionIndex: 1,
        explanation: 'Oak loss, forest fires, and erratic rain reduce spring aquifer recharge, lowering lean-season baseflow.',
        difficulty: 'standard',
      },
      {
        stem: 'Which river flows directly through the Patli Dun valley inside Jim Corbett National Park?',
        options: ['Western Ramganga', 'Kosi', 'Gaula', 'Saryu'],
        correctOptionIndex: 0,
        explanation: 'The Western Ramganga flows through Patli Dun inside Jim Corbett National Park.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pair of river and origin is INCORRECTLY matched?',
        options: [
          'Western Ramganga – Dudhatoli',
          'Kosi – Dharapani / Kausani ridge',
          'Gaula – Paharpani (Nainital)',
          'Kosi – Pindari Glacier',
        ],
        correctOptionIndex: 3,
        explanation: 'Uttarakhand\'s Kosi rises in Kausani–Dharapani hills (Almora), whereas Pindari Glacier feeds the Pindar river.',
        difficulty: 'standard',
      },
      {
        stem: 'Gagas and Vinod (Bino) are tributaries of which river?',
        options: ['Gaula', 'Kosi', 'Western Ramganga', 'Tons'],
        correctOptionIndex: 2,
        explanation: 'Bino, Gagas, and Mandal are key tributaries of the Western Ramganga.',
        difficulty: 'advanced',
      },
      {
        stem: 'Why is Uttarakhand\'s Kosi River different from the "Sorrow of Bihar" Kosi River?',
        options: [
          'It is a smaller Lesser Himalayan tributary joining Western Ramganga in UP, whereas Bihar\'s Kosi (Saptakoshi) flows through eastern Nepal and north Bihar',
          'Uttarakhand\'s Kosi drains westward into the Indus',
          'Bihar\'s Kosi originates in Nainital',
          'They are the exact same continuous river channel',
        ],
        correctOptionIndex: 0,
        explanation: 'Despite sharing a name, Uttarakhand\'s Kosi joins the Ramganga, unrelated to Nepal–Bihar\'s Saptakoshi.',
        difficulty: 'standard',
      },
      {
        stem: 'Which ecological intervention best supports dry-season rejuvenation of the Kosi river near Almora?',
        options: [
          'Concrete lining of the riverbed',
          'Spring-shed contour trenches, check dams, and broad-leaved oak restoration in recharge zones',
          'Planting monoculture Eucalyptus',
          'Removing river meanders',
        ],
        correctOptionIndex: 1,
        explanation: 'Contour trenches and broad-leaved oak regeneration increase infiltration into hill aquifers.',
        difficulty: 'standard',
      },
      {
        stem: 'Which river skirts the eastern edge of Jim Corbett National Park near Ramnagar while Western Ramganga flows through its core?',
        options: ['Gaula', 'Kosi', 'Bhagirathi', 'Kali'],
        correctOptionIndex: 1,
        explanation: 'The Kosi river passes along the eastern edge of Corbett Tiger Reserve near Garjia/Dhikuli.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'Major Glaciers & High-Altitude Glacial Lakes of Uttarakhand',
    materialTitle: 'Major Glaciers & High-Altitude Glacial Lakes of Uttarakhand — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Glaciers & Glacial Lakes of Uttarakhand',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Major Glaciers & High-Altitude Glacial Lakes of Uttarakhand

## 1. Major Glaciers
| Glacier | District | Key Highlight | River Fed |
|---|---|---|---|
| **Gangotri** | Uttarkashi | ~30 km long; **largest glacier in Uttarakhand** | Bhagirathi |
| **Milam** | Pithoragarh | ~16 km; **largest glacier in Kumaon** | Gori Ganga |
| **Pindari** | Bageshwar–Chamoli | Popular trekking glacier | Pindar |
| **Khatling** | Tehri–Rudraprayag | Feeds Tehri reservoir tributary | Bhilangana |
| **Satopanth & Bhagirath Kharak** | Chamoli | NW of Badrinath | Alaknanda |
| **Chorabari** | Rudraprayag | Above Kedarnath | Mandakini |
| **Sunderdhunga & Kafni** | Bageshwar | Adjacent to Pindari | Pindar basin |
| **Namik** | Pithoragarh | Eastern Kumaon | Eastern Ramganga |

## 2. Lakes (*Tals*) of Uttarakhand
- **Kumaon Lakes:** **Bhimtal** (largest by area), **Naukuchiatal** (deepest in Kumaon), **Nainital** (tectonic crescent lake), **Sattal** (7 lakes), **Khurpatal**, **Shyamla Tal** (Champawat).
- **Garhwal Glacial Lakes:** **Sahastratal** (largest high-altitude cluster in Garhwal, Tehri–Uttarkashi), **Roopkund** (Chamoli mystery lake), **Hemkund Sahib** (Chamoli), **Dodital** (Uttarkashi, 6-cornered), **Deoria Tal & Vasuki Tal** (Rudraprayag), **Gandhi Sarovar / Chorabari Tal** (Rudraprayag).

## 3. Key Revision Takeaways
- **Gangotri** = largest in Uttarakhand; **Milam** = largest in Kumaon.
- **Bhimtal** = largest Kumaon lake; **Naukuchiatal** = deepest Kumaon lake.
`,
    mcqs: [
      {
        stem: 'Which is the largest glacier in Uttarakhand by length and ice volume?',
        options: ['Milam Glacier', 'Pindari Glacier', 'Gangotri Glacier', 'Satopanth Glacier'],
        correctOptionIndex: 2,
        explanation: 'Gangotri Glacier (~30 km long) in Uttarkashi district is the largest glacier in Uttarakhand.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which is the largest glacier in the Kumaon division of Uttarakhand?',
        options: ['Pindari Glacier', 'Milam Glacier', 'Kafni Glacier', 'Sunderdhunga Glacier'],
        correctOptionIndex: 1,
        explanation: 'Milam Glacier (~16 km) in Pithoragarh district is the largest glacier in Kumaon.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which lake is the largest by surface area in the Kumaon region?',
        options: ['Nainital', 'Bhimtal', 'Naukuchiatal', 'Khurpatal'],
        correctOptionIndex: 1,
        explanation: 'Bhimtal is the largest lake in Kumaon by area.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which lake in Nainital district is recognized as the deepest lake in Kumaon?',
        options: ['Sattal', 'Bhimtal', 'Naukuchiatal', 'Garur Tal'],
        correctOptionIndex: 2,
        explanation: 'Naukuchiatal is the deepest lake in the Kumaon region.',
        difficulty: 'foundation',
      },
      {
        stem: 'Roopkund, famed for ancient human skeletal remains along a high-altitude glacial basin, is located in which district?',
        options: ['Uttarkashi', 'Chamoli', 'Bageshwar', 'Pithoragarh'],
        correctOptionIndex: 1,
        explanation: 'Roopkund sits in Chamoli district beneath the Trishul massif.',
        difficulty: 'foundation',
      },
      {
        stem: 'In which district is the high-altitude six-cornered Dodital lake located?',
        options: ['Tehri Garhwal', 'Uttarkashi', 'Rudraprayag', 'Chamoli'],
        correctOptionIndex: 1,
        explanation: 'Dodital lies in Uttarkashi district and drains via the Asi Ganga.',
        difficulty: 'standard',
      },
      {
        stem: 'Chorabari Tal (Gandhi Sarovar), associated with the June 2013 flash flood tragedy, lies just upstream of which shrine?',
        options: ['Badrinath', 'Kedarnath', 'Gangotri', 'Yamunotri'],
        correctOptionIndex: 1,
        explanation: 'Chorabari Tal sat behind a loose terminal moraine just upstream of Kedarnath temple in Rudraprayag.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pair of glacier and district is INCORRECTLY matched?',
        options: [
          'Gangotri – Uttarkashi',
          'Milam – Pithoragarh',
          'Kafni – Bageshwar',
          'Khatling – Pithoragarh',
        ],
        correctOptionIndex: 3,
        explanation: 'Khatling Glacier lies on the Tehri Garhwal–Rudraprayag border, not in Pithoragarh.',
        difficulty: 'standard',
      },
      {
        stem: 'Which lake in Champawat district is famous for Vivekananda\'s Shyamla Ashram nearby and lotus blooms?',
        options: ['Shyamla Tal', 'Drona Sagar', 'Hemkund', 'Nachiketa Tal'],
        correctOptionIndex: 0,
        explanation: 'Shyamla Tal is a scenic lake in Champawat district.',
        difficulty: 'standard',
      },
      {
        stem: 'Hemkund Sahib (Lokpal), a revered pilgrimage lake surrounded by seven peaks, is located in which district?',
        options: ['Rudraprayag', 'Chamoli', 'Uttarkashi', 'Pauri Garhwal'],
        correctOptionIndex: 1,
        explanation: 'Hemkund Sahib lies in Chamoli district adjacent to the Valley of Flowers.',
        difficulty: 'foundation',
      },
      {
        stem: 'How is "Sahastratal" best described in Garhwal geography?',
        options: [
          'An artificial reservoir created by Tehri Dam',
          'The largest high-altitude glacial lake cluster in Garhwal, on the Tehri–Uttarkashi border',
          'A saline wetland in Udham Singh Nagar',
          'A volcanic crater lake near Kotdwar',
        ],
        correctOptionIndex: 1,
        explanation: 'Sahastratal is the largest cluster of high-altitude glacial lakes in Garhwal.',
        difficulty: 'standard',
      },
      {
        stem: 'Which three glaciers lie in Bageshwar district (with Pindari touching the Chamoli boundary)?',
        options: [
          'Pindari, Sunderdhunga, and Kafni',
          'Gangotri, Yamunotri, and Bandarpunch',
          'Satopanth, Bagini, and Tipra',
          'Milam, Ralam, and Namik',
        ],
        correctOptionIndex: 0,
        explanation: 'Pindari, Sunderdhunga, and Kafni form the famous triad of glaciers in Bageshwar.',
        difficulty: 'standard',
      },
      {
        stem: 'What geomorphological process primarily distinguishes high-altitude lakes like Roopkund from Nainital?',
        options: [
          'Roopkund occupies an ice-carved glacial cirque/tarn, whereas Nainital is mainly tectonic and landslide-impounded',
          'Nainital is a glacial tarn while Roopkund is an oxbow lake',
          'Both are man-made British reservoirs',
          'Both formed inside volcanic calderas',
        ],
        correctOptionIndex: 0,
        explanation: 'High-altitude Greater Himalayan lakes occupy cirques/moraine basins, whereas Lesser Himalayan Kumaon lakes formed via faulting and ancient landslides.',
        difficulty: 'advanced',
      },
      {
        stem: 'Why does retreating Gangotri Glacier pose a dual long-term risk to Uttarakhand?',
        options: [
          'Short-term heightened GLOF risk from unstable moraine lakes, followed by reduced dry-season river flow over decades',
          'Immediate freezing of the Terai plains',
          'Increase in tropical cyclone frequency over Chamoli',
          'Permanent drying of the Bay of Bengal',
        ],
        correctOptionIndex: 0,
        explanation: 'Glacier retreat forms unstable proglacial lakes (raising GLOF hazard) and diminishes long-term lean-season meltwater reserves.',
        difficulty: 'standard',
      },
      {
        stem: 'Which pair of lakes lies in Rudraprayag district?',
        options: [
          'Deoria Tal and Vasuki Tal',
          'Khurpatal and Sattal',
          'Dodital and Nachiketa Tal',
          'Drona Sagar and Giri Tal',
        ],
        correctOptionIndex: 0,
        explanation: 'Deoria Tal and Vasuki Tal are both situated in Rudraprayag district.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Altitudinal Climatic Zones & Precipitation Patterns',
    materialTitle: 'Altitudinal Climatic Zones & Precipitation Patterns — Study Notes',
    estimatedMinutes: 20,
    assessmentTitle: 'Practice Assessment: Climate & Precipitation of Uttarakhand',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Altitudinal Climatic Zones & Precipitation Patterns

## 1. Vertical Climatic Zonation
Elevation spanning from <250 m (Terai) to 7,816 m (Nanda Devi) creates vertical climatic zones:
- **Sub-Tropical (<900 m):** Terai–Bhabar–Duns (hot summers, mild winters).
- **Warm Temperate (900–1,800 m):** Almora, Srinagar, Pithoragarh, Uttarkashi.
- **Cool Temperate (1,800–3,000 m):** Nainital, Mussoorie, Ranikhet, Chakrata (snowy winters).
- **Sub-Alpine & Alpine (3,000–4,500 m)** and **Glacial (>4,500 m)**.

## 2. Precipitation Drivers
- **Southwest Monsoon (June–Sept):** 75%–85% of annual rainfall. Intense orographic rain along outer ridges (**Narendranagar, Rajpur–Mussoorie, Nainital**); gradual east-to-west decrease; cold **rain shadow** in Trans-Himalayan valleys (Nelang, upper Niti).
- **Western Disturbances (Dec–March):** Bring crucial winter snow above 1,800 m (replenishing glaciers/springs) and Rabi rainfall.
- **Pre-Monsoon (April–May):** Convective storms and orchard-damaging hail.

## 3. Key Revision Takeaways
- **Altitude** governs temperature; **aspect** (sunny south-facing vs shaded north-facing slopes) controls micro-climate.
- **Western Disturbances** drive winter snow; **orographic uplift** causes heavy outer-hill monsoon rain.
`,
    mcqs: [
      {
        stem: 'What is the most decisive geographical factor governing temperature variation across Uttarakhand?',
        options: [
          'Distance from the Tropic of Capricorn',
          'Altitude (elevation above sea level)',
          'Ocean currents of the Arabian Sea',
          'Longitudinal extent alone',
        ],
        correctOptionIndex: 1,
        explanation: 'Altitude controls vertical climatic zonation via the atmospheric lapse rate across Uttarakhand.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which weather system brings essential winter snowfall to Uttarakhand\'s higher mountains and winter rain ("Mahawat") to the valleys and plains?',
        options: [
          'Retreating Northeast Trade Winds',
          'Western Disturbances originating over the Mediterranean region',
          'Bay of Bengal tropical cyclones in July',
          'Trade winds from the Pacific Ocean',
        ],
        correctOptionIndex: 1,
        explanation: 'Western Disturbances bring winter snow above ~1,800 m and winter rain between December and March.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why do towns like Narendranagar, Rajpur, and Nainital record exceptionally high annual precipitation compared to interior valleys like Srinagar or Joshimath?',
        options: [
          'They face the first steep orographic barrier intercepting moisture-laden Southwest Monsoon winds',
          'They are located inside Trans-Himalayan rain-shadow basins',
          'They sit near perpetual permafrost glaciers',
          'They have lower atmospheric pressure throughout the year',
        ],
        correctOptionIndex: 0,
        explanation: 'Monsoon winds rise abruptly against outer Lesser Himalayan ridges, triggering intense orographic rainfall.',
        difficulty: 'standard',
      },
      {
        stem: 'Which altitude band generally experiences the Cool Temperate climate characteristic of Nainital, Mussoorie, and Ranikhet?',
        options: ['Below 600 m', '900–1,500 m', '1,800–3,000 m', 'Above 4,800 m'],
        correctOptionIndex: 2,
        explanation: 'The 1,800–3,000 m belt experiences a cool temperate climate with mild summers and regular winter snowfall.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which region of Uttarakhand falls in a classic rain-shadow zone receiving minimal southwest monsoon precipitation?',
        options: [
          'Southern slopes of Nainital ridge',
          'Trans-Himalayan northern valleys such as Nelang and upper Niti',
          'Haridwar–Roorkee plains',
          'Dehradun–Rajpur foothills',
        ],
        correctOptionIndex: 1,
        explanation: 'Lying north of the high Greater Himalayan crestline, Trans-Himalayan valleys receive scant monsoon moisture.',
        difficulty: 'foundation',
      },
      {
        stem: 'Roughly what share of Uttarakhand\'s total annual precipitation occurs during the Southwest Monsoon season (June–September)?',
        options: ['About 25–30%', 'About 45–50%', 'About 75–85%', 'About 98%'],
        correctOptionIndex: 2,
        explanation: 'Approximately 75% to 85% of Uttarakhand\'s annual rainfall occurs during June–September.',
        difficulty: 'standard',
      },
      {
        stem: 'Across southern Uttarakhand, how does Southwest Monsoon rainfall broadly vary from east to west at comparable foothill locations?',
        options: [
          'Increases steeply from east to west',
          'Gradually decreases from eastern Kumaon towards western Garhwal',
          'Remains completely identical everywhere',
          'Drops to zero in Kumaon',
        ],
        correctOptionIndex: 1,
        explanation: 'Since Bay of Bengal monsoon currents move northwestward, rainfall broadly tapers from east to west.',
        difficulty: 'standard',
      },
      {
        stem: 'Above approximately what elevation in Uttarakhand does perpetual snow and glacial conditions dominate year-round?',
        options: ['1,500 m', '2,500 m', '4,500–4,800 m', '900 m'],
        correctOptionIndex: 2,
        explanation: 'The permanent snowline in Uttarakhand typically lies around 4,500–4,800 m.',
        difficulty: 'standard',
      },
      {
        stem: 'In Uttarakhand hill agriculture, why do south-facing slopes differ micro-climatically from north-facing slopes at the exact same altitude?',
        options: [
          'South-facing slopes receive more direct solar insolation (warmer, drier), whereas north-facing slopes remain cooler and retain higher soil moisture',
          'North-facing slopes receive only tropical heat',
          'South-facing slopes never receive monsoon rain',
          'Slope aspect has zero effect on solar radiation',
        ],
        correctOptionIndex: 0,
        explanation: 'Aspect governs insolation: south-facing slopes are warmer and drier, while shaded north-facing slopes retain moister oak habitats.',
        difficulty: 'standard',
      },
      {
        stem: 'Which season in Uttarakhand poses the highest risk of hailstorms damaging stone-fruit orchards (peach, plum, apple)?',
        options: [
          'Deep winter (January)',
          'Pre-monsoon convective period (April–May)',
          'Peak monsoon (August)',
          'Post-monsoon dry autumn (November)',
        ],
        correctOptionIndex: 1,
        explanation: 'Strong daytime heating in April–May triggers convective thunderstorms and hailstorms.',
        difficulty: 'standard',
      },
      {
        stem: 'Why are deep interior valley towns like Srinagar (Garhwal) significantly hotter in May–June than surrounding ridges like Pauri?',
        options: [
          'Lower elevation (~560 m vs ~1,800 m at Pauri) combined with restricted valley wind circulation',
          'Proximity to active coal mines',
          'Higher latitude than Pauri',
          'Location inside the Arctic circle',
        ],
        correctOptionIndex: 0,
        explanation: 'Srinagar sits at a much lower valley elevation (~560 m) along the Alaknanda gorge, leading to much higher summer temperatures.',
        difficulty: 'standard',
      },
      {
        stem: 'What agricultural and hydrological role do winter snowfalls from Western Disturbances play in Uttarakhand?',
        options: [
          'They only benefit coastal fisheries',
          'They replenish glacier mass balance and provide slow-release spring moisture for apples and Rabi crops',
          'They cause immediate monsoon floods in July',
          'They completely stop river flow across India',
        ],
        correctOptionIndex: 1,
        explanation: 'Winter snow adds accumulation to glaciers and melts gradually in spring, sustaining springs and chilling hours for temperate fruit.',
        difficulty: 'standard',
      },
      {
        stem: 'Which town among the following lies in the Sub-Tropical climatic zone of Uttarakhand?',
        options: ['Joshimath', 'Mussoorie', 'Rudrapur', 'Munsiyari'],
        correctOptionIndex: 2,
        explanation: 'Rudrapur (~210 m in Udham Singh Nagar Terai) has a sub-tropical monsoon climate.',
        difficulty: 'foundation',
      },
      {
        stem: 'In hill topography, why do frost pockets commonly form in narrow valley floors during clear December–January nights?',
        options: [
          'Cold, dense air drains downslope at night (katabatic drainage) and pools in valley bottoms',
          'Warm air sinks beneath cold air',
          'Glacial rivers heat valley air to freezing',
          'Monsoon winds blow from the south in January',
        ],
        correctOptionIndex: 0,
        explanation: 'Radiation cooling on clear winter nights causes dense cold air to drain down mountain slopes into valley basins.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which district experiences a dramatic climatic gradient from sub-tropical plains/Duns up to cool temperate ridges within its own borders?',
        options: [
          'Haridwar',
          'Dehradun (from Doiwala/Vikasnagar to Chakrata/Mussoorie)',
          'Udham Singh Nagar',
          'None of the districts vary in elevation',
        ],
        correctOptionIndex: 1,
        explanation: 'Dehradun spans low Doon/Ganga plain elevations (~350 m) up to temperate Chakrata and Mussoorie (>2,100 m).',
        difficulty: 'standard',
      },
    ],
  },
];
