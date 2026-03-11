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
function renderGhostButton({
    label = 'Label',
    priority = 'primary',
    size = 'medium',
    iconOnly = false,
    leftIconSrc = null,
    rightIconSrc = null,
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

    const content = document.createElement('div');
    content.className = 'ghost-button-content';

    if (!iconOnly && leftIconSrc) {
        const iconDiv = document.createElement('div');
        iconDiv.className = 'ghost-button-icon';
        const img = document.createElement('img');
        img.src = leftIconSrc;
        iconDiv.appendChild(img);
        content.appendChild(iconDiv);
    }

    if (iconOnly) {
        const iconDiv = document.createElement('div');
        iconDiv.className = 'ghost-button-icon';
        const img = document.createElement('img');
        img.src = leftIconSrc || rightIconSrc;
        iconDiv.appendChild(img);
        content.appendChild(iconDiv);
    } else {
        const span = document.createElement('span');
        span.textContent = label;
        content.appendChild(span);
    }

    if (!iconOnly && rightIconSrc) {
        const iconDiv = document.createElement('div');
        iconDiv.className = 'ghost-button-icon';
        const img = document.createElement('img');
        img.src = rightIconSrc;
        iconDiv.appendChild(img);
        content.appendChild(iconDiv);
    }

    button.appendChild(content);
    return button;
}
