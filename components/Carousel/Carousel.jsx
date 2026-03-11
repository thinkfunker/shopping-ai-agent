import React, { useRef } from 'react';
import './Carousel.css';
import MoreButton from './MoreButton';

/**
 * Carousel Component
 * A horizontal scrollable container for various item types.
 * 
 * @param {string} type - 'gallery' | 'media' | 'list' | 'review'
 * @param {React.ReactNode} children - Carousel items
 * @param {boolean} showMore - Whether to show the "More" button at the end
 * @param {Function} onShowMore - Callback for "More" button click
 * @param {string} className - Extra classes
 */
const Carousel = ({
    type = 'gallery',
    children,
    showMore = true,
    onShowMore,
    className = ''
}) => {
    const scrollRef = useRef(null);

    return (
        <div className={`carousel-container carousel-${type} ${className}`}>
            <div className="carousel-track-wrapper" ref={scrollRef}>
                {React.Children.map(children, (child, index) => (
                    <div className="carousel-item" key={index}>
                        {child}
                    </div>
                ))}

                {showMore && (
                    <div className="carousel-more-wrapper">
                        <MoreButton onClick={onShowMore} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Carousel;
