/**
 * AITextInputDefault - Atomic Variant (Figma Node 22163:48481)
 */
window.renderAITextInputDefault = function ({ placeholder, onSend, disabled = false }) {
    const container = document.createElement('div');
    container.className = 'ai-text-input-default';

    const inputBox = document.createElement('div');
    inputBox.className = 'input-box-default';

    const text = document.createElement('p');
    text.className = 'input-placeholder-default';
    text.textContent = placeholder || 'なんでも聞いてください';
    inputBox.appendChild(text);

    const controls = document.createElement('div');
    controls.className = 'input-controls-default';

    const sendBtn = document.createElement('div');
    sendBtn.className = `action-button-default ${disabled ? 'disabled' : ''}`;
    if (window.renderIcon) {
        sendBtn.appendChild(window.renderIcon({
            name: 'arrow-up-solid',
            size: 20,
            color: disabled ? '#ffffff' : '#ffffff'
        }));
    }
    sendBtn.onclick = (e) => {
        if (!disabled && onSend) onSend();
        e.stopPropagation();
    };

    controls.appendChild(sendBtn);
    inputBox.appendChild(controls);
    container.appendChild(inputBox);

    return container;
};
