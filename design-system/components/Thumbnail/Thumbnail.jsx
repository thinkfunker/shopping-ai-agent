import React from 'react';
import './Thumbnail.css';

/**
 * Thumbnail Component
 * 
 * @param {string} src - Image source URL
 * @param {string} ratio - 1:1 | 4:3 | 3:2 | 16:9
 * @param {string} state - image | empty
 * @param {boolean} cropped - If true, object-fit: cover, else contain
 * @param {boolean} gradation - Show bottom gradient overlay
 * @param {boolean} outline - Show subtle border
 * @param {string} className - Extra classes
 */
const Thumbnail = ({
    src = '',
    ratio = '1:1',
    state = 'image',
    cropped = true,
    gradation = false,
    outline = true,
    className = '',
    ...props
}) => {
    const classNames = [
        'thumbnail',
        `thumbnail-ratio-${ratio.replace(':', '-')}`,
        cropped ? 'thumbnail-cropped' : 'thumbnail-not-cropped',
        gradation ? 'thumbnail-gradation' : '',
        outline ? 'thumbnail-outline' : '',
        state === 'empty' ? 'thumbnail-empty' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classNames} {...props}>
            {state === 'image' && src ? (
                <img src={src} alt="Thumbnail" className="thumbnail-image" />
            ) : (
                <div className="thumbnail-placeholder-icon">
                    {/* Placeholder icon representation */}
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="currentColor" />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default Thumbnail;
