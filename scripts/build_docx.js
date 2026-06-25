const fs = require("fs");
const path = require("path");
const {
  AlignmentType,
  BorderStyle,
  Document,
  Footer,
  HeadingLevel,
  LevelFormat,
  Packer,
  PageBreak,
  PageNumber,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} = require("docx");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "deliverables", "hyosung-itx-slogan-brief.docx");
const data = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "source_snapshot.json"), "utf8"));

const COLORS = {
  navy: "1F2A44",
  red: "C9152E",
  gray: "EEF2F5",
  border: "CBD5E1",
  muted: "6B7280",
  black: "111827",
  white: "FFFFFF",
};

const CONTENT_WIDTH = 9360;
const border = { style: BorderStyle.SINGLE, size: 1, color: COLORS.border };
const borders = { top: border, bottom: border, left: border, right: border };

function txt(text, options = {}) {
  return new TextRun({
    text: String(text),
    font: "Arial",
    size: options.size ?? 22,
    bold: options.bold ?? false,
    italics: options.italics ?? false,
    color: options.color ?? COLORS.black,
  });
}

function para(text, options = {}) {
  return new Paragraph({
    alignment: options.alignment ?? AlignmentType.LEFT,
    spacing: { before: options.before ?? 80, after: options.after ?? 120, line: 320 },
    heading: options.heading,
    children: Array.isArray(text) ? text : [txt(text, options)],
  });
}

function muted(text) {
  return para(text, { size: 18, color: COLORS.muted, after: 60 });
}

function h1(text) {
  return para(text, { heading: HeadingLevel.HEADING_1, size: 30, bold: true, color: COLORS.navy, before: 260, after: 160 });
}

function h2(text) {
  return para(text, { heading: HeadingLevel.HEADING_2, size: 25, bold: true, color: COLORS.navy, before: 220, after: 120 });
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "brief-bullets", level: 0 },
    spacing: { before: 40, after: 80, line: 300 },
    children: [txt(text)],
  });
}

function cell(content, width, options = {}) {
  const toParagraphs = (item) => {
    if (item instanceof Paragraph) return [item];
    return String(item)
      .split(/\r?\n/)
      .map((line) => para(line, { after: 60, bold: options.bold, color: options.color ?? COLORS.black }));
  };
  const paragraphs = Array.isArray(content)
    ? content.flatMap((item) => toParagraphs(item))
    : toParagraphs(content);

  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    margins: { top: 90, bottom: 90, left: 120, right: 120 },
    shading: options.fill ? { fill: options.fill, type: ShadingType.CLEAR } : undefined,
    children: paragraphs,
  });
}

function table(rows, widths, headerRows = 1) {
  return new Table({
    width: { size: widths.reduce((sum, width) => sum + width, 0), type: WidthType.DXA },
    columnWidths: widths,
    rows: rows.map((row, rowIndex) => new TableRow({
      children: row.map((value, colIndex) => cell(value, widths[colIndex], {
        fill: rowIndex < headerRows ? COLORS.gray : undefined,
        bold: rowIndex < headerRows,
      })),
    })),
  });
}

function money(value) {
  return `${Number(value).toLocaleString("ko-KR")}백만 원`;
}

function pct(value) {
  return `${Number(value).toFixed(2)}%`;
}

function sourceLine(label, url) {
  return para([txt(`${label}: `, { bold: true, size: 18, color: COLORS.muted }), txt(url, { size: 18, color: COLORS.muted })], { after: 40 });
}

const q1Segments = data.business_mix.q1_2026.segments;
const fySegments = data.business_mix.fy_2025.segments;

