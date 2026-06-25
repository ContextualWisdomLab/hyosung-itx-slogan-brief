# 효성ITX 신규 슬로건 제안 작업 대화 요약

작성일: 2026-06-25
용도: 교육 자료, 산출물 추적, 후속 작업 인수인계

## 1. 작업 배경

사용자는 효성ITX를 사람들에게 알리기 위한 신규 슬로건 제작 과제를 요청했다. 초기 요구사항은 효성ITX에 대한 기업 분석, 특수 관계 분석, 사업 분석, 기업 공시 분석을 수행하고, 결과를 `docx` 또는 `pptx` 파일로 조직화하는 것이었다.

추가 조건으로 Google Labs의 `design.md` 형식과 `im-not-ai` 계열 Korean humanizing skill을 사용할 수 있다고 지정했다. 산출물은 GitHub Organization `ContextualWisdomLab`에 Repository를 만들고 Pull Request로 올린 뒤, 로봇 리뷰어의 피드백을 받는 흐름이었다. 이후 사용자는 `design.md`가 `https://github.com/google-labs-code/design.md`를 의미한다고 명확히 했다.

## 2. GitHub 저장소 진행 이력

저장소는 `ContextualWisdomLab/hyosung-itx-slogan-brief`로 생성되었다.

- 초기 PR: `#1`
- 초기 PR 상태: merge 완료
- 병합 커밋: `a7567946d59cf172bfea5a1e53734c742fc6883e`
- 주요 초기 산출물:
  - `docs/hyosung_itx_slogan_brief.md`
  - `deliverables/hyosung-itx-slogan-brief.docx`
  - `DESIGN.md`
  - `data/source_snapshot.json`
  - OpenCode Review 관련 workflow와 CI 스크립트

이후 슬로건 제안서 작성 전 필요한 추가 자료를 정리하는 작업이 이어졌다. 산업 표준과 마케팅 표준을 기준으로 내부 자료 요청서를 만들고, 별도 PR `#2`를 생성했다.

- 추가 자료 요청 PR: `#2`
- 브랜치: `docs/slogan-proposal-materials-request`
- 상태 확인 시점: validation check 성공
- 주요 내용:
  - `docs/hyosung_itx_slogan_proposal_materials_request.md`
  - `deliverables/hyosung-itx-slogan-proposal-materials-request.docx`
  - `scripts/build_materials_request_docx.js`
  - validation workflow의 DOCX 재생성 대상 확장

## 3. 슬로건 리서치 핵심 결론

초기 리서치에서는 효성ITX의 현재 사업 구조와 미래 확장 방향을 함께 담는 슬로건 방향이 필요하다고 판단했다.

핵심 판단은 다음과 같다.

- 효성ITX는 컨택센터 중심의 현재 사업 기반이 크다.
- 동시에 AICC, AI, IT Service, ITO, IDC, Cloud, Smart Work 영역으로 메시지를 확장해야 한다.
- 슬로건이 컨택센터만 말하면 좁고, AI만 말하면 현재 매출 구조와 떨어진다.
- 따라서 `고객 접점`은 현재 사업의 실체를, `지능`은 AI와 데이터 기반 확장성을 설명하는 축으로 사용할 수 있다.

초기 권고 슬로건은 다음이었다.

> 고객 접점을 지능으로 바꾸다

후속 PDF 제안서에서는 아래 문구가 최종 추천안으로 정리되었다.

- Corporate Slogan: `Connect Intelligence. Create Tomorrow.`
- Korean Version: `AI로 연결하는 더 나은 경험`
- Brand Position: `AI Digital Experience Company`

## 4. 추가 자료 요청 작업

슬로건 제안서 작성 전, 공개자료만으로는 최종 광고·브랜드 claim을 확정하기 어렵다고 판단했다. 이에 따라 산업 표준과 마케팅 표준을 기준으로 내부 추가 자료 요청 목록을 정리했다.

적용한 주요 기준은 다음과 같다.

