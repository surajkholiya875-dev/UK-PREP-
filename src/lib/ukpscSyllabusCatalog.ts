import { Chapter, Subject, Topic, Unit } from '../types/academic';
import { normalizeTextKey, safeSortOrder } from './syllabusHierarchy';

export interface TopicBlueprint {
  title: string;
  syllabusNotes: string;
}

export interface ChapterBlueprint {
  unitTitle: string;
  unitDescription: string;
  title: string;
  summary: string;
  topics: TopicBlueprint[];
}

export interface SubjectSyllabusPlan {
  subjectId: string;
  subjectTitle: string;
  courseId: string;
  matchedBlueprintName: string | null;
  unitsToCreate: Array<{
    title: string;
    description: string;
    sortOrder: number;
  }>;
  chaptersToCreate: Array<{
    unitTitle: string;
    title: string;
    summary: string;
    sortOrder: number;
  }>;
  topicsToCreate: Array<{
    unitTitle: string;
    chapterTitle: string;
    title: string;
    syllabusNotes: string;
    sortOrder: number;
  }>;
  topicsToPublish: Topic[];
  existingChapterCount: number;
  existingTopicCount: number;
  skippedExistingTopicCount: number;
}

// ---------------------------------------------------------------------------
// Modular UKPSC & Uttarakhand Competitive Syllabus Blueprints
// ---------------------------------------------------------------------------

const UTTARAKHAND_GEOGRAPHY_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Geography of Uttarakhand',
    unitDescription: 'Physiography, drainage, climate, resources, and human geography of Uttarakhand for UKPSC Prelims & Mains.',
    title: 'Location, Extent & Physiographic Divisions of Uttarakhand',
    summary: 'Geographical coordinates, administrative boundaries, and vertical Himalayan relief zones from Trans-Himalaya to Terai.',
    topics: [
      {
        title: 'Geographical Location, Boundaries & Strategic Importance of Uttarakhand',
        syllabusNotes: 'Latitudinal and longitudinal extent, area, international borders with China (Tibet) and Nepal, and inter-state boundaries with Himachal Pradesh and Uttar Pradesh.',
      },
      {
        title: 'Trans-Himalayan & Greater Himalayan Zones (Himadri)',
        syllabusNotes: 'Zaskar and Greater Himalayan ranges, major peaks (Nanda Devi, Kamet, Trishul, Chaukhamba, Panchachuli), and high mountain passes (Mana, Niti, Lipulekh, Kungri-Bingri).',
      },
      {
        title: 'Lesser Himalaya (Himachal) & Shivalik Ranges',
        syllabusNotes: 'Mussoorie, Nag Tibba, and Dudhatoli ranges, structural valleys, Shivalik foothills, and tectonic thrust zones (MCT, MBT, HFT).',
      },
      {
        title: 'Dun Valleys, Bhabar & Terai Plains',
        syllabusNotes: 'Formation and characteristics of Dehradun, Kota, Patli, and Chaukhambha duns; gravelly Bhabar belt and fertile marshy Terai tract.',
      },
    ],
  },
  {
    unitTitle: 'Geography of Uttarakhand',
    unitDescription: 'Physiography, drainage, climate, resources, and human geography of Uttarakhand for UKPSC Prelims & Mains.',
    title: 'Drainage Systems, Glaciers & Himalayan Lakes',
    summary: 'Three major river basins (Ganga, Yamuna, Kali), Panch Prayag confluences, glaciers, and natural lakes.',
    topics: [
      {
        title: 'Bhagirathi-Alaknanda System & Panch Prayag Confluences',
        syllabusNotes: 'Origin and tributaries of Bhagirathi and Alaknanda; Vishnuprayag, Nandprayag, Karnaprayag, Rudraprayag, and Devprayag leading to the Ganga.',
      },
      {
        title: 'Yamuna, Tons & Kali (Sharda) River Systems',
        syllabusNotes: 'Yamunotri and Rupin-Supin (Tons) drainage in western Uttarakhand; Kutiyankti, Dhauli, Gori, and Saryu tributaries of the eastern Kali basin.',
      },
      {
        title: 'Western Ramganga, Kosi & Gaula River Basins',
        syllabusNotes: 'Non-glacial rain-fed and spring-fed rivers originating in Dudhatoli and Kumaon hills; watershed conservation challenges.',
      },
      {
        title: 'Major Glaciers & High-Altitude Glacial Lakes of Uttarakhand',
        syllabusNotes: 'Gangotri, Milam, Pindari, Khatling, Sunderdhunga, and Chorabari glaciers; Nainital, Bhimtal, Naukuchiatal, Roopkund, Hemkund, and Sahastratal.',
      },
    ],
  },
  {
    unitTitle: 'Geography of Uttarakhand',
    unitDescription: 'Physiography, drainage, climate, resources, and human geography of Uttarakhand for UKPSC Prelims & Mains.',
    title: 'Climate, Soils & Natural Vegetation of Uttarakhand',
    summary: 'Altitudinal climate regimes, precipitation patterns, soil profiles, and forest types.',
    topics: [
      {
        title: 'Altitudinal Climatic Zones & Precipitation Patterns',
        syllabusNotes: 'Sub-tropical to alpine and glacial climatic zones, southwest monsoon distribution, winter western disturbances, and micro-climatic variations.',
      },
      {
        title: 'Soil Types, Erosion & Slope Conservation in Uttarakhand',
        syllabusNotes: 'Terai alluvial, Bhabar gravelly, brown forest, mountain podzolic, and alpine meadow soils; terrace farming and soil conservation methods.',
      },
      {
        title: 'Forest Belts, Timber Species & Alpine Bugyals',
        syllabusNotes: 'Tropical moist deciduous (Sal), sub-tropical Chir Pine, temperate Oak (Banj) and Deodar forests, sub-alpine birch, and alpine pastures (Bedni, Dayara, Auli).',
      },
    ],
  },
  {
    unitTitle: 'Geography of Uttarakhand',
    unitDescription: 'Physiography, drainage, climate, resources, and human geography of Uttarakhand for UKPSC Prelims & Mains.',
    title: 'Mineral, Energy & Water Resources of Uttarakhand',
    summary: 'Mineral deposits, hydropower potential, and multipurpose river valley projects.',
    topics: [
      {
        title: 'Distribution of Minerals in Uttarakhand',
        syllabusNotes: 'Limestone, magnesite, dolomite, rock phosphate, soapstone/talc, gypsum, copper, and alluvial gold deposits across districts.',
      },
      {
        title: 'Hydroelectric Projects & Renewable Energy Potential',
        syllabusNotes: 'Tehri, Koteshwar, Maneri Bhali, Vishnuprayag, Srinagar, Lakhwar-Vyasi, Tanakpur, and Dhauliganga projects; micro-hydel and solar policy.',
      },
      {
        title: 'Irrigation Canals, Springs & Drinking Water Schemes',
        syllabusNotes: 'Upper Ganga Canal, Sharda Canal, traditional Naula/Dhara spring rejuvenation, and hill watershed development.',
      },
    ],
  },
  {
    unitTitle: 'Geography of Uttarakhand',
    unitDescription: 'Physiography, drainage, climate, resources, and human geography of Uttarakhand for UKPSC Prelims & Mains.',
    title: 'Population, Tribes, Migration & Transport in Uttarakhand',
    summary: 'Demographic indicators (Census 2011), tribal communities, migration patterns, and connectivity.',
    topics: [
      {
        title: 'Demographic Profile of Uttarakhand (Census 2011)',
        syllabusNotes: 'Population density, decadal growth, sex ratio, child sex ratio, literacy rates, and rural-urban distribution across 13 districts.',
      },
      {
        title: 'Scheduled Tribes & Settlement Patterns of Uttarakhand',
        syllabusNotes: 'Habitat, seasonal transhumance, and socio-economic profile of Bhotia, Jaunsari, Tharu, Buksa, and Raji communities.',
      },
      {
        title: 'Hill Migration, Ghost Villages & Transport Infrastructure',
        syllabusNotes: 'Causes and impacts of out-migration from hill districts, Char Dham All-Weather Road, Rishikesh-Karnaprayag rail project, and airports.',
      },
    ],
  },
];

const INDIAN_WORLD_GEOGRAPHY_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Physical & World Geography',
    unitDescription: 'Core geomorphology, climatology, oceanography, and world regional geography for UKPSC Prelims & Mains.',
    title: 'Geomorphology, Climatology & Oceanography',
    summary: 'Earth processes, atmospheric circulation, monsoon physics, and oceanic dynamics.',
    topics: [
      {
        title: 'Interior of the Earth, Plate Tectonics & Mountain Building',
        syllabusNotes: 'Seismic waves, continental drift, seafloor spreading, plate boundaries, Himalayan orogeny, earthquakes, and volcanism.',
      },
      {
        title: 'Endogenic & Exogenic Landforms (Fluvial, Glacial, Karst, Aeolian)',
        syllabusNotes: 'Weathering, mass wasting, river valleys, moraines, cirques, limestone caverns, and arid landforms.',
      },
      {
        title: 'Atmospheric Structure, Pressure Belts, Cyclones & Global Winds',
        syllabusNotes: 'Insolation, heat budget, planetary winds, jet streams, tropical and temperate cyclones, and Koppen climate classification.',
      },
      {
        title: 'Ocean Floor Relief, Salinity, Currents & Coral Reefs',
        syllabusNotes: 'Continental shelf/slope, temperature and salinity distribution, Atlantic/Pacific/Indian ocean currents, tides, and coral bleaching.',
      },
    ],
  },
  {
    unitTitle: 'Geography of India',
    unitDescription: 'Physiography, drainage, climate, agriculture, and economic geography of India.',
    title: 'Physiography & Drainage Systems of India',
    summary: 'Major physiographic divisions and river basins of India.',
    topics: [
      {
        title: 'The Himalayas & Northern Plains of India',
        syllabusNotes: 'Longitudinal and regional divisions of the Himalayas, major passes, Bhabar-Terai-Bhangar-Khadar divisions of the Indo-Gangetic-Brahmaputra plains.',
      },
      {
        title: 'Peninsular Plateau, Coastal Plains & Island Groups',
        syllabusNotes: 'Deccan Trap, Western and Eastern Ghats, Central Highlands, Konkan/Malabar/Coromandel coasts, Andaman-Nicobar and Lakshadweep.',
      },
      {
        title: 'Himalayan vs Peninsular River Systems',
        syllabusNotes: 'Indus, Ganga, and Brahmaputra systems compared with east-flowing (Godavari, Krishna, Mahanadi, Kaveri) and west-flowing (Narmada, Tapi) rivers.',
      },
    ],
  },
  {
    unitTitle: 'Geography of India',
    unitDescription: 'Physiography, drainage, climate, agriculture, and economic geography of India.',
    title: 'Indian Monsoon, Soils & Natural Vegetation',
    summary: 'Monsoon mechanism, soil taxonomy, and forest biomes across India.',
    topics: [
      {
        title: 'Mechanism of Indian Monsoon, El Nino & Indian Ocean Dipole',
        syllabusNotes: 'ITCZ shift, Tibetan plateau heating, Somali jet, western disturbances, monsoon breaks, and ENSO/IOD impacts on Indian rainfall.',
      },
      {
        title: 'Major Soil Groups & Land Degradation in India',
        syllabusNotes: 'Alluvial, black cotton (regur), red-yellow, laterite, arid, and mountain soils; salinity, erosion, and reclamation.',
      },
      {
        title: 'Natural Vegetation Zones & Forest Resources of India',
        syllabusNotes: 'Tropical evergreen, moist/dry deciduous, thorn, mangrove (Sundarbans), and montane forests; India State of Forest Report metrics.',
      },
    ],
  },
  {
    unitTitle: 'Geography of India',
    unitDescription: 'Physiography, drainage, climate, agriculture, and economic geography of India.',
    title: 'Indian Agriculture, Minerals, Industries & Transport',
    summary: 'Cropping patterns, mineral belts, industrial corridors, and population geography of India.',
    topics: [
      {
        title: 'Agro-Climatic Regions, Cropping Seasons & Irrigation in India',
        syllabusNotes: 'Kharif, Rabi, Zaid crops; rice, wheat, pulses, oilseeds, millets; Green Revolution and micro-irrigation.',
      },
      {
        title: 'Mineral & Energy Belts of India (Coal, Iron, Petroleum, Renewables)',
        syllabusNotes: 'Chotanagpur plateau, Gondwana coal fields, iron ore, bauxite, offshore oil/gas, nuclear and solar energy hubs.',
      },
      {
        title: 'Location of Major Industries, Transport Corridors & Ports',
        syllabusNotes: 'Iron-steel, textile, IT, and petrochemical clusters; Golden Quadrilateral, Dedicated Freight Corridors, major sea ports, and inland waterways.',
      },
      {
        title: 'Demographic Trends, Migration & Urbanization in India',
        syllabusNotes: 'Census 2011 indicators, demographic dividend, rural-urban migration, smart cities, and regional planning.',
      },
    ],
  },
];

