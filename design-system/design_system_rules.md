<!-- [PROTECTED] Modification of this file requires explicit USER confirmation. See .agent/rules.md for protocol. -->
# Design System Specification & Component Guidelines

This document is based on the Figma design system guidelines and serves as a set of prompt rules for future design and code generation tasks.

---

## 0. Development & Implementation Standards (Project-Wide)

To ensure a 100% pixel-perfect match with Figma designs, all component implementation MUST follow these mandatory standards:

### 1. Atomic Component Separation
*   **1 Node = 1 File**: Every distinct Figma variant (e.g., Carousel vs. List) must be implemented as a separate "Atomic" component file.
*   **Modular Architecture**: Complex templates must be composed of these atomic sub-components rather than using complex conditional styling in a single large file.
*   **Encapsulation**: Atom styles must be self-contained to prevent cross-variant design contamination.

### 2. Data-First Implementation (Zero-Guessing)
*   **API Dominance**: All CSS values (padding, gap, radius, hex colors) must be extracted directly from the Figma API.
*   **No Subjective Interpretation**: 에이전트의 주관적인 디자인 판단(예: "더 예쁜 곡률")은 배제하며, 오직 피그마의 실측 데이터만 반영합니다.
*   **Token Alignment**: Possible token fallbacks must always match the exact hex codes found in the Figma variables.

### 3. Systematic Verification
*   **Visual Audit**: Before completion, rendered components must be screenshotted and compared side-by-side with Figma screenshots using the `browser_subagent`.
*   **Pixel-Level Match**: A 100% visual match at 390px (mobile) width is the only acceptable criteria for completion.

---

## 1. Button

### Purpose
*   A fundamental interaction element used to clearly communicate primary or secondary actions performed by the user.
*   **Priority** indicates the importance and visual emphasis of the operation, while **Style** (Solid/Outline) provides visual variation within the same Priority.

### Anatomy
*   **Label**: The text describing the action.
*   **Left Icon (Optional)**: An icon used at the start of the button for better recognition.
*   **Right Icon (Optional)**: An icon used at the end of the button (e.g., arrow).
*   **Container**: Defines the background, border-radius, and size.

### Priority System
*   **Primary**: Used for the most important actions. Recommended to use only once per screen.
    *   **solid-primary**: Provides the strongest visual emphasis.
    *   **outline-primary**: Serves as an alternative Primary.
*   **Secondary**: Used to assist primary actions or provide additional choices.
    *   **outline-secondary**: Medium emphasis.
*   **Tertiary**: Used for neutral or low-priority operations like Cancel or Close.
*   **Danger**: Clearly warns of irreversible or dangerous operations like Delete or Reset.

### Type & States
*   **Sizes**: medium, large, xlarge, xxlarge (height and padding are fixed based on the size).
*   **States**: enabled, hovered, focused, pressed, disabled.
*   **Implementation Note**: Uses an internal absolute-positioned `.btn-state-layer` to provide precise visual feedback without affecting the underlying background or border layout.
    - **Hover**: Suble overlay (e.g., `rgba(255, 255, 255, 0.08)` on solid, `rgba(15, 98, 254, 0.04)` on outline).
    - **Pressed**: Stronger darkening/tinting overlay (e.g., `rgba(0, 0, 0, 0.12)`).

### Usage Guidelines
*   **Primary**: Use only for the one essential action the user must take.
*   **Secondary/Tertiary**: Combine based on hierarchy to maintain a clear visual structure.
*   **Icon-only**: Use only when the icon's meaning is universally clear without a text label.

### Do & Don't
*   **Do**:
    *   Place only one Primary button per screen to maintain a clear focal point.
    *   Ensure the **entire Header** area of complex components is clickable if they contain buttons.
*   **Don't**:
    *   Do not place multiple Primary buttons on the same screen.
    *   Do not use Icon-only buttons with ambiguous icons.
    *   Avoid using `disabled-accent` colors on general surfaces; use `background/disabled` instead.

---

## 2. Avatar

### Purpose
*   A component used to visually identify a user or an AI agent.
*   Used in profiles, comments, chat entry points, and user lists to intuitively convey the subject of an utterance or action.

### Anatomy
*   **Container**: The outer frame of the avatar (circular).
*   **Image**: The image or logo displayed inside the avatar.

### Type & Sizes
*   **Types**: User, AI.
*   **Sizes**: xsmall, small, medium (select based on context).

### Usage Guidelines
*   **Placement**: Generally placed to the **left** of the text.
*   **Restrictions**: Do not use for purely decorative purposes without meaning. Avoid complex images with excessive information.
*   **Chat Display Rules (Important)**: In actual conversation history (chat bubbles, etc.), the principle is **not to display an avatar**, including for the first response. The subject of speech should be communicated through context, labels, and UI structure rather than an avatar.

### Do & Don't
*   **Do**:
    *   Proactively use in independent areas like entry points or navigation where the subject needs to be identified.
    *   Strategically choose appropriate sizes (medium, small, etc.) based on the service's character.
*   **Don't**:
    *   Avoid repetitive display of avatars within the conversation flow to prevent redundant recognition.
    *   Avoid using files where the image is broken or of low resolution.

---

## 3. AI Text Input

### Purpose
*   The central interaction element for user input and triggering AI responses.
*   Designed to support multiple operations—text input, voice input, file/photo attachment, and message sending—within a single input field.

### Anatomy
*   **Left button (+)**: Trigger to open additional features like file or photo attachments.
*   **Input Field**: Area for text entry and placeholder display.
*   **Right Buttons**: Group for voice input (microphone) and send button.
*   **Container**: Outer frame consisting of background, rounded corners, and border.

### Type & States
*   **Simple**: Single-line input (Pill shape).
*   **Multiple**: Multi-line input (Rounded box shape).
*   **States**: Supports Enabled, Focused, Typing, Typed, and Disabled states.

### Usage Guidelines
*   **Text Input**: The primary means for writing clear questions or instructions.
*   **Left Menu**: Provides extended input methods like photo, camera, and file uploads upon button click.
*   **Voice (Mic)**: Used as an alternative to text input in supported environments.
*   **Send**: Enabled only when text is present to request an AI response.

### Do & Don't
*   **Do**:
    *   Display the attachment menu in a clearly separated position from the input field to avoid confusion.
    *   Ensure the send button is enabled only when there is actual input.
*   **Don't**:
    *   Do not rely solely on the microphone button for critical operations.
    *   Ensure the menu does not overlap or interfere with surrounding interactive elements.

---

## 4. Accordion

### Purpose
*   A structural component in detail pages that organizes information into session units, allowing users to selectively view only the information they need.

### Anatomy
*   **Header (Trigger)**: Area that expands or collapses the content when clicked.
*   **Divider**: Separation line between sections or between the header and content.
*   **Content**: Detailed information area exposed when expanded.

### Type & States
*   **Collapsed**: Default state with only the header visible (Selected = false).
*   **Expanded**: State where detailed content is exposed (Selected = true).
*   **States**: Supports Enabled and Hover states.

### Usage Guidelines
*   **Use Cases**: Organizing information groups in detail pages, policy descriptions, FAQs, and other variable-length content.
*   **Information Structuring**: Use when hierarchical information delivery is required at a section level.

### Do & Don't
*   **Do**:
    *   Use the **entire Header** as a click area to ensure accessibility.
    *   Control internal spacing of the Content using **`gap`** or system padding, not manual margins.
*   **Don't**:
    *   Avoid manually giving specific `margin` values for internal adjustments.
    *   Do not over-use as a substitute for simple Lists.

---

## 5. Badge

### Purpose
*   A concise auxiliary UI element used to communicate new notifications, updates, or status changes.
*   **Important**: Not used alone; always combined with other components like Avatars, Icons, or Tabs.

### Anatomy
*   **Text (Number)**: Displays numerical information.
*   **Background Area**: The background region.
*   **Dot (Dot Type)**: A dot for indicating status changes.

### Types
*   **Number**: Indicates notification counts or unconfirmed items. Supports up to 2 digits (use "99+" for more).
*   **Dot**: Used when space is limited or for simple status changes.

### Styling Logic
*   **Priority**:
    *   **Primary**: Used when strong attention is needed (Gradients or accent colors).
    *   **Secondary**: Used for auxiliary notifications (White background + outline).
*   **Size**: Small and Medium. Chosen based on context with fixed height, padding, and roundness. Width is flexible based on content.

### Usage Guidelines
*   **Combined with Avatar**:
    *   Number Type: Placed at the bottom right of the avatar.
    *   Dot Type: Placed at the top right of the avatar.
*   **Combined with Icon**: Placed at the top right of the icon area (basic 24x24).
*   **Combined with Tab**: Placed to the right of the tab label to indicate update status.

