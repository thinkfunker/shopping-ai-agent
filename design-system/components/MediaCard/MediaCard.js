/**
 * Vanilla JS Media Card Component
 * 
 * @param {object} params
 * @param {string} params.title - 제목
 * @param {string} params.description - 설명
 * @param {string} params.imageUrl - 이미지 URL
 * @param {string} params.meta - 메타 정보 (날짜, 작성자 등)
 * @returns {HTMLElement}
 */
window.renderMediaCard = function ({
    title = "Media Title",
    description = "This is a social media or product highlight card description.",
    imageUrl = "",
    meta = "Source • 2 hours ago"
} = {}) {
    const card = document.createElement('div');
    card.className = 'media-card';

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'media-card-image-wrapper';

    const img = document.createElement('img');
    img.className = 'media-card-image';
    img.src = imageUrl || 'https://picsum.photos/seed/media/400/225';
    imgWrapper.appendChild(img);
    card.appendChild(imgWrapper);

    const content = document.createElement('div');
    content.className = 'media-card-content';

    const titleEl = document.createElement('h3');
    titleEl.className = 'media-card-title';
    titleEl.textContent = title;
    content.appendChild(titleEl);

    const descEl = document.createElement('p');
    descEl.className = 'media-card-description';
    descEl.textContent = description;
    content.appendChild(descEl);

    const footer = document.createElement('div');
    footer.className = 'media-card-footer';
    footer.textContent = meta;
    content.appendChild(footer);

    card.appendChild(content);

    return card;
};
