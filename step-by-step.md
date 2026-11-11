# Step-by-Step

Catatan alur kerja dan progres proyek slicing desain Figma ke Next.js. Semua struktur folder, keputusan teknis, dan log prompt dicatat di sini biar gampang dilacak.

## Struktur Proyek

```text
final-project/
├── .github/                          aturan, prompt, dan skill buat ngarahin AI/Copilot
│   ├── agents/
│   ├── instructions/
│   ├── prompts/
│   ├── skills/
│   ├── hooks/
│   └── copilot-instructions.md
├── next-app/                         folder utama Next.js (jalankan semua perintah npm dari sini)
│   ├── public/figma/                 aset gambar & SVG hasil download dari Figma
│   └── src/
│       ├── app/                      khusus buat routing halaman
│       │   ├── layout.tsx            layout utama, load font, dan import globals.css
│       │   ├── globals.css           pusat design token (warna, font, spacing dari Figma)
│       │   ├── page.tsx              /            → halaman landing page
│       │   └── portfolio/page.tsx    /portfolio   → halaman portfolio
│       ├── components/ui/            komponen UI umum yang dipakai bareng (Button, Card, dll.)
│       └── features/
│           ├── landing-page/         isi fitur landing page (components/, data/, types.ts, index.ts)
│           └── portfolio/            isi fitur portfolio (components/, data/, types.ts, index.ts)
└── step-by-step.md                   catatan proyek (file ini)
```

## Prompting

### Prompt #1

