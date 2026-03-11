/**
 * Render Menu Component
 * 
 * @param {Object} options
 * @param {Array} options.items - List of item objects
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
function renderMenu({
    items = [],
    className = ''
} = {}) {
    const container = document.createElement('div');
    container.className = `menu-container ${className}`.trim();

    items.forEach(item => {
        if (typeof renderMenuItem === 'function') {
            container.appendChild(renderMenuItem(item));
        }
    });

    return container;
}
