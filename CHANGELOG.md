# Changelog

## Unreleased

### Added

- A minimal private npm manifest, immutable dependency lock, and build contract
  test for both Word deliverables.
- Reproducible document/ZIP timestamps and a byte-for-byte output drift gate.
- Architecture and agent handoff documentation.

### Changed

- Pull-request validation now checks the exact writer head and installs with
  `npm ci` before rebuilding and comparing the deliverables.

### Known constraints

- Issue #9 rights diligence remains open; no repository-wide reuse grant is
  implied.
