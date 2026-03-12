/**
 * Render Carousel Component
 * 
 * @param {Object} options
 * @param {string} options.type - 'gallery' | 'media' | 'list' | 'review'
 * @param {Array<HTMLElement>} options.items - List of elements to display
 * @param {boolean} options.showMore - Whether to show the "More" button
 * @param {Function} options.onShowMore - Callback for "More" button
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
/**
 * Render More Button (Carousel Suffix)
 */
window.renderMoreButton = function ({ onClick = null } = {}) {
    const container = document.createElement('div');
    container.className = 'carousel-more-button-container';

    const btn = document.createElement('button');
    btn.className = 'carousel-more-btn';
    if (window.renderIcon) {
        btn.appendChild(renderIcon({ name: 'chevron-right', size: 20 }));
    } else {
        btn.textContent = '>';
    }

    if (onClick) btn.addEventListener('click', onClick);
    container.appendChild(btn);
    return container;
};

window.renderCarousel = function ({
    type = 'gallery',
    items = [],
    showMore = true,
    onShowMore = null,
    className = ''
} = {}) {
    const container = document.createElement('div');
    container.className = `carousel-container carousel-${type} ${className}`.trim();

    const trackWrapper = document.createElement('div');
    trackWrapper.className = 'carousel-track-wrapper';

    items.forEach(item => {
        const itemWrapper = document.createElement('div');
        itemWrapper.className = 'carousel-item';
        itemWrapper.appendChild(item);
        trackWrapper.appendChild(itemWrapper);
    });

    if (showMore) {
        if (typeof renderMoreButton === 'function') {
            trackWrapper.appendChild(renderMoreButton({ onClick: onShowMore }));
        } else {
            const moreWrapper = document.createElement('div');
            moreWrapper.className = 'carousel-more-wrapper';
            const btn = document.createElement('button');
            btn.textContent = '>';
            btn.addEventListener('click', onShowMore);
            moreWrapper.appendChild(btn);
            trackWrapper.appendChild(moreWrapper);
        }
    }

    container.appendChild(trackWrapper);
    return container;
};
