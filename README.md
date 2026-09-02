# Hyosung ITX Slogan Brief

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/ContextualWisdomLab/hyosung-itx-slogan-brief)

**효성ITX 신규 슬로건 제안을 위해 기업·사업·공시 근거를 한곳에 정리하고, 그 근거에서 검토 가능한 후보와 최종 권고안을 만드는 리서치 브리프입니다.**

이 저장소는 제품 런타임이 아니라 **유한한 조사·제안 산출물**을 관리합니다. 독자는 최종 Word 문서만 보는 대신, 슬로건이 어떤 기업 사실과 공개 자료에서 도출됐는지 원고·근거 스냅샷·생성 스크립트까지 함께 검토할 수 있습니다.

## What you can review

| Surface | Purpose |
| --- | --- |
| [`deliverables/hyosung-itx-slogan-brief.docx`](deliverables/hyosung-itx-slogan-brief.docx) | 최종 슬로건 리서치 브리프 |
| [`deliverables/hyosung-itx-slogan-proposal-materials-request.docx`](deliverables/hyosung-itx-slogan-proposal-materials-request.docx) | 제안 완성도를 높이기 위한 추가 자료 요청서 |
| [`docs/hyosung_itx_slogan_brief.md`](docs/hyosung_itx_slogan_brief.md) | 최종 문서의 검토 가능한 Markdown 원고 |
| [`docs/hyosung_itx_slogan_proposal_materials_request.md`](docs/hyosung_itx_slogan_proposal_materials_request.md) | 산업·마케팅 기준을 반영한 추가 자료 요청 원고 |
| [`data/source_snapshot.json`](data/source_snapshot.json) | 기업 개요·매출 구성·특수관계·공시 신호와 출처를 고정한 근거 스냅샷 |
| [`DESIGN.md`](DESIGN.md) | 문서 디자인 토큰과 생성물 표현 기준 |

## Evidence boundary

`data/source_snapshot.json`의 조사 기준일은 **2026-06-25**입니다. 효성ITX 공식 사이트, DART 공시, KRX/KIND 등 공개 출처를 참조해 당시 확인한 기업·사업·공시 사실을 저장합니다. 이 스냅샷은 시간이 지나도 자동으로 최신 상태가 되지 않으며, 새로운 제안이나 외부 배포 전에 원 출처의 최신 상태를 다시 확인해야 합니다.

슬로건 후보와 최종 권고는 이 저장소의 분석·창작 산출물입니다. 회사의 공식 슬로건 채택, 상표 등록 가능성, 법률 검토, 경영진 승인 또는 실제 캠페인 사용을 증명하지 않습니다. 효성ITX 및 관련 회사명·상표·공시 자료의 권리는 각 권리자와 원 출처에 남습니다.

## Rebuild the deliverables

문서 생성에는 Node.js와 `docx` 패키지가 필요합니다. 저장소 루트에서 다음 명령으로 현재 Markdown 원고를 Word 산출물로 다시 생성할 수 있습니다.

```bash
npm install --no-save --package-lock=false docx
node scripts/build_docx.js
node scripts/build_materials_request_docx.js
```

문서 디자인 규칙은 Google Labs `design.md` CLI로 검사할 수 있습니다.

```bash
npx -p @google/design.md designmd lint DESIGN.md
```

생성 대상은 다음 두 파일입니다.

- `deliverables/hyosung-itx-slogan-brief.docx`
- `deliverables/hyosung-itx-slogan-proposal-materials-request.docx`

## Repository boundary

이 저장소가 소유하는 것은 리서치 구조, 근거 스냅샷, Markdown 원고, 문서 생성 스크립트와 제안 산출물의 버전 관리입니다. 효성ITX의 운영 시스템, 공식 홈페이지·공시 시스템, 브랜드 승인 절차, 캠페인 집행 또는 상표 권한을 소유하지 않습니다.

PR 검토·보안 스캔·병합 정책은 ContextualWisdomLab의 중앙 GitHub governance를 따릅니다. 이 저장소의 파일이나 통과한 workflow 자체가 외부 자료의 정확성, 최신성, 법률 적합성 또는 슬로건 채택을 보증하지 않습니다.

## Documentation

- [Ask DeepWiki](https://deepwiki.com/ContextualWisdomLab/hyosung-itx-slogan-brief) — 저장소 구조와 문서 탐색
- [`DESIGN.md`](DESIGN.md) — 문서 디자인 기준
- [`AGENTS.md`](AGENTS.md) — 저장소 작업·검증 규칙
- [`docs/`](docs/) — 검토 가능한 원고와 조사 문서
- [`data/source_snapshot.json`](data/source_snapshot.json) — 근거와 출처 스냅샷

## Contribution and support

문서·수치·출처를 변경할 때는 생성물만 수정하지 말고 근거 스냅샷과 검토 가능한 Markdown 원고를 함께 갱신해야 합니다. 사실·출처·생성 결과가 서로 어긋나는 변경은 merge하지 않습니다. 저장소 관련 변경은 GitHub pull request와 issue를 통해 추적합니다.

## Rights and reuse

이 저장소에는 현재 root `LICENSE`가 없으며, **repository-wide 오픈소스 또는 콘텐츠 재사용 허가를 주장하지 않습니다**. 저장소 history는 ContextualWisdomLab maintainer 경로에서 작성된 것으로 확인되지만, 최종 slogan deliverable의 상업적 재사용·양도 범위와 효성ITX 관련 상표·외부 공개자료의 권리는 별도입니다.

따라서 소스·문서·Word 산출물을 다른 제품에 편입하거나 재배포하기 전에 해당 자료의 권리 범위가 명시적으로 확인되어야 합니다. 공개 출처를 인용했다는 사실은 그 출처의 콘텐츠를 재라이선스하는 권한을 만들지 않습니다. 이 권리 범위를 확인하기 전에는 MIT/Apache-2.0 같은 repository-wide grant를 추정하지 않습니다.
