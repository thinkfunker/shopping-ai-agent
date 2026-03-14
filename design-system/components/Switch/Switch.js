/**
 * Render a Switch component
 * @param {Object} options
 * @param {boolean} options.checked - Current state
 * @param {boolean} options.disabled - Disabled state
 * @param {Function} options.onChange - Change handler
 * @param {string} options.className - Additional classes
 * @returns {HTMLElement}
 */
window.renderSwitch = function ({
    checked = false,
    disabled = false,
    onChange = null,
    className = ''
} = {}) {
    const label = document.createElement('label');
    label.className = `switch ${checked ? 'switch-on' : 'switch-off'} ${disabled ? 'disabled' : ''} ${className}`.trim();

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = checked;
    input.disabled = disabled;
    input.addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            label.classList.add('switch-on');
            label.classList.remove('switch-off');
        } else {
            label.classList.add('switch-off');
            label.classList.remove('switch-on');
        }
        if (onChange) onChange(e);
    });

    const track = document.createElement('span');
    track.className = 'switch-track';

    const thumb = document.createElement('span');
    thumb.className = 'switch-thumb';

    track.appendChild(thumb);
    label.appendChild(input);
    label.appendChild(track);

    return label;
};
