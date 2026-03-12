/**
 * Render a Progress Indicator component
 * @param {Object} options
 * @param {string} options.type - bar | circle
 * @param {string} options.size - small | medium | large
 * @param {number} options.value - Progress value (0-100) for bar
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
window.renderProgressIndicator = function ({
    type = 'circle',
    size = 'medium',
    value = 0,
    className = ''
} = {}) {
    const indicator = document.createElement('div');

    if (type === 'bar') {
        indicator.className = `progress-bar ${className}`.trim();
        const fill = document.createElement('div');
        fill.className = 'progress-bar-fill';
        fill.style.width = `${Math.min(100, Math.max(0, value))}%`;
        indicator.appendChild(fill);
    } else {
        indicator.className = `progress-circle progress-circle-${size} ${className}`.trim();
    }

    return indicator;
};
