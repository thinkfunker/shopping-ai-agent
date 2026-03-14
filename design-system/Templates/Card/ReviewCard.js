/**
 * Render Review Card Template
 * @param {Object} options
 * @returns {HTMLElement}
 */
window.renderReviewCard = function ({
    storeName = '',
    storeLogo = '',
    rating = 5,
    reviewerName = '',
    date = '',
    content = '',
    images = [],
    tags = [],
    headerType = 'store'
} = {}) {
    // Use the synchronized renderCard as a base
    const card = renderCard({
        title: headerType === 'store' ? storeName : reviewerName,
        date: date,
        description: content,
        imageUrl: headerType === 'store' ? storeLogo : '',
        className: 'review-card'
    });
    // We can still add specific review elements if needed, but let's try to keep it simple
    // If renderCard handles the main layout, we only add tags/images if renderCard doesn't already

    // Header
    const header = document.createElement('div');
    header.className = 'review-card-header';

    if (headerType === 'store') {
        const storeInfo = document.createElement('div');
        storeInfo.className = 'review-store-info';
        if (storeLogo) {
            storeInfo.innerHTML += `<img src="${storeLogo}" alt="${storeName}" class="review-store-logo">`;
        }
        storeInfo.innerHTML += `<span class="review-store-name">${storeName}</span>`;
        header.appendChild(storeInfo);
    } else {
        if (typeof renderScore === 'function') {
            const ratingGroup = renderScore({ value: rating, trailingText: false, size: 'small' });
            ratingGroup.className += ' review-rating-group';
            header.appendChild(ratingGroup);
        } else {
            const ratingGroup = document.createElement('div');
            ratingGroup.className = 'review-rating-group';
            ratingGroup.innerHTML = `
                <div class="review-stars">${'★'.repeat(Math.round(rating))}${'☆'.repeat(5 - Math.round(rating))}</div>
                <span class="review-score">${rating.toFixed(1)}</span>
            `;
            header.appendChild(ratingGroup);
        }
    }

    const meta = document.createElement('div');
    meta.className = 'review-meta';
    meta.innerHTML = `
        <span class="reviewer-name">${reviewerName}</span>
        <span class="dot-divider">•</span>
        <span class="review-date">${date}</span>
    `;
    header.appendChild(meta);
    card.appendChild(header);

    // Content
    if (content) {
        const p = document.createElement('p');
        p.className = 'review-text';
        p.textContent = content;
        card.appendChild(p);
    }

    // Media
    if (images.length > 0) {
        const mediaList = document.createElement('div');
        mediaList.className = 'review-media-list';
        images.forEach(imgUrl => {
            const item = document.createElement('div');
            item.className = 'review-media-item';
            item.innerHTML = `<img src="${imgUrl}" alt="Review">`;
            mediaList.appendChild(item);
        });
        card.appendChild(mediaList);
    }

    // Tags
    if (tags.length > 0) {
        const tagsDiv = document.createElement('div');
        tagsDiv.className = 'review-tags';
        tags.forEach(tag => {
            if (typeof renderTag === 'function') {
                tagsDiv.appendChild(renderTag({
                    label: tag,
                    size: 'small',
                    style: 'assistive',
                    priority: 'secondary'
                }));
            } else {
                const span = document.createElement('span');
                span.className = 'chip chip-small chip-assistive';
                span.textContent = tag;
                tagsDiv.appendChild(span);
            }
        });
        card.appendChild(tagsDiv);
    }

    return card;
}
