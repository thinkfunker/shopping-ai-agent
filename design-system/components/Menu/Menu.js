/**
 * Render Menu Component
 * 
 * @param {Object} options
 * @param {Array} options.items - List of item objects
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
window.renderMenu = function renderMenu({
    items = [],
    className = ''
} = {}) {
    const container = document.createElement('div');
    container.className = `menu-container ${className}`.trim();

    if (items.length === 0) {
        items = [
            { label: '設定', icon: 'menu' },
            { label: 'プロフィール', icon: 'bell', divider: true },
            { label: 'ログアウト', label: 'ログアウト' }
        ];
    }

    items.forEach(item => {
        if (typeof renderMenuItem === 'function') {
            container.appendChild(renderMenuItem(item));
        }
    });

    return container;
}