### Do & Don't
*   **Do**:
    *   Adjust placement so it doesn't interfere with the visibility of the primary component.
    *   Actively use the Dot type when space is insufficient.
*   **Don't**:
    *   Never place a badge alone on the screen.
    *   Do not expose numbers exceeding 2 digits directly (to prevent UI breakage).
    *   Avoid choosing a size that is disproportionate to the parent component.

---

## 6. Toggle Button

### Purpose
*   A button component used to switch the selection state (On / Off) of a specific option.
*   The state is inverted with each press, immediately reflecting the activation or deactivation of the option.

### Anatomy
*   **Icon**: Visual indicator shown only when selected.
*   **Label Area**: Text area describing the option.
*   **Container**: The outer frame with a border and background.

### Type & Sizes
*   **Sizes**: medium, large, xlarge, xxlarge.
*   **Contextual Selection**: Choose the size based on the usage context and the length of the label.
*   **Fixed styles**: Each size uses a fixed height, padding, and corner radius.

### Icon Rules
*   **Selected (On)**: An icon (default: 'check') is **mandatory** and must be displayed along with the label.
*   **Unselected (Off)**: The icon is **hidden**, and only the label is displayed.
*   **No Variations**: Toggle buttons composed solely of an icon or solely of a label (without selection logic) are not provided.
*   **Customization**: The default check icon can be swapped using properties.

### Usage Guidelines
*   **Persistence**: Use for options where the selection state needs to be maintained.
*   **Clarity**: The selection state must be clearly recognizable through both the Icon and the Label.
*   **Single Option**: Suitable for expressing the enabled/disabled status of a single option.

### Do & Don't
*   **Do**:
    *   Always use both an Icon and a Label in the Selected state.
    *   Ensure the completion of the selection state is clearly recognizable.
    *   Choose a Size appropriate for the usage context.
*   **Don't**:
    *   Do not use Toggle Buttons composed solely of an Icon or solely of a Label.
    *   Do not use shadows on Toggle Buttons.

---

## 7. Chip

### Purpose
*   A UI element used to represent small units of information such as simple actions, tags, filter selections, and options.
*   Enables users to quickly switch contexts or toggle specific settings within a concise interface.

### Anatomy
*   **Container**: The outer frame (rectangular or pill-shaped).
*   **Label**: Concise text representing the information or action.
*   **Graphic (Optional)**: Avatars or complex icons for specific variants (e.g., outline-gradient).
*   **Left / Right Icon (Optional)**: Auxiliary icons for additional context or actions.

### Variants
*   **solid-rounded-rect**: A solid chip with an 8px corner radius. Used for a stable and standard visual style.
*   **solid-rounded**: A pill-shaped solid chip. Provides a softer, more casual visual impression.
*   **outline-gradient**: A pill-shaped chip with a decorative gradient border. Used for emphasis or highly decorative contexts.

### Style & States
*   **Sizes**: small (28px), medium (32px), large (40px), xlarge (48px).
*   **States**: enabled, hovered, focused, pressed, disabled.
*   **Selection (Selected Off/On)**: Selected chips change their background to `var(--background-selection-secondary)`, border to `var(--gradient-border-stop-1)`, and color to `var(--content-key)`.
*   **Implementation Note**: Uses an internal `.chip-state-layer` for interaction feedback, ensuring consistency across all variations (Rect vs Pill).

### Usage Guidelines
*   **Conciseness**: Keep labels short and descriptive. Avoid long text that causes overflow.
*   **Consistency**: Use the same size and variant when grouping multiple chips together.
*   **Priority**: 
    - Use **Medium** size for primary interactions like filter triggers or categories.
    - Use **Small** size for high-density information areas or supplementary tags.

### Do & Don't
*   **Do**:
    - Ensure clear visual distinction between selected and unselected states.
    - Use icons or graphics only when they enhance the understanding of the content.
    - Choose the size based on the importance and placement in the UI.
*   **Don't**:
    - Do not use long text strings within a single chip.
    - Do not over-complicate the UI by combining graphics and both icons simultaneously.
    - Avoid using the Small size as the primary trigger for major application actions.

---

## 8. Checkbox

### Purpose
*   An input component that allows users to select or deselect one or more items from a set.
*   Used when multiple selections are possible, and the selection state is maintained.

### Anatomy
*   **Background area**: The square frame of the checkbox.
*   **Icon area**: The check icon displayed when selected.

### Style & States
*   **States**: enabled, hovered, focused, pressed, disabled.
*   **Selection (Selected yes/no)**:
    - **No (Unselected)**: White background with a primary border.
    - **Yes (Selected)**: Gradient background with a white check icon.
*   **Consistency**: The selection state is maintained after user interaction.

### Usage Guidelines
*   **Responsibility**: The Checkbox component itself only handles the visual representation of the selection state.
*   **Labels**: Descriptions for what is being selected should be provided using external text elements (labels).
*   **Grouping**: Checkboxes and their corresponding labels should be positioned so they are clearly recognized as a single selectable unit.

### Spacing
*   **Label Spacing**: When used with a label, the space between the Checkbox and the Label is set to **8px**.
*   **Vertical Spacing**: When checkboxes are stacked vertically, the minimum spacing between items is **16px**.
*   **Scaling**: For spacing greater than 16px, use multiples of 4 (e.g., 20px, 24px, etc.).

### Touch Target
*   **Surface Area**: For better accessibility, the entire area including both the Checkbox icon and its Label should be part of the touch target.
*   **Mobile Consideration**: Ensure sufficient touch target size (at least 40px in height) for mobile environments.

### Do & Don't
*   **Do**:
    - Include the label within the interactive touch target.
    - Maintain consistent alignment and spacing in checkbox groups.
*   **Don't**:
    - Do not use a checkbox for a single binary choice where a Switch (Toggle Button) might be more appropriate for immediate action.
    - Do not separate the checkbox icon too far from its descriptive label.

---

## 9. Divider

### Purpose
*   A visual separator used to distinguish between different sections or groups of content.
*   Helps organize the layout and improve readability by providing clear boundaries.

### Style
*   **Horizontal Divider**: A 1px high line that spans across the container. Used for vertical separation of content blocks.
*   **Vertical Divider**: A 1px wide line that scales to the height of its parent. Used for horizontal separation of items in a row (e.g., menu items, toolbar buttons).
*   **Color**: Uses `var(--border-secondary)` to provide a subtle but discernible separation.

### Spacing & Usage
*   **Spacing**: Dividers should have consistent margins to maintain vertical rhythm.
    - **Default (Medium)**: 16px (`--spacing-400`)
    - **Small**: 8px (`--spacing-200`)
    - **Large**: 32px (`--spacing-800`)
    - **None**: 0px for cases where the parent handle the spacing.
*   **Full Width**: Horizontal dividers should typically be full-width unless specified otherwise by the context.

### Do & Don't
*   **Do**:
    - Use dividers sparingly to avoid over-segmenting the interface.
    - Ensure dividers have enough contrast but do not distract from the main content.
    - Use consistent spacing around dividers within the same page or section.
*   **Don't**:
    - Do not use dividers between items that are already clearly separated by whitespace.
    - Do not use multiple dividers in close proximity without a strong structural reason.

---

## 10. Footer

### Purpose
*   The bottom section of a page providing essential links (e.g., Terms of Use, Privacy Policy) and copyright information.
*   Serves as a global navigational anchor and information point for the brand.

### Anatomy
*   **Links**: A collection of high-level nav links separated by vertical dividers.
*   **Copyright**: Static text denoting legal ownership.
*   **Dividers**: Small vertical lines separating links to improve scannability.

### Responsive Behavior (OS)
*   **PC (Desktop)**:
    - **Layout**: Single row, items spread across the container (`space-between`).
    - **Alignment**: Copyright on the left, Links on the right.
    - **Height**: Fixed at 60px.
    - **Typography**: Label Medium for both links and copyright.
*   **Mobile**:
    - **Layout**: Columnar, items stacked vertically.
    - **Alignment**: Center-aligned links on top, copyright at the bottom.
    - **Padding**: Vertical padding of 32px to ensure touch space.
    - **Typography**: Label Small for links (to fit screen width) and Label Medium for copyright.

### Style
*   **Background**: Uses `var(--bg-primary)`.
*   **Border**: 1px top border using `var(--border-tertiary)` to separate it from the main content.
*   **Content Colors**:
    - **Links**: `var(--content-secondary)` for standard visibility.
    - **Copyright**: `var(--content-tertiary)` for subtle appearance.

### Usage Guidelines
*   **Link Selection**: Only include legally required or essential navigation links.
*   **Visual Hierarchy**: The copyright should be clearly visible but less prominent than the navigation links.
*   **Responsiveness**: Always switch to the Mobile variation on smaller screens to ensure links remain tappable and text doesn't overflow.

### Do & Don't
*   **Do**:
    - Use clear, concise labels for footer links.
    - Maintain consistent padding as defined in the design system.
