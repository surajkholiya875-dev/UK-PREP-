import { TopicContentPackage } from './types';

export const SOCIETY_SOCIAL_JUSTICE_TOPICS: TopicContentPackage[] = [
  {
    topicTitle: 'Salient Features of Indian Society & Cultural Diversity',
    materialTitle: 'Indian Social Structure, Unity in Diversity, Caste, Family & Tribes — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Indian Society, Diversity, Caste & Family Dynamics',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Salient Features of Indian Society & Cultural Diversity

## 1. Foundations of Indian Pluralism & Cultural Continuity
- **Syncretism & Multi-Layered Diversity:** Coexistence of major language families (**Indo-Aryan, Dravidian, Austro-Asiatic, Tibeto-Burman**), religious traditions, and regional subcultures—from **Jaunsar–Bawar, Johar, Garhwal, Kumaon** in the Himalaya to Deccan and coastal regions.
- **Assimilation vs Integration:** Indian federalism integrates diversity via linguistic states, Eighth Schedule recognition (22 languages), and fundamental cultural rights (**Articles 29–30**).

## 2. Core Social Institutions & Structural Change
- **Family & Marriage Evolution:** Shift from extended/joint households toward **nuclear** and **neo-local** families under urbanization and migration *(e.g., remittance-dependent female-headed households in hill districts of Uttarakhand!)*.
- **Caste (*Jati* vs *Varna*):**
  - *Varna* (4-fold textual model) vs *Jati* (endogamous occupational/kinship groups, dynamic via **Sanskritization** — M.N. Srinivas).
  - Contemporary shifts: Inter-caste mobility, **caste-as-political-identity**, legal abolition of untouchability (**Article 17**; *PCR Act 1955*, *SC/ST PoA Act 1989*), yet persistence in marital endogamy and informal labour segmentation.
- **Tribal Societies in India & Uttarakhand:** **Article 342** Scheduled Tribes (~8.6% nationally); **5 STs in Uttarakhand** (**Tharu, Jaunsari, Bhotiya, Bhoxa, Raji** — note **Raji** is a PVTG) transitioning from pastoral/transhumant/shifting systems into education and service roles while balancing **Forest Rights Act (2006)** & **PESA (1996)** protections.

## 3. UKPSC Mains Analytical Lens
- **Demographic Dividend vs Regional Ageing:** While India enjoys a young working-age bulge, out-migration has caused **localized ageing** and **"ghost villages"** in interior hill blocks of Pauri and Almora.

## 4. Key Revision Takeaways
- **M.N. Srinivas** coined *Sanskritization* and *Dominant Caste*; **Article 17** abolishes untouchability; **Articles 29–30** protect cultural/educational rights.
- Hill out-migration reshapes Uttarakhand’s **nuclear/female-headed household** landscape.`,
    mcqs: [
      {
        stem: 'Which Indian sociologist formulated the influential concepts of **"Sanskritization"** and **"Dominant Caste"** while analyzing social mobility within India’s caste structure?',
        options: ['G.S. Ghurye', 'M.N. Srinivas', 'A.R. Desai', 'Iravati Karve'],
        correctOptionIndex: 1,
        explanation: 'M.N. Srinivas introduced "Sanskritization" (emulation of upper-caste rituals/practices for upward status) and "Dominant Caste" in his Rampura village studies.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under which **Articles of the Indian Constitution** are the **Protection of Cultural and Educational Rights of Minorities** explicitly guaranteed?',
        options: ['Articles 14 and 15', 'Articles 29 and 30', 'Articles 44 and 45', 'Articles 330 and 332'],
        correctOptionIndex: 1,
        explanation: 'Article 29 protects distinct language, script, and culture of any section of citizens, while Article 30 grants religious and linguistic minorities the right to establish and administer educational institutions.',
        difficulty: 'foundation',
      },
      {
        stem: 'How does **out-migration of working-age males from Uttarakhand’s interior hill districts** visibly transform local **household and social structure**?',
        options: [
          'It creates massive industrial slums inside alpine valleys',
          'It produces a high share of female-headed households ("Money-Order Economy"), localized rural ageing, and erosion of traditional joint-family agricultural labour',
          'It ends all remittances',
          'It eliminates all rural schools overnight',
        ],
        correctOptionIndex: 1,
        explanation: 'Male out-migration leaves hill women managing agriculture, fuelwood/water collection, childcare, and elders ("Money-Order / Remittance Economy").',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **four major linguistic families** of the world are natively represented within India’s diverse population?',
        options: [
          'Indo-Aryan, Uralic, Semitic, Bantu',
          'Indo-Aryan, Dravidian, Austro-Asiatic (Munda/Khasi), and Tibeto-Burman (Sino-Tibetan — including Bhotiya/Rung dialects of Uttarakhand!)',
          'Celtic, Slavic, Finnic, Turkic',
          'Polynesian, Algonquian, Indo-European, Niger-Congo',
        ],
        correctOptionIndex: 1,
        explanation: 'India uniquely encompasses all four linguistic stocks—with Uttarakhand’s Bhotiya/Byansi/Darmiya/Raji speeches belonging to the Tibeto-Burman family alongside Indo-Aryan Garhwali/Kumaoni.',
        difficulty: 'standard',
      },
      {
        stem: 'What distinguishes **Varna** from **Jati** in classical and sociological study of Indian society?',
        options: [
          'Varna has over 3,000 localized occupational groups while Jati has only 4',
          'Varna is a 4-tier idealized pan-Indian textual classification, whereas Jati comprises thousands of real endogamous, region-specific birth groups',
          'Both terms mean exactly the same regional village council',
          'Jati exists only in urban metros',
        ],
        correctOptionIndex: 1,
        explanation: 'Actual everyday marriage, commensality, and local ranking revolve around Jatis rather than the abstract fourfold Varna schema.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which constitutional **Article** abolishes **"Untouchability"** in all forms and forbids its practice, enforced by the **Protection of Civil Rights Act, 1955**?',
        options: ['Article 16', 'Article 17', 'Article 23', 'Article 25'],
        correctOptionIndex: 1,
        explanation: 'Article 17 is an absolute fundamental right applicable against both state and private individuals.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Uttarakhand Scheduled Tribe** is officially classified by the Government of India as a **Particularly Vulnerable Tribal Group (PVTG)**?',
        options: ['Tharu', 'Raji (Banrawat)', 'Jaunsari', 'Bhotiya'],
        correctOptionIndex: 1,
        explanation: 'Among Uttarakhand’s 5 STs (and 75 PVTGs across India), both **Raji** and **Bhoxa** are recognized PVTGs (Raji being the smallest hill-forest PVTG in Pithoragarh).',
        difficulty: 'standard',
      },
      {
        stem: 'Which **sociological trend** describes joint families breaking into separate residential kitchens due to urban jobs while still retaining **emotional ties, shared rituals, and financial support** across cities and villages?',
        options: [
          'Total kinship collapse',
          'Nuclearization in residence paired with "Functional Jointness"',
          'Feudal serfdom',
          'Secularization of language',
        ],
        correctOptionIndex: 1,
        explanation: 'Sociologist I.P. Desai noted that Indian urban nuclear households often remain "functionally joint" through mutual aid, festivals, and shared crises.',
        difficulty: 'standard',
      },
      {
        stem: 'Under **Article 342**, who is constitutionally empowered to **notify a community as a Scheduled Tribe (ST)** for a State/UT (after consulting the Governor), and who can subsequently **modify** that list?',
        options: [
          'Chief Minister alone',
          'Initially the President by public notification; subsequent inclusions/exclusions require an Act of Parliament',
          'District Magistrate',
          'State Election Commission',
        ],
        correctOptionIndex: 1,
        explanation: 'Under Article 342(1)–(2), initial presidential notification is followed strictly by Parliamentary legislation for any additions or deletions.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **statutory Act (1996)** extends Panchayati Raj self-governance powers specifically to **Fifth Schedule Tribal Areas**, empowering the Gram Sabha over minor forest produce and land alienation?',
        options: [
          'MGNREGA 2005',
          'PESA (Panchayats Extension to Scheduled Areas) Act, 1996',
          'FEMA 1999',
          'RTGS Act 2007',
        ],
        correctOptionIndex: 1,
        explanation: 'PESA 1996 (recommended by the Bhuria Committee) safeguards tribal self-rule in Fifth Schedule states.',
        difficulty: 'foundation',
      },
      {
        stem: 'How does **Unity in Diversity** in Indian society differ conceptually from **"Melting Pot" assimilation**?',
        options: [
          'Unity in Diversity forces everyone to speak one single language',
          'Cultural pluralism preserves distinct regional, linguistic, and religious identities within a shared constitutional framework rather than erasing differences',
          'It rejects any common national constitution',
          'It applies only to religious festivals',
        ],
        correctOptionIndex: 1,
        explanation: 'India exemplifies a "Salad Bowl / Mosaic" integration model rather than homogenizing assimilation.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **traditional kinship / marriage custom** in **Jaunsar–Bawar (Dehradun)** historically drew anthropological study before modern education and social reform largely phased it out?',
        options: [
          'Matrilineal Khasi system',
          'Traditional fraternal polyandry (alongside joint family land retention)',
          'Kulinism of Bengal',
          'Swayamvara',
        ],
        correctOptionIndex: 1,
        explanation: 'Historical anthropologists (D.N. Majumdar, Gerald Berreman) documented fraternal polyandry in Jaunsar–Bawar designed partly to prevent fragmentation of scarce terraced holdings.',
        difficulty: 'standard',
      },
      {
        stem: 'Which factor has **accelerated caste’s transformation from a purely ritual hierarchy into an interest-group network** in modern India ("Politicization of Caste" — Rajni Kothari)?',
        options: [
          'Abolition of elections',
          'Universal adult franchise, electoral mobilization, and competitive coalition politics',
          'Ban on newspapers',
          'Closure of highways',
        ],
        correctOptionIndex: 1,
        explanation: 'Political scientist Rajni Kothari demonstrated how democratic electoral competition turns traditional caste identities into secular bargaining blocs.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **national statutory commission** monitors safeguards and investigates complaints specifically for **Scheduled Tribes** under **Article 338A**?',
        options: [
          'NCSC (Art. 338)',
          'National Commission for Scheduled Tribes (NCST, Art. 338A)',
          'NCBC (Art. 338B)',
          'NHRC',
        ],
        correctOptionIndex: 1,
        explanation: 'The 89th Constitutional Amendment Act (2003) bifurcated the combined commission into NCSC (Article 338) and NCST (Article 338A).',
        difficulty: 'foundation',
      },
      {
        stem: 'Why does India’s **Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006 (FRA)** matter for hill conservation and social justice?',
        options: [
          'It privatizes all national parks to corporations',
          'It legally recognizes individual & community habitat/minor-forest-produce rights of forest-dwelling communities while linking conservation with Gram Sabha consent',
          'It bans Van Panchayats',
          'It applies only to urban zones',
        ],
        correctOptionIndex: 1,
        explanation: 'FRA 2006 corrects historical injustice to tribal and long-term forest dwellers by vesting IFR, CFR, and habitat rights.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Role of Women, Women\'s Organizations & Gender Issues',
    materialTitle: 'Women in Indian & Uttarakhand Society, Constitutional Safeguards & SHGs — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Gender Issues, Women Movements & Uttarakhand Initiatives',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Role of Women, Women’s Organizations & Gender Issues

## 1. The Backbone of Uttarakhand’s Mountain Society & Movements
- **Women as Eco-Custodians & Breadwinners:** Hill women sustain agriculture, fodder/water management, livestock, and **Van Panchayats** (*50% representation in Uttarakhand PRIs & Van Panchayats*).
- **Pioneers of Social & Ecological Movements:**
  - **Chipko Movement (1974):** **Gaura Devi** & Mahila Mangal Dal of **Reni village (Chamoli)**.
  - **Anti-Liquor Agitation (*Nasha Nahi Rozgar Do*, 1984):** Led widely by Kumaon–Garhwal rural women alongside Uttarakhand Sangharsh Vahini.
  - **Maiti Movement (1995):** **Kalyan Singh Rawat** (Gwaldam) empowering brides to plant a memory sapling nurtured by village women (*Maiti Behans*).
  - **Statehood Agitation (1994):** Active mobilization across Dehradun, Mussoorie (*Hansa Dhanai, Belmati Chauhan*), Khatima, and Rampur Tiraha.

## 2. Structural Gender Challenges in India & Uttarakhand
- **Economic Participation Gap:** High rural female labour participation in unpaid hill farm work contrasts with low formal-sector wage share and **"missing women" in urban skilled work**.
- **Sex Ratio & Child Sex Ratio (Census 2011):** Uttarakhand’s overall **Sex Ratio (963)** outpaces the national average (943) — topped by **Almora (1,139)** — yet **Child Sex Ratio (0–6 yrs) dropped sharply to 890** (steepest dips in **Pithoragarh 816** and **Champawat**)!
- **Safety, Unpaid Care Work & Anemia:** Anaemia prevalence (NFHS-5), digital gender divide, and workplace safety.

## 3. Constitutional, Legal & Institutional Framework
- **Constitutional Provisions:** **Article 14**, **Article 15(3)** (affirmative state laws for women & children), **Article 16**, **Article 39(a)/(d)** (equal pay for equal work), **Article 42** (maternity relief), **Article 243D/243T** (min. 1/3rd — **50% in Uttarakhand PRIs!**), **106th Amendment Act (2023)** (33% Lok Sabha & Assembly quota).
- **Key Protective Statutes:** *Dowry Prohibition Act 1961*, *Equal Remuneration Act 1976*, *Protection of Women from Domestic Violence Act (PWDVA) 2005*, *POSH Act (Workplace Sexual Harassment) 2013* (Vishaka Guidelines 1997!), *Maternity Benefit (Amendment) Act 2017* (26 weeks paid leave).
- **Uttarakhand Flagships:** **30% Horizontal Reservation for Domicile Women**, **Nanda Gaura Yojana**, **Lakhpati Didi / Sashakt Bahna Utsav**, **Mahila Poshan Yojana**, **One Stop Centres (Sakhi)**.

## 4. Key Revision Takeaways
- **Child Sex Ratio (0–6)** in Uttarakhand fell to **890** (Pithoragarh lowest at **816**) even while adult Sex Ratio was **963**!
- **POSH Act 2013** codified **Vishaka Guidelines (1997)**; **Uttarakhand PRIs & state domicile women** enjoy **50% PRI** and **30% state-job horizontal** quotas respectively.`,
    mcqs: [
      {
        stem: 'According to the **2011 Census**, what sharp demographic paradox was observed between Uttarakhand’s **Overall Sex Ratio** and its **Child Sex Ratio (0–6 years)**?',
        options: [
          'Overall Sex Ratio was 850 while Child Sex Ratio was 1,050',
          'Overall Sex Ratio stood relatively healthy at 963 (above India’s 943), yet Child Sex Ratio (0–6) fell sharply to 890 (with Pithoragarh as low as 816)',
          'Both stood above 1,000',
          'Hill districts had higher Child Sex Ratio than adults everywhere',
        ],
        correctOptionIndex: 1,
        explanation: 'High adult sex ratios in hill districts reflect male out-migration, whereas the declining Child Sex Ratio (890; Pithoragarh 816, Champawat 873) revealed alarming son-preference / prenatal sex-selection pressures.',
        difficulty: 'standard',
      },
      {
        stem: 'What percentage of seats in **Panchayati Raj Institutions (Gram, Kshetra, Zila Panchayats)** are statutorily reserved for **women in Uttarakhand**?',
        options: ['33%', '40%', '50% (increased from 33% in 2008 and retained under Uttarakhand PR Act 2016)', '25%'],
        correctOptionIndex: 2,
        explanation: 'Uttarakhand raised women’s reservation in PRIs and urban local bodies to 50% (joining states like Bihar, MP, and HP), transforming grassroots village leadership.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **1997 Supreme Court judgment** laid down binding workplace sexual-harassment norms prior to Parliament enacting the **POSH Act, 2013**?',
        options: [
          '*Shah Bano v. Mohd. Ahmed Khan*',
          '*Vishaka v. State of Rajasthan*',
          '*Shayara Bano v. Union of India*',
          '*Joseph Shine v. Union of India*',
        ],
        correctOptionIndex: 1,
        explanation: 'In *Vishaka v. State of Rajasthan* (1997), the Supreme Court invoked Articles 14, 19, 21 and CEDAW to frame the Vishaka Guidelines, later codified in the 2013 POSH Act.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Constitutional **Article** specifically empowers the State to make **special affirmative provisions for women and children** (such as women’s reservations, scholarships, or maternity shelters) without violating equality norms?',
        options: ['Article 14', 'Article 15(3)', 'Article 20', 'Article 32'],
        correctOptionIndex: 1,
        explanation: 'Article 15(3) serves as the constitutional foundation for protective and affirmative legislation benefiting women and children.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the **Maternity Benefit (Amendment) Act, 2017**, paid maternity leave for eligible female employees (for the first two surviving children) was extended from 12 weeks to:',
        options: ['16 weeks', '20 weeks', '26 weeks', '36 weeks'],
        correctOptionIndex: 2,
        explanation: 'The 2017 Amendment increased paid maternity leave to 26 weeks for the first two children (12 weeks for third child onward and commissioning/adoptive mothers) plus crèche mandates for >=50 employees.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which merged flagship **Uttarakhand State Government scheme** combines adolescent/girl-child birth incentive and Class 12 higher-education financial assistance for BPL/economically weaker families?',
        options: [
          'Beti Bachao Urban Loan',
          'Nanda Gaura Yojana (merging Nanda Devi Kanya Yojana and Gaura Devi Kanya Dhan)',
          'Atal Pension Yojana',
          'Teelu Rauteli Dam Fund',
        ],
        correctOptionIndex: 1,
        explanation: 'Nanda Gaura Yojana disburses ₹11,000 at a girl’s birth and ₹51,000 upon passing Class 12 (up to two daughters per eligible family) to curb female foeticide and boost girls’ schooling.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Uttarakhand state-level award**, named after a 17th-century Garhwali warrior heroine, honours **exceptional women achievers** in social service, entrepreneurship, adventure, and rural empowerment?',
        options: [
          'Rani Karnavati Trophy',
          'Teelu Rauteli State Stree Shakti Award',
          'Gaura Devi Peace Prize',
          'Jiyaraani Medal',
        ],
        correctOptionIndex: 1,
        explanation: 'Every year on 8 August (Teelu Rauteli’s birth anniversary), Uttarakhand confers the Teelu Rauteli Award alongside Anganwadi Worker awards.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the distinction between **"Vertical Reservation"** and **"Horizontal Reservation"** as applied in **Uttarakhand’s 30% Women’s Quota** in public services?',
        options: [
          'Horizontal reservation applies only to private companies',
          'Vertical reservation applies to social categories (SC/ST/OBC/EWS), while Horizontal reservation cuts across EVERY vertical category internally to ensure women occupy >=30% seats within each category',
          'Horizontal reservation reduces total vacancies by 30%',
          'Vertical reservation has no merit list',
        ],
        correctOptionIndex: 1,
        explanation: 'As clarified by the Supreme Court in *Indra Sawhney* and *Rajesh Kumar Daria*, women’s reservation is interlocking horizontal reservation within respective vertical categories.',
        difficulty: 'standard',
      },
      {
        stem: 'Which pioneering **1974 Reni Village (Chamoli) Mahila Mangal Dal leader** confronted commercial loggers hugging deodar/ash trees to protect fragile mountain watersheds?',
        options: ['Kunti Verma', 'Gaura Devi', 'Sarala Behn', 'Hansa Dhanai'],
        correctOptionIndex: 1,
        explanation: 'Gaura Devi (with 27 village women of Reni) halted timber contractors in March 1974, catalyzing the global Chipko eco-feminist movement.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the **Protection of Women from Domestic Violence Act (PWDVA), 2005**, what type of abuse is legally recognized alongside physical violence?',
        options: [
          'Only visible bone fractures',
          'Physical, sexual, verbal/emotional, AND economic abuse (including denial of shelter/maintenance)',
          'Only dowry demands above ₹1 lakh',
          'Only workplace disputes',
        ],
        correctOptionIndex: 1,
        explanation: 'PWDVA 2005 is a civil-protective statute covering wives, daughters, mothers, and live-in partners against physical, sexual, emotional, and economic abuse.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **two early social-reform women’s organizations** played major roles in pre-Independence mobilization across India (founded 1917 & 1927 respectively)?',
        options: [
          'SEWA and Chipko',
          'Women’s Indian Association (WIA, Annie Besant/Margaret Cousins) and All India Women’s Conference (AIWC)',
          'Mahila Dakshata Samiti and Bharatiya Mahila Sangh (1980)',
          'Sakhi One Stop and Kudumbashree',
        ],
        correctOptionIndex: 1,
        explanation: 'WIA (Madras, 1917) and AIWC (1927) championed women’s franchise, Sarda Act (1929), and girls’ education.',
        difficulty: 'standard',
      },
      {
        stem: 'Why does **feminization of hill agriculture** in Uttarakhand often coexist with **economic disempowerment** unless targeted reforms intervene?',
        options: [
          'Because women refuse to farm',
          'Women perform the bulk of farm labour yet frequently lack formal land-title (*Khatauni*) ownership, limiting collateralized bank credit and FPO membership',
          'Hill farms produce zero crops',
          'Machines cannot enter valleys',
        ],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand’s co-ownership land-record reform (granting wives **joint land rights / Sah-Khatedar** status in ancestral land) aims directly at bridging credit and extension access.',
        difficulty: 'standard',
      },
      {
        stem: 'Which recent **Uttarakhand land-reform legislation** granted **co-ownership rights to wives in their husband’s ancestral agricultural land** to empower women farmers left managing rural holdings?',
        options: [
          'Forest Rights Amendment 2010',
          'Uttarakhand Zamindari Abolition & Land Reforms (Amendment) Act, 2021',
          'Urban Ceiling Act 1976',
          'Tea Garden Ordinance 2005',
        ],
        correctOptionIndex: 1,
        explanation: 'In 2021, Uttarakhand became one of the first Indian states to statutorily grant wives co-ownership (*Sah-Khatedar*) rights in husbands’ ancestral holdings.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Directive Principle of State Policy (Article 39(d))** mandates that citizens—men and women equally—have the right to:',
        options: [
          'Free internet access',
          'Equal pay for equal work for both men and women',
          'Free overseas travel',
          '50% tax exemption',
        ],
        correctOptionIndex: 1,
        explanation: 'Article 39(d) directs equal pay for equal work (enforced via Equal Remuneration Act 1976 & Code on Wages 2019).',
        difficulty: 'foundation',
      },
      {
        stem: 'What are **Sakhi Centres (One Stop Centres)** funded under **Mission Shakti** across all 13 districts of Uttarakhand designed to provide?',
        options: [
          'Commercial banking loans only',
          'Integrated single-roof emergency medical, police, legal aid, psycho-social counselling, and temporary shelter for women affected by violence',
          'Tourist cab permits',
          'Seed distribution',
        ],
        correctOptionIndex: 1,
        explanation: 'One Stop Centres (Sakhi) operate round-the-clock with Women Helpline **181** to ensure holistic support under one roof.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Urbanization, Globalization, Regionalism & Communalism',
    materialTitle: 'Modern Social Transformations: Urbanization, Globalization, Regionalism & Communalism — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Urbanization, Hill Carrying Capacity, Globalization & Secularism',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Urbanization, Globalization, Regionalism & Communalism

## 1. Urbanization Trends: National & Uttarakhand Context
- **Census 2011 Benchmark:** India = **31.16%** urban; **Uttarakhand = 30.23% urban** — however, growth is heavily skewed toward **3 plain/foothill hubs (Dehradun 55.52%, Nainital 38.94%, Haridwar 36.66%, US Nagar 35.58%)** while interior hill districts (**Bageshwar 3.49%, Rudraprayag 4.10%, Almora 10.01%**) remain overwhelmingly rural!
- **Himalayan Urban Challenges:** Unregulated slope construction & subsidence (**Joshimath 2023**), inadequate stormwater/solid-waste infrastructure under seasonal Char Dham & tourist surges (**Nainital, Mussoorie**), urban heat islands in Doon Valley, and peri-urban sprawl eating prime agricultural Terai land.
- **Urban Missions:** **AMRUT 2.0**, **Smart Cities Mission** (*Dehradun*), **Swachh Bharat (Urban)**, **PMAY (Urban)**.

## 2. Globalization & Its Dual Impact on Himalayan Society
- **Positive Dimensions:** Digital market access for hill SHGs/GI products, adventure/wellness tourism boom, higher educational aspiration, remittance inflows, global recognition for yoga (*Rishikesh — World Yoga Capital*).
- **Cultural & Economic Frictions ("McDonaldization" vs *"Glocalization"*):** Youth alienation from traditional mountain farming, erosion of Garhwali/Kumaoni/Bhotiya folk languages, fast-fashion replacing local handloom (*Thulma, Pankhi*), and seasonal commercial dependence.

## 3. Regionalism in India (Constructive vs Exclusionary)
- **Roots of Regionalism:** Linguistic identity, historical neglect, hill-plain developmental asymmetry (**which drove the peaceful democratic Uttarakhand statehood demand from UP for balanced mountain governance!**), resource sharing.
- **Positive Regionalism vs Sub-National Chauvinism:** Positive regionalism strengthens cooperative federalism (**Panchayats, Linguistic States, Gairsain summer capital outreach**); aggressive *"sons-of-the-soil"* chauvinism threatens **Article 19(1)(d)/(e)** free movement & residence and national unity.

## 4. Communalism & Constitutional Secularism
- **Communalism (Bipan Chandra’s 3 stages):** Belief that followers of one religion share identical secular interests -> mutually distinct from other religions -> mutually hostile/incompatible.
- **Indian Secularism (*Sarva Dharma Sambhava* — Principled Distance):** Unlike French rigid separation (*Laïcité*), the Indian Constitution (**Preamble "Secular" — 42nd Amendment, *S.R. Bommai* Basic Structure**, **Articles 25–28**) gives equal respect to all faiths while allowing principled state reform of oppressive practices.

## 5. Key Revision Takeaways
- **Uttarakhand urbanization = 30.23%** (highly concentrated in Dehradun/Nainital/Haridwar/US Nagar; **Bageshwar 3.49%** lowest).
- **Joshimath land subsidence** highlights why Himalayan urbanization must obey **geological carrying capacity**.`,
    mcqs: [
      {
        stem: 'What was **Uttarakhand’s overall urbanization percentage** in the **2011 Census** compared to the all-India average (**31.16%**)?',
        options: ['18.5%', '30.23% (with stark skew toward Doon–Terai plains)', '48.6%', '12.4%'],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand stood at 30.23% urban overall—almost matching India’s 31.16%, yet masking a huge gap between Dehradun (55.52%) and Bageshwar (3.49%).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Uttarakhand city** was selected under India’s flagship **100 Smart Cities Mission**?',
        options: ['Haldwani', 'Dehradun', 'Haridwar', 'Roorkee'],
        correctOptionIndex: 1,
        explanation: 'Dehradun (selected under Smart Cities Mission) implemented Intelligent Traffic Management, Integrated Command & Control Centre (ICCC), and Doon smart drainage upgrades.',
        difficulty: 'foundation',
      },
      {
        stem: 'Sociologist Roland Robertson popularized the term **"Glocalization"** to describe which globalization outcome visible in regions like Uttarakhand?',
        options: [
          'Total ban on foreign tourists',
          'The blending of global platforms/technologies with local culture and artisan products (e.g., global e-commerce & eco-tourism promoting local Aipan, Mandua, and homestays)',
          'Destruction of all local languages by law',
          'Stopping international trade',
        ],
        correctOptionIndex: 1,
        explanation: 'Glocalization ("Think Globally, Act Locally") marries global distribution, yoga branding, or digital payments with indigenous Himalayan crafts and cuisine.',
        difficulty: 'standard',
      },
      {
        stem: 'How does **Indian Constitutional Secularism** differ structurally from the strict Western/French model of **Laïcité**?',
        options: [
          'India prohibits all public religious festivals',
          'Rather than erecting a rigid wall of hostility, Indian secularism follows "principled distance" and equal state respect (*Sarva Dharma Sambhava*), permitting state intervention for social reform (e.g., temple entry, abolishing social evils)',
          'India declares a state religion in Article 25',
          'Western secularism requires religious tax',
        ],
        correctOptionIndex: 1,
        explanation: 'Political theorist Rajeev Bhargava characterizes Indian secularism as "principled distance"—combining freedom of conscience (Arts. 25–28) with reformative intervention (Art. 25(2)).',
        difficulty: 'standard',
      },
      {
        stem: 'Which **landmark Supreme Court ruling (1994)** affirmed that **Secularism is an unamendable part of the Basic Structure** of the Indian Constitution, justifying Article 356 dismissal of governments violating secularism?',
        options: [
          '*Minerva Mills v. UOI*',
          '*S.R. Bommai v. Union of India*',
          '*Maneka Gandhi v. UOI*',
          '*Golaknath v. State of Punjab*',
        ],
        correctOptionIndex: 1,
        explanation: 'The 9-Judge Bench in *S.R. Bommai* (1994) declared federalism and secularism core pillars of the Basic Structure.',
        difficulty: 'foundation',
      },
      {
        stem: 'The **2023 Joshimath land-subsidence crisis** underscored which central warning for **Himalayan urbanization** (highlighted earlier by the **1976 M.C. Mishra Committee Report**)?',
        options: [
          'Mountain towns need deeper underground subways',
          'Building heavy multi-storey concrete structures atop fragile morainic/landslide debris without drainage and carrying-capacity zoning causes slope failure',
          'Glaciers stabilize urban sewage',
          'Highways prevent rainfall',
        ],
        correctOptionIndex: 1,
        explanation: 'The 1976 M.C. Mishra Committee had explicitly warned that Joshimath rests on ancient landslide deposits vulnerable to unlined sewage seepage, slope cutting, and excess load.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **constitutional provision** directly safeguards citizens against exclusionary **"sons-of-the-soil"** regionalism restricting internal migration and trade across Indian states?',
        options: [
          'Article 17 only',
          'Article 19(1)(d) (free movement) & Article 19(1)(e) (reside and settle anywhere in India), alongside Article 16(2)',
          'Article 352',
          'Article 360',
        ],
        correctOptionIndex: 1,
        explanation: 'Single Indian citizenship paired with Articles 19(1)(d)–(e) and 16(2) protects interstate mobility, subject only to reasonable Parliament-enacted residence laws under Art. 16(3) or ST protections under 19(5).',
        difficulty: 'standard',
      },
      {
        stem: 'Why was the **Uttarakhand Statehood Movement (1994–2000)** considered an example of **developmental/administrative regionalism** rather than anti-national separatism?',
        options: [
          'It demanded independence outside India',
          'It sought a separate constitutionally federated Indian state so mountain topography, forests, and scattered villages could receive tailored governance',
          'It opposed all railways and roads',
          'It banned Hindi',
        ],
        correctOptionIndex: 1,
        explanation: 'Like Jharkhand and Chhattisgarh created in Nov 2000, Uttarakhand expressed democratic aspiration for smaller, ecologically responsive hill administration within the Union.',
        difficulty: 'foundation',
      },
      {
        stem: 'Historian **Bipan Chandra** identified **communalism** as progressing through three ideological stages. What characterizes its **most dangerous extreme third stage**?',
        options: [
          'Celebrating festivals with neighbours',
          'Claiming that different religious communities have mutually hostile, irreconcilable interests and cannot coexist safely as equal citizens',
          'Teaching comparative religion in universities',
          'Joining charitable trusts',
        ],
        correctOptionIndex: 1,
        explanation: 'While Stage 1 sees common secular interests and Stage 2 sees merely distinct interests, Stage 3 turns difference into mutual antagonism and fear.',
        difficulty: 'standard',
      },
      {
        stem: 'What does **"Urban Carrying Capacity"** imply for iconic Uttarakhand hill stations like **Nainital and Mussoorie**?',
        options: [
          'Maximum number of hotels a builder wants',
          'The upper ecological, water-supply, traffic, sewage, and slope-stability threshold a fragile mountain town can sustain without irreversible degradation',
          'Number of flights per airport',
          'Height of boundary walls',
        ],
        correctOptionIndex: 1,
        explanation: 'NGT and Supreme Court committees repeatedly stress Carrying Capacity assessments (water recharge, parking, waste disposal, seismic safety) for Himalayan towns.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under **Census of India**, what **three demographic criteria** qualify an area as a **"Census Town"** (as distinct from Statutory Municipal Towns)?',
        options: [
          'Presence of an airport, mall, and stadium',
          'Minimum population 5,000; >=75% of male main working population engaged in non-agricultural pursuits; population density >=400 persons/sq km',
          'Minimum 1 lakh population and metro rail',
          'Any village with a paved highway',
        ],
        correctOptionIndex: 1,
        explanation: 'All three Census Town thresholds (5,000+ pop, >=75% male main workers outside agriculture, >=400/sq km density) must be met simultaneously.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **42nd Constitutional Amendment Act (1976)** insertion explicitly embedded the word **"Secular"** into the **Preamble** of India’s Constitution?',
        options: [
          'Added Socialist, Secular, and Integrity',
          'Added Federal and Secular',
          'Added Democratic and Republic',
          'Deleted Liberty',
        ],
        correctOptionIndex: 0,
        explanation: 'The 42nd Amendment added "Socialist", "Secular", and "and integrity" to the Preamble (even though secularism already pervaded Articles 14–16 and 25–28 since 1950).',
        difficulty: 'foundation',
      },
      {
        stem: 'How can **hyper-commercialized globalization** threaten **intangible cultural heritage** in Uttarakhand’s Himalayan valleys?',
        options: [
          'It multiplies solar power plants',
          'Standardized consumer media and out-migration can sideline Garhwali/Kumaoni/Rung oral folklore, Jagar traditions, and local ecological knowledge',
          'It creates too many glaciers',
          'It forbids internet access',
        ],
        correctOptionIndex: 1,
        explanation: 'UNESCO cautions that rapid homogenization risks eroding mother-tongue transmission and indigenous ecological stewardship unless documented and taught.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **constitutional amendment** created **Urban Local Bodies (Municipal Corporations, Councils, Nagar Panchayats)** and added the **12th Schedule** with **18 municipal functions**?',
        options: [
          '73rd Constitutional Amendment Act, 1992',
          '74th Constitutional Amendment Act, 1992',
          '86th Constitutional Amendment Act, 2002',
          '97th Constitutional Amendment Act, 2011',
        ],
        correctOptionIndex: 1,
        explanation: '74th Amendment added Part IXA (Arts. 243P–243ZG) and the 12th Schedule for urban self-governance (while 73rd added Part IX and 11th Schedule for Panchayats).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **institutional mechanism** at the national level promotes **inter-faith harmony, counter-communalism dialogue, and national integration** under the Prime Minister’s chairmanship?',
        options: [
          'Monetary Policy Committee',
          'National Integration Council (NIC) & National Foundation for Communal Harmony (NFCH)',
          'SEBI Board',
          'Central Water Commission',
        ],
        correctOptionIndex: 1,
        explanation: 'First convened by PM Nehru in 1961 (and reconstituted periodically), the National Integration Council unites CMs, leaders, and civil society against communalism and regional divisiveness.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Welfare Mechanisms for SCs, STs, OBCs, Minorities & PwDs',
    materialTitle: 'Constitutional Safeguards & Statutory Bodies for Vulnerable Sections — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: SCs, STs, OBCs, Minorities, PwD Act & Tribunals',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Welfare Mechanisms for SCs, STs, OBCs, Minorities & PwDs

## 1. Constitutional Matrix of Social Justice
- **Equality & Affirmative Action:** **Articles 15(4), 15(5), 15(6)** (education); **Articles 16(4), 16(4A), 16(4B), 16(6)** (public employment & backlog/promotions); **Article 17** (abolition of untouchability); **Article 46** (DPSP promoting educational & economic interests of SCs, STs, and weaker sections).
- **Political Representation:** **Articles 330 & 332** (SC/ST seats in Lok Sabha & Vidhan Sabhas — in Uttarakhand: **13 SC + 2 ST [Chakrata, Nanakmatta] = 15 of 70 Assembly seats**, plus **Almora SC Lok Sabha seat!**); **Articles 243D / 243T** (local bodies).
- **Special Commissions:**
  - **NCSC (Article 338)** | **NCST (Article 338A — 89th Amendment)** | **NCBC (Article 338B — 102nd Amendment)**.
  - **Special Officer for Linguistic Minorities (Article 350B)**.

## 2. Protective Criminal & Civil Statutes
- **SC/ST (Prevention of Atrocities) Act, 1989 (amended 2015 & 2018):** Special Exclusive Courts, stringent punishment for atrocities, relief/rehabilitation funds, denial of anticipatory bail (Sec. 18 — upheld by SC in *Prathvi Raj Chauhan*, 2020).
- **Prohibition of Employment as Manual Scavengers and their Rehabilitation Act, 2013:** Bans manual scavenging & hazardous septic-tank cleaning without protective gear.
- **Rights of Persons with Disabilities (RPwD) Act, 2016:**
  - Replaced 1995 Act (aligned with UNCRPD); expanded recognized disabilities from **7 to 21 conditions** *(adding acid-attack survivors, sickle-cell, thalassemia, Parkinson’s, autism, specific learning disabilities)*.
  - Raised PwD reservation in government jobs from **3% to 4%** and higher education from **3% to 5%** (free education ages 6–18).
- **Transgender Persons (Protection of Rights) Act, 2019:** Self-perceived gender identity (*NALSA judgment 2014*) & non-discrimination across education, jobs, and healthcare.

## 3. Welfare Schemes & Uttarakhand Specifics
- **SC/ST Sub-Plan (SCSP / TSP):** Dedicated proportional budget allocation (**Scheduled Caste Sub-Plan** & **Tribal Sub-Plan**; Eklavya Model Residential Schools — **EMRS** in Chakrata/Kalsi/Khatima/Bazpur!).
- **Minorities:** *PM VIKAS*, *Nai Manzil*, *Pre-Matric & Post-Matric Scholarships*, National Commission for Minorities Act 1992 (6 notified communities: *Muslims, Christians, Sikhs, Buddhists, Parsis, Jains*).
- **Senior Citizens:** *Maintenance and Welfare of Parents and Senior Citizens Act, 2007*.

## 4. Key Revision Takeaways
- **RPwD Act 2016:** **21 disabilities**, **4% job quota**, **5% education quota**.
- **Uttarakhand Assembly:** **13 SC + 2 ST (Chakrata, Nanakmatta)**; **Lok Sabha:** **Almora (SC)**.
- **NCSC = Art. 338**, **NCST = Art. 338A**, **NCBC = Art. 338B**.`,
    mcqs: [
      {
        stem: 'Under the **Rights of Persons with Disabilities (RPwD) Act, 2016**, the number of recognized specified disabilities and the statutory reservation for PwDs in **government jobs** were increased respectively to:',
        options: [
          '7 disabilities and 3% job reservation',
          '21 disabilities and 4% job reservation (5% in higher education)',
          '14 disabilities and 5% job reservation',
          '25 disabilities and 2% job reservation',
        ],
        correctOptionIndex: 1,
        explanation: 'RPwD Act 2016 (aligning with UNCRPD) expanded covered disabilities from 7 to 21 and raised job quota from 3% to 4% (5% in higher educational institutions).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Constitutional Amendment Act (2018)** conferred **constitutional status** upon the **National Commission for Backward Classes (NCBC)** by inserting **Article 338B**?',
        options: ['100th Amendment', '101st Amendment', '102nd Amendment', '103rd Amendment'],
        correctOptionIndex: 2,
        explanation: 'The 102nd Constitutional Amendment inserted Article 338B (NCBC) and Article 342A (later clarified by the 105th Amendment in 2021).',
        difficulty: 'foundation',
      },
      {
        stem: 'In the **70-member Uttarakhand Legislative Assembly**, how many seats are reserved for **Scheduled Castes (SC)** and **Scheduled Tribes (ST)** respectively under **Article 332**?',
        options: [
          '10 SC and 5 ST',
          '13 SC and 2 ST (Chakrata and Nanakmatta)',
          '15 SC and 0 ST',
          '11 SC and 4 ST',
        ],
        correctOptionIndex: 1,
        explanation: 'Out of 70 Vidhan Sabha seats in Uttarakhand, 13 are SC-reserved and 2 are ST-reserved (Chakrata in Dehradun & Nanakmatta in Udham Singh Nagar).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Directive Principle of State Policy (Part IV)** specifically directs the State to promote with special care the **educational and economic interests of SCs, STs, and weaker sections**, protecting them from social injustice and exploitation?',
        options: ['Article 40', 'Article 44', 'Article 46', 'Article 48'],
        correctOptionIndex: 2,
        explanation: 'Article 46 underpins India’s educational scholarships, hostels, EMRS schools, and sub-plan allocations for SCs, STs, and weaker sections.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **six religious communities** are officially notified as **Minorities** by the Union Government under Section 2(c) of the **National Commission for Minorities Act, 1992**?',
        options: [
          'Muslims, Christians, Sikhs, Buddhists, Parsis, and Jews',
          'Muslims, Christians, Sikhs, Buddhists, Zoroastrians (Parsis), and Jains (added in 2014)',
          'Muslims, Christians, Sikhs, Hindus, and Buddhists',
          'Only Muslims and Christians',
        ],
        correctOptionIndex: 1,
        explanation: 'Five communities were notified in 1993 and Jains were notified as the 6th national minority in January 2014.',
        difficulty: 'standard',
      },
      {
        stem: 'What did the **Supreme Court’s landmark *Indra Sawhney v. Union of India* (1992)** judgment establish regarding OBC reservation?',
        options: [
          'Abolished all OBC reservation',
          'Upheld 27% OBC quota, mandated exclusion of the "Creamy Layer", capped ordinary vertical reservation at 50%, and excluded reservations in promotions (subsequently addressed via Art. 16(4A))',
          'Allowed 90% reservations everywhere',
          'Applied reservations solely to private corporations',
        ],
        correctOptionIndex: 1,
        explanation: '*Indra Sawhney* remains the foundational precedent for creamy-layer exclusion and vertical vs horizontal reservation mechanics.',
        difficulty: 'standard',
      },
      {
        stem: 'Under **Article 350B** of the Constitution (inserted by the 7th Amendment Act, 1956), who appoints the **Special Officer for Linguistic Minorities**?',
        options: [
          'Chief Justice of India',
          'The President of India',
          'Lok Sabha Speaker',
          'NITI Aayog',
        ],
        correctOptionIndex: 1,
        explanation: 'The President appoints the Commissioner for Linguistic Minorities (HQ at Prayagraj) to report on safeguards provided to linguistic minorities.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Supreme Court judgment (2014)** first legally recognized **Transgender persons as the "Third Gender"** with full fundamental rights under Articles 14, 15, 16, 19, and 21, paving the way for the **2019 Act**?',
        options: [
          '*Puttaswamy v. UOI*',
          '*NALSA (National Legal Services Authority) v. Union of India*',
          '*Navtej Singh Johar v. UOI*',
          '*Maneka Gandhi v. UOI*',
        ],
        correctOptionIndex: 1,
        explanation: '*NALSA v. UOI* (April 2014) affirmed self-identified gender and welfare protections, later followed by *Navtej Johar* (2018) on Section 377 and the 2019 Transgender Act.',
        difficulty: 'foundation',
      },
      {
        stem: 'What are **Eklavya Model Residential Schools (EMRS)** — operational in tribal belts of Uttarakhand such as **Kalsi/Chakrata and Khatima/Bazpur** — designed to provide?',
        options: [
          'Evening adult literacy classes only',
          'Quality residential CBSE/upper-primary to senior-secondary schooling (Classes VI–XII) for Scheduled Tribe children in remote/tribal areas',
          'Vocational driving licenses',
          'Primary health surgery wards',
        ],
        correctOptionIndex: 1,
        explanation: 'Funded by the Ministry of Tribal Affairs via NESTS, EMRS bridges residential academic access for ST students on par with Navodaya Vidyalayas.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **statute enacted in 2013** strictly banned dry latrines and hazardous manual cleaning of sewers/septic tanks without protective gear, providing rehabilitation grants to **Safai Karamcharis**?',
        options: [
          'Factories Act 1948',
          'Prohibition of Employment as Manual Scavengers and their Rehabilitation Act, 2013',
          'Bonded Labour Act 1976',
          'Minimum Wages Act 1948',
        ],
        correctOptionIndex: 1,
        explanation: 'Strengthening the 1993 Act, the 2013 law prohibits manual scavenging and hazardous manual sewer entry, supported by the **NAMASTE** mechanization scheme.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Constitutional Article** empowers **Reservation in Promotions** with consequential seniority for **Scheduled Castes and Scheduled Tribes** in public services where inadequately represented?',
        options: ['Article 15(1)', 'Article 16(4A)', 'Article 19(1)(g)', 'Article 21A'],
        correctOptionIndex: 1,
        explanation: 'Inserted by the 77th Amendment (1995) and modified by the 85th Amendment (2001), Article 16(4A) enables SC/ST promotion reservation subject to quantifiable data (*M. Nagaraj* & *Jarnail Singh*).',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Central Act (2007)** allows elderly parents and senior citizens who cannot maintain themselves from their own earnings/property to claim legally enforceable **maintenance through fast-track Maintenance Tribunals**?',
        options: [
          'Hindu Succession Act 1956',
          'Maintenance and Welfare of Parents and Senior Citizens Act, 2007',
          'Indian Contract Act 1872',
          'Pension Fund Act 2013',
        ],
        correctOptionIndex: 1,
        explanation: 'The 2007 Act obligates adult children/heirs to support parents and even empowers Tribunals to void conditional property transfers if care is neglected.',
        difficulty: 'foundation',
      },
      {
        stem: 'What core principle governs the **Scheduled Caste Sub-Plan (SCSP)** and **Tribal Sub-Plan (TSP / DAPST)** in Union and State Budgets?',
        options: [
          'Zero spending on SCs/STs',
          'Earmarking non-divertible plan funds strictly in proportion to the SC and ST population share in total state/national population',
          'Lending at 20% commercial interest',
          'Spending exclusively on highway tolls',
        ],
        correctOptionIndex: 1,
        explanation: 'Sub-plan budgeting prevents general infrastructure funds from bypassing SC/ST habitations by ring-fencing proportional developmental outlays.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Supreme Court ruling (2020)** upheld the **2018 Parliament amendment** to the **SC/ST (Prevention of Atrocities) Act, 1989**, restoring the bar on anticipatory bail (Section 18) and automatic FIR registration without preliminary enquiry?',
        options: [
          '*Subhash Kashinath Mahajan v. State of Maharashtra* (2018)',
          '*Prathvi Raj Chauhan v. Union of India* (2020)',
          '*Shreya Singhal v. UOI*',
          '*Lily Thomas v. UOI*',
        ],
        correctOptionIndex: 1,
        explanation: 'After Parliament amended Section 18A reversing *Mahajan (2018)*, a 3-Judge Bench in *Prathvi Raj Chauhan* (2020) upheld the constitutionality of the stricter safeguard.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which **Uttarakhand Lok Sabha seat** out of the state’s **5 Parliamentary constituencies** is reserved for **Scheduled Castes (SC)** under Article 330?',
        options: ['Garhwal (Pauri)', 'Almora', 'Tehri Garhwal', 'Haridwar'],
        correctOptionIndex: 1,
        explanation: 'Almora is Uttarakhand’s lone SC-reserved Lok Sabha constituency (the remaining four—Tehri, Garhwal, Haridwar, Nainital–US Nagar—are General).',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Health, Education, Nutrition & Human Resource Development',
    materialTitle: 'NEP 2020, Health Architecture, POSHAN 2.0 & Uttarakhand Human Capital — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Health, Nutrition, NEP 2020 & Hill Service Delivery',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Health, Education, Nutrition & Human Resource Development

## 1. Education Transformation: RTE (2009) & National Education Policy (NEP 2020)
- **Constitutional Bedrock:** **86th Amendment Act, 2002** inserted **Article 21A** (Free & compulsory education ages **6–14**), revised **Article 45** (Early Childhood Care ages 0–6), and added **Article 51A(k)** (parents’ Fundamental Duty).
- **NEP 2020 Structural Reforms:**
  - Replaced \`10+2\` with **\`5+3+3+4\` Curricular Structure** (*Foundational 3–8 [3 yrs Anganwadi/Balvatika + Classes 1–2], Preparatory 8–11, Middle 11–14, Secondary 14–18*).
  - **Uttarakhand Achievement:** First Indian state to officially initiate **NEP 2020 Balvatika** pre-primary rollout across government school campuses (2022)!
  - **Targets:** **100% GER** in school up to Secondary by **2030**, **50% GER** in Higher Education by **2035**, **6% of GDP** public education spending target, **NIPUN Bharat** (Foundational Literacy & Numeracy by Grade 3), **PARAKH** national assessment centre, **Academic Bank of Credits (ABC)**.

## 2. Healthcare Architecture & Hill Accessibility Challenges
- **Ayushman Bharat Dual Pillars:**
  1. **Ayushman Arogya Mandirs (Health & Wellness Centres — HWCs):** Comprehensive primary healthcare near villages.
  2. **PM-JAY:** ₹5 lakh/family/year secondary & tertiary cashless hospitalization cover.
  - **Uttarakhand Edge:** **Atal Ayushman Uttarakhand Yojana (2018)** extended universal ₹5 lakh annual health cover to **ALL domicile families** in the state beyond BPL lists!
- **Telemedicine & Hill Logistics:** **e-Sanjeevani** tele-consultations, **108 Emergency & Drone-assisted medical supply** pilots in remote valleys (Tehri/Uttarkashi) addressing specialist-doctor scarcity in high-altitude CHCs.

## 3. Nutrition Security: POSHAN Abhiyaan 2.0 &NFHS Indicators
- **Saksham Anganwadi & POSHAN 2.0:** Tackles **Stunting** *(low height-for-age — chronic)*, **Wasting** *(low weight-for-height — acute)*, **Underweight**, and **Anaemia** (*Anaemia Mukt Bharat* 6x6x6 strategy).
- **PM POSHAN (formerly Mid-Day Meal Scheme):** Hot cooked school meal incorporating **Shree Anna (coarse hill millets like Mandua/Jhangora)** alongside fortified rice.
- **Mission Indradhanush:** Universal Immunization coverage against vaccine-preventable diseases.

## 4. Key Revision Takeaways
- **86th Amendment (2002) = Art. 21A (6–14 yrs), Art. 45 (0–6 yrs), Art. 51A(k)**.
- **NEP 2020 = \`5+3+3+4\`**; **Uttarakhand = First state to begin NEP Balvatikas**; **Atal Ayushman = Universal ₹5 lakh/family health cover**.`,
    mcqs: [
      {
        stem: 'Which **curricular and pedagogical school structure** did the **National Education Policy (NEP) 2020** introduce to replace the older `10+2` system?',
        options: [
          '6+2+2+2',
          '5+3+3+4 (Foundational, Preparatory, Middle, and Secondary stages covering ages 3–18)',
          '4+4+4',
          '8+2+2',
        ],
        correctOptionIndex: 1,
        explanation: 'NEP 2020 integrates Early Childhood Care (ages 3–6) with Classes 1–2 into a 5-year Foundational Stage, followed by 3 (Classes 3–5), 3 (6–8), and 4 (9–12).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Constitutional Amendment Act (2002)** elevated elementary education (ages 6–14) to a Fundamental Right (**Article 21A**), shifted early-childhood care (0–6) under **Article 45**, and added **Article 51A(k)**?',
        options: ['42nd Amendment', '73rd Amendment', '86th Amendment', '91st Amendment'],
        correctOptionIndex: 2,
        explanation: 'The 86th Constitutional Amendment (2002) was later operationalized through the Right of Children to Free and Compulsory Education (RTE) Act, 2009.',
        difficulty: 'foundation',
      },
      {
        stem: 'How does **Atal Ayushman Uttarakhand Yojana (launched December 2018)** expand upon the national **Ayushman Bharat PM-JAY** framework?',
        options: [
          'It lowers coverage to ₹50,000',
          'It universalizes the ₹5 lakh/year cashless health-insurance cover to ALL resident families in Uttarakhand (not restricted only to SECC-2011 BPL families)',
          'It covers only dental checkups',
          'It applies only to private hospitals outside India',
        ],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand became one of India’s earliest states to extend ₹5 lakh universal family health protection statewide under Atal Ayushman Uttarakhand.',
        difficulty: 'foundation',
      },
      {
        stem: 'In nutritional public-health terminology (**NFHS / WHO / POSHAN Abhiyaan**), what distinguishes **Child Stunting** from **Child Wasting**?',
        options: [
          'Stunting is excess weight; wasting is tall height',
          'Stunting is low height-for-age (chronic long-term undernutrition), whereas Wasting is low weight-for-height (acute recent weight loss/illness)',
          'Both mean exact micronutrient vitamin C deficiency',
          'Wasting applies only to adults',
        ],
        correctOptionIndex: 1,
        explanation: 'Stunting captures chronic multi-year deprivation/infection; wasting captures acute short-term food shock or diarrhoeal illness.',
        difficulty: 'standard',
      },
      {
        stem: 'Which national mission under **NEP 2020** aims to ensure every child achieves **Foundational Literacy and Numeracy (FLN)** by the end of **Grade 3**?',
        options: [
          'RUSA 2.0',
          'NIPUN Bharat Mission',
          'PM SHRI Colleges',
          'SAMARTH Portal',
        ],
        correctOptionIndex: 1,
        explanation: 'NIPUN Bharat (National Initiative for Proficiency in Reading with Understanding and Numeracy) prioritizes Grade 3 foundational mastery.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under **NEP 2020**, what is the targeted **Gross Enrolment Ratio (GER) in Higher Education** by **2035**, and what percentage of **GDP** is targeted for public investment in education?',
        options: [
          '25% GER and 2% of GDP',
          '50% GER by 2035 and 6% of GDP public spending',
          '80% GER and 10% of GDP',
          '35% GER and 3% of GDP',
        ],
        correctOptionIndex: 1,
        explanation: 'NEP 2020 targets 50% Higher Education GER by 2035 (up from ~27–28%) and reiterates the Kothari Commission goal of 6% of GDP.',
        difficulty: 'foundation',
      },
      {
        stem: 'What primary role does **PARAKH** play under the institutional architecture recommended by **NEP 2020**?',
        options: [
          'Higher education loans',
          'National Assessment Centre setting standard learning norms, equivalence across boards, and competency testing',
          'Mid-day meal grain procurement',
          'Campus hostel construction',
        ],
        correctOptionIndex: 1,
        explanation: 'PARAKH (Performance Assessment, Review, and Analysis of Knowledge for Holistic Development) harmonizes school evaluation away from rote memorization.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Uttarakhand initiative** in **July 2022** made the state the **first in India** to begin implementing the pre-primary stage of **NEP 2020** inside government primary schools?',
        options: [
          'Launching "Balvatika" classes across Anganwadis co-located in government schools',
          'Closing all primary schools',
          'Eliminating Hindi textbooks',
          'Replacing boards with private agencies',
        ],
        correctOptionIndex: 0,
        explanation: 'Uttarakhand rolled out Balvatika pre-primary curricula across over 4,400 school-linked Anganwadi centres in 2022.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is India’s national **cloud-based telemedicine platform** linking rural Sub-Centres / Health & Wellness Centres (HWC spokes) directly to district/medical-college specialist hubs?',
        options: ['CoWIN', 'e-Sanjeevani', 'Aarogya Setu', 'Nikshay'],
        correctOptionIndex: 1,
        explanation: 'e-Sanjeevani (doctor-to-doctor & patient-to-doctor) sharply reduces travel burdens for patients in scattered Himalayan valleys.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Kasturba / Kothari / RTE rule** sets the **25% reservation mandate** for children belonging to **disadvantaged groups and Economically Weaker Sections (EWS)** at entry level in **private unaided non-minority schools**?',
        options: [
          'Section 12(1)(c) of the RTE Act, 2009',
          'Section 80G of Income Tax Act',
          'Article 370',
          'UGC Act Section 3',
        ],
        correctOptionIndex: 0,
        explanation: 'Section 12(1)(c) of RTE 2009 promotes social integration by reimbursing private schools for admitting 25% EWS/DG students in Class 1/pre-primary.',
        difficulty: 'standard',
      },
      {
        stem: 'Under **POSHAN Abhiyaan / Saksham Anganwadi**, which **Uttarakhand-linked dietary innovation** supports nutrition while boosting hill farmers’ incomes in Mid-Day Meals (PM POSHAN) & ICDS?',
        options: [
          'Imported sugary cereals',
          'Incorporating locally procured fortified grains and "Shree Anna" coarse millets (Mandua/Jhangora) & Amaranth',
          'Eliminating vegetables',
          'Using single-use plastic water packs',
        ],
        correctOptionIndex: 1,
        explanation: 'Mandua (rich in calcium and iron) and Jhangora directly combat maternal/child anaemia while creating assured local procurement for hill SHGs.',
        difficulty: 'foundation',
      },
      {
        stem: 'What does **Mission Indradhanush (and Intensified Mission Indradhanush)** target across India’s public-health system?',
        options: [
          'Building rainbow bridges',
          'Achieving full immunization coverage for all children under 2 years and pregnant women against vaccine-preventable diseases',
          'Replacing ASHA workers',
          'Subsidizing private medical colleges',
        ],
        correctOptionIndex: 1,
        explanation: 'Mission Indradhanush targets unvaccinated and partially vaccinated children in hard-to-reach pockets (including remote mountain blocks).',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the function of the **Academic Bank of Credits (ABC)** under **NEP 2020**?',
        options: [
          'Issuing low-interest crop loans',
          'Digitally storing academic credits earned across recognized HEIs to enable flexible multi-entry, multi-exit pathways and interdisciplinary transfers',
          'Managing school bus fleets',
          'Printing degree certificates on paper only',
        ],
        correctOptionIndex: 1,
        explanation: 'ABC enables students to accumulate and transfer credits between institutions and re-enter higher education seamlessly.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **vital indicator** measures the number of maternal deaths per **1,00,000 live births** during pregnancy, childbirth, or within 42 days of termination?',
        options: [
          'Infant Mortality Rate (IMR)',
          'Maternal Mortality Ratio (MMR)',
          'Total Fertility Rate (TFR)',
          'Crude Birth Rate',
        ],
        correctOptionIndex: 1,
        explanation: 'MMR is expressed per 1,00,000 live births (whereas IMR & Under-5 Mortality are measured per 1,000 live births).',
        difficulty: 'foundation',
      },
      {
        stem: 'Why does **Human Capital Theory** (T.W. Schultz, Gary Becker) justify high state capital allocation to **rural hill schools, polytechnics, and primary healthcare** in Uttarakhand?',
        options: [
          'Because human skills depreciate immediately',
          'Because investments in health, nutrition, and market-relevant skills permanently raise labour productivity, innovation, and local entrepreneurship—mitigating distress out-migration',
          'Because machines require zero training',
          'Because only natural minerals matter for GDP',
        ],
        correctOptionIndex: 1,
        explanation: 'Educated, healthy citizens convert demographic numbers into high-value human capital capable of sustaining hill livelihoods and services.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Poverty, Hunger & Civil Society Initiatives',
    materialTitle: 'Poverty Measurement, NFSA, MGNREGA, Social Audit & Civil Society — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Poverty Estimation, MPI, Food Security & Civil Society',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Poverty, Hunger & Civil Society Initiatives

## 1. Poverty Estimation Evolution & Multidimensional Poverty (MPI)
- **Historical Committees:** **Alagh Committee (1979)** (calorie norms: **2,400 kcal rural / 2,100 kcal urban**); **Lakdawala (1993)**; **Tendulkar Committee (2009)** (uniform basket including health & education -> **21.9%** national BPL in 2011–12; **Uttarakhand ~11.26%**!); **Rangarajan Committee (2014)** (**29.5%** national BPL).
- **NITI Aayog National Multidimensional Poverty Index (MPI):** Tracks **3 dimensions & 12 indicators** (*Health [nutrition, child mortality, antenatal care], Education [years of schooling, attendance], Standard of Living [cooking fuel, sanitation, drinking water, electricity, housing, assets, bank account]*).
- **Relative vs Absolute Poverty:** Absolute measures minimum subsistence threshold; Relative measures income inequality (**Lorenz Curve & Gini Coefficient**).

## 2. Rights-Based Food Security & Livelihood Safety Nets
- **National Food Security Act (NFSA), 2013:** Legally covers up to **75% rural & 50% urban** population (*Priority Households: **5 kg/person/month**; Antyodaya Anna Yojana [AAY] poorest households: **35 kg/family/month*** at subsidized/free **PMGKAY** rates); **One Nation One Ration Card (ONORC)** empowers interstate migrant workers!
- **MGNREGA (Act 2005, launched Feb 2006):** Statutory **100 days/year** of unskilled wage employment per rural household; **>=1/3rd women beneficiaries**, unemployment allowance if work not provided within **15 days**, and **Social Audit by Gram Sabha (Section 17)**.
- **DAY-NRLM (Deendayal Antyodaya Yojana):** Mobilizes rural women into Self-Help Groups (SHGs) & federations.

## 3. Civil Society, NGOs, SHGs & Pressure Groups
- **Role in Development:** Grassroots mobilization (*Uttarakhand’s Dasholi Gram Swarajya Sangh — Chandi Prasad Bhatt; Himalayan Environmental Studies & Conservation Organisation [HESCO] — Dr. Anil Prakash Joshi; Navdanya/Beej Bachao*), RTI social audits (**MKSS model**), disaster last-mile relief.
- **Accountability & Regulation:** **FCRA (Foreign Contribution Regulation Act)**, Societies Registration Act, NITI Aayog **NGO-Darpan** portal ensuring financial transparency.

## 4. Key Revision Takeaways
- **Tendulkar (2011–12):** India = **21.9%**, **Uttarakhand = ~11.26%**.
- **NFSA 2013:** **75% rural / 50% urban**; **AAY = 35 kg/household**; **MGNREGA Sec. 17 = Gram Sabha Social Audit**.`,
    mcqs: [
      {
        stem: 'Which **three equally weighted dimensions** constitute the **Multidimensional Poverty Index (MPI)** used by **UNDP globally and NITI Aayog in India**?',
        options: [
          'Income, Tax Rate, and Exports',
          'Health, Education, and Standard of Living',
          'Military, Literacy, and Urbanization',
          'Inflation, Housing, and Stock Market',
        ],
        correctOptionIndex: 1,
        explanation: 'NITI Aayog’s National MPI measures simultaneous deprivations across Health (3 indicators), Education (2), and Standard of Living (7 — adding bank accounts & antenatal care to UNDP’s 10).',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the **National Food Security Act (NFSA), 2013**, what monthly foodgrain entitlement is guaranteed to the poorest **Antyodaya Anna Yojana (AAY)** households vs **Priority Households (PHH)**?',
        options: [
          '15 kg per family for AAY and 2 kg per person for PHH',
          '35 kg per household/month for AAY and 5 kg per person/month for PHH',
          '50 kg per person for both',
          '10 kg per household only in cities',
        ],
        correctOptionIndex: 1,
        explanation: 'NFSA covers up to 75% rural and 50% urban population, guaranteeing 35 kg/household for AAY families and 5 kg/person for Priority Households.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **feature of MGNREGA (2005)** legally anchors bottom-up public accountability and community oversight of rural works?',
        options: [
          'Secret executive orders',
          'Mandatory Social Audit of all MGNREGA works and muster rolls by the Gram Sabha (Section 17)',
          'Private contractor audits only',
          'Excluding women from worksites',
        ],
        correctOptionIndex: 1,
        explanation: 'Section 17 of MGNREGA mandates regular Gram Sabha Social Audits with independent Social Audit Units ensuring transparency and grievance redressal.',
        difficulty: 'foundation',
      },
      {
        stem: 'How does **One Nation One Ration Card (ONORC)** directly protect **migrant workers** (including Uttarakhand youth working in Delhi/Mumbai or seasonal workers entering Terai towns)?',
        options: [
          'It cancels their village ration card permanently',
          'It allows biometric Aadhaar-authenticated portability so beneficiaries/family members can draw NFSA foodgrains from ANY Fair Price Shop across India',
          'It distributes cash instead of identity cards',
          'It applies only to railway ticket bookings',
        ],
        correctOptionIndex: 1,
        explanation: 'ONORC eliminates loss of food security during interstate or intrastate migration by enabling portable ration withdrawals nationwide.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Uttarakhand civil society pioneer** founded **Dasholi Gram Swarajya Mandal (DGSM)** in **Gopeshwar (1964)** — laying the organizational cradle for the **Chipko Movement** and winning the Ramon Magsaysay Award?',
        options: [
          'Dr. R.S. Tolia',
          'Chandi Prasad Bhatt',
          'Vijay Jardhari',
          'Kalyan Singh Rawat',
        ],
        correctOptionIndex: 1,
        explanation: 'Chandi Prasad Bhatt’s DGSM mobilized local forest-based village cooperatives in Chamoli before spearheading Chipko protests in 1973–1974.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Uttarakhand environmentalist and civil-society innovator** founded **HESCO (Himalayan Environmental Studies and Conservation Organisation)** in Dehradun to pioneer **Gross Environment Product (GEP)** and rural mountain technologies?',
        options: [
          'Sundarlal Bahuguna',
          'Dr. Anil Prakash Joshi (Padma Bhushan)',
          'Anupam Mishra',
          'Rajendra Singh',
        ],
        correctOptionIndex: 1,
        explanation: 'Dr. Anil Prakash Joshi’s HESCO develops mountain watermills (Gharat), local crop value-addition, and championed GEP ecological valuation.',
        difficulty: 'foundation',
      },
      {
        stem: 'Based on the **Tendulkar Committee methodology (2011–12 NSSO estimates)**, how did **Uttarakhand’s poverty headcount ratio (~11.26%)** compare with the **all-India average (21.9%)**?',
        options: [
          'Double the national average',
          'Significantly lower than the all-India average (approx. 11.26% vs 21.9%)',
          'Zero percent poverty',
          'Exactly 50%',
        ],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand’s poverty incidence (~11.26%) fell roughly half of the national average (21.92%) in 2011–12, though mountain-district vulnerability persists.',
        difficulty: 'standard',
      },
      {
        stem: 'Under **MGNREGA**, if an eligible rural household demanding work is NOT provided employment within **15 days** of application, what statutory right is triggered?',
        options: [
          'Criminal arrest of Sarpanch',
          'Daily Unemployment Allowance payable by the State Government',
          'Automatic urban flat allotment',
          'Cancellation of job card',
        ],
        correctOptionIndex: 1,
        explanation: 'MGNREGA creates an enforceable legal right to work within 15 days, backed by statutory unemployment allowance if the state fails to assign work.',
        difficulty: 'foundation',
      },
      {
        stem: 'What **economic diagram and statistical index** visually depict **income inequality** and **relative poverty** across a society (where `0` equals perfect equality and `1` equals maximum inequality)?',
        options: [
          'Phillips Curve & Repo Rate',
          'Lorenz Curve and Gini Coefficient',
          'Kuznets Curve & Engel Law',
          'Laffer Curve & CPI',
        ],
        correctOptionIndex: 1,
        explanation: 'The Gini Coefficient measures the area between the 45-degree Line of Equality and the actual cumulative income distribution (Lorenz Curve).',
        difficulty: 'standard',
      },
      {
        stem: 'How did the **1979 Y.K. Alagh Task Force** define India’s **Poverty Line** empirically for rural and urban areas?',
        options: [
          'Monthly smartphone data usage',
          'Minimum daily nutritional calorie intake norms of 2,400 kcal (rural) and 2,100 kcal (urban)',
          'Minimum bank balance of ₹50,000',
          'Car ownership',
        ],
        correctOptionIndex: 1,
        explanation: 'The Alagh Committee tied the poverty line basket to per-capita daily calorie requirements (higher 2,400 kcal rural reflecting physical farm labour).',
        difficulty: 'foundation',
      },
      {
        stem: 'What distinguishes a **Public-Interest Pressure Group** (e.g., environmental coalitions or consumer rights bodies) from a **Political Party**?',
        options: [
          'Pressure groups contest general elections to capture Cabinet office',
          'Pressure groups seek to influence public policy, awareness, and legislation from outside without directly contesting elections to form government',
          'Political parties cannot register members',
          'Pressure groups pass parliamentary Acts alone',
        ],
        correctOptionIndex: 1,
        explanation: 'Pressure groups articulate specific collective demands and lobby governments or courts without aiming to wield direct executive power.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **central online portal** managed by **NITI Aayog** requires NGOs/Voluntary Organizations seeking government grants or FCRA registration to register with a Unique ID for institutional transparency?',
        options: ['PM Gati Shakti', 'NGO-Darpan', 'GeM Portal', 'UDISE+'],
        correctOptionIndex: 1,
        explanation: 'NGO-Darpan assigns a Unique ID and audits office-bearers, PAN, and grant history across central ministries.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **hidden dimension of hunger** — distinct from acute starvation — refers to chronic deficiency of essential vitamins and minerals (**Iron, Iodine, Vitamin A, Zinc**)?',
        options: [
          'Hyper-caloric surplus',
          'Hidden Hunger (Micronutrient Deficiency)',
          'Seasonal fasting',
          'Protean abundance',
        ],
        correctOptionIndex: 1,
        explanation: 'A child eating enough calorie-dense rice/wheat may still suffer "Hidden Hunger" (iron-deficiency anaemia or zinc/vitamin A deficiency), countered via dietary diversity and fortification.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Rajasthan-born grassroots civil society campaign (MKSS)** popularized **Jan Sunwai (Public Hearings)** and helped catalyze India’s **Right to Information Act, 2005**?',
        options: [
          'Chipko Movement',
          'Mazdoor Kisan Shakti Sangathan (MKSS)',
          'Narmada Bachao Andolan',
          'Silent Valley Movement',
        ],
        correctOptionIndex: 1,
        explanation: 'MKSS pioneered public readings of village muster rolls ("Hamara Paisa, Hamara Hisab"), directly inspiring RTI 2005 and MGNREGA social audits.',
        difficulty: 'standard',
      },
      {
        stem: 'What minimum percentage of **MGNREGA workers** must statutorily be **women**, and how does this play out practically in Uttarakhand’s hill villages?',
        options: [
          '10%; men dominate hill worksites',
          'At least one-third (33%); in practice women frequently make up over 50–60% of Uttarakhand hill worksites for check-dams, chaals, and paths',
          '5%; women need special waiver',
          '75% urban quota',
        ],
        correctOptionIndex: 1,
        explanation: 'MGNREGA guarantees equal wages and >=33% women participation; in Uttarakhand’s hills, women form the majority on local water-conservation (*chal-khal*, *naula*) works.',
        difficulty: 'foundation',
      },
    ],
  },
];
