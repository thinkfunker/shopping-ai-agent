/**
 * Render Media Card Template (Vanilla JS)
 * 100% Alignment with MediaCard.jsx and Design System
 * 
 * @param {Object} options
 * @returns {HTMLElement}
 */
function renderMediaCard({
    title = 'Title',
    subtitle = 'Text Text Text...',
    metaText = ['Text', 'Text', 'Text'],
    rating = 4.5,
    reviewCount = 120,
    score = null,
    features = [],
    imageUrl = '',
    selected = false,
    size = 'medium',
    className = '',
    onClick = null
} = {}) {
    const root = document.createElement('div');
    root.className = `media-card ${selected ? 'selected' : ''} ${className}`.trim();
    if (onClick) root.onclick = onClick;

    const container = document.createElement('div');
    container.className = 'media-card-container';

    // 1. Main Content Section
    const main = document.createElement('div');
    main.className = 'media-card-main';

    const textGroup = document.createElement('div');
    textGroup.className = 'media-card-text-group';

    // Title
    const titleRow = document.createElement('div');
    titleRow.className = 'media-card-title-row';
    const h3 = document.createElement('h3');
    h3.className = 'media-card-title';
    h3.textContent = title;
    titleRow.appendChild(h3);
    textGroup.appendChild(titleRow);

    // Subtitle
    const sub = document.createElement('p');
    sub.className = 'media-card-subtitle';
    sub.textContent = subtitle;
    textGroup.appendChild(sub);

    // Meta
    const meta = document.createElement('div');
    meta.className = 'media-card-meta';
    metaText.forEach((text, idx) => {
        const span = document.createElement('span');
        span.textContent = text;
        meta.appendChild(span);
        if (idx < metaText.length - 1) {
            const dot = document.createElement('span');
            dot.className = 'media-card-dot';
            dot.textContent = '・';
            meta.appendChild(dot);
        }
    });
    textGroup.appendChild(meta);

    // Rating (Utilizing Score Component)
    if (typeof renderScore === 'function') {
        const ratingEl = renderScore({ value: rating, count: reviewCount, size: 'small' });
        ratingEl.className += ' media-card-rating';
        textGroup.appendChild(ratingEl);
    }

    main.appendChild(textGroup);

    // Thumbnail
    const thumbnail = document.createElement('div');
    thumbnail.className = 'media-card-thumbnail';
    if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = title;
        thumbnail.appendChild(img);
    } else {
        const placeholder = document.createElement('div');
        placeholder.className = 'placeholder-img';
        thumbnail.appendChild(placeholder);
    }
    main.appendChild(thumbnail);

    container.appendChild(main);

    // 2. Score Section (AI Match Score)
    if (score !== null && score !== undefined) {
        const scoreSection = document.createElement('div');
        scoreSection.className = 'media-card-score-section';

        const aiScore = document.createElement('div');
        aiScore.className = 'ai-match-score';

        const scoreTitle = document.createElement('span');
        scoreTitle.className = 'score-title';
        scoreTitle.textContent = 'AIマッチ스코어';
        aiScore.appendChild(scoreTitle);

        const graphContainer = document.createElement('div');
        graphContainer.className = 'score-graph-container';

        // SVG Graph (Exact copy from JSX)
        const circumference = 2 * Math.PI * 32;
        const offset = circumference * (score / 100);

        const gradientId = `gradient-score-${Math.random().toString(36).substr(2, 9)}`;
        graphContainer.innerHTML = `
            <svg width="70" height="70" viewBox="0 0 70 70">
                <circle cx="35" cy="35" r="32" fill="none" stroke="var(--bg-tertiary)" stroke-width="6" />
                <circle
                    cx="35" cy="35" r="32" fill="none"
                    stroke="url(#${gradientId})"
                    stroke-width="6"
                    stroke-dasharray="${offset} ${circumference}"
                    transform="rotate(-90 35 35)"
                    stroke-linecap="round"
                />
                <defs>
                    <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#A83DEB" />
                        <stop offset="100%" stop-color="#3083FD" />
                    </linearGradient>
                </defs>
            </svg>
            <div class="score-value">
                ${score}<span class="score-unit">%</span>
            </div>
        `;
        aiScore.appendChild(graphContainer);
        scoreSection.appendChild(aiScore);

        // Info Grid (Features)
        const grid = document.createElement('div');
        grid.className = 'info-grid';
        features.forEach(f => {
            const item = document.createElement('div');
            item.className = 'info-item';

            const label = document.createElement('span');
            label.className = 'info-label';
            label.textContent = f.label;
            item.appendChild(label);

            if (typeof renderIcon === 'function') {
                item.appendChild(renderIcon({ category: 'common', name: f.icon || 'star-full', variant: 'solid', size: 20 }));
            }
            grid.appendChild(item);
        });
        scoreSection.appendChild(grid);
        container.appendChild(scoreSection);
    }

    root.appendChild(container);
    return root;
}