*   **Don't**:
    - Do not list too many links in the footer, as it can overwhelm the mobile layout.
    - Do not change the background color unless the section requires a distinct thematic break.

---

## 11. Ghost Button

### Purpose
*   A button with no background (container), designed to minimize visual weight.
*   Used for secondary or low-priority actions that shouldn't distract from the main primary action.

### Anatomy
*   **Label**: Clear text describing the action.
*   **Icons (Optional)**: Left or right icons to provide visual context.
*   **Container**: Defines the touch area, corner radius, and interactive state layers.

### Priority System
*   **Primary Ghost**: Uses the brand key color (`var(--content-key)`). Used to support primary actions or provide secondary choices within a primary context.
*   **Secondary Ghost**: Uses a neutral primary color (`var(--content-primary)`). Used for neutral or very low priority actions like "Cancel" or "Close".

### Style
*   **Size**:
    - **xxlarge**: For main page headers (if requested).
    - **xlarge**: 48px height, uses Label Large typography.
    - **large**: 40px height, uses Label Medium typography.
    - **medium**: 32px height, uses Label Medium typography.
    - **small**: 28px height, uses Label Small typography.
*   **State Layer**:
    - **Hover**: 4% opacity overlay (secondary or primary color).
    - **Focused**: 8% opacity overlay + focus ring.
    - **Pressed**: 12% opacity overlay.
    - **Disabled**: Greyscale appearance with reduced opacity.

### Usage Guidelines
*   **Visual Hierarchy**: Combine with a standard Primary Button to maintain a clear hierarchy of operations.
*   **Contrast**: Ensure sufficient contrast against the background.
*   **Clarity**: Use clear labels like "Confirm", "Cancel", "View Details".
*   **Icon Only**: Use only when the meaning is universally understood (e.g., "?", "X").

### Do & Don't
*   **Do**:
    - Use when the UI is already cluttered and a solid button would be too heavy.
    - Maintain consistent padding even without a visible background.
*   **Don't**:
    - Do not use a Ghost Button for the single most important action on a page.
    - Do not place only Ghost Buttons in a group where one action is clearly primary.
    - Do not use ambiguous icons in "Icon Only" mode.

---

## 12. List & Selectable List

### Purpose
*   Used to display information in a consistent, repetitive format.
*   Supports both static information display and interactive selection.

### Variations (Types)
*   **Default**: A simple row with optional thumbnail, title, subtext, and a right-side action (e.g., Ghost Button).
*   **Divider**: Same as default but with a 1px bottom border (`--border-tertiary`) for clear separation in long sequences.
*   **Box**: A standalone item with a surrounding border (`--border-tertiary`) and rounded corners (`12px`). Used to highlight specific items or groups.
*   **Selectable**: Designed for user interaction. Changes background color and font color when selected or hovered.

### Anatomy
*   **Thumbnail**: 52x52px image with 8px corner radius. Includes a subtle outline.
*   **Text Area**: Vertical stack of Title (Body Medium) and Subtext (Body Small).
*   **Right Area**: Slot for secondary actions, typically a Ghost Button or a Chevron icon.
*   **State Layer**: For selectable items, a background overlay is applied on hover (4%), focus (8%), and press (12%).

### Style & States
*   **Box Variation**: Uses `var(--spacing-400)` vertical and `var(--spacing-500)`/`--spacing-400` horizontal padding.
*   **Selection (Selected yes/no)**:
    - **No**: Neutral background (`--bg-secondary`) or transparent.
    - **Yes**: Light blue background (`rgba(15, 98, 254, 0.06)`) with a specialized border color (`#a83deb`).
*   **Disabled**: Lowers opacity of all content and changes background to `--bg-disabled`.

### Usage Guidelines
*   **Consistency**: Use the same type of list item within a single section or list.
*   **Thumbnail Alignment**: Ensure thumbnails are consistently present or absent within a list.
*   **Interactive Area**: For selectable items, the entire row should be clickable.

### Do & Don't
*   **Do**:
    - Use "Box" type when an item needs to stand out as an independent card-like element.
    - Use "Divider" type when the list is long and requires visual aid for scannability.
*   **Don't**:
    - Do not mix different list item types (e.g., box and default) within the same immediate list group.
    - Do not use a Ghost Button on a "Selectable" item if it interferes with the selection interaction.

---

## 13. Progress Indicator

### Purpose
*   Provides visual feedback about the progress of a currently active process or loading state.
*   Helps reduce user anxiety during wait times by communicating that the system is responding.

### Variations (Types)
*   **Bar (Determinate/Indeterminate)**:
    - **Linear Progress**: A horizontal bar that fills as the process approaches completion.
    - **Usage**: Typically used for file uploads, downloads, or multi-step processes where the current position is quantifiable.
*   **Circle (Spinner)**:
    - **Circular Progress**: A spinning element that indicates activity.
    - **Usage**: Used for background loading, API responses, or states where the exact progress is unknown.

### Anatomy & Style
*   **Bar Type**:
    - **Track**: Uses `var(--bg-tertiary)` as the background container.
    - **Fill**: Uses `var(--gradient-primary)` for the moving progress indicator.
    - **Shape**: Fully rounded ends (`var(--radius-full)`).
*   **Circle Type**:
    - **Sizes**:
        - **small**: 20x20px, 2px border width.
        - **medium**: 32x32px, 3px border width.
        - **large**: 40x40px, 4px border width.
    - **Colors**: Uses a combination of `var(--bg-tertiary)` and gradient colors for the spinning effect.

### Usage Guidelines
*   **Context**: Place the indicator near the content it relates to (e.g., inside a button, over a card, or at the top of the page).
*   **Clarity**: For "Bar" types, consider showing a percentage label if it provides valuable information to the user.
*   **Animation**: Ensure the "Circle" type is always animated to indicate it hasn't frozen.

### Do & Don't
*   **Do**:
    - Use the appropriate size based on the layout context. Small circles for inside buttons, large ones for full-page loading.
    - Keep the transition of the "Bar" type smooth.
*   **Don't**:
    - Do not use a "Bar" indicator if the progress cannot be quantified (use a circle spinner instead).
    - Do not keep the indicator visible after the process has completed.

---

## 14. Pagination

### Purpose
*   Navigational element to divide long content into discrete pages.
*   Provides clear feedback on the current position and total scale of the content.

### Variations (Types)
*   **Standard (Numeric)**:
    - Lists page numbers with navigation (Prev/Next).
    - Uses an ellipsis (`...`) for large page counts.
    - **Display Logic**:
        - `Start`: `[1, 2, 3, 4, 5, ..., total]`
        - `Middle`: `[1, ..., 4, 5, 6, ..., total]`
        - `End`: `[1, ..., 96, 97, 98, 99, total]`
*   **Dot (Indicator)**:
    - Used for carousels or image galleries.
    - Simplified visualization for small numbers of pages.
*   **Numbers (Simple)**:
    - `[current / total]` format.
    - Minimal footprint, often for mobile or simple slideshows.

### Anatomy & Style
*   **Item Size**: 32x32px.
*   **Typo**: Body Medium (Regular for items, Bold for current).
*   **Selected State**: Uses `var(--gradient-primary)` for the background and `var(--content-white)` for text.
*   **Interact Layer**: Subtle hover state background (`var(--state-hover-primary)`).
*   **Navigation**: Uses arrows (icons) for previous and next.

### Usage Guidelines
*   **Mobile Support**: On small screens, reduce the number of visible page numbers or switch to a simplified type.
*   **Context**: Place at the bottom center or bottom right of the content list.
*   **Feedback**: Ensure the "Selected" state is immediately obvious.

### Do & Don't
*   **Do**:
    - Ensure the total number of pages is correct and updated.
    - Use the dot indicator for small, less-critical lists.
*   **Don't**:
    - Do not show more than 7 total elements (including ellipsis) to keep the list concise.
    - Do not show navigation buttons if there is only 1 page.

---

## 15. Page Indicator

### Purpose
*   Used primarily in carousels or media cards to show the current position and total page / slide count.
*   Often overlayed on top of images or content to provide subtle context.

### Variations (Types)
*   **Dot**: 
    - Simplified display for small numbers of pages.
    - **Over 6 Pages**: Mimics a carousel-style indicator where the dots at the edges shrink to indicate a longer range.
*   **Numbers**: 
    - Displays `[current/total]` on a semi-transparent dark pill-shaped background.
    - Best for clear legibility on complex backgrounds.

### Style & Anatomy
*   **Numbers Container**: Uses `var(--background-accent)` with 50% opacity (or slightly solid) and `var(--radius-full)`.
*   **Dots**: 5x5px in diameter for standard dots. Shrinks to 3x3px (medium) and 2x2px (small) for edge dots in 'over 6 pages'.
*   **State**: Active dot uses `var(--content-key)`. Inactive uses `var(--border-tertiary)`.

