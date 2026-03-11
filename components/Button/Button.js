/**
 * Render a Button component
 * @param {Object} options
 * @param {string} options.priority - solid-primary | outline-primary | outline-secondary | outline-tertiary | outline-danger
 * @param {string} options.size - medium | large | xlarge | xxlarge
 * @param {string} options.label - Button text
 * @param {string} options.leftIcon - Icon name for the left side
 * @param {string} options.rightIcon - Icon name for the right side
 * @param {boolean} options.iconOnly - If true, only icons/label will be shown with square-ish padding
 * @param {boolean} options.disabled - If true, button is disabled
 * @param {Function} options.onClick - Click handler
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
function renderButton({
    priority = 'solid-primary',
    size = 'medium',
    label = '',
    leftIcon = null,
    rightIcon = null,
    iconOnly = false,
    disabled = false,
    onClick = null,
    className = ''
} = {}) {
    const button = document.createElement('button');
    button.className = `btn btn-${priority} btn-${size} ${iconOnly ? 'btn-icon-only' : ''} ${className}`.trim();

    if (disabled) button.disabled = true;

    // State layer for hover/focus/pressed effects
    const stateLayer = document.createElement('div');
    stateLayer.className = 'btn-state-layer';
    button.appendChild(stateLayer);

    if (leftIcon) {
        const span = document.createElement('span');
        span.className = 'btn-icon';
        span.appendChild(renderIcon(leftIcon, size === 'xxlarge' ? '24px' : '20px'));
        button.appendChild(span);
    }

    if (!iconOnly && label) {
        const span = document.createElement('span');
        span.className = 'btn-label';
        span.textContent = label;
        button.appendChild(span);
    }

    if (rightIcon) {
        const span = document.createElement('span');
        span.className = 'btn-icon';
        span.appendChild(renderIcon(rightIcon, size === 'xxlarge' ? '24px' : '20px'));
        button.appendChild(span);
    }

    if (onClick) {
        button.addEventListener('click', onClick);
    }

    return button;
}
