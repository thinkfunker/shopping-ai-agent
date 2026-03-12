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
    container.appendChild(createBtn('good', '👍', false, feedback.good));
    container.appendChild(createDivider());

    // Dislike
    container.appendChild(createBtn('bad', '👎', true, feedback.bad));

    if (isFull) {
        container.appendChild(createDivider());
        // Redo
        container.appendChild(createBtn('redo', '🔄'));
        container.appendChild(createDivider());
        // Copy
        container.appendChild(createBtn('copy', '📋'));
    }

    bar.appendChild(container);
    return bar;
}
