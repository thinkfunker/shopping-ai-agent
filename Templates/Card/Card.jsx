import React from 'react';
import './Card.css';
import Icon from '../../components/Icon';
import Divider from '../../components/Divider/Divider';

/**
 * Card Template
 * 
 * @param {string} title - Main title/category
 * @param {string} date - Date or supporting label
 * @param {string} value - Large numeric value (e.g. Temperature, Price)
 * @param {string} unit - Unit (e.g. °C, %)
 * @param {number} indicator - Change value (positive/negative)
 * @param {Array} metrics - List of { label, value, unit }
 * @param {Array} listItems - List of strings for bullet points
 * @param {string} imageUrl - Optional thumbnail
 * @param {string} detail - low | medium | high
 */
const Card = ({
    title = 'Title',
    date = '',
    value = '',
    unit = '',
    indicator = null,
    metrics = [],
    listItems = [],
    imageUrl = '',
    detail = 'medium',
    className = '',
    onClick
}) => {
    return (
        <div
            className={`card card-${detail} ${className}`}
            onClick={onClick}
        >
            {/* Header / Date */}
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
                {date && (
                    <>
                        <span className="dot-divider">•</span>
                        <span className="card-date">{date}</span>
                    </>
                )}
            </div>

            {/* Main Data Section */}
            {(value || imageUrl) && (
                <div className="card-data-row">
                    <div className="card-left">
                        {value && (
                            <div className="card-value-group">
                                <span className="card-value">{value}</span>
                                <span className="card-unit">{unit}</span>
                            </div>
                        )}
                        {indicator !== null && (
                            <div className="card-indicator">
                                <Icon name={indicator >= 0 ? 'arrow-up-solid' : 'arrow-down-solid'} size={20} />
                                <span>{Math.abs(indicator)}°</span>
                            </div>
                        )}
                    </div>
                    {imageUrl && (
                        <div className="card-thumbnail">
                            <img src={imageUrl} alt={title} />
                        </div>
                    )}
                </div>
            )}

            {/* Metrics Row */}
            {metrics.length > 0 && (
                <div className="card-metrics">
                    {metrics.map((m, idx) => (
                        <div key={idx} className="metric-item">
                            <span className="metric-label">{m.label}</span>
                            <span className="metric-value">{m.value}{m.unit}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* List / Bullets (for High detail) */}
            {listItems.length > 0 && (
                <>
                    <Divider />
                    <div className="card-list">
                        {listItems.map((item, idx) => (
                            <div key={idx} className="card-list-item">
                                {item}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Card;
