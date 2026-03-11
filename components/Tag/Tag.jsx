import React from 'react';
import './Tag.css';
import Icon from '../Icon';

/**
 * Tag Component
 * 
 * @param {string} label - Tag text
 * @param {string} style - gradient | solid | outline
 * @param {string} priority - primary | secondary | tertiary
 * @param {string} size - medium | small
 * @param {string} shape - rectangle | circle
 * @param {string} icon - Optional icon name
 * @param {string} className - Extra classes
 */
const Tag = ({
    label = 'Label',
    style = 'solid',
    priority = 'secondary',
    size = 'small',
    shape = 'rectangle',
    icon = null,
    className = '',
    ...props
}) => {
    const classNames = [
        'tag',
        `tag-style-${style}`,
        `tag-priority-${priority}`,
        `tag-size-${size}`,
        `tag-shape-${shape}`,
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classNames} {...props}>
            {icon && (
                <span className="tag-icon">
                    <Icon name={icon} size={size === 'medium' ? 16 : 12} />
                </span>
            )}
            <span className="tag-label">{label}</span>
        </div>
    );
};

export default Tag;
