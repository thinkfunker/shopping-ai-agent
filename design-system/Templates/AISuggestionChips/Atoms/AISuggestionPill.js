/**
 * AISuggestionPill - Atomic Variant (Figma Node 29705:14713)
 */
window.renderAISuggestionPillTag = function({ title, label = 'Label', onClick }) {
    const pill = document.createElement('div');
    pill.className = 'ai-suggestion-pill-tag';
    pill.onclick = onClick;

    const tag = document.createElement('div');
    tag.className = 'pill-tag-label';
    tag.textContent = label;
    pill.appendChild(tag);

    const titleEl = document.createElement('p');
    titleEl.className = 'pill-title';
    titleEl.textContent = title;
    pill.appendChild(titleEl);

    return pill;
};

window.renderAISuggestionPillGroup = function({ title, icon, onClick }) {
    const pill = document.createElement('div');
    pill.className = 'ai-suggestion-pill-group';
    pill.onclick = onClick;

    if (window.renderIcon) {
        pill.appendChild(window.renderIcon({ name: icon || 'brand-sparkle', size: 20 }));
    }

    const titleEl = document.createElement('p');
    titleEl.className = 'pill-title';
    titleEl.textContent = title;
    pill.appendChild(titleEl);

    if (window.renderIcon) {
        pill.appendChild(window.renderIcon({ name: 'chevron-right', size: 16 }));
    }

    return pill;
};
