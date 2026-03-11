import React from 'react';
import './Switch.css';

/**
 * Switch Toggle Component
 * 
 * @param {boolean} checked - Current state (true for on)
 * @param {Function} onChange - Callback for value change
 * @param {boolean} disabled - Whether the switch is disabled
 * @param {string} className - Additional classes
 */
const Switch = ({
    checked = false,
    onChange,
    disabled = false,
    className = '',
    ...props
}) => {
    const classNames = [
        'switch',
        disabled ? 'disabled' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <label className={classNames}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                {...props}
            />
            <span className="switch-track">
                <span className="switch-thumb" />
            </span>
        </label>
    );
};

export default Switch;