const UTTARAKHAND_HISTORY_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'History of Uttarakhand',
    unitDescription: 'Prehistory, ancient and medieval dynasties, colonial rule, and statehood movement of Uttarakhand.',
    title: 'Prehistoric, Protohistoric & Ancient History of Uttarakhand',
    summary: 'Rock art, archaeological cultures, Kuninda coinage, Kalsi edict, and Katyuri rule.',
    topics: [
      {
        title: 'Prehistoric Rock Shelters & Archaeological Remains in Uttarakhand',
        syllabusNotes: 'Lakhudiyar (Almora), Gwarkhya Cave, Kimni, Malari burials, copper hoards, and Painted Grey Ware sites.',
      },
      {
        title: 'Vedic References, Kunindas & Yaudheyas of Uttarakhand',
        syllabusNotes: 'Literary references in Rigveda, Mahabharata, and Skanda Purana (Kedarkhand & Manaskhand); Amoghbhuti coins and Kuninda republic.',
      },
      {
        title: 'Ashokan Rock Edict at Kalsi, Kartarpur & Katyuri Dynasty',
        syllabusNotes: 'Kalsi Pali inscription, Paurava dynasty of Brahmapura (Taleshwar plates), and Katyuri empire of Kartikeyapura & Baijnath.',
      },
    ],
  },
  {
    unitTitle: 'History of Uttarakhand',
    unitDescription: 'Prehistory, ancient and medieval dynasties, colonial rule, and statehood movement of Uttarakhand.',
    title: 'Medieval Kingdoms: Chand Dynasty of Kumaon & Panwar Dynasty of Garhwal',
    summary: 'Political, revenue, and cultural history of Kumaon and Garhwal kingdoms.',
    topics: [
      {
        title: 'Origin, Expansion & Administration of the Chand Dynasty (Kumaon)',
        syllabusNotes: 'Somchand, Garuda Gyanchand, Bharati Chand, Rudra Chand, Baz Bahadur Chand; Chauthan, Doti relations, and land/tax systems.',
      },
      {
        title: 'Panwar (Parmar) Dynasty of Garhwal & Consolidation by Ajaypal',
        syllabusNotes: 'Kanakpal, unification of 52 garhs by Ajaypal, Mahipat Shah, Rani Karnavati, Fateh Shah, and Pradyumna Shah.',
      },
      {
        title: 'Society, Literature, Painting & Land Revenue in Medieval Uttarakhand',
        syllabusNotes: 'Garhwali school of painting (Mola Ram), medieval copper plates, Thokdar/Sayana and Khaikar-Sirtan agrarian hierarchy.',
      },
    ],
  },
  {
    unitTitle: 'History of Uttarakhand',
    unitDescription: 'Prehistory, ancient and medieval dynasties, colonial rule, and statehood movement of Uttarakhand.',
    title: 'Gorkha Rule, Anglo-Gorkha War & British Administration',
    summary: 'Gorkha occupation (1790–1815), Treaty of Sugauli, British Kumaon, and Tehri Riyasat.',
    topics: [
      {
        title: 'Gorkha Invasion, Battle of Khurbura & Treaty of Sugauli (1815)',
        syllabusNotes: 'Gorkha conquest of Kumaon (1790) and Garhwal (1804), Anglo-Gorkha War (Kalunga/Nalapani), and Treaty of Sugauli provisions.',
      },
      {
        title: 'British Kumaon Administration (Gardner, Traill, Batten & Ramsay)',
        syllabusNotes: 'Non-regulation province administration, land settlements (80-sal bandobast), forest reservation policies, and British Garhwal.',
      },
      {
        title: 'Tehri Garhwal Princely State & Administrative Reforms',
        syllabusNotes: 'Sudarshan Shah, Bhawani Shah, Pratap Shah, Kirti Shah, Narendra Shah, Manabendra Shah, and merger with India in 1949.',
      },
    ],
  },
  {
    unitTitle: 'History of Uttarakhand',
    unitDescription: 'Prehistory, ancient and medieval dynasties, colonial rule, and statehood movement of Uttarakhand.',
    title: 'Freedom Struggle, Agrarian Protests & Statehood Movement',
    summary: 'Mass anti-colonial struggles, Praja Mandal, and the Uttarakhand statehood agitation.',
    topics: [
      {
        title: 'Kumaon Parishad & Coolie Begar Movement (1921)',
        syllabusNotes: 'Formation of Almora Akhbar and Kumaon Parishad (1916); Badridutt Pande, Hargovind Pant, and Bageshwar Uttarayani pledge.',
      },
      {
        title: 'Civil Disobedience, Peshawar Incident & Salt Satyagraha in Uttarakhand',
        syllabusNotes: 'Veer Chandra Singh Garhwali, Someshwar/Salt region satyagraha, Shanti Lal Trivedi, and Quit India impact.',
      },
      {
        title: 'Tiladi Kand (1930), Tehri Praja Mandal & Sridev Suman',
        syllabusNotes: 'Dhandhak forest protests, Rawain/Tiladi massacre, Saklana revolt, Kirtinagar agitation, and martyrdom of Sridev Suman (1944).',
      },
      {
        title: 'Uttarakhand Statehood Movement (1994–2000)',
        syllabusNotes: 'Uttarakhand Kranti Dal, Kaushik Committee, Khatima, Mussoorie, and Rampur Tiraha incidents, leading to creation of the 27th state on 9 November 2000.',
      },
    ],
  },
];

const ANCIENT_INDIAN_HISTORY_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Ancient History of India',
    unitDescription: 'Prehistoric cultures, Harappan civilization, Vedic era, and Mauryan-Gupta state systems.',
    title: 'Indus Valley Civilization & Vedic Age',
    summary: 'Harappan urbanism and Early/Later Vedic socio-political transformations.',
    topics: [
      {
        title: 'Prehistoric Cultures & Indus Valley Civilization',
        syllabusNotes: 'Palaeolithic, Mesolithic, Neolithic sites; Harappan town planning, drainage, script, seals, trade, and theories of decline.',
      },
      {
        title: 'Early & Later Vedic Polity, Economy & Literature',
        syllabusNotes: 'Rigvedic Sabha/Samiti, Varna evolution, Upanishads, Brahmanas, Aranyakas, and transition from pastoralism to settled agriculture.',
      },
    ],
  },
  {
    unitTitle: 'Ancient History of India',
    unitDescription: 'Prehistoric cultures, Harappan civilization, Vedic era, and Mauryan-Gupta state systems.',
    title: 'Buddhism, Jainism, Mahajanapadas & Mauryan Empire',
    summary: 'Second urbanization, heterodox philosophies, and Mauryan imperial administration.',
    topics: [
      {
        title: 'Jainism, Buddhism & Heterodox Sects',
        syllabusNotes: 'Teachings of Mahavira and Gautama Buddha, Buddhist councils, Hinayana vs Mahayana, and socio-cultural impact.',
      },
      {
        title: '16 Mahajanapadas, Magadha Rise & Mauryan Administration',
        syllabusNotes: 'Haryanka to Nanda dynasties, Arthashastra & Indica, Ashoka\'s Dhamma, rock/pillar edicts, and Mauryan decline.',
      },
    ],
  },
  {
    unitTitle: 'Ancient History of India',
    unitDescription: 'Prehistoric cultures, Harappan civilization, Vedic era, and Mauryan-Gupta state systems.',
    title: 'Post-Mauryan Kingdoms, Gupta Age & Sangam Era',
    summary: 'Kushanas, Satavahanas, Sangam South India, Gupta synthesis, and Vardhanas.',
    topics: [
      {
        title: 'Post-Mauryan Polities, Silk Route Trade & Sangam Age',
        syllabusNotes: 'Indo-Greeks, Shakas, Kushanas (Kanishka), Satavahanas, Chera-Chola-Pandya Sangam literature, and Gandhara/Mathura art.',
      },
      {
        title: 'Gupta Empire, Harshavardhana & Early South Indian Dynasties',
        syllabusNotes: 'Samudragupta and Chandragupta II, Sanskrit literature, science (Aryabhata), Nalanda, Pallavas, and Chalukyas.',
      },
    ],
  },
];

const MEDIEVAL_INDIAN_HISTORY_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Medieval History of India',
    unitDescription: 'Early medieval polities, Delhi Sultanate, Vijayanagara, Bhakti-Sufi traditions, and the Mughal Empire.',
    title: 'Early Medieval India & Delhi Sultanate',
    summary: 'Tripartite struggle, Chola administration, Sultanate dynasties, and reform movements.',
    topics: [
      {
        title: 'Early Medieval Kingdoms & Chola Local Self-Government',
        syllabusNotes: 'Palas, Pratiharas, Rashtrakutas, Rajputs, and imperial Chola Ur/Sabha village administration and maritime trade.',
      },
      {
        title: 'Delhi Sultanate Administration, Economy & Market Reforms',
        syllabusNotes: 'Mamluk, Khilji (Alauddin price controls), Tughlaq, Sayyid, and Lodi dynasties; Iqta system and central bureaucracy.',
      },
      {
        title: 'Vijayanagara, Bahmani Kingdoms & Bhakti-Sufi Movements',
        syllabusNotes: 'Krishnadevaraya and Nayankara system; Nirguna & Saguna Bhakti saints (Kabir, Nanak, Mirabai, Tulsidas) and Chishti-Suhrawardi Sufis.',
      },
    ],
  },
  {
    unitTitle: 'Medieval History of India',
    unitDescription: 'Early medieval polities, Delhi Sultanate, Vijayanagara, Bhakti-Sufi traditions, and the Mughal Empire.',
    title: 'The Mughal Empire & Rise of Regional Powers',
    summary: 'Mughal expansion, Mansabdari-Jagirdari system, Maratha confederacy, and 18th-century transition.',
    topics: [
      {
        title: 'Mughal Consolidation (Babur to Aurangzeb) & Sur Interregnum',
        syllabusNotes: 'Sher Shah Suri administrative reforms, Akbar\'s Sulh-i-Kul and Rajput policy, Aurangzeb\'s Deccan campaigns.',
      },
      {
        title: 'Mughal Administration, Mansabdari & Agrarian System',
        syllabusNotes: 'Zabt/Dahsala land revenue system, Mansab-Jagir hierarchy, zamindars, and causes of Mughal decline.',
      },
      {
        title: 'Marathas, Sikhs & Autonomous 18th-Century States',
        syllabusNotes: 'Shivaji\'s Ashtapradhan and Chauth-Sardeshmukhi, Peshwa expansion, Sikh Misls, Bengal, Awadh, and Hyderabad.',
      },
    ],
  },
];

const MODERN_INDIAN_HISTORY_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Modern History & National Movement',
    unitDescription: 'British expansion, socio-religious reforms, 1857 revolt, and the Indian freedom struggle.',
    title: 'British Conquest of India & Revolt of 1857',
    summary: 'Colonial expansion, economic impact of British rule, and 19th-century resistance.',
    topics: [
      {
        title: 'Advent of Europeans, Carnatic Wars, Plassey & Buxar',
        syllabusNotes: 'Portuguese, Dutch, English, and French rivalries; Diwani rights of Bengal, Mysore, and Anglo-Maratha/Anglo-Sikh wars.',
      },
      {
        title: 'Colonial Land Revenue & Economic Drain Policies',
        syllabusNotes: 'Permanent Settlement, Ryotwari, Mahalwari systems, deindustrialization, commercialization of agriculture, and Drain of Wealth theory.',
      },
      {
        title: 'Tribal-Peasant Uprisings & The Revolt of 1857',
        syllabusNotes: 'Santhal, Indigo, and Munda revolts; causes, leaders, spread, and administrative aftermath (Government of India Act 1858) of 1857.',
      },
    ],
  },
  {
    unitTitle: 'Modern History & National Movement',
    unitDescription: 'British expansion, socio-religious reforms, 1857 revolt, and the Indian freedom struggle.',
    title: 'Socio-Religious Reform Movements & Early Nationalism',
    summary: '19th-century Indian Renaissance, INC foundation, Moderates, Extremists, and Swadeshi.',
    topics: [
      {
        title: '19th-Century Socio-Religious Reformers & Organizations',
        syllabusNotes: 'Raja Ram Mohan Roy, Ishwar Chandra Vidyasagar, Jyotiba Phule, Swami Dayananda Saraswati, Swami Vivekananda, and Sir Syed Ahmad Khan.',
      },
      {
        title: 'Foundation of Indian National Congress, Moderates & Extremists',
        syllabusNotes: 'Pre-Congress associations, 1885 INC session, Moderate constitutionalism, Lal-Bal-Pal, and Surat Split (1907).',
      },
      {
        title: 'Partition of Bengal, Swadeshi, Home Rule & Lucknow Pact',
        syllabusNotes: '1905 anti-partition agitation, Morley-Minto Reforms (1909), Ghadar movement, Annie Besant & Tilak Home Rule Leagues, 1916 Lucknow Pact.',
      },
    ],
  },
  {
    unitTitle: 'Modern History & National Movement',
    unitDescription: 'British expansion, socio-religious reforms, 1857 revolt, and the Indian freedom struggle.',
    title: 'Gandhian Era, Revolutionary Struggle & Independence (1917–1947)',
    summary: 'Mass movements, constitutional milestones, INA, and transfer of power.',
    topics: [
      {
        title: 'Champaran, Khilafat & Non-Cooperation Movement (1917–1922)',
        syllabusNotes: 'Early Gandhian satyagrahas, Rowlatt Act, Jallianwala Bagh massacre, Non-Cooperation program, and Swarajists.',
      },
      {
        title: 'Simon Commission, Civil Disobedience & Round Table Conferences',
        syllabusNotes: 'Nehru Report, Purna Swaraj (1929), Dandi Salt March, Gandhi-Irwin Pact, Poona Pact, and Government of India Act 1935.',
      },
      {
        title: 'Revolutionary Nationalism & Left-Wing Movements',
        syllabusNotes: 'HSRA (Bhagat Singh, Chandrashekhar Azad), Surya Sen (Chittagong), Congress Socialist Party, and peasant/trade union movements.',
      },
      {
        title: 'Quit India Movement, Subhas Chandra Bose (INA) & Independence',
        syllabusNotes: 'August Offer, Cripps Mission, 1942 Quit India resolution, Azad Hind Fauj, Cabinet Mission, Mountbatten Plan, and Indian Independence Act 1947.',
      },
    ],
  },
];

