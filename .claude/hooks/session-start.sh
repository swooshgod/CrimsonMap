#!/bin/bash
set -e
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🗺️  Session Start — CrimsonMap"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "⚡ Game launched March 19, 2026 — ship fast!"
echo ""
echo "📌 Branch: $(git branch --show-current 2>/dev/null || echo 'unknown')"
echo "📝 Last 5 commits:"
git log --oneline -5 2>/dev/null || echo "  (no commits yet)"
echo ""
echo "📂 Git status:"
git status --short 2>/dev/null || echo "  (clean)"
echo ""
if [ -f "package.json" ]; then
  npm install --prefer-offline --silent 2>/dev/null && echo "📦 Dependencies installed"
fi
echo "🔑 Env check:"
ENV_VARS=("VITE_SUPABASE_URL" "VITE_SUPABASE_ANON_KEY")
if [ -f ".env" ]; then export $(grep -v '^#' .env | xargs) 2>/dev/null && echo "  ✅ .env loaded"; fi
for VAR in "${ENV_VARS[@]}"; do
  [ -z "${!VAR}" ] && echo "  ❌ $VAR" || echo "  ✅ $VAR"
done
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Ready. Ship fast — first mover wins."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
