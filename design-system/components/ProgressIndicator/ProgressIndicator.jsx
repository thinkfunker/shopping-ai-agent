import React from 'react';
import './ProgressIndicator.css';

/**
 * ProgressIndicator Component
 * 
 * @param {string} type - bar (default) | circle
 * @param {string} size - Default (for bar) | small (for circle) | medium | large
 * @param {number} value - Progress value (0-100), used only for 'bar'
 * @param {string} className - Extra classes
 */
const ProgressIndicator = ({
    type = 'circle',
    size = 'medium',
    value = 0,
    className = '',
    ...props
}) => {
    const classNames = [
        'progress-indicator',
        type === 'circle' ? `progress-circle progress-circle-${size}` : 'progress-bar',
        className
    ].filter(Boolean).join(' ');

    if (type === 'bar') {
        const progress = Math.min(100, Math.max(0, value));
        return (
            <div className={classNames} {...props}>
                <div
                    className="progress-bar-fill"
                    style={{ width: `${progress}%` }}
                />
            </div>
        );
    }

    return (
        <div className={classNames} {...props} />
    );
};

export default ProgressIndicator;
