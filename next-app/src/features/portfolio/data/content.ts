import type {
  CareerEntry,
  FooterLink,
  Project,
  ProjectFilter,
  SkillGroup,
  Stat,
  TechChip,
  TerminalLine,
  ValueCard,
} from "../types";

/* ------------------------------------------------------------------ */
/* 1:602 Hero                                                          */
/* ------------------------------------------------------------------ */

/** 1:605 — availability badge. */
export const availability = "Tersedia untuk proyek baru & kontrak freelance";

/** 1:609 — headline split so the gradient covers only the middle clause. */
export const heroHeadline = {
  line1: "Membangun Solusi Web",
  line2: "Modern dengan",
  gradle: "Pengalaman Digital",
  tail: " yang",
  line4: "Memukau.",
} as const;

/** 1:611 — hero subtext. */
export const heroSubtext =
  "Saya Jati Sri Pamungkas — Full Stack Developer & UI/UX Designer berbasis di Jakarta. Berfokus pada arsitektur web berperforma tinggi, antarmuka interaktif yang memikat, dan sistem backend yang skalabel.";

/** 1:613 / 1:619 — hero actions. */
export const heroActions = [
  { label: "EKSPLORASI PROYEK", href: "#projects", variant: "primary" },
  { label: "TENTANG SAYA", href: "#about", variant: "secondary" },
] as const;

/** 1:627–1:641 — core stack strip, in design order. */
export const techChips: TechChip[] = [
  { label: "React 19", tone: "teal" },
  { label: "Next.js 15", tone: "indigo" },
  { label: "TypeScript", tone: "teal" },
  { label: "Node.js", tone: "sky" },
  { label: "Tailwind CSS", tone: "indigo" },
];

/** 1:649 — terminal window title. */
export const terminalTitle = "jati-sri-pamungkas.config.ts";

/** 1:642 — terminal preview lines, verbatim. */
export const terminalLines: TerminalLine[] = [
  { prompt: "//", text: "Inisialisasi profil teknis", tone: "muted" },
  { prompt: "focus:", text: "[", tone: "key" },
  {
    prompt: "",
    text: "  'High-Throughput APIs & Data Pipeline'",
    tone: "string",
  },
  { prompt: "]", text: ",", tone: "key" },
  { prompt: "getInTouch:", text: "() =>", tone: "key" },
  { prompt: "});", text: "", tone: "accent" },
];

/** 1:64x — closing terminal command. */
export const terminalCommit = '$ git commit -m "feat: ship digital excellence"';

/** Hero stats. */
export const heroStats: Stat[] = [
  { value: "3+ Tahun", label: "Pengalaman Industri Nyata" },
  { value: "25+ Proyek", label: "Selesai & Beroperasi di Production" },
  { value: "99%", label: "Tingkat Kepuasan Klien & Partner" },
];

/* ------------------------------------------------------------------ */
/* 1:601 § 3 ABOUT ME                                                  */
/* ------------------------------------------------------------------ */

