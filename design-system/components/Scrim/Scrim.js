/**
 * Render a Scrim (Overlay) component
 * @param {Object} options
 * @param {boolean} options.visible - Shold it show?
 * @param {Function} options.onClick - Click handler
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
window.renderScrim = function renderScrim({
    visible = false,
    onClick = null,
    className = ''
} = {}) {
    const el = document.createElement('div');
    el.className = `scrim ${visible ? 'visible' : ''} ${className}`.trim();

    if (onClick) {
        el.addEventListener('click', onClick);
    }

    return el;
}
