/**
 * AITextInputLogin - Atomic Variant (Figma Node 22428:37815)
 */
window.renderAITextInputLogin = function ({ placeholder, onLogin }) {
    // 기본 레이아웃 재사용 (버튼만 다름)
    const container = document.createElement('div');
    container.className = 'ai-text-input-default ai-text-input-login';

    const inputBox = document.createElement('div');
    inputBox.className = 'input-box-default'; // 기본 높이와 둥글기 재사용

    const text = document.createElement('p');
    text.className = 'input-placeholder-default';
    text.textContent = placeholder || 'なんでも聞いてください';
    inputBox.appendChild(text);

    const controls = document.createElement('div');
    controls.className = 'input-controls-default';

    const loginBtn = document.createElement('div');
    loginBtn.className = 'login-action-btn';

    const btnText = document.createElement('p');
    btnText.className = 'login-btn-text';
    btnText.textContent = '로그인';
    loginBtn.appendChild(btnText);

    loginBtn.onclick = onLogin;

    controls.appendChild(loginBtn);
    inputBox.appendChild(controls);
    container.appendChild(inputBox);

    return container;
};
