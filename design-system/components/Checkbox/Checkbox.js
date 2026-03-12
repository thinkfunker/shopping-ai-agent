/**
 * Render a Checkbox component
 * @param {Object} options
 * @param {string} options.label - The text label
 * @param {boolean} options.checked - Selection state
 * @param {boolean} options.disabled - Disabled state
 * @param {Function} options.onChange - Change handler
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
window.renderCheckbox = function ({
    label = '',
    checked = false,
    disabled = false,
    onChange = null,
    className = ''
} = {}) {
    const labelElement = document.createElement('label');
    labelElement.className = `checkbox-container ${checked ? 'selected' : ''} ${disabled ? 'disabled' : ''} ${className}`.trim();

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'checkbox-input';
    input.checked = checked;
    input.disabled = disabled;

    const checkboxBox = document.createElement('div');
    checkboxBox.className = 'checkbox-box';

    const iconDiv = document.createElement('div');
    iconDiv.className = 'checkbox-icon';

    if (window.renderIcon) {
        iconDiv.appendChild(renderIcon({ name: 'check', size: 12 }));
    }

    checkboxBox.appendChild(iconDiv);

    labelElement.appendChild(input);
    labelElement.appendChild(checkboxBox);

    if (label) {
        const labelSpan = document.createElement('span');
        labelSpan.className = 'checkbox-label';
        labelSpan.textContent = label;
        labelElement.appendChild(labelSpan);
    }

    input.addEventListener('change', (e) => {
        if (!disabled) {
            const isChecked = e.target.checked;
            if (isChecked) {
                labelElement.classList.add('selected');
            } else {
                labelElement.classList.remove('selected');
            }
            if (onChange) {
                onChange(isChecked);
            }
        }
    });

    return labelElement;
};
