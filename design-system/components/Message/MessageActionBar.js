/**
 * Render a Message Action Bar component
 * @param {Object} options
 * @param {string} options.type - full | feedback
 * @param {Object} options.feedback - { good: boolean, bad: boolean } selected states
 * @param {Function} options.onAction - (actionKey) callback
 * @param {string} options.className - Additional classes
 * @returns {HTMLElement}
 */
window.renderMessageActionBar = function renderMessageActionBar({
    type = 'full',
    feedback = { good: false, bad: false },
    onAction = null,
    className = ''
} = {}) {
    const isFull = type === 'full';

    const bar = document.createElement('div');
    bar.className = `message-action-bar ${className}`.trim();

    const container = document.createElement('div');
    container.className = 'message-action-bar-container';

    const handleAction = (action) => {
        if (onAction) onAction(action);
    };

    const createBtn = (actionKey, iconName, isBad = false, selected = false) => {
        const btn = document.createElement('button');
        btn.className = `message-action-btn ${isBad ? 'bad-icon' : ''} ${selected ? 'selected' : ''}`.trim();
        btn.innerHTML = `<span class="icon">${iconName}</span>`;
        btn.title = actionKey;
        btn.addEventListener('click', () => handleAction(actionKey));
        return btn;
    };

    const createDivider = () => {
        const div = document.createElement('div');
        div.className = 'message-action-divider';
        return div;
    };

    // Like
    const goodBtn = createBtn('good', '', false, feedback.good);
    if (window.renderIcon) goodBtn.querySelector('.icon').appendChild(renderIcon({ name: 'thumbs-up', size: 16, variant: feedback.good ? 'solid' : 'outline' }));
    else goodBtn.querySelector('.icon').textContent = '👍';
    container.appendChild(goodBtn);

    container.appendChild(createDivider());

    // Dislike
    const badBtn = createBtn('bad', '', true, feedback.bad);
    if (window.renderIcon) badBtn.querySelector('.icon').appendChild(renderIcon({ name: 'thumbs-down', size: 16, variant: feedback.bad ? 'solid' : 'outline' }));
    else badBtn.querySelector('.icon').textContent = '👎';
    container.appendChild(badBtn);

    if (isFull) {
        container.appendChild(createDivider());
        // Redo
        const redoBtn = createBtn('redo', '');
        if (window.renderIcon) redoBtn.querySelector('.icon').appendChild(renderIcon({ name: 'redo', size: 16 }));
        else redoBtn.querySelector('.icon').textContent = '🔄';
        container.appendChild(redoBtn);

        container.appendChild(createDivider());
        // Copy
        const copyBtn = createBtn('copy', '');
        if (window.renderIcon) copyBtn.querySelector('.icon').appendChild(renderIcon({ name: 'copy', size: 16 }));
        else copyBtn.querySelector('.icon').textContent = '📋';
        container.appendChild(copyBtn);
    }

    bar.appendChild(container);
    return bar;
}
