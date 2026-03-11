/**
 * Render a Message component
 * @param {Object} options
 * @param {string} options.role - user | AI
 * @param {string} options.content - Message text
 * @param {string} options.agentName - AI Name
 * @param {boolean} options.background - Bubble background
 * @param {string} options.type - text | image
 * @param {string} options.imageSrc - Image URL
 * @param {string} options.os - mobile | pc
 * @param {string} options.state - enabled | loading
 * @param {string} options.className - Additional classes
 * @returns {HTMLElement}
 */
function renderMessage({
    role = 'user',
    content = '',
    agentName = 'Agent Name',
    background = false,
    type = 'text',
    imageSrc = null,
    os = 'mobile',
    state = 'enabled',
    className = ''
} = {}) {
    const container = document.createElement('div');
    container.className = `message message-role-${role} message-os-${os} ${background ? 'message-background-on' : 'message-background-off'} ${className}`.trim();

    if (state === 'loading') {
        const loading = document.createElement('div');
        loading.className = 'message-loading';
        loading.innerHTML = '<span>⏳</span><div class="message-loading-text">AI Message</div>';
        container.appendChild(loading);
        return container;
    }

    const bubble = document.createElement('div');
    bubble.className = background ? 'message-bubble' : `message-${role}-layout`;

    if (role === 'AI') {
        if (!background) {
            const header = document.createElement('div');
            header.className = 'message-ai-header';
            header.innerHTML = `<div class="avatar avatar-medium">AI</div><div class="message-ai-name">${agentName}</div>`;
            bubble.appendChild(header);
        }

        const body = document.createElement('div');
        body.className = 'message-ai-body';
        const textP = document.createElement('p');
        textP.className = 'message-ai-text';
        textP.textContent = content;
        body.appendChild(textP);
        bubble.appendChild(body);
    } else {
        // User
        if (type === 'image' && imageSrc) {
            const imgCont = document.createElement('div');
            imgCont.className = 'message-image-container';
            const img = document.createElement('img');
            img.src = imageSrc;
            imgCont.appendChild(img);
            bubble.appendChild(imgCont);
        } else {
            if (!background) {
                const av = document.createElement('div');
                av.className = 'avatar avatar-medium';
                av.textContent = 'U';
                bubble.appendChild(av);
            }
            const contentDiv = document.createElement('div');
            contentDiv.className = 'message-user-content';
            contentDiv.textContent = content;
            bubble.appendChild(contentDiv);
        }
    }

    container.appendChild(bubble);
    return container;
}
