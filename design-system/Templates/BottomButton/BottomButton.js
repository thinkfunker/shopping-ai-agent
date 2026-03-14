/**
 * Render Bottom Button Template
 * 100% Sync with Figma Node: 851:44137
 * 
 * @param {Object} options
 * @param {string} options.layout - single | horizontal | vertical
 * @param {Array<Object>} options.actions - [{ label, type }]
 * @param {boolean} options.showHomeIndicator
 * @returns {HTMLElement}
 */
window.renderBottomButton = function ({
    layout = 'single',
    actions = [],
    showHomeIndicator = true
} = {}) {
    const root = document.createElement('div');
    root.className = `bottom-button-template layout-${layout}`;

    const area = document.createElement('div');
    area.className = 'button-area';

    actions.forEach(action => {
        const btn = document.createElement('button');
        btn.className = `template-btn ${action.type || 'primary'}`;
        btn.textContent = action.label || 'Label';

        if (action.onClick) {
            btn.onclick = action.onClick;
        }

        area.appendChild(btn);
    });

    root.appendChild(area);

    if (showHomeIndicator) {
        const osArea = document.createElement('div');
        osArea.className = 'os-indicator-area';
        const indicator = document.createElement('div');
        indicator.className = 'home-indicator';
        osArea.appendChild(indicator);
        root.appendChild(osArea);
    }

    return root;
}
