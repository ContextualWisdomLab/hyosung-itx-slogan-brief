---
version: alpha
name: Hyosung ITX Slogan Brief
description: Executive research brief identity for Hyosung ITX slogan strategy.
colors:
  primary: "#1F2A44"
  secondary: "#6B7280"
  tertiary: "#C9152E"
  neutral: "#F8FAFC"
  surface: "#FFFFFF"
  surface-muted: "#EEF2F5"
  on-primary: "#FFFFFF"
  on-surface: "#111827"
  source-link: "#4B5563"
typography:
  headline-lg:
    fontFamily: Arial
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0px
  headline-md:
    fontFamily: Arial
    fontSize: 25px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0px
  body-md:
    fontFamily: Arial
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0px
  label-md:
    fontFamily: Arial
    fontSize: 10px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  source-sm:
    fontFamily: Arial
    fontSize: 9px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0px
rounded:
  none: 0px
  sm: 4px
  md: 8px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
components:
  recommendation-callout:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.headline-lg}"
    rounded: "{rounded.sm}"
    padding: 16px
  evidence-table-header:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: 8px
  evidence-table-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 8px
  source-note:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.source-link}"
    typography: "{typography.source-sm}"
    rounded: "{rounded.none}"
    padding: 4px
---

# Hyosung ITX Slogan Brief Design System

## Overview

This DESIGN.md follows the Google Labs `design.md` format: design tokens in YAML front matter are the normative values, and the markdown body explains how to apply them.

The identity is an executive research brief, not a campaign mood board. It should feel operational, credible, and technology-forward. The reader should see Hyosung ITX as a company that already runs customer-facing operations at scale and is now adding AI, cloud, and ITO capability to that operating base.

## Colors

The palette uses one institutional base, one restrained campaign accent, and quiet evidence surfaces.

- **Primary (#1F2A44):** Deep Operations Navy for titles, section hierarchy, and the final slogan callout.
- **Secondary (#6B7280):** Muted Evidence Gray for dates, caveats, and secondary source text.
- **Tertiary (#C9152E):** Hyosung Accent Red for the selected slogan and key decision markers only.
- **Neutral (#F8FAFC):** Page-level background when the document is rendered as a web or slide surface.
- **Surface Muted (#EEF2F5):** Evidence table headers and compact analytical callouts.

## Typography

Use a conservative sans-serif style. Korean and English terms should sit naturally in the same paragraph. Preserve source terms such as AI, ITO, IDC, AICC, DART, RingCloud, and xtrmSolution.

- **Headlines:** Arial bold, compact, and navy. Headings should frame decisions, not decorate the page.
- **Body:** Arial regular, 11px equivalent in document outputs, with steady line height for dense evidence.
- **Labels:** Arial bold, small, and direct. Use labels for table headers, source dates, and short status cues.
- **Source notes:** Smaller text in muted gray. URLs should remain readable and traceable.

## Layout

Start with the decision, then show evidence. The document should open with the recommended slogan, followed by the analysis chain: company, special relationships, business, disclosures, slogan strategy, candidates, and source list.

Use compact tables for hard numbers. Use short paragraphs for interpretation. Keep one main argument per section so readers can move from research evidence to creative decision without losing the chain of proof.

## Elevation & Depth

Use flat hierarchy. Depth is created with tonal layers, borders, section spacing, and typography weight. Do not use heavy shadows or decorative depth effects.

## Shapes

Use low-radius or square geometry. Tables, evidence blocks, and source notes should feel like audit-ready records. The recommendation callout may use a 4px radius, but analytical tables should remain square.

## Components

- **Recommendation callout:** Primary background, white text, compact headline typography. Use once for the selected slogan.
- **Evidence table header:** Surface-muted background, bold label typography, thin borders.
- **Evidence table cell:** White background, body typography, thin borders, numeric claims grouped by source date.
- **Source note:** Neutral background or plain muted text. Always keep source labels and URLs visible.

## Do's and Don'ts

- Do treat the YAML tokens as the source of truth for generated visual outputs.
- Do keep Hyosung Accent Red sparse so the final slogan remains the focal point.
- Do use tables when presenting DART, KRX, or official-company-source numbers.
- Do preserve exact dates and disclosure names when citing evidence.
- Don't present Hyosung ITX as only a call-center company.
- Don't over-index on AI language without tying it back to contact center, ITO, IDC, cloud, or disclosure evidence.
- Don't use decorative gradients, oversized hero layouts, or marketing-card compositions for this brief.
