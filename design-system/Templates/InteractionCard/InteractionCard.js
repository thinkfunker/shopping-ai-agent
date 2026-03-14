/**
 * Render Result Pattern (List or Carousel)
 */
window.renderResultPattern = function ({
    type = 'list',
    mediaSize = 'medium',
    items = []
} = {}) {
    const container = document.createElement('div');
    container.className = `result-pattern type-${type} media-${mediaSize}`;

    const itemsContainer = document.createElement('div');
    itemsContainer.className = type === 'carousel' ? 'result-carousel-container' : 'result-list-container';

    items.forEach(item => {
        let itemEl;
        if (mediaSize === 'small' || mediaSize === 'none') {
            if (window.renderListItem) {
                itemEl = renderListItem({
                    title: item.title,
                    subtext: item.subtitle,
                    imageSrc: mediaSize === 'small' ? item.image : null,
                    type: 'box',
                    className: type === 'carousel' ? 'carousel-item-width' : ''
                });
                if (type === 'carousel') itemEl.style.width = '280px';
            } else {
                // Fallback
                itemEl = document.createElement('div');
                itemEl.className = 'result-item';
                itemEl.innerHTML = `<h5>${item.title}</h5>`;
            }
        } else {
            if (window.renderMediaCard) {
                itemEl = renderMediaCard({
                    title: item.title,
                    subtitle: item.subtitle || item.brand,
                    imageUrl: item.image,
                    size: mediaSize,
                    score: item.score
                });
                if (type === 'carousel') itemEl.classList.add('result-carousel-item');
            } else {
                itemEl = document.createElement('div');
                itemEl.textContent = item.title;
            }
        }
        itemsContainer.appendChild(itemEl);
    });

    container.appendChild(itemsContainer);

    if (type === 'carousel' && items.length > 1) {
        if (window.renderPageIndicator) {
            const pagination = renderPageIndicator({
                total: Math.min(items.length, 5),
                current: 1,
                type: 'dot'
            });
            pagination.className += ' result-pagination';
            container.appendChild(pagination);
        } else {
            const pagination = document.createElement('div');
            pagination.className = 'result-pagination';
            for (let i = 0; i < Math.min(items.length, 5); i++) {
                const dot = document.createElement('div');
                dot.className = `pagination-dot ${i === 0 ? 'active' : ''}`;
                pagination.appendChild(dot);
            }
            container.appendChild(pagination);
        }
    }

    return container;
}

/**
 * Render Choice Result Card Template
 */
window.renderChoiceResultCard = function ({
    display = 'choice',
    questions = [],
    result = { count: 0, items: [], type: 'carousel', mediaSize: 'medium', unit: '건', suffix: '의 결과' }
} = {}) {
    const card = document.createElement('div');
    card.className = `interaction-card choice-result-card ${display === 'both' ? 'display-both' : ''}`;

    // Background Gradient Overlay (Figma specific)
    const gradientOverlay = document.createElement('div');
    gradientOverlay.className = 'interaction-card-gradient-overlay';
    card.appendChild(gradientOverlay);

    // Add Questions
    if (display !== 'result') {
        questions.forEach((q, idx) => {
            const section = document.createElement('div');
            section.className = 'interaction-section';

            // Question Header
            const header = document.createElement('div');
            header.className = 'interaction-header';

            const iconCont = document.createElement('div');
            iconCont.className = 'interaction-icon-container';
            if (window.renderIcon) {
                iconCont.appendChild(renderIcon({
                    name: `question-text-circle-${q.iconVariant || 'solid'}`,
                    size: 24
                }));
            }

            const titleEl = document.createElement('h4');
            titleEl.className = 'interaction-title';
            titleEl.textContent = q.text;

            header.appendChild(iconCont);
            header.appendChild(titleEl);
            section.appendChild(header);

            // Chip Group
            const chipGroup = document.createElement('div');
            chipGroup.className = 'interaction-chip-group';
            q.choices.forEach(c => {
                if (window.renderChip) {
                    chipGroup.appendChild(renderChip({
                        label: c.label,
                        size: 'large',
                        selected: c.selected,
                        variant: 'outline-gradient'
                    }));
                }
            });
            section.appendChild(chipGroup);

            // 2depth Sub-section
            if (q.subQuestion) {
                const subSection = document.createElement('div');
                subSection.className = 'interaction-sub-section';

                const subLabel = document.createElement('div');
                subLabel.className = 'interaction-sub-label';
                subLabel.textContent = q.subQuestion.text;
                subSection.appendChild(subLabel);

                const subChipGroup = document.createElement('div');
                subChipGroup.className = 'interaction-chip-group-mini';
                q.subQuestion.choices.forEach(sc => {
                    if (window.renderChip) {
                        subChipGroup.appendChild(renderChip({
                            label: sc.label,
                            size: 'medium',
                            selected: sc.selected,
                            variant: sc.selected ? 'outline-gradient' : 'solid-rounded-rect'
                        }));
                    }
                });
                subSection.appendChild(subChipGroup);
                section.appendChild(subSection);
            }

            card.appendChild(section);
        });
    }

    // Add Results
    if (display !== 'choice') {
        const resultSection = document.createElement('div');
        resultSection.className = 'interaction-result-section';

        const resultHeader = document.createElement('div');
        resultHeader.className = 'interaction-result-header';

        if (window.renderIcon) {
            resultHeader.appendChild(renderIcon({ name: 'ai-check', size: 24 }));
        }

        const textWrapper = document.createElement('div');
        textWrapper.className = 'interaction-result-text-wrapper';

        const countEl = document.createElement('span');
        countEl.className = 'interaction-result-count';
        countEl.textContent = result.count.toString().padStart(2, '0');

        const unitEl = document.createElement('span');
        unitEl.className = 'interaction-result-unit';
        unitEl.textContent = result.unit || '件';

        const suffixEl = document.createElement('span');
        suffixEl.className = 'interaction-result-suffix';
        suffixEl.textContent = result.suffix || 'のレシピが見つかりました。';

        textWrapper.appendChild(countEl);
        textWrapper.appendChild(unitEl);
        textWrapper.appendChild(suffixEl);
        resultHeader.appendChild(textWrapper);

        resultSection.appendChild(resultHeader);
        resultSection.appendChild(window.renderResultPattern(result));
        card.appendChild(resultSection);
    }

    return card;
}

