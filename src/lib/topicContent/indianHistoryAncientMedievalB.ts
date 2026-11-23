import { TopicContentPackage } from './types';

export const INDIAN_HISTORY_ANCIENT_MEDIEVAL_PART_B: TopicContentPackage[] = [
  {
    topicTitle: 'Early Medieval Kingdoms & Chola Local Self-Government',
    materialTitle: 'Early Medieval Kingdoms & Chola Local Self-Government — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Early Medieval Kingdoms & Chola Polity',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Early Medieval Kingdoms & Chola Local Self-Government

## 1. The Tripartite Struggle & Regional Kingdoms (c. 750–1200 CE)
Following Harshavardhana's death, **Kannauj** in the fertile Ganga–Yamuna doab emerged as the premier symbol of imperial sovereignty in northern India. Three major powers competed for its control for over a century (8th–10th centuries CE):
1. **Gurjara-Pratiharas** (Western India & Malwa): Founded in imperial stature by **Nagabhata I**; reached zenith under **Mihira Bhoja** (title *Adivaraha*) and Mahendrapala I (patron of scholar **Rajasekhara**).
2. **Palas** (Bengal & Bihar): Founded by **Gopala** (c. 750 CE, reportedly chosen by notables to end *matsyanyaya* or anarchy). **Dharmapala** founded **Vikramashila Mahavihara** and revived Nalanda; **Devapala** expanded influence into Assam and Odisha.
3. **Rashtrakutas** (Deccan, capital Manyakheta): Founded by **Dantidurga**. **Krishna I** excavated the monolithic **Kailasanatha Temple at Ellora**; **Amoghavarsha I** authored *Kavirajamarga* (earliest extant Kannada poetics work).

| Dynasty | Core Region | Key Ruler / Patronage | Architectural / Literary Milestone |
|---|---|---|---|
| **Palas** | Bengal–Bihar | Dharmapala, Devapala | Vikramashila University; Vajrayana Buddhism patronage |
| **Pratiharas** | Rajasthan–Malwa–Kannauj | Mihira Bhoja, Mahendrapala I | Teli ka Mandir (Gwalior); Rajasekhara's *Kavyamimamsa* |
| **Rashtrakutas** | Deccan (Manyakheta) | Krishna I, Dhruva, Amoghavarsha I | Kailasanatha Temple (Ellora); *Kavirajamarga* |
| **Imperial Cholas** | Kaveri Delta (Thanjavur) | Rajaraja I, Rajendra I | Brihadisvara Temple; Gangaikondacholapuram |

## 2. Rise of the Imperial Cholas (c. 850–1279 CE)
- **Vijayalaya Chola** captured Thanjavur from the Muttaraiyars around 850 CE, establishing the medieval Chola line.
- **Parantaka I** consolidated the Kaveri heartland and issued the famous **Uttaramerur inscriptions** (919 & 921 CE).
- **Rajaraja I (985–1014 CE):** Built the granite **Brihadisvara (Rajarajesvara) Temple** at Thanjavur; initiated comprehensive land surveys; conquered northern Sri Lanka and the Maldives.
- **Rajendra I (1014–1044 CE):** Completed the conquest of Sri Lanka, led an expedition to the Ganga valley assuming the title **Gangaikonda Chola**, founded **Gangaikondacholapuram**, and launched a naval expedition against the **Srivijaya Empire** in Southeast Asia (c. 1025 CE) to safeguard maritime trade routes toward Song China.

## 3. Chola Administrative Structure & Village Assemblies
The Chola state combined strong central fiscal–military coordination with remarkable autonomy at the village level:
- **Territorial Hierarchy:** *Mandalam* (province) → *Valanadu* (commissionary/region) → *Nadu* (district/agrarian cluster) → *Kurram* / *Kottam* → Villages (*Ur*, *Sabha*, *Nagaram*).
- **Three Village Assembly Types:**
  - **Ur:** General assembly of tax-paying villagers in non-brahmadeya (*vellanvagai*) settlements.
  - **Sabha (Mahasabha):** Exclusive assembly of adult male landowners in **brahmadeya** (Brahmin-granted) villages.
  - **Nagaram:** Assembly of merchants and artisans in commercial towns.
- **Uttaramerur Inscriptions & Kudavolai System:** Detailed qualifications (land ownership, house ownership, age 35–70, knowledge of Vedic mantras/texts, financial probity) and disqualifications (failure to submit accounts, theft/moral offences) for committee (*variyam*) members, selected via **Kudavolai** (palmyra-leaf lottery drawn by a young child from a pot).
- **Committees (*Variyams*):** Supervised irrigation tanks (*eri-variyam*), gardens (*totta-variyam*), gold/currency testing (*pon-variyam*), justice, and temple endowments.

## 4. Relevance to Uttarakhand & Parallel Himalayan Polities
During the same early medieval centuries (8th–11th centuries CE), the **Katyuri dynasty** ruled Uttarakhand from Kartikeyapura (Joshimath and later Baijnath/Katyur valley), building stone *Nagara*-style temples (Jageshwar, Baijnath, Dwarahat) and maintaining copper-plate land grants structurally comparable to mainland *brahmadeya* and *agrahar* grants.

## 5. Key Revision Takeaways
- **Tripartite Struggle** over Kannauj involved Palas, Pratiharas, and Rashtrakutas (Pratiharas ultimately held Kannauj longest, though Rashtrakutas scored major military victories).
- **Uttaramerur inscriptions** belong to **Parantaka I** and detail **Sabha** committee elections (*Kudavolai*), not general universal suffrage.
- **Rajendra I** carried out both the Ganga expedition and the **1025 CE Srivijaya naval campaign**.`,
    mcqs: [
      {
        stem: 'Which three dynasties were directly involved in the Tripartite Struggle for supremacy over Kannauj during the 8th–10th centuries CE?',
        options: [
          'Palas, Gurjara-Pratiharas, and Rashtrakutas',
          'Cholas, Pallavas, and Pandyas',
          'Chalukyas, Hoysalas, and Kakatiyas',
          'Senas, Chandellas, and Paramaras',
        ],
        correctOptionIndex: 0,
        explanation: 'The Palas of Bengal, Gurjara-Pratiharas of western/northern India, and Rashtrakutas of the Deccan fought for control of Kannauj.',
        difficulty: 'foundation',
      },
      {
        stem: 'The famous Uttaramerur inscriptions detailing village committee (variyam) elections were issued during the reign of which Chola ruler?',
        options: ['Vijayalaya', 'Parantaka I', 'Rajaraja I', 'Kulottunga I'],
        correctOptionIndex: 1,
        explanation: 'Parantaka I issued the Uttaramerur inscriptions (919 CE and 921 CE) recording the rules of the brahmadeya Sabha.',
        difficulty: 'foundation',
      },
      {
        stem: 'In the Chola agrarian hierarchy, what did the term "Vellanvagai" denote?',
        options: [
          'Land donated to Jain monasteries',
          'Land of non-Brahmin peasant proprietors',
          'Land assigned for maintenance of a school',
          'Revenue-free land granted to temple musicians',
        ],
        correctOptionIndex: 1,
        explanation: 'Chola inscriptions classify vellanvagai as land belonging to non-Brahmin peasant proprietors, distinct from brahmadeya and devadana.',
        difficulty: 'standard',
      },
      {
        stem: 'Under the Chola village system, "Nagaram" functioned primarily as an assembly of:',
        options: [
          'Brahmin scholars in agrahara settlements',
          'Traders and merchants in commercial centres',
          'Naval commanders stationed at Nagapattinam',
          'Royal palace guards',
        ],
        correctOptionIndex: 1,
        explanation: 'Nagaram was the corporate assembly of merchants and traders in market centres and towns.',
        difficulty: 'foundation',
      },
      {
        stem: 'What was the "Kudavolai" method recorded in early medieval Tamil inscriptions?',
        options: [
          'A canal-tax assessment survey',
          'A lottery system using palm-leaf tickets drawn from a pot to select committee members',
          'A guild charter governing overseas spice exports',
          'A bronze casting technique for Nataraja images',
        ],
        correctOptionIndex: 1,
        explanation: 'Kudavolai used palm-leaf tickets placed in a pot (kuda) and drawn at random by a young boy to choose eligible variyam members.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Chola emperor launched a major maritime naval expedition against the Srivijaya Empire in Southeast Asia around 1025 CE?',
        options: ['Aditya I', 'Rajaraja I', 'Rajendra I', 'Vikrama Chola'],
        correctOptionIndex: 2,
        explanation: 'Rajendra I dispatched a naval fleet across the Bay of Bengal against Srivijaya to protect Indian Ocean trade links.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who founded Vikramashila Mahavihara in Bihar, a premier centre of Tantric/Vajrayana Buddhist learning?',
        options: ['Gopala', 'Dharmapala', 'Devapala', 'Mahipala I'],
        correctOptionIndex: 1,
        explanation: 'The Pala ruler Dharmapala established Vikramashila Mahavihara (modern Antichak, Bhagalpur district) in the late 8th–early 9th century CE.',
        difficulty: 'foundation',
      },
      {
        stem: 'The monolithic rock-cut Kailasanatha Temple (Cave 16) at Ellora was commissioned by which Rashtrakuta ruler?',
        options: ['Dantidurga', 'Krishna I', 'Govinda III', 'Indra III'],
        correctOptionIndex: 1,
        explanation: 'Krishna I (r. c. 756–773 CE) commissioned the famous monolithic Kailasanatha Temple carved top-down at Ellora.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which early Kannada literary treatise on poetics is attributed to Rashtrakuta king Amoghavarsha I (alongside court poet Sri Vijaya)?',
        options: ['Kavirajamarga', 'Vikramarjuna Vijaya', 'Shantipurana', 'Gathasaptasati'],
        correctOptionIndex: 0,
        explanation: 'Kavirajamarga (9th century CE) is the earliest surviving work on rhetoric and poetics in Kannada, associated with Amoghavarsha I\'s court.',
        difficulty: 'standard',
      },
      {
        stem: 'In Chola administrative geography, arrange the territorial units from largest to smallest:',
        options: [
          'Nadu -> Valanadu -> Mandalam',
          'Mandalam -> Valanadu -> Nadu',
          'Valanadu -> Mandalam -> Kurram',
          'Kurram -> Mandalam -> Nadu',
        ],
        correctOptionIndex: 1,
        explanation: 'The Chola empire was divided into Mandalams (provinces), subdivided into Valanadus, which contained Nadus (clusters of villages).',
        difficulty: 'standard',
      },
      {
        stem: 'Why was the Uttaramerur Sabha system NOT equivalent to modern universal adult franchise?',
        options: [
          'Only military generals could stand for election',
          'Eligibility was restricted by property ownership, age, Vedic/scriptural literacy, and brahmadeya status',
          'Committees were appointed directly by the Pallava king without local involvement',
          'Only residents under age 25 could serve on the variyams',
        ],
        correctOptionIndex: 1,
        explanation: 'Candidates required specific tax-paying land ownership, a house on their own site, age 35–70, and scriptural knowledge, excluding landless groups and women.',
        difficulty: 'advanced',
      },
      {
        stem: 'During the early medieval period, which Uttarakhand dynasty issued copper-plate grants comparable to mainland royal charters and built temples at Baijnath and Jageshwar?',
        options: ['Kunindas', 'Katyuris', 'Mallas of Doti', 'Pauravas of Brahmapura'],
        correctOptionIndex: 1,
        explanation: 'The Katyuri rulers of Kartikeyapura (8th–11th centuries CE) issued copper plates from Pandukeshwar and Bageshwar and patronized Nagara temples at Jageshwar and Baijnath.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Gurjara-Pratihara ruler assumed the title "Adivaraha" and was praised by the Arab traveller Sulaiman?',
        options: ['Nagabhata II', 'Mihira Bhoja', 'Vatsaraja', 'Mahipala'],
        correctOptionIndex: 1,
        explanation: 'Mihira Bhoja (c. 836–885 CE) issued silver dramma coins bearing the legend Adivaraha and presided over the zenith of Pratihara power.',
        difficulty: 'standard',
      },
      {
        stem: 'Under Chola village administration, what was the specific responsibility of the "Eri-variyam"?',
        options: [
          'Minting gold coins',
          'Maintaining irrigation tanks and water distribution',
          'Auditing maritime customs duties',
          'Conducting temple dance festivals',
        ],
        correctOptionIndex: 1,
        explanation: 'Eri-variyam was the tank/irrigation committee responsible for desilting reservoirs, repairing bunds, and regulating water shares.',
        difficulty: 'standard',
      },
      {
        stem: 'The Brihadisvara (Rajarajesvara) Temple at Thanjavur, completed around 1010 CE, is renowned for:',
        options: [
          'Brick shikhara in Gupta style',
          'Tall Dravida-style vimana constructed primarily of granite',
          'Excavated Chaitya hall architecture',
          'Double-domed Indo-Islamic arches',
        ],
        correctOptionIndex: 1,
        explanation: 'Built by Rajaraja I in granite, the Brihadisvara temple features a towering Dravida vimana and rich chola frescoes and inscriptions.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Delhi Sultanate Administration, Economy & Market Reforms',
    materialTitle: 'Delhi Sultanate Administration, Economy & Market Reforms — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Delhi Sultanate Governance & Economy',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Delhi Sultanate Administration, Economy & Market Reforms

## 1. Dynastic Sequence & Political Consolidation (1206–1526 CE)
The Delhi Sultanate spanned five dynasties:
1. **Mamluk (Slave/Ilbari) Dynasty (1206–1290):** Qutbuddin Aibak, **Iltutmish** (real consolidator; organized *Turkan-i-Chahalgani*, introduced silver *Tanka* and copper *Jital*, institutionalized *Iqta*), **Raziya Sultan**, and **Ghiyasuddin Balban** (Theory of Kingship: *Zill-i-Ilahi*, *Sijda* & *Paibos*, *Diwan-i-Arz*).
2. **Khalji Dynasty (1290–1320):** Jalaluddin Khalji, **Alauddin Khalji** (imperial expansion into Deccan via Malik Kafur, agrarian & price controls, *Dagh* and *Huliya/Chehra*).
3. **Tughlaq Dynasty (1320–1414):** Ghiyasuddin Tughlaq, **Muhammad bin Tughlaq** (Daulatabad capital experiment, token copper/bronze currency, *Diwan-i-Amir-i-Kohi* for agriculture), **Firoz Shah Tughlaq** (canal irrigation, hereditary *iqtas*, *Diwan-i-Khairat*, *Diwan-i-Bandagan*).
4. **Sayyid Dynasty (1414–1451):** Khizr Khan and successors.
5. **Lodi Dynasty (1451–1526):** Bahlul Lodi, **Sikandar Lodi** (founded Agra in 1504; introduced *Gazz-i-Sikandari*), Ibrahim Lodi (defeated by Babur at First Battle of Panipat, 1526).

## 2. Central Administrative Departments
| Department / Office | Primary Function | Key Sultan Associated |
|---|---|---|
| **Diwan-i-Wizarat** | Revenue, finance, and audit (headed by Wazir) | Core Sultanate structure |
| **Diwan-i-Arz** | Military recruitment, muster & inspection | Formalized by **Balban** |
| **Diwan-i-Insha** | Royal correspondence and state dispatches | Core Sultanate structure |
| **Diwan-i-Risalat** | Religious affairs / foreign correspondence (debated scope across reigns) | Core Sultanate structure |
| **Diwan-i-Mustakhraj** | Recovery of revenue arrears from collectors (*amils*) | **Alauddin Khalji** |
| **Diwan-i-Riyasat / Shahna-i-Mandi** | Market regulation, price enforcement & weights supervision | **Alauddin Khalji** |
| **Diwan-i-Amir-i-Kohi** | Agricultural extension, *sondhar* loans & crop rotation | **Muhammad bin Tughlaq** |
| **Diwan-i-Bandagan / Khairat** | Slaves department & charity/marriage assistance | **Firoz Shah Tughlaq** |

## 3. The Iqta System & Land Revenue Administration
- **Concept:** An *Iqta* was a transferable territorial revenue assignment granted to a noble/commander (**Muqti** or **Wali**) in lieu of salary and troop maintenance—not hereditary land ownership during strong reigns.
- **Surplus (*Fawazil*):** After meeting authorized personal pay and soldier expenses, the *Muqti* had to remit excess revenue (*fawazil*) to the central treasury. **Balban** appointed *Khwajas* (accountants) to audit *Muqtis*, while **Firoz Shah Tughlaq** weakened central control by making *iqtas* and military posts effectively hereditary.
- **Alauddin Khalji's Agrarian Reforms:**
  - Conducted land measurement (*masahat*) using standard *biswa* units in the core doab region.
  - Fixed **Kharaj** (land tax) at **50% of produce** (*nisf*), curbing hereditary rural intermediaries (*khuts, muqaddams, chaudhuris*).
  - Imposed **Ghari** (house tax) and **Charai** (pasture tax).

## 4. Alauddin Khalji's Market Controls & Economic Transformation
- **Strategic Objective:** Maintain a large standing army paid in **cash** (*naqd*) at moderate fixed salaries without bankrupting the treasury.
- **Three/Four Regulated Markets in Delhi:** Grain market, cloth & luxury market (*Sarai Adl*), and horses/slaves/cattle market.
- **Enforcement:** **Shahna-i-Mandi** (market superintendent), **Barids** (intelligence officers), and **Munhiyans** (secret spies) checked hoarding, short weights, and black-marketing.
- **Urban & Craft Growth:** Introduction of the spinning wheel (*charkha*), Persian wheel (*saqiya* / *rahat* for irrigation), paper manufacturing, and lime-mortar arched construction expanded urban artisan production.

## 5. Uttarakhand Interface with the Delhi Sultanate
- **Garhwal & Kumaon Foothills:** Contemporary chronicles (such as *Tarikh-i-Firoz Shahi* and *Tarikh-i-Mubarak Shahi*) note Sultanate raids and asylum episodes in the **Sirmour–Siwalik–Katehr** foothills (e.g., **Firoz Shah Tughlaq**'s expeditions into Katehr/Kumaon foothills and Timur's 1398–99 passage near Haridwar).
- While the interior mountain kingdoms of **Garhwal (Panwar/Parmar)** and **Kumaon (Chand)** preserved autonomous rule, foothill Terai-Bhabar tracts (**Mal / Desh**) saw repeated revenue and tributary friction with Delhi and Katehr governors.

## 6. Key Revision Takeaways
- **Iltutmish** standardized the bi-metallic **silver Tanka** and **copper Jital**.
- **Balban** created **Diwan-i-Arz** and enforced Persian court etiquette (*Sijda*, *Paibos*).
- **Alauddin Khalji** introduced **Dagh** (horse branding), **Huliya/Chehra** (soldier descriptive roll), 50% land tax via measurement (*masahat*), and **Shahna-i-Mandi** price controls.
- **Muhammad bin Tughlaq** set up **Diwan-i-Amir-i-Kohi** and advanced *sondhar* agrarian loans.`,
    mcqs: [
      {
        stem: 'Which Delhi Sultan formalized the central military department "Diwan-i-Arz" to strengthen royal control over the army?',
        options: ['Qutbuddin Aibak', 'Iltutmish', 'Ghiyasuddin Balban', 'Firoz Shah Tughlaq'],
        correctOptionIndex: 2,
        explanation: 'Ghiyasuddin Balban separated military administration under Diwan-i-Arz (headed by Ariz-i-Mamalik) to ensure strict troop readiness.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the Delhi Sultanate Iqta system, what did the term "Fawazil" signify?',
        options: [
          'Tax levied on non-Muslim merchants at ports',
          'Excess revenue remitted by a Muqti to the central treasury after deducting authorized expenses',
          'Land reserved exclusively for royal cavalry horses',
          'Forced labour exacted for canal excavation',
        ],
        correctOptionIndex: 1,
        explanation: 'Fawazil was the surplus balance from an iqta\'s revenue collection over the Muqti\'s sanctioned personal pay and troop expenditure.',
        difficulty: 'standard',
      },
      {
        stem: 'Who introduced the standardized silver "Tanka" and copper "Jital" coinage of the Delhi Sultanate?',
        options: ['Qutbuddin Aibak', 'Iltutmish', 'Alauddin Khalji', 'Bahlul Lodi'],
        correctOptionIndex: 1,
        explanation: 'Shamsuddin Iltutmish introduced the Arabic-inscribed silver Tanka and copper Jital, creating a durable Sultanate monetary base.',
        difficulty: 'foundation',
      },
      {
        stem: 'What was the primary strategic objective behind Alauddin Khalji\'s strict price and market control regulations in Delhi?',
        options: [
          'To encourage overseas spice exports to Venice',
          'To sustain a huge standing army paid in cash at low fixed wages',
          'To abolish all land taxes in the Ganga-Yamuna doab',
          'To replace silver coins with leather token money',
        ],
        correctOptionIndex: 1,
        explanation: 'According to Barani, fixed low prices of grain, cloth, and essentials allowed Alauddin to maintain a massive cash-paid standing army against Mongol threats.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which department did Muhammad bin Tughlaq establish to promote agricultural expansion and grant "sondhar" (taqavi) loans to peasants?',
        options: ['Diwan-i-Mustakhraj', 'Diwan-i-Amir-i-Kohi', 'Diwan-i-Bandagan', 'Diwan-i-Khairat'],
        correctOptionIndex: 1,
        explanation: 'Muhammad bin Tughlaq set up Diwan-i-Amir-i-Kohi to bring uncultivated land under crops and improve cropping patterns through state loans.',
        difficulty: 'foundation',
      },
      {
        stem: 'In Alauddin Khalji\'s military administration, what were "Dagh" and "Chehra (Huliya)" respectively?',
        options: [
          'Grain storage granary and market price list',
          'Branding of war horses and descriptive roll of soldiers',
          'Irrigation tax and pasture tax',
          'Royal spy network and provincial governor',
        ],
        correctOptionIndex: 1,
        explanation: 'Dagh (branding horses) and Chehra/Huliya (descriptive muster rolls of soldiers) prevented fraudulent substitution during army inspections.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which ruler made Iqtas and military offices effectively hereditary, reversing earlier Sultanate centralization?',
        options: ['Iltutmish', 'Balban', 'Alauddin Khalji', 'Firoz Shah Tughlaq'],
        correctOptionIndex: 3,
        explanation: 'Firoz Shah Tughlaq adopted conciliatory policies toward the nobility and allowed hereditary succession to iqtas and military assignments.',
        difficulty: 'standard',
      },
      {
        stem: 'The cloth and imported luxury goods market regulated during Alauddin Khalji\'s reign in Delhi was known as:',
        options: ['Sarai Adl', 'Mandi-i-Ghalla', 'Karkhana-i-Riyasat', 'Dar-ul-Shifa'],
        correctOptionIndex: 0,
        explanation: 'Sarai Adl near Badaun Gate served as the regulated state-monitored market for textiles, sugar, dry fruits, and imported items.',
        difficulty: 'standard',
      },
      {
        stem: 'Who founded the city of Agra in 1504 CE and introduced the 39-digit land measurement unit "Gazz-i-Sikandari"?',
        options: ['Bahlul Lodi', 'Sikandar Lodi', 'Ibrahim Lodi', 'Khizr Khan'],
        correctOptionIndex: 1,
        explanation: 'Sikandar Lodi founded Agra (1504 CE) as a forward strategic base and standardized the Gazz-i-Sikandari for land measurement.',
        difficulty: 'foundation',
      },
      {
        stem: 'What were "Ghari" and "Charai" during Alauddin Khalji\'s reign?',
        options: [
          'Two categories of hereditary village priests',
          'House tax and grazing/pasture tax respectively',
          'Weights used in grain trade',
          'Ranks of cavalry commanders',
        ],
        correctOptionIndex: 1,
        explanation: 'Alongside 50% Kharaj measured on land, Alauddin levied Ghari (house tax) and Charai (tax on milch cattle grazing on pastureland).',
        difficulty: 'standard',
      },
      {
        stem: 'Which officer audited the revenue accounts of provincial Muqtis starting from Balban\'s reign?',
        options: ['Khwaja', 'Kotwal', 'Amir-i-Hajib', 'Barid-i-Mamalik'],
        correctOptionIndex: 0,
        explanation: 'Balban appointed Khwajas (accountants) alongside Muqtis to track real revenue collection and stop concealment of fawazil.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which Sultan created "Diwan-i-Mustakhraj" specifically to investigate and recover revenue arrears from local collectors?',
        options: ['Iltutmish', 'Alauddin Khalji', 'Ghiyasuddin Tughlaq', 'Sikandar Lodi'],
        correctOptionIndex: 1,
        explanation: 'Alauddin Khalji instituted Diwan-i-Mustakhraj to audit revenue officers (amils/karkuns) and recover unpaid arrears.',
        difficulty: 'standard',
      },
      {
        stem: 'Which of the following best describes the relationship between the Delhi Sultanate and the hill kingdoms of Garhwal and Kumaon?',
        options: [
          'Both hill kingdoms were permanently annexed as regular Delhi subas under Iltutmish',
          'Interior mountain kingdoms remained autonomous, while foothill Terai-Siwalik zones experienced raids and tributary pressure',
          'Garhwal served as the summer capital of the Lodi Sultans',
          'The Delhi Sultans built the Kedarnath shrine in 1350 CE',
        ],
        correctOptionIndex: 1,
        explanation: 'Geography insulated interior Garhwal and Kumaon from direct Sultanate administration, though foothill Katehr/Siwalik areas saw military expeditions.',
        difficulty: 'standard',
      },
      {
        stem: 'Consider the following statements regarding Muhammad bin Tughlaq\'s Token Currency experiment (c. 1329–1330): 1. Bronze/copper coins were issued at par with silver tanka. 2. Lack of strict state monopoly over minting led to widespread counterfeiting. Which is/are correct?',
        options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
        correctOptionIndex: 2,
        explanation: 'Muhammad bin Tughlaq\'s token bronze/copper coins failed largely because the state did not prevent private forging, prompting him to withdraw and redeem them in silver/gold.',
        difficulty: 'advanced',
      },
      {
        stem: 'In Sultanate Delhi, which set of officials reported directly to the Sultan regarding market infractions and merchant hoarding?',
        options: [
          'Qazis and Muftis only',
          'Shahna-i-Mandi, Barids, and Munhiyans',
          'Muqtis and Patwaris',
          'Sadr-us-Sudur and Mir Bakshi',
        ],
        correctOptionIndex: 1,
        explanation: 'Alauddin cross-checked the Shahna-i-Mandi (market head) using Barids (intelligence officers) and Munhiyans (secret informers).',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Vijayanagara, Bahmani Kingdoms & Bhakti-Sufi Movements',
    materialTitle: 'Vijayanagara, Bahmani Kingdoms & Bhakti-Sufi Movements — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Vijayanagara, Bahmani & Bhakti-Sufi Heritage',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Vijayanagara, Bahmani Kingdoms & Bhakti-Sufi Movements

## 1. The Vijayanagara Empire (1336–1646 CE)
Founded in 1336 CE on the southern bank of the **Tungabhadra River** (Hampi) by **Harihara I** and **Bukka Raya I** (Sangama dynasty), Vijayanagara flourished under four dynasties: **Sangama → Saluva → Tuluva → Aravidu**.

- **Krishnadevaraya (1509–1529 CE, Tuluva Dynasty):**
  - Greatest ruler of Vijayanagara; composed the Telugu statecraft epic ***Amuktamalyada*** and Sanskrit drama *Jambavati Kalyanam*.
  - Patronized the **Ashtadiggajas** (eight renowned Telugu poets including Allasani Peddana and Tenali Ramakrishna).
  - Built the **Hazara Rama** and expanded the **Vittala Temple** (famous for its stone chariot and musical pillars) and built **Nagalapuram** township.
- **Amara-Nayaka System:** Military commanders (**Amaranayakas**) held territorial assignments (*amaram*) to collect revenue, maintain fixed contingents of foot soldiers, horses, and elephants, and remit annual tribute—sharing structural parallels with the Sultanate *Iqta*, though becoming increasingly hereditary over time.
- **Battle of Talikota / Rakshasi-Tangadi (1565 CE):** Combined Deccan Sultanates (Bijapur, Ahmadnagar, Golconda, Bidar) defeated **Rama Raya**, devastating Hampi and shifting the capital southward (Penukonda, Chandragiri).
- **Key Foreign Travellers:** Nicolo de Conti (Devaraya I), Abdur Razzaq (Devaraya II), Domingo Paes and Duarte Barbosa (Krishnadevaraya), Fernao Nuniz (Achyuta Devaraya).

## 2. The Bahmani Kingdom & Deccan Sultanates
- Founded in **1347 CE** by **Alauddin Hasan Bahman Shah** (Zafar Khan) at Gulbarga (capital later moved to **Bidar** by Ahmad Shah Wali).
- **Mahmud Gawan** (Wazir, 1463–1481): Reorganized administration into eight *tarafs* (provinces), curbed noble power via salary audits, and built the grand **Madrasa at Bidar**.
- Following Gawan's execution, the kingdom fragmented into five Deccan Sultanates: **Bijapur (Adil Shahi)**, **Ahmadnagar (Nizam Shahi)**, **Golconda (Qutb Shahi)**, **Berar (Imad Shahi)**, and **Bidar (Barid Shahi)**.

## 3. The Bhakti Movement: Saguna & Nirguna Traditions
| Tradition / Stream | Core Philosophy | Key Saints & Works |
|---|---|---|
| **Early South India** | Tamil devotionalism (6th–9th c.) challenging caste orthodoxy | **Alvars** (Vaishnava, *Nalayira Divya Prabandham*); **Nayanars** (Shaiva, *Tevaram*) |
| **Saguna Bhakti** | Devotion to personal God with attributes (Rama, Krishna) | **Ramananda**, **Tulsidas** (*Ramcharitmanas*), **Surdas**, **Mirabai**, **Chaitanya Mahaprabhu**, **Shankaradeva** (Ekasarana Dharma, Assam), **Varkari saints** (Jnaneshwar, Namdev, Tukaram) |
| **Nirguna Bhakti** | Formless, transcendent Divine; sharp critique of ritualism & caste | **Kabir** (*Bijak* / *Sakhi*), **Guru Nanak** (Founder of Sikhism; *Japji Sahib*), **Ravidas**, **Dadu Dayal** |

- **Philosophical Foundations (Vedanta):** **Shankara** (*Advaita* — strict non-dualism), **Ramanuja** (*Vishishtadvaita* — qualified non-dualism), **Madhva** (*Dvaita* — dualism), **Nimbarka** (*Dvaitadvaita*), **Vallabhacharya** (*Shuddhadvaita* / Pushtimarg).

## 4. The Sufi Movement in India
- Core vocabulary: **Khanqah** (hospice/spiritual centre), **Pir / Shaikh** (master), **Murid** (disciple), **Silsilah** (spiritual lineage), **Sama** (devotional music assembly), **Dargah** (tomb shrine).
- **Major Silsilahs:**
  - **Chishti:** Introduced by **Khwaja Muinuddin Chishti** (Ajmer); **Qutbuddin Bakhtiyar Kaki**, **Baba Farid**, **Nizamuddin Auliya** (Delhi; *Mahbub-i-Ilahi*), **Nasiruddin Chiragh-i-Dehlavi**. Emphasized poverty, detachment from royal patronage, *langar*, and *sama*.
  - **Suhrawardi:** **Bahauddin Zakariya** (Multan); accepted state grants and wealth for organized charity.
  - **Naqshbandi:** **Khwaja Baqi Billah**, **Shaikh Ahmad Sirhindi** (*Mujaddid Alf-i-Sani*); emphasized strict Sharia orthodoxy and silent *zikr* over *sama*.
  - **Qadiri:** **Miyan Mir** (laid Harmandir Sahib foundation tradition often noted in Sikh-Sufi memory; close to Guru Arjan Dev & Prince Dara Shikoh).

## 5. Bhakti–Sufi Footprints in Uttarakhand
- Uttarakhand's **Char Dham** and **Panch Kedar/Badri** pilgrim circuits absorbed **Shankara's Advaita** tradition (Joshimath / Jyotirmath as the northern *matha*), Nathpanthi yogis (Gorakhnath traditions across Garhwal–Kumaon), and **Guru Nanak's Udasi travels** (historical gurudwaras like **Nanakmatta** in Udham Singh Nagar and **Reetha Sahib** in Champawat).
- In the 17th century, **Guru Ram Rai** established his *Dera* at **Dehradun**, shaping the city's name and early urban growth.

## 6. Key Revision Takeaways
- **Vijayanagara dynasties** in chronological order: **Sangama → Saluva → Tuluva → Aravidu**.
- **Amuktamalyada** (Telugu) was authored by **Krishnadevaraya**; **Mahmud Gawan** served the Bahmani Sultanate at Bidar.
- **Chishti** saints shunned state appointments; **Suhrawardis** accepted royal patronage.
- **Nanakmatta**, **Reetha Sahib**, and **Dehradun (Guru Ram Rai Darbar)** link Sikh–Bhakti heritage directly to Uttarakhand.`,
    mcqs: [
      {
        stem: 'Arrange the four ruling dynasties of the Vijayanagara Empire in correct chronological order:',
        options: [
          'Sangama -> Saluva -> Tuluva -> Aravidu',
          'Saluva -> Sangama -> Tuluva -> Aravidu',
          'Sangama -> Tuluva -> Saluva -> Aravidu',
          'Tuluva -> Sangama -> Aravidu -> Saluva',
        ],
        correctOptionIndex: 0,
        explanation: 'Vijayanagara was ruled successively by the Sangama (1336–1485), Saluva (1485–1505), Tuluva (1505–1570), and Aravidu (1570–1646) dynasties.',
        difficulty: 'foundation',
      },
      {
        stem: 'The famous Telugu work on statecraft and devotion "Amuktamalyada" was authored by:',
        options: ['Allasani Peddana', 'Krishnadevaraya', 'Tenali Ramakrishna', 'Harihara II'],
        correctOptionIndex: 1,
        explanation: 'Krishnadevaraya of the Tuluva dynasty composed Amuktamalyada in Telugu, celebrating the Alvar saint Andal alongside reflections on kingship.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Persian envoy visited Vijayanagara during the reign of Devaraya II and praised the fortifications and prosperity of the city?',
        options: ['Nicolo de Conti', 'Abdur Razzaq', 'Domingo Paes', 'Athanasius Nikitin'],
        correctOptionIndex: 1,
        explanation: 'Abdur Razzaq, ambassador of the Timurid ruler Shah Rukh, visited Vijayanagara in 1443 CE during Devaraya II\'s reign.',
        difficulty: 'standard',
      },
      {
        stem: 'In the Bahmani Sultanate, who reorganized the empire into eight "tarafs" and built a celebrated Madrasa at Bidar?',
        options: ['Hasan Gangu', 'Firoz Shah Bahmani', 'Mahmud Gawan', 'Ahmad Shah Wali'],
        correctOptionIndex: 2,
        explanation: 'Mahmud Gawan, the Persian-born Wazir under Muhammad Shah III, introduced administrative, military, and fiscal reforms and founded the Bidar Madrasa.',
        difficulty: 'foundation',
      },
      {
        stem: 'The decisive Battle of Talikota (Rakshasi-Tangadi, 1565 CE) resulted in:',
        options: [
          'Annexation of Bijapur by Vijayanagara',
          'Defeat of Vijayanagara forces under Rama Raya by a coalition of Deccan Sultanates',
          'Foundation of the Bahmani Kingdom',
          'Capture of Goa by the Marathas',
        ],
        correctOptionIndex: 1,
        explanation: 'In January 1565, the combined armies of Bijapur, Ahmadnagar, Golconda, and Bidar defeated Rama Raya at Rakshasi-Tangadi (Talikota).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which South Indian philosopher-saint propounded "Vishishtadvaita" (Qualified Non-Dualism)?',
        options: ['Adi Shankaracharya', 'Ramanujacharya', 'Madhvacharya', 'Vallabhacharya'],
        correctOptionIndex: 1,
        explanation: 'Ramanujacharya (11th–12th century) articulated Vishishtadvaita, contrasting with Shankara\'s Advaita and Madhva\'s Dvaita.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pair correctly matches the Tamil devotional tradition with its sacred anthology?',
        options: [
          'Alvars : Tevaram',
          'Nayanars : Nalayira Divya Prabandham',
          'Alvars : Nalayira Divya Prabandham',
          'Lingayats : Bijak',
        ],
        correctOptionIndex: 2,
        explanation: 'The twelve Vaishnava Alvars composed hymns compiled as the Nalayira Divya Prabandham, while Nayanar Shaiva hymns form the Tevaram.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Bhakti saint founded the "Ekasarana Dharma" (neo-Vaishnava movement) and pioneered Sattriya culture in Assam?',
        options: ['Chaitanya Mahaprabhu', 'Srimanta Shankaradeva', 'Namdev', 'Tukaram'],
        correctOptionIndex: 1,
        explanation: 'Srimanta Shankaradeva (15th–16th century) propagated Ekasarana Nama Dharma in Assam through Namghars and Bhaona/Sattriya arts.',
        difficulty: 'standard',
      },
      {
        stem: 'Unlike the Chishti Sufis, which Sufi silsilah in medieval India readily accepted state grants, offices, and royal wealth for institutional charity?',
        options: ['Suhrawardi', 'Qalandariya', 'Rishi order of Kashmir', 'Shattari'],
        correctOptionIndex: 0,
        explanation: 'The Suhrawardi order, notably under Bahauddin Zakariya at Multan, did not shun wealth or state patronage unlike Chishti saints.',
        difficulty: 'standard',
      },
      {
        stem: 'Who among the following Chishti saints was popularly called "Mahbub-i-Ilahi" (Beloved of God) and had his Khanqah in Delhi?',
        options: ['Baba Farid', 'Nizamuddin Auliya', 'Muinuddin Chishti', 'Salim Chishti'],
        correctOptionIndex: 1,
        explanation: 'Shaikh Nizamuddin Auliya (d. 1325 CE), spiritual preceptor of Amir Khusrau, was revered as Mahbub-i-Ilahi.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Sufi lineage, popularized in India by Shaikh Ahmad Sirhindi, was critical of Akbar\'s eclectic religious policies and rejected "sama" (musical gatherings)?',
        options: ['Chishti', 'Naqshbandi', 'Firdausi', 'Qadiri'],
        correctOptionIndex: 1,
        explanation: 'The Naqshbandi silsilah stressed adherence to orthodox Sharia, silent zikr, and reform of syncretic court practices.',
        difficulty: 'standard',
      },
      {
        stem: 'What was the core function of "Amara-Nayakas" in the Vijayanagara Empire?',
        options: [
          'Temple sculptors appointed directly by the guilds',
          'Military commanders granted revenue-bearing territories in return for maintaining troops and paying tribute',
          'Portuguese artillery advisors stationed in Hampi',
          'Village accountants maintaining crop registries only',
        ],
        correctOptionIndex: 1,
        explanation: 'Amara-Nayakas held amaram lands to raise revenue, maintain stipulated military contingents for the king, and support irrigation and temples.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which historic Sikh shrine in Uttarakhand\'s Udham Singh Nagar district commemorates Guru Nanak Dev\'s Udasi visit?',
        options: ['Hemkund Sahib', 'Nanakmatta Sahib', 'Paonta Sahib', 'Gobindghat'],
        correctOptionIndex: 1,
        explanation: 'Gurudwara Sri Nanakmatta Sahib in Udham Singh Nagar (historically associated with Nath yogis as Gorakhmata) marks Guru Nanak\'s visit.',
        difficulty: 'standard',
      },
      {
        stem: 'Why are Kabir, Guru Nanak, and Ravidas classified under the "Nirguna" stream of Bhakti?',
        options: [
          'They worshipped Vishnu exclusively through idol consecration',
          'They emphasized devotion to a formless, attribute-less Supreme Being and critiqued ritualism and caste barriers',
          'They wrote solely in classical Sanskrit prose',
          'They supported hereditary temple priesthoods',
        ],
        correctOptionIndex: 1,
        explanation: 'Nirguna Bhakti conceives the Divine without anthropomorphic form (nirguna) and stresses inner purity, equality, and direct devotion.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which 17th-century spiritual figure established a Darbar (Dera) in the Doon valley, giving Dehradun its historical name?',
        options: ['Guru Gobind Singh', 'Guru Ram Rai', 'Swami Dayananda', 'Baba Farid'],
        correctOptionIndex: 1,
        explanation: 'Guru Ram Rai (elder son of Guru Har Rai) settled in the Doon valley in the late 17th century and set up his Dera (camp), whence "Dehradun".',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Mughal Consolidation (Babur to Aurangzeb) & Sur Interregnum',
    materialTitle: 'Mughal Consolidation (Babur to Aurangzeb) & Sur Interregnum — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Mughal Consolidation & Sur Interregnum',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Mughal Consolidation (Babur to Aurangzeb) & Sur Interregnum

## 1. Babur and Humayun (1526–1540; 1555–1556)
- **Babur (1526–1530):** Descendant of Timur (paternal) and Genghis Khan (maternal). Defeated Ibrahim Lodi at the **First Battle of Panipat (1526)** using **Tulughma** flanking tactics and *araba* (cart-laagered artillery under Ustad Ali & Mustafa). Subsequent victories: **Khanwa (1527)** vs Rana Sanga, **Chanderi (1528)** vs Medini Rai, **Ghaghra (1529)** vs Afghans. Authored ***Tuzuk-i-Baburi (Baburnama)*** in **Chagatai Turkish**.
- **Humayun (1530–1540, 1555–1556):** Divided territories among brothers; defeated by **Sher Khan (Sher Shah Suri)** at **Chausa (1539)** and **Kannauj/Bilgram (1540)**. Regained Delhi in 1555 after defeating Sikandar Sur at Sirhind.

## 2. The Sur Interregnum: Sher Shah Suri (1540–1545)
- Administrative reforms of **Sher Shah** laid the blueprint later refined by Akbar:
  - **Currency:** Standardized pure silver **Rupiya** (178 grains) and copper **Dam**, ending debased billon coinage.
  - **Revenue:** Surveyed land using *jarib* (hemp rope), categorized soil fertility, fixed share (**Ray** schedule), and issued **Patta** (title deed) and **Qabuliyat** (deed of agreement).
  - **Roads & Trade:** Rebuilt the **Sadak-i-Azam** (Grand Trunk Road from Sonargaon to Indus), constructed *Sarais* (rest houses serving also as dak-chowkis/postal relays), and abolished internal transit duties except at frontiers and sale points.
  - **Law & Justice:** Enforced strict local accountability (*Muqaddams* held responsible for thefts/murders in their villages).

## 3. Akbar: Imperial Consolidation & Religious Policy (1556–1605)
- **Early Phase:** Victory over Hemu at **Second Battle of Panipat (1556)** under Bairam Khan's regency. Ended harem/petty-faction politics by 1562–64.
- **Rajput Alliance:** Matrimonial alliances (Amber, 1562), induction of Rajput chiefs as senior Mansabdars, and abolition of **Pilgrimage Tax (1563)** and **Jizya (1564)**. Mewar under Maharana Pratap resisted (Battle of **Haldighati, 1576**).
- **Religious Evolution:** Built **Ibadat Khana** (1575) at Fatehpur Sikri (opened to Hindus, Jains, Parsis, Christians in 1578); issued **Mahzar Nama (1579)**; proclaimed **Sulh-i-Kul** ("universal peace") and **Tauhid-i-Ilahi / Din-i-Ilahi** (1582, an ethical spiritual fellowship rather than a formal state religion).
- **Conquests:** Gujarat (1572–73, *Buland Darwaza* built to commemorate), Bengal (1576), Kabul, Kashmir (1586), Khandesh, and Berar/Ahmadnagar segments.

## 4. Jahangir, Shah Jahan & Aurangzeb (1605–1707)
- **Jahangir (1605–1627):** Executed Guru Arjan Dev (1606); annexed Kangra (1620); lost Qandahar (1622); peak of **Mughal miniature painting** (Ustad Mansur, Abul Hasan) and *Pietra Dura* beginnings; married **Nur Jahan** (who exercised immense political influence in the 1611–22 *junta* phase).
- **Shah Jahan (1628–1658):** Zenith of Mughal marble architecture (**Taj Mahal**, **Red Fort & Jama Masjid Delhi**, **Moti Masjid Agra**); annexation of Ahmadnagar (1636); expensive Balkh–Badakhshan and Qandahar failures; war of succession (1657–58) between **Dara Shikoh** and **Aurangzeb** (Battle of Samugarh, 1658).
- **Aurangzeb (1658–1707):** Re-imposed **Jizya (1679)**, expanded Mughal borders to their widest territorial extent by annexing **Bijapur (1686)** and **Golconda (1687)**, executed **Guru Tegh Bahadur (1675)**, faced sustained Maratha resistance (Shivaji, Sambhaji, Rajaram, Tarabai), Jat/Satnami/Rajput revolts, and prolonged Deccan campaigns that strained imperial finances ("Deccan ulcer").

## 5. Uttarakhand Interface with the Mughal Empire
- **Garhwal (Panwar Dynasty):** **Mahipati Shah** and famously **Rani Karnavati** (regent for Prithvipati Shah) repelled **Shah Jahan's** general Najabat Khan around **1635–1640 CE**, earning her the moniker **"Nak-Kati Rani"** in Garhwali historical tradition for mutilating captured invaders' noses. Later, **Sulaiman Shikoh** (son of Dara Shikoh) sought asylum in Srinagar (Garhwal) in 1658 under Prithvipati Shah, before Prithvipati's son Medini Shah surrendered him to Aurangzeb.
- **Kumaon (Chand Dynasty):** **Rudra Chand** accepted nominal Mughal suzerainty under Akbar (visiting Lahore in 1587–88 and receiving the *Chaurasi Mal* / Terai grant), while **Baz Bahadur Chand** maintained cordial gifts and tributary diplomacy with Shah Jahan and Aurangzeb to secure Terai revenues.

## 6. Key Revision Takeaways
- **Tulughma** and field artillery won **Panipat I (1526)**; **Baburnama** is in Chagatai Turkish.
- **Sher Shah Suri** standardized the silver **Rupiya**, **Patta–Qabuliyat**, and **Sadak-i-Azam**.
- **Rani Karnavati** of Garhwal defended Doon/Garhwal against Shah Jahan's forces; **Sulaiman Shikoh** took refuge at Srinagar (Garhwal) in 1658.`,
    mcqs: [
      {
        stem: 'Which combination of battlefield tactics did Babur employ effectively at the First Battle of Panipat (1526)?',
        options: [
          'Guerrilla mountain ambush and naval blockade',
          'Tulughma flanking manoeuvres combined with Ottoman-style cart-laagered artillery (araba)',
          'War elephant phalanx charges without firearms',
          'Scorched-earth retreat into Malwa',
        ],
        correctOptionIndex: 1,
        explanation: 'Babur\'s Tulughma enveloping flanks and chained-cart artillery barrier (araba) shattered Ibrahim Lodi\'s numerically larger army at Panipat.',
        difficulty: 'foundation',
      },
      {
        stem: 'In which language did Babur compose his autobiography, the "Tuzuk-i-Baburi" (Baburnama)?',
        options: ['Classical Persian', 'Chagatai Turkish', 'Arabic', 'Hindavi'],
        correctOptionIndex: 1,
        explanation: 'Babur wrote his memoirs in his native Chagatai Turkish; Abdur Rahim Khan-i-Khanan later translated it into Persian under Akbar.',
        difficulty: 'foundation',
      },
      {
        stem: 'Between which two battles was Humayun decisively defeated by Sher Khan (Sher Shah Suri), forcing him into exile?',
        options: [
          'Panipat (1526) and Khanwa (1527)',
          'Chausa (1539) and Kannauj/Bilgram (1540)',
          'Haldighati (1576) and Sirhind (1555)',
          'Dharmat (1658) and Samugarh (1658)',
        ],
        correctOptionIndex: 1,
        explanation: 'Sher Khan defeated Humayun at Chausa (1539) and again at Kannauj/Bilgram (1540), establishing the Sur dynasty.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which currency reform is credited to Sher Shah Suri and served as the benchmark for later Mughal and British Indian rupee weight standards?',
        options: [
          'Introduction of a pure silver Rupiya (178 grains) and copper Dam',
          'Issuance of paper promissory notes',
          'Replacement of silver with token leather coins',
          'Adoption of Venetian gold ducats exclusively',
        ],
        correctOptionIndex: 0,
        explanation: 'Sher Shah eliminated mixed-metal billon coins and issued a standardized pure silver Rupiya and copper Dam.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under Sher Shah Suri\'s agrarian system, what were "Patta" and "Qabuliyat"?',
        options: [
          'Two grades of cavalry horses',
          'Written title-deed stating peasant tax obligation and peasant\'s signed acceptance deed',
          'Rest houses along the Grand Trunk Road',
          'Two provincial military commanders',
        ],
        correctOptionIndex: 1,
        explanation: 'The state issued a Patta specifying area, crop rates, and dues, and the cultivator executed a Qabuliyat accepting the assessment.',
        difficulty: 'standard',
      },
      {
        stem: 'Arrange Akbar\'s key religious and political milestones in chronological order: 1. Ibadat Khana opened 2. Abolition of Jizya 3. Mahzar declaration 4. Tauhid-i-Ilahi.',
        options: [
          '2 - 1 - 3 - 4',
          '1 - 2 - 3 - 4',
          '2 - 3 - 1 - 4',
          '3 - 2 - 1 - 4',
        ],
        correctOptionIndex: 0,
        explanation: 'Akbar abolished Jizya in 1564, built Ibadat Khana in 1575, issued the Mahzar in 1579, and initiated Tauhid-i-Ilahi in 1582.',
        difficulty: 'standard',
      },
      {
        stem: 'What was the core principle of Akbar\'s state policy known as "Sulh-i-Kul"?',
        options: [
          'Mandatory conversion of nobles to one sect',
          'Universal peace and tolerance ensuring impartial justice across faiths',
          'Hereditary monopoly of Central Asian Turanis in all offices',
          'Isolation from European maritime trade',
        ],
        correctOptionIndex: 1,
        explanation: 'Formulated with Abul Fazl, Sulh-i-Kul held that the sovereign must uphold harmony and equal justice among all subjects regardless of creed.',
        difficulty: 'foundation',
      },
      {
        stem: 'During Jahangir\'s reign, which Mughal court painter excelled in naturalistic studies of flora and fauna (including the Siberian crane and turkey cock)?',
        options: ['Daswanth', 'Ustad Mansur', 'Mir Sayyid Ali', 'Khwaja Abdus Samad'],
        correctOptionIndex: 1,
        explanation: 'Ustad Mansur, honoured as Nadir-ul-Asr by Jahangir, painted exquisite botanical and zoological miniatures.',
        difficulty: 'standard',
      },
      {
        stem: 'Which two Deccan Sultanates were finally annexed into the Mughal Empire by Aurangzeb in 1686 and 1687 respectively?',
        options: [
          'Ahmadnagar and Berar',
          'Bijapur and Golconda',
          'Bidar and Khandesh',
          'Madurai and Tanjore',
        ],
        correctOptionIndex: 1,
        explanation: 'Aurangzeb personally supervised the sieges that ended Adil Shahi rule in Bijapur (1686) and Qutb Shahi rule in Golconda (1687).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Garhwal regent is remembered in regional chronicles as "Nak-Kati Rani" for defeating a Mughal expedition sent under Shah Jahan?',
        options: ['Rani Guleri', 'Rani Karnavati', 'Rani Tilu Rauteli', 'Rani Jiya Rani'],
        correctOptionIndex: 1,
        explanation: 'Rani Karnavati, mother/regent of Prithvipati Shah, repelled Najabat Khan\'s invasion of the Doon–Garhwal frontier (c. 1635–40 CE).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Mughal prince took political refuge in Srinagar (Garhwal) under Raja Prithvipati Shah during the 1657–58 War of Succession?',
        options: ['Murad Bakhsh', 'Shah Shuja', 'Sulaiman Shikoh', 'Prince Akbar'],
        correctOptionIndex: 2,
        explanation: 'Sulaiman Shikoh, eldest son of Dara Shikoh, fled to Garhwal in 1658; he was later handed over to Aurangzeb\'s agents by Prithvipati\'s son Medini Shah.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Kumaon Chand ruler met Emperor Akbar at Lahore (c. 1587–88) and secured imperial recognition over the Chaurasi Mal (Terai) tract?',
        options: ['Som Chand', 'Rudra Chand', 'Lakshmi Chand', 'Kalyan Chand IV'],
        correctOptionIndex: 1,
        explanation: 'Rudra Chand acknowledged Akbar\'s suzerainty, visited Lahore, and obtained confirmation of the Terai-Bhabar (Chaurasi Mal) revenues.',
        difficulty: 'standard',
      },
      {
        stem: 'Why was Sher Shah Suri\'s network of "Sarais" described by historians as the "arteries of the empire"?',
        options: [
          'They served purely as royal hunting lodges',
          'They functioned simultaneously as safe merchant inns, market nodes, and dak-chowki postal relay stations',
          'They housed exclusively artillery foundries',
          'They replaced all agricultural villages in Bengal',
        ],
        correctOptionIndex: 1,
        explanation: 'Positioned roughly every two kos along major highways, Sarais provided accommodation for travellers of all faiths, boosted rural trade, and relayed state intelligence.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which decisive 1658 battle cemented Aurangzeb\'s victory over Dara Shikoh for the Mughal throne?',
        options: ['Battle of Haldighati', 'Battle of Samugarh', 'Battle of Karnal', 'Battle of Tukaroi'],
        correctOptionIndex: 1,
        explanation: 'Aurangzeb and Murad Bakhsh defeated Dara Shikoh at Samugarh (May 1658), leading directly to Shah Jahan\'s confinement in Agra Fort.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Mughal monument at Fatehpur Sikri was erected by Akbar to commemorate his conquest of Gujarat (1572–73)?',
        options: ['Panch Mahal', 'Buland Darwaza', 'Tomb of Humayun', 'Diwan-i-Khas of Delhi'],
        correctOptionIndex: 1,
        explanation: 'The monumental gateway Buland Darwaza at Fatehpur Sikri Jama Masjid was built to commemorate Akbar\'s Gujarat campaign victory.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Mughal Administration, Mansabdari & Agrarian System',
    materialTitle: 'Mughal Administration, Mansabdari & Agrarian System — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Mughal Mansabdari & Agrarian Structure',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Mughal Administration, Mansabdari & Agrarian System

## 1. Central & Provincial Administration
- **Emperor as Apex:** Assisted by four core ministries:
  - **Wazir / Diwan-i-Kul:** Head of revenue and finance (e.g., Raja Todar Mal, Muzzaffar Khan).
  - **Mir Bakshi:** Head of military department, intelligence (*waqia-navis* / *sawanih-nigar*), and Mansabdari appointments/branding (*dagh*).
  - **Mir Saman (Khan-i-Saman):** Imperial household, *karkhanas* (royal workshops), and supply stores.
  - **Sadr-us-Sudur & Qazi-ul-Quzat:** Ecclesiastical grants (*madad-i-maash* / *suyurghal*) and judicial administration.
- **Provincial Hierarchy (introduced by Akbar in 1580, initially 12 Subas):**
  - **Suba (Province):** **Subedar** (executive/military head) balanced by an independent **Diwan** (revenue head)—institutional checks and balances.
  - **Sarkar (District):** **Faujdar** (law & order) and **Amalguzar** (revenue assessment & collection).
  - **Pargana (Sub-district):** **Shiqdar** (executive), **Amil** (revenue), **Qanungo** (hereditary land records custodian).
  - **Village (*Mauza*):** **Muqaddam** (headman) and **Patwari** (accountant).

## 2. The Mansabdari System (Zat & Sawar)
Introduced formally by Akbar in **1571–1595** on decimal Mongol–Timurid precedents, **Mansab** literally means rank/position:
- **Dual Rank System (institutionalized c. 1595–96):**
  - **Zat:** Personal status, precedence in court, and personal salary of the Mansabdar.
  - **Sawar:** Number of cavalry troopers the Mansabdar was required to maintain.
- **Three Classes of Mansabdars:** Class I (*Sawar = Zat*), Class II (*Sawar >= ½ Zat*), Class III (*Sawar < ½ Zat*).
- **Later Modifications:**
  - **Jahangir:** Introduced **Du-Aspa Sih-Aspa** (doubling cavalry quota without raising *Zat* salary/status, first conferred on Mahabat Khan).
  - **Shah Jahan:** Introduced the **Month-Scale** (*Mahwar*—e.g., 10-month, 8-month, 6-month jagirs) to align paper *jama* (assessed revenue) with lower actual *hasil* (realized revenue), reducing mandatory trooper quotas proportionately.
- **Payment Modes:** **Naqdi** (cash from treasury) or **Jagirdar** (assigned a **Jagir**—distinct from *Khalisa* crown lands). Frequent transfers of *Jagirdars* prevented feudal territorial entrenchment, though by late Aurangzeb's reign the **Be-Jagiri crisis** (too many Mansabdars chasing too few productive jagirs) destabilized the empire.

## 3. Agrarian Revenue Systems: Dahsala, Zabt & Zamindars
- **Raja Todar Mal's Zabti / Dahsala System (1580):**
  - Standardized land measurement using **Bigha-i-Ilahi** and **Gaz-i-Ilahi** (bamboo *jarib* with iron rings replacing shrinkable rope).
  - Classified land into four categories based on continuity of cultivation: **Polaj** (annually cultivated), **Parauti** (left fallow briefly to recover), **Chachar** (fallow 3–4 years), and **Banjar** (uncultivated 5+ years).
  - **Dahsala (Ten-Year Average):** Averaged crop yields and market prices of the preceding 10 years (1571–80) to establish fixed cash revenue schedules (**Dastur-ul-Amal**) per bigha.
- **Alternative Assessment Modes:** **Batai / Ghalla-Bakhshi** (crop sharing), **Kankut / Nasaq** (rough/prior-record estimation, common in Bengal).
- **Rural Stratification:** **Khud-kasht** (resident cultivators owning land in their village), **Pahi-kasht** (migratory/non-resident tenants), **Muzarian** (tenants), and **Zamindars** (hereditary right-holders collecting revenue and retaining *malikana* / *nankar*, distinct from imperial *Jagirdars*).

## 4. Key Revision Takeaways
- **Mir Bakshi** supervised Mansabdar muster, *dagh*, and intelligence, NOT the army chief in battle (emperor/generals commanded campaigns).
- **Diwan** at the Suba level reported directly to the imperial Diwan, checking the **Subedar**.
- **Polaj** = continuously cultivated land; **Dahsala** = 10-year averaged Zabti cash rates under Todar Mal.
- **Khalisa** = crown land yielding direct treasury cash; **Jagir** = revenue assignment for Mansabdars; **Madad-i-Maash** = charitable/scholarly revenue-free grant.`,
    mcqs: [
      {
        stem: 'In the Mughal Mansabdari system finalized under Akbar, what did the "Zat" and "Sawar" ranks represent respectively?',
        options: [
          'Zat was cavalry quota; Sawar was infantry quota',
          'Zat denoted personal status and pay; Sawar denoted the cavalry contingent required to be maintained',
          'Zat was land revenue target; Sawar was judicial rank',
          'Zat was naval rank; Sawar was artillery command',
        ],
        correctOptionIndex: 1,
        explanation: 'Zat fixed a noble\'s personal salary and court hierarchy, while Sawar determined the number of horsemen he had to maintain.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Mughal emperor introduced the "Du-Aspa Sih-Aspa" modification within the Mansabdari system?',
        options: ['Akbar', 'Jahangir', 'Shah Jahan', 'Aurangzeb'],
        correctOptionIndex: 1,
        explanation: 'Jahangir introduced Du-Aspa Sih-Aspa so trusted nobles could maintain double the cavalry quota without increasing their Zat rank.',
        difficulty: 'foundation',
      },
      {
        stem: 'What was the purpose of the "Month-Scale" (e.g., 8-month or 6-month jagirs) introduced during Shah Jahan\'s reign?',
        options: [
          'To pay soldiers only during monsoon months',
          'To adjust trooper obligations proportionally when realized jagir revenue (hasil) fell short of assessed revenue (jama)',
          'To rotate provincial Diwans every six months',
          'To replace Zabti with crop sharing across Gujarat',
        ],
        correctOptionIndex: 1,
        explanation: 'Because official jama figures were inflated relative to actual hasil collections, the month-scale scaled down military obligations to match real income.',
        difficulty: 'advanced',
      },
      {
        stem: 'Under Akbar\'s provincial administration (1580), why was an independent "Diwan" posted alongside the "Subedar" in every Suba?',
        options: [
          'To command the provincial artillery',
          'To check the Subedar\'s authority by placing provincial finances under direct central treasury supervision',
          'To manage foreign embassies in each province',
          'To oversee purely religious endowments',
        ],
        correctOptionIndex: 1,
        explanation: 'Separating executive-military power (Subedar) from fiscal authority (Diwan) prevented provincial governors from building autonomous financial bases.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Mughal central minister headed the department responsible for royal workshops (karkhanas) and imperial household procurement?',
        options: ['Mir Bakshi', 'Mir Saman (Khan-i-Saman)', 'Sadr-us-Sudur', 'Qazi-ul-Quzat'],
        correctOptionIndex: 1,
        explanation: 'Mir Saman oversaw imperial karkhanas, palace stores, and royal household administration.',
        difficulty: 'foundation',
      },
      {
        stem: 'In Raja Todar Mal\'s Zabti classification of agricultural land, which category referred to land cultivated continuously every year without lying fallow?',
        options: ['Parauti', 'Chachar', 'Polaj', 'Banjar'],
        correctOptionIndex: 2,
        explanation: 'Polaj was top-grade land under annual cultivation; Parauti lay fallow for 1–2 years, Chachar 3–4 years, and Banjar 5 years or more.',
        difficulty: 'foundation',
      },
      {
        stem: 'What improvement did Akbar introduce in land measurement under the Zabti system compared to Sher Shah Suri\'s hemp rope?',
        options: [
          'Bamboo rods linked with iron rings (jarib) measured in Gaz-i-Ilahi',
          'Aerial trigonometrical triangulation',
          'Visual eye-estimation without instruments',
          'Chain measurement purely in coastal ports',
        ],
        correctOptionIndex: 0,
        explanation: 'Bamboo rods joined by iron rings prevented seasonal stretching or shrinking caused by moisture in hemp ropes.',
        difficulty: 'standard',
      },
      {
        stem: 'In Mughal revenue terminology, how did "Khalisa" land differ from "Jagir" land?',
        options: [
          'Khalisa revenue went directly to the imperial treasury, while Jagir revenue was assigned to Mansabdars in lieu of salary',
          'Khalisa belonged to village headmen, while Jagir was exclusively barren forest',
          'Khalisa was hereditary property of Rajputs only',
          'Jagir was permanent and non-transferable under Akbar',
        ],
        correctOptionIndex: 0,
        explanation: 'Khalisa-i-Sharifa constituted crown lands whose revenue funded the central treasury directly; Jagirs paid Mansabdars.',
        difficulty: 'foundation',
      },
      {
        stem: 'What did the term "Madad-i-Maash" (or Suyurghal) signify in Mughal administration?',
        options: [
          'An emergency war levy on European merchants',
          'Revenue-free land grants awarded to scholars, religious figures, and charitable institutions',
          'Cash bonuses paid to cavalry commanders after victory',
          'Irrigation loans repaid over five years',
        ],
        correctOptionIndex: 1,
        explanation: 'Supervised by Sadr-us-Sudur, Madad-i-Maash grants provided subsistence income from state revenue to learned persons and shrines.',
        difficulty: 'standard',
      },
      {
        stem: 'Who were "Khud-kasht" peasants in Mughal agrarian society?',
        options: [
          'Itinerant cultivators working temporarily in neighbouring villages',
          'Resident peasants cultivating their own hereditary holdings within their home village',
          'Slave labourers employed only in karkhanas',
          'Central intelligence reporters',
        ],
        correctOptionIndex: 1,
        explanation: 'Khud-kasht were permanent village residents holding customary occupancy rights over land they tilled, distinct from migrant Pahi-kasht tenants.',
        difficulty: 'standard',
      },
      {
        stem: 'At the Sarkar (district) level of Mughal administration, what was the primary duty of the "Faujdar"?',
        options: [
          'Compiling ten-year crop price averages',
          'Maintaining law and order, suppressing local rebellions, and assisting revenue collection by force if needed',
          'Translating Sanskrit texts at the imperial court',
          'Auditing maritime customs at Surat',
        ],
        correctOptionIndex: 1,
        explanation: 'The Faujdar was the executive military police authority of a Sarkar, while the Amalguzar handled revenue assessment.',
        difficulty: 'foundation',
      },
      {
        stem: 'How did the "Dahsala" (1580) system calculate revenue demand?',
        options: [
          'By imposing a flat 10% tax on all urban shops',
          'By averaging crop yields and prices of the preceding ten years (1571–80) to fix cash rates per bigha',
          'By collecting revenue once every ten years',
          'By charging one-tenth of livestock herds annually',
        ],
        correctOptionIndex: 1,
        explanation: 'Todar Mal\'s Dahsala averaged ten years of produce and local prices to produce predictable cash dasturs (rates) per bigha.',
        difficulty: 'foundation',
      },
      {
        stem: 'What was the "Be-Jagiri" crisis that intensified during the later years of Aurangzeb\'s reign?',
        options: [
          'Refusal of peasants to cultivate Polaj land',
          'Acute shortage of productive jagirs relative to the rapidly inflated number of newly inducted Mansabdars',
          'Complete abolition of silver coinage',
          'Collapse of trade along the Grand Trunk Road',
        ],
        correctOptionIndex: 1,
        explanation: 'Heavy induction of Deccani nobles outpaced fertile jagir availability ("anaro ek bimar sad" — one pomegranate, a hundred sick), eroding state loyalty.',
        difficulty: 'advanced',
      },
      {
        stem: 'At the Pargana level, which hereditary record-keeper preserved land schedules, local prices, and historical yield data for revenue officials?',
        options: ['Qanungo', 'Subedar', 'Mir Bakshi', 'Kotwal'],
        correctOptionIndex: 0,
        explanation: 'The Qanungo maintained Pargana-level cadastral and customary revenue records, complementing the village Patwari.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Mughal official was responsible for transmitting confidential provincial newsletters (waqia) to the imperial court?',
        options: ['Waqia-navis under Mir Bakshi\'s network', 'Muqaddam', 'Amalguzar', 'Mir Saman'],
        correctOptionIndex: 0,
        explanation: 'Waqia-navis (public news writers) and Khufia-navis (secret reporters) operated under the Mir Bakshi\'s intelligence framework.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Marathas, Sikhs & Autonomous 18th-Century States',
    materialTitle: 'Marathas, Sikhs & Autonomous 18th-Century States — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Marathas, Sikhs & 18th-Century Regional Powers',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Marathas, Sikhs & Autonomous 18th-Century States

## 1. Rise of the Marathas & Shivaji's Swarajya
- **Chhatrapati Shivaji Maharaj (1627/1630–1680):** Built an agile hill-fort and guerrilla (*Ganimi Kava*) state in the Sahyadri ranges, challenging Bijapur (slaying Afzal Khan, 1659) and Aurangzeb (escapes from Agra, 1666; coronation at **Raigad, 1674** as *Chhatrapati*).
- **Ashtapradhan (Council of Eight Ministers):**
  - **Peshwa (Mukhya Pradhan):** General administration and seal.
  - **Amatya / Majumdar:** Finance and accounts.
  - **Waqia-Navis / Mantri:** Intelligence and royal household.
  - **Sachiv / Shuru-Navis:** Royal correspondence.
  - **Sumant / Dabir:** Foreign affairs.
  - **Senapati / Sar-i-Naubat:** Military commander.
  - **Panditrao:** Religious grants and charity.
  - **Nyayadhish:** Chief Justice.
- **Revenue & Taxes:** Land revenue assessed via *Kathi* measuring rod (Ankaji Datto); levied **Chauth (25% of revenue)** on neighbouring/Mughal territories as protection against Maratha raids, and **Sardeshmukhi (additional 10%)** claiming hereditary *Sardeshmukh* rights.
- **Peshwa Era & Confederacy (1713–1761):** **Balaji Vishwanath** made the Peshwaship hereditary; **Baji Rao I** expanded northwards ("strike at the trunk"); **Balaji Baji Rao (Nana Saheb)** led the Maratha zenith before defeat by Ahmad Shah Abdali at the **Third Battle of Panipat (14 January 1761)**. Later confederate chiefs: **Scindia (Gwalior), Holkar (Indore), Bhonsle (Nagpur), Gaekwad (Baroda)**.

## 2. Consolidation of the Sikhs
- **Ten Gurus:** From **Guru Nanak Dev** (founder) to **Guru Arjan Dev** (compiled *Adi Granth*, built Harmandir Sahib), **Guru Hargobind** (*Miri–Piri* doctrine, Akal Takht), **Guru Tegh Bahadur** (martyred 1675), and **Guru Gobind Singh** (founded the **Khalsa** on Baisakhi 1699 at Anandpur Sahib).
- **Banda Singh Bahadur (1708–1716):** Led agrarian peasant revolt in Punjab, struck Sikh coins, and temporarily dismantled Mughal *zamindari* exactions before execution in Delhi.
- **Misls & Maharaja Ranjit Singh:** Twelve **Misls** (federated warrior bands) controlled Punjab in the mid-18th century; **Ranjit Singh** (Sukerchakia Misl) unified Punjab after capturing Lahore (1799), built a modernized army (*Fauj-i-Khas* with European officers like Ventura and Allard), and signed the **Treaty of Amritsar (1809)** with the British fixing the Sutlej as boundary.

## 3. Typology of 18th-Century Regional States
| Category | Key States & Founders | Core Characteristics |
|---|---|---|
| **Successor States** | **Bengal** (Murshid Quli Khan), **Awadh** (Saadat Khan), **Hyderabad** (Nizam-ul-Mulk Asaf Jah) | Former Mughal governors who retained nominal imperial symbols while becoming *de facto* sovereigns |
| **Rebel / New States** | **Marathas**, **Sikhs**, **Jats of Bharatpur** (Churaman, Badan Singh, Suraj Mal), **Rohilkhand** | Emerged through military mobilization or agrarian resistance against Mughal authority |
| **Autonomous Kingdoms** | **Mysore** (Hyder Ali, Tipu Sultan), **Travancore** (Martanda Varma), **Rajput States** (Sawai Jai Singh of Jaipur) | Older regional polities or modernized kingdoms outside direct Mughal subas |

## 4. Relevance to Uttarakhand History
- **Rohilla Invasions (1743–45 & 1750s):** The Rohilla Afghan state of neighbouring Katehr/Najibabad (under Ali Muhammad Khan and later Najib-ud-Daula) raided Kumaon (**Kalyan Chand IV** sought aid from **Pradip Shah** of Garhwal; later defeated with Awadh mediation) and Haridwar/Doon tracts.
- **Sikh–Garhwal Interactions & Guru Gobind Singh:** Across the Yamuna–Tons border at **Paonta Sahib** (Himachal border adjoining Dehradun/Jaunsar), Guru Gobind Singh forged early ties with Garhwal/Sirmour hill rajas (*Battle of Bhangani, 1688*), while late 18th-century Sikh misl chiefs occasionally collected *rakhi* tribute in the Dun valley during Garhwal's internal weakness before the Gorkha takeover.

## 5. Key Revision Takeaways
- **Chauth = 25%**, **Sardeshmukhi = 10%**; **Ashtapradhan** were non-hereditary departmental ministers under Shivaji (unlike later Peshwas).
- **Treaty of Amritsar (1809)** recognized the **Sutlej River** as the boundary between Maharaja Ranjit Singh's state and British territories.
- **Murshid Quli Khan (Bengal), Saadat Khan (Awadh), Nizam-ul-Mulk (Hyderabad)** are classic examples of **Successor States**.`,
    mcqs: [
      {
        stem: 'In Chhatrapati Shivaji Maharaj\'s "Ashtapradhan" council of ministers, which official handled foreign affairs and diplomacy?',
        options: ['Amatya', 'Sumant (Dabir)', 'Sachiv', 'Nyayadhish'],
        correctOptionIndex: 1,
        explanation: 'The Sumant (or Dabir) acted as foreign minister managing envoys and external diplomacy.',
        difficulty: 'foundation',
      },
      {
        stem: 'What were "Chauth" and "Sardeshmukhi" in the Maratha fiscal system?',
        options: [
          'Religious pilgrimage taxes collected at Raigad',
          'Respectively one-fourth (25%) and an additional one-tenth (10%) revenue claims levied primarily on non-Swarajya / neighbouring territories',
          'Customs duties levied solely on European ships at Surat',
          'Two categories of hereditary village watchmen',
        ],
        correctOptionIndex: 1,
        explanation: 'Chauth (25% protection tribute) and Sardeshmukhi (10% hereditary overlordship claim) formed major sources of Maratha external revenue.',
        difficulty: 'foundation',
      },
      {
        stem: 'On which date and against whom did the Marathas suffer a catastrophic defeat at the Third Battle of Panipat?',
        options: [
          '14 January 1761 against Ahmad Shah Abdali',
          '23 June 1757 against Robert Clive',
          '22 October 1764 against Shuja-ud-Daula',
          '18 March 1775 against Warren Hastings',
        ],
        correctOptionIndex: 0,
        explanation: 'On 14 January 1761, Afghan ruler Ahmad Shah Abdali (allied with Shuja-ud-Daula and Rohillas) defeated Sadashivrao Bhau\'s Maratha army at Panipat.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which 18th-century regional powers are categorized by historians as Mughal "Successor States"?',
        options: [
          'Mysore, Travancore, and Marathas',
          'Bengal, Awadh, and Hyderabad',
          'Punjab, Bharatpur, and Rohilkhand',
          'Garhwal, Kumaon, and Kangra',
        ],
        correctOptionIndex: 1,
        explanation: 'Bengal (Murshid Quli Khan), Awadh (Saadat Khan), and Hyderabad (Nizam-ul-Mulk) grew out of Mughal subedaris while retaining formal ties to Delhi.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who founded the Sukerchakia Misl-led unified Sikh kingdom at Lahore in 1799 and raised the European-trained "Fauj-i-Khas"?',
        options: ['Banda Singh Bahadur', 'Jassa Singh Ahluwalia', 'Maharaja Ranjit Singh', 'Maharaja Dalip Singh'],
        correctOptionIndex: 2,
        explanation: 'Maharaja Ranjit Singh unified the trans-Sutlej misls, captured Lahore (1799), and modernized his artillery and infantry.',
        difficulty: 'foundation',
      },
      {
        stem: 'What did the Treaty of Amritsar (1809) between Maharaja Ranjit Singh and the British East India Company establish?',
        options: [
          'British annexation of Lahore',
          'Recognition of the Sutlej River as the boundary, leaving cis-Sutlej Sikh states under British protection',
          'Joint Sikh–British invasion of Nepal',
          'Cession of Kashmir to the Company',
        ],
        correctOptionIndex: 1,
        explanation: 'Negotiated by Charles Metcalfe, the 1809 treaty checked Ranjit Singh\'s expansion south of the Sutlej while giving him free hand north/west.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Sikh leader initiated the Khalsa Panth on Baisakhi 1699 at Anandpur Sahib?',
        options: ['Guru Tegh Bahadur', 'Guru Gobind Singh', 'Guru Hargobind', 'Banda Singh Bahadur'],
        correctOptionIndex: 1,
        explanation: 'Guru Gobind Singh established the Khalsa brotherhood (with the Five Ks and Panj Pyare tradition) in 1699.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the Maratha Confederacy in the late 18th century, which seat correctly matches its ruling house?',
        options: [
          'Gwalior : Holkar',
          'Indore : Scindia',
          'Nagpur : Bhonsle',
          'Baroda : Peshwa',
        ],
        correctOptionIndex: 2,
        explanation: 'The confederacy seats were Scindia (Gwalior), Holkar (Indore), Bhonsle (Nagpur), Gaekwad (Baroda), and Peshwa (Pune).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Mysore ruler introduced state trading companies, sericulture promotion, and a modernized navy while resisting British expansion until 1799?',
        options: ['Chikka Devaraja Wodeyar', 'Tipu Sultan', 'Nizam-ul-Mulk', 'Martanda Varma'],
        correctOptionIndex: 1,
        explanation: 'Tipu Sultan pursued economic modernization (state commercial depots, sericulture), rocketry, and anti-British diplomacy until his death at Seringapatam (1799).',
        difficulty: 'standard',
      },
      {
        stem: 'Which 18th-century ruler of Jaipur built astronomical observatories (Jantar Mantar) at Delhi, Jaipur, Ujjain, Varanasi, and Mathura?',
        options: ['Sawai Jai Singh II', 'Suraj Mal', 'Raja Todar Mal', 'Man Singh I'],
        correctOptionIndex: 0,
        explanation: 'Sawai Jai Singh II of Amber/Jaipur was an accomplished astronomer-statesman who built five masonry observatories across northern India.',
        difficulty: 'standard',
      },
      {
        stem: 'Who led the agrarian and military uprising of the Jats to its zenith, earning the reputation "Plato of the Jat Tribe" for consolidating Bharatpur?',
        options: ['Churaman', 'Badan Singh', 'Maharaja Suraj Mal', 'Gokula'],
        correctOptionIndex: 2,
        explanation: 'Maharaja Suraj Mal expanded Bharatpur\'s wealth, administrative stability, and forts during the mid-18th century.',
        difficulty: 'standard',
      },
      {
        stem: 'Which neighbouring 18th-century power repeatedly raided Kumaon during Kalyan Chand IV\'s reign, prompting Kumaon to seek aid from Garhwal\'s Pradip Shah?',
        options: ['Rohillas of Katehr', 'Nizams of Hyderabad', 'Nayaks of Madurai', 'Ahoms of Assam'],
        correctOptionIndex: 0,
        explanation: 'Ali Muhammad Khan\'s Rohilla forces invaded Kumaon (1743–45), forcing Kalyan Chand IV to ally with Garhwal and negotiate via Awadh.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Garhwal neighbour on the Yamuna bank served as Guru Gobind Singh\'s base when he fought the Battle of Bhangani (1688) involving hill chiefs?',
        options: ['Paonta Sahib', 'Nanakmatta', 'Baijnath', 'Almora'],
        correctOptionIndex: 0,
        explanation: 'Guru Gobind Singh composed major verses and fought the Battle of Bhangani near Paonta Sahib along the Yamuna adjoining Dehradun/Jaunsar.',
        difficulty: 'standard',
      },
      {
        stem: 'Why did the Battle of Wandiwash (1760) and Third Battle of Panipat (1761) together reshape 18th-century Indian geopolitics?',
        options: [
          'They restored full centralized Mughal rule under Shah Alam II',
          'Wandiwash ended French imperial ambitions in India while Panipat shattered Maratha prestige, easing British ascendancy',
          'They brought Mysore and the Sikhs into a single federation',
          'They forced the Portuguese to capture Delhi',
        ],
        correctOptionIndex: 1,
        explanation: 'While Britain eliminated its main European rival at Wandiwash (1760), the Maratha defeat at Panipat (1761) left a power vacuum across North India.',
        difficulty: 'advanced',
      },
      {
        stem: 'What was "Saranjam" in the Maratha administrative lexicon after Shivaji?',
        options: [
          'A standardized copper coin minted at Pune',
          'A hereditary land/revenue assignment granted to military sardars for maintaining troops',
          'A water-tax levied in Konkan ports',
          'An intelligence dispatch system',
        ],
        correctOptionIndex: 1,
        explanation: 'Unlike Shivaji\'s cash-salary preference, later Maratha rulers relied on Saranjam grants (resembling jagirs), feeding confederate decentralization.',
        difficulty: 'advanced',
      },
    ],
  },
];
