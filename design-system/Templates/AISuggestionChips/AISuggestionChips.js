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
    const layoutClass = layout.replace(/\s+/g, '-');
    container.className = `ai-suggestion-chips layout-${layoutClass}`;

    let target = container;
    if (layout === 'carousel') {
        const carousel = document.createElement('div');
        carousel.className = 'suggestion-carousel-container';
        container.appendChild(carousel);
        target = carousel;
    }

    if (layout === 'grid') {
        container.style.display = 'grid';
        container.style.gridTemplateColumns = '1fr 1fr';
        container.style.gap = '8px';
    }

    if (layout === 'list-title' || layout === 'list title') {
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
        let chipEl;

        // Complex Layouts (Cards)
        if (layout === 'card compact' || layout === 'card-compact' || layout === 'card description' || layout === 'card-description') {
            chipEl = document.createElement('div');
            chipEl.className = 'suggestion-chip';

            const headerRow = document.createElement('div');
            headerRow.style.cssText = 'display: flex; width: 100%; align-items: center; justify-content: space-between;';

            const leftPart = document.createElement('div');
            leftPart.style.cssText = 'display: flex; gap: 4px; align-items: center;';

            if (item.icon && window.renderIcon) {
                const iconContainer = document.createElement('div');
                iconContainer.className = 'chip-graphic-container';
                iconContainer.style.width = '24px';
                iconContainer.style.height = '24px';
                iconContainer.appendChild(renderIcon({ name: item.icon, size: 16, variant: 'gradient' }));
                leftPart.appendChild(iconContainer);
            }

            if (showTitleText) {
                const title = document.createElement('h4');
                title.className = 'chip-title card-title';
                title.textContent = item.title;
                leftPart.appendChild(title);
            }

            headerRow.appendChild(leftPart);

            if (layout.includes('description') && window.renderIcon) {
                headerRow.appendChild(renderIcon({ name: 'chevron-right', size: 20 }));
            }

            chipEl.appendChild(headerRow);

            const subtext = document.createElement('p');
            subtext.className = 'chip-subtext';
            subtext.textContent = item.subtext || item.title;
            chipEl.appendChild(subtext);
        }
        // Group Icon (Horizontal Pill Row)
        else if (layout === 'group icon' || layout === 'group-icon') {
            if (window.renderChip) {
                chipEl = renderChip({
                    label: item.title,
                    variant: 'outline-gradient',
                    size: 'medium',
                    graphic: true,
                    leftIcon: item.icon || 'ai-shopping',
                    rightIcon: 'chevron-right'
                });
            } else {
                chipEl = document.createElement('div');
                chipEl.className = 'suggestion-chip';
                chipEl.textContent = item.title;
            }
        }
        // Grid (Hero Category)
        else if (layout === 'grid') {
            if (window.renderChip) {
                chipEl = renderChip({
                    label: item.title,
                    variant: 'hero-category',
                    leftIcon: item.icon
                });
            } else {
                chipEl = document.createElement('div');
                chipEl.className = 'suggestion-chip';
                chipEl.textContent = item.title;
            }
        }
        // Carousel / Specific List types using core Chips
        else if (window.renderChip) {
            if (layout === 'carousel') {
                chipEl = renderChip({
                    label: item.title,
                    variant: 'suggestion-card',
                    leftIcon: item.icon
                });
                chipEl.className += ' suggestion-chip';
            } else if ((layout === 'list-tag' || layout === 'list tag') && window.renderTag) {
                chipEl = document.createElement('div');
                chipEl.className = 'suggestion-chip layout-list-tag-item';
                chipEl.appendChild(renderTag({
                    label: item.tag || 'Label',
                    style: 'solid',
                    priority: 'primary',
                    shape: 'circle',
                    size: 'small'
                }));
                const p = document.createElement('p');
                p.className = 'chip-subtext';
                p.textContent = item.title;
                chipEl.appendChild(p);
            } else if ((layout === 'list-icon' || layout === 'list icon') && window.renderIcon) {
                chipEl = document.createElement('div');
                chipEl.className = 'suggestion-chip layout-list-icon-item';
                chipEl.appendChild(renderIcon({ name: 'arrow-turn-down-right', size: 24, variant: 'outline' }));
                const p = document.createElement('p');
                p.className = 'chip-subtext';
                p.textContent = item.title;
                chipEl.appendChild(p);
            } else {
                // Default List
                chipEl = renderChip({
                    label: item.title,
                    variant: 'solid-rounded',
                    size: 'small',
                    leftIcon: item.icon
                });
                chipEl.className += ' suggestion-chip';
            }
        } else {
            // Fallback
            chipEl = document.createElement('div');
            chipEl.className = 'suggestion-chip';
            chipEl.textContent = item.title;
        }

        target.appendChild(chipEl);
    });

    return container;
}
