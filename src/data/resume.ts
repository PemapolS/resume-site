// Content for the portfolio, ported from "Pemapol Portfolio.dc.html".
// Bilingual fields are `Bilingual` objects. Fields that were English-only in
// the source design (titles, bullet points) are kept as plain strings.

export interface Bilingual {
  en: string;
  th: string;
}

export interface HeroStat {
  value: string;
  suffix?: string;
  label: Bilingual;
}

export interface ExperienceItem {
  id: string;
  dateMain: string;
  dateSub: string | null;
  title: Bilingual;
  org: Bilingual;
  tag: Bilingual;
  accent: boolean;
  defaultOpen: boolean;
  bullets: Bilingual[];
  /** Optional supporting document: a PDF path under /public. */
  link?: string;
  /** Optional credential/badge verification URL. */
  certLink?: string;
}

export interface EducationItem {
  id: string;
  title: Bilingual;
  org: Bilingual;
  dates: string;
  badge: Bilingual;
  collapsible: boolean;
  defaultOpen?: boolean;
  details?: Bilingual[];
  /** Optional report/document: a PDF path under /public. */
  link?: string;
}

export interface ProjectItem {
  id: string;
  meta: Bilingual;
  title: Bilingual;
  role: Bilingual;
  /** Technology tags — kept untranslated. */
  tags: string[];
  accent: boolean;
  bullets: Bilingual[];
  /** External resource: a repo URL or a PDF path under /public. */
  link?: string;
}

export interface CertItem {
  id: string;
  /** Issuer badge (AWS / IBM / GOOGLE) — kept untranslated. */
  badge: string;
  title: Bilingual;
  desc: Bilingual;
  bullets: Bilingual[];
  /** Credential verification URL. */
  link?: string;
}

export interface SkillGroup {
  label: Bilingual;
  /** Skill names — kept untranslated. */
  items: string[];
}

export interface LanguageItem {
  flag: string;
  alt: string;
  name: Bilingual;
  level: Bilingual;
  badge: string;
  accent: boolean;
}

export interface ContactCard {
  kind: string;
  label: string;
  value: string;
  href: string;
}

interface Strings {
  nav: Record<'experience' | 'education' | 'projects' | 'skills' | 'contact', Bilingual>;
  hero: {
    subtitle: Bilingual;
    intro: Bilingual;
    emailLabel: Bilingual;
    viewExperience: Bilingual;
    getInTouch: Bilingual;
  };
  sections: Record<
    'experience' | 'education' | 'projects' | 'certifications' | 'skills' | 'languages' | 'contact',
    Bilingual
  >;
  contact: { lead: Bilingual; reveal: Bilingual; location: Bilingual };
  modal: { openMail: Bilingual; copy: Bilingual; copied: Bilingual };
  toggle: { details: string; hide: string };
}

/** Obfuscated to keep the address out of raw markup, matching the source. */
export const EMAIL: string = ['pemapol.sri', 'gmail.com'].join('@');

