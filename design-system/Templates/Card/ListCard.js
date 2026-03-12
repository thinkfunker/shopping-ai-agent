/**
 * Render List Card Template
 * @param {Object} options
 * @returns {HTMLElement}
 */
function renderListCard({
    header = {},
    items = [],
    images = [],
    actions = []
} = {}) {
    const card = renderCard({ className: 'list-card' });
    card.innerHTML = ''; // Rebuild for ListCard specific layout

    // Header
    if (header.title || header.badge) {
        const headerDiv = document.createElement('div');
        headerDiv.className = 'list-card-header';

        const left = document.createElement('div');
        left.className = 'list-card-header-left';

        if (header.badge) {
            left.innerHTML += `<div class="list-card-badge-row"><span class="badge badge-key">${header.badge}</span></div>`;
        }
        left.innerHTML += `<h3 class="list-card-title">${header.title}</h3>`;
        if (header.subTitle) {
            left.innerHTML += `<span class="card-date">${header.subTitle}</span>`;
        }
        headerDiv.appendChild(left);

        if (header.actionIcon) {
            const iconWrap = document.createElement('div');
            iconWrap.className = 'list-card-header-icon';
            if (window.renderIcon) {
                iconWrap.appendChild(renderIcon({ name: 'magnifying-glass-outline', size: 20 }));
            } else {
                iconWrap.innerHTML = '🔍';
            }
            headerDiv.appendChild(iconWrap);
        }
        card.appendChild(headerDiv);
    }

    // Gallery
    if (images.length > 0) {
        const gallery = document.createElement('div');
        gallery.className = 'list-card-gallery';
        images.forEach(imgUrl => {
            const item = document.createElement('div');
            item.className = 'list-card-gallery-item';
            item.innerHTML = `<img src="${imgUrl}" alt="Item" style="width:100%;height:100%;object-fit:cover;">`;
            gallery.appendChild(item);
        });
        card.appendChild(gallery);
    }

    // List Items
    if (items.length > 0) {
        const itemsDiv = document.createElement('div');
        itemsDiv.className = 'list-card-items';
        items.forEach((item, idx) => {
            // Assuming renderListItem exists
            if (typeof renderListItem === 'function') {
                itemsDiv.appendChild(renderListItem(item));
            } else {
                const dummy = document.createElement('div');
                dummy.textContent = item.title || 'List Item';
                itemsDiv.appendChild(dummy);
            }
            if (idx < items.length - 1) {
                const hr = document.createElement('div');
                hr.className = 'divider';
                itemsDiv.appendChild(hr);
            }
        });
        card.appendChild(itemsDiv);
    }

    // Footer
    if (actions.length > 0) {
        const footer = document.createElement('div');
        footer.className = 'list-card-footer';
        actions.forEach(action => {
            const btn = document.createElement('button');
            btn.className = `btn btn-${action.type || 'secondary'}`;
            btn.textContent = action.label;
            footer.appendChild(btn);
        });
        card.appendChild(footer);
    }

    return card;
}
