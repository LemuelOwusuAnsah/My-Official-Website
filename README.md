# Lemuel Owusu-Ansah — Portfolio

Personal portfolio and Web3 playground for **Lemuel Owusu-Ansah** — full-stack developer, founder of Lans Multimedia, published author, and music producer based in Accra, Ghana.

**Live:** [lemuelowusuansah.org](https://lemuelowusuansah.org)

---

## What this is

A production-grade portfolio site that also serves as a live demonstration of the technologies I work with daily — from React and TypeScript to Web3 wallet integrations, multilingual content, and CI/CD deploys.

## Tech Stack

### Frontend
- **React 19** — component architecture with hooks
- **TypeScript 6** — 100% typed codebase, no `any`
- **Vite 8** — fast dev server and optimized production builds
- **Tailwind CSS 3** — utility-first styling with custom design tokens
- **Framer Motion** — scroll reveals and micro-interactions
- **Lucide React** — consistent iconography

### Web3
- **Wagmi** — React hooks for Ethereum
- **Viem** — low-level typed Ethereum interactions
- **TanStack Query** — data fetching and caching
- **Sepolia testnet** — live smart contract demo

### Internationalization
- **react-i18next** — full support for 5 languages (EN, FR, ES, DE, PT)
- Auto-detection of browser language
- Persisted language preference

### Content
- **React Markdown** + **remark-gfm** — blog posts as Markdown
- Curated Unsplash cover images

### Deployment & Tooling
- **Netlify** — continuous deployment from GitHub, free SSL
- **Cloudflare** — DNS, edge caching, email routing
- **ESLint** — code quality enforcement

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — editorial hero, role tiles, featured projects |
| `/skills` | 14-skill matrix, full-stack disciplines, 23+ certifications |
| `/work` | Published books, featured GitHub projects, music |
| `/about` | Bio, education, leadership, memberships |
| `/philosophy` | 5 principles with editorial photography |
| `/career` | Professional timeline with direction statement |
| `/blog` | 6 long-form articles on development and craft |
| `/contact` | Contact form with direct info and social links |
| `/wallet` | Live Web3 wallet connect (Sepolia testnet) |
| `/contracts` | Read/write a real smart contract on Sepolia |

---

## Local Development

```bash
git clone https://github.com/LemuelOwusuAnsah/portfolio.git
cd portfolio
npm install
npm run dev
```

Opens at `http://localhost:5173`.

### Build

```bash
npm run build
```

Output goes to `dist/`.

### Preview the production build

```bash
npm run preview
```

---

## Design System

### Colors
- **Canvas:** `#fafafa` (light) / `#0a0a0a` (dark)
- **Accents:** Lemon `#65a30d`, Orange `#ea580c`, Gold `#a16207`, Violet `#7c3aed`, Canva Cyan `#00c4cc`
- **Text:** `#0a0a0a` (light) / `#fafafa` (dark)

### Typography
- **Inter** — body and UI
- **Inter Tight** — display headings
- **JetBrains Mono** — labels, code, statistics
- **Alex Brush** — signature script for the "Lemy" wordmark

### Principles
- Editorial layouts — thin rules, big type, no card clutter
- Color-blocked sections (Envato/Canva style)
- Scroll reveals and hover lifts
- Mobile-first, dark-mode ready
- Accessibility — focus rings, ARIA labels, semantic HTML

---

## Web3 Demo

The `/wallet` and `/contracts` pages are **live, on-chain demonstrations** running on the **Sepolia testnet** — no real funds, no mainnet.

- `/wallet` — connects an injected wallet via Wagmi, shows live address, balance, ENS name, and block number
- `/contracts` — reads and writes to a real SimpleStorage contract deployed on Sepolia

**No wallet installed?** The nav button links to MetaMask's download page. The site works fully without a wallet too.

---

## Web3 Setup (Optional)

To interact with the Web3 demo pages, install [MetaMask](https://metamask.io/download):

1. Create a test wallet (never use a real one on testnets)
2. Switch to Sepolia testnet
3. Get free Sepolia ETH from [sepoliafaucet.com](https://sepoliafaucet.com)
4. Click **Connect** in the nav

All transactions are free and irreversible on a fake network — 100% safe.

---

## Project Structure

```
src/
├── components/     Reusable UI — Nav, Footer, Hero, cards, brand icons
├── pages/          Route components — one per URL
├── hooks/          Custom hooks — theme, page meta, scroll reveal
├── i18n/           Translation config
├── locales/        Translation files (en, fr, es, de, po)
├── web3/           Wagmi config and provider
├── content/        Blog posts (Markdown-driven)
└── index.css       Design system + Tailwind layers
```

---

## Internationalization

Supports **English, Français, Español, Deutsch, Português**.

- Language detected from browser on first visit
- Preference stored in localStorage
- All content is translatable via `src/locales/*.json`
- Switch language from the nav dropdown

---

## License

MIT — see [LICENSE](./LICENSE).

---

## Author

**Lemuel Owusu-Ansah**
- GitHub: [@LemuelOwusuAnsah](https://github.com/LemuelOwusuAnsah)
- LinkedIn: [lemuel-owusu-ansah](https://www.linkedin.com/in/lemuel-owusu-ansah/)
- Website: [lemuelowusuansah.org](https://lemuelowusuansah.org)
- Books: [Apple Books](https://books.apple.com/gb/author/lemuel-owusu-ansah/id1587403972)
- Music: [Lemy Newman on Apple Music](https://music.apple.com/gh/artist/lemy-newman/1587403970)
- Studio: [Lans Multimedia](https://web.facebook.com/lansmultimedia)

Built in Accra, Ghana. 🇬🇭