export const strings: Strings = {
  nav: {
    experience: { en: 'Experience', th: 'ประสบการณ์' },
    education: { en: 'Education', th: 'การศึกษา' },
    projects: { en: 'Projects', th: 'โปรเจกต์' },
    skills: { en: 'Skills', th: 'ทักษะ' },
    contact: { en: 'Contact', th: 'ติดต่อ' },
  },
  hero: {
    subtitle: {
      en: 'Information & Communication Engineering graduate — data engineering & cloud infrastructure',
      th: 'บัณฑิตวิศวกรรมสารสนเทศและการสื่อสาร — วิศวกรรมข้อมูลและโครงสร้างพื้นฐานคลาวด์',
    },
    intro: {
      en: 'Motivated, detail-oriented graduate from Chulalongkorn University with a strong academic record and a focus on computer programming and data engineering. Proficient in Python, Java, SQL, and data-visualization tools, with hands-on experience in UX/UI design and project management.',
      th: 'วิศวกรรมบัณฑิตเกียรตินิยมอันดับหนึ่งจากจุฬาลงกรณ์มหาวิทยาลัย มีความสนใจด้านการเขียนโปรแกรมและวิศวกรรมข้อมูล (Data Engineering) และมีความเชี่ยวชาญด้าน Python, Java, SQL และเครื่องมือ Data Visualization พร้อมประสบการณ์ตรงด้านการออกแบบ UX/UI และการบริหารโครงการ (PM)',
    },
    emailLabel: { en: 'email', th: 'แสดงอีเมล' },
    viewExperience: { en: 'View experience', th: 'ดูประสบการณ์' },
    getInTouch: { en: 'Get in touch', th: 'ติดต่อ' },
  },
  sections: {
    experience: { en: 'Work Experience', th: 'ประสบการณ์ทำงาน' },
    education: { en: 'Education', th: 'การศึกษา' },
    projects: { en: 'Projects', th: 'โปรเจกต์' },
    certifications: { en: 'Certifications', th: 'ประกาศนียบัตร' },
    skills: { en: 'Skills & Abilities', th: 'ทักษะและความสามารถ' },
    languages: { en: 'Languages', th: 'ภาษา' },
    contact: { en: 'Get in touch', th: 'ติดต่อ' },
  },
  contact: {
    lead: {
      en: 'Open to data engineering, cloud / infrastructure, and other tech-related roles.',
      th: 'เปิดรับโอกาสงานด้าน Data Engineering, Cloud / Infrastructure และงานด้านเทคโนโลยีอื่น ๆ',
    },
    reveal: { en: 'Click to reveal', th: 'คลิกเพื่อแสดง' },
    location: { en: 'Bangkok, Thailand', th: 'กรุงเทพมหานคร ประเทศไทย' },
  },
  modal: {
    openMail: { en: 'Open mail app', th: 'เปิดแอปอีเมล' },
    copy: { en: 'Copy', th: 'คัดลอก' },
    copied: { en: 'Copied ✓', th: 'คัดลอกแล้ว ✓' },
  },
  toggle: {
    // English-only in the source design.
    details: '+ details',
    hide: '− hide',
  },
};

