# Shakeer Gittola — Portfolio

Full Stack Developer portfolio built with Next.js, TypeScript, Prisma, and an integrated AI assistant.

## Live Site

[shakeer-portfolio.vercel.app](https://shakeer-portfolio.vercel.app) *(update once deployed)*

## Features

- **Dynamic project case studies** — pulled from a Postgres database via Prisma, each project gets its own `/projects/[slug]` page
- **AI chatbot ("Node")** — answers visitor questions about my background, powered by Google Gemini, with a 3D WebGL orb that visually reacts to the chat's live status (idle / listening / thinking)
- **Full dark mode** — persisted across visits
- **Contact form** — real email delivery via Web3Forms, plus direct Cal.com scheduling
- **Fully responsive**, accessible, and built with motion-first micro-interactions throughout

## Tech Stack

- **Framework:** Next.js 15 (App Router), TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Motion (Framer Motion)
- **3D:** Three.js + React Three Fiber
- **Database:** PostgreSQL (Supabase) via Prisma ORM
- **AI:** Google Gemini via the Vercel AI SDK
- **Forms:** Web3Forms
- **Deployment:** Vercel

## Getting Started

```bash
git clone https://github.com/Shakeerg/Portfolio.git
cd Portfolio
npm install
```

Create a `.env` file with:
```env
DATABASE_URL="your-supabase-pooled-connection-string"
DIRECT_URL="your-supabase-direct-connection-string"
GOOGLE_GENERATIVE_AI_API_KEY="your-gemini-api-key"
```

Then run migrations and start the dev server:
```bash
npx prisma migrate dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Contact

- **Email:** gshakeer650@gmail.com
- **LinkedIn:** [linkedin.com/in/shakeer-gittolla](https://www.linkedin.com/in/shakeer-gittolla)
- **GitHub:** [github.com/Shakeerg](https://github.com/Shakeerg)