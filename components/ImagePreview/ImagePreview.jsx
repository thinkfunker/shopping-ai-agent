import React from 'react';
import './ImagePreview.css';
import Button from '../Button/Button';
import Icon from '../Icon';
import Score from '../Score/Score';
import Tag from '../Tag/Tag';

/**
 * ImagePreview Component
 * 
 * @param {boolean} isOpen - Whether the preview is visible
 * @param {string} imageSrc - Main image URL
 * @param {string} title - Image title
 * @param {number} score - Rating value
 * @param {number} reviewCount - Number of reviews
 * @param {Array<string>} tags - List of tag labels
 * @param {string} serviceLink - Link to external service
 * @param {string} serviceName - Name of external service (e.g. 'Yahoo!MAP')
 * @param {Function} onClose - Close callback
 * @param {Function} onPrev - Previous image callback
 * @param {Function} onNext - Next image callback
 * @param {boolean} showBottomArea - Whether to show info at the bottom
 * @param {boolean} showNavButtons - Whether to show left/right nav arrows
 */
const ImagePreview = ({
    isOpen = false,
    imageSrc,
    title = '',
    score = 5.0,
    reviewCount = 999,
    tags = [],
    serviceLink = '',
    serviceName = 'Service Name',
    onClose,
    onPrev,
    onNext,
    showBottomArea = true,
    showNavButtons = true
}) => {
    if (!isOpen) return null;

    return (
        <div className="image-preview-overlay">
            <button className="image-preview-close-btn" onClick={onClose}>
                <Icon name="cross-solid" size={24} />
            </button>

            <div className="image-preview-main">
                <div className="image-preview-thumbnail">
                    <img src={imageSrc} alt={title} />
                </div>

                {showNavButtons && onPrev && (
                    <div className="image-preview-nav-btn left">
                        <Button
                            priority="solid-primary"
                            size="medium"
                            iconOnly
                            icon="chevron-left-outline"
                            onClick={onPrev}
                        />
                    </div>
                )}

                {showNavButtons && onNext && (
                    <div className="image-preview-nav-btn right">
                        <Button
                            priority="solid-primary"
                            size="medium"
                            iconOnly
                            icon="chevron-right-outline"
                            onClick={onNext}
                        />
                    </div>
                )}
            </div>

            {showBottomArea && (
                <div className="image-preview-bottom">
                    <div className="image-preview-text-group">
                        <h2 className="image-preview-title">{title}</h2>
                        <Score
                            score={score}
                            count={reviewCount}
                            showLeadingText
                            showTrailingText
                            color="white"
                        />
                        {tags.length > 0 && (
                            <div className="image-preview-tags">
                                {tags.map((tag, idx) => (
                                    <Tag key={idx} label={tag} type="gradient" size="xsmall" />
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="image-preview-service-row">
                        <a
                            href={serviceLink}
                            className="image-preview-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {serviceName}
                        </a>
                        <button className="image-preview-more-btn">
                            <Icon name="ellipsis-vertical-solid" size={24} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImagePreview;