```text
[Role]
Anda adalah Senior Frontend Engineer dan UI Slicing Specialist yang ahli dalam membangun antarmuka web modern berbasis komponen modular, pixel-perfect, aksesibel, dan responsif.

[Task]
Lakukan slicing UI dari desain yang tersedia melalui MCP server menjadi komponen frontend yang siap pakai. Hubungkan ke tool MCP (misal: Figma MCP / browser inspect) untuk membaca token desain, dimensi, spasi, warna, dan hierarki layout secara presisi sebelum menulis kode.

[Context & Constraints]
1. Tech Stack: Next.js (App Router), TypeScript, dan Tailwind CSS.
2. MCP Tool Binding: Wajib gunakan tool MCP yang relevan untuk mengekstrak informasi desain mentah (node/layer Figma atau DOM snapshot). Dilarang menebak-nebak ukuran padding, margin, warna hex, atau ukuran font.
3. Constraints Teknis:
   - Pecah layout menjadi komponen-komponen kecil yang reusable (Single Responsibility Principle).
   - Dilarang menggunakan styling inline; gunakan utility class Tailwind CSS.
   - Wajib strictly typed (dilarang keras memakai tipe `any`).
   - Komponen default harus berupa React Server Components (RSC); gunakan arahan `'use client'` hanya jika membutuhkan state interaktif atau client hooks.
   - Buat antarmuka fully responsive (mobile-first: breakpoints sm, md, lg).

[Format]
Sajikan output dalam tahapan terstruktur berikut:
1. [Design Token Extraction]: Ringkasan singkat token warna, tipografi, dan dimensi penting yang berhasil diambil via MCP tool.
2. [Component Structure]: Struktur tree komponen (hierarki file/folder yang dibuat)].
3. [Source Code]: Blok kode TypeScript (.tsx) lengkap per komponen tanpa placeholder komentar `// implementasi di sini`.
4. [Verification Checklist]: Checklist kepatuhan slicing (responsiveness, accessibility, edge cases tampilan).
```

### Prompt #2

> Can you make schema folder `.github` that contains `instructions/`, `agents/`, `prompts/`, `agents/`, `skills/`, `hooks/` and file `copilot-instructions.md`

### Prompt #3

> Oke let's fix the flow, so first thing first i want to make you make a `.github` folder that contains folder that i have been told. Second after the folder and the file done, execute based on the file at github. i will give you the source you can execute by figma file that i provided below.
>
> - **Landing Page:** <https://www.figma.com/design/FoA2goSyyOXAunh9PCiQFZ/Training-AI--Copy-?node-id=2-2&t=pzPy8IxNg0Yob3BT-4>
> - **Portofolio:** <https://www.figma.com/design/FoA2goSyyOXAunh9PCiQFZ/Training-AI--Copy-?node-id=1-600&t=pzPy8IxNg0Yob3BT-4>
>
> Make sure u can access the link that i gave to you. if you have any question you can ask direct to me before we can execute this project.

### Prompt #4

> oke let's execute step-by-step, start from `.github` folder and the file first and i will review that folder. And you can execute based on that folder

### Prompt #5

> Oke i see no problem at the `.github` folder. Now, i wanna make sure that structure folder that we built is `.github`, (next js app), and `step-by-step`? is it true?

### Prompt #6

> Hmm, i hesitated. If `landing-page/` and `portfolio/` at top level can it still run properly?

### Prompt #7

> Hmm, maybe i choose the option that one project next.js contain 2 sub folder which `landing-page/` and `portfolio/`. If the `.github` folder doesn't align with this idea. can u aligned?

### Prompt #8

> eh no, so at the root folder i want to have 2 folders and 1 file. first folder is `.github` and the second is `portofolio` with 1 file which `step-by-step.md`.
>
> Where the portfolio and the landing-page?
> at the root `portofilio`. so all the app at the folder `portfolio`

### Prompt #8 (Lanjutan)

```text
final-project/
├── .github/
│   ├── agents/
│   │   └── ui-architect.agent.md             # Persona agen spesialis UI/arsitektur[cite: 12, 16]
│   ├── instructions/
│   │   ├── code-quality.instructions.md      # Standar TypeScript & clean code[cite: 10, 13]
│   │   └── ui.instructions.md                # Aturan Tailwind, RSC vs Client component[cite: 16]
│   ├── prompts/
│   │   ├── create-component.prompt.md        # Pintasan slash command scaffolding komponen[cite: 10, 16]
│   │   └── review-ui.prompt.md               # Pintasan audit kualitas & aksesibilitas UI[cite: 10, 11]
│   ├── skills/
│   │   └── component-audit/
│   │       └── SKILL.md                      # Prosedur otomatis audit komponen[cite: 11]
│   └── copilot-instructions.md               # System prompt global proyek (Always-On)[cite: 9, 15, 31]
│
├── next-app/
│   ├── public/                               # Aset statis (gambar, icon, font)
│   ├── src/
│   │   ├── app/
│   │   │   ├── portfolio/                    # Halaman Portfolio (/portfolio)
│   │   │   │   ├── [slug]/                   # Detail item portfolio dinamis (opsional)
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx                  # Halaman utama daftar portfolio
│   │   │   ├── favicon.ico
│   │   │   ├── globals.css                   # Setup Tailwind CSS directives
│   │   │   ├── layout.tsx                    # Root Layout aplikasi
│   │   │   └── page.tsx                      # Root Landing Page (/)
│   │   ├── components/                       # Komponen UI modular
│   │   │   ├── landing/                      # Komponen khusus landing page (Hero, Features, CTA)
│   │   │   ├── portfolio/                    # Komponen khusus portfolio (ProjectCard, Gallery)
│   │   │   └── shared/                       # Komponen bersama (Navbar, Footer, Button)
│   │   └── lib/                              # Fungsi helper, utils, konfigurasi
│   ├── .eslintrc.json
│   ├── next.config.mjs
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── tailwind.config.ts
│   └── tsconfig.json
│
└── step-by-step.md                           # Dokumentasi alur pengerjaan & log implementasi
```

> I want the structure folder like this

### Prompt #9

> `@com.figma.mcp/mcp`
>
> oke start execution to slicing based on link that i gave before

### Prompt #10

```text
final-project/
├── .github/
│   ├── agents/
│   ├── instructions/
│   ├── prompts/
│   ├── skills/
│   └── copilot-instructions.md
│
├── next-app/ (didalam isinya nanti bakal ada landing-page dan portfolio, dengan metode per feature)
│
└── step-by-step.md
```

> Can you recreate and start from 0 at the folder `next-app`?

### Prompt #11

> why i cant `npm run dev`?

### Prompt #12

> Oke sekarang ada udah review dan bisa fixing kembali yaitu judul pada landing-page di tulisan "Welcom Aboard Bootcamp Batch 19" ngga center/tengah. Lalu di portfolio belum ada foto pada bagian tentang saya. lalu pada bagian Keahlian & Teknologi belum ter implementasi semua. dan pada header ganti logo dan nama jadi JsP dan Jati Sri Pamungkas

### Prompt #13

> bre itu kok error kenapa?

### Prompt #14

> di terminal ku ngga jalan `npm run dev` tapi kok web bisa ku akses

### Prompt #15

> kalo os di shutdown berarti bakal mati kan?

---

## Fungsi `.github`

### 1. `copilot-instructions.md`

- **Fungsi:** Aturan utama proyek yang otomatis selalu dibaca AI setiap kali kerja di repo ini.
- **Isinya:**
  - **Struktur & batas fitur:** Aplikasi Next.js (`next-app/`) dibagi per fitur—`src/features/landing-page/` (`/`) dan `src/features/portfolio/` (`/portfolio`)—biar tidak saling campur. Komponen UI yang dipakai bareng masuk ke `src/components/ui/` (`Button`, `Badge`, `Card`, `Container`, `IconWell`, `StatusPill`), helper/tipe umum di `src/lib/`, dan `src/app/` cuma buat routing.
  - **Design token:** Semua warna, font, jarak (spacing), radius, dan shadow wajib ambil dari `src/app/globals.css` (Tailwind v4 `@theme inline`) sesuai Figma—jangan ngarang angka sendiri atau pakai inline `style`.
  - **Aturan coding & verifikasi:** TypeScript mode strict, React 19 + Server Component sebagai default (tanpa `forwardRef`), gambar pakai `next/image`, aksesibel (standar WCAG AA), responsif dari `320px` (mobile-first), serta wajib cek `npm run dev`, `npx tsc --noEmit`, `npm run lint`, dan `npm run build` dari `next-app/`, lalu catat progresnya di `step-by-step.md`.

### 2. `.github/instructions/`

- **`code-quality.instructions.md`** (`applyTo: "**/*.{ts,tsx}"`)
  - **Fungsi:** Aturan kerapian dan keamanan tipe kode untuk semua file `.ts` dan `.tsx`.
  - **Isinya:** Dilarang pakai `any`, `@ts-ignore`, `@ts-expect-error`, atau casting paksa `as unknown as T`; pakai `unknown` + type guard, `satisfies`, discriminated union, dan `await params` (Next.js 15). Mengatur cara ketik props (`React.ComponentProps<...>` + `cn()`), import alias `@/*`, penamaan yang jelas, alur fungsi yang simpel (*early return*, maksimal 3 level indentasi), dan penanganan error yang rapi.
  - **Catatan:** Di baris 35 file ini melarang file barrel `index.ts`, tapi `copilot-instructions.md` mewajibkan `features/<name>/index.ts`. Sesuai aturan prioritas di baris 9, yang dipakai tetap aturan di `copilot-instructions.md`.

- **`ui.instructions.md`** (`applyTo: "**/src/**/*.tsx"`)
  - **Fungsi:** Panduan khusus saat bikin atau styling komponen UI React.
  - **Isinya:** Wajib pakai token dari `src/app/globals.css`, jaga batas antar-fitur, pasang `'use client'` hanya di bagian kecil yang butuh interaksi (jangan pernah di `page.tsx` atau `layout.tsx`), atur layout pakai flexbox/grid (`gap`/`padding`), responsif mobile-first ikut frame Figma, jaga aksesibilitas (satu `h1` per halaman, `aria-label`, `aria-hidden`, `focus-visible:`, kontras WCAG AA), dan selalu pakai `next/image`.

