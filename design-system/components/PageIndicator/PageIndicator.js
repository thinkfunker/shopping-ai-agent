/**
 * Render a Page Indicator component
 * @param {Object} options
 * @param {string} options.type - dot | numbers
 * @param {number} options.current - Current page (1-indexed)
 * @param {number} options.total - Total pages
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
window.renderPageIndicator = function renderPageIndicator({
    type = 'dot',
    current = 1,
    total = 3,
    className = ''
} = {}) {
    const container = document.createElement('div');
    container.className = `page-indicator ${type === 'numbers' ? 'page-indicator-numbers' : 'page-indicator-dots'} ${className}`.trim();

    if (type === 'numbers') {
        const label = document.createElement('div');
        label.className = 'page-indicator-label';
        label.textContent = `${current}/${total}`;
        container.appendChild(label);
        return container;
    }

    // Dot logic
    const isOver6 = total > 6;
    if (isOver6) container.classList.add('over-6');

    if (!isOver6) {
        for (let i = 1; i <= total; i++) {
            const dot = document.createElement('div');
            dot.className = `page-indicator-dot page-indicator-dot-default ${current === i ? 'active' : ''}`.trim();
            container.appendChild(dot);
        }
    } else {
        const start = Math.max(1, current - 3);
        const end = Math.min(total, start + 6);
        const displayStart = Math.max(1, end - 6);

        for (let i = displayStart; i <= end; i++) {
            let size = 'large';
            if (i === displayStart || i === end) size = 'small';
            else if (i === displayStart + 1 || i === end - 1) size = 'medium';

            const dot = document.createElement('div');
            dot.className = `page-indicator-dot page-indicator-dot-${size} ${current === i ? 'active' : ''}`.trim();
            container.appendChild(dot);
        }
    }

    return container;
}
