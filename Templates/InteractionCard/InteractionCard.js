/**
 * Render Result Pattern (List or Carousel)
 */
function renderResultPattern({
    type = 'list',
    mediaSize = 'medium',
    items = []
} = {}) {
    const container = document.createElement('div');
    container.className = `result-pattern type-${type} media-${mediaSize}`;

    const itemsContainer = document.createElement('div');
    itemsContainer.className = type === 'carousel' ? 'result-carousel-container' : 'result-list-container';

    items.forEach(item => {
        const itemEl = document.createElement('div');
        if (mediaSize === 'small' || mediaSize === 'none') {
            itemEl.className = 'result-item';
            itemEl.style.cssText = 'display: flex; gap: 12px; align-items: center; padding: 12px; background: white; border: 1px solid var(--border-elevated-1); border-radius: 12px; width: ' + (type === 'carousel' ? '280px' : '100%') + '; flex-shrink: 0;';
            itemEl.innerHTML = `
                ${mediaSize === 'small' && item.image ? `<div style="width: 60px; height: 60px; border-radius: 8px; overflow: hidden;"><img src="${item.image}" style="width: 100%; height: 100%; object-fit: cover;"></div>` : ''}
                <div style="flex: 1;">
                    <h5 style="margin: 0; font-size: 14px;">${item.title}</h5>
                    <p style="margin: 4px 0 0; font-size: 12px; color: var(--content-secondary);">${item.subtitle || ''}</p>
                </div>
            `;
        } else {
            const isLarge = mediaSize === 'large';
            itemEl.className = 'result-carousel-item';
            itemEl.style.cssText = `width: ${isLarge ? '198px' : '141px'}; border: 1px solid var(--border-elevated-1); border-radius: 16px; overflow: hidden; background: white; flex-shrink: 0;`;
            itemEl.innerHTML = `
                <div style="height: ${isLarge ? '132px' : '117px'}; background: #f0f0f0;">
                    ${item.image ? `<img src="${item.image}" style="width: 100%; height: 100%; object-fit: cover;">` : ''}
                </div>
                <div style="padding: 12px;">
                    <span style="font-size: 12px; font-weight: bold;">${item.brand || ''}</span>
                    <p style="font-size: 14px; margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.title}</p>
                </div>
            `;
        }
        itemsContainer.appendChild(itemEl);
    });

    container.appendChild(itemsContainer);

    if (type === 'carousel' && items.length > 1) {
        const pagination = document.createElement('div');
        pagination.className = 'result-pagination';
        for (let i = 0; i < Math.min(items.length, 5); i++) {
            const dot = document.createElement('div');
            dot.className = `pagination-dot ${i === 0 ? 'active' : ''}`;
            pagination.appendChild(dot);
        }
        container.appendChild(pagination);
    }

    return container;
}

/**
 * Render Choice Result Card Template
 */
function renderChoiceResultCard({
    display = 'choice',
    questions = [],
    result = { count: 0, items: [], type: 'carousel', mediaSize: 'medium' }
} = {}) {
    const card = document.createElement('div');
    card.className = `interaction-card choice-result-card ${display === 'both' ? 'display-both' : ''}`;

    // Add Questions
    if (display !== 'result') {
        questions.forEach(q => {
            const section = document.createElement('div');
            section.className = 'interaction-section';
            section.innerHTML = `
                <div class="interaction-header">
                    <span class="icon icon-24">❓</span>
                    <h4 class="interaction-title">${q.text}</h4>
                </div>
                <div class="interaction-chip-group">
                    ${q.choices.map(c => `<button class="chip chip-large ${c.selected ? 'selected' : ''}">${c.label}</button>`).join('')}
                </div>
            `;
            card.appendChild(section);
        });
    }

    // Add Results
    if (display !== 'choice') {
        const resultSection = document.createElement('div');
        resultSection.className = 'interaction-result-section';
        resultSection.innerHTML = `
            <div class="interaction-result-header">
                <span class="icon icon-24">✅</span>
                <div class="interaction-result-text">
                    <span class="interaction-result-count">${result.count}</span>
                    <span class="interaction-result-unit">건</span>
                    <span class="interaction-sub-label">의 결과</span>
                </div>
            </div>
        `;
        resultSection.appendChild(renderResultPattern(result));
        card.appendChild(resultSection);
    }

    return card;
}

/**
 * Render Question Card Template
 */
function renderQuestionCard({
    expanded = true,
    completion = 'incomplete',
    question = '',
    choices = []
} = {}) {
    const card = document.createElement('div');
    card.className = `interaction-card question-card ${expanded ? 'expanded' : 'collapsed'} status-${completion}`;

    card.innerHTML = `
        <div class="interaction-header" style="width: 100%; display: flex; justify-content: space-between;">
            <div style="display: flex; gap: 8px; align-items: center;">
                <span class="icon icon-24">${completion === 'completed' ? '✅' : '❓'}</span>
                <h4 class="interaction-title">${question}</h4>
            </div>
            ${!expanded ? '<span class="icon icon-20">▼</span>' : ''}
        </div>
    `;

    if (expanded) {
        const body = document.createElement('div');
        body.className = 'interaction-section';
        body.innerHTML = `
            <div class="interaction-chip-group">
                ${choices.map(c => `<button class="chip chip-large ${c.selected ? 'selected' : ''}">${c.label}</button>`).join('')}
            </div>
        `;
        card.appendChild(body);
    }

    return card;
}

/**
 * Render Selection Card Template
 */
function renderSelectionCard({
    selected = false,
    title = '',
    subtitle = '',
    image = '',
    tags = []
} = {}) {
    const card = document.createElement('div');
    card.className = `card selection-card ${selected ? 'selected' : ''}`;
    if (selected) card.style.border = '2px solid var(--content-key)';

    card.innerHTML = `
        <div style="display: flex; gap: 16px; align-items: center;">
            <div style="width: 80px; height: 80px; border-radius: 8px; overflow: hidden; background: #eee;">
                <img src="${image}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="flex: 1;">
                <h4 class="interaction-title">${title}</h4>
                <p class="card-date">${subtitle}</p>
                <div class="interaction-chip-group-mini">
                    ${tags.map(t => `<span class="badge badge-key">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `;

    return card;
}