const INDIAN_POLITY_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Indian Constitution & Polity',
    unitDescription: 'Constitutional framework, rights, union and state institutions, judiciary, federalism, and local bodies.',
    title: 'Historical Evolution, Preamble & Salient Features',
    summary: 'Constitutional acts, Constituent Assembly debates, Preamble, citizenship, and state reorganization.',
    topics: [
      {
        title: 'Constitutional Acts from 1773 to 1947 & Constituent Assembly',
        syllabusNotes: 'Regulating Act 1773, Charter Acts, 1909/1919/1935 Acts, Constituent Assembly committees, and borrowed constitutional features.',
      },
      {
        title: 'The Preamble, Union & Its Territory and Citizenship',
        syllabusNotes: 'Keywords of the Preamble (Sovereign, Socialist, Secular, Democratic, Republic), Articles 1–11, and Citizenship Act provisions.',
      },
      {
        title: 'Amendment Procedure & Basic Structure Doctrine',
        syllabusNotes: 'Article 368 amendment types, Kesavananda Bharati (1973), Minerva Mills, and judicial evolution of Basic Structure.',
      },
    ],
  },
  {
    unitTitle: 'Indian Constitution & Polity',
    unitDescription: 'Constitutional framework, rights, union and state institutions, judiciary, federalism, and local bodies.',
    title: 'Fundamental Rights, DPSPs & Fundamental Duties',
    summary: 'Part III rights, writs, Directive Principles (Part IV), and Part IVA duties.',
    topics: [
      {
        title: 'Right to Equality & Right to Freedom (Articles 14–22)',
        syllabusNotes: 'Rule of law, equality of opportunity, abolition of untouchability, six freedoms (Art. 19), personal liberty (Art. 21), and Right to Education (Art. 21A).',
      },
      {
        title: 'Religious Freedom, Cultural Rights & Constitutional Remedies (Articles 23–35)',
        syllabusNotes: 'Articles 23–30 protections, Article 32 writs (Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto), and Article 31C.',
      },
      {
        title: 'Directive Principles of State Policy & Fundamental Duties',
        syllabusNotes: 'Socialist, Gandhian, and Liberal-Intellectual DPSPs (Articles 36–51), conflict/harmony with Fundamental Rights, and 11 Fundamental Duties (Art. 51A).',
      },
    ],
  },
  {
    unitTitle: 'Indian Constitution & Polity',
    unitDescription: 'Constitutional framework, rights, union and state institutions, judiciary, federalism, and local bodies.',
    title: 'Union & State Executive and Legislatures',
    summary: 'Parliamentary system, President, PM, Governor, CM, Parliament, and State Vidhan Sabhas.',
    topics: [
      {
        title: 'The President, Vice-President, Prime Minister & Union Council of Ministers',
        syllabusNotes: 'Election, powers, ordinance-making (Art. 123), pardoning power, collective responsibility, and role of Prime Minister.',
      },
      {
        title: 'Parliament: Composition, Legislative Procedure, Budget & Committees',
        syllabusNotes: 'Lok Sabha & Rajya Sabha powers, Money vs Financial Bills, parliamentary privileges, Question Hour, Public Accounts & Estimates Committees.',
      },
      {
        title: 'Governor, Chief Minister & State Legislature',
        syllabusNotes: 'Constitutional role and discretion of Governor (Art. 153–167, 200, 356), Legislative Assembly/Council procedures, and Anti-Defection Law (10th Schedule).',
      },
    ],
  },
  {
    unitTitle: 'Indian Constitution & Polity',
    unitDescription: 'Constitutional framework, rights, union and state institutions, judiciary, federalism, and local bodies.',
    title: 'Judiciary, Centre-State Relations & Emergency Provisions',
    summary: 'Supreme Court, High Courts, cooperative federalism, and Articles 352/356/360.',
    topics: [
      {
        title: 'Supreme Court, High Courts & Judicial Review / PIL',
        syllabusNotes: 'Collegium, original/appellate/advisory jurisdiction, Tribunals (Art. 323A/B), Lok Adalats, and Judicial Activism.',
      },
      {
        title: 'Centre-State Legislative, Administrative & Financial Relations',
        syllabusNotes: '7th Schedule lists, Sarkaria & Punchhi Commissions, GST Council (Art. 279A), Finance Commission, and Inter-State Council.',
      },
      {
        title: 'Emergency Provisions (Articles 352, 356 & 360)',
        syllabusNotes: 'National Emergency, President\'s Rule (S.R. Bommai case), Financial Emergency, and impact on Fundamental Rights and federalism.',
      },
    ],
  },
  {
    unitTitle: 'Indian Constitution & Polity',
    unitDescription: 'Constitutional framework, rights, union and state institutions, judiciary, federalism, and local bodies.',
    title: 'Constitutional Bodies & Local Self-Government',
    summary: 'ECI, UPSC, CAG, commissions, and 73rd/74th Constitutional Amendments.',
    topics: [
      {
        title: 'Election Commission, UPSC, SPSC & Comptroller and Auditor General',
        syllabusNotes: 'Appointment, tenure, independence, electoral reforms, and audit accountability under Articles 148, 315, and 324.',
      },
      {
        title: 'Commissions for SCs, STs, Backward Classes & Statutory Watchdogs',
        syllabusNotes: 'NCSC (Art. 338), NCST (338A), NCBC (338B), NHRC, CVC, CIC, NITI Aayog, and Official Language provisions.',
      },
      {
        title: 'Panchayati Raj (73rd Amendment) & Urban Local Bodies (74th Amendment)',
        syllabusNotes: 'Three-tier Panchayati Raj, Gram Sabha, 11th & 12th Schedules, State Election & Finance Commissions, and PESA Act 1996.',
      },
    ],
  },
];

const UTTARAKHAND_POLITY_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Polity & Administration of Uttarakhand',
    unitDescription: 'State constitutional machinery, administrative structure, revenue police, and local governance in Uttarakhand.',
    title: 'Constitutional Setup & State Legislature of Uttarakhand',
    summary: 'UP Reorganization Act 2000, Vidhan Sabha, High Court, and state commissions.',
    topics: [
      {
        title: 'UP Reorganization Act 2000 & State Constitutional Machinery',
        syllabusNotes: 'Creation of Uttarakhand, Governor and Chief Minister roles, Unicameral Vidhan Sabha (70 seats), and Uttarakhand High Court at Nainital.',
      },
      {
        title: 'State Commissions & Constitutional Bodies in Uttarakhand',
        syllabusNotes: 'Uttarakhand Public Service Commission (UKPSC), UKSSSC, State Election Commission, State Finance Commission, Human Rights & Women Commissions.',
      },
    ],
  },
  {
    unitTitle: 'Polity & Administration of Uttarakhand',
    unitDescription: 'State constitutional machinery, administrative structure, revenue police, and local governance in Uttarakhand.',
    title: 'District, Revenue Police & Panchayati Raj Administration in Uttarakhand',
    summary: 'Commissioneries, district/tehsil hierarchy, unique Revenue Police system, and state local bodies.',
    topics: [
      {
        title: 'Divisional, District & Tehsil Administrative Hierarchy',
        syllabusNotes: 'Garhwal and Kumaon divisions, District Magistrate, SDM, Tehsil, Development Blocks, and Nyaya Panchayats across 13 districts.',
      },
      {
        title: 'Revenue Police System of Uttarakhand: Evolution & Reforms',
        syllabusNotes: 'Historical roots under Henry Ramsay (1874), powers of Patwari/Kanungo in hill areas, and recent transition to regular police.',
      },
      {
        title: 'Uttarakhand Panchayati Raj Act 2016 & Urban Local Governance',
        syllabusNotes: 'Gram Panchayat, Kshetra Panchayat, Zila Panchayat, 50% women reservation in PRIs, Nagar Nigam, Nagar Palika, and Van Panchayats.',
      },
    ],
  },
];

const GOVERNANCE_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Governance & Public Policy',
    unitDescription: 'Public policy, transparency laws, welfare delivery, and civil service accountability for UKPSC Mains.',
    title: 'Good Governance, Accountability & Citizen Rights',
    summary: 'Transparency mechanisms, e-Governance, civil services, and statutory welfare.',
    topics: [
      {
        title: 'RTI Act 2005, Citizen Charters & Uttarakhand Right to Service Act',
        syllabusNotes: 'Public accountability tools, Apuni Sarkar e-governance portal, CM Helpline, social audits, and grievance redressal.',
      },
      {
        title: 'Role of Civil Services, NGOs, SHGs & Lokayukta',
        syllabusNotes: 'Civil service neutrality and reforms, self-help groups in hill development, Lokpal & Uttarakhand Lokayukta framework.',
      },
      {
        title: 'Public Policy Formulation, Implementation & E-Governance',
        syllabusNotes: 'Direct Benefit Transfer (DBT), PRAGATI, aspirational districts, and monitoring of welfare delivery in hill states.',
      },
    ],
  },
];

const INTERNATIONAL_RELATIONS_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'International Relations',
    unitDescription: 'India\'s foreign policy, neighbourhood security, bilateral ties, and multilateral groupings.',
    title: 'India\'s Foreign Policy & International Organizations',
    summary: 'Bilateral relations, neighbourhood security, and multilateral groupings.',
    topics: [
      {
        title: 'India & Its Neighbourhood (Strategic Relevance to Uttarakhand)',
        syllabusNotes: 'Relations with Nepal, China, Bhutan, Bangladesh, and Sri Lanka; Himalayan border infrastructure and cross-border cooperation.',
      },
      {
        title: 'Bilateral Relations with Major Powers & Indian Diaspora',
        syllabusNotes: 'India-USA, Russia, Japan, EU, West Asia, Indo-Pacific strategy, and strategic autonomy.',
      },
      {
        title: 'Major Multilateral Groupings & Global Institutions',
        syllabusNotes: 'UN reforms, WTO, IMF/World Bank, G20, BRICS, SCO, BIMSTEC, QUAD, and India\'s Global South diplomacy.',
      },
    ],
  },
];

