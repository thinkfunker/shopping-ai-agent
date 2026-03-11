import React from 'react';
import './ToggleButton.css';
import Icon from '../Icon';

/**
 * ToggleButton Component
 * 
 * @param {string} label - The text label
 * @param {boolean} selected - Toggle state
 * @param {string} size - medium | large | xlarge | xxlarge
 * @param {boolean} disabled - Disabled state
 * @param {string} iconName - Icon to display when selected (default: 'check')
 * @param {Function} onChange - Callback when toggled
 * @param {string} className - Extra classes
 */
const ToggleButton = ({
    label,
    selected = false,
    size = 'medium',
    disabled = false,
    iconName = 'check',
    onChange,
    className = '',
    ...props
}) => {
    const handleClick = () => {
        if (!disabled && onChange) {
            onChange(!selected);
        }
    };

    const classNames = [
        'toggle-btn',
        `toggle-btn-${size}`,
        selected ? 'selected' : '',
        className
    ].filter(Boolean).join(' ');

    const iconSize = (size === 'xlarge' || size === 'xxlarge') ? 24 : 20;

    return (
        <button
            className={classNames}
            disabled={disabled}
            onClick={handleClick}
            aria-pressed={selected}
            {...props}
        >
            {selected && (
                <span className="toggle-btn-icon">
                    <Icon
                        name={iconName}
                        variant="solid"
                        size={iconSize}
                        style={{ color: 'inherit' }}
                    />
                </span>
            )}
            <span className="toggle-btn-label">{label}</span>
        </button>
    );
};

export default ToggleButton;
