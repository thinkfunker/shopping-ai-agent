/**
 * Render AI Text Input Template
 * @param {Object} options
 * @param {string} options.type - default | login button | multiline
 * @param {boolean} options.background
 * @param {boolean} options.showFooter
 * @returns {HTMLElement}
 */
function renderAITextInputTemplate({
    type = 'default',
    background = true,
    showFooter = false,
    showLeftButton = true,
    showSystem = true,
    placeholder = "무엇이든 물어보세요"
} = {}) {
    const root = document.createElement('div');
    root.className = `ai-text-input-template ${background ? 'bg-on' : 'bg-off'}`;

    const container = document.createElement('div');
    container.className = 'ai-text-input-template-container';

    if (showLeftButton && type === 'default') {
        const btn = document.createElement('button');
        btn.className = 'ai-left-btn-placeholder';
        if (window.renderIcon) {
            btn.appendChild(renderIcon({ name: 'plus', size: 24, variant: 'outline' }));
        } else {
            btn.innerHTML = '+';
        }
        btn.style.cssText = 'width: 48px; height: 48px; border-radius: 100px; border: 1px solid #ddd; background: white; display: flex; align-items: center; justify-content: center;';
        container.appendChild(btn);
    }

    const wrapper = document.createElement('div');
    wrapper.className = `ai-text-input-wrapper ${type === 'multiline' ? 'multiline' : ''}`;

    if (type === 'multiline') {
        const textarea = document.createElement('textarea');
        textarea.className = 'ai-text-input-field';
        textarea.placeholder = placeholder;
        wrapper.appendChild(textarea);
    } else {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'ai-text-input-field';
        input.placeholder = placeholder;
        wrapper.appendChild(input);
    }

    const controls = document.createElement('div');
    controls.className = 'ai-input-controls';

    if (type === 'login button') {
        const loginBtn = document.createElement('button');
        loginBtn.className = 'ai-login-btn';
        loginBtn.textContent = 'ログイン';
        controls.appendChild(loginBtn);
    } else {
        const sendBtn = document.createElement('button');
        sendBtn.className = 'ai-send-btn';
        if (window.renderIcon) {
            sendBtn.appendChild(renderIcon({ name: 'arrow-up', size: 24, variant: 'solid' }));
        } else {
            sendBtn.innerHTML = '↑';
        }
        controls.appendChild(sendBtn);
    }

    wrapper.appendChild(controls);
    container.appendChild(wrapper);
    root.appendChild(container);

    if (showFooter) {
        const footer = document.createElement('footer');
        footer.className = 'ai-text-input-footer';
        footer.innerHTML = `
            <p class="disclaimer-text">
                AI의 답변은 부정확할 수 있습니다. AI가 생성한 답변의 주의사항은
                <a class="disclaimer-link">가이드라인</a>
                을 확인해주세요.
            </p>
            <div class="footer-meta-row">
                <p class="disclaimer-text">
                    참고 : <a class="disclaimer-link">mybest</a> (2025/03/12 업데이트)
                </p>
                <div class="footer-info-item">
                    <span>💡</span>
                    <span class="disclaimer-text">상품 정보 주의사항</span>
                </div>
            </div>
        `;
        root.appendChild(footer);
    }

    if (showSystem) {
        const system = document.createElement('div');
        system.className = 'home-indicator-container';
        system.innerHTML = `<div class="home-indicator-bar"></div>`;
        root.appendChild(system);
    }

    return root;
}
