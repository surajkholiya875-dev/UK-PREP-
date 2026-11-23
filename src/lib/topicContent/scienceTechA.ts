import { TopicContentPackage } from './types';

export const SCIENCE_TECH_PART_A: TopicContentPackage[] = [
  {
    topicTitle: 'SI Units, Motion, Gravitation & Work-Energy',
    materialTitle: 'SI Units, Motion, Gravitation & Work-Energy — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Mechanics, Newton’s Laws, Gravitation & Conservation Laws',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# SI Units, Motion, Gravitation & Work-Energy

## 1. Seven SI Base Units & Key Derived Units
| Base Quantity | SI Unit (Symbol) | Common Exam Derived Units |
|---|---|---|
| Length / Mass / Time | **Metre (m)** / **Kilogram (kg)** / **Second (s)** | **Force:** Newton ($N = kg\\cdot m/s^2$); **Pressure:** Pascal ($Pa = N/m^2$) |
| Electric Current / Temp. | **Ampere (A)** / **Kelvin (K)** | **Energy / Work / Heat:** Joule ($J = N\\cdot m$); **Power:** Watt ($W = J/s$) |
| Luminous Intensity / Amount | **Candela (cd)** / **Mole (mol)** | **Frequency:** Hertz ($Hz = s^{-1}$); **Light-year & Parsec** = **Distance** (NOT time! $1\\text{ parsec} \\approx 3.26\\text{ light-years}$) |

- **Scalar vs Vector:** Scalars (*mass, speed, distance, work, energy, power, temperature*) have magnitude only; Vectors (*displacement, velocity, acceleration, force, momentum, weight*) have both magnitude and direction!

## 2. Newton’s Laws of Motion & Everyday Applications
1. **First Law (Law of Inertia):** Body preserves rest or uniform linear motion unless net external force acts (*passenger jerks forward when bus brakes suddenly; shaking tree branch drops fruits*).
2. **Second Law ($F = ma = \\Delta p / \\Delta t$):** Force equals rate of change of **momentum** (*cricketer pulls hands backward catching fast ball to increase $\\Delta t$ and cut peak impact force!*).
3. **Third Law (Action–Reaction):** Equal & opposite forces act on **two different bodies** (*rocket propulsion, gun recoil, swimming*).
- **Circular Motion:** **Centripetal force** acts inward ($mv^2/r$); **Centrifugal** is a *pseudo-force* felt in rotating frames (*cream separator, washing machine spin-dryer*).

## 3. Gravitation, Weightlessness & Orbital Mechanics
- **Newton’s Universal Gravitation:** $F = \\frac{G m_1 m_2}{r^2}$ ($G$ is universal constant; **acceleration due to gravity $g \\approx 9.8\\text{ m/s}^2$** is **independent of falling object's mass** in vacuum!).
- **Variation of $g$:** Decreases with **altitude** above Earth AND with **depth** inside Earth ($g = 0$ at Earth's centre!); slightly **higher at Poles than Equator** (polar flattening + Earth’s rotation!).
- **Mass vs Weight ($W = mg$):** Mass is invariant anywhere; Weight drops to **1/6th on the Moon** and **zero** inside an orbiting spacecraft (**free-fall weightlessness**, NOT zero gravity!).
- **Escape Velocity:** Minimum launch speed to escape Earth’s gravity completely ($v_e = \\sqrt{2gR} \\approx \\mathbf{11.2\\text{ km/s}}$ — independent of spacecraft mass!).

## 4. Work, Power, Energy & Levers
- **Work ($W = F\\cdot d\\cdot\\cos\\theta$):** Zero work when displacement is perpendicular to force ($\theta = 90^\\circ$—e.g., coolie walking horizontally carrying bag on head, or uniform circular satellite orbit!) or zero displacement.
- **Kinetic Energy ($\\frac{1}{2}mv^2$)** & **Potential Energy ($mgh$):** Mechanical energy conserved absent friction (**1 kWh** = commercial unit of electrical energy = **$3.6 \\times 10^6$ Joules**!).

## 5. Key Revision Takeaways
- **Light-year / Astronomical Unit / Parsec** all measure **Distance**; **Candela** measures luminous intensity; **1 kWh = $3.6 \\times 10^6$ J**.
- **$g$** is maximum at Earth’s **Poles**, minimum at **Equator**, zero at **centre**.
- **Escape velocity from Earth = 11.2 km/s** (independent of satellite mass).`,
    mcqs: [
      {
        stem: 'Which physical quantity is measured in **"Light-year"** and **"Parsec"**?',
        options: ['Time', 'Astronomical Distance', 'Speed of light', 'Luminous intensity'],
        correctOptionIndex: 1,
        explanation: 'A light-year is the distance light travels in vacuum in one Julian year (~9.46 × 10^15 m); 1 Parsec ≈ 3.26 light-years.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why does a cricket fielder instinctively pull his hands backward while catching a fast-moving ball?',
        options: [
          'To increase gravity on the ball',
          'To increase the time interval ($\\Delta t$) of momentum change so the average impact force ($F = \\Delta p / \\Delta t$) on his palms decreases sharply',
          'To reduce ball mass',
          'To cancel centrifugal force',
        ],
        correctOptionIndex: 1,
        explanation: 'Applying Newton’s Second Law ($F = \\Delta p / \\Delta t$), stretching deceleration duration lowers peak impulsive force.',
        difficulty: 'foundation',
      },
      {
        stem: 'How does Earth’s surface acceleration due to gravity ($g$) compare between the **Poles** and the **Equator**?',
        options: [
          'Strictly zero at Poles',
          'Slightly HIGHER at the Poles than at the Equator (due to polar flattening / smaller radius and absence of rotational centrifugal reduction at Poles)',
          'Higher at Equator',
          'Identical everywhere to 10 decimal places',
        ],
        correctOptionIndex: 1,
        explanation: 'Earth bulges at the equator (larger $R$, lowering $GM/R^2$) and Earth’s spin exerts outward centrifugal effect max at the equator.',
        difficulty: 'standard',
      },
      {
        stem: 'What is the approximate **Escape Velocity** required for an unpowered object near Earth’s surface to escape Earth’s gravitational field completely?',
        options: ['7.9 km/s', '11.2 km/s', '332 m/s', '3,00,000 km/s'],
        correctOptionIndex: 1,
        explanation: 'Escape velocity $v_e = \\sqrt{2gR} \\approx 11.2\\text{ km/s}$ (whereas low-Earth orbital speed is ~7.9 km/s) and is independent of projectile mass.',
        difficulty: 'foundation',
      },
      {
        stem: 'An astronaut floating inside the International Space Station experiences apparent weightlessness primarily because:',
        options: [
          'Gravity at 400 km altitude is strictly zero',
          'Both astronaut and station are in continuous free-fall together around Earth under centripetal gravity (zero normal reaction force)',
          'Vacuum sucks away mass completely',
          'Earth stops rotating',
        ],
        correctOptionIndex: 1,
        explanation: 'At 400 km altitude Earth’s gravity is still ~88–90% of surface strength; astronauts float because there is no upward contact normal reaction.',
        difficulty: 'standard',
      },
      {
        stem: 'If a porter walks steadily on a flat horizontal platform carrying a 30 kg suitcase atop his head, what physical **Mechanical Work** does the vertical gravitational/normal force perform?',
        options: [
          'Maximum positive work',
          'Zero work (since vertical force acts at $90^\\circ$ perpendicular to horizontal displacement, $\\cos 90^\\circ = 0$)',
          'Infinite negative work',
          'Work equals $mgh^2$',
        ],
        correctOptionIndex: 1,
        explanation: 'Physics defines mechanical work strictly as $W = F\\cdot d\\cdot\\cos\\theta$; perpendicular forces do zero displacement work.',
        difficulty: 'foundation',
      },
      {
        stem: 'One commercial household electricity unit (**1 Kilowatt-hour, kWh**) equals how many **Joules** of energy?',
        options: [
          '1,000 J',
          '$3.6 \\times 10^6$ Joules (3.6 Megajoules)',
          '60,000 J',
          '86,400 J',
        ],
        correctOptionIndex: 1,
        explanation: '1 kW (1,000 J/s) × 3,600 seconds = 3,600,000 Joules.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which among the following sets contains **ONLY Vector Quantities** (possessing both magnitude and direction)?',
        options: [
          'Mass, Speed, Temperature',
          'Displacement, Velocity, Force, and Momentum',
          'Energy, Power, Distance',
          'Work, Time, Electric Potential',
        ],
        correctOptionIndex: 1,
        explanation: 'Work, energy, power, mass, distance, speed, and temperature are scalars; force, velocity, acceleration, and momentum are vectors.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which SI base unit specifically measures **Luminous Intensity**?',
        options: ['Mole (mol)', 'Candela (cd)', 'Kelvin (K)', 'Lux'],
        correctOptionIndex: 1,
        explanation: 'Candela (cd) is one of the 7 fundamental SI base units (Lux is a derived unit of illuminance = lumen/m²).',
        difficulty: 'foundation',
      },
      {
        stem: 'When a dairy centrifuge or washing machine spin-dryer separates cream from milk or water from wet clothes, which force principle pushes denser components outward away from the axis?',
        options: [
          'Gravitational attraction toward the Sun',
          'Centrifugal effect (inertia of denser milk/water resisting curved inward acceleration in the rotating drum)',
          'Electrostatic friction',
          'Buoyancy downward',
        ],
        correctOptionIndex: 1,
        explanation: 'Less dense cream collects near the central rotation axis while denser skim milk migrates outward.',
        difficulty: 'foundation',
      },
      {
        stem: 'If an iron ball and a light wooden feather are dropped simultaneously inside a tall **evacuated vacuum tube**, which statement holds true?',
        options: [
          'The iron ball lands far earlier',
          'Both strike the bottom simultaneously with identical acceleration $g$',
          'The feather floats forever at the top',
          'Iron loses mass',
        ],
        correctOptionIndex: 1,
        explanation: 'Galileo’s equivalence principle proves gravitational acceleration $g = GM/R^2$ is completely independent of falling mass once air drag is removed.',
        difficulty: 'foundation',
      },
      {
        stem: 'If the linear speed ($v$) of a moving vehicle doubles while its mass stays constant, how does its **Kinetic Energy** ($\\frac{1}{2}mv^2$) change?',
        options: [
          'Halves',
          'Doubles (2x)',
          'Quadruples (increases 4 times)',
          'Remains unchanged',
        ],
        correctOptionIndex: 2,
        explanation: 'Kinetic energy scales with the square of speed—which is why braking distances explode dramatically on winding Uttarakhand mountain highways at high speeds!',
        difficulty: 'standard',
      },
      {
        stem: 'If you weigh 600 N on Earth’s surface, what would your **Mass** and approximate **Weight** be on the Moon (where surface gravity is ~1/6th Earth’s)?',
        options: [
          'Mass becomes 1/6th; Weight remains 600 N',
          'Mass remains identical (~61 kg), while Weight drops to ~100 N (1/6th)',
          'Both drop to zero',
          'Weight increases 6 times',
        ],
        correctOptionIndex: 1,
        explanation: 'Mass measures intrinsic inertia/matter and never changes with gravity; Weight ($mg$) scales directly with local $g$.',
        difficulty: 'foundation',
      },
      {
        stem: 'What happens to the time period ($T = 2\\pi\\sqrt{L/g}$) of a simple pendulum clock if taken to a high mountain peak (like Kedarnath) where $g$ decreases slightly?',
        options: [
          'The pendulum swings faster and clock gains time',
          'The time period $T$ increases slightly (swings slower), causing the pendulum clock to lose time',
          'Time period becomes zero',
          'Pendulum stops permanently',
        ],
        correctOptionIndex: 1,
        explanation: 'Since $T \\propto 1/\\sqrt{g}$, lower gravity slows each oscillation slightly (longer period = slower clock).',
        difficulty: 'advanced',
      },
      {
        stem: 'In a geostationary satellite orbiting Earth steadily at ~35,786 km above the Equator, its orbital period matches Earth’s sidereal rotation of:',
        options: ['90 minutes', '12 hours', '24 hours (appearing stationary overhead)', '365 days'],
        correctOptionIndex: 2,
        explanation: 'A 24-hour west-to-east equatorial circular orbit keeps communication/weather satellites (INSAT) locked above one longitude.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Optics, Waves & Acoustics',
    materialTitle: 'Optics, Waves & Acoustics — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Reflection, Refraction, TIR, Lenses, Eye Defects & Sound Waves',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Optics, Waves & Acoustics

## 1. Reflection & Mirrors (Concave vs Convex)
- **Plane Mirror:** Virtual, erect, laterally inverted, equal size ($m=+1$); minimum mirror height to see full body = **half person's height**.
- **Concave Mirror (Converging):** Forms real/inverted images (or magnified virtual erect image when object is inside focal point $F$). Uses: **Shaving/Make-up mirrors, Dentists' mirrors, Vehicle headlights & Torches** (bulb at $F$), **Solar Concentrators**!
- **Convex Mirror (Diverging):** Always forms **diminished, virtual, erect images** across a **wide field of view**—standard **Rear-view Wing Mirrors** in vehicles & sharp hairpin blind-bend mirrors along **Uttarakhand hill highways**!

## 2. Refraction, Total Internal Reflection (TIR) & Scattering
- **Refraction:** Bending of light across media due to speed change ($n = c/v$; *frequency stays unchanged*, wavelength & speed change!): explains **twinkling of stars**, **apparent shallow depth of clear Naini/Ganga pools**, early sunrise/delayed sunset (~2 min each).
- **Total Internal Reflection (TIR):** Occurs ONLY when (i) light travels from **denser $\\rightarrow$ rarer medium** AND (ii) angle of incidence **$> \\text{Critical Angle}$**. Explains: **Optical Fibres** (telecommunications/endoscopy!), **sparkling brilliance of Diamond** ($n \\approx 2.42$, low critical angle ~24.4°), **Mirage** in hot deserts/asphalt roads!
- **Dispersion (Prism) & Rainbow:** Violet bends/refracts *most* (shortest $\\lambda$, highest $n$); Red bends *least*. Rainbow involves refraction + dispersion + internal reflection inside raindrops.
- **Rayleigh Scattering ($I \\propto 1/\\lambda^4$):** Short blue wavelengths scatter ~10x more strongly than red—making **sky blue** (astronauts in airless space see **black sky**!), **reddish sunset/danger signals** (red penetrates fog/haze farthest!).

## 3. Lenses & Human Eye Defects
- **Power of Lens:** $P = \\frac{1}{f\\text{ (in metres)}}$ in **Dioptres ($D$)** ($+$ for **Convex/Converging**, $-$ for **Concave/Diverging**).
- **Myopia (Short-sightedness):** Distant objects blurry (image forms *in front* of retina) $\\rightarrow$ corrected by **Concave (Diverging) Lens**.
- **Hypermetropia (Long-sightedness):** Near objects blurry (image forms *behind* retina) $\\rightarrow$ corrected by **Convex (Converging) Lens**.
- **Presbyopia:** Old-age loss of ciliary flexibility $\\rightarrow$ **Bifocal Lens**. **Astigmatism** $\\rightarrow$ **Cylindrical Lens**.

## 4. Waves, Sound & Doppler Effect
- **Light vs Sound:** Light is **Transverse Electromagnetic** ($3 \\times 10^8\\text{ m/s}$ in vacuum); Sound is **Longitudinal Mechanical** (cannot travel in **vacuum**! Travels fastest in **Solids > Liquids > Gases**; ~343 m/s in 20°C air).
- **Audible Human Range:** **20 Hz – 20,000 Hz (20 kHz)**. Below 20 Hz = **Infrasonic** (elephants, earthquakes); Above 20 kHz = **Ultrasonic** (bats echolocation, **SONAR**, medical ultrasound imaging).
- **Characteristics:** **Pitch** depends on **Frequency**; **Loudness** depends on **Amplitude** (measured in **Decibels [dB]**); **Quality/Timbre** depends on waveform/overtones.
- **Doppler Effect:** Apparent shift in frequency/pitch due to relative motion (ambulance siren rising in pitch approaching, dropping receding; astronomical redshift proving expanding universe!).

## 5. Key Revision Takeaways
- **Rear-view & hill-hairpin mirrors** = **Convex** (always erect, wide field); **Headlights / Dentists / Shaving** = **Concave**.
- **Optical fibres & Diamond sparkle** work via **Total Internal Reflection (TIR)** (denser $\\rightarrow$ rarer, $i > i_c$).
- **Myopia** = **Concave** lens; **Hypermetropia** = **Convex** lens; **Sound travels fastest in Solids**, zero in vacuum.`,
    mcqs: [
      {
        stem: 'Which type of mirror is universally fitted on sharp blind mountain bends across Uttarakhand and as vehicle rear-view wing mirrors because it always produces an erect, diminished image across a wide field of view?',
        options: [
          'Concave mirror',
          'Convex mirror',
          'Plane mirror only',
          'Parabolic silver dish',
        ],
        correctOptionIndex: 1,
        explanation: 'A convex mirror diverges incoming rays to capture a wider panorama safely in an upright miniature view.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which optical phenomenon enables high-speed **Optical Fibre** internet cables and produces the dazzling brilliance of cut **Diamonds**?',
        options: [
          'Rayleigh Scattering',
          'Total Internal Reflection (TIR)',
          'Chromatic Aberration',
          'Polarization only',
        ],
        correctOptionIndex: 1,
        explanation: 'In optical fibres, light rays stay trapped bouncing internally along the higher-refractive-index glass core at angles exceeding the critical angle.',
        difficulty: 'foundation',
      },
      {
        stem: 'When light crosses cleanly from air into a glass slab or clear mountain lake, which wave property remains **strictly unchanged**?',
        options: ['Speed', 'Wavelength', 'Frequency', 'Direction of travel (at oblique angle)'],
        correctOptionIndex: 2,
        explanation: 'Frequency is determined solely by the emitting light source; speed ($v = c/n$) and wavelength ($\\lambda/n$) both decrease inside denser media.',
        difficulty: 'standard',
      },
      {
        stem: 'Why does the daytime sky appear **blue** from Earth’s surface, yet completely **black** to astronauts orbiting aboard the International Space Station?',
        options: [
          'Space mirrors paint the sky black',
          'Air molecules scatter short-wavelength blue sunlight strongly (*Rayleigh scattering* $\\propto 1/\\lambda^4$), whereas airless space lacks molecules to scatter light',
          'Ocean waves reflect permanently onto clouds',
          'Sunlight turns black above 50 km',
        ],
        correctOptionIndex: 1,
        explanation: 'Without atmospheric nitrogen/oxygen molecules scattering blue photons toward the observer’s eye, sunlight travels unseen unless striking objects.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which corrective spectacle lens is prescribed for a student suffering from **Myopia** (short-sightedness, unable to read the classroom board clearly from the back row)?',
        options: [
          'Convex (converging) lens',
          'Concave (diverging) lens',
          'Cylindrical mirror only',
          'Opaque sunglasses',
        ],
        correctOptionIndex: 1,
        explanation: 'In myopia, distant light focuses slightly *before* the retina; a diverging concave lens shifts the focus cleanly back onto the retina.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which lens is used to correct **Hypermetropia** (far-sightedness, difficulty reading close print)?',
        options: [
          'Concave lens',
          'Convex (converging) lens',
          'Plane glass slab',
          'Prism',
        ],
        correctOptionIndex: 1,
        explanation: 'Hypermetropia focuses near objects behind the retina; a convex lens supplies extra converging power.',
        difficulty: 'foundation',
      },
      {
        stem: 'Through which physical medium does a **Sound Wave** propagate at the **highest speed**?',
        options: [
          'Outer space vacuum',
          'Dry air',
          'Liquid water',
          'Solid steel rail (rigid solids)',
        ],
        correctOptionIndex: 3,
        explanation: 'Sound requires elastic particle vibrations: steel (~5,000+ m/s) > water (~1,500 m/s) > air (~343 m/s) > vacuum (0 m/s—cannot travel!).',
        difficulty: 'foundation',
      },
      {
        stem: 'What is the normal **audible frequency range** of the healthy human ear?',
        options: [
          '0 Hz to 10 Hz',
          '20 Hz to 20,000 Hz (20 kHz)',
          '50,000 Hz to 1,00,000 Hz',
          'Above 1 MHz',
        ],
        correctOptionIndex: 1,
        explanation: 'Below 20 Hz is Infrasound (seismic waves, elephants); above 20 kHz is Ultrasound (bats, SONAR, medical sonography).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which acoustic property of a sound wave determines its musical **Pitch** (shrillness vs deep bass) and which determines its **Loudness**?',
        options: [
          'Pitch depends on Amplitude; Loudness depends on Frequency',
          'Pitch depends on Frequency; Loudness depends on Amplitude (intensity in dB)',
          'Both depend purely on air temperature',
          'Pitch depends only on speed in vacuum',
        ],
        correctOptionIndex: 1,
        explanation: 'Higher frequency sounds shriller (mosquito buzz); larger wave amplitude delivers greater acoustic energy/loudness.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which type of mirror do dentists use to inspect magnified upright images of teeth and do car headlights use to project intense parallel beams?',
        options: [
          'Convex mirror',
          'Concave mirror',
          'Plane glass plate',
          'Diverging lens',
        ],
        correctOptionIndex: 1,
        explanation: 'Placing a tooth inside the focal length ($u < f$) yields a magnified virtual image; placing a headlight bulb at $F$ reflects parallel beams.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why are **Red lights** universally selected for traffic stop signals and tower warning beacons?',
        options: [
          'Red has the shortest wavelength and scatters away fastest',
          'Red has the **longest visible wavelength**, experiencing the least Rayleigh scattering by fog/dust/smoke so it remains visible from the farthest distance',
          'Red travels faster than blue in vacuum',
          'Red eyes absorb zero light',
        ],
        correctOptionIndex: 1,
        explanation: 'Minimal scattering ($1/\\lambda^4$) preserves beam clarity through mist and rain.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why can two astronauts standing side-by-side on the airless Moon NOT converse by shouting without radio helmets?',
        options: [
          'Lunar gravity absorbs human vocal cords',
          'Sound waves are **longitudinal mechanical waves** requiring a material medium (gas/liquid/solid) to propagate and cannot travel through vacuum',
          'Radio waves turn into light',
          'Moon temperature freezes vocal frequency',
        ],
        correctOptionIndex: 1,
        explanation: 'Electromagnetic radio waves traverse vacuum effortlessly, whereas mechanical pressure waves cannot.',
        difficulty: 'foundation',
      },
      {
        stem: 'When a white ray enters a glass prism, which colour deviates **least** and which deviates **most**?',
        options: [
          'Violet deviates least; Red deviates most',
          'Red deviates least (longest wavelength, lowest refractive index in glass); Violet deviates most',
          'Green deviates zero',
          'All colours exit at identical angle',
        ],
        correctOptionIndex: 1,
        explanation: 'Dispersion separates sunlight into VIBGYOR because glass slows shorter violet wavelengths more strongly than longer red wavelengths.',
        difficulty: 'standard',
      },
      {
        stem: 'What is the focal length of a spectacle lens rated at **$-2.5\\text{ Dioptres}$** (and what lens type is it)?',
        options: [
          '$+0.40\\text{ m}$ Convex lens',
          '$-0.40\\text{ m}$ ($-40\\text{ cm}$) Concave lens',
          '$-2.5\\text{ m}$ Concave lens',
          '$+2.5\\text{ m}$ Convex lens',
        ],
        correctOptionIndex: 1,
        explanation: 'Since $P = 1/f(\\text{m})$, $f = 1/(-2.5) = -0.40\\text{ m} = -40\\text{ cm}$, negative sign indicating a diverging Concave lens for myopia.',
        difficulty: 'standard',
      },
      {
        stem: 'Which medical imaging technology uses safe high-frequency **Ultrasonic waves** rather than ionizing X-rays to visualize foetal development and abdominal organs?',
        options: [
          'CT Scan',
          'Ultrasonography (Ultrasound / Echocardiography)',
          'PET Gamma Scan',
          'Radiotherapy',
        ],
        correctOptionIndex: 1,
        explanation: 'Piezoelectric transducers emit >1 MHz ultrasonic pulses and reconstruct soft-tissue echoes harmlessly without ionizing radiation.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Heat, Thermodynamics, Electricity & Magnetism',
    materialTitle: 'Heat, Thermodynamics, Electricity & Magnetism — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Thermal Physics, Anomalous Water, Ohm’s Law & Electromagnetism',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Heat, Thermodynamics, Electricity & Magnetism

## 1. Temperature Scales, Heat Transfer & Latent Heat
- **Scale Conversion:** $\\frac{C}{5} = \\frac{F - 32}{9} = \\frac{K - 273.15}{5}$. Note: **$-40^\\circ\\text{C} = -40^\\circ\\text{F}$**! Absolute zero = **0 K ($-273.15^\\circ\\text{C}$)**.
- **Three Heat Transfer Modes:**
  1. *Conduction:* Through solids via molecular vibration without bulk flow (*metal pans*; air & wool are poor conductors—trapped air pockets in **woollen sweaters** keep us warm!).
  2. *Convection:* Bulk fluid circulation (*sea/land breezes, room heaters, water boiling*).
  3. *Radiation:* Electromagnetic infrared waves needing **no medium** (*solar heat reaching Earth; shiny silvered Thermos flask inner wall minimizes radiative loss!*).
- **Anomalous Expansion of Water (0°C to 4°C):** Water reaches **maximum density at 4°C**! When air drops below 0°C over **Naini Lake / Bhimtal**, lighter 0°C surface ice freezes on top and insulates **4°C liquid water underneath**, allowing fish to survive winter!
- **Boiling Point & Altitude:** Boiling point **drops with lower atmospheric pressure**—so water boils below 100°C in **Kedarnath/Mussoorie**, slowing open-pot dal cooking unless a **Pressure Cooker** raises boiling temperature!
- **Latent Heat:** Steam at 100°C causes far harsher burns than boiling water at 100°C due to extra **Latent Heat of Vaporization (~540 cal/g)**.

## 2. Electricity, Ohm’s Law & Domestic Circuits
- **Ohm’s Law:** $V = I R$ (Resistance $R = \\rho \\frac{L}{A}$ increases with length $L$, decreases with thick cross-section $A$, and *increases* with temperature in metals!).
- **Series vs Parallel Household Wiring:** Homes wire appliances in **Parallel** so **each gets full 220 V** and operates independently; **Fuse wire** (thin high-resistivity, **low-melting-point** Sn–Pb alloy) & **MCBs** sit in **Series on the Live Wire**!
- **Heating & Lighting:** Joule heating $H = I^2 R t$ (*Nichrome* heating coils have high resistivity + high melting point; **Tungsten** bulb filaments have ultra-high melting point ~3,400°C filled with inert **Argon/Nitrogen**). **LEDs** waste tiny heat compared to incandescent bulbs!
- **India Household AC Mains:** **220 V, 50 Hz** alternating current (3-pin plug: *Live* [Brown/Red], *Neutral* [Blue/Black], *Earth* [Green/Yellow] connected to thick safety earthing pin!).

## 3. Magnetism, Induction & Transformers
- **Electromagnetic Induction (Faraday):** Changing magnetic flux induces EMF—basis of **AC/DC Generators**, **Transformers** (which work **ONLY on AC**, never DC, to step voltages up/down cleanly for efficient long-distance grid transmission with low $I^2 R$ loss!).
- **Fleming’s Rules:** *Left-Hand Rule* = **Motor** force direction; *Right-Hand Rule* = **Generator** induced current direction.

## 4. Key Revision Takeaways
- **Water has maximum density at 4°C**; **$-40^\\circ\\text{C} = -40^\\circ\\text{F}$**; **Pressure cookers** overcome low high-altitude boiling points.
- **Safety Fuse** needs **low melting point & high resistance**, wired in **series on the Live wire**; household appliances connect in **Parallel (220 V, 50 Hz)**.
- **Transformers work ONLY on Alternating Current (AC)**.`,
    mcqs: [
      {
        stem: 'At what exact temperature do the **Celsius** and **Fahrenheit** thermometer scales read the exact same numerical value?',
        options: ['0°', '32°', '-40°', '+100°'],
        correctOptionIndex: 2,
        explanation: 'Using $C/5 = (F-32)/9$ with $C = F = x$, solving gives $9x = 5x - 160 \\Rightarrow 4x = -160 \\Rightarrow x = -40^\\circ$.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why do fish and aquatic ecosystems survive harsh sub-zero winters beneath frozen lakes like Nainital or Bhimtal?',
        options: [
          'Ice sinks straight to the lake bottom',
          'Water exhibits **anomalous expansion**, reaching **maximum density at 4°C**, so colder 0°C surface ice floats atop and insulates 4°C liquid water below',
          'Fish generate nuclear heat',
          'Salt turns ice into steam',
        ],
        correctOptionIndex: 1,
        explanation: 'If ice sank, lakes would freeze solidly bottom-up; floating ice shields deep aquatic life.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why does cooking pulses (dal) in an open vessel take significantly longer at high-altitude Uttarakhand towns like **Kedarnath or Gangotri** than in Haridwar?',
        options: [
          'Gravity cooks food directly',
          'Lower atmospheric pressure at high elevation lowers water’s boiling point well below 100°C, so open boiling water stays cooler',
          'High oxygen slows boiling',
          'Wood burns colder',
        ],
        correctOptionIndex: 1,
        explanation: 'A sealed pressure cooker traps steam pressure, raising the boiling point above 100°C for fast mountain cooking.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why is a **100°C steam burn** dramatically more painful and severe than a burn from **100°C liquid boiling water**?',
        options: [
          'Steam moves faster in wind',
          'Steam carries large additional hidden **Latent Heat of Vaporization** (~2,260 kJ/kg) released rapidly upon condensing onto cooler skin',
          'Boiling water is actually 50°C',
          'Steam contains acid always',
        ],
        correctOptionIndex: 1,
        explanation: 'Phase change from 100°C steam to 100°C water dumps massive latent thermal energy before cooling further.',
        difficulty: 'foundation',
      },
      {
        stem: 'In a silvered vacuum **Thermos Flask**, what three heat-transfer losses are minimized respectively by the **vacuum gap**, **glass/stopper**, and **reflective silver walls**?',
        options: [
          'Only gravity',
          'Conduction & Convection (stopped by vacuum gap), and Thermal Radiation (reflected back by mirror-silvered walls)',
          'Nuclear fission only',
          'Static electricity',
        ],
        correctOptionIndex: 1,
        explanation: 'Eliminating air stops conduction/convection while silver coatings cut infrared radiative heat loss.',
        difficulty: 'standard',
      },
      {
        stem: 'What electrical material properties are specifically chosen for a traditional household **Safety Fuse Wire**?',
        options: [
          'Ultra-high melting point and super-low resistance',
          'High resistivity and **low melting point** (such as Tin–Lead alloy), wired in **series on the Live wire**',
          'Thick copper rod connected in parallel',
          'Pure rubber insulator',
        ],
        correctOptionIndex: 1,
        explanation: 'Excess fault current rapidly heats and melts the low-melting-point fuse, breaking the live circuit cleanly before fire occurs.',
        difficulty: 'foundation',
      },
      {
        stem: 'How are appliances (lights, fans, geysers, refrigerators) always connected inside residential household wiring, and what are India’s standard AC supply specs?',
        options: [
          'In Series at 110 V, 60 Hz',
          'In **Parallel** at **220 V, 50 Hz AC**',
          'In Series at 12 V DC',
          'In Star-Series at 440 Hz',
        ],
        correctOptionIndex: 1,
        explanation: 'Parallel wiring ensures each appliance receives full 220 V and switching off one bulb never cuts power to the rest.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why do electrical **Transformers** (used across Uttarakhand hydropower switchyards to step up voltage to 400 kV) work **ONLY on Alternating Current (AC)** and fail on steady DC?',
        options: [
          'DC melts iron cores instantly',
          'Mutual electromagnetic induction requires a **continuously changing magnetic flux**, which steady direct current cannot generate',
          'AC travels faster than light',
          'DC has zero electrons',
        ],
        correctOptionIndex: 1,
        explanation: 'Stepping up AC transmission voltage cuts line current $I = P/V$, slashing resistive $I^2 R$ grid losses across mountains.',
        difficulty: 'standard',
      },
      {
        stem: 'Which alloy is used in electric iron, toaster, and room-heater coils owing to its **high electrical resistivity, high melting point, and resistance to oxidation when red-hot**?',
        options: ['Solder (Tin–Lead)', 'Nichrome (Nickel–Chromium–Iron alloy)', 'Pure Silver', 'Brass'],
        correctOptionIndex: 1,
        explanation: 'Nichrome maximizes Joule heat ($I^2 R t$) safely without corroding rapidly in open air.',
        difficulty: 'foundation',
      },
      {
        stem: 'If a metallic conductor wire is stretched uniformly to **double its original length** (halving its cross-sectional area), how does its **Electrical Resistance ($R = \\rho L/A$)** change?',
        options: [
          'Halves',
          'Doubles',
          'Increases 4 times (quadruples)',
          'Stays unchanged',
        ],
        correctOptionIndex: 2,
        explanation: 'Doubling $L$ doubles $R$, and halving $A$ doubles $R$ again ($2 \\times 2 = 4\\times$ resistance).',
        difficulty: 'advanced',
      },
      {
        stem: 'Why is an incandescent glass bulb filled with chemically inert **Argon or Nitrogen** rather than air (oxygen) or complete vacuum?',
        options: [
          'To turn glass blue',
          'To prevent oxidation/burning of the glowing white-hot **Tungsten** filament and retard tungsten evaporation',
          'To increase bulb noise',
          'To cool water',
        ],
        correctOptionIndex: 1,
        explanation: 'Oxygen would instantaneously oxidize white-hot tungsten (~2,700 K); inert gas pressures also curb filament thinning.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why do wearing two thin woollen layers keep a person warmer in winter hills than wearing a single thick cotton coat of equal weight?',
        options: [
          'Thin layers create friction sparks',
          'Air trapped between fabric layers and wool fibres acts as an excellent **thermal insulator** blocking conductive body-heat escape',
          'Cotton conducts cold from stars',
          'Wool generates nuclear energy',
        ],
        correctOptionIndex: 1,
        explanation: 'Still trapped air has remarkably low thermal conductivity.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which physicist’s rule (**Right-Hand Rule** vs **Left-Hand Rule**) helps determine the force direction acting on a current-carrying wire inside an **Electric Motor**?',
        options: [
          'Fleming’s Left-Hand Rule (Electric Motor)',
          'Fleming’s Right-Hand Rule (Electric Motor)',
          'Boyle’s Gas Law',
          'Pascal’s Pressure Law',
        ],
        correctOptionIndex: 0,
        explanation: 'Memory cue: Left-Hand = Motor (force from current + magnetic field); Right-Hand = Generator (induced current from motion + field).',
        difficulty: 'standard',
      },
      {
        stem: 'What is the specific safety purpose of the longest, thickest **third (top) Earth Pin** on Indian 3-pin power plugs?',
        options: [
          'To supply double voltage',
          'To connect metal appliance casings first to ground earth-potential before Live contact engages, diverting fault leakage current away from users',
          'To boost Wi-Fi speed',
          'To act as a decorative stand',
        ],
        correctOptionIndex: 1,
        explanation: 'Its longer length ensures earthing engages *first* upon insertion and disconnects *last* upon withdrawal.',
        difficulty: 'standard',
      },
      {
        stem: 'According to the **Second Law of Thermodynamics**, heat naturally flows spontaneously from:',
        options: [
          'Colder body to hotter body without external work',
          'Hotter body to colder body (a refrigerator requires external electrical work to pump heat against this gradient)',
          'Zero-kelvin vacuum only',
          'Equal temperatures perpetually',
        ],
        correctOptionIndex: 1,
        explanation: 'Spontaneous thermal processes increase total universal entropy; heat engines cannot convert 100% of heat into work.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Atomic Structure, Chemical Bonding & Periodic Trends',
    materialTitle: 'Atomic Structure, Chemical Bonding & Periodic Trends — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Subatomic Particles, Isotopes, Bonds, Acids/Bases & Periodic Table',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Atomic Structure, Chemical Bonding & Periodic Trends

## 1. Atomic Structure & Nuclear Terms
- **Subatomic Particles:** **Proton** ($+1$, Goldstein / Rutherford); **Electron** ($-1$, J.J. Thomson, negligible mass); **Neutron** ($0$, James Chadwick, 1932). Nucleus discovered via **Rutherford's Gold-Foil Alpha-Scattering Experiment**.
- **Atomic Number ($Z$):** Number of **protons** (defines chemical element!). **Mass Number ($A$):** $Z + N$ (protons + neutrons).
- **Key Nuclide Relations:**
  - **Isotopes:** Same $Z$, different $A$/neutrons (*Protium $^1H$, Deuterium $^2H$ [heavy water $D_2O$ moderator], Tritium $^3H$; $^{14}C$ radiocarbon dating; $^{60}Co$ cancer therapy; $^{131}I$ thyroid; $^{235}U$ nuclear fuel*).
  - **Isobars:** Same $A$, different $Z$ (e.g., $^{40}_{18}\\text{Ar}$ and $^{40}_{20}\\text{Ca}$).
  - **Isotones:** Same number of neutrons ($A - Z$).

## 2. Chemical Bonding & Intermolecular Forces
- **Ionic (Electrovalent) Bond:** Complete **electron transfer** (*Metal $\\rightarrow$ Non-metal*, e.g., $NaCl$, $CaO$); high melting points, conduct electricity **when molten or aqueous** (not solid!).
- **Covalent Bond:** **Mutual sharing of valence electron pairs** between non-metals (*$CH_4$, $H_2O$, Diamond, $CO_2$*); lower melting points (except network covalent solids like Diamond/Quartz!).
- **Coordinate (Dative) Bond:** Shared pair contributed wholly by one donor atom (*$NH_4^+$, $H_3O^+$, $CO$*).
- **Hydrogen Bonding:** Strong dipole attraction between $H$ attached to highly electronegative **F, O, or N**—explains why **$H_2O$ is liquid** at room temperature while heavier **$H_2S$ is a gas**, and why ice floats!

## 3. Modern Periodic Table & Trends (Moseley, 1913)
Modern Periodic Law: Properties are periodic functions of **Atomic Number ($Z$)** (18 Groups, 7 Periods; Mendeleev earlier used atomic mass!):
- **Across a Period (Left $\\rightarrow$ Right):** Atomic radius **decreases** (higher nuclear pull); Ionization Energy & **Electronegativity increase** (Halogens Group 17 most non-metallic; **Fluorine** is most electronegative element!).
- **Down a Group (Top $\\rightarrow$ Bottom):** Atomic radius **increases** (new shells); Metallic character **increases** (**Group 1 Alkali metals** most reactive metals; **Group 18 Noble Gases** inert!).

## 4. Acids, Bases, Salts & pH Scale (Sorensen)
- **pH Scale ($0–14$):** $<7$ **Acidic**; $=7$ **Neutral** (pure water); $>7$ **Basic/Alkaline**.
- **Everyday Acids & Compounds:** Vinegar (**Acetic Acid**), Lemon (**Citric Acid**), Ant/Nettle sting (**Formic/Methanoic Acid**—neutralized by mild base **Baking Soda [$NaHCO_3$]**!), Tamarind (**Tartaric**), Curd (**Lactic**), Car Battery (**Sulphuric Acid $H_2SO_4$**), Gastric juice (**$HCl$**).
- **Important Household Chemicals:**
  - **Baking Soda:** Sodium Bicarbonate ($NaHCO_3$).
  - **Washing Soda:** Sodium Carbonate decahydrate ($Na_2CO_3 \\cdot 10H_2O$).
  - **Bleaching Powder:** Calcium Oxychloride ($CaOCl_2$).
  - **Plaster of Paris (POP):** $CaSO_4 \\cdot \\frac{1}{2}H_2O$ (from Gypsum $CaSO_4 \\cdot 2H_2O$).

## 5. Key Revision Takeaways
- **Isotopes** = same atomic number $Z$, different neutrons ($^{14}C$ dating, $D_2O$ heavy water).
- **Modern Periodic Table** is ordered by **Atomic Number ($Z$)**; **Fluorine** has highest electronegativity.
- **Hydrogen bonding** keeps water liquid and makes solid ice less dense than liquid water.`,
    mcqs: [
      {
        stem: 'According to the **Modern Periodic Law** formulated by Henry Moseley, the physical and chemical properties of elements are periodic functions of their:',
        options: [
          'Atomic Weight / Mass only',
          'Atomic Number ($Z$, number of protons)',
          'Neutron count alone',
          'Density at 0°C',
        ],
        correctOptionIndex: 1,
        explanation: 'Moseley resolved Mendeleev’s atomic-mass anomalies (like Argon–Potassium inversion) by organizing the table by Atomic Number ($Z$).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which element across the entire Periodic Table possesses the **highest Electronegativity** (Pauling scale ~3.98)?',
        options: ['Oxygen', 'Chlorine', 'Fluorine', 'Helium'],
        correctOptionIndex: 2,
        explanation: 'Small atomic radius and high nuclear attraction make Fluorine (Group 17) the strongest electron-attracting element.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why is **$H_2O$** a liquid at room temperature while **$H_2S$** (with higher molecular weight) is a gas at the exact same temperature?',
        options: [
          'Sulphur atoms repel oxygen',
          'Strong intermolecular **Hydrogen Bonding** links $H_2O$ molecules together, raising water’s boiling point dramatically',
          'Water contains ionic sodium bonds',
          'Hydrogen gas stays dissolved inside',
        ],
        correctOptionIndex: 1,
        explanation: 'Oxygen’s high electronegativity enables robust $O-H\\cdots O$ hydrogen bonds absent in weaker $H_2S$.',
        difficulty: 'standard',
      },
      {
        stem: 'Atoms of different chemical elements having the **same Mass Number ($A$)** but **different Atomic Numbers ($Z$)**—such as $^{40}_{18}\\text{Ar}$ and $^{40}_{20}\\text{Ca}$—are called:',
        options: ['Isotopes', 'Isobars', 'Isotones', 'Allotropes'],
        correctOptionIndex: 1,
        explanation: 'Isotopes share $Z$ (same element); Isobars share total nucleons $A$; Isotones share neutron number $N$.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which radioactive isotope is routinely used by archaeologists to estimate the age of ancient organic carbon-bearing artifacts (**Radiocarbon Dating**)?',
        options: ['Uranium-238', 'Carbon-14 ($^{14}C$)', 'Cobalt-60', 'Sodium-24'],
        correctOptionIndex: 1,
        explanation: 'Cosmic rays generate $^{14}C$ (half-life ~5,730 years) absorbed by living organisms; after death, decay tracks age up to ~50,000 years (older rocks use Uranium–Lead).',
        difficulty: 'foundation',
      },
      {
        stem: 'What are the correct chemical formula and common name of **Baking Soda** vs **Washing Soda**?',
        options: [
          'Baking Soda: $NaCl$; Washing Soda: $CaCO_3$',
          'Baking Soda: Sodium Bicarbonate ($NaHCO_3$); Washing Soda: Sodium Carbonate decahydrate ($Na_2CO_3 \\cdot 10H_2O$)',
          'Baking Soda: $NaOH$; Washing Soda: $HCl$',
          'Both are pure Calcium Hydroxide',
        ],
        correctOptionIndex: 1,
        explanation: 'Mildly basic $NaHCO_3$ neutralizes stomach acidity/bee stings and leavens dough; $Na_2CO_3 \\cdot 10H_2O$ removes permanent water hardness.',
        difficulty: 'foundation',
      },
      {
        stem: 'In Uttarakhand’s rural hills, touching stinging nettle (*Bichhu Ghas*) or getting bitten by a red ant injects which painful organic acid into the skin?',
        options: [
          'Citric acid',
          'Methanoic acid (Formic acid, $HCOOH$)',
          'Oxalic acid',
          'Tartaric acid',
        ],
        correctOptionIndex: 1,
        explanation: 'Rubbing mild alkali like baking soda ($NaHCO_3$) or dock-leaf (*Palak/Khatta*) sap neutralizes painful methanoic acid stings.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which subatomic particle discovery in **1932 by James Chadwick** finally explained why atomic nuclei weigh roughly twice the mass of protons alone?',
        options: ['Electron', 'Positron', 'Neutron', 'Photon'],
        correctOptionIndex: 2,
        explanation: 'Electrically neutral neutrons stabilize multi-proton nuclei against electrostatic repulsion.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which famous metal-foil scattering experiment led **Ernest Rutherford** to deduce that an atom’s positive charge and mass are concentrated inside a tiny, dense **Nucleus**?',
        options: [
          'Oil-drop experiment',
          'Gold-foil Alpha-particle scattering experiment',
          'Cathode-ray tube experiment',
          'Electrolysis of brine',
        ],
        correctOptionIndex: 1,
        explanation: 'Most alpha particles passed straight through empty atomic space, while a tiny fraction bounced straight back off the compact positive nucleus.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why do solid crystalline **Ionic Compounds** (like solid table salt $NaCl$) NOT conduct electricity, yet conduct strongly when **dissolved in water or melted**?',
        options: [
          'Solid salt contains no protons',
          'Ions are locked rigidly in a crystal lattice when solid, but dissociate freely to carry electric charge when molten or aqueous',
          'Water turns sodium into copper',
          'Melting destroys electrons',
        ],
        correctOptionIndex: 1,
        explanation: 'Electrical conduction requires mobile charge carriers (free electrons in metals; free ions in electrolytes).',
        difficulty: 'standard',
      },
      {
        stem: 'What is **Plaster of Paris (POP)** chemically prepared by carefully heating **Gypsum** ($CaSO_4 \\cdot 2H_2O$) at ~373 K (100°C)?',
        options: [
          'Calcium Oxide ($CaO$)',
          'Calcium Sulphate Hemihydrate ($CaSO_4 \\cdot \\frac{1}{2}H_2O$)',
          'Calcium Oxychloride ($CaOCl_2$)',
          'Sodium Silicate',
        ],
        correctOptionIndex: 1,
        explanation: 'Mixing POP powder back with water re-hydrates into interlocking hard Gypsum crystals used for orthopaedic casts and ceiling moulds.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which chemical reaction occurs when **Limestone / Marble ($CaCO_3$)** monuments like Taj Mahal react with acid-rain sulphuric/nitric acids ($H_2SO_4 / HNO_3$)?',
        options: [
          'Marble turns into diamond',
          'Corrosive **"Marble Cancer"** — acid dissolves calcium carbonate into soluble salts/gypsum crust and $CO_2$ gas',
          'Limestone turns into pure gold',
          'No reaction occurs',
        ],
        correctOptionIndex: 1,
        explanation: 'Sulphur dioxide ($SO_2$) and $NO_x$ emissions form acid rain (pH < 5.6) pitting carbonate stone heritage.',
        difficulty: 'foundation',
      },
      {
        stem: 'Across a horizontal **Period** in the Periodic Table (moving left to right from Sodium to Chlorine), how does **Atomic Radius** generally change?',
        options: [
          'Increases sharply',
          'Decreases progressively (because added protons pull valence electrons inside the same shell closer to the nucleus)',
          'Remains strictly constant',
          'Doubles at every step',
        ],
        correctOptionIndex: 1,
        explanation: 'Higher effective nuclear charge contracts the valence shell leftward-to-rightward (except noble-gas van der Waals radius convention).',
        difficulty: 'standard',
      },
      {
        stem: 'What is the chemical name and everyday use of **Bleaching Powder** ($CaOCl_2$)?',
        options: [
          'Calcium Oxychloride — used for disinfecting drinking water and bleaching cotton/linen',
          'Calcium Carbide — ripening bananas',
          'Sodium Nitrite — explosive fertilizer',
          'Potassium Permanganate — fuel',
        ],
        correctOptionIndex: 0,
        explanation: 'Prepared by passing dry chlorine gas over slaked lime [$Ca(OH)_2$], bleaching powder releases disinfecting chlorine.',
        difficulty: 'foundation',
      },
      {
        stem: 'What is **"Aqua Regia"** (Royal Water), uniquely capable of dissolving noble metals like **Gold and Platinum**?',
        options: [
          'Pure distilled glacial spring water',
          'A freshly prepared **3 : 1 molar mixture** of concentrated **Hydrochloric Acid ($HCl$)** and **Nitric Acid ($HNO_3$)**',
          '100% concentrated Sulphuric Acid',
          'Liquid Ammonia mixed with ethanol',
        ],
        correctOptionIndex: 1,
        explanation: 'Neither $HCl$ nor $HNO_3$ alone dissolves gold, yet together they generate reactive nitrosyl chloride and nascent chlorine forming soluble chloroauric acid.',
        difficulty: 'standard',
      },
    ],
  },
  {
    topicTitle: 'Metals, Non-Metals, Alloys & Carbon Compounds',
    materialTitle: 'Metals, Non-Metals, Alloys & Carbon Compounds — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Reactivity Series, Alloys, Metallurgy, Carbon Allotropes & Polymers',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Metals, Non-Metals, Alloys & Carbon Compounds

## 1. Key Metals, Non-Metals & Physical Exceptions
- **Metals vs Non-Metals:** Metals are lustrous, malleable, ductile, sonorous, and form **basic/amphoteric oxides** ($ZnO, Al_2O_3$ are amphoteric!).
- **Famous Exceptions:**
  - **Mercury (Hg):** Only metal **liquid at room temperature** (Gallium/Caesium melt near ~29–30°C in palm!).
  - **Bromine (Br):** Only non-metal **liquid at room temperature**.
  - **Sodium / Potassium:** Soft metals cut with a knife; stored under **kerosene** to stop violent air/water reaction!
  - **Graphite:** Non-metal (carbon) that **conducts electricity** (due to delocalized fourth $\\pi$-electron per carbon atom!).
  - **Iodine:** Lustrous non-metal. **Diamond:** Hardest natural substance (3D tetrahedral covalent network).

## 2. Metallurgy & Corrosion Prevention
- **Reactivity Series:** $K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au > Pt$.
- **Key Ores:** **Bauxite** ($Al$), **Haematite / Magnetite** ($Fe$), **Copper Pyrites** ($Cu$), **Galena** ($Pb$), **Cinnabar** ($Hg$), **Zinc Blende / Calamine** ($Zn$).
- **Calcination vs Roasting:** *Calcination* heats **carbonate/hydrated** ores in *limited/absent air* ($ZnCO_3 \\rightarrow ZnO + CO_2$); *Roasting* heats **sulphide** ores strongly in *excess air* ($2ZnS + 3O_2 \\rightarrow 2ZnO + 2SO_2$).
- **Rusting Prevention:** **Galvanization** coats iron/steel with a **Zinc ($Zn$)** layer (even if scratched, more reactive zinc acts as a *sacrificial anode* protecting iron!).

## 3. Essential Alloys (High-Frequency Prelims Questions!)
| Alloy | Composition | Primary Use |
|---|---|---|
| **Brass** | **Copper (Cu) + Zinc (Zn)** | Utensils, musical horns (*Ransingha*), valves |
| **Bronze** | **Copper (Cu) + Tin (Sn)** | Harappan & Chola statues, medals, temple bells (*Thali/Ghanta*) |
| **Solder** | **Lead (Pb) + Tin (Sn)** | Low-melting-point electrical circuit welding |
| **Stainless Steel** | **Iron + Chromium (~11–18%) + Nickel + Carbon** | Rust-resistant surgical tools, cutlery |
| **Duralumin** | **Aluminium + Copper + Mg + Mn** | Lightweight strong aircraft frames |
| **Amalgam** | **Mercury + another metal** *(Iron does NOT form amalgam!)* | Dental fillings ($Ag–Sn–Hg$) |

## 4. Carbon Allotropes, Hydrocarbons & Everyday Polymers
- **Catenation & Tetravalency:** Carbon's ability to form long chains/rings produces millions of organic compounds.
- **Allotropes:** **Diamond** ($sp^3$, insulator, hardest), **Graphite** ($sp^2$ hexagonal layers, lubricant & electrode conductor), **Buckminsterfullerene ($C_{60}$)** (soccer-ball cage), **Graphene** (1-atom-thick sheet, ultra-strong & conductive).
- **Hydrocarbons:** **Alkanes** ($C_nH_{2n+2}$, saturated—*Methane/Biogas/CNG*, *Propane–Butane/LPG* + **Ethyl Mercaptan** odourant for leak detection!), **Alkenes** ($C_nH_{2n}$, double bond—*Ethene* used as natural fruit ripening hormone), **Alkynes** ($C_nH_{2n-2}$, triple bond—*Ethyne/Acetylene* oxy-acetylene welding).
- **Soaps vs Detergents:** Soaps (Na/K salts of fatty acids) form insoluble **scum** in **hard water** ($Ca^{2+}/Mg^{2+}$); synthetic detergents work cleanly even in hard hill spring water!
- **Vulcanization of Rubber:** Heating natural rubber (*polyisoprene*) with **Sulphur (3–5%)** crosslinks polymer chains for tyre strength & elasticity (Charles Goodyear).

## 5. Key Revision Takeaways
- **Brass = Cu + Zn**; **Bronze = Cu + Sn**; **Solder = Pb + Sn**; **Stainless Steel = Fe + Cr + Ni (+ C)**.
- **Galvanization** uses **Zinc**; **Vulcanization** uses **Sulphur**; **LPG leak smell** comes from **Ethyl Mercaptan**.
- **Graphite** conducts electricity among non-metals; **Bromine** is the only liquid non-metal.`,
    mcqs: [
      {
        stem: 'Which pair correctly distinguishes the compositions of **Brass** and **Bronze**?',
        options: [
          'Brass = Copper + Tin; Bronze = Copper + Zinc',
          'Brass = Copper + Zinc; Bronze = Copper + Tin',
          'Brass = Iron + Carbon; Bronze = Lead + Tin',
          'Brass = Aluminium + Magnesium; Bronze = Silver + Gold',
        ],
        correctOptionIndex: 1,
        explanation: 'Brass is an alloy of Copper (Cu) and Zinc (Zn), whereas Bronze is an alloy of Copper (Cu) and Tin (Sn).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which non-metal is **liquid** at normal room temperature, and which metal is **liquid** at normal room temperature?',
        options: [
          'Non-metal: Chlorine; Metal: Sodium',
          'Non-metal: Bromine ($Br_2$); Metal: Mercury ($Hg$)',
          'Non-metal: Carbon; Metal: Tungsten',
          'Non-metal: Iodine; Metal: Iron',
        ],
        correctOptionIndex: 1,
        explanation: 'Bromine is a reddish-brown liquid non-metal, and Mercury is the classic liquid metal used in barometers/thermometers.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which crystalline allotrope of Carbon is an excellent **conductor of electricity** despite carbon being a non-metal?',
        options: ['Diamond', 'Graphite', 'Quartz', 'Sulphur'],
        correctOptionIndex: 1,
        explanation: 'Each carbon in Graphite’s planar hexagonal layers forms 3 covalent bonds, leaving a fourth mobile delocalized electron to conduct current.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which metal is coated onto iron sheets/roofs (common across Uttarakhand hill houses) during **Galvanization** to protect against rust?',
        options: ['Lead', 'Zinc ($Zn$)', 'Tin', 'Sodium'],
        correctOptionIndex: 1,
        explanation: 'Zinc is higher in the reactivity series than iron and acts as a sacrificial protective barrier even when tiny scratches occur.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why is **Ethyl Mercaptan** ($C_2H_5SH$) deliberately added in trace amounts to domestic **LPG cylinders**?',
        options: [
          'To increase flame heat',
          'LPG (Propane & Butane) is naturally odourless, so pungent Ethyl Mercaptan gives an instant unmistakable smell warning of dangerous gas leaks',
          'To turn flame blue',
          'To prevent iron cylinder rusting',
        ],
        correctOptionIndex: 1,
        explanation: 'Pure propane and butane lack odour; trace mercaptan (ethanethiol) alerts households long before explosive gas concentrations build up.',
        difficulty: 'foundation',
      },
      {
        stem: 'What does **Vulcanization** of natural rubber (converting sticky soft latex into durable automobile tyres) involve heating raw rubber with?',
        options: ['Phosphorus', 'Sulphur', 'Mercury', 'Carbon monoxide'],
        correctOptionIndex: 1,
        explanation: 'Sulphur atoms create covalent disulphide cross-links between polyisoprene polymer chains, boosting tensile strength and heat resilience.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pair of metals constitutes electrical **Solder** alloy, valued for its low melting point?',
        options: [
          'Copper + Zinc',
          'Lead ($Pb$) + Tin ($Sn$)',
          'Iron + Chromium',
          'Aluminium + Copper',
        ],
        correctOptionIndex: 1,
        explanation: 'Lead–tin (and modern lead-free tin–silver–copper) solders melt cleanly below component damage thresholds.',
        difficulty: 'foundation',
      },
      {
        stem: 'In **Stainless Steel**, adding which essential alloying metal creates an invisible self-healing oxide film preventing iron corrosion/rust?',
        options: ['Lead', 'Chromium (Cr, typically >=11%, along with Nickel)', 'Potassium', 'Mercury'],
        correctOptionIndex: 1,
        explanation: 'Chromium forms a dense passive chromium-oxide surface barrier stopping rusting.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pair represents **Amphoteric Oxides**—metallic oxides capable of reacting chemically with BOTH acids AND strong bases to form salt and water?',
        options: [
          '$Na_2O$ and $CaO$',
          'Aluminium Oxide ($Al_2O_3$) and Zinc Oxide ($ZnO$)',
          '$CO_2$ and $SO_2$',
          '$N_2O$ and $CO$',
        ],
        correctOptionIndex: 1,
        explanation: 'While typical metal oxides are basic and non-metal oxides are acidic, $Al_2O_3$ and $ZnO$ exhibit dual amphoteric behaviour.',
        difficulty: 'standard',
      },
      {
        stem: 'Why are **Sodium** and **Potassium** stored submerged inside **Kerosene** bottles in chemistry laboratories?',
        options: [
          'To make them shine brighter',
          'Because they are extremely reactive alkali metals that react violently/exothermically upon exposure to atmospheric moisture and oxygen, catching fire easily',
          'To dissolve them into fuel',
          'To convert them into plastic',
        ],
        correctOptionIndex: 1,
        explanation: 'Kerosene shields soft Group 1 metals from $O_2$ and water vapour.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which ore is the primary industrial mineral mined to extract **Aluminium ($Al$)** metal?',
        options: ['Haematite', 'Bauxite', 'Galena', 'Cinnabar'],
        correctOptionIndex: 1,
        explanation: 'Bauxite ($Al_2O_3\\cdot xH_2O$) -> Bayer purification -> Hall–Heroult electrolytic reduction; Haematite = Iron, Galena = Lead, Cinnabar = Mercury.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why do synthetic **Detergents** lather cleanly in **Hard Water** (rich in dissolved $Ca^{2+}$ / $Mg^{2+}$ limestone ions typical of Mussoorie/Dehradun springs), whereas ordinary soaps fail?',
        options: [
          'Soaps freeze hard water',
          'Soaps precipitate insoluble calcium/magnesium salts ("scum"), whereas sulphonate/sulphate groups in synthetic detergents remain soluble with $Ca^{2+}$ and $Mg^{2+}$',
          'Detergents contain mercury',
          'Water evaporates instantly with soap',
        ],
        correctOptionIndex: 1,
        explanation: 'Detergents clean efficiently in both soft and mineral-hard hill spring waters.',
        difficulty: 'standard',
      },
      {
        stem: 'Which process heats **sulphide ores** (like Zinc Blende $ZnS$) strongly in the presence of **excess air/oxygen** to convert them into metal oxides?',
        options: ['Calcination', 'Roasting', 'Electroplating', 'Distillation'],
        correctOptionIndex: 1,
        explanation: 'Roasting uses excess air for sulphide ores ($SO_2$ released); Calcination uses limited air for carbonate ores ($CO_2$ released).',
        difficulty: 'standard',
      },
      {
        stem: 'Which metallic element NEVER forms a mercury **Amalgam** (allowing Mercury itself to be stored safely in containers of that metal)?',
        options: ['Gold', 'Silver', 'Iron ($Fe$)', 'Sodium'],
        correctOptionIndex: 2,
        explanation: 'Iron (along with Platinum/Tungsten) does not amalgamate with liquid mercury, which is why steel flasks hold mercury.',
        difficulty: 'standard',
      },
      {
        stem: 'What are the primary chemical constituents of **Biogas (Gobar Gas)** and **Compressed Natural Gas (CNG)** respectively?',
        options: [
          'Propane and Carbon monoxide',
          'Biogas: ~55–70% Methane ($CH_4$) + $CO_2$; CNG: predominantly compressed Methane ($CH_4$)',
          'Oxygen and Nitrogen',
          'Butane and Hydrogen fluoride',
        ],
        correctOptionIndex: 1,
        explanation: 'Anaerobic digestion of cattle dung/organic waste yields clean-burning methane-rich biogas widely promoted in rural Uttarakhand.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Cell Biology, Genetics & Plant Physiology',
    materialTitle: 'Cell Biology, Genetics & Plant Physiology — Study Notes',
    estimatedMinutes: 35,
    assessmentTitle: 'Practice Assessment: Organelles, Mitosis-Meiosis, DNA-RNA, Mendel & Photosynthesis',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Cell Biology, Genetics & Plant Physiology

## 1. Prokaryotic vs Eukaryotic Cells & Key Organelles
- **Prokaryotes** (*Bacteria, Cyanobacteria*): No true membrane-bound nucleus (**nucleoid**), **70S ribosomes**, lack mitochondria/chloroplasts.
- **Eukaryotes** (*Plants, Animals, Fungi, Protists*): True double-membraned nucleus, **80S ribosomes** (plus 70S inside mitochondria/plastids!).
- **Plant vs Animal Cells:** Plant cells possess rigid **Cellulose Cell Wall**, large central **Vacuole**, and **Plastids** (*Chloroplast, Chromoplast, Leucoplast*), whereas animal cells have **Centrioles/Centrosomes**!

| Cell Organelle | Famous Nickname & Core Function |
|---|---|
| **Mitochondria** | **"Powerhouse of the Cell"** — Aerobic cellular respiration & **ATP** generation; possesses **own circular DNA & 70S ribosomes**! |
| **Chloroplast** | **"Kitchen of Plant Cell"** — Photosynthesis (**Chlorophyll** contains central **Magnesium [$Mg$]** atom!); **own DNA & ribosomes**! |
| **Ribosomes** | **"Protein Factories"** — **Non-membranous** (Palade); site of mRNA translation |
| **Lysosomes** | **"Suicidal Bags"** — Acidic hydrolytic enzymes digest worn-out organelles or autolyse damaged cells (De Duve) |
| **Golgi Apparatus** | **"Post Office / Packaging Hub"** — Modifies, sorts, packages proteins/lipids into vesicles; forms acrosome |
| **Endoplasmic Reticulum** | **Rough ER** (ribosome-studded $\\rightarrow$ protein synthesis) vs **Smooth ER** (lipid/steroid synthesis & liver detoxification!) |

## 2. Cell Division: Mitosis vs Meiosis
- **Mitosis:** **Equational division** ($2n \\rightarrow 2n$); **2 identical diploid daughter cells**; drives somatic body growth, tissue repair, asexual reproduction.
- **Meiosis:** **Reductional division** ($2n \\rightarrow n$); **4 genetically diverse haploid gametes** via **Crossing Over** at *Pachytene* of Prophase-I—maintains constant chromosome number (**Humans: 46 = 23 pairs**) across generations!

## 3. DNA, RNA & Classical Genetics
- **DNA (Deoxyribonucleic Acid — Watson & Crick double helix):** Sugar = *Deoxyribose*; Nitrogen bases = **A=T** (2 H-bonds), **G≡C** (3 H-bonds). **Central Dogma:** $\\text{DNA} \\xrightarrow{\\text{Transcription}} \\text{mRNA} \\xrightarrow{\\text{Translation}} \\text{Protein}$.
- **RNA:** Single-stranded; sugar = *Ribose*; **Uracil ($U$)** replaces Thymine ($T$).
- **Mendel's Laws (Garden Pea *Pisum sativum*):** Law of Dominance, **Segregation (Purity of Gametes — 3:1 F2 monohybrid)**, **Independent Assortment (9:3:3:1 F2 dihybrid)**.
- **Human Sex Determination:** Female **XX**, Male **XY**—**father’s sperm (X or Y)** determines biological sex of offspring!
- **ABO Blood Grouping:** Discovered by **Karl Landsteiner** (codominance $I^A, I^B$; recessive $i$): **O–** = Universal Donor (lacks A/B/Rh antigens); **AB+** = Universal Recipient!

## 4. Plant Physiology Essentials
- **Xylem vs Phloem:** **Xylem** conducts **water & dissolved minerals upward (unidirectional)** via *Transpiration Pull*; **Phloem** translocates **sucrose food bidirectionally** from leaves to roots/fruits/buds!
- **Photosynthesis ($6CO_2 + 6H_2O \\xrightarrow{\\text{Light, Chl}} C_6H_{12}O_6 + 6O_2$):** **Light reaction** inside *Thylakoids/Grana* splits water releasing **$O_2$** + ATP/NADPH; **Dark reaction (Calvin Cycle)** inside *Stroma* fixes $CO_2$ into glucose!
- **Plant Hormones:** **Auxin** (apical dominance, phototropism), **Gibberellin** (stem elongation, bolting), **Cytokinin** (cell division, delays leaf senescence), **Abscisic Acid [ABA]** (**stress hormone** closing stomata during drought!), **Ethylene** (**gaseous fruit-ripening hormone**!).

## 5. Key Revision Takeaways
- **Mitochondria & Chloroplasts** are semi-autonomous organelles containing **their own DNA & 70S ribosomes**; **Ribosomes** have **NO membrane**.
- **Magnesium ($Mg$)** sits at the centre of **Chlorophyll**, just as **Iron ($Fe$)** sits inside **Haemoglobin**!
- **Xylem** = unidirectional water/minerals; **Phloem** = bidirectional food; **Ethylene** = gaseous ripening hormone; **ABA** = stress/stomatal closure hormone.`,
    mcqs: [
      {
        stem: 'Which two eukaryotic cell organelles are semi-autonomous because they possess their **own circular DNA and 70S ribosomes**?',
        options: [
          'Golgi Body and Lysosome',
          'Mitochondria and Chloroplasts',
          'Vacuole and Centrosome',
          'Smooth ER and Peroxisome',
        ],
        correctOptionIndex: 1,
        explanation: 'Consistent with Endosymbiotic Theory, both Mitochondria (energy) and Chloroplasts (photosynthesis) replicate semi-autonomously using internal DNA.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which metallic ion occupies the central coordination core of the green **Chlorophyll** molecule in plants?',
        options: ['Iron ($Fe$)', 'Magnesium ($Mg$)', 'Copper ($Cu$)', 'Zinc ($Zn$)'],
        correctOptionIndex: 1,
        explanation: 'Chlorophyll’s porphyrin ring chelates a central $Mg^{2+}$ ion (just as Haemoglobin’s heme chelates $Fe^{2+}$).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which cellular organelle lacks any surrounding lipid membrane and acts universally as the site of **protein synthesis** in both prokaryotes and eukaryotes?',
        options: ['Lysosome', 'Ribosome', 'Nucleus', 'Mitochondrion'],
        correctOptionIndex: 1,
        explanation: 'Ribosomes (70S in bacteria/mitochondria; 80S in eukaryotic cytosol/Rough ER) are non-membranous ribonucleoprotein particles.',
        difficulty: 'standard',
      },
      {
        stem: 'How does **Meiosis** differ critically from **Mitosis** during sexual reproduction?',
        options: [
          'Mitosis produces 4 haploid gametes; Meiosis makes 2 identical skin cells',
          'Meiosis halves chromosome number ($2n \\rightarrow n$) producing 4 genetically diverse haploid gametes via crossing over, whereas Mitosis produces 2 genetically identical diploid cells',
          'Meiosis skips DNA replication completely',
          'Both produce strictly identical clones',
        ],
        correctOptionIndex: 1,
        explanation: 'Halving ploidy in gametes prevents chromosome doubling upon fertilization, while crossing-over (*Pachytene*) drives variation.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which nitrogenous base is uniquely present in **RNA** in place of **Thymine (T)** found in DNA?',
        options: ['Adenine (A)', 'Guanine (G)', 'Cytosine (C)', 'Uracil (U)'],
        correctOptionIndex: 3,
        explanation: 'DNA uses A, T, G, C with deoxyribose; RNA uses A, U, G, C with ribose.',
        difficulty: 'foundation',
      },
      {
        stem: 'In plants, how does **Xylem** transport differ in direction and cargo from **Phloem** transport?',
        options: [
          'Xylem carries sugars downward; Phloem carries water strictly downward',
          'Xylem conducts water & mineral ions **unidirectionally upward** from roots to shoots, whereas Phloem translocates synthesized organic food (**sucrose**) **bidirectionally** from source to sinks',
          'Both carry only oxygen gas',
          'Plants lack vascular tissues',
        ],
        correctOptionIndex: 1,
        explanation: 'Dead xylem vessels/tracheids pull water via transpirational tension, while living phloem sieve tubes pump sucrose to roots, fruits, or growing buds.',
        difficulty: 'foundation',
      },
      {
        stem: 'During Photosynthesis, **Oxygen gas ($O_2$)** released into the atmosphere originates directly from the photolysis (splitting) of:',
        options: [
          'Carbon Dioxide ($CO_2$)',
          'Water ($H_2O$) during the light reaction in thylakoids',
          'Glucose molecules',
          'Atmospheric Nitrogen',
        ],
        correctOptionIndex: 1,
        explanation: 'Van Niel’s isotope-tracing experiments proved photosynthetic $O_2$ comes entirely from splitting $H_2O$, while $CO_2$ oxygen builds sugars.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **gaseous plant hormone** accelerates natural fruit ripening and leaf senescence/abscission?',
        options: ['Auxin', 'Gibberellin', 'Ethylene ($C_2H_4$)', 'Cytokinin'],
        correctOptionIndex: 2,
        explanation: 'Ethylene triggers respiratory climacteric ripening in bananas, mangoes, and tomatoes; artificial *Ethephon* releases ethylene safely (unlike toxic banned calcium carbide!).',
        difficulty: 'foundation',
      },
      {
        stem: 'Which plant hormone is known as the **"Stress Hormone"** because it rapidly triggers **stomatal closure** to conserve water during hill droughts?',
        options: [
          'Abscisic Acid (ABA)',
          'Auxin',
          'Gibberellic Acid',
          'Cytokinin',
        ],
        correctOptionIndex: 0,
        explanation: 'ABA counters growth promoters (Auxin/GA/Cytokinin) by inducing seed dormancy and stomatal guard-cell closure under water stress.',
        difficulty: 'standard',
      },
      {
        stem: 'Which blood group (considering both ABO and Rh factor) lacks A, B, and Rh surface antigens—making it the **Universal Red-Cell Donor** in medical emergencies?',
        options: ['AB Positive ($AB^+$)', 'O Negative ($O^-$)', 'A Positive ($A^+$)', 'B Negative ($B^-$)'],
        correctOptionIndex: 1,
        explanation: '$O^-$ RBCs carry zero A/B/D antigens to trigger recipient antibodies; conversely, $AB^+$ is the Universal Recipient.',
        difficulty: 'foundation',
      },
      {
        stem: 'Why are **Lysosomes** commonly termed the **"Suicidal Bags"** of eukaryotic cells?',
        options: [
          'They pump ATP out continuously',
          'They enclose potent digestive hydrolytic enzymes that, if ruptured during severe cell injury, digest the host cell itself (autolysis)',
          'They manufacture haemoglobin',
          'They store starch grains only',
        ],
        correctOptionIndex: 1,
        explanation: 'Discovered by Christian de Duve, lysosomes maintain an acidic interior (~pH 4.5–5) for intracellular waste breakdown.',
        difficulty: 'foundation',
      },
      {
        stem: 'In human genetics, which parent’s gamete determines whether a conceived zygote develops biologically as male (XY) or female (XX)?',
        options: [
          'Only the mother’s ovum (X vs Y)',
          'The father’s sperm (carrying either an **X** or a **Y** sex chromosome, while mothers contribute only **X**)',
          'External weather temperature',
          'Mitochondrial diet alone',
        ],
        correctOptionIndex: 1,
        explanation: 'Understanding scientific XY sex determination debunks irrational social blame historically placed on mothers.',
        difficulty: 'foundation',
      },
      {
        stem: 'In Gregor Mendel’s classic **Dihybrid Cross** between two heterozygous traits ($RrYy \\times RrYy$), what phenotypic ratio emerged in the $F_2$ generation demonstrating **Independent Assortment**?',
        options: ['3 : 1', '1 : 2 : 1', '9 : 3 : 3 : 1', '1 : 1 : 1 : 1'],
        correctOptionIndex: 2,
        explanation: 'Monohybrid F2 phenotypic ratio is 3:1 (genotypic 1:2:1); unlinked dihybrid F2 yields 9:3:3:1.',
        difficulty: 'standard',
      },
      {
        stem: 'In eukaryotic photosynthesis, where does the **Dark Reaction (Calvin Cycle)** that fixes $CO_2$ into carbohydrates take place inside the chloroplast?',
        options: [
          'Mitochondrial cristae',
          'Chloroplast Stroma (using ATP and NADPH produced by light reactions on grana thylakoids)',
          'Nuclear pore',
          'Golgi cisternae',
        ],
        correctOptionIndex: 1,
        explanation: 'RuBisCO enzyme inside the chloroplast stroma catalyses carbon fixation into 3-PGA without directly requiring photons—though dependent on light-made ATP/NADPH.',
        difficulty: 'standard',
      },
      {
        stem: 'Which tiny structures on leaf undersides, flanked by a pair of kidney/dumbbell-shaped **Guard Cells**, regulate $CO_2$ intake and **transpiration** water loss?',
        options: ['Lenticels only', 'Stomata', 'Root hairs', 'Sieve plates'],
        correctOptionIndex: 1,
        explanation: 'Turgor pressure changes inside Guard Cells (driven by potassium $K^+$ ion & water influx) open and close stomatal pores.',
        difficulty: 'foundation',
      },
    ],
  },
];
