import React from 'react';
import './Pagination.css';
import Icon from '../Icon';

/**
 * Pagination component for page navigation or simple indicators.
 * 
 * @param {string} type - standard (numeric) | dot | numbers (simple indicator)
 * @param {number} current - Current page number (1-indexed)
 * @param {number} total - Total number of pages
 * @param {boolean} showNav - Whether to show prev/next buttons (standard only)
 * @param {Function} onChange - Callback when a page is selected
 * @param {string} className - Additional classes
 */
const Pagination = ({
    type = 'standard',
    current = 1,
    total = 1,
    showNav = true,
    onChange,
    className = '',
    ...props
}) => {
    const classNames = [
        'pagination',
        `pagination-${type}`,
        className
    ].filter(Boolean).join(' ');

    const handlePageClick = (page) => {
        if (page >= 1 && page <= total && page !== current && onChange) {
            onChange(page);
        }
    };

    // --- Standard Numeric Display Logic ---
    const getNumericPages = () => {
        const pages = [];
        const buffer = 2; // Number of neighbors to show

        if (total <= 7) {
            for (let i = 1; i <= total; i++) pages.push(i);
        } else {
            // Logic based on Figma types: start, middle, end
            pages.push(1);

            if (current <= 4) { // Start
                pages.push(2, 3, 4, 5);
                pages.push('...');
                pages.push(total);
            } else if (current >= total - 3) { // End
                pages.push('...');
                pages.push(total - 4, total - 3, total - 2, total - 1);
                pages.push(total);
            } else { // Middle
                pages.push('...');
                pages.push(current - 1, current, current + 1);
                pages.push('...');
                pages.push(total);
            }
        }
        return pages;
    };

    // --- Dot Display Logic ---
    const getDotIndicators = () => {
        const dots = [];
        const maxDots = 6;
        for (let i = 1; i <= Math.min(total, maxDots); i++) {
            dots.push(i);
        }
        return dots;
    };

    if (type === 'standard') {
        const pages = getNumericPages();

        return (
            <div className={classNames} {...props}>
                {showNav && (
                    <button
                        className={`pagination-item pagination-nav ${current === 1 ? 'disabled' : ''}`}
                        onClick={() => handlePageClick(current - 1)}
                        disabled={current === 1}
                    >
                        <Icon name="chevron-left" size={16} />
                    </button>
                )}

                {pages.map((p, idx) => (
                    p === '...' ? (
                        <span key={`ellipsis-${idx}`} className="pagination-ellipsis">...</span>
                    ) : (
                        <button
                            key={`page-${p}`}
                            className={`pagination-item ${current === p ? 'selected' : ''}`}
                            onClick={() => handlePageClick(p)}
                        >
                            {p}
                        </button>
                    )
                ))}

                {showNav && (
                    <button
                        className={`pagination-item pagination-nav ${current === total ? 'disabled' : ''}`}
                        onClick={() => handlePageClick(current + 1)}
                        disabled={current === total}
                    >
                        <Icon name="chevron-right" size={16} />
                    </button>
                )}
            </div>
        );
    }

    if (type === 'dot') {
        const dots = getDotIndicators();
        return (
            <div className={`${classNames} pagination-indicator pagination-dots`} {...props}>
                {dots.map(d => (
                    <div
                        key={`dot-${d}`}
                        className={`pagination-dot ${current === d ? 'selected' : ''}`}
                    />
                ))}
            </div>
        );
    }

    if (type === 'numbers') {
        return (
            <div className={`${classNames} pagination-indicator pagination-simple-numbers`} {...props}>
                <span className="pagination-current">{current}</span>
                <span className="pagination-separator"> / </span>
                <span className="pagination-total">{total}</span>
            </div>
        );
    }

    return null;
};

export default Pagination;
