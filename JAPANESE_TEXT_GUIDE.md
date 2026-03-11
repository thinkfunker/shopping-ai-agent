# Japanese Text Wrapping & Localization Guide

This guide defines the standards for Japanese text handling within the "Shopping AI Agent" project to ensure high visual quality and natural readability.

## 1. Typography & Font Stack
Always use the native Apple Japan system font stack for a premium, native iOS/macOS feel.
- **CSS Rule**:
  ```css
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", sans-serif;
  ```

## 2. Text Wrapping Rules
To prevent words (especially Katakana) from being cut mid-phrase, follow this combination:

### CSS Properties
- `word-break: keep-all;`: Prevents breaking between characters; breaks only at spaces or allowed points.
- `overflow-wrap: anywhere;`: Acts as a safety net to prevent layout overflow for extremely long strings.
- `text-align: center;`: Maintains visual balance for module titles.

### Implementation Strategy (Bunsetsu Spacing)
Japanese doesn't use spaces naturally, but to help the browser wrap correctly:
1. **Insert Spaces**: Manually insert a space at natural phrase boundaries (Bunsetsu).
   - *Example*: `次世代のテクノロジー体験` → `次世代の テクノロジー体験`
2. **Padding**: Maintain a minimum horizontal padding of **20px** to provide visual breathing room.
3. **Weight**: Use `font-weight: 800` for main banners and `700` for card modules.

## 3. Localization Standards
- **Pure Japanese**: Ensure no Korean or English placeholders remain in user-facing text.
- **Natural Phrasing**: Use natural, punchy Japanese typical of premium lifestyle apps.
- **Visual Consistency**: Titles should be balanced and avoid lonely single characters on the second line (use `text-wrap: balance` cautiously if space allows, but prioritize manual spacing + `keep-all`).

## 4. Code Snippet Template
```javascript
// Example of a well-formatted module title
{
    title: "トレンドの ストリートスタイル", // Space helps wrapping
    style: "padding: 0 20px; word-break: keep-all; overflow-wrap: anywhere; text-align: center;"
}
```
