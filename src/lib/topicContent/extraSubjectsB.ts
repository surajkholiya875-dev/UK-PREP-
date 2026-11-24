import { TopicContentPackage } from './types';

export const EXTRA_SUBJECTS_PART_B: TopicContentPackage[] = [
  {
    topicTitle: 'Computer Architecture, Memory & Input/Output Devices',
    materialTitle: 'Computer Architecture, Memory Hierarchy & Input/Output Systems — Study Notes',
    estimatedMinutes: 28,
    assessmentTitle: 'Practice Assessment: Computer Architecture, Memory & I/O Devices',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Computer Architecture, Memory & Input/Output Devices

## 1. Generations of Computers & Von Neumann Architecture
- **Five Generations:**
  1. **First (1940s–1950s):** Vacuum Tubes (*ENIAC, UNIVAC-I*); machine language; magnetic drums.
  2. **Second (1950s–1960s):** Transistors; assembly language & early high-level languages (*FORTRAN, COBOL*).
  3. **Third (1960s–1970s):** Integrated Circuits (ICs — SSI/MSI); keyboards/monitors; operating systems.
  4. **Fourth (1970s–Present):** Microprocessors (VLSI — e.g., Intel 4004); PCs, GUI, LAN/Internet.
  5. **Fifth (Present & Beyond):** ULSI/AI, parallel processing, quantum/neural computing.
- **Von Neumann Stored-Program Concept (1945):** Single shared memory holds **both instructions and data**, executed via **Fetch $\\rightarrow$ Decode $\\rightarrow$ Execute** cycle.
- **CPU Components:**
  - **ALU (Arithmetic Logic Unit):** Arithmetic ($+, -, \\times, \\div$) and logical/comparison operations.
  - **CU (Control Unit):** Directs instruction flow, timing signals, and data routing (does not compute arithmetic itself).
  - **Registers:** Fastest internal CPU storage (**Accumulator, Program Counter [PC], Memory Address Register [MAR], Instruction Register [IR]**).

## 2. Memory Hierarchy (Speed vs Capacity vs Cost)
| Tier | Memory Type | Volatility | Speed / Typical Role |
| :--- | :--- | :--- | :--- |
| **1** | **CPU Registers** | Volatile | Fastest (picoseconds/nanoseconds); holds active operands & next address |
| **2** | **Cache Memory (L1, L2, L3 — SRAM)** | Volatile | Ultra-fast; bridges speed gap between CPU & RAM using locality of reference |
| **3** | **Primary RAM (DRAM / DDR4 / DDR5)** | Volatile | Main working memory; loses data when power turns off |
| **4** | **ROM / PROM / EPROM / EEPROM / Flash** | **Non-Volatile** | Holds **BIOS/UEFI firmware & POST (Power-On Self-Test)** bootstrap code |
| **5** | **Secondary Storage (SSD / HDD / Optical)** | **Non-Volatile** | SSD uses **NAND Flash** (no moving parts); HDD uses magnetic platters; DVD ~4.7 GB, Blu-ray ~25 GB |

- **Storage Units:** $1\\text{ Bit}$ (0/1) $\\rightarrow$ $4\\text{ Bits} = 1\\text{ Nibble}$ $\\rightarrow$ $8\\text{ Bits} = 1\\text{ Byte}$ $\\rightarrow$ $1\\text{ KB} = 1024\\text{ Bytes}$ (binary IEC KiB) $\\rightarrow$ MB $\\rightarrow$ GB $\\rightarrow$ TB $\\rightarrow$ PB.

## 3. Input, Output & Dual Peripheral Devices
- **Input Devices:** Keyboard, Mouse, **MICR** (Magnetic Ink Character Recognition — bank cheque numbers), **OMR** (Optical Mark Recognition — UKPSC/UKSSSC MCQ answer sheets!), **OCR** (Optical Character Recognition), Barcode/QR Scanner, Joystick, Microphone, Biometric Scanner.
- **Output Devices:** Monitor (LCD/LED/OLED; resolution in pixels, refresh rate in Hz), Printer (**Impact:** Dot Matrix, Daisy Wheel; **Non-Impact:** Inkjet, Laser [uses toner & drum], Thermal [ATM/POS receipts]), Plotter (CAD/engineering maps), Speaker, Projector.
- **Dual (Both Input & Output):** **Touchscreen**, Modem, NIC (Network Interface Card), Headset with Mic.

## 4. Key Revision Takeaways
- **SRAM** builds **Cache** (fast, no refresh needed); **DRAM** builds **Main RAM** (requires periodic refresh).
- **ROM/EEPROM/UEFI** is non-volatile and boots the system via **POST**; **OMR** grades competitive exam bubble sheets.`,
    mcqs: [
      {
        stem: 'Which electronic component characterized **Third-Generation computers**, replacing discrete transistors and dramatically reducing size and heat output?',
        options: [
          'Vacuum tubes',
          'Integrated Circuits (ICs)',
          'Quantum superconducting qubits',
          'Mechanical punched-card relays',
        ],
        correctOptionIndex: 1,
        explanation: 'First generation used vacuum tubes, second used transistors, third introduced silicon Integrated Circuits (SSI/MSI), and fourth introduced VLSI microprocessors.',
        difficulty: 'foundation',
      },
      {
        stem: 'In a computer’s **memory hierarchy**, arrange the following storage types from **fastest access speed to slowest access speed**:',
        options: [
          'SSD $\\rightarrow$ DRAM $\\rightarrow$ Cache $\\rightarrow$ CPU Registers',
          'CPU Registers $\\rightarrow$ Cache (SRAM) $\\rightarrow$ Main Memory (DRAM) $\\rightarrow$ Secondary Storage (SSD/HDD)',
          'Cache $\\rightarrow$ ROM $\\rightarrow$ CPU Registers $\\rightarrow$ HDD',
          'DRAM $\\rightarrow$ CPU Registers $\\rightarrow$ Magnetic Tape $\\rightarrow$ Cache',
        ],
        correctOptionIndex: 1,
        explanation: 'Registers sit inside the CPU core (fastest), followed by on-die L1/L2/L3 Cache (SRAM), main RAM (DRAM), and non-volatile secondary drives.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which of the following statements accurately distinguishes **SRAM** from **DRAM**?',
        options: [
          'DRAM is faster and used for L1 CPU cache, whereas SRAM is slower and needs constant refreshing',
          'SRAM uses flip-flops, does not require continuous electrical refreshing, and is used in Cache memory; DRAM uses capacitors, requires periodic refreshing, and serves as Main RAM',
          'Both SRAM and DRAM are non-volatile permanent ROM chips',
          'SRAM stores data magnetically on spinning platters',
        ],
        correctOptionIndex: 1,
        explanation: 'Static RAM (SRAM) holds state via multi-transistor latches without refresh cycles, making it ideal for expensive, ultra-fast CPU caches; Dynamic RAM (DRAM) uses single-transistor/capacitor cells.',
        difficulty: 'standard',
      },
      {
        stem: 'How many **bytes** make exactly **1 Nibble** and **1 Kilobyte (binary convention)** respectively?',
        options: [
          '8 bits and 1000 bits',
          '4 bits (0.5 byte) and 1024 bytes',
          '16 bits and 512 bytes',
          '2 bits and 2048 bytes',
        ],
        correctOptionIndex: 1,
        explanation: 'One Nibble equals 4 bits (half an 8-bit byte), while binary 1 KB equals $2^{10} = 1024$ bytes.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which CPU register specifically holds the **memory address of the next instruction** to be fetched during the machine cycle?',
        options: [
          'Arithmetic Logic Unit (ALU)',
          'Program Counter (PC)',
          'Optical Mark Reader (OMR)',
          'Line Printer Spooler',
        ],
        correctOptionIndex: 1,
        explanation: 'The Program Counter (Instruction Pointer) automatically increments after each fetch to point to the next instruction in memory.',
        difficulty: 'standard',
      },
      {
        stem: 'In **banking operations across India**, cheques carry special bottom-line account and routing codes read cleanly even over stamps using which input technology?',
        options: [
          'OMR (Optical Mark Recognition)',
          'MICR (Magnetic Ink Character Recognition)',
          'Dot Matrix Impact Printing',
          'Thermal Wax Plotting',
        ],
        correctOptionIndex: 1,
        explanation: 'MICR readers detect iron-oxide magnetic ink printed in E-13B/CMC-7 fonts on cheques, preventing fraud and misreads.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which firmware routine stored in **non-volatile ROM/UEFI** executes immediately upon powering on a PC to check RAM, keyboard, and storage readiness before loading the OS?',
        options: [
          'Defragmentation Wizard',
          'POST (Power-On Self-Test)',
          'Virtual Paging Swapper',
          'DNS Resolver',
        ],
        correctOptionIndex: 1,
        explanation: 'BIOS/UEFI triggers POST first to verify core hardware integrity and then passes control to the bootloader.',
        difficulty: 'standard',
      },
      {
        stem: 'Which pair classifies **Impact** and **Non-Impact** printers accurately?',
        options: [
          'Laser = Impact; Dot Matrix = Non-Impact',
          'Dot Matrix = Impact (strikes inked ribbon against paper); Laser and Inkjet = Non-Impact',
          'Thermal = Impact; Daisy Wheel = Non-Impact',
          'Plotter = Non-Impact memory chip',
        ],
        correctOptionIndex: 1,
        explanation: 'Impact printers (Dot Matrix, Daisy Wheel) physically strike paper to produce carbon copies, whereas Laser/Inkjet/Thermal printers print without mechanical hammer contact.',
        difficulty: 'standard',
      },
      {
        stem: 'What fundamentally differentiates an **SSD (Solid State Drive)** from a traditional **HDD (Hard Disk Drive)**?',
        options: [
          'SSDs use rotating magnetic disks while HDDs use NAND flash chips',
          'SSDs store data electronically in non-volatile NAND Flash memory with zero moving mechanical parts, yielding much faster random access and shock resistance',
          'SSDs lose all stored files when unplugged',
          'HDDs connect only to VGA monitor ports',
        ],
        correctOptionIndex: 1,
        explanation: 'Because SSDs avoid mechanical seek/rotational latency, they dramatically accelerate boot times and field durability in laptops.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which statement best captures **Von Neumann Architecture** as used in modern general-purpose computers?',
        options: [
          'Instructions and data are permanently hardwired and cannot share RAM',
          'Both program instructions and data reside together in the same addressable read/write memory and travel over a shared bus',
          'Only optical input devices can communicate with the ALU',
          'The Control Unit executes floating-point multiplication directly',
        ],
        correctOptionIndex: 1,
        explanation: 'Stored-program Von Neumann architecture allows computers to be reprogrammed simply by loading new instructions into main memory (note the "Von Neumann bottleneck" on the shared bus).',
        difficulty: 'advanced',
      },
      {
        stem: 'Which peripheral acts simultaneously as **both an Input and an Output (I/O)** device?',
        options: [
          'Standard mechanical keyboard',
          'Touchscreen display',
          'Barcode wand',
          'Laser printer',
        ],
        correctOptionIndex: 1,
        explanation: 'A touchscreen renders visual output while capturing capacitive/resistive touch coordinates as user input.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which type of **ROM** can be erased and reprogrammed **electrically byte-by-byte or block-by-block** without removing the chip or exposing it to UV light?',
        options: [
          'Mask ROM',
          'EEPROM / Flash Memory',
          'OTP PROM',
          'Punched Paper Tape',
        ],
        correctOptionIndex: 1,
        explanation: 'Unlike EPROM (which requires ultraviolet light through a quartz window), EEPROM and its Flash derivative erase electrically in-circuit.',
        difficulty: 'standard',
      },
      {
        stem: 'A **Vector CAD engineering blueprint** of a Himalayan tunnel or dam alignment is best produced on large paper using which specialized output device?',
        options: [
          'OMR scanner',
          'Plotter',
          'Thermal receipt roll',
          'Digitizer tablet',
        ],
        correctOptionIndex: 1,
        explanation: 'Plotters draw continuous vector lines on wide-format sheets for architectural, GIS, and civil engineering drawings.',
        difficulty: 'standard',
      },
      {
        stem: 'Why does **Virtual Memory** use a portion of secondary storage (page file/swap) alongside physical RAM?',
        options: [
          'To replace the CPU clock crystal',
          'To allow the operating system to run programs larger than available physical RAM by swapping inactive memory pages cleanly to disk',
          'To permanently burn firmware into CMOS',
          'To increase monitor refresh rate',
        ],
        correctOptionIndex: 1,
        explanation: 'Demand paging maps virtual addresses to physical frames or swap space, though excessive page faults cause "thrashing".',
        difficulty: 'advanced',
      },
      {
        stem: 'If an **8-bit unsigned binary integer** represents memory values in a microcontroller register, what is the exact decimal range it can store?',
        options: [
          '0 to 127',
          '0 to 255 ($2^8 - 1$)',
          '1 to 256',
          '0 to 512',
        ],
        correctOptionIndex: 1,
        explanation: 'An 8-bit field holds $2^8 = 256$ distinct states, spanning 00000000 ($0$) through 11111111 ($255$).',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'Operating Systems, MS Office & Database Basics',
    materialTitle: 'Operating Systems, Office Productivity Suites & DBMS Fundamentals — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Operating Systems, MS Office & DBMS',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Operating Systems, MS Office & Database Basics

## 1. Operating Systems (OS) Core Functions
- **Definition:** System software acting as the interface between hardware and users/applications (**Windows, Linux, macOS, Android, iOS**).
- **Key Functions:** Process & CPU scheduling (multitasking, time-sharing), Memory management (paging/virtual memory), File systems (**NTFS/FAT32/ext4**), Device drivers, Security/User privileges, Deadlock handling.
- **Linux & Open Source:** Created by **Linus Torvalds (1991)** around Unix-like kernel; open-source distributions (**Ubuntu, Debian, BOSS Linux [Bharat Operating System Solutions by C-DAC]**). **Kernel** = core OS resident in RAM; **Shell** = command interpreter.

## 2. MS Office & LibreOffice Productivity Essentials (UKSSSC / RO-ARO Focus)
- **MS Word (\`.docx\`) / Writer:** Mail Merge (combines main letter template with recipient data source), Header/Footer, Footnote vs Endnote (bottom of page vs end of document/section), Track Changes, **Ctrl+C/V/X/Z/Y**, **Ctrl+F (Find), Ctrl+H (Find & Replace), Ctrl+B/I/U**, **Ctrl+Shift+> (Grow font)**, **F7 (Spell Check)**, **Ctrl+K (Hyperlink)**.
- **MS Excel (\`.xlsx\`) / Calc:** Workbook contains Worksheets (Rows $1, 2, 3\\dots$; Columns $A, B, C\\dots$).
  - **Formulas begin with \`=\`** (e.g., \`=SUM(A1:A10)\`, \`=AVERAGE(...)\`, \`=COUNT(...)\`, \`=IF(...)\`, \`=VLOOKUP(...)\`).
  - **Cell Referencing:** Relative (\`A1\`), **Absolute (\`$A$1\` — frozen with \`F4\`)**, Mixed (\`$A1\` or \`A$1\`).
  - **Shortcut Keys:** \`F2\` (Edit active cell), \`Ctrl+;\` (Current date), \`Ctrl+Space\` (Select column), \`Shift+Space\` (Select row).
- **MS PowerPoint (\`.pptx\`) / Impress:** **F5** (Start slideshow from Slide 1), **Shift+F5** (From current slide), **Ctrl+M** (Insert new slide), **Ctrl+N** (New presentation), Slide Master (uniform theme/logo across all slides), Slide Transition vs Animation.

## 3. Database Management Systems (DBMS & RDBMS)
- **Data Hierarchy:** Bit $\\rightarrow$ Byte/Char $\\rightarrow$ Field (Column/Attribute) $\\rightarrow$ Record (Row/Tuple) $\\rightarrow$ Table (Relation) $\\rightarrow$ Database.
- **RDBMS (Relational DBMS — E.F. Codd):** Stores data in normalized 2D tables linked via keys (**MySQL, PostgreSQL, Oracle, SQLite**).
- **Keys:**
  - **Primary Key:** Uniquely identifies each row; **cannot be NULL or duplicate**.
  - **Candidate Key:** Minimal attributes eligible to be Primary Key.
  - **Foreign Key:** Attribute referencing Primary Key of another table to enforce **Referential Integrity**.
- **SQL Categories:**
  - **DDL (Definition):** \`CREATE\`, \`ALTER\`, \`DROP\`, \`TRUNCATE\`
  - **DML (Manipulation):** \`SELECT\`, \`INSERT\`, \`UPDATE\`, \`DELETE\`
  - **DCL (Control):** \`GRANT\`, \`REVOKE\`
  - **TCL (Transaction):** \`COMMIT\`, \`ROLLBACK\` (follows **ACID** properties: **Atomicity, Consistency, Isolation, Durability**).

## 4. Key Revision Takeaways
- **Ctrl+N** creates a new document/presentation whereas **Ctrl+M** inserts a new slide in PowerPoint.
- **\`$A$1\`** locks both column and row in Excel; **Primary Key** never permits NULL or duplicate values.`,
    mcqs: [
      {
        stem: 'Which component of an Operating System remains permanently resident in main memory during operation to manage CPU scheduling, hardware interrupts, and system calls?',
        options: [
          'Spreadsheet Macro',
          'Kernel',
          'Browser Cache',
          'BIOS Screen Saver',
        ],
        correctOptionIndex: 1,
        explanation: 'The Kernel is the innermost core of an OS mediating directly with CPU, RAM, and device hardware, whereas the Shell serves as the user command interface.',
        difficulty: 'foundation',
      },
      {
        stem: 'In **MS PowerPoint**, what is the exact keyboard shortcut difference between **Ctrl+M** and **Ctrl+N**?',
        options: [
          'Ctrl+M closes PowerPoint; Ctrl+N inserts a slide',
          'Ctrl+M inserts a new slide into the active presentation; Ctrl+N opens an entirely new blank presentation',
          'Both shortcuts start Slide Show from the beginning',
          'Ctrl+M prints notes; Ctrl+N merges shapes',
        ],
        correctOptionIndex: 1,
        explanation: 'In PowerPoint, Ctrl+N creates a New presentation file, while Ctrl+M inserts a new slide (and F5 / Shift+F5 launch the slideshow).',
        difficulty: 'foundation',
      },
      {
        stem: 'In an **MS Excel** spreadsheet formula, what does writing **`=$B$2 * C2`** achieve when copied downward to rows 3, 4, and 5?',
        options: [
          'Throws a #REF! syntax error',
          'Locks cell B2 as an absolute reference while allowing C2 to adjust relatively to C3, C4, C5',
          'Converts currency to US Dollars',
          'Deletes values in Column B',
        ],
        correctOptionIndex: 1,
        explanation: 'Dollar signs ($) fix column and/or row coordinates during formula autofill; pressing F4 toggles relative, absolute, and mixed modes.',
        difficulty: 'standard',
      },
      {
        stem: 'Which MS Word feature allows an office clerk to generate **500 personalized appointment letters** by combining one master letter template with an Excel list of names and addresses?',
        options: [
          'Track Changes',
          'Mail Merge',
          'WordArt',
          'Cross-Reference',
        ],
        correctOptionIndex: 1,
        explanation: 'Mail Merge links a main template document with a structured data source (recipients list) to bulk-produce personalized letters, labels, or emails.',
        difficulty: 'foundation',
      },
      {
        stem: 'In **RDBMS theory**, which two constraints apply strictly to a table’s **Primary Key**?',
        options: [
          'Must be numeric and can contain multiple NULLs',
          'Must contain unique values for every tuple (row) and cannot accept NULL values (Entity Integrity)',
          'Must always duplicate a Foreign Key from another database',
          'Can hold text strings only',
        ],
        correctOptionIndex: 1,
        explanation: 'Entity Integrity dictates that no Primary Key attribute may be NULL or duplicated across rows.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **SQL command group** includes **`CREATE`**, **`ALTER`**, and **`DROP`** statements used to define or modify table schemas?',
        options: [
          'DML (Data Manipulation Language)',
          'DDL (Data Definition Language)',
          'DCL (Data Control Language)',
          'HTML (HyperText Markup Language)',
        ],
        correctOptionIndex: 1,
        explanation: 'DDL manages database structures (CREATE, ALTER, DROP, TRUNCATE), whereas DML manipulates rows (SELECT, INSERT, UPDATE, DELETE).',
        difficulty: 'standard',
      },
      {
        stem: 'What is **BOSS Linux**, frequently referenced in Indian e-governance examinations?',
        options: [
          'A proprietary Windows server patch',
          'Bharat Operating System Solutions — an Indian GNU/Linux distribution developed by C-DAC to localize open-source computing across Indian languages',
          'A banking hardware ATM router',
          'An antivirus plugin for Android phones',
        ],
        correctOptionIndex: 1,
        explanation: 'C-DAC developed BOSS Linux (Debian-based) with support for 18+ Indian scripts including Devanagari for government adoption.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **MS Excel function** counts only those cells within range `A1:A20` that contain **numeric values** (ignoring empty cells and text)?',
        options: [
          '`=SUM(A1:A20)`',
          '`=COUNT(A1:A20)`',
          '`=COUNTA(A1:A20)`',
          '`=MAX(A1:A20)`',
        ],
        correctOptionIndex: 1,
        explanation: '`=COUNT()` counts numeric entries only, whereas `=COUNTA()` counts all non-empty cells including text.',
        difficulty: 'standard',
      },
      {
        stem: 'What is the fundamental distinction between a **Footnote** and an **Endnote** in MS Word?',
        options: [
          'Footnotes appear at the bottom of the same page; Endnotes gather at the end of the section or entire document',
          'Footnotes appear in Slide Master; Endnotes appear in Excel',
          'Endnotes cannot carry citations',
          'Footnotes appear only in the Header',
        ],
        correctOptionIndex: 0,
        explanation: 'Footnotes place reference explanations at the bottom margin of the current page, while Endnotes group references at document/section conclusion.',
        difficulty: 'foundation',
      },
      {
        stem: 'In relational database transactions, what does the **"A"** in **ACID properties** stand for?',
        options: [
          'Authentication',
          'Atomicity ("all-or-nothing" execution: either every step commits or the whole transaction rolls back)',
          'Aggregation',
          'Asynchronous Indexing',
        ],
        correctOptionIndex: 1,
        explanation: 'ACID stands for Atomicity, Consistency, Isolation, and Durability—protecting integrity during partial crashes (e.g., bank debit+credit).',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Keyboard Shortcut** opens the **Find and Replace** dialog box in MS Word and MS Excel, and which launches **Spell & Grammar Check**?',
        options: [
          'Ctrl+G and F2',
          'Ctrl+H (Find & Replace) and F7 (Spelling & Grammar)',
          'Ctrl+K and F5',
          'Alt+F4 and F12',
        ],
        correctOptionIndex: 1,
        explanation: 'Ctrl+F finds, Ctrl+H opens Find & Replace, Ctrl+K inserts a Hyperlink, and F7 invokes Spelling & Grammar verification.',
        difficulty: 'foundation',
      },
      {
        stem: 'In a multi-table university or district database, what role does a **Foreign Key** serve?',
        options: [
          'Encrypts passwords with SHA-256',
          'Links a column in one table to the Primary Key of another table to maintain Referential Integrity',
          'Compresses image blobs into ZIP archives',
          'Replaces the Operating System scheduler',
        ],
        correctOptionIndex: 1,
        explanation: 'Foreign Keys prevent orphan records (e.g., an exam registration referencing a non-existent candidate ID).',
        difficulty: 'standard',
      },
      {
        stem: 'What condition defines a **Deadlock** in Operating System process management?',
        options: [
          'A monitor unplugging during sleep mode',
          'A circular waiting state in which two or more processes each hold a resource needed by another process and cannot proceed indefinitely',
          'Overclocking CPU frequency',
          'Running two Excel sheets simultaneously',
        ],
        correctOptionIndex: 1,
        explanation: 'Coffman’s four necessary deadlock conditions are Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which **Database Normalization** stage (**1NF $\\rightarrow$ 2NF $\\rightarrow$ 3NF**) specifically eliminates **Transitive Dependencies** of non-key attributes on the Primary Key?',
        options: [
          'First Normal Form (1NF)',
          'Third Normal Form (3NF)',
          'Unnormalized Form',
          'SQL Truncation',
        ],
        correctOptionIndex: 1,
        explanation: '1NF ensures atomic columns, 2NF removes partial dependencies on composite keys, and 3NF removes transitive non-key dependencies to prevent update anomalies.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which shortcut in **MS PowerPoint** lets a presenter immediately **begin the Slide Show from the currently selected slide** rather than jumping back to Slide 1?',
        options: [
          'F5',
          'Shift + F5',
          'Ctrl + S',
          'Alt + Tab',
        ],
        correctOptionIndex: 1,
        explanation: 'F5 launches from Slide 1; Shift+F5 launches from the currently active slide.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Internet Protocols, E-Governance & Cyber Threats',
    materialTitle: 'Networking Protocols, Indian E-Governance & Cyber Security — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Internet Protocols, E-Governance & Cyber Security',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Internet Protocols, E-Governance & Cyber Threats

## 1. Networks, OSI Model & Core Internet Protocols
- **Network Types:** **PAN** (Bluetooth), **LAN** (Ethernet/Wi-Fi within campus), **MAN** (city-wide cable), **WAN** (Internet).
- **OSI 7-Layer Model (Bottom to Top — "Please Do Not Throw Sausage Pizza Away"):**
  1. **Physical** (bits, cables, Hub, Repeater) $\\rightarrow$ 2. **Data Link** (MAC address, frames, **Switch**) $\\rightarrow$ 3. **Network** (**IP address**, packets, **Router**) $\\rightarrow$ 4. **Transport** (**TCP/UDP**, segments, ports) $\\rightarrow$ 5. **Session** $\\rightarrow$ 6. **Presentation** (encryption, compression) $\\rightarrow$ 7. **Application** (**HTTP/HTTPS, SMTP, POP3/IMAP, FTP, DNS**).
- **IPv4 vs IPv6:** IPv4 = **32-bit** (4 dotted octets, e.g., \`192.168.1.1\`); IPv6 = **128-bit** hexadecimal (solves address exhaustion).
- **Key Protocols:**
  - **TCP vs UDP:** TCP is connection-oriented & reliable; UDP is connectionless & low-latency (video streaming/VoIP).
  - **HTTP (Port 80) / HTTPS (Port 443 — TLS/SSL encrypted)**; **FTP (20/21)**; **SMTP (send email)** vs **POP3/IMAP (receive email)**; **DNS** (translates domain names like \`ukpsc.gov.in\` to IP addresses).
  - **MAC Address:** 48-bit permanent hardware address on NIC (burned-in).

## 2. E-Governance in India & Uttarakhand
- **National Pillars:** **Digital India**, **UMANG** (Unified Mobile Application for New-age Governance), **DigiLocker** (verifiable digital certificates with legal equivalence under IT Rules), **UPI / NPCI**, **GeM** (Government e-Marketplace), **SWAN** (State Wide Area Network), **CSC** (Common Service Centres).
- **Uttarakhand Initiatives:** **e-District Uttarakhand / Apuni Sarkar Portal** (caste, domicile, income certificates online), **Devbhoomi Bhulekh** (digitized land records/Khatauni), **CM Helpline 1905**, **e-Cabinet & e-Office** in Dehradun Secretariat.

## 3. Cyber Threats, Defences & Legal Framework
- **Malware Types:**
  - **Virus** (attaches to host file, needs execution) vs **Worm** (self-replicates across networks without host file) vs **Trojan Horse** (disguised as benign software) vs **Ransomware** (encrypts files and demands ransom, e.g., WannaCry) vs **Spyware / Keylogger**.
- **Attack Vectors:** **Phishing / Spear-Phishing / Vishing / Smishing** (credential theft via deceptive links/calls/SMS), **DDoS** (flooding servers via botnets), **SQL Injection**, **Man-in-the-Middle (MitM)**, **Zero-Day Exploit**.
- **Defences & Indian Law:** **Firewall** (filters packet traffic), **2FA/MFA**, **Digital Signature** (asymmetric **PKI** guaranteeing **authenticity, integrity & non-repudiation**), **CERT-In** (national cyber incident nodal agency under MeitY), **Information Technology Act, 2000** (Sec 43/66 cyber offences; Sec 66C identity theft; Sec 66F cyber terrorism).

## 4. Key Revision Takeaways
- **Router** operates at **Network Layer (IP)**; **Switch** operates at **Data Link Layer (MAC)**.
- **IPv4 = 32-bit**, **IPv6 = 128-bit**, **MAC = 48-bit**; **SMTP sends email** whereas **IMAP/POP3 retrieve email**.`,
    mcqs: [
      {
        stem: 'Which internet protocol is specifically responsible for translating human-readable domain names (such as `psc.uk.gov.in`) into machine-routable **IP addresses**?',
        options: [
          'SMTP',
          'DNS (Domain Name System)',
          'ARP',
          'POP3',
        ],
        correctOptionIndex: 1,
        explanation: 'DNS serves as the internet’s distributed phonebook resolving domain names to IPv4/IPv6 addresses.',
        difficulty: 'foundation',
      },
      {
        stem: 'Compare the bit lengths of **IPv4**, **IPv6**, and a hardware **MAC Address**:',
        options: [
          'IPv4 = 64-bit, IPv6 = 32-bit, MAC = 16-bit',
          'IPv4 = 32-bit, IPv6 = 128-bit, MAC = 48-bit',
          'IPv4 = 48-bit, IPv6 = 64-bit, MAC = 128-bit',
          'All three use fixed 32-bit lengths',
        ],
        correctOptionIndex: 1,
        explanation: 'IPv4 uses 32 bits (~4.3 billion addresses), IPv6 expands to 128 bits (hexadecimal), and Ethernet NICs hold 48-bit MAC addresses.',
        difficulty: 'standard',
      },
      {
        stem: 'At which layer of the **7-layer OSI Reference Model** do a **Router** (using IP addresses) and a **Switch** (using MAC addresses) primarily operate?',
        options: [
          'Router at Physical; Switch at Application',
          'Router at Network Layer (Layer 3); Switch at Data Link Layer (Layer 2)',
          'Both at Transport Layer (Layer 4)',
          'Router at Session Layer; Switch at Presentation Layer',
        ],
        correctOptionIndex: 1,
        explanation: 'Switches forward Layer-2 frames based on MAC tables, whereas Routers make Layer-3 packet forwarding decisions across networks using IP routing tables.',
        difficulty: 'standard',
      },
      {
        stem: 'What distinguishes a **Computer Worm** from a classic **Computer Virus**?',
        options: [
          'A Worm cannot spread over networks',
          'A Worm is standalone self-replicating malware that propagates across networks without needing to attach to a host executable or require user clicks, whereas a Virus attaches to host files',
          'A Virus encrypts hardware ROM chips permanently',
          'A Worm is an anti-malware firewall utility',
        ],
        correctOptionIndex: 1,
        explanation: 'Viruses infect host files/macros and trigger upon execution; Worms actively scan and self-propagate through network vulnerabilities.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pair of email protocols handles **sending (outgoing)** mail vs **synchronizing/reading (incoming)** mail on remote servers?',
        options: [
          'FTP sends; HTTP receives',
          'SMTP sends outgoing mail; IMAP/POP3 retrieve incoming mail',
          'UDP sends; ICMP receives',
          'SSH sends; DNS receives',
        ],
        correctOptionIndex: 1,
        explanation: 'SMTP (Simple Mail Transfer Protocol) pushes outgoing messages between servers, while POP3/IMAP fetch messages into user clients.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Uttarakhand State E-Governance portals** provide citizens online access to **caste/domicile/income certificates** and **digitized Khatauni land records** respectively?',
        options: [
          'SWAYAM and BHIM',
          'Apuni Sarkar (e-District Uttarakhand) and Devbhoomi Bhulekh',
          'Vahan and FASTag',
          'DigiYatra and IRCTC',
        ],
        correctOptionIndex: 1,
        explanation: 'Apuni Sarkar delivers e-District citizen certificates in Uttarakhand, while Devbhoomi Bhulekh digitizes RoR/Khatauni land records across districts.',
        difficulty: 'standard',
      },
      {
        stem: 'Why does **HTTPS** protect online banking or exam portal logins far better than plain **HTTP**?',
        options: [
          'HTTPS increases monitor screen brightness',
          'HTTPS wraps HTTP traffic inside TLS/SSL encryption (Port 443), providing confidentiality, integrity, and server authentication against eavesdropping',
          'HTTPS disables DNS lookups',
          'HTTPS removes all cookies from browsers',
        ],
        correctOptionIndex: 1,
        explanation: 'Plain HTTP transmits credentials in cleartext; HTTPS establishes encrypted TLS sessions verified via digital certificates.',
        difficulty: 'foundation',
      },
      {
        stem: 'What type of cyberattack involves **disguised fraudulent emails or SMS links** purporting to be from a bank, UKPSC, or tax department to trick victims into entering OTPs or passwords?',
        options: [
          'Defragmentation',
          'Phishing (and Smishing over SMS)',
          'DNS Caching',
          'Packet Switching',
        ],
        correctOptionIndex: 1,
        explanation: 'Phishing (email), Vishing (voice call), and Smishing (SMS) exploit social engineering rather than software bugs to steal credentials.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which specialized national agency under the **Ministry of Electronics and IT (MeitY)** acts as India’s statutory nodal body for **cyber incident response, threat advisories, and vulnerability coordination**?',
        options: [
          'SEBI',
          'CERT-In (Indian Computer Emergency Response Team)',
          'TRAI',
          'NABARD',
        ],
        correctOptionIndex: 1,
        explanation: 'Empowered under Section 70B of the IT Act, 2000, CERT-In monitors cyber incidents and issues mandatory reporting norms and advisories.',
        difficulty: 'standard',
      },
      {
        stem: 'In asymmetric **Public Key Infrastructure (PKI)**, how does a **Digital Signature** guarantee **non-repudiation and integrity** on an official tender or government certificate?',
        options: [
          'By hiding the PDF inside an unencrypted ZIP file',
          'The sender hashes the document and encrypts the digest with their Private Key; anyone can verify authenticity using the sender’s Public Key',
          'By emailing the password in plain text',
          'By printing a paper photocopy',
        ],
        correctOptionIndex: 1,
        explanation: 'Only the holder of the Private Key could generate a valid signature matching the Public Key, preventing both tampering and later denial.',
        difficulty: 'advanced',
      },
      {
        stem: 'What does **Ransomware** specifically do upon infecting an enterprise or hospital server?',
        options: [
          'Upgrades the OS automatically for free',
          'Encrypts victim files/systems and demands payment (often cryptocurrency) for the decryption key',
          'Replaces BIOS with Linux',
          'Speeds up LAN bandwidth',
        ],
        correctOptionIndex: 1,
        explanation: 'Notable attacks like WannaCry (2017) use strong encryption to lock organizational data, making offline immutable backups critical.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which statement accurately contrasts **TCP** and **UDP** at the Transport Layer?',
        options: [
          'UDP guarantees ordered, acknowledged delivery; TCP drops packets silently',
          'TCP establishes a connection (3-way handshake) with retransmission and ordering, whereas UDP is connectionless and faster for real-time audio/video or DNS queries',
          'Both protocols operate only on fiber-optic cables',
          'UDP assigns IP addresses via DHCP exclusively',
        ],
        correctOptionIndex: 1,
        explanation: 'TCP prioritizes accuracy (web pages, file transfers), whereas UDP avoids handshake/retransmission delays for live streaming and gaming.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Indian cyber statute** provides legal recognition to electronic records/digital signatures and defines penalties for identity theft (Section 66C) and cyber terrorism (Section 66F)?',
        options: [
          'Telegraph Act, 1885',
          'Information Technology Act, 2000 (as amended in 2008)',
          'Copyright Act, 1957',
          'Competition Act, 2002',
        ],
        correctOptionIndex: 1,
        explanation: 'Enacted in 2000 and strengthened by the 2008 Amendment, the IT Act anchors India’s digital commerce and cybercrime legal framework.',
        difficulty: 'standard',
      },
      {
        stem: 'In a **DDoS (Distributed Denial of Service)** attack, what mechanism makes a government or exam result website unreachable for genuine users?',
        options: [
          'Encrypting the user’s local keyboard driver',
          'Overwhelming target server bandwidth and connection slots simultaneously from thousands of compromised "botnet" machines',
          'Deleting DNS records manually at ICANN',
          'Changing monitor resolution to 640x480',
        ],
        correctOptionIndex: 1,
        explanation: 'Distributed botnets flood target servers with massive request volumes, exhausting compute/network capacity.',
        difficulty: 'standard',
      },
      {
        stem: 'How does **Zero-Trust Security Architecture** differ from older **"Castle-and-Moat" perimeter firewalls**?',
        options: [
          'Zero-Trust grants automatic trust to every device inside the office Wi-Fi',
          'Zero-Trust assumes breach and continuously verifies every user, device, and request ("never trust, always verify") regardless of network location',
          'Zero-Trust eliminates encryption inside LANs',
          'Zero-Trust disables all authentication',
        ],
        correctOptionIndex: 1,
        explanation: 'With cloud apps and remote work, lateral movement inside networks is blocked via least-privilege micro-segmentation and continuous verification.',
        difficulty: 'advanced',
      },
    ],
  },
  {
    topicTitle: 'Soil Health, Crop Production & Hill Farming Systems',
    materialTitle: 'Soil Science, Crop Agronomy & Himalayan Hill Farming Systems — Study Notes',
    estimatedMinutes: 32,
    assessmentTitle: 'Practice Assessment: Soil Health, Crop Production & Hill Farming',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Soil Health, Crop Production & Hill Farming Systems

## 1. Soil Health, Fertility & Conservation
- **Essential Plant Nutrients (17 Elements):**
  - **Primary Macronutrients:** Nitrogen ($N$ — vegetative growth), Phosphorus ($P$ — root growth/energy ATP), Potassium ($K$ — stomatal control, disease/frost resistance). Ideal Indian cereal NPK balance baseline = **4:2:1**.
  - **Secondary:** $Ca, Mg, S$. **Micronutrients:** $Fe, Mn, Zn$ (widely deficient in Tarai/Indo-Gangetic soils!), $Cu, B, Mo, Cl, Ni$.
- **Soil Health Card Scheme (2015):** Tests 12 parameters ($N, P, K, S, Zn, Fe, Cu, Mn, B$, pH, EC, Organic Carbon) every 2 years.
- **Uttarakhand Soil Profile & Acidity:**
  - **Tarai & Bhabar Soils (US Nagar, Haridwar foothills):** Deep, fertile alluvial/marshy soils supporting **rice, wheat, sugarcane**.
  - **Mid/High-Hill Soils (Brown Forest / Podzolic):** Thin, gravelly, prone to **acidic pH ($<6.0$)** from high rainfall leaching bases — corrected via **Agricultural Lime ($CaCO_3$)**; **Terrace / Contour Farming** prevents sheet & gully erosion.

## 2. Crop Production & Cropping Seasons
- **Three Seasons:** **Kharif** (June–Oct: Paddy, Maize, **Mandua/Ragi, Jhangora/Barnyard Millet**, Soyabean, Urad); **Rabi** (Oct–April: Wheat, Barley, Mustard, Masoor, Pea); **Zaid** (March–June: Vegetables, Watermelon, Fodder).
- **Integrated Nutrient Management (INM):** Combines chemical fertilizers with **FYM (Farmyard Manure), Vermicompost, Green Manuring (*Dhaincha/Sesbania*, *Sunhemp*), and Biofertilizers** (*Rhizobium* in legumes; *Azotobacter/Azospirillum* in non-legumes; *Azolla* cyanobacterial fern in paddy; *PSB* for Phosphorus).

## 3. Uttarakhand Hill Farming, Millets & Organic Ecosystem
- **Baranaja System (Traditional Garhwal/Kumaon Polyculture):** Co-cultivating ~12 complementary Kharif crops on rainfed terraces (**Mandua/Finger Millet, Ramdana/Amaranth, Rajma, Bhatt/Black Soyabean, Gahat/Horse Gram, Lobia, Til**) — fixes nitrogen naturally, hedges monsoon risk, and preserves agrobiodiversity!
- **Sri Anna (Millets):** **Mandua (*Eleusine coracana*)** & **Jhangora (*Echinochloa frumentacea*)** — drought-hardy, gluten-free, iron/calcium-rich staples promoted under **Uttarakhand Millet Mission**.
- **Horticulture & GI Specialties:** **Apple (Harsil, Ramgarh, Chakrata)**, **Malta, Walnut, Kiwi, Off-season Vegetables**, **Munsiyari Rajma, Bageshwar/Kumaon Tejpatta, Chaisoo/Bhatt**, **Tea (Kausani, Berinag)**.
- **Organic Certification:** **Uttarakhand Organic Commodity Board (UOCB)**; **Paramparagat Krishi Vikas Yojana (PKVY)** clusters; **Zero-Budget / Natural Farming**; **Integrated Farming System (IFS)** combining crops + dairy (Badri Cow) + backyard poultry/apiculture/mushroom cultivation.

## 4. Key Revision Takeaways
- **Baranaja** = resilient 12-crop Himalayan polyculture; **Mandua & Jhangora** anchor Uttarakhand millet nutrition.
- **Agricultural Lime** neutralizes acidic hill soils, whereas **Gypsum ($CaSO_4$)** reclaims sodic/alkaline plain soils.`,
    mcqs: [
      {
        stem: 'What is **"Baranaja"** in the traditional agrarian heritage of **Garhwal and Kumaon hills**?',
        options: [
          'A mechanized combine harvester subsidy',
          'A traditional rainfed polyculture practice sowing ~12 compatible crops together (e.g., Mandua, Ramdana, Rajma, Bhatt, Gahat) on the same terrace to ensure nutrition, soil fertility, and climate resilience',
          'A British canal irrigation tax',
          'A winter monoculture of sugarcane in Haridwar',
        ],
        correctOptionIndex: 1,
        explanation: 'Baranaja pairs deep-rooted legumes (nitrogen fixers like Bhatt, Gahat, Rajma) with millets (Mandua) and oilseeds, eliminating total crop failure in erratic rains.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which pair correctly identifies the soil amendments used to reclaim **Acidic Hill Soils ($\\text{pH} < 6$)** vs **Sodic/Alkaline Soils ($\\text{pH} > 8.5$)**?',
        options: [
          'Urea for acidic soils; Salt for alkaline soils',
          'Agricultural Lime ($CaCO_3$) for acidic soils; Gypsum ($CaSO_4 \\cdot 2H_2O$) for sodic/alkaline soils',
          'Gypsum for acidic soils; Lime for sodic soils',
          'Phosphorus pentoxide for both',
        ],
        correctOptionIndex: 1,
        explanation: 'Calcium carbonate neutralizes excess $H^+$ acidity in leached Himalayan soils, while Gypsum displaces excess $Na^+$ ions from sodic clay complexes.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **biofertilizer** forms a symbiotic nitrogen-fixing fern association widely recommended inside **flooded paddy fields**?',
        options: [
          'Rhizobium meliloti',
          'Azolla (harbouring *Anabaena azollae* cyanobacterium)',
          'Trichoderma viride',
          'Bacillus thuringiensis',
        ],
        correctOptionIndex: 1,
        explanation: '*Azolla* floats on paddy water and fixes atmospheric nitrogen via its symbiotic blue-green alga *Anabaena*, acting as living green manure.',
        difficulty: 'standard',
      },
      {
        stem: 'Identify the two major **Uttarakhand coarse millets (Shri Anna)** cultivated predominantly on rainfed hill slopes during Kharif:',
        options: [
          'Sugarcane and Jute',
          'Mandua (Finger Millet / Ragi) and Jhangora (Barnyard Millet)',
          'Cotton and Groundnut',
          'Rubber and Coffee',
        ],
        correctOptionIndex: 1,
        explanation: 'Mandua (*Eleusine coracana*) and Jhangora (*Echinochloa frumentacea*) thrive in low-input dryland slopes and carry high calcium, iron, and dietary fibre.',
        difficulty: 'foundation',
      },
      {
        stem: 'In Indian agronomy, which **three elements** constitute the **Primary Macronutrients** checked prominently on a **Soil Health Card** (standard cereal ratio $4:2:1$)?',
        options: [
          'Zinc, Boron, Copper',
          'Nitrogen (N), Phosphorus (P), and Potassium (K)',
          'Iron, Manganese, Chlorine',
          'Sodium, Silicon, Cobalt',
        ],
        correctOptionIndex: 1,
        explanation: 'N, P, and K are required in largest quantities; skewed urea-heavy usage (e.g., 8:2:1) depletes micronutrients and soil carbon.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **two districts/belts in Uttarakhand** hold major agricultural contrasts between **flat fertile Tarai alluvial plains** and **temperate apple/stone-fruit valleys**?',
        options: [
          'Udham Singh Nagar (Tarai wheat/rice/sugarcane bowl) vs Harsil–Uttarkashi & Ramgarh–Nainital (temperate apple/fruit belts)',
          'Chamoli as Tarai sugarcane bowl vs Haridwar as alpine meadow',
          'Pithoragarh as desert vs Bageshwar as coastal mangrove',
          'Rudraprayag as cotton belt vs Almora as jute delta',
        ],
        correctOptionIndex: 0,
        explanation: 'Udham Singh Nagar and plain Haridwar form Uttarakhand’s high-yield Tarai granary, whereas mid/high hills focus on temperate horticulture and millets.',
        difficulty: 'standard',
      },
      {
        stem: 'Why is **Contour Farming / Bench Terracing** indispensable across Himalayan hill slopes of $15^\\circ$–$35^\\circ$ gradient?',
        options: [
          'It accelerates downhill runoff speed',
          'It breaks slope length, slows surface water runoff velocity, traps topsoil, and enhances moisture infiltration',
          'It eliminates photosynthesis in Rabi crops',
          'It turns sandy soil into permafrost',
        ],
        correctOptionIndex: 1,
        explanation: 'Ploughing along elevation contours and maintaining stone-riser terraces minimizes sheet and rill erosion during intense cloudbursts.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **Uttarakhand indigenous cattle breed**, registered by **NBAGR Karnal**, is prized in hill Integrated Farming Systems for A2 milk and foraging rugged mountain slopes?',
        options: [
          'Sahiwal',
          'Badri Cow',
          'Gir',
          'Murrah Buffalo',
        ],
        correctOptionIndex: 1,
        explanation: 'Badri (Pahadi) cattle consume medicinal hill herbs and produce rich A2 milk/ghee well suited to small terraced farms.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Legume Biofertilizer** specifically colonizes root nodules of pulse crops like **Rajma, Bhatt (black soyabean), and Gahat** to fix atmospheric nitrogen?',
        options: [
          'Rhizobium',
          'Azotobacter',
          'Mycorrhizal fungi only',
          'Penicillium',
        ],
        correctOptionIndex: 0,
        explanation: '*Rhizobium* forms symbiotic nodules exclusively on leguminous roots, whereas *Azotobacter* is a free-living nitrogen fixer for cereals/vegetables.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which central sector / state-supported **cluster organic farming programme** supports **3-year Participatory Guarantee System (PGS-India)** conversion without synthetic agro-chemicals?',
        options: [
          'Operation Flood',
          'Paramparagat Krishi Vikas Yojana (PKVY)',
          'PM-KUSUM Solar Pump Scheme only',
          'Blue Revolution Fisheries',
        ],
        correctOptionIndex: 1,
        explanation: 'PKVY (alongside MOVCD-NER and UOCB state certification) promotes cluster-based organic production, PGS verification, and value-chain marketing.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **micronutrient deficiency** is most pervasive across intensively irrigated **Tarai rice-wheat cropping systems**, causing *Khaira disease* in paddy?',
        options: [
          'Zinc (Zn)',
          'Sodium (Na)',
          'Lead (Pb)',
          'Argon (Ar)',
        ],
        correctOptionIndex: 0,
        explanation: 'Zinc deficiency causes characteristic rusty-brown *Khaira* lesions on paddy leaves (first identified famously at Pantnagar in the Tarai belt!).',
        difficulty: 'advanced',
      },
      {
        stem: 'What is the main agronomic advantage of **Off-Season Vegetable Cultivation** (tomato, capsicum, pea, cauliflower) in Uttarakhand’s mid-hills during May–September?',
        options: [
          'Hills freeze completely in July',
          'Cooler summer temperatures allow hills to harvest fresh vegetables when north Indian plains face extreme heat, fetching premium market prices',
          'Vegetables grow without sunlight',
          'Hills pay zero transport charges',
        ],
        correctOptionIndex: 1,
        explanation: 'Agro-climatic niches between 1,000–2,000 m altitude give mountain farmers an off-season supply window into Delhi/NCR and Dehradun mandis.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **two crops** belong strictly to the **Rabi season** (sown Oct–Nov, harvested Mar–Apr) in Uttarakhand?',
        options: [
          'Paddy and Maize',
          'Wheat and Mustard (Sarson)',
          'Mandua and Soyabean',
          'Jhangora and Cotton',
        ],
        correctOptionIndex: 1,
        explanation: 'Wheat, barley, mustard, gram, and lentils are Rabi crops, whereas paddy, maize, mandua, jhangora, and soyabean are Kharif crops.',
        difficulty: 'foundation',
      },
      {
        stem: 'Under **Zero Tillage / Conservation Agriculture**, why is **in-situ crop residue mulching** superior to stubble burning?',
        options: [
          'Mulching turns soil barren within 1 year',
          'It conserves soil moisture, feeds soil microbial biomass, suppresses weeds, builds Soil Organic Carbon (SOC), and prevents severe particulate air pollution',
          'Stubble burning adds nitrogen to air directly for wheat',
          'Zero tillage destroys earthworms permanently',
        ],
        correctOptionIndex: 1,
        explanation: 'Retaining surface mulch moderates soil temperature and rebuilds organic matter while cutting Tarai diesel/tillage costs.',
        difficulty: 'advanced',
      },
      {
        stem: 'Which premier agricultural university located in **Udham Singh Nagar (Uttarakhand)** launched India’s **Green Revolution seed systems** in 1960?',
        options: [
          'IARI Pusa, New Delhi',
          'Govind Ballabh Pant University of Agriculture and Technology (GBPUAT), Pantnagar',
          'PAU Ludhiana',
          'TNAU Coimbatore',
        ],
        correctOptionIndex: 1,
        explanation: 'Established in 1960 as India’s first State Agricultural University on the US Land-Grant model, GBPUAT Pantnagar catalyzed Tarai and national foodgrain transformation.',
        difficulty: 'foundation',
      },
    ],
  },
  {
    topicTitle: 'Rural Credit, Cooperatives, NABARD & Panchayati Raj',
    materialTitle: 'Rural Credit Architecture, Cooperatives, NABARD & Panchayati Raj — Study Notes',
    estimatedMinutes: 30,
    assessmentTitle: 'Practice Assessment: Rural Credit, Cooperatives, NABARD & Panchayati Raj',
    assessmentDurationMinutes: 15,
    contentMarkdown: `# Rural Credit, Cooperatives, NABARD & Panchayati Raj

## 1. Rural Credit Architecture & NABARD
- **Sources of Rural Credit:**
  - **Institutional:** Commercial Banks, **Regional Rural Banks (RRBs — 1975, Narasimham Working Group)**, **Cooperative Credit Societies**, Microfinance Institutions (MFIs).
  - **Non-Institutional:** Moneylenders, traders, landlords (high interest, informal traps).
- **NABARD (National Bank for Agriculture & Rural Development):**
  - Established **12 July 1982** on **B. Sivaraman Committee (CRAFICARD)** recommendation.
  - Apex **refinance** institution for rural credit (does **not** lend directly to individual farmers!); oversees **RIDF (Rural Infrastructure Development Fund)**, **SHG–Bank Linkage Programme (1992)**, **Kisan Credit Card (KCC — 1998, R.V. Gupta Committee)**, **FPOs (Farmer Producer Organizations)**, and supervises **RRBs & Cooperative Banks** (with RBI).

## 2. Cooperative Sector & Uttarakhand Cooperative Innovations
- **3-Tier Short-Term Cooperative Credit Structure:**
  1. **State Cooperative Bank (StCB)** at State apex (**Uttarakhand State Cooperative Bank — USCB, Haldwani**).
  2. **District Central Cooperative Banks (DCCBs)** at district tier.
  3. **Primary Agricultural Credit Societies (PACS)** at village/nyaya-panchayat grassroots tier (now being computerized as **Multipurpose PACS [M-PACS]** under Ministry of Cooperation, established 2021).
- **Constitutional Protection:** **97th Constitutional Amendment Act, 2011** added right to form cooperative societies under **Art 19(1)(c)**, **Art 43B (DPSP)**, and **Part IX-B** (noting SC’s 2021 *Rajendra N. Shah* judgment upheld multi-state provisions while requiring state ratification for Part IX-B intra-state parts).
- **Uttarakhand Schemes:** **Deendayal Upadhyaya Sahkarita Kisan Kalyan Yojana** (interest-free farm loans via PACS/cooperatives up to prescribed limits for small/marginal farmers & SHGs); **Ghasiyari Kalyan Yojana** (fodder kits via cooperatives); **Mahila Dairy / Anchal Cooperative**; **Uttarakhand Rural Livelihoods Mission (UGVS / REAP)**.

## 3. Panchayati Raj Institutions (PRIs) & Rural Development
- **73rd Constitutional Amendment Act, 1992 (Part IX, Art 243–243O, 11th Schedule — 29 Subjects):**
  - **Gram Sabha** (Art 243A — all registered village voters), **3-tier PRIs** (Gram Panchayat, Kshettra/Block Samiti, Zila Parishad).
  - **Art 243D:** Mandatory **SC/ST reservation** proportional to population + **minimum 1/3rd seats for Women** (Uttarakhand Panchayati Raj Act raises **Women’s Reservation to 50%!**).
  - **Art 243I (State Finance Commission)** & **Art 243K (State Election Commission)**.
- **PESA Act, 1996** (Scheduled Areas) & **Uttarakhand Van Panchayats** (community forest councils dating to **1931**, unique in India!).
- **Flagship Rural Schemes:** **MGNREGA (2005 — 100 days guaranteed wage employment, 150 days in hills/drought)**, **PMAY-Gramin**, **PMGSY** (all-weather hill roads), **DAY-NRLM (SHGs / Lakhpati Didi)**, **Jal Jeevan Mission**, **Vibrant Villages Programme** (Chamoli, Uttarkashi, Pithoragarh border blocks).

## 4. Key Revision Takeaways
- **NABARD** = **12 July 1982** (**Sivaraman Committee**); **KCC** = **1998** (**R.V. Gupta Committee**); **RRBs** = **1975**.
- **Uttarakhand Panchayati Raj Act** provides **50% reservation for women**, and **PACS** sit at the base of the 3-tier cooperative credit pyramid.`,
    mcqs: [
      {
        stem: 'On the recommendation of which committee was **NABARD** established on **12 July 1982** as India’s apex development bank for agriculture and rural infrastructure?',
        options: [
          'Sarkaria Commission',
          'B. Sivaraman Committee (CRAFICARD)',
          'Tendulkar Committee',
          'Kelkar Task Force',
        ],
        correctOptionIndex: 1,
        explanation: 'The Committee to Review Arrangements for Institutional Credit for Agriculture and Rural Development (CRAFICARD), chaired by B. Sivaraman, led to the NABARD Act, 1981.',
        difficulty: 'foundation',
      },
      {
        stem: 'In India’s **three-tier short-term cooperative credit structure**, which institution operates directly at the **village / grassroots member level**?',
        options: [
          'State Cooperative Bank (StCB)',
          'Primary Agricultural Credit Society (PACS)',
          'District Central Cooperative Bank (DCCB)',
          'Small Industries Development Bank (SIDBI)',
        ],
        correctOptionIndex: 1,
        explanation: 'Village-level PACS lend directly to farmer members, borrowing from District Central Cooperative Banks (middle tier) backed by State Cooperative Banks (apex).',
        difficulty: 'foundation',
      },
      {
        stem: 'What minimum percentage of seats and chairperson offices is reserved for **Women** under **Uttarakhand’s Panchayati Raj Act** compared with the national floor in **Article 243D**?',
        options: [
          'Both are 25%',
          'Uttarakhand mandates 50% reservation for women, exceeding the Constitutional baseline of not less than one-third (33.3%)',
          'Uttarakhand mandates 10%',
          'Reservation applies only to Zila Parishad',
        ],
        correctOptionIndex: 1,
        explanation: 'While Article 243D mandates at least one-third reservation nationally, Uttarakhand enacted 50% reservation for women across all three PRI tiers.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Uttarakhand cooperative credit scheme** offers **interest-free loans** through cooperative societies to small/marginal farmers, women Self-Help Groups, and livestock rearers?',
        options: [
          'Atal Pension Yojana',
          'Deendayal Upadhyaya Sahkarita Kisan Kalyan Yojana',
          'PM-MITRA Textile Park',
          'Stand-Up India Urban Only',
        ],
        correctOptionIndex: 1,
        explanation: 'Implemented through PACS/DCCBs in Uttarakhand, the scheme subsidizes interest to 0% for eligible agricultural and allied livelihood borrowers.',
        difficulty: 'standard',
      },
      {
        stem: 'Why does **NABARD** not accept retail savings deposits from individuals or grant direct personal loans to farmers?',
        options: [
          'NABARD is an unlicensed private NGO',
          'NABARD operates primarily as an **apex refinancing, developmental, and supervisory institution** channelling credit through SCBs, RRBs, Commercial Banks, and FPOs',
          'It regulates only urban stock exchanges',
          'It operates strictly in Union Territories',
        ],
        correctOptionIndex: 1,
        explanation: 'NABARD refinances rural lenders, manages the RIDF (Rural Infrastructure Development Fund), and supports SHG-Bank Linkage and FPO promotion.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **Constitutional Amendment Act** formally elevated **Cooperative Societies** by adding **Article 19(1)(c)** (fundamental right to form cooperatives) and **Article 43B** (DPSP)?',
        options: [
          '42nd Amendment Act, 1976',
          '97th Amendment Act, 2011',
          '86th Amendment Act, 2002',
          '101st Amendment Act, 2016',
        ],
        correctOptionIndex: 1,
        explanation: 'The 97th Amendment (2011) inserted cooperatives into Article 19(1)(c), Article 43B, and Part IX-B (the SC in 2021 struck down Part IX-B provisions affecting state-only cooperatives for lack of state ratification).',
        difficulty: 'standard',
      },
      {
        stem: 'Introduced in **1998** on the recommendation of the **R.V. Gupta Committee**, what flexibility does the **Kisan Credit Card (KCC)** provide farmers?',
        options: [
          'Free foreign air travel',
          'A revolving cash-credit limit covering crop cultivation, post-harvest expenses, working capital for dairy/fisheries, and consumption needs with Interest Subvention on timely repayment',
          'Guaranteed minimum export price in Euros',
          'Permanent exemption from land revenue',
        ],
        correctOptionIndex: 1,
        explanation: 'KCC protects farmers from high-interest informal moneylenders via a flexible revolving facility extended in 2018–19 to animal husbandry and fisheries as well.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which **two Constitutional bodies** in every State are mandated respectively by **Article 243I** and **Article 243K** to strengthen Panchayati Raj autonomy?',
        options: [
          'State Public Service Commission and High Court',
          'State Finance Commission (every 5 years for devolution) and State Election Commission (for conducting local body polls)',
          'NITI Aayog and Finance Commission of India',
          'Reserve Bank of India and SEBI',
        ],
        correctOptionIndex: 1,
        explanation: 'Article 243I constitutes the State Finance Commission to review Panchayat finances, while Article 243K vests superintendence of Panchayat/Municipal elections in the State Election Commission.',
        difficulty: 'standard',
      },
      {
        stem: 'Which **three equity stakeholders** jointly own **Regional Rural Banks (RRBs)** established under the **RRB Act, 1976**?',
        options: [
          'World Bank (50%), RBI (25%), Gram Sabha (25%)',
          'Central Government (50%), Concerned State Government (15%), and Sponsor Public Sector Bank (35%)',
          'NABARD (70%) and Private Corporates (30%)',
          'Ministry of Defence (100%)',
        ],
        correctOptionIndex: 1,
        explanation: 'RRBs follow the classic 50 : 15 : 35 shareholding split (e.g., Uttarakhand Gramin Bank sponsored by SBI).',
        difficulty: 'standard',
      },
      {
        stem: 'In Uttarakhand’s high-altitude border blocks of **Chamoli, Uttarkashi, and Pithoragarh**, which Centrally Sponsored Scheme targets holistic infrastructure, tourism, and livelihood saturation to curb out-migration?',
        options: [
          'SAGARMALA Port Development',
          'Vibrant Villages Programme (VVP)',
          'Smart Cities Mission',
          'PM-WANI Urban Metro',
        ],
        correctOptionIndex: 1,
        explanation: 'Launched for northern border villages (e.g., Mana, Niti, Nelang, Gunji), VVP integrates all-weather roads, solar microgrids, homestays, and cooperative livelihoods.',
        difficulty: 'foundation',
      },
      {
        stem: 'How many **functional subjects** are listed in the **11th Schedule** of the Constitution for devolution to **Panchayati Raj Institutions**, and how many voters constitute the **Gram Sabha**?',
        options: [
          '18 subjects; only ward members',
          '29 subjects; all persons registered in the electoral rolls relating to a village comprised within the Gram Panchayat area',
          '12 subjects; taxpayers only',
          '47 subjects; Block Development Officers only',
        ],
        correctOptionIndex: 1,
        explanation: 'Article 243G + 11th Schedule enumerate 29 rural subjects (compared to 18 in the 12th Schedule for Municipalities), while Article 243(b) defines Gram Sabha as all registered adult voters of the village.',
        difficulty: 'foundation',
      },
      {
        stem: 'What institutional innovation started by **NABARD in 1992** transformed micro-credit access for rural women across India and Uttarakhand’s **DAY-NRLM / Lakhpati Didi** groups?',
        options: [
          'Bitcoin Exchange Pools',
          'Self-Help Group (SHG)–Bank Linkage Programme',
          'Stock Futures Trading',
          'Gold Monetization Bonds',
        ],
        correctOptionIndex: 1,
        explanation: 'SHG-Bank Linkage enabled collateral-free group savings and joint-liability lending by banks, empowering millions of rural women.',
        difficulty: 'foundation',
      },
      {
        stem: 'Which legal right under **MGNREGA (2005)** protects rural households if work is **not provided within 15 days** of demand?',
        options: [
          'Right to free tractor ownership',
          'Right to a statutory Unemployment Allowance funded by the State Government',
          'Automatic pension from age 25',
          'Waiver of electricity bills nationwide',
        ],
        correctOptionIndex: 1,
        explanation: 'MGNREGA is demand-driven statutory legislation guaranteeing at least 100 days of unskilled manual work per rural household/year or an unemployment allowance.',
        difficulty: 'standard',
      },
      {
        stem: 'Why are **Farmer Producer Organizations (FPOs)** championed by NABARD and SFAC across Uttarakhand’s horticulture and organic clusters?',
        options: [
          'To confiscate small farmers’ land titles',
          'To aggregate tiny fragmented hill landholdings for collective input procurement, grading/packaging, cold storage, and direct wholesale bargaining power',
          'To outlaw cooperative dairies',
          'To replace Gram Sabhas legally',
        ],
        correctOptionIndex: 1,
        explanation: 'Since average hill holdings in Uttarakhand are tiny and scattered, FPOs enable economies of scale for organic ginger, rajma, millet, and apple growers.',
        difficulty: 'advanced',
      },
      {
        stem: 'What distinguishes **Uttarakhand’s Van Panchayats (1931)** within India’s decentralized rural governance landscape?',
        options: [
          'They are urban municipal parking bodies',
          'They represent India’s oldest statutory community-managed forest councils, empowering village communities to conserve and sustainably harvest *Van Panchayat* oak/pine forests',
          'They manage offshore oil rigs',
          'They operate only under the Ministry of Railways',
        ],
        correctOptionIndex: 1,
        explanation: 'Born out of hill forest agitations in Kumaon/Garhwal and notified under the 1931 Van Panchayat Rules, thousands of Van Panchayats co-manage Uttarakhand’s village commons.',
        difficulty: 'advanced',
      },
    ],
  },
];
