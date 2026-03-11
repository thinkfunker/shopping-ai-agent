import React, { useState } from 'react';
import './ResultPattern.css';
import SelectionCard from './SelectionCard'; // Using SelectionCard as a base for list items if needed

/**
 * Result Pattern Component
 * Handles the display of multiple results in either List or Carousel format.
 * 
 * @param {string} type - 'list' | 'carousel'
 * @param {string} mediaSize - 'none' | 'small' | 'medium' | 'large'
 * @param {Array} items - List of result items
 */
const ResultPattern = ({
    type = 'list',
    mediaSize = 'medium',
    items = [],
    className = ''
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (e) => {
        if (type === 'carousel') {
            const scrollLeft = e.target.scrollLeft;
            const itemWidth = 150; // Approximated item width for dot calculation
            const newIndex = Math.round(scrollLeft / itemWidth);
            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        }
    };

    const renderItem = (item, idx) => {
        // Different layout based on mediaSize
        if (mediaSize === 'small' || mediaSize === 'none') {
            return (
                <div key={idx} className="result-item" style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                    padding: '12px',
                    background: 'white',
                    border: '1px solid var(--border-elevated-1)',
                    borderRadius: '12px',
                    width: type === 'carousel' ? '280px' : '100%',
                    flexShrink: 0
                }}>
                    {mediaSize === 'small' && item.image && (
                        <div style={{ width: '60px', height: '60px', borderRadius: '8px', overflow: 'hidden' }}>
                            <img src={item.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    )}
                    <div style={{ flex: 1 }}>
                        <h5 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>{item.title}</h5>
                        <p style={{ margin: '4px 0 0', fontSize: '12px', color: 'var(--content-secondary)' }}>{item.subtitle}</p>
                    </div>
                </div>
            );
        }

        // Medium / Large layout (Media Card style)
        const isLarge = mediaSize === 'large';
        return (
            <div key={idx} className="result-carousel-item" style={{
                width: isLarge ? '198px' : '141px',
                border: '1px solid var(--border-elevated-1)',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'white'
            }}>
                <div style={{ height: isLarge ? '132px' : '117px', background: '#f0f0f0' }}>
                    {item.image && <img src={item.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                </div>
                <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{item.brand}</span>
                    <p style={{ fontSize: '14px', margin: 0, overflow: 'hidden', textEllipsis: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</p>
                    {isLarge && (
                        <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
                            <span style={{ color: 'var(--content-alert)', fontWeight: 'bold' }}>{item.discount}</span>
                            <span style={{ fontWeight: 'bold' }}>{item.price}</span>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className={`result-pattern type-${type} media-${mediaSize} ${className}`}>
            {type === 'carousel' ? (
                <>
                    <div className="result-carousel-container" onScroll={handleScroll}>
                        {items.map((item, idx) => renderItem(item, idx))}
                    </div>
                    {/* Simplified Pagination */}
                    {items.length > 1 && (
                        <div className="result-pagination">
                            {items.slice(0, Math.min(items.length, 5)).map((_, i) => (
                                <div key={i} className={`pagination-dot ${i === activeIndex ? 'active' : ''}`} />
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <div className="result-list-container">
                    {items.map((item, idx) => renderItem(item, idx))}
                </div>
            )}
        </div>
    );
};

export default ResultPattern;
