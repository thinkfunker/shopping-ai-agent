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
    placeholder = "なんでも聞いてください"
} = {}) {
    const root = document.createElement('div');
    root.className = `ai-text-input-template ${background ? 'bg-on' : 'bg-off'}`;

    const container = document.createElement('div');
    container.className = 'ai-text-input-template-container';

    if (showLeftButton && type === 'default') {
        const btn = document.createElement('button');
        btn.className = 'ai-left-btn-placeholder';
        btn.innerHTML = '+';
        btn.style.cssText = 'width: 48px; height: 48px; border-radius: 100px; border: 1px solid #ddd; background: white;';
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
        sendBtn.innerHTML = '↑';
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
                AIの回答は不正確な可能性があります。 AIが生成した回答の注意点は
                <a class="disclaimer-link">ガイドライン</a>
                をご確認ください
            </p>
            <div class="footer-meta-row">
                <p class="disclaimer-text">
                    参考 : <a class="disclaimer-link">mybest</a>（2024/03/11更新）
                </p>
                <div class="footer-info-item">
                    <span>💡</span>
                    <span class="disclaimer-text">商品情報の注意事項</span>
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
