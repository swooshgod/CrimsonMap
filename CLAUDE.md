# CLAUDE.md

## Project
<!-- TODO: Replace with project name and description -->
**Project:** [PROJECT_NAME]
**Stack:** [e.g. React Native + Supabase + Stripe]
**Goal:** [What this app does]

## gstack
Use `/browse` from gstack for all web browsing. Never use `mcp__claude-in-chrome__*` tools.

Available skills: `/office-hours`, `/plan-ceo-review`, `/plan-eng-review`, `/plan-design-review`,
`/design-consultation`, `/review`, `/ship`, `/browse`, `/qa`, `/qa-only`, `/design-review`,
`/setup-browser-cookies`, `/retro`, `/debug`, `/document-release`

If gstack skills aren't working, run: `cd .claude/skills/gstack && ./setup`

## Session Hook
A session-start hook runs automatically on every new session. It:
- Prints current branch + last 5 commits
- Shows git status
- Installs npm deps
- Checks required env vars

## New Project Setup
This repo is Franky's standard project scaffold. To replicate for a new project:
1. Clone this template repo
2. Update `CLAUDE.md` with project name/stack/goal
3. Update env var list in `.claude/hooks/session-start.sh`
4. Initialize your project code
5. Push to GitHub

## Standards
- Always run `/review` before `/ship`
- Always run `/qa` after major features
- Target QA health score 80+ before launch
- Fix CORS, auth issues, and accessibility before shipping
