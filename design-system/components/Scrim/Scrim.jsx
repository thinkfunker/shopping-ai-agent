import React from 'react';
import './Scrim.css';

/**
 * Scrim (Overlay) Component
 * 
 * @param {boolean} visible - Whether the scrim is visible
 * @param {Function} onClick - Click handler (usually for 'close on click outside')
 * @param {string} className - Additional classes
 * @param {React.ReactNode} children - If you want to place a modal inside it
 */
const Scrim = ({
    visible = false,
    onClick,
    className = '',
    children,
    ...props
}) => {
    const classNames = [
        'scrim',
        visible ? 'visible' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classNames} onClick={onClick} {...props}>
            {children}
        </div>
    );
};

export default Scrim;
