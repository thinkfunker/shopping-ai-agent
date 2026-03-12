/**
 * Render MoreButton Component
 * 
 * @param {Object} options
 * @param {boolean} options.disabled - Whether the button is disabled
 * @param {Function} options.onClick - Click handler
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
window.renderMoreButton = function ({
    disabled = false,
    onClick = null,
    className = ''
} = {}) {
    const container = document.createElement('div');
    container.className = `more-button-container ${disabled ? 'disabled' : ''} ${className}`.trim();

    if (!disabled && onClick) {
        container.addEventListener('click', onClick);
    }

    container.setAttribute('role', 'button');
    container.setAttribute('aria-disabled', disabled);
    container.tabIndex = disabled ? -1 : 0;

    const button = document.createElement('div');
    button.className = 'more-button';

    const iconContainer = document.createElement('div');
    iconContainer.className = 'more-button-icon';

    // Assuming renderIcon is available globally or imported
    if (typeof renderIcon === 'function') {
        iconContainer.appendChild(renderIcon({ name: 'chevron-right-solid', size: 24 }));
    } else {
        iconContainer.textContent = '>'; // Fallback
    }

    button.appendChild(iconContainer);
    container.appendChild(button);

    return container;
};