- ISO 18295-1/2: 컨택센터 서비스 품질과 운영 체계
- ISO/IEC 20000-1: IT Service Management
- ISO/IEC 27001, ISMS-P: 정보보호와 고객 데이터 관리
- ISO/IEC 42001, NIST AI RMF: AI 거버넌스
- ISO 20671-1, ISO 10668: 브랜드 평가와 브랜드 가치
- ICC Advertising and Marketing Communications Code: 광고 문구의 합법성, 정직성, 진실성
- 표시광고법: 사실 관련 claim의 실증 가능성
- ISO 20252: 메시지 테스트와 조사 품질

High 우선순위 자료는 다음으로 정리했다.

- 브랜드 전략, 비전·미션, 중장기 사업 우선순위
- 기존 CI/BI 가이드, 기존 슬로건·캠페인 문구, 금칙어
- 타깃 고객군과 구매위원회 페르소나
- 산업군별 매출·수주 비중과 전략 고객군
- 컨택센터 운영 규모와 품질 지표
- VOC, CSAT/NPS, 주요 고객 요구·불만 요약
- AICC, RingCloud, xtrmSolution, ITO, IDC 도입 사례
- 고객 성공 사례와 정량 성과
- 보안·품질 인증 및 운영 표준
- 상표·법무 검토 제약

## 5. 첨부물 카탈로그

이번 교육 자료에는 대화에서 직접 언급되거나 생성된 모든 첨부물을 포함했다. 원본 파일명은 한글·공백·유니코드 조합이 포함되어 있어, 저장소에는 교육용 ASCII 파일명으로 보관했다.

| 구분 | 원래 파일 | 저장소 경로 | 역할 | SHA-256 |
|---|---|---|---|---|
| 원본 템플릿 참조 PDF | `Factory_report.pdf` | `training/attachments/factory-report-template-source.pdf` | 새 보고서 포맷의 레이아웃 기준 | `ecf35423ca64afd73e5e980ae7f04d252fc164b852cb083008a8fc69c2907bb1` |
| 원본 슬로건 제안서 PDF | `효성ITX 신규 슬로건 제안서.pdf` | `training/attachments/hyosung-itx-slogan-proposal-original.pdf` | 포맷 적용 대상 원본 | `39419f74b3a0c8d6f69db630ddc5c4c6cd5f2f0eeec75f89709c671cf81dd828` |
| 새 포맷 적용 PDF | `효성ITX 신규 슬로건 제안서_전략보고서_포맷.pdf` | `training/attachments/hyosung-itx-slogan-proposal-strategy-format.pdf` | 최종 재조판 결과 | `938d3de65a3a15d20416da30f216ffedeeebcf3efff3dc38133f0bddf40f3388` |

## 6. Factory_report.pdf 분석 결과

사용자는 `Factory_report.pdf`를 기반으로 템플릿화를 진행하고 싶다고 요청했다. 이에 따라 PDF를 면밀히 분석해 레이아웃과 특징을 Markdown 형태로 정리했다.

파일 특성은 다음과 같았다.

- 형식: PDF 1.7
- 생성 도구: Microsoft Word Microsoft 365용
- 페이지 수: 12쪽
- 페이지 크기: A4 세로, 595.32 x 841.92 pt
- 암호화: 없음
- OCR 필요 여부: 불필요, 텍스트 추출 가능
- 이미지 사용: 없음. 텍스트, 표, 선, 도형 기반 문서
- 문서 성격: 내부 전략 보고서형 템플릿

시각적 특징은 다음과 같이 정리했다.

- 보수적인 임원 보고서형 톤
- 낮음에서 중간 수준의 시각 밀도
- 넓은 여백과 짧은 문단 중심
- 네이비 중심의 색상 체계와 오렌지 포인트
- 사진이나 아이콘 없이 표, bullet, 강조 박스로 구조화
- 모든 페이지에 동일한 헤더와 푸터 적용

주요 색상은 다음과 같다.

| 역할 | Hex |
|---|---|
| 메인 네이비 | `#1F3864` |
| 보조 블루 | `#2E5FAD` |
| 밝은 블루 | `#D6E4F7` |
| 액센트 오렌지 | `#E67E22` |
| 비교표 레드 | `#D9534F` |
| 비교표 그린 | `#27AE60` |
| 본문 진회색 | `#2C3E50` |
| 표 경계선 | `#C9D3E0` |

템플릿 구성 요소는 다음으로 요약했다.