export const about = {
  eyebrow: "PROFIL & DEDIKASI",
  heading: "Tentang Saya",
  intro:
    "Mengenal lebih dekat perjalanan, nilai integritas, dan filosofi kerja saya.",
  name: "Jati Sri Pamungkas",
  role: "Backend Engineer",
  /** 1:723 — portrait asset, intrinsic 512x279. */
  portrait: "/figma/about-portrait.jpg",
  facts: [
    { label: "Lokasi", value: "Yogyakarta / Remote Global" },
    { label: "Status Kerja", value: "Open to Contract / Fulltime" },
    {
      label: "Pendidikan",
      value: "Teknik Informatika (Computer Science)",
    },
  ],
  cta: "UNDUH CURRICULUM VITAE (PDF)",
  narrative: [
    "Perjalanan saya dalam rekayasa perangkat lunak dimulai dari rasa ingin tahu mendalam tentang bagaimana sistem skala besar dapat dibangun tanpa mengorbankan estetika dan intuisi visual.",
    "Saya percaya bahwa kode yang bersih dan desain yang empatik bukanlah dua hal yang terpisah, melainkan satu kesatuan karya.",
    "Sebagai profesional yang memadukan perspektif teknis dan desain, saya terbiasa memimpin siklus pengembangan dari nol: mulai dari riset kebutuhan pengguna, penyusunan wireframe di Figma, implementasi frontend modern dengan React dan Next.js, hingga konfigurasi basis data terdistribusi dan integrasi API yang aman.",
  ],
  values: [
    {
      title: "Clean Code",
      description:
        "Penerapan standar SOLID, TypeScript strict mode, dan pengujian berkala untuk keandalan jangka panjang.",
    },
    {
      title: "User-Centric",
      description:
        "Antarmuka dibuat berlandaskan aksesibilitas WCAG, micro-interactions halus, dan performa 60fps.",
    },
    {
      title: "Agility & Growth",
      description:
        "Iterasi cepat dengan komunikasi transparan, adaptif terhadap kebutuhan bisnis dan arsitektur modern.",
    },
  ] satisfies ValueCard[],
  careerHeading: "Jejak Karier Singkat",
  career: [
    {
      period: "2026 — Sekarang",
      role: "Bootcamp - Berijalan",
      description:
        "Mengikuti bootcamp Software Development di Berijalan dengan fokus pada pengembangan API, database, dan integrasi sistem menggunakan Java, Spring Boot, dan WebMethods.",
    },
  ] satisfies CareerEntry[],
} as const;

/* ------------------------------------------------------------------ */
/* 1:601 § 4 SKILLS                                                    */
/* ------------------------------------------------------------------ */

export const skills = {
  eyebrow: "KOMPILASI INSTRUMEN",
  heading: "Keahlian & Teknologi",
  intro:
    "Daftar perkakas teknis, pustaka kode, dan platform yang saya gunakan untuk mewujudkan produk digital berskala produksi.",
  groups: [
    {
      title: "Frontend",
      description: "Antarmuka responsif, dinamis, dan teroptimasi.",
      icon: "/figma/skill-frontend.svg",
      iconWidth: 22,
      iconHeight: 17,
      discipline: "Core Discipline",
      items: [
        { label: "React 18/19", tone: "teal" },
        { label: "Next.js", tone: "indigo" },
        { label: "TypeScript", tone: "teal" },
        { label: "Vue.js 3", tone: "indigo" },
        { label: "Tailwind CSS", tone: "sky" },
        { label: "HTML5/CSS3", tone: "muted" },
      ],
    },
    {
      title: "Backend & DB",
      description: "Layanan mikro, struktur data, dan API aman.",
      icon: "/figma/skill-backend.svg",
      iconWidth: 20,
      iconHeight: 20,
      discipline: "Core Discipline",
      items: [
        { label: "Node.js", tone: "teal" },
        { label: "Express / Nest", tone: "indigo" },
        { label: "PostgreSQL", tone: "teal" },
        { label: "MongoDB", tone: "indigo" },
        { label: "REST & GraphQL", tone: "sky" },
        { label: "Prisma ORM", tone: "muted" },
      ],
    },
    {
      title: "UI/UX & Design Systems",
      description: "Interaksi teruji, hierarki visual & prototipe.",
      icon: "/figma/skill-design.svg",
      iconWidth: 22,
      iconHeight: 22,
      discipline: "Core Discipline",
      items: [
        { label: "Figma", tone: "teal" },
        { label: "Design Tokens", tone: "indigo" },
        { label: "Wireframing", tone: "teal" },
        { label: "User Research", tone: "sky" },
        { label: "Prototyping", tone: "muted" },
      ],
    },
    {
      title: "Tools & DevOps",
      description: "Alur kerja modern, automasi, dan deployment.",
      icon: "/figma/skill-tools.svg",
      iconWidth: 22,
      iconHeight: 17,
      discipline: "Core Discipline",
      items: [
        { label: "Git & GitHub", tone: "indigo" },
        { label: "Docker", tone: "teal" },
        { label: "CI/CD Actions", tone: "teal" },
        { label: "Vercel & Cloudflare", tone: "sky" },
        { label: "VS Code & Zed", tone: "muted" },
      ],
    },
  ] satisfies SkillGroup[],
} as const;

