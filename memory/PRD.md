# Ready2UP Sales Command Center — PRD

## Original Problem Statement
Build a world-class, production-ready Sales Command Center / Lead Intelligence Dashboard as a single-file web app (HTML + CSS + JS, no frameworks) for Ready2UP (Nashik web design, SEO & AI automation agency). Used by sales reps to prospect, pitch and close website deals with 40 local cafes, restaurants, bars and breweries. Light-mode premium SaaS aesthetic (Linear/Notion/Stripe), Plus Jakarta Sans + Outfit fonts, indigo primary, mobile-first with bottom dock, localStorage persistence, WhatsApp/tel/Maps deep links, Pitch Playbook modal, toasts, confetti, CSV export.

## Architecture
- Single file: `/app/frontend/public/ready2up.html` (all CSS in `<style>`, JS in `<script>`; 40 leads embedded as JS array).
- External deps: Google Fonts CDN, canvas-confetti CDN only.
- Served statically by the React dev server; `/app/frontend/src/App.js` only redirects `/` → `/ready2up.html`. No backend/API usage.
- Persistence: localStorage keys `r2u_lead_stages_v1` ({id:{stage,at}}) and `r2u_daily_calls_v1` ({date,count}, auto-resets each calendar day).

## User Personas
- Field sales rep (mobile, in Nashik) — needs one-tap WhatsApp/call/maps, quick scripts, call logging.
- Sales lead/manager (desktop) — needs pipeline overview, stage tracking, CSV export.

## Core Requirements (static)
- Sticky glass top nav, hero banner w/ confetti, 4-stat scoreboard, sprint tracker, search + area + stage + pill filters (composable), 40 lead cards with stage select, pitch angle, 4 action buttons, Pitch Playbook modal w/ copyable scripts + pricing, toasts, CSV export, mobile bottom dock.

## Implemented (June 2026)
- Everything in Core Requirements — fully built and E2E tested (iteration_1: 97% pass, zero console errors).
- Decisions made without user input: date-keyed daily counters; stats computed from data (Hot = 32 No-Site leads, Pipeline ₹15.4L vs spec's illustrative 30 / ₹15.2L); CSV has extra "Sales Stage" column; WhatsApp numbers normalized to 91XXXXXXXXXX; "🌐 No Website / Hotel Portal" chip added on cards; won cards get a 🏆 WON ribbon; modal has a "Send" WhatsApp shortcut for the selected lead.

## Backlog
- P1: Per-lead notes / follow-up date; sort options (deal value, rating, priority).
- P1: Import/sync stage data across devices (needs backend).
- P2: Shareable daily report (calls + won deals) as image/WhatsApp message.
- P2: Add more leads / edit leads in-app.

## Next Tasks
- Gather user feedback on design & any data corrections.
