import { TopicContentPackage } from './types';

export const GENERAL_ENGLISH_TOPICS: TopicContentPackage[] = [
  {
    topicTitle: 'Parts of Speech, Articles, Prepositions & Determiners',
    materialTitle: 'English Parts of Speech, Articles, Fixed Prepositions & Determiners — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Articles, Prepositions, Pronouns & Determiners',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Parts of Speech, Articles, Prepositions & Determiners

## 1. Articles (A, An, The) — Sound Over Spelling!
- **Indefinite Articles (\`a\` / \`an\`):** Governed strictly by **initial spoken sound**, not letter:
  - **\`an\`** before vowel sounds: *an MLA, an honest officer, an heirloom, an FIR, an hour, an M.Sc.*
  - **\`a\`** before consonant sounds: *a university (\`yu\`), a European, a one-rupee note (\`wa\`), a useful scheme*.
- **Definite Article (\`the\`):**
  - Used before **rivers, mountain ranges (plural/chain — *the Himalayas*, NOT single peaks like *Nanda Devi*!), holy books, newspapers, superlatives, ordinals (\`the first\`), and unique institutions (\`the UKPSC\`)**.
  - **Omission of \`the\`:** Generally omitted before abstract/uncountable nouns in general sense (*Honesty is the best policy*), languages (*Hindi*), meals, and **single mountains/islands** (*Mount Everest*, *Nanda Devi*).
  - **Exception pattern:** *"The gold of Kolar is pure"* (\`the\` + material/abstract noun when post-modified/particularized!).

## 2. High-Yield Prepositions & Fixed Collocations
- **\`between\` vs \`among\`:** \`between\` for **two** entities (or distinct reciprocal pairs in treaties); \`among\` for **more than two**.
- **\`beside\` vs \`besides\`:** \`beside\` = by the side of; \`besides\` = in addition to.
- **\`in\` vs \`into\` / \`on\` vs \`upon\`:** \`in/on\` show static position; \`into/upon\` indicate motion/change of state.
- **\`since\` vs \`for\`:** \`since\` + point of time (*since 2000*); \`for\` + duration (*for two hours*).
- **Fixed Prepositions Frequently Tested in UKPSC:**
  - *Accused **of*** | *Acquitted **of*** | *Abide **by*** | *Comply **with*** | *Complain **of** (illness) / **against** (person)* | *Congratulate **on*** | *Cope **with*** *(never "cope up with"!)* | *Die **of** (disease) / **from** (cause like starvation/injury)* | *Prefer **to*** *(never "than")* | *Senior / Junior / Superior / Prior **to*** | *Consist **of** (= comprise — never "comprise of"!)* | *Despite* *(never "despite of"!)* vs *In spite **of***.

## 3. Determiners & Pronouns
- **\`few\` / \`a few\` / \`the few\`** *(countable)* vs **\`little\` / \`a little\` / \`the little\`** *(uncountable)*:
  - \`few / little\` = almost none (negative sense); \`a few / a little\` = some (positive); \`the few / the little\` = whatever small amount exists.
- **\`each\` vs \`every\`:** \`each\` for 2 or more individualized items; \`every\` for 3 or more as a group.
- **Reflexive Pronouns:** Transitive verbs like *avail, enjoy, absent, acquit, resign, pride* take a reflexive pronoun when lacking an explicit object (*"She availed **herself** of the opportunity"*).

## 4. Key Revision Takeaways
- Never write *"comprise of"*, *"despite of"*, *"discuss about"*, *"enter into (a room)"*, or *"cope up with"*.
- **\`a university\`**, **\`an honest man\`**, **\`junior to\`**, **\`die of\` malaria**, **\`abide by\` rules**.`,
    mcqs: [
      {
        stem: 'Choose the grammatically correct articles to fill in the blanks: "He is ______ honest MLA who graduated from ______ university in Uttarakhand."',
        options: ['a, an', 'an, a', 'a, a', 'the, an'],
        correctOptionIndex: 1,
        explanation: '"honest" begins with a silent h (vowel sound "o"), taking "an"; "university" begins with a consonant "yu" sound, taking "a".',
        difficulty: 'foundation',
      },
      {
        stem: 'Identify the sentence that uses **prepositions** without any redundant or incorrect collocation:',
        options: [
          'Despite of heavy rain, the team coped up with the schedule.',
          'The committee comprises of ten members.',
          'She prefers mountain trekking to city shopping and always abides by safety rules.',
          'We must discuss about the new syllabus.',
        ],
        correctOptionIndex: 2,
        explanation: '"prefer ... to" and "abide by" are exact collocations. "Despite" never takes "of", "cope with" rejects "up", "comprise" rejects "of" in active voice, and "discuss" is transitive (no "about").',
        difficulty: 'foundation',
      },
      {
        stem: 'Fill in the blank accurately: "Having ______ knowledge of local hill dialects proved fatal; he could barely communicate during the survey."',
        options: ['a little', 'little', 'the few', 'a few'],
        correctOptionIndex: 1,
        explanation: '"knowledge" is uncountable (ruling out few), and "barely communicate / proved fatal" conveys negative scarcity, requiring bare "little" (= almost none).',
        difficulty: 'standard',
      },
      {
        stem: 'Select the correct pair of prepositions: "The officer died ______ cholera after returning from camp, whereas his colleague suffered ______ exhaustion; both had been senior ______ the clerk."',
        options: [
          'from, of, than',
          'of, from, to',
          'by, with, from',
          'with, of, than',
        ],
        correctOptionIndex: 1,
        explanation: '"die of" takes a specific disease; "suffer from" takes an ailment/condition; Latin-origin comparatives ("senior, junior, superior, prior") take "to" rather than "than".',
        difficulty: 'standard',
      },
      {
        stem: 'Which sentence correctly uses **`the`** with geographical features of India and Uttarakhand?',
        options: [
          'The Mount Everest and the Nanda Devi are majestic.',
          'The Ganga flows down from the Himalayas across northern India.',
          'Ganga and Himalayas are sacred in India.',
          'He visited the Lake Nainital last Monday.',
        ],
        correctOptionIndex: 1,
        explanation: 'Definite article "the" precedes rivers ("the Ganga") and mountain ranges ("the Himalayas"), but NOT single mountain peaks (Nanda Devi, Mount Everest) or named lakes (Lake Nainital).',
        difficulty: 'foundation',
      },
      {
        stem: 'Choose the right reflexive pronoun usage: "Every candidate should ______ the practice archive before the UKPSC Mains."',
        options: [
          'avail the practice archive',
          'avail themselves of the practice archive',
          'avail for the practice archive',
          'avail to the practice archive',
        ],
        correctOptionIndex: 1,
        explanation: 'The verb "avail" requires a reflexive pronoun + "of" ("avail oneself of something").',
        difficulty: 'standard',
      },
      {
        stem: 'Distinguish **`beside`** and **`besides`**: "______ Dehradun and Haldwani, new exam centres will open right ______ the district collectorate."',
        options: [
          'Beside, besides',
          'Besides, beside',
          'Between, among',
          'Among, beside',
        ],
        correctOptionIndex: 1,
        explanation: '"Besides" means "in addition to"; "beside" means "next to / alongside".',
        difficulty: 'foundation',
      },
      {
        stem: 'Fill in the blank with the exact preposition: "The High Court acquitted the accused ______ all charges after reviewing documentary proof."',
        options: ['from', 'of', 'with', 'for'],
        correctOptionIndex: 1,
        explanation: 'Both "accuse of" and "acquit of" strictly govern the preposition "of".',
        difficulty: 'foundation',
      },
      {
        stem: 'Identify the pronoun-order rule (**231 / 123 Rule**) in the following sentence: "______ and ______ were commended for leading the relief mission."',
        options: [
          'I, he, and you',
          'You, he, and I',
          'He, I, and you',
          'You, I, and he',
        ],
        correctOptionIndex: 1,
        explanation: 'For positive/neutral actions, English follows the 2-3-1 pronoun sequence (Second person -> Third person -> First person: "You, he, and I"). For admitting faults/guilt, 1-2-3 is preferred.',
        difficulty: 'standard',
      },
      {
        stem: 'Select the correct determiner: "She spent ______ savings she had left on reference books for her younger brother."',
        options: ['little', 'a little', 'the little', 'few'],
        correctOptionIndex: 2,
        explanation: '"the little" refers to the entire limited/uncountable quantity defined by the following relative clause ("she had left").',
        difficulty: 'standard',
      },
      {
        stem: 'Choose the right relative pronoun: "This is the best district gazetteer ______ I have ever consulted for Almora’s history."',
        options: ['which', 'who', 'that', 'whom'],
        correctOptionIndex: 2,
        explanation: 'After a superlative adjective ("the best"), "that" is preferred over "which" or "who".',
        difficulty: 'standard',
      },
      {
        stem: 'Which sentence correctly distinguishes **`since`** and **`for`**?',
        options: [
          'She is preparing for UKPSC since three years.',
          'She has been preparing for UKPSC for three years, since January 2023.',
          'She has been preparing since three hours.',
          'She was preparing for 2020.',
        ],
        correctOptionIndex: 1,
        explanation: '"for" pairs with a duration ("three years"), while "since" pairs with a starting point ("January 2023") in perfect/perfect-continuous tenses.',
        difficulty: 'foundation',
      },
      {
        stem: 'Pick the sentence with **no pronoun error** regarding possessive gerunds and reciprocal pronouns:',
        options: [
          'The two brothers divided the orchard among themselves.',
          'I appreciated him arriving early despite the landslide.',
          'The two districts signed an agreement between themselves after the summit.',
          'Each of the sisters lost their keys.',
        ],
        correctOptionIndex: 2,
        explanation: '"between" applies to two entities; "each of..." takes singular possessive ("her keys"); gerunds formally take possessive ("his arriving").',
        difficulty: 'advanced',
      },
      {
        stem: 'Select the accurate preposition pair: "Water enters ______ the irrigation canal and then flows ______ the terraced fields."',
        options: ['into, across', 'no preposition (enters the irrigation canal), across', 'in, between', 'to, besides'],
        correctOptionIndex: 1,
        explanation: 'Physical entry ("enter a room/building/canal") is transitive and takes NO "into" (unlike abstract "enter into an agreement/alliance").',
        difficulty: 'standard',
      },
      {
        stem: 'Identify the **parts of speech** of the underlined word **"fast"** in: (1) *"He is a **fast** runner"* vs (2) *"He runs **fast**"* vs (3) *"She keeps a **fast** on Mondays"*.',
        options: [
          'Noun, Adjective, Verb',
          'Adjective, Adverb, Noun',
          'Adverb, Adjective, Preposition',
          'Verb, Adverb, Adjective',
        ],
        correctOptionIndex: 1,
        explanation: 'In (1) "fast" modifies noun "runner" (Adjective); in (2) modifies verb "runs" (Adverb — note there is no word "fastly"); in (3) follows article "a" (Noun).',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Tenses, Subject-Verb Agreement & Conditionals',
    materialTitle: 'English Tenses, Concord Rules & Conditional Clauses — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Tenses, Subject-Verb Agreement & Conditionals',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Tenses, Subject-Verb Agreement & Conditionals

## 1. High-Yield Subject-Verb Agreement (Concord) Rules
1. **Additive Phrases (\`as well as\`, \`along with\`, \`together with\`, \`in addition to\`, \`accompanied by\`):** Verb agrees with the **FIRST subject**!
   - *"The Governor, along with her advisors, **was** present."*
2. **Correlative Conjunctions (\`either...or\`, \`neither...nor\`, \`not only...but also\`):** Verb agrees with the **NEAREST (second) subject**!
   - *"Neither the District Magistrate nor the tehsildars **were** informed."*
3. **Distributives & Indefinites (\`Each\`, \`Every\`, \`Either\`, \`Neither\`, \`One of the + plural noun\`):** Always take a **SINGULAR verb**!
   - *"One of the candidates **has** cleared the interview."*
   - **Exception:** *"He is one of those candidates who **work** hard"* (here relative pronoun \`who\` refers to \`candidates\`, so plural!).
4. **\`The + Adj/Noun\` Single vs Dual Concept:** *"The poet and philosopher **is** dead"* (same person, 1 article) vs *"The poet and **the** philosopher **are** dead"* (2 people).
5. **Fixed Sums, Distances & Plural-Form Subjects:** *"Ten kilometres **is** a long hill walk"*; *"Politics **is** complex"*; *"Scissors **are** sharp"*.
6. **\`A number of\` vs \`The number of\`:** *"A number of applicants **are** waiting"* (plural) vs *"The number of applicants **is** rising"* (singular).

## 2. Tense Sequence & Aspect Pitfalls
- **Two Past Actions:** The earlier action takes **Past Perfect (\`had + V3\`)**; the later takes **Simple Past (\`V2\`)** (*"The train **had left** before we **reached** Dehradun station"*).
- **\`It is high time / It is time\` + Subject:** Takes **Simple Past (\`V2\`)** (*"It is high time we **revised** Uttarakhand Geography"*).
- **Stative Verbs (\`know, belong, own, consist, believe, resemble\`):** Do not normally use continuous (\`-ing\`) tenses (*"I **have known** him since 2018"*, NOT *"am knowing"*).
- **By + Future Time:** Uses **Future Perfect** (*"By December, she **will have completed** all 13 district profiles"*).

## 3. Conditional Sentences (Zero, First, Second, Third & Mixed)
| Type | Condition (If-Clause) | Main Clause | Usage |
| :--- | :--- | :--- | :--- |
| **Type 0 (General Truth)** | \`If + Simple Present\` | \`Simple Present\` | Scientific/universal facts |
| **Type 1 (Real Future)** | \`If + Simple Present\` | \`will/shall + V1\` | Probable future result |
| **Type 2 (Unreal Present)** | \`If + Simple Past\` (\`were\` for all subjects!) | \`would + V1\` | Hypothetical/imaginary present (*"If I **were** DM..."*) |
| **Type 3 (Unreal Past)** | \`If + Past Perfect\` (\`had + V3\`) | \`would have + V3\` | Unfulfilled past regret (*"Had he studied, he **would have passed**"*) |

## 4. Key Revision Takeaways
- **\`as well as / along with\` -> First subject**; **\`neither...nor\` -> Nearest subject**; **\`One of the + plural noun\` -> Singular verb**.
- **Type 3 Conditional:** \`If + had + V3\` pairs strictly with \`would have + V3\` (never \`would had\` or \`If + would have\`).`,
    mcqs: [
      {
        stem: 'Choose the correct verb form: "Neither the Chief Secretary nor the three District Magistrates ______ reached the venue yet."',
        options: ['has', 'have', 'was', 'is'],
        correctOptionIndex: 1,
        explanation: 'With "Neither ... nor", the verb agrees with the nearer subject ("three District Magistrates" — plural), requiring "have".',
        difficulty: 'foundation',
      },
      {
        stem: 'Fill in the blank accurately: "The District Magistrate, together with her security officers, ______ inspecting the flood relief camp."',
        options: ['are', 'were', 'is', 'have been'],
        correctOptionIndex: 2,
        explanation: 'Phrases like "together with", "along with", and "as well as" do NOT create a plural subject; the verb agrees with the first subject ("The District Magistrate" — singular).',
        difficulty: 'foundation',
      },
      {
        stem: 'Complete this **Type 3 Unreal Past Conditional**: "Had the rescue team received the alert an hour earlier, they ______ dozens of stranded trekkers."',
        options: [
          'would save',
          'would have saved',
          'will have saved',
          'had saved',
        ],
        correctOptionIndex: 1,
        explanation: '"Had + subject + V3" is an inverted Type 3 if-clause (= "If the rescue team had received..."), requiring "would have + V3" in the main clause.',
        difficulty: 'standard',
      },
      {
        stem: 'Identify the grammatically correct verb choice in BOTH clauses: "______ a number of candidates appearing today, while the total number of vacancies ______ strictly capped."',
        options: [
          'There is ... are',
          'There are ... is',
          'There is ... is',
          'There are ... are',
        ],
        correctOptionIndex: 1,
        explanation: '"A number of + plural noun" means "many" and takes a plural verb ("are"); "The number of + plural noun" refers to a single count and takes a singular verb ("is").',
        difficulty: 'foundation',
      },
      {
        stem: 'Spot the correct tense after **`It is high time`**: "It is high time the municipal council ______ cleaning the mountain drains before the monsoon."',
        options: ['starts', 'started', 'will start', 'has started'],
        correctOptionIndex: 1,
        explanation: 'When "It is high time" is followed by a subject + finite verb, English requires the subjunctive past tense ("started").',
        difficulty: 'standard',
      },
      {
        stem: 'Choose the right verb: "She is one of those diligent officers who ______ never ______ a single citizen grievance unattended."',
        options: [
          'has ... left',
          'have ... left',
          'is ... leaving',
          'does ... left',
        ],
        correctOptionIndex: 1,
        explanation: 'The relative pronoun "who" takes its antecedent from "those diligent officers" (plural), so the verb in the relative clause is plural ("have left").',
        difficulty: 'advanced',
      },
      {
        stem: 'Complete the sentence with proper **Past Perfect sequence**: "Before the emergency convoy ______ Uttarkashi, local villagers ______ already cleared the fallen boulders."',
        options: [
          'had reached ... cleared',
          'reached ... had',
          'reaches ... had',
          'was reaching ... have',
        ],
        correctOptionIndex: 1,
        explanation: 'The earlier completed action ("villagers had cleared") takes Past Perfect, and the subsequent action ("convoy reached") takes Simple Past.',
        difficulty: 'foundation',
      },
      {
        stem: 'Select the accurate conditional verb: "If I ______ the Chairman of the Disaster Management Authority, I would mandate early GLOF telemetry across all glacial lakes."',
        options: ['am', 'was', 'were', 'will be'],
        correctOptionIndex: 2,
        explanation: 'Hypothetical Type 2 conditionals strictly use subjunctive "were" across all grammatical persons ("If I were...").',
        difficulty: 'foundation',
      },
      {
        stem: 'Identify the **singular vs plural** agreement rule: "Bread and butter ______ his daily staple breakfast, whereas fifty kilometres ______ too far for an evening walk."',
        options: ['are ... are', 'is ... is', 'are ... is', 'is ... are'],
        correctOptionIndex: 1,
        explanation: 'Pairs expressing a single unified concept ("bread and butter") and fixed units of distance/money/weight ("fifty kilometres") take singular verbs.',
        difficulty: 'foundation',
      },
      {
        stem: 'Choose the sentence with **correct stative verb tense**:',
        options: [
          'I am knowing the Garhwal Commissioner since 2021.',
          'I have known the Garhwal Commissioner since 2021.',
          'I know the Garhwal Commissioner since 2021.',
          'I was knowing him for three years.',
        ],
        correctOptionIndex: 1,
        explanation: '"know" is a stative verb incompatible with continuous tenses; duration continuing to present ("since 2021") requires Present Perfect ("have known").',
        difficulty: 'foundation',
      },
      {
        stem: 'Select the correct verb for **Collective / Paired Nouns**: "The jury ______ divided in their personal opinions, even though a new pair of spectacles ______ ordered for the judge."',
        options: ['was ... were', 'were ... was', 'was ... was', 'were ... were'],
        correctOptionIndex: 1,
        explanation: 'A collective noun acting as divided individuals ("divided in their opinions") takes plural "were"; "a pair of" is singular ("was").',
        difficulty: 'standard',
      },
      {
        stem: 'Which sentence correctly uses the **Future Perfect Tense**?',
        options: [
          'By next November, the state will complete twenty-six years of foundation.',
          'By next November, the state will have completed twenty-six years since its foundation.',
          'By next November, the state completed twenty-six years.',
          'By next November, the state is completing twenty-six years.',
        ],
        correctOptionIndex: 1,
        explanation: 'Time markers starting with "By + future point" require Future Perfect ("will have + V3").',
        difficulty: 'foundation',
      },
      {
        stem: 'Choose the right verb: "The renowned poet and environmentalist ______ invited to inaugurate the Chipko Golden Jubilee lecture."',
        options: ['were', 'have been', 'was', 'are'],
        correctOptionIndex: 2,
        explanation: 'A single definite article ("The renowned poet and environmentalist") denotes one individual holding both roles -> singular verb ("was").',
        difficulty: 'foundation',
      },
      {
        stem: 'Spot the **error-free negative-adverb inversion**: "Scarcely ______ the gates of Kedarnath Dham opened ______ devotees began arriving in thousands."',
        options: [
          'had ... than',
          'had ... when',
          'did ... than',
          'has ... then',
        ],
        correctOptionIndex: 1,
        explanation: '"Hardly / Scarcely ... had + subject + V3" pairs strictly with "when" (whereas "No sooner" pairs with "than").',
        difficulty: 'standard',
      },
      {
        stem: 'Fill in the blank: "Each of the thirteen districts in Uttarakhand ______ its own unique cultural fairs and dialects."',
        options: ['have', 'has', 'are having', 'possess'],
        correctOptionIndex: 1,
        explanation: '"Each of + plural noun" takes a singular verb ("has").',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Clauses, Transformation & Synthesis of Sentences',
    materialTitle: 'Sentence Types, Clauses, Voice, Narration & Synthesis — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Clauses, Voice, Direct-Indirect & Transformation',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Clauses, Transformation & Synthesis of Sentences

## 1. Classification of Clauses & Sentences
- **Simple Sentence:** One independent clause (1 finite verb).
- **Compound Sentence:** Two or more **Coordinate Clauses** joined by FANBOYS (*for, and, nor, but, or, yet, so*; *either...or, not only...but also, therefore*).
- **Complex Sentence:** One Principal Clause + one or more **Subordinate Clauses**:
  1. **Noun Clause** *(acts as subject/object — starts with \`that, what, whether, why\`)*: *"I know **that Uttarakhand was formed in 2000**."*
  2. **Adjective (Relative) Clause** *(modifies a noun — \`who, which, that, whose, where\`)*: *"The river **that flows through Devprayag** is the Alaknanda."*
  3. **Adverb Clause** *(time/reason/condition/concession/purpose — \`although, because, if, unless, until, so that, lest...should\`)*: *"Walk carefully **lest you should slip**."*

## 2. Active–Passive Voice & Direct–Indirect Narration Essentials
- **Voice Essentials:**
  - Imperative (\`Open the gate\`) -> *Let the gate be opened* OR *You are requested/ordered to...*.
  - Verbs taking **special prepositions** instead of \`by\` in Passive: *Known **to***, *Surprised/Astonished/Amazed **at***, *Satisfied/Pleased **with***, *Contained **in***, *Interested **in***.
  - Infinitive (\`I am to finish it\`) -> *It is to be finished by me*.
- **Narration (Reported Speech):**
  - Reporting verb in Past shifts: Present Simple -> Past Simple, Present Continuous -> Past Continuous, Present Perfect -> Past Perfect, \`will\` -> \`would\`, \`can\` -> \`could\`, \`now\` -> \`then\`, \`today\` -> \`that day\`, \`yesterday\` -> \`the previous day\`.
  - **Exception (No Tense Shift):** Universal truths, habitual facts, and historical dates remain unchanged (*The teacher said, "The Sun rises in the east"* -> *...said that the Sun rises in the east*).
  - **Interrogatives:** Replace \`said to\` with \`asked/enquired\`; **NO \`that\`**, and use declarative word order (**Subject before Verb!**), e.g., *"He asked where I **lived**"*, NOT *"where did I live"*.

## 3. Sentence Transformation & Synthesis Pitfalls
- **Degree Interchange:** *"Dehradun is more literate than any other district"* (Comparative) <-> *"No other district is as literate as Dehradun"* (Positive) <-> *"Dehradun is the most literate district"* (Superlative).
- **\`Too...to\` -> \`So...that\`:** *"He was too tired to trek"* <-> *"He was so tired that he could not trek."*
- **Dangling Participle Error:** *"Walking along the ridge, a leopard was seen"* (WRONG — leopard wasn't walking!) -> *"While we were walking along the ridge, a leopard was seen."*

## 4. Key Revision Takeaways
- **\`Lest\`** always pairs with **\`should\`** (never \`not\`, because \`lest\` itself means *"for fear that... not"*).
- **Passive \`by\` exceptions:** *known **to***, *amazed **at***, *pleased **with***, *contained **in***.`,
    mcqs: [
      {
        stem: 'Identify the **subordinate clause type** in the sentence: "The committee announced **that the examination would be held in Haridwar**."',
        options: [
          'Adjective Clause',
          'Noun Clause (acting as direct object of "announced")',
          'Adverb Clause of Reason',
          'Coordinate Clause',
        ],
        correctOptionIndex: 1,
        explanation: 'The "that..." clause answers "announced WHAT?" and functions as the object of the transitive verb "announced", making it a Noun Clause.',
        difficulty: 'foundation',
      },
      {
        stem: 'Convert into **Passive Voice** using the correct preposition: "Her encyclopaedic knowledge of Himalayan flora **surprised** the botanists."',
        options: [
          'The botanists were surprised by her encyclopaedic knowledge of Himalayan flora.',
          'The botanists were surprised at her encyclopaedic knowledge of Himalayan flora.',
          'The botanists had surprised with her encyclopaedic knowledge of Himalayan flora.',
          'The botanists are surprised of her encyclopaedic knowledge.',
        ],
        correctOptionIndex: 1,
        explanation: '"Surprised", "astonished", "amazed", and "alarmed" take the preposition **"at"** (not "by") in passive constructions.',
        difficulty: 'standard',
      },
      {
        stem: 'Convert into **Indirect Speech** accurately: *The officer said to the aspirant, "Where did you submit your domicile certificate yesterday?"*',
        options: [
          'The officer asked the aspirant that where did he submit his domicile certificate yesterday.',
          'The officer asked the aspirant where he had submitted his domicile certificate the previous day.',
          'The officer told the aspirant where had he submitted his domicile certificate the previous day.',
          'The officer asked the aspirant where he submitted his domicile certificate yesterday.',
        ],
        correctOptionIndex: 1,
        explanation: 'Wh-questions omit "that", convert word order to assertive Subject + Verb, shift Simple Past ("did submit") to Past Perfect ("had submitted"), and change "yesterday" to "the previous day".',
        difficulty: 'foundation',
      },
      {
        stem: 'Choose the grammatically valid completion with **`lest`**: "Hold onto the rope firmly along the icy trail lest ______."',
        options: [
          'you should not slip',
          'you should slip',
          'you may not slip',
          'you will slip',
        ],
        correctOptionIndex: 1,
        explanation: '"lest" carries a built-in negative ("for fear that... not") and strictly requires "should + base verb" without "not".',
        difficulty: 'foundation',
      },
      {
        stem: 'Transform without changing meaning (`Too...to` -> `So...that`): "The mountain pass was **too snowbound to cross** in January."',
        options: [
          'The mountain pass was so snowbound that nobody can cross it in January.',
          'The mountain pass was so snowbound that it could not be crossed in January.',
          'The mountain pass was very snowbound to cross in January.',
          'The mountain pass was so snowbound for crossing in January.',
        ],
        correctOptionIndex: 1,
        explanation: 'Past-tense "was too ... to" expands to "was so ... that ... could not be + V3".',
        difficulty: 'foundation',
      },
      {
        stem: 'Identify the **Compound Sentence** among the options below:',
        options: [
          'Although it snowed heavily, the border road remained open.',
          'Heavy snow fell overnight, yet the border road remained open.',
          'In spite of heavy snow, the border road remained open.',
          'When heavy snow fell, workers cleared the road.',
        ],
        correctOptionIndex: 1,
        explanation: 'A compound sentence links two independent clauses with a coordinating conjunction ("yet"); "Although/When" form Complex sentences, and "In spite of" forms a Simple sentence.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which revision eliminates the **dangling participle** error in: *"Climbing up the steep Binsar ridge, the snowy Trishul peak came into view"*?',
        options: [
          'Climbing up the steep Binsar ridge, Trishul peak was viewed.',
          'While we were climbing up the steep Binsar ridge, the snowy Trishul peak came into view.',
          'Having climbed up the steep ridge, Trishul peak showed itself.',
          'Climbing up, the snowy peak saw us.',
        ],
        correctOptionIndex: 1,
        explanation: 'The original implies "Trishul peak" was climbing the ridge! Adding an explicit human subject ("While we were climbing...") fixes the dangling modifier.',
        difficulty: 'standard',
      },
      {
        stem: 'Convert the universal truth into **Indirect Speech**: *The geography professor said, "The Alaknanda and the Bhagirathi merge at Devprayag to form the Ganga."* ',
        options: [
          'The geography professor said that the Alaknanda and the Bhagirathi merged at Devprayag to form the Ganga.',
          'The geography professor said that the Alaknanda and the Bhagirathi merge at Devprayag to form the Ganga.',
          'The geography professor asked whether Alaknanda and Bhagirathi merge at Devprayag.',
          'The geography professor said that Alaknanda had merged at Devprayag.',
        ],
        correctOptionIndex: 1,
        explanation: 'Permanent geographical and scientific truths do not undergo backshift of tense even after a past reporting verb ("said").',
        difficulty: 'foundation',
      },
      {
        stem: 'Identify the **Negative Transformation** that preserves the exact meaning of *"Only verified applicants are eligible for the scholarship"*:',
        options: [
          'No verified applicants are eligible for the scholarship.',
          'None but verified applicants are eligible for the scholarship.',
          'Verified applicants are not ineligible.',
          'Both verified and unverified applicants are eligible.',
        ],
        correctOptionIndex: 1,
        explanation: 'Standard affirmative-to-negative transformation replaces "Only" (for persons) with "None but".',
        difficulty: 'standard',
      },
      {
        stem: 'Select the correct **Passive Voice** of *"This terracotta jar contains pure Himalayan honey"*: ',
        options: [
          'Pure Himalayan honey is contained by this terracotta jar.',
          'Pure Himalayan honey is contained in this terracotta jar.',
          'Pure Himalayan honey was contained with this terracotta jar.',
          'Pure Himalayan honey has been contained through this jar.',
        ],
        correctOptionIndex: 1,
        explanation: '"Contain" takes the preposition **"in"** in the passive voice ("contained in").',
        difficulty: 'standard',
      },
      {
        stem: 'Synthesize these two simple sentences into **one Simple Sentence** using an appositive/participle: *"Pithoragarh is called Mini Kashmir. It borders both Nepal and Tibet."* ',
        options: [
          'Pithoragarh is called Mini Kashmir and it borders both Nepal and Tibet.',
          'Pithoragarh, called Mini Kashmir, borders both Nepal and Tibet.',
          'Because Pithoragarh borders Nepal and Tibet, it is called Mini Kashmir.',
          'Pithoragarh borders Nepal, however it is called Mini Kashmir.',
        ],
        correctOptionIndex: 1,
        explanation: 'Using the reduced participial/appositive modifier preserves a single finite verb ("borders"), producing a true Simple Sentence (unlike "and" = Compound or "Because" = Complex).',
        difficulty: 'standard',
      },
      {
        stem: 'Change from **Superlative to Positive Degree**: *"Dehradun is the most urbanized district in Uttarakhand."* ',
        options: [
          'Very few districts in Uttarakhand are as urbanized as Dehradun.',
          'No other district in Uttarakhand is as urbanized as Dehradun.',
          'Dehradun is more urbanized than most other districts.',
          'Some districts are not as urbanized as Dehradun.',
        ],
        correctOptionIndex: 1,
        explanation: 'Absolute superlative ("the most...") transforms to Positive using **"No other ... as [adj] as"**, whereas "one of the most..." uses **"Very few ... as [adj] as"**.',
        difficulty: 'foundation',
      },
      {
        stem: 'Select the accurate **Assertive transformation** of the exclamatory sentence: *"How serene the meadows of Bedni Bugyal look at dawn!"* ',
        options: [
          'Do the meadows of Bedni Bugyal look serene at dawn?',
          'The meadows of Bedni Bugyal look exceedingly serene at dawn.',
          'What serene meadows Bedni Bugyal has!',
          'The meadows do not look serene.',
        ],
        correctOptionIndex: 1,
        explanation: 'Exclamatory "How + adjective + S + V!" becomes assertive "S + V + very/exceedingly + adjective."',
        difficulty: 'foundation',
      },
      {
        stem: 'Which sentence demonstrates correct **parallelism** in synthesis?',
        options: [
          'The policy aims to conserve glaciers, promoting eco-tourism, and rural livelihoods.',
          'The policy aims to conserve glaciers, promote eco-tourism, and strengthen rural livelihoods.',
          'The policy aims at conserving glaciers, to promote eco-tourism, and rural jobs.',
          'The policy aims conserving glaciers and promotion of eco-tourism.',
        ],
        correctOptionIndex: 1,
        explanation: 'Coordinated elements after "aims to" must share parallel bare-infinitive verb forms ("conserve ..., promote ..., and strengthen ...").',
        difficulty: 'standard',
      },
      {
        stem: 'Convert the **Imperative Request** into Passive Voice: *"Please maintain strict silence inside the archive hall."* ',
        options: [
          'Silence must maintain inside the archive hall.',
          'You are requested to maintain strict silence inside the archive hall.',
          'Let silence pleased be maintained.',
          'Strict silence is requesting to be maintained.',
        ],
        correctOptionIndex: 1,
        explanation: 'Polite imperative requests beginning with "Please/Kindly" convert cleanly to "You are requested to + V1...".',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Synonyms, Antonyms, One-Word Substitution & Idioms',
    materialTitle: 'Competitive English Vocabulary, One-Word Substitutions & Idioms — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Synonyms, Antonyms, One-Word Substitutes & Idioms',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Synonyms, Antonyms, One-Word Substitution & Idioms

## 1. High-Yield Synonyms & Antonyms Pairs
| Word | Meaning | Close Synonyms | Antonyms |
| :--- | :--- | :--- | :--- |
| **Ephemeral** | Short-lived, fleeting | Transient, evanescent, transitory | **Perennial**, eternal, perpetual |
| **Ubiquitous** | Present everywhere | Omnipresent, pervasive | **Rare**, scarce, localized |
| **Sagacious** | Wise, shrewd in judgement | Prudent, astute, discerning | **Foolish**, imprudent, gullible |
| **Candid** | Frank, sincere, blunt | Forthright, outspoken, ingenuous | **Evasive**, disingenuous, secretive |
| **Magnanimous** | Generous, forgiving | Benevolent, chivalrous | **Petty**, vindictive, mean |
| **Mitigate** | Make less severe | Alleviate, assuage, moderate | **Aggravate**, exacerbate, intensify |
| **Pragmatic** | Practical, realistic | Utilitarian, sensible | **Idealistic**, quixotic, impractical |
| **Laconic** | Using very few words | Terse, concise, succinct | **Verbose**, garrulous, loquacious |

## 2. Competitive One-Word Substitutions (Recurring in UKPSC / UKSSSC)
- **Altruist / Philanthropist:** Lover of mankind *(antonym: **Misanthrope** — hater of mankind; **Misogynist** — hater of women; **Misogamist** — hater of marriage)*.
- **Ambidextrous:** Able to use both hands equally well.
- **Panacea:** Universal remedy for all diseases or difficulties.
- **Infallible:** Incapable of making errors *(vs **Incorrigible** — impossible to reform; **Indefatigable** — untiring)*.
- **Stoic:** One indifferent to pleasure or pain.
- **Iconoclast:** Breaker of traditional images/cherished institutions.
- **Epitaph:** Words inscribed on a tomb | **Epilogue:** Concluding section of a literary work.
- **Numismatics:** Study of coins *(vs **Philately** — stamp collection; **Cartography** — map-making; **Lexicography** — dictionary compiling)*.
- **Plagiarism:** Literary theft | **Nepotism:** Undue favouritism to relatives | **Bureaucracy:** Rule by officials.

## 3. Essential English Idioms & Phrases
- **Burn the midnight oil:** Work or study late into the night.
- **Read between the lines:** Grasp hidden or implied meaning.
- **Cut the Gordian knot:** Solve an intricate problem swiftly/boldly.
- **Crocodile tears:** False, insincere grief.
- **At sixes and sevens:** In utter disorder or confusion.
- **To grease the palm:** Bribe someone.
- **A bone of contention / Apple of discord:** Subject of dispute.
- **Leave no stone unturned:** Make every possible effort.
- **Once in a blue moon:** Very rarely.
- **Bite the bullet:** Endure a painful necessity bravely.

## 4. Key Revision Takeaways
- Pair root families quickly: **\`anthrop\`** = mankind, **\`loqu/verb\`** = speech, **\`chron\`** = time, **\`omni\`** = all, **\`eu\`** = good.`,
    mcqs: [
      {
        stem: 'Which word is the closest **antonym** of **"Ephemeral"** (meaning short-lived or fleeting)?',
        options: ['Evanescent', 'Transient', 'Perennial', 'Momentary'],
        correctOptionIndex: 2,
        explanation: 'Evanescent, transient, and momentary are synonyms of ephemeral, whereas "perennial" (enduring/everlasting) is its exact antonym.',
        difficulty: 'foundation',
      },
      {
        stem: 'Choose the exact **one-word substitution** for: *"A person who can write or work equally skilfully with both hands."*',
        options: ['Amphibious', 'Ambidextrous', 'Ambiguous', 'Equivocal'],
        correctOptionIndex: 1,
        explanation: 'Ambidextrous ("ambi" = both + "dexter" = right/skilful) denotes equal dexterity in both hands; "ambiguous" means having unclear/double meaning.',
        difficulty: 'foundation',
      },
      {
        stem: 'Select the accurate **synonym** of **"Laconic"**:',
        options: ['Garrulous', 'Terse and concise', 'Verbose', 'Melodramatic'],
        correctOptionIndex: 1,
        explanation: '"Laconic" describes speech or writing that uses very few words ("terse, succinct"), opposite to verbose or garrulous.',
        difficulty: 'standard',
      },
      {
        stem: 'What does the idiom **"at sixes and sevens"** signify in formal writing?',
        options: [
          'In mathematical precision',
          'In a state of total confusion or disarray',
          'At dusk or twilight',
          'In full agreement',
        ],
        correctOptionIndex: 1,
        explanation: 'Originating from dice-game terminology, "at sixes and sevens" means scattered, confused, or disorganized.',
        difficulty: 'foundation',
      },
      {
        stem: 'Identify the correct pairing of **study disciplines**: *"The systematic study of coins/medals"* vs *"The art of compiling dictionaries"*.',
        options: [
          'Philately and Calligraphy',
          'Numismatics and Lexicography',
          'Epigraphy and Entomology',
          'Cartography and Numismatics',
        ],
        correctOptionIndex: 1,
        explanation: 'Numismatics = study of coins; Lexicography = compiling dictionaries (Philately = stamps; Epigraphy = inscriptions; Cartography = maps).',
        difficulty: 'foundation',
      },
      {
        stem: 'Pick the closest **antonym** of **"Mitigate"** (as in *mitigating landslide risk*):',
        options: ['Alleviate', 'Assuage', 'Exacerbate', 'Temper'],
        correctOptionIndex: 2,
        explanation: 'To "mitigate" is to make less severe, while to "exacerbate" (or aggravate) is to worsen a bad situation.',
        difficulty: 'standard',
      },
      {
        stem: 'Choose the right **one-word substitute** for *"A universal cure for all ailments or administrative ills"*.',
        options: ['Placebo', 'Panacea', 'Elixir', 'Antidote'],
        correctOptionIndex: 1,
        explanation: '"Panacea" (from Greek Panakeia) denotes a cure-all remedy.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the intended sense of the idiom **"to cut the Gordian knot"**?',
        options: [
          'To ruin an artwork',
          'To solve an exceedingly complex deadlock through decisive bold action',
          'To untie shoelaces slowly',
          'To postpone a legal judgment',
        ],
        correctOptionIndex: 1,
        explanation: 'Named after Alexander’s legendary sword-stroke at Gordium, it means resolving a tangled issue through bold, decisive action.',
        difficulty: 'standard',
      },
      {
        stem: 'Select the **synonym** of **"Sagacious"**:',
        options: ['Naive', 'Astute / Prudent', 'Reckless', 'Apathetic'],
        correctOptionIndex: 1,
        explanation: 'Sagacious means possessing keen foresight and practical wisdom (astute, judicious, prudent).',
        difficulty: 'standard',
      },
      {
        stem: 'Distinguish carefully: A person who **indifferently endures pleasure or pain without complaining** is a **______**, whereas a **breaker of cherished traditions** is an **______**.',
        options: [
          'Cynic ... Altruist',
          'Stoic ... Iconoclast',
          'Hedonist ... Recluse',
          'Martyr ... Egoist',
        ],
        correctOptionIndex: 1,
        explanation: 'Stoic = indifferent to pleasure/pain; Iconoclast = attacker of entrenched idols or orthodox traditions.',
        difficulty: 'standard',
      },
      {
        stem: 'What does **"read between the lines"** mean?',
        options: [
          'Proofread typography margins',
          'Understand an unstated or implied meaning beneath literal words',
          'Skip alternating sentences while skimming',
          'Quote two authors simultaneously',
        ],
        correctOptionIndex: 1,
        explanation: 'Reading between the lines means discerning hidden intent or nuance not overtly printed.',
        difficulty: 'foundation',
      },
      {
        stem: 'Identify the **homophone pair** correctly matched to meaning: **"`Elicit` vs `Illicit`"** and **"`Stationary` vs `Stationery`"**:',
        options: [
          'Elicit = unlawful; Stationary = writing paper',
          'Elicit = draw out (a response); Illicit = unlawful; Stationary = unmoving; Stationery = writing materials',
          'Illicit = draw out; Stationery = unmoving',
          'Both pairs are exact synonyms',
        ],
        correctOptionIndex: 1,
        explanation: 'Memory hook: StationERy has "e" for Envelope/pEn; StationAry has "a" for At rest. Elicit = evoke; Illicit = illegal.',
        difficulty: 'foundation',
      },
      {
        stem: 'Select the exact **one-word substitute** for *"A government run exclusively by unelected salaried officials/departments"*.',
        options: ['Plutocracy', 'Bureaucracy', 'Theocracy', 'Oligarchy'],
        correctOptionIndex: 1,
        explanation: 'Bureaucracy = rule by state officials; Plutocracy = rule by the wealthy; Theocracy = rule by religious authority; Oligarchy = rule by a small elite.',
        difficulty: 'foundation',
      },
      {
        stem: 'Pick the closest **antonym** of **"Magnanimous"**:',
        options: ['Generous', 'Chivalrous', 'Petty / Vindictive', 'Benevolent'],
        correctOptionIndex: 2,
        explanation: 'Magnanimous ("great-souled") means noble and forgiving; petty/vindictive is the exact opposite.',
        difficulty: 'standard',
      },
      {
        stem: 'What does **"a white elephant"** mean when applied to an unsustainable public-sector scheme?',
        options: [
          'A sacred wildlife reserve',
          'An expensive possession or project whose upkeep outweighs its practical utility',
          'An unexpected windfall profit',
          'A transparent audit report',
        ],
        correctOptionIndex: 1,
        explanation: 'Originating from royal Siamese gifts too costly to maintain, "white elephant" denotes a burdensome, high-cost asset with poor return.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Reading Comprehension, Precis Writing & Formal Correspondence',
    materialTitle: 'English Comprehension, Précis Reduction & Official Letter Formats — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Précis Rules, Inference & Formal Letter Formats',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Reading Comprehension, Precis Writing & Formal Correspondence

## 1. Mastering Reading Comprehension (Prelims & CSAT Style)
- **Main Idea vs Detail:** The *Main Idea* unifies every paragraph cleanly without being too narrow (ignoring later paragraphs) or too broad (going beyond the text).
- **Inference / Corollary:** An inference MUST follow strictly from stated evidence — watch out for **extreme words (\`always, never, only, every\`)** in trap options unless the passage uses absolute language!
- **Author’s Tone:** Distinguish *Objective/Analytical* (balanced facts/data), *Didactic* (instructive/moralizing), *Laudatory* (praising), *Satirical* (mocking), and *Cautionary* (warning).

## 2. Golden Rules of English Précis Writing (UKPSC Mains)
1. **Length Rule:** Reduce the original passage to roughly **one-third (1/3)** of its total word count *(e.g., 300 words -> ~95–105 words)*.
2. **Compulsory Short Title:** Capture the central theme concisely even if not explicitly requested.
3. **Reported / Third-Person Past Style:** Convert direct speech, questions, and first/second-person pronouns (*"I", "we", "you"*) into **indirect, third-person prose** (*"the author notes...", "humanity must..."*).
4. **Zero Copy-Pasting & Zero External Opinions:** Paraphrase in your own crisp vocabulary; strip out anecdotes, figures of speech, quotations, and personal remarks.

## 3. Formal & Official Letter Architecture (Block Layout Standard)
- **Standard Sequence:**
  1. **Sender’s Address / Designation** -> **Date** *(e.g., 15 March 2025 — never "15th March, 2025" with apostrophes or slashes only)* -> **Receiver’s Designation & Address**.
  2. **Subject Line:** Crisp, one-line summary (*Sub: Request for Repair of Community Irrigation Canal*).
  3. **Salutation:** \`Sir / Madam\` or \`Dear Sir / Madam\` *(never "Respected Sir" in crisp modern civil-service style; "Sir" alone suffices)*.
  4. **Body (3-Paragraph Rule):** (i) Purpose & context; (ii) Specific facts/details; (iii) Action requested/polite closing.
  5. **Complimentary Close (Crucial Concord!):**
     - \`Yours faithfully\` -> used when recipient’s name is UNKNOWN (\`Sir/Madam\`).
     - \`Yours sincerely\` -> used when recipient is addressed BY NAME (\`Dear Dr. Joshi\`). *(Note: NEVER write \`Your's\` with an apostrophe!)*

## 4. Key Revision Takeaways
- **\`Yours faithfully\`** pairs with **\`Sir/Madam\`**; **\`Yours sincerely\`** pairs with **named salutations**; **never \`Your's\`**!
- **Précis = 1/3 length + concise title + own third-person words + zero examples/opinions.**`,
    mcqs: [
      {
        stem: 'In modern formal correspondence, if you open an official letter with the salutation **"Dear Sir / Madam"** (without knowing the officer’s surname), which complimentary close is strictly standard?',
        options: [
          'Yours sincerely',
          'Yours faithfully',
          'Your’s lovingly',
          'Yours affectionately',
        ],
        correctOptionIndex: 1,
        explanation: 'Standard British/Indian formal convention pairs impersonal "Dear Sir/Madam" with "Yours faithfully", and named salutations ("Dear Mr. Pant") with "Yours sincerely" (never apostrophe "Your’s").',
        difficulty: 'foundation',
      },
      {
        stem: 'Which grammatical error invalidates *"Your’s sincerely"* in civil service letters and précis scripts?',
        options: [
          '"Sincerely" is spelled wrong',
          'Possessive pronouns ("yours, ours, hers, theirs") NEVER take an apostrophe',
          '"Your" should be plural',
          'Letters cannot end with a comma',
        ],
        correctOptionIndex: 1,
        explanation: 'Independent possessive pronouns take no apostrophe ("Yours faithfully / Yours sincerely").',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the universally accepted target word-count ratio for an **English Précis** relative to the original passage?',
        options: [
          'Exactly 50%',
          'Approximately one-third (1/3) of the original word count',
          'One-fifth (1/5)',
          'Double the original count for clarity',
        ],
        correctOptionIndex: 1,
        explanation: 'Standard précis instructions specify compressing the essential thought into about one-third of the source length while supplying an apt title.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which of the following practices is **prohibited** when drafting a high-scoring English précis?',
        options: [
          'Supplying a short thematic title at the top',
          'Adding critical counter-arguments from your own general knowledge not found in the passage',
          'Converting rhetorical questions into concise statements',
          'Writing in continuous third-person prose',
        ],
        correctOptionIndex: 1,
        explanation: 'A précis must faithfully condense ONLY the author’s ideas—never introduce outside opinions, critiques, or illustrative anecdotes.',
        difficulty: 'foundation',
      },
      {
        stem: 'In a reading comprehension question asking *"Which of the following can be inferred from the passage?"*, which trap option should make you **immediately suspicious** unless explicitly proven in text?',
        options: [
          'An option paraphrasing a hedged claim ("may reduce", "frequently contributes")',
          'An option containing rigid extremes ("always", "every single", "completely eliminates", "never")',
          'An option synthesizing two adjacent paragraphs',
          'An option focusing on cause and effect stated by the author',
        ],
        correctOptionIndex: 1,
        explanation: 'Extreme modifiers ("always, never, impossible, sole") usually overreach evidence in academic/editorial passages and represent classic distractor traps.',
        difficulty: 'standard',
      },
      {
        stem: 'In a **Formal Letter**, what is the primary structural role of the **Subject Line** placed right above or below the salutation?',
        options: [
          'To list attachments only',
          'To summarize the core purpose of the letter in one scannable phrase for rapid official routing',
          'To display the writer’s phone number',
          'To thank the recipient in advance',
        ],
        correctOptionIndex: 1,
        explanation: 'A concise Subject Line enables registries and officers to classify, index, and route correspondence immediately.',
        difficulty: 'foundation',
      },
      {
        stem: 'If an original passage quotes a freedom fighter saying, *"We shall never surrender our forest rights!"*, how should this appear in your **précis**?',
        options: [
          'Copied verbatim inside quotation marks',
          'Reported indirectly in third-person summary (e.g., "The protesters vowed firmly to defend their forest rights.")',
          'Translated into poetry',
          'Expanded into two paragraphs of dialogue',
        ],
        correctOptionIndex: 1,
        explanation: 'Précis writing converts direct quotations and first-person declarations into concise third-person indirect narration.',
        difficulty: 'standard',
      },
      {
        stem: 'When asked to identify the **author’s tone** in a passage that outlines hill out-migration statistics calmly alongside policy trade-offs without anger or ridicule, the tone is best described as:',
        options: [
          'Sarcastic and vitriolic',
          'Objective and analytical',
          'Eulogistic',
          'Apologetic',
        ],
        correctOptionIndex: 1,
        explanation: 'Presenting evidence and policy trade-offs in neutral, measured language exemplifies an objective and analytical tone.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **two elements** belong at the very bottom below the signature in an **official government / institutional letter** when accompanying files or copied recipients exist?',
        options: [
          'Postscript jokes only',
          '`Encl:` (Enclosures) and `CC:` / `Copy to:` (Carbon Copy / Endorsement list)',
          'Subject and Salutation',
          'Bibliography and Footnotes',
        ],
        correctOptionIndex: 1,
        explanation: '"Encl." lists attached documents inside the envelope, while "CC / Copy to" lists other officials receiving copies for action or information.',
        difficulty: 'foundation',
      },
      {
        stem: 'What distinguishes a **"Summary"** from a strict civil-service **"Précis"**?',
        options: [
          'A summary must always be written in first person',
          'A précis preserves the original logical sequence and ~1/3 ratio with a title in strict third-person prose, whereas a summary is looser in structure and proportion',
          'A précis has no title',
          'A summary omits the main idea',
        ],
        correctOptionIndex: 1,
        explanation: 'Précis is a disciplined, proportional (~1/3) structural condensation following the original argument’s progression.',
        difficulty: 'standard',
      },
      {
        stem: 'How should the **date** be formatted cleanly in modern **Indian/British formal letters**?',
        options: [
          '15/03/25 or 15th March, 2025',
          '15 March 2025 (unambiguous day–month–year without ordinal suffixes or slashes)',
          'March 15th, \'25',
          '03-15-2025',
        ],
        correctOptionIndex: 1,
        explanation: '"15 March 2025" avoids US/UK numeric month-day ambiguity (03/04 vs 04/03) and keeps punctuation clean.',
        difficulty: 'foundation',
      },
      {
        stem: 'In a **Formal Complaint or Official Request Letter**, what is the ideal organization of the **three body paragraphs**?',
        options: [
          'Three unrelated stories',
          'Para 1: Clear statement of purpose; Para 2: Supporting facts/dates/evidence; Para 3: Specific remedial action requested',
          'Para 1: Signature; Para 2: Date; Para 3: Greeting',
          'Single 400-word unformatted block',
        ],
        correctOptionIndex: 1,
        explanation: 'The classic 3-paragraph official letter structure ensures immediate clarity for busy administrative readers.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **one-sentence error** most commonly ruins a student’s Reading Comprehension **"Best Title"** answer?',
        options: [
          'Choosing an option that covers all paragraphs accurately',
          'Picking a catchy detail mentioned only in a single example sentence while ignoring the core thesis',
          'Avoiding external trivia',
          'Checking the opening and concluding sentences',
        ],
        correctOptionIndex: 1,
        explanation: 'Distractor titles often elevate a vivid anecdote from Paragraph 2 into a false main idea—always verify that the title covers the whole passage.',
        difficulty: 'standard',
      },
      {
        stem: 'In précis writing, how can you compress wordy phrases like *"at the present moment in time"* or *"in spite of the fact that"*?',
        options: [
          'Keep both phrases unchanged to save effort',
          'Replace with concise single words: *"now"* and *"although / despite"*',
          'Use all-caps emphasis',
          'Delete the whole sentence including its verb',
        ],
        correctOptionIndex: 1,
        explanation: 'Replacing circumlocutions ("due to the fact that" -> "because", "in the event that" -> "if") keeps meaning intact while achieving 1/3 compression.',
        difficulty: 'foundation',
      },
      {
        stem: 'When writing an official **Job / Scholarship Cover Letter** addressed to **"The Secretary, Uttarakhand Public Service Commission, Haridwar"**, what does **"Enclosed: Self-attested copies of..."** communicate?',
        options: [
          'That the letter has no attachments',
          'The inventory of supporting certificates/documents attached with the application',
          'That the sender forgot their signature',
          'The office telephone extension',
        ],
        correctOptionIndex: 1,
        explanation: '"Encl." itemizes all annexures/certificates bundled with the formal letter for verification by the receiving desk.',
        difficulty: 'foundation',
      },
    ],
  },
];
