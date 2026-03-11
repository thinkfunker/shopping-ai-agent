import React from 'react';
import './Checkbox.css';

/**
 * Checkbox Component
 * 
 * @param {string} label - Text label
 * @param {boolean} checked - Selection state
 * @param {boolean} disabled - Disabled state
 * @param {Function} onChange - Change handler
 * @param {string} className - Extra classes
 */
const Checkbox = ({
    label,
    checked = false,
    disabled = false,
    onChange,
    className = '',
    ...props
}) => {
    const handleChange = (e) => {
        if (!disabled && onChange) {
            onChange(e.target.checked);
        }
    };

    const classNames = [
        'checkbox-container',
        checked ? 'selected' : '',
        disabled ? 'disabled' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <label className={classNames}>
            <input
                type="checkbox"
                className="checkbox-input"
                checked={checked}
                disabled={disabled}
                onChange={handleChange}
                {...props}
            />
            <div className="checkbox-box">
                <div className="checkbox-icon">
                    <img
                        src="/assets/icons/common/check-solid.svg"
                        alt="check"
                    />
                </div>
            </div>
            {label && <span className="checkbox-label">{label}</span>}
        </label>
    );
};

export default Checkbox;
