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
  title: string;
  org: string;
  tag: string;
  accent: boolean;
  defaultOpen: boolean;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  title: string;
  org: string;
  dates: string;
  badge: string;
  collapsible: boolean;
  defaultOpen?: boolean;
  details?: string[];
}

export interface ProjectItem {
  id: string;
  meta: string;
  title: string;
  role: string;
  tags: string[];
  accent: boolean;
  bullets: string[];
  /** External resource: a repo URL or a PDF path under /public. */
  link?: string;
}

export interface CertItem {
  id: string;
  badge: string;
  title: string;
  desc: string;
  bullets: string[];
  /** Credential verification URL. */
  link?: string;
}

export interface SkillGroup {
  label: string;
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
  contact: { lead: Bilingual; reveal: Bilingual };
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
      th: 'บัณฑิตจากจุฬาลงกรณ์มหาวิทยาลัย มีผลการเรียนดีเยี่ยม มุ่งเน้นด้านการเขียนโปรแกรมและวิศวกรรมข้อมูล เชี่ยวชาญ Python, Java, SQL และเครื่องมือ data visualization พร้อมประสบการณ์ตรงด้านการออกแบบ UX/UI และการบริหารโครงการ',
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
      en: 'Open to data engineering and cloud / infrastructure roles.',
      th: 'เปิดรับโอกาสงานด้าน Data Engineering และ Cloud / Infrastructure',
    },
    reveal: { en: 'Click to reveal', th: 'คลิกเพื่อแสดง' },
  },
  modal: {
    openMail: { en: 'Open mail app', th: 'เปิดแอปอีเมล' },
    copy: { en: 'Copy', th: 'Copy' },
    copied: { en: 'Copied ✓', th: 'Copied ✓' },
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
    title: 'Data Engineer Intern',
    org: 'Advanced Info Service PLC (AIS) · Network Quality Management',
    tag: 'INTERNSHIP',
    accent: true,
    defaultOpen: true,
    bullets: [
      'Joined AIS Digital Talent | The Bloom, a 2-month work-experience program with the Network Quality Management (NQM) department.',
      'Built ETL pipelines and automated jobs on daily OOKLA network-performance data APIs.',
      'Used PySpark, Hadoop, and Impala to store and query large datasets covering all major telecommunication networks across Thailand.',
    ],
  },
  {
    id: 'exp2',
    dateMain: 'JAN–MAY',
    dateSub: '2025',
    title: 'Teaching Assistant',
    org: 'Faculty of Engineering, Chulalongkorn University',
    tag: 'PART-TIME',
    accent: false,
    defaultOpen: true,
    bullets: [
      'Teaching assistant for “Introduction to Data Science and Big Data”, an engineering elective.',
      'Evaluated and graded assignments, quizzes, and exams to ensure consistency and accuracy in assessment.',
      'Addressed student queries, proctored examinations, and provided feedback on assignments.',
    ],
  },
  {
    id: 'exp3',
    dateMain: '2023–NOW',
    dateSub: null,
    title: 'Registration Lead & Web Designer',
    org: 'Self-employed / Freelance · Convention operations',
    tag: 'FREELANCE',
    accent: false,
    defaultOpen: true,
    bullets: [
      'Registration lead for conventions with 1,700+ combined attendees annually and THB 300,000 raised for charity.',
      'Planned physical systems and attendee flow; trained staff members during events.',
      'Collaborated with developers to define the functionality and design of event-operations websites.',
      'Designed and wireframed registration systems using Figma.',
    ],
  },
];

