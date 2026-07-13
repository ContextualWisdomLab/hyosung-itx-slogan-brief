# AGENTS.md

Cross-agent conventions for this repository, readable by any coding agent
(Claude, Codex, Cursor, opencode, ...). This repo produces the Hyosung ITX
slogan research brief: Markdown manuscripts and JSON sources under `docs/` and
`data/`, rendered to `.docx` by Node scripts in `scripts/` (they pull the
`docx` npm package ad-hoc via `npm install --no-save`; no lockfile is
committed).

<!-- BEGIN cwl-agent-guidance -->
## Agent guidance (CWL governance)

### Security & review gate
- Every PR runs a central, required **Security Scan** gate managed by the org
  `.github` repo. It combines `osv-scan` + `dependency-review` (diff-scoped) and
  `trivy-fs` (repo-wide, CRITICAL/HIGH, fixable only). It runs on every PR base,
  **including stacked PRs**.
- A failing `trivy-fs` is a **REAL finding, not a flake.** Read the job log (it
  prints each finding's rule id / severity / file) or the run's SARIF results,
  then **remediate** — do not weaken or disable the gate.
  - This repo's dependency surface is Node/npm (the `docx` package used by
    `scripts/build_docx.js` and `scripts/build_materials_request_docx.js`). Fix
    a dependency finding by bumping to a patched version; if you introduce a
    `package.json`/lockfile, keep it current so `osv-scan`/`dependency-review`
    can see the change.
  - There is currently no Dockerfile or k8s manifest here; if you add one, fix
    the misconfig `trivy-fs` reports rather than suppressing it.
  - Only for a genuine false positive, add a narrow, documented
    `.trivyignore` (or `.trivyignore.yaml`) entry.
- Reproduce locally against the **merge ref**, not just the PR head, and refresh
  the DB first (a stale local DB misses findings):
  ```bash
  trivy --download-db-only
  trivy fs --severity CRITICAL,HIGH --ignore-unfixed .
  ```
- The org `code_scanning` ruleset is intentionally **CodeQL-only** (multiple
  code-scanning tools can't converge on one PR ref). Gating is by the Security
  Scan **job result**, not the code_scanning rule — do not add tools to that rule.

### Code exploration
- There is no `.codegraph/` index in this repo, so use normal search
  (grep/find/ripgrep). If a `.codegraph/` index is added at the repo root later,
  prefer CodeGraph (`codegraph explore "<query>"`, or the code-review-graph MCP
  tools) BEFORE grep/find — it surfaces callers/callees/impact that text search
  misses.
<!-- END cwl-agent-guidance -->
