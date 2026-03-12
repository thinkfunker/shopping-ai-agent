/**
 * Render a ToggleButton component
 * @param {Object} options
 * @param {string} options.label - The text label
 * @param {boolean} options.selected - Toggle state
 * @param {string} options.size - medium | large | xlarge | xxlarge
 * @param {boolean} options.disabled - Disabled state
 * @param {string} options.iconName - Icon name (default: 'check')
 * @param {Function} options.onChange - Change handler
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
window.renderToggleButton = function renderToggleButton({
    label = 'Toggle Item',
    selected = false,
    size = 'medium',
    disabled = false,
    iconName = 'ai-shopping',
    onChange = null,
    className = ''
} = {}) {
    const button = document.createElement('button');
    button.className = `toggle-btn toggle-btn-${size} ${selected ? 'selected' : ''} ${className}`.trim();
    button.setAttribute('aria-pressed', selected);

    if (disabled) button.disabled = true;

    // Internal state management for Vanilla JS
    let isSelected = selected;

    function renderContent() {
        button.innerHTML = '';
        if (isSelected) {
            const iconSizeNum = (size === 'xlarge' || size === 'xxlarge') ? 24 : 20;
            const iconContainer = document.createElement('span');
            iconContainer.className = 'toggle-btn-icon';
            if (window.renderIcon) {
                iconContainer.appendChild(renderIcon({ name: iconName, size: iconSizeNum }));
            }
            button.appendChild(iconContainer);
        }

        const span = document.createElement('span');
        span.className = 'toggle-btn-label';
        span.textContent = label;
        button.appendChild(span);
    }

    button.addEventListener('click', () => {
        if (!button.disabled) {
            isSelected = !isSelected;
            button.classList.toggle('selected', isSelected);
            button.setAttribute('aria-pressed', isSelected);
            renderContent();
            if (onChange) onChange(isSelected);
        }
    });

    renderContent();
    return button;
}