const UTTARAKHAND_ECONOMY_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Economy of Uttarakhand',
    unitDescription: 'State economic structure, agriculture, SIDCUL industries, tourism, fiscal indicators, and schemes.',
    title: 'Economic Structure, Hill-Plain Divide & Fiscal Profile',
    summary: 'GSDP composition, budget trends, and regional economic disparities.',
    topics: [
      {
        title: 'GSDP Growth, Per Capita Income & Sectoral Composition',
        syllabusNotes: 'Trends in primary, secondary, and tertiary sectors; economic contrast between plain districts (Dehradun, Haridwar, US Nagar) and hill districts.',
      },
      {
        title: 'Uttarakhand State Budget, FRBM & Finance Commission Transfers',
        syllabusNotes: 'State own tax/non-tax revenue, GST compensation, central grants, capital expenditure, and the Green Bonus demand.',
      },
    ],
  },
  {
    unitTitle: 'Economy of Uttarakhand',
    unitDescription: 'State economic structure, agriculture, SIDCUL industries, tourism, fiscal indicators, and schemes.',
    title: 'Agriculture, Horticulture, Industries & Tourism in Uttarakhand',
    summary: 'Mountain farming, SIDCUL hubs, MSMEs, and sustainable tourism.',
    topics: [
      {
        title: 'Mountain Agriculture, Organic Farming & Horticulture',
        syllabusNotes: 'Terrace cultivation, coarse millets (Mandua, Jhangora), apple/tea/apiculture missions, and consolidation of fragmented landholdings (Chakbandi).',
      },
      {
        title: 'SIDCUL Industrial Estates, MSMEs & Start-up Ecosystem',
        syllabusNotes: 'Industrial hubs at Pantnagar, Haridwar, Sitarganj, and Selaqui; One District Two Products (ODOP) and ease of doing business.',
      },
      {
        title: 'Pilgrimage, Adventure & Eco-Tourism Economy',
        syllabusNotes: 'Char Dham circuit, winter/adventure tourism, homestay scheme (Deendayal Upadhyay Griha Awaas Yojana), and carrying capacity.',
      },
    ],
  },
  {
    unitTitle: 'Economy of Uttarakhand',
    unitDescription: 'State economic structure, agriculture, SIDCUL industries, tourism, fiscal indicators, and schemes.',
    title: 'Employment, Welfare Schemes & Rural Livelihoods in Uttarakhand',
    summary: 'State flagship employment, women empowerment, and rural development programs.',
    topics: [
      {
        title: 'Self-Employment, Skill & Rural Livelihood Programs',
        syllabusNotes: 'Mukhyamantri Swarozgar Yojana, Veer Chandra Singh Garhwali Tourism Swarozgar Yojana, Lakhpati Didi, and Hill Migration Prevention initiatives.',
      },
      {
        title: 'Social Welfare, Health & Financial Inclusion Schemes',
        syllabusNotes: 'Atal Ayushman Uttarakhand, Gaura Devi Kanya Dhan, Nanda Gaura Yojana, and cooperative banking networks.',
      },
    ],
  },
];

const INDIAN_ECONOMY_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Indian Economy',
    unitDescription: 'Macroeconomics, monetary/fiscal policy, agriculture, industry, and external sector for UKPSC Prelims & Mains.',
    title: 'National Income, Economic Planning & Inclusive Growth',
    summary: 'GDP accounting, NITI Aayog, poverty estimation, and employment.',
    topics: [
      {
        title: 'National Income Accounting (GDP, GNP, NNP, GVA)',
        syllabusNotes: 'Factor cost vs market price, real vs nominal GDP, GDP deflator, base year methodology, and potential output.',
      },
      {
        title: 'Economic Planning, LPG Reforms (1991) & NITI Aayog',
        syllabusNotes: 'Evolution from Five-Year Plans to NITI Aayog, cooperative federalism, and structural reforms since 1991.',
      },
      {
        title: 'Poverty, Inequality, Unemployment & Human Capital',
        syllabusNotes: 'Tendulkar/Rangarajan committees, Multidimensional Poverty Index, PLFS employment metrics, and demographic dividend.',
      },
    ],
  },
  {
    unitTitle: 'Indian Economy',
    unitDescription: 'Macroeconomics, monetary/fiscal policy, agriculture, industry, and external sector for UKPSC Prelims & Mains.',
    title: 'Money, Banking, Inflation & Capital Markets',
    summary: 'RBI monetary policy tools, banking reforms, inflation indices, and SEBI regulation.',
    topics: [
      {
        title: 'RBI Functions & Monetary Policy Framework',
        syllabusNotes: 'Monetary Policy Committee, Repo, Reverse Repo, SDF, CRR, SLR, Open Market Operations, and inflation targeting.',
      },
      {
        title: 'Inflation Indices (CPI, WPI) & Financial Inclusion',
        syllabusNotes: 'Headline vs core inflation, Jan Dhan-Aadhaar-Mobile (JAM), UPI, priority sector lending, and banking NPA resolution (IBC).',
      },
      {
        title: 'Money Market, Capital Market & Financial Regulators',
        syllabusNotes: 'Treasury bills, government securities (G-Secs), SEBI, IRDAI, PFRDA, and sovereign green bonds.',
      },
    ],
  },
  {
    unitTitle: 'Indian Economy',
    unitDescription: 'Macroeconomics, monetary/fiscal policy, agriculture, industry, and external sector for UKPSC Prelims & Mains.',
    title: 'Public Finance, Union Budget & Taxation',
    summary: 'Budget classification, deficits, FRBM, GST, and Finance Commission.',
    topics: [
      {
        title: 'Government Budgeting, Deficits & FRBM Act',
        syllabusNotes: 'Revenue vs Capital receipts/expenditure, fiscal deficit, revenue deficit, primary deficit, and debt-to-GDP sustainability.',
      },
      {
        title: 'Direct & Indirect Taxes, GST & Finance Commissions',
        syllabusNotes: 'Progressive taxation, CGST/SGST/IGST structure, GST Council, 15th & 16th Finance Commission devolution criteria.',
      },
    ],
  },
  {
    unitTitle: 'Indian Economy',
    unitDescription: 'Macroeconomics, monetary/fiscal policy, agriculture, industry, and external sector for UKPSC Prelims & Mains.',
    title: 'Agriculture, Industry, Infrastructure & External Sector',
    summary: 'Agricultural pricing, industrial policy, logistics, BoP, and international trade.',
    topics: [
      {
        title: 'Agricultural Marketing, MSP, PDS & Food Processing',
        syllabusNotes: 'CACP methodology, e-NAM, FPOs, buffer stocks, food subsidies, and land reforms.',
      },
      {
        title: 'Industrial Policy, MSMEs, Disinvestment & Infrastructure',
        syllabusNotes: 'PLI schemes, Make in India, PM Gati Shakti, PPP models, and national monetization pipeline.',
      },
      {
        title: 'Balance of Payments, Exchange Rate, FDI & WTO',
        syllabusNotes: 'Current vs Capital account, forex reserves, rupee convertibility, WTO Amber/Green/Blue Box subsidies, and FTAs.',
      },
    ],
  },
];

const UTTARAKHAND_ENVIRONMENT_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Environment & Ecology of Uttarakhand',
    unitDescription: 'Protected areas, biodiversity, traditional forest governance, and environmental movements in Uttarakhand.',
    title: 'Biodiversity, National Parks & Protected Areas of Uttarakhand',
    summary: 'Himalayan ecosystems, national parks, wildlife sanctuaries, and biosphere reserves.',
    topics: [
      {
        title: 'National Parks of Uttarakhand (Corbett, Rajaji, Nanda Devi, Valley of Flowers)',
        syllabusNotes: 'Establishment, ecological zones, flagship species (Bengal Tiger, Asian Elephant, Snow Leopard), Gangotri and Govind Pashu Vihar National Parks.',
      },
      {
        title: 'Wildlife Sanctuaries, Biosphere Reserves & Conservation Reserves',
        syllabusNotes: 'Kedarnath, Askot, Binsar, Sonanadi, Nandhaur sanctuaries; Nanda Devi Biosphere Reserve; Asan Conservation Reserve (Ramsar site).',
      },
      {
        title: 'Medicinal Flora, Endemic Fauna & Altitudinal Biodiversity',
        syllabusNotes: 'Brahmakamal, Kutki, Keeda Jadi (Ophiocordyceps), Himalayan Monal, Musk Deer, Bharal, and invasive species threats.',
      },
    ],
  },
  {
    unitTitle: 'Environment & Ecology of Uttarakhand',
    unitDescription: 'Protected areas, biodiversity, traditional forest governance, and environmental movements in Uttarakhand.',
    title: 'Environmental Movements, Van Panchayats & Ecological Challenges',
    summary: 'Chipko legacy, community forestry, forest fires, and fragile Himalayan ecology.',
    topics: [
      {
        title: 'Chipko, Maiti, Raksha Sutra & Beej Bachao Movements',
        syllabusNotes: 'Gaura Devi (Reni village 1974), Sundarlal Bahuguna, Chandi Prasad Bhatt, Kalyan Singh Rawat, and Vijay Jardhari.',
      },
      {
        title: 'Van Panchayats & Community Forest Management in Uttarakhand',
        syllabusNotes: 'Origin under 1931 Kumaon Panchayat Forest Rules, structure, livelihood linkage, and legal governance.',
      },
      {
        title: 'Forest Fires, Human-Wildlife Conflict & Carrying Capacity',
        syllabusNotes: 'Pine needle fires, watershed drying, slope destabilization, and balancing infrastructure with Himalayan ecology.',
      },
    ],
  },
];

const GENERAL_ENVIRONMENT_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Ecology, Biodiversity & Climate Change',
    unitDescription: 'Ecosystem principles, biodiversity conservation, environmental laws, and global climate conventions.',
    title: 'Ecosystems, Biodiversity & Environmental Legislation',
    summary: 'Ecological pyramids, protected categories, Indian green laws, and wetlands.',
    topics: [
      {
        title: 'Ecosystem Structure, Energy Flow & Biogeochemical Cycles',
        syllabusNotes: 'Trophic levels, ecological succession, carbon/nitrogen/phosphorus cycles, ecotones, and indicator species.',
      },
      {
        title: 'Biodiversity Hotspots, IUCN Red List & Conservation Strategies',
        syllabusNotes: 'In-situ vs Ex-situ conservation, Himalayan & Western Ghats hotspots, Project Tiger, Project Elephant, and Ramsar wetlands.',
      },
      {
        title: 'Environmental Laws & Regulatory Institutions in India',
        syllabusNotes: 'Wildlife Protection Act 1972, Forest Conservation Act 1980, Environment Protection Act 1986, NGT, EIA, and Biodiversity Act 2002.',
      },
    ],
  },
  {
    unitTitle: 'Ecology, Biodiversity & Climate Change',
    unitDescription: 'Ecosystem principles, biodiversity conservation, environmental laws, and global climate conventions.',
    title: 'Climate Change, Pollution & Global Treaties',
    summary: 'Greenhouse effect, international summits, pollution control, and green energy.',
    topics: [
      {
        title: 'Climate Change Science, UNFCCC COPs & India\'s Net-Zero Roadmap',
        syllabusNotes: 'Paris Agreement NDCs, Panchamrit targets, Carbon Markets, Loss & Damage Fund, and National Action Plan on Climate Change.',
      },
      {
        title: 'Air, Water, Solid & E-Waste Pollution Management',
        syllabusNotes: 'AQI parameters, CPCB norms, plastic & e-waste rules, Montreal Protocol, Stockholm, Basel, and Minamata Conventions.',
      },
    ],
  },
];

const DISASTER_MANAGEMENT_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Disaster Management',
    unitDescription: 'Himalayan hazards, risk reduction, statutory frameworks, and resilience planning.',
    title: 'Disaster Risk Reduction & Himalayan Hazards',
    summary: 'Earthquakes, landslides, cloudbursts, GLOFs, and NDMA/SDMA institutions.',
    topics: [
      {
        title: 'Classification of Disasters & Seismic Vulnerability of Uttarakhand',
        syllabusNotes: 'Natural vs anthropogenic disasters; Himalayan Seismic Zones IV & V, fault lines, and historical Uttarakhand earthquakes.',
      },
      {
        title: 'Landslides, Cloudbursts, Flash Floods & GLOFs in the Himalayas',
        syllabusNotes: 'Glacial Lake Outburst Floods, Kedarnath 2013 & Chamoli 2021 events, land subsidence (Joshimath), and early warning systems.',
      },
      {
        title: 'Disaster Management Act 2005, NDMA, USDMA & SDRF Framework',
        syllabusNotes: 'Institutional hierarchy (NDMA, SDMA, DDMA), NDRF/SDRF response protocols, and Sendai Framework for Disaster Risk Reduction.',
      },
    ],
  },
];

