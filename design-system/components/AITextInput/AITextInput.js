/**
 * Vanilla JS AI Text Input Component
 * 
 * @param {object} params
 * @param {string} params.placeholder - 플레이스홀더 텍스트
 * @param {string} params.type - 'simple' or 'multiple'
 * @param {boolean} params.showLeftIcon - 왼쪽 플러스 아이콘 표시 여부
 * @param {boolean} params.disabled - 비활성화 여부
 * @param {string} params.id - 고유 ID
 * @returns {string} HTML String
 */
window.renderAITextInput = function ({
    placeholder = "なんでも聞いてください",
    type = "simple",
    showLeftIcon = true,
    disabled = false,
    id = ""
} = {}) {
    const container = document.createElement('div');
    container.id = id;
    container.className = `ai-text-input-container ${type === "multiple" ? "multiple" : "simple"} ${disabled ? 'disabled' : ''}`;

    if (showLeftIcon) {
        const leftBtn = document.createElement('div');
        leftBtn.className = 'ai-left-btn';
        if (window.renderIcon) {
            leftBtn.appendChild(renderIcon({ category: 'common', name: 'plus', variant: 'outline', size: 14 }));
        } else {
            leftBtn.textContent = '+';
        }
        container.appendChild(leftBtn);
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'ai-input-wrapper';

    let input;
    if (type === "multiple") {
        input = document.createElement('textarea');
    } else {
        input = document.createElement('input');
        input.type = 'text';
    }
    input.placeholder = placeholder;
    if (disabled) input.disabled = true;

    wrapper.appendChild(input);
    container.appendChild(wrapper);

    const controls = document.createElement('div');
    controls.className = 'ai-input-controls';

    const voiceBtn = document.createElement('button');
    voiceBtn.className = 'ai-input-btn voice';
    if (disabled) voiceBtn.disabled = true;
    if (window.renderIcon) {
        voiceBtn.appendChild(renderIcon({ category: 'common', name: 'microphone', variant: 'outline', size: 20 }));
    }
    controls.appendChild(voiceBtn);

    const sendBtn = document.createElement('button');
    sendBtn.className = 'ai-input-btn send';
    if (disabled) sendBtn.disabled = true;
    if (window.renderIcon) {
        sendBtn.appendChild(renderIcon({ category: 'common', name: 'arrow-up', variant: 'solid', size: 20 }));
    }
    controls.appendChild(sendBtn);

    container.appendChild(controls);

    return container;
};
