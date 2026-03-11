/**
 * Render Media Card Template
 * @param {Object} options
 * @returns {HTMLElement}
 */
function renderMediaCard({
    title = 'Title',
    subtitle = 'Description text',
    metaText = [],
    rating = 0,
    reviewCount = 0,
    score = null,
    features = [],
    imageUrl = '',
    selected = false
} = {}) {
    const root = document.createElement('div');
    root.className = `media-card ${selected ? 'selected' : ''}`;

    const container = document.createElement('div');
    container.className = 'media-card-container';

    // Main Content
    const main = document.createElement('div');
    main.className = 'media-card-main';

    const textGroup = document.createElement('div');
    textGroup.className = 'media-card-text-group';

    const titleRow = document.createElement('div');
    titleRow.className = 'media-card-title-row';
    titleRow.innerHTML = `<h3 class="media-card-title">${title}</h3>`;
    textGroup.appendChild(titleRow);

    const sub = document.createElement('p');
    sub.className = 'media-card-subtitle';
    sub.textContent = subtitle;
    textGroup.appendChild(sub);

    const meta = document.createElement('div');
    meta.className = 'media-card-meta';
    meta.textContent = metaText.join(' ・ ');
    textGroup.appendChild(meta);

    // Rating section omitted for brevity in vanilla JS but pattern stays same

    main.appendChild(textGroup);

    const thumbnail = document.createElement('div');
    thumbnail.className = 'media-card-thumbnail';
    if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        thumbnail.appendChild(img);
    }
    main.appendChild(thumbnail);

    container.appendChild(main);

    // Score Section
    if (score !== null) {
        const scoreSection = document.createElement('div');
        scoreSection.className = 'media-card-score-section';

        const scoreDiv = document.createElement('div');
        scoreDiv.className = 'ai-match-score';
        scoreDiv.innerHTML = `
            <span class="score-title">AIマッチスコア</span>
            <div class="score-graph-container">
                <div class="score-value">${score}<span class="score-unit">%</span></div>
            </div>
        `;
        scoreSection.appendChild(scoreDiv);

        const grid = document.createElement('div');
        grid.className = 'info-grid';
        features.forEach(f => {
            const item = document.createElement('div');
            item.className = 'info-item';
            item.innerHTML = `<span class="info-label">${f.label}</span><span>📍</span>`;
            grid.appendChild(item);
        });
        scoreSection.appendChild(grid);
        container.appendChild(scoreSection);
    }

    root.appendChild(container);
    return root;
}
