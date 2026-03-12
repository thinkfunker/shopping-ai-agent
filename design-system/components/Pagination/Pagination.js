/**
 * Render a Pagination component
 * @param {Object} options
 * @param {string} options.type - standard | dot | numbers
 * @param {number} options.current - Current page (1-indexed)
 * @param {number} options.total - Total pages
 * @param {boolean} options.showNav - Show prev/next
 * @param {Function} options.onChange - Callback on page change
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
window.renderPagination = function renderPagination({
    type = 'standard',
    current = 1,
    total = 5,
    showNav = true,
    onChange = null,
    className = ''
} = {}) {
    const container = document.createElement('div');
    container.className = `pagination pagination-${type} ${className}`.trim();

    const handlePageClick = (page) => {
        if (page >= 1 && page <= total && page !== current && onChange) {
            onChange(page);
        }
    };

    if (type === 'standard') {
        // Prev Button
        if (showNav) {
            const prev = document.createElement('button');
            prev.className = `pagination-item pagination-nav ${current === 1 ? 'disabled' : ''}`;
            prev.disabled = current === 1;
            if (window.renderIcon) {
                prev.appendChild(renderIcon({ name: 'chevron-left', size: 16 }));
            } else {
                prev.innerHTML = '←';
            }
            prev.addEventListener('click', () => handlePageClick(current - 1));
            container.appendChild(prev);
        }

        const getNumericPages = () => {
            const pages = [];
            if (total <= 7) {
                for (let i = 1; i <= total; i++) pages.push(i);
            } else {
                pages.push(1);
                if (current <= 4) {
                    pages.push(2, 3, 4, 5, '...', total);
                } else if (current >= total - 3) {
                    pages.push('...', total - 4, total - 3, total - 2, total - 1, total);
                } else {
                    pages.push('...', current - 1, current, current + 1, '...', total);
                }
            }
            return pages;
        };

        getNumericPages().forEach(p => {
            if (p === '...') {
                const ellipsis = document.createElement('span');
                ellipsis.className = 'pagination-ellipsis';
                ellipsis.textContent = '...';
                container.appendChild(ellipsis);
            } else {
                const btn = document.createElement('button');
                btn.className = `pagination-item ${current === p ? 'selected' : ''}`;
                btn.textContent = p;
                btn.addEventListener('click', () => handlePageClick(p));
                container.appendChild(btn);
            }
        });

        // Next Button
        if (showNav) {
            const next = document.createElement('button');
            next.className = `pagination-item pagination-nav ${current === total ? 'disabled' : ''}`;
            next.disabled = current === total;
            if (window.renderIcon) {
                next.appendChild(renderIcon({ name: 'chevron-left', size: 16, className: 'rotate-180' }));
            } else {
                next.innerHTML = '→';
            }
            next.addEventListener('click', () => handlePageClick(current + 1));
            container.appendChild(next);
        }
    } else if (type === 'dot') {
        const maxDots = Math.min(total, 6);
        for (let i = 1; i <= maxDots; i++) {
            const dot = document.createElement('div');
            dot.className = `pagination-dot ${current === i ? 'selected' : ''}`;
            container.appendChild(dot);
        }
    } else if (type === 'numbers') {
        const currentSpan = document.createElement('span');
        currentSpan.className = 'pagination-current';
        currentSpan.textContent = current;

        const sepSpan = document.createElement('span');
        sepSpan.className = 'pagination-separator';
        sepSpan.textContent = ' / ';

        const totalSpan = document.createElement('span');
        totalSpan.className = 'pagination-total';
        totalSpan.textContent = total;

        container.appendChild(currentSpan);
        container.appendChild(sepSpan);
        container.appendChild(totalSpan);
    }

    return container;
}