### Difference from Pagination
*   **Pagination**: Formal navigation with interactive buttons (numeric or dots). Used at the bottom of lists.
*   **Page Indicator**: A static or highly simplified indicator, often without direct interaction (managed via slide swipes).

### Usage Guidelines
*   **Context**: Place at the bottom center of a card or overlayed in a corner for number indicators.
*   **Responsive**: Keep the count manageable. For more than 10-20 items, consider using the "Numbers" type or a different navigation pattern.

### Do & Don't
*   **Do**:
    - Use "Numbers" type when overlayed on high-detail images where dots might be hard to see.
    - Maintain consistent alignment for all indicators in a single view.
*   **Don't**:
    - Do not use a Page Indicator for high-stakes navigation like site-wide search results (use Pagination).
    - Do not show more than 7-9 total dots to avoid clutter.

---

## 16. Radio Button

### Purpose
*   Used to select a single option from a set of mutually exclusive choices.
*   Once a radio button is selected, clicking it again does not deselect it (another option must be selected).

### Anatomy
*   **Radio Circle**: A 20x20px circle with a 1px border.
*   **Selection Dot**: A 12x12px solid circle in the center.
*   **Label**: Title text next to the radio circle (8px gap).

### Style & States
*   **Active (Selected)**: The center dot is visible (`var(--content-key)`).
*   **Inactive**: The center dot is hidden (scale 0). Border is `var(--border-primary)`.
*   **Interact Layer**:
    - **Hover**: 4% opacity over the circle area.
    - **Focus**: 8% opacity + focus ring.
    - **Press**: 12% opacity.
*   **Disabled**: 
    - Circle background: `var(--background-disabled)`.
    - Border/Dot: `var(--content-disabled)`.

### Usage Guidelines
*   **Grouping**: Always use multiple radio buttons together (at least two) as a set.
*   **Labeling**: Ensure labels are concise and descriptive.
*   **Alignment**: Align radio buttons vertically for better scannability.

### Do & Don't
*   **Do**:
    - Use for exclusive selection.
    - Keep the "Selected" state clearly distinct from "Inactive".
*   **Don't**:
    - Do not use for multiple selections (use Checkbox instead).
    - Do not use for "on/off" states (use Toggle Button or Checkbox).

---

---

## 17. Message

### Purpose
*   Used for exchanging information in a chat or AI assistant interface.
*   Supports different roles (User, AI) and content types (Text, Image).

### Variations & Roles
*   **User Message**: 
    - **Background=off**: Shows the user's avatar followed by the message text. Aligned to the left (or right based on specific context, here default to left-aligned start).
    - **Background=on**: Shows the message in a bubble (`var(--background-neutral)`) aligned to the right. 
    - **Type**: Supports text or image (thumbnail).
*   **AI Message**:
    - **Background=off**: Shows the AI avatar and name followed by the message block.
    - **Background=on**: Shows the message in a white bubble with a border.
    - **State**: Includes a `loading` state with a progress indicator for real-time responses.

### Style & Anatomy
*   **Bubble**: 16px border radius (`var(--radius-400)`). User bubbles have 16% opacity blue background (`var(--background-neutral)`).
*   **Typography**:
    - AI Name: Label Bold Medium.
    - Message Text: Body Large Regular (`var(--font-size-100)`).
*   **Avatar**: User and AI avatars are 32x32px (Medium) for default views.
*   **Loading**: Uses a circular progress indicator with a gradient text effect.

### Usage Guidelines
*   **Hierarchy**: AI messages should be clearly distinguishable from user inputs.
*   **Structure**: Supports complex markdown-like structures (titles, ordered lists, bullet lists) within the AI response block.
*   **Responsiveness**: 
    - PC width: 588px.
    - Mobile width: 358px.

### Do & Don't
*   **Do**:
    - Use the loading state while the AI is computing a response.
    - Ensure clear distinction between "Bubble" mode and "Default" mode based on the app's overall chat design.
*   **Don't**:
    - Do not use User/AI messages for system notifications (use Badge or a dedicated Toast component).
    - Do not overcrowd the message bubble with too much text without proper formatting (lists, paragraphs).

---

## 18. Message Action Bar

### Purpose
*   A utility bar located below AI messages to gather feedback or perform quick actions (Redo, Copy).

### Variations (Types)
*   **Full**: Shows Like (Good), Dislike (Bad), Redo, and Copy buttons.
*   **Feedback**: Shows only Like (Good) and Dislike (Bad) buttons.

### Anatomy & Style
*   **Container**:
    - Background: `var(--background-elevated-1)` (usually white).
    - Border: 1px `var(--border-tertiary)`.
    - Radius: `var(--radius-full)` (Pill shape).
    - Shadow: Subtle shadow (`var(--shadow-small)`) to indicate elevation.
*   **Buttons**:
    - Fixed Size: 32x32px.
    - Icon Size: 20x20px.
    - Transition: Subtle background color change on hover/press (`var(--state-hover-secondary)`).
*   **Dividers**: Small 1px vertical lines between buttons for visual separation.

### Usage Guidelines
*   **Placement**: Positioned directly below the `AI Message` block, aligned to the start (left).
*   **Interaction**: Buttons provide instant visual feedback on selection (e.g., Good/Bad toggle).
*   **Icon Rotation**: The "Dislike (Bad)" button defaults to a 180-degree rotation of the "Like (Good)" icon.

### Do & Don't
*   **Do**:
    - Use the `Full` type for standard AI responses to provide all utility options.
    - Use the `Feedback` type for shorter or interim AI responses where only relevance matters.
*   **Don't**:
    - Do not add text labels to these buttons to keep the bar compact.
    - Do not use more than 5 buttons in a single bar to avoid clutter.

---

## 19. Scrim (Overlay)

### Purpose
*   A background layer that dims the underlying content to focus a user's attention on a modal or temporary overlay.
*   Provides a visual cue that the content behind it is currently inactive.

### Style & Anatomy
*   **Color**: Semi-transparent black (`rgba(0, 0, 0, 0.48)`).
*   **Layering**: High `z-index` to cover most of the page's UI.
*   **Transition**: Use a subtle fade-in effect (`opacity: 0` to `opacity: 1`).

### Usage Guidelines
*   **Close on Click**: In many cases, clicking the scrim should close the top-level overlay (Modal, Bottom Sheet).
*   **Context**: Essential for any blocking interaction that requires user input (Dialogs, Bottom Sheets).

### Do & Don't
*   **Do**:
    - Use when the user's primary path is distracted by a new overlay.
    - Ensure it is truly full-screen to block interaction elsewhere.
*   **Don't**:
    - Do not use for "Toasts" or "Snackbars" that are non-blocking.
    - Do not use a scrim for tooltips that are triggered by hover.

---

## 20. Switch (Toggle)

### Purpose
*   Used to toggle a single setting or feature on or off.
*   Provides a binary choice with an immediate visual effect (track background and thumb position).

### Style & Anatomy
*   **Dimensions**: 36px (width) x 20px (height).
*   **Track**: 
    - **Off**: Background uses `var(--background-tertiary)`.
    - **On**: Background uses `var(--background-key)`.
*   **Thumb**: White (`var(--content-inverted)`), sized at 16x16px to fit within the track's 100px radius.
*   **Transition**: Use a smooth 0.2s transition for both the track's background color and the thumb's movement.

### States
*   **Hover**: Shows a subtle overlay on the track (`var(--state-hover-primary)` when off, `var(--state-hover-secondary)` when on).
*   **Focus**: A clear 2px focus ring (`var(--border-key)`).
*   **Disabled**: Uses `var(--background-disabled)` with a white thumb.

### Usage Guidelines
*   **Binary Settings**: Best used for standalone settings (e.g., "Mute Notifications", "Dark Mode").
*   **Labeling**: Pair with a clear Label (`Body Medium`) explaining the action or state.

### Do & Don't
*   **Do**:
    - Use for actions that take effect immediately without requiring a "Save" button.
    - Maintain a consistent pill-shaped look across all devices.
*   **Don't**:
    - Do not use for multiple selections (use Checkbox instead).
    - Do not use for "exclusive choice" between three or more options (use Radio Button or Segmented Control).

---

## 21. Score (Rating)

### Purpose
*   Used to display numerical scores or star ratings for products, services, or reviews.
*   Provides a quick visual summary of user feedback.

### Variations (Types)
*   **Default**: Shows a 5-star set along with leading numeric scores and trailing counts.
*   **Simple**: Shows only a single star icon alongside numeric scores and counts. Best for compact layouts (e.g., product lists).

### Style & Anatomy
*   **Sizes**: 
    - **Medium**: 20x20px stars.
    - **Small**: 16x16px stars.
