import React from 'react';
import './Chip.css';
import Icon from '../Icon';

/**
 * Chip Component
 * 
 * @param {string} label - Text label
 * @param {string} variant - solid-rounded-rect (default) | solid-rounded | outline-gradient
 * @param {string} size - small | medium | large | xlarge
 * @param {boolean} selected - Selection state
 * @param {boolean} disabled - Disabled state
 * @param {string} leftIcon - Optional icon name for the left side
 * @param {string} rightIcon - Optional icon name for the right side
 * @param {boolean} graphic - Whether to show a graphic element (for outline-gradient)
 * @param {Function} onClick - Click handler
 * @param {string} className - Extra classes
 */
const Chip = ({
    label,
    variant = 'solid-rounded-rect',
    size = 'small',
    selected = false,
    disabled = false,
    leftIcon,
    rightIcon,
    graphic = false,
    onClick,
    className = '',
    ...props
}) => {
    const handleClick = (e) => {
        if (!disabled && onClick) {
            onClick(e);
        }
    };

    const classNames = [
        'chip',
        `chip-${variant}`,
        `chip-${size}`,
        selected ? 'selected' : '',
        disabled ? 'disabled' : '',
        className
    ].filter(Boolean).join(' ');

    const iconSize = (size === 'xlarge' || size === 'large') ? 20 : 16;

    return (
        <div
            className={classNames}
            onClick={handleClick}
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-pressed={selected}
            disabled={disabled}
            {...props}
        >
            {/* State layer for hover/focus/pressed effects */}
            <div className="chip-state-layer" />

            {leftIcon && (
                <span className="chip-icon chip-left-icon">
                    <Icon name={leftIcon} size={iconSize} />
                </span>
            )}

            <span className="chip-label">{label}</span>

            {rightIcon && (
                <span className="chip-icon chip-right-icon">
                    <Icon name={rightIcon} size={iconSize} />
                </span>
            )}
        </div>
    );
};

export default Chip;
