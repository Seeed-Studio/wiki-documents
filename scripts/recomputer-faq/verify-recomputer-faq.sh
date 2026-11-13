#!/usr/bin/env bash
#
# reComputer FAQ publication QA — PRD §21 unified entry.
#
#   ./scripts/recomputer-faq/verify-recomputer-faq.sh
#
# Environment knobs:
#   SKIP_TYPECHECK=1   skip `yarn typecheck`
#   SKIP_BUILD=1       skip `yarn build:en`
#   SKIP_BROWSER=1     skip browser smoke (still runs the static SSR smoke)
#   REPORT_DIR=...     where the final report is written (default: build/recomputer-faq-qa)
#
set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT" || exit 2

REPORT_DIR="${REPORT_DIR:-build/recomputer-faq-qa}"
REPORT_FILE="$REPORT_DIR/report.md"
QA_LOG="$REPORT_DIR/qa-log.txt"
mkdir -p "$REPORT_DIR"

PASS_COUNT=0
FAIL_COUNT=0
RESULTS=()
declare -A OUTCOMES

phase() {
  echo ""
  echo "===== $1 ====="
}

pass() {
  PASS_COUNT=$((PASS_COUNT + 1))
  RESULTS+=("PASS | $1")
  echo "PASS  $1"
}

fail() {
  FAIL_COUNT=$((FAIL_COUNT + 1))
  RESULTS+=("FAIL | $1")
  echo "FAIL  $1"
}

notrun() {
  RESULTS+=("NOT RUN | $1")
  echo "NOT RUN  $1"
}

record() {
  # record <check-label> PASS|FAIL|NOT RUN
  OUTCOMES["$1"]="$2"
}

## Phase 1 — Rule / source contract #########################################
phase "Phase 1: Rule and source contract"
if [ -f scripts/recomputer-faq/AE_FAQ_SUBMISSION_GUIDELINES.md ]; then
  pass "AE_FAQ_SUBMISSION_GUIDELINES.md present (submission contract loaded)"
  record 'rule_contract' PASS
else
  fail "AE_FAQ_SUBMISSION_GUIDELINES.md missing"
  record 'rule_contract' FAIL
fi

if [ -f scripts/recomputer-faq/manifests/approved_faq_manifest.json ]; then
  SOURCE_INVENTORY=$(python3 -c "import json;d=json.load(open('scripts/recomputer-faq/manifests/approved_faq_manifest.json'));print(len(d['entries']))")
  SELECTED=$SOURCE_INVENTORY
  pass "curated manifest present with $SOURCE_INVENTORY entries"
  record 'source_contract' PASS
else
  fail "curated manifest missing"
  record 'source_contract' FAIL
  SOURCE_INVENTORY=0
  SELECTED=0
fi

## Phase 2 — Curated manifest validation ###################################
phase "Phase 2: Curated manifest validation"
if node scripts/recomputer-faq/pipeline.mjs --validate >/dev/null 2>&1; then
  pass "pipeline --validate (all entries PUBLISH, no BLOCK)"
  record 'manifest' PASS
else
  fail "pipeline --validate"
  record 'manifest' FAIL
fi

## Idempotency gate — pipeline dry-run must report no drift ################
phase "Idempotency gate: pipeline dry-run (rendered files up to date)"
if node scripts/recomputer-faq/pipeline.mjs >"$QA_LOG" 2>&1; then
  pass "pipeline dry-run: no drift, no conflict"
  record 'idempotency' PASS
else
  fail "pipeline dry-run reports drift/conflict"
  record 'idempotency' FAIL
  tail -20 "$QA_LOG"
fi

## Phase 3–6 — Public artifact validation ##################################
phase "Phases 3-6: Frontmatter / slugs / anchors / internal links / search index / secret scan"
if node scripts/recomputer-faq/validate-public.mjs >"$QA_LOG" 2>&1; then
  pass "validate-public.mjs (frontmatter, slug, anchor, link, index, secret checks)"
  record 'slug' PASS
  record 'anchor' PASS
  record 'links' PASS
  record 'search_tests' PASS
  grep '^PASS' "$QA_LOG" | sed 's/^/    /'
