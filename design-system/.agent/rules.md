# Agent Rules & Protection Protocol

This document defines the strict rules for AI agents and collaborators working on this repository.

## 1. Protected Files & Components
All files within the following directories and files are considered **PROTECTED**:
- `/design-system/components/**`
- `/design-system/design_system.css`
- `/design-system/design_system_rules.md`

## 2. Modification Protocol (STRICT)
**NEVER** modify, refactor, or delete any content within the Protected Files without explicit confirmation.

### 2.1 Zero-Tolerance for Ad-hoc styles
- **CSS Variables Only**: Every color, spacing, radius, and font property MUST use a CSS variable from `design_system.css`.
- **Absolute Values Forbidden**: No hex codes (`#fff`), No naked pixels (`16px`), No named colors (`white`).
- **Layout Patterns**: Structural layouts MUST follow the exact "Anatomy" and "Usage" values defined in `design_system_rules.md`.
- **Component Priority**: Custom styles for positioning must be minimal. If a component's padding is defined in the rules (e.g., Section 41.1), it MUST be used as the single source of truth.

## 3. Purpose
These components have been meticulously aligned with Figma design specs. Ad-hoc variations or "improvements" by AI agents are strictly forbidden to maintain design integrity and consistency.

---
*Last Updated: 2026-03-12 by Antigravity AI*