const UTTARAKHAND_ART_CULTURE_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Art & Culture of Uttarakhand',
    unitDescription: 'Folk traditions, fairs, festivals, temple architecture, crafts, and dialects of Uttarakhand.',
    title: 'Fairs, Festivals, Folk Dances & Music of Uttarakhand',
    summary: 'Cultural calendar, ritual traditions, folk dances, and traditional instruments.',
    topics: [
      {
        title: 'Major Fairs & Religious Gatherings of Uttarakhand',
        syllabusNotes: 'Haridwar Kumbh & Ardh Kumbh, Nanda Devi Raj Jat, Bagwal (Devidhura), Uttarayani (Bageshwar), Gauchar, Jauljibi, and Bissu mela.',
      },
      {
        title: 'Seasonal Festivals & Rituals (Harela, Phool Dei, Ghughutiya, Igas)',
        syllabusNotes: 'Ecological and agricultural significance of Harela, Phool Dei, Makar Sankranti/Ghughutiya, Khatarua, and Igas Bagwal.',
      },
      {
        title: 'Folk Dances, Folk Songs & Traditional Musical Instruments',
        syllabusNotes: 'Chholiya, Jhora, Chanchari, Pandav Nritya, Thadiya, Barada Nati; Jagar tradition; Dhol-Damau, Hurka, Algoza, and Mashak Baja.',
      },
    ],
  },
  {
    unitTitle: 'Art & Culture of Uttarakhand',
    unitDescription: 'Folk traditions, fairs, festivals, temple architecture, crafts, and dialects of Uttarakhand.',
    title: 'Temples, Crafts, Painting & Literature of Uttarakhand',
    summary: 'Himalayan temple styles, folk art (Aipan), Pahadi painting, and regional literature.',
    topics: [
      {
        title: 'Temple Architecture & Sacred Circuits of Uttarakhand',
        syllabusNotes: 'Katyuri & Nagara style stone temples (Jageshwar, Baijnath, Katarmal Sun Temple, Lakhamandal, Kedarnath, Badrinath, Panch Kedar & Panch Badri).',
      },
      {
        title: 'Aipan Folk Art, Wood Carving, Ringal & Traditional Costumes',
        syllabusNotes: 'Aipan ritual motifs (GI-tagged), Garhwali miniature painting (Mola Ram), LIKHAI woodcraft, Ringal bamboo craft, Pichhora, and traditional jewelry.',
      },
      {
        title: 'Kumaoni, Garhwali & Jaunsari Languages and Literature',
        syllabusNotes: 'Classical and modern writers (Gumani Pant, Sumitranandan Pant, Shailesh Matiyani, Gaurda, Narendra Singh Negi, Girish Tiwari Girda).',
      },
    ],
  },
];

const INDIAN_ART_CULTURE_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Indian Art & Heritage',
    unitDescription: 'Indian architecture, sculpture, painting, classical performing arts, and heritage sites.',
    title: 'Indian Architecture, Sculpture & Painting Traditions',
    summary: 'Monumental evolution from Indus seals to Indo-Islamic and modern styles.',
    topics: [
      {
        title: 'Mauryan, Post-Mauryan & Buddhist Cave Architecture',
        syllabusNotes: 'Ashokan pillars, Sanchi stupa, Ajanta, Ellora, Barabar caves, and Gandhara, Mathura, and Amaravati sculptural schools.',
      },
      {
        title: 'Temple Architecture (Nagara, Dravida & Vesara) & Indo-Islamic Heritage',
        syllabusNotes: 'Khajuraho, Konark, Brihadeeswarar, Hoysala temples; Sultanate & Mughal Charbagh, Pietra Dura, and regional forts.',
      },
      {
        title: 'Indian Mural & Miniature Painting Schools',
        syllabusNotes: 'Ajanta & Bagh murals, Pala, Mughal, Rajasthani, and Pahari (Kangra, Basohli, Garhwal) miniature schools.',
      },
    ],
  },
  {
    unitTitle: 'Indian Art & Heritage',
    unitDescription: 'Indian architecture, sculpture, painting, classical performing arts, and heritage sites.',
    title: 'Classical Music, Dances, Languages & UNESCO Sites',
    summary: 'Performing arts, classical languages, philosophical schools, and heritage preservation.',
    topics: [
      {
        title: 'Hindustani & Carnatic Music and Eight Classical Dances',
        syllabusNotes: 'Ragas, Gharanas, Bharatanatyam, Kathak, Kathakali, Kuchipudi, Odissi, Manipuri, Mohiniyattam, and Sattriya.',
      },
      {
        title: 'Indian Philosophy (Shad-Darshana), Classical Languages & UNESCO Heritage',
        syllabusNotes: 'Six orthodox schools, classical languages of India, and UNESCO World Heritage sites including Nanda Devi & Valley of Flowers.',
      },
    ],
  },
];

const GENERAL_SCIENCE_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'General Science',
    unitDescription: 'Core principles of Physics, Chemistry, and Biology tested in UKPSC Prelims & UKSSSC exams.',
    title: 'Physics in Everyday Life',
    summary: 'Motion, optics, electricity, magnetism, heat, and sound.',
    topics: [
      {
        title: 'SI Units, Motion, Gravitation & Work-Energy',
        syllabusNotes: 'Newton\'s laws, Kepler\'s laws, pressure, buoyancy, surface tension, and simple machines.',
      },
      {
        title: 'Optics, Waves & Acoustics',
        syllabusNotes: 'Reflection, refraction, total internal reflection, lenses, human eye defects, sound waves, and Doppler effect.',
      },
      {
        title: 'Heat, Thermodynamics, Electricity & Magnetism',
        syllabusNotes: 'Heat transfer, Ohm\'s law, domestic circuits, electromagnetic induction, semiconductors, and nuclear fission/fusion.',
      },
    ],
  },
  {
    unitTitle: 'General Science',
    unitDescription: 'Core principles of Physics, Chemistry, and Biology tested in UKPSC Prelims & UKSSSC exams.',
    title: 'Chemistry in Everyday Life',
    summary: 'Matter, periodic table, acids-bases, metallurgy, polymers, and everyday compounds.',
    topics: [
      {
        title: 'Atomic Structure, Chemical Bonding & Periodic Trends',
        syllabusNotes: 'Isotopes, isobars, covalent/ionic bonds, pH scale, acids, bases, salts, and buffer solutions.',
      },
      {
        title: 'Metals, Non-Metals, Alloys & Carbon Compounds',
        syllabusNotes: 'Metallurgy, steel/brass/bronze alloys, hydrocarbons, alcohols, soaps, detergents, fertilizers, and polymers.',
      },
    ],
  },
  {
    unitTitle: 'General Science',
    unitDescription: 'Core principles of Physics, Chemistry, and Biology tested in UKPSC Prelims & UKSSSC exams.',
    title: 'Biology, Human Physiology & Public Health',
    summary: 'Cell biology, genetics, human organ systems, nutrition, and diseases.',
    topics: [
      {
        title: 'Cell Biology, Genetics & Plant Physiology',
        syllabusNotes: 'Prokaryotic vs eukaryotic cells, mitosis/meiosis, DNA/RNA, Mendel\'s laws, photosynthesis, and plant hormones.',
      },
      {
        title: 'Human Organ Systems & Endocrine Regulation',
        syllabusNotes: 'Digestive, respiratory, circulatory, excretory, nervous systems, and major endocrine glands/hormones.',
      },
      {
        title: 'Nutrition, Vitamins & Communicable/Lifestyle Diseases',
        syllabusNotes: 'Deficiency disorders, bacterial/viral/protozoan diseases, immunization, antibiotics, and antimicrobial resistance.',
      },
    ],
  },
];

const SCIENCE_TECH_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Science & Technology',
    unitDescription: 'Space, defence, biotechnology, IT, and emerging technologies for UKPSC Mains Paper VI & Prelims.',
    title: 'Space, Defence & Nuclear Technology in India',
    summary: 'ISRO launch vehicles & missions, DRDO systems, and India\'s three-stage nuclear program.',
    topics: [
      {
        title: 'ISRO Launch Vehicles & Space Exploration Missions',
        syllabusNotes: 'PSLV, GSLV Mk-III (LVM3), SSLV, Chandrayaan-3, Aditya-L1, Gaganyaan, NavIC, and private space ecosystem.',
      },
      {
        title: 'Defence Systems (IGMDP) & Nuclear Energy Program',
        syllabusNotes: 'Agni, Prithvi, BrahMos, Akash, S-400, Tejas, submarines; India\'s 3-stage nuclear fuel cycle and thorium utilization.',
      },
    ],
  },
  {
    unitTitle: 'Science & Technology',
    unitDescription: 'Space, defence, biotechnology, IT, and emerging technologies for UKPSC Mains Paper VI & Prelims.',
    title: 'Biotechnology, Digital Technologies & Intellectual Property',
    summary: 'CRISPR, vaccines, AI, quantum computing, cybersecurity, and IPR.',
    topics: [
      {
        title: 'Biotechnology, CRISPR Gene Editing & Healthcare Applications',
        syllabusNotes: 'Recombinant DNA, GM crops, mRNA vaccines, stem cells, genome sequencing, and bio-ethics.',
      },
      {
        title: 'Artificial Intelligence, Quantum Computing, 5G & Cybersecurity',
        syllabusNotes: 'IndiaAI Mission, National Quantum Mission, blockchain, CERT-In, Digital Personal Data Protection framework, and IPR/Patents.',
      },
    ],
  },
];

const UTTARAKHAND_GK_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Uttarakhand State Profile & Institutions',
    unitDescription: 'State identity, divisions, eminent personalities, research institutes, and district-wise GK.',
    title: 'State Profile, Symbols, Awards & Eminent Personalities',
    summary: 'Core state facts, official symbols, state institutions, and notable contributors.',
    topics: [
      {
        title: 'State Formation Facts, Official Symbols & Administrative Overview',
        syllabusNotes: '9 November 2000 formation, state name change (2007), State Animal, Bird, Tree, Flower, Butterfly, Sport, Musical Instrument, and State Song.',
      },
      {
        title: 'Major Research, Academic & Defence Institutions in Uttarakhand',
        syllabusNotes: 'FRI Dehradun, IMA, LBSNAA Mussoorie, Wadia Institute of Himalayan Geology, IIT Roorkee, GBPUAT Pantnagar, ARIES Nainital, and IIRS.',
      },
      {
        title: 'Eminent Personalities, Litterateurs & Padma Awardees of Uttarakhand',
        syllabusNotes: 'Govind Ballabh Pant, Hemwati Nandan Bahuguna, Chandra Singh Garhwali, Gaura Devi, Bachendri Pal, Ruskin Bond, and sports/arts icons.',
      },
    ],
  },
  {
    unitTitle: 'District-wise General Knowledge of Uttarakhand',
    unitDescription: 'Comprehensive profile of all 13 districts across Garhwal and Kumaon divisions.',
    title: 'Garhwal Division (7 Districts)',
    summary: 'District headquarters, geography, heritage, economy, and key institutions of Garhwal.',
    topics: [
      {
        title: 'Dehradun & Haridwar Districts',
        syllabusNotes: 'State capital, Doon valley institutions, Kalsi, Chakrata, Rishikesh, Har-ki-Pauri, BHEL, SIDCUL, and Rajaji National Park.',
      },
      {
        title: 'Tehri Garhwal & Pauri Garhwal Districts',
        syllabusNotes: 'New Tehri, Tehri Dam, Devprayag, Chamba, Lansdowne, Srinagar Garhwal, Kotdwar, and Dudhatoli region.',
      },
      {
        title: 'Uttarkashi, Chamoli & Rudraprayag Districts',
        syllabusNotes: 'Gangotri, Yamunotri, Nehru Institute of Mountaineering, Badrinath, Joshimath, Valley of Flowers, Gopeshwar, Kedarnath, and Triyuginarayan.',
      },
    ],
  },
  {
    unitTitle: 'District-wise General Knowledge of Uttarakhand',
    unitDescription: 'Comprehensive profile of all 13 districts across Garhwal and Kumaon divisions.',
    title: 'Kumaon Division (6 Districts)',
    summary: 'District headquarters, geography, heritage, borders, and economy of Kumaon.',
    topics: [
      {
        title: 'Nainital & Udham Singh Nagar Districts',
        syllabusNotes: 'Nainital lakes, High Court, Haldwani, Ramnagar/Corbett, Rudrapur, Pantnagar University, Kashipur, and Nanakmatta.',
      },
      {
        title: 'Almora & Bageshwar Districts',
        syllabusNotes: 'Almora cultural heritage, Katarmal, Jageshwar, Ranikhet, Dwarahat, Baghnath temple, Saryu-Gomti confluence, and Baijnath.',
      },
      {
        title: 'Pithoragarh & Champawat Districts',
        syllabusNotes: 'International borders (China & Nepal), Lipulekh, Milam, Askot, Adi Kailash, Lohaghat, Mayawati Ashram, Purnagiri, and Tanakpur.',
      },
    ],
  },
];

