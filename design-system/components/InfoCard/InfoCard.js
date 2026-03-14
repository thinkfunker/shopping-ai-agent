/**
 * Vanilla JS Info Card Component
 * 
 * @param {object} params
 * @param {string} params.detail - 'low', 'medium', 'high'
 * @param {string} params.media - 'thumbnail', 'icon', 'none'
 * @param {string} params.action - 'button', 'none'
 * @param {string} params.date - 카드 상단 날짜
 * @param {string} params.title - 카드 제목
 * @param {string} params.description - 카드 설명
 * @param {string} params.imageUrl - 썸네일 이미지 URL
 * @param {string} params.iconName - 아이콘 이름
 * @param {string} params.buttonText - 버튼 텍스트
 * @returns {HTMLElement}
 */
window.renderInfoCard = function ({
    detail = "medium",
    media = "none",
    action = "none",
    date = "",
    title = "Title Text",
    description = "Description text goes here...",
    imageUrl = "",
    iconName = "bulb-outline",
    buttonText = "Action"
} = {}) {
    const card = document.createElement('div');
    card.className = `info-card detail-${detail} media-${media} action-${action}`;

    if (date) {
        const dateEl = document.createElement('div');
        dateEl.className = 'info-card-date';
        dateEl.textContent = date;
        card.appendChild(dateEl);
    }

    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'info-card-content-wrapper';

    if (media !== "none") {
        const mediaEl = document.createElement('div');
        mediaEl.className = 'info-card-media';

        if (media === "thumbnail") {
            const img = document.createElement('img');
            img.className = 'info-card-thumbnail';
            img.src = imageUrl || 'https://via.placeholder.com/64';
            mediaEl.appendChild(img);
        } else if (media === "icon" && window.renderIcon) {
            mediaEl.className += ' info-card-icon';
            mediaEl.appendChild(renderIcon({ name: iconName, size: 24 }));
        }
        contentWrapper.appendChild(mediaEl);
    }

    const textContainer = document.createElement('div');
    textContainer.className = 'info-card-text-container';

    const titleEl = document.createElement('h3');
    titleEl.className = 'info-card-title';
    titleEl.textContent = title;
    textContainer.appendChild(titleEl);

    if (detail === "high") {
        const divider = document.createElement('div');
        divider.className = 'info-card-divider';
        textContainer.appendChild(divider);
    }

    if (detail !== "low") {
        const descEl = document.createElement('p');
        descEl.className = 'info-card-description';
        descEl.textContent = description;
        textContainer.appendChild(descEl);
    }

    contentWrapper.appendChild(textContainer);
    card.appendChild(contentWrapper);

    if (action === "button" && window.renderButton) {
        const actionEl = document.createElement('div');
        actionEl.className = 'info-card-action';
        actionEl.appendChild(renderButton({
            text: buttonText,
            priority: 'secondary',
            width: 'full'
        }));
        card.appendChild(actionEl);
    }

    return card;
};
