/**
 * AISuggestionCard - Atomic Variant (Figma Node 21151:70743)
 */
window.renderAISuggestionCard = function({ title, icon, onClick }) {
    const card = document.createElement('div');
    card.className = 'ai-suggestion-card';
    card.onclick = onClick;

    const iconWrap = document.createElement('div');
    iconWrap.className = 'card-icon';
    if (window.renderIcon) {
        iconWrap.appendChild(window.renderIcon({ name: icon || 'cart-outline', size: 20 }));
    }
    card.appendChild(iconWrap);

    const titleEl = document.createElement('p');
    titleEl.className = 'card-title';
    titleEl.textContent = title;
    card.appendChild(titleEl);

    return card;
};
