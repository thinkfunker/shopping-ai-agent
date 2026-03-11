/**
 * Render MessageList Component
 * 
 * @param {Object} options
 * @param {Array<HTMLElement>} options.messages - List of message elements
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
function renderMessageList({
    messages = [],
    className = ''
} = {}) {
    const container = document.createElement('div');
    container.className = `message-list ${className}`.trim();

    messages.forEach(msg => {
        const item = document.createElement('div');
        item.className = 'message-list-item';
        item.appendChild(msg);
        container.appendChild(item);
    });

    return container;
}
