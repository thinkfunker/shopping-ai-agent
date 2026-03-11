/**
 * Render Bottom Button Template
 * @param {Object} options
 * @param {string} options.layout - single | horizontal | vertical-2 | vertical-3
 * @param {Array<Object>} options.actions - [{ label, type }]
 * @param {boolean} options.showHomeIndicator
 * @returns {HTMLElement}
 */
function renderBottomButton({
    layout = 'single',
    actions = [],
    showHomeIndicator = true
} = {}) {
    const root = document.createElement('div');
    const layoutMap = {
        'single': 'layout-single',
        'horizontal': 'layout-horizontal',
        'vertical-2': 'layout-vertical',
        'vertical-3': 'layout-vertical'
    };
    root.className = `bottom-button-template ${layoutMap[layout] || 'layout-single'}`;

    const area = document.createElement('div');
    area.className = 'button-area';

    actions.forEach(action => {
        const btn = document.createElement('button');
        btn.className = `template-btn ${action.type || 'primary'}`;
        btn.textContent = action.label;
        btn.type = 'button';
        btn.onclick = action.onClick;
        area.appendChild(btn);
    });

    root.appendChild(area);

    if (showHomeIndicator) {
        const indicator = document.createElement('div');
        indicator.className = 'home-indicator-container';
        indicator.innerHTML = '<div class="home-indicator-bar"></div>';
        root.appendChild(indicator);
    }

    return root;
}
