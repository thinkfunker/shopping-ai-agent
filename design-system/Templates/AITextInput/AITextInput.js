/**
 * Render AI Text Input Template
 * Fully reconstructed based on Figma design.
 * 
 * @param {Object} options
 * @param {string} options.type - default | login button | multiline
 * @param {boolean} options.background
 * @param {boolean} options.showFooter
 * @param {boolean} options.showLeftButton
 * @param {boolean} options.showSystem
 * @param {string} options.placeholder
 * @returns {HTMLElement}
 */
window.renderAITextInputTemplate = function ({
    type = 'default',
    background = true,
    showFooter = true,
    showLeftButton = true,
    showSystem = true,
    placeholder = "무엇이든 물어보세요"
} = {}) {
    const container = document.createElement('div');
    container.className = `ai-text-input-template ${background ? 'bg-on' : 'bg-off'}`;

    const mainRow = document.createElement('div');
    mainRow.className = 'ai-text-input-template-container';

    // 1. Left Action Button (Redo/Refresh) - Using Design System Button
    if (showLeftButton && type === 'default' && window.renderButton) {
        const leftBtn = renderButton({
            priority: 'outline-secondary',
            size: 'xlarge',
            leftIcon: 'redo-solid',
            iconOnly: true,
            className: 'ai-redo-btn'
        });
        mainRow.appendChild(leftBtn);
    } else if (showLeftButton && type === 'default') {
        const leftBtn = document.createElement('button');
        leftBtn.className = 'ai-redo-btn';
        leftBtn.textContent = '↺';
        mainRow.appendChild(leftBtn);
    }

    // 2. Input Wrapper (Pill)
    const wrapper = document.createElement('div');
    const isMultiline = type === 'multiline';
    wrapper.className = `ai-text-input-wrapper ${isMultiline ? 'multiline' : ''}`;

    // 2a. Inner Plus Icon (Inside Pill)
    if (window.renderIcon && type === 'default') {
        const innerPlus = document.createElement('div');
        innerPlus.className = 'inner-plus-icon';
        innerPlus.appendChild(renderIcon({ name: 'plus-outline', size: 20 }));
        wrapper.appendChild(innerPlus);
    }

    // 2b. Input Field
    let input;
    if (isMultiline) {
        input = document.createElement('textarea');
        input.rows = 3;
    } else {
        input = document.createElement('input');
        input.type = 'text';
    }
    input.className = 'ai-text-input-field';
    input.placeholder = placeholder;
    wrapper.appendChild(input);

    // 2c. Send Button (Right area of Pill) - Using Design System Button
    if (window.renderButton) {
        const sendBtn = renderButton({
            priority: 'outline-tertiary',
            size: 'medium',
            leftIcon: 'arrow-up-outline',
            iconOnly: true,
            className: 'ai-send-btn'
        });
        wrapper.appendChild(sendBtn);
    } else {
        const sendBtn = document.createElement('button');
        sendBtn.className = 'ai-send-btn';
        sendBtn.textContent = '↑';
        wrapper.appendChild(sendBtn);
    }

    mainRow.appendChild(wrapper);
    container.appendChild(mainRow);

    // 3. Footer
    if (showFooter) {
        const footer = document.createElement('footer');
        footer.className = 'ai-text-input-footer';

        const line1 = document.createElement('p');
        line1.className = 'disclaimer-text';
        line1.innerHTML = `AI의 답변은 부정확할 수 있습니다. AI가 생성한 답변의 주의점은 <a class="disclaimer-link">가이드라인</a>을 확인해주세요.`;
        footer.appendChild(line1);

        const metaRow = document.createElement('div');
        metaRow.className = 'footer-meta-row';

        const line2 = document.createElement('p');
        line2.className = 'disclaimer-text';
        line2.innerHTML = `참고 : <a class="disclaimer-link">mybest</a>（2024/03/11 업데이트）`;
        metaRow.appendChild(line2);

        const infoItem = document.createElement('div');
        infoItem.className = 'footer-info-item';
        if (window.renderIcon) {
            infoItem.appendChild(renderIcon({ name: 'bulb-solid', size: 16 }));
        }
        const infoText = document.createElement('span');
        infoText.className = 'disclaimer-text';
        infoText.textContent = '상품 정보 주의사항';
        infoItem.appendChild(infoText);

        metaRow.appendChild(infoItem);
        footer.appendChild(metaRow);
        container.appendChild(footer);
    }

    // 4. iOS Home Indicator
    if (showSystem) {
        const system = document.createElement('div');
        system.className = 'home-indicator-container';
        const bar = document.createElement('div');
        bar.className = 'home-indicator-bar';
        system.appendChild(bar);
        container.appendChild(system);
    }

    return container;
};
