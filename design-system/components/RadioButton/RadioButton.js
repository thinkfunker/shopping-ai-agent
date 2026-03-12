/**
 * Render a Radio Button component
 * @param {Object} options
 * @param {string} options.label - The label
 * @param {boolean} options.checked - Selected state
 * @param {boolean} options.disabled - Disabled state
 * @param {string} options.name - Radio group name
 * @param {Function} options.onChange - Change handler
 * @param {string} options.className - Additional classes
 * @returns {HTMLElement}
 */
window.renderRadioButton = function ({
    label = 'Label',
    checked = false,
    disabled = false,
    name = '',
    onChange = null,
    className = ''
} = {}) {
    const radioLabel = document.createElement('label');
    radioLabel.className = `radio-button ${disabled ? 'disabled' : ''} ${className}`.trim();

    const input = document.createElement('input');
    input.type = 'radio';
    input.checked = checked;
    input.disabled = disabled;
    input.name = name;

    if (onChange) {
        input.addEventListener('change', onChange);
    }

    const circle = document.createElement('div');
    circle.className = 'radio-circle';

    const dot = document.createElement('div');
    dot.className = 'radio-dot';

    circle.appendChild(dot);

    radioLabel.appendChild(input);
    radioLabel.appendChild(circle);

    if (label) {
        const span = document.createElement('span');
        span.className = 'radio-label';
        span.textContent = label;
        radioLabel.appendChild(span);
    }

    return radioLabel;
};