/**
 * Render Question Card Template (LEGACY - Replaced by Atomic QuestionCard)
 */
window.renderQuestionCardLegacy = function ({
    expanded = true,
    completion = 'incomplete',
    question = '',
    choices = []
} = {}) {
    const card = document.createElement('div');
    card.className = `interaction-card question-card ${expanded ? 'expanded' : 'collapsed'} status-${completion}`;

    card.innerHTML = `
        <div class="interaction-header" style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; gap: 8px; align-items: center;">
                <div class="interaction-icon-container" style="display: flex; align-items: center; justify-content: center; width: 24px; height: 24px;">
                </div>
                <h4 class="interaction-title">${question}</h4>
            </div>
            <div class="interaction-expand-icon" style="display: flex; align-items: center; justify-content: center; width: 24px; height: 24px;">
            </div>
        </div>
    `;
    const iconCont = card.querySelector('.interaction-icon-container');
    const expandCont = card.querySelector('.interaction-expand-icon');

    if (window.renderIcon) {
        if (completion === 'completed') {
            const icon = renderIcon({ name: 'check-circle', size: 24, variant: 'solid' });
            icon.style.color = 'var(--green-8, #00804c)';
            iconCont.appendChild(icon);
        } else {
            iconCont.appendChild(renderIcon({ name: 'question', size: 24, variant: 'outline' }));
        }

        if (!expanded) {
            expandCont.appendChild(renderIcon({ name: 'chevron-down', size: 24 }));
        } else {
            expandCont.appendChild(renderIcon({ name: 'chevron-up', size: 24 }));
        }
    }
    if (expanded) {
        const body = document.createElement('div');
        body.className = 'interaction-section';
        const chipGroup = document.createElement('div');
        chipGroup.className = 'interaction-chip-group';

        choices.forEach(c => {
            if (window.renderChip) {
                chipGroup.appendChild(renderChip({
                    label: c.label,
                    size: 'large',
                    selected: c.selected,
                    variant: 'solid-rounded-rect'
                }));
            }
        });

        body.appendChild(chipGroup);
        card.appendChild(body);
    }

    return card;
}

/**
 * Render Selection Card Template
 */
window.renderSelectionCard = function ({
    selected = false,
    title = '',
    subtitle = '',
    image = '',
    tags = []
} = {}) {
    const card = document.createElement('div');
    card.className = `card selection-card ${selected ? 'selected' : ''}`;

    card.innerHTML = `
        <div style="display: flex; gap: 16px; align-items: center; width: 100%;">
            <div class="card-thumbnail">
                <img src="${image}" alt="${title}">
            </div>
            <div style="flex: 1; overflow: hidden;">
                <h4 class="interaction-title" style="margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${title}</h4>
                <p class="card-date" style="margin: 4px 0 8px;">${subtitle}</p>
                <div class="interaction-chip-group-mini">
                </div>
            </div>
        </div>
    `;

    if (selected && window.renderIcon) {
        const check = document.createElement('div');
        check.className = 'selected-check';
        check.appendChild(renderIcon({ name: 'check', size: 14, category: 'common', variant: 'solid' }));
        card.appendChild(check);
    }

    const badgeGroup = card.querySelector('.interaction-chip-group-mini');
    tags.forEach(t => {
        if (window.renderBadge) {
            badgeGroup.appendChild(renderBadge({ text: t, type: 'number', priority: 'secondary' }));
        } else {
            const b = document.createElement('span');
            b.className = 'badge';
            b.textContent = t;
            badgeGroup.appendChild(b);
        }
    });

    return card;
}