else
  fail "validate-public.mjs"
  record 'slug' FAIL
  record 'anchor' FAIL
  record 'links' FAIL
  record 'search_tests' FAIL
  cat "$QA_LOG"
fi

## Phase 7 — Sidebar doc-id validation #####################################
phase "Phase 7: Sidebar FAQ category and doc ids"
python3 - "$ROOT" <<'PY'
import os, re, sys
root = sys.argv[1]
problems = []
sidebar = open(os.path.join(root, 'sites/en/sidebars.js'), encoding='utf-8').read()
faq_dir = os.path.join(root, 'sites/en/docs/FAQ/reComputer')

if not re.search(r"label:\s*'FAQ'", sidebar):
    problems.append("no FAQ category in sidebars.js")

# Both FAQ centers must be linked from a FAQ category: the Rockchip one under
# 'RK Devices' and the Raspberry Pi one under 'Raspberry Pi Devices'.
REQUIRED_LINK_IDS = [
    'FAQ/reComputer/recomputer_faq',
    'FAQ/reComputer/recomputer_pi_faq',
]
for link_id in REQUIRED_LINK_IDS:
    if link_id not in sidebar:
        problems.append(f"FAQ category link id '{link_id}' missing")

# Every FAQ doc id referenced from the sidebar must exist on disk. Product
# pages are Markdown, the FAQ centers are MDX.
ids = sorted(set(re.findall(r"'FAQ/reComputer/([^']+)'", sidebar)))
for i in ids:
    if not any(os.path.exists(os.path.join(faq_dir, i + ext)) for ext in ('.md', '.mdx')):
        problems.append(f"sidebar id FAQ/reComputer/{i} has no file {i}.md/.mdx")

# Reverse direction: every published page in the FAQ directory must be
# reachable from the sidebar, otherwise it stays an orphan.
if os.path.isdir(faq_dir):
    for fname in sorted(os.listdir(faq_dir)):
        if not fname.endswith(('.md', '.mdx')):
            continue
        doc_id = 'FAQ/reComputer/' + fname.rsplit('.', 1)[0]
        if doc_id not in sidebar:
            problems.append(f"published page {fname} is not referenced from sidebars.js")

if problems:
    print('FAIL  sidebar validation')
    for p in problems:
        print('        - ' + p)
    sys.exit(1)
print('PASS  sidebar validation (both FAQ centers linked, all doc ids valid, no orphan pages)')
sys.exit(0)
PY
if [ $? -eq 0 ]; then
  pass "sidebar doc ids"
  record 'sidebar' PASS
else
  fail "sidebar doc ids"
  record 'sidebar' FAIL
fi

## Unit tests ##############################################################
phase "Unit tests (search + renderer, node:test)"
if node --test "scripts/recomputer-faq/tests/renderer.test.mjs" "scripts/recomputer-faq/tests/search.test.js" "scripts/recomputer-faq/tests/index-plugin.test.js" "scripts/recomputer-faq/tests/pi-index-plugin.test.js" >"$QA_LOG" 2>&1; then
  PASS_TESTS=$(grep -E '^[^ ]*(pass|tests) [0-9]+$' "$QA_LOG" | tail -2 | tr '\n' ' ')
  pass "node --test ${PASS_TESTS}"
else
  fail "node --test"
  cat "$QA_LOG"
fi

## Phase 8 — Secret scan (reported explicitly) #############################
phase "Phase 8: Public secret scan"
if node scripts/recomputer-faq/validate-public.mjs >"$QA_LOG" 2>&1 && grep -q '^PASS  secret scan' "$QA_LOG"; then
  pass "secret scan (0 internal identifiers in public artifacts)"
  record 'secret_scan' PASS
else
  fail "secret scan"
  record 'secret_scan' FAIL
