# Ready2UP Sales Command Center — PRD

## Original Problem Statement
Build a world-class, production-ready Sales Command Center / Lead Intelligence Dashboard as a single-file web app (HTML + CSS + JS, no frameworks) for Ready2UP (Nashik web design, SEO & AI automation agency). Used by sales reps to prospect, pitch and close website deals with Nashik cafes, restaurants, bars and breweries. Professional Notion/Linear-grade SaaS look (NOT childish), custom inline SVG icons (no emojis anywhere — user choice), strictly mobile-responsive, localStorage persistence, WhatsApp/tel/Maps deep links, Pitch Playbook modal, toasts, confetti, CSV export.

## Architecture
- Single file: `/app/frontend/public/ready2up.html` (CSS in `<style>`, HTML body, `LEADS` array of 61 objects, then JS).
- External deps: Google Fonts (Plus Jakarta Sans / Outfit / JetBrains Mono), canvas-confetti CDN only.
- Served statically by the React dev server; `/app/frontend/src/App.js` only redirects `/` → `/ready2up.html`. No backend/API.
- localStorage keys: `r2u_lead_stages_v1` ({id:{stage,at}}), `r2u_daily_calls_v1` ({date,count}, resets daily), `r2u_lead_notes_v1` ({id:{note,due,at}}), `r2u_sort_v1` (sort key).
- Design tokens follow `/app/design_guidelines.json` (slate-900 header, primary #1E3A8A, electric #2563EB, WhatsApp #15803D).
- Backup of the pre-redesign file: `/app/memory/ready2up_backup_v1.html`.

## User Personas
- Field sales rep (mobile, in Nashik) — one-tap WhatsApp/call/maps, scripts, call logging, follow-up notes.
- Sales lead/manager (desktop) — pipeline overview, stage tracking, daily WhatsApp report, CSV export.

## Core Requirements (static)
Sticky dark header (Playbook / Daily Report / Export CSV), hero banner + Team Win confetti, 4-stat scoreboard, sprint tracker (15 calls), search + area + stage + sort + quick-filter pills (composable), lead cards (deal value, tags, stage select, specs, pitch angle, follow-up note + date, WhatsApp/Call/Playbook/Maps), Pitch Playbook modal (scripts + pricing), Daily Report modal (WhatsApp share), toasts, mobile bottom dock.

## Implemented
- June 2026 (v1): original 40-lead dashboard, E2E tested (iteration_1).
- June 2026 (v2 — this session): full professional redesign with inline SVG icon system (all emojis removed incl. scripts); 21 new verified Nashik leads (ids 41–61: Dessert Villa, Pilgrim Coffee, Brewing Tales, Cafe Suburb, Coffee Club NX, Celestia Lounge, Lacasa Rooftop Cafe, InterMezzo, Sadhana Misal, Divtya Budhlya Wada, Topchi Brewing Outpost, Cerana Taproom, Curry Leaves, Woodlands, Cafe Peter, The Chocolate Room, York Winery, Soma Vine Village, Panchavati Gaurav, Coffee Culture, Spice It-ibis); per-lead quick note + follow-up date with Overdue/Due today/Upcoming chips + "Follow-ups Due" pill; Sort menu (Recommended, Deal Value, Rating, Priority, Follow-up soonest, Name) persisted; Daily Report modal → wa.me share + copy; CSV now includes Note & Next Follow-up; `wa-send-btn` only shown when lead has a phone; `[hidden]` CSS fix. E2E tested (iteration_2: 100% pass, desktop + 390px mobile, zero console errors).

## Backlog
- P1: Cloud sync of stages/notes/calls across devices (needs backend + auth).
- P2: Add/edit leads in-app; import CSV.
- P2: Objection-handler section in Playbook; per-rep name in report.
- P2: Daily report as shareable image.

## Next Tasks
- Collect user feedback on redesign and lead data accuracy (phone numbers are mostly unlisted — reps use Maps).
