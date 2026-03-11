import React from 'react';
import './Toast.css';
import Icon from '../Icon';

/**
 * Toast Component
 * 
 * @param {string} type - info | success | warning | error
 * @param {string} title - Main title text
 * @param {string} description - Subtext / detailed message
 * @param {string} buttonLabel - Optional action button label
 * @param {Function} onButtonClick - Action button click handler
 * @param {string} className - Extra classes
 */
const Toast = ({
    type = 'info',
    title = 'Title text',
    description = 'Text',
    buttonLabel = '',
    onButtonClick,
    className = '',
    ...props
}) => {
    const getIconName = () => {
        switch (type) {
            case 'success': return 'check-circle-solid';
            case 'warning': return 'exclamation-triangle-solid';
            case 'error': return 'exclamation-triangle-solid';
            case 'info':
            default: return 'exclamation-circle-solid';
        }
    };

    return (
        <div className={`toast toast-${type} ${className}`} {...props}>
            <div className="toast-left-area">
                <div className="toast-icon">
                    <Icon name={getIconName()} size={20} />
                </div>
                <div className="toast-text">
                    {title && <h4 className="toast-title">{title}</h4>}
                    {description && <p className="toast-description">{description}</p>}
                </div>
            </div>
            {buttonLabel && (
                <div className="toast-button-wrapper">
                    <button
                        className="toast-action-button"
                        onClick={onButtonClick}
                        type="button"
                    >
                        {buttonLabel}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Toast;
