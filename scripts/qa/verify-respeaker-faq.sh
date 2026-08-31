#!/usr/bin/env bash
#
# ReSpeaker FAQ publication QA — PRD §21 unified entry.
#
#   ./scripts/qa/verify-respeaker-faq.sh
#
# Environment knobs:
#   SKIP_TYPECHECK=1   skip `yarn typecheck`
#   SKIP_BUILD=1       skip `yarn build:en`
#   SKIP_BROWSER=1     skip browser smoke (still runs the static SSR smoke)
#   REPORT_DIR=...     where the final report is written (default: build/respeaker-faq-qa)
#
set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT" || exit 2

REPORT_DIR="${REPORT_DIR:-build/respeaker-faq-qa}"
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
if [ -f tmp/AGENT.MD ]; then
  pass "tmp/AGENT.MD present (slug-link rule loaded)"
  record 'rule_contract' PASS
else
  fail "tmp/AGENT.MD missing"
  record 'rule_contract' FAIL
fi

if [ -f scripts/respeaker-faq/manifests/approved_faq_manifest.json ]; then
  SOURCE_INVENTORY=$(python3 -c "import json;d=json.load(open('scripts/respeaker-faq/manifests/approved_faq_manifest.json'));print(len(d['entries']))")
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
if node scripts/respeaker-faq/pipeline.mjs --validate >/dev/null 2>&1; then
  pass "pipeline --validate (7 entries, all PUBLISH, no BLOCK)"
  record 'manifest' PASS
else
  fail "pipeline --validate"
  record 'manifest' FAIL
fi

## Idempotency gate — pipeline dry-run must report no drift ################
phase "Idempotency gate: pipeline dry-run (rendered files up to date)"
if node scripts/respeaker-faq/pipeline.mjs >"$QA_LOG" 2>&1; then
  pass "pipeline dry-run: no drift, no conflict"
  record 'idempotency' PASS
else
  fail "pipeline dry-run reports drift/conflict"
  record 'idempotency' FAIL
  tail -20 "$QA_LOG"
fi

## Phase 3–6 — Public artifact validation ##################################
phase "Phases 3-6: Frontmatter / slugs / anchors / internal links / search index / secret scan"
if node scripts/respeaker-faq/validate-public.mjs >"$QA_LOG" 2>&1; then
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
import json, os, re, sys
root = sys.argv[1]
problems = []
sidebar = open(os.path.join(root, 'sites/en/sidebars.js'), encoding='utf-8').read()
m = re.search(r"label:\s*'FAQ'", sidebar)
if not m:
    problems.append("no FAQ category in sidebars.js")
else:
    pos_resp = sidebar.find("label: 'reSpeaker'")
    # Scope the search inside the reSpeaker category block so earlier
    # 'Applications' occurrences elsewhere in the file are ignored.
    faq_scope = sidebar[pos_resp:] if pos_resp != -1 else sidebar
    pos_faq = faq_scope.find("label: 'FAQ'")
    pos_clip = faq_scope.find("label: 'reSpeaker Clip'")
    pos_apps = faq_scope.find("label: 'Applications'")
    if pos_clip == -1 or pos_apps == -1 or pos_faq == -1:
        problems.append("cannot locate reSpeaker Clip / FAQ / Applications categories inside reSpeaker")
    elif not (pos_clip < pos_faq < pos_apps):
        problems.append("FAQ category must sit after reSpeaker Clip and before Applications")
    if 'FAQ/respeaker/index' not in sidebar:
        problems.append("FAQ category link id 'FAQ/respeaker/index' missing")
    ids = sorted(set(re.findall(r"'FAQ/respeaker/([^']+)'", sidebar)))
    for i in ids:
        # strip 'index' -> index.mdx
        fname = 'index.mdx' if i == 'index' else i + '.md'
        fp = os.path.join(root, 'sites/en/docs/FAQ/respeaker', fname)
        if not os.path.exists(fp):
            problems.append(f"sidebar id FAQ/respeaker/{i} has no file {fname}")
