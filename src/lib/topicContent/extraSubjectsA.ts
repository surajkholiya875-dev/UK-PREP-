import { TopicContentPackage } from './types';

export const EXTRA_SUBJECTS_PART_A: TopicContentPackage[] = [
  {
    topicTitle: 'Industrial Revolution, Enlightenment & French/American Revolutions',
    materialTitle: 'Modern World Transformations: Enlightenment, American/French Revolutions & Industrialization — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Enlightenment, Revolutions & Industrial Revolution',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Industrial Revolution, Enlightenment & French/American Revolutions

## 1. The Enlightenment & Ideological Roots of Modern Democracy
- **Core Ethos:** Shift from divine right & feudal dogma to **reason, scientific empiricism, natural rights, and social contract**.
- **Key Thinkers:** **John Locke** (*Life, Liberty, Property*; consent of the governed), **Montesquieu** (*Separation of Powers* — *The Spirit of the Laws*), **Jean-Jacques Rousseau** (*General Will*; *Social Contract*), **Voltaire** (tolerance & free speech), **Adam Smith** (*Wealth of Nations*, 1776 — laissez-faire).

## 2. American (1775–1783) & French (1789) Revolutions
- **American Revolution:** *"No Taxation Without Representation"*; **Declaration of Independence (4 July 1776)** authored by Thomas Jefferson; **Treaty of Paris (1783)**; **World’s First Written Constitution (1787/1789)** with Bill of Rights & federalism.
- **French Revolution (1789):** Driven by **Three Estates inequality** (Clergy & Nobility exempt from taxes while Third Estate starved), fiscal bankruptcy, and Enlightenment ideas.
  - **14 July 1789 (Fall of Bastille)** $\\rightarrow$ **Declaration of the Rights of Man and of the Citizen** (*"Liberty, Equality, Fraternity"* — echoed directly in India’s Constitution Preamble!).
  - **Jacobin Reign of Terror** (Robespierre) $\\rightarrow$ Directory $\\rightarrow$ **Napoleon Bonaparte** (*Napoleonic Code, 1804* — civil equality before law).

## 3. Industrial Revolution (Starting in Britain ~1760s)
- **Why Britain First?** Coal & iron proximity, colonial capital & captive markets, Agricultural Revolution/Enclosure freeing labour, stable banking & maritime supremacy, steam engine (**James Watt**), **Spinning Jenny (Hargreaves)**, **Power Loom (Cartwright)**, railways.
- **Global & Colonial Impacts:** Rapid urbanization & factory working class (inspiring Socialism / Marxism — *Communist Manifesto*, 1848), **deindustrialization of India’s handloom textiles**, and scramble for raw materials/imperial markets.

## 4. Key Revision Takeaways
- **Montesquieu = Separation of Powers**; **Locke = Natural Rights**; **Rousseau = General Will**.
- **French Revolution (1789)** bequeathed **"Liberty, Equality, Fraternity"** to India’s Preamble; **Britain** led the **First Industrial Revolution** via textiles, coal, iron, and steam.`,
    mcqs: [
      {
        stem: 'Which Enlightenment political philosopher formulated the **"Separation of Powers"** doctrine (Legislature, Executive, Judiciary) in *The Spirit of the Laws* (1748)?',
        options: ['Voltaire', 'Baron de Montesquieu', 'Thomas Hobbes', 'Niccolo Machiavelli'],
        correctOptionIndex: 1,
        explanation: 'Montesquieu argued that concentrating legislative, executive, and judicial authority in one hand breeds tyranny—directly shaping the US and Indian constitutional architectures.',
        difficulty: 'foundation',
      },
      {
        stem: 'The iconic Indian Constitutional Preamble ideals of **"Liberty, Equality, and Fraternity"** trace their historic inspiration directly to which 18th-century upheaval?',
        options: [
          'Glorious Revolution (1688)',
          'French Revolution (1789)',
          'Meiji Restoration (1868)',
          'Russian Revolution (1917)',
        ],
        correctOptionIndex: 1,
        explanation: 'The 1789 French Revolution’s *Declaration of the Rights of Man and of the Citizen* championed *Liberté, Égalité, Fraternité*.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why did the **First Industrial Revolution** originate in **mid-18th-century Britain** rather than continental Europe or Asia?',
        options: [
          'Britain had the largest population in Eurasia',
          'A convergence of abundant accessible coal and iron, Agricultural Revolution labour release, maritime trade capital/colonial markets, stable patent/banking institutions, and mechanized textile inventions',
          'Britain abolished steam power',
          'Britain prohibited all imports from colonies',
        ],
        correctOptionIndex: 1,
        explanation: 'Cheap domestic coal, financial institutions (Bank of England), colonial raw cotton/captive markets, and mechanical innovation converged uniquely in Britain.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which colonial grievance served as the rallying cry of the **American War of Independence (1775–1783)** against the British Parliament’s Stamp and Tea Acts?',
        options: [
          '"Land to the Tiller"',
          '"No Taxation Without Representation"',
          '"Peace, Land, and Bread"',
          '"Liberty or Empire"',
        ],
        correctOptionIndex: 1,
        explanation: 'American colonists rejected parliamentary levies because the thirteen colonies held zero elected seats at Westminster.',
        difficulty: 'foundation',
      },
      {
        stem: 'Match the **Industrial Revolution textile/power invention** with its correct inventor: **Spinning Jenny** and improved **Steam Engine** belong respectively to:',
        options: [
          'Karl Marx and Adam Smith',
          'James Hargreaves (1764) and James Watt (1769/1776)',
          'Edmund Cartwright and Eli Whitney',
          'Henry Bessemer and Michael Faraday',
        ],
        correctOptionIndex: 1,
        explanation: 'James Hargreaves built the multi-spindle Spinning Jenny and James Watt added the separate condenser turning steam engines into industrial workhorses.',
        difficulty: 'standard',
      },
      {
        stem: 'How did Britain’s **Industrial Revolution** structurally affect the **economy of 19th-century colonial India**?',
        options: [
          'It built massive steel mills in every Indian village',
          'India suffered "deindustrialization" of artisanal textiles while being turned into an exporter of cheap raw cotton/indigo and importer of duty-free British machine-made cloth',
          'Britain paid protective tariffs to Dhaka weavers',
          'Indian handlooms dominated Manchester markets',
        ],
        correctOptionIndex: 1,
        explanation: 'One-way free trade flooded Indian markets with Lancashire mill cloth while crippling traditional Indian spinners and weavers.',
        difficulty: 'foundation',
      },
      {
        stem: 'Who drafted the **American Declaration of Independence** adopted on **4 July 1776**, famously proclaiming that *"all men are created equal"* with inalienable rights to *"Life, Liberty and the pursuit of Happiness"*?',
        options: ['George Washington', 'Thomas Jefferson', 'Benjamin Franklin', 'Alexander Hamilton'],
        correctOptionIndex: 1,
        explanation: 'Thomas Jefferson drafted the Declaration, drawing strongly upon John Locke’s natural-rights philosophy.',
        difficulty: 'foundation',
      },
      {
        stem: 'In **pre-1789 Ancien Régime France**, which social estate carried **virtually the entire burden of direct land and salt taxation (*Taille, Gabelle*)** despite owning only part of the land?',
        options: [
          'First Estate (Clergy)',
          'Second Estate (Nobility)',
          'Third Estate (Peasants, urban artisans, and the bourgeoisie — ~98% of population)',
          'Royal Guard alone',
        ],
        correctOptionIndex: 2,
        explanation: 'Clergy and Nobility enjoyed feudal tax exemptions while peasants and rising middle classes bore crushing fiscal burdens, sparking the 1789 Estates-General crisis.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **1804 legal codification** abolished feudal privileges, established uniform civil courts and legal equality for male citizens across much of Europe, and later inspired modern civil codes?',
        options: [
          'Magna Carta (1215)',
          'The Napoleonic Code (*Code Civil*, 1804)',
          'Treaty of Westphalia (1648)',
          'Factory Act (1833)',
        ],
        correctOptionIndex: 1,
        explanation: 'Napoleon’s Civil Code entrenched secular equality before law, meritocratic administration, and property rights wherever French armies reorganized Europe.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which treatise published in **1776** by **Adam Smith** critiqued state-hoarding **Mercantilism** and laid the intellectual foundation for modern **free-market capitalism**?',
        options: [
          '*Das Kapital*',
          '*An Inquiry into the Nature and Causes of the Wealth of Nations*',
          '*The Social Contract*',
          '*Utopia*',
        ],
        correctOptionIndex: 1,
        explanation: 'Adam Smith highlighted division of labour, specialization, and market competition ("the invisible hand") in 1776.',
        difficulty: 'foundation',
      },
      {
        stem: 'What political breakthrough did the **1787 Philadelphia Constitutional Convention** pioneer in world constitutional history?',
        options: [
          'Unwritten parliamentary monarchy',
          'The world’s first modern written Republican Federal Constitution featuring explicit checks and balances',
          'Military dictatorship',
          'One-party single-chamber rule',
        ],
        correctOptionIndex: 1,
        explanation: 'The US Constitution (effective 1789) codified federalism, judicial review evolution, and an elected presidential republic.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which ideology emerged in the **19th century** directly in response to **child labour, 16-hour shifts, urban slums, and stark wealth inequality** generated by early unregulated industrial capitalism?',
        options: ['Feudalism', 'Socialism (Utopian Socialism and later Marx–Engels’ Scientific Socialism)', 'Divine Right Absolutism', 'Mercantilism'],
        correctOptionIndex: 1,
        explanation: 'Early social reformers (Robert Owen, Saint-Simon) and Karl Marx & Friedrich Engels (*Communist Manifesto*, 1848) arose to critique industrial exploitation.',
        difficulty: 'foundation',
      },
      {
        stem: 'What **14 July 1789 event** in Paris symbolized the decisive collapse of royal absolutism and is celebrated annually as France’s National Day?',
        options: [
          'Battle of Waterloo',
          'Storming of the Bastille fortress-prison',
          'Coronation of Louis XVI',
          'Tennis Court Oath of 1848',
        ],
        correctOptionIndex: 1,
        explanation: 'Citizens stormed the Bastille medieval fortress for gunpowder and in defiance of royal tyranny on 14 July 1789.',
        difficulty: 'foundation',
      },
      {
        stem: 'How did the **Second Industrial Revolution (late 19th century)** differ technologically from Britain’s **First Industrial Revolution**?',
        options: [
          'It returned exclusively to watermills and wood',
          'It shifted frontiers to **Bessemer steel, electricity, internal combustion engines, petroleum, and synthetic chemicals**, led prominently by **Germany and the USA**',
          'It happened only in South America',
          'It ended railway construction',
        ],
        correctOptionIndex: 1,
        explanation: 'While Britain led the coal-steam-textile First Wave, Germany and the US surged ahead during the electrical-steel-chemical Second Industrial Revolution.',
        difficulty: 'standard',
      },
      {
        stem: 'In **Jean-Jacques Rousseau’s *The Social Contract* (1762)**, legitimate political sovereignty resides permanently in:',
        options: [
          'Hereditary kings alone',
          'The "General Will" of the collective citizenry ("Man is born free, and everywhere he is in chains")',
          'Military generals',
          'Colonial governors',
        ],
        correctOptionIndex: 1,
        explanation: 'Rousseau’s popular sovereignty profoundly shaped both revolutionary France and modern democratic theory.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'World Wars I & II, Russian Revolution & Inter-War Crisis',
    materialTitle: 'Twentieth-Century World Crises: WWI, 1917 Revolution, Inter-War Fascism & WWII — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: WWI, Russian Revolution, Great Depression & WWII',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# World Wars I & II, Russian Revolution & Inter-War Crisis

## 1. World War I (1914–1918) & Treaty of Versailles (1919)
- **Underlying Causes (MAIN):** Militarism, Rival Alliances (*Triple Entente*: Britain–France–Russia vs *Triple Alliance/Central Powers*: Germany–Austria-Hungary–Ottoman Empire), Imperialism, Aggressive Nationalism.
- **Immediate Spark:** Assassination of Austrian Archduke **Franz Ferdinand** at **Sarajevo** (28 June 1914).
- **Indian Connection:** Over **1.3 million Indian soldiers** (including famed Garhwal Rifles — **Darwan Singh Negi VC, Gabar Singh Negi VC** at Neuve Chapelle!) fought across Europe, Mesopotamia, and East Africa!
- **Treaty of Versailles (1919):** Imposed **War Guilt (Article 231)**, heavy reparations, territorial loss, and Rhineland demilitarization on Germany—creating bitter resentment exploited by Hitler; formed **League of Nations** (weakened because the US never joined!).

## 2. The Russian Revolution (1917)
- **February (March) Revolution:** Collapsed **Tsar Nicholas II’s** autocracy amid WWI military disasters, bread shortages, and Peasant–Worker Soviets.
- **October (November) Revolution:** **Vladimir Lenin’s Bolsheviks** (*"Peace, Land, and Bread"*) toppled Kerensky’s Provisional Government, exited WWI via **Treaty of Brest-Litovsk (1918)**, and established the **USSR (1922)** (followed by Stalin’s Five-Year Plans & forced collectivization).

## 3. Inter-War Crisis: Great Depression (1929) & Rise of Fascism
- **1929 Wall Street Crash:** Triggered global trade collapse and mass unemployment; paved the road to **Keynesian fiscal stimulus** (FDR’s *New Deal*) in democracies, while destabilizing Weimar Germany.
- **Totalitarian Dictatorships:** **Benito Mussolini** (*Fascism* in Italy, 1922) and **Adolf Hitler** (*Nazism* in Germany, 1933) capitalized on nationalist humiliation, economic ruin, and anti-communism, while Western powers’ **Appeasement Policy (Munich Pact 1938)** emboldened Nazi aggression.

## 4. World War II (1939–1945) & Birth of the UN
- **Outbreak:** **1 September 1939** (German invasion of Poland using *Blitzkrieg*). **Axis Powers** (Germany–Italy–Japan) vs **Allies** (UK, USSR [post-June 1941 Operation Barbarossa], USA [post-Dec 1941 Pearl Harbor], China, France).
- **End & Aftermath:** Fall of Berlin (May 1945); atomic bombings of **Hiroshima (6 Aug)** & **Nagasaki (9 Aug 1945)**; Nuremberg Trials; and creation of the **United Nations (24 October 1945)** + **Bretton Woods Institutions (IMF & World Bank, 1944)**.

## 5. Key Revision Takeaways
- **1919 Versailles "War Guilt"** sowed seeds of WWII; **Garhwal Rifles** won Victoria Crosses in WWI France (**Darwan Singh Negi & Gabar Singh Negi**).
- **UN founded 24 October 1945**; **League of Nations** failed partly due to **US absence** & lack of enforcement teeth.`,
    mcqs: [
      {
        stem: 'Which **two Garhwal Rifles soldiers** from Uttarakhand earned the **Victoria Cross** for extraordinary valour on the **Western Front (France)** during **World War I (1914–1915)**?',
        options: [
          'Maj. Somnath Sharma and Maj. Shaitan Singh',
          'Naik Darwan Singh Negi (1914) and Rifleman Gabar Singh Negi (Neuve Chapelle, 1915)',
          'Veer Chandra Singh Garhwali and Sridev Suman',
          'Madho Singh Bhandari and Kalu Mahara',
        ],
        correctOptionIndex: 1,
        explanation: 'The 1st/39th and 2nd/39th Garhwal Rifles won everlasting renown at Festubert and Neuve Chapelle, earning Victoria Crosses for Darwan Singh Negi and Gabar Singh Negi.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **immediate assassination event** on **28 June 1914** triggered the alliance cascade that launched **World War I**?',
        options: [
          'Invasion of Poland',
          'Assassination of Austro-Hungarian Archduke Franz Ferdinand in Sarajevo',
          'Sinking of the Lusitania',
          'Attack on Pearl Harbor',
        ],
        correctOptionIndex: 1,
        explanation: 'Bosnian Serb nationalist Gavrilo Princip assassinated Franz Ferdinand, igniting Austria-Hungary’s ultimatum to Serbia and mobilizing European alliances.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why is the **1919 Treaty of Versailles** frequently judged by historians as a major underlying cause of **World War II**?',
        options: [
          'It gave Germany extra colonies',
          'Its punitive "War Guilt Clause" (Article 231), crippling reparations, and territorial losses humiliated Germany and bred economic resentment exploited by Hitler’s Nazis',
          'It dissolved the British Empire immediately',
          'It made Russia pay reparations to Japan',
        ],
        correctOptionIndex: 1,
        explanation: 'Economist J.M. Keynes (*Economic Consequences of the Peace*) warned prophetically that a vindictive "Carthaginian peace" would provoke future catastrophe.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under which compelling **three-word slogan** did **Vladimir Lenin and the Bolsheviks** rally war-weary soldiers, peasants, and factory workers to victory in the **October 1917 Russian Revolution**?',
        options: [
          '"Liberty, Equality, Fraternity"',
          '"Peace, Land, and Bread"',
          '"Blood and Iron"',
          '"Workers of Britain Unite"',
        ],
        correctOptionIndex: 1,
        explanation: '"Peace" (exit WWI immediately), "Land" (redistribute noble estates to peasants), and "Bread" (end urban famine) proved irresistible.',
        difficulty: 'foundation',
      },
      {
        stem: 'What was the fatal structural flaw of the **League of Nations (1920)** compared to the post-1945 **United Nations**?',
        options: [
          'It met inside the USA only',
          'Although proposed by US President Woodrow Wilson, the USA never joined, great-power consensus paralyzed action, and it lacked armed enforcement mechanisms against Japanese/Italian/German aggression',
          'It had too many soldiers',
          'It banned diplomatic treaties',
        ],
        correctOptionIndex: 1,
        explanation: 'Without US membership or credible sanctions/peacekeeping, the League stood helpless as Japan seized Manchuria (1931) and Italy invaded Ethiopia (1935).',
        difficulty: 'standard',
      },
      {
        stem: 'Which infamous **September 1938 diplomatic agreement** epitomized British–French **Appeasement Policy** by allowing Nazi Germany to annex Czechoslovakia’s **Sudetenland** without Prague’s consent?',
        options: [
          'Treaty of Brest-Litovsk',
          'Munich Agreement (1938)',
          'Potsdam Conference',
          'Atlantic Charter',
        ],
        correctOptionIndex: 1,
        explanation: 'Neville Chamberlain’s "peace for our time" at Munich shattered within months when Hitler occupied the rest of Czechoslovakia and invaded Poland.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **economic paradigm shift** gained wide acceptance following the **1929 Great Depression**, championed by **John Maynard Keynes** and reflected in FDR’s **New Deal**?',
        options: [
          'Zero government spending during recessions',
          'Counter-cyclical government fiscal expenditure and public-works job creation to revive collapsed aggregate demand',
          'Returning to barter trade',
          'Raising interest rates to 50%',
        ],
        correctOptionIndex: 1,
        explanation: 'Keynes demonstrated that private markets can remain trapped in low-demand unemployment unless the state steps in to boost spending and confidence.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **specific military event** on **1 September 1939** marks the formal outbreak of **World War II** in Europe?',
        options: [
          'German invasion of Poland (causing Britain and France to declare war on 3 September)',
          'Japanese attack on Pearl Harbor',
          'Normandy D-Day landings',
          'Fall of Stalingrad',
        ],
        correctOptionIndex: 0,
        explanation: 'Immediately following the Nazi–Soviet Non-Aggression Pact (Molotov–Ribbentrop, Aug 1939), Germany launched *Blitzkrieg* against Poland on 1 September 1939.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **two decisive 1941 events** transformed World War II from a largely European–East Asian conflict into a truly global struggle by bringing **both the USSR and the USA** into the Allied coalition?',
        options: [
          'Treaty of Versailles and Munich Pact',
          'Operation Barbarossa (German invasion of USSR, June 1941) and Japanese attack on Pearl Harbor (December 1941)',
          'Fall of France and Battle of Midway',
          'Russian Revolution and Wall Street Crash',
        ],
        correctOptionIndex: 1,
        explanation: 'Hitler broke his non-aggression pact by invading the Soviet Union (June 1941), while Japan’s strike on Pearl Harbor (7 Dec 1941) brought America’s industrial might into both theatres.',
        difficulty: 'foundation',
      },
      {
        stem: 'On which exact date did the **United Nations Charter** formally enter into force (celebrated globally as **United Nations Day**)?',
        options: ['15 August 1945', '24 October 1945', '10 December 1948', '1 January 1946'],
        correctOptionIndex: 1,
        explanation: 'Following the San Francisco Conference, the UN formally came into existence on 24 October 1945 (India was among its original 51 founding members!).',
        difficulty: 'foundation',
      },
      {
        stem: 'What **Soviet–Russian wartime battle (1942–1943)** broke the momentum of the Wehrmacht on the Eastern Front and is widely recognized as the bloodiest military turning point of **World War II**?',
        options: [
          'Battle of Dunkirk',
          'Battle of Stalingrad',
          'Battle of Waterloo',
          'Battle of Gallipoli',
        ],
        correctOptionIndex: 1,
        explanation: 'The Soviet encirclement and surrender of Germany’s Sixth Army at Stalingrad (Feb 1943) turned the tide irreversibly on the Eastern Front.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **two global economic institutions ("Bretton Woods Twins")** were designed at the **1944 Bretton Woods Conference** to stabilize post-war currencies and finance war reconstruction/development?',
        options: [
          'WTO and ASEAN',
          'International Monetary Fund (IMF) and International Bank for Reconstruction and Development (World Bank)',
          'GATT and BRICS Bank',
          'WHO and UNESCO',
        ],
        correctOptionIndex: 1,
        explanation: 'IMF (exchange-rate/BoP stability) and IBRD/World Bank (reconstruction & development loans) formed the post-WWII economic order.',
        difficulty: 'foundation',
      },
      {
        stem: 'What was the **"Policy of Five-Year Plans and Forced Collectivization"** launched in the late 1920s–1930s USSR under **Joseph Stalin** designed to achieve?',
        options: [
          'Restore Tsarist monarchy',
          'Rapid state-directed heavy industrialization and state/collective farming (*Kolkhoz*)—achieving industrial output gains at immense human famine cost in Ukraine/Kazakhstan',
          'Abolish all factories',
          'Join NATO',
        ],
        correctOptionIndex: 1,
        explanation: 'Stalin’s Five-Year Plans transformed the USSR into a heavy industrial power before WWII (even inspiring post-Independence planning concepts worldwide) while causing tragic repression.',
        difficulty: 'standard',
      },
      {
        stem: 'How did the **1941–1945 World War II crisis** directly accelerate **Indian Independence**?',
        options: [
          'It strengthened British colonial finances indefinitely',
          'Britain emerged economically exhausted, while the **Quit India Movement (1942)**, **Subhas Chandra Bose’s INA**, and the **1946 Royal Indian Navy Mutiny** proved colonial rule could no longer rely on Indian armed loyalty',
          'Germany colonized India',
          'The UN gave India to France',
        ],
        correctOptionIndex: 1,
        explanation: 'Imperial exhaustion paired with intense anti-colonial pressure forced Attlee’s Labour government to initiate transfer of power in 1946–1947.',
        difficulty: 'foundation',
      },
      {
        stem: 'What landmark legal precedent did the post-WWII **Nuremberg Trials (1945–1946)** establish in **International Humanitarian Law**?',
        options: [
          'Generals can blame all crimes blindly on "superior orders"',
          'Individuals (heads of state, commanders) bear direct personal criminal liability under international law for War Crimes, Crimes Against Peace, and Crimes Against Humanity',
          'Treaties are non-binding',
          'Only private soldiers face trial',
        ],
        correctOptionIndex: 1,
        explanation: 'The Nuremberg Principles rejected "I was only obeying superior orders" as an absolute shield, founding modern international criminal justice.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Decolonization, Cold War & Fall of the USSR',
    materialTitle: 'Post-1945 World: Decolonization, Non-Aligned Movement, Cold War & 1991 USSR Collapse — Study Notes',
    estimatedMinutes: 25,
    assessmentTitle: 'Practice Assessment: Decolonization, Cold War, NAM & USSR Collapse',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Decolonization, Cold War & Fall of the USSR

## 1. Waves of Afro–Asian Decolonization
- **Asian Wave (1945–1950s):** India & Pakistan (1947), Sri Lanka & Myanmar (1948), Indonesia (1949, Soekarno), Vietnam (Dien Bien Phu 1954 against France).
- **African Wave ("Year of Africa" — 1960):** Starting with **Ghana (1957 — Kwame Nkrumah)**, 17 African nations gained independence in **1960**, culminating later in Lusophone freedom (1975) and ending **South African Apartheid (1994 — Nelson Mandela)**.
- **Neocolonialism Challenge:** Newly independent nations gained political sovereignty yet struggled with debt, single-commodity export dependency, and cold-war proxy interventions.

## 2. Cold War Bipolarity (1947–1991) & Non-Aligned Movement (NAM)
- **Ideological Clash:** USA-led Capitalist/Democratic bloc (**Truman Doctrine, Marshall Plan 1947, NATO 1949**) vs USSR-led Communist bloc (**Warsaw Pact 1955**, COMECON).
- **Flashpoints:** **Berlin Blockade/Wall (1961)**, **Korean War (1950–53)**, **Cuban Missile Crisis (1962 — closest nuclear brink!)**, **Vietnam War**, **Soviet–Afghan War (1979–89)**.
- **Non-Aligned Movement (NAM):**
  - Precursor: **Bandung Afro–Asian Conference (1955)** (*Panchsheel principles!*).
  - Formal Launch: **1961 Belgrade Summit** spearheaded by **Jawaharlal Nehru (India), Josip Broz Tito (Yugoslavia), Gamal Abdel Nasser (Egypt), Kwame Nkrumah (Ghana), and Sukarno (Indonesia)** — maintaining independent foreign policy without joining military pacts!

## 3. Fall of the Berlin Wall (1989) & Dissolution of the USSR (1991)
- **Mikhail Gorbachev’s Twin Reforms (1985):**
  1. ***Glasnost*** (Political openness & press freedom).
  2. ***Perestroika*** (Economic restructuring).
- **Collapse Triggers:** Stagnant command economy, Afghan war bleed, Chernobyl (1986), East European democratic revolutions (**Berlin Wall fell 9 Nov 1989**), and Baltics/Republic nationalism -> **Formal dissolution of USSR into 15 Republics (25–26 December 1991)** -> End of bipolar Cold War -> US Unipolar Moment -> Rise of today’s **Multipolar World** (*India, EU, BRICS, QUAD*).

## 4. Key Revision Takeaways
- **Bandung (1955)** $\\rightarrow$ **Belgrade NAM Founding (1961)** (*Nehru, Tito, Nasser, Nkrumah, Sukarno*).
- **Glasnost & Perestroika** (Gorbachev) preceded **1989 Berlin Wall fall** & **Dec 1991 USSR dissolution**.`,
    mcqs: [
      {
        stem: 'At which **1961 Summit** was the **Non-Aligned Movement (NAM)** formally launched by **Nehru (India), Tito (Yugoslavia), Nasser (Egypt), Sukarno (Indonesia), and Nkrumah (Ghana)**?',
        options: [
          'Geneva Summit',
          'Belgrade Summit (following the 1955 Bandung Afro-Asian Conference)',
          'Yalta Conference',
          'Potsdam Conference',
        ],
        correctOptionIndex: 1,
        explanation: 'Bandung (1955) articulated Afro–Asian anti-colonial solidarity and Panchsheel, while the first official NAM Summit met in Belgrade (Yugoslavia) in September 1961.',
        difficulty: 'foundation',
      },
      {
        stem: 'What did Soviet leader **Mikhail Gorbachev’s** twin 1980s reform policies — **"Glasnost"** and **"Perestroika"** — signify respectively?',
        options: [
          'Nuclear war and military expansion',
          'Political openness/freedom of expression (*Glasnost*) and economic/structural restructuring (*Perestroika*)',
          'Closing borders and banning newspapers',
          'Colonizing Western Europe',
        ],
        correctOptionIndex: 1,
        explanation: 'Gorbachev introduced *Glasnost* (transparency) and *Perestroika* (economic decentralization) to revitalize a stagnant USSR, inadvertently accelerating its democratic breakup.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **1962 superpower confrontation** brought the United States and the Soviet Union closest to full-scale **thermonuclear war**, prompting the installation of the Moscow–Washington "Hotline"?',
        options: [
          'Suez Crisis (1956)',
          'Cuban Missile Crisis (October 1962)',
          'Korean Armistice',
          'Berlin Airlift (1948)',
        ],
        correctOptionIndex: 1,
        explanation: 'The discovery of Soviet nuclear missiles in Cuba led JFK and Khrushchev through a 13-day standoff resolved by Soviet withdrawal and US non-invasion/Turkey-missile pledges.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which two rival **Cold War military alliances** were formed in **1949** and **1955** respectively?',
        options: [
          'QUAD (1949) and BRICS (1955)',
          'NATO (North Atlantic Treaty Organization, 1949) and the Warsaw Pact (1955)',
          'SEATO (1949) and NAM (1955)',
          'SCO and ASEAN',
        ],
        correctOptionIndex: 1,
        explanation: 'NATO (collective Western defence, 1949) was countered by the Soviet-led Warsaw Pact (1955) after West Germany joined NATO.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why was the year **1960** celebrated historically as the **"Year of Africa"**?',
        options: [
          'Apartheid ended in South Africa in 1960',
          'Seventeen African nations gained formal political independence from European colonial empires in that single year',
          'Africa formed a single federation',
          'All colonial debts were paid off in 1960',
        ],
        correctOptionIndex: 1,
        explanation: 'Following Ghana (1957) and Guinea (1958), seventeen French, British, and Belgian territories in Africa achieved independence in 1960.',
        difficulty: 'foundation',
      },
      {
        stem: 'What was the **Marshall Plan (European Recovery Program, 1948)** launched by the United States?',
        options: [
          'A Soviet five-year farm plan',
          'Massive US financial and reconstruction aid (~$13 billion) to rebuild war-shattered Western European economies and contain communist influence',
          'A partition treaty for Korea',
          'An Antarctic research accord',
        ],
        correctOptionIndex: 1,
        explanation: 'Paired with the Truman Doctrine (1947), the Marshall Plan rapidly revived Western European industry while hardening East–West division.',
        difficulty: 'foundation',
      },
      {
        stem: 'On which iconic date did **East and West Berliners dismantle the Berlin Wall**, symbolizing the collapse of the **Iron Curtain**?',
        options: [
          '24 October 1945',
          '9 November 1989',
          '26 December 1991',
          '4 July 1976',
        ],
        correctOptionIndex: 1,
        explanation: 'Erected in August 1961, the Berlin Wall fell on 9 November 1989, paving the way for German reunification in October 1990.',
        difficulty: 'foundation',
      },
      {
        stem: 'When the **USSR officially dissolved in December 1991**, how many independent successor **Republics** emerged (including Russia, Ukraine, and Central Asian states)?',
        options: ['5 Republics', '10 Republics', '15 Republics', '28 Republics'],
        correctOptionIndex: 2,
        explanation: 'The Soviet Union dissolved into 15 sovereign states on 25–26 December 1991, with the Russian Federation inheriting the USSR’s UN Security Council seat.',
        difficulty: 'foundation',
      },
      {
        stem: 'What **1954 Indo–Chinese diplomatic principles** later formed the moral backbone of the **1955 Bandung Conference** and **NAM**?',
        options: [
          'Treaty of Versailles',
          'Panchsheel (Five Principles of Peaceful Coexistence)',
          'Monroe Doctrine',
          'Bretton Woods Accord',
        ],
        correctOptionIndex: 1,
        explanation: 'Mutual respect for sovereignty/territorial integrity, non-aggression, non-interference, equality/mutual benefit, and peaceful coexistence defined Panchsheel.',
        difficulty: 'foundation',
      },
      {
        stem: 'In post-decolonization economics, what does **"Neo-Colonialism"** (a term coined by Kwame Nkrumah) describe?',
        options: [
          'Sending astronauts to Mars',
          'Indirect economic, financial, technological, and corporate dominance exercised over formally sovereign developing states by wealthy powers or MNCs',
          'Rebuilding medieval castles',
          'Replacing flags annually',
        ],
        correctOptionIndex: 1,
        explanation: 'Despite political independence, unequal terms of trade, debt traps, and external resource extraction continued constraining former colonies.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **1954 military defeat** compelled **France** to withdraw from northern **Vietnam (Indochina)** under the Geneva Accords (eventually leading to US military intervention in the 1960s)?',
        options: [
          'Battle of Midway',
          'Battle of Dien Bien Phu',
          'Battle of El Alamein',
          'Siege of Sarajevo',
        ],
        correctOptionIndex: 1,
        explanation: 'Ho Chi Minh’s Viet Minh forces defeated the French garrison at Dien Bien Phu in May 1954.',
        difficulty: 'standard',
      },
      {
        stem: 'How did the **1991 collapse of the USSR** impact India’s **foreign policy and economic trajectory** simultaneously?',
        options: [
          'India stopped all foreign trade',
          'Loss of assured Soviet rupee-rouble defence/trade patronage coincided with India’s 1991 LPG economic reforms and strategic diversification toward the US, EU, Israel, ASEAN, and Russia alike',
          'India joined the Warsaw Pact',
          'India ended NAM participation permanently',
        ],
        correctOptionIndex: 1,
        explanation: 'India transitioned smoothly to "multi-alignment" and strategic autonomy in a post-Cold War multipolar world while balancing ties with Russia and Western/Indo-Pacific partners.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **West African British colony** became the **first sub-Saharan African nation** to achieve independence in **1957** under **Kwame Nkrumah**?',
        options: ['Kenya', 'Ghana (formerly Gold Coast)', 'Nigeria', 'Zimbabwe'],
        correctOptionIndex: 1,
        explanation: 'Ghana’s independence in March 1957 catalyzed liberation across sub-Saharan Africa.',
        difficulty: 'foundation',
      },
      {
        stem: 'How does **Non-Alignment (NAM)** differ fundamentally from passive **"Isolationism or Neutrality"**?',
        options: [
          'Non-aligned nations refuse to speak at the UN',
          'Non-Alignment meant rejecting Cold War military blocs while actively engaging on global issues—championing anti-colonialism, disarmament, and justice on case-by-case merit',
          'Neutrality means joining NATO',
          'Non-Alignment prohibited domestic armies',
        ],
        correctOptionIndex: 1,
        explanation: 'Nehru emphasized that Non-Alignment was NOT passive neutrality—it preserved independent diplomatic judgement in world affairs.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **1979–1989 Cold War quagmire**, often termed the *"Soviet Union’s Vietnam"*, drained Soviet finances and military morale shortly before the 1991 collapse?',
        options: [
          'Suez Canal Crisis',
          'Soviet–Afghan War',
          'Falklands War',
          'Gulf War of 1991',
        ],
        correctOptionIndex: 1,
        explanation: 'A decade-long guerrilla war in Afghanistan worsened Soviet fiscal exhaustion alongside falling global oil prices in the 1980s.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Himalayan & Coastal Border Management Challenges',
    materialTitle: 'India’s Border Management: Himalayan Frontiers (Uttarakhand), Maritime Security & VVP — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Border Forces, Uttarakhand Borders, BRO & Coastal Security',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Himalayan & Coastal Border Management Challenges

## 1. India’s Land & Maritime Frontier Architecture
- **Total Borders:** **15,106.7 km** land boundary across 7 neighbours (**Bangladesh longest ~4,096.7 km**, China 3,488 km, Pakistan 3,323 km, Nepal 1,751 km, Myanmar 1,643 km, Bhutan 699 km, Afghanistan 106 km) + **7,516.6 km** coastline.
- **"One Border, One Force" Doctrine (Kargil Review Committee / GoM 2001):**
  - **BSF:** Pakistan & Bangladesh borders.
  - **ITBP (Indo-Tibetan Border Police):** **China (LAC — including Uttarakhand’s Uttarkashi, Chamoli, Pithoragarh!)** border.
  - **SSB (Sashastra Seema Bal):** **Nepal & Bhutan** open/friendly borders (including **Uttarakhand’s Pithoragarh, Champawat, US Nagar**!).
  - **Assam Rifles:** Myanmar border.

## 2. Himalayan Border Management Challenges (Uttarakhand Strategic Lens!)
- **Uttarakhand’s Two International Borders (~625 km total):**
  - **~350 km with China/Tibet** (Uttarkashi: *Nelang/Thagla/Tsangchok*; Chamoli: *Mana/Niti/Barahoti*; Pithoragarh: *Kungri-Bingri/Lipulekh*).
  - **~275 km open border with Nepal** along the **Kali (Mahakali) River** (Pithoragarh, Champawat, US Nagar).
- **Key Risks & Responses:** High-altitude harsh terrain & seasonal snow cut-off; porous Nepal border smuggling/fake currency/human trafficking; **reverse migration emptying frontier villages!**
- **Strategic Upgrades:**
  - **BRO (Border Roads Organisation):** High-altitude black-top roads (*Dharchula–Lipulekh*, *Joshimath–Malari–Rimkhim*, *Harsil–Nelang*), all-weather tunnels.
  - **Vibrant Villages Programme (VVP, 2023):** Centrally Sponsored Scheme transforming northern frontier hamlets (**Mana, Niti, Nelang, Gunji, Kuti** in Uttarakhand!) with 4G telecom, solar microgrids, heritage eco-tourism, and year-round livelihoods so border residents serve as **"Eyes and Ears"** of security!
  - **BADP (Border Area Development Programme)** & **CIBMS** (Comprehensive Integrated Border Management System — laser/thermal/radar *"Smart Fencing"*).

## 3. Coastal & Maritime Border Security (~7,516.6 km)
- **3-Tier Architecture (strengthened post-26/11 Mumbai 2008):** Outer Sea (**Indian Navy**) $\\rightarrow$ Territorial/EEZ (**Indian Coast Guard — ICG**) $\\rightarrow$ Shallow/Shoreline (**State Marine Police**).
- **Technological Shields:** **IMAC** (Information Management & Analysis Centre, Gurugram), **IFC-IOR** (Information Fusion Centre – Indian Ocean Region), Coastal Radar Chain, AIS transponders, Biometric ID cards for fishers.

## 4. Key Revision Takeaways
- **ITBP = China (LAC)**; **SSB = Nepal & Bhutan**; **BSF = Pakistan & Bangladesh**; **Assam Rifles = Myanmar**.
- **Vibrant Villages Programme (VVP)** counters border depopulation in frontier districts (**Uttarkashi, Chamoli, Pithoragarh**).`,
    mcqs: [
      {
        stem: 'Under India’s **"One Border, One Force"** doctrine, which **two Central Armed Police Forces (CAPFs)** guard **Uttarakhand’s China (Tibet) border** and **Nepal border** respectively?',
        options: [
          'BSF and CRPF',
          'ITBP (Indo-Tibetan Border Police) along China/LAC and SSB (Sashastra Seema Bal) along Nepal',
          'CISF and Assam Rifles',
          'NSG and RPF',
        ],
        correctOptionIndex: 1,
        explanation: 'ITBP guards the 3,488-km India–China border (including Barahoti, Mana, Niti, Nelang, Lipulekh in UK), while SSB guards open borders with Nepal and Bhutan.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the core strategic security logic behind the Union Government’s **Vibrant Villages Programme (VVP)** covering frontier hamlets like **Mana, Niti, Nelang, and Gunji** in Uttarakhand?',
        options: [
          'Evacuating all border civilians permanently',
          'Providing all-weather roads, 4G telecom, health, and eco-tourism livelihoods to arrest border out-migration so thriving civilian communities act as "eyes and ears" alongside border forces',
          'Closing international passes to local villagers',
          'Building coastal ports in mountains',
        ],
        correctOptionIndex: 1,
        explanation: 'Uninhabited frontier valleys create security blind spots; VVP (launched 2023 along northern states/UTs bordering China) stabilizes civilian life at zero-mile borders.',
        difficulty: 'foundation',
      },
      {
        stem: 'Among India’s seven land neighbours (**15,106.7 km** total land border), with which country does India share its **longest** and **shortest** international boundaries respectively?',
        options: [
          'China (longest) and Nepal (shortest)',
          'Bangladesh (~4,096.7 km — longest) and Afghanistan (~106 km Wakhan corridor — shortest)',
          'Pakistan (longest) and Bhutan (shortest)',
          'Myanmar (longest) and China (shortest)',
        ],
        correctOptionIndex: 1,
        explanation: 'Order: Bangladesh (4,096.7 km) > China (3,488) > Pakistan (3,323) > Nepal (1,751) > Myanmar (1,643) > Bhutan (699) > Afghanistan (106).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **three districts of Uttarakhand** share a high-altitude frontier with **China (Tibet)**, and which **three** touch **Nepal**?',
        options: [
          'China: Dehradun, Haridwar, Nainital; Nepal: Almora, Bageshwar, Tehri',
          'China: Uttarkashi, Chamoli, Pithoragarh; Nepal: Pithoragarh, Champawat, Udham Singh Nagar',
          'China: Tehri, Pauri, Chamoli; Nepal: Nainital, Almora, Champawat',
          'China: Pithoragarh only; Nepal: Dehradun only',
        ],
        correctOptionIndex: 1,
        explanation: 'Uttarkashi, Chamoli, and Pithoragarh border China (~350 km), while Pithoragarh, Champawat, and US Nagar border Nepal (~275 km), with Pithoragarh touching BOTH!',
        difficulty: 'foundation',
      },
      {
        stem: 'What are the **three concentric maritime security tiers** protecting India’s **7,516.6-km coastline** following post-26/11 (2008) reforms?',
        options: [
          'BSF, ITBP, and Customs',
          'State Marine Police (shallow coast up to ~12 nm), Indian Coast Guard (Territorial Waters & EEZ), and Indian Navy (Deep Blue Water defence)',
          'CRPF, CISF, and Railway Police',
          'Private shipping companies only',
        ],
        correctOptionIndex: 1,
        explanation: 'Integrated coordination among State Marine Police, ICG, Navy, and fisheries agencies closes coastal infiltration gaps.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **disputed pasture sector** in **Chamoli district (Uttarakhand)** — historically demilitarized/patrolled carefully along the Middle Sector of the **Line of Actual Control (LAC)** — requires vigilant seasonal monitoring by **ITBP**?',
        options: ['Doklam', 'Barahoti (Wu-Je)', 'Tawang', 'Galwan'],
        correctOptionIndex: 1,
        explanation: 'Barahoti (~80 sq km high-altitude meadow in Chamoli) is the primary Middle Sector LAC sensitivity point in Uttarakhand.',
        difficulty: 'standard',
      },
      {
        stem: 'What does **CIBMS (Comprehensive Integrated Border Management System)** deploy where rugged riverine, marshy, or mountainous terrain makes traditional barbed-wire fencing unreliable?',
        options: [
          'Wooden watchtowers only',
          'Integrated thermal imagers, ground/foliage radars, laser/optical sensors, drones, and centralized command links ("Smart Fencing")',
          'Paper patrol logs only',
          'Stopping border roads completely',
        ],
        correctOptionIndex: 1,
        explanation: 'CIBMS supplements physical patrols in hard riverine/mountain patches (like Brahmaputra/Jammu/marshy sectors) with 24x7 sensor fusion.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **engineering organization under the Ministry of Defence** constructs and maintains strategic Himalayan frontier roads like **Dharchula–Lipulekh** and **Mana Pass**?',
        options: [
          'NHAI only',
          'Border Roads Organisation (BRO — established 1960)',
          'CPWD',
          'Indian Railways',
        ],
        correctOptionIndex: 1,
        explanation: 'BRO executes critical frontier highways, modular bridges, and strategic tunnels (*Project Shivalik / Hirak / Deepak* in Uttarakhand & HP!).',
        difficulty: 'foundation',
      },
      {
        stem: 'Why does India’s **1,751-km open border with Nepal** (governed by the **1950 Treaty of Peace and Friendship** permitting passport-free movement) pose distinct policing challenges for **SSB** in Champawat/US Nagar/Pithoragarh?',
        options: [
          'Because Nepal is an island',
          'Because friendly, visa-free cultural/economic transit must remain smooth for honest citizens while screening against third-country infiltration, counterfeit currency, narcotics, and human trafficking',
          'Because SSB uses nuclear submarines there',
          'Because no roads cross the border',
        ],
        correctOptionIndex: 1,
        explanation: 'Open borders require high-precision intelligence, joint border checks, and friendly community policing rather than militarized closure.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Gurugram-based maritime intelligence nerve centre**, jointly run by the **Indian Navy and Coast Guard**, aggregates coastal radar, AIS, and satellite feeds into a unified **Maritime Domain Awareness (MDA)** picture?',
        options: ['CERT-In', 'IMAC (Information Management and Analysis Centre) & IFC-IOR', 'NTRO Space Lab', 'SEBI Vault'],
        correctOptionIndex: 1,
        explanation: 'IMAC (2014) and IFC-IOR (2018) fuse real-time vessel tracking across the Indian Ocean Region with partner nations.',
        difficulty: 'standard',
      },
      {
        stem: 'What was the core objective behind amending **India’s Free Movement Regime (FMR)** policy norms along the **1,643-km Myanmar border** in **2024**?',
        options: [
          'Opening borders to Europe',
          'Regulating cross-border travel and initiating selective fencing/biometric documentation to curb insurgent safe havens, arms smuggling, and narcotic flows in the North-East',
          'Banning domestic airlines',
          'Dissolving Assam Rifles',
        ],
        correctOptionIndex: 1,
        explanation: 'Tightening FMR and border fencing along Manipur–Mizoram–Nagaland balances ethnic kinship needs with counter-insurgency and narco-interdiction.',
        difficulty: 'standard',
      },
      {
        stem: 'Why is **Dual-Use Border Infrastructure** (heliports, 4G towers, all-weather tunnels like **Zojila, Sela, Silkyara–Barkot**, and grid electricity) critical for both **Military Logistics and Civilian Welfare**?',
        options: [
          'It separates troops completely from roads',
          'Smooth logistics cuts troop mobilization lead-times during standoffs while simultaneously transforming mountain healthcare, horticulture transport, and tourism incomes',
          'Tunnels stop snowfall outside',
          '4G only works in summer',
        ],
        correctOptionIndex: 1,
        explanation: 'Strategic dual-use assets solve the historic lag in northern border connectivity compared to infrastructure across the LAC.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under which **central ministry** do all **Border Guarding CAPFs (BSF, ITBP, SSB)** operate administratively in peacetime (even when operational coordination links with the Army)?',
        options: [
          'Ministry of External Affairs',
          'Ministry of Home Affairs (MHA)',
          'Ministry of Finance',
          'Ministry of Defence directly for SSB',
        ],
        correctOptionIndex: 1,
        explanation: 'All CAPFs fall under the Ministry of Home Affairs (Assam Rifles has dual control: MHA administrative control and Indian Army/MoD operational control).',
        difficulty: 'foundation',
      },
      {
        stem: 'What **biometric coastal safeguard** was rolled out post-2008 for millions of Indian marine fishermen to help **Coast Guard / Marine Police** distinguish genuine fishers from hostile boats?',
        options: [
          'Aadhaar only on land',
          'Biometric Fishermen ID Cards paired with colour-coding of fishing vessels and Automatic Identification System (AIS) transponders',
          'Passport visas inside harbours',
          'Banning all small fishing boats',
        ],
        correctOptionIndex: 1,
        explanation: 'Biometric IDs, state-wise hull colour codes, and vessel transponders prevent hijacked boats from slipping undetected toward urban ports.',
        difficulty: 'standard',
      },
      {
        stem: 'Why did the **1999 Kargil Review Committee** recommend establishing a unified **Department of Border Management** inside the **MHA**?',
        options: [
          'To privatize border posts',
          'To end fragmented multi-agency turf gaps and integrate "One Border One Force" policing, infrastructure, and coastal/land vigilance under unified oversight',
          'To abolish customs inspections',
          'To reduce maritime patrol',
        ],
        correctOptionIndex: 1,
        explanation: 'Established in 2004 following the GoM report on National Security, the Department of Border Management coordinates fencing, floodlighting, BADP/VVP, and integrated check posts.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Cyber Security, Money Laundering & Terror Financing',
    materialTitle: 'Cyber Defence, CERT-In, PMLA, FATF & Cryptographic Security — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Cyber Security, CERT-In, PMLA & Terror Financing',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Cyber Security, Money Laundering & Terror Financing

## 1. India’s Cyber Security Threats & Institutional Shield
- **Key Threats:** *Ransomware* (encrypting hospital/grid servers for ransom), *Phishing/Smishing* (credential theft), *Zero-Day Exploits*, *DDoS*, *State-sponsored APTs* targeting **Critical Information Infrastructure (CII)** — power grids, telecom, banking, hydropower dams (**Tehri/Vishnuprayag SCADA**!).
- **Legal Backbone:** **Information Technology (IT) Act, 2000** (amended 2008):
  - **Sec. 66F:** Cyber Terrorism (up to life imprisonment).
  - **Sec. 70:** Protection of **Critical Information Infrastructure (CII)** via **NCIIPC**.
  - **Digital Personal Data Protection (DPDP) Act, 2023:** Fiduciary consent & breach penalties.
- **Apex Cyber Institutions:**
  - **CERT-In** (*Indian Computer Emergency Response Team*, MeitY): 24x7 national nodal incident agency (**6-hour cyber-incident reporting rule!**).
  - **NCIIPC** (*National Critical Information Infrastructure Protection Centre* — under **NTRO**): Protects CII sectors.
  - **I4C** (*Indian Cyber Crime Coordination Centre*, MHA): Combats online financial/UPI fraud (**Helpline 1930** & \`cybercrime.gov.in\`).

## 2. Money Laundering (**PMLA 2002**) & Terror Financing (**FATF**)
- **Three Stages of Money Laundering:**
  1. **Placement:** Introducing dirty illicit cash into the financial system (*smurfing, shell businesses*).
  2. **Layering:** Complex cross-border transfers, shell companies, crypto mixers, hawala to obscure origin.
  3. **Integration:** Re-entering clean-looking legitimate assets (luxury real estate, hospitality, stocks).
- **Indian Legal Arsenal:**
  - **Prevention of Money Laundering Act (PMLA), 2002** (enforced by **Enforcement Directorate — ED**; attachment of proceeds of crime; FIU-IND financial intelligence tracking; upheld in *Vijay Madanlal Choudhary*, 2022).
  - **UAPA (Unlawful Activities Prevention Act, 1967)** — criminalizes raising/routing terror funds.
  - **FEMA (1999)** & **Benami Transactions Prohibition Act (amended 2016)**.
- **Global Standard-Setter:** **FATF (Financial Action Task Force, Paris, 1989)** — maintains **Grey List** (*Jurisdictions under Increased Monitoring*) and **Black List** (*High-Risk Jurisdictions*, e.g., North Korea, Iran, Myanmar); India is a full member since **2010**!

## 3. Key Revision Takeaways
- **CERT-In = 6-hour incident reporting**; **NCIIPC = Critical Information Infrastructure (Sec. 70 IT Act)**; **1930 = Cyber financial fraud helpline (I4C)**.
- **Money Laundering 3 Stages = Placement -> Layering -> Integration**; **ED enforces PMLA 2002**; **FATF = Paris watchdog**.`,
    mcqs: [
      {
        stem: 'What are the **three sequential stages** of **Money Laundering** globally recognized by **FATF** and the **Enforcement Directorate (ED)**?',
        options: [
          'Taxation, Budgeting, Auditing',
          'Placement, Layering, and Integration',
          'Mining, Refining, Exporting',
          'Arrest, Bail, Conviction',
        ],
        correctOptionIndex: 1,
        explanation: 'Illicit cash is first *placed* into banks/cash fronts, *layered* via complex shell transfers/crypto to erase trails, and *integrated* back as seemingly legitimate property or business capital.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **specialized technical agency** operating under the **National Technical Research Organisation (NTRO)** is statutorily designated under **Section 70A of the IT Act, 2000** to protect India’s **Critical Information Infrastructure (CII)** (power grids, banking, railways, defence)?',
        options: ['I4C', 'NCIIPC (National Critical Information Infrastructure Protection Centre)', 'SEBI', 'TRAI'],
        correctOptionIndex: 1,
        explanation: 'While CERT-In handles broad public/private cyber incidents, NCIIPC specifically shields designated Critical Information Infrastructure (CII) from strategic sabotage.',
        difficulty: 'foundation',
      },
      {
        stem: 'What **national toll-free cybercrime helpline** operated under the **MHA’s I4C (Indian Cyber Crime Coordination Centre)** allows victims of UPI/banking fraud to **immediately freeze defrauded funds** during the "golden hour"?',
        options: ['1098', '1930', '1905', '1070'],
        correctOptionIndex: 1,
        explanation: 'Calling 1930 promptly triggers rapid inter-bank lien-marking via the Citizen Financial Cyber Fraud Reporting and Management System before siphoned funds leave accounts.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under **CERT-In’s 2022 Cyber Security Directions**, within how many hours must service providers, data centres, and corporate entities mandatorily report specified **cyber incidents** (like ransomware or data leaks) to **CERT-In**?',
        options: ['72 hours', '6 hours of noticing/being notified of the incident', '30 days', '90 days'],
        correctOptionIndex: 1,
        explanation: 'CERT-In mandates 6-hour incident reporting alongside maintaining synchronized NTP server clocks and 180-day Indian log retention.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **intergovernmental global watchdog** headquartered in **Paris** sets binding Anti-Money Laundering (AML) and Counter-Terrorist Financing (CFT) standards via its **"Grey List"** and **"Black List"**?',
        options: ['IMF', 'FATF (Financial Action Task Force)', 'WTO', 'UNESCO'],
        correctOptionIndex: 1,
        explanation: 'Founded by G7 in 1989 (with India becoming a full member in 2010), FATF’s mutual evaluations impose severe global banking/FDI friction on non-compliant jurisdictions.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **primary Indian investigative agency** enforces the **Prevention of Money Laundering Act (PMLA), 2002** and attaches "proceeds of crime"?',
        options: [
          'CBI only',
          'Enforcement Directorate (ED, Department of Revenue, Ministry of Finance)',
          'National Human Rights Commission',
          'Comptroller and Auditor General',
        ],
        correctOptionIndex: 1,
        explanation: 'The Enforcement Directorate investigates PMLA (money laundering) and FEMA (foreign exchange contraventions) cases while **FIU-IND** supplies Suspicious Transaction Reports (STRs).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Section of the Information Technology (IT) Act, 2000** defines and penalizes **"Cyber Terrorism"** (threatening national unity, security, or CII with up to **imprisonment for life**)?',
        options: ['Section 43', 'Section 66F', 'Section 79', 'Section 80'],
        correctOptionIndex: 1,
        explanation: 'Inserted by the 2008 IT Amendment Act, Section 66F criminalizes cyber attacks causing death, CII disruption, or danger to sovereignty/security.',
        difficulty: 'standard',
      },
      {
        stem: 'What distinguishes **"Ransomware"** from passive **"Spyware"** in enterprise cyber threats?',
        options: [
          'Ransomware improves hard-disk speed',
          'Ransomware maliciously encrypts critical files/systems (and often exfiltrates data for "double extortion") demanding ransom to unlock, whereas Spyware silently steals credentials/surveillance covertly',
          'Spyware blocks only Bluetooth speakers',
          'Both are harmless antivirus updates',
        ],
        correctOptionIndex: 1,
        explanation: 'Ransomware attacks on hospitals and municipal utilities highlight the urgency of offline/immutable backups and zero-trust network segmentation.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the statutory role of **FIU-IND (Financial Intelligence Unit – India)** in anti-money-laundering & terror-financing surveillance?',
        options: [
          'Printing currency notes',
          'Receiving, analyzing, and disseminating Cash Transaction Reports (CTRs) & Suspicious Transaction Reports (STRs) from banks, crypto exchanges (VDA SPs), and intermediaries to enforcement agencies',
          'Conducting parliamentary elections',
          'Auditing university exams',
        ],
        correctOptionIndex: 1,
        explanation: 'FIU-IND serves as India’s central financial-intelligence clearinghouse linking reporting entities (including Virtual Digital Asset providers brought under PMLA in 2023!) with ED, CBI, and NIA.',
        difficulty: 'standard',
      },
      {
        stem: 'Why are **Virtual Digital Assets (cryptocurrencies), darknet markets, and informal *Hawala* networks** particularly challenging for Counter-Terrorist Financing (CTF)?',
        options: [
          'Because they carry physical brass stamps',
          'Cross-border pseudonymity, rapid peer-to-peer transfers bypassing KYC banking rails, and zero-paper trust settlements evade conventional border customs checks',
          'Because banks have infinite cash',
          'Because Hawala only operates in Antarctica',
        ],
        correctOptionIndex: 1,
        explanation: 'Extending PMLA KYC/STR obligations to crypto exchanges and enforcing FATF’s "Travel Rule" aim directly at curbing illicit cross-border virtual flows.',
        difficulty: 'foundation',
      },
      {
        stem: 'In a **"Zero-Day Vulnerability"** cyber attack, why are defenders initially most exposed?',
        options: [
          'It lasts zero seconds',
          'Attack exploits an unknown software flaw BEFORE the vendor has developed or distributed a security patch ("zero days" of prior warning/fix)',
          'Antivirus software expires at midnight',
          'Only old computers from 1990 are affected',
        ],
        correctOptionIndex: 1,
        explanation: 'Zero-day threats require behavioural endpoint detection, least-privilege micro-segmentation, and rapid emergency patching once disclosed.',
        difficulty: 'standard',
      },
      {
        stem: 'What does **"Smurfing"** (structuring) refer to in the **Placement stage** of money laundering?',
        options: [
          'Stealing ATMs with bulldozers',
          'Breaking large bundles of illegal cash into dozens of small deposits just below mandatory Cash Transaction Reporting (CTR) thresholds across multiple mule accounts',
          'Minting gold coins',
          'Buying sovereign green bonds cleanly',
        ],
        correctOptionIndex: 1,
        explanation: 'Structuring/smurfing attempts to slip beneath automated reporting thresholds, which banks counter via behavioural STR pattern detection.',
        difficulty: 'standard',
      },
      {
        stem: 'How does India’s **Defence Cyber Agency (DCyA)** complement civilian **CERT-In** and **NCIIPC**?',
        options: [
          'DCyA regulates movie streaming',
          'DCyA is a Tri-Service military command safeguarding armed forces C4ISR networks and cyber warfare readiness',
          'DCyA audits municipal property taxes',
          'DCyA manages post offices',
        ],
        correctOptionIndex: 1,
        explanation: 'Approved in 2019 under Headquarters Integrated Defence Staff, DCyA handles military cyber defence alongside civilian CERT-In and NCIIPC.',
        difficulty: 'standard',
      },
      {
        stem: 'Why was bringing **Virtual Digital Asset (VDA) Service Providers** explicitly under **PMLA reporting obligations in March 2023** a decisive compliance step?',
        options: [
          'To ban calculators',
          'To mandate strict KYC, transaction record retention, and STR filing with FIU-IND by crypto platforms operating in India',
          'To issue crypto salaries to MPs',
          'To abolish GST',
        ],
        correctOptionIndex: 1,
        explanation: 'Aligning VDA intermediaries with PMLA aligns India with FATF Recommendation 15 on virtual-asset AML/CFT oversight.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **two-pronged cybersecurity framework** minimizes catastrophic damage even if a phishing email tricks one employee inside a Secretariat or district collectorate?',
        options: [
          'Writing passwords on desk sticky notes',
          'Multi-Factor Authentication (MFA / Phishing-resistant hardware tokens) + Least-Privilege Access ("Zero Trust") + Regular Immutable Backups',
          'Connecting all servers to public open Wi-Fi',
          'Disabling OS security updates',
        ],
        correctOptionIndex: 1,
        explanation: 'MFA blocks stolen single-password logins, while Zero Trust compartmentalization prevents lateral ransomware spread.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Left-Wing Extremism, Insurgency & Security Forces Mandate',
    materialTitle: 'Internal Security Architecture: LWE, North-East Insurgency, NIA, AFSPA & Police Reforms — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: LWE SAMADHAN, Security Forces, NIA & Police Reforms',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Left-Wing Extremism, Insurgency & Security Forces Mandate

## 1. Left-Wing Extremism (LWE / Naxalism) & Multi-Pronged Response
- **Origin:** **1967 Naxalbari peasant uprising (West Bengal)** (*Charu Majumdar, Kanu Sanyal*); 2004 merger into **CPI (Maoist)** targeting the "Red Corridor" (Chhattisgarh–Jharkhand–Odisha–Maharashtra–Telangana forested tribal pockets) exploiting historical forest/mining grievances & governance vacuums.
- **Twin-Track Counter-Strategy (*Security + Development*):**
  - **SAMADHAN Doctrine (2017):** *Smart leadership, Aggressive strategy, Motivation & training, Actionable intelligence, Dashboard-based KPIs, Harnessing technology, Action plan for each theatre, No access to financing*.
  - **Developmental Push:** Road Connectivity Project for LWE Areas, mobile/4G towers, **Eklavya Schools (EMRS)**, **Forest Rights Act (2006)**, Aspirational Districts Programme, and **Surrender-cum-Rehabilitation Policies** — yielding steep >70% drop in LWE violence & districts!

## 2. Insurgency in the North-East & Jammu–Kashmir Proxy War
- **North-East:** Historic ethnic autonomy movements (NSCN, ULFA, Meitei/Kuki dynamics, porous Myanmar hills); tackled via **Autonomous District Councils (6th Schedule)**, calibrated **Peace Accords** (Mizo 1986, Bodo 2020, Karbi/Dimasa), Act East connectivity, and phasing down **AFSPA** as normalcy returns.
- **AFSPA (Armed Forces Special Powers Act, 1958):** Invoked only in declared **"Disturbed Areas"** (*State/Governor or MHA*); Supreme Court (*Naga People’s Movement*, 1997 & 2016) mandated strict safeguards ("Do’s & Don’ts") and investigation of alleged excesses.

## 3. Mandate of Central Security & Investigation Forces
- **CRPF:** Principal internal security, counter-insurgency, anti-LWE (*CoBRA* jungle units), and law-and-order aid to states.
- **CISF:** Protects **critical installations** — airports, metro rails, space/nuclear/PSU plants, Parliament!
- **NSG (Black Cats):** Federal counter-terrorism, anti-hijacking, and hostage-rescue strike force.
- **NIA (National Investigation Agency, 2008 Act post-26/11):** Federal counter-terror & UAPA investigative agency with **concurrent all-India jurisdiction** (can investigate scheduled terror/trafficking/FICN/cyber-terror offences without waiting for state consent!).
- **NATGRID & MAC (Multi-Agency Centre under IB):** Real-time intelligence fusion across IB, RAW, state police, and financial databases.

## 4. Police Reforms (Prakash Singh Directives, 2006)
- **7 Supreme Court Directives:** State Security Commission, **2-year fixed tenure for DGP**, Police Establishment Board, separate **Investigation vs Law-and-Order wings**, Police Complaints Authorities — plus **SMART Policing** (*Strict & Sensitive, Modern & Mobile, Alert & Accountable, Reliable & Responsive, Techno-savvy & Trained*).

## 5. Key Revision Takeaways
- **SAMADHAN = Anti-LWE Strategy**; **CRPF/CoBRA = Anti-LWE & Internal Order**; **CISF = Airports/PSUs/Infrastructure**; **NSG = Counter-Terror Rescue**.
- **NIA Act (2008)** grants national concurrent counter-terror jurisdiction; **Prakash Singh (2006)** = Police autonomy & fixed DGP tenure.`,
    mcqs: [
      {
        stem: 'What does the MHA’s **"SAMADHAN" doctrine (2017)** specifically formulate as a multi-dimensional operational and developmental framework to eliminate?',
        options: [
          'Maritime piracy in the Arabian Sea',
          'Left-Wing Extremism (LWE / Maoist insurgency)',
          'Stock market insider trading',
          'Highway toll congestion',
        ],
        correctOptionIndex: 1,
        explanation: 'SAMADHAN unites Smart Leadership, Aggressive Strategy, Actionable Intelligence, Technology, Theatre Action Plans, and choke-off of Maoist Financing alongside tribal infrastructure development.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **specialized federal agency**, created via legislation in **December 2008** right after the Mumbai 26/11 terror attacks, holds **concurrent jurisdiction** across India to investigate scheduled terror, UAPA, fake-currency, and human-trafficking cases?',
        options: [
          'Central Vigilance Commission (CVC)',
          'National Investigation Agency (NIA)',
          'Enforcement Directorate',
          'Narcotics Control Bureau',
        ],
        correctOptionIndex: 1,
        explanation: 'Unlike the CBI (which normally requires state consent under Section 6 DSPE Act), the NIA can probe scheduled terror offences across any state upon Central Government order.',
        difficulty: 'foundation',
      },
      {
        stem: 'Match the **Central Force** cleanly to its primary statutory internal-security mandate: **CRPF, CISF, and NSG** serve respectively as:',
        options: [
          'Border guard, Forest ranger, Customs',
          'Internal law-and-order/anti-LWE counter-insurgency (CRPF), Critical Infrastructure/Airports/PSU protection (CISF), and Federal Counter-Terror/Hostage Rescue (NSG)',
          'Naval defence, Cyber audit, Tax collection',
          'Prison guard, Election tallying, Diplomatic courier',
        ],
        correctOptionIndex: 1,
        explanation: 'CRPF (+ CoBRA) anchors internal counter-insurgency/anti-Naxal operations; CISF secures airports, metros, nuclear/industrial plants; NSG is the elite anti-hijack/terror strike force.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which landmark **2006 Supreme Court judgment** laid down **seven binding directives**—including a **minimum 2-year tenure for DGPs**, **separation of investigation from law & order**, and **State Security Commissions**—to insulate police from arbitrary political interference?',
        options: [
          '*D.K. Basu v. State of West Bengal*',
          '*Prakash Singh & Others v. Union of India*',
          '*Lalita Kumari v. State of UP*',
          '*Arnesh Kumar v. State of Bihar*',
        ],
        correctOptionIndex: 1,
        explanation: '*Prakash Singh* (2006) drew upon the Ribeiro, Padmanabhaiah, and National Police Commission recommendations to modernize Indian policing.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under **Section 3 of the Armed Forces (Special Powers) Act (AFSPA), 1958**, who has legal authority to declare an area a **"Disturbed Area"** before special powers apply?',
        options: [
          'District Collector alone',
          'The Governor of the State, Administrator of the UT, OR the Central Government (MHA) by official Gazette notification',
          'Any Army Captain on patrol',
          'The Municipal Mayor',
        ],
        correctOptionIndex: 1,
        explanation: 'AFSPA powers activate ONLY inside officially notified "Disturbed Areas" reviewed periodically (and shrunk substantially across Assam, Nagaland, Tripura, Meghalaya, and Arunachal in recent years).',
        difficulty: 'standard',
      },
      {
        stem: 'Where did **India’s Naxalite (Left-Wing Extremist) armed movement** erupt in **May 1967** under **Charu Majumdar and Kanu Sanyal**?',
        options: [
          'Telangana plains',
          'Naxalbari village (Darjeeling district, West Bengal)',
          'Bastar (Chhattisgarh)',
          'Chamoli (Uttarakhand)',
        ],
        correctOptionIndex: 1,
        explanation: 'An armed peasant uprising in Naxalbari (1967) gave the movement its name before multiple factions merged into CPI (Maoist) in 2004.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why must counter-insurgency against **LWE in central India** always pair **tactical security operations** with **Forest Rights Act (2006), roads, schools, and local healthcare**?',
        options: [
          'Because Maoists love paved highways',
          'Because kinetic force alone clears space temporarily, whereas inclusive development, land/forest dignity, and accessible policing dismantle the grievance ecosystem that fuels recruitment permanently',
          'Because security forces never patrol forests',
          'Because mobile towers replace drinking water',
        ],
        correctOptionIndex: 1,
        explanation: 'As roads, 4G, ration shops, and Eklavya schools reach remote Bastar–Abujhmad villages, state legitimacy replaces insurgent parallel structures.',
        difficulty: 'foundation',
      },
      {
        stem: 'What role does the **Multi-Agency Centre (MAC)** operating within the **Intelligence Bureau (IB)** play in India’s counter-terrorism architecture?',
        options: [
          'Selling government textbooks',
          'Real-time counter-terror intelligence sharing across 28+ central & state agencies (IB, RAW, State Special Branches, CAPFs, NIA) via Subsidiary MACs (SMACs) in every state',
          'Issuing Aadhaar cards',
          'Managing highway toll booths',
        ],
        correctOptionIndex: 1,
        explanation: 'Revamped after 26/11, MAC–SMAC connects central intelligence desks seamlessly with state police counter-terror units.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Constitutional Schedule** provides autonomous legislative, judicial, and developmental self-governance through **Autonomous District Councils (ADCs)** in **Assam, Meghalaya, Tripura, and Mizoram** to accommodate tribal aspirations peacefully?',
        options: [
          'Fifth Schedule',
          'Sixth Schedule (Articles 244(2) & 275(1))',
          'Seventh Schedule',
          'Tenth Schedule',
        ],
        correctOptionIndex: 1,
        explanation: 'The Sixth Schedule empowers tribal Autonomous District Councils in those four North-Eastern states to safeguard customary land, forests, and identity.',
        difficulty: 'foundation',
      },
      {
        stem: 'What was the **major structural gap** highlighted by **Uttarakhand’s recent transition of remote hill *Revenue Police* (Patwari policing) circles toward Regular Civil Police**?',
        options: [
          'Patwaris had too many cyber-forensic labs',
          'Revenue officials trained primarily in land records lacked modern criminal investigation, forensic, cyber, and women-safety policing capacity—prompting phased transfer of sensitive areas to regular Uttarakhand Police',
          'Hills had too many IPS officers',
          'Patwaris handled air traffic control',
        ],
        correctOptionIndex: 1,
        explanation: 'Modern violent and cyber crimes outgrew the colonial 1874 Ramsay Revenue Police system, driving Uttarakhand’s 2022–2023 integration of high-footfall/hill circles into regular police stations.',
        difficulty: 'standard',
      },
      {
        stem: 'Under **Article 355** of the Indian Constitution, what constitutional duty rests upon the **Union Government** regarding every Indian State?',
        options: [
          'Managing municipal garbage collection',
          'To protect every State against external aggression AND internal disturbance, and ensure governance proceeds in accordance with the Constitution',
          'Appointing every Gram Pradhan',
          'Setting state cinema ticket prices',
        ],
        correctOptionIndex: 1,
        explanation: 'While "Public Order" and "Police" sit in the State List (List II), Article 355 anchors central security coordination and CAPF deployment aid to states.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **two reforms** inside the **2019 amendment to the Unlawful Activities (Prevention) Act, 1967 (UAPA)** sparked key constitutional debate around balancing terror prevention and civil liberties?',
        options: [
          'Abolishing NIA courts',
          'Empowering the Central Government to designate **individuals** (not only organizations) as terrorists and enabling NIA DG approval to attach property linked to terrorism',
          'Lowering voting age to 16',
          'Eliminating bail in traffic challans',
        ],
        correctOptionIndex: 1,
        explanation: 'The 2019 UAPA amendment plugged the loophole where banned terror outfits reconstituted under new names by adding individual terrorist designation under Fourth Schedule.',
        difficulty: 'standard',
      },
      {
        stem: 'In **Police Reforms**, what does **"Community Policing"** (*e.g., Gaura Shakti / Uttarakhand Police Gaura App & Gram Praharis*) aim to achieve?',
        options: [
          'Replacing courts with village mobs',
          'Building cooperative trust, early intelligence on narcotics/trafficking, and rapid distress response through citizen–police partnerships',
          'Allowing private militias to carry rifles',
          'Stopping routine patrolling',
        ],
        correctOptionIndex: 1,
        explanation: 'Police–community trust turns law-abiding residents into active partners against drug abuse, cyber scams, and tourist emergencies.',
        difficulty: 'foundation',
      },
      {
        stem: 'What are **NATGRID (National Intelligence Grid)** databases designed to integrate lawfully for authorized security & investigative agencies?',
        options: [
          'Private diaries of school children',
          'Secure federated access across airlines, immigration, banking, telecom, rail, and tax records to detect terror/crime patterns swiftly under strict audit trails',
          'Social media memes only',
          'Electricity meter billing exclusively',
        ],
        correctOptionIndex: 1,
        explanation: 'NATGRID speeds up authorized, logged real-time data queries for designated central/state intelligence and investigation agencies.',
        difficulty: 'standard',
      },
      {
        stem: 'Why does the **MHA’s "SMART Policing"** acronym emphasize **"Sensitive, Accountable, and Techno-savvy"** policing alongside **"Strict and Alert"**?',
        options: [
          'Only brute physical force prevents modern crime',
          'Effective internal security requires combining strict deterrence against criminals/insurgents with humane sensitivity toward citizens, forensic/cyber modernization, and rule-of-law accountability',
          'To eliminate police uniforms',
          'To stop all forensic labs',
        ],
        correctOptionIndex: 1,
        explanation: 'High conviction rates depend on scientific forensics (BNSS 2023 mandate!), humane victim care, and citizen confidence—not custodial excess.',
        difficulty: 'foundation',
      },
    ],
  },
];