export const heroStats: HeroStat[] = [
  {
    value: '3.61',
    suffix: ' / 4.00',
    label: { en: 'GPAX · First-Class Honors', th: 'GPAX · เกียรตินิยมอันดับหนึ่ง' },
  },
  {
    value: '8.0',
    label: { en: 'IELTS Academic', th: 'IELTS Academic' },
  },
  {
    value: '3',
    label: {
      en: 'Certifications · AWS, IBM, Google',
      th: 'ประกาศนียบัตร · AWS, IBM, Google',
    },
  },
  {
    value: '82.25',
    suffix: ' WAM',
    label: { en: 'Exchange · UTS Sydney', th: 'นักศึกษาแลกเปลี่ยน · UTS Sydney' },
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 'exp1',
    dateMain: 'JUN–JUL',
    dateSub: '2025',
    title: { en: 'Data Engineer Intern', th: 'นักศึกษาฝึกงานวิศวกรข้อมูล' },
    org: {
      en: 'Advanced Info Service PLC (AIS) · Network Quality Management (NQM)',
      th: 'บริษัท แอดวานซ์ อินโฟร์ เซอร์วิส จำกัด (มหาชน) (AIS) · แผนกควบคุมคุณภาพเครือข่าย (NQM)',
    },
    tag: { en: 'INTERNSHIP', th: 'INTERNSHIP' },
    accent: true,
    defaultOpen: true,
    link: '/MD4_Redacted.pdf',
    certLink: 'https://www.credly.com/badges/8f1d7b02-6608-4bcf-8811-767e766386ef/',
    bullets: [
      {
        en: 'Joined AIS Digital Talent | The Bloom, a 2-month work-experience program with the Network Quality Management (NQM) department.',
        th: 'เข้าร่วมโครงการ AIS Digital Talent | The Bloom ซึ่งเป็นโปรแกรมฝึกงาน 2 เดือน ร่วมกับแผนกควบคุมคุณภาพเครือข่าย (NQM)',
      },
      {
        en: 'Built ETL pipelines and automated jobs on daily OOKLA network-performance data APIs.',
        th: 'พัฒนา ETL pipeline และงานอัตโนมัติจาก API ข้อมูลประสิทธิภาพเครือข่าย OOKLA รายวัน',
      },
      {
        en: 'Used PySpark, Hadoop, and Impala to store and query large datasets covering all major telecommunication networks across Thailand.',
        th: 'ใช้ PySpark, Hadoop และ Impala ในการจัดเก็บและสืบค้นชุดข้อมูลขนาดใหญ่ ครอบคลุมเครือข่ายโทรคมนาคมหลักทั่วประเทศไทย',
      },
    ],
  },
  {
    id: 'exp2',
    dateMain: 'JAN–MAY',
    dateSub: '2025',
    title: { en: 'Teaching Assistant', th: 'ผู้ช่วยสอน' },
    org: {
      en: 'Faculty of Engineering, Chulalongkorn University',
      th: 'คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย',
    },
    tag: { en: 'PART-TIME', th: 'PART-TIME' },
    accent: false,
    defaultOpen: true,
    bullets: [
      {
        en: 'Teaching assistant for “Introduction to Data Science and Big Data”, an engineering elective.',
        th: 'ผู้ช่วยสอนรายวิชา “Introduction to Data Science and Big Data” ซึ่งเป็นวิชาวิศวกรรมบังคับเลือก',
      },
      {
        en: 'Evaluated and graded assignments, quizzes, and exams to ensure consistency and accuracy in assessment.',
        th: 'ประเมินและตรวจให้คะแนนงานการบ้าน Quiz และข้อสอบ เพื่อความสอดคล้องและแม่นยำในการวัดผล',
      },
      {
        en: 'Addressed student queries, proctored examinations, and provided feedback on assignments.',
        th: 'ตอบข้อสงสัยของนักศึกษา คุมสอบ และให้ข้อเสนอแนะต่องานที่มอบหมาย',
      },
    ],
  },
  {
    id: 'exp3',
    dateMain: '2023–NOW',
    dateSub: null,
    title: { en: 'Registration Lead & Web Designer', th: 'หัวหน้าฝ่ายลงทะเบียนและนักออกแบบเว็บไซต์' },
    org: {
      en: 'Self-employed / Freelance · Convention operations',
      th: 'ฟรีแลนซ์ · งานบริหารจัดการอีเวนต์',
    },
    tag: { en: 'FREELANCE', th: 'FREELANCE' },
    accent: false,
    defaultOpen: true,
    bullets: [
      {
        en: 'Registration lead for multiple hobby conventions with 1,700+ combined attendees annually and THB 300,000 raised for charity.',
        th: 'หัวหน้าฝ่ายลงทะเบียนสำหรับงานคอนเวนชั่นงานอดิเรกหลายงานที่มีผู้เข้าร่วมรวมกว่า 1,700 คนต่อปี และระดมทุนเพื่อการกุศลได้กว่า 300,000 บาท',
      },
      {
        en: 'Planned physical systems and attendee flow; trained staff members during events.',
        th: 'วางแผนระบบหน้างานและการจัดการผู้เข้าร่วม พร้อมฝึกอบรมทีมงานและอาสาสมัครในการปฏิบัติงาน',
      },
      {
        en: 'Collaborated with developers to define the functionality and design of event-operations websites.',
        th: 'ทำงานร่วมกับนักพัฒนาเว็บเพื่อกำหนดฟังก์ชันการทำงานและการออกแบบเว็บไซต์บริหารจัดการอีเวนต์',
      },
      {
        en: 'Designed and wireframed registration systems using Figma.',
        th: 'ออกแบบและทำ wireframe ระบบลงทะเบียนด้วย Figma',
      },
    ],
  },
];