/* ------------------------------------------------------------------ */
/* 1:601 § 5 PROJECTS                                                  */
/* ------------------------------------------------------------------ */

export const projects = {
  eyebrow: "Proyek Pilihan",
  heading: "Proyek Pilihan",
  intro:
    "Beberapa karya terbaik yang pernah saya rancang dan bangun dengan fokus pada skalabilitas serta kenyamanan interaksi pengguna.",
  filters: [
    { label: "SEMUA (2)", active: true },
    { label: "FULL STACK" },
    { label: "UI/UX APP" },
  ] satisfies ProjectFilter[],
  items: [
    {
      category: "SaaS & Business Intelligence",
      title: "Hunter Rise",
      description:
        "Hunter Rise is a gamified task management app designed to make your daily productivity feel like leveling up in a fantasy RPG world. Inspired by the popular manhwa Solo Leveling, you don't just complete tasks — you complete quests as a Hunter.",
      stack: ["Next.js", "Tailwind CSS", "Chart.js", "PostgreSQL"],
    },
    {
      category: "E-Commerce & FinTech",
      title: "Task Master",
      description:
        "Task Master is a minimalistic and user-friendly task management application designed to help users organize and prioritize their daily activities with ease. Unlike gamified versions, Task Master focuses on simplicity, clarity, and efficiency.",
      stack: ["React", "TypeScript", "Stripe API", "Tailwind"],
    },
  ] satisfies Project[],
  demoLabel: "DEMO LANGSUNG",
  sourceLabel: "KODE SUMBER",
} as const;

/* ------------------------------------------------------------------ */
/* 1:601 § 6 CONTACT                                                   */
/* ------------------------------------------------------------------ */

export const contact = {
  eyebrow: "Mari Memulai Sesuatu yang Hebat",
  heading: "Mari Kolaborasi Bersama.",
  body: [
    "Memiliki ide produk baru, kebutuhan transformasi sistem yang membutuhkan penanganan teliti, atau ingin sekadar berdiskusi teknis seputar arsitektur modern? Pintu diskusi saya selalu terbuka.",
  ],
  emailLabel: "Surel Utama",
  email: "jatispamungkas357@gmail.com",
  socials: ["LinkedIn", "GitHub", "Twitter / X"],
  formHeading: "Kirimkan Pesan Langsung",
  fields: [
    { label: "NAMA LENGKAP", placeholder: "mis. Budi Santoso", type: "text" },
    {
      label: "ALAMAT EMAIL",
      placeholder: "nama@perusahaan.com",
      type: "email",
    },
    {
      label: "PESAN / RENCANA PROYEK",
      placeholder: "Ceritakan tujuan, lingkup kebutuhan, dan perkiraan waktu proyek Anda...",
      type: "textarea",
    },
  ],
  submitLabel: "KIRIM PESAN SEKARANG",
} as const;

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const footer = {
  brand: "Jati Sri Pamungkas",
  tagline: "Dibuat dengan dedikasi dan passion untuk kesempurnaan web.",
  copyright: "© 2026 Creative Technologist. All rights reserved.",
  links: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#privacy" },
  ] satisfies FooterLink[],
} as const;

/* ------------------------------------------------------------------ */
/* Global navigation                                                   */
/* ------------------------------------------------------------------ */

export const nav = {
  logo: "JsP",
  wordmark: "Jati Sri Pamungkas",
  links: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ] satisfies FooterLink[],
  cta: { label: "GET IN TOUCH", href: "#contact" },
} as const;