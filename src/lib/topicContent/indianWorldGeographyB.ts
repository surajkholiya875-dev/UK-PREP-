import { TopicContentPackage } from './types';

export const INDIAN_WORLD_GEOGRAPHY_PART_B: TopicContentPackage[] = [
  {
    topicTitle: 'Mechanism of Indian Monsoon, El Nino & Indian Ocean Dipole',
    materialTitle: 'Mechanism of Indian Monsoon, El Nino & Indian Ocean Dipole — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Indian Monsoon, ENSO & IOD',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Mechanism of Indian Monsoon, El Nino & Indian Ocean Dipole

## 1. Drivers of the Southwest Monsoon (June–September)
- **Differential Thermal Heating & ITCZ Shift:** Summer heating over NW India and the **Tibetan Plateau** draws the **ITCZ (Monsoon Trough)** north to ~20°–25° N.
- **Jet Streams:** Northward withdrawal of the **Sub-Tropical Westerly Jet (STWJ)** above the Himalayas allows the **Tropical Easterly Jet (TEJ)** to establish across southern India (~14° N).
- **Mascarene High & Somali Jet:** High pressure near Madagascar (**Mascarene High**) drives cross-equatorial SE trade winds that turn right (Coriolis) into SW Monsoon winds, accelerated by the low-level **Somali (Findlater) Jet**.
- **Two Branches:** **Arabian Sea Branch** (hits Western Ghats orographically; rain-shadow Deccan) and **Bay of Bengal Branch** (deflected westward along Ganga plains toward Uttarakhand by Purvanchal/Himalayas).

## 2. El Nino, La Nina & Indian Ocean Dipole (IOD)
- **El Nino (Warm ENSO phase):** Abnormal warming of central/eastern equatorial Pacific weakens the Walker Circulation, often depressing Indian monsoon rainfall. **La Nina** (cool central/eastern Pacific) generally favours stronger Indian monsoons.
- **Indian Ocean Dipole (IOD):** Sea-surface temperature contrast between the western Indian Ocean (Arabian Sea) and eastern Indian Ocean (near Sumatra/Indonesia). A **Positive IOD** (warmer western Indian Ocean) boosts moisture transport toward India and can **counteract El Nino drought risk** (as seen in 1997 and 2019).
- **Monsoon Breaks & Retreating Monsoon:** Monsoon breaks occur when the trough shifts north to the **Himalayan foothills**, drying plains while triggering intense **cloudbursts/floods in Uttarakhand**. In October–November, retreating NE winds bring rain to **Tamil Nadu (Coromandel Coast)**.

## 3. Key Revision Takeaways
- **Tibetan Plateau** heating + **Mascarene High** + **ITCZ shift** + **TEJ** drive the SW Monsoon.
- **Positive IOD** & **La Nina** favour India's monsoon; **El Nino** typically suppresses it.
`,
    mcqs: [
      {
        stem: 'During peak Indian summer, what role does the high-altitude Tibetan Plateau play in monsoon onset?',
        options: [
          'It freezes the Bay of Bengal',
          'Intense solar heating transforms it into a vast elevated thermal heat source generating low-pressure ascent and strengthening the Tropical Easterly Jet',
          'It pushes the Sub-Tropical Westerly Jet south of Sri Lanka',
          'It blocks all moisture from reaching Kerala',
        ],
        correctOptionIndex: 1,
        explanation: 'Elevated summer heating of the Tibetan Plateau sets up upper-tropospheric anticyclonic outflow and drives the Tropical Easterly Jet southward.',
        difficulty: 'standard',
      },
      {
        stem: 'What happens to Indian monsoon rainfall when a "Monsoon Break" shifts the Monsoon Trough northward to the Himalayan foothills?',
        options: [
          'Central/peninsular plains turn unusually dry while heavy orographic rainfall and floods intensify in Uttarakhand, Nepal, and Assam foothills',
          'All rainfall stops across Asia including Uttarakhand',
          'Tamil Nadu receives snowfall',
          'The Arabian Sea turns dry',
        ],
        correctOptionIndex: 0,
        explanation: 'During break-monsoon conditions, the trough hugs the Himalayan foothills, reducing rain over central India while triggering heavy foothill/mountain downpours.',
        difficulty: 'application',
      },
      {
        stem: 'How does a "Positive Indian Ocean Dipole (IOD)" typically influence the Indian Southwest Monsoon?',
        options: [
          'It always triggers severe Indian drought',
          'Warmer sea-surface temperatures in the western Indian Ocean enhance cross-equatorial moisture flow toward India, often offsetting El Nino deficits',
          'It reverses the Somali Jet westward toward Africa permanently',
          'It stops Western Disturbances in Europe',
        ],
        correctOptionIndex: 1,
        explanation: 'A positive IOD (warmer Arabian Sea relative to eastern Indian Ocean) enhances convective moisture supply to the Indian monsoon.',
        difficulty: 'standard',
      },
      {
        stem: 'What causes the Southeast Trade Winds of the Southern Hemisphere to become the SOUTHWEST Monsoon upon crossing the Equator?',
        options: [
          'Coriolis deflection to the right in the Northern Hemisphere (Ferrel\'s Law)',
          'Himalayan magnetic fields',
          'Tidal pull of the Moon',
          'Earthquake vibrations in Indonesia',
        ],
        correctOptionIndex: 0,
        explanation: 'Crossing the Equator into the Northern Hemisphere, SE winds are deflected rightward by the Coriolis force, arriving over India from the southwest.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which ocean high-pressure cell near Madagascar drives cross-equatorial wind flow toward India during June–September?',
        options: ['Azores High', 'Mascarene High', 'Aleutian Low', 'Icelandic Low'],
        correctOptionIndex: 1,
        explanation: 'The Mascarene High in the subtropical southern Indian Ocean drives winds northward across the Equator toward India\'s ITCZ.',
        difficulty: 'standard',
      },
      {
        stem: 'During an El Nino year, which oceanic anomaly develops in the Pacific Ocean?',
        options: [
          'Unusual cooling off Peru and Ecuador',
          'Abnormal warming of surface waters in the central and eastern equatorial Pacific, weakening trade winds and Walker circulation',
          'Complete freezing of the Western Pacific',
          'Rise of sea level only in the Red Sea',
        ],
        correctOptionIndex: 1,
        explanation: 'El Nino warms the eastern/central tropical Pacific, shifting convection eastward and weakening subsiding/ascending loops over India.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why does Mahabaleshwar on the windward Western Ghats receive >5,000 mm rain while Pune just east of the crest receives <750 mm?',
        options: [
          'Pune sits in a tropical desert latitude',
          'Moist Arabian Sea winds rise and dump rain on the windward slope, then descend dry and adiabatically warm on the leeward rain-shadow side',
          'Bay of Bengal winds blow westward past Pune first',
          'Pune sits at 6,000 m altitude',
        ],
        correctOptionIndex: 1,
        explanation: 'Orographic uplift triggers intense windward precipitation, leaving descending leeward air drier (rain-shadow effect).',
        difficulty: 'application',
      },
      {
        stem: 'Which wind system shifts northward across the Himalayas right before the sudden "Burst of Monsoon" over India?',
        options: [
          'Polar Easterlies',
          'Sub-Tropical Westerly Jet Stream (STWJ)',
          'Tropical Easterly Jet',
          'Loo winds',
        ],
        correctOptionIndex: 1,
        explanation: 'Withdrawal of the Sub-Tropical Westerly Jet north of Tibet removes upper-level subsidence over north India, permitting sudden monsoon onset.',
        difficulty: 'standard',
      },
      {
        stem: 'What does "Mango Showers" refer to in pre-monsoon Indian climatology?',
        options: [
          'Winter snow in Ladakh',
          'Pre-monsoon thunderstorms in Kerala and coastal Karnataka (April–May) aiding early ripening of mangoes',
          'Retreating monsoon rains in Bihar',
          'Cyclones in Gujarat in January',
        ],
        correctOptionIndex: 1,
        explanation: 'Pre-monsoon convective showers in southern coastal India are locally called Mango Showers (and Blossom Showers in coffee belts).',
        difficulty: 'foundation',
      },
      {
        stem: 'Why does Uttarakhand receive monsoon moisture primarily from the Bay of Bengal branch rather than directly from Kerala?',
        options: [
          'The Bay of Bengal branch strikes Arakan/Purvanchal hills and gets funneled northwestward up the Indo-Gangetic Plain into Uttarakhand',
          'Arabian Sea branch never crosses Gujarat',
          'Uttarakhand sits adjacent to the Bay of Bengal',
          'Monsoon arrives in Uttarakhand in December',
        ],
        correctOptionIndex: 0,
        explanation: 'Mountains of Northeast India deflect the Bay of Bengal current westward along the Gangetic trough toward Uttarakhand, though occasional Arabian Sea currents also merge.',
        difficulty: 'application',
      },
      {
        stem: 'What are "Nor\'westers" (Kalbaisakhi) in eastern India during April–May?',
        options: [
          'Cold winter fog in Punjab',
          'Severe afternoon convective thunderstorms accompanied by squalls and hail over West Bengal, Bihar, and Assam (also called Bardoli Chheerha)',
          'Dry desert sandstorms in Thar',
          'Equatorial ocean currents',
        ],
        correctOptionIndex: 1,
        explanation: 'Kalbaisakhi are violent pre-monsoon thunderstorms crucial for summer tea and pre-kharif jute/rice.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which ocean condition generally strengthens Indian monsoon rainfall and brings colder winters to northern India?',
        options: ['Strong El Nino', 'La Nina (cold central/eastern equatorial Pacific phase)', 'Negative IOD', 'Positive Arctic Oscillation only'],
        correctOptionIndex: 1,
        explanation: 'La Nina strengthens Pacific Walker upwelling and enhances Indian monsoon moisture transport.',
        difficulty: 'foundation',
      },
      {
        stem: 'What causes the oppressive weather known as "October Heat" across northern India?',
        options: [
          'Clear skies, high daytime temperature, and lingering soil/atmospheric humidity immediately following monsoon withdrawal',
          'Arrival of Siberian cold waves',
          'Dense winter fog',
          'Active Bay of Bengal snowstorms',
        ],
        correctOptionIndex: 0,
        explanation: 'As monsoon clouds clear in October over waterlogged soils, intense sunshine combined with high humidity creates stifling warmth.',
        difficulty: 'standard',
      },
      {
        stem: 'What is the Madden–Julian Oscillation (MJO)?',
        options: [
          'A permanent ice cap over Tibet',
          'An eastward-moving 30–60 day pulse of cloudiness and convection along the tropics that modulates active and break phases of the Indian monsoon',
          'A tectonic fault in Kerala',
          'A deep Atlantic salinity belt',
        ],
        correctOptionIndex: 1,
        explanation: 'When the convective phase of the eastward-travelling MJO passes over the Indian Ocean, it boosts monsoon depressions and active rainfall spells.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which state receives nearly half of its annual rainfall during October–December from the Retreating / Northeast Monsoon?',
        options: ['Rajasthan', 'Tamil Nadu', 'Punjab', 'Uttarakhand'],
        correctOptionIndex: 1,
        explanation: 'Tamil Nadu lies in the rain shadow of the Western Ghats during summer SW monsoon, receiving its primary rainfall peak during the Oct–Dec NE monsoon.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Major Soil Groups & Land Degradation in India',
    materialTitle: 'Major Soil Groups & Land Degradation in India — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Major Soil Groups & Degradation in India',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Major Soil Groups & Land Degradation in India

## 1. ICAR Classification of Major Indian Soils
1. **Alluvial Soils (~40%+ area):** Indo-Gangetic–Brahmaputra plains & coastal deltas; rich in **potash**, poor in **nitrogen/phosphorus**. Divided into **Khadar** (new) and **Bhangar** (old).
2. **Black (Regur) Soils:** Deccan basalt weathering (Maharashtra, MP, Gujarat); clayey, **self-ploughing** (deep cracks when dry, sticky when wet); high moisture retention; rich in lime, iron, magnesia; ideal for **cotton**.
3. **Red & Yellow Soils:** Crystalline granite/gneiss weathering on eastern/southern Deccan margins; iron oxide gives red colour (yellow when hydrated).
4. **Laterite Soils:** Intense **leaching** under high tropical heat and heavy rainfall (Western Ghats, Odisha, Meghalaya); poor in fertility naturally, used for **cashew, tea, coffee**, and brick-cutting (*later* = brick).
5. **Arid / Desert Soils:** Sandy, saline/alkaline (western Rajasthan); Kankar pan limits infiltration; fertile with canal irrigation (Indira Gandhi Canal).
6. **Saline & Alkaline Soils (*Usar / Reh / Kallar*):** Excess sodium/magnesium salts from capillary rise in canal-over-irrigated semi-arid zones; reclaimed using **gypsum**.
7. **Peaty / Marshy & Forest–Mountain Soils:** High organic carbon in coastal/Kuttanad swamps; heterogeneous mountain profiles across Himalayas (Uttarakhand).

## 2. Land Degradation & Reclamation
- **Causes:** Water/sheet & **gully erosion** (Chambal ravines), wind erosion (Thar), **waterlogging & salinization** in Green Revolution canal belts, deforestation, and mining.
- **Remedies:** Contour bunding, shelterbelts, **gypsum** application for sodic soils, mulching, and India's UNCCD Land Degradation Neutrality (LDN) targets.

## 3. Key Revision Takeaways
- **Alluvial** = largest Indian soil area; **Black (Regur)** = self-ploughing Deccan cotton soil; **Laterite** = intense tropical leaching.
- **Gypsum** reclaims alkaline/sodic (*Usar*) soils; most Indian soils are deficient in **Nitrogen**.
`,
    mcqs: [
      {
        stem: 'Which soil group covers the largest geographical area in India (~40%+)?',
        options: ['Black Soil', 'Alluvial Soil', 'Laterite Soil', 'Arid Soil'],
        correctOptionIndex: 1,
        explanation: 'Alluvial soils spread across the vast Indo-Gangetic–Brahmaputra plains and eastern coastal deltas cover the largest area.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why are Deccan Black (Regur) soils famously termed "self-ploughing" soils?',
        options: [
          'They swell when wet and shrink to form deep wide aeration cracks during the dry summer',
          'Earthworms convert them into gravel',
          'They contain high volcanic sulfur',
          'They resist all water absorption',
        ],
        correctOptionIndex: 0,
        explanation: 'Smectite/montmorillonite clays expand on wetting and develop deep cracks upon drying, naturally mixing surface topsoil and oxygenating roots.',
        difficulty: 'standard',
      },
      {
        stem: 'Which soil-forming process creates Laterite soils along high-rainfall ridges of the Western Ghats and Meghalaya?',
        options: [
          'Intense desilication/leaching under alternating heavy tropical rain and dry heat, leaving iron and aluminium oxides behind',
          'Glacial grinding of granite',
          'Wind deposition of desert silt',
          'Volcanic ash freezing',
        ],
        correctOptionIndex: 0,
        explanation: 'Heavy tropical rain washes away soluble silica and bases (leaching), concentrating insoluble iron and aluminium hydroxides.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which chemical amendment is most commonly applied to reclaim alkaline/sodic ("Usar" / "Kallar") soils in Punjab, Haryana, and UP?',
        options: ['Urea', 'Gypsum (Calcium Sulphate)', 'Sodium Chloride', 'Coal dust'],
        correctOptionIndex: 1,
        explanation: 'Gypsum supplies soluble calcium that replaces excess exchangeable sodium on clay particles, restoring soil permeability.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which nutrient is broadly deficient across nearly all major soil groups of India (including alluvial, red, and black soils)?',
        options: ['Iron', 'Nitrogen (and organic humus)', 'Silica', 'Calcium everywhere'],
        correctOptionIndex: 1,
        explanation: 'High tropical decomposition rates leave most Indian soils low in organic carbon and available Nitrogen.',
        difficulty: 'standard',
      },
      {
        stem: 'What gives "Red Soils" of Tamil Nadu, Karnataka, and Odisha their characteristic reddish colour, turning yellow when hydrated?',
        options: [
          'High calcium carbonate',
          'Wide diffusion of iron oxides in weathered crystalline metamorphic rocks',
          'Excessive nitrogen fertilizer',
          'Volcanic coal seams',
        ],
        correctOptionIndex: 1,
        explanation: 'Ferric oxide coats mineral grains red; in hydrated form (limonite), the soil appears yellow.',
        difficulty: 'foundation',
      },
      {
        stem: 'Laterite soils, though naturally low in fertility without manuring, are widely prized in southern and eastern India for cultivating:',
        options: ['Jute and floating paddy', 'Tea, coffee, rubber, and cashew nuts', 'Saffron only', 'Temperate apples'],
        correctOptionIndex: 1,
        explanation: 'Well-drained acidic lateritic hill slopes in Karnataka, Kerala, and Odisha support plantation crops like cashew, coffee, and tea.',
        difficulty: 'standard',
      },
      {
        stem: 'Why does excessive canal irrigation without proper drainage in semi-arid Rajasthan or Haryana turn fertile fields barren?',
        options: [
          'Rising water tables draw dissolved subsoil salts upward via capillary evaporation, causing salinization and waterlogging',
          'Canal water washes soil into oceans',
          'Irrigation turns loam into granite',
          'Crops consume all silica',
        ],
        correctOptionIndex: 0,
        explanation: 'Capillary rise and evaporation concentrate white salt crusts (Reh/Usar) in the root zone when drainage is poor.',
        difficulty: 'application',
      },
      {
        stem: 'Which conservation method is most effective at halting Wind Erosion across desert margins in western Rajasthan?',
        options: [
          'Deep flood irrigation',
          'Planting shelterbelts (windbreaks) and stabilizing sand dunes with drought-hardy shrubs/grasses',
          'Removing all topsoil',
          'Building vertical concrete dams',
        ],
        correctOptionIndex: 1,
        explanation: 'Multi-row tree/shrub shelterbelts reduce near-surface wind speed and anchor shifting sand.',
        difficulty: 'application',
      },
      {
        stem: 'Which basin in India faces the severest "Gully and Ravine" erosion, historically creating thousands of hectares of badlands?',
        options: ['Kaveri Delta', 'Chambal and Yamuna river plains (MP–Rajasthan–UP)', 'Kashmir Karewas', 'Brahmaputra Valley'],
        correctOptionIndex: 1,
        explanation: 'Deeply incised alluvial banks of the Chambal and lower Yamuna rivers form classic ravine badlands.',
        difficulty: 'foundation',
      },
      {
        stem: 'What characterizes "Peaty and Marshy Soils" found in coastal Kerala (Kari soils), Sundarbans, and northern Bihar?',
        options: [
          'Very low organic matter (<0.1%)',
          'Heavy dark soils extremely rich in partially decomposed organic humus (often 10–40%) and strong acidity',
          'Pure desert quartz sand',
          'High calcium volcanic ash',
        ],
        correctOptionIndex: 1,
        explanation: 'Waterlogged anaerobic conditions slow decomposition, accumulating dark organic peat.',
        difficulty: 'standard',
      },
      {
        stem: 'In terms of parent material, Deccan Black Soils evolved predominantly from:',
        options: [
          'Himalayan glacial till',
          'Cretaceous Deccan Trap basaltic lava flows',
          'Marine coral skeletons',
          'Precambrian quartzite',
        ],
        correctOptionIndex: 1,
        explanation: 'Weathering of iron-rich Deccan basalt produced the clayey black Regur soils.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why is the "Kankar" layer found in arid Rajasthan and Bhangar subsoils significant for farmers?',
        options: [
          'This hard calcium carbonate nodule pan restricts downward root penetration and water percolation',
          'It generates natural urea continuously',
          'It turns into iron ore when wet',
          'It prevents wind from blowing',
        ],
        correctOptionIndex: 0,
        explanation: 'Indurated Kankar pans impede vertical drainage and root depth unless broken mechanically.',
        difficulty: 'advanced',
      },
      {
        stem: 'Under India\'s Soil Health Card and sustainable soil management goals, why is crop rotation with legumes (pulses) emphasized?',
        options: [
          'Rhizobium bacteria in legume root nodules fix atmospheric nitrogen naturally, replenishing soil fertility',
          'Legumes raise soil salinity intentionally',
          'Legumes harden topsoil into rock',
          'Pulses absorb all phosphorus from air',
        ],
        correctOptionIndex: 0,
        explanation: 'Biological nitrogen fixation by leguminous crops reduces synthetic urea dependence and improves soil structure.',
        difficulty: 'application',
      },
      {
        stem: 'Which Indian state holds the largest expanse of Black Cotton (Regur) Soil?',
        options: ['Punjab', 'Maharashtra', 'West Bengal', 'Assam'],
        correctOptionIndex: 1,
        explanation: 'Maharashtra accounts for the largest share of Deccan Trap black cotton soils, alongside MP, Gujarat, and northern Karnataka.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Natural Vegetation Zones & Forest Resources of India',
    materialTitle: 'Natural Vegetation Zones & Forest Resources of India — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Vegetation & Forests of India',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Natural Vegetation Zones & Forest Resources of India

## 1. Major Forest Biomes of India
| Forest Type | Rainfall Belt | Key Region | Signature Species |
|---|---|---|---|
| **Tropical Evergreen & Semi-Evergreen** | $>200\\text{ cm}$ | Western Ghats (west slope), NE India, A&N Islands | Rosewood, Mahogany, Ebony, Aini |
| **Tropical Moist Deciduous** | $100$–$200\\text{ cm}$ | Foothills (Shivalik–Bhabar–Terai of **Uttarakhand**), Odisha, Jharkhand, East MP | **Teak**, **Sal**, Shisham, Sandalwood, Bamboo |
| **Tropical Dry Deciduous** | $70$–$100\\text{ cm}$ | UP plains, Bihar, Peninsular rain-shadow | Tendu, Palas, Amaltas, Bel, Axlewood |
| **Tropical Thorn Forest** | $<50$–$70\\text{ cm}$ | Rajasthan, Kutch, semi-arid Deccan | Babool, Khejri, Ber, Wild Date Palm |
| **Littoral & Swamp (Mangroves)** | Tidal deltas | **Sundarbans** (largest), Bhitarkanika, Godavari–Krishna | **Sundari (*Heritiera*)**, Rhizophora (pneumatophores/breathing roots) |
| **Montane Forests** | Altitudinal | Himalayas & Nilgiris (**Sholas** — temperate pockets in Nilgiri–Anaimalai) | Oak, Pine, **Deodar**, Birch (**Bhojpatra**) |

## 2. India State of Forest Report (ISFR) Concepts
- **Forest Cover vs Recorded Forest Area:** *Forest Cover* measures all tree canopy patches $\\ge 1\\text{ ha}$ with $\\ge 10\\%$ canopy density (via satellite, regardless of ownership); *Recorded Forest Area* refers to legal government forest records.
- **State Leaders (ISFR):** **Madhya Pradesh** leads in **total forest area**, while **Mizoram** (and Lakshadweep among UTs) leads in **percentage forest cover** relative to geographical area.
- **National Forest Policy (1988) Target:** Minimum **33%** geographical area under forest/tree cover nationally (**66% in mountain/hill regions** like Uttarakhand).

## 3. Key Revision Takeaways
- **Tropical Deciduous (Monsoon)** forests cover the largest forest area in India.
- **Sundari** trees & **pneumatophores** characterize **Mangroves**; **Sholas** are temperate montane forests of South Indian hills.
- **National Forest Policy (1988)** targets **33% national** and **66% hill-state** forest cover.
`,
    mcqs: [
      {
        stem: 'Which natural forest type covers the largest geographical area in India?',
        options: [
          'Tropical Evergreen Forests',
          'Tropical Deciduous (Monsoon) Forests',
          'Alpine Tundra',
          'Mangrove Swamp Forests',
        ],
        correctOptionIndex: 1,
        explanation: 'Tropical Deciduous Forests (both moist and dry, thriving in 70–200 cm rainfall) are the most widespread forest biome in India.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the National Forest Policy of 1988, what target percentage of forest/tree cover is prescribed for hilly and mountainous regions like Uttarakhand compared to the national plains target?',
        options: [
          '20% hills; 10% national',
          '66% (two-thirds) in hills; 33% (one-third) overall nationally',
          '90% hills; 50% national',
          '33% hills; 66% plains',
        ],
        correctOptionIndex: 1,
        explanation: 'To prevent slope erosion and regulate watersheds, the 1988 Policy sets a 66% target in hill/mountain tracts against 33% nationally.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Indian state consistently ranks first in TOTAL geographical area under forest cover (per Forest Survey of India ISFR)?',
        options: ['Arunachal Pradesh', 'Madhya Pradesh', 'Uttarakhand', 'Chhattisgarh'],
        correctOptionIndex: 1,
        explanation: 'Madhya Pradesh has the largest absolute forest area in India, followed by Arunachal Pradesh and Chhattisgarh.',
        difficulty: 'foundation',
      },
      {
        stem: 'What are "Sholas" in Indian biogeography?',
        options: [
          'Mangrove trees in Sundarbans',
          'Patches of stunted evergreen temperate forests nestled in valleys of the Nilgiris, Anaimalai, and Palani hills of South India',
          'Thorny desert shrubs of Thar',
          'Alpine grasslands in Ladakh',
        ],
        correctOptionIndex: 1,
        explanation: 'Shola–grassland mosaics occupy high elevations (>1,500 m) in the Southern Western Ghats.',
        difficulty: 'standard',
      },
      {
        stem: 'Which adaptive root structure helps Mangrove trees (such as Sundari and Avicennia) respire in waterlogged, oxygen-poor tidal mud?',
        options: [
          'Pneumatophores (aerial breathing roots) and stilt roots',
          'Deep taproots reaching granite',
          'Floating bulbs without soil contact',
          'Resin-coated pine needles',
        ],
        correctOptionIndex: 0,
        explanation: 'Vertical pneumatophores protrude above anaerobic tidal mud to absorb atmospheric oxygen, while viviparous germination helps seedlings establish in tides.',
        difficulty: 'standard',
      },
      {
        stem: 'Rosewood, Mahogany, and Ebony are signature hardwood species of which Indian forest zone?',
        options: [
          'Tropical Thorn Forest',
          'Tropical Evergreen Forests (rainfall >200 cm)',
          'Sub-Alpine Birch Forest',
          'Tropical Dry Deciduous Forest',
        ],
        correctOptionIndex: 1,
        explanation: 'Warm, humid Western Ghats windward slopes, Northeast hills, and Andaman & Nicobar (>200 cm rain) sustain dense Tropical Evergreen hardwood canopies.',
        difficulty: 'foundation',
      },
      {
        stem: 'In Forest Survey of India (ISFR) terminology, what distinguishes "Forest Cover" from "Recorded Forest Area (RFA)"?',
        options: [
          'Forest Cover includes all tree-canopy patches ≥1 ha with ≥10% density detected by satellite regardless of legal ownership, whereas RFA refers to land legally notified under Forest Acts even if treeless',
          'Recorded Forest Area counts private apple orchards only',
          'Forest Cover excludes National Parks',
          'Both terms mean identical legal status',
        ],
        correctOptionIndex: 0,
        explanation: 'Satellite-mapped Forest Cover tracks actual canopy density across all lands, whereas RFA tracks legal forest classification.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which tree is culturally and ecologically celebrated as the "Kalpavriksha" (lifeline tree) of the arid Thar desert in Rajasthan (Bishnoi heritage)?',
        options: ['Sal', 'Khejri (Prosopis cineraria)', 'Deodar', 'Sundari'],
        correctOptionIndex: 1,
        explanation: 'Khejri tolerates severe drought, enriches desert soil, provides fodder/pods, and lies at the heart of the 1730 Khejarli Bishnoi sacrifice.',
        difficulty: 'standard',
      },
      {
        stem: 'Which state leads India in the HIGHEST PERCENTAGE of its geographical area under forest cover (excluding small island UTs like Lakshadweep)?',
        options: ['Punjab', 'Mizoram', 'Uttar Pradesh', 'Gujarat'],
        correctOptionIndex: 1,
        explanation: 'Among Indian states, Mizoram records the highest percentage share of geographical area under forest cover (~84%+).',
        difficulty: 'standard',
      },
      {
        stem: 'Which mangrove delta holds the world\'s largest contiguous tidal halophytic mangrove ecosystem?',
        options: ['Godavari Delta', 'Sundarbans (Ganga–Brahmaputra Delta)', 'Mahanadi Delta', 'Gulf of Kutch'],
        correctOptionIndex: 1,
        explanation: 'The Sundarbans across West Bengal and Bangladesh form the world\'s largest mangrove forest, named after the Sundari tree.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why do Tropical Deciduous trees (like Sal and Teak) shed their leaves during the dry spring–summer season?',
        options: [
          'To conserve moisture by drastically curbing transpiration during peak water stress',
          'Because winter frost kills their roots',
          'To attract desert locusts',
          'Because sunlight ceases in March',
        ],
        correctOptionIndex: 0,
        explanation: 'Leaf shedding minimizes evaporative water loss across the dry pre-monsoon months.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which dry deciduous tree\'s leaves are widely collected across central India as a major minor forest produce for rolling bidis?',
        options: ['Deodar', 'Tendu (Diospyros melanoxylon)', 'Bhojpatra', 'Mahogany'],
        correctOptionIndex: 1,
        explanation: 'Tendu leaves constitute a vital non-timber forest livelihood resource across MP, Chhattisgarh, Odisha, and Jharkhand.',
        difficulty: 'standard',
      },
      {
        stem: 'Why is replacing diverse native forests with fast-growing monoculture plantations (e.g., commercial Eucalyptus or exotic pine) criticized by ecologists?',
        options: [
          'Monocultures reduce biodiversity, support fewer wildlife food webs, alter soil hydrology, and do not restore equivalent ecological resilience',
          'Monocultures double native mammal species',
          'Monocultures eliminate carbon dioxide globally',
          'Native forests never produce oxygen',
        ],
        correctOptionIndex: 0,
        explanation: 'Canopy percentage alone hides biodiversity loss when multi-storey natural ecosystems are replaced by single-species plantations.',
        difficulty: 'application',
      },
      {
        stem: 'Which coastal state ranks second in mangrove cover in India after West Bengal, hosting the famous Bhitarkanika mangroves?',
        options: ['Maharashtra', 'Gujarat (or Odisha at Bhitarkanika — Gujarat ranks 2nd in total area)', 'Kerala', 'Goa'],
        correctOptionIndex: 1,
        explanation: 'West Bengal leads mangrove area (~42%), followed by Gujarat (~23%), while Odisha\'s Bhitarkanika is renowned for saltwater crocodiles and Olive Ridley rookeries.',
        difficulty: 'advanced',
      },
      {
        stem: 'Why do tropical evergreen forests remain difficult to exploit commercially for single-species timber despite immense biomass?',
        options: [
          'High species heterogeneity (hundreds of scattered species per hectare), dense undergrowth, and heavy timber that does not float easily',
          'Evergreen trees are hollow inside',
          'Evergreen forests exist only above 5,000 m',
          'Every tree is less than 1 metre tall',
        ],
        correctOptionIndex: 0,
        explanation: 'Unlike pure stands of Sal or Pine, rainforest species grow intermixed with dense lianas and hard, dense wood.',
        difficulty: 'application',
      },
    ],
  },
  {
    topicTitle: 'Agro-Climatic Regions, Cropping Seasons & Irrigation in India',
    materialTitle: 'Agro-Climatic Regions, Cropping Seasons & Irrigation in India — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Cropping Seasons, Agro-Climate & Irrigation',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Agro-Climatic Regions, Cropping Seasons & Irrigation in India

## 1. India's Three Cropping Seasons
| Season | Sowing / Harvest Window | Moisture / Temp Requirement | Major Crops |
|---|---|---|---|
| **Kharif (Monsoon)** | Sown June–July; Harvested Sept–Oct | Warm, wet monsoon climate | Rice (Paddy), Maize, Jowar, Bajra, Tur, Cotton, Jute, Groundnut, Soybean, **Mandua/Jhangora** (Uttarakhand hills) |
| **Rabi (Winter)** | Sown Oct–Dec; Harvested March–April | Cool winter growth; warm dry harvest | Wheat, Barley, Gram (Chickpea), Mustard, Pea, Masoor |
| **Zaid (Summer)** | March–June (between Rabi & Kharif) | Warm dry irrigated conditions | Watermelon, Cucumber, Muskmelon, Moong, Fodder |

## 2. Agro-Climatic Regions (Planning Commission — 15 Zones)
India was divided into **15 Agro-Climatic Zones** (1988–89) based on physiography, soils, rainfall, and cropping patterns—Uttarakhand falls primarily in **Zone 1: Western Himalayan Region** (hill districts + Doon) and **Zone 5: Upper Gangetic Plains** (Haridwar/Terai edges).

## 3. Irrigation & Revolutions
- **Sources of Irrigation:** **Wells & Tubewells** form the largest share (~60%+) of net irrigated area in India, followed by **Canals** (~24%) and **Tanks** (prominent in hard-rock Peninsular South India where digging wells is difficult).
- **Micro-Irrigation (*Per Drop More Crop*):** Drip (orchards, sugarcane) and Sprinkler systems drastically curb evaporation and waterlogging.
- **Revolutions:** **Green** (Food grains — M.S. Swaminathan), **White / Operation Flood** (Milk — Verghese Kurien), **Blue** (Fisheries), **Yellow** (Oilseeds), **Golden** (Horticulture/Honey), **Evergreen** (Sustainable productivity).

## 4. Key Revision Takeaways
- **Kharif** = Paddy, Cotton, Jute, Millets; **Rabi** = Wheat, Mustard, Gram; **Zaid** = Summer melons/fodder.
- **Wells/Tubewells** irrigate the largest net share in India; **Tanks** suit rocky Peninsular uplands.
- Uttarakhand spans **Western Himalayan Region** and **Upper Gangetic Plains** agro-climatic zones.
`,
    mcqs: [
      {
        stem: 'Which group consists ENTIRELY of Kharif crops in India?',
        options: [
          'Wheat, Mustard, Gram, Barley',
          'Paddy (Rice), Cotton, Jute, Maize, Groundnut',
          'Wheat, Paddy, Pea, Lentil',
          'Watermelon, Mustard, Barley, Cucumber',
        ],
        correctOptionIndex: 1,
        explanation: 'Paddy, cotton, jute, maize, and groundnut are warm-season monsoon Kharif crops; wheat, mustard, and gram are winter Rabi crops.',
        difficulty: 'foundation',
      },
      {
        stem: 'In the Planning Commission\'s 15 Agro-Climatic Zones of India, Uttarakhand\'s hill districts belong primarily to which zone?',
        options: [
          'Eastern Himalayan Region',
          'Western Himalayan Region (Zone 1)',
          'Trans-Gangetic Plains',
          'Deccan Plateau & Hills',
        ],
        correctOptionIndex: 1,
        explanation: 'Zone 1 (Western Himalayan Region) encompasses Jammu & Kashmir, Ladakh, Himachal Pradesh, and the hill districts of Uttarakhand.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which source accounts for the largest share (over 60%) of net irrigated area in India today?',
        options: ['Tanks and Ponds', 'Canals', 'Wells and Tube wells', 'Inundation channels'],
        correctOptionIndex: 2,
        explanation: 'Ground-water extraction through tube wells and dug wells covers over 60% of India\'s net irrigated acreage, ahead of canals (~24%).',
        difficulty: 'foundation',
      },
      {
        stem: 'Why is Tank Irrigation traditionally much more widespread in Peninsular states like Tamil Nadu, Andhra Pradesh, and Karnataka than in the Ganga plains?',
        options: [
          'Undulating hard crystalline bedrock makes digging wells/canals difficult while natural rock depressions readily impound seasonal monsoon runoff',
          'Peninsular India receives perpetual Himalayan snowmelt',
          'Ganga plains consist of solid basalt',
          'Tanks cannot hold water in warm climates',
        ],
        correctOptionIndex: 0,
        explanation: 'Hard impervious granite/gneiss terrain suits rainwater harvesting in shallow tanks/bunds across undulating Deccan basins.',
        difficulty: 'standard',
      },
      {
        stem: 'What are "Zaid" crops grown between March and June?',
        options: [
          'Winter frost crops like wheat and gram',
          'Short-duration warm-season irrigated crops like watermelon, cucumber, moong, and summer fodder',
          'Perennial timber trees',
          'High-altitude winter apples',
        ],
        correctOptionIndex: 1,
        explanation: 'Zaid fills the short hot summer window between Rabi harvest and Kharif monsoon sowing where irrigation is available.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Indian agricultural initiative promotes Drip and Sprinkler micro-irrigation under the motto "Per Drop More Crop"?',
        options: [
          'Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)',
          'Operation Flood',
          'Silver Revolution',
          'Blue Revolution',
        ],
        correctOptionIndex: 0,
        explanation: 'PMKSY integrates watershed development, Har Khet Ko Pani, and micro-irrigation ("Per Drop More Crop").',
        difficulty: 'foundation',
      },
      {
        stem: 'Which crops are famously grown in West Bengal and Assam in three seasonal rice harvests named "Aus, Aman, and Boro"?',
        options: ['Wheat', 'Rice (Paddy)', 'Cotton', 'Sugarcane'],
        correctOptionIndex: 1,
        explanation: 'Favourable year-round warmth and delta moisture allow eastern India to grow three paddy crops: Aus (autumn), Aman (winter/kharif), and Boro (summer).',
        difficulty: 'standard',
      },
      {
        stem: 'Why did the First Green Revolution of the late 1960s disproportionately benefit Punjab, Haryana, and Western UP (and Uttarakhand\'s Terai) over rain-fed central India?',
        options: [
          'High-yielding dwarf wheat/rice varieties required assured irrigation, chemical fertilizers, and larger consolidated holdings already available there',
          'Punjab had higher rainfall than Meghalaya',
          'Other states banned wheat consumption',
          'Only Punjab had red laterite soil',
        ],
        correctOptionIndex: 0,
        explanation: 'HYV seeds depended on reliable water and fertilizer inputs, thriving in canal/tubewell-irrigated tracts like Punjab and Pantnagar\'s Terai belt.',
        difficulty: 'standard',
      },
      {
        stem: 'Which agricultural revolution in India is associated with self-sufficiency in oilseeds (mustard, groundnut, soybean)?',
        options: ['White Revolution', 'Yellow Revolution', 'Blue Revolution', 'Silver Revolution'],
        correctOptionIndex: 1,
        explanation: 'Yellow Revolution refers to boosting domestic edible oilseed production.',
        difficulty: 'foundation',
      },
      {
        stem: 'How is "Cropping Intensity" calculated in agricultural geography?',
        options: [
          'Net Sown Area ÷ Total Geographical Area',
          '(Gross Cropped Area ÷ Net Sown Area) × 100',
          'Total Forest Area ÷ Cultivated Land',
          'Fertilizer Used ÷ Rainfall',
        ],
        correctOptionIndex: 1,
        explanation: 'Cropping intensity measures how many times a year the same net sown area is cropped; values above 100% reflect multiple cropping.',
        difficulty: 'standard',
      },
      {
        stem: 'Why does Drip Irrigation outperform flood irrigation especially for hill orchards (apple, walnut) and sugarcane?',
        options: [
          'It delivers water and dissolved nutrients directly to the root zone drop-by-drop, slashing evaporation, weed growth, and slope runoff',
          'It floods the entire field under 30 cm water',
          'It freezes soil bacteria',
          'It works only with seawater',
        ],
        correctOptionIndex: 0,
        explanation: 'Localized root-zone application raises water-use efficiency to 80–90% while preventing hill erosion and nutrient leaching.',
        difficulty: 'application',
      },
      {
        stem: 'Which soil–crop pairing is traditionally matched in India?',
        options: [
          'Black Regur Soil – Cotton; Alluvial Deltaic Soil – Jute & Paddy',
          'Desert Sand – Jute; Marshy Peat – Bajra',
          'Alluvial Soil – Saffron only; Black Soil – Tea only',
          'Laterite – Wheat only',
        ],
        correctOptionIndex: 0,
        explanation: 'Moisture-retentive Deccan Regur excels at cotton, while fertile Ganga–Brahmaputra deltaic alluvium dominates jute and paddy.',
        difficulty: 'foundation',
      },
      {
        stem: 'What differentiates "Zero-Budget Natural Farming" / organic hill agriculture from conventional high-input farming?',
        options: [
          'Reliance on local bio-inputs (cow-dung/urine formulations, mulching, crop diversity) rather than synthetic chemical fertilizers and pesticides',
          'Complete absence of soil and seeds',
          'Exclusive use of aerial helicopters',
          'Growing crops only in winter frost',
        ],
        correctOptionIndex: 0,
        explanation: 'Natural and organic systems emphasize soil microbiome health, mulching, and local bio-preparations—aligned well with Uttarakhand\'s traditional low-chemical hill farms.',
        difficulty: 'application',
      },
      {
        stem: 'Which state is India\'s leading producer of Sugarcane historically, while Maharashtra often competes closely in sugar output?',
        options: ['Uttar Pradesh', 'Kerala', 'Himachal Pradesh', 'Nagaland'],
        correctOptionIndex: 0,
        explanation: 'Uttar Pradesh leads India in sugarcane acreage and production (followed by Maharashtra and Karnataka).',
        difficulty: 'foundation',
      },
      {
        stem: 'Why are "Coarse Millets" (Shree Anna—like Mandua/Ragi, Jhangora, Bajra, Jowar) being strongly promoted across India and Uttarakhand?',
        options: [
          'They are drought-hardy, climate-resilient, low-water crops rich in micronutrients (calcium, iron, fibre)',
          'They require continuous flooded paddies like rice',
          'They grow only in Antarctica',
          'They deplete groundwater faster than sugarcane',
        ],
        correctOptionIndex: 0,
        explanation: 'Millets tolerate erratic rainfall and warm temperatures while delivering superior nutritional density compared to polished rice/wheat.',
        difficulty: 'application',
      },
    ],
  },
  {
    topicTitle: 'Mineral & Energy Belts of India (Coal, Iron, Petroleum, Renewables)',
    materialTitle: 'Mineral & Energy Belts of India — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Mineral & Energy Belts of India',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Mineral & Energy Belts of India

## 1. Three Broad Mineral Belts of India
1. **North-Eastern Plateau Belt (Chotanagpur–Odisha–Jharkhand–W. Bengal):** Richest metallic & coal heartland — iron ore, coal (**Gondwana**), mica, bauxite, manganese, copper.
2. **South-Western Plateau Belt (Karnataka–Goa–Tamil Nadu–Kerala):** High-grade iron ore (**Kudremukh, Bellary**), gold (**Kolar/Hutti**), bauxite, **Neyveli lignite**, monazite sands (Kerala).
3. **North-Western Belt (Rajasthan–Gujarat):** Aravalli copper (**Khetri**), lead-zinc (**Zawar**), gypsum, marble, onshore petroleum/gas (Barmer, Ankleshwar).

## 2. Energy Resources
- **Coal:** ~98% of India's coal reserves belong to **Gondwana** (Damodar–Son–Mahanadi–Godavari valleys: **Jharia, Raniganj, Bokaro, Talcher, Singrauli, Korba**); minor **Tertiary** coal in Assam/Meghalaya & lignite in **Neyveli (TN)**. Anthracite occurs marginally in J&K.
- **Iron Ore:** Hematite & Magnetite concentrated in **Odisha (Mayurbhanj, Keonjhar), Jharkhand (Singhbhum–Noamundi), Chhattisgarh (Bailadila–Dalli Rajhara), Karnataka (Ballari–Hospet)**.
- **Petroleum & Natural Gas:** **Assam (Digboi — oldest field, Naharkatiya)**, **Gujarat (Ankleshwar, Cambay)**, **Rajasthan (Barmer)**, and **Offshore (Mumbai High, Krishna–Godavari KG-D6 basin)**.
- **Nuclear & Renewables:** **Uranium** (Jaduguda/Tummalapalle); **Thorium** (Kerala monazite beach sands); **Solar Parks** (Bhadla, Pavagada); **Wind Corridors** (Tamil Nadu Muppandal, Gujarat).

## 3. Key Revision Takeaways
- **Gondwana coalfields** (Damodar/Mahanadi/Godavari valleys) supply ~98% of India's coal; **Digboi (Assam)** is India's oldest oilfield; **Mumbai High** is largest offshore oilfield.
- **Jaduguda** (Jharkhand) = Uranium; **Bailadila** (Chhattisgarh) = high-grade Iron Ore; **Khetri** (Rajasthan) = Copper.
`,
    mcqs: [
      {
        stem: 'Which geological formation accounts for roughly 98% of India\'s coal reserves (found in Damodar, Son, Mahanadi, and Godavari valleys)?',
        options: ['Tertiary Lignite', 'Gondwana Coal Measures', 'Quaternary Peat', 'Deccan Basalt'],
        correctOptionIndex: 1,
        explanation: 'Bituminous Gondwana coal beds (~250 million years old) in the eastern Peninsular river basins hold nearly all of India\'s coal.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which is India\'s oldest continuously producing oilfield, first drilled in the late 19th century?',
        options: ['Mumbai High', 'Digboi (Assam)', 'Ankleshwar (Gujarat)', 'Barmer (Rajasthan)'],
        correctOptionIndex: 1,
        explanation: 'Digboi in Upper Assam began commercial oil production in 1889–1901 and houses Asia\'s oldest operating refinery.',
        difficulty: 'foundation',
      },
      {
        stem: 'Jaduguda in Jharkhand and Tummalapalle in Andhra Pradesh are celebrated in India\'s energy map for reserves of:',
        options: ['Coking Coal', 'Uranium', 'Bauxite', 'Chromite'],
        correctOptionIndex: 1,
        explanation: 'Jaduguda (Singhbhum belt) is India\'s historic uranium mine, complemented by major reserves at Tummalapalle (Kadapa basin).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which coastal state\'s beach monazite sands hold vast reserves of Thorium (crucial for Stage III of India\'s nuclear programme)?',
        options: ['Punjab', 'Kerala (and Tamil Nadu/Odisha coasts)', 'Haryana', 'Himachal Pradesh'],
        correctOptionIndex: 1,
        explanation: 'Monazite placer sands along Kerala and adjoining coasts contain rich thorium reserves.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pair correctly matches mine/belt with its primary mineral?',
        options: [
          'Khetri (Rajasthan) – Copper',
          'Bailadila (Chhattisgarh) – Petroleum',
          'Neyveli (Tamil Nadu) – Gold',
          'Jharia (Jharkhand) – Mica only',
        ],
        correctOptionIndex: 0,
        explanation: 'Khetri is famous for copper; Bailadila for high-grade hematite iron ore; Neyveli for lignite; Jharia for prime coking coal.',
        difficulty: 'foundation',
      },
      {
        stem: 'Where are India\'s richest reserves of Bauxite (aluminium ore) concentrated?',
        options: [
          'Odisha (Panchpatmali, Koraput) and eastern Peninsular plateaus',
          'Western Rajasthan desert',
          'Punjab alluvial plains',
          'Uttarakhand glaciers',
        ],
        correctOptionIndex: 0,
        explanation: 'Odisha leads India in bauxite reserves and production from its laterite-capped Eastern Ghats plateaus.',
        difficulty: 'standard',
      },
      {
        stem: 'Which offshore basin off India\'s eastern coast emerged as a major deep-water natural gas province alongside Mumbai High on the west coast?',
        options: [
          'Palk Bay',
          'Krishna–Godavari (KG) Basin',
          'Chilika Lagoon',
          'Gulf of Mannar',
        ],
        correctOptionIndex: 1,
        explanation: 'The Krishna–Godavari (KG) offshore basin off Andhra Pradesh holds significant deep-water natural gas fields.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Indian state leads in overall solar park capacity (including Bhadla Solar Park, among the world\'s largest)?',
        options: ['Assam', 'Rajasthan', 'Sikkim', 'Tripura'],
        correctOptionIndex: 1,
        explanation: 'High solar insolation and arid flat wastelands have made Rajasthan India\'s top solar power state.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why are most major thermal power plants and integrated steel mills clustered in the Chotanagpur–Odisha mineral belt?',
        options: [
          'Iron ore and coal are heavy weight-losing raw materials, so co-location minimizes massive freight transport costs',
          'Coal cannot burn outside Jharkhand',
          'The region sits right beside Mumbai Port',
          'Steel requires zero water or energy',
        ],
        correctOptionIndex: 0,
        explanation: 'Following Alfred Weber\'s industrial location logic, bulky weight-losing minerals (coal, iron ore, limestone) pull steel mills to raw-material zones.',
        difficulty: 'application',
      },
      {
        stem: 'Which type of coal—essential for blast-furnace steel smelting—is relatively scarce in India, forcing steelmakers to import substantial quantities?',
        options: ['Peat', 'High-grade Coking Coal', 'Lignite', 'Wood charcoal'],
        correctOptionIndex: 1,
        explanation: 'India holds abundant non-coking thermal coal, but low-ash prime coking coal (limited mainly to Jharia) remains scarce.',
        difficulty: 'standard',
      },
      {
        stem: 'Zawar mines near Udaipur in Rajasthan are India\'s premier historic source of:',
        options: ['Lead and Zinc', 'Uranium and Thorium', 'Coal and Lignite', 'Tin and Tungsten'],
        correctOptionIndex: 0,
        explanation: 'Zawar in Rajasthan hosts India\'s largest lead-zinc deposits (Hindustan Zinc).',
        difficulty: 'standard',
      },
      {
        stem: 'Why does India store "Strategic Petroleum Reserves" in underground rock caverns (Visakhapatnam, Mangaluru, Padur)?',
        options: [
          'Because India imports over 85% of its crude oil and underground caverns buffer supply shocks securely at lower cost and fire risk',
          'To keep crude oil frozen below 0°C',
          'Because surface tanks leak into the Himalayas',
          'To convert crude oil into coal',
        ],
        correctOptionIndex: 0,
        explanation: 'Sealed unlined rock caverns protect emergency crude stocks against geopolitical disruptions and evaporation hazards.',
        difficulty: 'application',
      },
      {
        stem: 'Which region of India contains the largest share of wind power potential, exemplified by Muppandal wind corridor?',
        options: [
          'Ladakh valleys',
          'Tamil Nadu and Gujarat coastal/pass corridors',
          'Tripura',
          'Uttarkashi',
        ],
        correctOptionIndex: 1,
        explanation: 'Gujarat and Tamil Nadu lead India\'s installed wind energy capacity thanks to strong funneling monsoonal and coastal winds.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which state holds India\'s largest share of Tin ore reserves (Dantewada/Bastar)?',
        options: ['Chhattisgarh', 'Punjab', 'Bihar', 'Goa'],
        correctOptionIndex: 0,
        explanation: 'Bastar/Dantewada district in Chhattisgarh is India\'s primary tin-producing region.',
        difficulty: 'advanced',
      },
      {
        stem: 'What is "Coal Bed Methane (CBM)"?',
        options: [
          'Toxic ash emitted from chimneys',
          'Unconventional natural gas (methane) adsorbed within deep unmined coal seams, tapped as cleaner fuel',
          'Liquid diesel stored in coal sacks',
          'Gas produced only in ocean corals',
        ],
        correctOptionIndex: 1,
        explanation: 'CBM is extracted from coal seams (e.g., Raniganj, Sohagpur) before or independently of coal mining.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Location of Major Industries, Transport Corridors & Ports',
    materialTitle: 'Location of Major Industries, Transport Corridors & Ports — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Industries, Transport & Ports of India',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Location of Major Industries, Transport Corridors & Ports

## 1. Industrial Location & Major Clusters
- **Iron & Steel:** **TISCO Jamshedpur** (near Subarnarekha–Kharkai, Noamundi iron, Jharia coal); PSU plants at **Bhilai** (USSR), **Rourkela** (Germany), **Durgapur** (UK), **Bokaro** (USSR); coastal plant at **Visakhapatnam** (exports & imported coking coal).
- **Cotton Textiles:** **Mumbai–Ahmedabad** (humid climate, black-soil cotton hinterland, port access, capital) and **Coimbatore ("Manchester of South India")** / **Tiruppur**; Kanpur in north.
- **IT & Electronics:** **Bengaluru**, **Hyderabad**, **Pune**, **Chennai**, **NCR (Noida/Gurugram)** — footloose industry driven by skilled talent & digital infrastructure.
- **Major Industrial Regions:** Mumbai–Pune, Hugli (jute/engineering), Bengaluru–Tamil Nadu, Gujarat, Chotanagpur, Visakhapatnam–Guntur, Gurugram–Delhi–Meerut, Kollam–Thiruvananthapuram.

## 2. Transport Corridors & Waterways
- **Golden Quadrilateral (5,846 km):** Connects **Delhi – Mumbai – Chennai – Kolkata**.
- **North–South & East–West Corridors:** Srinagar to Kanyakumari & Silchar to Porbandar (intersecting at **Jhansi**).
- **Dedicated Freight Corridors (DFC):** **Western DFC** (Dadri to JNPT Mumbai) and **Eastern DFC** (Sahnewal/Ludhiana to Dankuni).
- **National Waterways:** **NW-1** (Ganga: Prayagraj–Haldia, longest), **NW-2** (Brahmaputra: Sadiya–Dhubri), **NW-3** (West Coast Canal, Kerala).

## 3. Major Sea Ports of India
- **West Coast:** **Kandla (Deendayal Port — tidal port, Gujarat)**, **Mumbai** (natural harbour), **JNPT / Nhava Sheva** (largest container port), **Mormugao** (iron ore), **New Mangalore**, **Kochi** (natural lagoon).
- **East Coast:** **Kolkata / Haldia** (riverine port on Hooghly), **Paradip** (iron ore/coal), **Visakhapatnam** (deepest landlocked natural port), **Ennore (Kamarajar)** (first corporatized major port), **Chennai** (artificial harbour), **V.O. Chidambaranar (Tuticorin)**.

## 4. Key Revision Takeaways
- **Golden Quadrilateral** links **Delhi–Mumbai–Chennai–Kolkata**; N–S & E–W corridors cross at **Jhansi**.
- **Visakhapatnam** = deepest landlocked port; **Kandla** = tidal port; **Kolkata** = riverine port; **NW-1** = Prayagraj–Haldia.
`,
    mcqs: [
      {
        stem: 'Which four metropolitan hubs are linked by India\'s Golden Quadrilateral highway network?',
        options: [
          'Delhi, Jaipur, Bhopal, Nagpur',
          'Delhi, Mumbai, Chennai, Kolkata',
          'Srinagar, Delhi, Bengaluru, Kochi',
          'Chandigarh, Lucknow, Patna, Guwahati',
        ],
        correctOptionIndex: 1,
        explanation: 'The Golden Quadrilateral (~5,846 km) forms a quadrilateral express corridor linking Delhi, Mumbai, Chennai, and Kolkata.',
        difficulty: 'foundation',
      },
      {
        stem: 'At which city do India\'s North–South (Srinagar–Kanyakumari) and East–West (Porbandar–Silchar) highway corridors intersect?',
        options: ['Nagpur', 'Jhansi', 'Bhopal', 'Kanpur'],
        correctOptionIndex: 1,
        explanation: 'The North–South and East–West corridors cross at Jhansi in Uttar Pradesh.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which major Indian port is a tidal port located in the Gulf of Kutch, developed post-Partition to relieve pressure on Mumbai after Karachi went to Pakistan?',
        options: ['Mormugao', 'Deendayal Port (Kandla)', 'Visakhapatnam', 'Paradip'],
        correctOptionIndex: 1,
        explanation: 'Kandla (Deendayal Port) in Gujarat was developed in the 1950s as western India\'s key tidal trade gateway.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Indian sea port is renowned as the deepest landlocked natural harbour on the east coast?',
        options: ['Chennai', 'Visakhapatnam', 'Kolkata', 'Tuticorin'],
        correctOptionIndex: 1,
        explanation: 'Shielded by the Dolphin\'s Nose headland, Visakhapatnam is a deep landlocked natural harbour.',
        difficulty: 'foundation',
      },
      {
        stem: 'Between which two terminals does National Waterway-1 (NW-1), India\'s longest inland waterway, operate?',
        options: [
          'Sadiya to Dhubri (Brahmaputra)',
          'Prayagraj to Haldia (Ganga–Bhagirathi–Hooghly)',
          'Kottapuram to Kollam',
          'Haridwar to Rishikesh',
        ],
        correctOptionIndex: 1,
        explanation: 'NW-1 stretches ~1,620 km along the Ganga–Hooghly system from Prayagraj (UP) to Haldia (West Bengal).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which second-plan integrated public-sector steel plant was built with West German collaboration in Odisha?',
        options: ['Bhilai Steel Plant', 'Rourkela Steel Plant', 'Durgapur Steel Plant', 'Bokaro Steel Plant'],
        correctOptionIndex: 1,
        explanation: 'Rourkela was built with German collaboration (Bhilai & Bokaro with USSR, Durgapur with UK).',
        difficulty: 'standard',
      },
      {
        stem: 'Why is the Information Technology (IT) industry in Bengaluru or Pune classified as a "Footloose Industry"?',
        options: [
          'It relies on skilled human capital and digital connectivity rather than bulky localized raw materials, so it can locate flexibly',
          'It moves physically every monsoon',
          'It requires iron ore mines within 5 km',
          'It runs without electricity',
        ],
        correctOptionIndex: 0,
        explanation: 'Footloose industries are not tied to heavy raw-material sources and cluster around talent, infrastructure, and pleasant urban ecosystems.',
        difficulty: 'standard',
      },
      {
        stem: 'Which port on the east coast is a RIVERINE port requiring regular dredging of silt bars along the Hooghly estuary (assisted by Haldia dock complex)?',
        options: ['Paradip', 'Syama Prasad Mookerjee Port (Kolkata)', 'Ennore', 'Chennai'],
        correctOptionIndex: 1,
        explanation: 'Kolkata Port sits ~200 km inland along the tidal Hooghly river, paired with deep-draft Haldia downstream.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why are sugar mills historically migrating southward from Uttar Pradesh/Bihar toward Maharashtra and Karnataka?',
        options: [
          'Tropical maritime climate in the Deccan yields higher per-hectare cane productivity, higher sucrose content, a longer crushing season, and strong cooperative mills',
          'North India no longer grows any sugarcane',
          'Maharashtra receives snow in December',
          'Sugar cannot dissolve in northern water',
        ],
        correctOptionIndex: 0,
        explanation: 'Frost-free tropical peninsular conditions give higher sucrose recovery and a longer crushing window, though UP remains top in total cane output.',
        difficulty: 'application',
      },
      {
        stem: 'What are the two endpoints of the Western Dedicated Freight Corridor (WDFC)?',
        options: [
          'Ludhiana to Dankuni',
          'Dadri (UP/NCR) to Jawaharlal Nehru Port (JNPT, Navi Mumbai)',
          'Kanyakumari to Jammu',
          'Haridwar to Siliguri',
        ],
        correctOptionIndex: 1,
        explanation: 'The WDFC links Dadri near Delhi to JNPT Mumbai; the Eastern DFC links Sahnewal (Ludhiana) to Dankuni.',
        difficulty: 'standard',
      },
      {
        stem: 'Which city in Tamil Nadu is popularly called the "Manchester of South India" for its dense cotton-spinning and textile-machinery cluster?',
        options: ['Madurai', 'Coimbatore', 'Salem', 'Kanyakumari'],
        correctOptionIndex: 1,
        explanation: 'Coimbatore (alongside nearby Tiruppur knitwear hub) dominates southern India\'s cotton textile sector.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why was Visakhapatnam Steel Plant the first integrated public-sector plant located directly on India\'s coast?',
        options: [
          'Easy maritime import of low-ash coking coal and direct export of finished steel products',
          'Coal mines exist underneath Bay of Bengal beaches',
          'Freshwater is absent inland in India',
          'All steel plants in India must sit below sea level',
        ],
        correctOptionIndex: 0,
        explanation: 'Coastal location lowers ocean freight costs for imported coking coal while accessing Bailadila iron ore by rail.',
        difficulty: 'application',
      },
      {
        stem: 'Which Indian port handles the largest share of containerized cargo in India?',
        options: ['Paradip', 'Jawaharlal Nehru Port (JNPT / Nhava Sheva)', 'Kochi', 'Mormugao'],
        correctOptionIndex: 1,
        explanation: 'JNPT (Nhava Sheva) opposite Mumbai harbour is India\'s premier container port.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which river basin hosts National Waterway-2 (NW-2)?',
        options: ['Godavari', 'Brahmaputra (Sadiya to Dhubri)', 'Narmada', 'Mahanadi'],
        correctOptionIndex: 1,
        explanation: 'NW-2 runs ~891 km along the Brahmaputra in Assam from Sadiya to Dhubri.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the strategic purpose of the government\'s "Sagarmala" programme?',
        options: [
          'Linking Himalayan glaciers to deserts',
          'Port-led development, port modernization, coastal shipping, and multimodal port–hinterland connectivity',
          'Expanding inland coal mines in Jharkhand',
          'Replacing railways with ropeways nationwide',
        ],
        correctOptionIndex: 1,
        explanation: 'Sagarmala modernizes ports and coastal economic zones to lower logistics costs via coastal and inland waterway freight.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Demographic Trends, Migration & Urbanization in India',
    materialTitle: 'Demographic Trends, Migration & Urbanization in India — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Indian Demographics & Urbanization',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Demographic Trends, Migration & Urbanization in India

## 1. India Census 2011 Benchmark Metrics
| Indicator | India (Census 2011) | State Extremes |
|---|---|---|
| **Population** | **121.08 Crore** | Highest: **UP**; Lowest: **Sikkim** |
| **Decadal Growth (2001–11)** | **17.7%** (slowing from 21.5%) | Highest: **Meghalaya (+27.9%)**; Lowest/Negative: **Nagaland (-0.6%)** |
| **Population Density** | **382 persons/km²** | Highest: **Bihar (1,106)**; Lowest: **Arunachal Pradesh (17)** |
| **Sex Ratio** | **943** | Highest: **Kerala (1,084)**; Lowest: **Haryana (879)** |
| **Child Sex Ratio (0–6)** | **919** | Lowest: **Haryana (834)**; Highest: **Arunachal (972)** |
| **Literacy Rate** | **74.04%** (or 73% rounded provisional; final **72.98%** / ~74% in older tables — Male ~80.9%, Female ~64.6%) | Highest: **Kerala (94.0%)**; Lowest: **Bihar (61.8%)** |
| **Urbanization** | **31.16%** urban | Most urbanized state (by %): **Goa (62.2%)**; Largest urban pop: **Maharashtra** |

## 2. Demographic Transition & Dividend
- **Four Stages:** India is in **Stage III (Late Expanding)** — death rate already low (~6–7/1,000), birth rate falling steadily toward replacement TFR (~2.0 per NFHS-5).
- **1921 ("Year of Great Divide"):** Before 1921, famines/epidemics caused fluctuating/negative growth (1911–21 fell -0.31%); after 1921, population grew continuously.
- **Demographic Dividend:** High working-age share (15–59 yrs); converts into growth only via skilling, healthcare, and female workforce participation.

## 3. Migration & Urbanization Patterns
- **Streams:** **Rural-to-Rural** (largest overall, driven mostly by female marriage migration); **Rural-to-Urban** (dominated by male economic employment migration).
- **Urban Challenges:** Over-concentration in Class-I/Million-plus cities (Mumbai, Delhi, Kolkata), informal slums, urban heat islands, waste/water stress; addressed by **AMRUT**, **Smart Cities Mission**, **PMAY-Urban**.

## 4. Key Revision Takeaways
- **1921** = Year of Great Divide; **Bihar** = highest density (1,106); **Arunachal** = lowest density (17).
- **Kerala** = highest literacy & sex ratio; **Goa** = highest % urban among states.
`,
    mcqs: [
      {
        stem: 'Which year is known in Indian demographic history as the "Year of the Great Divide", after which India\'s population grew steadily without negative decades?',
        options: ['1901', '1921', '1951', '1971'],
        correctOptionIndex: 1,
        explanation: 'After a slight population decline in 1911–1921 due to the 1918 influenza pandemic and famines, India entered sustained growth post-1921.',
        difficulty: 'foundation',
      },
      {
        stem: 'According to Census 2011, which Indian state has the highest population density (1,106 persons/sq. km) and which has the lowest (17 persons/sq. km)?',
        options: [
          'Highest: West Bengal; Lowest: Sikkim',
          'Highest: Bihar; Lowest: Arunachal Pradesh',
          'Highest: Uttar Pradesh; Lowest: Mizoram',
          'Highest: Kerala; Lowest: Uttarakhand',
        ],
        correctOptionIndex: 1,
        explanation: 'Bihar leads Indian states in density (1,106/km²), while mountainous Arunachal Pradesh has the lowest density (17/km²).',
        difficulty: 'foundation',
      },
      {
        stem: 'According to Census 2011, what percentage of India\'s population resided in urban areas?',
        options: ['21.4%', '31.16%', '44.5%', '52.0%'],
        correctOptionIndex: 1,
        explanation: 'Urban population stood at 31.16% (rural 68.84%) in Census 2011.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which state recorded a slight NEGATIVE decadal population growth (-0.6%) in Census 2011?',
        options: ['Sikkim', 'Nagaland', 'Goa', 'Tripura'],
        correctOptionIndex: 1,
        explanation: 'Nagaland was the only state in India to register negative population growth between 2001 and 2011 (partly reflecting data reconciliation).',
        difficulty: 'standard',
      },
      {
        stem: 'In Indian Census migration data, which migration stream accounts for the single LARGEST share of total internal migrants, primarily due to marriage?',
        options: [
          'Urban-to-Rural',
          'Rural-to-Rural',
          'Urban-to-Urban',
          'International emigration',
        ],
        correctOptionIndex: 1,
        explanation: 'Rural-to-rural migration (predominantly women moving after marriage) constitutes the largest volume of internal migration in India.',
        difficulty: 'standard',
      },
      {
        stem: 'Whereas Rural-to-Rural migration is largely female-dominated, which stream is heavily driven by male economic/employment search?',
        options: ['Rural-to-Urban', 'Urban-to-Rural', 'Suburban-to-Village', 'None of these'],
        correctOptionIndex: 0,
        explanation: 'Long-distance and inter-state rural-to-urban migration is disproportionately led by working-age males seeking industrial and service jobs.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is India\'s overall population density as per Census 2011?',
        options: ['282 persons/sq. km', '325 persons/sq. km', '382 persons/sq. km', '450 persons/sq. km'],
        correctOptionIndex: 2,
        explanation: 'India\'s population density rose from 325 (2001) to 382 persons per sq. km in 2011.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which state recorded the highest percentage of urban population (62.2%) among Indian states in Census 2011?',
        options: ['Maharashtra', 'Tamil Nadu', 'Goa', 'Gujarat'],
        correctOptionIndex: 2,
        explanation: 'Goa (62.17%) has the highest percentage urbanization among states, whereas Maharashtra has the largest absolute urban population.',
        difficulty: 'standard',
      },
      {
        stem: 'What does "Demographic Dividend" mean for India\'s economy?',
        options: [
          'A temporary bulge in the working-age population (15–59/64 years) relative to young and elderly dependents, boosting potential per-capita growth if productively employed',
          'An automatic cash bonus paid by the Census office',
          'Having more retirees than workers',
          'Zero migration between states',
        ],
        correctOptionIndex: 0,
        explanation: 'Lower dependency ratios create a growth window, provided human capital (education, health, skills) and jobs keep pace.',
        difficulty: 'foundation',
      },
      {
        stem: 'In Demographic Transition Theory, which stage best describes contemporary India (with low death rates and steadily declining birth rates near replacement)?',
        options: [
          'Stage I (High stationary — high births & high deaths)',
          'Stage III (Late expanding — low death rate, declining birth rate)',
          'Stage V (Post-industrial severe natural decline)',
          'Pre-agricultural stage',
        ],
        correctOptionIndex: 1,
        explanation: 'India exhibits low mortality and rapidly falling fertility (NFHS-5 TFR ~2.0), characteristic of Stage III moving toward Stage IV.',
        difficulty: 'standard',
      },
      {
        stem: 'Why do Indian cities face an "Urban Heat Island" effect compared to surrounding rural villages?',
        options: [
          'Dark asphalt/concrete surfaces absorb heat, reduced greenery curbs evaporative cooling, and vehicles/ACs emit waste heat',
          'Cities are located inside volcanoes',
          'Rural fields block all sunlight',
          'Cities receive higher latitude sunlight',
        ],
        correctOptionIndex: 0,
        explanation: 'High thermal mass concrete, low tree canopy, and anthropogenic heat raise urban temperatures—especially night-time lows.',
        difficulty: 'application',
      },
      {
        stem: 'Under Census of India criteria, which three conditions must a settlement satisfy to be classified as a "Census Town" without statutory municipality status?',
        options: [
          'Min population 5,000; ≥75% male main workers in non-agricultural pursuits; density ≥400 persons/sq. km',
          'Population >1 lakh; airport; university',
          'Population 1,000; 90% farmers; coastal port',
          'Only state capitals count as urban',
        ],
        correctOptionIndex: 0,
        explanation: 'Census Towns meet the demographic thresholds (5,000+ pop, 400+/km² density, 75%+ male non-farm workforce) even if still governed as Gram Panchayats.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which pair correctly shows India\'s state extremes for Overall Sex Ratio in Census 2011?',
        options: [
          'Highest: Kerala (1,084); Lowest: Haryana (879)',
          'Highest: Tamil Nadu; Lowest: Rajasthan',
          'Highest: Uttarakhand; Lowest: Bihar',
          'Highest: Goa; Lowest: Punjab',
        ],
        correctOptionIndex: 0,
        explanation: 'Kerala led India at 1,084 females per 1,000 males, while Haryana stood lowest among states at 879.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why can rapid unplanned urban sprawl in foothill Indian cities (like Dehradun or Haldwani) worsen monsoon urban flooding?',
        options: [
          'Concreting wetlands and encroaching natural storm drains (nalas) reduces rainwater infiltration and increases peak surface runoff',
          'Buildings absorb all rainwater safely',
          'Urban roads lower monsoon rainfall',
          'Concrete turns into permeable soil',
        ],
        correctOptionIndex: 0,
        explanation: 'Impervious pavements and blocked drainage channels prevent natural percolation, turning moderate rain into flash street flooding.',
        difficulty: 'application',
      },
      {
        stem: 'How does India\'s "Total Fertility Rate (TFR)" of ~2.0 (NFHS-5) compare with the standard demographic replacement level of 2.1?',
        options: [
          'India\'s national TFR has now reached/dipped slightly below the 2.1 replacement threshold, though regional variations remain (e.g., higher in Bihar/UP than southern states)',
          'India\'s TFR is currently 6.5',
          'India\'s population immediately halves tomorrow',
          'Replacement TFR is 5.0',
        ],
        correctOptionIndex: 0,
        explanation: 'Most Indian states are already below 2.1 TFR, though population momentum will continue adding population for a few decades.',
        difficulty: 'standard',
      },
    ],
  },
];
