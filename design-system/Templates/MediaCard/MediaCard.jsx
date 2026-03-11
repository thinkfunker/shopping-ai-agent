import React from 'react';
import './MediaCard.css';
import Icon from '../../components/Icon';

/**
 * Media Card Template
 * 
 * @param {string} title - Main title text
 * @param {string} subtitle - Subtitle or description
 * @param {string} metaText - Optional metadata (e.g. price, category)
 * @param {number} rating - Rating value (0-5)
 * @param {number} reviewCount - Number of reviews
 * @param {number} score - AI Match Score (percentage)
 * @param {Array} features - List of features with icons: { label, icon }
 * @param {string} imageUrl - Main thumbnail image
 * @param {boolean} selected - Selection state
 * @param {string} size - medium | large
 */
const MediaCard = ({
    title = 'Title',
    subtitle = 'Text Text Text...',
    metaText = ['Text', 'Text', 'Text'],
    rating = 4.5,
    reviewCount = 120,
    score = 93,
    features = [],
    imageUrl = '',
    selected = false,
    size = 'medium',
    className = '',
    onClick
}) => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<Icon key={i} name="star-full" size={16} color="#FBBC04" />);
            } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                stars.push(<Icon key={i} name="star-half" size={16} color="#FBBC04" />);
            } else {
                stars.push(<Icon key={i} name="star-empty" size={16} color="#E4E7ED" />);
            }
        }
        return stars;
    };

    return (
        <div
            className={`media-card ${selected ? 'selected' : ''} ${className}`}
            onClick={onClick}
        >
            <div className="media-card-container">
                <div className="media-card-main">
                    <div className="media-card-text-group">
                        <div className="media-card-title-row">
                            <h3 className="media-card-title">{title}</h3>
                        </div>
                        <p className="media-card-subtitle">{subtitle}</p>

                        <div className="media-card-meta">
                            {metaText.map((text, idx) => (
                                <React.Fragment key={idx}>
                                    <span>{text}</span>
                                    {idx < metaText.length - 1 && <span className="media-card-dot">・</span>}
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="media-card-rating">
                            <div className="star-group">{renderStars(rating)}</div>
                            <span className="media-card-meta">{rating}</span>
                            <span className="media-card-meta">({reviewCount})</span>
                        </div>
                    </div>

                    <div className="media-card-thumbnail">
                        {imageUrl ? <img src={imageUrl} alt={title} /> : <div className="placeholder-img" />}
                    </div>
                </div>

                {/* AI Score and Info section for certain types */}
                {score !== undefined && (
                    <div className="media-card-score-section">
                        <div className="ai-match-score">
                            <span className="score-title">AIマッチスコア</span>
                            <div className="score-graph-container">
                                {/* Simplified SVG for the matching graph */}
                                <svg width="70" height="70" viewBox="0 0 70 70">
                                    <circle cx="35" cy="35" r="32" fill="none" stroke="#E4E7ED" strokeWidth="6" />
                                    <circle
                                        cx="35" cy="35" r="32" fill="none"
                                        stroke="url(#gradient-score)"
                                        strokeWidth="6"
                                        strokeDasharray={`${2 * Math.PI * 32 * (score / 100)} 201`}
                                        transform="rotate(-90 35 35)"
                                        strokeLinecap="round"
                                    />
                                    <defs>
                                        <linearGradient id="gradient-score" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#A83DEB" />
                                            <stop offset="100%" stopColor="#3083FD" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="score-value">
                                    {score}<span className="score-unit">%</span>
                                </div>
                            </div>
                        </div>

                        <div className="info-grid">
                            {features.map((feature, idx) => (
                                <div key={idx} className="info-item">
                                    <span className="info-label">{feature.label}</span>
                                    <Icon name={feature.icon || 'star'} size={20} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MediaCard;