const UTTARAKHAND_DISTRICTS_DETAILED_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'District-wise General Knowledge (13 Districts)',
    unitDescription: 'Individual district profiles across Garhwal and Kumaon divisions.',
    title: 'Garhwal Division Districts (7 Districts)',
    summary: 'Detailed district profiles for Dehradun, Haridwar, Tehri, Pauri, Uttarkashi, Chamoli, and Rudraprayag.',
    topics: [
      { title: 'Dehradun District Profile', syllabusNotes: 'Area, tehsils, blocks, rivers (Tons, Asan, Song), FRI, IMA, Tapkeshwar, Sahastradhara, and Kalsi.' },
      { title: 'Haridwar District Profile', syllabusNotes: 'Kumbh city, Shivalik & Ganga plains, Roorkee (IIT, CBRI), BHEL Ranipur, Piran Kaliyar, and SIDCUL.' },
      { title: 'Tehri Garhwal District Profile', syllabusNotes: 'Old & New Tehri, Bhagirathi-Bhilangana, Tehri Dam, Devprayag, Surkanda Devi, and Ghansali.' },
      { title: 'Pauri Garhwal District Profile', syllabusNotes: 'Alaknanda-Nayar rivers, Srinagar, Lansdowne, Kotdwar, Tarkeshwar, Khirsu, and Binsar Mahadev.' },
      { title: 'Uttarkashi District Profile', syllabusNotes: 'Gangotri, Yamunotri, Harsil, Barkot, Maneri Bhali, Dodital, Nachiketa Tal, and border passes.' },
      { title: 'Chamoli District Profile', syllabusNotes: 'Gopeshwar, Badrinath, Mana, Joshimath, Auli, Hemkund, Valley of Flowers, Roopkund, and Gairsain (summer capital).' },
      { title: 'Rudraprayag District Profile', syllabusNotes: 'Mandakini-Alaknanda confluence, Kedarnath, Guptkashi, Ukhimath, Chopta-Tungnath, and Deoria Tal.' },
    ],
  },
  {
    unitTitle: 'District-wise General Knowledge (13 Districts)',
    unitDescription: 'Individual district profiles across Garhwal and Kumaon divisions.',
    title: 'Kumaon Division Districts (6 Districts)',
    summary: 'Detailed district profiles for Nainital, Almora, Pithoragarh, Udham Singh Nagar, Bageshwar, and Champawat.',
    topics: [
      { title: 'Nainital District Profile', syllabusNotes: 'Lake district (Naini, Bhimtal, Naukuchiatal, Sattal), Haldwani, Kathgodam, Kaladhungi, Mukteshwar (IVRI), and ARIES.' },
      { title: 'Almora District Profile', syllabusNotes: 'Kosi-Suyal rivers, Lakhudiyar, Jageshwar, Katarmal, Kasar Devi, Ranikhet, Someshwar, and Syalde Bikhauti.' },
      { title: 'Pithoragarh District Profile', syllabusNotes: 'Saur Valley, Kali-Gori-Ramganga East, Dharchula, Munsiyari, Patal Bhuvaneshwar, Narayan Ashram, and Jauljibi.' },
      { title: 'Udham Singh Nagar District Profile', syllabusNotes: 'Terai agricultural bowl, Rudrapur, GBPUAT Pantnagar, Kashipur, Khatima, Bazpur, and Nanakmatta.' },
      { title: 'Bageshwar District Profile', syllabusNotes: 'Saryu-Gomti confluence, Uttarayani Fair, Baijnath, Pindari/Sunderdhunga/Kafni glaciers, and soapstone reserves.' },
      { title: 'Champawat District Profile', syllabusNotes: 'Chand dynasty early capital, Baleshwar temple, Lohaghat, Devidhura, Abbot Mount, Purnagiri, and Pancheshwar.' },
    ],
  },
];

const UTTARAKHAND_CURRENT_AFFAIRS_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Uttarakhand Current Affairs',
    unitDescription: 'State legislation, budgets, welfare programs, infrastructure, and state honors.',
    title: 'Uttarakhand Policy, Budget & Legislative Updates',
    summary: 'Major state bills, annual budget highlights, and flagship governance initiatives.',
    topics: [
      {
        title: 'Uttarakhand State Budget, Economic Survey & Fiscal Initiatives',
        syllabusNotes: 'Key sectoral allocations, capital infrastructure, GSDP growth estimates, and green development targets.',
      },
      {
        title: 'Major State Legislation & Governance Reforms',
        syllabusNotes: 'Uniform Civil Code (Uttarakhand), Anti-Copying Act (Competitive Exams Ordinance/Act), Land & Anti-Encroachment updates.',
      },
      {
        title: 'State Infrastructure, Tourism, Sports & Awards',
        syllabusNotes: 'National Games hosted in Uttarakhand, heli-services, ropeways, GI tags, and state award recipients.',
      },
    ],
  },
];

const GENERAL_CURRENT_AFFAIRS_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'National & International Current Affairs',
    unitDescription: 'National policies, constitutional developments, global summits, science, and indices.',
    title: 'National Policies, Judgments, Economy & Summits',
    summary: 'High-yield national and global events for UKPSC Prelims and Mains.',
    topics: [
      {
        title: 'Union Budget, Economic Survey & Major Indices/Reports',
        syllabusNotes: 'Key fiscal figures, NITI Aayog reports, global rankings (HDI, GII, Hunger, Climate Performance), and RBI updates.',
      },
      {
        title: 'Important Constitutional Amendments, Bills & Supreme Court Judgments',
        syllabusNotes: 'Landmark judicial rulings, new criminal laws (BNS, BNSS, BSA), and parliamentary enactments.',
      },
      {
        title: 'International Summits, Bilateral Visits, Defence Exercises & Space Milestones',
        syllabusNotes: 'G20, BRICS, SCO, COP summits, joint military exercises, Nobel Prizes, Padma Awards, and ISRO/DRDO launches.',
      },
    ],
  },
];

const GENERAL_HINDI_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'General Hindi (सामान्य हिंदी)',
    unitDescription: 'Grammar, vocabulary, comprehension, and official drafting for UKPSC Mains & UKSSSC exams.',
    title: 'हिंदी वर्णमाला, संधि, समास एवं व्याकरण',
    summary: 'Core Hindi phonology, word formation, and grammatical syntax.',
    topics: [
      {
        title: 'वर्ण विचार, वर्तनी एवं उच्चारण स्थान (Phonology & Spelling)',
        syllabusNotes: 'स्वर-व्यंजन वर्गीकरण, अल्पप्राण-महाप्राण, अघोष-सघोष, अनुस्वार-अनुनासिक तथा शुद्ध वर्तनी।',
      },
      {
        title: 'संधि, समास, उपसर्ग एवं प्रत्यय (Sandhi, Samas & Affixes)',
        syllabusNotes: 'स्वर-व्यंजन-विसर्ग संधि, तत्पुरुष-कर्मधारय-द्वंद्व-द्विगु-बहुव्रीहि-अव्ययीभाव समास, तथा उपसर्ग-प्रत्यय।',
      },
      {
        title: 'शब्द भेद: संज्ञा, सर्वनाम, विशेषण, क्रिया, अव्यय एवं कारक',
        syllabusNotes: 'विकारी-अविकारी शब्द, लिंग, वचन, काल, वाच्य, कारक चिह्न तथा वाक्य रचना व शुद्धि।',
      },
    ],
  },
  {
    unitTitle: 'General Hindi (सामान्य हिंदी)',
    unitDescription: 'Grammar, vocabulary, comprehension, and official drafting for UKPSC Mains & UKSSSC exams.',
    title: 'शब्द संपदा, अलंकार एवं मुहावरे',
    summary: 'Vocabulary enrichment, figures of speech, and idiomatic usage.',
    topics: [
      {
        title: 'तत्सम-तद्भव, देशज-विदेशज, पर्यायवाची एवं विलोम शब्द',
        syllabusNotes: 'तत्सम से तद्भव रूपांतरण नियम, प्रमुख पर्यायवाची, विलोम, अनेकार्थी तथा समश्रुत भिन्नार्थक शब्द।',
      },
      {
        title: 'वाक्यांश के लिए एक शब्द, मुहावरे एवं लोकोक्तियाँ',
        syllabusNotes: 'प्रशासनिक व परीक्षा उपयोगी वाक्यांश, मुहावरों का सटीक वाक्य प्रयोग एवं लोकोक्तियों का अर्थ।',
      },
      {
        title: 'रस, छंद, अलंकार एवं हिंदी भाषा का विकास',
        syllabusNotes: 'शब्दालंकार व अर्थालंकार, प्रमुख रस व छंद, संविधान की 8वीं अनुसूची एवं देवनागरी लिपि का विकास।',
      },
    ],
  },
  {
    unitTitle: 'General Hindi (सामान्य हिंदी)',
    unitDescription: 'Grammar, vocabulary, comprehension, and official drafting for UKPSC Mains & UKSSSC exams.',
    title: 'अपठित गद्यांश, संक्षेपण एवं सरकारी पत्र लेखन',
    summary: 'Mains précis writing, comprehension, and official administrative correspondence.',
    topics: [
      {
        title: 'अपठित गद्यांश, भावार्थ एवं संक्षेपण (Comprehension & Précis)',
        syllabusNotes: 'शीर्षक चयन, रेखांकित अंश की व्याख्या तथा एक-तिहाई शब्दों में सार-लेखन (संक्षेपण)।',
      },
      {
        title: 'शासकीय पत्र, अर्द्धशासकीय पत्र, कार्यालय ज्ञापन एवं परिपत्र',
        syllabusNotes: 'अधिसूचना, विज्ञप्ति, अनुस्मारक, टिप्पणी एवं प्रारूपण (Noting & Drafting) तथा प्रशासनिक शब्दावली।',
      },
    ],
  },
];

const GENERAL_ENGLISH_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'General English',
    unitDescription: 'Grammar, vocabulary, comprehension, and precis/letter drafting for UKPSC & UKSSSC.',
    title: 'English Grammar & Sentence Structure',
    summary: 'Parts of speech, tenses, voice, narration, and sentence correction.',
    topics: [
      {
        title: 'Parts of Speech, Articles, Prepositions & Determiners',
        syllabusNotes: 'Noun/pronoun usage, fixed prepositions, modals, adjectives, adverbs, and error spotting.',
      },
      {
        title: 'Tenses, Subject-Verb Agreement & Conditionals',
        syllabusNotes: 'Sequence of tenses, concord rules, active-passive voice, and direct-indirect narration.',
      },
      {
        title: 'Clauses, Transformation & Synthesis of Sentences',
        syllabusNotes: 'Simple, compound, and complex sentences; modifiers, parallelism, and punctuation.',
      },
    ],
  },
  {
    unitTitle: 'General English',
    unitDescription: 'Grammar, vocabulary, comprehension, and precis/letter drafting for UKPSC & UKSSSC.',
    title: 'Vocabulary, Comprehension & Official Drafting',
    summary: 'Idioms, one-word substitution, reading comprehension, precis, and formal letters.',
    topics: [
      {
        title: 'Synonyms, Antonyms, One-Word Substitution & Idioms',
        syllabusNotes: 'High-frequency competitive vocabulary, phrasal verbs, homonyms, and contextual word usage.',
      },
      {
        title: 'Reading Comprehension, Precis Writing & Formal Correspondence',
        syllabusNotes: 'Inference-based comprehension, one-third precis structuring, official letters, and administrative reports.',
      },
    ],
  },
];

const CSAT_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'CSAT & Aptitude (Prelims Paper II)',
    unitDescription: 'Quantitative aptitude, logical reasoning, data interpretation, and comprehension for UKPSC Paper II.',
    title: 'Quantitative Aptitude & Data Interpretation',
    summary: 'Arithmetic, algebra, mensuration, and tabular/graphical data analysis.',
    topics: [
      {
        title: 'Number System, HCF-LCM, Simplification & Averages',
        syllabusNotes: 'Divisibility rules, remainder theorem, fractions, ratios, proportions, and weighted averages.',
      },
      {
        title: 'Percentages, Profit-Loss, Simple/Compound Interest & Time-Work',
        syllabusNotes: 'Successive percentage changes, partnerships, pipes-cisterns, and time-speed-distance problems.',
      },
      {
        title: 'Permutations, Combinations, Probability & Mensuration',
        syllabusNotes: 'Counting principles, basic probability, 2D/3D areas and volumes, and Venn diagrams.',
      },
      {
        title: 'Data Interpretation (Tables, Bar Graphs, Line & Pie Charts)',
        syllabusNotes: 'Percentage growth, ratio comparison, and multi-variable chart interpretation.',
      },
    ],
  },
  {
    unitTitle: 'CSAT & Aptitude (Prelims Paper II)',
    unitDescription: 'Quantitative aptitude, logical reasoning, data interpretation, and comprehension for UKPSC Paper II.',
    title: 'Logical Reasoning & Analytical Ability',
    summary: 'Verbal and non-verbal reasoning, puzzles, and decision making.',
    topics: [
      {
        title: 'Number/Letter Series, Analogies & Coding-Decoding',
        syllabusNotes: 'Pattern recognition, classification, odd-one-out, and symbolic operations.',
      },
      {
        title: 'Syllogisms, Blood Relations, Direction Sense & Clocks/Calendars',
        syllabusNotes: 'Deductive logic, family trees, angular turns, and calendar day calculations.',
      },
      {
        title: 'Seating Arrangements, Puzzles & Administrative Decision Making',
        syllabusNotes: 'Linear/circular arrangements, data sufficiency, statement-assumption/conclusion, and ethical problem solving.',
      },
    ],
  },
  {
    unitTitle: 'CSAT & Aptitude (Prelims Paper II)',
    unitDescription: 'Quantitative aptitude, logical reasoning, data interpretation, and comprehension for UKPSC Paper II.',
    title: 'Comprehension & Interpersonal Skills',
    summary: 'Bilingual comprehension passages and communication aptitude.',
    topics: [
      {
        title: 'Reading Comprehension (Inference, Assumption & Main Idea)',
        syllabusNotes: 'Identifying author tone, corollaries, logical assumptions, and summary conclusions.',
      },
      {
        title: 'Interpersonal & Communication Skills',
        syllabusNotes: 'Active listening, administrative communication channels, conflict resolution, and team coordination.',
      },
    ],
  },
];

