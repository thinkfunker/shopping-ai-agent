import React from 'react';
import './Tab.css';

/**
 * Tab Item Component
 */
export const TabItem = ({
    label = 'Label',
    selected = false,
    badge = null,
    dotBadge = false,
    onClick,
    className = '',
    ...props
}) => {
    return (
        <button
            type="button"
            className={`tab-item ${selected ? 'selected' : ''} ${className}`}
            onClick={onClick}
            aria-selected={selected}
            {...props}
        >
            <div className="tab-content">
                <span className="tab-label">{label}</span>
                {badge !== null && <span className="tab-badge">{badge}</span>}
                {dotBadge && <span className="tab-dot-badge" />}
            </div>
            {selected && <div className="tab-indicator" />}
        </button>
    );
};

/**
 * Tab Container Component
 * 
 * @param {string} type - fixed (evenly split) | flexible (scrollable)
 * @param {string} emphasis - default (gradient) | subtle (primary underscore)
 * @param {string} className - Extra classes
 * @param {React.ReactNode} children - List of TabItem components
 */
const Tab = ({
    type = 'fixed',
    emphasis = 'default',
    className = '',
    children,
    ...props
}) => {
    const classNames = [
        'tabs',
        `tabs-${type}`,
        `tabs-emphasis-${emphasis}`,
        className
    ].filter(Boolean).join(' ');

    return (
        <nav className={classNames} {...props}>
            {children}
        </nav>
    );
};

export default Tab;
