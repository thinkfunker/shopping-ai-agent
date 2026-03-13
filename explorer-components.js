/**
 * Reusable UI components for the Design System Explorer
 */

/**
 * Renders a standardized card for the explorer (used for icons, colors, shadows, etc.)
 * @param {Object} options 
 * @param {string} options.name - Primary label/name
 * @param {string} options.description - Subtle description/metadata
 * @param {HTMLElement|string} options.preview - Preview element or HTML string
 * @param {Function} options.onClick - Click handler
 * @param {string} options.className - Additional classes
 * @returns {string} HTML string for the card
 */
window.renderExplorerCard = function ({ name, description = '', preview = '', onClick = null, className = '' }) {
    const clickAttr = onClick ? `onclick="${onClick}"` : '';
    const descHtml = description ? `<div class="explorer-card-desc">${description}</div>` : '';

    // If preview is an HTMLElement, we'll need to handle it differently when using innerHTML strings.
    // For simplicity in this string-based explorer, we assume preview is an HTML string or an ID placeholder.

    return `
        <div class="explorer-card ${className}" ${clickAttr} title="${description || name}" data-name="${name}">
            <div class="explorer-card-preview">${preview}</div>
            <div class="explorer-card-name">${name}</div>
            ${descHtml}
        </div>
    `;
};

/**
 * Renders a grid container for explorer cards
 * @param {string} content - Inner HTML of cards
 * @returns {string} HTML string for the grid
 */
window.renderExplorerGrid = function (content) {
    return `<div class="explorer-card-grid">${content}</div>`;
};