const INDIAN_SOCIETY_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Indian Society & Social Change',
    unitDescription: 'Social structure, diversity, women empowerment, urbanization, and regional social dynamics.',
    title: 'Structure & Diversity of Indian Society',
    summary: 'Unity in diversity, family/caste transformations, women issues, and tribal communities.',
    topics: [
      {
        title: 'Salient Features of Indian Society & Cultural Diversity',
        syllabusNotes: 'Linguistic, religious, and regional pluralism; caste, class, kinship, and changing family structures.',
      },
      {
        title: 'Role of Women, Women\'s Organizations & Gender Issues',
        syllabusNotes: 'Women in Uttarakhand hill economy, self-help groups, gender parity, and statutory empowerment measures.',
      },
      {
        title: 'Urbanization, Globalization, Regionalism & Communalism',
        syllabusNotes: 'Impact of globalization on Indian and Himalayan society, urban slums, secularism, and social cohesion.',
      },
    ],
  },
];

const SOCIAL_JUSTICE_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Social Justice & Welfare Mechanisms',
    unitDescription: 'Welfare policies, human development, and safeguards for vulnerable groups.',
    title: 'Vulnerable Sections, Welfare Schemes & Social Infrastructure',
    summary: 'Health, education, poverty alleviation, and constitutional safeguards.',
    topics: [
      {
        title: 'Welfare Mechanisms for SCs, STs, OBCs, Minorities & PwDs',
        syllabusNotes: 'Constitutional safeguards, reservation policies, Tribal Sub-Plan, and state-level social security pensions.',
      },
      {
        title: 'Health, Education, Nutrition & Human Resource Development',
        syllabusNotes: 'NEP 2020, Ayushman Bharat, POSHAN Abhiyaan, maternal/child health, and rural healthcare challenges in hill states.',
      },
      {
        title: 'Poverty, Hunger & Civil Society Initiatives',
        syllabusNotes: 'Food Security Act 2013, MGNREGA, pressure groups, and accountability in welfare delivery.',
      },
    ],
  },
];

const ETHICS_AND_ESSAY_CHAPTERS: ChapterBlueprint[] = [
  {
    unitTitle: 'Ethics, Integrity & Aptitude',
    unitDescription: 'Ethical philosophy, civil service values, emotional intelligence, probity, and administrative case studies.',
    title: 'Ethics, Human Interface & Civil Service Values',
    summary: 'Foundational ethics, attitude, emotional intelligence, and public service integrity.',
    topics: [
      {
        title: 'Essence, Determinants & Dimensions of Ethics in Human Actions',
        syllabusNotes: 'Private vs public ethics, role of family, society, and educational institutions; contributions of Indian & Western thinkers.',
      },
      {
        title: 'Attitude, Aptitude & Emotional Intelligence in Administration',
        syllabusNotes: 'Moral and political attitudes, persuasion, integrity, impartiality, objectivity, empathy, and compassion towards weaker sections.',
      },
      {
        title: 'Public/Civil Service Values, Probity & Ethical Dilemmas',
        syllabusNotes: 'Codes of ethics & conduct, conflict of interest, transparency, work culture, quality of service delivery, and RTI/citizen charters.',
      },
      {
        title: 'Applied Administrative Case Studies',
        syllabusNotes: 'Structured stakeholder analysis, ethical frameworks, and practical solutions for district & Himalayan governance dilemmas.',
      },
    ],
  },
  {
    unitTitle: 'Essay & Mains Answer Writing',
    unitDescription: 'Structured essay drafting and analytical answer presentation for UKPSC Mains.',
    title: 'Essay Planning & UKPSC Mains Writing Craft',
    summary: 'Thematic essays on Uttarakhand, society, economy, environment, and governance.',
    topics: [
      {
        title: 'Structuring Philosophical, Socio-Economic & Governance Essays',
        syllabusNotes: 'Brainstorming dimensions (PESTEL/historical-ethical), cohesive transitions, data/committee citations, and balanced conclusions.',
      },
      {
        title: 'Uttarakhand-Centric Essay Themes (Ecology, Migration & Tourism)',
        syllabusNotes: 'Sustainable Himalayan development, reverse migration, hill agriculture, disaster resilience, and cultural heritage.',
      },
      {
        title: 'Directive Words & Time Management in Mains Answer Writing',
        syllabusNotes: 'Handling Discuss, Examine, Critically Analyze, Evaluate, and Elucidate in 50, 125, and 250-word answers.',
      },
    ],
  },
];

