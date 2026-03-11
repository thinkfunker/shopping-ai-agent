/**
 * Render a Chip component
 * @param {Object} options
 * @param {string} options.label - The text label
 * @param {string} options.variant - solid-rounded-rect | solid-rounded | outline-gradient
 * @param {string} options.size - small | medium | large | xlarge
 * @param {boolean} options.selected - Selection state
 * @param {boolean} options.disabled - Disabled state
 * @param {string} options.leftIcon - Optional left icon
 * @param {string} options.rightIcon - Optional right icon
 * @param {Function} options.onClick - Click handler
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
function renderChip({
    label,
    variant = 'solid-rounded-rect',
    size = 'small',
    selected = false,
    disabled = false,
    leftIcon = null,
    rightIcon = null,
    onClick = null,
    className = ''
} = {}) {
    const chip = document.createElement('div');
    chip.className = `chip chip-${variant} chip-${size} ${selected ? 'selected' : ''} ${className}`.trim();
    chip.setAttribute('role', 'button');
    chip.setAttribute('tabindex', disabled ? '-1' : '0');
    chip.setAttribute('aria-pressed', selected);

    if (disabled) {
        chip.classList.add('disabled');
        chip.setAttribute('disabled', 'true');
    }

    // State layer for hover/focus/pressed effects
    const stateLayer = document.createElement('div');
    stateLayer.className = 'chip-state-layer';
    chip.appendChild(stateLayer);

    const iconSize = (size === 'xlarge' || size === 'large') ? 20 : 16;

    if (leftIcon) {
        const span = document.createElement('span');
        span.className = 'chip-icon chip-left-icon';
        span.appendChild(renderIcon(leftIcon, iconSize));
        chip.appendChild(span);
    }

    const labelSpan = document.createElement('span');
    labelSpan.className = 'chip-label';
    labelSpan.textContent = label;
    chip.appendChild(labelSpan);

    if (rightIcon) {
        const span = document.createElement('span');
        span.className = 'chip-icon chip-right-icon';
        span.appendChild(renderIcon(rightIcon, iconSize));
        chip.appendChild(span);
    }

    chip.addEventListener('click', (e) => {
        if (!disabled && onClick) {
            onClick(e);
        }
    });

    return chip;
}
