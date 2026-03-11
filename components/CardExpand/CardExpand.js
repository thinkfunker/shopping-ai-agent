/**
 * Render CardExpand Component
 * 
 * @param {Object} options
 * @param {string} options.type - 'Default' | 'Inline'
 * @param {boolean} options.expand - Toggle state
 * @param {string} options.text - Content text for Inline type
 * @param {Function} options.onToggle - Callback for state change
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
function renderCardExpand({
    type = 'Default',
    expand = false,
    text = '',
    onToggle = null,
    className = ''
} = {}) {
    const container = document.createElement('div');
    container.className = `card-expand card-expand-${type.toLowerCase()} ${className}`.trim();

    if (type === 'Default') {
        const btn = document.createElement('button');
        btn.className = 'card-expand-btn';

        const icon = document.createElement('span');
        icon.className = 'card-expand-icon';
        icon.innerHTML = expand ? '▲' : '▼'; // Placeholder icon

        const label = document.createElement('span');
        label.textContent = expand ? '閉じる' : '詳細を見る';

        btn.appendChild(icon);
        btn.appendChild(label);

        btn.addEventListener('click', () => {
            if (onToggle) onToggle(!expand);
        });

        container.appendChild(btn);
    } else if (type === 'Inline') {
        const p = document.createElement('p');
        p.className = `card-expand-text ${expand ? 'expanded' : 'collapsed'}`;
        p.textContent = text;
        container.appendChild(p);

        if (!expand) {
            const btn = document.createElement('button');
            btn.className = 'card-expand-btn';
            btn.textContent = '詳細を見る';

            btn.addEventListener('click', () => {
                if (onToggle) onToggle(!expand);
            });

            container.appendChild(btn);
        }
    }

    return container;
}
