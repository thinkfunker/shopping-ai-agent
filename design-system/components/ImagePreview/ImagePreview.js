/**
 * Render ImagePreview Component
 * 
 * @param {Object} options
 * @param {boolean} options.isOpen - Whether the preview is visible
 * @param {string} options.imageSrc - Main image URL
 * @param {string} options.title - Image title
 * @param {number} options.score - Rating value
 * @param {number} options.reviewCount - Number of reviews
 * @param {Array<string>} options.tags - List of tag labels
 * @param {string} options.serviceLink - Link to external service
 * @param {string} options.serviceName - Name of external service
 * @param {Function} options.onClose - Close callback
 * @param {Function} options.onPrev - Previous event callback
 * @param {Function} options.onNext - Next event callback
 * @param {boolean} options.showBottomArea - Whether to show info at bottom
 * @returns {HTMLElement|null}
 */
window.renderImagePreview = function renderImagePreview({
    isOpen = false,
    imageSrc = 'https://picsum.photos/800/600',
    title = 'Sample Image Title',
    score = 5.0,
    reviewCount = 999,
    tags = ['Tag 1', 'Tag 2'],
    serviceLink = '#',
    serviceName = 'Service Name',
    onClose = null,
    onPrev = null,
    onNext = null,
    showBottomArea = true
} = {}) {
    if (!isOpen) return null;

    const overlay = document.createElement('div');
    overlay.className = 'image-preview-overlay';

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'image-preview-close-btn';
    if (typeof renderIcon === 'function') {
        closeBtn.appendChild(renderIcon({ name: 'plus', size: 24, className: 'rotate-45' })); // Using plus rotated as cross
    }
    closeBtn.addEventListener('click', onClose);
    overlay.appendChild(closeBtn);

    // Main Content
    const main = document.createElement('div');
    main.className = 'image-preview-main';

    const thumbnail = document.createElement('div');
    thumbnail.className = 'image-preview-thumbnail';
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = title;
    thumbnail.appendChild(img);
    main.appendChild(thumbnail);

    if (onPrev && typeof renderButton === 'function') {
        const prevWrap = document.createElement('div');
        prevWrap.className = 'image-preview-nav-btn left';
        prevWrap.appendChild(renderButton({
            priority: 'solid-primary',
            size: 'medium',
            iconOnly: true,
            leftIcon: 'chevron-left',
            onClick: onPrev
        }));
        main.appendChild(prevWrap);
    }

    if (onNext && typeof renderButton === 'function') {
        const nextWrap = document.createElement('div');
        nextWrap.className = 'image-preview-nav-btn right';
        nextWrap.appendChild(renderButton({
            priority: 'solid-primary',
            size: 'medium',
            iconOnly: true,
            leftIcon: 'chevron-left',
            className: 'rotate-180',
            onClick: onNext
        }));
        main.appendChild(nextWrap);
    }

    overlay.appendChild(main);

    // Bottom Area
    if (showBottomArea) {
        const bottom = document.createElement('div');
        bottom.className = 'image-preview-bottom';

        const textGroup = document.createElement('div');
        textGroup.className = 'image-preview-text-group';

        const h2 = document.createElement('h2');
        h2.className = 'image-preview-title';
        h2.textContent = title;
        textGroup.appendChild(h2);

        if (typeof renderScore === 'function') {
            textGroup.appendChild(renderScore({
                value: score,
                count: reviewCount,
                leadingText: true,
                trailingText: true
            }));
        }

        if (tags.length > 0 && typeof renderTag === 'function') {
            const tagContainer = document.createElement('div');
            tagContainer.className = 'image-preview-tags';
            tags.forEach(t => {
                tagContainer.appendChild(renderTag({
                    label: t,
                    style: 'gradient',
                    size: 'small'
                }));
            });
            textGroup.appendChild(tagContainer);
        }
        bottom.appendChild(textGroup);

        const serviceRow = document.createElement('div');
        serviceRow.className = 'image-preview-service-row';

        const link = document.createElement('a');
        link.href = serviceLink;
        link.className = 'image-preview-link';
        link.target = '_blank';
        link.textContent = serviceName;
        serviceRow.appendChild(link);

        const moreBtn = document.createElement('button');
        moreBtn.className = 'image-preview-more-btn';
        if (typeof renderIcon === 'function') {
            moreBtn.appendChild(renderIcon({ name: 'menu', size: 24 }));
        }
        serviceRow.appendChild(moreBtn);

        bottom.appendChild(serviceRow);
        overlay.appendChild(bottom);
    }

    return overlay;
}
