/**
 * AI Text Input - Atomic Orchestrator
 */
window.renderAITextInput = function ({
    type = 'default',
    background = true,
    showFooter = false,
    placeholder = 'なんでも聞いてください',
    value = '',
    onSend = null,
    onLogin = null
} = {}) {
    const template = document.createElement('div');
    template.className = `ai-text-input-template ${background ? '' : 'no-bg'}`;

    const innerContainer = document.createElement('div');
    innerContainer.className = 'ai-text-input-inner-container';

    // Atomic Switching
    let inputAtom;
    if (type === 'multiline') {
        if (window.renderAITextInputMultiline) {
            inputAtom = window.renderAITextInputMultiline({ value, onSend });
        }
    } else if (type === 'login') {
        if (window.renderAITextInputLogin) {
            inputAtom = window.renderAITextInputLogin({ placeholder, onLogin });
        }
    } else {
        if (window.renderAITextInputDefault) {
            inputAtom = window.renderAITextInputDefault({
                placeholder,
                onSend,
                disabled: value.length === 0 && type === 'default'
            });
        }
    }

    if (inputAtom) innerContainer.appendChild(inputAtom);
    template.appendChild(innerContainer);

    // Footer
    if (showFooter && window.renderAITextInputFooter) {
        template.appendChild(window.renderAITextInputFooter());
    }

    return template;
};