const children = [
  para("효성ITX 신규 슬로건 리서치 브리프", {
    heading: HeadingLevel.TITLE,
    size: 38,
    bold: true,
    color: COLORS.navy,
    before: 320,
    after: 120,
  }),
  para("기업 분석 · 특수 관계 분석 · 사업 분석 · 기업 공시 분석", { size: 22, color: COLORS.muted, after: 220 }),
  muted(`자료 기준일: ${data.as_of}`),
  new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: [CONTENT_WIDTH],
    rows: [
      new TableRow({
        children: [
          cell([
            para("권고 슬로건", { size: 20, color: COLORS.white, bold: true, after: 40 }),
            para("고객 접점을 지능으로 바꾸다", { size: 34, color: COLORS.white, bold: true, after: 40 }),
            para("컨택센터 운영의 현재 실체와 AI·클라우드 전환의 미래 방향을 한 문장에 묶는 표현입니다.", {
              size: 21,
              color: COLORS.white,
              after: 40,
            }),
          ], CONTENT_WIDTH, { fill: COLORS.navy, color: COLORS.white }),
        ],
      }),
    ],
  }),
  h1("1. 의사결정 요약"),
  para("효성ITX는 단순한 콜센터 운영사가 아니라 고객 접점을 운영하고, 그 접점에 IT 서비스, 클라우드, AI, ITO 역량을 붙이는 회사로 읽어야 합니다. 2026년 1분기 연결 매출에서 컨택센터 서비스가 77.85%로 가장 크지만, 공식 사업 설명과 공시에는 AICC, RingCloud, xtrmSolution, Smart Factory, IDC, Display Solution이 함께 제시됩니다."),
  para("추천 방향은 고객 접점을 전면에 두고 지능으로 다음 단계를 설명하는 방식입니다. 대중에게는 무엇을 하는 회사인지 바로 잡히고, 기업 고객에게는 운영 규모와 AI 전환 가능성이 같이 전달됩니다."),

  h1("2. 기업 분석"),
  table([
    ["항목", "확인 내용", "슬로건 시사점"],
    ["설립·상장", "1997년 설립, 2007년 KOSPI 상장", "오래 운영한 회사라는 신뢰 기반을 확보"],
    ["공식 사업 축", "Contact Center, IT Service, Display Solution", "콜센터보다 넓은 고객 접점 운영사로 포지셔닝"],
    ["최근 연혁", "H3C·상포테크놀로지 총판, 특허 3건, ISO 45001", "기술·품질·안전 인증을 메시지 근거로 활용"],
  ], [2100, 3600, 3660]),
  para("효성ITX는 기업과 고객의 커뮤니케이션 채널을 관리하는 Contact Center 사업, 기업 IT 환경을 지원하는 IT Service 사업, 영상기기 판매·설치 기반의 Display Solution 사업을 전개합니다. 새 슬로건은 이 세 축을 하나로 묶는 상위 언어가 필요합니다."),

  h1("3. 특수 관계 분석"),
  para("2026년 1분기보고서 기준 최대주주 및 특수관계인의 총발행주식수 기준 보유 현황은 조현준 35.26%, (주)효성 보통주 28.26%, (주)효성 우선주 7.00%, 효성아이티엑스 자기주식 4.18%, 남경환 0.20%입니다. 의결권 있는 보통주 기준 5% 이상 주주는 조현준 37.91%, (주)효성 30.39%입니다."),
  table([
    ["구분", "수치", "해석"],
    ["효성 기업집단 계열회사", "상장 11개, 비상장 137개, 총 148개", "그룹 레퍼런스와 대형 운영 경험을 설명할 수 있음"],
    ["국내 계열사 매출", "397.05억 원, 전체 매출 대비 7.66%", "그룹 내부 매출은 신뢰 근거이나 외부 확장 메시지가 필요"],
    ["국내 계열사 매입", "80.21억 원, 매입액 대비 1.71%", "특수관계 거래 노출은 제한적으로 읽힘"],
  ], [2500, 3100, 3760]),
  para("이 구조는 효성그룹 내부 레퍼런스를 신뢰 근거로 쓰되, 대외 슬로건에서는 그룹 내부 IT 회사로만 보이지 않게 해야 한다는 점을 알려줍니다."),

  h1("4. 사업 분석"),
  table([
    ["사업", "2026년 1분기 매출", "비중"],
    ...q1Segments.map((segment) => [segment.name, money(segment.revenue_million_krw), pct(segment.share_percent)]),
  ], [4000, 3000, 2360]),
  para(`2026년 1분기 연결 매출은 ${money(data.business_mix.q1_2026.revenue_million_krw)}입니다. 2025년 연결 매출은 ${money(data.business_mix.fy_2025.revenue_million_krw)}, 영업이익은 ${money(data.business_mix.fy_2025.operating_profit_million_krw)}, 연결당기순이익은 ${money(data.business_mix.fy_2025.net_profit_million_krw)}입니다.`),
  table([
    ["사업", "2025년 매출", "비중"],
    ...fySegments.map((segment) => [segment.name, money(segment.revenue_million_krw), pct(segment.share_percent)]),
  ], [4000, 3000, 2360]),
  para("슬로건은 컨택센터만 말하면 좁고, AI만 말하면 현재 매출 구조와 떨어집니다. 고객 접점은 현재 사업의 크기를 담고, 지능은 AI·클라우드·ITO·IDC의 확장성을 담습니다."),

  h1("5. 기업 공시 분석"),
  table([
    ["일자", "공시", "의미"],
    ["2026-06-15", "주주명부폐쇄기간또는기준일설정", "정기적인 주주·배당 일정 관리"],
    ["2026-06-01", "기업지배구조보고서공시", "지배구조 정보 공개"],
    ["2026-06-01", "대규모기업집단현황공시", "계열·특수관계 거래 투명성"],
    ["2026-05-15", "분기보고서 (2026.03)", "최신 사업·재무 구조 확인"],
    ["2026-03-27", "기업가치제고계획", "2026년 배당성향 50% 이상 목표"],
    ["2026-03-18", "사업보고서 (2025.12)", "연간 사업·재무·주주 정보 기준점"],
  ], [1900, 3400, 4060]),
  para(`공식 주식정보 페이지의 배당 현황은 2025년 주당 배당금 ${data.disclosure_signals.dividend_history.dps_2025_krw}원, 연결 현금배당성향 ${pct(data.disclosure_signals.dividend_history.cash_dividend_payout_ratio_2025_percent)}, 시가배당률 ${pct(data.disclosure_signals.dividend_history.dividend_yield_2025_percent)}를 제시합니다. 공시는 안정적 운영 수익, 높은 배당성향, 그룹 내 거래와 외부 고객 기반이 공존하는 회사라는 이미지를 만듭니다.`),

  h1("6. 슬로건 전략"),
  bullet("대중이 효성ITX의 일을 바로 이해해야 합니다."),
  bullet("컨택센터 중심의 현재 실체를 숨기지 않아야 합니다."),
  bullet("AI·클라우드·ITO 확장을 미래형 과장으로만 보이게 해서는 안 됩니다."),
  para("권고 슬로건인 고객 접점을 지능으로 바꾸다는 효성ITX의 현재와 미래를 한 문장에 묶습니다. 고객 접점은 컨택센터 서비스, Display Solution, ITO 운영 현장을 포괄합니다. 지능은 AICC, RingCloud, xtrmSolution, Smart Factory, IDC·클라우드 기반 운영을 설명합니다."),

  h1("7. 후보 슬로건"),
  table([
    ["순위", "슬로건", "활용 장면", "평가"],
    ["1", "고객 접점을 지능으로 바꾸다", "대표 슬로건", "가장 간결하고 사업 구조와 일치"],
    ["2", "모든 고객 접점에 지능을 더하다", "기업 브로슈어·IR", "설명력이 높고 안정적"],
    ["3", "사람의 응대에 기술의 답을 더하다", "컨택센터 캠페인", "컨택센터 중심 홍보에 적합"],
    ["4", "운영은 단단하게, 전환은 빠르게", "B2B 세일즈", "ITO·운영 신뢰를 강조"],
    ["5", "고객의 목소리에서 비즈니스의 해답까지", "브랜드 영상", "정서적이지만 길다"],
    ["6", "컨택센터를 넘어 AI 비즈니스 플랫폼으로", "신사업 발표", "미래 방향은 강하지만 현재 실체 설명이 좁다"],
  ], [900, 3300, 2100, 3060]),

  h1("8. 적용 문구"),
  table([
    ["용도", "문구"],
    ["대표 표기", "효성ITX\n고객 접점을 지능으로 바꾸다"],
    ["짧은 소개문", "효성ITX는 컨택센터 운영 경험 위에 IT 서비스, 클라우드, AI 솔루션을 결합해 기업의 고객 접점을 더 빠르고 정확한 비즈니스 운영 체계로 바꿉니다."],
    ["IR·채용 보조 문구", "12,000여 석 컨택센터 운영 경험에서 AICC, ITO, IDC, Smart Factory까지. 효성ITX는 기업의 현장과 고객 사이에서 디지털 전환을 실행합니다."],
  ], [2200, 7160]),

  new Paragraph({ children: [new PageBreak()] }),
  h1("9. 출처"),
  sourceLine("효성ITX 기업개요", "https://www.hyosungitx.com/ko/company/overview.do"),
  sourceLine("효성ITX 사업개요", "https://www.hyosungitx.com/ko/business/overview.do"),
  sourceLine("효성ITX 공시자료", "https://www.hyosungitx.com/ko/investment/disclosureData.do"),
  sourceLine("효성ITX 주식정보", "https://www.hyosungitx.com/ko/investment/stockInfo.do"),
  sourceLine("DART 2026년 1분기보고서", "https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20260515001978"),
  sourceLine("DART 2025년 사업보고서", "https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20260318001001"),
  sourceLine("DART 대규모기업집단현황공시", "https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20260601001413"),
  sourceLine("DART 기업지배구조보고서공시", "https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20260601801767"),
  sourceLine("KRX 기업가치 제고 계획", "https://kind.krx.co.kr/common/disclsviewer.do?acptno=20260327000313&docno=&method=search&viewerhost="),
];

