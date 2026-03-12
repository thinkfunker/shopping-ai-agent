/**
 * Render AiSuggestionList Component
 * 
 * @param {Object} options
 * @param {string} options.title - Header title
 * @param {Array<string>} options.suggestions - List of suggestion strings
 * @param {Function} options.onSuggestionClick - Click handler
 * @returns {HTMLElement}
 */
window.renderAiSuggestionList = function renderAiSuggestionList({
    title = 'AIに追加の質問',
    suggestions = ['もっと安い商品はある？', '送料はいくら？', 'ポイント還元率は？'],
    onSuggestionClick = null
} = {}) {
    const list = document.createElement('div');
    list.className = 'ai-suggestion-list';

    // Header
    const header = document.createElement('div');
    header.className = 'ai-suggestion-header';

    const iconDiv = document.createElement('div');
    iconDiv.className = 'ai-suggestion-header-icon';
    if (typeof renderIcon === 'function') {
        const iconContainer = document.createElement('div');
        iconContainer.className = 'chip-graphic-container';
        iconContainer.style.width = '32px';
        iconContainer.style.height = '32px';
        iconContainer.appendChild(renderIcon({ name: 'ai-shopping', size: 20, variant: 'gradient' }));
        iconDiv.appendChild(iconContainer);
    }

    const h3 = document.createElement('h3');
    h3.className = 'ai-suggestion-header-title';
    h3.textContent = title;

    header.appendChild(iconDiv);
    header.appendChild(h3);
    list.appendChild(header);

    // Items
    suggestions.forEach(text => {
        const item = document.createElement('div');
        item.className = 'ai-suggestion-item';
        item.addEventListener('click', () => {
            if (onSuggestionClick) onSuggestionClick(text);
        });

        const textDiv = document.createElement('div');
        textDiv.className = 'ai-suggestion-text';
        textDiv.textContent = text;

        const btn = document.createElement('div');
        btn.className = 'ai-suggestion-btn';
        if (typeof renderIcon === 'function') {
            btn.appendChild(renderIcon({ name: 'send', size: 20 }));
        }

        item.appendChild(textDiv);
        item.appendChild(btn);
        list.appendChild(item);
    });

    return list;
}
