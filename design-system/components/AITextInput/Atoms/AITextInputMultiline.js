/**
 * AITextInputMultiline - Atomic Variant (Figma Node 22428:38025)
 */
window.renderAITextInputMultiline = function ({ value, onSend }) {
    const container = document.createElement('div');
    container.className = 'ai-text-input-multiline';

    const inputBox = document.createElement('div');
    inputBox.className = 'input-box-multiline';

    const text = document.createElement('p');
    text.className = 'input-text-multiline';
    text.textContent = value || 'なんでも聞いてくださいなんでも聞いてください';
    inputBox.appendChild(text);

    const actionRow = document.createElement('div');
    actionRow.className = 'multiline-action-row';

    const sendBtn = document.createElement('div');
    sendBtn.className = 'action-button-default'; // 스타일 재사용
    if (window.renderIcon) {
        sendBtn.appendChild(window.renderIcon({ name: 'arrow-up-solid', size: 20 }));
    }
    sendBtn.onclick = onSend;

    actionRow.appendChild(sendBtn);
    inputBox.appendChild(actionRow);
    container.appendChild(inputBox);

    return container;
};
