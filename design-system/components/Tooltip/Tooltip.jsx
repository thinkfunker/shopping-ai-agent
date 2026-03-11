import React from 'react';
import './Tooltip.css';
import Icon from '../Icon';

/**
 * Tooltip Component
 * 
 * @param {string} title - Optional title
 * @param {string} text - Main message
 * @param {string} position - top (default) | bottom
 * @param {boolean} showClose - Whether to show close button
 * @param {Function} onClose - Close callback
 * @param {string} className - Extra classes
 * @param {React.ReactNode} children - Trigger element (the tooltip will anchor to this)
 */
const Tooltip = ({
    title = '',
    text = 'Tool tip message',
    position = 'top',
    showClose = true,
    onClose,
    className = '',
    children,
    ...props
}) => {
    const [isVisible, setIsVisible] = React.useState(false);

    const classNames = [
        'tooltip',
        `tooltip-${position}`,
        className
    ].filter(Boolean).join(' ');

    return (
        <div
            className="tooltip-wrapper"
            style={{ position: 'relative', display: 'inline-block' }}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}

            {isVisible && (
                <div className={classNames} {...props}>
                    <div className="tooltip-container">
                        {showClose && (
                            <button className="tooltip-close" onClick={onClose} type="button">
                                <Icon name="cross-solid" size={20} />
                            </button>
                        )}
                        <div className="tooltip-content">
                            {title && <h4 className="tooltip-title">{title}</h4>}
                            <p className="tooltip-text">{text}</p>
                        </div>
                        <div className="tooltip-arrow" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tooltip;
