/**
 * Render a Chip component
 * @param {Object} options
 * @param {string} options.label - The text label
 * @param {string} options.variant - solid-rounded-rect | solid-rounded | outline-gradient
 * @param {string} options.size - small | medium | large | xlarge
 * @param {boolean} options.selected - Selection state
 * @param {boolean} options.disabled - Disabled state
 * @param {string} options.leftIcon - Optional left icon name
 * @param {string} options.leftIconCategory - Optional left icon category (common, ai, map, service)
 * @param {string} options.leftIconVariant - Optional left icon variant (solid, outline, gradient)
 * @param {string} options.rightIcon - Optional right icon name
 * @param {string} options.rightIconCategory - Optional right icon category
 * @param {Function} options.onClick - Click handler
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
window.renderChip = function ({
    label = 'Label',
    variant = 'solid-rounded-rect',
    size = 'small',
    selected = false,
    disabled = false,
    graphic = false,
    leftIcon = null,
    leftIconCategory = 'common',
    leftIconVariant = 'solid',
    rightIcon = null,
    rightIconCategory = 'common',
    rightIconVariant = 'solid',
    onClick = null,
    className = ''
} = {}) {
    const chip = document.createElement('div');
    chip.className = `chip chip-${variant} chip-${size} ${selected ? 'selected' : ''} ${graphic ? 'graphic' : ''} ${className}`.trim();
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

    // Graphic (AI Gradient Icon Container)
    if (graphic) {
        const graphicContainer = document.createElement('div');
        graphicContainer.className = 'chip-graphic-container';
        if (window.renderIcon) {
            graphicContainer.appendChild(renderIcon({
                category: 'ai',
                name: 'ai-weather', // Default for graphic
                size: (size === 'xlarge' || size === 'large') ? 20 : 14
            }));
        }
        chip.appendChild(graphicContainer);
    }

    if (leftIcon && !graphic) {
        const span = document.createElement('span');
        span.className = 'chip-icon chip-left-icon';
        if (window.renderIcon) {
            span.appendChild(renderIcon({
                category: leftIconCategory,
                name: leftIcon,
                variant: leftIconVariant,
                size: iconSize
            }));
        }
        chip.appendChild(span);
    }

    const labelSpan = document.createElement('span');
    labelSpan.className = 'chip-label';
    labelSpan.textContent = label;
    chip.appendChild(labelSpan);

    if (rightIcon) {
        const span = document.createElement('span');
        span.className = 'chip-icon chip-right-icon';
        if (window.renderIcon) {
            span.appendChild(renderIcon({
                category: rightIconCategory,
                name: rightIcon,
                variant: rightIconVariant,
                size: iconSize
            }));
        }
        chip.appendChild(span);
    }

    chip.addEventListener('click', (e) => {
        if (!disabled && onClick) {
            onClick(e);
        }
    });

    return chip;
}
