# Hyosung ITX Slogan Brief

효성ITX 신규 슬로건 제작을 위한 리서치 브리프입니다. 기업 분석, 특수 관계 분석, 사업 분석, 기업 공시 분석을 한 문서로 묶고, 그 근거에서 도출한 슬로건 후보와 최종 권고안을 제시합니다.

## Deliverables

- `deliverables/hyosung-itx-slogan-brief.docx`: 최종 Word 문서
- `docs/hyosung_itx_slogan_brief.md`: 검토 가능한 원고
- `data/source_snapshot.json`: 주요 수치와 출처 스냅샷
- `DESIGN.md`: Google Labs `design.md` 형식의 문서 디자인 토큰과 적용 기준

## Robot Review

이 저장소에는 `ContextualWisdomLab/.github`에서 가져온 OpenCode Review 워크플로가 포함되어 있습니다.

- `.github/workflows/opencode-review.yml`
- `.github/workflows/pr-review-merge-scheduler.yml`
- `scripts/ci/*`
- `requirements-opencode-review-ci.txt`
- `opencode.jsonc`
- `ci-review-prompt.md`

OpenCode Review는 PR 번호와 base/head SHA를 입력으로 받아 수동 실행할 수 있습니다.

## Rebuild

```bash
npm install --no-save docx
node scripts/build_docx.js
```

`DESIGN.md` 형식은 Google Labs `design.md` CLI로 검증할 수 있습니다.

```bash
npx -p @google/design.md designmd lint DESIGN.md
```

생성 결과는 `deliverables/hyosung-itx-slogan-brief.docx`입니다.
