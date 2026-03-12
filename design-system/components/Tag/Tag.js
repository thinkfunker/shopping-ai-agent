/**
 * Render a Tag component
 * @param {Object} options
 * @param {string} options.label - Tag text
 * @param {string} options.style - solid | gradient | outline
 * @param {string} options.priority - primary | secondary | tertiary
 * @param {string} options.size - small | medium
 * @param {string} options.shape - rectangle | circle
 * @param {string} options.icon - Icon symbol/text
 * @param {string} options.className - Additional classes
 * @returns {HTMLElement}
 */
window.renderTag = function ({
    label = 'Label',
    style = 'solid',
    priority = 'secondary',
    size = 'small',
    shape = 'rectangle',
    icon = null,
    className = ''
} = {}) {
    const el = document.createElement('div');
    el.className = `tag tag-style-${style} tag-priority-${priority} tag-size-${size} tag-shape-${shape} ${className}`.trim();

    if (icon) {
        if (typeof renderIcon === 'function') {
            const iconEl = renderIcon({
                name: icon,
                size: size === 'small' ? 12 : 16
            });
            iconEl.className += ' tag-icon';
            el.appendChild(iconEl);
        }
    }

    const labelEl = document.createElement('span');
    labelEl.className = 'tag-label';
    labelEl.textContent = label;
    el.appendChild(labelEl);

    return el;
};
