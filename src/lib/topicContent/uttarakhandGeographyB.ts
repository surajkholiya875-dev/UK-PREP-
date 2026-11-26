import { TopicContentPackage } from './types';

export const UTTARAKHAND_GEOGRAPHY_PART_B: TopicContentPackage[] = [
  {
    topicTitle: 'Soil Types, Erosion & Slope Conservation in Uttarakhand',
    materialTitle: 'Soil Types, Erosion & Slope Conservation in Uttarakhand — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Soils & Conservation in Uttarakhand',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Soil Types, Erosion & Slope Conservation in Uttarakhand

## 1. Altitudinal Distribution of Major Soil Groups
| Soil Group | Geographical Belt | Physical & Chemical Traits | Dominant Land Use |
|---|---|---|---|
| **Terai Alluvial Soils** | Udham Singh Nagar, southern Haridwar/Nainital | Fine silty–clay loam, rich in nitrogen and organic matter | Intensive rice, wheat, sugarcane |
| **Bhabar Gravelly Soils** | Foothill piedmont belt | Coarse boulders, pebbles, sand; highly porous | Forestry, orchards, localized irrigated crops |
| **Dun Valley Alluvial Soils** | Dehradun, Patli/Kota Duns | Well-drained sandy to clay loam | Basmati rice, litchi, tea, wheat |
| **Brown Forest Soils** | Lesser Himalaya (1,000–2,400 m) | Rich in humus under broad-leaved Oak; more acidic under Chir Pine | Terrace crops (mandua, wheat), horticulture |
| **Mountain Podzolic Soils** | Upper Temperate & Sub-Alpine (2,400–3,800 m) | Acidic, leached topsoil due to conifer litter & cool climate | Deodar/fir forests, potato, temperate apple |
| **Alpine Meadow / Skeletal Soils** | Above 3,800 m | Shallow, stony, frost-shattered, dark turf in Bugyals | Summer pastoral grazing, medicinal herbs |

## 2. Erosion Drivers & Slope Conservation
- **Drivers:** Steep slopes, young fractured rock, cloudbursts, unscientific road cutting, abandoned terraces, and pine-needle forest fires.
- **Conservation:** Contour bench terraces (*Sidhedar Kheti*), stone *pushtas*, gabion retaining walls (free-draining), *Chal–Khal* percolation ponds, broad-leaved **Banj Oak** regeneration, and nitrogen-fixing **Utis (*Alnus nepalensis*)** planting on landslide scars.

## 3. Key Revision Takeaways
- **Terai** = fine fertile alluvium; **Bhabar** = coarse porous gravel; **Brown Forest** under Oak retains higher moisture than acidic pine soils.
- **Utis (Himalayan Alder)** stabilizes landslide debris and fixes nitrogen.
`,
    mcqs: [
      {
        stem: 'Which soil type in Uttarakhand is characterized by coarse boulders and pebbles with extremely high porosity and low water retention?',
        options: ['Terai Alluvial Soil', 'Bhabar Gravelly Soil', 'Alpine Meadow Soil', 'Brown Forest Soil'],
        correctOptionIndex: 1,
        explanation: 'Bhabar soils along the Shivalik foothills consist of unsorted gravel, pebbles, and boulders with rapid percolation.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why are Terai soils of Udham Singh Nagar particularly productive for paddy and wheat cultivation?',
        options: [
          'They are pure glacial moraine',
          'They are fine-textured alluvial loams rich in organic matter and moisture',
          'They are strongly alkaline desert sands',
          'They consist of fractured granite bedrock',
        ],
        correctOptionIndex: 1,
        explanation: 'Terai soils contain fine silt and clay enriched by decomposed swamp vegetation, giving high organic carbon, nitrogen, and moisture.',
        difficulty: 'foundation',
      },
      {
        stem: 'In the Lesser Himalaya, how do soils beneath Banj Oak (Quercus) forests compare with those beneath Chir Pine?',
        options: [
          'Chir Pine soils are deeper and richer in humus',
          'Banj Oak soils contain richer organic humus and retain far more moisture, while pine needles create acidic, dry surface litter',
          'Both have identical pH and moisture retention',
          'Oak soils are pure limestone gravel with zero humus',
        ],
        correctOptionIndex: 1,
        explanation: 'Broad-leaved oak litter decomposes into moisture-retentive humus; acidic resinous pine needles decompose slowly and fuel fires.',
        difficulty: 'standard',
      },
      {
        stem: 'Which soil group predominates in the cool, moist upper temperate conifer belt (2,400–3,800 m) of Uttarakhand?',
        options: ['Black Regur Soil', 'Podzolic (Acidic Mountain) Soil', 'Laterite Soil', 'Coastal Saline Soil'],
        correctOptionIndex: 1,
        explanation: 'Cool temperatures and conifer needle litter promote leaching and acidity, forming mountain podzolic soils.',
        difficulty: 'standard',
      },
      {
        stem: 'What is the primary hydrological function of traditional stone-walled bench terraces (Sidhedar Kheti) in Uttarakhand\'s hills?',
        options: [
          'Increasing runoff velocity down steep slopes',
          'Breaking slope length, slowing surface runoff, and promoting rainwater infiltration',
          'Encouraging gully erosion',
          'Preventing crop roots from accessing moisture',
        ],
        correctOptionIndex: 1,
        explanation: 'Terracing divides a steep hillside into level steps, reducing runoff energy and soil loss.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which native Himalayan tree acts as a nitrogen-fixing pioneer species commonly planted in bio-engineering to stabilize landslide scars?',
        options: ['Teak', 'Utis (Alnus nepalensis / Himalayan Alder)', 'Eucalyptus', 'Date Palm'],
        correctOptionIndex: 1,
        explanation: 'Utis rapidly colonizes bare landslide debris and fixes atmospheric nitrogen through root nodules.',
        difficulty: 'standard',
      },
      {
        stem: 'Why are abandoned agricultural terraces in out-migrating hill villages becoming a soil-erosion hazard?',
        options: [
          'Without periodic repair of stone risers (pushtas), heavy monsoon rains breach the bunds and trigger cascading slope failures',
          'Abandoned terraces turn into glaciers',
          'Soil fertility increases until rocks fracture',
          'They block the Southwest Monsoon',
        ],
        correctOptionIndex: 0,
        explanation: 'Unmaintained terrace walls breach during cloudbursts, concentrating runoff into deep gullies and landslides.',
        difficulty: 'standard',
      },
      {
        stem: 'Why are gabion retaining walls (wire cages filled with stones) preferred over solid concrete walls on many Himalayan slopes?',
        options: [
          'They are free-draining, preventing hydrostatic water pressure build-up behind the wall while flexing slightly with slope movement',
          'They are waterproof and trap groundwater behind slopes',
          'They never deform under any load',
          'They float above soil profiles',
        ],
        correctOptionIndex: 0,
        explanation: 'Permeable gabion walls let subsurface seepage escape safely, avoiding destructive pore-water pressure build-up.',
        difficulty: 'advanced',
      },
      {
        stem: 'What traditional rainwater conservation structure in Uttarakhand hills slows gully erosion while recharging village springs?',
        options: ['Chal–Khal (ridge percolation ponds)', 'Deep borewell blasting', 'Stepwell draining', 'Open mine pits'],
        correctOptionIndex: 0,
        explanation: 'Chals and Khals are shallow depression ponds built on hill ridges and saddles to trap monsoon runoff and recharge springs.',
        difficulty: 'standard',
      },
      {
        stem: 'Where are skeletal, frost-shattered shallow soils mixed with dark alpine turf primarily found in Uttarakhand?',
        options: ['Haridwar plains', 'Above 3,800 m in Alpine Bugyals and glacial margins', 'Dehradun Dun floor', 'Ramnagar Bhabar'],
        correctOptionIndex: 1,
        explanation: 'Above the timberline, frost weathering dominates, leaving thin stony soils beneath alpine meadow turf.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which district\'s Doon Valley soils are celebrated for aromatic Basmati rice and litchi orchards?',
        options: ['Chamoli', 'Dehradun', 'Bageshwar', 'Pithoragarh'],
        correctOptionIndex: 1,
        explanation: 'The fertile alluvial soils of Dehradun valley support traditional Dehraduni Basmati and litchi cultivation.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why is Zinc deficiency frequently managed in intensively cultivated Terai paddy fields of Udham Singh Nagar?',
        options: [
          'Continuous waterlogged rice–wheat cropping depletes available micronutrients such as zinc (causing Khaira disease in rice)',
          'Terai soil contains excess zinc ore',
          'Zinc evaporates from snowy peaks',
          'Rice plants synthesize zinc naturally',
        ],
        correctOptionIndex: 0,
        explanation: 'Intensive rice–wheat cropping in the Terai (where Khaira disease was identified at Pantnagar) makes zinc management vital.',
        difficulty: 'advanced',
      },
      {
        stem: 'Why do unlined roadside excavations without slope stabilization trigger chronic landslides in the Lesser Himalaya?',
        options: [
          'Under-cutting removes toe support of dipping foliated rocks like phyllite and slate, triggering planar/wedge slides',
          'Road bitumen dissolves granite',
          'Vehicles generate tectonic earthquakes',
          'Asphalt prevents all mountain rainfall',
        ],
        correctOptionIndex: 0,
        explanation: 'Cutting the toe of dipping Lesser Himalayan strata leaves rock masses unsupported during monsoon saturation.',
        difficulty: 'standard',
      },
      {
        stem: 'Which soil horizon characteristic makes mountain brown-forest soils vulnerable to nutrient loss if forest canopy is cleared?',
        options: [
          'Most available nutrients and organic carbon are concentrated in the thin upper topsoil horizon',
          'Nutrients lie 50 m below bedrock',
          'Hill topsoils are 10 m thick everywhere',
          'Forest soils contain zero organic matter',
        ],
        correctOptionIndex: 0,
        explanation: 'Hill slopes carry shallow soil profiles where nutrient-rich topsoil washes away rapidly once canopy cover is lost.',
        difficulty: 'standard',
      },
      {
        stem: 'Which crop group is naturally best adapted to rain-fed brown forest soils on mid-hill terraces of Garhwal and Kumaon?',
        options: [
          'Deep-water floating jute',
          'Coarse millets (Mandua, Jhangora) and pulses like Gahat',
          'Coastal coconut',
          'Irrigated sugarcane',
        ],
        correctOptionIndex: 1,
        explanation: 'Mandua (finger millet), Jhangora (barnyard millet), and Gahat thrive on rain-fed hill terraces.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Forest Belts, Timber Species & Alpine Bugyals',
    materialTitle: 'Forest Belts, Timber Species & Alpine Bugyals — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Forest Belts & Bugyals of Uttarakhand',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Forest Belts, Timber Species & Alpine Bugyals

## 1. Altitudinal Forest Zonation
| Forest Type | Altitude | Dominant Flora / Timber | Ecological & Economic Role |
|---|---|---|---|
| **Sub-Tropical Moist Deciduous** | Up to 1,000 m | **Sal (*Shorea robusta*)**, Khair, Shisham, Haldu | Timber; Khair yields Katha |
| **Sub-Tropical Chir Pine** | 900–1,800 m | **Chir Pine (*Pinus roxburghii*)** | Resin (*Lisa*), timber; fire-prone |
| **Montane Temperate** | 1,800–2,800 m | **Banj Oak**, **Deodar**, Buransh, Kafal | Oak recharges springs; Deodar durable timber |
| **Sub-Alpine** | 2,800–3,600 m | Silver Fir, Spruce, **Bhojpatra (*Betula utilis*)** | Timberline transition |
| **Alpine Bugyals** | 3,400–4,500 m | Grasses, **Brahmakamal**, **Kutki** | Summer grazing, alpine biodiversity |

## 2. Prominent Bugyals of Uttarakhand
- **Chamoli:** **Bedni Bugyal, Ali Bugyal, Auli–Gorson**.
- **Uttarkashi:** **Dayara Bugyal, Har ki Dun**.
- **Rudraprayag:** **Chopta–Tungnath**.
- **Pithoragarh:** **Khaliya Top, Chiplakot**.
- **Tehri–Rudraprayag:** **Panwali Kantha**.

## 3. Key Revision Takeaways
- **Sal** (<1,000 m), **Chir Pine** (900–1,800 m), **Banj Oak & Deodar** (1,800–2,800 m), **Bhojpatra** (timberline).
- Nainital & Champawat hold high percentage forest cover; Udham Singh Nagar holds the lowest percentage.
`,
    mcqs: [
      {
        stem: 'Which timber species dominates the sub-tropical moist deciduous forests of the Bhabar, Dun, and lower Shivalik belt in Uttarakhand?',
        options: ['Deodar (Cedrus deodara)', 'Sal (Shorea robusta)', 'Bhojpatra (Betula utilis)', 'Spruce'],
        correctOptionIndex: 1,
        explanation: 'Sal, along with Shisham and Khair, forms the dominant vegetation below 1,000 m.',
        difficulty: 'foundation',
      },
      {
        stem: 'At approximately which altitude band are Chir Pine (Pinus roxburghii) forests most widespread in Uttarakhand?',
        options: ['Below 300 m', '900–1,800 m', '3,200–4,200 m', 'Above 4,500 m'],
        correctOptionIndex: 1,
        explanation: 'Chir Pine dominates the 900–1,800 m zone and is tapped for resin (Lisa).',
        difficulty: 'foundation',
      },
      {
        stem: 'In which district is the famous Dayara Bugyal located?',
        options: ['Chamoli', 'Uttarkashi', 'Pithoragarh', 'Bageshwar'],
        correctOptionIndex: 1,
        explanation: 'Dayara Bugyal is an expansive alpine meadow in Uttarkashi district.',
        difficulty: 'foundation',
      },
      {
        stem: 'Bedni Bugyal and Ali Bugyal are prominent alpine meadows in which district?',
        options: ['Uttarkashi', 'Chamoli', 'Tehri Garhwal', 'Almora'],
        correctOptionIndex: 1,
        explanation: 'Bedni and Ali Bugyals lie in Chamoli district beneath Trishul.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why is Banj Oak (Quercus leucotrichophora) ecologically valued far above Chir Pine in Uttarakhand\'s mid-hills?',
        options: [
          'It provides fuelwood, nutritious fodder, humus-rich soil, and enhances groundwater recharge of hill springs',
          'It yields industrial turpentine resin',
          'It grows exclusively below 200 m in the Terai',
          'It accelerates summer forest fires',
        ],
        correctOptionIndex: 0,
        explanation: 'Banj Oak fosters spongy humus that recharges hill springs (Naulas) and supplies fodder without spreading fire.',
        difficulty: 'standard',
      },
      {
        stem: 'Which tree species marks the upper sub-alpine timberline zone (~3,000–3,600 m) and supplied bark for ancient Sanskrit manuscripts?',
        options: ['Khair', 'Bhojpatra (Himalayan Birch / Betula utilis)', 'Haldu', 'Semal'],
        correctOptionIndex: 1,
        explanation: 'Bhojpatra (Betula utilis) marks the timberline birch zone whose papery bark served historically as writing parchment.',
        difficulty: 'foundation',
      },
      {
        stem: 'From which sub-tropical tree of Uttarakhand\'s Bhabar–Terai is "Katha" (catechu) extracted?',
        options: ['Deodar', 'Khair (Acacia catechu)', 'Buransh', 'Kafal'],
        correctOptionIndex: 1,
        explanation: 'Katha is extracted from the heartwood of the Khair tree.',
        difficulty: 'standard',
      },
      {
        stem: 'What are "Bugyals" in Uttarakhand\'s ecological vocabulary?',
        options: [
          'Marshy paddy tracts in Udham Singh Nagar',
          'High-altitude alpine grassy meadows lying between the timberline and permanent snowline',
          'Sub-tropical bamboo thickets along the Ganga',
          'Artificial pine plantations near Dehradun',
        ],
        correctOptionIndex: 1,
        explanation: 'Bugyals are high-altitude seasonal alpine grasslands above the tree line.',
        difficulty: 'foundation',
      },
      {
        stem: 'Khaliya Top Bugyal and Chiplakot Bugyal lie in which Kumaon district?',
        options: ['Nainital', 'Almora', 'Pithoragarh', 'Champawat'],
        correctOptionIndex: 2,
        explanation: 'Khaliya Top (above Munsiyari) and Chiplakot are famed alpine meadows in Pithoragarh.',
        difficulty: 'standard',
      },
      {
        stem: 'Which statement accurately reflects district-wise forest cover distribution in Uttarakhand?',
        options: [
          'Udham Singh Nagar has the highest percentage of forest cover',
          'Hill/foothill districts like Nainital and Champawat have very high forest cover percentages, whereas Udham Singh Nagar has the lowest percentage',
          'Haridwar has over 80% dense temperate conifer forest',
          'Chamoli has zero forest area',
        ],
        correctOptionIndex: 1,
        explanation: 'Nainital and Champawat record high forest cover percentages, while agricultural Udham Singh Nagar has the lowest share.',
        difficulty: 'standard',
      },
      {
        stem: 'Which timber species of the temperate zone (1,800–2,800 m) is most prized for rot-resistant temple woodwork?',
        options: ['Chir Pine', 'Deodar (Cedrus deodara)', 'Sal', 'Khair'],
        correctOptionIndex: 1,
        explanation: 'Deodar (Himalayan Cedar) is aromatic, durable, and widely used in temples and mountain architecture.',
        difficulty: 'standard',
      },
      {
        stem: 'What commercial non-timber forest product is primarily tapped from Chir Pine in Uttarakhand?',
        options: ['Natural rubber latex', 'Lisa (oleo-resin used for rosin and turpentine)', 'Sandalwood oil', 'Lac'],
        correctOptionIndex: 1,
        explanation: 'Chir Pine tapping produces Lisa (pine resin), processed into rosin and turpentine.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why have conservationists restricted permanent camps and heavy footfall on Bugyals like Bedni and Dayara?',
        options: [
          'Thin alpine turf takes decades to regenerate once trampled, exposing underlying soil to wind and meltwater erosion',
          'Bugyals contain explosive natural gas deposits',
          'Grazing sheep only survive in the Terai',
          'Bugyals sit below sea level',
        ],
        correctOptionIndex: 0,
        explanation: 'Short alpine growing seasons make fragile meadow turf extremely slow to recover from trampling and waste.',
        difficulty: 'standard',
      },
      {
        stem: 'Arrange these dominant species in sequence as you climb from Haldwani (400 m) to Roopkund base (4,000 m):',
        options: [
          'Sal → Chir Pine → Banj Oak/Deodar → Bhojpatra → Alpine Bugyal',
          'Chir Pine → Sal → Bhojpatra → Banj Oak → Alpine Bugyal',
          'Deodar → Sal → Chir Pine → Alpine Bugyal → Bhojpatra',
          'Bhojpatra → Deodar → Chir Pine → Sal → Alpine Bugyal',
        ],
        correctOptionIndex: 0,
        explanation: 'Altitudinal succession progresses upward from Sal → Chir Pine → Oak/Deodar → Bhojpatra → Bugyals.',
        difficulty: 'standard',
      },
      {
        stem: 'Which shift during colonial forest management in Kumaon and Garhwal contributed to modern summer fire intensity?',
        options: [
          'Promotion of monoculture Chir Pine over mixed broad-leaved oak forests for railway sleepers and resin revenue',
          'Complete replacement of pines with coconut palms',
          'Flooding of all ridges below 2,000 m',
          'Banning of all conifer trees in 1890',
        ],
        correctOptionIndex: 0,
        explanation: 'Colonial forestry favoured Chir Pine monocultures whose resinous needle fall creates highly combustible dry-season fuel beds.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'Distribution of Minerals in Uttarakhand',
    materialTitle: 'Distribution of Minerals in Uttarakhand — Study Notes',
    estimatedMinutes: 20,
    assessmentTitle: 'Practice Assessment: Mineral Resources of Uttarakhand',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Distribution of Minerals in Uttarakhand

## 1. Mineral Profile Overview
Uttarakhand lacks major fossil-fuel coal or petroleum reserves, holding primarily **industrial non-metallic minerals** alongside minor polymetallic occurrences.

| Mineral | Key Districts / Sites | Uses |
|---|---|---|
| **Limestone** | Dehradun (Mandaram, Song, Mussoorie), Tehri, Pithoragarh (Gangolihat), Chamoli | Cement, lime, steel flux |
| **Magnesite** | **Bageshwar** (Jhiroli), **Pithoragarh** (Chandak), Chamoli | Refractory bricks for steel furnaces |
| **Soapstone / Talc** | **Bageshwar** (leading), Pithoragarh, Chamoli, Almora | Cosmetics, paper, ceramics, paint |
| **Rock Phosphate** | **Dehradun** (Maldeota, Durmala), **Tehri** (Chamasari) | Phosphatic fertilizers |
| **Dolomite & Gypsum** | Dehradun, Tehri, Pauri, Nainital | Refractories, cement, Plaster of Paris |
| **Copper** | **Askot** (Pithoragarh), **Pokhri–Dhanpur** (Chamoli) | Polymetallic deposits |
| **Alluvial Gold** | Sands of Sharda, Ramganga, Alaknanda | Trace placer gold |

## 2. Environmental Precedent
The **1980s Doon Valley Limestone Quarrying Case (*RLEK vs State of UP*)** led the Supreme Court to close hazardous quarries in Mussoorie–Dehradun to protect watersheds and slopes.

## 3. Key Revision Takeaways
- **Bageshwar & Pithoragarh** lead in **Magnesite** and **Soapstone/Talc**.
- **Maldeota & Durmala** (Dehradun/Tehri) hold **Rock Phosphate**.
- **Askot** (Pithoragarh) & **Pokhri** (Chamoli) hold **Copper** occurrences.
`,
    mcqs: [
      {
        stem: 'Which two districts of Uttarakhand hold the state\'s primary commercial deposits of Magnesite and Soapstone (Talc)?',
        options: [
          'Haridwar and Udham Singh Nagar',
          'Bageshwar and Pithoragarh',
          'Dehradun and Uttarkashi',
          'Tehri Garhwal and Rudraprayag',
        ],
        correctOptionIndex: 1,
        explanation: 'Bageshwar (Jhiroli, Kanda) and Pithoragarh (Chandak) are the leading hubs of magnesite and soapstone reserves.',
        difficulty: 'foundation',
      },
      {
        stem: 'Maldeota and Durmala in Dehradun–Tehri region are known for deposits of which mineral?',
        options: ['Coal', 'Rock Phosphate', 'Bauxite', 'Uranium'],
        correctOptionIndex: 1,
        explanation: 'Maldeota and Durmala in the Mussoorie syncline are well-known sites of rock phosphate in Uttarakhand.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which metallic mineral has historic polymetallic occurrences at Askot (Pithoragarh) and Pokhri–Dhanpur (Chamoli)?',
        options: ['Copper', 'Tin', 'Nickel', 'Chromium'],
        correctOptionIndex: 0,
        explanation: 'Askot in Pithoragarh and Pokhri–Dhanpur in Chamoli are recognized for copper and base-metal mineralization.',
        difficulty: 'standard',
      },
      {
        stem: 'In which geological region of Uttarakhand is Gypsum mainly found for cement and Plaster of Paris uses?',
        options: [
          'Udham Singh Nagar Terai',
          'Dehradun, Tehri Garhwal, Pauri Garhwal, and Nainital (Krol belt)',
          'Trans-Himalayan Nelang plateau',
          'Bageshwar glacial moraines',
        ],
        correctOptionIndex: 1,
        explanation: 'Gypsum occurs in Krol/Infra-Krol formations across Dehradun, Tehri, Pauri, and Nainital.',
        difficulty: 'standard',
      },
      {
        stem: 'For which industry is Magnesite mined in Bageshwar and Pithoragarh primarily utilized?',
        options: [
          'Thermal coal power generation',
          'Refractory bricks for steel and high-temperature furnaces',
          'Petrochemical refining',
          'Aluminium smelting only',
        ],
        correctOptionIndex: 1,
        explanation: 'Dead-burned magnesite is essential for heat-resistant refractory linings in steel furnaces.',
        difficulty: 'standard',
      },
      {
        stem: 'Why was limestone quarrying severely curtailed in the Mussoorie–Dehradun hills following the 1980s RLEK Supreme Court judgment?',
        options: [
          'Limestone reserves were exhausted',
          'Blasting and quarrying destabilized fragile slopes, dried natural springs, and harmed Doon Valley ecology',
          'Coal was discovered underneath limestone',
          'To convert Mussoorie into a port',
        ],
        correctOptionIndex: 1,
        explanation: 'In RLEK vs State of UP, the Supreme Court closed most Doon quarries to protect watersheds, springs, and slope stability.',
        difficulty: 'standard',
      },
      {
        stem: 'In which form does gold occur in trace quantities in Uttarakhand?',
        options: [
          'Deep kimberlite pipes in Haridwar',
          'Alluvial placer sands along rivers such as Sharda (Kali), Ramganga, and Alaknanda',
          'Inside Nainital lake limestone',
          'Coal seams of Kotdwar',
        ],
        correctOptionIndex: 1,
        explanation: 'Minor alluvial gold particles occur in river sands of the Sharda, Ramganga, and Alaknanda.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which statement accurately describes coal and petroleum reserves in Uttarakhand?',
        options: [
          'Udham Singh Nagar is India\'s largest coking-coal producer',
          'Uttarakhand lacks commercially significant coal and petroleum reserves',
          'Chamoli contains major offshore petroleum fields',
          'Almora produces 40% of India\'s lignite',
        ],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand is endowed with non-metallic industrial minerals and hydro-energy, not commercial fossil fuels.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which 19th-century Kumaon region saw an experimental colonial ironworks project using local ore and charcoal?',
        options: [
          'Kaladhungi – Khurpatal – Ramgarh belt (Nainital)',
          'Roorkee – Haridwar belt',
          'Badrinath – Mana belt',
          'Vikasnagar – Chakrata belt',
        ],
        correctOptionIndex: 0,
        explanation: 'Experimental Kumaon Iron Works operated briefly at Kaladhungi and Dechauri (Nainital) in the mid-19th century.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which mineral mined heavily in Bageshwar is widely used in cosmetics, paper, paints, and ceramics?',
        options: ['Rock Phosphate', 'Soapstone (Talc / Steatite)', 'Gypsum', 'Graphite'],
        correctOptionIndex: 1,
        explanation: 'Bageshwar is Uttarakhand\'s foremost producer of high-grade soapstone (talc).',
        difficulty: 'foundation',
      },
      {
        stem: 'Gangolihat in Pithoragarh district is noted in Uttarakhand mineral surveys for substantial reserves of:',
        options: ['Limestone', 'Bauxite', 'Diamond', 'Cobalt'],
        correctOptionIndex: 0,
        explanation: 'Gangolihat hosts substantial cement-grade limestone deposits alongside magnesite at Chandak.',
        difficulty: 'standard',
      },
      {
        stem: 'Why does unregulated soapstone mining in districts like Bageshwar and Pithoragarh require strict geotechnical oversight?',
        options: [
          'Excavation on steep slopes loosens fractured phyllite/dolomite beds, triggering village subsidence and spring drying',
          'Soapstone melts into molten lava during monsoon',
          'Soapstone attracts marine cyclones',
          'Mining enriches groundwater levels',
        ],
        correctOptionIndex: 0,
        explanation: 'Open-cast hillside cutting for soapstone can destabilize agricultural terraces, crack houses, and sever spring channels.',
        difficulty: 'standard',
      },
      {
        stem: 'Which pair of mineral and industrial output is correctly matched for Uttarakhand?',
        options: [
          'Rock Phosphate – Phosphatic Fertilizer',
          'Magnesite – Paper Bleaching',
          'Soapstone – Steel Blast Furnace Fuel',
          'Gypsum – Copper Smelting Ore',
        ],
        correctOptionIndex: 0,
        explanation: 'Rock phosphate (Maldeota/Durmala) is a primary raw material for phosphatic fertilizers.',
        difficulty: 'standard',
      },
      {
        stem: 'What is "RBM" regulated across foothill rivers like Gaula, Kosi, and Sharda in Uttarakhand?',
        options: [
          'River Bed Material (sand, gravel, and boulders)',
          'Radioactive Basalt Mineral',
          'Refined Bitumen Mixture',
          'Rare Bauxite Matrix',
        ],
        correctOptionIndex: 0,
        explanation: 'RBM stands for River Bed Material extracted under clearance to regulate aggradation and supply construction.',
        difficulty: 'standard',
      },
      {
        stem: 'Where are minor Graphite occurrences reported in Uttarakhand?',
        options: [
          'Almora, Pauri Garhwal, and Dehradun belts',
          'Haridwar and Udham Singh Nagar only',
          'Roopkund Glacier',
          'Tanakpur Terai',
        ],
        correctOptionIndex: 0,
        explanation: 'Minor occurrences of graphite schists are documented in parts of Almora, Pauri Garhwal, and Dehradun.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'Hydroelectric Projects & Renewable Energy Potential',
    materialTitle: 'Hydroelectric Projects & Renewable Energy Potential — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Hydropower & Renewables in Uttarakhand',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Hydroelectric Projects & Renewable Energy Potential

## 1. Uttarakhand as "Urja Pradesh"
With steep mountain river gradients and perennial snowmelt, Uttarakhand holds ~25,000 MW hydroelectric potential.

## 2. Major Projects
| Project | River | District | Highlight |
|---|---|---|---|
| **Tehri Dam** | **Bhagirathi** | Tehri Garhwal | 260.5 m tallest dam in India (2,400 MW complex with Koteshwar & PSP) |
| **Koteshwar HEP** | **Bhagirathi** | Tehri Garhwal | 400 MW balancing dam |
| **Maneri Bhali I & II** | **Bhagirathi** | Uttarkashi | Tiloth (90 MW) + Dharasu (304 MW) |
| **Vishnuprayag HEP** | **Alaknanda** | Chamoli | 400 MW |
| **Srinagar HEP** | **Alaknanda** | Pauri / Tehri | 330 MW |
| **Dhauliganga Phase I** | **Eastern Dhauliganga** | Pithoragarh | 280 MW (NHPC) |
| **Tanakpur HEP** | **Sharda (Kali)** | Champawat | 94.2 MW (NHPC) |
| **Chilla HEP** | **Ganga Channel** | Pauri / Haridwar | 144 MW |
| **Khatima (Lohiahead)** | **Sharda Canal** | US Nagar | 41.4 MW (1955) |
| **Chibro / Khodri / Lakhwar–Vyasi** | **Tons / Yamuna** | Dehradun | Yamuna–Tons cascade |

## 3. Ecology & Renewables
- **Tapovan Vishnugad (520 MW, Western Dhauliganga, Chamoli):** Hit by the Feb 2021 Chamoli avalanche flash flood.
- **Bhagirathi Eco-Sensitive Zone (Gaumukh–Uttarkashi):** Restricts new mega-dams.
- **UREDA:** Leads solar parks, *Mukhyamantri Saur Swarozgar Yojana*, micro-hydel, and **Pirul** (pine needle) biomass energy.

## 4. Key Revision Takeaways
- **Tehri Dam** = 260.5 m on Bhagirathi; **Dhauliganga I** = Pithoragarh; **Tapovan Vishnugad** = Chamoli.
`,
    mcqs: [
      {
        stem: 'On which river is the Tehri Dam, India\'s tallest dam (260.5 m), constructed?',
        options: ['Alaknanda', 'Bhagirathi', 'Mandakini', 'Kali'],
        correctOptionIndex: 1,
        explanation: 'Tehri Dam is built across the Bhagirathi river just downstream of its confluence with the Bhilangana.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the installed capacity of the Koteshwar Hydroelectric Project downstream of Tehri Dam?',
        options: ['144 MW', '280 MW', '400 MW', '1,000 MW'],
        correctOptionIndex: 2,
        explanation: 'Koteshwar HEP on the Bhagirathi has an installed capacity of 400 MW.',
        difficulty: 'standard',
      },
      {
        stem: 'Which agency operates the Dhauliganga (280 MW) and Tanakpur hydroelectric projects in Kumaon?',
        options: ['THDC India Ltd', 'NHPC Limited', 'UJVN Ltd', 'SJVN'],
        correctOptionIndex: 1,
        explanation: 'NHPC Limited operates both Dhauliganga HEP (Pithoragarh) and Tanakpur HEP (Champawat).',
        difficulty: 'standard',
      },
      {
        stem: 'On which river system are the Chibro (240 MW) and Khodri (120 MW) hydroelectric stations built?',
        options: ['Tons–Yamuna system', 'Gori–Kali system', 'Bhagirathi–Bhilangana system', 'Kosi–Gaula system'],
        correctOptionIndex: 0,
        explanation: 'Chibro and Khodri harness the Tons–Yamuna system in Dehradun district.',
        difficulty: 'standard',
      },
      {
        stem: 'The Lakhwar–Vyasi Multi-Purpose Project is situated on which river?',
        options: ['Alaknanda', 'Yamuna', 'Pindar', 'Western Ramganga'],
        correctOptionIndex: 1,
        explanation: 'Both Vyasi and Lakhwar lie on the Yamuna river in Dehradun district.',
        difficulty: 'foundation',
      },
      {
        stem: 'Maneri Bhali Stage I (Tiloth) and Stage II (Dharasu) are located in which district?',
        options: ['Chamoli', 'Uttarkashi', 'Pauri Garhwal', 'Rudraprayag'],
        correctOptionIndex: 1,
        explanation: 'Maneri Bhali Stages I and II harness the Bhagirathi in Uttarkashi district.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which operational 330 MW project sits on the Alaknanda river between Rudraprayag and Devprayag?',
        options: [
          'Vishnuprayag HEP',
          'Srinagar Hydroelectric Project',
          'Tapovan Vishnugad HEP',
          'Koteshwar HEP',
        ],
        correctOptionIndex: 1,
        explanation: 'The 330 MW Srinagar Hydroelectric Project stands on the Alaknanda upstream of Srinagar town.',
        difficulty: 'foundation',
      },
      {
        stem: 'What happened during the February 2021 Chamoli disaster concerning hydropower infrastructure?',
        options: [
          'Tehri Dam breached completely',
          'A high-altitude rock-ice avalanche destroyed the Rishiganga small hydro project and severely damaged NTPC\'s Tapovan Vishnugad site',
          'Tanakpur barrage overflowed into Nepal',
          'Chilla canal dried up permanently',
        ],
        correctOptionIndex: 1,
        explanation: 'The Feb 2021 rock-ice detachment destroyed Rishiganga HEP and damaged Tapovan Vishnugad on Western Dhauliganga.',
        difficulty: 'standard',
      },
      {
        stem: 'Which two countries are partners in the proposed Pancheshwar Multipurpose Project on the Mahakali (Kali) river?',
        options: ['India and Bhutan', 'India and China', 'India and Nepal', 'India and Bangladesh'],
        correctOptionIndex: 2,
        explanation: 'The Pancheshwar project is a proposed bilateral project between India and Nepal under the 1996 Mahakali Treaty.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the nodal state agency promoting solar power, micro-hydel, and Pirul biomass projects in Uttarakhand?',
        options: ['SIDCUL', 'UREDA (Uttarakhand Renewable Energy Development Agency)', 'UKPSC', 'GMVN'],
        correctOptionIndex: 1,
        explanation: 'UREDA serves as Uttarakhand\'s nodal agency for renewable energy schemes.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why does the Pirul-to-Energy initiative address two distinct challenges in Uttarakhand simultaneously?',
        options: [
          'Collecting fallen Chir Pine needles reduces forest fire fuel loads while generating rural income and clean biomass energy',
          'Pine needles are converted into hydroelectric dams',
          'Burning pine needles in forests increases oak regeneration',
          'Pirul generates geothermal steam',
        ],
        correctOptionIndex: 0,
        explanation: 'Clearing dry Pirul from forest floors lowers summer fire intensity and feeds rural biomass plants.',
        difficulty: 'standard',
      },
      {
        stem: 'Why are "run-of-the-river" projects preferred over massive storage dams in upper valleys, yet still ecologically debated?',
        options: [
          'They avoid giant reservoir submergence, though long diversion tunnels can dewater river stretches and face flash-flood silt risks',
          'They require zero concrete or tunnelling',
          'They store five years of monsoon flow',
          'They operate only in flat plains',
        ],
        correctOptionIndex: 0,
        explanation: 'Run-of-the-river schemes avoid large reservoirs but require ecological flow (e-flow) safeguards in tunnelled stretches.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which project on the Sharda Canal system in Udham Singh Nagar is Uttarakhand\'s oldest post-Independence hydel station (1955)?',
        options: ['Chilla HEP', 'Khatima (Lohiahead) HEP', 'Tehri HEP', 'Vishnuprayag HEP'],
        correctOptionIndex: 1,
        explanation: 'Khatima (Lohiahead) power house on the Sharda canal dates to 1955.',
        difficulty: 'advanced',
      },
      {
        stem: 'What is the purpose of declaring the Gaumukh-to-Uttarkashi stretch as the Bhagirathi Eco-Sensitive Zone (BESZ)?',
        options: [
          'To encourage mega storage dams inside Gangotri valley',
          'To safeguard free-flowing upper Ganga ecology by restricting new large hydro dams and polluting industries',
          'To open limestone open-cast mines along Gangotri',
          'To divert the entire Bhagirathi into the Yamuna',
        ],
        correctOptionIndex: 1,
        explanation: 'Notified in 2012, the BESZ restricts new large hydropower projects along the pristine upper Bhagirathi.',
        difficulty: 'standard',
      },
      {
        stem: 'Which combination matches Project – River – District CORRECTLY?',
        options: [
          'Vishnuprayag – Alaknanda – Chamoli',
          'Dhauliganga Phase I – Bhagirathi – Tehri',
          'Koteshwar – Mandakini – Rudraprayag',
          'Srinagar HEP – Kali – Pithoragarh',
        ],
        correctOptionIndex: 0,
        explanation: 'Vishnuprayag harnesses the Alaknanda in Chamoli.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Irrigation Canals, Springs & Drinking Water Schemes',
    materialTitle: 'Irrigation Canals, Springs & Drinking Water Schemes — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Irrigation, Springs & Water Schemes',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Irrigation Canals, Springs & Drinking Water Schemes

## 1. Contrasting Irrigation Geography: Plains vs Hills
Uttarakhand exhibits a sharp physiographic divide in irrigation infrastructure:
- **Plains (Udham Singh Nagar & Haridwar):** Account for the overwhelming share of irrigated area (~80%+ net sown area irrigated) due to flat alluvial gradients, dense **canal networks**, and shallow **tube wells** in the **Terai** artesian belt.
- **Hill Districts (9 completely mountainous districts + hill blocks):** Less than **20%** of cultivated land is irrigated, restricted to fertile valley-bottom alluvial terraces (**Talaon** land), whereas terraced upland slopes (**Upraon** and intermittent **Ijran/Katil** slopes) remain largely rain-fed.

## 2. Major Historic & Modern Canal Systems
| Canal / Project | Origin / Headworks | Engineer / Era | Command & Significance |
|---|---|---|---|
| **Upper Ganga Canal** | **Bhimgoda Barrage, Haridwar** | **Sir Proby Cautley (1842–1854)** | Landmark masonry **Solani Aqueduct at Roorkee**; irrigates Haridwar and western Doab; triggered founding of **Thomason College of Civil Engineering (now IIT Roorkee)** |
| **Eastern Ganga Canal** | **Bhimgoda Barrage (left bank), Haridwar** | Post-Independence | Irrigates Haridwar–Bijnor–Moradabad Kharif belt |
| **Sharda Canal** | **Banbasa Barrage (Champawat/US Nagar border)** | **1928** | Taps **Kali/Sharda river**; irrigates Udham Singh Nagar and Terai plains |
| **Rajpur & Katapathar Canals** | Dehradun valley streams / Yamuna | Historic Garhwal era (*Rani Karnavati*) & colonial upgrades | Traditional Doon Valley irrigation & Dehradun urban feeder |

## 3. Traditional Hill Water Architecture & Springshed Revival
- **Guls / Kuhls:** Community-managed contour gravity channels diverting perennial hill streams (*Gadheras*) onto valley *Talaon* rice fields.
- **Naula vs Dhara:** A **Naula** is a stepped, roofed stone catchment chamber tapping slow subsurface seepage; a **Dhara** is a channeled natural spring spout issuing at slope outcrops (like *Surya Kund* / temple spouts).
- **SARRA (Spring and River Rejuvenation Authority):** Constituted by the Uttarakhand Government to map drying mountain springsheds, recharge upslope fracture zones (contour trenches, check dams, oak plantation), and revive non-glacial rivers (**Kosi, Gaula, Song, Rispana**).
- **Flagship Drinking Water & Storage Projects:** **Jal Jeevan Mission (Har Ghar Jal)** multi-village hill pumping/gravity schemes, **Surya Dhar Lake** (Doiwala, Dehradun), **Song Dam Project** (Dehradun drinking water), **Jamrani Dam** (Haldwani), and **Lakhwar–Vyasi** multi-state Yamuna storage.

## 4. Key Revision Takeaways
- **Upper Ganga Canal (1854)** = **Haridwar (Bhimgoda)** by **Sir Proby Cautley** across **Solani Aqueduct (Roorkee)**; **Sharda Canal (1928)** = **Banbasa**.
- **Talaon** (irrigated valley terraces via **Guls**) vs **Upraon** (rain-fed hill slopes).
- **Naula** (stone seepage tank) & **Dhara** (spring spout) are revived via **SARRA** springshed management.
`,
    mcqs: [
      {
        stem: 'Who engineered the historic Upper Ganga Canal originating at Haridwar (1842–1854), including the Solani Aqueduct at Roorkee?',
        options: ['Sir Henry Ramsay', 'Sir Proby Cautley', 'G.W. Traill', 'Lord Dalhousie'],
        correctOptionIndex: 1,
        explanation: 'Sir Proby Cautley designed and built the Upper Ganga Canal from Haridwar across the Solani river at Roorkee.',
        difficulty: 'foundation',
      },
      {
        stem: 'From which location does the Sharda Canal originate to irrigate Udham Singh Nagar and neighbouring plains?',
        options: ['Haridwar (Bhimgoda)', 'Banbasa (Kali/Sharda river)', 'Dakpathar', 'Kalagarh'],
        correctOptionIndex: 1,
        explanation: 'The Sharda Canal takes off from the Banbasa barrage on the Sharda (Kali) river.',
        difficulty: 'foundation',
      },
      {
        stem: 'In traditional Uttarakhand hill farming, what are "Guls" (or "Kuhls")?',
        options: [
          'Deep tube wells in the Terai',
          'Small gravity-flow contour channels diverting stream water onto terraced fields',
          'Storage tanks built on glacier peaks',
          'Commercial tea estates in Almora',
        ],
        correctOptionIndex: 1,
        explanation: 'Guls are traditional community-built gravity channels that convey stream water to irrigate valley terraces.',
        difficulty: 'foundation',
      },
      {
        stem: 'What distinguishes a traditional "Naula" from a "Dhara" in Kumaon and Garhwal?',
        options: [
          'A Naula is a shallow stone-walled enclosed catchment tank collecting slow subsurface seepage, whereas a Dhara is a flowing spout issuing from a hillside',
          'A Naula is always salty while a Dhara is frozen ice',
          'Naulas are built only in Udham Singh Nagar canals',
          'Dharas are artificial hydroelectric dams',
        ],
        correctOptionIndex: 0,
        explanation: 'Naulas capture slow subterranean seepage inside protective stone steps, while Dharas channel stronger spring discharge through spouts.',
        difficulty: 'standard',
      },
      {
        stem: 'Which category of agricultural land in Uttarakhand hills receives irrigation through Guls, unlike rain-fed "Upraon" slopes?',
        options: ['Khil land', 'Talaon (valley-bottom irrigated land)', 'Ijran land', 'Bhabar gravel'],
        correctOptionIndex: 1,
        explanation: 'Traditional hill classification distinguishes irrigated valley-bottom Talaon from rain-fed upland Upraon.',
        difficulty: 'standard',
      },
      {
        stem: 'Which state body did Uttarakhand constitute specifically to coordinate mapping and revival of drying hill springs and rain-fed rivers?',
        options: [
          'SIDCUL',
          'SARRA (Spring and River Rejuvenation Authority)',
          'UKSSSC',
          'BHEL',
        ],
        correctOptionIndex: 1,
        explanation: 'SARRA focuses on hydrogeological springshed and non-glacial river management across Uttarakhand.',
        difficulty: 'standard',
      },
      {
        stem: 'Approximately how do irrigation percentages differ between Uttarakhand\'s plains and hill districts?',
        options: [
          'Hills have >90% irrigation while plains have <10%',
          'Plains enjoy high irrigation (~80%+ via canals/tubewells), whereas hill districts have low irrigation (<20%) limited largely to valley floors',
          'Both have exactly 50% canal irrigation',
          'Neither region uses canal irrigation',
        ],
        correctOptionIndex: 1,
        explanation: 'Flat Terai/Ganga plains allow extensive canals and tubewells, while steep terrain restricts hill irrigation mainly to low valleys.',
        difficulty: 'standard',
      },
      {
        stem: 'Which dam project has been planned on the Song river to meet Dehradun\'s gravity-fed drinking water requirements?',
        options: ['Jamrani Dam', 'Song Dam Project', 'Kalagarh Dam', 'Pancheshwar Dam'],
        correctOptionIndex: 1,
        explanation: 'The Song Dam drinking water project is planned near Dehradun to supply gravity-fed potable water.',
        difficulty: 'standard',
      },
      {
        stem: 'Why must springshed restoration target recharge zones that often lie upslope or across the ridge from a drying Naula?',
        options: [
          'Mountain spring water follows dipping geological rock fractures; recharging upslope fractures restores downslope spring discharge',
          'Springs obtain water solely from adjacent riverbeds below them',
          'Concreting the entire hillslope improves groundwater absorption',
          'Planting pine trees increases deep aquifer percolation',
        ],
        correctOptionIndex: 0,
        explanation: 'Springs emerge where dipping fractures intersect slopes; protecting upslope recharge zones restores seepage.',
        difficulty: 'standard',
      },
      {
        stem: 'Where is the Bhimgoda Barrage situated, serving as the headworks for the Upper and Eastern Ganga Canals?',
        options: ['Rishikesh', 'Haridwar', 'Devprayag', 'Roorkee'],
        correctOptionIndex: 1,
        explanation: 'Bhimgoda Barrage at Haridwar diverts Ganga water into the Upper and Eastern Ganga Canals.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why was the Upper Ganga Canal\'s Solani Aqueduct at Roorkee considered a civil engineering landmark of the 1850s?',
        options: [
          'It carried a massive navigation and irrigation canal on masonry arches directly over the wide seasonal Solani river',
          'It pumped Ganga water vertically over Kedarnath',
          'It used nuclear turbines in 1854',
          'It was built inside the Gangotri glacier',
        ],
        correctOptionIndex: 0,
        explanation: 'Completed in 1854, the Solani Aqueduct carried the Upper Ganga Canal across the broad Solani torrent valley.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which two challenges make implementing "Har Ghar Jal" technically harder in Chamoli or Pithoragarh than in Haridwar?',
        options: [
          'Dispersed high-elevation hamlets requiring multi-stage pumping or long gravity lines across landslide-prone terrain, plus seasonal spring decline',
          'Complete lack of electricity across India',
          'Excessive coastal salinity in Chamoli',
          'Flat featureless plains preventing gravity flow',
        ],
        correctOptionIndex: 0,
        explanation: 'Low summer source sustainability, frost damage at altitude, and dispersed settlements complicate hill piped supply.',
        difficulty: 'standard',
      },
      {
        stem: 'What is "Surya Dhar Lake", developed in the Doiwala/Thano area of Dehradun district?',
        options: [
          'A natural glacial cirque at 5,000 m',
          'A man-made check-dam reservoir created for drinking water, minor irrigation, and tourism',
          'A saline lagoon in Haridwar',
          'A tributary of the Kali river',
        ],
        correctOptionIndex: 1,
        explanation: 'Surya Dhar Lake on the Jakhan river (Doiwala) supplies gravity water for irrigation and drinking.',
        difficulty: 'standard',
      },
      {
        stem: 'If a hill farmer adopts drip/sprinkler micro-irrigation fed by rainwater storage tanks, what primary benefit is gained over open flood irrigation?',
        options: [
          'Higher water-use efficiency on sloping Upraon fields without causing slope saturation or soil erosion',
          'Total elimination of sunlight',
          'Conversion of hills into paddy marshes',
          'Prevention of crop germination',
        ],
        correctOptionIndex: 0,
        explanation: 'Micro-irrigation conserves scarce spring water and prevents slope erosion on terraced fields.',
        difficulty: 'standard',
      },
      {
        stem: 'Historically, which Dehradun canal built in the 17th century (attributed in chronicles to Rani Karnavati\'s period) irrigated Doon Valley?',
        options: ['Sharda Canal', 'Rajpur Canal', 'Surya Canal', 'Agra Canal'],
        correctOptionIndex: 1,
        explanation: 'The historic Rajpur Canal tapping streams above Dehradun dates back to the Garhwal Panwar period.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'Demographic Profile of Uttarakhand (Census 2011)',
    materialTitle: 'Demographic Profile of Uttarakhand (Census 2011) — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Census 2011 Demographics of Uttarakhand',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Demographic Profile of Uttarakhand (Census 2011)

## 1. Official State Summary & District Extremes (Census 2011)
According to the **2011 Census of India** (Uttarakhand's second decennial census after statehood in 2000), the State's total population stood at **10,086,292** (~0.83% of India's population, ranking 20th among States/UTs):

| Demographic Indicator | Uttarakhand State (2011) | Highest District | Lowest District |
|---|---|---|---|
| **Total Population** | **10,086,292** (M: 5,137,773; F: 4,948,519) | **Haridwar** (18,90,422) | **Rudraprayag** (2,42,285) |
| **Decadal Growth (2001–11)** | **18.81%** (down from 20.41% in 1991–2001) | **Udham Singh Nagar** (+33.45%) | **Pauri Garhwal (-1.41%)** & **Almora (-1.28%)** |
| **Population Density** | **189 / km²** (up from 159 in 2001) | **Haridwar** (801 / km²) | **Uttarkashi** (41 / km²) |
| **Overall Sex Ratio** | **963** females / 1,000 males | **Almora** (1,139) | **Haridwar** (880) |
| **Child Sex Ratio (0–6 yrs)** | **890** girls / 1,000 boys | **Almora** (922) | **Pithoragarh** (816) |
| **Total Literacy Rate** | **78.82%** (Rank 17th nationally) | **Dehradun** (84.25%) | **Udham Singh Nagar** (73.10%) |
| **Male / Female Literacy** | **87.40% / 70.01%** (17.39% gap) | **Rudraprayag** (M: 93.90%) / **Dehradun** (F: 78.54%) | **Haridwar** (M: 81.04%) / **Uttarkashi** (F: 62.35%) |
| **Urbanization Share** | **30.23%** (Rural: **69.77%**) | **Dehradun** (55.52%) | **Bageshwar** (3.49%) |

## 2. Social Composition & Hill Migration Dynamics
- **Scheduled Castes (SC):** **18.76%** of state population (highest numerical population in **Haridwar**; highest percentage share in **Bageshwar [27.73%]**; lowest percentage in **Dehradun** / Champawat comparative ranges—Bageshwar & Pithoragarh lead hill SC proportion).
- **Scheduled Tribes (ST):** **2.89%** (~2.92 lakh; highest in **Udham Singh Nagar** [Tharu, Buksa], followed by **Dehradun** [Jaunsari] and **Pithoragarh** [Bhotiya/Raji]; lowest ST share in **Rudraprayag**).
- **Plains Concentration & "Ghost Villages":** Just **three plains/foothill districts (Haridwar, Dehradun, Udham Singh Nagar)** hold over half of Uttarakhand's population due to industrial/SIDCUL jobs and better infrastructure, whereas hill out-migration produced **negative decadal growth in Pauri (-1.41%) and Almora (-1.28%)** and male out-migration elevated **hill sex ratios (>1,000 in 7 hill districts)** led by **Almora (1,139)**, **Rudraprayag (1,114)**, and **Pauri (1,103)**.

## 3. Key Revision Takeaways
- **10,086,292 population · 189/km² density · 963 sex ratio · 890 child sex ratio · 78.82% literacy · 30.23% urban**.
- **Negative decadal growth:** **Pauri Garhwal (-1.41%)** & **Almora (-1.28%)**; **Highest growth:** **Udham Singh Nagar (+33.45%)** & **Dehradun (+32.33%)**.
- **Lowest density:** **Uttarkashi (41)** followed by **Chamoli (49)**; **Lowest child sex ratio:** **Pithoragarh (816)**.
`,
    mcqs: [
      {
        stem: 'According to Census 2011, what is the overall population density of Uttarakhand?',
        options: ['159 persons/sq. km', '189 persons/sq. km', '242 persons/sq. km', '382 persons/sq. km'],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand recorded a population density of 189 persons per sq. km in Census 2011.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which two districts of Uttarakhand recorded NEGATIVE decadal population growth between 2001 and 2011?',
        options: [
          'Chamoli and Uttarkashi',
          'Pauri Garhwal and Almora',
          'Dehradun and Haridwar',
          'Bageshwar and Champawat',
        ],
        correctOptionIndex: 1,
        explanation: 'Due to hill out-migration, Pauri Garhwal (-1.41%) and Almora (-1.28%) recorded negative growth.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which district recorded the highest overall sex ratio in Uttarakhand as per Census 2011?',
        options: ['Rudraprayag', 'Almora', 'Bageshwar', 'Dehradun'],
        correctOptionIndex: 1,
        explanation: 'Almora recorded the highest sex ratio at 1,139 females per 1,000 males.',
        difficulty: 'foundation',
      },
      {
        stem: 'According to Census 2011, which district has the lowest population density (41 persons/sq. km) in Uttarakhand?',
        options: ['Chamoli', 'Uttarkashi', 'Pithoragarh', 'Rudraprayag'],
        correctOptionIndex: 1,
        explanation: 'Uttarkashi has the lowest population density (41 persons/sq. km), followed by Chamoli (49).',
        difficulty: 'foundation',
      },
      {
        stem: 'What was Uttarakhand\'s overall literacy rate in Census 2011?',
        options: ['71.62%', '74.04%', '78.82%', '84.25%'],
        correctOptionIndex: 2,
        explanation: 'Uttarakhand achieved 78.82% overall literacy in Census 2011 (Male: 87.40%, Female: 70.01%).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which district recorded the highest Child Sex Ratio (0–6 years) and which recorded the lowest in Census 2011?',
        options: [
          'Highest: Almora (922); Lowest: Pithoragarh (816)',
          'Highest: Dehradun; Lowest: Haridwar',
          'Highest: Udham Singh Nagar; Lowest: Almora',
          'Highest: Pithoragarh; Lowest: Rudraprayag',
        ],
        correctOptionIndex: 0,
        explanation: 'Almora stood highest at 922 while Pithoragarh stood lowest at 816 against a state average of 890.',
        difficulty: 'standard',
      },
      {
        stem: 'Which district of Uttarakhand had the lowest total population (~2.42 lakh) in Census 2011?',
        options: ['Champawat', 'Bageshwar', 'Rudraprayag', 'Uttarkashi'],
        correctOptionIndex: 2,
        explanation: 'Rudraprayag had the smallest population (242,285) in 2011.',
        difficulty: 'standard',
      },
      {
        stem: 'Which district led Uttarakhand in MALE literacy rate (93.90%) in Census 2011?',
        options: ['Dehradun', 'Rudraprayag', 'Nainital', 'Chamoli'],
        correctOptionIndex: 1,
        explanation: 'Rudraprayag led the state in male literacy (93.90%), while Dehradun led overall and female literacy.',
        difficulty: 'standard',
      },
      {
        stem: 'Which district had the lowest percentage of urban population (~3.49%) in Uttarakhand in Census 2011?',
        options: ['Rudraprayag', 'Bageshwar', 'Uttarkashi', 'Champawat'],
        correctOptionIndex: 1,
        explanation: 'Bageshwar was the least urbanized district at 3.49%, whereas Dehradun was the most urbanized (55.52%).',
        difficulty: 'standard',
      },
      {
        stem: 'Which district recorded the highest decadal population growth rate (33.45%) during 2001–2011?',
        options: ['Dehradun', 'Haridwar', 'Udham Singh Nagar', 'Nainital'],
        correctOptionIndex: 2,
        explanation: 'Udham Singh Nagar grew fastest at 33.45%, followed by Dehradun (32.33%) and Haridwar (30.63%).',
        difficulty: 'foundation',
      },
      {
        stem: 'Why does Almora exhibit a high adult sex ratio (1,139) despite a much lower child sex ratio (922)?',
        options: [
          'Large-scale out-migration of working-age men from hill villages inflates the resident female-to-male adult ratio',
          'More boys than girls migrate into Almora after age 18',
          'Census 2011 miscounted urban wards',
          'Men have half the life expectancy of women in plains',
        ],
        correctOptionIndex: 0,
        explanation: 'Adult male out-migration for jobs raises the resident adult sex ratio while masking child sex ratio disparities.',
        difficulty: 'standard',
      },
      {
        stem: 'Which district recorded the lowest overall literacy rate (73.10%) in Uttarakhand in Census 2011?',
        options: ['Uttarkashi', 'Tehri Garhwal', 'Udham Singh Nagar', 'Haridwar'],
        correctOptionIndex: 2,
        explanation: 'Udham Singh Nagar recorded 73.10%, closely followed by Haridwar at 73.43%.',
        difficulty: 'standard',
      },
      {
        stem: 'What was Uttarakhand\'s urban share of population in Census 2011?',
        options: ['18.50%', '30.23%', '42.10%', '55.52%'],
        correctOptionIndex: 1,
        explanation: '30.23% of Uttarakhand\'s population lived in urban areas and 69.77% in rural areas in 2011.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which district recorded the lowest FEMALE literacy rate (62.35%) in Census 2011?',
        options: ['Uttarkashi', 'Tehri Garhwal', 'Udham Singh Nagar', 'Dehradun'],
        correctOptionIndex: 0,
        explanation: 'Uttarkashi recorded the lowest female literacy at 62.35%.',
        difficulty: 'advanced',
      },
      {
        stem: 'How does rapid population concentration in Dehradun, Haridwar, and Udham Singh Nagar affect Uttarakhand\'s regional planning?',
        options: [
          'Creates intense urban land, traffic, and waste stress in plains while hill constituencies lose demographic weight',
          'Eliminates all housing demand in Dehradun',
          'Forces SIDCUL factories to close in Haridwar',
          'Increases density in Uttarkashi to 800/km²',
        ],
        correctOptionIndex: 0,
        explanation: 'Plains absorb migrants and industrial expansion while hills face service viability and delimitation debates.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Scheduled Tribes & Settlement Patterns of Uttarakhand',
    materialTitle: 'Scheduled Tribes & Settlement Patterns of Uttarakhand — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Scheduled Tribes & Settlements of Uttarakhand',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Scheduled Tribes & Settlement Patterns of Uttarakhand

## 1. The Five Scheduled Tribes (1967 Notification; ~2.89% of population)
| Tribe | Core Districts | Key Cultural / Governance Traits |
|---|---|---|
| **Tharu** | **Udham Singh Nagar** (Khatima, Sitarganj) | **Largest ST** in state; Terai paddy cultivators; *Khichdi Holi* |
| **Jaunsari** | **Dehradun** (Chakrata, Kalsi, Tyuni) | **2nd largest ST** (largest in Garhwal); *Khumri* council; **Mahasu Devta**; *Bissu, Jagra* |
| **Buksa** | **US Nagar** (Bazpur, Gadarpur), **Nainital**, **Pauri**, **Dehradun** | **PVTG**; *Takhat/Panchayat*; **Chamunda Devi** (Kashipur) |
| **Bhotia** | **Pithoragarh, Chamoli, Uttarkashi** | Transhumant mountain traders (*Mait–Gunda*); **Rambang** youth institution; wool crafts |
| **Raji (Banrawat)** | **Pithoragarh** (Askot–Didihat), **Champawat** | **Smallest ST & PVTG**; wooden *Theki* carvers; *Baghnath/Malaynath* |

## 2. Settlement Patterns
- **Hills:** Mid-slope hamlets (*Gaon/Tok*) near springs; seismic-resistant **Koti Banal** timber-stone houses; **Prayag** confluence hubs; foothill **Bhabar nodes**; compact **Terai** villages.

## 3. Key Revision Takeaways
- **Tharu** = largest ST; **Jaunsari** = largest in Garhwal; **Raji** = smallest ST.
- **PVTGs:** **Raji** & **Buksa**.
`,
    mcqs: [
      {
        stem: 'Which is the largest Scheduled Tribe by population in Uttarakhand as per Census 2011?',
        options: ['Jaunsari', 'Tharu', 'Bhotia', 'Buksa'],
        correctOptionIndex: 1,
        explanation: 'Tharu (concentrated in Khatima and Sitarganj of Udham Singh Nagar) is the largest ST in Uttarakhand.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which two Scheduled Tribes of Uttarakhand are designated as Particularly Vulnerable Tribal Groups (PVTGs)?',
        options: ['Tharu and Jaunsari', 'Bhotia and Tharu', 'Raji and Buksa', 'Jaunsari and Bhotia'],
        correctOptionIndex: 2,
        explanation: 'Of the five Scheduled Tribes notified in 1967, the Raji and Buksa communities are classified as PVTGs.',
        difficulty: 'foundation',
      },
      {
        stem: 'In which part of Uttarakhand is the Jaunsari tribe concentrated?',
        options: [
          'Khatima–Sitarganj (Udham Singh Nagar)',
          'Chakrata–Kalsi–Tyuni (Jaunsar-Bawar region of Dehradun)',
          'Darma–Byans valleys (Pithoragarh)',
          'Bageshwar–Kapkot',
        ],
        correctOptionIndex: 1,
        explanation: 'The Jaunsari community inhabits the Jaunsar-Bawar region of Dehradun district.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Scheduled Tribe of Uttarakhand is the smallest in population and historically known as "Banrawat"?',
        options: ['Buksa', 'Raji', 'Bhotia', 'Tharu'],
        correctOptionIndex: 1,
        explanation: 'The Rajis (Banrawat), living mainly in Pithoragarh and Champawat, are the smallest ST in Uttarakhand.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is "Khumri" in traditional Jaunsari social organization?',
        options: [
          'A seasonal alpine pasture',
          'A traditional village/khat council led by a Sayana that resolves disputes',
          'A winter woolen blanket',
          'A Terai rice harvest festival',
        ],
        correctOptionIndex: 1,
        explanation: 'The Khumri is the traditional socio-judicial council of Jaunsari villages headed by a Sayana.',
        difficulty: 'standard',
      },
      {
        stem: 'Which traditional deity is most widely revered across the Jaunsar-Bawar tribal region (especially at Hanol)?',
        options: ['Mahasu Devta', 'Narsingh Devta', 'Golu Devta', 'Nanda Devi'],
        correctOptionIndex: 0,
        explanation: 'Mahasu Devta (centred at Hanol on the Tons river) is the principal deity of Jaunsar-Bawar.',
        difficulty: 'foundation',
      },
      {
        stem: 'What seasonal practice characterizes the traditional Bhotia community of Chamoli, Uttarkashi, and Pithoragarh?',
        options: [
          'Coastal deep-sea fishing',
          'Vertical transhumance—spending summers in high alpine valleys and winters in lower valleys',
          'Year-round sedentary sugarcane farming in Haridwar',
          'Shifting cultivation in Udham Singh Nagar',
        ],
        correctOptionIndex: 1,
        explanation: 'Bhotias traditionally migrated between high summer villages near border passes and lower winter settlements.',
        difficulty: 'foundation',
      },
      {
        stem: 'What was "Rambang" in the cultural tradition of Bhotia groups of Darma and Byans valleys?',
        options: [
          'A stone irrigation channel',
          'A traditional youth gathering institution where young men and women sang and socialized',
          'A type of Tibetan tea',
          'An iron furnace',
        ],
        correctOptionIndex: 1,
        explanation: 'Rambang was a traditional social institution among eastern Bhotia groups for youth music, dance, and socialization.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Scheduled Tribe celebrates "Khichdi Holi" in Udham Singh Nagar?',
        options: ['Tharu', 'Raji', 'Jaunsari', 'Bhotia'],
        correctOptionIndex: 0,
        explanation: 'The Tharu community is well known for its distinctive Khichdi Holi celebrations.',
        difficulty: 'standard',
      },
      {
        stem: 'Chamunda Devi of Kashipur is traditionally regarded as a major tutelary deity of which tribe?',
        options: ['Bhotia', 'Buksa', 'Raji', 'Jaunsari'],
        correctOptionIndex: 1,
        explanation: 'The Buksa tribe reveres Chamunda Devi at Kashipur alongside local village deities.',
        difficulty: 'standard',
      },
      {
        stem: 'In Uttarakhand\'s rural settlement geography, what is the "Koti Banal" architectural tradition of Uttarkashi–Rawain famous for?',
        options: [
          'Multi-storey timber-and-stone earthquake-resilient construction',
          'Glass-and-steel skyscrapers',
          'Mud-brick desert domes',
          'Floating bamboo houseboats',
        ],
        correctOptionIndex: 0,
        explanation: 'Koti Banal style uses alternating dressed stone and deodar timber beams providing seismic resilience.',
        difficulty: 'advanced',
      },
      {
        stem: 'Why do traditional hill villages in Garhwal and Kumaon typically occupy mid-slope benches rather than riverbanks?',
        options: [
          'To stay safely above seasonal flash floods while accessing nearby springs, sunshine, and arable terraces',
          'Because rivers flow uphill',
          'Because mid-slopes are frozen year-round',
          'To avoid exposure to sunlight',
        ],
        correctOptionIndex: 0,
        explanation: 'Mid-slope sites avoid flash floods and valley-bottom frost pockets while staying near springs and terraces.',
        difficulty: 'standard',
      },
      {
        stem: 'Roughly what percentage of Uttarakhand\'s total population did Scheduled Tribes constitute in Census 2011?',
        options: ['0.45%', '2.89%', '11.4%', '18.7%'],
        correctOptionIndex: 1,
        explanation: 'Scheduled Tribes accounted for approximately 2.89% of Uttarakhand\'s population in 2011.',
        difficulty: 'standard',
      },
      {
        stem: 'For which traditional craft have the Raji (Banrawat) people been historically renowned?',
        options: [
          'Hand-carving wooden bowls and vessels (Theki) from hill timbers',
          'Large-scale brass cannon foundry',
          'Weaving silk brocades in Haridwar',
          'Making marble inlays',
        ],
        correctOptionIndex: 0,
        explanation: 'Rajis historically crafted wooden bowls and implements from forest timber.',
        difficulty: 'standard',
      },
      {
        stem: 'Which district holds the highest absolute Scheduled Tribe population in Uttarakhand (Census 2011)?',
        options: ['Uttarkashi', 'Udham Singh Nagar', 'Chamoli', 'Almora'],
        correctOptionIndex: 1,
        explanation: 'Udham Singh Nagar has the largest ST population in Uttarakhand (dominated by Tharu and Buksa), followed by Dehradun (Jaunsari).',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Hill Migration, Ghost Villages & Transport Infrastructure',
    materialTitle: 'Hill Migration, Ghost Villages & Transport Infrastructure — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Migration & Infrastructure in Uttarakhand',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Hill Migration, Ghost Villages & Transport Infrastructure

## 1. Hill Out-Migration & Ghost Villages (*Palayan*)
- **Migration Commission HQ:** **Pauri Garhwal** (formed 2017).
- **Worst-Affected Districts:** **Pauri Garhwal** and **Almora** (highest ghost villages & negative 2001–11 growth).
- **Drivers:** Low farm returns, crop damage by **monkeys/wild boars**, health/education gaps, and plain industrial/service jobs.

## 2. Transport Connectivity
- **Char Dham All-Weather Road:** ~889 km highway upgrade connecting Yamunotri, Gangotri, Kedarnath, Badrinath.
- **Railways:** Traditional foothill railheads (**Dehradun, Haridwar, Rishikesh, Kotdwar, Ramnagar, Kathgodam, Tanakpur**); new **Rishikesh–Karnaprayag Broad-Gauge Rail (~125 km)** crossing 5 Garhwal districts mostly through tunnels.
- **Airports:** **Jolly Grant** (Dehradun), **Pantnagar** (US Nagar), **Naini Saini** (Pithoragarh), **Gauchar** (Chamoli), **Chinyalisaur** (Uttarkashi).
- **Reverse Migration:** **Vibrant Villages Programme** (border villages), Homestay Scheme, Palayan Roktham Yojana, Parvatmala ropeways.

## 3. Key Revision Takeaways
- **Migration Commission HQ:** Pauri; **Rishikesh–Karnaprayag rail:** ~125 km across 5 Garhwal districts.
- **Naini Saini** = Pithoragarh; **Gauchar** = Chamoli; **Chinyalisaur** = Uttarkashi.
`,
    mcqs: [
      {
        stem: 'Where is the headquarters of Uttarakhand\'s Rural Development and Migration Prevention Commission (Palayan Ayog)?',
        options: ['Dehradun', 'Pauri Garhwal', 'Haridwar', 'Haldwani'],
        correctOptionIndex: 1,
        explanation: 'The state established the Migration Commission headquarters at Pauri in 2017.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which two hill districts have recorded the highest numbers of completely uninhabited ("ghost") villages and negative population growth?',
        options: [
          'Dehradun and Haridwar',
          'Pauri Garhwal and Almora',
          'Udham Singh Nagar and Nainital',
          'Chamoli and Uttarkashi',
        ],
        correctOptionIndex: 1,
        explanation: 'Pauri Garhwal and Almora experienced the steepest permanent rural depopulation.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the approximate total length of the Rishikesh–Karnaprayag broad-gauge mountain railway project?',
        options: ['45 km', '125 km', '320 km', '510 km'],
        correctOptionIndex: 1,
        explanation: 'The ~125 km Rishikesh–Karnaprayag rail line traverses five Garhwal districts largely via tunnels and bridges.',
        difficulty: 'standard',
      },
      {
        stem: 'Which of the following is NOT an existing foothill rail terminus of Uttarakhand?',
        options: ['Kathgodam', 'Kotdwar', 'Tanakpur', 'Gopeshwar'],
        correctOptionIndex: 3,
        explanation: 'Kathgodam, Ramnagar, Tanakpur, Kotdwar, Rishikesh, and Dehradun are foothill railheads; Gopeshwar has no rail line.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pair correctly matches airport/airstrip and its district in Uttarakhand?',
        options: [
          'Naini Saini – Pithoragarh',
          'Chinyalisaur – Chamoli',
          'Gauchar – Uttarkashi',
          'Jolly Grant – Haridwar',
        ],
        correctOptionIndex: 0,
        explanation: 'Naini Saini is in Pithoragarh; Chinyalisaur is in Uttarkashi; Gauchar is in Chamoli; Jolly Grant is in Dehradun.',
        difficulty: 'foundation',
      },
      {
        stem: 'What does the Government of India\'s "Vibrant Villages Programme" aim to accomplish in Uttarkashi, Chamoli, and Pithoragarh?',
        options: [
          'Relocate all border villagers to Delhi',
          'Upgrade infrastructure, livelihoods, and tourism in northern border villages to encourage residents to stay',
          'Build nuclear reactors on glaciers',
          'Ban agriculture along the Kali river',
        ],
        correctOptionIndex: 1,
        explanation: 'The Vibrant Villages Programme strengthens frontier villages with roads, telecom, solar power, and eco-tourism to stem border depopulation.',
        difficulty: 'standard',
      },
      {
        stem: 'Which wildlife-related factor is cited in Palayan Ayog village surveys as a major trigger for farmers abandoning hill cultivation?',
        options: ['Marine flooding', 'Crop destruction by monkeys and wild boars', 'Locust swarms', 'Polar bear intrusion'],
        correctOptionIndex: 1,
        explanation: 'Severe crop raiding by wild boars and monkeys makes marginal rain-fed farming unviable.',
        difficulty: 'standard',
      },
      {
        stem: 'Why has the Char Dham All-Weather Road widening sparked environmental scrutiny?',
        options: [
          'Vertical slope-cutting without adequate stabilization, muck dumping, and tree felling increase landslide susceptibility on fragile strata',
          'The road passes below sea level',
          'The project prevents military access',
          'It relies solely on dirt tracks',
        ],
        correctOptionIndex: 0,
        explanation: 'Aggressive hill cutting and unscientific debris disposal can reactivate slope failures unless matched with bio-engineering.',
        difficulty: 'standard',
      },
      {
        stem: 'Which five Garhwal districts are directly linked along the Rishikesh–Karnaprayag railway alignment?',
        options: [
          'Dehradun, Tehri Garhwal, Pauri Garhwal, Rudraprayag, and Chamoli',
          'Haridwar, Dehradun, Uttarkashi, Almora, and Nainital',
          'Pauri, Bageshwar, Pithoragarh, Champawat, and US Nagar',
          'Dehradun and Haridwar only',
        ],
        correctOptionIndex: 0,
        explanation: 'Starting from Rishikesh (Dehradun), the line runs through Tehri, Pauri, Rudraprayag, and reaches Karnaprayag in Chamoli.',
        difficulty: 'standard',
      },
      {
        stem: 'Why are mountain ropeways (under Parvatmala for Kedarnath and Hemkund) considered ecologically preferable to multi-lane roads at high altitudes?',
        options: [
          'They require minimal continuous slope excavation, cut congestion, and reduce vehicular emissions near sensitive glaciers',
          'Ropeways carry coal freight trains',
          'Ropeways consume no electricity',
          'They freeze glaciers permanently',
        ],
        correctOptionIndex: 0,
        explanation: 'Aerial ropeways avoid carving long highway benches across steep fragile slopes while lowering traffic congestion.',
        difficulty: 'standard',
      },
      {
        stem: 'Which airport serves as Uttarakhand\'s main commercial air gateway between Dehradun and Rishikesh?',
        options: ['Pantnagar Airport', 'Jolly Grant Airport', 'Naini Saini Airport', 'Chinyalisaur Airstrip'],
        correctOptionIndex: 1,
        explanation: 'Jolly Grant Airport (Dehradun) handles the majority of commercial passenger flights.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which combination of initiatives supports reverse migration by monetizing traditional village houses and local tourism?',
        options: [
          'Deendayal Upadhyay Griha Awaas (Homestay) Yojana and Veer Chandra Singh Garhwali Tourism Swarozgar Yojana',
          'Banning rural tourism across Garhwal',
          'Closing hill primary schools',
          'Shifting state offices away from villages',
        ],
        correctOptionIndex: 0,
        explanation: 'State homestay subsidies and the Veer Chandra Singh Garhwali scheme help hill families earn local livelihoods.',
        difficulty: 'standard',
      },
      {
        stem: 'Why does permanent family migration harm hill villages differently from circular/temporary out-migration?',
        options: [
          'Permanent migration locks ancestral homes and leaves terraces fallow ("ghost villages"), whereas temporary migration keeps village ties and remittances alive',
          'Permanent migration increases village school enrollment',
          'Temporary migration leaves zero people in plains',
          'There is no difference',
        ],
        correctOptionIndex: 0,
        explanation: 'Permanent family migration abandons homes, schools, and agricultural terraces permanently.',
        difficulty: 'standard',
      },
      {
        stem: 'Which agency constructs and clears strategic high-altitude frontier roads near the China border such as Joshimath–Malari–Niti?',
        options: [
          'Border Roads Organisation (BRO)',
          'Inland Waterways Authority',
          'Central Marine Fisheries Institute',
          'Mumbai Port Trust',
        ],
        correctOptionIndex: 0,
        explanation: 'BRO maintains strategic border arteries across Garhwal and Kumaon.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Kumaon district hosts the Pantnagar Airport serving industrial SIDCUL and agricultural hubs?',
        options: ['Nainital', 'Udham Singh Nagar', 'Almora', 'Champawat'],
        correctOptionIndex: 1,
        explanation: 'Pantnagar Airport lies in Udham Singh Nagar district.',
        difficulty: 'foundation',
      },
    ],
  },
];
