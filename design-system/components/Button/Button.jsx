import React from 'react';
import './Button.css';
import Icon from '../Icon';

const Button = ({
    priority = 'solid-primary',
    size = 'medium',
    label,
    leftIcon,
    rightIcon,
    iconOnly = false,
    disabled = false,
    onClick,
    className = '',
    ...props
}) => {
    const classNames = [
        'btn',
        `btn-${priority}`,
        `btn-${size}`,
        iconOnly ? 'btn-icon-only' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <button
            className={classNames}
            disabled={disabled}
            onClick={onClick}
            aria-label={iconOnly ? label : undefined}
            {...props}
        >
            <div className="btn-state-layer" />

            {leftIcon && (
                <span className="btn-icon">
                    <Icon {...(typeof leftIcon === 'string' ? { name: leftIcon } : leftIcon)} size={size === 'xxlarge' ? '24px' : '20px'} />
                </span>
            )}

            {!iconOnly && label && <span className="btn-label">{label}</span>}
            {iconOnly && !leftIcon && !rightIcon && label && <span className="btn-label">{label}</span>}

            {rightIcon && (
                <span className="btn-icon">
                    <Icon {...(typeof rightIcon === 'string' ? { name: rightIcon } : rightIcon)} size={size === 'xxlarge' ? '24px' : '20px'} />
                </span>
            )}
        </button>
    );
};

export default Button;
