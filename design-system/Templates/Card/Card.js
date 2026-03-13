/**
 * Render Card Template
 * @param {Object} options
 * @returns {HTMLElement}
 */
window.renderCard = function ({
    title = 'Title',
    date = '',
    value = '',
    unit = '',
    indicator = null,
    metrics = [],
    listItems = [],
    imageUrl = '',
    detail = 'medium'
} = {}) {
    const root = document.createElement('div');
    root.className = `card card-${detail}`;

    // Header
    const header = document.createElement('div');
    header.className = 'card-header';
    header.innerHTML = `<h3 class="card-title">${title}</h3>`;
    if (date) {
        header.innerHTML += `<span class="dot-divider">•</span><span class="card-date">${date}</span>`;
    }
    root.appendChild(header);

    // Main Data
    if (value || imageUrl) {
        const dataRow = document.createElement('div');
        dataRow.className = 'card-data-row';

        const left = document.createElement('div');
        left.className = 'card-left';
        if (value) {
            left.innerHTML = `
                <div class="card-value-group">
                    <span class="card-value">${value}</span>
                    <span class="card-unit">${unit}</span>
                </div>
            `;
        }
        if (indicator !== null) {
            left.innerHTML += `
                <div class="card-indicator">
                    <span>${indicator >= 0 ? '↑' : '↓'}</span>
                    <span>${Math.abs(indicator)}°</span>
                </div>
            `;
        }
        dataRow.appendChild(left);

        if (imageUrl) {
            const thumb = document.createElement('div');
            thumb.className = 'card-thumbnail';
            thumb.innerHTML = `<img src="${imageUrl}" alt="${title}">`;
            dataRow.appendChild(thumb);
        }
        root.appendChild(dataRow);
    }

    // Metrics
    if (metrics.length > 0) {
        const metricsRow = document.createElement('div');
        metricsRow.className = 'card-metrics';
        metrics.forEach(m => {
            const item = document.createElement('div');
            item.className = 'metric-item';
            item.innerHTML = `
                <span class="metric-label">${m.label}</span>
                <span class="metric-value">${m.value}${m.unit || ''}</span>
            `;
            metricsRow.appendChild(item);
        });
        root.appendChild(metricsRow);
    }

    // List Items
    if (listItems.length > 0) {
        const listDiv = document.createElement('div');
        listDiv.className = 'card-list';
        listItems.forEach(item => {
            const li = document.createElement('div');
            li.className = 'card-list-item';
            li.textContent = item;
            listDiv.appendChild(li);
        });
        root.appendChild(listDiv);
    }

    return root;
}
