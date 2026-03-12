/**
 * Render a Tooltip component
 * @param {Object} options
 * @param {string} options.title - Tooltip title
 * @param {string} options.text - Tooltip body text
 * @param {string} options.position - top | bottom
 * @param {boolean} options.showClose - Show close button?
 * @param {Function} options.onClose - Close handler
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
window.renderTooltip = function ({
    title = '',
    text = 'Tool tip message',
    position = 'top',
    showClose = true,
    onClose = null,
    className = ''
} = {}) {
    const tooltip = document.createElement('div');
    tooltip.className = `tooltip tooltip-${position} ${className}`.trim();

    const container = document.createElement('div');
    container.className = 'tooltip-container';

    if (showClose) {
        const closeBtn = document.createElement('button');
        closeBtn.className = 'tooltip-close';
        closeBtn.type = 'button';
        closeBtn.innerHTML = '<span>×</span>'; // Simplified for vanilla
        if (onClose) {
            closeBtn.addEventListener('click', onClose);
        }
        container.appendChild(closeBtn);
    }

    const content = document.createElement('div');
    content.className = 'tooltip-content';

    if (title) {
        const titleEl = document.createElement('h4');
        titleEl.className = 'tooltip-title';
        titleEl.textContent = title;
        content.appendChild(titleEl);
    }

    const textEl = document.createElement('p');
    textEl.className = 'tooltip-text';
    textEl.textContent = text;
    content.appendChild(textEl);

    container.appendChild(content);

    const arrow = document.createElement('div');
    arrow.className = 'tooltip-arrow';
    container.appendChild(arrow);

    tooltip.appendChild(container);
    return tooltip;
};
