import React from 'react';
import './GhostButton.css';

/**
 * Ghost Button Component
 * 
 * @param {string} label - Button text label
 * @param {string} priority - primary (default) | secondary
 * @param {string} size - small | medium (default) | large | xlarge
 * @param {boolean} iconOnly - Whether the button is icon only
 * @param {React.ReactNode} leftIcon - Optional icon on the left
 * @param {React.ReactNode} rightIcon - Optional icon on the right
 * @param {boolean} disabled - Disabled state
 * @param {Function} onClick - Click handler
 * @param {string} className - Extra classes
 */
const GhostButton = ({
    label = 'Label',
    priority = 'primary',
    size = 'medium',
    iconOnly = false,
    leftIcon = null,
    rightIcon = null,
    disabled = false,
    onClick,
    className = '',
    ...props
}) => {
    const classNames = [
        'ghost-button',
        `ghost-button-${priority}`,
        `ghost-button-${size}`,
        iconOnly ? 'ghost-button-icon-only' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <button
            className={classNames}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            <div className="ghost-button-content">
                {!iconOnly && leftIcon && (
                    <div className="ghost-button-icon">{leftIcon}</div>
                )}

                {iconOnly ? (
                    <div className="ghost-button-icon">{leftIcon || rightIcon}</div>
                ) : (
                    <span>{label}</span>
                )}

                {!iconOnly && rightIcon && (
                    <div className="ghost-button-icon">{rightIcon}</div>
                )}
            </div>
        </button>
    );
};

export default GhostButton;
