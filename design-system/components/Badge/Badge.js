/**
 * Vanilla JS Badge Component
 * 
 * @param {object} params
 * @param {string} params.text - 표시할 텍스트 (type이 number인 경우)
 * @param {string} params.type - 'number' or 'dot'
 * @param {string} params.priority - 'primary' or 'secondary'
 * @param {string} params.size - 'small' or 'medium'
 * @param {string} params.id - 고유 ID
 * @returns {string} HTML String
 */
window.renderBadge = function ({
    text = "0",
    type = "number",
    priority = "primary",
    size = "small",
    id = ""
} = {}) {
    const badge = document.createElement('div');
    if (id) badge.id = id;
    badge.className = `badge ${type === 'number' ? 'badge-number' : 'badge-dot'} ${priority === 'primary' ? 'badge-primary' : 'badge-secondary'} ${size === 'small' ? 'badge-small' : 'badge-medium'}`;

    if (type === "number") {
        const numText = parseInt(text);
        badge.textContent = (!isNaN(numText) && numText > 99) ? "99+" : text;
    }

    return badge;
};
