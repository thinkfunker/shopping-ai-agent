/**
 * Render a Ghost Button component
 * @param {Object} options
 * @param {string} options.label - The text label
 * @param {string} options.priority - primary | secondary
 * @param {string} options.size - small | medium | large | xlarge
 * @param {boolean} options.iconOnly - Icon only flag
 * @param {string} options.leftIconSrc - URL to left icon
 * @param {string} options.rightIconSrc - URL to right icon
 * @param {boolean} options.disabled - Disabled state
 * @param {Function} options.onClick - Click handler
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
window.renderGhostButton = function ({
    label = 'Label',
    priority = 'primary',
    size = 'medium',
    iconOnly = false,
    leftIcon = null,
    rightIcon = null,
    disabled = false,
    onClick = null,
    className = ''
} = {}) {
    const button = document.createElement('button');
    button.className = `ghost-button ghost-button-${priority} ghost-button-${size} ${iconOnly ? 'ghost-button-icon-only' : ''} ${className}`.trim();
    button.disabled = disabled;

    if (onClick) {
        button.addEventListener('click', onClick);
    }

    const iconSize = (size === 'xlarge' || size === 'large') ? 24 : 20;

    if (leftIcon) {
        const iconDiv = document.createElement('div');
        iconDiv.className = 'ghost-button-icon';
        if (typeof renderIcon === 'function') {
            iconDiv.appendChild(renderIcon({ name: leftIcon, size: iconSize }));
        }
        button.appendChild(iconDiv);
    }

    if (!iconOnly && label) {
        const span = document.createElement('span');
        span.className = 'ghost-button-label';
        span.textContent = label;
        button.appendChild(span);
    }

    if (rightIcon) {
        const iconDiv = document.createElement('div');
        iconDiv.className = 'ghost-button-icon';
        if (typeof renderIcon === 'function') {
            iconDiv.appendChild(renderIcon({ name: rightIcon, size: iconSize }));
        }
        button.appendChild(iconDiv);
    }

    return button;
};
