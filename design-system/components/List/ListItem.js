/**
 * Render a ListItem component
 * @param {Object} options
 * @param {string} options.type - default | divider | box | selectable
 * @param {string} options.title - Main text
 * @param {string} options.subtext - Supporting text
 * @param {string} options.imageSrc - URL for thumbnail
 * @param {HTMLElement} options.rightContent - Element for the right side
 * @param {boolean} options.selected - Selection state
 * @param {boolean} options.disabled - Disabled state
 * @param {Function} options.onClick - Click handler
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
window.renderListItem = function ({
    type = 'default',
    title = '',
    subtext = '',
    imageSrc = null,
    rightContent = null,
    selected = false,
    disabled = false,
    onClick = null,
    className = ''
} = {}) {
    const item = document.createElement('div');
    item.className = `list-item list-item-${type} ${selected ? 'selected' : ''} ${disabled ? 'disabled' : ''} ${className}`.trim();

    if (onClick && !disabled) {
        item.addEventListener('click', onClick);
    }

    // Thumbnail
    if (imageSrc) {
        const thumbDiv = document.createElement('div');
        thumbDiv.className = 'list-item-thumbnail';
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = title;
        thumbDiv.appendChild(img);
        item.appendChild(thumbDiv);
    }

    // Content
    const contentDiv = document.createElement('div');
    contentDiv.className = 'list-item-content';

    if (title) {
        const titleP = document.createElement('p');
        titleP.className = 'list-item-title';
        titleP.textContent = title;
        contentDiv.appendChild(titleP);
    }

    if (subtext) {
        const subtextP = document.createElement('p');
        subtextP.className = 'list-item-subtext';
        subtextP.textContent = subtext;
        contentDiv.appendChild(subtextP);
    }

    item.appendChild(contentDiv);

    // Right Content
    if (rightContent) {
        const rightDiv = document.createElement('div');
        rightDiv.className = 'list-item-right';
        rightDiv.appendChild(rightContent);
        item.appendChild(rightDiv);
    }

    return item;
}
