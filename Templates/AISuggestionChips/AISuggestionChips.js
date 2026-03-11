/**
 * Render AI Suggestion Chips
 * @param {Object} options
 * @param {string} options.context - agent home | chat
 * @param {string} options.layout - carousel | card compact | card description | list | list icon | list tag | list title | group icon
 * @param {Array} options.items - [{ title, subtext, icon, tag }]
 * @param {boolean} options.showTitleText
 * @returns {HTMLElement}
 */
function renderAISuggestionChips({
    context = 'agent home',
    layout = 'carousel',
    items = [],
    showTitleText = false
} = {}) {
    const container = document.createElement('div');
    const layoutClass = layout.replace(' ', '-');
    container.className = `ai-suggestion-chips layout-${layoutClass}`;

    let target = container;
    if (layout === 'carousel') {
        const carousel = document.createElement('div');
        carousel.className = 'suggestion-carousel-container';
        container.appendChild(carousel);
        target = carousel;
    }

    if (layout === 'list title') {
        const header = document.createElement('div');
        header.className = 'list-header';
        header.innerHTML = `<h4 class="chip-title" style="font-size: 16px;">${items[0]?.title || 'Header'}</h4>`;
        container.appendChild(header);

        items.slice(1).forEach(item => {
            const row = document.createElement('div');
            row.className = 'list-item';
            row.innerHTML = `<p class="chip-subtext" style="font-size: 16px;">${item.title}</p>`;
            container.appendChild(row);
        });
        return container;
    }

    items.forEach(item => {
        const chip = document.createElement('div');
        chip.className = 'suggestion-chip';

        let innerHTML = '';
        if (layout === 'carousel') {
            innerHTML = `
                ${item.icon ? `<div class="chip-icon">▤</div>` : ''}
                <p class="chip-subtext">${item.title}</p>
            `;
        } else if (layout === 'card compact' || layout === 'card description') {
            innerHTML = `
                <div class="flex" style="width: 100%; align-items: center; justify-content: space-between;">
                    <div class="flex" style="gap: 4px; align-items: center;">
                        ${item.icon ? '<span>▣</span>' : ''}
                        ${showTitleText ? `<h4 class="chip-title card-title">${item.title}</h4>` : ''}
                    </div>
                    ${layout === 'card description' ? '<span>→</span>' : ''}
                </div>
                <p class="chip-subtext">${item.subtext || item.title}</p>
            `;
        } else if (layout === 'list tag') {
            innerHTML = `
                <span class="tag-placeholder" style="background: purple; color: white; border-radius: 100px; padding: 2px 8px; font-size: 10px;">${item.tag || 'Label'}</span>
                <p class="chip-subtext">${item.title}</p>
            `;
        } else if (layout === 'group icon') {
            innerHTML = `
                <span>✦</span>
                <p class="chip-subtext" style="flex: 1;">${item.title}</p>
                <span>›</span>
            `;
        } else {
            innerHTML = `<p class="chip-subtext">${item.title}</p>`;
        }

        chip.innerHTML = innerHTML;
        target.appendChild(chip);
    });

    return container;
}
