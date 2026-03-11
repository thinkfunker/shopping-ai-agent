import React from 'react';
import './MenuItem.css';
import Icon from '../Icon';
import Divider from '../Divider/Divider';

/**
 * MenuItem Component
 * 
 * @param {string} label - Item text
 * @param {string} icon - Icon name
 * @param {boolean} divider - Whether to show a divider below
 * @param {boolean} disabled - Whether the item is disabled
 * @param {Function} onClick - Click handler
 */
const MenuItem = ({
    label = 'Label',
    icon,
    divider = false,
    disabled = false,
    onClick
}) => {
    return (
        <>
            <button
                className="menu-item"
                disabled={disabled}
                onClick={onClick}
            >
                {icon && (
                    <span className="menu-item-icon">
                        <Icon name={icon} size={20} />
                    </span>
                )}
                <span className="menu-item-label">{label}</span>
            </button>
            {divider && (
                <div className="menu-item-divider-container">
                    <Divider />
                </div>
            )}
        </>
    );
};

export default MenuItem;
