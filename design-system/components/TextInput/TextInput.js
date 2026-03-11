/**
 * Render a Text Input component
 * @param {Object} options
 * @param {string} options.value - Initial value
 * @param {string} options.placeholder - Placeholder text
 * @param {string} options.state - enabled | focused | typing | typed | error | disabled
 * @param {Function} options.onChange - Change handler
 * @param {boolean} options.showLeftIcon - Show pen icon
 * @returns {HTMLElement}
 */
function renderTextInput({
    value = '',
    placeholder = 'Placeholder',
    state = 'enabled',
    onChange = null,
    showLeftIcon = true
} = {}) {
    const container = document.createElement('div');
    container.className = 'text-input-container';

    const wrapper = document.createElement('div');
    wrapper.className = `text-input-wrapper state-${state}`;

    if (showLeftIcon && state === 'enabled') {
        const leftIcon = document.createElement('div');
        leftIcon.className = 'text-input-icon-left';
        leftIcon.innerHTML = '✎'; // Simplified icon
        wrapper.appendChild(leftIcon);
    }

    const input = document.createElement('input');
    input.className = 'text-input';
    input.value = value;
    input.placeholder = placeholder;
    if (state === 'disabled') input.disabled = true;

    input.addEventListener('focus', () => {
        if (state !== 'disabled') {
            wrapper.classList.remove(`state-${state}`);
            wrapper.classList.add('state-focused');
        }
    });

    input.addEventListener('blur', () => {
        if (state !== 'disabled') {
            wrapper.classList.remove('state-focused');
            wrapper.classList.remove('state-typing');
            wrapper.classList.add(input.value ? 'state-typed' : 'state-enabled');
        }
    });

    input.addEventListener('input', (e) => {
        if (state !== 'disabled' && state !== 'error') {
            wrapper.classList.add('state-typing');
        }
        if (onChange) onChange(e.target.value);
    });

    wrapper.appendChild(input);

    // Right icon for typing state
    if (state === 'typing') {
        const rightIcon = document.createElement('div');
        rightIcon.className = 'text-input-icon-right';
        rightIcon.innerHTML = 'ⓧ';
        rightIcon.addEventListener('click', () => {
            input.value = '';
            wrapper.classList.remove('state-typing');
            wrapper.classList.add('state-focused');
            input.focus();
            if (onChange) onChange('');
        });
        wrapper.appendChild(rightIcon);
    }

    container.appendChild(wrapper);
    return container;
}
