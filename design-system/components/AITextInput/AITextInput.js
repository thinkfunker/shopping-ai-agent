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
}) {
    const typeClass = type === "multiple" ? "multiple" : "simple";
    const disabledAttr = disabled ? "disabled" : "";
    const leftIcon = showLeftIcon ? `
        <div class="ai-left-btn">
            ${window.renderIcon ? renderIcon({ name: 'plus', variant: 'outline', size: 14 }) : '+'}
        </div>
    ` : '';

    const inputHtml = type === "multiple" ?
        `<textarea placeholder="${placeholder}" ${disabledAttr}></textarea>` :
        `<input type="text" placeholder="${placeholder}" ${disabledAttr} />`;

    return `
        <div class="ai-text-input-container ${typeClass} ${disabled ? 'disabled' : ''}" id="${id}">
            ${leftIcon}
            <div class="ai-input-wrapper">
                ${inputHtml}
            </div>
            <div class="ai-input-controls">
                <button class="ai-input-btn voice" ${disabledAttr}>
                    ${window.renderIcon ? renderIcon({ name: 'microphone', variant: 'outline', size: 20 }) : ''}
                </button>
                <button class="ai-input-btn send" ${disabledAttr}>
                    ${window.renderIcon ? renderIcon({ name: 'arrow-up', variant: 'solid', size: 20 }) : ''}
                </button>
            </div>
        </div>
    `.trim();
};
