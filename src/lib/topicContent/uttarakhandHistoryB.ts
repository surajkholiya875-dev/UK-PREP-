import { TopicContentPackage } from './types';

export const UTTARAKHAND_HISTORY_PART_B: TopicContentPackage[] = [
  {
    topicTitle: 'British Kumaon Administration (Gardner, Traill, Batten & Ramsay)',
    materialTitle: 'British Kumaon Administration (1815–1947) — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: British Kumaon & Garhwal Administration',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# British Kumaon Administration (Gardner, Traill, Batten & Ramsay)

## 1. Non-Regulation Province Status
After 1815, **Kumaon Division** (covering both Kumaon and British Garhwal; Dehradun placed initially in Saharanpur/Meerut division) was governed as a **Non-Regulation Province** (later Scheduled District under Act XIV of 1874), giving Commissioners wide discretionary judicial and revenue powers suited to mountain customs.

## 2. Commissioners of Kumaon — Milestones
| Commissioner | Tenure Highlights | Major Reforms |
|---|---|---|
| **1. Edward Gardner (1815–1816)** | First Commissioner of Kumaon (May 1815) | Initiated initial post-Gorkha revenue settlement; abolished Gorkha slave auctions |
| **2. George William Traill (1816–1835)** | Longest early architect; laid foundation of British hill governance | **Assi-Sala (80-sal) Land Settlement (1823)** (Samvat 1880); **9 Patwari circles (1819)**; **Halbandi** measurement; **1822 Excise/Abkari**; abolished *Gola/Karahi* ordeals; built suspension bridges & *Thana* stations |
| **3. G.T. Lushington (1838–1848)** | Transitional reform era | Established **Nainital Municipality (1842/1850)** after P. Barron's 1841 Nainital lake visit; promoted **Gomti/Ganga** links |
| **4. John Hallett Batten (1848–1856)** | **"Golden Era"** of Kumaon revenue | Famous **20-Year Land Settlement**; reduced harsh taxes; improved roads; shifted HQ from Almora to Nainital (1850s) |
| **5. Sir Henry Ramsay (1856–1884)** | **"King of Kumaon"** (reigned 28 yrs; fluent in Kumaoni) | Steered Kumaon safely through **1857 Revolt** (though **Kalu Mahara** led revolt in Bisung/Champawat); **1863–73 Beckett Settlement** (*Vikram Samvat* scientific measurement); **1874 Revenue Police Rules** (*Patwari* police powers); Tarai–Bhabar reclamation & leper asylum (Almora); early **Forest Conservator (1858)** |

## 3. 1857 Revolt & Kalu Mahara
While Ramsay prevented widespread rebellion in Nainital–Almora, **Kalu Mahara** (of Bisung, Champawat) formed the secret **"Krantiveer"** organization with **Bishan Singh Karayat** and **Anand Singh Fartyal** in response to Wajid Ali Shah/Nana Sahib's emissaries, making Kalu Mahara Uttarakhand's **first recognized freedom fighter** of 1857; **Haldwani** also saw brief rebel clashes.

## 4. Key Revision Takeaways
- **Edward Gardner** = 1st Commissioner (1815); **G.W. Traill** = **80-sal settlement (1823)** & Patwari circles (1819); **Henry Ramsay** = **"King of Kumaon"** & **1874 Revenue Police** Formalization.
- **Kalu Mahara** (Champawat) founded **Krantiveer** during **1857**.
`,
    mcqs: [
      {
        stem: 'Who served as the FIRST British Commissioner of Kumaon after the defeat of the Gorkhas in 1815?',
        options: ['G.W. Traill', 'Edward Gardner', 'Sir Henry Ramsay', 'J.H. Batten'],
        correctOptionIndex: 1,
        explanation: 'Edward Gardner was appointed first Commissioner of Kumaon in May 1815 (assisted by Traill, who succeeded him in 1816).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Commissioner of Kumaon conducted the famous "80-sal" (Assi-Sala / Samvat 1880) land settlement in 1823 and created the first Patwari posts in 1819?',
        options: ['Edward Gardner', 'George William Traill', 'Henry Ramsay', 'G.T. Lushington'],
        correctOptionIndex: 1,
        explanation: 'G.W. Traill created 9 Patwari posts in 1819 and carried out the landmark Samvat 1880 (1823 CE) 5-year land settlement.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Commissioner of Kumaon was affectionately and famously known as the "King of Kumaon" (1856–1884)?',
        options: ['J.H. Batten', 'Sir Henry Ramsay', 'Edward Gardner', 'Percy Wyndham'],
        correctOptionIndex: 1,
        explanation: 'Sir Henry Ramsay ruled Kumaon for 28 years, spoke fluent Kumaoni, instituted the 1874 Revenue Police Rules, and earned the moniker "King of Kumaon".',
        difficulty: 'foundation',
      },
      {
        stem: 'Who is hailed as Uttarakhand\'s first major freedom fighter of the 1857 Revolt for founding the secret "Krantiveer" organization in Champawat?',
        options: ['Badridutt Pande', 'Kalu Mahara', 'Sridev Suman', 'Chandra Singh Garhwali'],
        correctOptionIndex: 1,
        explanation: 'Kalu Mahara of Bisung village (Champawat) organized Krantiveer revolutionaries in 1857 alongside Anand Singh Fartyal and Bishan Singh Karayat.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why was Kumaon Division (including British Garhwal) governed as a "Non-Regulation Province" after 1815?',
        options: [
          'General Bengal Regulations did not apply automatically; the Commissioner exercised combined flexible executive, revenue, and judicial powers tailored to mountain customs',
          'Because there were zero taxes in Kumaon',
          'Because Nepal continued ruling Almora',
          'To allow French law in Nainital',
        ],
        correctOptionIndex: 0,
        explanation: 'As a newly acquired frontier hill tract, Kumaon was exempted from rigid lowland Bengal Regulations, leaving wide discretion to local officials.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Commissioner\'s tenure (1848–1856) is often praised as the "Golden Era" of early Kumaon administration for his equitable 20-year settlement and road-building?',
        options: ['G.W. Traill', 'John Hallett Batten', 'Edward Gardner', 'R.E. Atkinson'],
        correctOptionIndex: 1,
        explanation: 'J.H. Batten conducted a fair 20-year settlement (following Bird/Batten survey) and relocated divisional headquarters toward Nainital.',
        difficulty: 'standard',
      },
      {
        stem: 'In which year did Sir Henry Ramsay formalize the distinctive Uttarakhand "Revenue Police System" empowering Patwaris with police duties in hill villages?',
        options: ['1815', '1857', '1874', '1921'],
        correctOptionIndex: 2,
        explanation: 'Building on Traill\'s 1819 Patwari circle creation, Ramsay codified the Kumaon Revenue Police Rules in 1874.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which British trader/traveller (alias "Pilgrim") published the discovery of Nainital Lake to the European world in 1841?',
        options: ['E.T. Atkinson', 'P. Barron', 'Jim Corbett', 'Sir Proby Cautley'],
        correctOptionIndex: 1,
        explanation: 'Sugar merchant P. Barron ("Pilgrim") reached Nainital in 1841, spurring rapid colonial hill-station development.',
        difficulty: 'standard',
      },
      {
        stem: 'Under which British official was the scientific "Beckett Land Settlement" (1863–1873) conducted across Kumaon and Garhwal, classifying fields into Talaon, Upraon, and Ijran?',
        options: ['Sir Henry Ramsay', 'Edward Gardner', 'G.W. Traill', 'Lord Curzon'],
        correctOptionIndex: 0,
        explanation: 'Under Commissioner Ramsay, J.O.B. Beckett carried out Uttarakhand\'s first scientific land measurement and classification settlement.',
        difficulty: 'standard',
      },
      {
        stem: 'What was "Kumaon\'s First Forest Settlement / Conservatorship" initiated in 1858 by Henry Ramsay primarily aimed at?',
        options: [
          'Regulating indiscriminate Sal timber felling in Terai–Bhabar (prior to the 1865 Imperial Forest Act)',
          'Cutting down all oak trees in Nainital',
          'Flooding Doon Valley',
          'Planting rubber trees in Chamoli',
        ],
        correctOptionIndex: 0,
        explanation: 'As Conservator from 1858, Ramsay checked rampant Bhabar contractor felling, later leading to stricter 1878/1893 colonial forest reservations that provoked hill resistance.',
        difficulty: 'advanced',
      },
      {
        stem: 'Who compiled the monumental multi-volume *Himalayan Districts of the North-Western Provinces* (Himalayan Gazetteer) in the late 19th century?',
        options: ['E.T. Atkinson', 'P. Barron', 'G.W. Traill', 'H.G. Walton'],
        correctOptionIndex: 0,
        explanation: 'Edwin T. Atkinson\'s Himalayan Gazetteer (1882–86) remains a foundational encyclopaedic work on Uttarakhand history, botany, and society.',
        difficulty: 'standard',
      },
      {
        stem: 'Why did British forest policies of 1893 (declaring unmeasured "benap" wasteland as Protected Forest) and 1911–17 spark widespread hill unrest in Uttarakhand?',
        options: [
          'They curtailed villagers\' customary rights to graze cattle, collect dry fuelwood/fodder, and clear terraces near their homes',
          'They banned all rice imports',
          'They gave every village free land',
          'They forced villagers to mine gold',
        ],
        correctOptionIndex: 0,
        explanation: 'Closing village-adjacent forests and restricting grazing/looting triggered deep resentment, forest fires, and eventually the 1921 Kumaon Forest Grievances Committee (which birthed Van Panchayats).',
        difficulty: 'standard',
      },
      {
        stem: 'Which Garhwal–Kumaon administrative district was carved out separately as "British Garhwal" headquarters at Pauri in 1839–40?',
        options: [
          'Pauri Garhwal (headquartered at Srinagar briefly, then Pauri)',
          'Tehri Garhwal',
          'Bageshwar',
          'Champawat',
        ],
        correctOptionIndex: 0,
        explanation: 'British Garhwal (initially administered from Srinagar after 1815) was constituted as a separate district with headquarters shifted to Pauri around 1840.',
        difficulty: 'standard',
      },
      {
        stem: 'Which early 19th-century Commissioner abolished Gorkha-era judicial iron/oil ordeals and banned female infanticide and slave sales?',
        options: ['G.W. Traill (with Gardner\'s initial bans)', 'Lord Wellesley', 'H.G. Walton', 'Col. Nicholls'],
        correctOptionIndex: 0,
        explanation: 'Gardner banned slave traffic immediately in 1815, and Traill ended Divya ordeals and codified civil administration.',
        difficulty: 'standard',
      },
      {
        stem: 'Which British Commissioner\'s "Naukuchiatal/Halbandi" land measurement was based on the amount of land ploughable by one yoke of oxen rather than chain surveying?',
        options: ['G.W. Traill (Halbandi / Bisi estimation)', 'Sir Henry Ramsay', 'E.T. Atkinson', 'Lord Mayo'],
        correctOptionIndex: 0,
        explanation: 'Before Beckett\'s scientific survey, Traill used traditional Bisi and Halbandi (plough-unit) assessments.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'Tehri Garhwal Princely State & Administrative Reforms',
    materialTitle: 'Tehri Garhwal Princely State (1815–1949) — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Tehri Garhwal Princely State',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Tehri Garhwal Princely State & Administrative Reforms

## 1. Creation & Dynastic Line (1815–1949)
Restored to **Sudarshan Shah** in **1815** after the Anglo-Gorkha War, Tehri Garhwal existed as a semi-sovereign princely state for **134 years** until merging into the Indian Union on **1 August 1949**.

| Ruler | Key Reforms & Milestones |
|---|---|
| **Sudarshan Shah (1815–1859)** | Founded **Tehri** capital (28 Dec 1815); patronized Mola Ram/Chaitu/Manaku; authored ***Sabhāsāra*** (7 vols in Braj); **1823** revenue settlement; suppressed Saklana/Rawain stirrings; supported British in 1857 |
| **Bhawani Shah (1859–1871)** | Gentle, pious rule; **1861 Barah-Ana Bisi** land settlement; **Devprayag Sanskrit Pathshala (1862)** |
| **Pratap Shah (1871–1886)** | Modernized Tehri: founded **Pratapnagar (1877)**, **first English school (1883)**, police department, dispensary, and **Jula-Paimash** land settlement; abolished *Khewat/Begar* abuses partially; faced **1882 Lakhand/Kunjani Dhandhak** unrest |
| **Kirti Shah (1886–1913)** | Most progressive/enlightened Tehri monarch: **Bank of Garhwal**, **Clock Tower (Ghanta Ghar)**, electricity & telegraph in Tehri, **Pratap High School**, **Kirtinagar**, Hindi Typewriter invention; met **Swami Rama Tirtha**; knighted (KCSI) |
| **Narendra Shah (1913–1946)** | Founded **Narendranagar (1921)** capital (shifted 1925); **High Court (1938)**; **State Forest Reforms**; during his reign occurred the tragic **Tiladi / Rawain Massacre (30 May 1930)** and **Sridev Suman's martyrdom (25 July 1944)** |
| **Manabendra Shah (1946–1949)** | Last Maharaja; faced **Kirtinagar–Saklana Praja Mandal** uprising; signed **Instrument of Merger** on **1 August 1949** (making Tehri a UP district); later served 8 terms as Lok Sabha MP |

## 2. Dhandhaks (Agrarian & Forest Protests)
Traditional peasant rebellions against corrupt officials (*Kamdars*), revenue hikes, and forest restrictions were termed **Dhandhak** (e.g., 1882 Lakshman Kathait, 1904 Khaspatti, 1906 Kunjani under Amar Singh, and 1930 Rawain/Tiladi).

## 3. Key Revision Takeaways
- **Sudarshan Shah** founded Tehri (1815) & wrote *Sabhāsāra*; **Pratap Shah** opened Tehri's first English school (1883) & founded Pratapnagar; **Kirti Shah** built Clock Tower & invited Swami Rama Tirtha; **Narendra Shah** built Narendranagar (1921).
- **1 August 1949:** **Manabendra Shah** merged Tehri State into India (first UP district of Tehri Garhwal).
`,
    mcqs: [
      {
        stem: 'On which exact date did Tehri Garhwal Princely State formally merge into the Indian Union (joining Uttar Pradesh as a district)?',
        options: ['15 August 1947', '26 January 1950', '1 August 1949', '9 November 2000'],
        correctOptionIndex: 2,
        explanation: 'Maharaja Manabendra Shah signed the merger agreement making Tehri Garhwal part of India/UP on 1 August 1949.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who was the first ruler of the restored Tehri Garhwal Princely State who established Tehri as capital in December 1815 and authored *Sabhāsāra*?',
        options: ['Bhawani Shah', 'Sudarshan Shah', 'Pratap Shah', 'Kirti Shah'],
        correctOptionIndex: 1,
        explanation: 'Sudarshan Shah founded Tehri in 1815, patronized Pahari arts, and composed the seven-volume Sabhāsāra.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Tehri ruler opened the state\'s first English school in 1883 and founded the town of Pratapnagar in 1877?',
        options: ['Sudarshan Shah', 'Pratap Shah', 'Kirti Shah', 'Narendra Shah'],
        correctOptionIndex: 1,
        explanation: 'Pratap Shah modernized Tehri with Pratapnagar (1877), its first English school (1883), a printing press, and police courts.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which progressive Tehri monarch founded the Bank of Garhwal, constructed the iconic Clock Tower (1897), and sheltered/supported Swami Rama Tirtha?',
        options: ['Bhawani Shah', 'Kirti Shah', 'Narendra Shah', 'Manabendra Shah'],
        correctOptionIndex: 1,
        explanation: 'Kirti Shah (1886–1913) introduced electricity, agriculture banking, English high school education, and Kirtinagar town.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who shifted the administrative capital from old Tehri to Narendranagar (founded 1921, occupied 1925)?',
        options: ['Pratap Shah', 'Kirti Shah', 'Narendra Shah', 'Sudarshan Shah'],
        correctOptionIndex: 2,
        explanation: 'Maharaja Narendra Shah established Narendranagar overlooking Rishikesh in 1921 and shifted his court there in 1925.',
        difficulty: 'foundation',
      },
      {
        stem: 'In Tehri State history, what did the local term "Dhandhak" signify?',
        options: [
          'A royal coronation dance',
          'Peasant agitation or protest against oppressive officials, forest closures, or heavy taxes (appealing directly to the King)',
          'A copper coin minted by Bhawani Shah',
          'A winter woollen shawl',
        ],
        correctOptionIndex: 1,
        explanation: 'Dhandhak were popular rural protests in Tehri Garhwal—historically framed as loyal appeals to the Maharaja against corrupt Kamdars or harsh forest rules.',
        difficulty: 'standard',
      },
      {
        stem: 'Which tragic massacre (30 May 1930) and iconic Praja Mandal hunger-strike martyrdom (25 July 1944) both occurred during the reign of Maharaja Narendra Shah?',
        options: [
          'Khatima Firing and Rampur Tiraha',
          'Tiladi (Rawain) Massacre and Sridev Suman\'s Martyrdom',
          'Coolie Begar and Salt Satyagraha',
          'Battle of Khurbura and Nalapani',
        ],
        correctOptionIndex: 1,
        explanation: 'During Narendra Shah\'s reign, Diwan Chakradhar Juyal ordered firing at Tiladi (1930), and Sridev Suman died after an 84-day fast in Tehri Jail (1944).',
        difficulty: 'foundation',
      },
      {
        stem: 'Who served as the last reigning Maharaja of Tehri Garhwal State (1946–1949) and later represented Tehri multiple times in Lok Sabha?',
        options: ['Kirti Shah', 'Narendra Shah', 'Manabendra Shah', 'Pradyumna Shah'],
        correctOptionIndex: 2,
        explanation: 'Manabendra Shah acceded in 1946, signed the 1949 merger, and served eight terms in the Indian Parliament.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which scholar-monk visiting Tehri during Kirti Shah\'s reign set up his famous "Kuti" (hermitage) on the Bhilangana and later drowned in the river in 1906?',
        options: ['Swami Vivekananda', 'Swami Rama Tirtha', 'Swami Dayananda', 'Swami Shraddhanand'],
        correctOptionIndex: 1,
        explanation: 'Vedantic philosopher Swami Rama Tirtha stayed in Tehri under Kirti Shah\'s patronage and drowned in the Bhilangana on Diwali 1906.',
        difficulty: 'standard',
      },
      {
        stem: 'Which land settlement was carried out in 1861 during Bhawani Shah\'s reign after Henry Ramsay\'s mediation?',
        options: ['Assi-Sala Settlement', 'Barah-Ana Bisi Settlement', 'Beckett Settlement', 'Pauw Settlement'],
        correctOptionIndex: 1,
        explanation: 'In 1861 Bhawani Shah executed the Barah-Ana Bisi land settlement with assistance from Commissioner Ramsay.',
        difficulty: 'standard',
      },
      {
        stem: 'Why was Tehri Garhwal able to avoid direct British annexation throughout 1815–1947 unlike Eastern Garhwal?',
        options: [
          'Sudarshan Shah maintained loyal subsidiary alliance with the East India Company (and aided the British during 1857) under the 1820 Sanad',
          'Tehri possessed nuclear weapons',
          'The British never knew Tehri existed',
          'Tehri belonged to Nepal',
        ],
        correctOptionIndex: 0,
        explanation: 'Under the 1820 Sanad, Sudarshan Shah and his successors governed Tehri as a loyal princely state under British paramountcy.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Tehri ruler established the Tehri High Court in 1938 and introduced the "Tehri State Forest Settlement" and Panchayat Act?',
        options: ['Sudarshan Shah', 'Narendra Shah', 'Bhawani Shah', 'Pratap Shah'],
        correctOptionIndex: 1,
        explanation: 'Narendra Shah established the Tehri High Court (1938) and codified forest and municipal institutions.',
        difficulty: 'standard',
      },
      {
        stem: 'What was "Kirtinagar" (on the Alaknanda near Srinagar), where revolutionary Nagendra Saklani and Molu Ram Bhardari were martyred in January 1948?',
        options: [
          'A town founded by King Kirti Shah that later became the epicentre of the anti-monarchy Praja Mandal uprising forcing responsible government',
          'A glacier in Chamoli',
          'A canal in Haridwar',
          'A British railway station',
        ],
        correctOptionIndex: 0,
        explanation: 'Founded by Kirti Shah, Kirtinagar witnessed intense Praja Mandal agitation in Jan 1948 leading to Saklani & Bhardari\'s martyrdom and democratic council concessions.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which language did Sudarshan Shah primarily use in composing his literary work *Sabhāsāra*?',
        options: ['English', 'Braj Bhasha (under pen name "Surat Kavi")', 'Tamil', 'Persian'],
        correctOptionIndex: 1,
        explanation: 'Sudarshan Shah composed Sabhāsāra in Braj Bhasha under the poetic pen name "Surat Kavi".',
        difficulty: 'advanced',
      },
      {
        stem: 'Which contrast accurately describes Tehri Princely State vs British Garhwal (Pauri/Chamoli) prior to 1949?',
        options: [
          'British Garhwal sat directly under UP/British provincial governance and entered mass Congress/Coolie Begar agitation earlier, whereas Tehri subjects fought both royal autocracy (via Praja Mandal) and feudal forest cesses before 1949 integration',
          'Tehri had parliamentary democracy in 1820 while Pauri had kings',
          'Both were ruled by the Chand dynasty until 1949',
          'Neither had forest protests',
        ],
        correctOptionIndex: 0,
        explanation: 'Political mobilization in British Kumaon/Garhwal targeted colonial policy directly (Kumaon Parishad, 1921), whereas Tehri subjects formed the Tehri Rajya Praja Mandal (1939) seeking civil liberties and Indian integration.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Kumaon Parishad & Coolie Begar Movement (1921)',
    materialTitle: 'Kumaon Parishad & Coolie Begar Movement (1921) — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Kumaon Parishad & Coolie Begar',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Kumaon Parishad & Coolie Begar Movement (1921)

## 1. Awakening & Early Press / Associations
- **Almora Akhbar (1871):** First major Kumaoni Hindi newspaper (edited by **Buddhiballabh Pant**, later **Badridutt Pande** from 1913); closed in **1918** after exposing Deputy Commissioner Lomas, immediately reborn as **Shakti** (Vijayadashami 1918).
- **Garhwal Samachar (1902)** & **Garhwali (1905, Dehradun)** (Vishwambhar Datt Chandola, Girija Datt Naithani).
- **Kumaon Parishad (1916):** Founded at **Nainital (Sept 1916)** by **Govind Ballabh Pant, Badridutt Pande, Hargovind Pant, Premballabh Pande, Laxmi Datt Shastri, Indralal Sah**. Merged into the Indian National Congress in **1926**.
  - Sessions: **1st (Almora, 1917 — Rai Bahadur Narayan Datt Chhimwal / Jai Datt Joshi)**, **2nd (Haldwani, 1918 — Tara Datt Gairola)**, **3rd (Kotdwar, 1919 — Badridutt Joshi)**, **4th (Kashipur, 1920 — Hargovind Pant)**, **5th (Tanakpur, 1923 — Badridutt Pande)**, **6th (Ranikhet/Ganiadeoli, 1926 — Mukandi Lal)**.

## 2. Coolie Begar, Coolie Utar & Coolie Bardayash
- **The Three Exploitative Practices:**
  1. **Coolie Begar:** Forced unpaid porterage by villagers for touring British officials and troops.
  2. **Coolie Utar:** Nominal/underpaid compulsory labour.
  3. **Coolie Bardayash:** Compulsory free supply of rations/food to touring camps.
- **Climax at Bageshwar — 13–14 January 1921 (Uttarayani Fair):**
  - Led by **Badridutt Pande** ("Kumaon Kesari"), **Hargovind Pant**, and **Chiranjilal**, ~40,000 villagers gathered on the banks of the **Saryu–Gomti** at Bageshwar, took a solemn oath not to perform Coolie Begar, and **flung the Begar land registers into the Saryu River**.
  - Mahatma Gandhi hailed this non-violent triumph as a **"Bloodless Revolution" (*Raktaheen Kranti*)**.
  - In Garhwal, **Anusuya Prasad Bahuguna** ("Garh Kesari"), **Mukandi Lal**, and **Tara Datt Gairola** similarly ended Begar around Chamoli/Chaukhotiya/Pauri.

## 3. Van Panchayats Outcome
Parallel **1921 Forest Satyagraha** (against grazing bans & forest fires) prompted the British to appoint the **Kumaon Forest Grievances Committee (1921)** under P. Wyndham, leading directly to the **1931 Van Panchayat Rules**—India's pioneering community-forest institution!

## 4. Key Revision Takeaways
- **Kumaon Parishad:** Founded **1916**; merged with Congress in **1926**.
- **Coolie Begar Ended:** **13–14 January 1921** at **Bageshwar (Saryu river)** under **Badridutt Pande** ("Kumaon Kesari"); Gandhi called it a **"Bloodless Revolution"**.
- **Almora Akhbar (1871)** → **Shakti (1918)**; **Garhwali (1905)**.
`,
    mcqs: [
      {
        stem: 'On 13–14 January 1921 (Uttarayani Fair), on the banks of which river at Bageshwar were the Coolie Begar registers thrown into the water?',
        options: ['Alaknanda', 'Saryu (at Saryu–Gomti confluence)', 'Kosi', 'Yamuna'],
        correctOptionIndex: 1,
        explanation: 'Tens of thousands led by Badridutt Pande pledged freedom from Coolie Begar and cast the Begar registers into the Saryu river at Bageshwar.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who earned the enduring title "Kumaon Kesari" for leading the historic 1921 Coolie Begar agitation at Bageshwar?',
        options: ['Govind Ballabh Pant', 'Badridutt Pande', 'Hargovind Pant', 'Kalu Mahara'],
        correctOptionIndex: 1,
        explanation: 'Badridutt Pande—editor of Almora Akhbar and Shakti—emerged from the 1921 movement with the popular title "Kumaon Kesari".',
        difficulty: 'foundation',
      },
      {
        stem: 'In which year was the Kumaon Parishad founded to voice regional and nationalist demands?',
        options: ['1905', '1916', '1921', '1930'],
        correctOptionIndex: 1,
        explanation: 'Kumaon Parishad was founded at Nainital in September 1916 by G.B. Pant, Badridutt Pande, Hargovind Pant, and colleagues.',
        difficulty: 'foundation',
      },
      {
        stem: 'After the colonial administration forced the closure of *Almora Akhbar* in 1918, which newspaper did Badridutt Pande launch immediately to continue nationalist journalism?',
        options: ['Garhwali', 'Shakti', 'Karmabhoomi', 'Yugvani'],
        correctOptionIndex: 1,
        explanation: 'When Almora Akhbar closed in 1918, Badridutt Pande founded the weekly "Shakti" on Vijayadashami 1918.',
        difficulty: 'foundation',
      },
      {
        stem: 'What was "Coolie Bardayash" as distinct from "Coolie Begar"?',
        options: [
          'Compulsory supply of free food grains and rations by villagers to touring British officers',
          'Paid railway porters in Kathgodam',
          'Military service in Europe',
          'Timber auctioning in Haldwani',
        ],
        correctOptionIndex: 0,
        explanation: 'Coolie Begar was unpaid forced labour/porterage; Coolie Utar was underpaid forced transport; Coolie Bardayash meant compulsory free provisions/rations.',
        difficulty: 'standard',
      },
      {
        stem: 'How did Mahatma Gandhi describe the peaceful termination of Coolie Begar at Bageshwar in January 1921?',
        options: [
          'Armed Insurrection',
          'Bloodless Revolution (Raktaheen Kranti)',
          'Himalayan Mutiny',
          'Forest Tragedy',
        ],
        correctOptionIndex: 1,
        explanation: 'Gandhi praised the disciplined non-violent success of the Bageshwar pledge in *Young India* as a "Bloodless Revolution".',
        difficulty: 'foundation',
      },
      {
        stem: 'Which leader from Garhwal—later known as "Garh Kesari"—actively campaigned against Coolie Begar and forest restrictions in Chamoli/Garhwal?',
        options: [
          'Anusuya Prasad Bahuguna',
          'Chandra Singh Garhwali',
          'Sridev Suman',
          'Jayanand Bharti',
        ],
        correctOptionIndex: 0,
        explanation: 'Anusuya Prasad Bahuguna ("Garh Kesari") championed Garhwal\'s anti-Begar and anti-forest-grievance mobilization.',
        difficulty: 'foundation',
      },
      {
        stem: 'In which year did the Kumaon Parishad formally merge with the Indian National Congress at its 6th session at Ganiadeoli (Ranikhet)?',
        options: ['1921', '1926', '1930', '1942'],
        correctOptionIndex: 1,
        explanation: 'Presided over by Barrister Mukandi Lal in 1926, Kumaon Parishad merged seamlessly into the Indian National Congress.',
        difficulty: 'standard',
      },
      {
        stem: 'Where was the 3rd session of the Kumaon Parishad (1919), marked by strong Hindu–Muslim unity and anti-Begar/forest resolutions, held?',
        options: ['Almora', 'Haldwani', 'Kotdwar', 'Kashipur'],
        correctOptionIndex: 2,
        explanation: 'The 3rd session (1919) was held in Kotdwar (Garhwal) under Badridutt Joshi.',
        difficulty: 'standard',
      },
      {
        stem: 'Which landmark rural community-forestry institution emerged in Uttarakhand (1931) as a direct result of the 1921 Kumaon Forest Grievances Committee?',
        options: ['Social Forestry Board', 'Van Panchayats', 'SIDCUL', 'Zamindari Boards'],
        correctOptionIndex: 1,
        explanation: 'The 1921 Forest Grievances Committee (Percy Wyndham) recommended returning Panchayat forests to villagers, formalized by the 1931 Van Panchayat Rules.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Dehradun-based newspaper (started 1905) served as the fearless voice of Garhwal\'s intelligentsia against Coolie Begar and social ills?',
        options: ['Garhwali', 'Almora Akhbar', 'Samta', 'Himgiri'],
        correctOptionIndex: 0,
        explanation: 'Garhwali (published from Dehradun starting 1905, edited for decades by Vishwambhar Datt Chandola) led Garhwal\'s print awakening.',
        difficulty: 'standard',
      },
      {
        stem: 'Which leader had already refused to carry Begar luggage personally on principle at Katyur/Almora prior to the 1921 Bageshwar culmination?',
        options: ['Hargovind Pant', 'Edward Gardner', 'Sudarshan Shah', 'Lakshmi Chand'],
        correctOptionIndex: 0,
        explanation: 'Hargovind Pant (a prominent Kumaon Parishad leader and lawyer) publicly defied Begar customs in Almora ahead of 1921.',
        difficulty: 'advanced',
      },
      {
        stem: 'Why was combining the anti-Begar struggle with the Hindu religious Uttarayani Fair at Bageshwar strategically decisive in 1921?',
        options: [
          'Tens of thousands of hill peasants from across Kumaon and Garhwal naturally assembled there without requiring expensive transport, giving collective strength and moral sanctity to the oath',
          'British officers ordered villagers to burn registers',
          'Bageshwar was a major seaport',
          'Because Bageshwar had no rivers',
        ],
        correctOptionIndex: 0,
        explanation: 'Mobilizing at Uttarayani turned a traditional pilgrimage gathering into an unstoppable mass non-cooperation pledge.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Kumaon social reformer and Dalit leader launched the newspaper *Samta* (1934) in Almora to campaign against untouchability and for Shilpkar upliftment?',
        options: [
          'Munshi Hari Prasad Tamta',
          'Badridutt Pande',
          'Harak Dev Joshi',
          'Mohan Singh Mehta',
        ],
        correctOptionIndex: 0,
        explanation: 'Munshi Hari Prasad Tamta founded the Tamta Sudhar Sabha (1905), later Shilpkar Sabha, and launched *Samta* (1934) for Dalit equality.',
        difficulty: 'standard',
      },
      {
        stem: 'Similarly in Garhwal, who led the pioneering "Dola–Palki Movement" securing equal marriage palanquin rights for Shilpkar brides and grooms?',
        options: ['Jayanand Bharti', 'Kalu Mahara', 'Gumani Pant', 'Mahendra Chand'],
        correctOptionIndex: 0,
        explanation: 'Jayanand Bharti led the Dola–Palki movement in Garhwal (supported by Gandhi and Garhwal Congress leaders) to abolish caste discrimination in wedding processions.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Civil Disobedience, Peshawar Incident & Salt Satyagraha in Uttarakhand',
    materialTitle: 'Civil Disobedience, Peshawar Incident & Salt Satyagraha in Uttarakhand — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Civil Disobedience & Peshawar Incident',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Civil Disobedience, Peshawar Incident & Salt Satyagraha in Uttarakhand

## 1. Mahatma Gandhi's Visits & Dandi Link (1929–1930)
- **Gandhi's Kumaon Tour (1929):** Visited Haldwani, Nainital, Almora, **Kausani** (staying 12 days at Anasakti Ashram writing commentary on the Gita—calling Kausani the **"Switzerland of India"**), and Bageshwar.
- **Dandi March (1930):** **Jyotiram Kandpal**, **Bhairav Datt Joshi**, and **Gorakhveer Kharag Bahadur** were among Uttarakhand participants in Gandhi's iconic 78-member Salt March!
- **Local Salt & Flag Satyagraha:** Led by **Mohan Joshi**, **Hargovind Pant**, **Govind Ballabh Pant**, **Kunti Verma**, **Bishni Devi Sah** (hoisted tricolour on **Almora Municipality**, 1930), and **Shanti Lal Trivedi** (**Chanoda Gandhi Ashram**, Someshwar, 1937).

## 2. The Peshawar Incident (23 April 1930) — Chandra Singh Garhwali
- During Civil Disobedience at **Qissa Khwani Bazaar (Peshawar)**, British officers ordered soldiers of the **2/18th Royal Garhwal Rifles** to fire upon unarmed Khudai Khidmatgar ("Red Shirt") Pathan demonstrators led by Khan Abdul Ghaffar Khan.
- Havildar **Chandra Singh Bhandari ("Veer Chandra Singh Garhwali")** boldly refused the order, declaring *"Garhwali cease fire!"*—an unforgettable milestone of military nationalism and Hindu–Muslim solidarity.
- Court-martialled with comrades (defended by Barrister Mukandi Lal), Chandra Singh spent ~11 years in prison.

## 3. Quit India Movement (1942) & Salt (Almora) / Salam–Dhaam Fires
- **Salt (Khumaad, Almora) Firing — 5 September 1942:** British police fired on peaceful Quit India protestors at Khumaad (Salt area); martyrs included **Gangaram**, **Khimdev**, **Chudamani**, and **Bahadur Singh**; remembered annually as **"Salt Shahid Diwas"** ("Kumaon's Bardoli" per Gandhi).
- **Deghat & Salam Fires (Aug 1942):** Police fired at Salam (Martyrs Nar Singh & Tika Singh) and Deghat (Harikrishna & Hiramani).
- **Tadikhhet / Gandhi Ashram (Prem Vidyalaya):** Founded by **Bhagirath Pandey & Devkinandan Pandey**; visited by Gandhi in 1929.
- **Azad Hind Fauj (INA):** Hundreds of Garhwal & Kumaon soldiers joined Netaji's INA; **Col. Pitri Sharan Raturi** and **Major Durga Malla** (executed Aug 1944, Dehradun) became national heroes.

## 4. Key Revision Takeaways
- **23 April 1930:** **Veer Chandra Singh Garhwali** (2/18 Royal Garhwal Rifles) refused to fire at **Peshawar**.
- **5 September 1942:** **Salt (Khumaad, Almora)** martyrdom — dubbed **"Kumaon's Bardoli"**.
- **Bishni Devi Sah** hoisted tricolour at Almora Municipality (1930); **Shanti Lal Trivedi** founded **Chanoda Gandhi Ashram**.
`,
    mcqs: [
      {
        stem: 'On 23 April 1930, Havildar Veer Chandra Singh Garhwali of the 2/18th Royal Garhwal Rifles refused British orders to fire on unarmed Pathan protestors at:',
        options: ['Dandi (Gujarat)', 'Qissa Khwani Bazaar, Peshawar', 'Lahore Fort', 'Chittagong'],
        correctOptionIndex: 1,
        explanation: 'At Qissa Khwani Bazaar in Peshawar, Chandra Singh Garhwali defied Captain Ricketts\'s firing order against Khudai Khidmatgar Satyagrahis.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Quit India protest site in Almora district—witnessing fatal police firing on 5 September 1942—is commemorated as "Kumaon\'s Bardoli"?',
        options: ['Ranikhet', 'Salt (Khumaad)', 'Bageshwar', 'Kausani'],
        correctOptionIndex: 1,
        explanation: 'Khumaad in the Salt region of Almora suffered deadly police firing on 5 September 1942 and was famously praised by Mahatma Gandhi as Kumaon\'s Bardoli.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who led the historic women\'s protest in Almora in 1930 and hoisted the Indian Tricolour atop the Almora Municipality building?',
        options: ['Gaura Devi', 'Bishni Devi Sah', 'Tilu Rauteli', 'Sarla Behn'],
        correctOptionIndex: 1,
        explanation: 'Bishni Devi Sah was Uttarakhand\'s first woman freedom fighter jailed during Civil Disobedience after hoisting the Tricolour on Almora Nagar Palika.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which scenic hill station in Bageshwar district was described by Mahatma Gandhi during his 1929 stay (writing *Anasakti Yoga*) as the "Switzerland of India"?',
        options: ['Mussoorie', 'Kausani', 'Ranikhet', 'Lansdowne'],
        correctOptionIndex: 1,
        explanation: 'Gandhi stayed at Anasakti Ashram in Kausani in June 1929 and lauded its Himalayan panorama as India\'s Switzerland.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who founded the famous Gandhi Ashram at Chanoda (Someshwar valley, Almora) in 1937 to anchor rural constructive work and Swadeshi?',
        options: ['Shanti Lal Trivedi', 'Barrister Mukandi Lal', 'Sridev Suman', 'Kalu Mahara'],
        correctOptionIndex: 0,
        explanation: 'Gandhian activist Shanti Lal Trivedi established the Chanoda Gandhi Ashram in 1937 (sealed by police during the 1942 Quit India Movement).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which freedom fighters from Uttarakhand walked with Mahatma Gandhi in the original 78-member 1930 Dandi Salt March?',
        options: [
          'Jyotiram Kandpal, Bhairav Datt Joshi, and Gorakhveer Kharag Bahadur',
          'Kalu Mahara and Sudarshan Shah',
          'Badridutt Pande and G.B. Pant',
          'Sridev Suman and Nagendra Saklani',
        ],
        correctOptionIndex: 0,
        explanation: 'Jyotiram Kandpal, Bhairav Datt Joshi, and Kharag Bahadur participated directly in Gandhi\'s historic 1930 Dandi March.',
        difficulty: 'standard',
      },
      {
        stem: 'Who defended Veer Chandra Singh Garhwali and his 2/18th Garhwal Rifles comrades during their 1930 court-martial?',
        options: ['Barrister Mukandi Lal', 'Motilal Nehru', 'Muhammad Ali Jinnah', 'C.R. Das'],
        correctOptionIndex: 0,
        explanation: 'Barrister Mukandi Lal defended Chandra Singh Garhwali during court-martial proceedings, helping commute potential death sentences into imprisonment.',
        difficulty: 'standard',
      },
      {
        stem: 'Who were the two brothers/martyrs among the four killed during the 5 September 1942 police firing at Salt (Khumaad, Almora)?',
        options: [
          'Gangaram and Khimdev (alongside Chudamani and Bahadur Singh)',
          'Kalu Mahara and Bishan Singh',
          'Nagendra Saklani and Molu Ram Bhardari',
          'Amar Singh and Ram Singh',
        ],
        correctOptionIndex: 0,
        explanation: 'Brothers Gangaram and Khimdev were shot dead on 5 September 1942 at Khumaad, followed by Chudamani and Bahadur Singh succumbing to injuries.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Gorkha freedom fighter from Doiwala (Dehradun) served in Subhas Chandra Bose\'s Azad Hind Fauj (INA) and was hanged in Delhi Red Fort in August 1944?',
        options: ['Major Durga Malla', 'Balbhadra Singh Thapa', 'Veer Kesari Chand', 'Sridev Suman'],
        correctOptionIndex: 0,
        explanation: 'Major Durga Malla (born Doiwala, Dehradun) joined the INA intelligence wing and attained martyrdom on 25 August 1944; Veer Kesari Chand (Chakrata) was also martyred in 1945.',
        difficulty: 'standard',
      },
      {
        stem: 'Who founded the Prem Vidyalaya / Gandhi Ashram at Tadikhhet (Ranikhet) visited by Gandhi in 1929?',
        options: [
          'Bhagirath Pandey and Devkinandan Pandey',
          'Badridutt Pande and Mohan Joshi',
          'Hargovind Pant and Indralal Sah',
          'Sarla Behn and Mira Behn',
        ],
        correctOptionIndex: 0,
        explanation: 'Bhagirath Pandey and Devkinandan Pandey built Prem Vidyalaya at Tadikhhet in 1920 as a Gandhian nationalist school.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which disciple of Gandhi (Catherine Mary Heilemann) established the Lakshmi Ashram at Kausani in 1946 to empower hill girls and women?',
        options: ['Mira Behn', 'Sarla Behn', 'Annie Besant', 'Sister Nivedita'],
        correctOptionIndex: 1,
        explanation: 'Sarla Behn founded Lakshmi Ashram at Kausani (while Mira Behn worked in Pashulok/Rishikesh and Bhilangana valley).',
        difficulty: 'foundation',
      },
      {
        stem: 'What was "Nayak Sudhar Act (1929)" enacted after sustained social campaigns by Uttarakhand leaders including Govind Ballabh Pant and Badridutt Pande?',
        options: [
          'Legislation curbing the exploitation and forced prostitution of daughters of the Nayak community in Kumaon',
          'A forest timber tax act',
          'An irrigation canal code for Terai',
          'A mineral mining concession act',
        ],
        correctOptionIndex: 0,
        explanation: 'The Nayak Girls Protection Act (1929) addressed historical social exploitation among Kumaon\'s Nayak community.',
        difficulty: 'advanced',
      },
      {
        stem: 'Why was the refusal of Garhwali soldiers at Peshawar on 23 April 1930 far more alarming to British rule than an ordinary civilian protest?',
        options: [
          'It struck at the loyalty of British India\'s armed colonial regiments themselves—demonstrating nationalist awakening inside the military',
          'Because Peshawar lay inside Uttarakhand',
          'Because the Garhwal Rifles used nuclear weapons',
          'Because it ended World War II immediately',
        ],
        correctOptionIndex: 0,
        explanation: 'British rule rested heavily on disciplined Indian regiments; Chandra Singh Garhwali\'s principled mutiny shattered colonial confidence in unquestioning troop obedience.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Quit India leader from Uttarakhand operated underground and organized the Kumaon/Tarai railway disruption and youth mobilization around Haldwani–Almora?',
        options: ['Nityanand Swami', 'Madan Mohan Upadhyaya (alongside Ram Singh Dhauni/G.B. Pant detention)', 'Edward Gardner', 'Sudarshan Shah'],
        correctOptionIndex: 1,
        explanation: 'Madan Mohan Upadhyaya, Govind Ballabh Pant, and comrades spearheaded 1942 Quit India activism across Kumaon.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which Garhwal town/area—home to Veer Kesari Chand—is celebrated for his martyrdom in the Azad Hind Fauj on 3 May 1945?',
        options: ['Chakrata / Kyawa village (Jaunsar-Bawar, Dehradun)', 'Champawat', 'Pithoragarh', 'Haldwani'],
        correctOptionIndex: 0,
        explanation: 'Veer Kesari Chand hailed from Kyawa village in Jaunsar-Bawar (Dehradun) and was executed in 1945 for INA sabotage missions; Ramtal Garden fair honours him on 3 May.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Tiladi Kand (1930), Tehri Praja Mandal & Sridev Suman',
    materialTitle: 'Tiladi Kand (1930), Tehri Praja Mandal & Sridev Suman — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Tiladi Kand, Praja Mandal & Sridev Suman',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Tiladi Kand (1930), Tehri Praja Mandal & Sridev Suman

## 1. The Rawain / Tiladi Forest Massacre (30 May 1930)
- **Background:** Under Maharaja Narendra Shah's new **1927–28 Forest Settlement**, villagers' grazing, timber, and cultivated ridge lands in **Rawain** (Barkot–Purola, Uttarkashi) were enclosed as royal forests.
- **Azad Panchayat & Firing:** Peasants formed an **"Azad Panchayat"** declaring self-rule over forests and assembled peacefully at **Tiladi Maidan** on the bank of the **Yamuna** on **30 May 1930**.
- **Atrocity:** Diwan **Chakradhar Juyal** surrounded the unarmed gathering with Tehri State soldiers and opened fire—scores were killed or drowned in the Yamuna (commemorated as **Tiladi Shahid Smarak**; **Dayaram Rawalta** & **Hira Singh** among local leaders).

## 2. Tehri Rajya Praja Mandal (1939) & Sridev Suman
- **Formation:** Founded on **23 January 1939** at **Dehradun** (at Shyam Chand Negi's residence) by **Sridev Suman** (born **25 May 1916**, Jaul village, Tehri), **Totaram Gairola**, **Govind Ram Bhatt**, **Mahimanand Uniyal**, and **Daulat Ram**.
- **Objective:** Replace royal absolutism with **responsible representative government** under the Maharaja's constitutional aegis and secure civil/forest rights.
- **Arrest & Martyrdom of Sridev Suman:**
  - Arrested (30 Dec 1943) at Chamba while touring Tehri despite state ban.
  - Facing harsh confinement in **Tehri Jail** and false treason charges, he began an **historic fast unto death on 3 May 1944**, proclaiming *"Main apne sharir ke kan-kan ko nasht ho jane dunga, kintu Tehri ke naresh ke samne apna mastak nahin jhukaunga."*
  - Attained martyrdom after **84 days of fasting on 25 July 1944** (aged 28).

## 3. Climax: Saklana & Kirtinagar Agitations (1947–1949)
- Post-1944 leadership passed to **Nagendra Saklani**, **Daulat Ram**, **Paripurnanand Painuli**, and **Veerendra Dutt Saklani**.
- **Saklana Revolt (1947)** & **Kirtinagar Agitation (10–11 Jan 1948):** Revolutionaries captured Tehri courts; **Nagendra Saklani** and **Molu Ram Bhardari** were shot dead in **Kirtinagar** (11 Jan 1948).
- Massive public outrage forced **Maharaja Manabendra Shah** to concede a popular interim ministry and ultimately merge Tehri Garhwal into India on **1 August 1949**.

## 4. Key Revision Takeaways
- **30 May 1930:** **Tiladi Massacre** (Rawain, Yamuna bank) under Diwan **Chakradhar Juyal**.
- **23 January 1939:** **Tehri Rajya Praja Mandal** founded at **Dehradun**.
- **25 July 1944:** **Sridev Suman** died after an **84-day fast** in Tehri Jail.
- **11 January 1948:** **Nagendra Saklani** & **Molu Ram Bhardari** martyred at **Kirtinagar**.
`,
    mcqs: [
      {
        stem: 'On which date did the tragic Tiladi (Rawain) Massacre occur along the banks of the Yamuna river in Tehri Princely State?',
        options: ['13 January 1921', '30 May 1930', '25 July 1944', '11 January 1948'],
        correctOptionIndex: 1,
        explanation: 'On 30 May 1930, Tehri State troops opened fire on unarmed Rawain villagers holding an Azad Panchayat at Tiladi Maidan.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who was the Diwan of Tehri State notorious for ordering the armed firing on peaceful peasants at Tiladi on 30 May 1930?',
        options: ['Harak Dev Joshi', 'Chakradhar Juyal', 'Barrister Mukandi Lal', 'Mohan Joshi'],
        correctOptionIndex: 1,
        explanation: 'Diwan Chakradhar Juyal commanded the state armed force that surrounded and fired upon the Rawain assembly.',
        difficulty: 'foundation',
      },
      {
        stem: 'Where and when was the "Tehri Rajya Praja Mandal" formally established under Sridev Suman\'s leadership?',
        options: [
          'Tehri Palace on 1 August 1949',
          'Dehradun on 23 January 1939',
          'Almora on 14 January 1921',
          'Narendranagar on 30 May 1930',
        ],
        correctOptionIndex: 1,
        explanation: 'Blocked from organizing political parties inside Tehri State, Sridev Suman and fellow activists founded Tehri Rajya Praja Mandal in Dehradun on 23 January 1939.',
        difficulty: 'foundation',
      },
      {
        stem: 'After how many days of his historic hunger strike in Tehri Jail did Sridev Suman attain martyrdom on 25 July 1944?',
        options: ['21 days', '45 days', '84 days', '112 days'],
        correctOptionIndex: 2,
        explanation: 'Sridev Suman fasted continuously for 84 days (3 May to 25 July 1944) demanding responsible governance and civil liberties in Tehri.',
        difficulty: 'foundation',
      },
      {
        stem: 'What was the immediate root cause of the 1930 Rawain (Tiladi) peasant uprising?',
        options: [
          'New royal forest rules enclosing villagers\' traditional grazing lands, fodder forests, and cultivated ridges without consent',
          'Introduction of electric streetlamps',
          'Ban on tea exports to London',
          'A dispute over Nepal border passes',
        ],
        correctOptionIndex: 0,
        explanation: 'Enclosure of village agricultural/pastoral lands into state reserved forests under the 1927–28 forest settlement sparked the Azad Panchayat movement.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which two Praja Mandal leaders were martyred during the Kirtinagar uprising on 11 January 1948, accelerating Tehri\'s democratic merger?',
        options: [
          'Gangaram and Khimdev',
          'Nagendra Saklani and Molu Ram Bhardari',
          'Kalu Mahara and Bishan Singh',
          'Veer Chandra Singh and Durga Malla',
        ],
        correctOptionIndex: 1,
        explanation: 'Nagendra Saklani and Molu Ram Bhardari were shot dead on 11 January 1948 while liberating Kirtinagar court.',
        difficulty: 'foundation',
      },
      {
        stem: 'What was the core political goal of the Tehri Rajya Praja Mandal when founded in 1939?',
        options: [
          'Immediate annexation of Tehri by Nepal',
          'Establishing responsible representative government and civil rights in Tehri State under constitutional monarchy / Indian national framework',
          'Restoring Gorkha military rule',
          'Closing all schools in Garhwal',
        ],
        correctOptionIndex: 1,
        explanation: 'Initially aligned with the All India States Peoples\' Conference, the Praja Mandal demanded popular representation, press freedom, and agrarian/forest justice.',
        difficulty: 'standard',
      },
      {
        stem: 'Before founding Tehri Rajya Praja Mandal, which organization did Sridev Suman establish in Delhi (1937) to unite Garhwali voices?',
        options: [
          'Garhdesh Seva Sangh (later Himalaya Seva Sangh)',
          'Kumaon Parishad',
          'Krantiveer Dal',
          'Uttarakhand Kranti Dal',
        ],
        correctOptionIndex: 0,
        explanation: 'Sridev Suman formed Garhdesh Seva Sangh (1937/38) in Delhi to raise awareness about Himalayan hill states\' conditions.',
        difficulty: 'standard',
      },
      {
        stem: 'Which annual observance in Uttarakhand marks the anniversary of Sridev Suman\'s martyrdom (25 July)?',
        options: [
          'Harela Divas',
          'Sridev Suman Smriti / Punyatithi Divas',
          'Coolie Begar Day',
          'State Foundation Day',
        ],
        correctOptionIndex: 1,
        explanation: '25 July is observed across Uttarakhand (with tributes in Tehri/Uttarkashi) as Sridev Suman Martyrdom Day.',
        difficulty: 'foundation',
      },
      {
        stem: 'What was "Azad Panchayat" declared by Rawain peasants ahead of the 30 May 1930 Tiladi assembly?',
        options: [
          'A parallel peasant self-governance body claiming customary rights over local forests and resisting arbitrary state officials',
          'A British railway board',
          'A royal palace council in Narendranagar',
          'An industrial chamber in Haridwar',
        ],
        correctOptionIndex: 0,
        explanation: 'Rawain villagers organized an autonomous Azad Panchayat (with leaders like Daya Ram Rawalta) to protect traditional forest and grazing rights.',
        difficulty: 'standard',
      },
      {
        stem: 'Which neighboring region of Tehri witnessed a popular anti-feudal uprising in 1947 (Saklana Muafi) led by Praja Mandal workers?',
        options: ['Saklana (near Dhanaulti/Tehri–Dehradun border)', 'Haldwani', 'Kashipur', 'Bageshwar'],
        correctOptionIndex: 0,
        explanation: 'Activists in Saklana proclaimed liberation from feudal Jagirdari rule in late 1947, inspiring the January 1948 Kirtinagar climax.',
        difficulty: 'standard',
      },
      {
        stem: 'Why was the Tehri Rajya Praja Mandal forced to establish its founding headquarters in Dehradun (British India) rather than Tehri?',
        options: [
          'Maharaja Narendra Shah\'s administration prohibited political associations and public meetings inside Tehri Princely State',
          'Dehradun was the Tehri Maharaja\'s winter palace',
          'No roads existed inside Tehri',
          'Dehradun had higher elevation than Tehri',
        ],
        correctOptionIndex: 0,
        explanation: 'Severe censorship and ban on political societies inside Tehri forced organizers to base Praja Mandal headquarters in Dehradun.',
        difficulty: 'standard',
      },
      {
        stem: 'Who led the Rawain agitation and later served as President of the Azad Panchayat / faced arrests during the Tiladi episode?',
        options: ['Dayaram Rawalta (and Ram Prasad/Hira Singh)', 'Jayanand Bharti', 'Munshi Hari Prasad Tamta', 'Badridutt Pande'],
        correctOptionIndex: 0,
        explanation: 'Dayaram Rawalta was a prominent local leader of the Rawain/Tiladi peasant movement.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which landmark event forced Maharaja Manabendra Shah to finally announce full merger with India in 1949 rather than retaining separate autonomy?',
        options: [
          'Sustained Praja Mandal mass mobilization (Kirtinagar–Saklana victories), interim assembly instability, and the Patel–Menon States Ministry integration policy',
          'British military invasion in 1949',
          'Chinese annexation of Narendranagar',
          'Earthquake destruction of Narendranagar',
        ],
        correctOptionIndex: 0,
        explanation: 'Internal democratic pressure led by Nagendra Saklani\'s sacrifice and Paripurnanand Painuli/Daulat Ram, paired with Sardar Patel\'s integration drive, completed merger on 1 August 1949.',
        difficulty: 'standard',
      },
      {
        stem: 'In which district of modern Uttarakhand is Tiladi Maidan located today?',
        options: ['Tehri Garhwal', 'Uttarkashi (Barkot–Purola / Rawain belt)', 'Chamoli', 'Rudraprayag'],
        correctOptionIndex: 1,
        explanation: 'Tiladi Maidan on the Yamuna bank near Barkot falls today within Uttarkashi district (carved out from Tehri Garhwal in 1960).',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Uttarakhand Statehood Movement (1994–2000)',
    materialTitle: 'Uttarakhand Statehood Movement (1994–2000) — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Uttarakhand Statehood Movement',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Uttarakhand Statehood Movement (1994–2000)

## 1. Early Roots & Political Mobilization (1938–1993)
- **1938 Srinagar Congress Session:** Sridev Suman & Jawaharlal Nehru acknowledged distinct Himalayan mountain identity; **P.C. Joshi** (1952) and **Badri Datt Pande** also championed hill autonomy.
- **1967–1973:** **Parvatiya Rajya Parishad** (Ramnagar, 1967, Daya Krishna Pandey) & **Uttaranchal Parishad** (1972).
- **Uttarakhand Kranti Dal (UKD):** Founded **25 July 1979** at **Mussoorie** (first President **Dr. Devi Datt Pant**, former Kumaun University VC); **Indramani Badoni** ("Gandhi of Uttarakhand") & **Kashi Singh Airy** became towering statehood icons.
- **1994 Kaushik Committee:** UP CM Mulayam Singh Yadav formed the **Ramashankar Kaushik Committee** (Jan 1994), which recommended creating a separate hill state with **Gairsain** as capital.

## 2. The 1994 Mass Upsurge & Martyrdoms
- **Trigger (July–August 1994):** Implementation of **27% OBC reservation** (while OBCs constituted a tiny % of native hill population, threatening scarce local seats/jobs) + resentment over hill neglect ignited student and women-led protests; **Indramani Badoni** sat on fast-unto-death at **Pauri** (Aug 1994).
- **Major Turning-Point Tragedies (1994):**
  1. **Khatima Firing (1 September 1994):** Police fired on peaceful rally in Khatima (7+ protesters killed).
  2. **Mussoorie (Jhulaghar) Firing (2 September 1994):** Police firing killed 6 demonstrators (including **Hansa Dhanai, Belmati Chauhan**) and DSP Umakant Tripathi.
  3. **Rampur Tiraha Kand / Muzaffarnagar Tragedy (2 October 1994 — Gandhi Jayanti):** Delhi-bound unarmed Uttarakhand rallyists were brutally intercepted at **Rampur Tiraha (Muzaffarnagar)** by UP police—firing, assaults, and atrocities against women shocked the entire nation.
  4. **Shriyantra Tapu (Srinagar) Incident (10 Nov 1995):** Martyrs **Yashodhar Banzwal** & **Rajesh Rawat**.

## 3. Creation of the 27th State (2000)
- PM **Atal Bihari Vajpayee's** NDA government introduced the **Uttar Pradesh Reorganization Bill, 2000** (passed Lok Sabha **1 Aug 2000**, Rajya Sabha **10 Aug 2000**, Presidential assent **28 Aug 2000**).
- On **9 November 2000**, **Uttaranchal** became the **27th State of India** (temporary capital **Dehradun**; first CM **Nityanand Swami**; first Governor **Surjit Singh Barnala**).
- Renamed **Uttarakhand** with effect from **1 January 2007** (Act of 2006); **Gairsain (Bhararisain)** later declared **Summer Capital (2020)**.

## 4. Key Revision Takeaways
- **UKD:** Founded **25 July 1979** (Mussoorie, D.D. Pant).
- **1994:** **Kaushik Committee** (Gairsain); **1 Sept Khatima**, **2 Sept Mussoorie**, **2 Oct Rampur Tiraha**.
- **9 Nov 2000:** Uttaranchal (27th state); **1 Jan 2007:** Renamed **Uttarakhand**.
`,
    mcqs: [
      {
        stem: 'On which date did Uttarakhand (originally named Uttaranchal) come into existence as the 27th State of the Indian Union?',
        options: ['1 August 2000', '28 August 2000', '9 November 2000', '1 January 2007'],
        correctOptionIndex: 2,
        explanation: 'Born under the UP Reorganization Act 2000, Uttaranchal officially became India\'s 27th state on 9 November 2000.',
        difficulty: 'foundation',
      },
      {
        stem: 'When and where was the Uttarakhand Kranti Dal (UKD) founded, and who served as its first President?',
        options: [
          'Dehradun, 1994 – Indramani Badoni',
          'Mussoorie, 25 July 1979 – Dr. Devi Datt Pant',
          'Nainital, 1916 – Badridutt Pande',
          'Gairsain, 1988 – Kashi Singh Airy',
        ],
        correctOptionIndex: 1,
        explanation: 'UKD was founded on 25 July 1979 at Mussoorie with former Kumaun University Vice-Chancellor Dr. Devi Datt Pant as founding President.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which respected hill leader is popularly honoured as the "Gandhi of Uttarakhand" for leading mass statehood mobilization in 1994?',
        options: ['Nityanand Swami', 'Indramani Badoni', 'Sridev Suman', 'H.N. Bahuguna'],
        correctOptionIndex: 1,
        explanation: 'Indramani Badoni (cultural icon of Kedar Nritya and tireless UKD leader) was hailed as the "Gandhi of Uttarakhand".',
        difficulty: 'foundation',
      },
      {
        stem: 'Which shameful incident on 2 October 1994—when Delhi-bound peaceful Uttarakhand demonstrators were stopped and fired upon—transformed the statehood demand into an unstoppable moral movement?',
        options: [
          'Tiladi Firing',
          'Rampur Tiraha (Muzaffarnagar) Tragedy',
          'Salt Firing',
          'Jallianwala Bagh',
        ],
        correctOptionIndex: 1,
        explanation: 'On Gandhi Jayanti night (1–2 October 1994), UP police brutally fired on and assaulted unarmed rallyists at Rampur Tiraha near Muzaffarnagar.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which 1994 UP government committee recommended both the creation of a separate Uttarakhand state and the selection of Gairsain as its capital?',
        options: [
          'Fazl Ali Commission',
          'Ramashankar Kaushik Committee',
          'Sarkaria Commission',
          'Dixit Commission',
        ],
        correctOptionIndex: 1,
        explanation: 'The Kaushik Committee (constituted Jan 1994, report May 1994) endorsed statehood with Gairsain as capital.',
        difficulty: 'foundation',
      },
      {
        stem: 'On which exact dates in September 1994 did the twin hill-town police firings at Khatima and Mussoorie take place?',
        options: [
          '1 September (Khatima) and 2 September (Mussoorie)',
          '15 August and 26 January',
          '2 October and 10 November',
          '13 January and 14 January',
        ],
        correctOptionIndex: 0,
        explanation: 'Police fired on protestors in Khatima on 1 September 1994 and in Mussoorie (killing Hansa Dhanai, Belmati Chauhan, and others) on 2 September 1994.',
        difficulty: 'standard',
      },
      {
        stem: 'From which date did the state\'s official name change from "Uttaranchal" to "Uttarakhand"?',
        options: ['9 November 2001', '1 January 2007', '15 August 2010', '4 March 2020'],
        correctOptionIndex: 1,
        explanation: 'Under the Uttaranchal (Alteration of Name) Act, 2006, the state was renamed Uttarakhand effective 1 January 2007.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who served as the FIRST Chief Minister and FIRST Governor of newly formed Uttaranchal in November 2000?',
        options: [
          'N.D. Tiwari and Aziz Qureshi',
          'Nityanand Swami (CM) and Surjit Singh Barnala (Governor)',
          'B.S. Koshyari and Sudarshan Agarwal',
          'B.C. Khanduri and Margaret Alva',
        ],
        correctOptionIndex: 1,
        explanation: 'Nityanand Swami took oath as first interim CM and Surjit Singh Barnala as first Governor on 9 November 2000.',
        difficulty: 'foundation',
      },
      {
        stem: 'What immediate policy spark in July–August 1994 ignited widespread student and citizen mobilization across Garhwal and Kumaon?',
        options: [
          'Announcement of a 27% OBC reservation quota in UP hills without accounting for the tiny resident OBC demographic profile in the mountains',
          'A ban on wheat cultivation',
          'Annexation of Dehradun into Himachal Pradesh',
          'Closure of Nainital Lake',
        ],
        correctOptionIndex: 0,
        explanation: 'Applying a flat 27% OBC quota across hill districts where general-category hill residents faced high unemployment sparked acute fear of marginalization and galvanized existing statehood grievances.',
        difficulty: 'standard',
      },
      {
        stem: 'Where did martyrs Yashodhar Banzwal and Rajesh Rawat lose their lives during a statehood fast protest on 10 November 1995?',
        options: ['Shriyantra Tapu (Alaknanda river, Srinagar)', 'Haldwani railway yard', 'Pithoragarh fort', 'Roorkee canal'],
        correctOptionIndex: 0,
        explanation: 'Police crackdown on activists camped at Shriyantra Tapu island in Srinagar Garhwal on 10 November 1995 killed Yashodhar Banzwal and Rajesh Rawat.',
        difficulty: 'standard',
      },
      {
        stem: 'Which woman statehood leader was killed in the 2 September 1994 Mussoorie Jhulaghar police firing?',
        options: ['Hansa Dhanai and Belmati Chauhan', 'Gaura Devi', 'Bishni Devi Sah', 'Kunti Verma'],
        correctOptionIndex: 0,
        explanation: 'Women protesters played an extraordinary frontline role in 1994; Hansa Dhanai and Belmati Chauhan were among those shot dead in Mussoorie.',
        difficulty: 'standard',
      },
      {
        stem: 'Which 2001–2009 commission examined permanent capital selection for Uttarakhand (later succeeded by Bhararisain/Gairsain summer capital declaration in 2020)?',
        options: ['Kaushik Commission', 'Virendra Dixit Commission', 'Mandal Commission', 'Kothari Commission'],
        correctOptionIndex: 1,
        explanation: 'The Justice Virendra Dixit Commission studied capital options (Dehradun vs Gairsain) after state formation.',
        difficulty: 'standard',
      },
      {
        stem: 'Which early Kumaoni veteran communist leader advocated a distinct hill autonomy unit as far back as 1952, while Sridev Suman raised the issue around the 1938 Srinagar Congress?',
        options: ['P.C. Joshi', 'Mola Ram', 'Lakshmi Chand', 'Proby Cautley'],
        correctOptionIndex: 0,
        explanation: 'Communist leader Puran Chand Joshi (from Almora) voiced autonomous hill statehood ideas in 1952 following early cultural assertions in 1938.',
        difficulty: 'advanced',
      },
      {
        stem: 'Why was the participation of Uttarakhand\'s hill women and ex-servicemen uniquely decisive in sustaining the 1994 movement?',
        options: [
          'Women (traditionally active in Chipko/anti-liquor movements) and disciplined ex-servicemen provided vast non-partisan grassroots turnout across every village',
          'Because only Dehradun residents participated',
          'Because women prohibited public marches',
          'Because it was an armed military coup',
        ],
        correctOptionIndex: 0,
        explanation: 'Decades of Chipko and Nasha Nahi Rozgar activism gave hill women formidable grassroots leadership that unified society across party lines.',
        difficulty: 'standard',
      },
      {
        stem: 'What was "Kashi Singh Airy\'s" notable contribution inside the UP Legislative Assembly during the statehood struggle?',
        options: [
          'As a UKD MLA, he repeatedly tabled/presented private/statehood resolutions inside the UP Vidhan Sabha (including the symbolic Gairsain blueprint)',
          'He served as Governor of Uttar Pradesh',
          'He signed the 1815 Treaty of Sugauli',
          'He opposed the creation of Uttarakhand',
        ],
        correctOptionIndex: 0,
        explanation: 'UKD leader Kashi Singh Airy championed the Uttarakhand statehood resolution directly on the floor of the Uttar Pradesh Assembly.',
        difficulty: 'standard',
      },
    ],
  },
];