### 3. `.github/agents/`

- **`ui-architect.agent.md`**
  - **Fungsi:** Bikin persona AI khusus bernama **"UI Architect"** (spesialis arsitektur Next.js App Router) yang punya akses `read`, `search`, `edit`, dan `todo`.
  - **Kapan dipakai:** Dipanggil sebelum mulai ngoding UI—buat memetakan desain Figma ke struktur `src/components`, nentuin komponen itu masuk folder fitur atau `src/components/ui/`, dan milih mana yang Server vs Client Component. Agent ini wajib bikin blueprint/rencana (*Scope*, *Current inventory*, *Proposed file tree*, *Composition diagram*, *Client boundaries*, *Token dependencies*, *Open questions*) dulu sebelum nulis kode.

### 4. `.github/prompts/`

- **`create-component.prompt.md`** (*"Create Component"*)
  - **Fungsi:** Shortcut prompt buat bikin **satu** komponen baru secara terarah (tinggal kasih nama, target folder, dan nilai desain dari Figma).
  - **Alurnya:** Cek `src/app/globals.css` dan contoh komponen lain di folder tujuan → bikin 1 file kebab-case dengan export PascalCase, interface props, class Tailwind, batas RSC/`'use client'`, dan aksesibilitas → laporin path file, interface props, token yang dipakai, plus hasil `npx tsc --noEmit` (tanpa ngubah file lain).

- **`review-ui.prompt.md`** (*"Review UI"*)
  - **Fungsi:** Prompt review *read-only* (`tools: [read, search]`, tanpa ubah file atau nyalain dev server) buat ngecek satu file atau route. Urutan ceknya: kepatuhan token, batas `'use client'`, batas antar-komponen, aksesibilitas, responsivitas, dan type safety—lalu hasilnya diurutkan dari masalah paling fatal.

### 5. `.github/skills/`

- **`component-audit/SKILL.md`** (`component-audit`)
  - **Fungsi:** Panduan/SOP audit UI yang lebih lengkap buat ngecek komponen atau halaman secara berkala (pas baru selesai dibuat, sebelum *handover*, atau pas tampilannya kerasa ada yang aneh).
  - **Bedanya sama `review-ui.prompt.md`:** Tahapannya lebih detail (6 langkah cek), temuan dikelompokkan berdasarkan level (*Broken*, *Accessibility*, *Consistency*, *Style*), dan ditutup dengan verifikasi wajib di `next-app/`: `npx tsc --noEmit`, `npm run lint`, dan `npm run build`.

### 6. `.github/hooks/`

- **`.gitkeep`**
  - **Fungsi:** Cuma file kosong penanda biar folder `.github/hooks` tetap ikut kesimpan di Git (siap dipakai kalau nanti mau nambahin hook otomatisasi, sekarang masih kosong).