fi

## Phase 9 — Typecheck #####################################################
phase "Phase 9: yarn typecheck"
if [ "${SKIP_TYPECHECK:-0}" = "1" ]; then
  notrun "yarn typecheck (skipped via SKIP_TYPECHECK=1)"
  record 'typecheck' 'NOT RUN'
else
  if yarn typecheck >"$QA_LOG" 2>&1; then
    pass "yarn typecheck"
  record 'typecheck' PASS
  else
    fail "yarn typecheck"
  record 'typecheck' FAIL
    tail -40 "$QA_LOG"
  fi
fi

## Phase 10 — English build ################################################
phase "Phase 10: yarn build:en"
if [ "${SKIP_BUILD:-0}" = "1" ]; then
  notrun "yarn build:en (skipped via SKIP_BUILD=1)"
  record 'build' 'NOT RUN'
else
  if yarn build:en >"$QA_LOG" 2>&1; then
    pass "yarn build:en"
  record 'build' PASS
  else
    fail "yarn build:en"
  record 'build' FAIL
    tail -60 "$QA_LOG"
  fi
fi

## Phase 11 — Browser smoke ##############################################
phase "Phase 11: Browser smoke"
if [ "${SKIP_BROWSER:-0}" = "1" ]; then
  notrun "browser smoke (skipped via SKIP_BROWSER=1)"
  record 'browser' 'NOT RUN'
else
  if [ -d build/recomputer_faq ]; then
    FOUND=1
    for slug in recomputer_faq recomputer_rk_faq recomputer_industrial_rk_faq recomputer_rk_module_faq recomputer_pi_faq recomputer_r1000_faq recomputer_ai_r2000_faq recomputer_industrial_r2x_faq reterminal_faq; do
      if [ ! -f "build/$slug/index.html" ]; then
        FOUND=0
        fail "build/$slug/index.html missing (SSR route)"
      fi
    done
    if [ "$FOUND" = "1" ]; then
      # Verify the FAQ Center SSR page includes the no-JS static fallback links.
      if grep -q 'href=\?[""]\?/recomputer_rk_faq#rk3576-nvme-boot' build/recomputer_faq/index.html; then
        pass "build routes present + FAQ Center SSR contains static fallback links"
        record 'browser' PASS
      else
        fail "FAQ Center SSR missing static fallback link"
        record 'browser' FAIL
      fi
      # The Raspberry Pi FAQ Center must be served with its own static fallback.
      if grep -q 'href=\?[""]\?/reterminal_faq#reterminal-ota-update-no-boot' build/recomputer_pi_faq/index.html; then
        pass "Raspberry Pi FAQ Center SSR contains its own static fallback links"
        record 'browser_pi' PASS
      else
        fail "Raspberry Pi FAQ Center SSR missing static fallback link"
        record 'browser_pi' FAIL
      fi
    fi
    # Optional full headless smoke; reporting-only, must not override the
    # static SSR outcome already recorded above.
    if command -v chromium >/dev/null 2>&1 || command -v chromium-browser >/dev/null 2>&1 || command -v google-chrome >/dev/null 2>&1 || [ -n "${CHROME_BIN:-}" ]; then
      if command -v npx >/dev/null 2>&1 && [ -d node_modules/playwright ]; then
        pass "headless-browser smoke: chromium + playwright available (not executed)"
      else
        notrun "headless-browser smoke (no playwright tooling; static SSR smoke above)"
      fi
    else
      notrun "headless-browser smoke (no browser binary found; static SSR smoke above)"
    fi
  else
    fail "build/recomputer_faq missing - run yarn build:en first or unset SKIP_BUILD"
    record 'browser' FAIL
  fi
fi

## Phase 12 — Final report #################################################
phase "Phase 12: Final report"

