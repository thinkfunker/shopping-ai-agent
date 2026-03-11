import React from 'react';
import './RadioButton.css';

/**
 * Radio Button Component
 * 
 * @param {string} label - Radio option label
 * @param {boolean} checked - Selected state
 * @param {boolean} disabled - Disabled state
 * @param {Function} onChange - Change handler
 * @param {string} className - Additional classes
 * @param {string} name - Radio group name
 */
const RadioButton = ({
    label = 'Label',
    checked = false,
    disabled = false,
    onChange,
    className = '',
    name = '',
    ...props
}) => {
    const classNames = [
        'radio-button',
        disabled ? 'disabled' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <label className={classNames}>
            <input
                type="radio"
                checked={checked}
                disabled={disabled}
                name={name}
                onChange={onChange}
                {...props}
            />
            <div className="radio-circle">
                <div className="radio-dot" />
            </div>
            {label && <span className="radio-label">{label}</span>}
        </label>
    );
};

export default RadioButton;
