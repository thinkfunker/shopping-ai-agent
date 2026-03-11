import React from 'react';
import './MoreButton.css';
import Icon from '../Icon';

/**
 * MoreButton Component
 * Used at the end of carousels to trigger "See More" action.
 * 
 * @param {boolean} disabled - Whether the button is disabled
 * @param {Function} onClick - Click handler
 * @param {string} className - Extra classes
 */
const MoreButton = ({
    disabled = false,
    onClick,
    className = ''
}) => {
    return (
        <div
            className={`more-button-container ${disabled ? 'disabled' : ''} ${className}`}
            onClick={!disabled ? onClick : undefined}
            role="button"
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 0}
        >
            <div className="more-button">
                <div className="more-button-icon">
                    <Icon name="chevron-right-solid" size={24} />
                </div>
            </div>
        </div>
    );
};

export default MoreButton;