export const education: EducationItem[] = [
  {
    id: 'edu1',
    title: 'B.Eng. Information & Communication Engineering',
    org: 'International School of Engineering, Chulalongkorn University',
    dates: '2022–2026',
    badge: 'GPAX 3.61 · FIRST CLASS HONORS',
    collapsible: true,
    defaultOpen: true,
    details: [
      'Relevant coursework: Computer Programming, Fundamental Data Structures & Algorithms, Principles of Telecommunications, Database Systems, Software Engineering, Data Warehousing.',
    ],
  },
  {
    id: 'edu2',
    title: 'Undergraduate Exchange',
    org: 'Faculty of Engineering & IT, University of Technology Sydney',
    dates: 'JUL–DEC 2025',
    badge: 'GPAX 6.25/7 · WAM 82.25',
    collapsible: true,
    defaultOpen: true,
    details: [
      'Relevant coursework: Introduction to Artificial Intelligence, Cloud Computing Infrastructure, Systems Testing & Quality Management.',
      'Funded by the Destination Australia Cheung Kong Exchange Program Award, Spring 2025.',
    ],
  },
  {
    id: 'edu3',
    title: 'High School Diploma, Science–Mathematics',
    org: 'Triam Udom Suksa School',
    dates: '2019–2022',
    badge: 'GPAX 3.66',
    collapsible: false,
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'prj1',
    meta: 'AUG 2025 – MAY 2026 · SENIOR PROJECT',
    title: 'Multi-Tenant Cloud Architecture for SaaS Hotel HRM',
    role: 'DevOps & Tester',
    tags: ['Kubernetes', 'AWS EC2', 'Jenkins', 'ArgoCD', 'k6'],
    accent: true,
    link: '/Multi-Tenant_Cloud_Arch_SaaS_HRM.pdf',
    bullets: [
      'Led DevOps implementation for a Kubernetes cluster on AWS EC2s with namespace-per-tenant isolation, Traefik ingress, Jenkins CI/CD, and ArgoCD for automated deployments and canary rollouts targeting 10k concurrent users.',
      'Designed and executed k6 load tests simulating load spikes, validating horizontal pod autoscaling and cluster resilience.',
    ],
  },
  {
    id: 'prj2',
    meta: 'SEP – OCT 2025 · INTRO TO AI COURSE',
    title: 'Recurrent Neural Network Stock Price Prediction',
    role: 'Team Member',
    tags: ['Keras', 'LSTM', 'GRU'],
    accent: false,
    link: '/41040_AT2_Project.pdf',
    bullets: [
      'Utilized recurrent neural network techniques such as SimpleRNN, LSTM, and GRU from the Keras library.',
      'Trained models on historical Yahoo Finance stock price data to predict future data.',
      'Tuned hyperparameters to optimize prediction results for accuracy against true data.',
    ],
  },
  {
    id: 'prj3',
    meta: 'JAN – APR 2025 · ICE CAPSTONE COURSE',
    title: 'Medication Reminders Application',
    role: 'Database Developer',
    tags: ['UML', 'DBA', 'Cloud'],
    accent: false,
    bullets: [
      'Designed schemas and created UML diagrams to model data structures and system workflows.',
      'Managed database administration and implemented cloud deployments to ensure scalability and reliability.',
    ],
  },
  {
    id: 'prj4',
    meta: 'SEP – NOV 2024 · NETCENTRIC ARCHITECTURE COURSE',
    title: 'Battleship Game',
    role: 'Frontend Developer & UX/UI Designer',
    tags: ['React', 'Socket.IO', 'MongoDB'],
    accent: false,
    link: 'https://github.com/mpsean/4ARM-BattleshipGame',
    bullets: [
      'Developed a multiplayer online game based on the Battleship board game with player authentication and customization options.',
      'Utilized Tailwind CSS, React, Vite, Node.js, Socket.IO, Express.js, and MongoDB.',
    ],
  },
];

export const certifications: CertItem[] = [
  {
    id: 'cert1',
    badge: 'AWS',
    title: 'AWS Cloud Solutions Architect Specialization',
    desc: 'Completed during ISE’s 2025 School Break Upskill-Reskill online learning program.',
    link: 'https://coursera.org/share/f1bc1813d56ccab73c33e990804977cd',
    bullets: [
      'Amazon Web Services for compute, storage, database, networking, monitoring, and security.',
      'AWS S3, EC2, Lambda, VPC, RDS, DynamoDB, CloudWatch, and more.',
    ],
  },
  {
    id: 'cert2',
    badge: 'IBM',
    title: 'IBM Data Engineering Specialization',
    desc: 'Completed during ISE’s 2024 Summer School Break online learning program.',
    link: 'https://www.coursera.org/account/accomplishments/specialization/JC4JV7VC2CSZ',
    bullets: [
      'Create, design, and manage relational databases; apply database administration (DBA).',
      'MySQL, PostgreSQL, IBM Db2, NoSQL.',
      'Big Data using MongoDB, Cassandra, Hadoop, Apache Spark, Spark SQL, and Spark ML.',
      'ETL & data pipelines with Bash, Airflow & Kafka.',
    ],
  },
  {
    id: 'cert3',
    badge: 'GOOGLE',
    title: 'Google Data Analytics Specialization',
    desc: 'Completed as part of the “Selected Topics in ICE” course during undergraduate study.',
    link: 'https://www.coursera.org/account/accomplishments/specialization/BNDRH57SGMB6',
    bullets: ['Data cleaning, analysis, visualization, SQL, R programming, Tableau.'],
  },
];

export const skills: SkillGroup[] = [
  { label: 'LANGUAGES & DATA', items: ['Python', 'Java', 'SQL', 'Spark', 'PySpark', 'Hadoop'] },
  { label: 'DATABASES', items: ['PostgreSQL', 'MySQL'] },
  { label: 'CLOUD & DEVOPS', items: ['AWS', 'Kubernetes', 'Docker', 'Jenkins', 'ArgoCD'] },
  {
    label: 'WEB',
    items: ['HTML & CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Git'],
  },
  {
    label: 'TOOLS',
    items: ['Tableau', 'TIBCO Spotfire', 'Adobe Creative Suite', 'Microsoft Office', 'Google Workspace'],
  },
  { label: 'OTHER', items: ['Report Writing', 'Video Editing', 'Graphic Design', 'Figma / Wireframing'] },
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
