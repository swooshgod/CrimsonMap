# CLAUDE.md — CrimsonMap

## Project
**Project:** CrimsonMap
**Stack:** React + Leaflet.js (interactive map) + Supabase (location DB) + Vercel (hosting)
**Goal:** Interactive map and completion tracker for Crimson Desert. First-mover advantage — game launched March 19, 2026.

## What It Does
- Zoomable interactive world map with pinned locations for every collectible, boss, secret, and territory
- Players click pins to see details, mark as found/collected
- Progress tracker shows % completion per category
- Community submission form for new locations

## Monetization
- Free tier: full map access
- Pro tier ($3.99/mo): saved progress, custom markers, no ads
- Google AdSense for free tier users

## Data Model
- Locations table: id, type (boss/collectible/secret/territory), name, description, x, y, image_url, submitted_by, verified
- User progress: user_id, location_id, found_at

## Tech Stack
- Frontend: React + Leaflet.js (react-leaflet)
- Base map: Custom game world image as tile layer
- DB: Supabase (locations + user progress)
- Auth: Supabase Auth (optional, for progress saving)
- Hosting: Vercel
- Ads: Google AdSense

## Content Strategy
- Seed with known locations from Pearl Abyss press kit + Reddit/YouTube
- Community submission form → moderator review → publish
- Post in r/CrimsonDesert to crowdsource locations

## gstack
Use `/browse` from gstack for all web browsing.
Available skills: `/office-hours`, `/plan-eng-review`, `/review`, `/ship`, `/qa`, `/browse`

## Priority
Ship FAST. Game launched today. Every day matters for SEO and first-mover advantage.
