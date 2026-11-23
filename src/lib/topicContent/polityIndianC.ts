import { TopicContentPackage } from './types';

export const POLITY_INDIAN_PART_C: TopicContentPackage[] = [
  {
    topicTitle: 'Supreme Court, High Courts & Judicial Review / PIL',
    materialTitle: 'Supreme Court, High Courts & Judicial Review / PIL — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Judiciary, Judicial Review & PIL',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Supreme Court, High Courts & Judicial Review / PIL

## 1. Integrated Single Judiciary: Supreme Court (Articles 124–147)
Unlike the US dual-court structure, India possesses a **single integrated judicial hierarchy** enforcing both Union and State laws, topped by the **Supreme Court** (inaugurated 28 Jan 1950; current sanctioned strength **34 judges** = 1 CJI + 33 Judges).
- **Appointment & Collegium System:** Judges appointed by President after "consultation" (**Collegium** evolved via Three Judges Cases: *S.P. Gupta 1981* → *Second Judges Case 1993* [CJI + 2 senior judges, "concurrence"] → *Third Judges Case 1998* [CJI + **4 senior-most judges**] → **NJAC 99th Amendment (2014)** struck down in *Fourth Judges Case (2015)*).
- **Tenure & Removal (Art. 124(4)):** Retires at **65 years** (no minimum age). Removed by President ONLY after an address by **both Houses of Parliament in the same session** by **Special Majority** (majority of total membership + 2/3rds present & voting) on grounds of **proved misbehaviour or incapacity** (*Judges Enquiry Act, 1968*).
- **Key Jurisdictions of the Supreme Court:**
  - **Original & Exclusive (Art. 131):** Federal disputes (Centre vs State, State vs State — excludes pre-constitution treaties & inter-state river water disputes under Art. 262).
  - **Writ Jurisdiction (Art. 32):** Enforces Fundamental Rights (concurrent with High Courts under Art. 226).
  - **Appellate (Arts. 132–134) & Special Leave Petition (Art. 136):** Discretionary appeal against *any* court/tribunal judgment (except military tribunals).
  - **Advisory Jurisdiction (Art. 143):** President seeks advisory opinion—*clause (1)* public importance (SC may refuse); *clause (2)* pre-constitutional treaty (SC must tender opinion). Advisory opinion is **not binding** on President.
  - **Court of Record (Art. 129)** & **Curative Petition** (*Rupa Ashok Hurra, 2002*).
  - **Complete Justice (Art. 142)** & **Binding Law of Land (Art. 141)**.

## 2. High Courts (Articles 214–231) & Subordinate Courts (Arts. 233–237)
- **Uttarakhand High Court (Nainital):** Established 9 Nov 2000; judges appointed by President after consulting CJI, State Governor, and HC CJ; retire at **62 years** (15th Amendment, 1963); transferred by President after consulting CJI + 4 SC judges + 2 HC CJs.
- **Wider Writ Scope (Art. 226):** High Court writs enforce BOTH Fundamental Rights AND ordinary legal rights, whereas Art. 32 covers Fundamental Rights only (*L. Chandra Kumar, 1997*: both Arts. 32 & 226 are part of Basic Structure).
- **Supervisory Power (Art. 227):** Superintendence over all courts & tribunals in the state (except armed forces tribunals).
- **Subordinate Judiciary (Arts. 233–235):** **District Judges** appointed by Governor in consultation with the **High Court** (minimum 7 years advocate practice if direct recruitment).

## 3. Judicial Review, Judicial Activism & Public Interest Litigation (PIL)
- **Judicial Review:** Rooted implicitly in **Articles 13, 32, 131–136, 226, and 246**—empowers courts to invalidate legislative/executive acts violating Fundamental Rights, federal competence, or **Basic Structure** (*Minerva Mills, 1980*).
- **PIL (Social Action Litigation):** Pioneered in late 1970s–early 1980s by Justices **P.N. Bhagwati** and **V.R. Krishna Iyer** (*Hussainara Khatoon v. State of Bihar, 1979* on undertrial prisoners; *S.P. Gupta, 1981*); relaxed **locus standi** via **epistolary jurisdiction** so public-spirited citizens can defend marginalized groups, bonded labour, or Himalayan rivers/ecology (e.g., *M.C. Mehta* & Uttarakhand Ganga-mining/forest PILs). Distinguish genuine **Judicial Activism** from arbitrary **Judicial Overreach** violating Separation of Powers.

## 4. Key Revision Takeaways
- **SC Judge retirement = 65 yrs**; **HC Judge retirement = 62 yrs**; removal process identical for both (Parliamentary Special Majority under Art. 124(4)/217(1)(b)).
- **Collegium for SC appointments** = **CJI + 4 senior-most SC judges** (*1998 Third Judges Case*); **99th Amendment (NJAC)** struck down in **2015**.
- **Art. 226 (HC)** is wider in subject scope than **Art. 32 (SC)**; **Art. 143** is Presidential Advisory jurisdiction.`,
    mcqs: [
      {
        stem: 'Which Three Judges Case of 1998 expanded the Supreme Court Collegium to consist of the Chief Justice of India and the four senior-most judges of the Supreme Court?',
        options: [
          'First Judges Case (S.P. Gupta, 1981)',
          'Second Judges Case (1993)',
          'Third Judges Case (Presidential Reference, 1998)',
          'Fourth Judges Case (NJAC, 2015)',
        ],
        correctOptionIndex: 2,
        explanation: 'In the 1998 Presidential Reference (Third Judges Case), SC clarified that "consultation" requires plurality opinion of CJI + 4 senior-most SC judges (and CJI + 2 for HC appointments).',
        difficulty: 'standard',
      },
      {
        stem: 'Which Constitutional Amendment creating the National Judicial Appointments Commission (NJAC) was struck down as unconstitutional by the Supreme Court in 2015 for violating Judicial Independence?',
        options: ['97th Amendment', '98th Amendment', '99th Constitutional Amendment Act, 2014', '101st Amendment'],
        correctOptionIndex: 2,
        explanation: 'A 5-judge Constitution Bench (4:1) struck down the 99th Amendment and NJAC Act in Supreme Court Advocates-on-Record Association v. Union of India (2015).',
        difficulty: 'foundation',
      },
      {
        stem: 'What are the statutory retirement ages for Judges of the Supreme Court and Judges of High Courts in India respectively?',
        options: ['65 years and 62 years', '62 years and 60 years', '65 years for both', '70 years and 65 years'],
        correctOptionIndex: 0,
        explanation: 'SC Judges serve until age 65 (Art. 124(2)), while HC Judges serve until age 62 (raised from 60 to 62 by the 15th Amendment Act, 1963).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which categories of disputes fall under the Supreme Court\'s Exclusive Original Jurisdiction under Article 131?',
        options: [
          'Consumer complaints and criminal appeals',
          'Federal disputes between the Union and States or between States themselves regarding legal rights',
          'Election disputes of MPs and MLAs',
          'Inter-state river water distribution disputes under Inter-State River Water Disputes Act',
        ],
        correctOptionIndex: 1,
        explanation: 'Article 131 grants exclusive original jurisdiction over federal disputes, excluding inter-state river water disputes (barred via Art. 262) and private/commercial contracts.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under Article 143 (Advisory Jurisdiction of the Supreme Court), what is the key distinction between Clause (1) and Clause (2)?',
        options: [
          'Clause (1) advice is binding while Clause (2) is not',
          'Under Clause (1) (question of law/fact of public importance) the SC MAY decline to give an opinion, whereas under Clause (2) (pre-Constitution treaty/covenant disputes) the SC MUST tender its opinion',
          'Clause (2) applies only to criminal appeals',
          'Only High Courts invoke Article 143',
        ],
        correctOptionIndex: 1,
        explanation: 'In both clauses the SC\'s advisory opinion is not binding on the President, though Clause (2) obligates the Court to answer.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which majority is required in EACH House of Parliament to pass a resolution for the removal of a Supreme Court or High Court Judge on grounds of proved misbehaviour or incapacity?',
        options: [
          'Simple majority of members present and voting',
          'Special majority: majority of the total membership of the House AND two-thirds of members present and voting, in the same session',
          'Three-fourths majority of Lok Sabha alone',
          'Unanimous vote of Rajya Sabha only',
        ],
        correctOptionIndex: 1,
        explanation: 'Article 124(4) prescribes the strictest parliamentary special majority after an inquiry committee investigation under the Judges Enquiry Act, 1968.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who were the two pioneering Supreme Court Judges widely credited with institutionalizing Public Interest Litigation (PIL) and relaxed locus standi in India during the late 1970s–1980s?',
        options: [
          'Justice H.R. Khanna and Justice A.N. Ray',
          'Justice P.N. Bhagwati and Justice V.R. Krishna Iyer',
          'Justice M. Hidayatullah and Justice K. Subba Rao',
          'Justice J.S. Verma and Justice Ranjan Gogoi',
        ],
        correctOptionIndex: 1,
        explanation: 'Justices V.R. Krishna Iyer and P.N. Bhagwati democratized judicial access through epistolary jurisdiction and PILs like Hussainara Khatoon (1979).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which landmark PIL case of 1979 exposed thousands of languishing undertrial prisoners in Bihar jails and led the Supreme Court to declare "Right to Speedy Trial" implicit in Article 21?',
        options: [
          'Vishaka v. State of Rajasthan',
          'Hussainara Khatoon v. Home Secretary, State of Bihar',
          'Kesavananda Bharati v. State of Kerala',
          'D.K. Basu v. State of West Bengal',
        ],
        correctOptionIndex: 1,
        explanation: 'Filed by advocate Kapila Hingorani on behalf of prisoners, Hussainara Khatoon (1979) became India\'s foundational PIL ruling.',
        difficulty: 'standard',
      },
      {
        stem: 'Under Article 233 of the Constitution, who appoints District Judges in a State like Uttarakhand?',
        options: [
          'The President of India on UKPSC recommendation',
          'The Governor of the State in consultation with the High Court exercising jurisdiction in that State',
          'The Chief Minister alone',
          'The Supreme Court Collegium directly',
        ],
        correctOptionIndex: 1,
        explanation: 'Article 233 vests District Judge appointments and postings in the Governor acting in consultation with the High Court (meaning Uttarakhand High Court at Nainital).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Article empowers the Supreme Court to pass any decree or order necessary for doing "complete justice" in any cause or matter pending before it?',
        options: ['Article 129', 'Article 136', 'Article 141', 'Article 142'],
        correctOptionIndex: 3,
        explanation: 'Article 142 confers extraordinary plenary equity power on the Supreme Court (used in Bhopal gas settlement, Ayodhya verdict, environmental/electoral orders).',
        difficulty: 'foundation',
      },
      {
        stem: 'Why can the High Court of Uttarakhand at Nainital NOT exercise jurisdiction over an Armed Forces Tribunal (AFT) order under its general power of superintendence in Article 227?',
        options: [
          'Because Article 227(4) explicitly excludes courts or tribunals constituted by or under any law relating to the Armed Forces',
          'Because Uttarakhand has no military cantonments',
          'Because High Courts cannot hear any tribunal appeal',
          'Because AFT orders are non-legal',
        ],
        correctOptionIndex: 0,
        explanation: 'Article 227(4) excludes Armed Forces courts/tribunals from HC superintendence (though SC reaffirmed limited Art. 226 writ scrutiny in Balkrishna Ram, 2019).',
        difficulty: 'advanced',
      },
      {
        stem: 'In L. Chandra Kumar v. Union of India (1997), what crucial constitutional ruling did a 7-judge bench deliver regarding Judicial Review and Administrative Tribunals (Articles 323A & 323B)?',
        options: [
          'Tribunals are completely free from High Court oversight',
          'Judicial Review under Articles 32 and 226 is part of the Basic Structure; tribunal decisions MUST remain subject to High Court Division Bench scrutiny under Articles 226/227',
          'CAT and SAT were abolished permanently',
          'Tribunals can amend the Constitution',
        ],
        correctOptionIndex: 1,
        explanation: 'L. Chandra Kumar struck down provisions excluding High Court writ jurisdiction over Central/State Administrative Tribunals.',
        difficulty: 'standard',
      },
      {
        stem: 'What is a "Curative Petition" established by the Supreme Court in Rupa Ashok Hurra v. Ashok Hurra (2002)?',
        options: [
          'A routine first appeal from a Magistrate court',
          'The last extraordinary judicial remedy available AFTER dismissal of a Review Petition, to prevent gross miscarriage of justice or violation of natural justice',
          'A petition filed exclusively before the President',
          'A bill introduced in Rajya Sabha',
        ],
        correctOptionIndex: 1,
        explanation: 'Anchored in inherent powers and Article 137/142, a Curative Petition requires certification by a Senior Advocate showing extreme bias or natural-justice breach.',
        difficulty: 'standard',
      },
      {
        stem: 'In which 2014 ruling did the Supreme Court recognize the "Right to Die with Dignity" and legalize Passive Euthanasia via Advance Medical Directives (Living Wills)?',
        options: [
          'Common Cause v. Union of India (2018) building on Aruna Shanbaug (2011)',
          'K.S. Puttaswamy (2017)',
          'Navtej Singh Johar (2018)',
          'Shayara Bano (2017)',
        ],
        correctOptionIndex: 0,
        explanation: 'While Aruna Shanbaug (2011) permitted court-monitored passive euthanasia, Common Cause (2018) recognized it as part of Article 21 dignity with living-will guidelines.',
        difficulty: 'standard',
      },
      {
        stem: 'Under Article 136 (Special Leave Petition), which category of bodies falls OUTSIDE the Supreme Court\'s discretionary appellate grant?',
        options: [
          'State High Courts',
          'National Green Tribunal (NGT)',
          'Any court or tribunal constituted by or under any law relating to the Armed Forces (Article 136(2))',
          'District Sessions Courts',
        ],
        correctOptionIndex: 2,
        explanation: 'Article 136(2) specifically excludes military courts/tribunals from SLP jurisdiction (though statutory appeals under the AFT Act, 2007 exist).',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Centre-State Legislative, Administrative & Financial Relations',
    materialTitle: 'Centre-State Legislative, Administrative & Financial Relations — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Indian Federalism & Centre-State Relations',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Centre-State Legislative, Administrative & Financial Relations

## 1. Legislative Relations (Articles 245–255 & Seventh Schedule)
- **Territorial Nexus (Art. 245):** Parliament legislates for whole/part of India (including **extra-territorial** laws); State Legislatures legislate for their state unless sufficient territorial nexus exists.
- **Three Lists (Seventh Schedule, Art. 246):**
  - **Union List (List I — originally 97, now ~98/100 numbered subjects):** Defence, Foreign Affairs, Atomic Energy, Railways, Banking, Currency, Inter-state rivers, Census.
  - **State List (List II — originally 66, now ~59 subjects):** Public order, Police, Public health, Agriculture, Land, Local Government (Note: **42nd Amendment, 1976** shifted **5 subjects** from State to Concurrent List: **Education, Forests, Weights & Measures, Protection of Wild Animals & Birds, Administration of Justice**).
  - **Concurrent List (List III — originally 47, now ~52 subjects):** Criminal law, Marriage/Divorce, Electricity, Forests, Education. Central law prevails in repugnancy (Art. 254), *unless* State law gets Presidential assent (even then, Parliament can amend/repeal it).
- **Residuary Powers (Art. 248):** Vested in **Parliament** (Canadian model; includes subjects not in any list, e.g., cyber laws).
- **5 Extraordinary Conditions When Parliament Legislates on State List:**
  1. **Article 249:** Rajya Sabha resolution by **2/3rds present and voting** in *national interest* (valid **1 year** at a time).
  2. **Article 250:** During **National Emergency** (expires 6 months after revocation).
  3. **Article 252:** Request by **two or more State Legislatures** (adopted by resolution; cannot be amended/repealed by those States individually—e.g., *Wildlife Protection Act 1972*, *Water Act 1974*).
  4. **Article 253:** Implementing **international treaties/agreements** (no state consent needed!).
  5. **Article 356:** During **President's Rule** in a State.

## 2. Administrative Relations (Articles 256–263)
- **Executive Compliance (Arts. 256–257):** States must exercise executive power to ensure compliance with Parliamentary laws and not impede Union executive power (e.g., Railways, national highways, communications; non-compliance can trigger Art. 365 → Art. 356).
- **All-India Services (Art. 312):** IAS, IPS, and **IFoS (Indian Forest Service, created 1966)**—jointly controlled by Centre and States; **Article 312** allows creation of a new All-India Service if **Rajya Sabha** passes a resolution by **2/3rds present and voting**.
- **Inter-State River Water Disputes (Art. 262):** Parliament barred SC/other courts' jurisdiction via *Inter-State River Water Disputes Act, 1956* (e.g., Upper Yamuna, Ganga-related inter-state compacts involving Uttarakhand/UP/Haryana/HP).
- **Inter-State Council (Art. 263):** Established permanently in **1990** on **Sarkaria Commission** recommendation (chaired by PM). **Zonal Councils** are **statutory** (States Reorganisation Act, 1956; chaired by **Union Home Minister**—Uttarakhand sits in the **Central Zonal Council** alongside UP, MP, Chhattisgarh!).

## 3. Financial Relations (Articles 268–293) & GST Council
- **Taxation Allocation:**
  - *Art. 268:* Stamp duties levied by Centre, collected & appropriated by States.
  - *Art. 269A:* **IGST** on inter-state supply levied & collected by Centre, apportioned between Union & States per GST Council.
  - *Art. 270:* Union taxes (Income Tax, Corporate Tax, CGST, Customs) shared vertically/horizontally per **Finance Commission (Art. 280)** recommendations (**15th FC fixed vertical devolution at 41%** for 2021–26; **16th Finance Commission chaired by Dr. Arvind Panagariya** covering 2026–31).
  - *Art. 275 (Statutory Grants)* vs *Art. 282 (Discretionary Grants)*.
- **GST Council (Art. 279A — 101st Amendment, 2016):** Chaired by Union Finance Minister; decisions require **3/4ths weighted majority** (Centre weight = **1/3rd**, all States combined = **2/3rds**).

## 4. Landmark Federal Commissions
- **Rajamannar Committee (1969, Tamil Nadu)** → **Anandpur Sahib Resolution (1973)** → **Sarkaria Commission (1983–88)** (recommended permanent Inter-State Council & restrained Art. 356) → **Punchhi Commission (2007–10)** (recommended fixed 5-yr Governor tenure & localized emergency provisions).

## 5. Key Revision Takeaways
- **42nd Amendment (1976)** moved **Education, Forests, Wildlife Protection, Weights/Measures, Administration of Justice** from State to Concurrent List.
- **Article 249 (State List legislation)** and **Article 312 (new All-India Service)** are **Rajya Sabha's special federal powers** (2/3rds present & voting).
- **Uttarakhand** belongs to the **Central Zonal Council** (chaired by Union Home Minister).
- **GST Council voting:** Centre = **1/3rd**, States = **2/3rds**, decision threshold = **3/4ths** (*Mohit Minerals, 2022*: recommendations persuasive, cooperative federalism).`,
    mcqs: [
      {
        stem: 'Which five subjects were transferred from the State List to the Concurrent List by the 42nd Constitutional Amendment Act, 1976?',
        options: [
          'Police, Public Order, Agriculture, Land, Prisons',
          'Education, Forests, Weights & Measures, Protection of Wild Animals & Birds, and Administration of Justice (constitution/organization of subordinate courts)',
          'Railways, Banking, Defence, Atomic Energy, Currency',
          'Panchayati Raj, Municipal Taxes, Irrigation, Fisheries, Markets',
        ],
        correctOptionIndex: 1,
        explanation: 'The 42nd Amendment shifted these five key subjects—especially Forests, Wildlife, and Education—to List III (Concurrent List).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Constitutional Article vests "Residuary Powers" of legislation exclusively in the Parliament of India?',
        options: ['Article 245', 'Article 246', 'Article 248', 'Article 254'],
        correctOptionIndex: 2,
        explanation: 'Following the Government of India Act, 1935 and Canadian pattern (unlike the US where states hold residuary power), Article 248 gives residuary powers to Parliament.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under Article 249, how can Parliament acquire competence to legislate on a subject in the State List in the "national interest"?',
        options: [
          'Only if Lok Sabha passes a simple majority bill',
          'If the Rajya Sabha passes a resolution supported by not less than two-thirds of members present and voting',
          'If the Supreme Court grants special leave',
          'Only through an Article 368 Constitutional Amendment',
        ],
        correctOptionIndex: 1,
        explanation: 'Representing the states, Rajya Sabha must authorize national-interest legislation on List II by 2/3rds present and voting (remaining valid up to 1 year, renewable).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Constitutional Article empowers Parliament to enact laws on ANY State List subject across India without State consent to implement international treaties, agreements, or conventions?',
        options: ['Article 249', 'Article 250', 'Article 252', 'Article 253'],
        correctOptionIndex: 3,
        explanation: 'Article 253 overrides Seventh Schedule boundaries whenever Parliament implements international treaties or decisions of international conferences.',
        difficulty: 'standard',
      },
      {
        stem: 'Under Article 252, when two or more State Legislatures pass resolutions requesting Parliament to legislate on a State List matter (like the Water Act, 1974), who can amend or repeal that resulting Act?',
        options: [
          'Each consenting State Legislature individually',
          'Only Parliament (no consenting State Legislature can amend or repeal it independently)',
          'The Inter-State Council',
          'The High Court of the respective states',
        ],
        correctOptionIndex: 1,
        explanation: 'Once states surrender legislative competence under Article 252, only Parliament can amend or repeal that statute.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which body in India is a STATUTORY body created by the States Reorganisation Act, 1956 (and NOT a constitutional body under Article 263)?',
        options: [
          'Finance Commission',
          'Inter-State Council',
          'Zonal Councils (chaired by Union Home Minister)',
          'GST Council',
        ],
        correctOptionIndex: 2,
        explanation: 'Zonal Councils (North, Central, East, West, South, plus North-Eastern Council under 1971 Act) are statutory, whereas the Inter-State Council (Art. 263), FC (Art. 280), and GST Council (Art. 279A) are constitutional.',
        difficulty: 'standard',
      },
      {
        stem: 'In which Zonal Council of India does Uttarakhand participate alongside Uttar Pradesh, Madhya Pradesh, and Chhattisgarh?',
        options: [
          'Northern Zonal Council',
          'Central Zonal Council',
          'Eastern Zonal Council',
          'Western Zonal Council',
        ],
        correctOptionIndex: 1,
        explanation: 'Uttarakhand, Uttar Pradesh, Madhya Pradesh, and Chhattisgarh form the Central Zonal Council, chaired by the Union Home Minister.',
        difficulty: 'foundation',
      },
      {
        stem: 'What are the respective voting weights of the Central Government and all State Governments combined inside the GST Council under Article 279A?',
        options: [
          '50% Centre and 50% States; simple majority needed',
          'One-third (1/3rd) Centre weight and two-thirds (2/3rds) States weight; three-fourths (75%) weighted majority required for decisions',
          'One-fourth Centre and three-fourths States; unanimous consent needed',
          'Two-thirds Centre and one-third States',
        ],
        correctOptionIndex: 1,
        explanation: 'Article 279A(9) balances federal interests so neither the Centre (1/3rd) nor States (2/3rds) can pass decisions unilaterally without broad consensus (3/4ths threshold).',
        difficulty: 'foundation',
      },
      {
        stem: 'What vertical share of the divisible pool of Central taxes did the 15th Finance Commission (2021–26, chaired by N.K. Singh) recommend devolving to States (adjusted from 42% after J&K became UTs)?',
        options: ['32%', '41%', '45%', '50%'],
        correctOptionIndex: 1,
        explanation: 'The 15th Finance Commission adjusted the 14th FC\'s 42% vertical devolution slightly to 41%, reserving 1% for the newly formed UTs of J&K and Ladakh.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who has been appointed Chairman of the 16th Finance Commission (constituted for the 2026–2031 award period)?',
        options: ['N.K. Singh', 'Y.V. Reddy', 'Dr. Arvind Panagariya', 'C. Rangarajan'],
        correctOptionIndex: 2,
        explanation: 'Former NITI Aayog Vice-Chairman Dr. Arvind Panagariya chairs the 16th Finance Commission notified under Article 280.',
        difficulty: 'foundation',
      },
      {
        stem: 'On whose recommendation was the permanent Inter-State Council established in 1990 under Article 263?',
        options: [
          'Rajamannar Committee',
          'Sarkaria Commission on Centre-State Relations (1983–88)',
          'Punchhi Commission',
          'First Administrative Reforms Commission',
        ],
        correctOptionIndex: 1,
        explanation: 'Though Article 263 existed since 1950, the permanent Inter-State Council (chaired by PM) was established in May 1990 following the Sarkaria Commission\'s report.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which All-India Service was newly created in 1966 under Article 312 alongside the IAS and IPS?',
        options: [
          'Indian Revenue Service (IRS)',
          'Indian Forest Service (IFoS)',
          'Indian Judicial Service (IJS)',
          'Indian Engineering Service (IES)',
        ],
        correctOptionIndex: 1,
        explanation: 'Under the All-India Services Act, 1951 (amended 1963), the Indian Forest Service came into existence in 1966—playing a huge role in forest-rich states like Uttarakhand.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under Article 293, what constitutional restriction applies to a State Government regarding borrowing?',
        options: [
          'States cannot borrow from any bank in India',
          'A State cannot raise loans outside India, and cannot raise domestic loans without Central consent if any previous Union loan (or guarantee) remains outstanding',
          'States can freely issue sovereign Eurobonds abroad',
          'Only the RBI Governor approves State Budgets',
        ],
        correctOptionIndex: 1,
        explanation: 'Article 293 restricts state borrowing strictly within India and subjects indebted states to Central consent (supporting FRBM fiscal discipline).',
        difficulty: 'standard',
      },
      {
        stem: 'In the case of repugnancy (conflict) between a Central law and a State law on a CONCURRENT List subject under Article 254, when can the State law temporarily prevail inside that State?',
        options: [
          'Whenever the Chief Minister signs an order',
          'If the State law was reserved for the President\'s consideration and has received the President\'s assent (though Parliament retains power to override it later)',
          'Never under any circumstance',
          'Only if approved by the Zonal Council',
        ],
        correctOptionIndex: 1,
        explanation: 'Article 254(2) creates a flexible federal safety valve allowing Presidentially assented State Concurrent laws to operate locally unless Parliament enacts a subsequent overriding statute.',
        difficulty: 'advanced',
      },
      {
        stem: 'What are the two categories of Central Grants-in-Aid to States distinguished in Articles 275 and 282 respectively?',
        options: [
          'Statutory grants on Finance Commission recommendation (Art. 275) vs Discretionary public-purpose grants by Union/State (Art. 282)',
          'Tax grants vs Customs grants',
          'Municipal grants vs Defence grants',
          'Emergency loans vs IMF grants',
        ],
        correctOptionIndex: 0,
        explanation: 'Article 275 mandates charged statutory grants recommended by the Finance Commission (including forest/disaster/revenue-deficit grants), while Art. 282 enabled CSS/Planning discretionary grants.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Emergency Provisions (Articles 352, 356 & 360)',
    materialTitle: 'Emergency Provisions (Articles 352, 356 & 360) — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Constitutional Emergency Provisions',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Emergency Provisions (Articles 352, 356 & 360)

Part XVIII of the Constitution (**Articles 352–360**) enables the Union to safeguard sovereignty, constitutional machinery, and financial stability during extraordinary crises—converting the federal polity effectively into a unitary one without formal constitutional amendment.

## 1. Comparative Matrix of the Three Emergencies
| Dimension | National Emergency (Art. 352) | President's Rule / State Emergency (Art. 356) | Financial Emergency (Art. 360) |
|---|---|---|---|
| **Grounds** | **War, External Aggression**, or **Armed Rebellion** (44th Amendment replaced *"internal disturbance"*) | Failure of constitutional machinery in a State (**Governor's report or otherwise**), or failure to comply with Union directions (**Art. 365**) | Threat to financial stability or credit of India or any part thereof |
| **Cabinet / Executive Pre-Condition** | **Written recommendation of the Union Cabinet** (Art. 352(3) — 44th Amendment) | Satisfaction of President (based on objective material; judicial review applies) | Satisfaction of President (aid & advice) |
| **Parliamentary Approval Deadline** | **1 month** (44th Amendment reduced from 2 months) | **2 months** | **2 months** |
| **Majority Needed for Approval** | **Special Majority** (absolute + 2/3rds present & voting) in BOTH Houses (44th Amendment) | **Simple Majority** in BOTH Houses | **Simple Majority** in BOTH Houses |
| **Duration & Maximum Limit** | **6 months** at a time; **NO maximum cap** (indefinite with 6-monthly special-majority renewals) | **6 months** at a time; **Max 3 years total** (beyond **1 year**, needs BOTH (a) National Emergency in force AND (b) ECI certification that elections cannot be held — 44th Amendment) | **Indefinite** once approved (no repeated 6-month renewals required) |
| **Revocation** | President anytime; OR **Lok Sabha simple majority** resolution (1/10th LS members can requisition special sitting within 14 days — 44th Amendment) | President by subsequent proclamation (no Parliamentary vote required) | President by subsequent proclamation |
| **Historical Invocations** | **3 times:** 1962 (China), 1971 (Pakistan), 1975–77 (Internal Emergency) | Over 125 times across States (**once briefly in Uttarakhand: March–May 2016**, reversed via floor test ordered by HC/SC!) | **Never imposed (0 times)** |

## 2. Impact on Fundamental Rights (Articles 358 & 359 — After 44th Amendment, 1978)
- **Article 358:** Automatically suspends **Article 19** ONLY when National Emergency is declared on grounds of **War or External Aggression** (*NOT Armed Rebellion*).
- **Article 359:** Authorizes Presidential Order suspending judicial enforcement of specified Fundamental Rights (except **Articles 20 and 21, which can NEVER be suspended**). Both Arts. 358 & 359 protect ONLY laws/actions bearing a clear nexus to the Emergency proclamation.

## 3. Judicial Safeguards Against Misuse of Article 356 (*S.R. Bommai, 1994*)
A 9-judge Constitution Bench established strict checks on President's Rule:
1. Presidential Proclamation under Art. 356 IS **subject to Judicial Review** (*mala fide* or irrelevant material can be struck down, and dissolved Assembly can even be **revived**).
2. State Legislative Assembly should **NOT be dissolved before Parliament approves** the Proclamation (only suspended animation allowed until approval).
3. **Floor Test** in the Assembly—not the Governor's Raj Bhavan headcount—is the sole constitutional test of Council majority.
4. **Secularism** violation by a State Ministry can justify Art. 356, whereas mere political ideology differences or poor governance without constitutional breakdown do NOT.

## 4. Key Revision Takeaways
- **44th Amendment (1978)** revolutionized emergency safeguards: replaced *"internal disturbance"* with **Armed Rebellion**, required **written Cabinet decision**, cut Art. 352 approval window to **1 month**, raised Art. 352 majority to **Special Majority**, exempted **Armed Rebellion** from Art. 358 auto-suspension of Art. 19, and made **Arts. 20 & 21 non-suspendable**.
- **Uttarakhand experienced brief President's Rule in March–May 2016**, terminated after a Supreme Court-monitored floor test restored the elected government.
- **Article 360 (Financial Emergency)** has **never** been invoked in India.`,
    mcqs: [
      {
        stem: 'Which ground for proclaiming a National Emergency under Article 352 was substituted in place of "internal disturbance" by the 44th Constitutional Amendment Act, 1978?',
        options: ['Civil War', 'Armed Rebellion', 'Constitutional Deadlock', 'Economic Collapse'],
        correctOptionIndex: 1,
        explanation: 'Preventing repetition of the 1975 internal emergency, the 44th Amendment narrowed Article 352 grounds to War, External Aggression, or Armed Rebellion.',
        difficulty: 'foundation',
      },
      {
        stem: 'Before issuing a National Emergency Proclamation under Article 352(3), what procedural safeguard added by the 44th Amendment must the President satisfy?',
        options: [
          'Oral consultation with the Prime Minister alone',
          'A written communication from the Union Cabinet (Prime Minister + Cabinet Ministers under Art. 75) recommending the proclamation',
          'Approval of two-thirds of State Governors',
          'Prior consent of the Supreme Court',
        ],
        correctOptionIndex: 1,
        explanation: 'Article 352(3) prohibits the President from issuing a National Emergency proclamation unless the decision of the Union Cabinet is communicated to him in writing.',
        difficulty: 'foundation',
      },
      {
        stem: 'Compare the Parliamentary approval time limits and majorities required for National Emergency (Art. 352) versus President\'s Rule (Art. 356):',
        options: [
          'Art. 352: 2 months & simple majority; Art. 356: 1 month & special majority',
          'Art. 352: 1 month & Special Majority; Art. 356: 2 months & Simple Majority',
          'Both require 1 month and simple majority',
          'Both require 6 months and 3/4ths majority',
        ],
        correctOptionIndex: 1,
        explanation: 'Following the 44th Amendment, Art. 352 needs approval within 1 month by special majority in both Houses, whereas Art. 356 needs approval within 2 months by simple majority.',
        difficulty: 'standard',
      },
      {
        stem: 'Under Article 358 (as amended by the 44th Amendment), when are the six freedoms under Article 19 automatically suspended?',
        options: [
          'During every National Emergency including Armed Rebellion',
          'ONLY when a National Emergency is declared on grounds of War or External Aggression (and NOT Armed Rebellion)',
          'During President\'s Rule under Article 356',
          'During a Financial Emergency under Article 360',
        ],
        correctOptionIndex: 1,
        explanation: 'The 44th Amendment insulated Article 19 from automatic Article 358 suspension during an internal Armed Rebellion emergency.',
        difficulty: 'standard',
      },
      {
        stem: 'Which landmark 1994 Supreme Court judgment laid down that the State Legislative Assembly should NOT be dissolved under Article 356 until BOTH Houses of Parliament approve the President\'s Rule proclamation?',
        options: [
          'Minerva Mills v. Union of India',
          'S.R. Bommai v. Union of India',
          'ADM Jabalpur v. Shivkant Shukla',
          'Rameshwar Prasad v. Union of India',
        ],
        correctOptionIndex: 1,
        explanation: 'S.R. Bommai (1994) held that until Parliament approves Art. 356, the Assembly may only be kept in suspended animation so judicial review can restore it if needed.',
        difficulty: 'foundation',
      },
      {
        stem: 'Beyond one year, what twin extraordinary conditions must BOTH be fulfilled under Article 356(5) to extend President\'s Rule in a State (up to the 3-year ceiling)?',
        options: [
          'Chief Justice consent and NITI Aayog report',
          'A National Emergency under Art. 352 must be in operation AND the Election Commission must certify that general elections to the State Assembly cannot be held due to difficulties',
          'Unanimous vote of Zonal Council and Governor',
          'Financial Emergency under Art. 360 must be active',
        ],
        correctOptionIndex: 1,
        explanation: 'Inserted by the 44th Amendment, Article 356(5) strictly restricts extension of President\'s Rule beyond 1 year to exceptional circumstances.',
        difficulty: 'advanced',
      },
      {
        stem: 'How many times has a Financial Emergency under Article 360 been proclaimed in India since 1950?',
        options: ['Once (1991)', 'Twice (1966 and 1991)', 'Three times', 'Never (0 times)'],
        correctOptionIndex: 3,
        explanation: 'Even during the 1991 balance-of-payments crisis, India avoided invoking Article 360; it has never been proclaimed.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Article triggers a valid constitutional presumption of "failure of constitutional machinery" if a State fails to comply with executive directions issued by the Union?',
        options: ['Article 355', 'Article 358', 'Article 360', 'Article 365'],
        correctOptionIndex: 3,
        explanation: 'Article 365 states that where a State fails to comply with any Union direction given under the Constitution, the President may hold that Art. 356 situation has arisen.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Article imposes a positive constitutional duty on the Union to protect every State against external aggression and internal disturbance and ensure State governance follows the Constitution?',
        options: ['Article 352', 'Article 355', 'Article 359', 'Article 361'],
        correctOptionIndex: 1,
        explanation: 'Article 355 forms the twin obligation justifying Union assistance and intervention in states during security crises or constitutional collapse.',
        difficulty: 'foundation',
      },
      {
        stem: 'How can the Lok Sabha unilaterally compel the revocation of an ongoing National Emergency under Article 352(7)-(8)?',
        options: [
          'By passing a disapproval resolution by simple majority (with 1/10th of total LS members able to give written notice forcing a special sitting within 14 days)',
          'Only with Rajya Sabha and two-thirds vote',
          'Only after 5 years elapse',
          'Lok Sabha has no power to revoke an Emergency',
        ],
        correctOptionIndex: 0,
        explanation: 'Added by the 44th Amendment, Article 352(7)-(8) empowers the Lok Sabha alone to end a National Emergency by simple-majority disapproval resolution.',
        difficulty: 'standard',
      },
      {
        stem: 'How many times has a National Emergency under Article 352 been proclaimed in India, and in which years?',
        options: [
          'Two times: 1962 and 1975',
          'Three times: 1962 (External), 1971 (External), and 1975 (Internal)',
          'Four times: 1962, 1965, 1971, 1999',
          'Once only: 1975',
        ],
        correctOptionIndex: 1,
        explanation: 'India saw three Art. 352 proclamations: Oct 1962 (China war, stayed active through 1965 till Jan 1968), Dec 1971 (Pakistan war), and June 1975 (internal, revoked March 1977 alongside 1971).',
        difficulty: 'foundation',
      },
      {
        stem: 'What happened during Uttarakhand\'s sole brief spell of President\'s Rule under Article 356 in 2016?',
        options: [
          'It lasted continuously for 3 years',
          'Imposed in March 2016 amid legislative crisis, it was challenged in the Uttarakhand High Court and ended in May 2016 after a Supreme Court-supervised floor test restored the elected government',
          'Uttarakhand was merged back into Uttar Pradesh',
          'It resulted from a Financial Emergency',
        ],
        correctOptionIndex: 1,
        explanation: 'The March–May 2016 Uttarakhand episode reinforced the S.R. Bommai floor-test doctrine in Indian constitutional jurisprudence.',
        difficulty: 'standard',
      },
      {
        stem: 'What happens to a Financial Emergency proclamation under Article 360 once it is approved by both Houses of Parliament within two months?',
        options: [
          'It automatically expires after 6 months unless renewed',
          'It continues indefinitely until revoked by the President, requiring no repeated 6-monthly parliamentary renewals',
          'It expires after 1 year',
          'It transfers all state budgets to the Supreme Court',
        ],
        correctOptionIndex: 1,
        explanation: 'Unlike Art. 352 and Art. 356, Financial Emergency under Art. 360 has no fixed periodic expiry or maximum duration ceiling once approved.',
        difficulty: 'standard',
      },
      {
        stem: 'During a Financial Emergency (Article 360), whose salaries and allowances CAN the President constitutionally direct to be reduced?',
        options: [
          'Only private corporate executives',
          'All or any class of persons serving the Union or a State, explicitly including Judges of the Supreme Court and High Courts',
          'Only MPs and MLAs, excluding Judges',
          'Only Gram Pradhans',
        ],
        correctOptionIndex: 1,
        explanation: 'Article 360(4)(b) uniquely permits salary reduction even for Supreme Court and High Court Judges—which is normally prohibited during their tenure.',
        difficulty: 'standard',
      },
      {
        stem: 'Which 38th Amendment provision—attempting to make the President\'s satisfaction in declaring Emergency "final and conclusive" beyond judicial review—was deleted by the 44th Amendment Act, 1978?',
        options: [
          'Clause declaring Art. 352 non-justiciable',
          'Provision creating Zonal Councils',
          'Provision establishing Lokayukta',
          'Provision lowering voting age',
        ],
        correctOptionIndex: 0,
        explanation: 'Both the 44th Amendment (deleting the 38th Amendment bar) and Minerva Mills (1980) restored Judicial Review over mala fide or extraneous Emergency proclamations.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'Election Commission, UPSC, SPSC & Comptroller and Auditor General',
    materialTitle: 'Election Commission, UPSC, SPSC & Comptroller and Auditor General — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: ECI, UPSC/SPSC & CAG Constitutional Safeguards',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Election Commission, UPSC, SPSC & Comptroller and Auditor General

India's Constitution embeds independent "bulwarks" (**Article 324**, **Articles 315–323**, **Articles 148–151**) insulated from executive interference.

## 1. Comparative Constitutional Matrix
| Feature | Election Commission of India (Art. 324) | UPSC & SPSC / UKPSC (Arts. 315–323) | Comptroller & Auditor General — CAG (Arts. 148–151) |
|---|---|---|---|
| **Composition** | **CEC + ECs** (currently 1 CEC + 2 ECs since 1993) | Chairman + Members (UPSC ~9–11; SPSC strength fixed by Governor) | Single-member constitutional authority ("Guardian of Public Purse") |
| **Appointment** | By President (**CEC and Other ECs Act, 2023**: Selection Committee of PM, Union Cabinet Minister & Leader of Opposition in LS) | UPSC by **President**; SPSC by **Governor** (half must have held govt office >= 10 yrs) | By **President** under warrant and seal |
| **Term & Age Cap** | **6 years or age 65** (whichever earlier) | **6 years or age 65 (UPSC)**; **6 years or age 62 (SPSC/UKPSC)** | **6 years or age 65** (whichever earlier) |
| **Removal Process** | **CEC:** Like a **Supreme Court Judge**; **Other ECs:** By President on recommendation of CEC | **BOTH UPSC & SPSC removed ONLY by President** after **Supreme Court inquiry (Art. 317)** for misbehaviour (or directly by President for insolvency/paid outside job/infirmity) | Like a **Supreme Court Judge** (Art. 148(1)) |
| **Post-Retirement Bar** | Constitution silent on CEC/EC post-retirement bar (note: ongoing policy/legal debate) | **Strict Art. 319 bars** (UPSC Chair completely barred from further govt office; SPSC Chair eligible only for UPSC Chair/Member or another SPSC Chair) | **Strict Art. 148(4) bar:** Ineligible for **any further office** under Union or State Govts |
| **Charged Expenditure** | **NOTE:** ECI salaries currently charged? Historically voted (Art. 324 does NOT list ECI on CFI—key exam trap!) | **YES** — UPSC charged on CFI (Art. 322); SPSC charged on State Consolidated Fund | **YES** — Charged on Consolidated Fund of India (Art. 148(6)) |

## 2. Key Functional Nuances
- **Election Commission of India (Art. 324):** Superintends, directs, and controls elections to **Parliament, State Legislatures, President, and Vice-President** (NOT Panchayats/Municipalities—handled by State Election Commission under Art. 243K/243ZA). Model Code of Conduct, symbol allotment (*Election Symbols Order, 1968*), and quasi-judicial advice to President/Governor on MP/MLA disqualification (Arts. 103, 192).
- **UPSC & SPSC (Arts. 315–323):** "Watchdog of Merit System". Advisory on recruitment, promotions, and disciplinary matters; **Joint State Public Service Commission (JSPSC)** can be created by **Parliamentary Act** on request of two or more States (statutory body, NOT directly constitutional, unlike UPSC/SPSC).
- **CAG (Arts. 148–151):** Audits all receipts/expenditure from Consolidated Funds, Contingency Funds, and Public Accounts of **both Union and States**; conducts **Compliance, Financial, and Performance Audits**; submits 3 audit reports to President (**Art. 151** — Appropriation, Finance, Public Undertakings) and state audit reports to Governor, examined by **PAC** (CAG acts as "friend, philosopher, and guide" to PAC). *Limitation:* Audits primarily *post-facto* expenditure (unlike UK CAG, Indian CAG does not control cash releases from treasury before spending).

## 3. Key Revision Takeaways
- **Governor appoints UKPSC members, ONLY President removes them (Art. 317)**; retirement age is **62 (SPSC)** vs **65 (UPSC/CEC/CAG)**.
- **ECI does NOT conduct Panchayat/Municipal elections** (done by **SEC**); ECI administrative expenses are **not** constitutionally charged on CFI under Art. 324.
- **CAG** is ineligible for any post-retirement Union or State government office (**Art. 148(4)**) and audits **both Union and State** accounts.`,
    mcqs: [
      {
        stem: 'Which authority removes the Chairperson or a Member of a State Public Service Commission (such as UKPSC) on grounds of misbehaviour under Article 317?',
        options: [
          'The State Governor alone',
          'The President of India, only after the Supreme Court holds an inquiry on a Presidential reference and reports that they ought to be removed',
          'The State Legislative Assembly by simple majority',
          'The Chief Justice of the State High Court',
        ],
        correctOptionIndex: 1,
        explanation: 'Even though the Governor appoints SPSC members (Art. 316), only the President can remove them following a binding Supreme Court inquiry under Article 317.',
        difficulty: 'foundation',
      },
      {
        stem: 'What are the maximum retirement age limits respectively for Members of UPSC and Members of a State Public Service Commission (SPSC)?',
        options: [
          '65 years for UPSC and 62 years for SPSC',
          '62 years for UPSC and 60 years for SPSC',
          '65 years for both UPSC and SPSC',
          '70 years for UPSC and 65 years for SPSC',
        ],
        correctOptionIndex: 0,
        explanation: 'UPSC members serve 6 years or until age 65; SPSC members serve 6 years or until age 62 (Article 316(2)).',
        difficulty: 'foundation',
      },
      {
        stem: 'Under Article 324, for which set of elections does the Election Commission of India (ECI) NOT exercise superintendence, direction, and control?',
        options: [
          'Lok Sabha and Rajya Sabha elections',
          'President and Vice-President elections',
          'State Legislative Assembly elections',
          'Panchayat and Municipal (Local Body) elections',
        ],
        correctOptionIndex: 3,
        explanation: 'Local body elections (Gram/Kshetra/Zila Panchayats and Municipalities) are conducted exclusively by each State Election Commission under Articles 243K and 243ZA.',
        difficulty: 'foundation',
      },
      {
        stem: 'In which manner can the Chief Election Commissioner (CEC) of India be removed from office under Article 324(5)?',
        options: [
          'At the pleasure of the President',
          'By an order of the Prime Minister',
          'In the like manner and on the like grounds as a Judge of the Supreme Court',
          'On recommendation of the Union Law Minister',
        ],
        correctOptionIndex: 2,
        explanation: 'The CEC enjoys tenure parity with a Supreme Court Judge, whereas other Election Commissioners may be removed by the President only on the CEC\'s recommendation.',
        difficulty: 'foundation',
      },
      {
        stem: 'What strict post-retirement restriction does Article 148(4) impose on the Comptroller and Auditor General (CAG) of India?',
        options: [
          'The CAG can immediately become a State Governor',
          'The CAG is ineligible for any further office either under the Government of India or under the Government of any State after ceasing to hold office',
          'The CAG may serve only as Finance Secretary',
          'There are no post-retirement restrictions',
        ],
        correctOptionIndex: 1,
        explanation: 'Article 148(4) imposes an absolute bar on subsequent Union or State government office to guarantee fearless auditing.',
        difficulty: 'standard',
      },
      {
        stem: 'To whom does the Comptroller and Auditor General (CAG) submit audit reports relating to the accounts of a State Government (such as Uttarakhand) under Article 151(2)?',
        options: [
          'Directly to the Speaker of the Lok Sabha',
          'To the Governor of the State, who causes them to be laid before the State Legislature',
          'To the Chief Secretary of the State',
          'To the Supreme Court Registry',
        ],
        correctOptionIndex: 1,
        explanation: 'Under Article 151(2), the CAG submits State audit reports to the Governor for laying before the Vidhan Sabha (where State PAC scrutinizes them).',
        difficulty: 'foundation',
      },
      {
        stem: 'How is a Joint State Public Service Commission (JSPSC) for two or more States constituted under Article 315(2)?',
        options: [
          'Directly by Presidential Ordinance without state request',
          'By an Act of Parliament following resolutions passed by the Legislatures of the concerned States',
          'By an executive order of the UPSC Chairman',
          'By a Constitutional Amendment under Article 368',
        ],
        correctOptionIndex: 1,
        explanation: 'Unlike UPSC and SPSCs (which are directly created by the Constitution), a JSPSC is a statutory body created by Parliament upon request of the participating State Legislatures.',
        difficulty: 'standard',
      },
      {
        stem: 'Which composition rule applies to members of UPSC and SPSCs under the proviso to Article 316(1)?',
        options: [
          'All members must be retired IAS officers',
          'As nearly as may be one-half of the members shall be persons who have held office for at least 10 years under the Government of India or a State Government',
          'Half must be sitting MPs or MLAs',
          'At least three members must be Judges',
        ],
        correctOptionIndex: 1,
        explanation: 'The Constitution balances administrative experience (nearly 50% with >= 10 years government service) with non-official domain expertise.',
        difficulty: 'standard',
      },
      {
        stem: 'Which of the following bodies currently has its salaries, allowances, and pensions constitutionally CHARGED upon the Consolidated Fund of India (or State)?',
        options: [
          'Election Commission of India only',
          'UPSC, SPSCs (on State CF), and CAG',
          'NITI Aayog',
          'Central Vigilance Commission only',
        ],
        correctOptionIndex: 1,
        explanation: 'Articles 148(6) (CAG) and 322 (UPSC/SPSC) charge expenses directly on the Consolidated Funds; notably, Article 324 omitted a "charged" clause for ECI.',
        difficulty: 'advanced',
      },
      {
        stem: 'Why is the CAG often described in Indian parliamentary practice as the "friend, philosopher, and guide" of the Public Accounts Committee (PAC)?',
        options: [
          'The CAG chairs all PAC meetings personally',
          'The CAG\'s audit reports form the primary evidence examined by PAC, and the CAG assists PAC in interpreting technical financial irregularities',
          'The CAG appoints members of the PAC',
          'The CAG votes on Demands for Grants in Lok Sabha',
        ],
        correctOptionIndex: 1,
        explanation: 'While Ministers are barred from PAC, the CAG attends PAC sittings to explain audit findings, strengthening legislative financial accountability.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the Chief Election Commissioner and Other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act, 2023, who constitutes the Selection Committee recommending appointments to the President?',
        options: [
          'Prime Minister, Chief Justice of India, and Leader of Opposition',
          'Prime Minister (Chair), a Union Cabinet Minister nominated by the PM, and the Leader of Opposition (or leader of single largest opposition party) in the Lok Sabha',
          'President, Vice-President, and Speaker',
          'Union Home Minister, Law Minister, and CEC',
        ],
        correctOptionIndex: 1,
        explanation: 'Replacing the interim Anoop Baranwal (2023) committee that included the CJI, Parliament enacted the 2023 Act placing PM + Cabinet Minister + LoP in Lok Sabha on the Selection Committee.',
        difficulty: 'standard',
      },
      {
        stem: 'When a question arises whether a sitting Member of Parliament has become subject to a constitutional disqualification (other than Tenth Schedule defection), whose opinion MUST the President obtain and act upon under Article 103?',
        options: [
          'Speaker of the Lok Sabha',
          'Election Commission of India (ECI)',
          'Attorney General of India',
          'UPSC Chairman',
        ],
        correctOptionIndex: 1,
        explanation: 'Under Articles 103 (MPs) and 192 (MLAs), the President/Governor decides non-defection disqualifications strictly according to the binding opinion of the Election Commission.',
        difficulty: 'standard',
      },
      {
        stem: 'How does the Indian CAG\'s authority over treasury disbursements differ fundamentally from that of the Comptroller and Auditor General of the United Kingdom?',
        options: [
          'In India, the CAG acts solely as an auditor (post-expenditure) and does not control issue of cash from the Consolidated Fund, whereas the UK CAG acts as both Comptroller (pre-release check) and Auditor',
          'The UK CAG cannot audit defence spending',
          'The Indian CAG signs every individual ministerial cheque beforehand',
          'There is no difference between them',
        ],
        correctOptionIndex: 0,
        explanation: 'Despite the word "Comptroller" in the title, India\'s CAG audits accounts ex-post without pre-issue treasury control.',
        difficulty: 'advanced',
      },
      {
        stem: 'Under Article 319, which post-retirement constitutional appointment is PERMISSIBLE for the outgoing Chairman of a State Public Service Commission (like UKPSC)?',
        options: [
          'Managing Director of a State PSU',
          'Chairman or Member of UPSC, or Chairman of any other State Public Service Commission',
          'Member of the same State Public Service Commission again',
          'Governor of the same state or Cabinet Minister in the Centre under Art. 319',
        ],
        correctOptionIndex: 1,
        explanation: 'Article 319(c) allows a retired SPSC Chairman to become Chairman/Member of UPSC or Chairman of another SPSC, while barring any other Union/State government employment.',
        difficulty: 'standard',
      },
      {
        stem: 'Before 1976, the CAG maintained accounts as well as audited them for the Union Government. What reform took place in 1976?',
        options: [
          'CAG was barred from auditing State Governments',
          'Union accounting functions were separated from audit and handed to the Controller General of Accounts (CGA) under the Finance Ministry (while CAG still keeps State accounts in most states)',
          'CAG was merged into RBI',
          'Parliament abolished Appropriation Accounts',
        ],
        correctOptionIndex: 1,
        explanation: 'The 1976 departmentalization of Union accounts separated the Union\'s accounting (CGA) from external independent auditing (CAG).',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Commissions for SCs, STs, Backward Classes & Statutory Watchdogs',
    materialTitle: 'Commissions for SCs, STs, Backward Classes & Statutory Watchdogs — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Social Commissions & Statutory Watchdogs',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Commissions for SCs, STs, Backward Classes & Statutory Watchdogs

## 1. Constitutional Commissions for Vulnerable Sections
Originally, **Article 338** provided a single Special Officer for SCs and STs. Two major amendments bifurcated and expanded this protection:
- **65th Amendment (1990):** Created a multi-member **National Commission for SCs & STs**.
- **89th Amendment (2003, effective 2004):** Split it into **NCSC (Article 338)** and **NCST (Article 338A)**.
- **102nd Amendment (2018):** Granted constitutional status to **NCBC (Article 338B)** (replacing the 1993 statutory NCBC). *(Followed by **105th Amendment, 2021** restoring States' power to maintain their own SEBC/OBC lists.)*

| Commission | Constitutional Article | Composition & Powers |
|---|---|---|
| **National Commission for SCs (NCSC)** | **Article 338** | Chairperson, Vice-Chairperson + **3 Members** (appointed by President; conditions fixed by President). Investigates safeguards, inquires into specific complaints, enjoys **Civil Court powers** (summoning, affidavits, documents); submits annual reports to President (also covers Anglo-Indian safeguards) |
| **National Commission for STs (NCST)** | **Article 338A** | Chairperson, Vice-Chairperson + **3 Members**. Monitors ST safeguards (relevant to Uttarakhand's five notified STs: **Jaunsari, Tharu, Bhotia, Buxa, Raji**), forest/PESA rights & displacement relief; Civil Court powers |
| **National Commission for Backward Classes (NCBC)** | **Article 338B** | Chairperson, Vice-Chairperson + **3 Members** (102nd Amendment, 2018). Examines SEBC safeguards and central list inclusions/complaints; Civil Court powers |
| **Special Officer for Linguistic Minorities** | **Article 350B** (*7th Amendment, 1956*) | Appointed by President (HQ: Prayagraj/Allahabad, under Ministry of Minority Affairs); investigates constitutional safeguards for linguistic minorities |

## 2. Key Statutory Watchdogs & Quasi-Judicial Bodies
Note carefully for UKPSC Prelims: **NHRC, CVC, Lokpal, NCW, NCPCR, NCM, and NGT are STATUTORY (not constitutional) bodies**!
| Statutory Watchdog | Parent Statute & Year | Selection / Composition Highlights |
|---|---|---|
| **National Human Rights Commission (NHRC)** | *Protection of Human Rights Act, 1993* (amended **2019**) | Chair: **Retired CJI or Retired SC Judge** (expanded in 2019); 3-year/70-yr term (2019 amendment); PM-led 6-member Selection Committee (PM, Home Min, LS Speaker, RS Dy Chair, LoPs LS & RS); recommendatory powers (**1-year limitation** on inquiry) |
| **Central Vigilance Commission (CVC)** | *Santhanam Committee* (1964) → Statutory under **CVC Act, 2003** | **CVC + up to 2 VCs**; **4-year or 65-yr** term; Committee: PM, Home Min, LoP in LS; supervises CBI corruption probes (*Vineet Narain, 1997*) |
| **Central Information Commission (CIC)** | *RTI Act, 2005* (amended **2019**) | Chief IC + up to 10 ICs; **2019 amendment** let Centre notify tenure/salaries (replacing fixed 5-yr/SC-parity); PM-led committee |
| **Lokpal & Lokayuktas** | *Lokpal and Lokayuktas Act, 2013* (enforced 2014) | Chairperson (Retd CJI/SC Judge/eminent person) + up to 8 members (50% judicial; 50% SC/ST/OBC/Minority/Women); Selection Committee: PM, LS Speaker, LoP LS, CJI/nominee, 1 eminent jurist; covers PM (with exclusions), Ministers, MPs, Group A–D officials |
| **National Commission for Women (NCW) & NCPCR** | *NCW Act, 1990* (1992); *CPCR Act, 2005* (2007) | Statutory bodies protecting women's rights & child rights (monitoring POCSO/RTE Acts) |
| **National Green Tribunal (NGT)** | *NGT Act, 2010* | Specialized fast-track environmental tribunal (Principal Bench: New Delhi; 6-month disposal goal; follows **sustainable development, precautionary & polluter pays principles**; crucial for Himalayan/Uttarakhand eco-cases) |

## 3. Key Revision Takeaways
- **Constitutional:** **NCSC (Art. 338)**, **NCST (Art. 338A — 89th Amendment)**, **NCBC (Art. 338B — 102nd Amendment)**, **Special Officer for Linguistic Minorities (Art. 350B)**.
- **Statutory (NOT Constitutional):** **NHRC, CVC, CIC, Lokpal, NCW, NCM, NCPCR, NGT**.
- **2019 Amendments:** *NHRC* opened Chair to retired SC judges & reduced term to 3 yrs; *RTI* vested CIC/SIC tenure & salary determination in Central Govt.
- **105th Amendment (2021)** restored State Governments' power to identify and maintain their own State SEBC/OBC lists alongside the Central list.`,
    mcqs: [
      {
        stem: 'Which Constitutional Amendment bifurcated the erstwhile combined National Commission for SCs & STs into separate Commissions under Articles 338 (NCSC) and 338A (NCST)?',
        options: [
          '65th Amendment Act, 1990',
          '89th Constitutional Amendment Act, 2003',
          '102nd Constitutional Amendment Act, 2018',
          '7th Constitutional Amendment Act, 1956',
        ],
        correctOptionIndex: 1,
        explanation: 'The 65th Amendment created the joint multi-member commission, and the 89th Amendment (effective Feb 2004) separated NCSC (Art. 338) and NCST (Art. 338A).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which Constitutional Amendment elevated the National Commission for Backward Classes (NCBC) to a constitutional body by inserting Article 338B?',
        options: [
          '97th Amendment Act',
          '101st Amendment Act',
          '102nd Constitutional Amendment Act, 2018',
          '104th Amendment Act',
        ],
        correctOptionIndex: 2,
        explanation: 'The 102nd Amendment (2018) granted constitutional status to NCBC under Article 338B and inserted Article 342A.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why was the 105th Constitutional Amendment Act (2021) enacted by Parliament following the Supreme Court\'s Maratha reservation ruling?',
        options: [
          'To abolish NCBC completely',
          'To restore and clarify the power of State Governments and Union Territories to identify and maintain their own lists of Socially and Educationally Backward Classes (SEBCs/OBCs)',
          'To raise the 50% ceiling to 90%',
          'To merge NCSC and NCST back together',
        ],
        correctOptionIndex: 1,
        explanation: 'In Jaishri Laxmanrao Patil (2021), SC interpreted Art. 342A to strip states of OBC-list identification power; the 105th Amendment amended Arts. 338B, 342A, and 366 to restore State lists.',
        difficulty: 'standard',
      },
      {
        stem: 'Which of the following watchdogs is a CONSTITUTIONAL body rather than a STATUTORY body?',
        options: [
          'National Human Rights Commission (NHRC)',
          'Central Vigilance Commission (CVC)',
          'Special Officer for Linguistic Minorities (Article 350B)',
          'Lokpal',
        ],
        correctOptionIndex: 2,
        explanation: 'Article 350B (inserted by the 7th Amendment, 1956) establishes the Special Officer for Linguistic Minorities directly in the Constitution, whereas NHRC, CVC, and Lokpal are statutory.',
        difficulty: 'foundation',
      },
      {
        stem: 'What key changes did the Protection of Human Rights (Amendment) Act, 2019 introduce for the NHRC Chairperson and term of office?',
        options: [
          'Fixed a 10-year non-renewable term',
          'Made a former Judge of the Supreme Court (in addition to a retired CJI) eligible for Chairpersonship and reduced the term from 5 years to 3 years (or age 70)',
          'Placed NHRC directly under the Home Secretary',
          'Abolished State Human Rights Commissions',
        ],
        correctOptionIndex: 1,
        explanation: 'The 2019 amendment broadened eligibility for NHRC Chair (retired CJI or SC Judge) and State HRC Chair (retired HC CJ or HC Judge) and reduced tenure from 5 to 3 years.',
        difficulty: 'standard',
      },
      {
        stem: 'Under the Protection of Human Rights Act, 1993, beyond what time limit from the date of the alleged violation is the NHRC barred from inquiring into a complaint?',
        options: ['6 months', '1 year', '3 years', '5 years'],
        correctOptionIndex: 1,
        explanation: 'Section 36(2) bars NHRC/SHRCs from investigating matters after the expiry of one year from the date of the alleged human rights violation.',
        difficulty: 'standard',
      },
      {
        stem: 'On the recommendation of which committee was the Central Vigilance Commission (CVC) originally established in 1964 before receiving statutory status via the CVC Act, 2003?',
        options: [
          'Sarkaria Commission',
          'Santhanam Committee on Prevention of Corruption',
          'Shah Commission',
          'Mandal Commission',
        ],
        correctOptionIndex: 1,
        explanation: 'Created by executive resolution in 1964 on the Santhanam Committee\'s recommendation, CVC got statutory status via ordinance (1998) and the CVC Act, 2003.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which five communities in Uttarakhand are constitutionally notified as Scheduled Tribes (STs) monitored under Article 338A (NCST)?',
        options: [
          'Gaddi, Gujjar, Kinnaura, Pangwala, Swangla',
          'Jaunsari, Tharu, Bhotia, Buxa, and Raji',
          'Santhal, Munda, Oraon, Ho, Kharia',
          'Bhil, Gond, Sahariya, Korku, Baiga',
        ],
        correctOptionIndex: 1,
        explanation: 'Declared STs in 1967, the five tribal groups of Uttarakhand are Tharu, Jaunsari, Bhotia, Buxa, and Raji.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under the Lokpal and Lokayuktas Act, 2013, what minimum representation requirement applies to the eight Members of the Lokpal?',
        options: [
          'All eight must be retired bureaucrats',
          '50% must be Judicial Members, and not less than 50% must be from SCs, STs, OBCs, Minorities, and Women',
          'All must be sitting MPs',
          'No social diversity requirement exists',
        ],
        correctOptionIndex: 1,
        explanation: 'Section 3 of the 2013 Act mandates half judicial members and at least 50% representation from SCs, STs, OBCs, minorities, and women.',
        difficulty: 'standard',
      },
      {
        stem: 'Which Prime Minister-chaired Selection Committee chooses the Chairperson and Members of the Central Vigilance Commission (CVC)?',
        options: [
          'PM, CJI, and Lok Sabha Speaker',
          'Prime Minister (Chair), Union Minister of Home Affairs, and Leader of Opposition in Lok Sabha',
          'President, Vice-President, and CAG',
          'Union Cabinet Secretary and Chief Secretaries',
        ],
        correctOptionIndex: 1,
        explanation: 'Under Section 4 of the CVC Act, 2003, the 3-member selection panel comprises the PM, Home Minister, and LoP in Lok Sabha.',
        difficulty: 'standard',
      },
      {
        stem: 'Which three guiding principles is the National Green Tribunal (NGT) statutorily mandated under Section 20 of the NGT Act, 2010 to apply when adjudicating environmental disputes?',
        options: [
          'Sovereign immunity, Caveat Emptor, and Laissez-faire',
          'Sustainable Development, Precautionary Principle, and Polluter Pays Principle',
          'Absolute Executive Discretion, Eminent Domain, and Profit Maximization',
          'Admiralty Law, Contract Privity, and Res Judicata',
        ],
        correctOptionIndex: 1,
        explanation: 'Section 20 binds the NGT to apply Sustainable Development, the Precautionary Principle, and the Polluter Pays Principle—vital in Uttarakhand hydropower and road litigation.',
        difficulty: 'foundation',
      },
      {
        stem: 'What powers do NCSC (Art. 338), NCST (Art. 338A), and NCBC (Art. 338B) possess while investigating any specific complaint or monitoring constitutional safeguards?',
        options: [
          'Power to sentence convicts to life imprisonment',
          'All powers of a Civil Court trying a suit (summoning witnesses, discovery/production of documents, receiving evidence on affidavits)',
          'Power to strike down Parliamentary laws',
          'Power to dissolve State Assemblies',
        ],
        correctOptionIndex: 1,
        explanation: 'While their substantive recommendations are advisory (governments must lay Action Taken Memoranda explaining non-acceptance), their inquiry powers equal a Civil Court.',
        difficulty: 'standard',
      },
      {
        stem: 'What key change did the Right to Information (Amendment) Act, 2019 introduce regarding the Chief Information Commissioner (CIC) and State Information Commissioners?',
        options: [
          'Extended tenure permanently to 10 years',
          'Empowered the Central Government to prescribe their term of office and salaries/allowances by rules, replacing the fixed 5-year term and Election Commissioner parity',
          'Abolished all State Information Commissions',
          'Allowed MPs to become Information Commissioners without resigning',
        ],
        correctOptionIndex: 1,
        explanation: 'The 2019 RTI Amendment replaced statutory 5-year fixed terms and salary parity with CEC/Chief Secretary by Central rule-making authority (framed at 3 years).',
        difficulty: 'standard',
      },
      {
        stem: 'Who is included in the 6-member Selection Committee that recommends the Chairperson and Members of the NHRC under the 1993 Act, besides the PM, Home Minister, Speaker, and Deputy Chairman of Rajya Sabha?',
        options: [
          'Chief Justice of India and Attorney General',
          'Leaders of Opposition in BOTH the Lok Sabha and the Rajya Sabha',
          'CAG and UPSC Chairman',
          'Two State Chief Ministers by rotation',
        ],
        correctOptionIndex: 1,
        explanation: 'Both LoPs (Lok Sabha and Rajya Sabha) sit on the NHRC Selection Committee (whereas CVC/CBI/CIC panels include only the Lok Sabha LoP).',
        difficulty: 'advanced',
      },
      {
        stem: 'Can the National Green Tribunal (NGT) hear cases arising under the Wildlife (Protection) Act, 1972 or the Indian Forest Act, 1927?',
        options: [
          'Yes, both Acts are in Schedule I of the NGT Act',
          'No; NGT\'s civil jurisdiction under Schedule I covers 7 specific laws (Water, Air, EPA, Forest Conservation Act 1980, Biological Diversity Act, Public Liability Insurance), NOT the Wildlife Protection Act 1972 or Indian Forest Act 1927',
          'NGT hears only criminal IPC cases',
          'NGT applies only to coastal states',
        ],
        correctOptionIndex: 1,
        explanation: 'A classic UPSC/UKPSC exam nuance: Schedule I of the NGT Act, 2010 includes the Forest (Conservation) Act, 1980 and Biological Diversity Act, 2002, while excluding the Wildlife Protection Act, 1972 and Indian Forest Act, 1927.',
        difficulty: 'advanced',
      },
    ],
  },
];
