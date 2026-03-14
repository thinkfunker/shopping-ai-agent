/**
 * Vanilla JS Review Card Component
 * 
 * @param {object} params
 * @param {string} params.header - 'title', 'none'
 * @param {string} params.tags - 'multiple', 'none'
 * @param {string} params.title - 사용자 이름 또는 제목
 * @param {string} params.content - 리뷰 내용
 * @param {Array} params.tagList - 태그 텍스트 배열
 * @param {number} params.rating - 점수 (1-5)
 * @returns {HTMLElement}
 */
window.renderReviewCard = function ({
    header = "title",
    tags = "none",
    title = "User Name",
    content = "This is a great product! I really enjoyed using it.",
    tagList = ["Tag 1", "Tag 2"],
    rating = 5
} = {}) {
    const card = document.createElement('div');
    card.className = `review-card header-${header} tags-${tags}`;

    if (header === "title") {
        const headerEl = document.createElement('div');
        headerEl.className = 'review-card-header';

        if (window.renderAvatar) {
            headerEl.appendChild(renderAvatar({ size: 'small' }));
        }

        const titleEl = document.createElement('span');
        titleEl.className = 'review-card-title';
        titleEl.textContent = title;
        headerEl.appendChild(titleEl);

        card.appendChild(headerEl);
    }

    if (tags === "multiple" && window.renderTag) {
        const tagsWrapper = document.createElement('div');
        tagsWrapper.className = 'review-card-tags';
        tagList.forEach(tagText => {
            tagsWrapper.appendChild(renderTag({ text: tagText, type: 'secondary' }));
        });
        card.appendChild(tagsWrapper);
    }

    const contentEl = document.createElement('div');
    contentEl.className = 'review-card-content';
    contentEl.textContent = content;
    card.appendChild(contentEl);

    const footer = document.createElement('div');
    footer.className = 'review-card-footer';

    if (window.renderScore) {
        footer.appendChild(renderScore({ score: rating, maxScore: 5 }));
    } else {
        footer.textContent = "⭐".repeat(rating);
    }

    card.appendChild(footer);

    return card;
};