*   **Colors**: Star icons use `var(--content-key)` to stand out.
*   **Typography**: Score (Leading) and Count (Trailing) use `Body Small` (`var(--font-size-075)`).
*   **Leading/Trailing Content**: Numeric scores (e.g., 5.0) can be shown leading, and review counts (e.g., 999) trailing.

### Usage Guidelines
*   **Consistency**: Keep the numeric score precision consistent (e.g., one decimal place: 4.8, 5.0).
*   **Placement**: Often used within cards or product details right below titles.

### Do & Don't
*   **Do**:
    - Use half-star representations for more accurate fractional ratings in Default type.
    - Maintain consistent sizing across similar UI areas.
*   **Don't**:
    - Do not show more than 5 stars for standard ratings.
    - Do not use stars for "AI Confidence" unless it directly represents a user-facing review score.

---

## 22. Tab

### Purpose
*   Used to organize and navigate between related content groups or views at the same level of hierarchy.
*   Provides a high-level categorized navigation within a page or a specific section.

### Variations (Types)
*   **Fixed**: Distributed evenly across the available width. Ideal for scenarios with few tabs (e.g., 2-4 items).
*   **Flexible**: Content-based width per tab. Best for many tabs (e.g., 5+ items) or when horizontal scrolling is allowed on mobile.

### Emphasis
*   **Default**: Features a bold **2px gradient underline** indicator (`linear-gradient(90deg, #a83deb, #3083fd)`) for the selected state. Best for main page categories.
*   **Subtle**: Features a thinner **1px solid black** indicator (`var(--content-primary)`) for the selected state. Best for nested or secondary navigation.

### Style & Anatomy
*   **Height**: 48px fixed height.
*   **Label**: Uses `Label Bold Medium` (`var(--font-size-0875)`) font. 
*   **Selection Logic**: 
    - Selected: Text is full contrast (`var(--content-primary)`) + Underline indicator.
    - Unselected: Text is secondary contrast (`var(--content-secondary)`) with no indicator.
*   **Badges**:
    - **Numeric Badge**: Small rounded pills with gradient backgrounds for counts.
    - **Dot Badge**: Small red dots for notifications or unread updates.

### Usage Guidelines
*   **Responsiveness**: On mobile, use `Flexible` tabs to gracefully handle many categories via horizontal scrolling.
*   **Hierarchy**: Keep tab labels concise (usually 1-2 words).

### Do & Don't
*   **Do**:
    - Use tabs for switching views without reloading the page.
    - Ensure the selected tab is always visually prominent.
*   **Don't**:
    - Do not use tabs as a substitute for primary navigation (Global headers).
    - Do not nest tabs deep within each other (limit to one level of nesting if possible).

---

## 23. Tag

### Purpose
*   Used to categorize content or display metadata (e.g., status, category, attributes) in a compact form.
*   Provides subtle visual cues for fast scanning without the weight of a full button.

### Variations (Styles & Priorities)
*   **Solid**:
    - **Secondary**: High contrast (`background-accent`), white text. Used for strong emphasis.
    - **Tertiary**: Low contrast (`background-secondary`), generic category labeling.
*   **Gradient**:
    - **Primary**: Bold brand gradient background. Used for AI features or featured items.
    - **Secondary**: Light/tinted brand gradient background. Subtle brand association.
*   **Outline**:
    - **Primary**: Gradient border. High-end look for important attributes.
    - **Secondary**: Standard border (`border-primary`). Clean and neutral.

### Style & Anatomy
*   **Sizes**:
    - **Medium**: 24px height. Label uses `Label Bold Small` (12px).
    - **Small**: 20px height. Label uses `Label XSmall` (11px).
*   **Shapes**:
    - **Rectangle**: 4px radius (`radius-100`).
    - **Circle**: Pill-shaped 100px radius (`radius-full`).
*   **Icon**: Supports a leading icon (16px for medium, 12px for small) for richer context.

### Usage Guidelines
*   **Non-Interactive**: Tags are generally read-only metadata. If action is required, consider using `Chip` or `Button`.
*   **Layout**: Often appear in groups with a small gap (`2px` or `4px`) within cards or detail headers.

### Do & Don't
*   **Do**:
    - Use tags for keywords that help users filter or identify content types.
    - Match tag style to the importance of the metadata (e.g., "Best Seller" gets Primary Gradient).
*   **Don't**:
    - Do not use tags as the primary "Add to Cart" or "Buy" interaction points.
    - Do not use more than 2 lines of text inside a tag; keep it concise (1-2 words).

---

## 24. Tooltip

### Purpose
*   Used to provide brief, contextual information when a user hovers over, focuses on, or clicks an element.
*   Helps explain complex icons, settings, or truncated text without cluttering the main UI.

### Variations (Positions)
*   **Top**: Appears above the anchor element. This is the default position.
*   **Bottom**: Appears below the anchor element. Used when space above is restricted.

### Style & Anatomy
*   **Floating Container**: 
    - Width: Fixed at 314px (as per Figma).
    - Background: `var(--background-floating-1)` (usually white).
    - Border: 1px gradient border (often simplified to brand color in CSS).
    - Shadow: `drop-shadow(0 2px 8px rgba(0, 0, 0, 0.16))`.
*   **Arrow/Pointer**: A small triangular indicator pointing towards the anchor element.
*   **Close Button**: An optional "X" button (Ghost Button) to dismiss the tooltip manually.

### Typography
*   **Title**: Label Bold Medium (`var(--font-size-0875)`).
*   **Body Text**: Body Medium Regular (`var(--font-size-0875)`).

### Usage Guidelines
*   **Trigger**: Usually triggered on `hover` (desktop) or `long-press/click` (mobile).
*   **Conciseness**: Keep the content short and helpful. If more than 3-4 lines are needed, consider using a Modal or a dedicated info page.
*   **Z-index**: Should appear above most other content (except Scrim and Modals).

### Do & Don't
*   **Do**:
    - Use when the information is helpful but not critical for the task flow.
    - Ensure the arrow points exactly to the related UI element.
*   **Don't**:
    - Do not use for critical error messages (use Inline Alerts instead).
    - Do not overcrowd with too many interactive elements inside the tooltip content.

---

## 25. Text Input

### Purpose
*   Used to gather text-based user input in a single line.
*   Provides clear visual feedback for various interaction states (focus, typing, error).

### Variations & States
*   **Enabled**: Default state. Displays a pen icon and placeholder text.
*   **Focused**: Active state when clicked. Border changes to brand gradient (`#a83deb`).
*   **Typing**: Ongoing input state. Shows a "clear" button (`cross-circle-solid`) on the right.
*   **Typed**: Filled state after losing focus. Solid neutral border.
*   **Error**: Validation failure state. Border changes to alert red (`var(--border-alert)`).
*   **Disabled**: Read-only/inactive state. Greyed out background and text.

### Style & Anatomy
*   **Dimensions**: 390px width, 40px height.
*   **Radius**: 8px (`var(--radius-200)`).
*   **Typography**: Body Regular Medium (`var(--font-size-0875)`).
*   **Icons**:
    - **Left**: Pen icon (20px) shown in Enabled state to hint at "Editable".
    - **Right**: Clear icon (24px) shown in Typing state for quick reset.

### Usage Guidelines
*   **Placeholders**: Use helpful, instructional text (e.g., "Enter search term...").
*   **Feedback**: Always provide an error state with an accompanying message (if applicable) when validation fails.

### Do & Don't
*   **Do**:
    - Ensure the cursor color matches the brand accent in Focused/Typing states.
    - Keep inputs consistent in size across the same form.
*   **Don't**:
    - Do not use more than one pen icon inside the input.
    - Do not hide the clear button while the user is actively typing.

---

## 26. Toast

### Purpose
*   Used to provide brief feedback or notifications about an operation (e.g., success, error, or warning).
*   Typically appears temporarily at the bottom or top of the screen and then disappears.

### Variations (Types)
*   **Info**: General system notifications or updates.
*   **Success**: Positive feedback for completed actions (e.g., "Saved successfully").
*   **Warning**: Cautions about potential issues or non-critical errors.
*   **Error**: Alerts for failed actions or critical system issues.

### Style & Anatomy
*   **Dimensions**: Width is fixed at 360px (mobile-friendly).
*   **Background**: Uses `var(--background-floating-1)` (usually white) with a subtle border and shadow.
*   **Shadow**: `0 2px 8px rgba(0, 0, 0, 0.16)`.
*   **Icon**: Leading icon (20px) colored based on the toast type (Info: Blue, Success: Green, Warning: Yellow, Error: Red).
*   **Action Button**: Optional text-only button on the right for quick interactions (e.g., "Undo" or "View").

### Typography
*   **Title**: Label Bold Medium (`var(--font-size-0875)` / 14px).
*   **Description**: Body Medium Regular (`var(--font-size-0875)` / 14px).

