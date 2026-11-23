import { TopicContentPackage } from './types';

export const INDIAN_HISTORY_ANCIENT_MEDIEVAL_PART_A: TopicContentPackage[] = [
  {
    topicTitle: 'Prehistoric Cultures & Indus Valley Civilization',
    materialTitle: 'Prehistoric Cultures & Indus Valley Civilization — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Prehistoric Cultures & IVC',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Prehistoric Cultures & Indus Valley Civilization

## 1. Stone Age Cultures in India
- **Paleolithic (Old Stone Age):** Quartzite hand-axes, cleavers, choppers; Bhimbetka rock shelters (MP), Soan valley, Pallavaram (Robert Bruce Foote, 1863).
- **Mesolithic (Transition):** **Microliths**; earliest animal domestication evidence (**Adamgarh** MP, **Bagor** Rajasthan).
- **Neolithic (Food Production):** Polished celts, pottery, farming; **Mehrgarh** (earliest wheat/barley & cotton), **Burzahom** (Kashmir **pit dwellings** & dog burials), **Chirand** (bone tools).
- **Chalcolithic:** Copper + Stone (Ahar, Malwa, Jorwe cultures).

## 2. Indus Valley / Harappan Civilization (~2600–1900 BCE Mature Phase)
- **Urban Planning:** Grid-pattern streets, burnt-brick houses, covered drains, **Citadel** (west, elevated) vs **Lower Town** (east).
- **Key Sites & Finds:**
  - **Harappa** (Ravi river; 6 granaries, R-37 cemetery).
  - **Mohenjodaro** (Indus; **Great Bath**, Great Granary, Bronze **Dancing Girl**, Steatite **Bearded Priest**, Pashupati seal).
  - **Lothal** (Bhogava river, Gujarat; **brick tidal dockyard**, bead factory, fire altars, double burials).
  - **Dholavira** (Rann of Kutch; **UNESCO World Heritage Site**, **3-tier city plan**, massive stone water reservoirs, 10-sign signboard).
  - **Kalibangan** (Ghaggar; **ploughed field**, fire altars, black bangles).
  - **Rakhigarhi** (Haryana; largest Indian IVC site) & **Banawali** (terracotta plough).
- **Economy, Script & Decline:** Barter/weights in multiples of 16; **undeciphered pictographic/boustrophedon script**; overseas trade with **Meluhha (Mesopotamia)**; decline attributed multi-causally to river shifts (Ghaggar–Hakra drying), floods, climate aridification, and trade disruption (the old "Aryan invasion massacre" theory is largely discarded by modern archaeology).

## 3. Key Revision Takeaways
- **Lothal** = Dockyard; **Kalibangan** = Ploughed field; **Dholavira** = 3-tier layout & stone water reservoirs (UNESCO); **Burzahom** = Pit dwellings.
- **Iron** and **horses (true widespread cavalry)** were NOT hallmarks of mature Harappan civilization.
`,
    mcqs: [
      {
        stem: 'Which Harappan site in Gujarat is celebrated for its brick tidal dockyard and bead-making workshop?',
        options: ['Kalibangan', 'Lothal', 'Banawali', 'Rakhigarhi'],
        correctOptionIndex: 1,
        explanation: 'Lothal on the Bhogava river (discovered by S.R. Rao) features a large baked-brick dockyard linked to the Gulf of Khambhat.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which site in Rajasthan yielded the earliest archaeological evidence of a ploughed agricultural field with criss-cross furrow marks?',
        options: ['Mohenjodaro', 'Kalibangan', 'Dholavira', 'Chanhudaro'],
        correctOptionIndex: 1,
        explanation: 'Excavations at Kalibangan (on the Ghaggar river) uncovered an Early Harappan ploughed field with dual furrow spacing.',
        difficulty: 'foundation',
      },
      {
        stem: 'What distinctive architectural feature earned Dholavira (Gujarat) recognition as a UNESCO World Heritage Site?',
        options: [
          'A tripartite (three-tier) urban plan, dressed stone masonry, and sophisticated rainwater-harvesting reservoirs',
          'Iron blast furnaces',
          'A granite Buddhist stupa',
          'Submarine wooden piers',
        ],
        correctOptionIndex: 0,
        explanation: 'Unlike two-part Harappan towns, Dholavira had a Citadel, Middle Town, and Lower Town plus monumental stone water-conservation tanks.',
        difficulty: 'foundation',
      },
      {
        stem: 'Where was the famous bronze sculpture of the "Dancing Girl" (lost-wax / cire perdue technique) unearthed?',
        options: ['Harappa', 'Mohenjodaro', 'Lothal', 'Surkotada'],
        correctOptionIndex: 1,
        explanation: 'Both the bronze Dancing Girl and the steatite Bearded Priest came from Mohenjodaro (alongside the Great Bath).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which metal was COMPLETELY UNKNOWN to the people of the Mature Indus Valley Civilization?',
        options: ['Copper', 'Bronze', 'Iron', 'Gold'],
        correctOptionIndex: 2,
        explanation: 'Harappan civilization was a Bronze Age culture; Iron appeared in northern India only during the later Painted Grey Ware / Iron Age (~1000 BCE).',
        difficulty: 'foundation',
      },
      {
        stem: 'In which Mesolithic/Neolithic Kashmir site have archaeologists found subterranean "pit dwellings" and dog burials with human skeletons?',
        options: ['Mehrgarh', 'Burzahom', 'Chirand', 'Hallur'],
        correctOptionIndex: 1,
        explanation: 'Neolithic Burzahom near Srinagar had cold-weather pit houses and distinctive pet dog burials.',
        difficulty: 'foundation',
      },
      {
        stem: 'By what name did Mesopotamian cuneiform tablets refer to the Indus trading partner exporting carnelian, timber, and ivory?',
        options: ['Dilmun', 'Magan', 'Meluhha', 'Sumer'],
        correctOptionIndex: 2,
        explanation: 'Mesopotamian texts record maritime trade via Dilmun (Bahrain) and Magan (Oman) to Meluhha (Indus region).',
        difficulty: 'standard',
      },
      {
        stem: 'What are "Microliths" characteristic of?',
        options: [
          'Lower Paleolithic hand-axe era',
          'Mesolithic (Middle Stone Age) composite hunting tools',
          'Mature Harappan urban palaces',
          'Gupta gold coins',
        ],
        correctOptionIndex: 1,
        explanation: 'Tiny geometric flint/chalcedony blades (microliths) hafted into wood or bone define Mesolithic technology.',
        difficulty: 'foundation',
      },
      {
        stem: 'What does "Boustrophedon" style mean regarding the undeciphered Indus script?',
        options: [
          'Written strictly vertically top-to-bottom',
          'Alternating line direction—right-to-left on the first line and left-to-right on the next',
          'Carved solely in Greek alphabet',
          'Printed using movable iron type',
        ],
        correctOptionIndex: 1,
        explanation: 'Multi-line Indus inscriptions occasionally switch direction back and forth like an ox ploughing a field (boustrophedon).',
        difficulty: 'standard',
      },
      {
        stem: 'Which Harappan site in Haryana is recognized today by archaeologists as the LARGEST Indus Valley urban settlement in India (and overall)?',
        options: ['Banawali', 'Rakhigarhi', 'Mitathal', 'Ropar'],
        correctOptionIndex: 1,
        explanation: 'Expanding excavations confirm Rakhigarhi (Hisar, Haryana) as the largest known Harappan metropolis.',
        difficulty: 'standard',
      },
      {
        stem: 'Why have modern archaeologists largely rejected Mortimer Wheeler\'s mid-20th-century theory that sudden "Aryan invasions" destroyed Mohenjodaro?',
        options: [
          'Stratigraphy shows gradual urban decline due to hydrological shifts (Ghaggar drying/Indus floods), trade collapse, and climatic aridification without systematic battle destruction',
          'Mohenjodaro still exists untouched today',
          'Harappans fought with iron cannons',
          'Because no skeletons were ever found anywhere',
        ],
        correctOptionIndex: 0,
        explanation: 'Paleoclimatic and river-channel studies show multi-causal ecological and economic transformation into Late Harappan rural cultures.',
        difficulty: 'application',
      },
      {
        stem: 'Which early Neolithic site in Balochistan (Pakistan) provides the earliest subcontinent evidence of mud-brick granaries, wheat/barley, and cotton?',
        options: ['Mehrgarh', 'Kalibangan', 'Lothal', 'Daimabad'],
        correctOptionIndex: 0,
        explanation: 'Mehrgarh (~7000 BCE onwards) documents early agrarian transition on the Bolan pass piedmont.',
        difficulty: 'standard',
      },
      {
        stem: 'Why was standardized Harappan cubical chert weight progression (1, 2, 4, 8, 16, 32, 64...) vital to the civilization?',
        options: [
          'It enabled regulated uniform taxation, standardized brick ratios (1:2:4), and long-distance commerce across thousands of kilometres',
          'It was used only for temple dice games',
          'It replaced spoken language completely',
          'It weighed ocean tides',
        ],
        correctOptionIndex: 0,
        explanation: 'Remarkable standardization of chert weights, seals, and 1:2:4 bricks points to strong civic/guild coordination across the Indus basin.',
        difficulty: 'application',
      },
      {
        stem: 'Which animal is conspicuously ABSENT from authentic Indus Valley steatite seals despite appearing widely in later Vedic and Mauryan art?',
        options: ['Unicorn / humped bull', 'Elephant', 'Horse (and Lion)', 'Rhinoceros'],
        correctOptionIndex: 2,
        explanation: 'Unicorn bulls, zebu bulls, elephants, tigers, and rhinos abound on Indus seals, whereas true horses and lions do not feature prominently.',
        difficulty: 'standard',
      },
      {
        stem: 'Who is known as the "Father of Indian Prehistory" for discovering the first Paleolithic hand-axe at Pallavaram (near Madras) in 1863?',
        options: ['John Marshall', 'Robert Bruce Foote', 'Alexander Cunningham', 'Mortimer Wheeler'],
        correctOptionIndex: 1,
        explanation: 'Geologist Robert Bruce Foote discovered the Pallavaram Paleolithic hand-axe in 1863.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Early & Later Vedic Polity, Economy & Literature',
    materialTitle: 'Early & Later Vedic Polity, Economy & Literature — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Early & Later Vedic India',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Early & Later Vedic Polity, Economy & Literature

## 1. Vedic Corpus Overview
- **Four Vedas:** **Rigveda** (1028 hymns/10 Mandalas; **Gayatri Mantra** in Mandala III by Vishwamitra; **Purusha Sukta** in Mandala X), **Samaveda** (melodies/music origin), **Yajurveda** (sacrificial prose/formulas), **Atharvaveda** (charms, medicine/Ayurveda roots, mentions *Sabha* & *Samiti* as twin daughters of Prajapati).
- **Brahmanas:** Ritual prose commentaries (*Shatapatha Brahmana* etc.).
- **Aranyakas ("Forest Books"):** Bridge ritual to philosophical contemplation.
- **Upanishads (Vedanta):** Metaphysical philosophy (*Brihadaranyaka, Chandogya, Katha, Mundaka* — **"Satyameva Jayate"** from *Mundaka Upanishad*).

## 2. Early (Rigvedic, ~1500–1000 BCE) vs Later Vedic (~1000–600 BCE)
| Dimension | Early Vedic (Rigvedic) | Later Vedic |
|---|---|---|
| **Core Geography** | **Sapta Sindhu** (Punjab–Indus–Saraswati) | **Ganga–Yamuna Doab / Kuru–Panchala** (assisted by **Iron / Krishna Ayas**) |
| **Polity** | Tribal chief (*Rajan / Gopati*); strong **Sabha** (elders), **Samiti** (general assembly), **Vidatha** (oldest assembly; women attended) | Territorial kingdoms (*Rashtra*); hereditary kingship (*Ashvamedha, Rajasuya, Vajapeya*); Vidatha vanished; women excluded from Sabha |
| **Economy** | **Pastoral** (cattle wealth = *Gavishti* "search for cows" = war); voluntary **Bali** | **Settled agriculture** (*Vrihi* rice, wheat); iron ploughshare; compulsory taxes (**Bali, Bhaga**) |
| **Society** | Egalitarian kin clans; **Varna** initially fluid/occupational; women (Ghosha, Lopamudra, Gargi later) studied & composed hymns; no child marriage | Rigid **hereditary birth-based Varna**; Ashrama system; declining female status |

## 3. Battle of Ten Kings (*Dasarajna*)
Fought on the bank of the **Parushni (Ravi)** river between Bharata king **Sudas** (guided by Vasishtha) and a confederacy of 10 tribes (guided by Vishwamitra); Sudas triumphed, giving his tribe's name **Bharata**.

## 4. Key Revision Takeaways
- **Satyameva Jayate** = *Mundaka Upanishad*; **Gayatri Mantra** = Rigveda Mandala III.
- **Sabha & Samiti** checked royal power in Rigvedic era; **Iron (*Krishna Ayas*)** & **Ganga Doab** expansion transformed Later Vedic society.
`,
    mcqs: [
      {
        stem: 'India\'s national motto "Satyameva Jayate" is taken from which Vedic/Upanishadic text?',
        options: ['Rigveda Mandala X', 'Mundaka Upanishad', 'Chandogya Upanishad', 'Samaveda'],
        correctOptionIndex: 1,
        explanation: '"Satyameva Jayate Nanritam" comes from the Mundaka Upanishad.',
        difficulty: 'foundation',
      },
      {
        stem: 'On the banks of which Rigvedic river was the famous Battle of Ten Kings (Dasarajna) won by Bharata king Sudas?',
        options: ['Shutudri (Sutlej)', 'Parushni (Ravi)', 'Askini (Chenab)', 'Vitasta (Jhelum)'],
        correctOptionIndex: 1,
        explanation: 'Mandala VII of the Rigveda recounts King Sudas\'s victory over ten confederated tribes along the Parushni (Ravi).',
        difficulty: 'foundation',
      },
      {
        stem: 'In which Veda are the tribal assemblies "Sabha" and "Samiti" poetically described as the twin daughters of Prajapati?',
        options: ['Rigveda', 'Samaveda', 'Yajurveda', 'Atharvaveda'],
        correctOptionIndex: 3,
        explanation: 'The Atharvaveda highlights the prominence of Sabha and Samiti by calling them twin daughters of Prajapati.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which key socio-economic shift occurred between the Early (Rigvedic) and Later Vedic periods?',
        options: [
          'Shift from urban Harappan sea trade to cave hunting',
          'Transition from semi-nomadic pastoralism in Sapta Sindhu to settled iron-plough agriculture in the Ganga–Yamuna Doab',
          'Disappearance of all kingship in favour of tribal republics everywhere',
          'Replacement of Sanskrit by Persian',
        ],
        correctOptionIndex: 1,
        explanation: 'Introduction of iron ("Krishna Ayas" / "Shyama Ayas") facilitated forest clearing and settled agrarian kingdoms across the upper Gangetic plain.',
        difficulty: 'standard',
      },
      {
        stem: 'Which term in the Rigveda originally meant "search for cows" and became synonymous with warfare?',
        options: ['Gavishti', 'Rajasuya', 'Bali', 'Nishka'],
        correctOptionIndex: 0,
        explanation: 'Because cattle were the measure of wealth, raids and wars were termed Gavishti ("desire/search for cattle").',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Veda is fundamentally a collection of chants and melodies forming the earliest root of Indian classical music?',
        options: ['Rigveda', 'Samaveda', 'Yajurveda', 'Atharvaveda'],
        correctOptionIndex: 1,
        explanation: 'Samaveda sets Rigvedic hymns to musical scales (Saman), laying the foundation of Indian musicology.',
        difficulty: 'foundation',
      },
      {
        stem: 'In which Mandala of the Rigveda does the "Purusha Sukta"—earliest literary reference to the fourfold Varna classification—appear?',
        options: ['Mandala I', 'Mandala III', 'Mandala VII', 'Mandala X'],
        correctOptionIndex: 3,
        explanation: 'Mandala X (regarded linguistically as a later addition to the Rigveda) contains the Purusha Sukta.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Rigvedic assembly was the oldest kin-based gathering for redistribution and rituals in which women actively participated during the Early Vedic period?',
        options: ['Vidatha', 'Mantriparishad', 'Sabha only', 'Gramani Council'],
        correctOptionIndex: 0,
        explanation: 'Vidatha was an early multifunctional Vedic assembly attended by men and women alike, disappearing in the Later Vedic period.',
        difficulty: 'standard',
      },
      {
        stem: 'In Later Vedic texts, what did "Krishna Ayas" (or Shyama Ayas) signify?',
        options: ['Gold ornament', 'Iron ("black metal")', 'Copper axe', 'Silver coin'],
        correctOptionIndex: 1,
        explanation: 'Later Vedic literature distinguishes copper/bronze (Ayas/Lohita Ayas) from darker Iron (Shyama/Krishna Ayas).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pair correctly matches Rigvedic river name to its modern river?',
        options: [
          'Vitasta – Jhelum; Vipasha – Beas; Shutudri – Sutlej',
          'Parushni – Indus; Askini – Ganga',
          'Kubha – Yamuna; Gomati – Godavari',
          'Saraswati – Narmada',
        ],
        correctOptionIndex: 0,
        explanation: 'Vitasta = Jhelum, Askini = Chenab, Parushni = Ravi, Vipasha = Beas, Shutudri = Sutlej.',
        difficulty: 'standard',
      },
      {
        stem: 'How did the nature of "Bali" change from Early Vedic to Later Vedic polity?',
        options: [
          'From a voluntary tribal tribute/offering to the Rajan into a regular, compulsory royal tax collected by the Bhagadugha',
          'From cash tax into sea trade',
          'It disappeared completely after 1000 BCE',
          'It referred only to marriage dowries',
        ],
        correctOptionIndex: 0,
        explanation: 'In settled territorial kingdoms, voluntary gifts (Bali) institutionalized into compulsory land/produce taxation.',
        difficulty: 'application',
      },
      {
        stem: 'Which philosophical Upanishad records the celebrated dialogue between young Nachiketa and Yama (Lord of Death) on the nature of the soul?',
        options: ['Brihadaranyaka Upanishad', 'Katha Upanishad', 'Aitareya Upanishad', 'Mandukya Upanishad'],
        correctOptionIndex: 1,
        explanation: 'The Katha Upanishad narrates Nachiketa\'s metaphysical questioning of Yama.',
        difficulty: 'standard',
      },
      {
        stem: 'Which statement accurately reflects the status of women in the Early Vedic period vs Later Vedic period?',
        options: [
          'Early Vedic women could attend assemblies (Sabha/Vidatha), undergo Upanayana, and compose hymns (Lopamudra, Ghosha), whereas Later Vedic patriarchy restricted these rights',
          'Women had no role in Rigvedic hymns and became supreme monarchs in Later Vedic era',
          'Sati and purdah were universal in Rigvedic times',
          'Women could not speak Sanskrit in 1500 BCE',
        ],
        correctOptionIndex: 0,
        explanation: 'Later Vedic society curtailed women\'s assembly attendance and education rights while tightening hereditary Varna.',
        difficulty: 'application',
      },
      {
        stem: 'What was "Nishka" in Rigvedic and early Later Vedic exchange?',
        options: [
          'Originally a gold necklace/ornament also serving as a unit of value/wealth',
          'A wooden ploughshare',
          'A copper temple bell',
          'A sacrificial horse',
        ],
        correctOptionIndex: 0,
        explanation: 'Gold Nishka ornaments functioned as proto-monetary stores of value prior to silver punch-marked coinage.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which group of texts represents the concluding philosophical essence of the Vedas ("Vedanta"), rejecting purely mechanical animal sacrifices in favour of inner knowledge (Jnana)?',
        options: ['Samhitas', 'Brahmanas', 'Upanishads', 'Kalpasutras'],
        correctOptionIndex: 2,
        explanation: 'The Upanishads form Vedanta, shifting emphasis from external yajna ritualism to Brahman–Atman realization.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Jainism, Buddhism & Heterodox Sects',
    materialTitle: 'Jainism, Buddhism & Heterodox Sects — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Jainism, Buddhism & Heterodox Sects',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Jainism, Buddhism & Heterodox Sects

## 1. Rise of Shramana Movements (6th Century BCE)
Social rigidity of Varna, costly animal sacrifices (harming cattle needed for iron-age plough agriculture), and rise of urban trade (*Vaishyas*) fuelled heterodox *Shramana* philosophies.

## 2. Jainism (24 Tirthankaras)
- **Key Tirthankaras:** 1st **Rishabhanatha** (bull symbol); 23rd **Parshvanatha** (Varanasi; 4 vows); 24th **Vardhamana Mahavira** (born Kundagrama, Vaishali; attained *Kaivalya* on Rijupalika river; passed away at **Pavapuri**; lion symbol).
- **Five Great Vows (*Pancha Mahavratas*):** *Ahimsa* (non-violence), *Satya*, *Asteya* (non-stealing), *Aparigraha* (non-possession), **Brahmacharya** (added by Mahavira).
- **Triratna (Three Jewels):** Right Faith (*Samyak Darshana*), Right Knowledge (*Samyak Jnana*), Right Conduct (*Samyak Charitra*).
- **Philosophies:** **Anekantavada** (many-sidedness of reality) & **Syadvada** (conditional predication).
- **Councils & Sects:** **1st Council (Pataliputra, Sthulabhadra)** → split into **Shvetambara** (white-clad) & **Digambara** (sky-clad, Bhadrabahu); **2nd Council (Vallabhi, 512 CE)** → compilation of Jain *Agamas* in Prakrit.

## 3. Buddhism
- **Gautama Buddha (Siddhartha):** Born **Lumbini** (Sakya clan); Great Renunciation (*Mahabhinishkramana*); Enlightenment (**Bodh Gaya** under Bodhi tree); 1st Sermon (**Sarnath** — *Dharmachakrapravartana*); **Mahaparinirvana** at **Kushinagar**.
- **Core Teachings:** **Four Noble Truths** (*Dukkha, Samudaya, Nirodha, Magga*), **Noble Eightfold Path**, **Middle Path** (*Madhyama Pratipada*), **Pratityasamutpada** (dependent origination), **Anatta** (no permanent soul—contrasting with Jain *Jiva*), **Triratna** (*Buddha, Dhamma, Sangha*).
- **Four Buddhist Councils:**
  1. **Rajagriha (483 BCE):** Ajatashatru; pres. **Mahakassapa** → *Sutta* (Ananda) & *Vinaya* (Upali) Pitakas.
  2. **Vaishali (383 BCE):** Kalashoka; pres. **Sabakami** → Sthaviravadins vs Mahasanghikas.
  3. **Pataliputra (c. 250 BCE):** **Ashoka**; pres. **Moggaliputta Tissa** → *Abhidhamma Pitaka* + missionary expansion.
  4. **Kundalavana (Kashmir, 1st–2nd c. CE):** **Kanishka**; pres. **Vasumitra** (Ashvaghosha vice) → **Hinayana** (Theravada) vs **Mahayana** (Bodhisattva ideal, Sanskrit texts).

## 4. Other Heterodox Sects
- **Ajivikas:** Founded by **Makkhali Gosala**; strict fatalism (**Niyati** — destiny); Barabar Caves donated by Ashoka.
- **Charvaka / Lokayata:** Materialist empiricism (*Brihaspati*).

## 5. Key Revision Takeaways
- **Buddhist Councils Order:** **Rajagriha → Vaishali → Pataliputra → Kashmir (R-V-P-K)**.
- **Jainism** accepts eternal **Jiva** (soul) and extreme *Ahimsa*; **Buddhism** teaches **Anatta** (no-soul) and the **Middle Path**.
- **Ajivikas** = **Makkhali Gosala** (*Niyati* determinism).
`,
    mcqs: [
      {
        stem: 'Which option arranges the Four Buddhist Councils in correct chronological order of their venues?',
        options: [
          'Vaishali → Rajagriha → Pataliputra → Kashmir',
          'Rajagriha → Vaishali → Pataliputra → Kundalavana (Kashmir)',
          'Pataliputra → Rajagriha → Kashmir → Vaishali',
          'Rajagriha → Pataliputra → Vaishali → Vallabhi',
        ],
        correctOptionIndex: 1,
        explanation: 'The four councils convened sequentially at Rajagriha (Ajatashatru), Vaishali (Kalashoka), Pataliputra (Ashoka), and Kundalavana in Kashmir (Kanishka).',
        difficulty: 'foundation',
      },
      {
        stem: 'Where did Gautama Buddha deliver his first sermon ("Dharmachakrapravartana" — Turning of the Wheel of Law)?',
        options: ['Bodh Gaya', 'Lumbini', 'Sarnath (Deer Park)', 'Kushinagar'],
        correctOptionIndex: 2,
        explanation: 'After enlightenment at Bodh Gaya, Buddha preached his first sermon to five ascetics at Isipatana (Sarnath).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which of the five Jain Mahavratas (Great Vows) was added by Vardhamana Mahavira to the four vows already taught by Parshvanatha?',
        options: ['Ahimsa', 'Satya', 'Brahmacharya (celibacy/chastity)', 'Aparigraha'],
        correctOptionIndex: 2,
        explanation: 'Parshvanatha taught four vows (non-violence, truth, non-stealing, non-possession); Mahavira added the fifth vow of Brahmacharya.',
        difficulty: 'foundation',
      },
      {
        stem: 'What philosophical doctrine is uniquely associated with Jain epistemology, emphasizing that truth/reality is multi-faceted?',
        options: ['Pratityasamutpada', 'Anekantavada (and Syadvada)', 'Advaita', 'Niyati'],
        correctOptionIndex: 1,
        explanation: 'Anekantavada (pluralism/many-sidedness) and Syadvada (qualified assertion) are central pillars of Jain logic.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who founded the deterministic Ajivika sect, which held that all events are strictly governed by fate (*Niyati*)?',
        options: ['Ajita Kesakambali', 'Makkhali Gosala', 'Purana Kassapa', 'Pakudha Kaccayana'],
        correctOptionIndex: 1,
        explanation: 'Makkhali Gosala, an early contemporary of Mahavira and Buddha, founded the Ajivika school centered on Niyati.',
        difficulty: 'foundation',
      },
      {
        stem: 'During which Buddhist Council did the formal doctrinal split between Hinayana (Theravada) and Mahayana (Bodhisattva-centered, Sanskrit texts) emerge?',
        options: ['First Council', 'Second Council', 'Third Council', 'Fourth Council (Kashmir under Kanishka)'],
        correctOptionIndex: 3,
        explanation: 'The Fourth Council under Kushan Emperor Kanishka (presided by Vasumitra) formalized Mahayana Buddhism.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which fundamental philosophical difference separates Buddhism from Jainism?',
        options: [
          'Buddhism advocates the Middle Path and rejects an eternal unchanging soul (Anatta), whereas Jainism prescribes severe asceticism and affirms eternal individual souls (Jiva) even in non-living objects',
          'Jainism rejects non-violence',
          'Buddhism promotes animal sacrifices in Vedas',
          'Jainism originated in Sri Lanka',
        ],
        correctOptionIndex: 0,
        explanation: 'While both are non-theistic Shramana traditions rejecting Vedic authority, Buddhism teaches Anatta and the Middle Way while Jainism teaches universal Jiva and rigorous penance.',
        difficulty: 'standard',
      },
      {
        stem: 'Which of the Three Pitakas (Tripitaka) compiles the monastic discipline rules for Buddhist monks and nuns?',
        options: ['Sutta Pitaka', 'Vinaya Pitaka', 'Abhidhamma Pitaka', 'Jataka Tales'],
        correctOptionIndex: 1,
        explanation: 'Vinaya Pitaka (recited by Upali at Rajagriha) contains monastic rules; Sutta Pitaka records Buddha\'s discourses; Abhidhamma covers philosophy.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under whose leadership did the First Jain Council at Pataliputra (c. 300 BCE) compile the 12 Angas, while Bhadrabahu\'s southern followers remained Digambara?',
        options: ['Sthulabhadra', 'Devardhi Kshamasramana', 'Hemachandra', 'Haribhadra'],
        correctOptionIndex: 0,
        explanation: 'After a Magadhan famine, monks staying north under Sthulabhadra adopted white robes (Shvetambara), while Bhadrabahu\'s returning group remained naked (Digambara).',
        difficulty: 'standard',
      },
      {
        stem: 'What does the Mahayana Buddhist concept of a "Bodhisattva" signify?',
        options: [
          'A ruler who conquers by sword',
          'An enlightened compassionate being who delays final individual Nirvana to help all sentient beings attain liberation',
          'A Vedic priest',
          'A Jain cave sculpture',
        ],
        correctOptionIndex: 1,
        explanation: 'Unlike the solitary Arhat ideal, Mahayana champions Bodhisattvas (such as Avalokiteshvara and Manjushri) motivated by universal compassion (Karuna).',
        difficulty: 'standard',
      },
      {
        stem: 'Where was the Second Jain Council (512 CE) held, where the Shvetambara Agamas were finally written down in Ardhamagadhi Prakrit?',
        options: ['Pataliputra', 'Vallabhi (Gujarat)', 'Ujjain', 'Mathura'],
        correctOptionIndex: 1,
        explanation: 'Presided over by Devardhi Kshamasramana, the Vallabhi Council finalized the Shvetambara canon.',
        difficulty: 'standard',
      },
      {
        stem: 'Why did the Vaishya mercantile class enthusiastically patronize Buddhism and Jainism in the 6th century BCE?',
        options: [
          'Non-violence protected trade routes/cattle, simple vernacular preaching bypassed costly Brahmanical rituals, and Dharma sanctioned peaceful money-lending/commerce',
          'Both religions forbade all trade and money',
          'They promised free warships',
          'They restricted followers to royal Kshatriyas only',
        ],
        correctOptionIndex: 0,
        explanation: 'Ahimsa preserved agrarian cattle, Pali/Prakrit sermons engaged urban merchants directly, and ethical social equality bypassed rigid Varna disabilities.',
        difficulty: 'application',
      },
      {
        stem: 'In Buddhist iconography, what do the Lotus/Bull, Horse, Bodhi Tree, Wheel, and Stupa symbolize respectively?',
        options: [
          'Birth, Renunciation, Enlightenment, First Sermon, and Mahaparinirvana',
          'The five Pandavas',
          'Five Mauryan provinces',
          'Five Jain vows',
        ],
        correctOptionIndex: 0,
        explanation: 'Early aniconic Buddhist art depicted Buddha\'s life milestones via symbols: Lotus/Elephant (Birth), Horse (Departure), Bodhi Tree (Enlightenment), Wheel (First Sermon), Stupa (Parinirvana).',
        difficulty: 'standard',
      },
      {
        stem: 'Which rock-cut caves in Bihar were carved and donated by Ashoka and his grandson Dasharatha for the Ajivika ascetics?',
        options: ['Ajanta Caves', 'Barabar and Nagarjuni Caves', 'Elephanta Caves', 'Udayagiri Caves'],
        correctOptionIndex: 1,
        explanation: 'The polished granite Barabar (Lomas Rishi, Sudama) and Nagarjuni caves are the oldest surviving rock-cut caves in India, gifted to the Ajivikas.',
        difficulty: 'advanced',
      },
      {
        stem: 'What central doctrine of the Lokayata / Charvaka school set it radically apart from Vedic, Buddhist, and Jain philosophies alike?',
        options: [
          'Materialistic empiricism rejecting karma, rebirth, soul, and scriptural authority beyond direct sensory perception (Pratyaksha)',
          'Strict belief in 24 Tirthankaras',
          'Worship of Bodhisattvas',
          'Fatalistic determinism (Niyati)',
        ],
        correctOptionIndex: 0,
        explanation: 'Charvaka accepted only direct perception (Pratyaksha) as valid knowledge, denying afterlife, soul, and Vedic ritualism.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: '16 Mahajanapadas, Magadha Rise & Mauryan Administration',
    materialTitle: '16 Mahajanapadas, Magadha Rise & Mauryan Administration — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Mahajanapadas & Mauryan Empire',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# 16 Mahajanapadas, Magadha Rise & Mauryan Administration

## 1. The Sixteen Mahajanapadas (~6th Century BCE)
Listed in the Buddhist *Anguttara Nikaya* and Jain *Bhagavati Sutra*:
- **Monarchies:** Magadha (Rajagriha/Pataliputra), Kosala (Shravasti), Vatsa (Kaushambi), Avanti (Ujjain/Mahishmati).
- **Republican Gana-Sanghas:** **Vajji** (Vaishali — Licchavis) and **Malla** (Kushinagar/Pava).
- **Why Magadha Triumphed:** Rich **iron ore** (Singhbhum/Rajmahal), fertile alluvial rice plains, forest timber/war **elephants**, strategic rivers (Ganga–Son), and ambitious rulers (**Bimbisara & Ajatashatru** [Haryanka], **Shishunaga**, **Mahapadma Nanda**).

## 2. The Mauryan Empire (322–185 BCE)
- **Chandragupta Maurya:** Overthrew **Dhana Nanda** guided by **Chanakya (Kautilya)**; defeated **Seleucus Nicator** (305 BCE), receiving Megasthenes (author of ***Indica***).
- **Bindusara ("Amitrochates"):** Expanded into Deccan; favored Ajivikas.
- **Ashoka ("Devanampiya Piyadassi"):** **Kalinga War (261 BCE)** (Major Rock Edict XIII) transformed him toward **Dhamma** (*Dhammaghosha* over *Bherighosha*); appointed **Dhamma Mahamatras** (Edict V); erected pillars & rock edicts (including **Kalsi, Uttarakhand**).
- **Administration (*Arthashastra* & Edicts):**
  - **Saptanga Theory:** 7 organs of state (Swami, Amatya, Janapada, Durga, Kosha, Danda, Mitra).
  - **Key Officers:** **Samaharta** (Chief Revenue Assessor), **Sannidhata** (Chief Treasurer), **Sitadhyaksha** (Crown agriculture), **Pradeshika / Rajuka / Yukta** (district governance).
  - **Megasthenes:** Described Pataliputra municipal governance via **6 committees of 5 members each**, and 7 social classes (historians note Megasthenes confused caste with occupational groups).
- **Decline:** Weak successors post-232 BCE, financial strain, provincial autonomy; last ruler **Brihadratha** assassinated by general **Pushyamitra Shunga (185 BCE)**.

## 3. Key Revision Takeaways
- **Magadha's rise:** Iron + fertile alluvium + war elephants + strategic river capitals.
- **Kalinga War (261 BCE)** is recorded in **Rock Edict XIII**; **Kalsi** carries 14 Major Rock Edicts.
- **Samaharta** = Revenue collector-general; **Sannidhata** = Treasurer; **Rajukas** = district judicial/revenue officers.
`,
    mcqs: [
      {
        stem: 'Which Buddhist text provides the classic canonical list of the Sixteen Mahajanapadas of the 6th century BCE?',
        options: ['Dhammapada', 'Anguttara Nikaya', 'Milindapanha', 'Buddhacharita'],
        correctOptionIndex: 1,
        explanation: 'The Buddhist Anguttara Nikaya (and Jain Bhagavati Sutra) enumerates the 16 Mahajanapadas.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which two Mahajanapadas operated as prominent aristocratic republics (*Gana-Sanghas*) rather than hereditary monarchies?',
        options: ['Magadha and Avanti', 'Vajji (Vaishali) and Malla', 'Kosala and Vatsa', 'Gandhara and Kamboja'],
        correctOptionIndex: 1,
        explanation: 'The Vajji confederacy (headed by Licchavis of Vaishali) and the Mallas were celebrated Gana-Sangha republics.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Ashokan Rock Edict vividly describes his remorse over the 261 BCE Kalinga War and commitment to conquest by Dhamma?',
        options: ['Major Rock Edict I', 'Major Rock Edict V', 'Major Rock Edict XIII', 'Pillar Edict VII'],
        correctOptionIndex: 2,
        explanation: 'Major Rock Edict XIII (seen also on the Kalsi boulder!) details the Kalinga devastation and Ashoka\'s turn to Dhammavijaya.',
        difficulty: 'foundation',
      },
      {
        stem: 'In Mauryan central administration, what were the specific duties of the "Samaharta" and "Sannidhata"?',
        options: [
          'Samaharta was Chief Revenue Collector/Assessor, whereas Sannidhata was Chief Treasurer / Custodian of the Royal Treasury & Storehouses',
          'Both commanded naval fleets',
          'Samaharta was court poet and Sannidhata was spy',
          'Both governed Kalinga',
        ],
        correctOptionIndex: 0,
        explanation: 'Kautilya\'s Arthashastra distinguishes Samaharta (revenue assessment/collection across the empire) from Sannidhata (treasury & royal storehouse custodian).',
        difficulty: 'standard',
      },
      {
        stem: 'Who authored the *Indica* after serving as Seleucus Nicator\'s Greek ambassador to Chandragupta Maurya\'s court at Pataliputra?',
        options: ['Deimachus', 'Megasthenes', 'Pliny', 'Arrian'],
        correctOptionIndex: 1,
        explanation: 'Megasthenes recorded Mauryan urban governance (6 municipal committees of 5 members each), military boards, and society in *Indica*.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who assassinated the last Mauryan emperor Brihadratha in 185 BCE to establish the Shunga dynasty?',
        options: ['Vasudeva Kanva', 'Pushyamitra Shunga', 'Kharavela', 'Menander'],
        correctOptionIndex: 1,
        explanation: 'Commander-in-chief Pushyamitra Shunga killed Brihadratha during a military parade in 185 BCE.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why was Magadha geographically better positioned than Avanti or Kosala to forge India\'s first subcontinental empire?',
        options: [
          'Easy access to rich iron deposits in southern Bihar/Jharkhand, alluvial Ganga–Son rice surpluses, abundant war elephants from eastern forests, and strategic fortified capitals',
          'Direct Mediterranean port access',
          'Presence of gold diamonds at Rajagriha',
          'Isolation inside Ladakh mountains',
        ],
        correctOptionIndex: 0,
        explanation: 'Magadha uniquely combined metallurgy (iron weapons/tools), agricultural wealth, riverine logistics, and timber/elephants.',
        difficulty: 'application',
      },
      {
        stem: 'Which officials were specially appointed by Emperor Ashoka in his 14th regnal year (Major Rock Edict V) to propagate Dhamma and oversee prisoner/community welfare?',
        options: ['Sitadhyaksha', 'Dhamma Mahamatras', 'Gopa', 'Sthanika'],
        correctOptionIndex: 1,
        explanation: 'Rock Edict V records the creation of Dhamma Mahamatras to look after moral conduct, charity, and welfare across sects.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who first deciphered the Ashokan Brahmi script in 1837, unlocking Mauryan epigraphy?',
        options: ['Alexander Cunningham', 'James Prinsep', 'William Jones', 'John Marshall'],
        correctOptionIndex: 1,
        explanation: 'East India Company official James Prinsep deciphered Brahmi and identified "Devanampiya Piyadassi" as Emperor Ashoka.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which list correctly gives the seven constituent elements ("Saptanga") of the state in Kautilya\'s *Arthashastra*?',
        options: [
          'King (Swami), Ministers (Amatya), Territory/People (Janapada), Fort (Durga), Treasury (Kosha), Army/Justice (Danda), Ally (Mitra)',
          'Four Vedas and Three Pitakas',
          'Seven Mauryan rivers',
          'Seven hills of Rajagriha',
        ],
        correctOptionIndex: 0,
        explanation: 'Saptanga treats the state as an organic seven-limbed entity.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Mauryan officer supervised state-owned crown agricultural lands (*Sita* lands)?',
        options: ['Sitadhyaksha', 'Panyadhyaksha', 'Lohadhyaksha', 'Akaradhyaksha'],
        correctOptionIndex: 0,
        explanation: 'Sitadhyaksha managed royal farms, while Panyadhyaksha regulated trade/commerce and Akaradhyaksha managed mines.',
        difficulty: 'standard',
      },
      {
        stem: 'Why did Megasthenes mistakenly write that "slavery did not exist in India" and that Indian society was divided into "seven classes"?',
        options: [
          'Mauryan domestic dasas/karmakaras were treated far more mildly and held legal protections compared to Greek chattel slaves, and he confused occupational groups with endogamous Jatis',
          'He never actually visited India',
          'There were zero artisans or farmers in Pataliputra',
          'The Arthashastra banned farming',
        ],
        correctOptionIndex: 0,
        explanation: 'Greek chattel slavery lacked the contractual protections seen in India, and Megasthenes observed visible occupational divisions (philosophers, farmers, herdsmen, artisans, soldiers, overseers, councillors).',
        difficulty: 'application',
      },
      {
        stem: 'Which early ruler of the Nanda dynasty is credited in Hathigumpha and Puranic sources with building an irrigation canal in Kalinga and amassing a vast empire before the Mauryas?',
        options: ['Bimbisara', 'Mahapadma Nanda', 'Ajatashatru', 'Udayin'],
        correctOptionIndex: 1,
        explanation: 'Mahapadma Nanda ("Ekarat") expanded Magadha deeply across northern and eastern India before Chandragupta overthrew his successor Dhana Nanda.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Mauryan provincial capital governed the North-Western frontier (where young Ashoka once served as viceroy)?',
        options: ['Tosali', 'Taxila (Takshashila)', 'Suvarnagiri', 'Ujjain'],
        correctOptionIndex: 1,
        explanation: 'The four provincial headquarters under Ashoka were Taxila (NW), Ujjain (West), Tosali (East/Kalinga), and Suvarnagiri (South), with Pataliputra as imperial core.',
        difficulty: 'foundation',
      },
      {
        stem: 'How did Ashoka\'s "Dhamma" differ from strictly sectarian Buddhism?',
        options: [
          'In his rock edicts, Dhamma was an ethical civic code of tolerance, respect for elders/servants, non-violence, and minimal ritual applicable to followers of all sects',
          'It ordered compulsory forced conversion of all Brahmins',
          'It banned agriculture across the Ganga valley',
          'It consisted only of Greek philosophy',
        ],
        correctOptionIndex: 0,
        explanation: 'While personally Buddhist, Ashoka framed public Dhamma as a universal moral glue across a diverse multi-religious empire.',
        difficulty: 'application',
      },
    ],
  },
  {
    topicTitle: 'Post-Mauryan Polities, Silk Route Trade & Sangam Age',
    materialTitle: 'Post-Mauryan Polities, Silk Route Trade & Sangam Age — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Post-Mauryan India & Sangam Age',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Post-Mauryan Polities, Silk Route Trade & Sangam Age

## 1. Indigenous & Central Asian Polities (c. 200 BCE–300 CE)
- **Shungas & Kanvas:** Pushyamitra Shunga revived Ashvamedha sacrifices while Bharhut/Sanchi stupa railings flourished; **Heliodorus Pillar** (Besnagar/Vidisha) records Greek ambassador worshipping Vasudeva.
- **Satavahanas (Deccan, Paithan):** **Gautamiputra Satakarni** (Nashik Prashasti by Gautami Balashri); **earliest land grants to Brahmins/monks**; issued lead/potin/silver coins; **Amaravati** stupa art.
- **Indo-Greeks:** **Menander (Milinda)** converted to Buddhism (*Milindapanha* by Nagasena); **first rulers in India to issue portrait/die-struck gold coins** attributed to named kings.
- **Shakas (Sakas):** **Rudradaman I** (Junagadh Rock Inscription — **earliest long chaste Sanskrit inscription**; repaired **Sudarshana Lake**).
- **Kushans:** **Kanishka** (78 CE **Shaka Era**; Purushapura & Mathura capitals; patronized **Ashvaghosha**, **Charaka**, **Nagarjuna**, 4th Buddhist Council; controlled **Silk Route** tolls; abundant pure **gold Dinars**).

## 2. Art Schools & Trade
- **Gandhara School:** Grey schist stone, Greco-Roman realism (wavy hair, muscular drapery, halo), Kushan patronage.
- **Mathura School:** Spotted red sandstone, indigenous spiritual serenity, carved **Buddha, Jain Tirthankaras, and Hindu deities** + headless **Kanishka statue**.
- **Amaravati School:** White marble/limestone narrative medallions under Satavahanas.
- **Trade:** Discovery of **Monsoon winds (Hippalus)** boosted Roman gold influx into **Arikamedu** (Poduke), **Muziris**, **Bharuch (Barygaza)**.

## 3. Sangam Age (Tamilakam)
- **Three Crowns (*Muvendar*):** **Cheras** (Vanji; bow emblem; Muziris port), **Cholas** (Uraiyur/Puhar; tiger emblem; **Karikala**), **Pandyas** (Madurai; fish/carp emblem; pearl fisheries).
- **Literature:** *Tolkappiyam* (earliest Tamil grammar), *Ettuttokai* & *Pattuppattu*, *Tirukkural* (Tiruvalluvar), *Silappadikaram* (Ilango Adigal) & *Manimekalai* (Sattanar).

## 4. Key Revision Takeaways
- **Indo-Greeks** issued first portrait/gold coins in India; **Kanishka** initiated **78 CE Shaka Era**.
- **Junagadh Inscription (Rudradaman I)** = earliest chaste Sanskrit rock inscription; **Satavahanas** pioneered tax-free land grants.
- **Chera (Bow), Chola (Tiger), Pandya (Fish)** formed the Sangam triad.
`,
    mcqs: [
      {
        stem: 'Which foreign-origin dynasty was the FIRST in Indian history to issue die-struck coins bearing royal portraits and clear ruler names, as well as early gold coins?',
        options: ['Shakas', 'Indo-Greeks', 'Parthians', 'Hunas'],
        correctOptionIndex: 1,
        explanation: 'Indo-Greek monarchs (like Demetrius and Menander) pioneered Greek-style portrait coinage bearing bilingual legends.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which famous Shaka Kshatrapa ruler issued the Junagadh Rock Inscription—India\'s earliest major royal inscription in chaste Sanskrit—recording repair of the Sudarshana Lake?',
        options: ['Nahapana', 'Rudradaman I', 'Maues', 'Gondophernes'],
        correctOptionIndex: 1,
        explanation: 'Rudradaman I\'s Junagadh inscription (150 CE) praises him for repairing the Mauryan-era Sudarshana reservoir out of his own treasury without extra forced labour (Vishti).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Kushan emperor founded the Shaka Era starting in 78 CE (still India\'s official national calendar era) and patronized Ashvaghosha and Charaka?',
        options: ['Kujula Kadphises', 'Vima Kadphises', 'Kanishka', 'Vasudeva'],
        correctOptionIndex: 2,
        explanation: 'Kanishka\'s accession in 78 CE is traditionally equated with the start of the Shaka Era.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Deccan dynasty pioneered the practice of granting tax-free land to Brahmins and Buddhist Sanghas and issued abundant lead and potin coins?',
        options: ['Mauryas', 'Satavahanas', 'Guptas', 'Cholas'],
        correctOptionIndex: 1,
        explanation: 'The Satavahanas (Simuka, Gautamiputra Satakarni) initiated epigraphically recorded land grants (Brahmanadeya/Brahmadeya roots).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which sculptural school used spotted RED SANDSTONE and created the earliest indigenous images of Buddha alongside Jain Tirthankaras and Hindu deities?',
        options: ['Gandhara School', 'Mathura School', 'Amaravati School', 'Sarnath Gupta School'],
        correctOptionIndex: 1,
        explanation: 'Mathura artisans worked in spotted red sandstone from Sikri, producing iconic spiritual images across all three Indian faiths.',
        difficulty: 'foundation',
      },
      {
        stem: 'The famous Buddhist philosophical dialogue *Milindapanha* ("Questions of Milinda") records conversations between monk Nagasena and which Indo-Greek king?',
        options: ['Demetrius', 'Menander', 'Antialcidas', 'Eucratides'],
        correctOptionIndex: 1,
        explanation: 'King Menander (Milinda) questioned monk Nagasena on Nirvana and non-self in the Pali text *Milindapanha*.',
        difficulty: 'foundation',
      },
      {
        stem: 'In Sangam Tamil literature, which three emblems belonged respectively to the Cheras, Cholas, and Pandyas?',
        options: [
          'Chera: Bow & Arrow; Chola: Tiger; Pandya: Twin Fish',
          'Chera: Tiger; Chola: Lion; Pandya: Elephant',
          'Chera: Fish; Chola: Bow; Pandya: Peacock',
          'Chera: Trident; Chola: Chakra; Pandya: Horse',
        ],
        correctOptionIndex: 0,
        explanation: 'The three crowned Tamil dynasties (Muvendar) carried Bow (Chera), Tiger (Chola), and Carp/Fish (Pandya).',
        difficulty: 'standard',
      },
      {
        stem: 'Which ancient Tamil port on India\'s southeastern Coromandel coast (near Puducherry) yielded Roman amphorae, Arretine pottery, and glass beads?',
        options: ['Bharuch', 'Arikamedu (Poduke)', 'Tamralipti', 'Sopara'],
        correctOptionIndex: 1,
        explanation: 'Excavated by Mortimer Wheeler, Arikamedu (identified with Poduke in the *Periplus of the Erythraean Sea*) was a major Indo-Roman trading depot.',
        difficulty: 'standard',
      },
      {
        stem: 'Who erected the Garuda Pillar (Besnagar/Vidisha) inscribing himself as a Greek "Bhagavata" devotee of Vasudeva (Krishna)?',
        options: ['Megasthenes', 'Heliodorus (ambassador of Antialcidas)', 'Hippalus', 'Ptolemy'],
        correctOptionIndex: 1,
        explanation: 'Heliodorus from Taxila erected the Besnagar Garuda pillar (~113 BCE), demonstrating early Greek integration into Vaishnava devotion.',
        difficulty: 'standard',
      },
      {
        stem: 'How did the Kushans finance the purest and highest-volume gold coinage in early Indian history?',
        options: [
          'By controlling central Asian Silk Route crossroads linking China, Rome, and India, levying transit tolls and exchanging Indian spices/textiles for Roman bullion',
          'By mining coal in Gujarat',
          'By taxing Antarctic fisheries',
          'By printing paper notes',
        ],
        correctOptionIndex: 0,
        explanation: 'Control of Bactria–Tarim–Gandhara Silk Route links and thriving Indo-Roman bullion inflows sustained rich Kushan Dinars.',
        difficulty: 'application',
      },
      {
        stem: 'Who authored the classic Sangam-era Tamil epic *Silappadikaram* ("The Story of the Anklet") featuring Kannagi and Kovalan?',
        options: ['Tiruvalluvar', 'Ilango Adigal', 'Sattanar', 'Tolkappiyar'],
        correctOptionIndex: 1,
        explanation: 'Jain ascetic-prince Ilango Adigal composed *Silappadikaram*, while Sattanar authored its sequel *Manimekalai*.',
        difficulty: 'standard',
      },
      {
        stem: 'Which major distinction separates Gandhara Buddhist sculpture from Mathura sculpture?',
        options: [
          'Gandhara uses grey schist/stucco with Hellenistic curly hair and heavy realistic toga folds; Mathura uses red sandstone with indigenous rounded spiritual proportions',
          'Gandhara carved only bronze Shiva statues',
          'Mathura used pure white marble exclusively',
          'Gandhara never sculpted Buddha figures',
        ],
        correctOptionIndex: 0,
        explanation: 'Gandhara blended Hellenistic/Roman realism with Buddhist themes, while Mathura evolved indigenous Yaksha sculptural traditions.',
        difficulty: 'standard',
      },
      {
        stem: 'Which famous ancient Sanskrit playwright and Buddhist philosopher in Kanishka\'s court authored *Buddhacharita*?',
        options: ['Kalidasa', 'Ashvaghosha', 'Bhasa', 'Bharavi'],
        correctOptionIndex: 1,
        explanation: 'Ashvaghosha authored *Buddhacharita* and *Saundarananda* and served as vice-president of the 4th Buddhist Council.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which text—whose author remains anonymous—is an invaluable 1st-century CE Greek sailors\' handbook detailing Indian ports (Barygaza, Muziris) and Indo-Roman trade?',
        options: ['Indica', 'Periplus of the Erythraean Sea', 'Geographica', 'Mahavamsa'],
        correctOptionIndex: 1,
        explanation: 'The *Periplus of the Erythraean Sea* provides an eyewitness commercial inventory of Red Sea–Indian Ocean ports and monsoon navigation.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which Sangam Chola king constructed the ancient Kallanai (Grand Anicut) stone dam across the Kaveri and founded Puhar (Kaveripattinam)?',
        options: ['Nedunjeliyan', 'Karikala Chola', 'Senguttuvan', 'Rajaraja I'],
        correctOptionIndex: 1,
        explanation: 'Karikala Chola won the Battle of Venni, developed Kaveri irrigation works, and fostered Puhar maritime commerce.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Gupta Empire, Harshavardhana & Early South Indian Dynasties',
    materialTitle: 'Gupta Empire, Harshavardhana & Early South Indian Dynasties — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Guptas, Harsha, Pallavas & Chalukyas',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Gupta Empire, Harshavardhana & Early South Indian Dynasties

## 1. The Gupta Empire (~319–550 CE)
- **Chandragupta I:** Launched **Gupta Era (319–320 CE)**; married Licchavi princess Kumaradevi.
- **Samudragupta:** Chronicled in **Harisena's Prayag Prashasti** (Allahabad Pillar): defeated 9 Aryavarta kings (*Prasabhoddharana*), 12 Dakshinapatha kings (*Grahana-moksha-anugraha*), and frontier states including **Kartripura**; performed Ashvamedha; depicted playing the **Veena** on gold coins.
- **Chandragupta II (Vikramaditya):** Defeated Shakas of Gujarat; Ujjain second capital; **Faxian (Fa-Hien)** visited; court adorned by **Navaratnas** (**Kalidasa**, **Amarasimha**, **Dhanvantari**, **Varahamihira**); **Mehrauli Iron Pillar** (rust-resistant metallurgy).
- **Kumaragupta I:** Founded **Nalanda Mahavihara**.
- **Skandagupta:** Repulsed early **Huna** invasions (Bhitari Pillar).
- **Culture & Science ("Classical Age" — balanced view):** **Aryabhata** (*Aryabhatiya*: place-value decimal zero, earth's axial rotation, eclipse geometry), **Varahamihira** (*Brihat Samhita*), **Sushruta/Charaka** medical compilations; **Deogarh Dashavatara Temple** (early Nagara temple); **Ajanta Caves** murals; **Golden gold Dinars** alongside shrinking town life & growing **feudal *Samanta* land grants** (warning against uncritically calling it an unqualified "Golden Age" for lower classes/women—Sati earliest epigraphic mention at **Eran, 510 CE**).

## 2. Harshavardhana (606–647 CE)
- **Pushyabhuti Dynasty (Thanesar → Kannauj):** United North India up to Narmada (**stopped at Narmada by Chalukya Pulakeshin II**, Aihole Inscription by Ravikirti).
- **Sources:** **Banabhatta** (*Harshacharita*, *Kadambari*) and Chinese pilgrim **Xuanzang** (*Si-Yu-Ki*, visited **Govishana/Kashipur** & **Brahmapura** in Uttarakhand); Harsha wrote *Ratnavali, Nagananda, Priyadarshika*; held assemblies at Kannauj & **Prayag (Maha Moksha Parishad)**.

## 3. Pallavas & Chalukyas
- **Pallavas (Kanchipuram):** Mahendravarman I, Narasimhavarman I (*Mamalla* — defeated Pulakeshin II, built **Mahabalipuram Rathas / Shore Temple**).
- **Badami Chalukyas:** Pulakeshin II (**Aihole Prashasti**); Vesara temple beginnings at **Pattadakal, Aihole, Badami**.

## 4. Key Revision Takeaways
- **Samudragupta's** conquests = **Prayag Prashasti (Harisena)**; **Pulakeshin II's** defeat of Harsha = **Aihole Inscription (Ravikirti)**.
- **Faxian** visited under **Chandragupta II**; **Xuanzang** under **Harshavardhana**.
- **Nalanda** founded by **Kumaragupta I**; **Eran (510 CE)** has earliest epigraphic Sati record.
`,
    mcqs: [
      {
        stem: 'Who composed the celebrated Sanskrit Prayag Prashasti (Allahabad Pillar Inscription) detailing Samudragupta\'s campaigns—including frontier state Kartripura?',
        options: ['Kalidasa', 'Harisena', 'Ravikirti', 'Banabhatta'],
        correctOptionIndex: 1,
        explanation: 'Court poet-minister Harisena inscribed Samudragupta\'s victories in chaste Sanskrit Champu style on the Ashokan Allahabad pillar.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Gupta monarch founded the world-renowned Buddhist monastic university of Nalanda?',
        options: ['Chandragupta I', 'Samudragupta', 'Kumaragupta I', 'Skandagupta'],
        correctOptionIndex: 2,
        explanation: 'Kumaragupta I (Shakraditya) established the core monastery at Nalanda in the 5th century CE.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Chinese Buddhist pilgrim visited India during the reign of Chandragupta II Vikramaditya and observed society without knowing royal names personally?',
        options: ['Xuanzang (Hiuen Tsang)', 'Faxian (Fa-Hien)', 'I-Tsing', 'Song Yun'],
        correctOptionIndex: 1,
        explanation: 'Faxian travelled in India c. 399–414 CE under Chandragupta II, praising prosperous Gangetic cities while noting Chandalas\' segregation.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Chalukya king defeated Harshavardhana on the banks of the Narmada river, as immortalized in Ravikirti\'s Aihole Inscription?',
        options: ['Vikramaditya I', 'Pulakeshin II', 'Kirtivarman', 'Tailapa II'],
        correctOptionIndex: 1,
        explanation: 'Ravikirti\'s Aihole Prashasti records Pulakeshin II halting Harsha\'s southern advance along the Narmada (~618–630 CE).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Gupta-period mathematician-astronomer explained solar and lunar eclipses scientifically and proposed that Earth rotates on its axis?',
        options: ['Bhaskara II', 'Aryabhata (Aryabhatiya, 499 CE)', 'Brahmagupta', 'Madhava'],
        correctOptionIndex: 1,
        explanation: 'Aryabhata I of Kusumapura calculated pi accurately, used decimal place-value logic, explained eclipses via shadow geometry, and taught Earth\'s axial rotation.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which rock-cut "Seven Pagodas" / Pancha Rathas and Shore Temple complex at Mahabalipuram (Mamallapuram) was initiated under the Pallavas?',
        options: ['Kailasanatha of Ellora', 'Monolithic Rathas under Narasimhavarman I (Mamalla)', 'Konark Sun Temple', 'Brihadeeswarar Temple'],
        correctOptionIndex: 1,
        explanation: 'Narasimhavarman I ("Mamalla") gave his name to Mamallapuram and carved the monolithic Five Rathas (Dharmaraja, Bhima, Arjuna, Nakula-Sahadeva, Draupadi).',
        difficulty: 'standard',
      },
      {
        stem: 'Which early 6th-century Gupta inscription (510 CE, Madhya Pradesh) contains India\'s earliest clear epigraphic evidence of Sati (widow self-immolation)?',
        options: ['Bhitari Pillar', 'Eran Stone Pillar Inscription (Bhanugupta)', 'Junagadh Inscription', 'Mehrauli Iron Pillar'],
        correctOptionIndex: 1,
        explanation: 'The 510 CE Eran inscription records the death of Gupta commander Goparaja fighting Hunas and his wife ascending the pyre.',
        difficulty: 'standard',
      },
      {
        stem: 'Who authored Harshavardhana\'s ornate Sanskrit biography *Harshacharita* and prose romance *Kadambari*?',
        options: ['Kalidasa', 'Banabhatta', 'Vishakhadatta', 'Bhavabhuti'],
        correctOptionIndex: 1,
        explanation: 'Banabhatta served as Asthana Kavi (court poet) to Harshavardhana at Kannauj.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why do modern historians hesitate to call the Gupta era an uncritically uniform "Golden Age" for all classes of Indian society?',
        options: [
          'While elite Sanskrit literature, temple art, and astronomy flourished, archaeological layers show urban trade decline, rising feudal *Samanta* subordination, widening caste untouchability, and declining women\'s property/remarriage status',
          'Because no Sanskrit books existed in the Gupta age',
          'Because Guptas minted only leather coins',
          'Because temples were banned under Guptas',
        ],
        correctOptionIndex: 0,
        explanation: 'Balanced historiography highlights glittering elite classical arts alongside social stratification, urban contraction (R.S. Sharma), and growing feudalization.',
        difficulty: 'application',
      },
      {
        stem: 'Which Gupta ruler repulsed fierce Central Asian Huna invasions (under Toramana\'s predecessors) as celebrated in the Bhitari Pillar Inscription?',
        options: ['Samudragupta', 'Skandagupta', 'Purugupta', 'Vishnugupta'],
        correctOptionIndex: 1,
        explanation: 'Skandagupta successfully defended the northwest against early Hephthalite (White Huna) incursions.',
        difficulty: 'standard',
      },
      {
        stem: 'Which celebrated Gupta Sanskrit drama by Vishakhadatta dramatizes Chanakya\'s political intrigue supporting Chandragupta Maurya against the Nandas?',
        options: ['Abhijnanashakuntalam', 'Mudrarakshasa', 'Mrichchhakatika', 'Malavikagnimitram'],
        correctOptionIndex: 1,
        explanation: 'Vishakhadatta wrote *Mudrarakshasa* (whereas Kalidasa wrote *Shakuntalam*, and Shudraka wrote *Mrichchhakatika*).',
        difficulty: 'standard',
      },
      {
        stem: 'Which policy did Samudragupta apply to the 12 defeated rulers of Dakshinapatha (South India) in contrast to his direct annexation (*Prasabhoddharana*) of northern Aryavarta kings?',
        options: [
          'Grahana-moksha-anugraha (capturing, liberating, and reinstating them as tribute-paying vassals)',
          'Complete naval exile to Indonesia',
          'Permanent annexation of Tamil Nadu under Pataliputra governors',
          'Paying tribute to them',
        ],
        correctOptionIndex: 0,
        explanation: 'Recognizing geographic distance, Samudragupta reinstated southern monarchs after formal submission (Grahana-moksha-anugraha).',
        difficulty: 'advanced',
      },
      {
        stem: 'Which structural temple at Deogarh (Lalitpur, UP) is regarded as one of the earliest surviving Panchayatan Nagara stone temples with a Shikhara?',
        options: ['Dashavatara Temple', 'Lingaraja Temple', 'Modhera Sun Temple', 'Martand Temple'],
        correctOptionIndex: 0,
        explanation: 'The late-Gupta Dashavatara Temple at Deogarh showcases early Panchayatan layout and carved mythological panels.',
        difficulty: 'standard',
      },
      {
        stem: 'What was "Vishti" in Gupta and post-Gupta land charters?',
        options: [
          'Forced unpaid labour exacted from peasants by the state or land-grant beneficiaries',
          'A gold coin stamped with Garuda',
          'A Sanskrit medical manual',
          'A silk caravan route',
        ],
        correctOptionIndex: 0,
        explanation: 'Expanding Brahmadeya and royal grants transferred rights to exact Vishti (forced labour) alongside village taxes.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which king of Kannauj–Thanesar shifted North India\'s political gravity permanently away from Pataliputra to Kannauj in the 7th century?',
        options: ['Samudragupta', 'Harshavardhana', 'Pushyamitra Shunga', 'Bimbisara'],
        correctOptionIndex: 1,
        explanation: 'Following Maukhari marriage alliances and Shashanka conflicts, Harsha made Kannauj (Mahodaya) the premier imperial hub of northern India.',
        difficulty: 'foundation',
      },
    ],
  },
];
