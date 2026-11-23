import { TopicContentPackage } from './types';

export const POLITY_GOV_IR_PART_B: TopicContentPackage[] = [
  {
    topicTitle: 'RTI Act 2005, Citizen Charters & Uttarakhand Right to Service Act',
    materialTitle: 'RTI Act 2005, Citizen Charters & Uttarakhand Right to Service Act — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Transparency Laws, Citizen Charters & RTS Uttarakhand',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# RTI Act 2005, Citizen Charters & Uttarakhand Right to Service Act

## 1. Right to Information Act, 2005 (Transparency Pillar)
Grounded in the Supreme Court's recognition that **Right to Know** flows from **Article 19(1)(a)** (*Raj Narain, 1975*; *PUCL, 2003*), the **RTI Act, 2005** replaced the weak *Freedom of Information Act, 2002* (enforced **12 October 2005**):
- **Proactive Disclosure (Section 4):** Mandates every Public Authority to publish manuals, budgets, and organizational structures *suo motu* to minimize need for applications.
- **Timeframes & Mechanisms (Section 7):**
  - Ordinary reply by **PIO (Public Information Officer)**: **30 days** (add 5 days if filed via APIO; **40 days** if third-party submission under Sec. 11).
  - Matters concerning **life or liberty**: **48 hours**!
  - **Appeals:** 1st Appeal within **30 days** to First Appellate Authority (decided in 30–45 days); 2nd Appeal within **90 days** to **CIC / State Information Commission (UIC)**.
  - **Penalties (Section 20):** Rs **250/day** (up to **Rs 25,000**) for unreasonable delay/refusal plus disciplinary recommendation.
- **Exemptions (Section 8(1)):** National sovereignty/security, Cabinet papers (until decision finalized), trade secrets, personal privacy lacking public interest—subject to **Public Interest Override (Section 8(2))**.
- **2019 Amendment:** Authorized Central Government to prescribe tenure (currently 3 years) and salaries of CIC/SICs.

## 2. Citizen's Charters & Sevottam Model
- Originated in the UK (John Major, 1991); adopted in India (1997 Chief Ministers' Conference; coordinated by **DARPG**).
- **Concept:** A voluntary, non-justiciable public commitment detailing **service standards, timeframes, grievance redressal, and nodal officers** (6 core principles).
- **Sevottam Framework (2nd ARC):** Three-module service-delivery excellence model: **(1) Citizen's Charter implementation**, **(2) Public Grievance Redressal**, **(3) Service Delivery Capability**.

## 3. Uttarakhand Right to Service Act, 2011 (RTS)
**Uttarakhand** was among India's early trailblazers in enacting a legally enforceable **Right to Service Act, 2011** (complemented by **Apuni Sarkar** online e-District citizen portal):
- **Objective:** Guarantees **time-bound delivery** of notified public services (caste, domicile, income, birth/death certificates, water/electricity connections, driving licences, revenue mutations).
- **3-Tier Redressal Hierarchy:**
  1. **Designated Officer** (delivers service within notified days).
  2. **First Appellate Authority** (reviews delay/rejection).
  3. **Second Appellate Authority** / **Uttarakhand Right to Service Commission** (headed by Chief Commissioner; empowered to impose **monetary penalty** on defaulting officials—typically Rs 500 to Rs 5,000—and compensate aggrieved applicants).

## 4. Key Revision Takeaways
- **RTI Act 2005:** **30 days** normal reply; **48 hours** for life/liberty; **Rs 250/day up to Rs 25,000** penalty; **Section 4** = *suo motu* disclosure.
- **Citizen's Charter** is **not legally enforceable** in courts by itself, whereas **Uttarakhand Right to Service Act, 2011** creates **statutory time-bound accountability and penalties**.
- **Apuni Sarkar** integrates Uttarakhand's notified RTS services digitally.`,
    mcqs: [
      {
        stem: 'Under Section 7(1) of the Right to Information (RTI) Act, 2005, within how many hours must a Public Information Officer provide requested information when it concerns the "life or liberty" of a person?',
        options: ['12 hours', '24 hours', '48 hours', '72 hours'],
        correctOptionIndex: 2,
        explanation: 'While normal RTI replies are due within 30 days, information concerning life or liberty must be supplied within 48 hours.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Section of the RTI Act, 2005 obligates every Public Authority to proactively publish manuals, functions, budgets, and norms suo motu so citizens need to file fewer RTI applications?',
        options: ['Section 2(h)', 'Section 4', 'Section 8', 'Section 20'],
        correctOptionIndex: 1,
        explanation: 'Section 4 mandates proactive suo motu disclosure—frequently emphasized by the Supreme Court and 2nd ARC as the soul of transparent governance.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the maximum statutory monetary penalty that an Information Commission (CIC or Uttarakhand IC) can impose on a defaulting PIO under Section 20 of the RTI Act?',
        options: [
          'Rs 100 per day up to Rs 10,000',
          'Rs 250 per day up to a maximum of Rs 25,000',
          'Rs 500 per day without upper cap',
          'Fixed Rs 1,00,000 fine',
        ],
        correctOptionIndex: 1,
        explanation: 'Section 20(1) imposes Rs 250 per day of delay without reasonable cause, capped at Rs 25,000 per case.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the crucial legal difference between a "Citizen\'s Charter" and the "Uttarakhand Right to Service Act, 2011"?',
        options: [
          'Citizen\'s Charters impose jail sentences while RTS is voluntary',
          'A Citizen\'s Charter is a voluntary administrative commitment without statutory enforceability, whereas the Uttarakhand Right to Service Act creates legally binding delivery timelines and financial penalties for delay',
          'RTS applies only to central ministries in Delhi',
          'Citizen\'s Charters apply only to private hotels',
        ],
        correctOptionIndex: 1,
        explanation: 'Transforming aspirational Citizen\'s Charters into enforceable rights, the Uttarakhand RTS Act, 2011 empowers appellate authorities and the RTS Commission to penalize delays.',
        difficulty: 'standard',
      },
      {
        stem: 'In which year did Uttarakhand enact its Right to Service Act to guarantee time-bound delivery of notified public services?',
        options: ['2005', '2011', '2016', '2020'],
        correctOptionIndex: 1,
        explanation: 'Following Madhya Pradesh and Bihar, Uttarakhand enacted the Uttarakhand Right to Service Act in 2011.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which digital citizen portal serves as Uttarakhand\'s integrated e-District platform delivering notified Right to Service (RTS) certificates online?',
        options: ['e-Taal', 'Apuni Sarkar', 'UMANG-Hill', 'Bhoomi-UK'],
        correctOptionIndex: 1,
        explanation: 'The "Apuni Sarkar" portal connects citizens and Common Service Centres (CSCs) across all 13 districts for online RTS services.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which three components make up the "Sevottam" model recommended by the Second Administrative Reforms Commission (2nd ARC) for service excellence?',
        options: [
          'Privatization, Outsourcing, and Tax Cuts',
          'Citizen\'s Charter implementation, Public Grievance Redressal mechanism, and Service Delivery Capability',
          'Policing, Revenue Collection, and Audit',
          'E-Voting, Facial Recognition, and Blockchain',
        ],
        correctOptionIndex: 1,
        explanation: 'Developed by DARPG and endorsed by the 12th Report of 2nd ARC, Sevottam aligns charter standards with grievance redress and frontline delivery capacity.',
        difficulty: 'standard',
      },
      {
        stem: 'Under the RTI Act, 2005, what is the "Public Interest Override" embedded in Section 8(2)?',
        options: [
          'Officials can withhold any record permanently citing Official Secrets Act',
          'Even if information falls under Section 8(1) exemptions or the Official Secrets Act 1923, a public authority MAY allow access if public interest in disclosure outweighs harm to protected interests',
          'Only the Prime Minister can read RTI replies',
          'All military blueprints must be published online',
        ],
        correctOptionIndex: 1,
        explanation: 'Section 8(2) affirms transparency primacy whenever larger public interest outweighs protected confidentiality.',
        difficulty: 'advanced',
      },
      {
        stem: 'Within how many days must an applicant ordinarily file a Second Appeal before the Central or State Information Commission (such as Uttarakhand IC) against a First Appellate Authority\'s decision?',
        options: ['15 days', '30 days', '90 days', '180 days'],
        correctOptionIndex: 2,
        explanation: 'First Appeal lies within 30 days of PIO decision/lapse; Second Appeal lies within 90 days before the Information Commission under Section 19(3).',
        difficulty: 'standard',
      },
      {
        stem: 'Which constitutional Right did the Supreme Court invoke in State of UP v. Raj Narain (1975) and PUCL v. Union of India (2003) to establish the citizen\'s Right to Know?',
        options: [
          'Article 14',
          'Article 19(1)(a) — Freedom of Speech and Expression',
          'Article 25',
          'Article 300A',
        ],
        correctOptionIndex: 1,
        explanation: 'Meaningful democratic speech and voting require access to public information under Article 19(1)(a).',
        difficulty: 'foundation',
      },
      {
        stem: 'Under Section 24 of the RTI Act, 2005, intelligence and security organizations listed in the Second Schedule are generally exempt, EXCEPT when the information sought pertains to:',
        options: [
          'Routine transfer orders',
          'Allegations of corruption and human rights violations',
          'Weapon procurement specifications',
          'Diplomatic cipher codes',
        ],
        correctOptionIndex: 1,
        explanation: 'Even Second Schedule security agencies (IB, RAW, BSF, ITBP, etc.) must disclose information relating to allegations of corruption or human rights violations (with CIC/SIC approval for human rights cases within 45 days).',
        difficulty: 'standard',
      },
      {
        stem: 'When an RTI application requires seeking consent from a "third party" under Section 11 (because it relates to confidential third-party information), how much extra time does the PIO get beyond 30 days?',
        options: ['No extra time', '10 extra days (total 40 days)', '30 extra days', '60 extra days'],
        correctOptionIndex: 1,
        explanation: 'Under Section 7(7) read with Section 11(3), the PIO must decide within 40 days after giving the third party notice to make a submission.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which landmark report of the 2nd Administrative Reforms Commission (2nd ARC) is famously titled "Right to Information: Master Key to Good Governance"?',
        options: ['First Report', 'Fourth Report', 'Twelfth Report', 'Fifteenth Report'],
        correctOptionIndex: 0,
        explanation: 'The 2nd ARC (chaired by Veerappa Moily) dedicated its very First Report (2006) to RTI as the "Master Key to Good Governance".',
        difficulty: 'standard',
      },
      {
        stem: 'Which department of the Government of India serves as the nodal agency coordinating Citizen\'s Charters and administrative reforms nationwide?',
        options: [
          'Department of Expenditure',
          'Department of Administrative Reforms and Public Grievances (DARPG)',
          'Ministry of Parliamentary Affairs',
          'Central Statistical Office',
        ],
        correctOptionIndex: 1,
        explanation: 'DARPG (under the Ministry of Personnel, Public Grievances and Pensions) anchors Citizen\'s Charters, Sevottam, and CPGRAMS.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the Uttarakhand Right to Service framework, what remedy is built in if a Designated Officer fails to issue a notified certificate within the stipulated working days without valid reason?',
        options: [
          'The citizen must wait indefinitely without recourse',
          'The citizen can escalate to First and Second Appellate Authorities / RTS Commission, which can order service delivery, impose monetary penalty on the officer, and award compensation to the applicant',
          'The District Magistrate abolishes the certificate requirement',
          'The case goes straight to the Supreme Court',
        ],
        correctOptionIndex: 1,
        explanation: 'Statutory penalty and citizen compensation differentiate enforceable RTS statutes from non-binding Citizen\'s Charters.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Role of Civil Services, NGOs, SHGs & Lokayukta',
    materialTitle: 'Role of Civil Services, NGOs, SHGs & Lokayukta — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Civil Services, Civil Society, SHGs & Lokayukta',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Role of Civil Services, NGOs, SHGs & Lokayukta

## 1. Role of Civil Services in a Democracy
Sardar Vallabhbhai Patel famously hailed the All-India Services as India's **"Steel Frame"**, preserving administrative continuity, national integration, and rule-of-law neutrality:
- **Core Functions:** Objective policy advice to political executives, impartial law implementation, welfare delivery, crisis/disaster leadership, and quasi-judicial revenue/regulatory adjudication.
- **Constitutional Protection (Article 311):** Civil servants cannot be dismissed/removed by an authority subordinate to their appointing authority, nor without an inquiry informing them of charges and reasonable opportunity of being heard (with strict Art. 311(2) exceptions).
- **Contemporary Reforms:** **Mission Karmayogi (NPCSCB — National Programme for Civil Services Capacity Building, 2020)** shifting from rule-based to **role-based** competency (*iGOT Karmayogi*), lateral entry for domain specialists, and **360-degree / SPARROW** appraisal.

## 2. NGOs, Civil Society & Self-Help Groups (SHGs)
- **NGOs & Voluntary Sector:** Bridge state last-mile gaps in health, literacy, watershed management, and accountability (*Social Audits*). In **Uttarakhand**, grassroots civil society groups (such as **Dasholi Gram Swarajya Mandal [DGSM]** founded by Chandi Prasad Bhatt, **HESCO** founded by Dr. Anil Prakash Joshi, and Mahila Mangal Dals) pioneered eco-restoration, spring-shed revival, and appropriate mountain technology. Accountability relies on **FCRA 2010/2020** (for foreign funds), *NITI Aayog NGO Darpan*, and Societies/Trust laws.
- **Self-Help Groups (SHGs):** Small voluntary affinity groups (10–20 members, predominantly rural women) pooling micro-savings and accessing institutional bank credit via **NABARD's SHG–Bank Linkage Programme (1992)** and **DAY-NRLM (Deendayal Antyodaya Yojana)**.
  - **Uttarakhand Initiatives:** **Lakhpati Didi** push and **Mukhyamantri Sashakt Bahana Utsav Yojana** empowering mountain SHGs to market *Aipan*, millet (*Mandua/Jhangora*), woollens, and organic produce via **House of Himalayas** brand.

## 3. Anti-Corruption Ombudsman: Lokpal & State Lokayuktas
- **Origin:** Inspired by the Scandinavian **Ombudsman**; term "Lokpal" coined by **L.M. Singhvi (1963)**; first recommended by **1st ARC (Morarji Desai, 1966)**; **Maharashtra (1971)** was the first state to establish a Lokayukta (Odisha passed the first Act in 1970, implemented 1983).
- **Lokpal and Lokayuktas Act, 2013:** Section 63 directed every state to establish a **Lokayukta** within 1 year.
- **Uttarakhand Lokayukta Act, 2014:** Replaced/modified earlier 2011 bill framework to establish an independent anti-corruption body covering state public functionaries (Ministers, MLAs, state bureaucrats) with investigation and prosecution wings.

## 4. Key Revision Takeaways
- **Article 311** shields civil servants against arbitrary political dismissal; **Mission Karmayogi (2020)** modernizes role-based training.
- **Maharashtra (1971)** was the first state to operationalize a **Lokayukta**; **1st ARC (1966)** proposed Lokpal & Lokayukta.
- **SHG–Bank Linkage** was piloted by **NABARD (1992)**; Uttarakhand's **House of Himalayas** & **DAY-NRLM** boost hill women's SHG market access.`,
    mcqs: [
      {
        stem: 'Which Constitutional Article protects civil servants of the Union and States against dismissal or removal by an authority subordinate to the appointing authority and mandates a fair inquiry?',
        options: ['Article 309', 'Article 311', 'Article 312', 'Article 320'],
        correctOptionIndex: 1,
        explanation: 'Article 311 provides vital security of tenure and natural-justice safeguards so civil servants can give fearless, objective advice.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which major Central reform launched in 2020 aims to transition Indian civil services from "rule-based" to "role-based" competency training through the iGOT digital platform?',
        options: [
          'Sevottam',
          'Mission Karmayogi (NPCSCB)',
          'E-Kranti',
          'PM Gati Shakti',
        ],
        correctOptionIndex: 1,
        explanation: 'The National Programme for Civil Services Capacity Building (Mission Karmayogi) builds behavioural, functional, and domain competencies across civil services.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Indian state became the FIRST to actually establish and operationalize the institution of a Lokayukta in 1971?',
        options: ['Odisha', 'Maharashtra', 'Karnataka', 'Uttarakhand'],
        correctOptionIndex: 1,
        explanation: 'Although Odisha passed India\'s first Lokayukta bill in 1970 (notified later in 1983), Maharashtra was the first state to implement and establish a functioning Lokayukta in 1971.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who originally coined the term "Lokpal" in India in 1963, and which Commission formally recommended the Lokpal–Lokayukta twin mechanism in 1966?',
        options: [
          'Sardar Patel; Sarkaria Commission',
          'Dr. L.M. Singhvi; First Administrative Reforms Commission (chaired by Morarji Desai)',
          'Anna Hazare; 2nd ARC',
          'B.R. Ambedkar; Law Commission',
        ],
        correctOptionIndex: 1,
        explanation: 'Jurist-MP L.M. Singhvi coined "Lokpal" and "Lokayukta" in 1963, and the First ARC (1966) formally proposed the statutory Ombudsman design.',
        difficulty: 'standard',
      },
      {
        stem: 'Which financial institution launched the landmark "SHG–Bank Linkage Programme" in 1992, transforming women\'s Self-Help Groups into India\'s largest microfinance network?',
        options: ['SEBI', 'NABARD', 'SIDBI', 'EXIM Bank'],
        correctOptionIndex: 1,
        explanation: 'NABARD pioneered the SHG–Bank Linkage Programme in 1992, later scaled alongside DAY-NRLM to unlock collateral-free institutional credit for women\'s groups.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which grassroots Uttarakhand civil society organization, founded by Chandi Prasad Bhatt in Gopeshwar (1964), pioneered Chipko eco-restoration and village forestry?',
        options: [
          'HESCO',
          'Dasholi Gram Swarajya Mandal (DGSM)',
          'Navdanya',
          'Van Panchayat Sangathan',
        ],
        correctOptionIndex: 1,
        explanation: 'DGSM (originally Dasholi Gram Swarajya Sangh) under Chandi Prasad Bhatt combined hill livelihoods with Chipko forest conservation in Chamoli.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who founded the Dehradun-based voluntary organization HESCO (Himalayan Environmental Studies and Conservation Organisation), famous for "Gross Environmental Product (GEP)" and hill rural technology?',
        options: [
          'Sunderlal Bahuguna',
          'Dr. Anil Prakash Joshi',
          'Shekhar Pathak',
          'Anupam Mishra',
        ],
        correctOptionIndex: 1,
        explanation: 'Padma Bhushan awardee Dr. Anil Prakash Joshi founded HESCO, promoting appropriate rural water-mill, agro-processing, and GEP ecological accounting models in Uttarakhand.',
        difficulty: 'standard',
      },
      {
        stem: 'Which statutory umbrella legislation regulates the acceptance and utilization of foreign contributions by NGOs and associations in India?',
        options: [
          'FEMA, 1999',
          'Foreign Contribution (Regulation) Act (FCRA), 2010 (amended 2020)',
          'Societies Registration Act, 1860',
          'Prevention of Corruption Act, 1988',
        ],
        correctOptionIndex: 1,
        explanation: 'Administered by the Ministry of Home Affairs, FCRA regulates foreign funding of NGOs (with 2020 amendments capping administrative expenses at 20% and requiring SBI New Delhi FCRA accounts).',
        difficulty: 'standard',
      },
      {
        stem: 'What is the core principle of Weberian "Civil Service Neutrality" expected of career bureaucrats in India\'s parliamentary system?',
        options: [
          'Supporting the opposition party openly in elections',
          'Impartial execution of the lawful policies of whichever elected government holds power, without partisan bias, while offering frank advice in private',
          'Joining political rallies after office hours',
          'Rejecting all legislative statutes',
        ],
        correctOptionIndex: 1,
        explanation: 'Anonymity and political neutrality enable career administrators to serve successive elected governments faithfully while upholding the Constitution.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which umbrella brand did the Uttarakhand Government launch to help rural women\'s Self-Help Groups (SHGs) sell local organic grains, spices, woollens, and handicrafts in national and global markets?',
        options: [
          'Kumaon Express',
          'House of Himalayas',
          'Pahadi Mart only',
          'Ganga Crafts Board',
        ],
        correctOptionIndex: 1,
        explanation: 'Unveiled at the 2023 Uttarakhand Global Investors Summit, "House of Himalayas" serves as the state\'s unified brand uplifting SHG and hill farmer products.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Central flagship rural livelihood mission channels revolving funds, community investment funds, and interest subvention to women\'s SHGs across Uttarakhand\'s 95 blocks?',
        options: [
          'PM-KISAN',
          'DAY-NRLM (Deendayal Antyodaya Yojana – National Rural Livelihoods Mission)',
          'Atal Pension Yojana',
          'Make in India',
        ],
        correctOptionIndex: 1,
        explanation: 'DAY-NRLM (implemented via Uttarakhand State Rural Livelihoods Mission — USRLM) organizes rural women into SHGs, Village Organizations, and Cluster-Level Federations.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under Article 311(2) second proviso, in which exceptional circumstance can a civil servant be dismissed WITHOUT holding a formal departmental inquiry?',
        options: [
          'Whenever a Minister dislikes their political views',
          'Where dismissed on conviction on a criminal charge, where inquiry is recorded in writing as not reasonably practicable, or where President/Governor is satisfied in the interest of State security',
          'Whenever an NGO submits an anonymous letter',
          'For minor leave delays',
        ],
        correctOptionIndex: 1,
        explanation: 'Article 311(2)(a), (b), and (c) list the three strict constitutional exceptions (conviction, impracticability recorded in writing, and state security).',
        difficulty: 'advanced',
      },
      {
        stem: 'What is "NITI Aayog NGO Darpan"?',
        options: [
          'A punitive court for NGOs',
          'A centralized government registration portal assigning unique IDs to Voluntary Organizations/NGOs seeking government grants and partnership transparency',
          'A microfinance bank for SHGs',
          'A Lokayukta criminal database',
        ],
        correctOptionIndex: 1,
        explanation: 'NGO Darpan maintains a verified registry and unique ID linking NGOs with Central Ministries and grant accountability.',
        difficulty: 'standard',
      },
      {
        stem: 'Under the Lokpal and Lokayuktas Act, 2013, which condition applies if the Lokpal initiates a preliminary inquiry or investigation against a sitting or former Prime Minister?',
        options: [
          'A single member can arrest the Prime Minister privately',
          'Allegations relating to international relations, external/internal security, public order, atomic energy, and space are excluded, and taking cognizance requires approval by at least two-thirds of the full Lokpal bench in camera',
          'The Prime Minister is totally immune on all corruption charges',
          'Only state Lokayuktas try the Prime Minister',
        ],
        correctOptionIndex: 1,
        explanation: 'Section 14(1)(a) brings the PM within Lokpal purview subject to strict national-security exclusions and a 2/3rds full-bench in-camera safeguard.',
        difficulty: 'advanced',
      },
      {
        stem: 'Why are women-led Self-Help Groups (SHGs) considered exceptionally strategic for Uttarakhand\'s rural mountain economy?',
        options: [
          'Because male out-migration leaves women as primary agriculturalists and household managers; SHGs convert isolated subsistence work into collective credit, processing, and market power',
          'Because SHGs replace District Magistrates',
          'Because banks only lend to cities otherwise',
          'Because SHGs are exempt from GST on large factories',
        ],
        correctOptionIndex: 0,
        explanation: 'In hill districts with high male out-migration ("money-order economy"), women\'s SHGs anchor hill farming, dairy, homestays, and reverse-migration micro-enterprises.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Public Policy Formulation, Implementation & E-Governance',
    materialTitle: 'Public Policy Formulation, Implementation & E-Governance — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Public Policy Cycle & Digital E-Governance',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Public Policy Formulation, Implementation & E-Governance

## 1. The Public Policy Cycle
Public policy encompasses purposive courses of action chosen by public authorities to resolve societal problems:
1. **Agenda Setting:** Problem recognition via citizens, media, commissions, disasters, or judicial mandates.
2. **Policy Formulation:** Evidence gathering, stakeholder consultation, fiscal costing, NITI Aayog/Departmental drafting, and Cabinet approval.
3. **Legitimation / Legislation:** Enactment of statute, subordinate rules/regulations, and budget allocation.
4. **Implementation ("Last-Mile Delivery"):** Administrative execution via Secretariat → Directorates → District/Block/Panchayat machinery.
5. **Monitoring & Evaluation (M&E):** Outcome budgeting, **DMEO (Development Monitoring and Evaluation Office, NITI Aayog)**, **Social Audits** (pioneered under MGNREGA), and **CAG Performance Audits**—feeding back into redesign.

## 2. E-Governance: Models & India's Digital Public Infrastructure (DPI)
**E-Governance** goes beyond digitizing paper ("e-Government") to **SMART Governance** (**Simple, Moral, Accountable, Responsive, Transparent**):
- **Four Interaction Channels:** **G2C** (Citizen: *DigiLocker, UMANG, Apuni Sarkar*), **G2B** (Business: *GeM, MCA21, Invest Uttarakhand Single Window*), **G2G** (Government: *e-Office, PRAGATI, PFMS*), **G2E** (Employee: *iGOT Karmayogi, e-HRMS*).
- **India Stack / DPI Pillars:** **Aadhaar** (digital identity, JAM Trinity — *Jan Dhan–Aadhaar–Mobile* curbing DBT leakages), **UPI** (real-time payments), **DigiLocker** (verifiable paperless credentials), **BHASHINI** (multilingual voice translation), and **ONDC** (open e-commerce).
- **Key National Platforms:**
  - **NeGP (2006) → Digital India (2015)** (*9 Pillars* including Broadband Highways, e-Kranti, Early Harvest).
  - **PRAGATI (2015):** PM-chaired multi-modal ICT platform tracking stalled mega-projects & grievances.
  - **GeM (Government e-Marketplace, 2016):** Transparent public procurement portal.
  - **CPGRAMS:** Centralized Public Grievance Redress and Monitoring System (linked with state portals like Uttarakhand's **CM Helpline 1905**).

## 3. Uttarakhand's E-Governance Landscape
- **Apuni Sarkar:** Single sign-on citizen service portal delivering 600+ RTS services.
- **Devbhoomi Portal:** Digitized land records (*Khatauni/Khasra* integration under DILRMP).
- **CM Helpline 1905:** Toll-free grievance redressal tracking escalation across district officials.
- **Invest Uttarakhand (Single Window Clearance):** Streamlining industrial/MSME/tourism approvals.
- **Digital Challenges in Hills:** Shadow zones/telecom connectivity gaps in high-altitude borders (Chamoli, Uttarkashi, Pithoragarh), digital literacy among elderly rural women, and cybersecurity resilience.

## 4. Key Revision Takeaways
- **SMART** = Simple, Moral, Accountable, Responsive, Transparent.
- **JAM Trinity (Jan Dhan–Aadhaar–Mobile)** powers **Direct Benefit Transfer (DBT)**, eliminating ghost beneficiaries.
- **Uttarakhand DPI tools:** **Apuni Sarkar** (G2C RTS services), **Devbhoomi** (land records), and **CM Helpline 1905** (grievance redressal).`,
    mcqs: [
      {
        stem: 'In administrative theory, what does the acronym "SMART" stand for in describing E-Governance objectives?',
        options: [
          'Systematic, Mandatory, Automated, Rapid, Technical',
          'Simple, Moral, Accountable, Responsive, and Transparent',
          'Secure, Modular, Accessible, Regulated, Total',
          'Standardized, Mobile, Analytical, Reliable, Timely',
        ],
        correctOptionIndex: 1,
        explanation: 'Highlighted in the 2nd ARC\'s 11th Report ("Promoting e-Governance: The SMART Way Forward"), SMART stands for Simple, Moral, Accountable, Responsive, and Transparent.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which three components constitute India\'s "JAM Trinity" that revolutionized Direct Benefit Transfers (DBT) by reducing leakages and ghost beneficiaries?',
        options: [
          'Justice, Accountability, Mobility',
          'Jan Dhan (bank accounts), Aadhaar (unique biometric ID), and Mobile (connectivity)',
          'Judiciary, Administration, Media',
          'Jal, Awas, and Mudra',
        ],
        correctOptionIndex: 1,
        explanation: 'Coined in the Economic Survey, the JAM Trinity links universal financial inclusion (PMJDY) with Aadhaar authentication and mobile banking.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which e-Governance interaction channel does the Government e-Marketplace (GeM) primarily represent for MSMEs and suppliers selling goods/services to government departments?',
        options: [
          'G2C (Government to Citizen)',
          'G2B (Government to Business)',
          'G2E (Government to Employee)',
          'C2C (Citizen to Citizen)',
        ],
        correctOptionIndex: 1,
        explanation: 'GeM is a premier G2B (and G2G procurement) platform promoting competitive bidding and transparent public spending.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which digital portal provides citizens of Uttarakhand online access to digitized Khasra–Khatauni land records under the Digital India Land Records Modernization Programme?',
        options: ['Apuni Sarkar', 'Devbhoomi Portal', 'PRAGATI', 'e-Nam'],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand\'s Devbhoomi portal hosts digitized land records (Bhulekh/Khatauni), while Apuni Sarkar delivers online RTS certificates.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the purpose of Uttarakhand\'s "CM Helpline 1905"?',
        options: [
          'Tourism hotel booking only',
          'Time-bound toll-free citizen grievance registration, automated escalation, and resolution tracking across state departments',
          'Emergency forest fire aircraft dispatch',
          'UKPSC exam fee refunds only',
        ],
        correctOptionIndex: 1,
        explanation: 'CM Helpline 1905 functions as Uttarakhand\'s centralized public grievance tracking system integrated with district and state-level escalation levels.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is "PRAGATI" launched by the Government of India in 2015?',
        options: [
          'A satellite launch vehicle',
          'Pro-Active Governance and Timely Implementation—a multi-purpose ICT platform chaired by the PM to review delayed mega infrastructure projects and public grievances with Chief Secretaries',
          'A cryptocurrency for Panchayats',
          'A school textbook scheme',
        ],
        correctOptionIndex: 1,
        explanation: 'PRAGATI combines digital data management, video-conferencing, and geospatial technology for G2G Centre–State project monitoring.',
        difficulty: 'standard',
      },
      {
        stem: 'Which statutory audit mechanism, pioneered first under MGNREGA (Section 17), involves affected local villagers verifying public works, muster rolls, and expenditures directly in Gram Sabhas?',
        options: [
          'Forensic Banking Audit',
          'Social Audit',
          'Zero-Based Budgeting',
          'Outcome Budgeting only',
        ],
        correctOptionIndex: 1,
        explanation: 'Social Audits empower citizens as primary policy evaluators, curbing ghost muster rolls and material diversion at the grassroots.',
        difficulty: 'foundation',
      },
      {
        stem: 'In the public policy formulation institutional ecosystem in India, what replaced the Planning Commission in 2015 to serve as a cooperative-federalism policy think-tank and M&E hub?',
        options: [
          'Finance Commission',
          'NITI Aayog (housing the Development Monitoring and Evaluation Office — DMEO)',
          'National Development Council alone',
          'Law Commission of India',
        ],
        correctOptionIndex: 1,
        explanation: 'NITI Aayog focuses on bottom-up cooperative/competitive federalism, Aspirational Districts/Blocks indices, and DMEO impact evaluation without discretionary fund allocation power.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which component of India\'s Digital Public Infrastructure (DPI) provides citizens an authentic cloud wallet to store and share legally valid digital certificates (driving licence, marksheets, caste certificates) equivalent to physical originals?',
        options: ['BHASHINI', 'DigiLocker', 'PFMS', 'SWAYAM'],
        correctOptionIndex: 1,
        explanation: 'Under IT Rules (Rule 9A), documents issued inside DigiLocker are legally at par with original physical certificates.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the primary distinction between "e-Government" and "e-Governance"?',
        options: [
          'There is no difference; both simply mean buying computers',
          'e-Government focuses on internal digitization of government operations, whereas e-Governance uses ICT to transform citizen participation, transparency, accountability, and two-way service delivery',
          'e-Governance excludes internet use',
          'e-Government only applies to municipal councils',
        ],
        correctOptionIndex: 1,
        explanation: 'E-Governance emphasizes citizen-centric transformation, participatory feedback, and procedural simplification (BPR — Business Process Re-engineering), not merely automating outdated red tape.',
        difficulty: 'standard',
      },
      {
        stem: 'In public financial policy, what does the "Public Financial Management System (PFMS)" achieve?',
        options: [
          'Grants private home loans to citizens',
          'Real-time tracking of fund flows from Treasury down to implementing agencies and last-mile DBT beneficiaries ("Just-in-Time" SNA/CNA release)',
          'Regulates mutual funds',
          'Conducts municipal elections',
        ],
        correctOptionIndex: 1,
        explanation: 'Developed by the Controller General of Accounts (CGA), PFMS eliminates idle parking of funds across CSS schemes via Single Nodal Agency (SNA) monitoring.',
        difficulty: 'standard',
      },
      {
        stem: 'Which principle of "Business Process Re-engineering (BPR)" did the 2nd ARC emphasize BEFORE deploying software in government offices?',
        options: [
          'Automating every outdated colonial paper register without removing redundant signatures',
          'Simplifying rules, eliminating unnecessary approvals, and redesigning workflows first so ICT does not merely digitize inefficiency',
          'Replacing all officers with chatbots',
          'Removing citizen feedback channels',
        ],
        correctOptionIndex: 1,
        explanation: 'BPR ensures obsolete steps and multi-desk bottlenecks are removed prior to software automation.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which Central platform provides a unified single-app mobile gateway aggregating hundreds of Central and State e-Governance services (EPFO, CBSE, Passport, DigiLocker, State services)?',
        options: ['GeM', 'UMANG (Unified Mobile Application for New-age Governance)', 'MCA21', 'e-Courts'],
        correctOptionIndex: 1,
        explanation: 'UMANG is a core Digital India platform bringing multi-tier G2C services into one mobile interface.',
        difficulty: 'standard',
      },
      {
        stem: 'What is a distinctive last-mile hurdle to E-Governance expansion across high-altitude districts of Uttarakhand (such as Uttarkashi, Chamoli, and Pithoragarh)?',
        options: [
          'Absence of Aadhaar enrolment anywhere in the state',
          'Terrain-induced telecom shadow zones, optical-fibre disruption during landslides/snowfall, and low digital literacy among elderly hill residents',
          'Total ban on smartphones in hill districts',
          'Zero Common Service Centres (CSCs)',
        ],
        correctOptionIndex: 1,
        explanation: 'While CSCs and 4G saturation/BharatNet expand access, rugged topography requires offline-resilient workflows and assisted digital facilitation.',
        difficulty: 'standard',
      },
      {
        stem: 'In public policy budgeting, what distinguishes "Outcome Budgeting" from traditional "Line-Item Budgeting"?',
        options: [
          'Outcome budgeting measures only how much money was spent by March 31',
          'Outcome budgeting links financial outlays and physical outputs directly to measurable developmental impacts and service-quality indicators',
          'Line-item budgeting is only used by private startups',
          'Outcome budgeting forbids audit',
        ],
        correctOptionIndex: 1,
        explanation: 'India\'s Outcome-Output Monitoring Framework (OOMF) shifts evaluation focus from mere fund utilization ("outlay") to real societal impact ("outcome").',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'India & Its Neighbourhood (Strategic Relevance to Uttarakhand)',
    materialTitle: 'India & Its Neighbourhood (Strategic Relevance to Uttarakhand) — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: India–Neighbourhood & Uttarakhand Borders',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# India & Its Neighbourhood (Strategic Relevance to Uttarakhand)

## 1. Neighbourhood First Policy & Uttarakhand's Geostrategic Position
Uttarakhand is one of the very few Indian states sharing direct land frontiers with **two countries simultaneously** (**China/Tibet ~350 km** and **Nepal ~275 km**), placing it at the heart of India's **Central Sector Himalayan defence** and **Neighbourhood First** diplomacy.

## 2. India–China Relations & Central Sector (Uttarakhand LAC)
- **Line of Actual Control (LAC):** Divided into Western (Ladakh), **Central (Himachal Pradesh & Uttarakhand — least disputed historically, though sensitive around Barahoti in Chamoli)**, and Eastern (Sikkim & Arunachal Pradesh) sectors.
- **Border Passes & Infrastructure:** **Mana, Niti, Kungri-Bingri, Darma, and Lipulekh** passes sit in Chamoli/Pithoragarh. Following post-2020 LAC tensions, India accelerated **BRO border roads** (e.g., **Ghatiyabagarh–Lipulekh Kailash Mansarovar road**, all-weather **Char Dham corridor**), ITBP forward posts, and the **Vibrant Villages Programme (VVP)** covering border villages in **Uttarkashi (Nelang/Jadung), Chamoli (Mana/Niti), and Pithoragarh (Gunji/Kuti/Nabhi)** to curb out-migration and bolster dual-use resilience.
- **Bilateral Dynamics:** Panchsheel (1954), 1962 War, 1993 Peace & Tranquility Agreement, 2005 Political Parameters, Wuhan/Mamallapuram informal summits, Galwan (2020) freeze, and recent 2024–25 patrolling disengagement talks—balancing massive bilateral trade asymmetry against security and trans-boundary water concerns.

## 3. India–Nepal Relations & Uttarakhand's Deep Ties
- **"Roti–Beti" & Treaty of Peace and Friendship (1950):** Open border, visa-free movement, cultural–linguistic kinship (shared Kumaoni/Dotiyali/Tharu bonds along the **Kali/Mahakali River**), and **Gorkha recruitment** in the Indian Army.
- **Key Bilateral Projects & Agreements Involving Uttarakhand:**
  - **Mahakali Treaty (1996):** Covers **Tanakpur Barrage**, Sarada Barrage, and the proposed **Pancheshwar Multipurpose Project** (5,040+ MW mega hydro/irrigation project on Kali river along Pithoragarh–Champawat border).
  - **Kailash Mansarovar Yatra** via **Lipulekh Pass (Pithoragarh)** and cross-border bridges/dry-port trade via **Banbasa–Mahendranagar** and **Jhulaghat / Jauljibi / Dharchula**.
- **Boundary Sensitivity (Kalapani–Lipulekh–Limpiyadhura):** Differing cartographic interpretations of the **1816 Treaty of Sugauli** regarding the origin stream of the Kali river (Kuti Yangti/Limpiyadhura vs Kalapani springs). India administers the area under Pithoragarh district and advocates mature bilateral dialogue.

## 4. Broader Indian Neighbourhood Overview
- **Bangladesh:** *Land Boundary Agreement (100th Amendment, 2015)*, river-sharing (Ganga 1996, Teesta pending), connectivity (Agartala–Akhaura, Matarbari/Chittagong access), post-2024 political transition sensitivity.
- **Bhutan:** Exemplar friendship (1949/2007 Treaty), Hydropower (Chukha, Tala, Mangdechhu, Punatsangchhu), Doklam tri-junction security (2017).
- **Sri Lanka & Maldives:** *SAGAR* maritime security, *Colombo Security Conclave*, India's $4B+ economic stabilization support to Sri Lanka (2022–23), calibrated diplomacy with Maldives.
- **Pakistan & Afghanistan:** Indus Waters Treaty (1960) tensions, cross-border terror challenges, humanitarian aid & Chabahar access toward Central Asia.

## 5. Key Revision Takeaways
- **Central Sector of India–China LAC** runs through Himachal & **Uttarakhand** (**Barahoti** grazing plain in Chamoli is a key focus point).
- **Vibrant Villages Programme** upgrades infrastructure & tourism in **Uttarkashi, Chamoli, and Pithoragarh** border villages.
- **Mahakali Treaty (1996)** governs the **Pancheshwar** & **Tanakpur** hydro framework between India and Nepal along Uttarakhand's eastern border.`,
    mcqs: [
      {
        stem: 'Which sector of the India–China Line of Actual Control (LAC) encompasses Uttarakhand alongside Himachal Pradesh?',
        options: ['Western Sector', 'Central (Middle) Sector', 'Eastern Sector', 'Southern Maritime Sector'],
        correctOptionIndex: 1,
        explanation: 'The LAC is divided into Western (Ladakh), Central/Middle (HP and Uttarakhand), and Eastern (Sikkim and Arunachal) sectors.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which high-altitude pastureland in Chamoli district of Uttarakhand is the most frequently noted sensitive pocket along the Central Sector of the India–China LAC?',
        options: ['Bugyal of Dayara', 'Barahoti (Wu-Je)', 'Harsil valley', 'Munsiyari'],
        correctOptionIndex: 1,
        explanation: 'Barahoti (called Wu-Je by China) in Chamoli is one of the few demilitarized/disputed grazing zones in the otherwise largely settled Middle Sector.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Central Government scheme launched in 2023 specifically targets comprehensive infrastructure, livelihood, and reverse-migration development in India\'s northern border villages across Uttarakhand (Uttarkashi, Chamoli, Pithoragarh), HP, Ladakh, Sikkim, and Arunachal?',
        options: [
          'SAGARMALA',
          'Vibrant Villages Programme (VVP)',
          'PM-KUSUM',
          'Swadesh Darshan 1.0',
        ],
        correctOptionIndex: 1,
        explanation: 'Covering 4 northern states + Ladakh UT along the LAC, Vibrant Villages Programme upgrades roads, 4G, homestays, and solar power in frontline border settlements like Mana, Niti, Nelang, and Gunji.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which historic 1950 bilateral treaty underpins the open border, reciprocal employment, and national-treatment rights between India and Nepal?',
        options: [
          'Treaty of Sugauli (1816)',
          'Indo-Nepal Treaty of Peace and Friendship (1950)',
          'Shimla Accord (1914)',
          'Mahakali Treaty (1996)',
        ],
        correctOptionIndex: 1,
        explanation: 'Signed on 31 July 1950, the Treaty of Peace and Friendship anchors open-border mobility and deep economic–cultural ties.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which proposed mega bilateral hydroelectric and irrigation project on the Kali (Mahakali) river directly involves Uttarakhand\'s Pithoragarh–Champawat border with Nepal under the 1996 Mahakali Treaty?',
        options: [
          'Tehri Stage II Project',
          'Pancheshwar Multipurpose Project',
          'Arun-III Project',
          'Kishanganga Project',
        ],
        correctOptionIndex: 1,
        explanation: 'The 1996 Mahakali Treaty governs Tanakpur Barrage, Sharda Barrage, and the joint Pancheshwar Multipurpose Project on the border Mahakali river.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which mountain pass in Pithoragarh district serves both as a traditional India–Tibet trade corridor and the famous land route for the Kailash Mansarovar Yatra?',
        options: ['Mana Pass', 'Lipulekh Pass', 'Niti Pass', 'Shipki La'],
        correctOptionIndex: 1,
        explanation: 'Lipulekh Pass (tri-junction area of India, China/Tibet, and Nepal in Pithoragarh) is the historic pilgrim and border trade pass upgraded by BRO\'s Ghatiyabagarh–Lipulekh road.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which historical 1816 treaty between the British East India Company and the Kingdom of Nepal lies at the root of current differing interpretations regarding the headwater source of the Kali River near Kalapani?',
        options: [
          'Treaty of Amritsar',
          'Treaty of Sugauli (ratified 1816)',
          'Treaty of Sinchula',
          'Treaty of Lahore',
        ],
        correctOptionIndex: 1,
        explanation: 'Article 5 of the Treaty of Sugauli fixed the Kali River as Nepal\'s western boundary, with modern disagreement centering on which tributary represents the main Kali origin.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which paramilitary Central Armed Police Force (CAPF) under the Union Ministry of Home Affairs holds primary peacetime border-guarding responsibility along the India–China LAC in Uttarakhand, and which CAPF guards the open India–Nepal border?',
        options: [
          'BSF on China border; CRPF on Nepal border',
          'ITBP (Indo-Tibetan Border Police) on the China LAC; SSB (Sashastra Seema Bal) on the Nepal border',
          'Assam Rifles on both borders',
          'CISF on both borders',
        ],
        correctOptionIndex: 1,
        explanation: 'Following India\'s "One Border, One Force" principle, ITBP guards the high-altitude Sino-Indian LAC while SSB guards the friendly open India–Nepal (and Bhutan) borders.',
        difficulty: 'foundation',
      },
      {
        stem: 'In which district of Uttarakhand is the historic cross-border trade fair at Jauljibi (at the confluence of the Kali and Gori Ganga rivers) held annually along the Nepal border?',
        options: ['Champawat', 'Pithoragarh', 'Udham Singh Nagar', 'Almora'],
        correctOptionIndex: 1,
        explanation: 'The Jauljibi Fair in Pithoragarh celebrates centuries-old Bhotia–Nepali–Kumaoni cross-border commerce at the Kali–Gori confluence.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Constitutional Amendment enabled India and Bangladesh to implement the historic 1974 Land Boundary Agreement (LBA) and exchange enclaves in 2015?',
        options: [
          '99th Amendment',
          '100th Constitutional Amendment Act, 2015',
          '101st Amendment',
          '102nd Amendment',
        ],
        correctOptionIndex: 1,
        explanation: 'Ratifying the 1974 LBA and 2011 Protocol, the 100th Amendment settled 111 Indian enclaves in Bangladesh and 51 Bangladeshi enclaves in India.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Indian maritime doctrine announced in 2015 guides India\'s cooperative security and blue-economy outreach across Sri Lanka, Maldives, Mauritius, and Seychelles?',
        options: ['Look North', 'SAGAR (Security and Growth for All in the Region)', 'Connect Central Asia', 'Act West'],
        correctOptionIndex: 1,
        explanation: 'SAGAR anchors India\'s Indian Ocean Region (IOR) net-security-provider partnerships and Colombo Security Conclave cooperation.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why was the Doklam standoff (2017) strategically critical to India\'s security along the Siliguri Corridor even though it occurred near Bhutan?',
        options: [
          'Doklam lies inside Uttarakhand',
          'Chinese road construction on the Doklam plateau risked overlooking India\'s narrow Siliguri Corridor ("Chicken\'s Neck") connecting mainland India to the Northeast',
          'It involved Sri Lankan ports',
          'It threatened the Indus Waters Treaty',
        ],
        correctOptionIndex: 1,
        explanation: 'The India–Bhutan–China tri-junction at Doklam sits directly north of the 22-km narrow Siliguri Corridor.',
        difficulty: 'standard',
      },
      {
        stem: 'Which three "Eastern Rivers" and three "Western Rivers" were allocated respectively to India and Pakistan under the World Bank-brokered Indus Waters Treaty (1960)?',
        options: [
          'Indus, Jhelum, Chenab to India; Ravi, Beas, Sutlej to Pakistan',
          'Ravi, Beas, and Sutlej to India (unrestricted use); Indus, Jhelum, and Chenab to Pakistan (with permitted run-of-the-river/limited Indian use)',
          'Ganga and Yamuna to Pakistan',
          'All six rivers split 50-50 equally',
        ],
        correctOptionIndex: 1,
        explanation: 'The 1960 Treaty gave India exclusive rights to the Eastern Rivers (Ravi, Beas, Sutlej) and constrained non-consumptive/run-of-the-river rights on the Western Rivers (Indus, Jhelum, Chenab).',
        difficulty: 'standard',
      },
      {
        stem: 'Which pair of border villages in Uttarkashi district—evacuated after the 1962 conflict—is now being reopened for heritage border tourism under the Vibrant Villages Programme?',
        options: [
          'Mana and Malari',
          'Nelang and Jadung',
          'Gunji and Nabi',
          'Munsiyari and Milam',
        ],
        correctOptionIndex: 1,
        explanation: 'The scenic cold-desert Gartang Gali / Nelang–Jadung valleys in Uttarkashi are key Vibrant Villages border-tourism initiatives.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which trade transit corridor connects Uttarakhand\'s Kumaon plains directly with western Nepal for cross-border commerce and energy grid links?',
        options: [
          'Attari–Wagah corridor',
          'Banbasa–Tanakpur–Mahendranagar corridor (Champawat/USN border)',
          'Nathu La corridor',
          'Petrapole–Benapole corridor',
        ],
        correctOptionIndex: 1,
        explanation: 'Banbasa (Champawat) and Tanakpur link Uttarakhand directly to Nepal\'s Sudurpashchim province via highway and cross-border power/barrages.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Bilateral Relations with Major Powers & Indian Diaspora',
    materialTitle: 'Bilateral Relations with Major Powers & Indian Diaspora — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Major Powers & Global Indian Diaspora',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Bilateral Relations with Major Powers & Indian Diaspora

## 1. India's Foreign Policy Paradigm: Strategic Autonomy & Multi-Alignment
India has transitioned from Cold War **Non-Alignment (NAM)** to pragmatic **Multi-Alignment / Strategic Autonomy**—engaging competing poles simultaneously to safeguard national security, technology access, energy, and multipolarity.

## 2. Bilateral Relations with Major Global Powers
| Power | Foundational Pillar & Foundational Agreements | Key Contemporary Pillars |
|---|---|---|
| **United States** | *123 Civil Nuclear Agreement (2008)*; **4 Foundational Defence Pacts:** *GSOMIA* (2002), **LEMOA** (2016), **COMCASA** (2018), **BECA** (2020) | **iCET** (Initiative on Critical and Emerging Technology — AI, semiconductors, quantum, space); **2+2 Ministerial Dialogue**; **QUAD** maritime partner; largest goods+services trading partner; Uttarakhand hosts joint Indo-US **Yudh Abhyas** exercises (Chaubattia/Auli) |
| **Russia** | *1971 Treaty of Peace, Friendship and Cooperation*; *2000 Strategic Partnership* (upgraded 2010 to Special & Privileged) | Legacy defence hardware (**S-400, BrahMos joint venture, AK-203 Amethi, Su-30MKI**), **Kudankulam** nuclear reactors, discounted crude oil post-2022, **INSTC** (International North–South Transport Corridor) & **Chennai–Vladivostok** maritime route; balancing Russia–China proximity |
| **European Union & France / UK / Germany** | **France** ("Strategic Partner" since 1998): Rafale, Scorpène (*Project-75*), International Solar Alliance (co-founded 2015) | **India–EU Trade and Technology Council (TTC)**; Carbon Border Adjustment Mechanism (**CBAM**) friction; **India–Middle East–Europe Economic Corridor (IMEC)** announced at 2023 New Delhi G20 |
| **Japan & Australia** | Japan (*Special Strategic & Global Partnership*): **Mumbai–Ahmedabad HSR**, Delhi/Mumbai Metro, **ACSA** logistics pact; Australia: **ECTA (2022)** & critical minerals | **QUAD** pillars, Indo-Pacific Supply Chain Resilience Initiative (**SCRI**) |

## 3. The Indian Diaspora (35+ Million Overseas Indians)
- **Three Categories:** **NRIs** (Indian passport holders residing abroad), **PIOs** (foreign citizens of Indian origin), and **OCI (Overseas Citizen of India)** cardholders (*OCI–PIO merged in 2015*: lifelong multiple-entry visa, economic/educational parity except agricultural land purchase & voting/public office).
- **Strategic & Economic Contributions:**
  - **World's Top Remittance Recipient:** Over **$115–125+ billion annually** (World Bank recent estimates), stabilizing India's Current Account.
  - **Soft Power & Lobbying:** Influencing technology leadership (Silicon Valley), parliamentary caucuses (US/UK), and cultural diplomacy (**Pravasi Bharatiya Divas — 9 January**, commemorating Gandhi's 1915 return).
  - **Evacuation Operations:** *Operation Ganga* (Ukraine, 2022), *Operation Kaveri* (Sudan, 2023), *Operation Ajay* (Israel, 2023), *Operation Devi Shakti* (Afghanistan, 2021).
  - **Uttarakhand Diaspora:** Active Kumaoni and Garhwali associations abroad contributing to disaster relief, scholarships, and hometown village adoption.

## 4. Key Revision Takeaways
- **4 US–India Defence Foundational Pacts:** **GSOMIA → LEMOA → COMCASA → BECA** (2020).
- **Pravasi Bharatiya Divas (9 January)** honours Gandhi's 1915 return from South Africa; **LM Singhvi Committee** institutionalized it in 2003.
- **OCI holders** enjoy lifelong visa & NRI-like economic parity (excluding voting, constitutional offices, and agricultural/plantation property purchase).`,
    mcqs: [
      {
        stem: 'Which four foundational military agreements bind India and the United States in defence logistics, encrypted communications, and geospatial intelligence sharing?',
        options: [
          'NATO, SEATO, ANZUS, and QUAD',
          'GSOMIA (2002), LEMOA (2016), COMCASA (2018), and BECA (2020)',
          'Panchsheel, Tashkent, Shimla, and Lahore',
          'START, INF, CTBT, and NPT',
        ],
        correctOptionIndex: 1,
        explanation: 'Signing BECA (Basic Exchange and Cooperation Agreement) in October 2020 completed all four US–India foundational defence agreements.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is "iCET" launched by India and the United States in 2023?',
        options: [
          'An environmental carbon tax treaty',
          'Initiative on Critical and Emerging Technology covering semiconductors, AI, quantum computing, defence innovation, and space',
          'A bilateral wheat tariff pact',
          'A consular visa lottery',
        ],
        correctOptionIndex: 1,
        explanation: 'Led by both countries\' National Security Advisors, iCET deepens high-tech co-development and removes export-control barriers.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which military exercise series between the Indian Army and the US Army has frequently been conducted in Uttarakhand locations such as Chaubattia (Ranikhet) and Auli?',
        options: ['Exercise Indra', 'Exercise Yudh Abhyas', 'Exercise Shakti', 'Exercise Surya Kiran'],
        correctOptionIndex: 1,
        explanation: 'Exercise Yudh Abhyas (India–US) trains mountain & counter-insurgency interoperability (while Surya Kiran is India–Nepal, often at Pithoragarh, and Shakti is India–France).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which major multimodal connectivity initiative linking India, the UAE, Saudi Arabia, Jordan, Israel, and Europe was announced on the sidelines of the 2023 G20 New Delhi Summit?',
        options: [
          'INSTC (International North-South Transport Corridor)',
          'IMEC (India–Middle East–Europe Economic Corridor)',
          'Belt and Road Initiative',
          'Mekong–Ganga Corridor',
        ],
        correctOptionIndex: 1,
        explanation: 'IMEC envisions rail-and-port shipping links alongside clean hydrogen pipelines and digital cables connecting Mumbai/Mundra across Arabia to Europe.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which country became the first Western major power to sign a Strategic Partnership with India in 1998 and co-founded the International Solar Alliance (ISA) with India in 2015?',
        options: ['United Kingdom', 'Germany', 'France', 'Japan'],
        correctOptionIndex: 2,
        explanation: 'France maintained consistent strategic trust even after 1998 Pokhran-II tests and co-launched ISA at COP21 Paris alongside major defence/space ties.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the primary geopolitical rationale of the "International North–South Transport Corridor (INSTC)" championed by India, Iran, and Russia?',
        options: [
          'Connecting Mumbai via Iran\'s Bandar Abbas/Chabahar onward across the Caspian region to Russia and Eurasia, cutting transit time and bypassing the Suez route',
          'Linking New Delhi to Tokyo via Pacific cables',
          'A purely domestic Indian rail line',
          'A Arctic oil pipeline',
        ],
        correctOptionIndex: 0,
        explanation: 'INSTC is a 7,200-km ship, rail, and road network lowering freight time and costs between India, Iran, Central Asia, and Russia.',
        difficulty: 'standard',
      },
      {
        stem: 'Why is 9 January observed biennially/officially in India as "Pravasi Bharatiya Divas" (Non-Resident Indian Day)?',
        options: [
          'Date the Indian Constitution was adopted',
          'Commemorates Mahatma Gandhi\'s return from South Africa to Mumbai on 9 January 1915',
          'Anniversary of the 1991 Economic Reforms',
          'Date of India\'s first nuclear test',
        ],
        correctOptionIndex: 1,
        explanation: 'Recommended by the L.M. Singhvi High-Level Committee on Indian Diaspora, 9 January honours the greatest "Pravasi" returnee in modern history.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which economic or political right is an "Overseas Citizen of India (OCI)" cardholder LEGALLY BARRED from exercising in India?',
        options: [
          'Opening an NRE bank account',
          'Purchasing residential or commercial urban property',
          'Voting in Indian elections, holding constitutional public offices, or acquiring agricultural land / plantation properties',
          'Travelling visa-free to India for life',
        ],
        correctOptionIndex: 2,
        explanation: 'OCI is not dual citizenship; OCI cardholders cannot vote, contest elections, hold Art. 16 public jobs, or buy agricultural/farmhouse/plantation land.',
        difficulty: 'standard',
      },
      {
        stem: 'Match India\'s recent diaspora evacuation operations with the correct crisis country: 1. Operation Ganga 2. Operation Kaveri 3. Operation Ajay 4. Operation Devi Shakti:',
        options: [
          '1-Ukraine, 2-Sudan, 3-Israel, 4-Afghanistan',
          '1-Sudan, 2-Ukraine, 3-Afghanistan, 4-Israel',
          '1-Israel, 2-Afghanistan, 3-Ukraine, 4-Sudan',
          '1-Afghanistan, 2-Israel, 3-Sudan, 4-Ukraine',
        ],
        correctOptionIndex: 0,
        explanation: 'India executed Devi Shakti (Afghanistan, 2021), Ganga (Ukraine, 2022), Kaveri (Sudan, 2023), and Ajay (Israel, 2023).',
        difficulty: 'standard',
      },
      {
        stem: 'What is the European Union\'s "CBAM" mechanism that poses a significant trade friction issue in contemporary India–EU negotiations?',
        options: [
          'Cross-Border Agricultural Market',
          'Carbon Border Adjustment Mechanism—a carbon-tariff levy on carbon-intensive imports such as Indian steel and aluminium entering the EU',
          'Central Bank Asset Mandate',
          'Cultural Bilateral Art Mission',
        ],
        correctOptionIndex: 1,
        explanation: 'CBAM penalizes carbon-embedded imports from developing nations like India unless decarbonized or covered by equivalent domestic carbon pricing.',
        difficulty: 'standard',
      },
      {
        stem: 'What bilateral trade milestone did India and Australia sign in 2022 that eliminated tariffs on over 85% of Australian exports and ~96% of Indian goods?',
        options: [
          'RCEP Agreement',
          'IndAus ECTA (Economic Cooperation and Trade Agreement)',
          'Comprehensive CPTPP Pact',
          'NAFTA Extension',
        ],
        correctOptionIndex: 1,
        explanation: 'ECTA entered into force in December 2022 while both sides negotiate a broader Comprehensive Economic Cooperation Agreement (CECA).',
        difficulty: 'standard',
      },
      {
        stem: 'How does India\'s "Supply Chain Resilience Initiative (SCRI)" launched in 2021 with Japan and Australia address strategic economic vulnerability?',
        options: [
          'By imposing total embargo on all imports',
          'By diversifying manufacturing and critical-mineral supply chains across Indo-Pacific partners to reduce over-dependence on any single country (China)',
          'By merging their currencies into one',
          'By stopping maritime shipping',
        ],
        correctOptionIndex: 1,
        explanation: 'Post-COVID disruptions prompted India, Japan, and Australia to collaborate on resilient, trusted regional supply chains.',
        difficulty: 'standard',
      },
      {
        stem: 'Why does India continue to describe its contemporary foreign policy as "Multi-Alignment" rather than isolationism or Cold War non-alignment?',
        options: [
          'India belongs to NATO',
          'India builds issue-based partnerships across rival blocs (engaging the US/QUAD on Indo-Pacific tech while sustaining Russia energy/defence ties and BRICS/SCO dialogue) based on national interest',
          'India refuses to sign any trade treaties',
          'India only deals with ASEAN',
        ],
        correctOptionIndex: 1,
        explanation: 'Strategic autonomy today translates into proactive multi-alignment across plural coalitions without treaty-alliance rigidity.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which joint bilateral military exercise between India and Nepal is regularly hosted in Pithoragarh (Uttarakhand)?',
        options: ['Exercise Garuda', 'Exercise Surya Kiran', 'Exercise Malabar', 'Exercise Dharma Guardian'],
        correctOptionIndex: 1,
        explanation: 'The annual India–Nepal Army Exercise Surya Kiran alternates between Saljhandi (Nepal) and Pithoragarh (Uttarakhand).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Indian state historically sends high remittances and skilled defence/hospitality talent globally alongside Kerala, Punjab, UP, and Bihar—prompting institutional diaspora outreach cells?',
        options: [
          'Only coastal states',
          'India as a whole receives the world\'s highest inward remittances (over $115–125B annually per World Bank), making diaspora welfare and skill-mobility pacts core foreign policy priorities',
          'Zero remittances enter India after 2020',
          'Remittances exceed India\'s entire GDP',
        ],
        correctOptionIndex: 1,
        explanation: 'India consistently ranks #1 globally in annual inward remittances, prompting Migration and Mobility Partnership Agreements (MMPAs) with Germany, France, UK, and Japan.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Major Multilateral Groupings & Global Institutions',
    materialTitle: 'Major Multilateral Groupings & Global Institutions — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Global Institutions, QUAD, BRICS, SCO & G20',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Major Multilateral Groupings & Global Institutions

## 1. United Nations & "Reformed Multilateralism"
- **UN Organs:** General Assembly (193 members), **Security Council (UNSC — 15 members: P5 [US, UK, France, Russia, China with veto] + 10 non-permanent for 2-yr terms)**, ECOSOC, ICJ (15 judges, **The Hague**), Secretariat, Trusteeship Council (suspended 1994).
- **India's UNSC Reform Push:** Co-member of the **G4** (**India, Japan, Germany, Brazil** supporting each other's permanent UNSC bids, opposed by the *Coffee Club / Uniting for Consensus*).

## 2. Key Regional & Plurilateral Groupings Involving India
| Grouping | Members & Focus | Strategic Significance for India |
|---|---|---|
| **G20** | 19 countries + EU + **African Union** (inducted during **India's 2023 New Delhi Presidency!**) | Premier forum for global economic governance; New Delhi Declaration launched **Global Biofuels Alliance**, **IMEC**, DPI advocacy, & Debt/MDB reforms; **Voice of Global South** |
| **QUAD** | **India, US, Japan, Australia** | Free, open, inclusive Indo-Pacific; maritime domain awareness (**IPMDA**), **Exercise Malabar**, vaccines, critical tech, climate/HADR |
| **BRICS (Expanded BRICS+)** | Founding 5 (**Brazil, Russia, India, China, South Africa**) + 2024–25 entrants (**Egypt, Ethiopia, Iran, UAE, Indonesia** — Saudi invited) | **New Development Bank (NDB, Shanghai)**, Contingency Reserve Arrangement; promotes Global South voice & local-currency trade (while India resists anti-Western bloc framing) |
| **SCO (Shanghai Cooperation Organisation)** | China, Russia, 4 Central Asian states, India (2017), Pakistan (2017), Iran (2023), Belarus (2024) | Eurasia security, **RATS (Tashkent)** counter-terrorism, Central Asia connectivity; India hosted 2023 Virtual Summit (Varanasi as SCO Cultural Capital 2022–23) |
| **BIMSTEC** | **Bangladesh, Bhutan, India, Nepal, Sri Lanka, Myanmar, Thailand** (HQ: **Dhaka**; Charter adopted 2022) | Bridge between South Asia and SE Asia; **India's preferred alternative to paralysed SAARC** (SAARC Summit stalled since 2014 Kathmandu) |
| **ASEAN & East Asia Summit (EAS)** | 10 ASEAN states (plus Timor-Leste accession process); EAS adds 8 partners incl. India | Heart of India's **Act East Policy** (upgraded from 1991 *Look East*); **AITIGA** trade review; opted out of **RCEP (2019)** over domestic farm/MSME safeguards |
| **India-Led Global Initiatives** | **ISA** (International Solar Alliance, HQ **Gurugram**), **CDRI** (Coalition for Disaster Resilient Infrastructure, HQ New Delhi), **IBCA** (International Big Cat Alliance, 2023) | Climate adaptation, solar deployment, Himalayan/coastal resilient infrastructure, and big-cat conservation (highly relevant to Corbett/Rajaji tiger habitats!) |

## 3. Global Financial & Trade Architecture
- **Bretton Woods Twins (1944):** **IMF** (short-term BoP stability, SDRs, Article IV) and **World Bank Group** (IBRD, IDA, IFC, MIGA, ICSID — India exited IDA concessional window in 2014). Contrast with **AIIB (Beijing)** and **NDB (Shanghai)** where India is a founding stakeholder.
- **WTO (1995, Marrakesh Agreement, HQ Geneva):** Facing Appellate Body paralysis since 2019; India champions **Special & Differential Treatment (S&DT)**, **Public Stockholding for Food Security (Peace Clause)**, and equitable **Fisheries Subsidies** rules.

## 4. Key Revision Takeaways
- **G20 New Delhi (2023)** formally inducted the **African Union** as a permanent G20 member.
- **BIMSTEC (HQ Dhaka)** connects Bay of Bengal states (excluding Pakistan/Maldives/Afghanistan), revitalizing regional cooperation where **SAARC (HQ Kathmandu)** stagnated.
- **ISA (Gurugram)** and **CDRI (New Delhi)** showcase India's global climate-resilience leadership; **IBCA** reinforces tiger/snow-leopard conservation tied to Uttarakhand's sanctuaries.`,
    mcqs: [
      {
        stem: 'Which regional organization was formally admitted as a permanent member of the G20 during India\'s G20 Presidency at the New Delhi Summit in September 2023?',
        options: ['ASEAN', 'African Union (AU)', 'SAARC', 'Organization of American States'],
        correctOptionIndex: 1,
        explanation: 'Expanding Global South representation, the New Delhi Leaders\' Declaration inducted the 55-nation African Union into the G20.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which four countries form the "G4" grouping that mutually supports one another\'s bids for permanent seats on a reformed United Nations Security Council?',
        options: [
          'India, US, UK, France',
          'India, Brazil, Germany, and Japan',
          'India, Russia, China, South Africa',
          'India, Indonesia, Nigeria, Mexico',
        ],
        correctOptionIndex: 1,
        explanation: 'Brazil, Germany, India, and Japan coordinate UNSC permanent expansion demands through the G4.',
        difficulty: 'foundation',
      },
      {
        stem: 'Where is the permanent secretariat of BIMSTEC (Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation) located, and which pair of countries belongs to it?',
        options: [
          'Kathmandu; India and Pakistan',
          'Dhaka; India, Nepal, Bhutan, Bangladesh, Sri Lanka, Myanmar, and Thailand',
          'Bangkok; India and Indonesia',
          'Colombo; India and Maldives',
        ],
        correctOptionIndex: 1,
        explanation: 'Headquartered in Dhaka, BIMSTEC unites five South Asian states (Nepal, Bhutan, India, Bangladesh, Sri Lanka) with two Southeast Asian states (Myanmar, Thailand).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which four nations comprise the "QUAD" (Quadrilateral Security Dialogue) focused on a Free, Open, and Inclusive Indo-Pacific?',
        options: [
          'India, China, Russia, Japan',
          'India, United States, Japan, and Australia',
          'India, UK, France, Germany',
          'India, Brazil, South Africa, Indonesia',
        ],
        correctOptionIndex: 1,
        explanation: 'Revived in 2017 and elevated to Leaders\' Summits in 2021, the QUAD brings together India, the US, Japan, and Australia.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which two India-headquartered international climate and disaster-resilience organizations were co-pioneered by India in 2015 and 2019 respectively?',
        options: [
          'WTO and UNEP',
          'International Solar Alliance (ISA, Gurugram) and Coalition for Disaster Resilient Infrastructure (CDRI, New Delhi)',
          'IMF and AIIB',
          'UNHCR and IAEA',
        ],
        correctOptionIndex: 1,
        explanation: 'ISA (co-launched with France in 2015, HQ Gurugram) and CDRI (launched at UN Climate Summit 2019, HQ New Delhi) anchor India\'s green multilateralism.',
        difficulty: 'foundation',
      },
      {
        stem: 'Where is the headquarters of the New Development Bank (NDB) established by the BRICS nations in 2014?',
        options: ['Mumbai', 'Shanghai', 'Moscow', 'Johannesburg'],
        correctOptionIndex: 1,
        explanation: 'Headquartered in Shanghai, China, the NDB finances infrastructure and sustainable development across emerging economies.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which countries joined the Shanghai Cooperation Organisation (SCO) as full members simultaneously in 2017 alongside its founding Eurasian members?',
        options: [
          'Iran and Belarus',
          'India and Pakistan',
          'Nepal and Sri Lanka',
          'Turkey and Afghanistan',
        ],
        correctOptionIndex: 1,
        explanation: 'At the 2017 Astana Summit, both India and Pakistan became full SCO members (followed by Iran in 2023 and Belarus in 2024).',
        difficulty: 'foundation',
      },
      {
        stem: 'Why did India decide to opt out of joining the 15-nation "RCEP" (Regional Comprehensive Economic Partnership) trade agreement in November 2019?',
        options: [
          'Because RCEP banned all services trade',
          'Concerns over asymmetric tariff cuts flooding India with Chinese manufactured imports and threatening domestic agriculture, dairy, and MSMEs without adequate rules-of-origin or automatic safeguards',
          'Because ASEAN prohibited India from applying',
          'Because the IMF forbade India from joining',
        ],
        correctOptionIndex: 1,
        explanation: 'Unsolved tariff-surge vulnerabilities, dairy/farm exposure, and weak services market-access guarantees led India to stay out of RCEP.',
        difficulty: 'standard',
      },
      {
        stem: 'Which body within the United Nations system is headquartered at The Hague (Netherlands) rather than New York, and includes Indian jurist Justice Dalveer Bhandari?',
        options: [
          'Trusteeship Council',
          'International Court of Justice (ICJ)',
          'UN Security Council',
          'ECOSOC',
        ],
        correctOptionIndex: 1,
        explanation: 'Located at the Peace Palace in The Hague, the 15-judge ICJ is the only principal UN organ situated outside New York.',
        difficulty: 'foundation',
      },
      {
        stem: 'In World Trade Organization (WTO) negotiations, what does India\'s demand for a "Permanent Solution on Public Stockholding (PSH)" seek to protect?',
        options: [
          'Tariffs on luxury imported cars',
          'India\'s Minimum Support Price (MSP) procurement and PDS food-security subsidies against restrictive Aggregate Measurement of Support (AMS) caps under the Agreement on Agriculture',
          'Intellectual property patents on software',
          'Banking secrecy laws',
        ],
        correctOptionIndex: 1,
        explanation: 'Pending a permanent solution, India and developing nations rely on the 2013 Bali "Peace Clause" shielding public foodgrain procurement for food security from WTO legal challenges.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which India-led global alliance launched in 2023 focuses on conserving seven major big cat species—including Tiger, Snow Leopard, and Leopard found across Uttarakhand\'s habitats?',
        options: [
          'Global Tiger Bank',
          'International Big Cat Alliance (IBCA)',
          'CITES Himalayan Wing',
          'IUCN Mountain Pact',
        ],
        correctOptionIndex: 1,
        explanation: 'Launched on the 50th anniversary of Project Tiger in 2023, IBCA covers Tiger, Lion, Leopard, Snow Leopard, Puma, Jaguar, and Cheetah.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pair of global financial institutions emerged from the 1944 Bretton Woods Conference?',
        options: [
          'WTO and ADB',
          'International Monetary Fund (IMF) and the International Bank for Reconstruction and Development (World Bank)',
          'NDB and AIIB',
          'OECD and BIS',
        ],
        correctOptionIndex: 1,
        explanation: 'The 1944 Bretton Woods Conference created the IMF (macroeconomic/BoP stability) and IBRD (development reconstruction).',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the counter-terrorism body of the Shanghai Cooperation Organisation (SCO) headquartered in Tashkent, Uzbekistan?',
        options: [
          'INTERPOL-East',
          'RATS (Regional Anti-Terrorist Structure)',
          'FATF-Asia',
          'CSTO-South',
        ],
        correctOptionIndex: 1,
        explanation: 'RATS coordinates intelligence sharing against terrorism, separatism, and extremism across SCO member states.',
        difficulty: 'standard',
      },
      {
        stem: 'How does the voting structure of the Asian Infrastructure Investment Bank (AIIB) and New Development Bank (NDB) differ from traditional Bretton Woods institutions?',
        options: [
          'Only European nations hold votes in AIIB/NDB',
          'Emerging economies—including India as a founding top-tier shareholder—hold significantly larger capital shares and governance voice than in the US/Europe-weighted IMF/World Bank',
          'Decisions require US Congress ratification',
          'Voting weight is decided purely by alphabetical order',
        ],
        correctOptionIndex: 1,
        explanation: 'India is the second-largest shareholder in AIIB and an equal founding 20% shareholder in NDB, balancing slow quota reforms in the IMF.',
        difficulty: 'standard',
      },
      {
        stem: 'Which five countries joined BRICS as full members at the start of 2024–2025 expansion alongside the original five (Brazil, Russia, India, China, South Africa)?',
        options: [
          'Japan, Germany, Canada, Australia, Spain',
          'Egypt, Ethiopia, Iran, the United Arab Emirates (and Indonesia joined in Jan 2025)',
          'Nepal, Bhutan, Sri Lanka, Maldives, Bangladesh',
          'Norway, Sweden, Finland, Denmark, Iceland',
        ],
        correctOptionIndex: 1,
        explanation: 'Egypt, Ethiopia, Iran, and UAE became full members in January 2024, and Indonesia officially joined as a full BRICS member in January 2025.',
        difficulty: 'standard',
      },
    ],
  },
];