### Usage Guidelines
*   **Placement**: On mobile, usually positioned 16-24px from the bottom edge. On desktop, often at the top-right or bottom-left.
*   **Interaction**: Toasts should not block user interaction but provide clear visibility.
*   **Stacking**: If multiple toasts occur, stack them vertically with an 8px gap.

### Do & Don't
*   **Do**:
    - Keep toast messages short (1-2 sentences).
    - Use clear and descriptive button labels if an action is available.
*   **Don't**:
    - Do not use toasts for information that requires permanent visibility or complex interaction.
    - Do not obscure primary navigation elements (like bottom bars) with toast messages.

---

## 27. Thumbnail

### Purpose
*   Used to display images (product previews, category icons, or media) in consistent aspect ratios.
*   Provides a standardized container for various media types to ensure layout stability.

### Variations (Aspect Ratios)
*   **1:1 (Square)**: Best for single product items or user avatars.
*   **4:3**: Traditional photo ratio, good for generic imagery.
*   **3:2**: Standard photography ratio.
*   **16:9 (Widescreen)**: Best for banners, videos, or landscape hero images.

### States & Options
*   **States**:
    - **Image**: Displays the provided source image.
    - **Empty**: Displays a generic placeholder icon (usually an "image" symbol) when no source is available.
*   **Cropping**:
    - **Cropped (Cover)**: The image fills the entire container, potentially cutting off edges.
    - **Not Cropped (Contain)**: The entire image is visible within the box, with background padding if necessary.
*   **Gradation**: An optional dark gradient overlay at the bottom to improve the legibility of text placed on top.
*   **Outline**: A subtle 1px border (`var(--border-tertiary)`) to define edges on light backgrounds.

### Style & Anatomy
*   **Background**: Uses `var(--background-secondary)` for empty states or padded areas.
*   **Border Radius**: Most thumbnails follow a 4px or 8px radius depending on the parent container (e.g., within a card).

### Usage Guidelines
*   **Consistency**: Use the same aspect ratio for all thumbnails in a single horizontal list or grid.
*   **Loading**: Provide a placeholder state while high-res images are being fetched.

### Do & Don't
*   **Do**:
    - Use `Not Cropped` if the product's full shape is critical (e.g., jewelry, electronics).
    - Use `Cropped` for lifestyle imagery where the atmosphere is more important than specific details.
*   **Don't**:
    - Do not use random aspect ratios that break the grid alignment.
    - Do not use high-contrast outlines that distract from the image content.

---

## 28. AI Background

### Purpose
*   Used to create a immersive and branded visual identity for the AI assistant interface.
*   Provides a distinct background that differentiates the AI chat area from standard UI sections.

### Variations (Modes)
*   **Light Mode**: Features soft, light-colored abstract gradients (blue/purple tints) on a white base.
*   **Dark Mode**: Features deeper, high-contrast gradients on a dark grey/black base (`#17181a`).

### Style & Anatomy
*   **Full Screen**: Designed to cover the entire viewport height (e.g., 390x844px for phone screens) or specific containers.
*   **Decorative**: Purely visual; should be placed in the background (`z-index: -1`) and ignored by screen readers (`aria-hidden: true`).
*   **Implementation**: Uses high-quality background images with `object-fit: cover` to maintain visual integrity across different screen sizes.

### Usage Guidelines
*   **Layering**: Ensure that all interactive components (buttons, input fields, message bubbles) have sufficient contrast against the background patterns.
*   **Consistency**: Match the background mode (Light/Dark) to the user's system preferences or the app's current theme setting.

### Do & Don't
*   **Do**:
    - Use this background specifically for the "AI Chat" or "AI Agent" experience area.
    - Set the container to `overflow: hidden` to prevent background scroll issues.
*   **Don't**:
    - Do not place important text directly on highly busy parts of the background without a supporting scrim or bubble.
    - Do not use this background for standard product lists or settings pages.

---

## 29. Top Navigation (Header)

### Purpose
*   Provides global navigation, context (page title), and common actions (settings, user profile) at the top of the interface.
*   Ensures a consistent structure for users to navigate back or access high-level menus.

### Variations (OS & Layout)
*   **Mobile Mode**:
    - **Center Aligned**: The title is centered. Usually paired with a back button on the left and a menu/info icon on the right.
    - **Left Aligned**: The title sits on the left, immediately following the back button.
*   **PC Mode**: 
    - Optimized for wider screens (max-width 1280px).
    - Features a larger title on the left and multiple text buttons/navigation links.
    - Right side contains user profile (Avatar) and system status icons.

### 29.1 System Status Bar (Mobile-specific)
A required element for mobile templates that simulates the native OS status bar.
*   **Anatomy**: Time (left), Cellular/Wifi/Battery levels (right).
*   **Aesthetics**: 54px height, transparent or matching background, SF Pro semi-bold text.
*   **Purpose**: Enhances the realism of mobile UI prototypes and provides consistent vertical spacing.

### Style & Anatomy
*   **Dimensions**:
    - Mobile Height: 52px.
    - PC Height: 60px.
*   **Border**: 1px solid bottom border (`var(--border-secondary)`) to separate from content.
*   **Z-index**: Should be `sticky` at the top of the viewport to remain accessible while scrolling.

### Typography
*   **Mobile Title**: Label Bold Large (`var(--font-size-100)` / 16px).
*   **PC Title**: Title Bold XSmall (`var(--font-size-112)` / 18px).

### Usage Guidelines
*   **Truncation**: Always use `text-overflow: ellipsis` for titles that exceed the available width to prevent layout breaking.
*   **Spacing**: Maintain a consistent 16px (Mobile) or 24px (PC) padding on both sides.
*   **Sticky Behavior**: Ensure the header stays fixed at the top of the screen (`position: sticky`).

### Do & Don't
*   **Do**:
    - Use the `chevron-left` icon for back navigation.
    - Use the `bars-solid` (Burger menu) icon for hidden navigation drawers.
*   **Don't**:
    - Do not overcrowd the mobile header with more than 3 icons on the right.
    - Do not change the header's height dynamically during scrolling (keep it stable).

---

## 30. Template: AI Suggestion Chips

### Purpose
*   Used to present AI-generated recommendations, prompts, or follow-up questions to the user.
*   Encourages user interaction by providing ready-made queries or categories.

### Layout Variations
*   **Carousel**: Horizontal scrolling list of compact chips. Ideal for limited vertical space (e.g., above the input bar).
*   **Card (Compact/Description)**: Vertical stack of larger containers. 'Description' mode includes a subtitle and a right-arrow to hint at further details.
*   **List (Tag/Icon/Title)**: 
    *   **List Tag**: Each item starts with a colorful tag (e.g., "Promotion", "New").
    *   **List Icon**: Each item starts with a directional icon (e.g., `arrow-turn-down-right`).
    *   **List Title**: A structured list starting with a bold header.
*   **Group Icon**: Horizontal pills containing an icon and text, often used for major feature categories (e.g., "AI Shopping").

### Style & Anatomy
*   **Container**: Usually white background with a very subtle border (`var(--border-tertiary)`).
*   **Border Radius**: 
    - Full round (100px) for simple list/group chips.
    - 24px for standard suggestion chips.
    - 16px for card-like structures.
*   **Typography**:
    - **Header**: Label Bold Large (16px).
    - **Main Text**: Body Medium Regular (14px).
    - **Subtitle**: Matches Main Text color but often uses secondary content tokens.

### Usage Guidelines
*   **Relevance**: Only show suggestions that are contextually relevant to the current conversation state.
*   **Responsiveness**: Ensure horizontal carousels handle touch-swipe and mouse-scroll gracefully.
*   **Contrast**: Maintain high contrast between the chip background and the text/icons.

### Do & Don't
*   **Do**:
    - Use clear, action-oriented language (e.g., "Find coffee shops nearby" instead of just "Coffee").
    - Provide at least 3-5 suggestions in a carousel to invite exploration.
*   **Don't**:
    - Do not overflow the screen with too many variations in a single view.
    - Do not hide the "Clear" or "Refresh" functionality if the suggestions aren't helpful.

---

## 31. Template: AI Text Input (Input Bar & System)

### Purpose
*   A comprehensive input area at the bottom of the screen that combines text input, AI-specific actions, legal disclaimers, and system-level indicators (OS home line).
*   Acts as the primary interface for users to interact with the shopping AI agent.

### Variations (Mode & Type)
*   **Default**: A single-line input field with a 'plus' button on the left for additional attachments/actions.
*   **Login Button**: Replaces the 'send' icon with a 'Login' button when the user is not authenticated but tries to interact.
*   **Multiline**: A larger textarea-based input for long queries, providing more vertical space.
*   **Background (On/Off)**: 
    - **On**: Uses a solid white background, typically used when floating over content or as a fixed footer.
    - **Off**: Transparent background, used when integrated directly into a specific layout block.

