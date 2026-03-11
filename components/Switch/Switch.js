/**
 * Render a Switch component
 * @param {Object} options
 * @param {boolean} options.checked - Current state
 * @param {boolean} options.disabled - Disabled state
 * @param {Function} options.onChange - Change handler
 * @param {string} options.className - Additional classes
 * @returns {HTMLElement}
 */
function renderSwitch({
    checked = false,
    disabled = false,
    onChange = null,
    className = ''
} = {}) {
    const label = document.createElement('label');
    label.className = `switch ${disabled ? 'disabled' : ''} ${className}`.trim();

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = checked;
    input.disabled = disabled;
    if (onChange) {
        input.addEventListener('change', onChange);
    }

    const track = document.createElement('span');
    track.className = 'switch-track';

    const thumb = document.createElement('span');
    thumb.className = 'switch-thumb';

    track.appendChild(thumb);
    label.appendChild(input);
    label.appendChild(track);

    return label;
}
