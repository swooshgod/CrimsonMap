#!/bin/bash
# ── Podium/Scout Project Session Start Hook ──────────────────────────────────
# Auto-runs on every new Claude Code session.
# Adapt ENV_VARS below for each project.

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 Session Start — $(basename $CLAUDE_PROJECT_DIR)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Git context
echo ""
echo "📌 Branch: $(git branch --show-current 2>/dev/null || echo 'unknown')"
echo ""
echo "📝 Last 5 commits:"
git log --oneline -5 2>/dev/null || echo "  (no commits yet)"
echo ""
echo "📂 Git status:"
git status --short 2>/dev/null || echo "  (clean)"
echo ""

# Install deps if package.json exists
if [ -f "package.json" ]; then
  echo "📦 Installing dependencies..."
  npm install --prefer-offline --silent 2>/dev/null && echo "  ✅ Done" || echo "  ⚠️  npm install failed"
  echo ""
fi

# Env var check — add project-specific vars below
echo "🔑 Env var check:"
ENV_VARS=(
  "SUPABASE_URL"
  "SUPABASE_ANON_KEY"
  "EXPO_PUBLIC_SUPABASE_URL"
  "EXPO_PUBLIC_SUPABASE_ANON_KEY"
)

# Load .env if it exists
if [ -f ".env" ]; then
  export $(grep -v '^#' .env | xargs) 2>/dev/null
  echo "  ✅ .env loaded"
fi

MISSING=0
for VAR in "${ENV_VARS[@]}"; do
  if [ -z "${!VAR}" ]; then
    echo "  ❌ $VAR — missing"
    MISSING=$((MISSING + 1))
  else
    echo "  ✅ $VAR"
  fi
done

if [ $MISSING -gt 0 ]; then
  echo ""
  echo "  ⚠️  $MISSING env var(s) missing. Check .env or Supabase dashboard."
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Session ready. Happy building."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