export const education: EducationItem[] = [
  {
    id: 'edu1',
    title: {
      en: 'B.Eng. Information & Communication Engineering',
      th: 'วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมสารสนเทศและการสื่อสาร',
    },
    org: {
      en: 'International School of Engineering, Chulalongkorn University',
      th: 'International School of Engineering จุฬาลงกรณ์มหาวิทยาลัย',
    },
    dates: '2022–2026',
    badge: { en: 'GPAX 3.61 · FIRST CLASS HONORS', th: 'GPAX 3.61 · เกียรตินิยมอันดับหนึ่ง' },
    collapsible: true,
    defaultOpen: true,
    details: [
      {
        en: 'Relevant coursework: Computer Programming, Fundamental Data Structures & Algorithms, Principles of Telecommunications, Database Systems, Software Engineering, Data Warehousing.',
        th: 'รายวิชาที่เกี่ยวข้อง: การเขียนโปรแกรมคอมพิวเตอร์, โครงสร้างข้อมูลและอัลกอริทึมขั้นพื้นฐาน, หลักการโทรคมนาคม, ระบบฐานข้อมูล, วิศวกรรมซอฟต์แวร์, คลังข้อมูล',
      },
    ],
  },
  {
    id: 'edu2',
    title: { en: 'Undergraduate Exchange', th: 'นักศึกษาแลกเปลี่ยนระดับปริญญาตรี' },
    org: {
      en: 'Faculty of Engineering & IT, University of Technology Sydney',
      th: 'Faculty of Engineering & IT, University of Technology Sydney',
    },
    dates: 'JUL–DEC 2025',
    badge: { en: 'GPAX 6.25/7 · WAM 82.25', th: 'GPAX 6.25/7 · WAM 82.25' },
    collapsible: true,
    defaultOpen: true,
    link: '/Exchange_Report.pdf',
    details: [
      {
        en: 'Relevant coursework: Introduction to Artificial Intelligence, Cloud Computing Infrastructure, Systems Testing & Quality Management.',
        th: 'รายวิชาที่เกี่ยวข้อง: ปัญญาประดิษฐ์เบื้องต้น, โครงสร้างพื้นฐานคลาวด์คอมพิวติ้ง, การทดสอบและการประกันคุณภาพซอฟต์แวร์',
      },
      {
        en: 'Funded by the Destination Australia Cheung Kong Exchange Program Award, Spring 2025.',
        th: 'ได้รับทุนสนับสนุนจาก Destination Australia Cheung Kong Exchange Program Award ภาคการศึกษา Spring 2025',
      },
    ],
  },
  {
    id: 'edu3',
    title: {
      en: 'High School Diploma, Science–Mathematics',
      th: 'มัธยมศึกษาตอนปลาย แผนการเรียนวิทยาศาสตร์–คณิตศาสตร์',
    },
    org: { en: 'Triam Udom Suksa School', th: 'โรงเรียนเตรียมอุดมศึกษา' },
    dates: '2019–2022',
    badge: { en: 'GPAX 3.66', th: 'GPAX 3.66' },
    collapsible: false,
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'prj1',
    meta: { en: 'AUG 2025 – MAY 2026 · SENIOR PROJECT', th: 'ส.ค. 2025 – พ.ค. 2026 · โปรเจกต์จบการศึกษา' },
    title: {
      en: 'Multi-Tenant Cloud Architecture for SaaS Hotel HRM',
      th: 'สถาปัตยกรรมคลาวด์แบบ Multi-Tenant สำหรับระบบ SaaS HRM โรงแรม',
    },
    role: { en: 'DevOps & Tester', th: 'DevOps และผู้ทดสอบระบบ' },
    tags: ['Kubernetes', 'AWS EC2', 'Jenkins', 'ArgoCD', 'k6'],
    accent: true,
    link: '/Multi-Tenant_Cloud_Arch_SaaS_HRM.pdf',
    bullets: [
      {
        en: 'Led DevOps implementation for a Kubernetes cluster on AWS EC2s with namespace-per-tenant isolation, Traefik ingress, Jenkins CI/CD, and ArgoCD for automated deployments and canary rollouts targeting 10k concurrent users.',
        th: 'พัฒนา DevOps สำหรับคลัสเตอร์ Kubernetes บน AWS EC2 โดยแยก namespace ต่อผู้เช่าแต่ละราย ใช้ Traefik ingress, Jenkins CI/CD และ ArgoCD สำหรับการดีพลอยอัตโนมัติและ canary rollout รองรับผู้ใช้พร้อมกัน 10,000 ราย',
      },
      {
        en: 'Designed and executed k6 load tests simulating load spikes, validating horizontal pod autoscaling and cluster resilience.',
        th: 'ออกแบบและดำเนินการทดสอบโหลดด้วย k6 จำลองสถานการณ์โหลดพุ่งสูง เพื่อตรวจสอบการปรับขนาด pod อัตโนมัติและความทนทานของคลัสเตอร์',
      },
    ],
  },
  {
    id: 'prj2',
    meta: { en: 'SEP – OCT 2025 · INTRO TO AI COURSE', th: 'ก.ย. – ต.ค. 2025 · วิชาปัญญาประดิษฐ์เบื้องต้น' },
    title: {
      en: 'Recurrent Neural Network Stock Price Prediction',
      th: 'การทำนายราคาหุ้นด้วย Recurrent Neural Network',
    },
    role: { en: 'Team Member', th: 'สมาชิกทีม' },
    tags: ['Keras', 'LSTM', 'GRU'],
    accent: false,
    link: '/41040_AT2_Project.pdf',
    bullets: [
      {
        en: 'Utilized recurrent neural network techniques such as SimpleRNN, LSTM, and GRU from the Keras library.',
        th: 'ประยุกต์ใช้เทคนิค recurrent neural network เช่น SimpleRNN, LSTM และ GRU จากไลบรารี Keras',
      },
      {
        en: 'Trained models on historical Yahoo Finance stock price data to predict future data.',
        th: 'ฝึกเทรนโมเดลด้วยข้อมูลราคาหุ้นย้อนหลังจาก Yahoo Finance เพื่อทำนายข้อมูลในอนาคต',
      },
      {
        en: 'Tuned hyperparameters to optimize prediction results for accuracy against true data.',
        th: 'ปรับ hyperparameter เพื่อเพิ่มความแม่นยำของผลการทำนายเมื่อเทียบกับข้อมูลจริง',
      },
    ],
  },
  {
    id: 'prj3',
    meta: { en: 'JAN – APR 2025 · ICE CAPSTONE COURSE', th: 'ม.ค. – เม.ย. 2025 · วิชาแค๊ปสโตนทางวิศวกรรมสารสนเทศและการสื่อสาร' },
    title: { en: 'Medication Reminders Application', th: 'แอปพลิเคชันแจ้งเตือนการทานยา' },
    role: { en: 'Database Developer', th: 'นักพัฒนาฐานข้อมูล' },
    tags: ['UML', 'DBA', 'Cloud', 'Research'],
    accent: false,
    link: 'https://www.linkedin.com/posts/activity-7369696781770682371-jMgL',
    bullets: [
      {
        en: 'Designed schemas and created UML diagrams to model data structures and system workflows.',
        th: 'ออกแบบ schemas และสร้าง UML diagrams เพื่อออกแบบโครงสร้างข้อมูลและกระบวนการทำงานของระบบ',
      },
      {
        en: 'Managed database administration and implemented cloud deployments to ensure scalability and reliability.',
        th: 'ดูแลการบริหารจัดการฐานข้อมูลและติดตั้งระบบบนคลาวด์ เพื่อความสามารถในการปรับขนาดและความน่าเชื่อถือของระบบ',
      },
      {
        en: 'Written report: “Empowering Older Adults in Thailand Using AI-Augmented Design Thinking: A Case Study in User-Centered Medication Management,” published in the Journal of Communication and Innovation NIDA.',
        th: 'บทความที่เขียนจากโครงการ: “Empowering Older Adults in Thailand Using AI-Augmented Design Thinking: A Case Study in User-Centered Medication Management” ตีพิมพ์ในวารสาร Journal of Communication and Innovation NIDA',
      },
    ],
  },
  {
    id: 'prj4',
    meta: { en: 'SEP – NOV 2024 · NETCENTRIC ARCHITECTURE COURSE', th: 'ก.ย. – พ.ย. 2024 · วิชาสถาปัตยกรรมแบบโครงข่ายเป็นศูนย์กลาง' },
    title: { en: 'Battleship Game', th: 'เกม Battleship' },
    role: { en: 'Frontend Developer & UX/UI Designer', th: 'นักพัฒนา Frontend และนักออกแบบ UX/UI' },
    tags: ['React', 'Socket.IO', 'MongoDB'],
    accent: false,
    link: 'https://github.com/mpsean/4ARM-BattleshipGame',
    bullets: [
      {
        en: 'Developed a multiplayer online game based on the Battleship board game with player authentication and customization options.',
        th: 'พัฒนาเกมออนไลน์แบบผู้เล่นหลายคนจากบอร์ดเกม Battleship พร้อมระบบยืนยันตัวตนผู้เล่นและตัวเลือกการปรับแต่ง',
      },
      {
        en: 'Utilized Tailwind CSS, React, Vite, Node.js, Socket.IO, Express.js, and MongoDB.',
        th: 'ใช้ Tailwind CSS, React, Vite, Node.js, Socket.IO, Express.js และ MongoDB',
      },
    ],
  },
];

