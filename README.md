# we-claims-ca

Windley Inc Claims Client Analysis

An investor-focused demo of a client-facing claims analysis platform. Prospective clients answer a few questions to discover which claims management programs they may be eligible for and how quickly they could see impact. Built to showcase speed, clarity, and a production-ready foundation.

---
## Problems Faced
- Clients worry about a refusal or denial of claims
- The process is often times complex and confusing for the client
- The compensation is often times not enough (Only replaces 85% - 90% of net pay)
- Disputes over medical treatment or delay
- Mental health and stress

## Highlights (for demo)
- Clear value: quickly match clients to the right claims program with expected approval timelines.
- Fast UX: server-first rendering, minimal client JS, and responsive animations.
- Observability: analytics + event tracking from day one.

## Services Offered
A curated set of programs Total Claims Management Programs can explore:

- Comprehensive WCB Claims Management — 2–6 weeks
  - End-to-end workplace injury claims management ensures compliance, efficiency, and cost reduction across all operations.
- Full Medical WCB Claims Management — 4–8 weeks
  - Adds Windley Ely’s medical team to optimize return-to-work outcomes.
- Partial Medical WCB Claims Management — 3–7 weeks
  - Targeted medical services reduce claim durations and increase ROI.
- Short-term Disability Claims Management — 1–3 weeks
  - Effective administration of STD/MLOA claims to support timely recovery and reduce disruptions.
- Attendance Management — Ongoing
  - Proactively track and manage attendance to minimize absenteeism and boost productivity.
- Workplace Accommodation — 2–4 weeks
  - Tailored solutions to enable compliant, inclusive accommodations.

---

## Tech Stack and Why It Matters
- Redbits (animation): smooth, high-performance motion primitives that enhance clarity without heavy bundles.
- Architecture (server vs client components): cuts hydration cost, reduces rerenders, improves TTFB and scalability.
- Next.js (latest): production app framework with file-based routing, caching, and edge-friendly rendering; trusted by leading companies.
- Dynamic, modular pages: composable UI blocks for rapid iteration and targeted A/B testing.
- PostHog: product analytics, funnels, and feature flags with privacy controls and self-hosting options.
- MongoDB: flexible document model for rapid iteration and lean infra; first-class Node.js ecosystem.
- Warp (AI dev tool): in-terminal AI accelerates implementation, refactors, and repeatable workflows.
- Junie (AI dev tool): assists with code insights and rapid prototyping.
- OpenAI GPT-4o mini: low-latency, cost-efficient LLM for text processing and simple reasoning.

---
## Next Steps
- Use PostHog for more advanced data monitoring and tracking which can well Windley Inc what services clients are using and why.
- Create a more robust backend with MongoDB or SQL to understand client needs more and store their data
- Use the OpenAI features for more advanced data storage and anticipation of services clients may need.
- The Potientials for advancements are limitless  

---

## Architecture at a Glance
- Next.js App Router with server components by default; client components only where interactivity is required.
- API routes back services and form flows; Mongoose models with strict TypeScript types and pre-save validation.
- Analytics pipeline via PostHog for user flows and conversions.

Project structure (key parts):

```
./database
  ├─ index.ts
  └─ service.model.ts
./app
  ├─ (routes)
  └─ page.tsx
```

---

## Getting Started

1) Install dependencies

```bash
npm i
# or: pnpm i | yarn | bun install
```

2) Configure environment

Create a .env.local with the following:

```
MONGODB_URI="YOUR_MONGODB_URI"
NEXT_PUBLIC_POSTHOG_KEY="YOUR_POSTHOG_KEY"
NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.com" # or your self-hosted domain
```

3) Run the app

```bash
npm run dev
```

Open http://localhost:3000

---

## Demo Script (suggested)
1) Land on the home page: explain the value prop and programs offered.
2) Select a program: highlight approval timelines and benefits.
3) Walk through a short eligibility flow: show instant feedback and next steps.
4) Show analytics: demonstrate event tracking and funnel insights.

---

## Roadmap
- Eligibility scoring model (weights per program, confidence ranges).
- Admin dashboard for program content and approvals.
- Deeper analytics segments and experiment frameworks.
