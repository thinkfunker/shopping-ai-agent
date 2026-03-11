import React from 'react';
import './CardExpand.css';
import Icon from '../Icon';

/**
 * CardExpand Component
 * 
 * @param {string} type - 'Default' | 'Inline'
 * @param {boolean} expand - Toggle state
 * @param {string} text - Content text for Inline type
 * @param {Function} onToggle - Callback for state change
 * @param {string} className - Extra classes
 */
const CardExpand = ({
    type = 'Default',
    expand = false,
    text = '',
    onToggle,
    className = ''
}) => {
    const isDefault = type === 'Default';
    const isInline = type === 'Inline';

    const handleToggle = (e) => {
        if (onToggle) onToggle(!expand);
    };

    if (isDefault) {
        return (
            <div className={`card-expand card-expand-default ${className}`}>
                <button className="card-expand-btn" onClick={handleToggle}>
                    <Icon
                        name={expand ? 'chevron-up-solid' : 'chevron-down-solid'}
                        size={20}
                    />
                    <span>{expand ? '閉じる' : '詳細を見る'}</span>
                </button>
            </div>
        );
    }

    if (isInline) {
        return (
            <div className={`card-expand card-expand-inline ${className}`}>
                <p className={`card-expand-text ${expand ? 'expanded' : 'collapsed'}`}>
                    {text}
                </p>
                {!expand && (
                    <button className="card-expand-btn" onClick={handleToggle}>
                        <span>詳細を見る</span>
                    </button>
                )}
                {/* 
                  Figma code didn't show 'Close' for Inline, 
                  but we could add it if needed for symmetry.
                  Following Figma for now.
                */}
            </div>
        );
    }

    return null;
};

export default CardExpand;
