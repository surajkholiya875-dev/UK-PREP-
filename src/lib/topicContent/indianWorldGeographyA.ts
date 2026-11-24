import { TopicContentPackage } from './types';

export const INDIAN_WORLD_GEOGRAPHY_PART_A: TopicContentPackage[] = [
  {
    topicTitle: 'Interior of the Earth, Plate Tectonics & Mountain Building',
    materialTitle: 'Interior of the Earth, Plate Tectonics & Mountain Building — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Earth Interior & Plate Tectonics',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Interior of the Earth, Plate Tectonics & Mountain Building

## 1. Internal Structure of the Earth
Seismic wave behaviour (**P-waves** travel through solids & liquids; **S-waves** vanish in liquids) reveals concentric compositional and mechanical layers:
- **Crust:** Outer solid shell — **Continental (SIAL, granitic, ~35–70 km)** and **Oceanic (SIMA, basaltic, ~5–10 km)**, separated from the mantle by the **Mohorovicic (Moho) Discontinuity**.
- **Mantle:** Down to ~2,900 km; upper mantle contains the partially molten, ductile **Asthenosphere** driving plate motion. Separated from core by **Gutenberg Discontinuity**.
- **Core:** **Outer Core (liquid iron-nickel)** generating Earth's geomagnetic field; **Inner Core (solid iron-nickel)** under immense pressure.

## 2. Plate Tectonics & Boundaries
Lithospheric plates float over the asthenosphere and interact at three boundary types:
1. **Divergent Boundaries:** Seafloor spreading, mid-ocean ridges (e.g., Mid-Atlantic Ridge), rift valleys (East African Rift).
2. **Convergent Boundaries:**
   - *Ocean–Continent:* Subduction trench & volcanic fold chains (Andes).
   - *Ocean–Ocean:* Island arcs & deep trenches (Mariana).
   - *Continent–Continent:* Massive fold mountains without active volcanism (**Himalayas** — Indian Plate colliding with Eurasian Plate after closing the Tethys Sea).
3. **Transform Boundaries:** Horizontal shear faults (San Andreas Fault).

## 3. Himalayan Orogeny & Uttarakhand Relevance
India drifted northward across the Tethys Ocean and collided with Eurasia (~50 Ma), thrusting Tethyan and Indian crustal slices southward along **ITSZ → MCT → MBT → HFT**, placing Uttarakhand in high **Seismic Zones IV & V**.

## 4. Key Revision Takeaways
- **S-waves** cannot pass through the liquid **Outer Core**; **Moho** separates Crust and Mantle.
- **Himalayas** = continent–continent convergence (very high seismicity, no active arc volcanoes).
`,
    mcqs: [
      {
        stem: 'Which seismic wave evidence proves that Earth\'s Outer Core is in a liquid state?',
        options: [
          'P-waves accelerate rapidly in the outer core',
          'S-waves (shear waves) cannot propagate through liquids and vanish beyond 105°',
          'Surface Love waves pass straight through the centre',
          'Earthquakes occur inside the inner core',
        ],
        correctOptionIndex: 1,
        explanation: 'Shear (S) waves require rigidity and cannot travel through fluids, creating an S-wave shadow zone beyond 105° from the epicentre.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which discontinuity separates Earth\'s Crust from the underlying Mantle?',
        options: [
          'Gutenberg Discontinuity',
          'Mohorovicic (Moho) Discontinuity',
          'Lehmann Discontinuity',
          'Conrad Discontinuity',
        ],
        correctOptionIndex: 1,
        explanation: 'The Moho marks the sharp increase in seismic velocity between the crust and upper mantle.',
        difficulty: 'foundation',
      },
      {
        stem: 'The Himalayas, including Uttarakhand\'s high ranges, formed primarily due to which plate interaction?',
        options: [
          'Divergent spreading of two oceanic plates',
          'Continent–continent convergence between the Indian Plate and Eurasian Plate',
          'Transform faulting along a mid-ocean ridge',
          'Intraplate hotspot volcanism',
        ],
        correctOptionIndex: 1,
        explanation: 'Following closure of the Tethys Sea, continental collision between India and Eurasia folded and thrust up the Himalayan belt.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why are active volcanoes absent in the Himalayas unlike in the Andes or Japanese archipelago?',
        options: [
          'Continental crust is too thick and buoyant to subduct deeply enough to sustain arc magmatism after ocean closure',
          'The Himalayas lie below the ocean',
          'No tectonic stress exists in the Himalayas',
          'Granite cools magma instantly at the equator',
        ],
        correctOptionIndex: 0,
        explanation: 'Andes and Japan involve ongoing oceanic slab subduction releasing volatiles into the mantle; Himalayas are a continent–continent collision zone.',
        difficulty: 'standard',
      },
      {
        stem: 'In Earth\'s mechanical layering, tectonic plates move slowly over which ductile, partially molten zone of the upper mantle?',
        options: ['Barysphere', 'Asthenosphere', 'Inner Core', 'Troposphere'],
        correctOptionIndex: 1,
        explanation: 'The plastic asthenosphere beneath the rigid lithosphere accommodates mantle convection and plate motion.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which discontinuity marks the boundary between the lower Mantle and the liquid Outer Core (~2,900 km depth)?',
        options: ['Moho', 'Gutenberg Discontinuity', 'Repetti Discontinuity', 'Lehmann Discontinuity'],
        correctOptionIndex: 1,
        explanation: 'The Gutenberg Discontinuity divides the silicate mantle from the metallic outer core.',
        difficulty: 'standard',
      },
      {
        stem: 'How does oceanic crust differ fundamentally from continental crust?',
        options: [
          'Oceanic crust is denser, thinner (~5–10 km), and basaltic (SIMA), whereas continental crust is thicker, lighter, and granitic (SIAL)',
          'Continental crust is thinner and denser than oceanic crust',
          'Both have identical thickness and density',
          'Oceanic crust consists solely of limestone',
        ],
        correctOptionIndex: 0,
        explanation: 'Denser basaltic oceanic lithosphere subducts beneath lighter granitic continental lithosphere at convergent margins.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which boundary type is exemplified by the Mid-Atlantic Ridge and the East African Rift Valley?',
        options: ['Convergent collision', 'Divergent plate boundary', 'Conservative transform boundary', 'Subduction trench'],
        correctOptionIndex: 1,
        explanation: 'Plates pull apart at divergent boundaries, creating oceanic ridges or continental rift valleys.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which concept proposed by Harry Hess (1960s) demonstrated that ocean floor age increases symmetrically away from mid-ocean ridges?',
        options: ['Isostasy', 'Seafloor Spreading', 'Geosynclinal sinking', 'Peneplanation'],
        correctOptionIndex: 1,
        explanation: 'Paleomagnetic stripes and sediment age patterns confirmed seafloor spreading at mid-ocean ridges.',
        difficulty: 'standard',
      },
      {
        stem: 'Why was Alfred Wegener\'s Continental Drift hypothesis initially rejected despite strong fossil and coastline fit evidence?',
        options: [
          'He lacked a convincing physical mechanism (citing tidal/pole-fleeing forces that were far too weak)',
          'Africa and South America had no matching fossils',
          'Coal was never found in Antarctica',
          'Seismographs did not exist until 1990',
        ],
        correctOptionIndex: 0,
        explanation: 'Only later discovery of mantle convection, seafloor spreading, and plate tectonics provided the physical driving mechanism.',
        difficulty: 'standard',
      },
      {
        stem: 'What generates Earth\'s protective geomagnetic field?',
        options: [
          'Static electricity in Himalayan glaciers',
          'Convective dynamo currents of molten iron-nickel in the liquid Outer Core',
          'Solar wind hitting the Moon',
          'Ocean tides in the Pacific',
        ],
        correctOptionIndex: 1,
        explanation: 'Geodynamo convection in the electrically conducting liquid outer core sustains Earth\'s magnetic field.',
        difficulty: 'standard',
      },
      {
        stem: 'In Himalayan tectonics, what does "antecedent drainage" (like Alaknanda, Sutlej, and Indus gorges) demonstrate?',
        options: [
          'Rivers are older than the latest uplift phases and maintained their courses by down-cutting faster than mountain rise',
          'Mountains formed instantaneously in one day',
          'Rivers flowed uphill after earthquakes',
          'Glaciers created ocean trenches',
        ],
        correctOptionIndex: 0,
        explanation: 'Antecedent rivers predated Himalayan uplift and incised deep transverse gorges as ranges rose beneath them.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which type of seismic body wave arrives FIRST at a seismograph station and vibrates particles parallel to propagation?',
        options: ['Love wave', 'Rayleigh wave', 'P-wave (Primary compressional wave)', 'S-wave'],
        correctOptionIndex: 2,
        explanation: 'P-waves are the fastest seismic waves (longitudinal/compressional) and reach recording stations first.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why does GPS monitoring show the Indian Plate still pushing northward into Eurasia at ~4–5 cm/year?',
        options: [
          'Ongoing ridge push and slab dynamics sustain strain accumulation along locked Himalayan thrust faults, driving earthquake hazard in Uttarakhand',
          'India is drifting back toward Antarctica',
          'Plate movement stopped 10 million years ago',
          'Erosion alone pushes continents',
        ],
        correctOptionIndex: 0,
        explanation: 'Continued convergence stores elastic strain across Himalayan faults, explaining why Uttarakhand lies in Seismic Zones IV and V.',
        difficulty: 'standard',
      },
      {
        stem: 'What separates the liquid Outer Core from the solid Inner Core?',
        options: ['Moho Discontinuity', 'Lehmann Discontinuity', 'Conrad Discontinuity', 'Benioff Zone'],
        correctOptionIndex: 1,
        explanation: 'Inge Lehmann identified the discontinuity (~5,150 km depth) dividing liquid outer core from solid inner core.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'Endogenic & Exogenic Landforms (Fluvial, Glacial, Karst, Aeolian)',
    materialTitle: 'Endogenic & Exogenic Landforms — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Endogenic & Exogenic Landforms',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Endogenic & Exogenic Landforms

## 1. Geomorphic Processes
- **Endogenic Forces** (internal energy): Diastrophism (orogeny, epeirogeny), earthquakes, volcanism — create initial relief.
- **Exogenic Forces** (solar/gravity energy): Weathering, mass wasting, erosion, deposition by rivers, glaciers, groundwater, wind, and waves — wear down relief (*gradation*).

## 2. Landforms by Agent
| Agent | Erosional Landforms | Depositional Landforms |
|---|---|---|
| **Fluvial (Rivers)** | V-shaped valleys, gorges, waterfalls, potholes, incised meanders | Alluvial fans (*Bhabar*), floodplains, levees, **oxbow lakes**, deltas |
| **Glacial (Ice)** | **Cirques (Corries)**, **Horns** (matterhorn), **Arêtes**, **U-shaped valleys**, hanging valleys | **Moraines** (lateral, medial, terminal), **Drumlins** ("basket of eggs"), **Eskers**, outwash plains |
| **Karst (Groundwater)** | Sinkholes, dolines, lapies, **poljes**, caverns | **Stalactites** (ceiling), **Stalagmites** (floor), pillars (seen locally in Uttarakhand's **Robber's Cave / Sahastradhara / Patal Bhuvaneshwar** limestone) |
| **Aeolian (Wind)** | Mushroom rocks (*gara*), yardangs, zeugen, deflation hollows | **Barchans** (crescent dunes), seif dunes, **loess** plains |
| **Coastal (Waves)** | Sea cliffs, wave-cut platforms, arches, stacks | Beaches, spits, bars, lagoons |

## 3. Key Revision Takeaways
- **Cirque, Arête, U-shaped valley, Drumlin, Esker** = Glacial; **Stalactite/Stalagmite** = Karst; **Barchan/Loess** = Aeolian.
- **Patal Bhuvaneshwar** (Pithoragarh) and **Tapkeshwar / Sahastradhara** (Dehradun) showcase classic limestone karst features in Uttarakhand.
`,
    mcqs: [
      {
        stem: 'Which set of landforms consists exclusively of GLACIAL erosional features?',
        options: [
          'Barchans, Yardangs, Loess',
          'Cirques, Arêtes, Horns, U-shaped valleys',
          'Stalactites, Poljes, Sinkholes',
          'Oxbow lakes, Natural levees, Deltas',
        ],
        correctOptionIndex: 1,
        explanation: 'Glaciers carve armchair-like cirques, knife-edge arêtes, pyramidal horns, and U-shaped troughs.',
        difficulty: 'foundation',
      },
      {
        stem: 'What distinguishes a Stalactite from a Stalagmite inside a limestone Karst cave such as Patal Bhuvaneshwar?',
        options: [
          'Stalactites grow downward from the cave ceiling, whereas stalagmites grow upward from the cave floor',
          'Stalagmites hang from the ceiling while stalactites float in lakes',
          'Both are formed by wind erosion',
          'Stalactites are volcanic lava tubes',
        ],
        correctOptionIndex: 0,
        explanation: 'Mineral-rich dripping water precipitates calcite icicle-like stalactites from the ceiling ("tights" hang tight) and stalagmites rising from the floor.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is a "Barchan" in arid geomorphology?',
        options: [
          'A glacial moraine damming a lake',
          'A crescent-shaped sand dune with horns pointing downwind',
          'A limestone sinkhole',
          'A coastal sea stack',
        ],
        correctOptionIndex: 1,
        explanation: 'Barchans are crescentic wind-deposited dunes formed under unidirectional winds with limited sand supply.',
        difficulty: 'foundation',
      },
      {
        stem: 'How is an Oxbow lake formed along mature river plains?',
        options: [
          'When a glacier carves a mountain basin',
          'When a pronounced river meander neck is cut off during flood, isolating a curved loop',
          'When wind scours basalt',
          'When tectonic rifting splits a plateau',
        ],
        correctOptionIndex: 1,
        explanation: 'Lateral erosion narrows a meander neck until floodwaters cut across it, leaving an abandoned crescent oxbow lake.',
        difficulty: 'foundation',
      },
      {
        stem: 'What are "Drumlins" and "Eskers"?',
        options: [
          'Fluvial deltaic islands',
          'Glacio-fluvial and glacial depositional landforms (streamlined till hills and sinuous meltwater gravel ridges)',
          'Karst underground rivers',
          'Wind-carved desert pedestals',
        ],
        correctOptionIndex: 1,
        explanation: 'Drumlins are inverted-spoon shaped till hills ("basket of eggs" topography) and eskers are winding gravel ridges from subglacial meltwater streams.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Uttarakhand tourist/pilgrimage site is a textbook example of subterranean Karst limestone dissolution caverns?',
        options: ['Patal Bhuvaneshwar (Pithoragarh)', 'Bhimtal Lake', 'Roopkund Tarn', 'Tehri Reservoir'],
        correctOptionIndex: 0,
        explanation: 'Patal Bhuvaneshwar in Pithoragarh is a deep limestone cave system displaying dramatic stalactites, stalagmites, and columns.',
        difficulty: 'standard',
      },
      {
        stem: 'Where do Alluvial Fans such as Uttarakhand\'s Bhabar belt typically develop?',
        options: [
          'At river mouths inside calm oceans',
          'At mountain-front breaks of slope where steep streams exit onto flat piedmont plains and drop coarse load',
          'Along mid-ocean volcanic ridges',
          'Inside arid salt pans only',
        ],
        correctOptionIndex: 1,
        explanation: 'Sudden reduction in gradient and velocity at foothill exits forces streams to dump boulders and gravel in fan-shaped cones.',
        difficulty: 'standard',
      },
      {
        stem: 'What is "Loess", famously thick in northern China?',
        options: [
          'Coarse glacial boulder clay',
          'Fine wind-blown (aeolian) silt deposited far from desert or glacial outwash sources',
          'Volcanic obsidian glass',
          'Marine coral limestone',
        ],
        correctOptionIndex: 1,
        explanation: 'Loess consists of fertile, unstratified wind-transported silt particles.',
        difficulty: 'standard',
      },
      {
        stem: 'Why do Hanging Valleys commonly produce spectacular waterfalls in glaciated terrains such as Badrinath (Vasudhara) or Chamoli?',
        options: [
          'Smaller tributary glaciers cannot erode as deeply as the massive main trunk glacier, leaving side valleys perched high above the main U-shaped trough after ice melts',
          'Tributaries flow underground',
          'Volcanoes lift side streams',
          'Rivers freeze permanently at valley junctions',
        ],
        correctOptionIndex: 0,
        explanation: 'Differential glacial erosion leaves tributary valleys suspended high along the walls of deep trunk glacial troughs.',
        difficulty: 'standard',
      },
      {
        stem: 'Which process is an example of MECHANICAL (physical) weathering rather than chemical weathering?',
        options: [
          'Carbonation of limestone',
          'Freeze–thaw frost shattering (frost wedging) in high Himalayan rocks',
          'Oxidation of iron-bearing minerals',
          'Hydrolysis of feldspar into clay',
        ],
        correctOptionIndex: 1,
        explanation: 'Water expanding ~9% on freezing in rock joints fractures boulders mechanically without altering mineral chemistry.',
        difficulty: 'foundation',
      },
      {
        stem: '"Lapies" (karren), "Dolines", and "Poljes" belong to which geomorphic environment?',
        options: ['Aeolian desert', 'Karst (soluble carbonate rock) terrain', 'Glacial cirque', 'Volcanic shield'],
        correctOptionIndex: 1,
        explanation: 'Solution weathering of limestone/dolomite produces grooved lapies, sinkhole dolines, and large karst plains (poljes).',
        difficulty: 'standard',
      },
      {
        stem: 'Which rock weathering feature explains exfoliation domes ("onion-skin peeling") on granitic batholiths?',
        options: [
          'Pressure release (unloading) combined with diurnal thermal expansion and contraction',
          'Glacial moraine plastering',
          'Wave abrasion',
          'Coral reef growth',
        ],
        correctOptionIndex: 0,
        explanation: 'Removal of overlying rock reduces confining pressure, causing concentric sheet fractures parallel to the surface.',
        difficulty: 'advanced',
      },
      {
        stem: 'What separates a "Mushroom Rock" (pedestal rock) from a "Sea Stack"?',
        options: [
          'Mushroom rocks are shaped by near-surface wind abrasion in deserts, whereas sea stacks are isolated rock pillars left by coastal wave erosion',
          'Both are carved solely by alpine glaciers',
          'Mushroom rocks occur only underwater',
          'Sea stacks are wind-blown sand dunes',
        ],
        correctOptionIndex: 0,
        explanation: 'Wind-borne sand concentrates abrasion within ~1–2 m above desert floors (undercutting pedestals), while marine waves collapse coastal arches into sea stacks.',
        difficulty: 'standard',
      },
      {
        stem: 'Why does mass wasting (landslides, rockfalls, debris flows) classify as a distinct exogenic phenomenon from erosion?',
        options: [
          'Mass wasting moves weathered debris directly downslope under gravity without requiring a transporting medium like flowing water, wind, or ice',
          'Mass wasting moves rocks uphill',
          'Mass wasting occurs only in deep oceans',
          'Mass wasting is driven solely by solar flares',
        ],
        correctOptionIndex: 0,
        explanation: 'Gravity acts directly on unstable slope materials in mass wasting, though water often lowers shear strength as a lubricant/trigger.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which glacial landform in Rudraprayag (Chorabari) acted as a natural barrier holding meltwater before breaching in 2013?',
        options: ['Terminal moraine ridge', 'Yardang', 'Natural river levee', 'Polje rim'],
        correctOptionIndex: 0,
        explanation: 'Unconsolidated terminal/lateral moraine debris dams proglacial meltwater lakes like Chorabari Tal.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Atmospheric Structure, Pressure Belts, Cyclones & Global Winds',
    materialTitle: 'Atmospheric Structure, Pressure Belts, Cyclones & Global Winds — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Atmosphere, Winds & Cyclones',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Atmospheric Structure, Pressure Belts, Cyclones & Global Winds

## 1. Layers of the Atmosphere (Bottom to Top)
1. **Troposphere (~8 km poles, ~18 km equator):** Contains ~75% atmospheric mass and virtually **all weather phenomena**; temperature decreases with altitude ($6.5^\\circ\\text{C/km}$). Top boundary: **Tropopause**.
2. **Stratosphere (~18–50 km):** Temperature rises with height due to **Ozone Layer** absorbing UV radiation; ideal for commercial jet cruising.
3. **Mesosphere (~50–80 km):** Coldest atmospheric layer (~$-90^\\circ\\text{C}$); meteors burn up here.
4. **Thermosphere / Ionosphere (~80–640 km):** Reflects short-wave **radio signals**; hosts **aurora** displays.
5. **Exosphere:** Merges gradually into outer space.

## 2. Pressure Belts & Planetary Winds
- **Equatorial Low (ITCZ / Doldrums, ~0°):** Intense heating, ascending air, calm surface winds, convective rain.
- **Sub-Tropical High (Horse Latitudes, ~30° N/S):** Subsiding dry air (hosts major hot deserts like Sahara, Thar, Arabian).
- **Sub-Polar Low (~60° N/S):** Convergence of warm westerlies and cold polar easterlies (**Polar Front**).
- **Polar High (~90° N/S):** Cold, dense subsiding air.
- **Coriolis Effect:** Deflects moving air **right** in the Northern Hemisphere and **left** in the Southern Hemisphere (zero at Equator).
- **Planetary Winds:** **Trade Winds** (NE in NH), **Westerlies** (Roaring Forties in SH), **Polar Easterlies**.

## 3. Tropical vs Temperate (Extratropical) Cyclones
| Feature | Tropical Cyclone | Temperate / Extratropical Cyclone |
|---|---|---|
| **Origin Zone** | Warm oceans ($>26.5^\\circ\\text{C}$), $5^\\circ$–$20^\\circ$ lat | Mid-latitudes ($35^\\circ$–$65^\\circ$); frontal collision |
| **Energy Source** | Latent heat of condensation | Horizontal temperature gradient (warm/cold fronts) |
| **Eye & Fronts** | Clear calm **Eye**; no fronts | No eye; distinct warm & cold **fronts** |
| **India Impact** | Bay of Bengal & Arabian Sea storms | **Western Disturbances** bringing winter rain/snow to Uttarakhand |

## 4. Key Revision Takeaways
- Weather occurs in **Troposphere**; Ozone in **Stratosphere**; Radio reflection in **Ionosphere**.
- **Horse Latitudes (~30°)** are belts of subsiding air and hot deserts.
- **No tropical cyclones form right on the Equator** because Coriolis force is zero there.
`,
    mcqs: [
      {
        stem: 'In which atmospheric layer do clouds, thunderstorms, and virtually all weather phenomena occur?',
        options: ['Stratosphere', 'Troposphere', 'Mesosphere', 'Thermosphere'],
        correctOptionIndex: 1,
        explanation: 'The troposphere contains most atmospheric moisture and convective instability, driving all weather systems.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why are tropical cyclones unable to form right along the Equator (0°–5° latitude)?',
        options: [
          'Ocean waters are too cold at the Equator',
          'Coriolis force is zero at the Equator, preventing air from acquiring cyclonic rotation',
          'Ozone absorbs all wind energy',
          'Gravity vanishes at 0°',
        ],
        correctOptionIndex: 1,
        explanation: 'Because Coriolis deflection is proportional to sin(latitude), it is zero at the Equator so inward winds fill lows directly rather than spiraling.',
        difficulty: 'standard',
      },
      {
        stem: 'Which atmospheric layer contains the protective Ozone shield that causes temperature to rise with altitude?',
        options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Exosphere'],
        correctOptionIndex: 1,
        explanation: 'Stratospheric ozone absorbs solar UV radiation, warming the upper stratosphere.',
        difficulty: 'foundation',
      },
      {
        stem: 'In which atmospheric layer do most meteors burn up upon entry, and temperatures drop to the coldest levels (~-90°C)?',
        options: ['Stratosphere', 'Mesosphere', 'Ionosphere', 'Troposphere'],
        correctOptionIndex: 1,
        explanation: 'The mesosphere (~50–80 km) is the coldest layer where friction vaporizes incoming meteoroids.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why are most of the world\'s hot deserts (Sahara, Arabian, Atacama, Mojave) situated near 20°–30° latitude?',
        options: [
          'They lie beneath the Sub-Tropical High-Pressure belts of subsiding, adiabatically warming dry air',
          'They lie in the Sub-Polar Low belt',
          'Monsoons blow directly onshore year-round',
          'They lie at the North and South Poles',
        ],
        correctOptionIndex: 0,
        explanation: 'Air rising at the ITCZ descends around 30° N/S (Hadley cell), warming by compression and suppressing cloud formation.',
        difficulty: 'standard',
      },
      {
        stem: 'In the Northern Hemisphere, which direction does the Coriolis force deflect moving winds?',
        options: [
          'To the left of their motion',
          'To the right of their motion',
          'Straight upward only',
          'Always eastward regardless of heading',
        ],
        correctOptionIndex: 1,
        explanation: 'By Ferrel\'s Law, Earth\'s rotation deflects winds to the right in the Northern Hemisphere and to the left in the Southern Hemisphere.',
        difficulty: 'foundation',
      },
      {
        stem: 'What are "Roaring Forties", "Furious Fifties", and "Shrieking Sixties"?',
        options: [
          'Tropical monsoon bursts in India',
          'Strong, persistent Westerlies over the largely uninterrupted Southern Ocean between 40°S and 60°S',
          'Local hot winds in Sahara',
          'Arctic polar easterlies',
        ],
        correctOptionIndex: 1,
        explanation: 'With minimal landmass to exert friction in the Southern Hemisphere mid-latitudes, westerly winds blow with great force.',
        difficulty: 'standard',
      },
      {
        stem: 'Which critical feature distinguishes a Temperate (Extratropical) cyclone from a Tropical cyclone?',
        options: [
          'Temperate cyclones are driven by warm/cold air-mass fronts, whereas tropical cyclones have no fronts and derive energy from warm ocean latent heat',
          'Tropical cyclones form only over snow',
          'Temperate cyclones possess a warm calm Eye',
          'Tropical cyclones cover larger land areas across Siberia',
        ],
        correctOptionIndex: 0,
        explanation: 'Extratropical cyclones form along mid-latitude baroclinic fronts (like Western Disturbances), while tropical storms run on latent heat over warm (>26.5°C) seas.',
        difficulty: 'standard',
      },
      {
        stem: 'Which local wind descends along the leeward eastern slopes of the Rockies and is known as the "snow-eater"?',
        options: ['Mistral', 'Chinook', 'Harmattan', 'Loo'],
        correctOptionIndex: 1,
        explanation: 'Chinook (similar to Alpine Foehn) is a warm, dry katabatic/adiabatic wind warming the lee of the Rockies.',
        difficulty: 'standard',
      },
      {
        stem: 'What is the Inter-Tropical Convergence Zone (ITCZ)?',
        options: [
          'The polar ice front at 60° N',
          'A low-pressure belt near the thermal Equator where Northeast and Southeast Trade Winds converge and ascend',
          'A stratospheric ozone hole',
          'A cold ocean current off Peru',
        ],
        correctOptionIndex: 1,
        explanation: 'The ITCZ shifts seasonally north and south of the Equator with apparent solar migration, playing a vital role in Indian monsoon dynamics.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why do commercial jet aircraft generally cruise near the Tropopause / lower Stratosphere?',
        options: [
          'Absence of convective thunderstorms/turbulence and lower air drag at high altitude',
          'Presence of denser oxygen for wings',
          'Because ozone pushes engines forward',
          'To avoid GPS satellites',
        ],
        correctOptionIndex: 0,
        explanation: 'Flying above tropospheric storm clouds offers smooth flight and better fuel efficiency.',
        difficulty: 'standard',
      },
      {
        stem: 'In Koppen\'s climate classification, what does the code "Cw" (like Cwg across parts of northern India / Gangetic plains) signify?',
        options: [
          'Tropical rainforest year-round',
          'Mesothermal/humid subtropical climate with a dry winter season',
          'Polar ice-cap climate',
          'Hot arid desert climate',
        ],
        correctOptionIndex: 1,
        explanation: 'In Koppen\'s scheme, "C" indicates warm temperate/mesothermal and "w" indicates a dry winter (monsoon seasonality).',
        difficulty: 'advanced',
      },
      {
        stem: 'What happens to the height of the Tropopause from the Equator toward the Poles?',
        options: [
          'It is highest over the Equator (~16–18 km) due to vigorous thermal convection and lower over the Poles (~8 km)',
          'It is highest over the Poles (25 km)',
          'It stays fixed at exactly 10 km globally',
          'It disappears over oceans',
        ],
        correctOptionIndex: 0,
        explanation: 'Strong equatorial heating drives deeper vertical convection, pushing the tropopause much higher than at cold polar latitudes.',
        difficulty: 'standard',
      },
      {
        stem: 'Why does an approaching tropical cyclone weaken rapidly after making landfall?',
        options: [
          'Loss of warm ocean moisture supply (latent heat) combined with increased surface friction over land',
          'Mountains push it back into space',
          'Land has zero Coriolis force',
          'Sunlight turns cyclones into anticyclones immediately',
        ],
        correctOptionIndex: 0,
        explanation: 'Cutting off evaporation from warm sea surfaces starves the cyclone\'s heat engine while terrain friction slows inflow.',
        difficulty: 'standard',
      },
      {
        stem: 'Which atmospheric layer reflects terrestrial medium- and short-wave radio transmissions back to Earth?',
        options: ['Troposphere', 'Ionosphere (part of Thermosphere)', 'Ozonosphere', 'Mesopause'],
        correctOptionIndex: 1,
        explanation: 'Solar ionization creates electrically charged layers in the ionosphere that bounce radio waves over long distances.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Ocean Floor Relief, Salinity, Currents & Coral Reefs',
    materialTitle: 'Ocean Floor Relief, Salinity, Currents & Coral Reefs — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Oceanography & Coral Reefs',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Ocean Floor Relief, Salinity, Currents & Coral Reefs

## 1. Major Divisions of the Ocean Floor
- **Continental Shelf:** Gently sloping submerged margin ($<1^\\circ$), rich in **petroleum/natural gas** (e.g., Mumbai High) and marine fisheries.
- **Continental Slope:** Steep drop connecting shelf to deep ocean floor; incised by **submarine canyons**.
- **Abyssal Plain:** Flat, sediment-covered deep-sea floor (~3,000–6,000 m).
- **Oceanic Trenches (Deeps):** Steepest subduction zones (e.g., **Mariana Trench** — Challenger Deep, ~11 km).
- **Mid-Ocean Ridges & Guyots:** Divergent volcanic chains and flat-topped seamounts.

## 2. Ocean Temperature & Salinity
- **Average Ocean Salinity:** ~35‰ (parts per thousand), dominated by **Sodium Chloride (~77.8%)**.
- **Controls:** Highest salinity occurs in **sub-tropical high-pressure belts (20°–30°)** where evaporation exceeds precipitation (e.g., Red Sea ~39‰; enclosed Lake Van / Dead Sea extreme), lower at Equator (heavy rain) and Poles (ice melt).

## 3. Major Ocean Currents & Impacts
- **Warm Currents:** **Gulf Stream**, **Kuroshio**, **North Atlantic Drift** (keeps NW Europe ice-free), **Brazil**, **Agulhas**.
- **Cold Currents:** **Labrador**, **Humboldt (Peru)**, **Benguela**, **Canary**, **Oyashio** (create rich **fishing banks** where they meet warm currents, e.g., Grand Banks near Newfoundland; cold western-coast currents promote **coastal deserts** like Atacama & Namib).
- **Indian Ocean:** Uniquely **reverses direction seasonally** in the northern half under Monsoon winds!

## 4. Coral Reefs & Bleaching
- **Growth Conditions:** Warm shallow clear tropical waters ($20^\\circ$–$25^\\circ\\text{C}$), sunlight, normal salinity, sediment-free water.
- **Types (Darwin):** **Fringing Reef**, **Barrier Reef** (Great Barrier Reef), **Atoll** (Lakshadweep).
- **Coral Bleaching:** Expulsion of symbiotic **Zooxanthellae** algae due to thermal stress (marine heatwaves / El Nino) or ocean acidification.

## 5. Key Revision Takeaways
- Sub-tropics (~25° N/S) have higher open-ocean salinity than the rainy Equator.
- **Cold currents** + coastal upwelling foster **deserts** on western margins and productive **anchovy fisheries** (Humboldt).
- **North Indian Ocean currents reverse** seasonally between SW and NE monsoons.
`,
    mcqs: [
      {
        stem: 'Why is open-ocean surface salinity higher in sub-tropical latitudes (~20°–30°) than right at the rainy Equator?',
        options: [
          'Clear skies and subsiding dry winds maximize evaporation over low precipitation in the sub-tropics, whereas heavy equatorial rainfall dilutes surface water',
          'Rivers carry salt only to 25° latitude',
          'Icebergs melt at the Equator',
          'Fish consume salt near 0°',
        ],
        correctOptionIndex: 0,
        explanation: 'High evaporation minus precipitation (E - P) raises salinity in sub-tropical belts (~36–37‰), while heavy ITCZ rain lowers equatorial salinity (~34–35‰).',
        difficulty: 'standard',
      },
      {
        stem: 'Which ocean uniquely exhibits a complete seasonal reversal of surface currents in its northern basin?',
        options: ['North Atlantic Ocean', 'North Pacific Ocean', 'Northern Indian Ocean', 'Southern Ocean'],
        correctOptionIndex: 2,
        explanation: 'Monsoon wind reversals between winter (NE) and summer (SW) reverse the Somali and Monsoon Drift currents in the northern Indian Ocean.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pair of ocean currents converges near Newfoundland (Grand Banks) to create dense fog and one of the world\'s richest fishing grounds?',
        options: [
          'Kuroshio and Oyashio',
          'Gulf Stream (warm) and Labrador Current (cold)',
          'Brazil and Falkland',
          'Benguela and Agulhas',
        ],
        correctOptionIndex: 1,
        explanation: 'Mixing of the warm Gulf Stream and cold Labrador Current fuels plankton blooms and dense advection fog around the Grand Banks.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which cold ocean current flowing north along South America helps sustain both the arid Atacama Desert and rich Peruvian fisheries?',
        options: ['Agulhas Current', 'Humboldt (Peru) Current', 'Kuroshio Current', 'East Australian Current'],
        correctOptionIndex: 1,
        explanation: 'The cold Humboldt Current stabilizes coastal air (suppressing rain over Atacama) while coastal upwelling brings nutrient-rich deep water to fish.',
        difficulty: 'foundation',
      },
      {
        stem: 'What biological event causes "Coral Bleaching"?',
        options: [
          'Corals dissolving into volcanic magma',
          'Heat stress or acidification causing coral polyps to expel symbiotic photosynthetic algae (Zooxanthellae)',
          'Whales scraping reefs',
          'Excessive sunlight freezing ocean water',
        ],
        correctOptionIndex: 1,
        explanation: 'Under thermal stress (such as El Nino warming), corals expel coloured zooxanthellae, exposing their white calcium carbonate skeletons.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Indian island territory is composed predominantly of coral Atolls?',
        options: ['Andaman & Nicobar Islands', 'Lakshadweep Islands', 'Sriharikota', 'Sagar Island'],
        correctOptionIndex: 1,
        explanation: 'Lakshadweep consists of coral atolls and reefs in the Arabian Sea, whereas Andaman & Nicobar are emerged tectonic/volcanic ridges.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which ocean relief zone accounts for most offshore petroleum deposits (e.g., Mumbai High) and major demersal fisheries?',
        options: ['Abyssal Plain', 'Continental Shelf', 'Oceanic Trench', 'Mid-Oceanic Ridge'],
        correctOptionIndex: 1,
        explanation: 'Sunlight penetrates shallow continental shelves, supporting marine plankton and trapping organic-rich sediments forming oil/gas.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which sequence lists the three classic stages of Charles Darwin\'s subsidence theory of coral reef evolution?',
        options: [
          'Atoll → Barrier Reef → Fringing Reef',
          'Fringing Reef → Barrier Reef → Atoll',
          'Barrier Reef → Fringing Reef → Guyot',
          'Abyssal Plain → Trench → Atoll',
        ],
        correctOptionIndex: 1,
        explanation: 'As a volcanic island gradually subsides, an attached fringing reef grows upward into a lagoon-separated barrier reef and finally an annular atoll.',
        difficulty: 'standard',
      },
      {
        stem: 'Why do ports of Northwestern Europe (like Bergen in Norway) remain ice-free in winter compared to ports at similar latitudes in eastern Canada?',
        options: [
          'Warm waters of the North Atlantic Drift (extension of the Gulf Stream) moderate NW European winter temperatures',
          'Europe sits closer to the Equator',
          'The Labrador Current warms Norway',
          'Norway has active underwater volcanoes everywhere',
        ],
        correctOptionIndex: 0,
        explanation: 'The warm North Atlantic Drift carries tropical heat northeastward along Europe\'s Atlantic coast.',
        difficulty: 'standard',
      },
      {
        stem: 'Which salt contributes the single largest share (~77.8%) of total dissolved sea salts?',
        options: ['Magnesium Chloride', 'Sodium Chloride', 'Calcium Carbonate', 'Potassium Sulphate'],
        correctOptionIndex: 1,
        explanation: 'Sodium chloride (NaCl) accounts for roughly 77.8% of ocean salinity, followed by magnesium chloride (~10.9%).',
        difficulty: 'foundation',
      },
      {
        stem: 'What are "Guyots" on the ocean floor?',
        options: [
          'Submarine trenches deeper than 9,000 m',
          'Flat-topped submerged volcanic seamounts planed off by wave erosion before subsiding',
          'Freshwater springs on continental shelves',
          'Tidal sandbars in estuaries',
        ],
        correctOptionIndex: 1,
        explanation: 'Guyots are tablemounts formed when volcanic islands erode flat at sea level and subside below the waves.',
        difficulty: 'standard',
      },
      {
        stem: 'Why are healthy coral reefs generally ABSENT near the mouths of huge muddy rivers like the Ganga–Brahmaputra or Amazon?',
        options: [
          'Heavy freshwater dilution lowers salinity and dense suspended silt smothers filter-feeding coral polyps and blocks sunlight',
          'Rivers carry too much calcium',
          'Coral polyps live only in freezing freshwater',
          'Tides prevent river mixing',
        ],
        correctOptionIndex: 0,
        explanation: 'Reef-building corals require clear, warm, normal-salinity marine water free of suffocating river silt.',
        difficulty: 'standard',
      },
      {
        stem: 'During Spring Tides (highest tidal range), how are the Sun, Earth, and Moon aligned?',
        options: [
          'At right angles (quadrature — first/third quarter)',
          'In a straight line (syzygy — New Moon or Full Moon)',
          'Moon lies behind Saturn',
          'Only during equinoxes without Moon alignment',
        ],
        correctOptionIndex: 1,
        explanation: 'At Full Moon and New Moon (syzygy), solar and lunar gravitational pulls reinforce each other to produce spring tides.',
        difficulty: 'standard',
      },
      {
        stem: 'Which cold ocean current flows southward past NW Africa alongside the Sahara Desert?',
        options: ['Canary Current', 'Agulhas Current', 'Mozambique Current', 'Kuroshio Current'],
        correctOptionIndex: 0,
        explanation: 'The cold Canary Current cools coastal air along Morocco and Mauritania, reinforcing western Sahara aridity.',
        difficulty: 'standard',
      },
      {
        stem: 'What drives deep-ocean Thermohaline Circulation (the "Global Conveyor Belt")?',
        options: [
          'Surface trade winds alone',
          'Density differences created by cooling and brine rejection (higher salinity) in polar oceans such as the North Atlantic',
          'Submarine earthquakes',
          'Coral respiration',
        ],
        correctOptionIndex: 1,
        explanation: 'Cold, high-salinity water sinks in polar North Atlantic and Antarctic waters, driving slow global deep-ocean overturning.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'The Himalayas & Northern Plains of India',
    materialTitle: 'The Himalayas & Northern Plains of India — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Himalayas & Northern Plains',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# The Himalayas & Northern Plains of India

## 1. Longitudinal & Regional Divisions of the Himalayas
- **North–South Belts:** Trans-Himalaya (Karakoram, Ladakh, Zaskar) → Greater Himalaya (Himadri) → Lesser Himalaya (Pir Panjal, Dhauladhar, Nag Tibba, Mahabharat) → Outer Shivaliks.
- **West–East Regional Divisions (Sir Sidney Burrard):**
  1. **Punjab / Kashmir Himalaya** (Indus to Sutlej) — famous for **Karewas** (lacustrine deposits growing **Saffron**).
  2. **Kumaon Himalaya** (Sutlej to Kali — spans Uttarakhand; ~320 km).
  3. **Nepal Himalaya** (Kali to Teesta — highest peaks: Everest, Kanchenjunga, Dhaulagiri).
  4. **Assam / Eastern Himalaya** (Teesta to Dihang/Brahmaputra).
- **Syntaxian Bends:** Sharp hair-pin bends at **Nanga Parbat** (west) and **Namcha Barwa** (east).

## 2. The Indo-Gangetic–Brahmaputra Plains
Formed by Quaternary alluvial infilling of the Himalayan **foredeep**; divided north-to-south & by sediment age:
- **Bhabar:** Porous boulder/gravel piedmont along Shivalik foot.
- **Terai:** Damp marshy spring-re-emergence belt south of Bhabar.
- **Bhangar:** **Older alluvium** forming elevated terraces above flood level, often containing calcareous nodules (**Kankar**).
- **Khadar:** **Newer alluvium** replenished annually by floods; extremely fertile.

## 3. Key Revision Takeaways
- **Kumaon Himalaya** lies between **Sutlej and Kali** rivers.
- **Karewas** in Kashmir grow saffron; **Bhangar** = old alluvium (with Kankar); **Khadar** = fertile new flood alluvium.
`,
    mcqs: [
      {
        stem: 'According to Sir Sidney Burrard\'s regional classification, the "Kumaon Himalaya" (covering Uttarakhand) lies between which two rivers?',
        options: [
          'Indus and Sutlej',
          'Sutlej and Kali',
          'Kali and Teesta',
          'Teesta and Brahmaputra',
        ],
        correctOptionIndex: 1,
        explanation: 'Kumaon Himalaya extends roughly 320 km between the Sutlej river in the west and the Kali river in the east.',
        difficulty: 'foundation',
      },
      {
        stem: 'In the Northern Plains of India, what distinguishes "Khadar" from "Bhangar"?',
        options: [
          'Khadar is older stony upland while Bhangar is marshy Terai',
          'Khadar is newer, fertile floodplain alluvium renewed nearly every year, whereas Bhangar is older alluvium sitting above flood level often containing Kankar nodules',
          'Bhangar occurs only in deltas',
          'Both refer to coastal coral sand',
        ],
        correctOptionIndex: 1,
        explanation: 'Khadar forms the fertile newer floodplains, while older Bhangar terraces carry calcareous Kankar concretions.',
        difficulty: 'foundation',
      },
      {
        stem: 'What are "Karewas" in the Kashmir Valley?',
        options: [
          'Desert sand dunes',
          'Thick glacial-lacustrine clay and silt deposits famous for Zafran (saffron) cultivation',
          'Coral islands',
          'Volcanic lava plateaus',
        ],
        correctOptionIndex: 1,
        explanation: 'Karewas are ancient Pleistocene lake deposits between the Greater Himalaya and Pir Panjal renowned for saffron and almond cultivation.',
        difficulty: 'foundation',
      },
      {
        stem: 'Near which two peaks do the Himalayas exhibit sharp "Syntaxial Bends" turning abruptly southward?',
        options: [
          'Nanda Devi and Kamet',
          'Nanga Parbat (west) and Namcha Barwa (east)',
          'Mount Abu and Guru Shikhar',
          'Dodabetta and Anamudi',
        ],
        correctOptionIndex: 1,
        explanation: 'Deep southward syntaxian bends occur around Nanga Parbat (Indus gorge) in the west and Namcha Barwa (Dihang gorge) in the east.',
        difficulty: 'standard',
      },
      {
        stem: 'Arrange the Himalayan regional divisions from WEST to EAST:',
        options: [
          'Punjab/Kashmir → Kumaon → Nepal → Assam',
          'Kumaon → Kashmir → Assam → Nepal',
          'Nepal → Kumaon → Kashmir → Assam',
          'Assam → Nepal → Kumaon → Kashmir',
        ],
        correctOptionIndex: 0,
        explanation: 'Moving west to east along the arc: Punjab/Kashmir (Indus–Sutlej) → Kumaon (Sutlej–Kali) → Nepal (Kali–Teesta) → Assam (Teesta–Brahmaputra).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which prominent Lesser Himalayan range forms the southwestern rim of the Kashmir Valley and is pierced by the Banihal–Qazigund tunnel?',
        options: ['Zaskar Range', 'Pir Panjal Range', 'Karakoram Range', 'Patkai Bum'],
        correctOptionIndex: 1,
        explanation: 'The Pir Panjal is the longest and most important range of the Lesser Himalaya in Jammu & Kashmir.',
        difficulty: 'standard',
      },
      {
        stem: 'Which mountain pass connects Leh (Ladakh) and Srinagar in Jammu & Kashmir, whereas Shipki La connects Himachal Pradesh with Tibet?',
        options: ['Zoji La', 'Nathu La', 'Bomdi La', 'Lipulekh'],
        correctOptionIndex: 0,
        explanation: 'Zoji La carries the Srinagar–Leh highway across the Greater Himalayan crest.',
        difficulty: 'standard',
      },
      {
        stem: 'In which Himalayan sub-division is Kangchenjunga (8,586 m) located?',
        options: ['Kashmir Himalaya', 'Kumaon Himalaya', 'Sikkim–Darjeeling (Nepal–Eastern transition)', 'Shivalik Hills'],
        correctOptionIndex: 2,
        explanation: 'Kangchenjunga lies on the Sikkim–Nepal border.',
        difficulty: 'foundation',
      },
      {
        stem: 'How did the Indo-Gangetic Plains originate geologically?',
        options: [
          'Erosion of an ancient volcanic island',
          'Filling of a deep tectonic foreland basin (foredeep) ahead of the rising Himalayas by river-borne alluvium',
          'Uplift of an oceanic basalt ridge',
          'Glacial moraine freezing in Rajasthan',
        ],
        correctOptionIndex: 1,
        explanation: 'Crustal flexure from India–Eurasia collision created a sinking foredeep trough that Himalayan and Peninsular rivers filled with thousands of metres of alluvium.',
        difficulty: 'standard',
      },
      {
        stem: 'Why are the eastern Himalayas (Arunachal/Sikkim) generally much greener with higher snowlines than the western Himalayas (Kashmir/Ladakh)?',
        options: [
          'Proximity to the Bay of Bengal brings far heavier monsoon moisture and lower latitude keeps temperatures warmer',
          'Eastern Himalayas lie inside the Arctic Circle',
          'Western Himalayas sit below sea level',
          'Eastern Himalayas have zero mountain passes',
        ],
        correctOptionIndex: 0,
        explanation: 'Lower latitude and abundant Bay of Bengal moisture give the eastern Himalayas lush forests and higher snowlines than drier northwestern ranges.',
        difficulty: 'standard',
      },
      {
        stem: 'Which pass in Sikkim historically connects India with Tibet\'s Chumbi Valley?',
        options: ['Nathu La', 'Bara Lacha La', 'Mana Pass', 'Banihal Pass'],
        correctOptionIndex: 0,
        explanation: 'Nathu La (and Jelep La) lie in Sikkim connecting Gangtok to Tibet\'s Chumbi Valley.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which landform feature characterizes the Purvanchal (Northeastern) Hills such as Patkai Bum, Naga Hills, and Mizo (Lushai) Hills?',
        options: [
          'Granitic shield craton older than the Aravallis',
          'Strong north–south sedimentary folds bending southward beyond the Dihang syntaxial bend',
          'Coral islands',
          'Active shield volcanoes',
        ],
        correctOptionIndex: 1,
        explanation: 'Beyond Namcha Barwa, the Himalayan fold-thrust belt swings south to form the Purvanchal ranges (Patkai, Naga, Manipur, Mizo hills).',
        difficulty: 'standard',
      },
      {
        stem: 'What are "Doabs" in the northern plains of Punjab and western Uttar Pradesh?',
        options: [
          'Desert salt flats',
          'Fertile interfluve tracts lying between two converging rivers (e.g., Bari Doab, Ganga–Yamuna Doab)',
          'High mountain passes',
          'Coral lagoons',
        ],
        correctOptionIndex: 1,
        explanation: 'Derived from Persian "do" (two) + "ab" (water), a doab is the fertile alluvial land between two rivers.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why does groundwater extraction face severe over-exploitation in parts of Punjab–Haryana Bhangar plains despite fertile Khadar nearby?',
        options: [
          'Intensive paddy–wheat Green Revolution cropping relies heavily on electric tubewells tapping older Bhangar aquifers faster than recharge',
          'Punjab sits inside the Thar sand dune core',
          'Bhangar soil contains zero aquifers',
          'Monsoon winds bypass India entirely',
        ],
        correctOptionIndex: 0,
        explanation: 'Water-intensive paddy cultivation on semi-arid Bhangar tracts has caused steep water-table depletion.',
        difficulty: 'standard',
      },
      {
        stem: 'Which statement contrasts the "Duars" of North Bengal/Assam with the "Duns" of Uttarakhand/Himachal?',
        options: [
          'Duns are structural longitudinal valleys inside the hills, whereas Duars are alluvial foothill floodplains serving as gateways into Bhutan/NE hills (famous for tea)',
          'Duars are snow-covered glaciers above 6,000 m',
          'Duns occur along the Malabar coast',
          'Both refer exclusively to mangrove islands',
        ],
        correctOptionIndex: 0,
        explanation: 'Western/Central Himalayas feature longitudinal Dun valleys (like Dehradun), whereas the eastern Shivalik foothills drop abruptly into broad alluvial Duars used as passes/tea belts.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'Peninsular Plateau, Coastal Plains & Island Groups',
    materialTitle: 'Peninsular Plateau, Coastal Plains & Island Groups — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Peninsular Plateau, Coasts & Islands',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Peninsular Plateau, Coastal Plains & Island Groups

## 1. The Peninsular Plateau (Oldest Landmass)
Part of ancient Gondwanaland, composed of Precambrian crystalline rocks, **Vindhyan–Gondwana basins**, and Cretaceous **Deccan Trap** flood basalts:
- **Central Highlands:** **Aravalli Range** (oldest fold mountains; highest peak **Guru Shikhar**, 1,722 m on Mt Abu), **Malwa Plateau**, **Bundelkhand–Baghelkhand**, **Vindhyan** & **Satpura** ranges (rift-valley boundary with Narmada & Tapi), **Chotanagpur Plateau** (mineral heartland).
- **Deccan Plateau & Ghats:**
  - **Western Ghats (Sahyadri):** Continuous escarpment, higher average elevation, UNESCO biodiversity hotspot; **Anamudi** (2,695 m, Kerala — highest peak of Peninsular India), **Dodabetta** (2,637 m, Nilgiris). Passes: **Thal Ghat, Bhor Ghat, Pal Ghat (Palakkad Gap)**.
  - **Eastern Ghats:** Discontinuous, eroded by east-flowing rivers (**Mahendragiri**, **Jindhagada**); meets Western Ghats at **Nilgiri Hills**.
- **Meghalaya (Shillong) Plateau:** Geologically an **eastern extension of the Peninsular block**, separated from Rajmahal Hills by the alluvium-filled **Malda Fault (Garo–Rajmahal Gap)**!

## 2. Coastal Plains: West vs East
- **Western Coastal Plain (Submergent, narrow):** **Konkan** (Maharashtra–Goa), **Kannada/Karavali**, **Malabar** (Kerala — lagoons/backwaters called **Kayals**, e.g., Vembanad). Estuaries dominate; natural harbours.
- **Eastern Coastal Plain (Emergent, broad):** **Utkal**, **Northern Circars**, **Coromandel** (receives winter NE monsoon rain). Broad deltas (Mahanadi, Godavari, Krishna, Kaveri); Chilika & Pulicat lagoons.

## 3. Island Groups
- **Andaman & Nicobar (Bay of Bengal):** Emerged Arakan Yoma submarine ridge; separated by **Ten Degree Channel**; **Barren Island** (India's only active volcano); **Saddle Peak** highest; **Indira Point** (southernmost point of India on Great Nicobar).
- **Lakshadweep (Arabian Sea):** Coral atolls (**Nine Degree Channel** separates Minicoy from main Lakshadweep; **Eight Degree Channel** separates Minicoy from Maldives).

## 4. Key Revision Takeaways
- **Meghalaya Plateau** is Peninsular (not Himalayan), separated by the **Malda Gap**.
- **Anamudi (2,695 m)** is highest Peninsular peak; **Barren Island** is India's only active volcano.
- **10° Channel** separates Andaman & Nicobar; **8° Channel** separates Minicoy & Maldives.
`,
    mcqs: [
      {
        stem: 'Which is the highest peak of Peninsular India?',
        options: ['Dodabetta', 'Guru Shikhar', 'Anamudi', 'Mahendragiri'],
        correctOptionIndex: 2,
        explanation: 'Anamudi (2,695 m) in the Anaimalai Hills of Kerala is the highest peak of the Western Ghats and Peninsular India.',
        difficulty: 'foundation',
      },
      {
        stem: 'Geologically, the Meghalaya (Shillong) Plateau—containing Garo, Khasi, and Jaintia Hills—is an outlier of which structure?',
        options: [
          'Greater Himalaya',
          'Peninsular Indian Shield, separated by the Malda Fault (Garo–Rajmahal Gap)',
          'Shivalik Foothills',
          'Andaman volcanic arc',
        ],
        correctOptionIndex: 1,
        explanation: 'The Shillong/Karbi-Anglong plateau is Precambrian Peninsular basement detached by the down-faulted Malda Gap filled by Ganga–Brahmaputra silt.',
        difficulty: 'standard',
      },
      {
        stem: 'Which water channel separates the Andaman Islands from the Nicobar Islands?',
        options: ['Eight Degree Channel', 'Nine Degree Channel', 'Ten Degree Channel', 'Palk Strait'],
        correctOptionIndex: 2,
        explanation: 'The Ten Degree Channel (10° N) divides Little Andaman from Car Nicobar.',
        difficulty: 'foundation',
      },
      {
        stem: 'Where is India\'s only confirmed active volcano located?',
        options: ['Narcondam Island', 'Barren Island (Andaman Sea)', 'Minicoy Island', 'Diu Island'],
        correctOptionIndex: 1,
        explanation: 'Barren Island in the Andaman Sea is India\'s sole active volcano (Narcondam is dormant/extinct).',
        difficulty: 'foundation',
      },
      {
        stem: 'Where do the Western Ghats and Eastern Ghats converge?',
        options: ['Satpura Range', 'Nilgiri Hills', 'Cardamom Hills', 'Vindhyan Scarp'],
        correctOptionIndex: 1,
        explanation: 'The Nilgiri Hills (rising to Dodabetta) mark the structural junction of the Western and Eastern Ghats.',
        difficulty: 'foundation',
      },
      {
        stem: 'What are "Kayals" characteristic of the Malabar Coast of Kerala?',
        options: [
          'Coral atolls',
          'Shallow coastal backwaters and lagoons (such as Vembanad and Ashtamudi)',
          'Granite hill forts',
          'Desert salt crusts',
        ],
        correctOptionIndex: 1,
        explanation: 'Kayals are brackish coastal lagoons along Kerala\'s submergent Malabar shoreline.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why does the Western Coast of India host more natural deep-water harbours and estuaries, whereas the Eastern Coast hosts large deltas?',
        options: [
          'The Western Coast is narrower and largely submergent with swift short rivers forming estuaries, whereas the broad emergent Eastern Coast receives gentle, heavily sediment-laden rivers building deltas',
          'Eastern Coast receives zero river water',
          'Western Coast sits above 2,000 m',
          'Tides do not occur in the Bay of Bengal',
        ],
        correctOptionIndex: 0,
        explanation: 'Submergence and steep Western Ghat drop create deep coastal waters and estuaries; broad gentle eastern shelf favours Mahanadi–Kaveri deltas.',
        difficulty: 'standard',
      },
      {
        stem: 'Which ancient mountain range stretches across Gujarat, Rajasthan, and Haryana into Delhi as a relict fold belt?',
        options: ['Satpura Range', 'Aravalli Range', 'Maikal Range', 'Mahadeo Hills'],
        correctOptionIndex: 1,
        explanation: 'The Aravallis are among the world\'s oldest fold mountains, peaking at Guru Shikhar (1,722 m) on Mount Abu.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which mountain gap in the Western Ghats provides the vital rail-road corridor linking Tamil Nadu (Coimbatore) with Kerala (Palakkad)?',
        options: ['Thal Ghat', 'Bhor Ghat', 'Pal Ghat (Palakkad Gap)', 'Goran Ghat'],
        correctOptionIndex: 2,
        explanation: 'Pal Ghat separates the Nilgiri Hills from the Anaimalai Hills.',
        difficulty: 'standard',
      },
      {
        stem: 'How did the Deccan Traps of Maharashtra and central India form?',
        options: [
          'Massive late-Cretaceous fissure eruptions pouring horizontal layers of basaltic lava as India passed over the Reunion hotspot',
          'Himalayan glacial deposition',
          'Marine coral uplift',
          'Coal-mine subsidence',
        ],
        correctOptionIndex: 0,
        explanation: 'Step-like ("trap") basalt plateaus formed from voluminous fissure lava flows ~66 million years ago, weathering later into black Regur soil.',
        difficulty: 'standard',
      },
      {
        stem: 'Which channel separates Minicoy Island (India) from the Maldives?',
        options: ['Ten Degree Channel', 'Eight Degree Channel', 'Duncan Passage', 'Nine Degree Channel'],
        correctOptionIndex: 1,
        explanation: 'The Eight Degree Channel divides Minicoy (southernmost Lakshadweep) from the Maldives; Nine Degree separates Minicoy from Lakshadweep\'s northern atolls.',
        difficulty: 'standard',
      },
      {
        stem: 'Which coastal stretch of eastern India receives substantial winter rainfall from the retreating Northeast Monsoon (October–December)?',
        options: ['Konkan Coast', 'Coromandel Coast (Tamil Nadu–south AP)', 'Kathiawar Coast', 'Kannada Coast'],
        correctOptionIndex: 1,
        explanation: 'NE winds picking up moisture over the Bay of Bengal trigger intense late-autumn rains on the Coromandel Coast.',
        difficulty: 'foundation',
      },
      {
        stem: 'Between which two ranges do the Narmada and Tapi rivers flow westward inside tectonic rift valleys?',
        options: [
          'Aravalli and Vindhya',
          'Vindhya, Satpura, and Ajanta/Satmala ranges',
          'Western and Eastern Ghats',
          'Rajmahal and Garo Hills',
        ],
        correctOptionIndex: 1,
        explanation: 'Narmada occupies the rift trough between the Vindhyas (north) and Satpuras (south), while Tapi flows south of the Satpuras.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why does the Deccan Plateau slope broadly from west to east?',
        options: [
          'Most major rivers (Godavari, Krishna, Kaveri) originate close to the Western Ghats crest yet flow hundreds of kilometres east into the Bay of Bengal',
          'Arabian Sea sits higher than the Western Ghats',
          'Rivers flow uphill over Satpuras',
          'Andaman Islands tilt India eastward',
        ],
        correctOptionIndex: 0,
        explanation: 'Cretaceous–Cenozoic uplift tilted the Peninsular block eastward, so rivers rising near the western coast traverse the entire plateau to the Bay of Bengal.',
        difficulty: 'standard',
      },
      {
        stem: 'Which coastal lagoon is the largest brackish-water lagoon in India, situated on the Odisha (Utkal) coast?',
        options: ['Pulicat Lake', 'Chilika Lake', 'Kolleru Lake', 'Vembanad Lake'],
        correctOptionIndex: 1,
        explanation: 'Chilika Lake in Odisha is India\'s largest brackish-water lagoon and a landmark Ramsar wetland.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Himalayan vs Peninsular River Systems',
    materialTitle: 'Himalayan vs Peninsular River Systems — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Himalayan vs Peninsular Rivers',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Himalayan vs Peninsular River Systems

## 1. Fundamental Structural & Hydrological Contrast
| Parameter | Himalayan Rivers | Peninsular Rivers |
|---|---|---|
| **Nature of Flow** | **Perennial** (glacier snowmelt + monsoon rain) | **Seasonal** (monsoon rain-fed; sharp dry-season drop) |
| **Age & Course** | Youthful, **antecedent**, steep V-gorges, long courses, shifting meanders/oxbows in plains | Older **superimposed / consequent**, broad graded shallow valleys, fixed courses |
| **Drainage Pattern** | Dendritic in plains, trellis/antecedent in hills | Dendritic, rectangular/trellis, radial (Amarkantak) |

## 2. Major Himalayan Systems
1. **Indus System:** Origin near **Bokhar Chu / Mansarovar** (Tibet); tributaries **Jhelum, Chenab, Ravi, Beas, Sutlej** (Indus Waters Treaty, 1960: eastern 3—Ravi, Beas, Sutlej—to India; western 3—Indus, Jhelum, Chenab—primarily to Pakistan).
2. **Ganga System:** **Bhagirathi + Alaknanda** at Devprayag; right-bank **Yamuna, Son**; left-bank **Ramganga, Gomti, Ghaghara, Gandak, Kosi**.
3. **Brahmaputra System:** Originates as **Yarlung Tsangpo** (Chemayungdung glacier); enters India via **Arunachal (Dihang/Siang)**; major tributaries **Subansiri, Lohit, Manas, Teesta**.

## 3. Major Peninsular Systems
- **East-Flowing (Deltas into Bay of Bengal):**
  - **Mahanadi** (Chhattisgarh–Odisha; Hirakud Dam).
  - **Godavari** (Trimbakeshwar, Maharashtra — **"Dakshin Ganga"**, largest Peninsular basin).
  - **Krishna** (Mahabaleshwar; Tungabhadra, Bhima tributaries).
  - **Kaveri** (Brahmagiri, Karnataka — retains flow in both SW & NE monsoons).
- **West-Flowing (Estuaries into Arabian Sea):**
  - **Narmada** (Amarkantak — radial drainage with Son; rift valley; Dhuandhar falls, Sardar Sarovar) & **Tapi** (Multai).
  - **Mahi** (crosses **Tropic of Cancer twice**), **Sabarmati**, **Luni** (inland drainage ending in Rann of Kutch).

## 4. Key Revision Takeaways
- **Godavari** = largest Peninsular river (*Dakshin Ganga*); **Narmada & Tapi** flow west through rift valleys forming **estuaries**.
- **Mahi** crosses the Tropic of Cancer **twice**; **Kaveri** receives rain from both SW and NE monsoons.
`,
    mcqs: [
      {
        stem: 'Which Peninsular river is the longest and holds the largest drainage basin in Peninsular India (often termed "Dakshin Ganga")?',
        options: ['Krishna', 'Mahanadi', 'Godavari', 'Kaveri'],
        correctOptionIndex: 2,
        explanation: 'The Godavari (~1,465 km), rising near Trimbakeshwar (Nashik), is the largest Peninsular river.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which river in western India crosses the Tropic of Cancer TWICE?',
        options: ['Sabarmati', 'Mahi', 'Narmada', 'Luni'],
        correctOptionIndex: 1,
        explanation: 'Rising in Madhya Pradesh, the Mahi flows north into Rajasthan before turning southwest into Gujarat, cutting the Tropic of Cancer twice.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the Indus Waters Treaty (1960), which three eastern rivers were allocated for unrestricted use by India?',
        options: [
          'Indus, Jhelum, and Chenab',
          'Ravi, Beas, and Sutlej',
          'Jhelum, Ravi, and Sutlej',
          'Chenab, Beas, and Indus',
        ],
        correctOptionIndex: 1,
        explanation: 'The eastern rivers—Ravi, Beas, and Sutlej—were allocated to India, while Indus, Jhelum, and Chenab went primarily to Pakistan.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why do Narmada and Tapi form estuaries rather than deltas when entering the Arabian Sea?',
        options: [
          'They flow swiftly through hard-rock rift valleys carrying relatively limited silt onto a steeper tidal shelf',
          'They dry up before reaching the coast',
          'They freeze near Gujarat',
          'Arabian Sea has zero waves',
        ],
        correctOptionIndex: 0,
        explanation: 'Hard rocky rift beds yield less alluvial silt and strong Arabian Sea tidal currents flush mouths clear into estuaries.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Peninsular plateau hub illustrates classic RADIAL drainage, sending the Narmada west, Son north-east, and Johilla/Mahanadi headstreams outward?',
        options: ['Mahabaleshwar', 'Amarkantak Plateau (Maikal Hills)', 'Trimbakeshwar', 'Brahmagiri'],
        correctOptionIndex: 1,
        explanation: 'From the Amarkantak dome in MP, rivers radiate in multiple directions.',
        difficulty: 'standard',
      },
      {
        stem: 'Why does the Kaveri river experience less severe summer drought fluctuations than most other Peninsular rivers?',
        options: [
          'It is glacier-fed from the Nilgiris',
          'Its upper catchment (Karnataka) receives Southwest Monsoon rain while its lower basin (Tamil Nadu) receives Northeast Monsoon rain',
          'It originates in Tibet',
          'It flows exclusively underground',
        ],
        correctOptionIndex: 1,
        explanation: 'Dual monsoon replenishment (summer SW in upper basin, autumn NE in lower basin) keeps Kaveri more perennial than northern Deccan rivers.',
        difficulty: 'standard',
      },
      {
        stem: 'Which tributary of the Ganga rises in the Amarkantak plateau and joins it from the south near Patna?',
        options: ['Gandak', 'Son', 'Ghaghara', 'Kosi'],
        correctOptionIndex: 1,
        explanation: 'The Son flows northeast from Amarkantak as a major right-bank Peninsular tributary of the Ganga.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which river of Rajasthan is an example of an inland (ephemeral) drainage system terminating in the marshy Rann of Kutch rather than the open sea?',
        options: ['Chambal', 'Banas', 'Luni', 'Mahi'],
        correctOptionIndex: 2,
        explanation: 'The Luni flows southwest from the Aravallis near Ajmer and dissipates in the Rann of Kutch.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which river is famous for creating deep gully badlands (ravines) in the Chambal valley before joining the Yamuna?',
        options: ['Ken', 'Betwa', 'Chambal', 'Damodar'],
        correctOptionIndex: 2,
        explanation: 'The Chambal river has deeply incised soft alluvial plains across MP, Rajasthan, and UP into badland ravines.',
        difficulty: 'foundation',
      },
      {
        stem: 'By which names is the Brahmaputra known sequentially from Tibet → Arunachal Pradesh → Assam → Bangladesh?',
        options: [
          'Tsangpo → Siang/Dihang → Brahmaputra → Jamuna',
          'Dihang → Tsangpo → Padma → Meghna',
          'Sutlej → Lohit → Padma → Hooghly',
          'Teesta → Manas → Jamuna → Sharda',
        ],
        correctOptionIndex: 0,
        explanation: 'Known as Yarlung Tsangpo in Tibet, Siang/Dihang in Arunachal, Brahmaputra in Assam, and Jamuna in Bangladesh.',
        difficulty: 'standard',
      },
      {
        stem: 'Which river originates at Mahabaleshwar in the Western Ghats and counts the Bhima and Tungabhadra as major tributaries?',
        options: ['Godavari', 'Krishna', 'Kaveri', 'Pennar'],
        correctOptionIndex: 1,
        explanation: 'The Krishna rises near Mahabaleshwar and receives Bhima (north) and Tungabhadra (south).',
        difficulty: 'foundation',
      },
      {
        stem: 'How does the "Dendritic" drainage pattern differ from a "Trellis" drainage pattern?',
        options: [
          'Dendritic resembles tree branches over uniform rock, whereas trellis has parallel main streams with right-angle tributaries across alternating hard/soft folded strata',
          'Trellis occurs only on flat volcanic cones',
          'Dendritic occurs only in caves',
          'Both mean radial outward flow',
        ],
        correctOptionIndex: 0,
        explanation: 'Uniform lithology favours branching dendritic networks, while folded ridge-and-valley strata guide right-angle trellis drainage.',
        difficulty: 'standard',
      },
      {
        stem: 'Which major dam sits on the Mahanadi river in Odisha as one of India\'s longest earthen dams?',
        options: ['Bhakra Dam', 'Hirakud Dam', 'Nagarjuna Sagar', 'Mettur Dam'],
        correctOptionIndex: 1,
        explanation: 'Hirakud Dam near Sambalpur harnesses the Mahanadi for flood control, irrigation, and power.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which of the following is a RIGHT-BANK tributary of the Brahmaputra in Assam (flowing southward from the Himalayas)?',
        options: ['Dhansiri', 'Kopili', 'Subansiri (and Manas/Teesta)', 'Barak'],
        correctOptionIndex: 2,
        explanation: 'Looking downstream (westward in Assam), Subansiri, Kameng, Manas, Sankosh, and Teesta enter from the northern Himalayas on the right bank.',
        difficulty: 'advanced',
      },
      {
        stem: 'Why do Peninsular rivers lack the dramatic shifting meanders and abandoned oxbow loops seen in Bihar\'s Kosi or UP\'s Ganga?',
        options: [
          'They flow through harder, resistant Precambrian crystalline bedrock in broad graded valleys with much lower sediment loads',
          'Peninsular rivers carry five times more glacial silt',
          'Peninsular rivers freeze in summer',
          'Peninsular rivers flow faster than 50 m/s',
        ],
        correctOptionIndex: 0,
        explanation: 'Lower sediment loads and resistant rocky valleys hold Peninsular channels steady compared to heavy-silt Himalayan alluvial rivers.',
        difficulty: 'standard',
      },
    ],
  },
];
