/**
 * Render a Toast component
 * @param {Object} options
 * @param {string} options.type - info | success | warning | error
 * @param {string} options.title - Toast title
 * @param {string} options.description - Detail text
 * @param {string} options.buttonLabel - Action button text
 * @param {Function} options.onButtonClick - Action handler
 * @returns {HTMLElement}
 */
function renderToast({
    type = 'info',
    title = 'Title text',
    description = 'Text',
    buttonLabel = '',
    onButtonClick = null
} = {}) {
    const el = document.createElement('div');
    el.className = `toast toast-${type}`;

    const leftArea = document.createElement('div');
    leftArea.className = 'toast-left-area';

    const iconBox = document.createElement('div');
    iconBox.className = 'toast-icon';
    // Simplified icon mapping for vanilla rendering
    let iconChar = 'ℹ';
    if (type === 'success') iconChar = '✔';
    if (type === 'warning' || type === 'error') iconChar = '⚠';
    iconBox.textContent = iconChar;
    leftArea.appendChild(iconBox);

    const textBox = document.createElement('div');
    textBox.className = 'toast-text';

    if (title) {
        const titleEl = document.createElement('h4');
        titleEl.className = 'toast-title';
        titleEl.textContent = title;
        textBox.appendChild(titleEl);
    }

    if (description) {
        const descEl = document.createElement('p');
        descEl.className = 'toast-description';
        descEl.textContent = description;
        textBox.appendChild(descEl);
    }

    leftArea.appendChild(textBox);
    el.appendChild(leftArea);

    if (buttonLabel) {
        const btnLeft = document.createElement('div');
        btnLeft.className = 'toast-button-wrapper';
        const btn = document.createElement('button');
        btn.className = 'toast-action-button';
        btn.textContent = buttonLabel;
        if (onButtonClick) btn.addEventListener('click', onButtonClick);
        btnLeft.appendChild(btn);
        el.appendChild(btnLeft);
    }

    return el;
}