const EXTRA_SUBJECT_BLUEPRINTS: Record<string, ChapterBlueprint[]> = {
  'world history': [
    {
      unitTitle: 'World History',
      unitDescription: 'Industrial Revolution, world wars, decolonization, and cold war developments.',
      title: 'Modern World Transformations',
      summary: 'Revolutions, imperialism, global conflicts, and post-war order.',
      topics: [
        { title: 'Industrial Revolution, Enlightenment & French/American Revolutions', syllabusNotes: 'Rise of capitalism, nationalism in Europe, and political revolutions of the 18th–19th centuries.' },
        { title: 'World Wars I & II, Russian Revolution & Inter-War Crisis', syllabusNotes: 'Causes, Treaty of Versailles, Great Depression, fascism, and formation of the United Nations.' },
        { title: 'Decolonization, Cold War & Fall of the USSR', syllabusNotes: 'Non-Aligned Movement (NAM), Afro-Asian independence, and emergence of a multipolar world.' },
      ],
    },
  ],
  'internal security': [
    {
      unitTitle: 'Internal Security',
      unitDescription: 'Border security, cyber security, counter-extremism, and intelligence coordination.',
      title: 'India\'s Internal Security Challenges & Border Management',
      summary: 'Border management (relevant to Himalayan borders), cyber defence, and security forces.',
      topics: [
        { title: 'Himalayan & Coastal Border Management Challenges', syllabusNotes: 'Role of ITBP, SSB, BSF, Vibrant Villages Programme, and infrastructure along China/Nepal borders.' },
        { title: 'Cyber Security, Money Laundering & Terror Financing', syllabusNotes: 'Critical information infrastructure, PMLA, FATF, and state-centre intelligence coordination.' },
        { title: 'Left-Wing Extremism, Insurgency & Security Forces Mandate', syllabusNotes: 'Developmental and security approach to internal stability and disaster/police modernization.' },
      ],
    },
  ],
  'computer awareness': [
    {
      unitTitle: 'Computer & Digital Literacy',
      unitDescription: 'Computer fundamentals, networking, MS Office, and cyber safety for UKSSSC & RO/ARO.',
      title: 'Computer Fundamentals, Software & Networking',
      summary: 'Hardware, operating systems, office productivity, internet, and cybersecurity.',
      topics: [
        { title: 'Computer Architecture, Memory & Input/Output Devices', syllabusNotes: 'CPU, RAM/ROM, cache, storage hierarchy, and generations of computers.' },
        { title: 'Operating Systems, MS Office & Database Basics', syllabusNotes: 'Windows/Linux basics, Word, Excel formulas, PowerPoint shortcuts, and DBMS concepts.' },
        { title: 'Internet Protocols, E-Governance & Cyber Threats', syllabusNotes: 'TCP/IP, HTTP/HTTPS, LAN/WAN, malware, phishing, digital signatures, and IT Act 2000.' },
      ],
    },
  ],
  'agriculture and rural development': [
    {
      unitTitle: 'Agriculture & Rural Development',
      unitDescription: 'Agronomy, hill farming, rural institutions, and rural welfare schemes.',
      title: 'Indian & Hill Agriculture and Rural Institutions',
      summary: 'Crop science, cooperative banking, and rural development administration.',
      topics: [
        { title: 'Soil Health, Crop Production & Hill Farming Systems', syllabusNotes: 'Integrated nutrient management, organic certification, horticulture, and animal husbandry.' },
        { title: 'Rural Credit, Cooperatives, NABARD & Panchayati Raj', syllabusNotes: 'PACS, Kisan Credit Card, FPOs, and rural infrastructure development.' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Subject Blueprint Resolver
// ---------------------------------------------------------------------------

export function resolveSyllabusBlueprintsForSubject(subjectTitle: string): {
  matchedName: string | null;
  chapters: ChapterBlueprint[];
} {
  const key = normalizeTextKey(subjectTitle);
  if (!key) return { matchedName: null, chapters: [] };

  // Split Uttarakhand / Individual Subject Matches
  if (key === 'geography of uttarakhand' || key === 'uttarakhand geography') {
    return { matchedName: 'Geography of Uttarakhand', chapters: UTTARAKHAND_GEOGRAPHY_CHAPTERS };
  }
  if (key === 'indian geography' || key === 'indian and world geography' || key === 'physical geography' || key === 'world geography') {
    return { matchedName: 'Indian & Physical Geography', chapters: INDIAN_WORLD_GEOGRAPHY_CHAPTERS };
  }
  if (key === 'geography') {
    return {
      matchedName: 'Geography (Uttarakhand + India & World)',
      chapters: [...UTTARAKHAND_GEOGRAPHY_CHAPTERS, ...INDIAN_WORLD_GEOGRAPHY_CHAPTERS],
    };
  }

  if (key === 'history of uttarakhand' || key === 'uttarakhand history') {
    return { matchedName: 'History of Uttarakhand', chapters: UTTARAKHAND_HISTORY_CHAPTERS };
  }
  if (key === 'ancient indian history' || key === 'ancient history') {
    return { matchedName: 'Ancient Indian History', chapters: ANCIENT_INDIAN_HISTORY_CHAPTERS };
  }
  if (key === 'medieval indian history' || key === 'medieval history') {
    return { matchedName: 'Medieval Indian History', chapters: MEDIEVAL_INDIAN_HISTORY_CHAPTERS };
  }
  if (key === 'modern indian history' || key === 'modern history' || key === 'indian national movement') {
    return { matchedName: 'Modern Indian History', chapters: MODERN_INDIAN_HISTORY_CHAPTERS };
  }
  if (key === 'indian history') {
    return {
      matchedName: 'Indian History (Ancient, Medieval & Modern)',
      chapters: [
        ...ANCIENT_INDIAN_HISTORY_CHAPTERS,
        ...MEDIEVAL_INDIAN_HISTORY_CHAPTERS,
        ...MODERN_INDIAN_HISTORY_CHAPTERS,
      ],
    };
  }
  if (key === 'history') {
    return {
      matchedName: 'History (Uttarakhand + Ancient, Medieval & Modern India)',
      chapters: [
        ...UTTARAKHAND_HISTORY_CHAPTERS,
        ...ANCIENT_INDIAN_HISTORY_CHAPTERS,
        ...MEDIEVAL_INDIAN_HISTORY_CHAPTERS,
        ...MODERN_INDIAN_HISTORY_CHAPTERS,
      ],
    };
  }

  if (key === 'polity and administration of uttarakhand' || key === 'uttarakhand polity') {
    return { matchedName: 'Polity & Administration of Uttarakhand', chapters: UTTARAKHAND_POLITY_CHAPTERS };
  }
  if (key === 'indian constitution and polity' || key === 'indian polity' || key === 'indian polity and governance') {
    return { matchedName: 'Indian Constitution & Polity', chapters: INDIAN_POLITY_CHAPTERS };
  }
  if (key === 'governance and public policy' || key === 'governance') {
    return { matchedName: 'Governance & Public Policy', chapters: GOVERNANCE_CHAPTERS };
  }
  if (key === 'international relations') {
    return { matchedName: 'International Relations', chapters: INTERNATIONAL_RELATIONS_CHAPTERS };
  }
  if (key === 'polity') {
    return {
      matchedName: 'Polity (Uttarakhand Administration + Indian Constitution + Governance)',
      chapters: [
        ...UTTARAKHAND_POLITY_CHAPTERS,
        ...INDIAN_POLITY_CHAPTERS,
        ...GOVERNANCE_CHAPTERS,
        ...INTERNATIONAL_RELATIONS_CHAPTERS,
      ],
    };
  }

  if (key === 'economy of uttarakhand' || key === 'uttarakhand economy') {
    return { matchedName: 'Economy of Uttarakhand', chapters: UTTARAKHAND_ECONOMY_CHAPTERS };
  }
  if (key === 'indian economy' || key === 'economics') {
    return { matchedName: 'Indian Economy', chapters: INDIAN_ECONOMY_CHAPTERS };
  }
  if (key === 'economy') {
    return {
      matchedName: 'Economy (Uttarakhand + Indian Economy)',
      chapters: [...UTTARAKHAND_ECONOMY_CHAPTERS, ...INDIAN_ECONOMY_CHAPTERS],
    };
  }

  if (key === 'environment and ecology of uttarakhand' || key === 'uttarakhand environment') {
    return { matchedName: 'Environment & Ecology of Uttarakhand', chapters: UTTARAKHAND_ENVIRONMENT_CHAPTERS };
  }
  if (key === 'disaster management') {
    return { matchedName: 'Disaster Management', chapters: DISASTER_MANAGEMENT_CHAPTERS };
  }
  if (key === 'environment' || key === 'environment and ecology' || key === 'ecology and environment') {
    return {
      matchedName: 'Environment (Uttarakhand Ecology + Biodiversity + Disaster Management)',
      chapters: [
        ...UTTARAKHAND_ENVIRONMENT_CHAPTERS,
        ...GENERAL_ENVIRONMENT_CHAPTERS,
        ...DISASTER_MANAGEMENT_CHAPTERS,
      ],
    };
  }

  if (key === 'art and culture of uttarakhand' || key === 'uttarakhand art and culture') {
    return { matchedName: 'Art & Culture of Uttarakhand', chapters: UTTARAKHAND_ART_CULTURE_CHAPTERS };
  }
  if (key === 'art and culture of india' || key === 'indian art and culture') {
    return { matchedName: 'Art & Culture of India', chapters: INDIAN_ART_CULTURE_CHAPTERS };
  }
  if (key === 'art & culture' || key === 'art and culture') {
    return {
      matchedName: 'Art & Culture (Uttarakhand + India)',
      chapters: [...UTTARAKHAND_ART_CULTURE_CHAPTERS, ...INDIAN_ART_CULTURE_CHAPTERS],
    };
  }

  if (key === 'general science') {
    return { matchedName: 'General Science', chapters: GENERAL_SCIENCE_CHAPTERS };
  }
  if (key === 'science and technology' || key === 'science & technology' || key === 'general science and technology') {
    return {
      matchedName: 'Science & Technology',
      chapters: [...GENERAL_SCIENCE_CHAPTERS, ...SCIENCE_TECH_CHAPTERS],
    };
  }

  if (key === 'district-wise general knowledge (13 districts)' || key === 'district-wise general knowledge') {
    return {
      matchedName: 'District-wise General Knowledge (13 Districts)',
      chapters: UTTARAKHAND_DISTRICTS_DETAILED_CHAPTERS,
    };
  }
  if (key === 'uttarakhand general knowledge' || key === 'uttarakhand gk' || key === 'uttarakhand state profile') {
    return { matchedName: 'Uttarakhand General Knowledge', chapters: UTTARAKHAND_GK_CHAPTERS };
  }

  if (key === 'uttarakhand current affairs') {
    return { matchedName: 'Uttarakhand Current Affairs', chapters: UTTARAKHAND_CURRENT_AFFAIRS_CHAPTERS };
  }
  if (key === 'national current affairs') {
    return { matchedName: 'National Current Affairs', chapters: GENERAL_CURRENT_AFFAIRS_CHAPTERS };
  }
  if (key === 'current affairs') {
    return {
      matchedName: 'Current Affairs (Uttarakhand + National & International)',
      chapters: [...UTTARAKHAND_CURRENT_AFFAIRS_CHAPTERS, ...GENERAL_CURRENT_AFFAIRS_CHAPTERS],
    };
  }

  if (key === 'general hindi' || key === 'hindi') {
    return { matchedName: 'General Hindi', chapters: GENERAL_HINDI_CHAPTERS };
  }
  if (key === 'general english' || key === 'english') {
    return { matchedName: 'General English', chapters: GENERAL_ENGLISH_CHAPTERS };
  }
  if (key === 'csat' || key === 'csat and aptitude' || key === 'aptitude' || key === 'logical reasoning' || key === 'quantitative aptitude' || key === 'data interpretation') {
    return { matchedName: 'CSAT & Aptitude', chapters: CSAT_CHAPTERS };
  }
  if (key === 'indian society') {
    return { matchedName: 'Indian Society', chapters: INDIAN_SOCIETY_CHAPTERS };
  }
  if (key === 'social justice') {
    return { matchedName: 'Social Justice', chapters: SOCIAL_JUSTICE_CHAPTERS };
  }
  if (key === 'society & social justice' || key === 'society and social justice') {
    return {
      matchedName: 'Society & Social Justice',
      chapters: [...INDIAN_SOCIETY_CHAPTERS, ...SOCIAL_JUSTICE_CHAPTERS],
    };
  }
  if (key === 'ethics, integrity and aptitude' || key === 'ethics') {
    return { matchedName: 'Ethics, Integrity and Aptitude', chapters: [ETHICS_AND_ESSAY_CHAPTERS[0]] };
  }
  if (key === 'essay and mains answer writing' || key === 'essay') {
    return { matchedName: 'Essay and Mains Answer Writing', chapters: [ETHICS_AND_ESSAY_CHAPTERS[1]] };
  }
  if (key === 'ethics & essay' || key === 'ethics and essay') {
    return { matchedName: 'Ethics & Essay', chapters: ETHICS_AND_ESSAY_CHAPTERS };
  }

  if (EXTRA_SUBJECT_BLUEPRINTS[key]) {
    return { matchedName: subjectTitle, chapters: EXTRA_SUBJECT_BLUEPRINTS[key] };
  }

  // Fuzzy keyword fallback for custom-titled subjects
  if (key.includes('uttarakhand') && key.includes('geog')) {
    return { matchedName: 'Geography of Uttarakhand', chapters: UTTARAKHAND_GEOGRAPHY_CHAPTERS };
  }
  if (key.includes('geog')) {
    return { matchedName: 'Geography', chapters: [...UTTARAKHAND_GEOGRAPHY_CHAPTERS, ...INDIAN_WORLD_GEOGRAPHY_CHAPTERS] };
  }
  if (key.includes('uttarakhand') && key.includes('hist')) {
    return { matchedName: 'History of Uttarakhand', chapters: UTTARAKHAND_HISTORY_CHAPTERS };
  }
  if (key.includes('hist')) {
    return { matchedName: 'History', chapters: [...UTTARAKHAND_HISTORY_CHAPTERS, ...ANCIENT_INDIAN_HISTORY_CHAPTERS, ...MEDIEVAL_INDIAN_HISTORY_CHAPTERS, ...MODERN_INDIAN_HISTORY_CHAPTERS] };
  }
  if (key.includes('polity') || key.includes('constitution')) {
    return { matchedName: 'Polity', chapters: [...UTTARAKHAND_POLITY_CHAPTERS, ...INDIAN_POLITY_CHAPTERS, ...GOVERNANCE_CHAPTERS, ...INTERNATIONAL_RELATIONS_CHAPTERS] };
  }
  if (key.includes('econ')) {
    return { matchedName: 'Economy', chapters: [...UTTARAKHAND_ECONOMY_CHAPTERS, ...INDIAN_ECONOMY_CHAPTERS] };
  }
  if (key.includes('environ') || key.includes('ecolog')) {
    return { matchedName: 'Environment', chapters: [...UTTARAKHAND_ENVIRONMENT_CHAPTERS, ...GENERAL_ENVIRONMENT_CHAPTERS, ...DISASTER_MANAGEMENT_CHAPTERS] };
  }
  if (key.includes('culture') || key.includes('art')) {
    return { matchedName: 'Art & Culture', chapters: [...UTTARAKHAND_ART_CULTURE_CHAPTERS, ...INDIAN_ART_CULTURE_CHAPTERS] };
  }
  if (key.includes('science')) {
    return { matchedName: 'Science & Technology', chapters: [...GENERAL_SCIENCE_CHAPTERS, ...SCIENCE_TECH_CHAPTERS] };
  }
  if (key.includes('hindi')) {
    return { matchedName: 'General Hindi', chapters: GENERAL_HINDI_CHAPTERS };
  }
  if (key.includes('english')) {
    return { matchedName: 'General English', chapters: GENERAL_ENGLISH_CHAPTERS };
  }
  if (key.includes('uttarakhand')) {
    return { matchedName: 'Uttarakhand General Knowledge', chapters: UTTARAKHAND_GK_CHAPTERS };
  }

  return { matchedName: null, chapters: [] };
}

// ---------------------------------------------------------------------------
// Live Firestore Plan Builder (Non-Destructive, ID-Preserving)
// ---------------------------------------------------------------------------

export function buildSyllabusSyncPlans(params: {
  subjects: Subject[];
  units: Unit[];
  chapters: Chapter[];
  topics: Topic[];
}): SubjectSyllabusPlan[] {
  const { subjects, units, chapters, topics } = params;

  const sortedSubjects = [...subjects].sort(
    (a, b) => safeSortOrder(a.sortOrder) - safeSortOrder(b.sortOrder) || a.title.localeCompare(b.title)
  );

  return sortedSubjects.map((subject) => {
    const { matchedName, chapters: blueprintChapters } = resolveSyllabusBlueprintsForSubject(
      subject.title
    );

    const existingUnits = units.filter((u) => u.subjectId === subject.id);
    const existingUnitIds = new Set(existingUnits.map((u) => u.id));

    const existingChapters = chapters.filter(
      (c) => c.subjectId === subject.id || (Boolean(c.unitId) && existingUnitIds.has(c.unitId))
    );
    const existingChapterIds = new Set(existingChapters.map((c) => c.id));

    const existingTopics = topics.filter(
      (t) =>
        t.subjectId === subject.id ||
        (Boolean(t.unitId) && existingUnitIds.has(t.unitId)) ||
        (Boolean(t.chapterId) && existingChapterIds.has(t.chapterId))
    );

    const existingUnitTitles = new Set(existingUnits.map((u) => normalizeTextKey(u.title)));
    const existingChapterTitles = new Set(existingChapters.map((c) => normalizeTextKey(c.title)));
    const existingTopicTitles = new Set(existingTopics.map((t) => normalizeTextKey(t.title)));

    const unitsToCreate: SubjectSyllabusPlan['unitsToCreate'] = [];
    const chaptersToCreate: SubjectSyllabusPlan['chaptersToCreate'] = [];
    const topicsToCreate: SubjectSyllabusPlan['topicsToCreate'] = [];

    const plannedUnitTitles = new Set<string>();
    const plannedChapterTitles = new Set<string>();
    const plannedTopicTitles = new Set<string>();

    let nextUnitOrder =
      existingUnits.reduce((max, item) => Math.max(max, Number(item.sortOrder) || 0), 0) + 1;
    let nextChapterOrder =
      existingChapters.reduce((max, item) => Math.max(max, Number(item.sortOrder) || 0), 0) + 1;
    let nextTopicOrder =
      existingTopics.reduce((max, item) => Math.max(max, Number(item.sortOrder) || 0), 0) + 1;

    let skippedExistingTopicCount = 0;

    for (const bpChapter of blueprintChapters) {
      const unitKey = normalizeTextKey(bpChapter.unitTitle);
      if (!existingUnitTitles.has(unitKey) && !plannedUnitTitles.has(unitKey)) {
        plannedUnitTitles.add(unitKey);
        unitsToCreate.push({
          title: bpChapter.unitTitle,
          description: bpChapter.unitDescription,
          sortOrder: Math.min(nextUnitOrder, 10000),
        });
        nextUnitOrder += 1;
      }

      const chapterKey = normalizeTextKey(bpChapter.title);
      if (!existingChapterTitles.has(chapterKey) && !plannedChapterTitles.has(chapterKey)) {
        plannedChapterTitles.add(chapterKey);
        chaptersToCreate.push({
          unitTitle: bpChapter.unitTitle,
          title: bpChapter.title,
          summary: bpChapter.summary,
          sortOrder: Math.min(nextChapterOrder, 10000),
        });
        nextChapterOrder += 1;
      }

      for (const bpTopic of bpChapter.topics) {
        const topicKey = normalizeTextKey(bpTopic.title);
        if (existingTopicTitles.has(topicKey)) {
          skippedExistingTopicCount += 1;
          continue;
        }
        if (plannedTopicTitles.has(topicKey)) continue;
        plannedTopicTitles.add(topicKey);
        topicsToCreate.push({
          unitTitle: bpChapter.unitTitle,
          chapterTitle: bpChapter.title,
          title: bpTopic.title,
          syllabusNotes: bpTopic.syllabusNotes,
          sortOrder: Math.min(nextTopicOrder, 10000),
        });
        nextTopicOrder += 1;
      }
    }

    const topicsToPublish = existingTopics.filter((t) => !t.isPublished);

    return {
      subjectId: subject.id,
      subjectTitle: subject.title,
      courseId: subject.courseId,
      matchedBlueprintName: matchedName,
      unitsToCreate,
      chaptersToCreate,
      topicsToCreate,
      topicsToPublish,
      existingChapterCount: existingChapters.length,
      existingTopicCount: existingTopics.length,
      skippedExistingTopicCount,
    };
  });
}