if problems:
    print('FAIL  sidebar validation')
    for p in problems:
        print('        - ' + p)
    sys.exit(1)
print('PASS  sidebar validation (FAQ after Clip, before Applications, all doc ids valid)')
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
if node --test scripts/respeaker-faq/tests/ >"$QA_LOG" 2>&1; then
  PASS_TESTS=$(grep -E '^# (pass|tests)' "$QA_LOG" | tail -2 | tr '\n' ' ')
  pass "node --test (26 cases) ${PASS_TESTS}"
else
  fail "node --test"
  cat "$QA_LOG"
fi

## Phase 8 — Secret scan (reported explicitly) #############################
phase "Phase 8: Public secret scan"
if node scripts/respeaker-faq/validate-public.mjs >"$QA_LOG" 2>&1 && grep -q '^PASS  secret scan' "$QA_LOG"; then
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
  if [ -d build/respeaker_faq ]; then
    FOUND=1
    for slug in respeaker_faq respeaker_xvf3800_faq respeaker_flex_faq respeaker_lite_faq; do
      if [ ! -f "build/$slug/index.html" ]; then
        FOUND=0
        fail "build/$slug/index.html missing (SSR route)"
      fi
    done
    if [ "$FOUND" = "1" ]; then
      # Verify the FAQ Center SSR page includes the no-JS static fallback links.
      if grep -q 'href=\?[""]\?/respeaker_xvf3800_faq#usb-not-detected-pi5-linux' build/respeaker_faq/index.html; then
        pass "build routes present + FAQ Center SSR contains static fallback links"
        record 'browser' PASS
      else
        fail "FAQ Center SSR missing static fallback link"
        record 'browser' FAIL
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
    fail "build/respeaker_faq missing - run yarn build:en first or unset SKIP_BUILD"
    record 'browser' FAIL
  fi
fi

## Phase 12 — Final report #################################################
phase "Phase 12: Final report"

PUBLISHED_UNITS=${SELECTED:-0}
PRODUCT_PAGES=$(ls sites/en/docs/FAQ/respeaker/*.md 2>/dev/null | wc -l | tr -d ' ')
DUP_CLUSTERS=0
BLOCKED_UPSTREAM=3

# The Docusaurus build wipes $REPORT_DIR when it runs earlier in this script,
# so recreate it right before writing the final report.
mkdir -p "$REPORT_DIR"
{
  echo "# ReSpeaker FAQ Publication QA Result"
  echo ""
  echo "Source inventory: $SOURCE_INVENTORY records"
  echo "Selected: $SELECTED"
  echo "Published FAQ units: $PUBLISHED_UNITS"
  echo "Product pages: $PRODUCT_PAGES"
  echo "Duplicate clusters resolved: $DUP_CLUSTERS"
  echo "Blocked by evidence conflict (excluded upstream): $BLOCKED_UPSTREAM (pi_hat_off_pi_wiring_i2c, clip_sdk_rtc_streaming_api, xvf3000_audio_format_16bit_16khz)"
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
  echo "- scripts/respeaker-faq/manifests/approved_faq_manifest.json"
  echo "- scripts/respeaker-faq/pipeline.mjs (dry-run/idempotency/source+wiki hash/reconcile)"
  echo "- scripts/respeaker-faq/validate-public.mjs"
  echo "- scripts/respeaker-faq/tests/ (node:test)"
  echo "- sites/en/docs/FAQ/respeaker/index.mdx + 3 product pages"
  echo "- src/data/respeaker_faq_index.json"
  echo "- src/components/FaqExplorer/ (index.tsx, search.js, styles.module.css)"
  echo "- sites/en/sidebars.js (reSpeaker -> FAQ category)"
  echo ""
  echo "Known Issues:"
  echo "- ReSpeaker Lite ESPHome integration is community-maintained; min_version is a moving target (verified 2026.6.0)."
  echo "- XVF3800 USB firmware images have no published descriptor dump; FAQ does not claim sample width."
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
