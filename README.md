# WE Claims Client Analysis
Client-facing claims analysis app for Windley Inc. Users can describe a claim concern, get AI-ranked program recommendations, and review expected approval timelines for each service.

## What this app does
- Shows available claims management services
- Lets users run an Eligibility Check from a natural-language claim concern
- Returns ranked program matches with eligibility probabilities
- Links each match to a detailed service page

## Services covered
- Comprehensive WCB Claims Management (2–6 weeks)
- Full Medical WCB Claims Management (4–8 weeks)
- Partial Medical WCB Claims Management (3–7 weeks)
- Short-term Disability Claims Management (1–3 weeks)
- Attendance Management (Ongoing)
- Workplace Accommodation (2–4 weeks)

## Tech stack
- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4
- OpenAI Chat Completions (`gpt-4o-mini`) for claim analysis
- PostHog for analytics instrumentation

## Project structure
```text
app/
  api/analyzeClaim/route.ts
  eligibility/page.tsx
  services/page.tsx
  services/[slug]/page.tsx
lib/constants.ts
```

## Getting started
### 1) Install dependencies
```bash
npm install
```

### 2) Configure environment variables
Create `.env.local` in the root of the project:

```bash
OPENAI_API_KEY=your_openai_api_key
# Optional:
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_project_key
```

### 3) Start the app
```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts
- `npm run dev` — start development server
- `npm run build` — build for production
- `npm run start` — run production server
- `npm run lint` — run ESLint
- `npm test` — run Jest tests
- `npm run test:watch` — run tests in watch mode

## Tests
Current tests focus on the Eligibility flow:
- page rendering
- API request call (`/api/analyzeClaim`)
- rendering returned service matches

## Next improvements
- Persist user claim submissions in a database
- Add an admin dashboard for service content management
- Expand analytics dashboards for conversion and usage insights