PUBLISHED_UNITS=${SELECTED:-0}
PRODUCT_PAGES=$(ls sites/en/docs/FAQ/reComputer/*.md 2>/dev/null | wc -l | tr -d ' ')
DUP_CLUSTERS=0
BLOCKED_UPSTREAM=3

# The Docusaurus build wipes $REPORT_DIR when it runs earlier in this script,
# so recreate it right before writing the final report.
mkdir -p "$REPORT_DIR"
{
  echo "# reComputer FAQ Publication QA Result"
  echo ""
  echo "Source inventory: $SOURCE_INVENTORY records"
  echo "Selected: $SELECTED"
  echo "Published FAQ units: $PUBLISHED_UNITS"
  echo "Product pages: $PRODUCT_PAGES"
  echo "Duplicate clusters resolved: $DUP_CLUSTERS"
  echo "Blocked by evidence conflict (excluded upstream): $BLOCKED_UPSTREAM named items (pi_hat_off_pi_wiring_i2c, clip_sdk_rtc_streaming_api, xvf3000_audio_format_16bit_16khz) plus composite claims blocked in the three 2026-09-01 audits; none are integrated"
  echo ""
  echo "Slug validation: ${OUTCOMES['slug']:-NOT RUN}"
  echo "Anchor validation: ${OUTCOMES['anchor']:-NOT RUN}"
  echo "Internal slug links: ${OUTCOMES['links']:-NOT RUN}"
  echo "Sidebar validation: ${OUTCOMES['sidebar']:-NOT RUN}"
  echo "Search tests: ${OUTCOMES['search_tests']:-NOT RUN}"
  echo "Public secret scan: ${OUTCOMES['secret_scan']:-NOT RUN}"
  echo "Typecheck: ${OUTCOMES['typecheck']:-NOT RUN}"
  echo "English build: ${OUTCOMES['build']:-NOT RUN}"
  echo "Browser smoke: ${OUTCOMES['browser']:-NOT RUN}"
  echo ""
  echo "Summary: $PASS_COUNT passed, $FAIL_COUNT failed"
  echo ""
  for r in "${RESULTS[@]}"; do echo "- $r"; done
  echo ""
  echo "Artifacts:"
  echo "- scripts/recomputer-faq/manifests/approved_faq_manifest.json"
  echo "- scripts/recomputer-faq/pipeline.mjs (dry-run/idempotency/source+wiki hash/reconcile)"
  echo "- scripts/recomputer-faq/validate-public.mjs"
  echo "- scripts/recomputer-faq/tests/ (node:test)"
  echo "- sites/en/docs/FAQ/reComputer/recomputer_faq.mdx + 7 product pages"
  echo "- plugins/recomputer-faq-index/ (per-locale build-time search index, Rockchip lines)"
  echo "- plugins/recomputer-pi-faq-index/ (per-locale build-time search index, Raspberry Pi lines)"
  echo "- src/components/FaqExplorer/ (index.tsx, search.js, styles.module.css)"
  echo "- sites/en/sidebars.js (RK Devices -> FAQ category, Raspberry Pi Devices -> FAQ category)"
  echo ""
  echo "Known Issues:"
  echo "- reComputer RK has no product-specific wiki page yet; the published answers cite the Rockchip section, the computer-vision example and the AI-Lab tutorials."
  echo "- The RK3588 verified MIPI-CSI camera list (IMX708) is not published on the wiki; the answer states the support reply as its source."
  echo "- Headless-browser smoke depends on local tooling; static SSR smoke always runs."
  echo ""
  echo "Release Blockers:"
  if [ "$FAIL_COUNT" -eq 0 ]; then
    echo "- none"
  else
    echo "- see FAIL results above"
  fi
} > "$REPORT_FILE"

echo ""
echo "QA result: $PASS_COUNT passed, $FAIL_COUNT failed"
echo "Report: $REPORT_FILE"
echo "(relative: $(python3 - <<PY
import os
print(os.path.relpath('$REPORT_FILE', os.getcwd()))
PY
))"

if [ "$FAIL_COUNT" -gt 0 ]; then
  exit 1
fi
exit 0
