/**
 * Render a Divider component
 * @param {Object} options
 * @param {string} options.type - horizontal | vertical
 * @param {string} options.spacing - none | small | medium | large
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
window.renderDivider = function ({
    type = 'horizontal',
    spacing = 'medium',
    className = ''
} = {}) {
    const divider = document.createElement('div');
    divider.className = `divider divider-${type} ${spacing !== 'medium' ? `divider-spacing-${spacing}` : ''} ${className}`.trim();
    return divider;
};
