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
const INPUT = path.join(ROOT, "docs", "hyosung_itx_slogan_proposal_materials_request.md");
const OUT = path.join(ROOT, "deliverables", "hyosung-itx-slogan-proposal-materials-request.docx");

const COLORS = {
  navy: "1F2A44",
  gray: "EEF2F5",
  border: "CBD5E1",
  muted: "6B7280",
  black: "111827",
  white: "FFFFFF",
};

const CONTENT_WIDTH = 9360;
const border = { style: BorderStyle.SINGLE, size: 1, color: COLORS.border };
const borders = { top: border, bottom: border, left: border, right: border };

function cleanInline(text) {
  return String(text)
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)")
    .replace(/`([^`]+)`/g, "$1");
}

function txt(text, options = {}) {
  return new TextRun({
    text: cleanInline(text),
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
    children: [txt(text, options)],
  });
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "materials-bullets", level: 0 },
    spacing: { before: 40, after: 80, line: 300 },
    children: [txt(text)],
  });
}

function cell(content, width, options = {}) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    margins: { top: 90, bottom: 90, left: 120, right: 120 },
    shading: options.fill ? { fill: options.fill, type: ShadingType.CLEAR } : undefined,
    children: [para(content, { after: 60, bold: options.bold, color: options.color ?? COLORS.black, size: 19 })],
  });
}

function parseTable(lines) {
  const rows = lines
    .filter((line) => !/^\|\s*-+/.test(line))
    .map((line) => line.replace(/^\|/, "").replace(/\|$/, "").split("|").map((part) => part.trim()));
  const colCount = rows[0]?.length ?? 1;
  const width = Math.floor(CONTENT_WIDTH / colCount);

  return new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: Array(colCount).fill(width),
    rows: rows.map((row, rowIndex) => new TableRow({
      children: row.map((value) => cell(value, width, {
        fill: rowIndex === 0 ? COLORS.gray : undefined,
        bold: rowIndex === 0,
      })),
    })),
  });
}

function markdownToChildren(markdown) {
  const lines = markdown.split(/\r?\n/);
  const children = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trimEnd();

    if (!line.trim()) continue;

    if (line.startsWith("|")) {
      const tableLines = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        tableLines.push(lines[index].trim());
        index += 1;
      }
      index -= 1;
      children.push(parseTable(tableLines));
      continue;
    }

    if (line.startsWith("# ")) {
      children.push(para(line.slice(2), {
        heading: HeadingLevel.TITLE,
        size: 34,
        bold: true,
        color: COLORS.navy,
        before: 320,
        after: 180,
      }));
      continue;
    }

    if (line.startsWith("## ")) {
      children.push(para(line.slice(3), {
        heading: HeadingLevel.HEADING_1,
        size: 28,
        bold: true,
        color: COLORS.navy,
        before: 240,
        after: 120,
      }));
      continue;
    }

    if (line.startsWith("### ")) {
      children.push(para(line.slice(4), {
        heading: HeadingLevel.HEADING_2,
        size: 24,
        bold: true,
        color: COLORS.navy,
        before: 180,
        after: 100,
      }));
      continue;
    }

    if (line.startsWith("- ")) {
      children.push(bullet(line.slice(2)));
      continue;
    }

    children.push(para(line));
  }

  return children;
}

const markdown = fs.readFileSync(INPUT, "utf8");
const doc = new Document({
  creator: "Codex",
  description: "Hyosung ITX slogan proposal materials request",
  title: "효성ITX 슬로건 제안서 추가 자료 요청서",
  styles: {
    default: { document: { run: { font: "Arial", size: 22, color: COLORS.black } } },
    paragraphStyles: [
      {
        id: "Title",
        name: "Title",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 34, bold: true, font: "Arial", color: COLORS.navy },
        paragraph: { spacing: { before: 320, after: 220 } },
      },
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: COLORS.navy },
        paragraph: { spacing: { before: 240, after: 120 } },
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: COLORS.navy },
        paragraph: { spacing: { before: 180, after: 100 } },
      },
    ],
  },
  numbering: {
    config: [
      {
        reference: "materials-bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "•",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 420, hanging: 220 } } },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: { margin: { top: 900, right: 720, bottom: 900, left: 720 } },
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [txt("Page ", { size: 18, color: COLORS.muted }), new TextRun({ children: [PageNumber.CURRENT], size: 18, color: COLORS.muted })],
            }),
          ],
        }),
      },
      children: markdownToChildren(markdown),
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, buffer);
  console.log(`Wrote ${OUT}`);
});
