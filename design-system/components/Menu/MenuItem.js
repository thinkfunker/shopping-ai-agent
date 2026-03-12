/**
 * Render MenuItem Component
 * 
 * @param {Object} options
 * @param {string} options.label - Item text
 * @param {string} options.icon - Icon name
 * @param {boolean} options.divider - Whether to show a divider
 * @param {boolean} options.disabled - Whether the item is disabled
 * @param {Function} options.onClick - Click handler
 * @returns {DocumentFragment}
 */
window.renderMenuItem = function renderMenuItem({
    label = 'Label',
    icon = null,
    divider = false,
    disabled = false,
    onClick = null
} = {}) {
    const fragment = document.createDocumentFragment();

    const btn = document.createElement('button');
    btn.className = 'menu-item';
    if (disabled) btn.disabled = true;
    if (onClick) btn.addEventListener('click', onClick);

    if (icon) {
        const iconSpan = document.createElement('span');
        iconSpan.className = 'menu-item-icon';
        if (typeof renderIcon === 'function') {
            iconSpan.appendChild(renderIcon({ name: icon, size: 20 }));
        }
        btn.appendChild(iconSpan);
    }

    const labelSpan = document.createElement('span');
    labelSpan.className = 'menu-item-label';
    labelSpan.textContent = label;
    btn.appendChild(labelSpan);

    fragment.appendChild(btn);

    if (divider) {
        const dividerContainer = document.createElement('div');
        dividerContainer.className = 'menu-item-divider-container';
        if (typeof renderDivider === 'function') {
            dividerContainer.appendChild(renderDivider());
        } else {
            const hr = document.createElement('hr');
            hr.style.margin = '0';
            hr.style.border = 'none';
            hr.style.borderTop = '1px solid var(--border-secondary, #eee)';
            dividerContainer.appendChild(hr);
        }
        fragment.appendChild(dividerContainer);
    }

    return fragment;
}
