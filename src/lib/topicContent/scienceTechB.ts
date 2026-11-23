import { TopicContentPackage } from './types';

export const SCIENCE_TECH_PART_B: TopicContentPackage[] = [
  {
    topicTitle: 'Human Organ Systems & Endocrine Regulation',
    materialTitle: 'Human Organ Systems & Endocrine Regulation — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Digestive, Circulatory, Nervous, Renal & Endocrine Systems',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Human Organ Systems & Endocrine Regulation

## 1. Digestive, Respiratory & Circulatory Essentials
- **Human Digestion:** Starts in mouth (**Salivary Amylase / Ptyalin** converts starch $\\rightarrow$ maltose); Stomach (**$HCl$** + **Pepsin** digests proteins; **Rennin** coagulates milk protein in infants); **Liver** secretes **Bile** (no enzymes! Emulsifies fats; stored in **Gallbladder**); **Small Intestine** (longest site of complete digestion + villi absorption; **Pancreatic juice**: Trypsin, Amylase, Lipase).
- **Blood & Heart:** **4 chambers** (*double circulation*). **Sinoatrial (SA) Node** = natural **Pacemaker**. Normal adult BP = **120/80 mmHg** (*Sphygmomanometer*); **Platelets (Thrombocytes)** initiate clotting using **Fibrinogen + Vitamin K + $Ca^{2+}$**. **RBCs** lack nuclei in mammals (~120-day lifespan; graveyard = **Spleen**).
- **Respiration & Excretion:** Oxygen carried mostly as **Oxyhaemoglobin**; gas exchange across **Alveoli**. Functional unit of Kidney = **Nephron** (*Bowman’s capsule + glomerulus ultrafiltration*; excretes **Urea** in mammals, birds/reptiles excrete Uric Acid).

## 2. Nervous System & Sensory Organs
- **Brain Divisions:** **Cerebrum** (largest—memory, intelligence, voluntary control), **Cerebellum** (*posture, balance & smooth motor coordination*), **Medulla Oblongata** (*involuntary breathing, heartbeat, blood pressure*), **Hypothalamus** (*body temperature thermostat, hunger, thirst, pituitary link!*).
- **Eye:** Light focused onto **Retina** (**Rods** = dim-light *scotopic* vision using **Rhodopsin/Vitamin A**; **Cones** = colour/bright vision); **Iris** regulates **Pupil** size; **Cornea** is transplanted in eye donation!

## 3. Endocrine System (Ductless Glands & Hormones)
| Gland | Key Hormone(s) | Primary Role & Disorder |
|---|---|---|
| **Pituitary** *("Master Gland")* | **Growth Hormone (GH)**, **TSH**, **Oxytocin** (milk ejection/parturition), **ADH / Vasopressin** (water reabsorption) | Excess GH in youth $\\rightarrow$ **Gigantism**; deficiency $\\rightarrow$ **Dwarfism**; ADH lack $\\rightarrow$ *Diabetes Insipidus* |
| **Thyroid** | **Thyroxine ($T_4/T_3$)** (needs **Iodine!**) | Regulates BMR; Iodine deficiency $\\rightarrow$ **Goitre** (historically prevalent in Himalayan Terai/sub-Himalayan goitre belt!); congenital low $T_4$ $\\rightarrow$ **Cretinism** |
| **Pancreas** *(Mixed Exo+Endo; Islets of Langerhans)* | **Insulin** ($\beta$-cells, lowers blood glucose) & **Glucagon** ($\alpha$-cells, raises glucose) | Insulin deficiency/resistance $\\rightarrow$ **Diabetes Mellitus** |
| **Adrenal** *("3F / Emergency Gland")* | **Adrenaline / Epinephrine** (medulla), **Cortisol & Aldosterone** (cortex) | Triggers **Fight-or-Flight** heart/glucose surge |
| **Pineal** | **Melatonin** | Sleep–wake **circadian rhythm** |

## 4. Key Revision Takeaways
- **Hypothalamus** regulates **body temperature**; **Cerebellum** coordinates **balance**; **SA Node** is the heart's pacemaker.
- **Liver** secretes **Bile** (zero digestive enzymes; emulsifies fats); **Nephron** filters blood in the kidney.
- **Insulin** ($\beta$-cells of pancreas) lowers blood glucose; **Thyroxine** requires **Iodine**; **Cornea** is used in eye transplants.`,
    mcqs: [
      {
        stem: 'Which part of the human brain acts as the primary thermostat regulating **body temperature**, hunger, thirst, and autonomic endocrine control via the pituitary?',
        options: ['Cerebellum', 'Hypothalamus', 'Corpus Callosum', 'Olfactory Lobe'],
        correctOptionIndex: 1,
        explanation: 'The hypothalamus integrates homeostatic drives (thermoregulation, hunger, thirst) and releasing hormones governing the pituitary.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which digestive secretion produced by the **Liver** and concentrated inside the Gallbladder contains **NO digestive enzymes**, yet is vital for emulsifying dietary fats?',
        options: [
          'Gastric juice',
          'Bile juice (bile salts)',
          'Pancreatic trypsin',
          'Salivary amylase',
        ],
        correctOptionIndex: 1,
        explanation: 'Bile salts break large fat globules into tiny droplets so pancreatic lipase can digest them efficiently inside an alkaline duodenum.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the basic structural and functional filtration unit of the human **Kidney**?',
        options: ['Neuron', 'Nephron', 'Alveolus', 'Sarcomere'],
        correctOptionIndex: 1,
        explanation: 'Each kidney contains roughly one million nephrons performing glomerular ultrafiltration, selective tubular reabsorption, and secretion.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which specialized group of cells inside the **Islets of Langerhans** of the pancreas secretes **Insulin** to lower elevated blood glucose levels?',
        options: [
          'Alpha cells',
          'Beta cells',
          'Kupffer cells of liver',
          'Parietal cells',
        ],
        correctOptionIndex: 1,
        explanation: 'Beta cells secrete Insulin (glycogenesis/cellular glucose uptake), whereas Alpha cells secrete Glucagon to raise blood glucose.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which part of the donor human eye is harvested and grafted during standard corneal eye-donation **transplantation**?',
        options: [
          'Complete eyeball retina',
          'Cornea (avascular transparent front layer)',
          'Optic nerve',
          'Vitreous humour',
        ],
        correctOptionIndex: 1,
        explanation: 'Because the clear outer cornea lacks blood vessels, corneal transplants face very low immunological rejection.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why was the sub-Himalayan foothills belt (including historically parts of Uttarakhand and Uttar Pradesh) once termed an endemic **"Goitre Belt"** before iodized salt programs?',
        options: [
          'Excessive iron in air',
          'Glacial/monsoon leaching washed natural **Iodine** out of mountain soils and drinking water, impairing **Thyroxine** synthesis by the thyroid gland',
          'Excess Vitamin C in apples',
          'Overabundance of sea salt',
        ],
        correctOptionIndex: 1,
        explanation: 'Without adequate dietary iodine, the thyroid enlarges compensatorily as Goitre; universal salt iodization dramatically reduced endemic goitre.',
        difficulty: 'standard',
      },
      {
        stem: 'Which brain structure located posteriorly beneath the cerebrum maintains **body posture, equilibrium, and smooth coordination of skeletal muscle movements**?',
        options: ['Medulla Oblongata', 'Cerebellum', 'Pons', 'Pineal Gland'],
        correctOptionIndex: 1,
        explanation: 'Alcohol rapidly depresses the cerebellum, causing staggering gait and slurred coordination; Medulla controls vital involuntary heart/respiration.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which specialized muscular region in the upper wall of the **Right Atrium** generates electrical impulses acting as the heart’s natural **Pacemaker**?',
        options: [
          'Purkinje valve',
          'Sinoatrial (SA) Node',
          'Mitral (Bicuspid) Valve',
          'Aorta',
        ],
        correctOptionIndex: 1,
        explanation: 'The SA node initiates ~72 rhythmic action potentials per minute conducted onward via the AV node and Bundle of His.',
        difficulty: 'standard',
      },
      {
        stem: 'Where are worn-out mammalian Red Blood Cells (RBCs, lacking nuclei with ~120-day lifespan) predominantly broken down and recycled—earning that organ the name **"Graveyard of RBCs"**?',
        options: ['Pancreas', 'Spleen', 'Thyroid', 'Appendix'],
        correctOptionIndex: 1,
        explanation: 'Macrophages in the spleen (and liver) recycle haemoglobin iron while converting heme into bilirubin.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which "Emergency / Fight-or-Flight" hormone secreted by the **Adrenal Medulla** instantaneously accelerates heart rate, blood pressure, and glucose mobilization during sudden danger?',
        options: [
          'Melatonin',
          'Adrenaline (Epinephrine)',
          'Oxytocin',
          'Thyroxine',
        ],
        correctOptionIndex: 1,
        explanation: 'Adrenaline prepares muscles for rapid survival exertion by dilating bronchioles and elevating cardiac output.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which organ in the human body functions simultaneously as BOTH an **Exocrine gland** (digestive enzymes via duct) AND an **Endocrine gland** (hormones straight into blood)?',
        options: [
          'Pituitary Gland',
          'Pancreas (Heterocrine / Mixed Gland)',
          'Parathyroid Gland',
          'Sweat Gland',
        ],
        correctOptionIndex: 1,
        explanation: 'Pancreatic acini secrete digestive juice via the pancreatic duct, while Islets of Langerhans release insulin/glucagon into blood.',
        difficulty: 'foundation',
      },
      {
        stem: 'Deficiency of **Antidiuretic Hormone (ADH / Vasopressin)** from the posterior pituitary prevents kidney tubules from reabsorbing water, triggering excessive dilute urine excretion known as:',
        options: [
          'Diabetes Mellitus',
          'Diabetes Insipidus',
          'Acromegaly',
          'Cushing’s Syndrome',
        ],
        correctOptionIndex: 1,
        explanation: 'Diabetes Mellitus involves insulin/glucose elevation, whereas Diabetes Insipidus involves ADH lack without glucosuria.',
        difficulty: 'standard',
      },
      {
        stem: 'Which protein-digesting enzyme becomes activated in the **acidic stomach** environment (pH ~1.8–2.0, created by Parietal-cell $HCl$) to cleave proteins into peptones?',
        options: ['Salivary Amylase', 'Pepsin', 'Lipase', 'Maltase'],
        correctOptionIndex: 1,
        explanation: 'Inactive Pepsinogen is converted to active Pepsin by gastric $HCl$, which simultaneously kills ingested microbes.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which retinal photoreceptor cells enable clear **colour and sharp daylight vision**, and which enable **dim-light/night vision**?',
        options: [
          'Rods = Colour; Cones = Dim night vision',
          'Cones = Colour/bright light; Rods = Dim-light/night vision (via Vitamin A–derived Rhodopsin)',
          'Pupil = Colour; Cornea = Dim light',
          'Sclera only detects blue',
        ],
        correctOptionIndex: 1,
        explanation: 'Vitamin A deficiency impairs Rhodopsin synthesis inside Rod cells, causing Night Blindness (*Nyctalopia*).',
        difficulty: 'standard',
      },
      {
        stem: 'Which hormone secreted by the **Pineal Gland** rises during darkness to regulate human **sleep–wake circadian rhythms**?',
        options: ['Melatonin', 'Glucagon', 'Calcitonin', 'Progesterone'],
        correctOptionIndex: 0,
        explanation: 'Blue-light exposure from screens late at night suppresses pineal melatonin release, disrupting sleep cycles.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Nutrition, Vitamins & Communicable/Lifestyle Diseases',
    materialTitle: 'Nutrition, Vitamins & Communicable/Lifestyle Diseases — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Vitamins, Deficiency Disorders, Pathogens & Vaccines',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Nutrition, Vitamins & Communicable/Lifestyle Diseases

## 1. Vitamins Classification, Chemical Names & Deficiency Diseases
- **Fat-Soluble Vitamins (Stored in Liver/Adipose):** **A, D, E, K** (*"ADEK"*).
- **Water-Soluble Vitamins (Excreted easily in urine; need daily intake):** **B-Complex & Vitamin C**.

| Vitamin | Chemical Name | Key Sources | Deficiency Disease |
|---|---|---|---|
| **A** | **Retinol** | Carrots, spinach, mango, dairy | **Night Blindness (*Nyctalopia*)** & **Xerophthalmia** |
| **$B_1$** | **Thiamine** | Whole grains, pulses | **Beriberi** (nerve/heart weakness) |
| **$B_2$** | **Riboflavin** | Milk, greens | Cheilosis / cracked lip corners |
| **$B_3$** | **Niacin** | Peanuts, meat, millets | **Pellagra** (*3Ds: Dermatitis, Diarrhoea, Dementia*) |
| **$B_9$** | **Folic Acid** | Leafy greens | **Megaloblastic Anaemia**; neural-tube birth defects |
| **$B_{12}$** | **Cyanocobalamin** *(contains **Cobalt!**)* | Dairy, eggs, meat | **Pernicious Anaemia** |
| **C** | **Ascorbic Acid** *(destroyed by boiling!)* | Amla, citrus, Buransh | **Scurvy** (bleeding gums, delayed wound healing) |
| **D** | **Calciferol** *(Sunlight skin synthesis!)* | Sunlit UV-B, fish oil | **Rickets** (children) & **Osteomalacia** (adults) |
| **E** | **Tocopherol** | Vegetable oils, almonds | Muscle/nerve weakness & sterility tendencies |
| **K** | **Phylloquinone** | Green leafy vegetables | **Delayed Blood Clotting** (haemorrhage) |

- **Protein-Energy Malnutrition (PEM):** **Kwashiorkor** (severe **protein deficiency** with swollen oedema belly) vs **Marasmus** (combined **calorie + protein** starvation with extreme wasting).

## 2. Communicable Diseases by Causative Agent
| Pathogen Type | High-Yield Exam Diseases & Vectors/Tests |
|---|---|
| **Bacterial** | **Tuberculosis (TB)** (*Mycobacterium tuberculosis*; BCG vaccine, DOTS), **Cholera** (*Vibrio cholerae*), **Typhoid** (*Salmonella typhi* — **Widal Test**), **Leprosy / Hansen’s** (*M. leprae*), **Tetanus** (*Clostridium tetani* — Lockjaw), **Plague** (*Yersinia pestis* — rat flea) |
| **Viral** | **Dengue** (*Aedes aegypti* day-biting mosquito), **Chikungunya** (*Aedes*), **Japanese Encephalitis** (*Culex*), **Rabies** (Hydrophobia, *Lyssavirus*), **Polio** (OPV/IPV), **Hepatitis B/C** (liver), **HIV/AIDS** (**ELISA / Western Blot**; destroys **CD4 T-lymphocytes**), **COVID-19** (*SARS-CoV-2*; RT-PCR) |
| **Protozoan** | **Malaria** (*Plasmodium*; **female Anopheles**; Quinine/Artemisinin), **Kala-azar** (*Leishmania donovani*; **Sandfly**), **Sleeping Sickness** (*Trypanosoma*; **Tsetse fly**), **Amoebiasis** (*Entamoeba histolytica*) |
| **Helminth / Fungal** | **Filariasis / Elephantiasis** (*Wuchereria bancrofti*; *Culex* mosquito); **Ringworm** (*Trichophyton* fungus) |

## 3. Non-Communicable (Lifestyle) & Genetic Disorders
- **Diabetes, Hypertension, Cardiovascular Atherosclerosis, Cancer (uncontrolled cell mitosis / oncogenes), COPD**.
- **Sex-Linked & Mendelian Genetic Disorders:** **Haemophilia** ("Royal bleeder’s disease" — X-linked recessive), **Colour Blindness** (X-linked recessive—red/green confusion), **Sickle-Cell Anaemia** & **Thalassemia** (autosomal recessive blood disorders; India targets **Sickle-Cell elimination by 2047**!).

## 4. Key Revision Takeaways
- **ADEK** = fat-soluble vitamins; **B-complex & C** = water-soluble (**$B_{12}$ contains Cobalt**; **Vitamin C** is heat-sensitive).
- **Widal Test** = **Typhoid**; **ELISA / CD4 count** = **HIV**; **Aedes aegypti** = **Dengue & Chikungunya**; **Female Anopheles** = **Malaria**.
- **Haemophilia & Red-Green Colour Blindness** are **X-linked recessive** disorders mostly affecting males while transmitted via carrier females.`,
    mcqs: [
      {
        stem: 'Which four vitamins are **Fat-Soluble** and stored significantly in human liver and adipose tissues?',
        options: [
          'Vitamins B1, B2, B6, and C',
          'Vitamins A, D, E, and K',
          'Vitamins C and D only',
          'Vitamins B12 and C only',
        ],
        correctOptionIndex: 1,
        explanation: 'Vitamins A, D, E, and K are fat-soluble; B-complex and Vitamin C are water-soluble and excreted readily in urine.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which essential trace metal forms the central structural atom of **Vitamin $B_{12}$ (Cyanocobalamin)**?',
        options: ['Iron', 'Cobalt', 'Magnesium', 'Chromium'],
        correctOptionIndex: 1,
        explanation: 'Hence "cobalamin"—deficiency causes pernicious anaemia and neurological tingling.',
        difficulty: 'foundation',
      },
      {
        stem: 'Deficiency of **Vitamin K (Phylloquinone)** impairs synthesis of prothrombin and other liver clotting factors, resulting primarily in:',
        options: [
          'Night blindness',
          'Failure or severe delay in normal blood coagulation (excessive bleeding)',
          'Rickets in bones',
          'Scurvy gums',
        ],
        correctOptionIndex: 1,
        explanation: 'Vitamin K (and $Ca^{2+}$ ions) are indispensable cofactors in converting fibrinogen into insoluble fibrin mesh clots.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which vitamin (chemical name **Ascorbic Acid**, found richly in Indian Gooseberry/Amla and citrus) is most easily destroyed by prolonged cooking heat and causes **Scurvy** when deficient?',
        options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin B1'],
        correctOptionIndex: 1,
        explanation: 'Vitamin C supports collagen cross-linking, iron absorption, and immunity; lack weakens capillaries and gums.',
        difficulty: 'foundation',
      },
      {
        stem: 'The **Widal Test** is a classic clinical diagnostic blood test used to screen for which bacterial infection?',
        options: [
          'Malaria',
          'Typhoid Fever (*Salmonella typhi*)',
          'Dengue',
          'Tuberculosis',
        ],
        correctOptionIndex: 1,
        explanation: 'Widal detects agglutinating antibodies against *Salmonella enterica* serotype Typhi (O and H antigens).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which daytime-biting mosquito acts as the primary vector transmitting both **Dengue** and **Chikungunya** viral fevers (as well as Zika)?',
        options: [
          'Female Anopheles',
          'Female *Aedes aegypti* (and *Aedes albopictus*)',
          'Phlebotomus Sandfly',
          'Tsetse Fly',
        ],
        correctOptionIndex: 1,
        explanation: '*Aedes aegypti* breeds in clean stagnant household containers; Female *Anopheles* transmits Malaria; Sandfly transmits Kala-azar.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which protozoan parasite causes **Malaria**, and which antimalarial alkaloid extracted traditionally from **Cinchona** tree bark treats it?',
        options: [
          '*Leishmania* treated by Penicillin',
          '*Plasmodium* species treated by **Quinine** (alongside modern Artemisinin-based ACT)',
          '*Vibrio cholerae* treated by Aspirin',
          '*Trypanosoma* treated by Insulin',
        ],
        correctOptionIndex: 1,
        explanation: '*Plasmodium falciparum* and *P. vivax* infect liver hepatocytes and RBCs via female *Anopheles* bites.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why do **HIV/AIDS** patients succumb to opportunistic infections like tuberculosis or fungal pneumonia?',
        options: [
          'HIV turns red blood cells white',
          'HIV selectively infects and depletes **CD4+ Helper T-lymphocytes**, crippling cell-mediated immunity',
          'HIV blocks nasal air passages directly',
          'HIV is a bacterial toxin',
        ],
        correctOptionIndex: 1,
        explanation: 'Progressive collapse of CD4 T-cells leaves the host defenceless against ordinarily mild microbes; antiretroviral therapy (ART) suppresses viral load.',
        difficulty: 'standard',
      },
      {
        stem: 'Match the deficiency diseases with the lacking nutrient: 1. Pellagra 2. Rickets 3. Beriberi 4. Kwashiorkor.',
        options: [
          '1-Niacin ($B_3$), 2-Vitamin D, 3-Thiamine ($B_1$), 4-Dietary Protein',
          '1-Vitamin C, 2-Iron, 3-Vitamin K, 4-Calcium',
          '1-Iodine, 2-Fluoride, 3-Vitamin A, 4-Sugar',
          '1-Cobalt, 2-Zinc, 3-Fats, 4-Water',
        ],
        correctOptionIndex: 0,
        explanation: 'Pellagra ($B_3$), Rickets/Osteomalacia (Vit D), Beriberi ($B_1$), and Kwashiorkor (protein oedema) are classic nutrition questions.',
        difficulty: 'standard',
      },
      {
        stem: 'Which mosquito-borne parasitic disease causing grotesque swelling of lower limbs (**Elephantiasis**) is caused by the filarial worm *Wuchereria bancrofti*?',
        options: [
          'Kala-azar',
          'Lymphatic Filariasis',
          'Yellow Fever',
          'Scrub Typhus',
        ],
        correctOptionIndex: 1,
        explanation: 'Transmitted mainly by *Culex quinquefasciatus*, adult *Wuchereria* worms obstruct lymphatic vessels chronically.',
        difficulty: 'standard',
      },
      {
        stem: 'Why are **Antibiotics** like Penicillin or Azithromycin completely **ineffective** against **Common Cold, Influenza, or Dengue**?',
        options: [
          'Viruses travel faster than pills',
          'Antibiotics target bacterial cell walls or bacterial 70S ribosomes—structures completely absent in acellular viruses that hijack human host machinery',
          'Viruses dissolve penicillin into sugar',
          'Antibiotics only work below 0°C',
        ],
        correctOptionIndex: 1,
        explanation: 'Misusing antibiotics for viral colds fails to cure the patient and dangerously accelerates **Antimicrobial Resistance (AMR)**!',
        difficulty: 'foundation',
      },
      {
        stem: 'What genetic inheritance pattern explains why **Haemophilia** and **Red–Green Colour Blindness** occur far more frequently in males than in females?',
        options: [
          'Y-linked dominant inheritance',
          'X-linked recessive inheritance (males have only one X chromosome, so a single recessive allele manifests without a compensating normal allele)',
          'Mitochondrial bacterial mutation',
          'Nutritional sugar deficiency',
        ],
        correctOptionIndex: 1,
        explanation: 'Daughters with one defective X are asymptomatic carriers unless both parents pass the recessive allele.',
        difficulty: 'standard',
      },
      {
        stem: 'Which sandfly-transmitted protozoan disease (*Leishmania donovani*), targeted by India for elimination, is historically known as **Black Fever / Kala-azar**?',
        options: [
          'Visceral Leishmaniasis',
          'Amoebic Dysentery',
          'Giardiasis',
          'Leptospirosis',
        ],
        correctOptionIndex: 0,
        explanation: 'Transmitted by *Phlebotomus argentipes* sandflies, visceral leishmaniasis causes prolonged fever, hepatosplenomegaly, and skin darkening.',
        difficulty: 'standard',
      },
      {
        stem: 'What is the **Sickle-Cell Disease (SCD)** molecular defect, targeted by India’s National Sickle Cell Anaemia Elimination Mission by **2047**?',
        options: [
          'Complete absence of liver bile',
          'Single-point mutation in the beta-globin gene changing RBCs under low oxygen into rigid crescent/sickle shapes that clog capillaries and break down early',
          'Excessive Vitamin D intake',
          'Infection by mosquitoes',
        ],
        correctOptionIndex: 1,
        explanation: 'Glutamic acid is substituted by Valine at the 6th position of the beta-globin chain in autosomal recessive HbS.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which live-attenuated vaccine administered to newborns in India protects primarily against severe childhood forms of **Tuberculosis** (meningeal/miliary TB)?',
        options: ['DPT Vaccine', 'BCG (Bacillus Calmette–Guérin)', 'MMR Vaccine', 'Salk IPV'],
        correctOptionIndex: 1,
        explanation: 'BCG remains an essential birth-dose immunization under India’s Universal Immunization Programme (UIP).',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'ISRO Launch Vehicles & Space Exploration Missions',
    materialTitle: 'ISRO Launch Vehicles & Space Exploration Missions — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: PSLV, GSLV, LVM3, Chandrayaan-3, Aditya-L1 & Gaganyaan',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# ISRO Launch Vehicles & Space Exploration Missions

## 1. ISRO's Operational & Next-Generation Launch Fleet
| Rocket | Stages & Cryogenic Info | Primary Orbit / Payload Profile |
|---|---|---|
| **PSLV** *(Polar Satellite Launch Vehicle)* | **4 Stages** alternating **Solid – Liquid – Solid – Liquid** (*S139 – Vikas – S7 – PS4*) | ISRO's **"Workhorse"** (~1,750 kg to Sun-Synchronous Polar Orbit); launched **Chandrayaan-1 (2008)**, **Mangalyaan (2013)**, **Aditya-L1 (2023)**, **104 satellites in 1 flight (2017)** |
| **GSLV Mk-II** | **3 Stages:** Solid + Liquid + **Indigenous Cryogenic Upper Stage (CUS — $LOX + LH_2$)** | Medium GTO communication/NavIC payloads (~2,200 kg to GTO) |
| **LVM3** *(formerly GSLV Mk-III / "Bahubali")* | **3 Stages:** Twin S200 Solid Strap-ons + L110 Liquid Core + **C25 Cryogenic Upper Stage** | **Heavy Lift** (~4,000 kg GTO / ~8,000 kg LEO); launched **Chandrayaan-2 (2019)**, **Chandrayaan-3 (2023)**, OneWeb constellations, **Human-rated HLVM3 for Gaganyaan** |
| **SSLV** *(Small Satellite Launch Vehicle)* | **3 Solid stages + Liquid Velocity Trimming Module (VTM)** | Rapid "launch-on-demand" mini/micro-satellites up to ~500 kg into LEO; new coastal launchport at **Kulasekarapattinam (Tamil Nadu)** complements **SDSC–SHAR Sriharikota**! |
| **RLV-TD / Pushpak** | Reusable winged technology demonstrator | Autonomous runway landing tests toward future reusable orbital boosters |

- **What is Cryogenic Propulsion?** Burning **Liquid Oxygen ($LOX$ at ~$-183^\\circ\\text{C}$)** and **Liquid Hydrogen ($LH_2$ at ~$-253^\\circ\\text{C}$)**—delivers **highest Specific Impulse** (efficiency per kg fuel!) and emits clean water vapour! (Semi-cryogenic engines burn **Refined Kerosene + LOX**).

## 2. Landmark Indian Space Science & Planetary Missions
- **Aryabhata (1975):** India's 1st satellite (Soviet Cosmos launch). **SLV-3 (1980):** First indigenous Indian launch (*Rohini* satellite, under Dr. A.P.J. Abdul Kalam!).
- **Chandrayaan-1 (2008):** Discovered definitive **lunar surface water/hydroxyl molecules** (*Moon Impact Probe* hit near South Pole).
- **Mangalyaan / Mars Orbiter Mission (2013–14):** India became the **first Asian nation** and **first globally to reach Mars orbit on maiden attempt**!
- **AstroSat (2015):** India's 1st dedicated multi-wavelength space observatory.
- **Chandrayaan-3 (2023):** Soft-landed **Vikram Lander** & **Pragyan Rover** at **Shiv Shakti Point (~69.37°S)** on **23 August 2023** (*National Space Day!*), making India the **4th country to soft-land on the Moon** and **1st ever near the Lunar South Pole**!
- **Aditya-L1 (2023–24):** India's 1st solar observatory positioned in a **halo orbit around Sun–Earth Lagrange Point L1 (~1.5 million km from Earth)** for continuous uninterrupted solar corona/CME monitoring!
- **XPoSat (Jan 2024):** India’s 1st (and world’s 2nd after NASA IXPE) dedicated **X-ray Polarimetry** observatory.
- **Gaganyaan:** India's maiden **Human Spaceflight** programme (3-day ~400 km LEO crew module); **Bharatiya Antariksh Station (BAS)** targeted by **2035** and Indian lunar landing by **2040**.

## 3. NavIC (IRNSS) & Uttarakhand Connections
- **NavIC:** **7-satellite** regional navigation constellation (3 Geostationary + 4 Geosynchronous inclined) providing accurate positioning across India + **1,500 km beyond borders** (*dual-frequency L5 & S-band; L1 added in NVS-01*).
- **Uttarakhand Space–Astronomical Presence:** **IIRS (Indian Institute of Remote Sensing, Dehradun)** trains Earth-observation/GIS specialists under ISRO, while **ARIES (Manora Peak, Nainital / Devasthal)** operates India's **3.6-m Optical Telescope** & **International Liquid Mirror Telescope (ILMT)**!

## 4. Key Revision Takeaways
- **PSLV** = **4 stages (S–L–S–L)**; **LVM3** = **3 stages (S–L–Cryogenic)** used for **Chandrayaan-3**.
- **23 August** = **National Space Day** (Chandrayaan-3 South Pole landing at **Shiv Shakti Point**).
- **Aditya-L1** orbits **Sun–Earth L1 (~1.5 million km)**; **Cryogenic** fuels = **$LOX + LH_2$**.`,
    mcqs: [
      {
        stem: 'Which ISRO launch vehicle successfully carried the **Chandrayaan-3** spacecraft in July 2023 toward India’s historic Lunar South Pole soft landing?',
        options: ['SSLV-D2', 'PSLV-XL', 'LVM3-M4 (Launch Vehicle Mark-3)', 'SLV-3'],
        correctOptionIndex: 2,
        explanation: 'LVM3 (formerly GSLV Mk-III), powered by S200 solid boosters, L110 Vikas core, and C25 cryogenic upper stage, placed Chandrayaan-3 accurately into lunar transfer trajectory.',
        difficulty: 'foundation',
      },
      {
        stem: 'Observed every year in India on **23 August**, "National Space Day" commemorates which historic achievement?',
        options: [
          'Launch of Aryabhata in 1975',
          'Chandrayaan-3’s Vikram Lander & Pragyan Rover achieving India’s first soft landing near the Lunar South Pole (**Shiv Shakti Point**, 23 Aug 2023)',
          'Insertion of Mangalyaan around Mars',
          'First test of SSLV',
        ],
        correctOptionIndex: 1,
        explanation: 'India became the 4th nation to achieve a lunar soft landing (after USSR, USA, China) and the very 1st near the rugged Lunar South Pole.',
        difficulty: 'foundation',
      },
      {
        stem: 'What propellants are burned inside ISRO’s ultra-efficient **Cryogenic Upper Stage** engines (used on GSLV Mk-II and LVM3)?',
        options: [
          'Solid HTPB rubber and Aluminium powder',
          'Liquid Oxygen ($LOX$ at $-183^\\circ\\text{C}$) and Liquid Hydrogen ($LH_2$ at $-253^\\circ\\text{C}$)',
          'Petrol and Compressed Air',
          'Hydrazine and Nitric Acid only',
        ],
        correctOptionIndex: 1,
        explanation: 'Cryogenic $LOX + LH_2$ yields unmatched specific impulse (~440+ s) critical for placing heavy satellites into high Geostationary Transfer Orbits.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the propulsion sequence across the **four stages** of ISRO’s reliable workhorse rocket, the **PSLV**?',
        options: [
          'All four stages Solid',
          'Alternating **Solid – Liquid – Solid – Liquid** (1st & 3rd Solid; 2nd & 4th Liquid)',
          'Cryogenic – Nuclear – Solar – Solid',
          'Liquid – Solid – Cryogenic – Solid',
        ],
        correctOptionIndex: 1,
        explanation: 'PSLV famously alternates Solid (S139 + strap-ons) -> Liquid (Vikas) -> Solid (S7) -> Liquid (PS4 twin engines).',
        difficulty: 'standard',
      },
      {
        stem: 'Where is ISRO’s **Aditya-L1** solar observatory stationed (~1.5 million km from Earth) to observe the Sun continuously without solar eclipses or Earth occultation?',
        options: [
          'Geostationary Orbit (35,786 km)',
          'A halo orbit around **Sun–Earth Lagrange Point 1 (L1)**',
          'Low Earth Orbit at 400 km',
          'Lunar Polar Orbit',
        ],
        correctOptionIndex: 1,
        explanation: 'At the L1 gravitational equilibrium point between Sun and Earth, Aditya-L1 maintains an uninterrupted 24/7 view of the solar photosphere, chromosphere, and corona.',
        difficulty: 'foundation',
      },
      {
        stem: 'How many operational satellites normally compose India’s core **NavIC (IRNSS)** regional navigation constellation, and how far beyond Indian land borders does its primary service area extend?',
        options: [
          '24 satellites covering North Pole only',
          '7 satellites (3 Geostationary + 4 Geosynchronous) covering India plus **1,500 km** beyond Indian borders',
          '3 satellites covering Asia-Pacific',
          '120 satellites in LEO',
        ],
        correctOptionIndex: 1,
        explanation: 'Operated independently by ISRO, NavIC provides better accuracy (<10–20 m) across India and surrounding strategic seas than standard single-frequency foreign GPS.',
        difficulty: 'standard',
      },
      {
        stem: 'Which premier ISRO training and Earth-observation institute located in **Dehradun (Uttarakhand)** specializes in Remote Sensing, GIS, and Geoinformatics?',
        options: [
          'VSSC Thiruvananthapuram',
          'IIRS (Indian Institute of Remote Sensing)',
          'SAC Ahmedabad',
          'URSC Bengaluru',
        ],
        correctOptionIndex: 1,
        explanation: 'Located on Kalidas Road in Dehradun, IIRS trains scientists across India and Asia-Pacific (CSSTEAP) in satellite mapping and Himalayan hazard remote sensing.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which autonomous astronomical research institute near **Nainital (Manora Peak & Devasthal)** operates Asia’s largest 3.6-metre Devasthal Optical Telescope and the world’s first **International Liquid Mirror Telescope (ILMT)** for astronomy?',
        options: [
          'IIA Bengaluru',
          'ARIES (Aryabhatta Research Institute of Observational Sciences)',
          'PRL Ahmedabad',
          'TIFR Mumbai',
        ],
        correctOptionIndex: 1,
        explanation: 'Initially moved to Nainital in 1955 and elevated to DST autonomous status in 2004, ARIES leverages dark Himalayan skies at Devasthal.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which compact, quick-turnaround ISRO rocket uses three all-solid stages plus a liquid **Velocity Trimming Module (VTM)** specifically designed to launch small satellites (<500 kg) on demand?',
        options: ['LVM3', 'SSLV (Small Satellite Launch Vehicle)', 'GSLV Mk-II', 'ASLV'],
        correctOptionIndex: 1,
        explanation: 'SSLV dramatically shrinks launch preparation turnaround from months to days, paired with ISRO’s upcoming coastal spaceport at Kulasekarapattinam (TN).',
        difficulty: 'standard',
      },
      {
        stem: 'What was the historic scientific discovery made by India’s maiden lunar probe **Chandrayaan-1 (2008)** (assisted by its Moon Impact Probe and M3 spectrometer)?',
        options: [
          'Liquid ocean of saltwater on lunar equator',
          'Conclusive spectroscopic evidence of **water/hydroxyl ($H_2O / OH$) molecules** on the lunar surface',
          'Active volcanic lava volcanoes',
          'Breathable nitrogen atmosphere',
        ],
        correctOptionIndex: 1,
        explanation: 'Chandrayaan-1 overturned decades of assumption that the Moon was bone-dry, sparking renewed global lunar south-pole interest.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **X-ray astronomy mission launched on 1 January 2024** aboard PSLV-C58 made India only the second country globally (after NASA’s IXPE) to measure **X-ray polarization** from pulsars and black holes?',
        options: ['AstroSat-2', 'XPoSat (X-ray Polarimeter Satellite)', 'Megha-Tropiques', 'Oceansat-3'],
        correctOptionIndex: 1,
        explanation: 'Carrying POLIX (RRI) and XSPECT (URSC) payloads, XPoSat studies extreme magnetic and gravitational cosmic sources.',
        difficulty: 'standard',
      },
      {
        stem: 'What is **"Pushpak"** (RLV-LEX) successfully tested multiple times by ISRO at Chitradurga aeronautical test range?',
        options: [
          'A deep-ocean submarine',
          'ISRO’s winged **Reusable Launch Vehicle (RLV) Landing Experiment** vehicle performing autonomous high-speed precision runway landings',
          'A solar sailing boat',
          'A lunar drilling rig',
        ],
        correctOptionIndex: 1,
        explanation: 'RLV technologies aim to recover expensive upper avionics/booster stages safely to slash launch costs per kilogram.',
        difficulty: 'standard',
      },
      {
        stem: 'By which target years has India set its long-term human spaceflight roadmap goals for establishing the **Bharatiya Antariksh Station (BAS)** and landing an Indian astronaut on the Moon?',
        options: [
          'BAS by 2025; Moon by 2030',
          'BAS by 2035; Indian Lunar Landing by 2040',
          'BAS by 2070; Moon by 2100',
          'No future targets declared',
        ],
        correctOptionIndex: 1,
        explanation: 'Following the maiden Gaganyaan human spaceflight in ~400 km LEO, India plans modular space station assembly by 2035 and human lunar landing by 2040.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **semi-cryogenic** propellant combination is ISRO currently developing (for high-thrust booster stages like SCE-200) to avoid handling ultra-cold liquid hydrogen on launch pads?',
        options: [
          'Liquid Helium + Uranium',
          'Refined Kerosene (Isrosene / RP-1) + Liquid Oxygen ($LOX$)',
          'Coal dust + Steam',
          'Solid Ammonium Perchlorate only',
        ],
        correctOptionIndex: 1,
        explanation: 'Semi-cryogenic boosters pack denser kerosene fuel at ambient temperature paired with LOX oxidizer for heavy payloads.',
        difficulty: 'advanced',
      },
      {
        stem: 'Where is India’s primary orbital spaceport **Satish Dhawan Space Centre (SDSC–SHAR)** located, and why is an east-coast equatorial-proximate site preferred for rockets?',
        options: [
          'Mumbai coast; launches westward',
          'Sriharikota Island (Andhra Pradesh); launches eastward over open ocean to harness Earth’s west-to-east rotational velocity boost and avoid dropping spent stages on populated land',
          'Leh Plateau; launches northward',
          'Dehradun Valley; launches vertically',
        ],
        correctOptionIndex: 1,
        explanation: 'Eastward launches near the equator gain ~460 m/s rotational slingshot boost while spent stages splash safely over the Bay of Bengal.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Defence Systems (IGMDP) & Nuclear Energy Program',
    materialTitle: 'Defence Systems (IGMDP) & Nuclear Energy Program — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: IGMDP Missiles, Agni-BrahMos-S400 & Three-Stage Nuclear Programme',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Defence Systems (IGMDP) & Nuclear Energy Program

## 1. Integrated Guided Missile Development Programme (IGMDP, 1983–2008)
Conceived by **Dr. A.P.J. Abdul Kalam** under DRDO ("PATNA" mnemonic for five core missile families!):
- **P — Prithvi:** Short-range **surface-to-surface** tactical ballistic missile (*liquid/solid variants*).
- **A — Agni:** Strategic **surface-to-surface** intermediate/intercontinental ballistic missile series (**Agni-I to Agni-V** [>5,000 km ICBM; **Mission Divyastra** tested **MIRV** — *Multiple Independently Targetable Re-entry Vehicles* in March 2024!]; **Agni-P** new-gen canisterized).
- **T — Trishul:** Short-range quick-reaction **surface-to-air** missile (technology demonstrator).
- **N — Nag:** 3rd-generation **"Fire-and-Forget"** **Anti-Tank Guided Missile (ATGM)** (*Helina / Dhruvastra* helicopter-launched; **Man-Portable ATGM [MPATGM]**).
- **A — Akash:** Medium-range **surface-to-air missile (SAM)** air-defence system (indigenized heavily; exported to friendly nations!).

## 2. Beyond IGMDP: Strategic Triad, Air Defence & Key Platforms
- **BrahMos:** Indo–Russian (**DRDO + NPO Mashinostroyenia**, named after *Brahmaputra + Moskva*) **Supersonic Cruise Missile (~Mach 2.8–3.0)**—land, sea, submarine, and Su-30MKI air-launched! (Note: **Ballistic missiles** follow high parabolic trajectories via upper atmosphere; **Cruise missiles** fly low, sea-skimming/terrain-hugging inside the atmosphere powered continuously!).
- **Astra:** Indigenous **Beyond Visual Range (BVR)** air-to-air missile.
- **Pinaka:** Indigenous multi-barrel rocket launcher (*MBRL*, 44-second salvo).
- **Nuclear Triad:** Land (**Agni**), Air (**fighter jets**), Sea (**SSBN nuclear ballistic-missile submarines — *INS Arihant* & *INS Arighaat* carrying K-15/K-4 SLBMs**), governed by India’s **No First Use (NFU)** & **Credible Minimum Deterrence** nuclear doctrine!
- **Air Defence:** **S-400 Triumf (*Sudarshan Chakra*)**, **Barak-8**, and **DRDO Ballistic Missile Defence (BMD)** (**Prithvi Air Defence / AD-1 & Ashwin AAD**).
- **Indigenous Combat Platforms:** **LCA Tejas** (Light Combat Aircraft, HAL), **LCH Prachand** (high-altitude combat helicopter!), **INS Vikrant (IAC-1)** (India's 1st indigenous aircraft carrier), **Kalvari (Scorpène) Class** submarines.

## 3. Dr. Homi J. Bhabha's Three-Stage Nuclear Power Programme
Designed specifically around India’s resource reality (**modest Uranium, ~25%+ of world’s Thorium in Kerala/Odisha monazite sands!**):
1. **Stage I — Pressurized Heavy Water Reactors (PHWRs):** Fuel = **Natural Uranium ($^{235}U / ^{238}U$)**; Moderator & Coolant = **Heavy Water ($D_2O$)** $\\rightarrow$ produces electricity + **Plutonium-239 ($^{239}Pu$)** bred from $^{238}U$! (Plus imported LWRs like Kudankulam VVERs using enriched U + light water).
2. **Stage II — Fast Breeder Reactors (FBR / PFBR Kalpakkam):** Fuel = **$Pu-239 + ^{238}U$** (liquid **Sodium** coolant, *no moderator!*); **breeds more fissile $Pu-239$ than it consumes** and converts **Thorium-232 ($^{232}Th$) blankets into fissile Uranium-233 ($^{233}U$)**!
3. **Stage III — Advanced Heavy Water / Thorium Breeder Reactors:** Self-sustaining **$Th-232 / U-233$** cycle tapping India's vast Thorium reserves for centuries of clean baseload power!

## 4. Key Revision Takeaways
- **IGMDP ("PATNA"):** **Prithvi, Agni, Trishul, Nag (Fire-and-Forget ATGM), Akash (SAM)** led by Dr. Kalam.
- **Agni-V (Mission Divyastra)** demonstrated **MIRV** capability; **BrahMos** = **Supersonic Cruise Missile** (Brahmaputra + Moskva).
- **Stage I PHWRs** use **Natural Uranium + Heavy Water ($D_2O$)**; **Stage II FBRs** use **Liquid Sodium** & breed **$Pu-239 / U-233$** to unlock **Stage III Thorium**!`,
    mcqs: [
      {
        stem: 'Which five missile systems formed the core **"PATNA"** portfolio of DRDO’s Integrated Guided Missile Development Programme (IGMDP) led by Dr. A.P.J. Abdul Kalam?',
        options: [
          'Pinaka, Astra, Tejas, Nirbhay, Arjun',
          'Prithvi, Agni, Trishul, Nag, and Akash',
          'Pralay, Rudram, Helina, Varunastra, Barak',
          'BrahMos, K-15, S-400, Rafale, Vikrant',
        ],
        correctOptionIndex: 1,
        explanation: 'Launched in 1983 and formally completed in 2008, IGMDP established self-reliance across tactical, strategic, anti-tank, and air-defence missiles.',
        difficulty: 'foundation',
      },
      {
        stem: 'What technological capability did India successfully demonstrate in March 2024 under **Mission Divyastra** using the **Agni-V** missile?',
        options: [
          'Moon landing',
          'MIRV (Multiple Independently Targetable Re-entry Vehicle) technology enabling one missile to deliver multiple warheads to separate targets',
          'Submarine sonar',
          'Solar drone charging',
        ],
        correctOptionIndex: 1,
        explanation: 'MIRV multiplies strategic deterrence survivability against modern missile shields by placing multiple independently steered re-entry warheads atop a single Agni-V.',
        difficulty: 'foundation',
      },
      {
        stem: 'How does the flight profile of the **BrahMos Supersonic Cruise Missile** fundamentally differ from an **Agni Ballistic Missile**?',
        options: [
          'BrahMos exits Earth’s atmosphere into space like an ICBM',
          'BrahMos flies low inside the atmosphere under continuous jet propulsion (~Mach 2.8–3.0) dodging radar horizon, whereas Agni rockets boost steeply into a high ballistic trajectory',
          'BrahMos is an unguided iron cannonball',
          'Agni operates strictly underwater',
        ],
        correctOptionIndex: 1,
        explanation: 'Cruise missiles are winged, air-breathing/jet-powered guided vehicles flying flat low-altitude routes; ballistic missiles follow gravity-governed parabolic arcs.',
        difficulty: 'standard',
      },
      {
        stem: 'Which missile from India’s IGMDP is a third-generation **"Fire-and-Forget" Anti-Tank Guided Missile (ATGM)** using imaging infrared guidance (with helicopter variant *Helina/Dhruvastra*)?',
        options: ['Akash', 'Nag', 'Prithvi', 'Trishul'],
        correctOptionIndex: 1,
        explanation: 'Nag locks onto enemy armour thermal signatures autonomously after launch, letting crews relocate immediately.',
        difficulty: 'foundation',
      },
      {
        stem: 'In Dr. Homi Bhabha’s **Three-Stage Nuclear Power Programme**, why does Stage III aim strategically to utilize **Thorium-232 ($^{232}Th$)** rather than Uranium alone?',
        options: [
          'Thorium burns like coal in boilers',
          'India holds modest domestic Uranium reserves (~1–2% global) yet possesses over a quarter of the world’s **Thorium** in coastal monazite sands',
          'Thorium needs zero nuclear reactors',
          'Uranium does not exist in nature',
        ],
        correctOptionIndex: 1,
        explanation: 'Because $^{232}Th$ is *fertile* (not directly fissile), Stage II Fast Breeder Reactors must first transmute it into fissile $^{233}U$ to power Stage III.',
        difficulty: 'foundation',
      },
      {
        stem: 'What serve as **Fuel** and **Moderator** respectively in Stage I Indian **Pressurized Heavy Water Reactors (PHWRs)** such as Narora, Kakrapar, and Rawatbhata?',
        options: [
          'Enriched Plutonium fuel; Liquid Sodium moderator',
          'Natural Uranium fuel ($UO_2$); Heavy Water ($D_2O$) as both moderator and primary coolant',
          'Thorium fuel; Graphite gas moderator',
          'Pure Hydrogen; Boiling Mercury',
        ],
        correctOptionIndex: 1,
        explanation: 'Heavy water ($D_2O$) absorbs far fewer neutrons than ordinary light water ($H_2O$), sustaining chain fission even with unenriched natural uranium.',
        difficulty: 'standard',
      },
      {
        stem: 'Why does India’s Stage II **Prototype Fast Breeder Reactor (PFBR, Kalpakkam)** eliminate the neutron moderator and instead circulate **Liquid Sodium** as coolant?',
        options: [
          'To freeze plutonium core',
          'Fast (unmoderated) high-energy neutrons are needed to breed more fissile Plutonium-239 from $^{238}U$ than the reactor consumes, and liquid sodium removes intense core heat without slowing neutrons down',
          'Sodium makes nuclear waste edible',
          'Water boils too high',
        ],
        correctOptionIndex: 1,
        explanation: 'Core loading at Kalpakkam’s 500 MWe PFBR marks India’s pivotal entry into Stage II.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which nuclear-powered ballistic missile submarines (**SSBNs**) complete the maritime leg of India’s strategic **Nuclear Triad**?',
        options: [
          'INS Vikrant & INS Vikramaditya',
          'INS Arihant and INS Arighaat (Arihant-class carrying K-15 / K-4 SLBMs)',
          'INS Kalvari & INS Khanderi (diesel-electric)',
          'INS Nilgiri & INS Surat',
        ],
        correctOptionIndex: 1,
        explanation: 'Submerged nuclear submarines (SSBNs) guarantee survivable second-strike retaliation backing India’s **No First Use (NFU)** nuclear doctrine.',
        difficulty: 'standard',
      },
      {
        stem: 'Which indigenous DRDO **Beyond-Visual-Range (BVR) Air-to-Air Missile** arms IAF Su-30MKI and Tejas fighter aircraft?',
        options: ['Nag', 'Astra', 'Pinaka', 'Pralay'],
        correctOptionIndex: 1,
        explanation: 'Astra Mk-I (~110 km) and Mk-II empower Indian fighters to engage hostile aircraft long before visual dogfight range.',
        difficulty: 'foundation',
      },
      {
        stem: 'Named after the bow of Lord Shiva, **Pinaka** (deployed heavily along Himalayan borders) is an indigenous:',
        options: [
          'Nuclear submarine',
          'Multi-Barrel Rocket Launcher (MBRL) artillery system capable of firing 12 rockets in 44 seconds',
          'Stealth bomber',
          'Radar warning balloon',
        ],
        correctOptionIndex: 1,
        explanation: 'Pinaka guided rockets proved their mettle in Kargil and modern high-altitude mountain artillery deterrence.',
        difficulty: 'foundation',
      },
      {
        stem: 'What are the two core foundational pillars of India’s official **Nuclear Doctrine (2003)**?',
        options: [
          'First-strike preemption and infinite arsenal expansion',
          'Credible Minimum Deterrence and **No First Use (NFU)** (retaliation strictly against nuclear attack on Indian territory or Indian forces anywhere)',
          'Banning civilian nuclear power',
          'Sharing nuclear triggers with UN Security Council',
        ],
        correctOptionIndex: 1,
        explanation: 'Civilian political command via the Nuclear Command Authority (chaired by PM) anchors NFU and non-use against non-nuclear states.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which specialized indigenous twin-engine **Light Combat Helicopter (LCH)** built by HAL is uniquely certified to operate and fire weapons even at high-altitude **Siachen / Himalayan elevations (>5,000 m)**?',
        options: ['HAL Dhruv Civil', 'HAL Prachand', 'MiG-21', 'Boeing C-17'],
        correctOptionIndex: 1,
        explanation: 'Thin mountain air cuts rotor lift sharply; LCH *Prachand* was purpose-engineered after Kargil for high Himalayan battlefields.',
        difficulty: 'standard',
      },
      {
        stem: 'Inside a commercial **Nuclear Fission Reactor**, what is the exact role of **Control Rods** (made of Boron or Cadmium)?',
        options: [
          'Speed up neutrons to make electricity',
          'Absorb excess free neutrons smoothly to regulate or shut down (*SCRAM*) the fission chain reaction rate',
          'Heat steam turbines directly',
          'Produce heavy water',
        ],
        correctOptionIndex: 1,
        explanation: 'Unlike Moderators (which slow fast neutrons down to thermal speeds), Control Rods capture neutrons outright to prevent runaway criticality.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which fundamental nuclear physics process powers the **Sun and stars** (and experimental **ITER / Tokamak** fusion reactors) rather than commercial fission power plants today?',
        options: [
          'Splitting heavy $^{235}U$ atoms',
          'Nuclear Fusion — fusing light Hydrogen isotopes (**Deuterium & Tritium**) under extreme temperature/pressure into Helium + immense energy',
          'Chemical oxidation of coal',
          'Beta decay of Carbon-14',
        ],
        correctOptionIndex: 1,
        explanation: 'India is a full partner in the international ITER fusion project (France) via IPR Gandhinagar.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which long-range mobile surface-to-air air defence missile system procured by India (and nicknamed *Sudarshan Chakra* in Indian service) can simultaneously track and intercept stealth aircraft, drones, and ballistic missiles up to ~400 km?',
        options: ['Akash-NG', 'S-400 Triumf', 'Igla-S', 'Nag'],
        correctOptionIndex: 1,
        explanation: 'S-400 provides multi-layered long-range theatre air defence complementing indigenous Akash and QRSAM batteries.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Biotechnology, CRISPR Gene Editing & Healthcare Applications',
    materialTitle: 'Biotechnology, CRISPR Gene Editing & Healthcare Applications — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: CRISPR-Cas9, mRNA Vaccines, GM Crops, Stem Cells & CAR-T',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Biotechnology, CRISPR Gene Editing & Healthcare Applications

## 1. Recombinant DNA & CRISPR–Cas9 Gene Editing
- **rDNA Toolkit:** **Restriction Endonucleases** (*"Molecular Scissors"* cutting DNA at specific palindromic sites) + **DNA Ligase** (*"Molecular Glue"*) + **Vectors** (*Plasmids/Viral vectors*) + **PCR** (*Polymerase Chain Reaction* using heat-stable **Taq Polymerase** to amplify tiny DNA samples exponentially!).
- **CRISPR–Cas9:** Adapted from natural bacterial viral immunity (Nobel Prize 2020: **Emmanuelle Charpentier & Jennifer Doudna**). Uses a programmable **Guide RNA (gRNA)** to direct the **Cas9 nuclease enzyme** to cut exact faulty DNA bases for precise deletion, repair, or insertion!
- **India Milestone (2022–24):** India exempted **SDN-1 and SDN-2 genome-edited crops** (no foreign transgene inserted!) from cumbersome GMO trials to accelerate climate-resilient crops; global regulators approved first CRISPR therapy (*Casgevy*) for **Sickle-Cell Anaemia & Beta-Thalassemia**!

## 2. GM Crops vs Gene-Edited Crops & Bt Cotton
- **Transgenic GM Crops (inserting foreign gene):**
  - **Bt Cotton** (only commercially approved food/fibre GM crop in India so far!): carries **Cry1Ac/Cry2Ab genes** from soil bacterium *Bacillus thuringiensis*, producing gut-disrupting crystal toxin specific to **bollworms**!
  - **DMH-11 Mustard** (Dhara Mustard Hybrid — *barnase/barstar* system developed at Delhi University for higher oil yield) & *Bt Brinjal* / *Golden Rice* ($\beta$-carotene Vitamin A precursor) remain subject to regulatory/biosafety scrutiny under **GEAC (Genetic Engineering Appraisal Committee under EPA 1986)**.
- **Biofortification:** Enriching crops naturally/conventionally for micronutrients (iron-rich pearl millet, zinc wheat, protein maize).

## 3. Modern Medical Biotech: Vaccines, Stem Cells & CAR-T
- **Vaccine Platforms:**
  1. *Live Attenuated* (*MMR, BCG, Oral Polio*).
  2. *Inactivated / Killed* (*Covaxin, Salk IPV, Rabies*).
  3. *Subunit / Recombinant* (*Hepatitis B, Corbevax*).
  4. *Viral Vector* (*Covishield — chimpanzee adenovirus vector*).
  5. **mRNA Vaccines** (*Pfizer/Moderna — deliver synthetic messenger RNA wrapped in lipid nanoparticles instructing host ribosomes to make harmless spike antigen briefly!*).
  6. **DNA Plasmid Vaccine** (*ZyCoV-D* — world’s 1st DNA COVID vaccine developed in India!).
- **Stem Cells:** *Totipotent* (zygote—makes entire organism + placenta), *Pluripotent* (Embryonic / **iPSCs — Yamanaka**; makes all 3 germ layers), *Multipotent* (Adult bone marrow/umbilical cord—makes blood cells!).
- **CAR-T Cell Therapy (*NexCAR19* in India!):** Genetically engineering a patient's own **T-lymphocytes** with Chimeric Antigen Receptors to hunt and destroy **blood cancer (leukaemia/lymphoma)** cells (*IIT Bombay & Tata Memorial launched affordable indigenous NexCAR19!*).
- **Mitochondrial Replacement Therapy ("Three-Parent Baby"):** Replaces defective maternal mtDNA using a healthy donor egg's cytoplasm/mitochondria while keeping parents' nuclear DNA!

## 4. Key Revision Takeaways
- **CRISPR–Cas9** uses **Guide RNA + Cas9 enzyme** for targeted genome editing (distinct from introducing foreign transgenes in GMOs).
- **GEAC** under MoEFCC (EPA 1986) appraises GMOs; **Bt Cotton** uses *Bacillus thuringiensis* toxin genes.
- **NexCAR19** (IIT Bombay–Tata Memorial) brings indigenous **CAR-T cancer immunotherapy**; **PCR** amplifies DNA via **Taq polymerase**.`,
    mcqs: [
      {
        stem: 'In the **CRISPR–Cas9** genome-editing system, what specific roles do **Guide RNA (gRNA)** and **Cas9** perform respectively?',
        options: [
          'gRNA provides protein nutrients; Cas9 pumps blood',
          'Guide RNA locates and binds the exact complementary target DNA sequence, while Cas9 acts as molecular scissors cutting the DNA double strand at that precise site',
          'Both destroy all plant chloroplasts randomly',
          'Cas9 reads emails while gRNA clones sheep',
        ],
        correctOptionIndex: 1,
        explanation: 'Adapted from bacterial defence against bacteriophages, programmable CRISPR–Cas9 revolutionized precise genetic editing.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which statutory regulatory committee under the **Environment (Protection) Act, 1986 (MoEFCC)** is India’s apex body responsible for appraising large-scale release and commercial approval of **Genetically Modified (GM) crops**?',
        options: [
          'SEBI',
          'GEAC (Genetic Engineering Appraisal Committee)',
          'CACP',
          'Bar Council of India',
        ],
        correctOptionIndex: 1,
        explanation: 'GEAC evaluates environmental and biosafety risks before recommending any commercial GMO release in India.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why has the Government of India recently relaxed biosafety regulatory hurdles specifically for **SDN-1 and SDN-2 Gene-Edited crops** compared to transgenic GM crops?',
        options: [
          'Because gene-edited SDN-1/2 crops contain zero foreign DNA from unrelated species—mimicking precise natural mutations within the plant’s own genome',
          'Because they are sprayed with kerosene',
          'Because they only grow on Mars',
          'Because farmers cannot plant them',
        ],
        correctOptionIndex: 0,
        explanation: 'Unlike transgenic GMOs (e.g., bacterial gene in Bt Cotton), SDN-1/SDN-2 edits introduce no exogenous transgene.',
        difficulty: 'standard',
      },
      {
        stem: 'How does **Bt Cotton**—the only GM crop currently under commercial cultivation across India—protect cotton bolls from American Bollworm pests?',
        options: [
          'It produces thorns that puncture caterpillars',
          'Cry genes from *Bacillus thuringiensis* make cotton cells produce an inactive protoxin that turns toxic inside the alkaline midgut of feeding bollworm larvae',
          'It emits ultrasonic sound waves',
          'It turns cotton bitter only to humans',
        ],
        correctOptionIndex: 1,
        explanation: 'Because mammal stomachs are acidic while lepidopteran insect guts are alkaline, Bt Cry protein specifically targets insect larvae.',
        difficulty: 'foundation',
      },
      {
        stem: 'What are **"Restriction Endonucleases"** famously called in recombinant DNA (genetic engineering) technology?',
        options: [
          'Molecular Glue',
          'Molecular Scissors (cutting DNA cleanly at specific palindromic recognition sites)',
          'Cellular Batteries',
          'Ribosome Shields',
        ],
        correctOptionIndex: 1,
        explanation: 'Restriction enzymes (like EcoRI) cut sticky/blunt ends, and **DNA Ligase** acts as "Molecular Glue" sealing recombinant strands.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which landmark indigenous **CAR-T Cell Immunotherapy** (jointly developed by IIT Bombay & Tata Memorial Centre and approved by CDSCO) treats relapsed B-cell lymphomas and leukaemias at a fraction of global cost?',
        options: ['Covaxin', 'NexCAR19', 'ZyCoV-D', 'DMH-11'],
        correctOptionIndex: 1,
        explanation: 'NexCAR19 reprograms a patient’s own T-cells to recognize CD19 cancer markers, offering accessible precision oncology.',
        difficulty: 'standard',
      },
      {
        stem: 'How does an **mRNA Vaccine** train the human immune system safely without injecting live or killed whole pathogen?',
        options: [
          'It edits human bone chromosomes forever',
          'It delivers synthetic messenger RNA instructing host cell cytoplasm ribosomes to temporarily manufacture a harmless pathogen surface antigen (e.g., viral spike), triggering protective antibodies and memory T-cells',
          'It injects antibiotics directly into blood',
          'It turns blood cells into red algae',
        ],
        correctOptionIndex: 1,
        explanation: 'mRNA degrades rapidly in the cytoplasm without ever entering the cell nucleus or altering host genomic DNA.',
        difficulty: 'standard',
      },
      {
        stem: 'What does **PCR (Polymerase Chain Reaction)**—used in forensic DNA fingerprinting and RT-PCR viral diagnostics—accomplish using heat-tolerant **Taq Polymerase**?',
        options: [
          'Destroys all DNA in a sample',
          'Exponentially amplifies tiny trace fragments of target DNA into millions/billions of identical copies through thermal cycling',
          'Converts protein back into RNA',
          'Stains bacterial cell walls purple',
        ],
        correctOptionIndex: 1,
        explanation: 'Isolated from hot-spring bacterium *Thermus aquaticus*, *Taq* polymerase survives the ~94°C DNA denaturation step.',
        difficulty: 'foundation',
      },
      {
        stem: 'What distinguishes **Pluripotent** stem cells (such as Embryonic Stem Cells or Induced Pluripotent Stem Cells [iPSCs]) from **Totipotent** cells?',
        options: [
          'Pluripotent cells can form ONLY red blood cells',
          'Totipotent cells (zygote) can form an entire organism including extra-embryonic placenta, whereas Pluripotent cells can differentiate into every specialized body tissue (all 3 germ layers) except extra-embryonic placenta',
          'Pluripotent cells exist solely in oak trees',
          'Both mean cancerous tumours',
        ],
        correctOptionIndex: 1,
        explanation: 'Shinya Yamanaka won the Nobel Prize for reprogramming adult skin/blood cells back into iPSCs, bypassing embryonic ethical hurdles.',
        difficulty: 'standard',
      },
      {
        stem: 'Why was **Mitochondrial Replacement Therapy** (popularly called "Three-Parent IVF") developed?',
        options: [
          'To change eye colour of babies',
          'To prevent mothers carrying severe mutations in mitochondrial DNA (mtDNA) from passing fatal neuromuscular/metabolic diseases to their children',
          'To clone adult mammals',
          'To bypass blood group testing',
        ],
        correctOptionIndex: 1,
        explanation: 'Since mitochondria are inherited strictly maternally, transferring parents’ nuclear DNA into a healthy donor egg with normal mitochondria prevents transmission.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Golden Rice** bio-engineered trait was developed to combat widespread childhood blindness and immune deficiency in developing countries?',
        options: [
          'Salt tolerance in oceans',
          'Biosynthesis of **Beta-Carotene (Provitamin A)** directly inside the edible rice endosperm',
          'High caffeine content',
          'Blue flower petals',
        ],
        correctOptionIndex: 1,
        explanation: 'Polished white rice normally lacks Vitamin A precursors; beta-carotene gives Golden Rice its amber hue.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is **Somatic Cell Nuclear Transfer (SCNT)**, famously demonstrated in 1996 when scientists created **Dolly the Sheep** (and applied in India by NDRI Karnal to clone buffaloes)?',
        options: [
          'Growing seeds in space',
          'Replacing an egg cell’s haploid nucleus with the diploid nucleus of an adult body (somatic) cell to produce a genetic clone',
          'Cross-pollinating two different wheat species',
          'Freezing sperm for dairy herds',
        ],
        correctOptionIndex: 1,
        explanation: 'NDRI Karnal successfully applied hand-guided cloning (*Garima, Samrupa, Ganga* calves) to multiply elite indigenous dairy genetics.',
        difficulty: 'standard',
      },
      {
        stem: 'What do **"Monoclonal Antibodies"** (mAbs) refer to in targeted immunotherapy for autoimmune diseases, rabies post-exposure, and oncology?',
        options: [
          'Mixed random animal sera',
          'Laboratory-engineered identical antibody clones derived from a single immune cell lineage targeting one exact specific epitope on an antigen',
          'Herbal plant tannins',
          'Broad-spectrum antibiotics',
        ],
        correctOptionIndex: 1,
        explanation: 'Precision binding minimizes collateral damage to healthy tissues compared to traditional broad chemotherapy.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **DMH-11** crop variety developed by Delhi University scientists (Centre for Genetic Manipulation of Crop Plants) relies on the *barnase–barstar* pollination-control system?',
        options: [
          'GM Potato',
          'GM Hybrid Mustard (Dhara Mustard Hybrid-11)',
          'GM Basmati Rice',
          'GM Tea',
        ],
        correctOptionIndex: 1,
        explanation: 'Mustard is predominantly self-pollinating; *barnase* confers male sterility and *barstar* restores fertility to enable high-yielding F1 hybrids.',
        difficulty: 'standard',
      },
      {
        stem: 'In India’s national **GenomeIndia Project**, led by DBT institutions, what is the primary public-health objective?',
        options: [
          'Collecting cattle ear-tags only',
          'Sequencing 10,000+ whole human genomes across India’s diverse population groups to build an indigenous reference map for precision medicine and rare genetic disease screening',
          'Banning vaccines nationwide',
          'Exporting personal bank PINs',
        ],
        correctOptionIndex: 1,
        explanation: 'Global genomic databases historically under-represented South Asian diversity; GenomeIndia bridges precision diagnostics for India.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Artificial Intelligence, Quantum Computing, 5G & Cybersecurity',
    materialTitle: 'AI, Quantum Computing, 5G & Cybersecurity — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Generative AI, Quantum Qubits, 5G/6G, Blockchain & Cyber Defence',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Artificial Intelligence, Quantum Computing, 5G & Cybersecurity

## 1. Artificial Intelligence (AI), Machine Learning & Deepfake Challenges
- **Hierarchy:** **AI** (broad science of intelligent machines) $\\supset$ **Machine Learning (ML)** (algorithms learning patterns from data: *Supervised, Unsupervised, Reinforcement*) $\\supset$ **Deep Learning (DL)** (multi-layered artificial neural networks) $\\supset$ **Generative AI / LLMs** (*Transformer* architecture generating novel text, code, images, speech).
- **IndiaAI Mission (Cabinet approved ~Rs 10,372 Cr, 2024):** Building sovereign national **GPU compute infrastructure** (10,000+ GPUs via PPP), *AIKosh* indigenous datasets, *Bhashini* multilingual Indian-language translation, and Safe & Trusted AI governance.
- **Risks & Ethics:** Algorithmic bias, copyright disputes, job transition, hallucination, and **Deepfakes** (AI-synthesized deceptive audio/video impersonation combating via watermarking/forensic detection).

## 2. Quantum Computing & India's National Quantum Mission (NQM)
- **Classical Bit vs Quantum Qubit:** Classical computer bits exist strictly as `0` **OR** `1`. A **Qubit** exploits quantum mechanics:
  - **Superposition:** Simultaneously exists in coherent linear combination of `0` and `1` until measured.
  - **Entanglement:** Correlated multi-qubit states acting instantaneously in concert, enabling exponential speedups for **drug discovery/molecular simulation, logistics optimization, and RSA cryptographic factoring (*Shor’s algorithm*)**!
- **National Quantum Mission (2023–2031; ~Rs 6,003 Cr, DST):** Aims to build **50–1,000 physical qubit** intermediate-scale quantum computers, **2,000 km satellite/fibre Quantum Key Distribution (QKD)** unhackable networks, and **4 Thematic Hubs** (*Quantum Computing, Quantum Communication, Quantum Sensing & Metrology, Quantum Materials*).

## 3. 5G, Edge Computing, IoT & Web3 / Blockchain
- **5G Pillars:** **eMBB** (ultra-high multi-Gbps broadband), **URLLC** (Ultra-Reliable Low-Latency ~1 ms for remote robotic surgery & autonomous vehicles), **mMTC** (massive Internet of Things / smart hill landslide sensors!). *Standalone (SA)* 5G runs dedicated 5G core unlike *Non-Standalone (NSA)* riding 4G LTE cores.
- **Blockchain / Distributed Ledger:** Cryptographically linked immutable blocks shared across nodes without central single point of failure (*hash chains + consensus*: Proof-of-Work / Proof-of-Stake). Distinguishing **Blockchain tech** (land records, supply-chain traceability, academic credentials) from speculative unbacked **Cryptocurrencies** (CBDC **e-Rupee** is sovereign legal tender issued by RBI!).

## 4. Cybersecurity Architecture & Common Threat Vectors
- **Malware Types:** **Ransomware** (encrypts files demanding ransom, e.g., *WannaCry*), **Trojan Horse** (disguised legitimate software opening backdoors), **Worm** (self-replicates across networks without human clicks), **Spyware / Pegasus-style zero-click exploits**, **Phishing** (deceptive links/SMS stealing OTPs/credentials), **DDoS** (flooding servers with botnet traffic).
- **Zero-Trust Security:** *"Never trust, always verify"*—continuous identity verification, least privilege, End-to-End Encryption (E2EE), Multi-Factor Authentication (MFA).
- **India’s Cyber Defence Institutions:** **CERT-In** (*Computer Emergency Response Team — India*, MeitY; **6-hour mandatory cyber-incident reporting** directive), **NCIIPC** (*National Critical Information Infrastructure Protection Centre* protecting power grids/banks/railways), **I4C** (*Indian Cyber Crime Coordination Centre*, MHA + **1930 National Cyber Fraud Helpline**), **Digital Personal Data Protection (DPDP) Act, 2023** (*Data Fiduciary obligations & consent*).

## 5. Key Revision Takeaways
- **Qubit** harnesses **Superposition** & **Entanglement**; **QKD** ensures tamper-evident quantum-secure encryption.
- **CERT-In** handles national cyber incident response (**MeitY**); **NCIIPC** guards **Critical Information Infrastructure**; **1930** is financial cyber-fraud helpline.
- **Standalone 5G** enables sub-millisecond **URLLC** and massive **IoT** sensor grids.`,
    mcqs: [
      {
        stem: 'Which two quantum-mechanical properties allow a **Quantum Bit (Qubit)** to outperform classical binary bits (`0` or `1`) on complex optimization, molecular simulation, and factoring tasks?',
        options: [
          'Gravity and Thermal Expansion',
          'Quantum Superposition and Entanglement',
          'Viscosity and Surface Tension',
          'Refraction and Dispersion',
        ],
        correctOptionIndex: 1,
        explanation: 'Superposition lets qubits occupy combined `|0>` and `|1>` amplitudes simultaneously, while Entanglement links qubits across multi-qubit computational spaces.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which national agency under the Ministry of Electronics & IT (MeitY) serves as India’s statutory nodal cyber-security responder issuing vulnerability alerts and mandating 6-hour cyber-incident reporting?',
        options: ['SEBI', 'CERT-In', 'TRAI', 'NABARD'],
        correctOptionIndex: 1,
        explanation: 'CERT-In operates 24x7 threat monitoring, incident response, and Cyber Swachhta Kendra malware cleaning tools.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which specialized national body created under Section 70A of the IT Act, 2000 protects India’s **Critical Information Infrastructure** (such as power grids, banking backbones, nuclear plants, and air-traffic control)?',
        options: [
          'NCIIPC (National Critical Information Infrastructure Protection Centre)',
          'NCERT',
          'Election Commission',
          'FSSAI',
        ],
        correctOptionIndex: 0,
        explanation: 'Operating under NTRO, NCIIPC protects sectors whose disruption could debilitate national security, economy, or public safety.',
        difficulty: 'standard',
      },
      {
        stem: 'What national toll-free helpline number operates under **I4C (Ministry of Home Affairs)** so victims of online UPI/OTP/financial cyber fraud in India can report losses immediately to freeze siphoned funds?',
        options: ['100', '1930 (paired with cybercrime.gov.in)', '139', '1991'],
        correctOptionIndex: 1,
        explanation: 'Swift reporting on 1930 within the "golden hour" lets nodal cyber police place liens on recipient bank accounts before funds exit.',
        difficulty: 'foundation',
      },
      {
        stem: 'In cybersecurity, what characterizes **Ransomware** compared to a **DDoS (Distributed Denial-of-Service)** attack?',
        options: [
          'DDoS physically steals computer keyboards',
          'Ransomware encrypts a victim’s files/databases and demands payment for decryption keys, whereas DDoS overwhelms servers/websites with massive botnet traffic to knock services offline',
          'Ransomware boosts internet speed',
          'Both are harmless antivirus updates',
        ],
        correctOptionIndex: 1,
        explanation: 'WannaCry and hospital/utility lockups illustrate ransomware’s extortion impact; offline immutable backups mitigate it.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the fundamental distinction between **Supervised** and **Unsupervised** Machine Learning?',
        options: [
          'Supervised ML needs zero computers',
          'Supervised learning trains on **labelled input–output examples** (e.g., classifying spam vs genuine mail), whereas Unsupervised learning discovers hidden clusters/patterns inside **unlabelled data**',
          'Unsupervised learning requires human manual typing for every single row',
          'Both require exact quantum chips',
        ],
        correctOptionIndex: 1,
        explanation: 'Reinforcement Learning forms a third major paradigm where agents learn optimal policies through environment rewards and penalties.',
        difficulty: 'standard',
      },
      {
        stem: 'Which three hallmark technical capabilities define **5G** mobile wireless standards compared to 4G LTE?',
        options: [
          'Zero wireless waves, 1G speed, wired plugs',
          'Enhanced Mobile Broadband (eMBB), Ultra-Reliable Low-Latency Communications (URLLC ~1 ms), and Massive Machine-Type Communications (mMTC / IoT)',
          'Analogue AM radio only',
          'Mandatory landline cables',
        ],
        correctOptionIndex: 1,
        explanation: 'Low latency (URLLC) supports real-time remote healthcare and drones; mMTC connects thousands of landslide/soil IoT sensors per sq km.',
        difficulty: 'standard',
      },
      {
        stem: 'How does **Quantum Key Distribution (QKD)** guarantee physically tamper-evident cryptographic communication over optical fibres or satellites?',
        options: [
          'Using ultra-long handwritten passwords',
          'Encoding encryption keys onto fragile quantum photon states—any eavesdropper attempting to intercept/measure the photons irreversibly disturbs their quantum state, instantly alerting sender & receiver',
          'Locking servers inside wooden boxes',
          'Turning off internet routers',
        ],
        correctOptionIndex: 1,
        explanation: 'Rooted in the Quantum No-Cloning Theorem, QKD defeats future quantum decryption attacks like Shor’s algorithm.',
        difficulty: 'standard',
      },
      {
        stem: 'What is a **"Zero-Day Vulnerability"** in software cybersecurity?',
        options: [
          'A software trial lasting zero days',
          'A newly discovered security flaw unknown to the software vendor—leaving **zero days** of available patch protection before attackers exploit it',
          'A computer turning off at midnight',
          'Forgotten Wi-Fi password',
        ],
        correctOptionIndex: 1,
        explanation: 'Attackers race to exploit zero-day flaws before vendors issue emergency security updates.',
        difficulty: 'standard',
      },
      {
        stem: 'Under India’s **Digital Personal Data Protection (DPDP) Act, 2023**, what are the entities deciding the purpose and means of processing a citizen’s ("Data Principal’s") digital personal data legally called?',
        options: [
          'Data Pirates',
          'Data Fiduciaries',
          'Crypto Miners',
          'DNS Registrars',
        ],
        correctOptionIndex: 1,
        explanation: 'Data Fiduciaries (and Significant Data Fiduciaries) bear legal duties for explicit notice, valid consent, breach notification, and erasure.',
        difficulty: 'standard',
      },
      {
        stem: 'What makes a **Blockchain** ledger virtually tamper-proof without relying on a single central bank administrator?',
        options: [
          'Storing data in secret MS Excel sheets',
          'Each block embeds a cryptographic hash of the previous block and is replicated across decentralized nodes via consensus—altering any old record breaks every subsequent hash visibly',
          'Printing ledgers on stone tablets',
          'Blocking all internet access',
        ],
        correctOptionIndex: 1,
        explanation: 'Hash-chaining + distributed consensus give land registries, supply chains, and certificates verifiable immutability.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Government of India AI platform under MeitY aims specifically to enable real-time **voice-to-voice and text translation across India’s 22 Scheduled languages**?',
        options: ['BHIM', 'Bhashini (National Language Translation Mission)', 'UMANG', 'FASTag'],
        correctOptionIndex: 1,
        explanation: 'Bhashini bridges digital public infrastructure (UPI, e-courts, agriculture advisories) for citizens in their native regional tongues.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is a **Deepfake**?',
        options: [
          'Deep-sea submarine sonar glitch',
          'Synthetic audio, image, or video media convincingly manipulated using Deep Learning (GANs/Diffusion models) to impersonate real individuals saying or doing things they never did',
          'Encrypted military radio',
          'A damaged fibre-optic cable',
        ],
        correctOptionIndex: 1,
        explanation: 'Combatting malicious deepfakes combines platform provenance tagging, AI forensic detection, and IT Rules 2021 takedown compliance.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under India’s **National Quantum Mission (NQM)** approved for 2023–2031, up to what scale of intermediate-scale **quantum computers** does India aim to develop within 8 years?',
        options: [
          '2 qubits',
          '50 to 1,000 physical qubits across superconducting and photonic platforms',
          '10 billion qubits in 1 year',
          'Purely mechanical abacus systems',
        ],
        correctOptionIndex: 1,
        explanation: 'NQM also funds 4 national Thematic Hubs and 2,000-km satellite/terrestrial QKD secure communication links.',
        difficulty: 'standard',
      },
      {
        stem: 'What does **"Zero-Trust Architecture"** mean in modern enterprise and government cloud security?',
        options: [
          'Never locking office doors',
          'Eliminating implicit trust inside internal networks—requiring continuous authentication, device posture checks, encryption, and least-privilege access for every request regardless of location',
          'Disabling all passwords altogether',
          'Allowing public anonymous admin login',
        ],
        correctOptionIndex: 1,
        explanation: 'Once attackers breach perimeters via phishing, Zero-Trust micro-segmentation prevents easy lateral movement across servers.',
        difficulty: 'standard',
      },
    ],
  },
];
