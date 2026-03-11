import React from 'react';
import './InteractionCard.css';
import Card from '../Card/Card';
import Icon from '../../components/Icon';
import Badge from '../../components/Badge/Badge';

/**
 * Selection Card Template
 * 
 * @param {boolean} selected - Whether the card is in selected state
 * @param {string} title - Main title
 * @param {string} subtitle - Secondary text
 * @param {string} image - Thumbnail URL
 * @param {Array} tags - List of tags/badges
 */
const SelectionCard = ({
    selected = false,
    title = 'Selected Item Title',
    subtitle = 'Item Subtitle / Description',
    image,
    tags = [],
    onClick,
    className = ''
}) => {
    return (
        <Card
            className={`selection-card ${selected ? 'selected' : ''} ${className}`}
            onClick={onClick}
            style={{
                border: selected ? '2px solid var(--content-key, #0F62FE)' : undefined,
                position: 'relative'
            }}
        >
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                {image && (
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        flexShrink: 0,
                        backgroundColor: 'var(--background-secondary)'
                    }}>
                        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                )}

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <h4 className="interaction-title" style={{ margin: 0 }}>{title}</h4>
                        {selected && (
                            <Icon name="check-circle-solid" size={20} color="var(--content-key)" />
                        )}
                    </div>
                    <span className="card-date">{subtitle}</span>

                    {tags.length > 0 && (
                        <div className="interaction-chip-group-mini" style={{ marginTop: '4px' }}>
                            {tags.map((tag, idx) => (
                                <Badge key={idx} label={tag} type="key" />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default SelectionCard;