- 표지: 중앙 네이비 제목 블록, 오렌지 제목 강조, 하단 조직·연도·대외비 표기
- 목차: 중앙 제목과 좌측 정렬형 번호 목록
- 본문: 네이비 장 제목 바, 오렌지 세로 액센트, 하위 제목, 얇은 블루 라인
- 표: 네이비 또는 블루 헤더, 연회색 교차 행, 얇은 경계선
- 강조 박스: 밝은 블루 배경, 좌측 블루 세로선, bold 또는 italic 텍스트
- 푸터: `Confidential | 내부 전략 문서`, 페이지 번호

## 7. 효성ITX PDF 포맷 적용 결과

사용자는 분석한 템플릿 결과를 바탕으로 `효성ITX 신규 슬로건 제안서.pdf`에 새 포맷을 입히라고 요청했다. 원본 PDF는 보존하고, 별도 결과 파일을 생성했다.

원본 효성ITX PDF의 특성은 다음과 같았다.

- 생성 도구: WeasyPrint 68.0
- 페이지 수: 5쪽
- 페이지 크기: A4 세로
- 제목: `효성ITX 신규 슬로건 제안서`
- 작성자 메타데이터: `ChatGPT Canvas`

적용한 변경은 다음과 같다.

- Factory_report 스타일의 A4 전략보고서 포맷 적용
- 네이비 섹션 바와 오렌지 세로 액센트 사용
- 공통 헤더와 푸터 추가
- 기존 5쪽 내용을 9쪽 구조로 재조판
- 표지, 목차, 장별 본문, 표, 강조 박스로 재구성
- 원문 메시지는 유지하되 교육·보고서용 구조로 정리

생성 결과는 다음 파일이다.

`training/attachments/hyosung-itx-slogan-proposal-strategy-format.pdf`

검증 내용은 다음과 같다.

- PDF 정상 생성 확인
- A4 9페이지 확인
- 텍스트 추출 가능 확인
- 표지와 주요 본문 페이지 렌더링 확인

## 8. 설치 및 도구 사용 기록

PDF 분석과 재조판을 위해 Codex 번들 Python과 별도 캐시 디렉터리를 사용했다. 전역 Python 환경의 `pyenv` rehash lock 문제를 피하기 위해 전역 설치 대신 아래 위치에 분석용 패키지를 설치했다.

`/Users/seonghobae/.cache/codex-pdf-analysis-python`

사용한 주요 패키지는 다음과 같다.

- `pypdf`
- `pdfplumber`
- `pymupdf`
- `pillow`
- `reportlab`

PDF 생성 시 macOS 및 사용자 폰트 경로에서 사용 가능한 한글 폰트를 확인했다. 최종 PDF는 안정적으로 임베드 가능한 나눔 계열 폰트를 사용했다.

- `NanumGothic.ttf`
- `NanumGothicBold.ttf`
- `NanumMyeongjo.ttf`

## 9. 교육 자료로 재사용할 때의 흐름

이 대화는 다음 교육 흐름으로 재사용할 수 있다.

1. 원본 전략보고서 PDF를 분석한다.
2. 페이지 크기, 헤더, 푸터, 색상, 표, 강조 박스, 타이포그래피를 추출한다.
3. 대상 PDF의 텍스트 구조를 추출한다.
4. 원본 메시지는 유지하고, 분석한 템플릿 구조에 맞춰 재조판한다.
5. 결과 PDF를 생성한다.
6. 원본 PDF, 템플릿 참조 PDF, 결과 PDF, 작업 요약 Markdown을 한 저장소에 묶어 등록한다.

## 10. 후속 작업 제안

현재 저장소에는 교육용 첨부물과 대화 요약이 추가되었다. 후속 작업에서는 다음을 진행할 수 있다.

- 새 포맷 PDF를 생성하는 스크립트를 저장소에 추가해 재현 가능하게 만들기
- `Factory_report.pdf` 분석 내용을 별도 `DESIGN.md` 또는 `REPORT_TEMPLATE.md`로 분리하기
- 기존 `hyosung-itx-slogan-brief.docx`와 새 PDF 포맷을 같은 디자인 시스템으로 통합하기
- PR `#2`의 추가 자료 요청서와 이번 교육 자료를 병합 후 하나의 교육 커리큘럼으로 정리하기