export const certifications: CertItem[] = [
  {
    id: 'cert1',
    badge: 'AWS',
    title: {
      en: 'AWS Cloud Solutions Architect Specialization',
      th: 'หลักสูตร AWS Cloud Solutions Architect Specialization',
    },
    desc: {
      en: 'Completed during ISE’s 2025 School Break Upskill-Reskill online learning program.',
      th: 'สำเร็จหลักสูตรระหว่างโครงการเรียนรู้ออนไลน์ Upskill-Reskill ช่วงปิดภาคเรียนปี 2025 ของ ISE',
    },
    link: 'https://coursera.org/share/f1bc1813d56ccab73c33e990804977cd',
    bullets: [
      {
        en: 'Amazon Web Services for compute, storage, database, networking, monitoring, and security.',
        th: 'Amazon Web Services สำหรับการประมวลผล การจัดเก็บข้อมูล ฐานข้อมูล เครือข่าย การมอนิเตอร์ และความปลอดภัย',
      },
      {
        en: 'AWS S3, EC2, Lambda, VPC, RDS, DynamoDB, CloudWatch, and more.',
        th: 'AWS S3, EC2, Lambda, VPC, RDS, DynamoDB, CloudWatch และอื่น ๆ',
      },
    ],
  },
  {
    id: 'cert2',
    badge: 'IBM',
    title: {
      en: 'IBM Data Engineering Specialization',
      th: 'หลักสูตร IBM Data Engineering Specialization',
    },
    desc: {
      en: 'Completed during ISE’s 2024 Summer School Break online learning program.',
      th: 'สำเร็จหลักสูตรระหว่างโครงการเรียนรู้ออนไลน์ช่วงปิดภาคฤดูร้อนปี 2024 ของ ISE',
    },
    link: 'https://www.coursera.org/account/accomplishments/specialization/JC4JV7VC2CSZ',
    bullets: [
      {
        en: 'Create, design, and manage relational databases; apply database administration (DBA).',
        th: 'สร้าง ออกแบบ และจัดการฐานข้อมูลเชิงสัมพันธ์ พร้อมประยุกต์ใช้การบริหารฐานข้อมูล (DBA)',
      },
      { en: 'MySQL, PostgreSQL, IBM Db2, NoSQL.', th: 'MySQL, PostgreSQL, IBM Db2, NoSQL' },
      {
        en: 'Big Data using MongoDB, Cassandra, Hadoop, Apache Spark, Spark SQL, and Spark ML.',
        th: 'Big Data ด้วย MongoDB, Cassandra, Hadoop, Apache Spark, Spark SQL และ Spark ML',
      },
      {
        en: 'ETL & data pipelines with Bash, Airflow & Kafka.',
        th: 'ETL และ data pipeline ด้วย Bash, Airflow และ Kafka',
      },
    ],
  },
  {
    id: 'cert3',
    badge: 'GOOGLE',
    title: {
      en: 'Google Data Analytics Specialization',
      th: 'หลักสูตร Google Data Analytics Specialization',
    },
    desc: {
      en: 'Completed as part of the “Selected Topics in ICE” course during undergraduate study.',
      th: 'สำเร็จหลักสูตรเป็นส่วนหนึ่งของรายวิชา “Selected Topics in ICE” ในระดับปริญญาตรี',
    },
    link: 'https://www.coursera.org/account/accomplishments/specialization/BNDRH57SGMB6',
    bullets: [
      {
        en: 'Data cleaning, analysis, visualization, SQL, R programming, Tableau.',
        th: 'การทำความสะอาดข้อมูล การวิเคราะห์ การทำ visualization, SQL, การเขียนโปรแกรม R, Tableau',
      },
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    label: { en: 'LANGUAGES & DATA', th: 'ภาษาโปรแกรมและข้อมูล' },
    items: ['Python', 'Java', 'SQL', 'Spark', 'PySpark', 'Hadoop'],
  },
  { label: { en: 'DATABASES', th: 'ฐานข้อมูล' }, items: ['PostgreSQL', 'MySQL'] },
  {
    label: { en: 'CLOUD & DEVOPS', th: 'คลาวด์และ DevOps' },
    items: ['AWS', 'Kubernetes', 'Docker', 'Jenkins', 'ArgoCD'],
  },
  {
    label: { en: 'WEB', th: 'เว็บ' },
    items: ['HTML & CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Git'],
  },
  {
    label: { en: 'TOOLS', th: 'เครื่องมือ' },
    items: ['Tableau', 'TIBCO Spotfire', 'Adobe Creative Suite', 'Microsoft Office', 'Google Workspace'],
  },
  {
    label: { en: 'OTHER', th: 'อื่น ๆ' },
    items: ['Report Writing', 'Video Editing', 'Graphic Design', 'Figma / Wireframing'],
  },
];

export const languages: LanguageItem[] = [
  {
    flag: '/flags/uk.png',
    alt: 'United Kingdom flag',
    name: { en: 'English', th: 'ภาษาอังกฤษ' },
    level: { en: 'Bilingual proficiency', th: 'ระดับใกล้เคียงเจ้าของภาษา' },
    badge: 'CEFR C1 · IELTS 8.0',
    accent: true,
  },
  {
    flag: '/flags/th.png',
    alt: 'Thailand flag',
    name: { en: 'Thai', th: 'ภาษาไทย' },
    level: { en: 'Native', th: 'ภาษาแม่' },
    badge: 'NATIVE',
    accent: false,
  },
];

export const contactCards: ContactCard[] = [
  { kind: 'linkedin', label: 'LINKEDIN', value: 'linkedin.com/in/pemapol', href: 'https://linkedin.com/in/pemapol' },
  { kind: 'github', label: 'GITHUB', value: 'github.com/PemapolS', href: 'https://github.com/PemapolS' },
];