const doc = new Document({
  creator: "Codex",
  description: "Hyosung ITX slogan research brief",
  title: "효성ITX 신규 슬로건 리서치 브리프",
  styles: {
    default: { document: { run: { font: "Arial", size: 22, color: COLORS.black } } },
    paragraphStyles: [
      {
        id: "Title",
        name: "Title",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 38, bold: true, font: "Arial", color: COLORS.navy },
        paragraph: { spacing: { before: 320, after: 240 } },
      },
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 30, bold: true, font: "Arial", color: COLORS.navy },
        paragraph: { spacing: { before: 260, after: 160 }, outlineLevel: 0 },
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 25, bold: true, font: "Arial", color: COLORS.navy },
        paragraph: { spacing: { before: 220, after: 120 }, outlineLevel: 1 },
      },
    ],
  },
  numbering: {
    config: [
      {
        reference: "brief-bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "•",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 520, hanging: 260 } } },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1080, right: 1440, bottom: 1080, left: 1440 },
        },
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                txt("Hyosung ITX Slogan Brief · Page ", { size: 18, color: COLORS.muted }),
                new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 18, color: COLORS.muted }),
              ],
            }),
          ],
        }),
      },
      children,
    },
  ],
});

fs.mkdirSync(path.dirname(OUT), { recursive: true });
Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(OUT, buffer);
  console.log(OUT);
});
