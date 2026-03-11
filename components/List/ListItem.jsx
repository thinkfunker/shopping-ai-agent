import React from 'react';
import './List.css';

/**
 * ListItem component supporting various types (default, divider, box, selectable)
 * 
 * @param {string} type - default | divider | box | selectable
 * @param {string} title - Main text
 * @param {string} subtext - Supporting text
 * @param {string} imageSrc - URL for thumbnail
 * @param {React.ReactNode} rightContent - Content for the right side (e.g., GhostButton)
 * @param {boolean} selected - Only for 'selectable' type
 * @param {boolean} disabled - Disabled state
 * @param {Function} onClick - Click handler
 * @param {string} className - Extra classes
 */
const ListItem = ({
    type = 'default',
    title = '',
    subtext = '',
    imageSrc = null,
    rightContent = null,
    selected = false,
    disabled = false,
    onClick,
    className = '',
    ...props
}) => {
    const classNames = [
        'list-item',
        `list-item-${type}`,
        selected ? 'selected' : '',
        disabled ? 'disabled' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div
            className={classNames}
            onClick={!disabled ? onClick : undefined}
            {...props}
        >
            {imageSrc && (
                <div className="list-item-thumbnail">
                    <img src={imageSrc} alt={title} />
                </div>
            )}

            <div className="list-item-content">
                {title && <p className="list-item-title">{title}</p>}
                {subtext && <p className="list-item-subtext">{subtext}</p>}
            </div>

            {rightContent && (
                <div className="list-item-right">
                    {rightContent}
                </div>
            )}
        </div>
    );
};

export default ListItem;
