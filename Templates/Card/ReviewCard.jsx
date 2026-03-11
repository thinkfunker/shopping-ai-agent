import React from 'react';
import './ReviewCard.css';
import Card from './Card';
import Icon from '../../components/Icon';
import Chip from '../../components/Chip/Chip';

/**
 * Review Card Template
 * 
 * @param {string} storeName - Name of the store (optional)
 * @param {string} storeLogo - URL of the store logo (optional)
 * @param {number} rating - Score out of 5
 * @param {string} reviewerName - Name of the reviewer
 * @param {string} date - Review date
 * @param {string} content - Review text content
 * @param {Array} images - List of image URLs
 * @param {Array} tags - List of strings for tags/chips
 * @param {string} headerType - 'store' (Store info) | 'rating' (Rating first)
 */
const ReviewCard = ({
    storeName,
    storeLogo,
    rating = 5,
    reviewerName = '',
    date = '',
    content = '',
    images = [],
    tags = [],
    headerType = 'store',
    className = '',
    onClick
}) => {
    // Helper to render stars
    const renderStars = (score) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <Icon
                key={i}
                name="star-solid"
                size={12}
                color={i < score ? 'var(--status-warning, #FFB800)' : 'var(--border-elevated-1)'}
            />
        ));
    };

    return (
        <Card className={`review-card ${className}`} onClick={onClick}>
            {/* Header Section */}
            <div className="review-card-header">
                {headerType === 'store' ? (
                    <div className="review-store-info">
                        {storeLogo && <img src={storeLogo} alt={storeName} className="review-store-logo" />}
                        <span className="review-store-name">{storeName}</span>
                    </div>
                ) : (
                    <div className="review-rating-group">
                        <div className="review-stars">{renderStars(rating)}</div>
                        <span className="review-score">{rating.toFixed(1)}</span>
                    </div>
                )}

                <div className="review-meta">
                    <span className="reviewer-name">{reviewerName}</span>
                    <span className="dot-divider">•</span>
                    <span className="review-date">{date}</span>
                </div>
            </div>

            {/* Content Section */}
            {content && <p className="review-text">{content}</p>}

            {/* Media Carousel */}
            {images.length > 0 && (
                <div className="review-media-list">
                    {images.map((img, idx) => (
                        <div key={idx} className="review-media-item">
                            <img src={img} alt={`Review image ${idx + 1}`} />
                        </div>
                    ))}
                </div>
            )}

            {/* Tags */}
            {tags.length > 0 && (
                <div className="review-tags">
                    {tags.map((tag, idx) => (
                        <Chip key={idx} label={tag} size="small" type="assistive" />
                    ))}
                </div>
            )}
        </Card>
    );
};

export default ReviewCard;
