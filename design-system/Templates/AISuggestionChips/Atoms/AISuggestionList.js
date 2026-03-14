/**
 * AISuggestionList - Atomic Variant (Figma Node 21100:12639)
 */
window.renderAISuggestionListHeader = function({ title }) {
    const header = document.createElement('div');
    header.className = 'ai-suggestion-list-header';

    const iconWrap = document.createElement('div');
    iconWrap.className = 'header-icon';
    if (window.renderIcon) {
        iconWrap.appendChild(window.renderIcon({ name: 'ai-shopping', size: 24 }));
    }
    header.appendChild(iconWrap);

    const titleEl = document.createElement('p');
    titleEl.className = 'header-title';
    titleEl.textContent = title || 'Title text';
    header.appendChild(titleEl);

    return header;
};

window.renderAISuggestionListItem = function({ title, onClick }) {
    const item = document.createElement('div');
    item.className = 'ai-suggestion-list-item';
    item.onclick = onClick;

    const titleEl = document.createElement('p');
    titleEl.className = 'item-title';
    titleEl.textContent = title;
    item.appendChild(titleEl);

    const actionBtn = document.createElement('div');
    actionBtn.className = 'item-action-btn';
    if (window.renderIcon) {
        actionBtn.appendChild(window.renderIcon({ name: 'arrow-up', size: 16 }));
    }
    item.appendChild(actionBtn);

    return item;
};