### Style & Anatomy
*   **Input Box**: 
    - Full round (100px) for single-line.
    - 24px radius for multiline.
    - 1px border (`var(--border-accent)`).
*   **Buttons**:
    - **Send Button**: 32x32px circular button with a vibrant gradient background.
    - **Login Button**: 32px height rounded button with a gradient background and bold text.
*   **Footer (Disclaimer)**:
    - Contains small (12px) tertiary text.
    - Linked text ("Guidelines", "mybest") uses a specific blue color (`#0f62fe`).

### Usage Guidelines
*   **Placeholder**: Use welcoming language like "なんでも聞いてください" (Ask anything).
*   **States**: The send button should be disabled when the input is empty.
*   **OS Integration**: Always include the 'Home Indicator' bar at the bottom for iOS-style mobile designs to ensure safe-area compliance.

### Do & Don't
*   **Do**:
    - Ensure the footer text is readable but unobtrusive.
    - Animate the transition between single-line and multiline if possible.
*   **Don't**:
    - Do not hide the AI disclaimer; it is legally/functionally required for AI products.
    - Do not place important UI elements directly under the OS Home Indicator bar.

---

## 32. Template: Bottom Button (Fixed Action Bar)

### Purpose
*   Standardized container for critical user actions located at the bottom of the screen.
*   Ensures that call-to-action (CTA) buttons are consistently placed and accessible.

### Layout Variations
*   **Single**: One primary button stretching across the width.
*   **Horizontal (2 buttons)**: Two buttons side-by-side. Usually a secondary action on the left and a primary action on the right.
*   **Vertical (2 or 3 buttons)**: Buttons stacked vertically. Typically used when actions have long labels or have equal importance (e.g., selection lists).
*   **Home Indicator Integration**: Always accounts for the iOS-style home bar space in mobile views.

### Style & Anatomy
*   **Button Height**: Consistent 56px (`var(--sizing-1400)`) for high touch targets.
*   **Primary Style**: Gradient background (`var(--gradient-background-stop-1)` to `stop-2`) with white text.
*   **Secondary Style**: Outline version (`var(--border-secondary)`) with primary content color.
*   **Safe Area**: Bottom padding of 21px reserved for OS navigation indicators.

### Usage Guidelines
*   **Hierarchy**: The most important action (e.g., "Confirm", "Search") must always use the `Primary` gradient style.
*   **Spacing**: Maintain an 8px gap between buttons in all layouts.
*   **Sticky Position**: Typically used as a `fixed` or `sticky` footer that stays anchored during scrolling.

### Do & Don't
*   **Do**:
    - Use clear, verb-driven labels (e.g., "Apply Coupons").
    - Group related actions together in a vertical stack if they share similar priority.
*   **Don't**:
    - Do not use more than 3 buttons in the bottom area; move excess actions to a menu or separate screen.
    - Do not hide the primary action behind a secondary one in horizontal layouts.

---

## 33. Template: Bottom Sheet (Drawer & Modal)

### Purpose
*   A modal-like container that slides up from the bottom of the screen.
*   Used for selecting options, detailed information, or multi-step tasks without losing page context.

### Variations (Mode & Type)
*   **Default**: Includes a header, a scrollable content area, and a fixed bottom action area.
*   **Header Only**: Used as a compact header or entry point that can be expanded or closed immediately.

### Style & Anatomy
*   **Handlebar**: A small horizontal bar (`36x5px`) at the top center to indicate draggable behavior.
*   **Header**: 
    - Fixed height of 48px (excluding handlebar).
    - Features a bold title (`var(--font-size-100)`) and optional icons or ghost buttons for actions (Confirm/Cancel).
*   **Radius**: Top corners have 12px radius (`var(--radius-300)`) to soften its appearance over content.
*   **Overlay**: Should be paired with a semi-transparent background (dimmer) to focus user attention.

### Usage Guidelines
*   **Height**: Standard height for default mode is 461px, but should be flexible for different content types. Avoid exceeding 90% of viewport height.
*   **Interaction**: Implement a "handlebar" to hint at swiping down to close. Clicking the overlay should also trigger the close action.
*   **Buttons**: The primary "Bottom Button" inside the sheet should use the brand gradient (`Primary` style).

### Do & Don't
*   **Do**:
    - Use clear and concise titles in the header.
    - Keep content focused; if the task is too complex, consider a full-screen page.
*   **Don't**:
    - Do not forget the iOS 'Home Indicator' safe area in the footer.
    - Do not use a Bottom Sheet for quick confirmations (use a Dialog or Toast instead).

---

## 34. Template: Media Card (Product & Info Display)

### Purpose
*   A versatile card used to display products, reviews, or informational content.
*   Optimized for showing a balance of visual media (images) and rich metadata (AI scores, ratings).

### Layout & Variations
*   **Media Size (Medium/Large)**: Controls the prominence of the image. Medium often uses a side-by-side layout, while Large uses stacked.
*   **AI Match Score**: A specialized variant for AI-driven recommendations, featuring a circular graph and percentage.
*   **Info Grid**: Displays key attributes or features (e.g., "Breathability", "Grip") with icons for quick scanning.
*   **Selected State**: Highlighted with a primary color border (`var(--border-key)`) to indicate user selection.

### Style & Anatomy
*   **Container**: 16px radius (`var(--radius-400)`), white elevated background, and 1px subtle border.
*   **Title**: Bold 16px text. Use ellipsis for long titles to preserve layout integrity.
*   **Rating**: Uses a consistent star-rating system with 5 increments.
*   **Gradient Text/Graphs**: Use the brand gradient for AI-specific metrics (like the Match Score value).

### Usage Guidelines
*   **Scannability**: Limit the number of "Info Grid" items to 4 to avoid clutter.
*   **Consistency**: When displaying products in a list, ensure all cards use the same variation (e.g., all "Medium" with "AI Score").
*   **Interactive**: The entire card area should be clickable if it leads to a detail page.

### Do & Don't
*   **Do**:
    - Use high-quality thumbnails that fill the media area.
    - Animate the `selected` state transition for a premium feel.
*   **Don't**:
    - Do not cram too much text into the subtitle; let the "Meta" and "Rating" rows handle the details.
    - Do not use ad-hoc colors for the match score; always use the defined design tokens.

---

---

## 35. Template Group: Card

All card-based templates are located in the `/Templates/Card` directory to maintain visual consistency and shared logic.

### 35.1 Base Card (Data & Status)
*   **Purpose**: Used to display specific data points, status, or summarized metrics.
*   **Anatomy**: Features a primary figure (up to 56px) for maximum impact.
*   **Variations**: Low, Medium, and High detail levels.

### 35.2 Review Card
*   **Purpose**: Designed for user-generated content and social proof.
*   **Anatomy**: Includes store info, user ratings (stars), and a media carousel of user photos.
*   **Clamping**: Review text is clamped to 3 lines to maintain uniform card heights.

### 35.3 List Card
*   **Purpose**: Aggregates multiple related items into a single container.
*   **Anatomy**: Consists of a header (badge/title), optional gallery, and a list of `ListItem` components.
*   **Usage**: Ideal for "Top Features" or "Related Items" summaries.

---

---

## 36. Template Group: Interaction Card

These cards are specifically designed for the AI Agent's interactive flows, such as questioning, displaying choices, and confirming selections. They feature a specialized **AI Gradient Background** to distinguish them from static information cards.

### 36.1 Choice Result Card
*   **Purpose**: A hybrid card that can show both filtering questions and the resulting recommendations.
*   **Aesthetics**: Uses an AI gradient overlay (`#A83DEB` to `#3083FD` at low opacity) to indicate active AI computation or presence.
*   **Behavior**:
    - **Choice Mode**: Focuses on user selection with large chips.
    - **Result Mode**: Shows an animated count of found items and a horizontal carousel of results.

### 36.2 Question Card
*   **Purpose**: Standardizes the "Asking" phase of the user journey.
*   **States**:
    - **Expanded**: Shows all options (Chips or List) for the current step.
    - **Collapsed**: Used for a "Completed" step, showing only the question and the user's previous selection to save vertical space.
*   **Status Indicators**: Uses success or incomplete icons/colors to show the status of the flow.

### 36.3 Selection Card
*   **Purpose**: Highlights a single item that the user has selected or the agent is recommending as the primary choice.
*   **Anatomy**: 
    - **Thumbnail**: A large 80x80 container with an 8px corner radius.
    - **Content**: Displays a title, a subtitle (often used for date or secondary metadata), and a row of Badges.
    - **Status Overlay**: A check-circle icon appears in the top-right corner when in the `selected` state.
*   **Aesthetics**: 
    - **Active State**: Uses a 2px solid border with `var(--content-key)` to clearly define the active choice.
    - **Background**: Integrated within the `Interaction Card` family, often placed inside containers with AI gradients.

