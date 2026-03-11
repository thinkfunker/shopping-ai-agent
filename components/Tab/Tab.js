/**
 * Render a individual Tab Item
 * @param {Object} options
 * @param {string} options.label - Tab title
 * @param {boolean} options.selected - Initial state
 * @param {number|string} options.badge - Badge count
 * @param {boolean} options.dotBadge - Show dot notification
 * @param {Function} options.onClick - Click handler
 * @returns {HTMLElement}
 */
function renderTabItem({
    label = 'Label',
    selected = false,
    badge = null,
    dotBadge = false,
    onClick = null
} = {}) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `tab-item ${selected ? 'selected' : ''}`.trim();
    btn.setAttribute('aria-selected', selected);

    const content = document.createElement('div');
    content.className = 'tab-content';

    const lbl = document.createElement('span');
    lbl.className = 'tab-label';
    lbl.textContent = label;
    content.appendChild(lbl);

    if (badge !== null) {
        const bdg = document.createElement('span');
        bdg.className = 'tab-badge';
        bdg.textContent = badge;
        content.appendChild(bdg);
    }

    if (dotBadge) {
        const dot = document.createElement('span');
        dot.className = 'tab-dot-badge';
        content.appendChild(dot);
    }

    btn.appendChild(content);

    if (selected) {
        const indicator = document.createElement('div');
        indicator.className = 'tab-indicator';
        btn.appendChild(indicator);
    }

    if (onClick) {
        btn.addEventListener('click', onClick);
    }

    return btn;
}

/**
 * Render a Tab container
 * @param {Object} options
 * @param {string} options.type - fixed | flexible
 * @param {string} options.emphasis - default | subtle
 * @param {Array<Object>} options.items - [ { label, selected, onClick, badge, dotBadge } ]
 * @returns {HTMLElement}
 */
function renderTabs({
    type = 'fixed',
    emphasis = 'default',
    items = []
} = {}) {
    const nav = document.createElement('nav');
    nav.className = `tabs tabs-${type} tabs-emphasis-${emphasis}`.trim();

    items.forEach(item => {
        nav.appendChild(renderTabItem(item));
    });

    return nav;
}
