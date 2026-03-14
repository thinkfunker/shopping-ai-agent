/**
 * Render Card Template
 * @param {Object} options
 * @returns {HTMLElement}
 */
window.renderCard = function ({
    title = 'Title',
    date = '',
    description = '',
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

    if (date) {
        const dateEl = document.createElement('div');
        dateEl.className = 'card-date';
        dateEl.textContent = date;
        header.appendChild(dateEl);
    }

    const titleEl = document.createElement('h3');
    titleEl.className = 'card-title';
    titleEl.textContent = title;
    header.appendChild(titleEl);

    root.appendChild(header);

    // Main Data Row (Thumbnail + Description)
    if (imageUrl || description) {
        const dataRow = document.createElement('div');
        dataRow.className = 'card-data-row';

        if (imageUrl) {
            const thumb = document.createElement('div');
            thumb.className = 'card-thumbnail';
            thumb.innerHTML = `<img src="${imageUrl}" alt="${title}">`;
            dataRow.appendChild(thumb);
        }

        if (description || value) {
            const rightContent = document.createElement('div');
            rightContent.className = 'card-right-content';

            if (description) {
                const desc = document.createElement('p');
                desc.className = 'card-description';
                desc.textContent = description;
                rightContent.appendChild(desc);
            }

            if (value) {
                const valGroup = document.createElement('div');
                valGroup.className = 'card-value-group';
                valGroup.innerHTML = `
                    <span class="card-value">${value}</span>
                    <span class="card-unit">${unit}</span>
                `;
                rightContent.appendChild(valGroup);
            }
            dataRow.appendChild(rightContent);
        }
        root.appendChild(dataRow);
    }

    // Metrics & List Items
    if (metrics.length > 0) {
        const metricsRow = document.createElement('div');
        metricsRow.className = 'card-metrics';
        // ... same as before
        metrics.forEach(m => {
            const item = document.createElement('div');
            item.className = 'metric-item';
            item.innerHTML = `<span class="metric-label">${m.label}</span><span class="metric-value">${m.value}${m.unit || ''}</span>`;
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
