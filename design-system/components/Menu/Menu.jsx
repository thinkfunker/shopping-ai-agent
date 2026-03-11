import React from 'react';
import './Menu.css';
import MenuItem from './MenuItem';

/**
 * Menu Component
 * 
 * @param {Array} items - List of item objects { label, icon, divider, disabled, onClick }
 * @param {string} className - Extra classes
 */
const Menu = ({
    items = [],
    className = ''
}) => {
    return (
        <div className={`menu-container ${className}`}>
            {items.map((item, index) => (
                <MenuItem
                    key={index}
                    label={item.label}
                    icon={item.icon}
                    divider={item.divider}
                    disabled={item.disabled}
                    onClick={item.onClick}
                />
            ))}
        </div>
    );
};

export default Menu;
