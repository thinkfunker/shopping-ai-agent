import React from 'react';
import './Divider.css';

/**
 * Divider Component
 * 
 * @param {string} type - horizontal (default) | vertical
 * @param {string} spacing - none | small | medium (default) | large
 * @param {string} className - Extra classes
 */
const Divider = ({
    type = 'horizontal',
    spacing = 'medium',
    className = '',
    ...props
}) => {
    const classNames = [
        'divider',
        `divider-${type}`,
        spacing !== 'medium' ? `divider-spacing-${spacing}` : '',
        className
    ].filter(Boolean).join(' ');

    return <div className={classNames} {...props} />;
};

export default Divider;
