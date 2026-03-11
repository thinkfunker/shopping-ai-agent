import React from 'react';
import './AISuggestionChips.css';
import Icon from '../../components/Icon';
import Tag from '../../components/Tag/Tag';

/**
 * AI Suggestion Chips Template
 * 
 * @param {string} context - agent home | chat
 * @param {string} layout - carousel | card compact | card description | list | list icon | list tag | list title | group icon
 * @param {Array} items - List of items { title, subtext, icon, tag }
 * @param {boolean} showTitleText - Whether to show title text in card compact
 * @param {string} className - Extra classes
 */
const AISuggestionChips = ({
    context = 'agent home',
    layout = 'carousel',
    items = [],
    showTitleText = false,
    className = '',
    ...props
}) => {
    const classNames = [
        'ai-suggestion-chips',
        `layout-${layout.replace(' ', '-')}`,
        className
    ].filter(Boolean).join(' ');

    const renderChip = (item, index) => {
        switch (layout) {
            case 'carousel':
                return (
                    <div key={index} className="suggestion-chip">
                        {item.icon && (
                            <div className="chip-icon">
                                <Icon name={item.icon} size={20} />
                            </div>
                        )}
                        <p className="chip-subtext">{item.title}</p>
                    </div>
                );

            case 'card compact':
            case 'card description':
                return (
                    <div key={index} className="suggestion-chip">
                        <div className="flex" style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className="flex" style={{ gap: '4px', alignItems: 'center' }}>
                                {item.icon && <Icon name={item.icon} size={20} />}
                                {showTitleText && <h4 className="chip-title card-title">{item.title}</h4>}
                            </div>
                            {layout === 'card description' && <Icon name="chevron-right-solid" size={20} />}
                        </div>
                        <p className="chip-subtext">{item.subtext || item.title}</p>
                    </div>
                );

            case 'list tag':
                return (
                    <div key={index} className="suggestion-chip">
                        <Tag label={item.tag || 'Label'} style="solid" priority="primary" shape="pill" />
                        <p className="chip-subtext">{item.title}</p>
                    </div>
                );

            case 'list icon':
                return (
                    <div key={index} className="suggestion-chip">
                        <Icon name="arrow-turn-down-right-outline" size={24} />
                        <p className="chip-subtext">{item.title}</p>
                    </div>
                );

            case 'group icon':
                return (
                    <div key={index} className="suggestion-chip">
                        <Icon name="ai-shopping" size={20} />
                        <p className="chip-subtext" style={{ flex: 1 }}>{item.title}</p>
                        <Icon name="chevron-right-solid" size={16} />
                    </div>
                );

            default:
                return (
                    <div key={index} className="suggestion-chip">
                        <p className="chip-subtext">{item.title}</p>
                    </div>
                );
        }
    };

    if (layout === 'list title') {
        return (
            <div className={classNames} {...props}>
                <div className="list-header">
                    <h4 className="chip-title" style={{ fontSize: '16px' }}>{items[0]?.title || 'Header'}</h4>
                </div>
                {items.slice(1).map((item, idx) => (
                    <div key={idx} className="list-item">
                        <p className="chip-subtext" style={{ fontSize: '16px' }}>{item.title}</p>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className={classNames} {...props}>
            {layout === 'carousel' ? (
                <div className="suggestion-carousel-container">
                    {items.map((item, idx) => renderChip(item, idx))}
                </div>
            ) : (
                items.map((item, idx) => renderChip(item, idx))
            )}
        </div>
    );
};

export default AISuggestionChips;
