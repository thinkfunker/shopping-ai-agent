import React from 'react';
import './PageIndicator.css';

/**
 * Page Indicator Component (primarily for carousels)
 * 
 * @param {string} type - dot | numbers
 * @param {number} current - Current page (1-indexed)
 * @param {number} total - Total page count
 * @param {string} className - Extra classes
 */
const PageIndicator = ({
    type = 'dot',
    current = 1,
    total = 3,
    className = '',
    ...props
}) => {
    if (type === 'numbers') {
        const classNames = ['page-indicator', 'page-indicator-numbers', className].filter(Boolean).join(' ');
        return (
            <div className={classNames} {...props}>
                <div className="page-indicator-label">
                    {current}/{total}
                </div>
            </div>
        );
    }

    // Dot logic
    const isOver6 = total > 6;
    const classNames = ['page-indicator', 'page-indicator-dots', isOver6 ? 'over-6' : '', className].filter(Boolean).join(' ');

    const renderDots = () => {
        if (!isOver6) {
            return Array.from({ length: total }, (_, i) => (
                <div
                    key={i}
                    className={`page-indicator-dot page-indicator-dot-default ${current === i + 1 ? 'active' : ''}`}
                />
            ));
        }

        // Logic for 'over 6 pages' effect (often 5-7 dots shown with shrinking edges)
        // Here we'll simplify to show up to 7 dots based on distance from current
        const start = Math.max(1, current - 3);
        const end = Math.min(total, start + 6);
        const displayStart = Math.max(1, end - 6);

        const dots = [];
        for (let i = displayStart; i <= end; i++) {
            let size = 'large'; // Default
            if (i === displayStart || i === end) size = 'small';
            else if (i === displayStart + 1 || i === end - 1) size = 'medium';

            dots.push(
                <div
                    key={i}
                    className={`page-indicator-dot page-indicator-dot-${size} ${current === i ? 'active' : ''}`}
                />
            );
        }
        return dots;
    };

    return (
        <div className={classNames} {...props}>
            {renderDots()}
        </div>
    );
};

export default PageIndicator;
