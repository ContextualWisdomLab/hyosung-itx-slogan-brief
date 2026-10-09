# Architecture

## Responsibility

This repository transforms a dated, reviewable research snapshot into two Word
deliverables. It has no database, server, authentication boundary, or shared
Core dependency.

## Build flow

1. `data/source_snapshot.json` and the reviewable Markdown under `docs/` are
   authoritative inputs.
2. The two scripts under `scripts/` translate those inputs through the locked
   `docx` package.
3. The generated files under `deliverables/` are distribution artifacts.
4. `.github/workflows/validation.yml` checks the pull request's exact head,
   installs `package-lock.json`, runs the contract test, and rebuilds both
   artifacts. A process-local `SOURCE_DATE_EPOCH` clock normalizes document and
   ZIP timestamps before CI checks the committed artifacts byte for byte.

Rights diligence remains outside the build aggregate and is tracked in issue
#9. Build success is not evidence of trademark clearance, adoption, or a reuse
grant.
