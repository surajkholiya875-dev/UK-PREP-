import { TopicContentPackage } from './types';

export const UTTARAKHAND_HISTORY_PART_A: TopicContentPackage[] = [
  {
    topicTitle: 'Prehistoric Rock Shelters & Archaeological Remains in Uttarakhand',
    materialTitle: 'Prehistoric Rock Shelters & Archaeological Remains in Uttarakhand — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Prehistoric Uttarakhand',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Prehistoric Rock Shelters & Archaeological Remains in Uttarakhand

## 1. Paleolithic & Mesolithic Traces
Early human stone tools (choppers, hand-axes, flake implements) discovered in terraces along the **Alaknanda (Srinagar)**, **Yamuna**, **Western Ramganga**, and **Kalsi** indicate Stone Age habitation in Uttarakhand's valleys.

## 2. Famous Painted Rock Shelters (*Shailashraya*)
| Site | District / River Bank | Discovery & Motifs |
|---|---|---|
| **Lakhudiyar ("One Lakh Caves")** | **Almora** (Dalband, **Suyal river** bank) | Discovered **1968** by **M.P. Joshi**; human figures holding hands in **group dance**, animals (fox, lizard), wavy lines in **white, black, red ochre** |
| **Gwarkhya Cave (Udyar)** | **Chamoli** (Dungri village, **Alaknanda** bank) | **30+ coloured figures** (humans, sheep, deer, barasingha) in vibrant ochre/black/pink; highlighted by **Rakesh Bhatt** |
| **Kimni Cave** | **Chamoli** (near Tharali, Pindar valley) | White-painted animal and weapon/tool motifs |
| **Lwe Thap** | **Almora** | Red paintings showing humans hunting and holding hands |
| **Phadka-Nauli & Petshal** | **Almora** | Discovered by **Yashodhar Mathpal**; dancing human stick figures |
| **Hudali** | **Uttarkashi** | Blue-coloured rock paintings reported in Yamuna–Tons area |
| **Banakot** | **Pithoragarh** | **8 copper anthropomorphic figures** (Copper Hoard) |

## 3. Megaliths, Burials & Painted Grey Ware (PGW)
- **Malari (Chamoli):** Excavated by **Garhwal University (K.P. Nautiyal & B.M. Khanduri)**; cave burials with horse skeleton, black/red ware, and a **5.2 kg gold mask** (associated with early Iron/Protohistoric Himalayan transhumant cultures; exact ethnic attribution remains scholarly debate).
- **Cup-Marks (*Oakhali*):** Pitted rock carvings at Devi Dhura (Champawat), Dwarahat (Almora), and Chandeshwar.
- **PGW & Copper Hoards:** **Bahadarabad** (Haridwar — Ochre Coloured Pottery & Copper Hoard), **Thapli** (Tehri) & **Purola** (Uttarkashi — Painted Grey Ware + brick altar/Syena-chiti).

## 4. Key Revision Takeaways
- **Lakhudiyar** (Almora, Suyal river, 1968, M.P. Joshi) is Uttarakhand's landmark rock-art site.
- **Gwarkhya & Malari** = Chamoli; **Banakot** (8 copper figures) = Pithoragarh; **Bahadarabad** = Haridwar.
`,
    mcqs: [
      {
        stem: 'On the bank of which river in Almora district is the famous prehistoric rock-shelter site of Lakhudiyar located?',
        options: ['Kosi', 'Suyal', 'Gomti', 'Alaknanda'],
        correctOptionIndex: 1,
        explanation: 'Lakhudiyar sits at Dalband on the bank of the Suyal river in Almora district.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who is credited with the landmark archaeological discovery of the Lakhudiyar painted rock shelters in 1968?',
        options: ['Yashodhar Mathpal', 'M.P. Joshi (Maheshwar Prasad Joshi)', 'Atkinson', 'G.W. Traill'],
        correctOptionIndex: 1,
        explanation: 'Historian-archaeologist Dr. M.P. Joshi discovered Lakhudiyar in 1968 (later further documented alongside Yashodhar Mathpal).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which famous prehistoric cave near Dungri village along the Alaknanda in Chamoli depicts over 30 figures of humans, sheep, and deer?',
        options: ['Kimni Cave', 'Gwarkhya Cave (Udyar)', 'Lwe Thap', 'Petshal'],
        correctOptionIndex: 1,
        explanation: 'Gwarkhya Cave in Chamoli depicts humans, sheep, deer, and wavy motifs in ochre, black, and pink pigments.',
        difficulty: 'foundation',
      },
      {
        stem: 'From which site in Chamoli district were ancient cave burials containing a horse skeleton and a 5.2 kg gold funerary mask unearthed?',
        options: ['Joshimath', 'Malari', 'Mana', 'Karnaprayag'],
        correctOptionIndex: 1,
        explanation: 'Excavations at Malari (Niti valley, Chamoli) by HNB Garhwal University uncovered burials with pottery, horse remains, and a 5.2 kg gold mask.',
        difficulty: 'foundation',
      },
      {
        stem: 'Where in Uttarakhand were eight prehistoric Copper Hoard anthropomorphic figures discovered?',
        options: ['Banakot (Pithoragarh)', 'Roorkee (Haridwar)', 'Purola (Uttarkashi)', 'Kalsi (Dehradun)'],
        correctOptionIndex: 0,
        explanation: 'Eight copper anthropomorphic figures were unearthed at Banakot in Pithoragarh district.',
        difficulty: 'standard',
      },
      {
        stem: 'What are the characteristic colours predominantly used by prehistoric artists at Lakhudiyar?',
        options: [
          'Synthetic neon green and blue',
          'White, black, and red ochre (geru)',
          'Metallic silver leaf',
          'Turquoise oil paint',
        ],
        correctOptionIndex: 1,
        explanation: 'Natural mineral pigments—red ochre (hematite), black charcoal/manganese, and white lime/kaolin—were used at Lakhudiyar.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which motif is prominently painted on the rock wall of Lakhudiyar?',
        options: [
          'Steam locomotives',
          'Rows of stick-like human figures holding hands in a group dance alongside animals and wavy lines',
          'Ashokan Brahmi edicts',
          'Islamic calligraphy',
        ],
        correctOptionIndex: 1,
        explanation: 'Lakhudiyar famously depicts stick-shaped humans linked hand-in-hand in group dance, alongside foxes, lizards, and geometric waves.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which scholar systematically studied and excavated Kumaon rock-art sites such as Phadka-Nauli and Petshal?',
        options: ['Yashodhar Mathpal', 'Rahul Sankrityayan', 'Badri Datt Pande', 'Jim Corbett'],
        correctOptionIndex: 0,
        explanation: 'Archaeologist Dr. Yashodhar Mathpal documented Phadka-Nauli, Petshal, and several Kumaon rock-art sites.',
        difficulty: 'standard',
      },
      {
        stem: 'In which district is the Hudali rock shelter, noted for rare blue-tinted prehistoric paintings, situated?',
        options: ['Almora', 'Uttarkashi', 'Champawat', 'Udham Singh Nagar'],
        correctOptionIndex: 1,
        explanation: 'Hudali in Uttarkashi district is notable for blue-pigmented rock paintings.',
        difficulty: 'standard',
      },
      {
        stem: 'Bahadarabad in Haridwar district is archaeologically important for yielding which protohistoric ceramic and metallic assemblage?',
        options: [
          'Roman amphorae',
          'Ochre Coloured Pottery (OCP) and Copper Hoard implements',
          'Mughal glazed tiles',
          'Palaeo-Christian crosses',
        ],
        correctOptionIndex: 1,
        explanation: 'Bahadarabad (excavated in the 1950s along the Ganga canal) revealed Copper Hoard tools alongside Ochre Coloured Pottery (OCP).',
        difficulty: 'standard',
      },
      {
        stem: 'Which Painted Grey Ware (PGW) and brick-altar (*Syena-chiti*) site lies in the Yamuna/Kamal valley of Uttarkashi?',
        options: ['Purola', 'Malari', 'Lakhudiyar', 'Banakot'],
        correctOptionIndex: 0,
        explanation: 'Excavations at Purola (Uttarkashi) revealed PGW pottery and an early brick altar structure.',
        difficulty: 'advanced',
      },
      {
        stem: 'What are "Cup-marks" (*Oakhali*) documented by archaeologists (such as Rivett-Carnac) at Chandeshwar and Devi Dhura?',
        options: [
          'Natural glacial potholes in riverbeds',
          'Circular hemispherical depressions carved into rocks/boulders, associated with megalithic/ritual traditions',
          'Modern concrete road markers',
          'Salt extraction pans',
        ],
        correctOptionIndex: 1,
        explanation: 'Ancient carved cup-marks on rocks across Almora and Champawat reflect prehistoric/megalithic ritual or astronomical traditions, though exact meanings remain debated.',
        difficulty: 'advanced',
      },
      {
        stem: 'Kimni Cave with white-painted animal and weapon depictions lies near Tharali in which district?',
        options: ['Chamoli', 'Dehradun', 'Udham Singh Nagar', 'Nainital'],
        correctOptionIndex: 0,
        explanation: 'Kimni village cave lies in Chamoli district in the Pindar valley.',
        difficulty: 'standard',
      },
      {
        stem: 'Why do scholars avoid assigning the Malari cave burials with absolute certainty to a single Vedic or later historical dynasty?',
        options: [
          'Absence of deciphered written inscriptions in the Malari burial cave leaves ethnic attribution tentative despite clear radiocarbon/typological protohistoric links',
          'Malari is a submerged marine wreck',
          'Gold masks were forged in 1995',
          'Malari lies inside Uttar Pradesh',
        ],
        correctOptionIndex: 0,
        explanation: 'While Malari clearly represents an early trans-Himalayan agro-pastoral/metal-using culture, attributing it definitively to a named literary tribe remains scholarly conjecture.',
        difficulty: 'application',
      },
      {
        stem: 'Which pair matches rock-art site and district INCORRECTLY?',
        options: [
          'Lakhudiyar – Almora',
          'Gwarkhya Cave – Chamoli',
          'Lwe Thap – Almora',
          'Hudali – Pithoragarh',
        ],
        correctOptionIndex: 3,
        explanation: 'Hudali is located in Uttarkashi district, whereas Lakhudiyar and Lwe Thap are in Almora and Gwarkhya is in Chamoli.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Vedic References, Kunindas & Yaudheyas of Uttarakhand',
    materialTitle: 'Vedic References, Kunindas & Yaudheyas of Uttarakhand — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Vedic Uttarakhand, Kunindas & Yaudheyas',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Vedic References, Kunindas & Yaudheyas of Uttarakhand

## 1. Literary & Puranic References
- **Vedic & Upanishadic Tradition:** Aitareya Brahmana refers to **Uttarakurus**; later texts mention Garhwal–Kumaon hermitages (*Badrikashram*, *Kanvashram* on Malini river near Kotdwar, associated with **Shakuntala–Bharata**).
- **Skanda Purana:** Divided Himalayan sacred geography into **Kedarkhand** (Garhwal) and **Manaskhand** (Kumaon), separated around Nandadevi/Badhan borders.
- **Mahabharata (Vanaparva):** Calls this mountain tract **Kulinda / Pulinda** land ruled by **Subahu** (capital often placed around Subahupura / Srinagar).
- *Note on Disputed Identification:* Traditional associations linking every regional river or sage explicitly to exact Rigvedic verses are devotional traditions rather than strictly verifiable epigraphic proof.

## 2. The Kunindas (Kulindas) — Earliest Well-Documented Political Power
- **Period & Extent:** ~2nd century BCE to 3rd century CE across Uttarakhand, Himachal, and northern Haryana/Punjab foothills.
- **Epigraphic & Numismatic Evidence:** Five inscriptions at **Bharhut** mention Kunindas, and thousands of silver/copper coins reveal three major coin series:
  1. **Amoghbhuti Type:** Finest silver & copper coins bearing Brahmi and Kharoshthi legends (*"Rajnah Kunindasya Amoghbhutisya Maharajasa"*) with **deer, Lakshmi, Bodhi tree/chaitya** motifs—**Amoghbhuti** was the most illustrious Kuninda ruler (1st century BCE).
  2. **Almora Type:** Heavy copper coins found in Katyur/Almora bearing rulers like **Sivadatta, Sivapalita, Haridatta** (or Margabhuti).
  3. **Chhatreshwara Type:** Copper coins (~2nd–3rd century CE) depicting **Shiva** holding a trident (*"Bhagavata Chatreshwara Mahatmanah"*), indicating Shaivite devotion after Kusana pressure.

## 3. The Yaudheyas & Associated Polities
- **Yaudheyas:** Martial republican confederacy (*Ayudhajivi Sangha*) active in **Jaunsar-Bawar (Dehradun), Lansdowne (Pauri), and eastern plains**, attested by copper coins with Kartikeya/peacock motifs; fought Kusanas and later submitted to Samudragupta (Prayag Prashasti).
- **Other Regional Finds:** **Kushan** coins at Muni-ki-Reti, Virbhadra (Rishikesh), Moradhwaj (Kotdwar), and **Govishana** (Kashipur); **Kartripura** mentioned in Samudragupta's Allahabad inscription.

## 4. Key Revision Takeaways
- **Skanda Purana:** **Kedarkhand** = Garhwal; **Manaskhand** = Kumaon.
- **Kunindas** are the earliest historically attested ruling power across Uttarakhand; **Amoghbhuti** issued bilingual Brahmi–Kharoshthi silver coins.
- **Yaudheya** coins occur in Jaunsar-Bawar (Dehradun) and Lansdowne (Pauri).
`,
    mcqs: [
      {
        stem: 'In the Skanda Purana, by which two regional names are modern Garhwal and Kumaon respectively designated?',
        options: [
          'Manaskhand (Garhwal) and Kedarkhand (Kumaon)',
          'Kedarkhand (Garhwal) and Manaskhand (Kumaon)',
          'Kumaon-desh and Doon-desh',
          'Uttarakuru and Magadha',
        ],
        correctOptionIndex: 1,
        explanation: 'The Skanda Purana divides Uttarakhand\'s sacred geography into Kedarkhand (Garhwal) and Manaskhand (Kumaon).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which is the earliest historically well-attested indigenous ruling dynasty/janapada of Uttarakhand, known primarily through rich coinage?',
        options: ['Chand Dynasty', 'Kuninda (Kulinda) Dynasty', 'Panwar Dynasty', 'Katyuri Dynasty'],
        correctOptionIndex: 1,
        explanation: 'The Kunindas (approx. 2nd century BCE – 3rd century CE) are Uttarakhand\'s earliest historically attested polity through silver and copper coin hoards.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who was the most powerful and famous ruler of the Kuninda dynasty, whose silver coins bear legends in both Brahmi and Kharoshthi scripts?',
        options: ['Sivadatta', 'Amoghbhuti', 'Vasudeva', 'Lalitashur'],
        correctOptionIndex: 1,
        explanation: 'Amoghbhuti issued fine bilingual (Brahmi & Kharoshthi) silver coins inscribed "Rajnah Kunindasya Amoghbhutisya Maharajasa".',
        difficulty: 'foundation',
      },
      {
        stem: 'Which motifs characteristically appear on Kuninda silver coins of Amoghbhuti?',
        options: [
          'Persian fire altar and Arabic script',
          'A deer (stag) facing a female figure (Lakshmi) holding a lotus, along with chaitya/tree-in-railing symbols',
          'Roman emperor portraits',
          'British East India Company coat of arms',
        ],
        correctOptionIndex: 1,
        explanation: 'Amoghbhuti silver drachms depict Goddess Lakshmi standing beside a deer/stag alongside auspicious hill and tree symbols.',
        difficulty: 'standard',
      },
      {
        stem: 'On the banks of which river near Kotdwar (Pauri Garhwal) is ancient Kanvashram—traditionally linked with Shakuntala and Emperor Bharata—situated?',
        options: ['Alaknanda', 'Malini river', 'Kosi river', 'Kali river'],
        correctOptionIndex: 1,
        explanation: 'Kanvashram lies along the Malini river near Kotdwar in Pauri Garhwal.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which three major types classify Kuninda coinage recovered across Uttarakhand?',
        options: [
          'Gold Dinar, Rupee, Anna',
          'Amoghbhuti type, Almora type, and Chhatreshwara type',
          'Punch-marked Maurya, Gupta Archer, and Tughlaq Token',
          'Timasha, Tanka, and Jital',
        ],
        correctOptionIndex: 1,
        explanation: 'Numismatists classify Kuninda currency into Amoghbhuti, Almora (Sivadatta/Sivapalita/Haridatta), and Chhatreshwara (Shaivite) coin series.',
        difficulty: 'standard',
      },
      {
        stem: 'The "Chhatreshwara" series of Kuninda copper coins honours which Hindu deity holding a trident?',
        options: ['Vishnu', 'Shiva', 'Brahma', 'Indra'],
        correctOptionIndex: 1,
        explanation: 'Inscribed "Bhagavata Chatreshwara Mahatmanah", these late Kuninda coins depict Lord Shiva with a trident.',
        difficulty: 'standard',
      },
      {
        stem: 'In which regions of Uttarakhand have coins of the martial Yaudheya republic predominantly been recovered?',
        options: [
          'Jaunsar-Bawar (Kalsi/Chakrata, Dehradun) and Lansdowne/Kaladanda (Pauri Garhwal)',
          'Only Pithoragarh high glacier passes',
          'Only Nainital lakebed',
          'Champawat exclusively',
        ],
        correctOptionIndex: 0,
        explanation: 'Yaudheya copper coin hoards bearing Kartikeya and peacock motifs have been recovered prominently in Jaunsar-Bawar and Lansdowne.',
        difficulty: 'standard',
      },
      {
        stem: 'What name does the Mahabharata apply to the early hill kingdom/people of Garhwal–Kumaon under King Subahu?',
        options: ['Kalinga', 'Kulinda (Kuninda)', 'Vatsa', 'Avanti'],
        correctOptionIndex: 1,
        explanation: 'The Mahabharata describes the Kulindas (and Subahu as king of Kulinda-visaya) in the central Himalayan region.',
        difficulty: 'standard',
      },
      {
        stem: 'Ancient "Govishana", visited later by Xuanzang and yielding Kushan bricks and coins in Uttarakhand, corresponds to which modern town?',
        options: ['Kashipur (Udham Singh Nagar)', 'Almora', 'Uttarkashi', 'Bageshwar'],
        correctOptionIndex: 0,
        explanation: 'Ancient Govishana (Ujjaini mound) is identified with modern Kashipur in Udham Singh Nagar.',
        difficulty: 'standard',
      },
      {
        stem: 'Why are Amoghbhuti\'s silver coins struck in BOTH Brahmi and Kharoshthi scripts historically significant?',
        options: [
          'They indicate brisk commercial trade bridging Gangetic Brahmi regions and northwestern Indo-Greek / Kharoshthi markets',
          'They prove Kunindas ruled Sri Lanka',
          'They were minted in London',
          'They show Kharoshthi originated in Nainital',
        ],
        correctOptionIndex: 0,
        explanation: 'Bilingual legends enabled circulation across both northern Indian Brahmi users and Indo-Greek/Saka-Kharoshthi trade corridors of Punjab/Gandhara.',
        difficulty: 'application',
      },
      {
        stem: 'Which 4th-century CE Gupta inscription mentions the Himalayan frontier kingdom of "Kartripura" (often associated with Uttarakhand–Himachal)?',
        options: [
          'Kalsi Rock Edict',
          'Samudragupta\'s Prayag Prashasti (Allahabad Pillar Inscription)',
          'Bageshwar Katyuri Plate',
          'Lakhamandal Prashasti',
        ],
        correctOptionIndex: 1,
        explanation: 'Harisena\'s Prayag Prashasti lists Kartripura among frontier kingdoms paying tribute to Samudragupta.',
        difficulty: 'standard',
      },
      {
        stem: 'Which deity appears on the famous Yaudheya coins (often accompanied by a peacock) symbolizing martial valour?',
        options: ['Kartikeya (Skanda)', 'Ganesha', 'Surya', 'Varuna'],
        correctOptionIndex: 0,
        explanation: 'Yaudheya coins frequently portray six-headed or single-headed Kartikeya (Brahmanyadeva Kumara) with a peacock.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which ancient archaeological site in Rishikesh yielded Kushan-period brick structures and coins?',
        options: ['Virbhadra (and Muni-ki-Reti)', 'Malari', 'Lakhudiyar', 'Champawat'],
        correctOptionIndex: 0,
        explanation: 'Excavations at Virbhadra (Rishikesh) and Moradhwaj (Kotdwar) uncovered Kushan-era residential and coin layers.',
        difficulty: 'advanced',
      },
      {
        stem: 'When evaluating ancient Vedic or Puranic accounts of Uttarakhand, how do historians distinguish confirmed history from traditional lore?',
        options: [
          'Epigraphic inscriptions, archaeological strata, and dated coins (like Kuninda/Kalsi) provide verifiable chronology, whereas uncorroborated Puranic genealogies are treated as literary tradition',
          'Every mythological verse is treated as an exact census date',
          'Coins and inscriptions are ignored completely',
          'Only 20th-century newspapers count as ancient sources',
        ],
        correctOptionIndex: 0,
        explanation: 'Historical methodology cross-checks literary traditions (Skanda Purana/Mahabharata) against material archaeology, numismatics, and inscriptions.',
        difficulty: 'application',
      },
    ],
  },
  {
    topicTitle: 'Ashokan Rock Edict at Kalsi, Kartarpur & Katyuri Dynasty',
    materialTitle: 'Ashokan Rock Edict at Kalsi, Kartarpur & Katyuri Dynasty — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Kalsi Edict, Kartarpur & Katyuri Era',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Ashokan Rock Edict at Kalsi, Kartarpur & Katyuri Dynasty

## 1. Ashokan Major Rock Edict at Kalsi (Dehradun)
- **Date & Location:** Installed by Mauryan Emperor **Ashoka** (~257 BCE) on a white quartz boulder at **Kalsi** near the confluence of the **Yamuna and Tons** rivers (Dehradun).
- **Script & Language:** **Brahmi script** and **Prakrit language** (unlike northwestern Kharoshthi edicts).
- **Artistic & Textual Highlight:** Contains the full set of **14 Major Rock Edicts**, etched with a line drawing of an **elephant** labelled **"Gajatame"** ("Best of Elephants") and refers to the people here as *Pulinda/Aparanta* regions; preaches *Dhamma*, non-violence, and medical care for humans & animals. *(Note: local stone is preserved by ASI).*

## 2. Post-Gupta Kingdoms: Kartripura, Brahmapura, Pauravas & Lakhamandal
- **Kartripura:** Mentioned in Samudragupta's Prayag Prashasti (4th century CE) as a frontier state; scholars debate whether its nucleus lay in Garhwal–Kumaon (Joshimath/Baijnath area) or stretched across HP–Uttarakhand.
- **Yaudheyas & Varshaganya / Chhagalesa & Lakhamandal:** **Lakhamandal Prashasti** (Dehradun, ~5th–7th century CE) records **Princess Ishvara** (daughter of Bhaskara Varman of Singhapura, married to Chandragupta of Jalandhara) building a Shiva temple.
- **Paurava Dynasty of Brahmapura:** Attested by the **Taleshwar Copper Plates** (Almora, ~6th–7th century CE) naming rulers **Vishnuvarman, Vrishavarman, Agnivarman, Dyutivarman**; Xuanzang (7th century) visited **Po-lo-hih-mo-pu-lo (Brahmapura)** and **Govishana** (Kashipur) and described **Suvarnagotra** (*Strirajya*).
- **Gopeshwar Trident Inscription & Barahat (Uttarkashi):** Record **Naga** ruler **Ganapati Naga / Skandanaga** and **Ashokachalla** (12th-century Khasa/Malla invader from western Nepal!).

## 3. The Katyuri Dynasty (First Major Historical Unified Empire of Uttarakhand)
- **Origins & Capitals:** Reigned ~7th/8th to 11th century CE. Initially ruled from **Kartikeyapura (modern Joshimath, Chamoli)** and later shifted their capital to **Baijnath (Katyur Valley, Bageshwar)**.
- **Founder & Dynastic Families:** **Basantadeva (Vasantanadeva)** founded the early Kartikeyapura line (around 700 CE); later families recorded in **Pandukeshwar, Bageshwar, and Taleshwar/Baijnath copper plates** include **Nimbar**, **Ishtaganadeva**, **Lalitashuradeva** (most prolific copper-plate issuer), **Bhudeva**, **Saloaditya**, **Ichchhatadeva**, and **Suhikshadeva**.
- **Administration & Culture:** Adopted imperial titles (*Paramabhattaraka Maharajadhiraja Parameshvara*); officials included *Mahasamanta*, *Prantapala* (border guards), *Kottapala* (fort commanders). Known as great builders of stone **Nagara-style temples** across **Jageshwar, Baijnath, Katarmal, Bageshwar, Dwarahat, and Joshimath**; often noted as Uttarakhand's **"Golden Age" of early medieval architecture**.
- **Decline:** Fragmented into rival petty branches (**Doti, Askot, Pali, Sira, Baramandal, Baijnath**) by the 11th–12th centuries, and **Birdeo (Viradeva)** is depicted in folk traditions (*Jagar* lore) as the tyrannical last Katyuri ruler before **Chand** and **Panwar** rise. *(Historians treat Birdeo legends cautiously as oral memory rather than epigraphically dated fact).*

## 4. Key Revision Takeaways
- **Kalsi Rock Edict (Dehradun):** **Brahmi script, Prakrit language**, elephant sketch *"Gajatame"*, Yamuna–Tons confluence.
- **Taleshwar Plates** = Pauravas of Brahmapura; **Lakhamandal** = Princess Ishvara.
- **Katyuris:** Founded by **Basantadeva**; capitals **Kartikeyapura (Joshimath)** → **Baijnath**; golden age of stone temple architecture (**Jageshwar, Katarmal, Baijnath**).
`,
    mcqs: [
      {
        stem: 'In which script and language is Emperor Ashoka\'s Major Rock Edict at Kalsi (Dehradun) inscribed?',
        options: [
          'Kharoshthi script and Sanskrit language',
          'Brahmi script and Prakrit language',
          'Greek script and Pali language',
          'Devanagari script and Kumaoni',
        ],
        correctOptionIndex: 1,
        explanation: 'The Kalsi Rock Edict (~257 BCE) uses the Ashokan Brahmi script and Prakrit language.',
        difficulty: 'foundation',
      },
      {
        stem: 'Near the confluence of which two rivers is the Ashokan Rock Edict at Kalsi situated?',
        options: ['Ganga and Alaknanda', 'Yamuna and Tons', 'Kali and Gori', 'Kosi and Suyal'],
        correctOptionIndex: 1,
        explanation: 'The quartz rock carrying Ashoka\'s 14 edicts sits at Kalsi near the confluence of the Yamuna and Tons rivers.',
        difficulty: 'foundation',
      },
      {
        stem: 'What engraved animal figure accompanied by the label "Gajatame" appears on the Kalsi Ashokan rock boulder?',
        options: ['A lion', 'An elephant', 'A bull', 'A deer'],
        correctOptionIndex: 1,
        explanation: 'An outline figure of an elephant inscribed "Gajatame" ("Best of Elephants") is etched beside the text at Kalsi.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who is historically recognized through epigraphic records as the founder of the Katyuri dynasty at Kartikeyapura?',
        options: ['Somchand', 'Basantadeva (Vasantanadeva)', 'Ajaypal', 'Lalitashuradeva'],
        correctOptionIndex: 1,
        explanation: 'Basantadeva founded the Kartikeyapura Katyuri line around the early 8th century CE, as attested in the Bageshwar and Pandukeshwar inscriptions.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which two sites served successively as the main capitals of the Katyuri dynasty?',
        options: [
          'Champawat and Almora',
          'Kartikeyapura (Joshimath) and Baijnath (Katyur valley)',
          'Srinagar and Tehri',
          'Haridwar and Kashipur',
        ],
        correctOptionIndex: 1,
        explanation: 'The Katyuris first ruled from Kartikeyapura (identified with Joshimath in Chamoli) before shifting their seat to Baijnath in Bageshwar.',
        difficulty: 'foundation',
      },
      {
        stem: 'The Taleshwar Copper Plates (Almora) reveal the existence of which post-Gupta ruling house of Uttarakhand?',
        options: [
          'Paurava dynasty of Brahmapura',
          'Chand dynasty of Champawat',
          'Panwar dynasty of Garhwal',
          'Gorkha Thapa governors',
        ],
        correctOptionIndex: 0,
        explanation: 'The Taleshwar plates record Paurava rulers (Vishnuvarman, Dyutivarman, Agnivarman) ruling from Brahmapura.',
        difficulty: 'standard',
      },
      {
        stem: 'Who built the Lakhamandal stone Shiva temple according to the famous Lakhamandal Prashasti of Dehradun?',
        options: [
          'Rani Karnavati',
          'Princess Ishvara (of Singhapura royal line)',
          'Adi Shankaracharya',
          'Lalitashuradeva',
        ],
        correctOptionIndex: 1,
        explanation: 'The Lakhamandal Prashasti records Princess Ishvara constructing a temple to Shiva in memory of her late husband Chandragupta of Jalandhara.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Katyuri ruler is most frequently attested in Pandukeshwar copper-plate land grants and regarded as one of the greatest monarchs of the Kartikeyapura line?',
        options: ['Lalitashuradeva', 'Rudra Chand', 'Sudarshan Shah', 'Amoghbhuti'],
        correctOptionIndex: 0,
        explanation: 'Lalitashuradeva (mid-9th century CE) issued multiple Pandukeshwar and Kandara copper plates granting land to shrines including Badrikashram.',
        difficulty: 'standard',
      },
      {
        stem: 'In Katyuri administration, what was the specific responsibility of the officer titled "Prantapala"?',
        options: [
          'Guarding frontier passes and border territories',
          'Collecting temple flowers',
          'Minting copper coinage',
          'Conducting census of cattle only',
        ],
        correctOptionIndex: 0,
        explanation: 'Prantapalas guarded frontier borders and mountain passes, while Narapatis managed river/ferry crossings and Kottapalas commanded forts.',
        difficulty: 'standard',
      },
      {
        stem: 'Why is the Katyuri period widely hailed as the "Golden Age" of early medieval temple architecture in Uttarakhand?',
        options: [
          'They patronized hundreds of enduring Nagara-style stone temples at Jageshwar, Baijnath, Katarmal, and Dwarahat',
          'They introduced Mughal marble domes across Garhwal',
          'They built concrete hydro dams',
          'They destroyed all stone shrines',
        ],
        correctOptionIndex: 0,
        explanation: 'Katyuri-era artisans built iconic stone Rekha-prasada/Nagara temple complexes across Kumaon and Garhwal.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which 7th-century Chinese Buddhist pilgrim documented visiting "Po-lo-hih-mo-pu-lo" (Brahmapura) and "Govishana" (Kashipur)?',
        options: ['Faxian (Fa-Hien)', 'Xuanzang (Hiuen Tsang)', 'I-Tsing', 'Marco Polo'],
        correctOptionIndex: 1,
        explanation: 'Xuanzang visited Govishana and Brahmapura during Harsha\'s era (c. 634–640 CE), noting Buddhist monasteries and surrounding hill polities.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which 12th-century ruler of western Nepal\'s Khasa/Malla lineage left an inscription on the Gopeshwar Trident recording conquest in Garhwal–Kumaon?',
        options: ['Ashokachalla', 'Prithvi Narayan Shah', 'Somchand', 'Ajaypal'],
        correctOptionIndex: 0,
        explanation: 'King Ashokachalla of Dullu/Khasa-Malla kingdom inscribed his victory record on the Gopeshwar iron-brass trident in Chamoli (~1191 CE) alongside Krachalladeva\'s Baleshwar plate (1223 CE).',
        difficulty: 'advanced',
      },
      {
        stem: 'How do historians treat folk traditions about "Viradeva" (Birdeo) as the oppressive last Katyuri king?',
        options: [
          'As valuable oral Jagar memory reflecting late-Katyuri fragmentation and misrule, though lacking direct contemporary epigraphic confirmation',
          'As an exact 100% radiocarbon-dated inscription',
          'As a British railway report',
          'As a reference to Somchand\'s grandson',
        ],
        correctOptionIndex: 0,
        explanation: 'While Katyuri fragmentation into petty principalities (Askot, Doti, Pali, Sira) is historically documented, Birdeo\'s specific story comes from folk Jagar ballads rather than contemporary copper plates.',
        difficulty: 'application',
      },
      {
        stem: 'Which Katyuri king built the famous Bhudeva-associated temples and strongly patronized Brahmanical Shaivite/Vaishnavite shrines while opposing Buddhism per tradition?',
        options: ['Bhudeva', 'Amoghbhuti', 'Pradyumna Shah', 'Kalyan Chand'],
        correctOptionIndex: 0,
        explanation: 'King Bhudeva (son of Lalitashuradeva) appears in the Bageshwar inscription as a staunch champion of Brahmanical orthodoxy.',
        difficulty: 'advanced',
      },
      {
        stem: 'Why was Kalsi chosen by Emperor Ashoka as the site for a Major Rock Edict?',
        options: [
          'It lay at a busy Himalayan river-valley trade junction (Yamuna–Tons) gateway leading toward inner mountain settlements and Silk/Tibet corridors',
          'It was India\'s main oceanic seaport',
          'It had the highest snow peak in Asia',
          'Ashoka\'s imperial capital was shifted from Pataliputra to Kalsi',
        ],
        correctOptionIndex: 0,
        explanation: 'Ashoka placed Major Rock Edicts along major imperial frontier routes and trade junctions; Kalsi stood at the western Himalayan gateway.',
        difficulty: 'application',
      },
    ],
  },
  {
    topicTitle: 'Origin, Expansion & Administration of the Chand Dynasty (Kumaon)',
    materialTitle: 'Origin, Expansion & Administration of the Chand Dynasty (Kumaon) — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Chand Dynasty of Kumaon',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Origin, Expansion & Administration of the Chand Dynasty (Kumaon)

## 1. Origin Debate & Early Rule (Champawat Seat)
- **Disputed Founder & Chronology:** Traditional chronicles (Atkinson / Badri Datt Pande) credit **Somchand** (a Chandravanshi prince from Jhusi/Prayag, ~10th century, or per **K.P. Nautiyal / M.P. Joshi** possibly 10th–11th century vs **Thohar Chand** in Mughal-era *Ain-i-Akbari* / **1261 CE**). Modern epigraphy tends to place **Thohar Chand / early Champawat consolidation** in the 13th–14th centuries while acknowledging **Somchand** in traditional *Vanshavali* accounts.
- **Early Structure at Champawat:** Constructed **Rajbunga Fort**; created four key noble pillars (*Chauthani* — Karki, Bora, Tadagi, Chaudhari) and **Panchayati** military–civil system (*Mahara* and *Phartyals* factions).

## 2. Major Chand Monarchs & Expansion
| Ruler | Period (approx.) | Key Achievements & Facts |
|---|---|---|
| **Garuda Gyanchand** | Late 14th c. | First Chand ruler to visit Delhi Sultanate court (**Firoz Shah Tughlaq**); granted title **"Garuda"** & **Terai-Bhabar** (*Chaurasi Mal*) rights |
| **Bharati Chand** | 15th c. | Ended subordinate tribute to Nepal's **Doti** kingdom via a celebrated **12-year war**; *Nayak* caste tradition linked in folklore to long military camps |
| **Kirti Chand** | Late 15th c. | Expanded into Baramandal, Pali, and Garhwal border |
| **Bhishma Chand & Balo Kalyan Chand** | 16th c. | Shifted capital planning from **Champawat** to central **Almora (Khagmara/Alamnagar)**, completed by **Balo Kalyan Chand** (~1563) |
| **Rudra Chand** | 1565–1597 | Contemporary of **Akbar**; founded **Rudrapur**; met Akbar at Lahore (1588); wrote Sanskrit texts (*Triveni-dharmanirnaya*, *Shyainika Shastra* on falconry); set up **Oli / Chauthan / Panch-Bisi** land classification |
| **Lakshmi Chand** | 1597–1621 | Renovated **Baghnath Temple (Bageshwar)**; fought repeated wars with Garhwal's **Man Shah**; *Nyeovali* / *Bishtali* courts |
| **Baz Bahadur Chand** | 1638–1678 | Contemporary of **Shah Jahan & Aurangzeb**; founded **Bazpur**; captured Taklakot/Danpur, suppressed Bhotia/Tibetan raids, built **Ghorakhal Golu / Ek Hathiya Naula (Pithoragarh)**, imposed *Sirti* & *Munda/Jhangora* taxes |
| **Udyot Chand & Gyan Chand II** | Late 17th c. | **Udyot Chand** built **Tripura Sundari** & **Nanda Devi** shrines in Almora; **Gyan Chand II** raided Garhwal and brought back Nanda Devi idol? (Tradition credits Baz Bahadur / Gyan Chand) |
| **Kalyan Chand IV & Mahendra Chand** | 18th c. | Faced **Rohilla invasion** (1743–44 under Ali Muhammad Khan); **Mahendra Chand** defeated by **Gorkhas** at **Hawalbagh (1790)** ending Chand rule |

## 3. Chand Administration & Taxation
- **36 Taxes (*Chhattisi*):** Diverse levies including **Jhooley** (river suspension bridge tax), **Sirti** (cash land tax from plains/Bhotias), **Koot** (grain levy), **Rakhia** (protection tax), **Mangar** (marriage/defence tax), **Ghee-kar**, **Tana/Bana** (loom tax).
- **Officials:** *Chauthani* council, *Syana/Budha* village elders, *Kamin*, *Thokdar*, *Suba/Faujdar* in Terai (*Chaurasi Mal*).

## 4. Key Revision Takeaways
- **Capital Shift:** **Champawat (Rajbunga)** → **Almora (Balo Kalyan Chand, 16th c.)**.
- **Garuda Gyanchand** met **Firoz Shah Tughlaq**; **Rudra Chand** met **Akbar** (founded Rudrapur); **Baz Bahadur Chand** founded **Bazpur**.
- **1790:** Gorkhas defeated **Mahendra Chand** at **Hawalbagh**, ending the Chand dynasty.
`,
    mcqs: [
      {
        stem: 'Which Chand ruler shifted the capital of Kumaon from Champawat to Almora?',
        options: ['Somchand', 'Balo Kalyan Chand', 'Baz Bahadur Chand', 'Mahendra Chand'],
        correctOptionIndex: 1,
        explanation: 'Initiated by Bhishma Chand, the shift of the Chand capital from Champawat to the central ridge of Almora was completed by Balo Kalyan Chand around 1563.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who was the first Chand king to visit the Delhi Sultanate court (of Firoz Shah Tughlaq) and receive the title "Garuda"?',
        options: ['Bharati Chand', 'Garuda Gyanchand', 'Rudra Chand', 'Lakshmi Chand'],
        correctOptionIndex: 1,
        explanation: 'Gyanchand visited Sultan Firoz Shah Tughlaq, secured rights over the Terai–Bhabar (Chaurasi Mal), and earned the title "Garuda".',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Chand monarch fought a famous 12-year war against the kingdom of Doti (Nepal) to end Kumaon\'s subordinate tribute?',
        options: ['Somchand', 'Bharati Chand', 'Kalyan Chand IV', 'Jagat Chand'],
        correctOptionIndex: 1,
        explanation: 'Bharati Chand (15th century) ended Doti suzerainty through a prolonged 12-year campaign.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Chand ruler was a contemporary of Mughal Emperor Akbar, founded Rudrapur, and authored the Sanskrit treatise on falconry "Shyainika Shastra"?',
        options: ['Rudra Chand', 'Baz Bahadur Chand', 'Udyot Chand', 'Somchand'],
        correctOptionIndex: 0,
        explanation: 'Rudra Chand (1565–1597) met Akbar at Lahore (1588), established Rudrapur in the Terai, and wrote Shyainika Shastra.',
        difficulty: 'foundation',
      },
      {
        stem: 'Baz Bahadur Chand (1638–1678), founder of Bazpur, received the title "Bahadur" from which Mughal emperor?',
        options: ['Akbar', 'Shah Jahan', 'Babur', 'Bahadur Shah Zafar'],
        correctOptionIndex: 1,
        explanation: 'Baz Bahadur Chand visited Shah Jahan in Delhi, assisted in Garhwal campaigns, and received the title "Bahadur".',
        difficulty: 'standard',
      },
      {
        stem: 'Which historical source/chronicle creates scholarly debate by naming Thohar Chand (1261 CE) rather than Somchand as the founder of Kumaon\'s Chand house?',
        options: [
          'Kalsi Rock Edict',
          'Mughal-era chronicles (such as Ain-i-Akbari traditions) and epigraphic re-evaluations versus Badri Datt Pande/Atkinson Vanshavali',
          'Taleshwar Plates',
          'Harshacharita',
        ],
        correctOptionIndex: 1,
        explanation: 'While traditional Vanshavalis place Somchand around 700/953 CE, modern epigraphists note verified Chand inscriptions begin around the 13th century with Thohar Chand / Abhaya Chand.',
        difficulty: 'advanced',
      },
      {
        stem: 'What was "Rajbunga" built by early Chand rulers in Champawat?',
        options: [
          'An iron bridge across the Ganga',
          'The royal stone fort/citadel of the early Chand dynasty',
          'A Terai irrigation dam',
          'A Buddhist stupa in Almora',
        ],
        correctOptionIndex: 1,
        explanation: 'Rajbunga Fort in Champawat served as the earliest political seat of the Chand dynasty.',
        difficulty: 'foundation',
      },
      {
        stem: 'In which 1790 battle did the Gorkhas defeat the last Chand king, Mahendra Chand, bringing Chand rule in Kumaon to an end?',
        options: ['Battle of Khurbura', 'Battle of Hawalbagh', 'Battle of Nalapani', 'Battle of Panipat'],
        correctOptionIndex: 1,
        explanation: 'Gorkha forces defeated Mahendra Chand at Hawalbagh (near Almora) in 1790.',
        difficulty: 'foundation',
      },
      {
        stem: 'During whose reign in the 18th century did the Rohilla Afghans under Ali Muhammad Khan invade Kumaon and occupy Almora (1743–44)?',
        options: ['Kalyan Chand IV (V)', 'Garuda Gyanchand', 'Rudra Chand', 'Somchand'],
        correctOptionIndex: 0,
        explanation: 'Rohillas invaded Kumaon in 1743–44 during Kalyan Chand\'s reign, forcing him to seek aid from Garhwal\'s Pradip Shah.',
        difficulty: 'standard',
      },
      {
        stem: 'In Chand administration, what were the "Chauthani" (Karki, Bora, Tadagi, Chaudhari)?',
        options: [
          'Four royal taxes',
          'The four hereditary chief ministerial/noble lineages around the Chand throne',
          'Four Himalayan passes',
          'Four types of copper coins',
        ],
        correctOptionIndex: 1,
        explanation: 'Originally settled in Champawat, the four houses (Chauthani) formed the core civil-military advisory council.',
        difficulty: 'standard',
      },
      {
        stem: 'Which tax under the Chand "Chhattisi" (36 taxes) system was collected specifically as a cash revenue from plains/Bhotia trade?',
        options: ['Sirti', 'Koot', 'Ghee-kar', 'Jhooley'],
        correctOptionIndex: 0,
        explanation: 'Sirti was cash tax; Koot was grain tax; Jhooley was bridge-crossing levy; and Ghee-kar was a levy on pastoral butter/ghee.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Chand ruler constructed the Baghnath Temple renovation in Bageshwar and established the Nyeovali and Bishtali courts?',
        options: ['Lakshmi Chand', 'Devi Chand', 'Somchand', 'Mahendra Chand'],
        correctOptionIndex: 0,
        explanation: 'Lakshmi Chand (1597–1621) renovated Baghnath temple (1602) and created judicial/administrative assemblies called Nyeovali and Bishtali.',
        difficulty: 'standard',
      },
      {
        stem: 'What was "Chaurasi Mal" frequently contested between Chand rulers, Delhi Sultans, and Rohillas?',
        options: [
          'The fertile 84-kos Terai–Bhabar strip below the Kumaon hills',
          'A glacier in Chamoli',
          'A fort in Srinagar',
          'An island near Mumbai',
        ],
        correctOptionIndex: 0,
        explanation: 'Chaurasi Mal referred to the rich Terai–Bhabar revenue strip south of Nainital/Champawat that sustained the Kumaon treasury.',
        difficulty: 'application',
      },
      {
        stem: 'Which 17th-century Chand king is credited with constructing the Tripura Sundari and Parvati/Nanda shrines in Almora and earning praise as a patron of peace before later conflicts?',
        options: ['Udyot Chand', 'Jagat Chand', 'Ajit Chand', 'Devi Chand'],
        correctOptionIndex: 0,
        explanation: 'Udyot Chand (1678–1698) built Udyot Chandeshwar and Tripura Sundari temples in Almora.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which two rival political factions (*Dadas*) emerged at the Chand court and weakened Kumaon internally ahead of the 1790 Gorkha conquest?',
        options: [
          'Mahara and Phartyals (and later Joshi vs Sah/Bisht court rivalries under Mohan Chand & Harak Dev Joshi)',
          'Katyuri and Kuninda',
          'Peshwa and Holkar',
          'Ahom and Koch',
        ],
        correctOptionIndex: 0,
        explanation: 'Factional bloodshed between royal factions (and later Harsh Dev / Harak Dev Joshi inviting Gorkhas against Mohan/Mahendra Chand) fractured Kumaon\'s defence.',
        difficulty: 'application',
      },
    ],
  },
  {
    topicTitle: 'Panwar (Parmar) Dynasty of Garhwal & Consolidation by Ajaypal',
    materialTitle: 'Panwar (Parmar) Dynasty of Garhwal — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Panwar Dynasty of Garhwal',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Panwar (Parmar) Dynasty of Garhwal & Consolidation by Ajaypal

## 1. Foundation & Early Seats
- **Kanakpal (Traditional Founder, c. 888 CE):** Prince from Dhar/Gujarat who married the daughter of **Bhanupratap** (ruler of **Chandpur Garh**, Chamoli). *(Note: Some modern scholars like Ajay Rawat/H.G. Walton note exact 9th-century dating rests on late genealogies, with epigraphically firm Panwar expansion appearing from **Ajaypal** onward).*
- **Early Capital:** **Chandpur Garh** (Chamoli).

## 2. Ajaypal (37th Ruler, early 16th century) — Consolidator of "Garhwal"
- **Unification of 52 Garhs:** Subdued 52 feudal chieftains (*Thakurs/Garhpatis*) like Kaphu Chauhan (Uppu Garh), earning the title **"Garhwal"** (Land of Forts) for the kingdom.
- **Capital Moves:** Shifted from **Chandpur Garh → Dewalgarh (1512) → Srinagar (1517)** on the Alaknanda; standardized **Dhuli-Patha** grain measure. *(Traditionally called "Ashoka of Garhwal" or "Adi Nath" by later folk/panth texts).*

## 3. Illustrious Panwar Monarchs
| Ruler | Key Contributions & Events |
|---|---|
| **Sahajpal & Balbhadra Shah** | **Balbhadra Shah** first adopted the **"Shah"** surname (historians link this to Lodi/Mughal honours); defeated Kumaon's Rudra Chand at **Gwaldam** |
| **Man Shah** | Expanded north into **Dapa (Tibet)**; patronized scholar **Bharat Kavi** (*Manodaya Kavya*) |
| **Mahipat Shah** | Reached Tibet; fought Sirmaur; built strong frontier armies; generals **Madho Singh Bhandari** (Maletha *gul* hero), **Lodi Rikhola**, and **Banwari Das** |
| **Rani Karnavati ("Nak-Kati Rani")** | Regent for young **Prithvipati Shah**; famously repulsed Mughal general **Najabat Khan** (1635–36, Shah Jahan's reign), cutting noses of captured soldiers |
| **Prithvipati Shah** | Sheltered **Sulaiman Shikoh** (son of Dara Shikoh) fleeing Aurangzeb, though later his son **Medini Shah** betrayed/surrendered Sulaiman |
| **Fatehpati (Fateh) Shah** | Contemporary of **Guru Gobind Singh** (Battle of **Bhangani**, 1688) & Aurangzeb; great patron of art/literature (**Navaratnas**, *Fateh Shah Prakash*); raided Saharanpur |
| **Pradip Shah** | Helped **Kalyan Chand** of Kumaon against Rohillas; Battle of **Doon**; peaceful prosperity |
| **Lalit Shah & Pradyumna Shah** | **Pradyumna Shah** uniquely ruled **both Kumaon (as Pradyumna Chand briefly) and Garhwal**; killed fighting the Gorkhas at the **Battle of Khurbura (14 May 1804)** |

## 4. Key Revision Takeaways
- **Kanakpal** = traditional founder (**Chandpur Garh**); **Ajaypal** unified **52 Garhs** and founded **Srinagar (1517)**.
- **Balbhadra Shah** introduced **"Shah"** title; **Rani Karnavati** defeated **Najabat Khan**; **Madho Singh Bhandari** served **Mahipat Shah**.
- **Pradyumna Shah** died at **Khurbura (1804)** against the Gorkhas.
`,
    mcqs: [
      {
        stem: 'Who traditionally founded the Panwar (Parmar) dynasty in Garhwal at Chandpur Garh?',
        options: ['Ajaypal', 'Kanakpal', 'Balbhadra Shah', 'Sudarshan Shah'],
        correctOptionIndex: 1,
        explanation: 'Kanakpal married the daughter of local chief Bhanupratap of Chandpur Garh (Chamoli) and laid the foundation of the Panwar line.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which 16th-century Panwar monarch unified the 52 petty hill forts (Garhs) and established Srinagar as Garhwal\'s capital in 1517?',
        options: ['Man Shah', 'Ajaypal', 'Mahipat Shah', 'Fateh Shah'],
        correctOptionIndex: 1,
        explanation: 'Ajaypal (37th ruler) subdued the 52 Garhs and moved the capital from Chandpur Garh to Dewalgarh (1512) and Srinagar (1517).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Panwar ruler was the first to adopt the suffix/title "Shah" in place of "Pal"?',
        options: ['Ajaypal', 'Balbhadra Shah', 'Man Shah', 'Pradyumna Shah'],
        correctOptionIndex: 1,
        explanation: 'Balbhadra Shah (late 16th century) was the first Garhwal ruler to assume the title "Shah".',
        difficulty: 'foundation',
      },
      {
        stem: 'Why was Garhwal\'s regent queen Rani Karnavati famously nicknamed "Nak-Kati Rani" in Mughal and Garhwali accounts?',
        options: [
          'She wore a golden nose ring',
          'After trapping Shah Jahan\'s invading army under Najabat Khan in mountain passes, she spared lives on condition that the soldiers\' noses were cut off',
          'She lost a battle to the Gorkhas',
          'She taxed nose ornaments',
        ],
        correctOptionIndex: 1,
        explanation: 'During Prithvipati Shah\'s minority (~1635), Rani Karnavati defeated Mughal general Najabat Khan and ordered captives\' noses severed before release.',
        difficulty: 'foundation',
      },
      {
        stem: 'Celebrated Garhwali warrior-engineer Madho Singh Bhandari—famed for tunneling a hill irrigation canal at Maletha—was a general under which ruler?',
        options: ['Ajaypal', 'Mahipat Shah', 'Pradyumna Shah', 'Sudarshan Shah'],
        correctOptionIndex: 1,
        explanation: 'Madho Singh Bhandari (and Lodi Rikhola) served as heroic commanders under King Mahipat Shah in the 17th century.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Panwar ruler sheltered Dara Shikoh\'s fleeing son, Prince Sulaiman Shikoh, defying Mughal Emperor Aurangzeb?',
        options: ['Man Shah', 'Prithvipati Shah', 'Pradip Shah', 'Balbhadra Shah'],
        correctOptionIndex: 1,
        explanation: 'Prithvipati Shah honoured hill hospitality by granting refuge to Sulaiman Shikoh, though his son Medini Shah later turned the prince over.',
        difficulty: 'standard',
      },
      {
        stem: 'In which 1688 battle near Paonta Sahib did Garhwal\'s Fatehpati (Fateh) Shah clash with Guru Gobind Singh?',
        options: ['Battle of Khurbura', 'Battle of Bhangani', 'Battle of Gwaldam', 'Battle of Hawalbagh'],
        correctOptionIndex: 1,
        explanation: 'Fateh Shah and allied hill chiefs fought Guru Gobind Singh at Bhangani in 1688 (recorded in Bachittar Natak).',
        difficulty: 'standard',
      },
      {
        stem: 'Who composed the famous court Sanskrit biography "Manodaya Kavya" during the reign of King Man Shah?',
        options: ['Mola Ram', 'Bharat Kavi', 'Ratan Kavi', 'Gumani Pant'],
        correctOptionIndex: 1,
        explanation: 'Bharat Kavi served in Man Shah\'s court and authored Manodaya Kavya.',
        difficulty: 'standard',
      },
      {
        stem: 'Which measurement standard did Ajaypal famously introduce across unified Garhwal?',
        options: ['Metre scale', 'Dhuli-Patha (standardized grain/land measure)', 'Akbar\'s Ilahi Gaz', 'Pound-Sterling'],
        correctOptionIndex: 1,
        explanation: 'Ajaypal standardized the copper-stamped Dhuli-Patha measure to unify trade and taxation across the 52 Garhs.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Panwar prince briefly sat on the Kumaon throne as "Pradyumna Chand" before returning to rule Garhwal and dying in 1804 against the Gorkhas?',
        options: ['Lalit Shah', 'Pradyumna Shah', 'Jaikrit Shah', 'Sudarshan Shah'],
        correctOptionIndex: 1,
        explanation: 'Pradyumna Shah ruled both Kumaon (as Pradyumna Chand) and Garhwal; he fell fighting Gorkhas at Khurbura (Dehradun) on 14 May 1804.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which 16th-century warrior of Uppu Garh famously refused to submit to Ajaypal, dying bravely while uttering "I bow to none even in death"?',
        options: ['Kaphu Chauhan', 'Bhimsen Thapa', 'Harak Dev Joshi', 'Jeetu Bagdwal'],
        correctOptionIndex: 0,
        explanation: 'Kaphu Chauhan of Uppu Garh became a legend of Garhwali valour for resisting Ajaypal\'s unification campaign.',
        difficulty: 'standard',
      },
      {
        stem: 'During whose reign in Garhwal was the historic Guru Ram Rai settlement in Doon Valley (Dehradun) established with royal land grants (~1676/1699)?',
        options: [
          'Fatehpati Shah (following earlier contacts under Prithvipati Shah)',
          'Kanakpal',
          'Ajaypal',
          'Manabendra Shah',
        ],
        correctOptionIndex: 0,
        explanation: 'Fatehpati Shah granted villages (Khurbura, Dhamawala, Rajpur, etc.) to Sikh Udaasi saint Guru Ram Rai, seeding modern Dehradun.',
        difficulty: 'advanced',
      },
      {
        stem: 'Why was Chandpur Garh replaced by Srinagar as the Panwar capital in 1517?',
        options: [
          'Srinagar offered a wider, centrally located river-valley terrace on the Alaknanda connecting pilgrimage/trade routes across newly unified Garhwal',
          'Chandpur Garh sank beneath the Indian Ocean',
          'Srinagar had coal mines',
          'Kanakpal ruled from Srinagar first',
        ],
        correctOptionIndex: 0,
        explanation: 'Once Ajaypal unified 52 Garhs, cramped hilltop Chandpur Garh was superseded by broad central valley terraces at Srinagar.',
        difficulty: 'application',
      },
      {
        stem: 'Which celebrated poet-painter of Srinagar (Garhwal) served the late Panwar court and documented Garhwal\'s turmoil in "Ganika Natak" and "Garh Rajvansh Kavya"?',
        options: ['Mola Ram', 'Gumani Pant', 'Sumitranandan Pant', 'Gaurda'],
        correctOptionIndex: 0,
        explanation: 'Mola Ram Tomar (1743–1833) was both master of the Garhwali miniature painting school and court chronicler of late Panwar and Gorkha eras.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which sequence correctly orders Garhwal Panwar capitals chronologically?',
        options: [
          'Tehri → Srinagar → Chandpur Garh',
          'Chandpur Garh → Dewalgarh → Srinagar → Tehri (post-1815)',
          'Almora → Champawat → Srinagar',
          'Srinagar → Chandpur Garh → Dewalgarh',
        ],
        correctOptionIndex: 1,
        explanation: 'The seat moved from Chandpur Garh to Dewalgarh (1512), Srinagar (1517), and finally Tehri (1815 under Sudarshan Shah after British partition).',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Society, Literature, Painting & Land Revenue in Medieval Uttarakhand',
    materialTitle: 'Society, Literature, Painting & Land Revenue in Medieval Uttarakhand — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Medieval Uttarakhand Society, Art & Revenue',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Society, Literature, Painting & Land Revenue in Medieval Uttarakhand

## 1. Agrarian & Land-Tenure Hierarchy
In medieval Kumaon and Garhwal, all land belonged theoretically to the Raja (*Thakur/Raut* grants for military or ritual services):
- **Thaatwan:** Original hereditary landholding proprietor (often receiving royal *Tamrapatra* / copper-plate grants).
- **Khaikar:** Hereditary permanent occupancy tenant cultivating land on fixed customary rent without sale rights.
- **Sirtan:** Temporary or tenant-at-will cultivating on sharecropping/cash rent (*Sirti*) without permanent occupancy security.
- **Sayana / Thokdar / Padhan / Kamin:** Rural revenue-collecting and local policing intermediaries.

## 2. Garhwali School of Miniature Painting
- **Origin:** Triggered in **1658** when **Sulaiman Shikoh** took refuge in Srinagar (Prithvipati Shah's court), bringing two Mughal-trained Pahari artists—**Shyamdas** and **Haridas**—whose lineage flourished in Garhwal.
- **Greatest Exponent — Mola Ram Tomar (1743–1833):** Poet, historian, and painter (descendant of Haridas). Masterworks include *Mastani*, *Vipralabdha Nayika*, *Abhisarika Nayika*, *Radha–Krishna*, and *Govardhan Dharan*.
- **Subsequent Collectors:** **Mukandi Lal** (Barrister Mukandi Lal) researched and popularized Mola Ram's paintings globally in the 20th century (*Garhwal Painting*).

## 3. Literature & Epigraphy
- **Copper Plates (*Tamrapatra*):** Crucial bilingual/local Sanskrit–Kumaoni–Garhwali charters recording grants, witnesses (*Sakshi*), and tax exemptions.
- **Key Medieval Works:** *Manodaya Kavya* (Bharat Kavi), *Fateh Shah Prakash* (Ratan Kavi), *Garh Rajvansh Kavya* (Mola Ram), *Sabhāsāra* (Sudarshan Shah later), and early Kumaoni/Sanskrit compositions like *Kalyan Chandrodaya* (Shiva Dutt Joshi).

## 4. Key Revision Takeaways
- **Thaatwan** (landlord) > **Khaikar** (permanent tenant) > **Sirtan** (temporary tenant).
- **Shyamdas & Haridas** (arriving with Sulaiman Shikoh, 1658) seeded the **Garhwali Painting** school; **Mola Ram** was its supreme master; **Barrister Mukandi Lal** rediscovered it.
`,
    mcqs: [
      {
        stem: 'In medieval Uttarakhand\'s agrarian hierarchy, which category referred to a hereditary permanent occupancy tenant who paid fixed rent to the Thaatwan?',
        options: ['Sirtan', 'Khaikar', 'Thokdar', 'Padhan'],
        correctOptionIndex: 1,
        explanation: 'A Khaikar held hereditary permanent occupancy rights (unlike temporary Sirtan tenants), while the Thaatwan held original title.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who were the two court painters arriving in Srinagar (1658) in the retinue of Prince Sulaiman Shikoh who seeded the Garhwali School of Painting?',
        options: [
          'Bishan Das and Mansur',
          'Shyamdas and Haridas',
          'Nainsukh and Manaku',
          'Gumani and Gaurda',
        ],
        correctOptionIndex: 1,
        explanation: 'Father-son artists Shyamdas and Haridas arrived with Sulaiman Shikoh in 1658, founding the Tomar family lineage that produced Mola Ram.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who is universally regarded as the greatest master of the Garhwali School of Miniature Painting?',
        options: ['Mola Ram', 'Chaitu', 'Manaku', 'Abanindranath Tagore'],
        correctOptionIndex: 0,
        explanation: 'Mola Ram (1743–1833), great-grandson/descendant of Haridas, elevated Garhwali miniature art with works like Mastani and Nayika series.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which 20th-century scholar-barrister brought Mola Ram and the Garhwali School of Painting to national and international recognition?',
        options: ['Badridutt Pande', 'Barrister Mukandi Lal', 'Rahul Sankrityayan', 'Jim Corbett'],
        correctOptionIndex: 1,
        explanation: 'Barrister Mukandi Lal collected scattered works from Srinagar descendants and published authoritative books on Garhwal Painting.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which term denoted a temporary, non-hereditary tenant-at-will in traditional Garhwal–Kumaon land tenure?',
        options: ['Thaatwan', 'Khaikar', 'Sirtan', 'Sayana'],
        correctOptionIndex: 2,
        explanation: 'Sirtans were tenants-at-will lacking permanent occupancy rights.',
        difficulty: 'foundation',
      },
      {
        stem: 'What primary historical purpose did copper-plate inscriptions (*Tamrapatras*) serve in Chand and Panwar courts?',
        options: [
          'Recording tax-free land grants (Vishnupreet/Gunt), hereditary offices, and boundary demarcations with royal seals',
          'Printing daily newspapers',
          'Serving as shield armour in war',
          'Mapping European sea routes',
        ],
        correctOptionIndex: 0,
        explanation: 'Tamrapatras were permanent legal charters recording grants to temples, Brahmins, and loyal warriors, serving as prime sources for local socio-economic history.',
        difficulty: 'standard',
      },
      {
        stem: 'Which two artists of Tehri/Garhwal courts (early 19th century) are famous alongside Mola Ram for paintings like *Rukmini Mangal* and *Gita Govinda*?',
        options: ['Chaitu and Manaku', 'Raja Ravi Varma and Amrita Sher-Gil', 'Nandalal Bose and Jamini Roy', 'Ustad Mansur and Basawan'],
        correctOptionIndex: 0,
        explanation: 'Chaitu and Manaku enriched the post-Mola Ram Pahari–Garhwali atelier under Tehri patronage.',
        difficulty: 'standard',
      },
      {
        stem: 'In medieval Garhwal–Kumaon villages, what role did the "Padhan" (or "Pradhan") and "Thokdar / Sayana" perform?',
        options: [
          'Village headmen and circle chiefs responsible for collecting land revenue and maintaining local order for the king',
          'Astronomers at Nainital observatory',
          'Tea plantation managers',
          'Foreign ambassadors in Tibet',
        ],
        correctOptionIndex: 0,
        explanation: 'Padhans managed village-level collection while higher Thokdars/Sayanas/Kamins supervised circles of villages (Pattis).',
        difficulty: 'standard',
      },
      {
        stem: 'What thematic blend characterizes Mola Ram\'s Garhwali paintings?',
        options: [
          'Mughal delicacy fused with Kangra lyrical romanticism (Radha–Krishna, Nayika-Bheda, curved Garhwal hills, and expressive female profiles)',
          'Purely abstract geometric cubes',
          'Industrial factory blueprints',
          'Chinese ink bamboo scrolls only',
        ],
        correctOptionIndex: 0,
        explanation: 'Garhwali painting combines fine Mughal brushwork with Kangra lyricism, distinguished by local mountain flora and distinctive curved hill horizons.',
        difficulty: 'standard',
      },
      {
        stem: 'What was "Kaminchari" / "Sayanchari" in medieval hill revenue administration?',
        options: [
          'Customary dues/fees payable to the local Kamin or Sayana for administrative duties',
          'Tax on Himalayan bears',
          'Buddhist monastic vow',
          'Salt import duty from Nepal',
        ],
        correctOptionIndex: 0,
        explanation: 'Kamins and Sayanas collected authorized customary dues (Kaminchari/Sayanchari) alongside royal revenue.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which Sanskrit–historical verse chronicle did Mola Ram author describing Garhwal rulers and his own times?',
        options: ['Manodaya Kavya', 'Garh Rajvansh Kavya', 'Kumaon ka Itihas', 'Rajatarangini'],
        correctOptionIndex: 1,
        explanation: 'Mola Ram wrote Garh Rajvansh Kavya (as well as Ganika Natak and Manmath Sagar).',
        difficulty: 'standard',
      },
      {
        stem: 'Why was "Gunt" (or "Vishnupreet") land significant in Kumaon and Garhwal agrarian history?',
        options: [
          'Revenue-free land grants assigned by kings specifically for the upkeep of temples like Badrinath, Kedarnath, and Jageshwar',
          'Wasteland abandoned after landslides',
          'Royal hunting reserves in Terai',
          'Military barracks land for British troops',
        ],
        correctOptionIndex: 0,
        explanation: 'Gunt (temple endowment) and Vishnupreet (Brahmin grant) lands sustained major shrines without state revenue extraction.',
        difficulty: 'standard',
      },
      {
        stem: 'What social tension existed in the rural agrarian order between Thaatwan/Padhan elites and Sirtans?',
        options: [
          'Sirtans lacked security of tenure and could be evicted or subjected to rising seasonal cesses and unpaid labour (*Begar*) obligations',
          'Sirtans owned all royal palaces',
          'Thaatwans paid wages to kings',
          'Sirtans were exempt from all cultivation',
        ],
        correctOptionIndex: 0,
        explanation: 'Without hereditary occupancy protection, Sirtans occupied the most vulnerable rung in rural society.',
        difficulty: 'application',
      },
      {
        stem: 'Which language was primarily used alongside Sanskrit in medieval Kumaon and Garhwal royal copper-plate grants?',
        options: ['Persian only', 'Early regional Kumaoni/Garhwali (Madhyadeshiya Pahari) in Devanagari script', 'Tamil', 'French'],
        correctOptionIndex: 1,
        explanation: 'While invocations were in Sanskrit, operative boundary descriptions and revenue lists used early Kumaoni/Garhwali prose in Devanagari.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which famous painting by Mola Ram depicts a warrior-heroine in bold heroic poise rather than passive romance?',
        options: ['Mastani', 'Mona Lisa', 'Shakuntala only', 'Dandi March'],
        correctOptionIndex: 0,
        explanation: 'Mola Ram\'s portrait of Mastani (depicted gracefully riding or holding a sword/cup in refined Pahari–Mughal style) is among his celebrated pieces.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'Gorkha Invasion, Battle of Khurbura & Treaty of Sugauli (1815)',
    materialTitle: 'Gorkha Invasion, Battle of Khurbura & Treaty of Sugauli (1815) — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Gorkha Rule & Treaty of Sugauli',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Gorkha Invasion, Battle of Khurbura & Treaty of Sugauli (1815)

## 1. Gorkha Conquest of Kumaon (1790) & Garhwal (1804)
- **Conquest of Kumaon (1790):** Exploiting internal court feuds (especially **Harak Dev Joshi's** intrigue against Mahendra Chand), Gorkha commanders (**Amar Singh Thapa, Jagjit Pande, Hastidal Chautaria**) crossed the Kali and defeated **Mahendra Chand** at the **Battle of Hawalbagh (1790)**, capturing Almora.
- **First Garhwal Invasion (1791) & Langurgarhi Siege:** Gorkhas laid siege to **Langurgarhi** (Pauri) for over a year before retreating on news of the Sino–Nepalese war; **Pradyumna Shah** agreed to annual tribute (~Rs 25,000).
- **1803–1804 Second Invasion & Battle of Khurbura:** Weakened by the devastating **1803 Garhwal earthquake** and famine, Pradyumna Shah gathered troops in Dehradun where he fell fighting at the **Battle of Khurbura (14 May 1804)** against Amar Singh Thapa and Hastidal Chautaria. Thus began *"Gorkhyani"* (harsh Gorkha military rule: Kumaon 1790–1815, Garhwal 1804–1815).

## 2. Features of Gorkha Rule ("Gorkhyani")
- **Military Administration (*Suba / Faujdar*):** Kumaon governors included **Joga Malla**, **Kazi Narashahi**, **Bum Shah** (relatively humane), while **Harshvardhan / Bhairav Thapa** and harsh taxes (*Pungadi*, *Kushahi* on Brahmins, *Dand*, slave-sale at **Har ki Pauri / Bhimgoda** auctions) made *Gorkhyani* a byword for oppression.
- **Judicial Ordeals (*Divya*):** Hot iron rod (*Gola Deep*), boiling oil (*Karahi Deep*), water immersion (*Taraju*).

## 3. Anglo–Gorkha War (1814–1815) & Treaty of Sugauli
- **British Intervention:** Invited by exiled **Sudarshan Shah** (son of Pradyumna Shah) and **Harak Dev Joshi**, plus border clashes in Terai/Butwal, **Lord Hastings** launched war in October 1814.
- **Battle of Kalunga / Nalapani (Dehradun, Oct–Nov 1814):** Gorkha commander **Balbhadra Singh Thapa** heroically defended **Khalanga Fort** against British Major-General **Robert Rollo Gillespie** (who was killed in action); British later erected twin memorial obelisks honouring both Gillespie and gallant Balbhadra.
- **Kumaon Front (1815):** **Col. Gardner** and **Major Hearsey** captured Almora (April 1815, defeating **Bum Shah** at Sitoli).
- **Treaty of Sugauli (signed 2 Dec 1815; ratified March 1816):** Nepal ceded **Kumaon, Garhwal, Shimla hill states, and Terai**, withdrawing east of the **Kali (Mahakali)** river.
- **1815 Partition of Garhwal:** The British retained **Kumaon and Eastern Garhwal (British Garhwal + Dehradun)**, while restoring **Western Garhwal (beyond Alaknanda–Mandakini, excluding Dehradun)** to **Sudarshan Shah**, who founded **Tehri** as his new capital on **28 December 1815**.

## 4. Key Revision Takeaways
- **1790 (Hawalbagh):** Gorkhas took Kumaon; **14 May 1804 (Khurbura):** Pradyumna Shah died; Gorkhas took Garhwal.
- **Balbhadra Singh Thapa** defended **Kalunga/Nalapani** (1814) where **Gen. Gillespie** died.
- **Treaty of Sugauli (1815):** Fixed **Kali river** border; divided Garhwal into **British Garhwal** and **Tehri Princely State (Sudarshan Shah)**.
`,
    mcqs: [
      {
        stem: 'In which year did the Gorkha army defeat Mahendra Chand at Hawalbagh to establish rule over Kumaon?',
        options: ['1743', '1790', '1804', '1815'],
        correctOptionIndex: 1,
        explanation: 'Gorkha forces defeated Mahendra Chand at Hawalbagh in 1790, initiating 25 years of Gorkha rule in Kumaon.',
        difficulty: 'foundation',
      },
      {
        stem: 'On 14 May 1804, King Pradyumna Shah of Garhwal died fighting the Gorkhas in which decisive battle?',
        options: ['Battle of Hawalbagh', 'Battle of Khurbura (Dehradun)', 'Battle of Kalunga', 'Battle of Bhangani'],
        correctOptionIndex: 1,
        explanation: 'Pradyumna Shah fell heroically at Khurbura (Dehradun) in May 1804 against Amar Singh Thapa\'s forces.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which British Major-General was killed assaulting Balbhadra Singh Thapa\'s heroic defence at Khalanga (Nalapani) Fort near Dehradun in October 1814?',
        options: [
          'Sir Henry Ramsay',
          'Major-General Robert Rollo Gillespie',
          'Lord Cornwallis',
          'Col. Nicholls',
        ],
        correctOptionIndex: 1,
        explanation: 'Major-General Gillespie was fatally shot leading the assault on Khalanga (Kalunga/Nalapani) fort defended by Balbhadra Singh Thapa.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which river did the Treaty of Sugauli (1815) establish as the western border of Nepal separating it from British Kumaon?',
        options: ['Bhagirathi', 'Kali (Mahakali)', 'Kosi', 'Teesta'],
        correctOptionIndex: 1,
        explanation: 'Under the Treaty of Sugauli (signed Dec 1815, ratified March 1816), Nepal ceded all territory west of the Kali river.',
        difficulty: 'foundation',
      },
      {
        stem: 'Following the expulsion of the Gorkhas in 1815, how did the British reorganize Garhwal?',
        options: [
          'Returned all of Garhwal and Kumaon to Sudarshan Shah',
          'Annexed Eastern Garhwal (British Garhwal) and Dehradun directly, while restoring Western Garhwal (Tehri State) to Sudarshan Shah',
          'Handed Garhwal to the Rohillas',
          'Merged Garhwal into Tibet',
        ],
        correctOptionIndex: 1,
        explanation: 'Unable to pay war indemnity, Sudarshan Shah received Western Garhwal (Tehri State) while the British kept Eastern Garhwal and Dehradun.',
        difficulty: 'standard',
      },
      {
        stem: 'What major natural calamity in 1803 crippled Garhwal immediately prior to the successful second Gorkha invasion?',
        options: [
          'A devastating Himalayan earthquake (and subsequent famine)',
          'A Bay of Bengal tsunami',
          'A volcanic eruption at Badrinath',
          'A locust plague only',
        ],
        correctOptionIndex: 0,
        explanation: 'The massive 1803 Garhwal earthquake shattered towns, forts, and agrarian infrastructure right before the Gorkha assault.',
        difficulty: 'foundation',
      },
      {
        stem: 'During Gorkha rule ("Gorkhyani"), what were "Gola Deep" and "Karahi Deep"?',
        options: [
          'Deep mountain passes in Uttarkashi',
          'Judicial trials by ordeal (holding red-hot iron rod or dipping hands into boiling oil)',
          'Harvest festivals of Kumaon',
          'Silver coin denominations',
        ],
        correctOptionIndex: 1,
        explanation: 'Gorkha military courts frequently settled disputes using severe Divya ordeals such as Gola Deep (hot iron), Karahi Deep (boiling oil), and water immersion.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Garhwal fort withstood the first Gorkha invasion in 1791 for over a year, forcing a temporary treaty?',
        options: ['Rajbunga Fort', 'Langurgarhi Fort (Pauri Garhwal)', 'Almora Fort', 'Tehri Palace'],
        correctOptionIndex: 1,
        explanation: 'Garhwal defenders held Langurgarhi heroically until news of a Chinese invasion of Nepal prompted a truce.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Kumaoni statesman—sometimes termed the "Chanakya of Kumaon" in histories—played a pivotal diplomatic role in both inviting the Gorkhas (1790) and later aiding the British (1814–15)?',
        options: ['Harak Dev Joshi', 'Badridutt Pande', 'Govind Ballabh Pant', 'Mohan Singh Mehta'],
        correctOptionIndex: 0,
        explanation: 'Harak Dev Joshi navigated turbulent late-Chand, Gorkha, and British political shifts; historians view him variably as astute diplomat or divisive court strategist.',
        difficulty: 'standard',
      },
      {
        stem: 'What tax did the Gorkhas impose specifically on Brahmins in Kumaon during their rule?',
        options: ['Kushahi', 'Jizya', 'Chauth', 'Sardeshmukhi'],
        correctOptionIndex: 0,
        explanation: 'Kushahi was levied on Brahmins (alongside Pungadi on land and slave auctions at Haridwar for defaulters).',
        difficulty: 'standard',
      },
      {
        stem: 'On what date did Sudarshan Shah establish Tehri (at the Bhagirathi–Bhilangana confluence) as his new capital?',
        options: ['9 November 2000', '28 December 1815', '14 May 1804', '15 August 1947'],
        correctOptionIndex: 1,
        explanation: 'Sudarshan Shah founded Tehri town on 28 December 1815 after losing Srinagar to British Garhwal.',
        difficulty: 'standard',
      },
      {
        stem: 'Which British officers led the April 1815 campaign that captured Almora from Gorkha governor Bum Shah?',
        options: [
          'Col. Gardner and Col. Nicholls (alongside Major Hearsey)',
          'Gen. Dyer and Lord Curzon',
          'Robert Clive and Warren Hastings',
          'Lord Mountbatten',
        ],
        correctOptionIndex: 0,
        explanation: 'Col. William Linnaeus Gardner and Col. Jasper Nicholls defeated Gorkha forces near Almora, leading Bum Shah to sign the Convention of Almora (April 1815).',
        difficulty: 'advanced',
      },
      {
        stem: 'Why did the British erect a memorial at Nalapani (Dehradun) honouring BOTH Gen. Gillespie and Gorkha defender Balbhadra Singh Thapa?',
        options: [
          'In extraordinary tribute to the mutual bravery shown by the besieged 600 Gorkha men, women, and children who held out for weeks without water',
          'Because Balbhadra was a British officer',
          'Because no fighting took place at Kalunga',
          'To commemorate a 1947 trade agreement',
        ],
        correctOptionIndex: 0,
        explanation: 'Impressed by Balbhadra\'s gallant defence against vastly superior artillery, the British inscribed twin tablets to Gillespie and "Our Gallant Adversary Balabhadra".',
        difficulty: 'application',
      },
      {
        stem: 'Who served as the relatively humane and respected Gorkha governor (Suba) in Kumaon during the final phase before 1815?',
        options: ['Chautaria Bum Shah', 'Bhairav Thapa', 'Kazi Narashahi', 'Joga Malla'],
        correctOptionIndex: 0,
        explanation: 'Chautaria Bum Shah was remembered comparatively favourably for moderating abuses compared to harsher earlier governors.',
        difficulty: 'advanced',
      },
      {
        stem: 'How did the 1815 Treaty of Sugauli set the stage for a modern bilateral border dispute in Pithoragarh?',
        options: [
          'The treaty named the Kali river as Nepal\'s western boundary without mapping every upper headwater tributary (Kalapani vs Limpiyadhura streams)',
          'The treaty assigned Pithoragarh to China',
          'The treaty placed the border along the Yamuna',
          'The treaty was never signed',
        ],
        correctOptionIndex: 0,
        explanation: 'Because the 1815 treaty simply cited the "Kali" river without specifying which high-mountain feeder stream is its true headwater, differing interpretations persist.',
        difficulty: 'application',
      },
    ],
  },
];