### 36.4 Result Pattern
*   **Purpose**: A core layout component for displaying AI recommendation results. It allows switching between discovery (Carousel) and comparison (List) modes.
*   **Variations**:
    - **Carousel Type**: Optimized for quick browsing with a horizontal scroll and page indicators (dots).
    - **List Type**: Optimized for comparing details vertically.
    - **Media Sizes**:
        - `large`: Features primary product info, price, and ratings (Used in MediaCard).
        - `medium`: Compact view with brand and title.
        - `small`: Horizontal list item with a 60x60 thumbnail.
        - `none`: Text-only list item.

### 36.5 Refined Interaction Elements
*   The components within this template group (Buttons, Chips) are optimized with **State Layers**—absolute overlays that manage hover and active states independently of the base background.
*   **Color Logic**: Always use `var(--content-key)` for active selections and `var(--gradient-border-stop-1)` for the emphasized borders of interactive elements.

---

## 37. Card Expand (Utility)

A utility component used to toggle the visibility of extended content within various card types without navigating away from the current view.

### Purpose
*   **Default Type**: Used as a standalone footer or block-level trigger to reveal more details (e.g., in a review card or product description).
*   **Inline Type**: Integrated directly within a text flow, typically truncating long descriptions with an ellipsis followed by a "View more" trigger.

### Anatomy
*   **Ghost Button**: Uses a low-emphasis interaction style (`var(--content-key)` text, 4px radius).
*   **Icon**: Typically uses `chevron-up_solid` or `chevron-down_solid`.
*   **Label**: Standardized labels like "詳細を見る" (View details) and "閉じる" (Close).

### Types & States
*   **Default**: Block-level, center-aligned trigger.
*   **Inline**: Suffix trigger for truncated text.
*   **States**: Managed via an `expand` boolean prop.

### Usage Guidelines
*   **Consistency**: Always use the defined height (32px) and labels to maintain a familiar mental model for the user.
*   **Animation**: For a premium feel, ensure the revealed content has a smooth transition rather than an abrupt jump.

---

## 38. Carousel & More Button

The Carousel is a horizontal display pattern used to browse related content (images, products, reviews) efficiently within limited vertical space.

### 38.1 Carousel
*   **Purpose**: Aggregates items of the same type (Review, Media, List) into a scrollable row.
*   **Types**:
    - **Gallery**: For high-density image browsing (images/thumbnails).
    - **Media**: For product cards or media items (`MediaCard`).
    - **List**: For smaller, text-heavy list items (`ListCard`).
    - **Review**: For user reviews with richer content (`ReviewCard`).
*   **Interaction**: Supports touch swipe and horizontal drag. The track hides scrollbars for a cleaner look.

### 38.2 More Button
*   **Purpose**: Positioned at the extreme right of a carousel to signify that more items are available beyond the visible track.
*   **Anatomy**: A 40px circular `background/primary` button with a `chevron-right` icon, centered within a 72px wide interaction area.
*   **States**: 
    - **Hover**: Transforms slightly and changes background to `secondary`.
    - **Active**: Scales down for tactile feedback.
    - **Disabled**: Becomes semi-transparent with a muted border.

### Usage Guidelines
*   **Padding**: Carousels should have horizontal padding that aligns with the parent container to maintain visual rhythm.
*   **Consistency**: Do not mix different card types within the same carousel track.
*   **Threshold**: Only show the "More" button if the total number of items exceeds the initial visible threshold.

---

## 39. Menu & Menu Item

A floating list of actions or options that appears contextually, often triggered by a button or a long-press.

### 39.1 Menu
*   **Purpose**: Contains a logical group of Menu Items.
*   **Anatomy**: 
    - **Container**: White elevated surface with an 8px corner radius and a subtle shadow (`rgba(0,0,0,0.16)`).
    - **Padding**: 4px vertical padding.
*   **Aesthetics**: Uses `var(--background-floating-1)` for the surface and a shadow to distinguish it from the page content.

### 39.2 Menu Item
*   **Purpose**: A single interactive row within a Menu.
*   **Anatomy**: 
    - **Icon (Optional)**: 20px symbol representing the action.
    - **Label**: Descriptive text (14px).
    - **Divider (Optional)**: A horizontal line below the item to group categories.
*   **States**:
    - **Normal**: Transparent background.
    - **Hovered**: Suble background tint (`var(--state-hover-secondary)`).
    - **Pressed**: Stronger background tint (`var(--state-pressed-secondary)`).
    - **Disabled**: Semi-transparent, pointer events disabled.

### Usage Guidelines
*   **Context**: Place the menu near the trigger item. 
*   **Grouping**: Use Dividers to separate destructive actions (like Delete) from common actions.
*   **Length**: If the menu contains more than 8 items, consider using a scrollbar or a different navigation pattern.

---

## 40. Modal

A high-priority interrupt pattern that requires user attention or action before proceeding, overlaying the main content with a scrim.

### 40.1 Modal Variants
*   **OS=Mobile**: 
    - **Width**: 288px.
    - **Layout**: Can have vertical or horizontal button arrangements.
    - **Styling**: Center-aligned title and description. Includes a bottom "Close" ghost button.
*   **OS=PC**: 
    - **Width**: 470px.
    - **Layout**: Horizontal button arrangement at the bottom-right.
    - **Styling**: Left-aligned title and description. Includes a top-right close icon (cross-outline).

### 40.2 Anatomy
*   **Scrim**: Backdrop with `var(--background-scrim, rgba(0,0,0,0.48))` opacity to focus attention.
*   **Container**: `var(--background-floating-1)` surface with `var(--radius-400, 12px)` and shadow.
*   **Actions**:
    - **Primary Action**: Solid button (solid-primary).
    - **Secondary Action**: Outline button (outline-primary).
*   **Optional Elements**: Checkboxes, links, progress indicators, or page indicators can be embedded in the body.

### Usage Guidelines
*   **Focus**: Only use modals for critical tasks or information. Excessive use disrupts the flow.
*   **Clarity**: Titles should be short and action-oriented. Descriptions should clearly explain the consequence of the actions.
*   **Dismissal**: Always provide at least one clear way to dismiss the modal (Close button, X icon, or clicking the scrim).

---

## 41. Chat UI Patterns

Structures and templates for building a consistent chat experience between AI and humans.

### 41.1 Message List
*   **Purpose**: A container that manages the flow and spacing of multiple messages.
*   **Layout**: 
    - **Padding**: 16px horizontal, 24px vertical (`var(--spacing-400)` and `var(--spacing-600)`).
    - **Gap**: 16px (`var(--spacing-400)`) between message items.
*   **Usage**: Wraps individual `Message` components to ensure consistent alignment and readability.

### 41.2 AI Suggestion List
*   **Purpose**: Presents a vertical list of suggested actions or follow-up questions from the AI.
*   **Anatomy**:
    - **Header**: Includes an AI-themed icon and a title (e.g., "Ask AI additional questions").
    - **Item**: A single row with truncated text on the left and a circular "send" button with an `arrow-up-solid` icon on the right.
    - **Separators**: Each item (including the header) is separated by a 1px border (`var(--border-tertiary)`).
*   **Usage**: Typically placed at the end of an AI response to guide the next step in the conversation.

### 41.3 Message Sequences
*   **Standard Message**: Pairs a user message with an AI response. AI messages show the `Agent Name` (14px Bold) above the content.
*   **Loading Context**: Shown while the AI is thinking. Includes a `ProgressIndicator` and a gradient "thinking" text.

---

## 42. Image Preview

A full-screen overlay mode for inspecting media items in detail, providing additional context and metadata.

### 42.1 Anatomy
*   **Overlay**: Dark background (`rgba(0,0,0,0.76)`) covering the entire viewport.
*   **Preview Area**: Centered image/media display. Supports navigation arrows (`chevron-left/right`) for browsing galleries.
*   **Bottom Area**: An optional informational section containing:
    - **Header**: Large title text in white.
    - **Metadata**: Rating scores (stars) and categorical tags.
    - **Action Link**: A destination link for external services (e.g., Maps, Shop).
    - **Close Action**: A clear 'X' button at the top-right and an optional 'Close' gesture.

### 42.2 Aesthetics
*   **Contrast**: Uses white text and vibrant gradient tags against a dark overlay for maximum legibility.
*   **Navigation**: Semi-transparent or solid primary buttons for controls, ensuring they don't obscure the image content.

### Usage Guidelines
*   **Context**: Use for expanding thumbnail images from carousels or cards.
*   **Accessibility**: Ensure the 'Close' button is easily reachable and visible across different image colors.
*   **Focus**: Keep the image as the central focus; information at the bottom should be relevant but secondary.

---

*This guide is continuously updated as new components are added.*
