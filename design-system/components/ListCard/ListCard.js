/**
 * Vanilla JS List Card Component
 * 
 * @param {object} params
 * @param {string} params.header - 'title', 'titleButton'
 * @param {string} params.media - 'gallery', 'none'
 * @param {string} params.action - 'button', 'buttons', 'icon', 'none'
 * @param {string} params.title - 카드 제목
 * @param {Array} params.items - 갤러리 이미지 URL 배열
 * @returns {HTMLElement}
 */
window.renderListCard = function ({
    header = "title",
    media = "gallery",
    action = "none",
    title = "List Title",
    items = []
} = {}) {
    const card = document.createElement('div');
    card.className = `list-card header-${header} media-${media} action-${action}`;

    const headerEl = document.createElement('div');
    headerEl.className = 'list-card-header';

    const titleEl = document.createElement('h3');
    titleEl.className = 'list-card-title';
    titleEl.textContent = title;
    headerEl.appendChild(titleEl);

    if (header === "titleButton" && window.renderButton) {
        headerEl.appendChild(renderButton({ text: "More", priority: 'ghost', size: 'small' }));
    }
    card.appendChild(headerEl);

    if (media === "gallery") {
        const gallery = document.createElement('div');
        gallery.className = 'list-card-gallery';

        // Placeholder items if none provided
        const displayItems = items.length ? items : [1, 2, 3, 4, 5];
        displayItems.forEach(item => {
            const img = document.createElement('img');
            img.className = 'list-card-media-item';
            img.src = typeof item === 'string' ? item : `https://picsum.photos/seed/${item}/100/100`;
            gallery.appendChild(img);
        });
        card.appendChild(gallery);
    }

    if (action !== "none") {
        const actionsEl = document.createElement('div');
        actionsEl.className = 'list-card-actions';

        if (action === "button") {
            actionsEl.appendChild(renderButton({ text: "Action", priority: 'secondary', width: 'full' }));
        } else if (action === "buttons") {
            actionsEl.appendChild(renderButton({ text: "Cancel", priority: 'ghost' }));
            actionsEl.appendChild(renderButton({ text: "Confirm", priority: 'primary' }));
        } else if (action === "icon" && window.renderIcon) {
            actionsEl.className += ' align-right';
            actionsEl.appendChild(renderIcon({ name: 'arrow-right-outline', size: 24 }));
        }
        card.appendChild(actionsEl);
    }

    return card;
};
