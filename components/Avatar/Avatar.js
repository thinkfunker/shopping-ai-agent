/**
 * Vanilla JS Avatar Component
 * 
 * @param {object} params
 * @param {string} params.size - 'xsmall', 'small', 'medium'
 * @param {string} params.type - 'user', 'AI'
 * @param {string} params.src - 이미지 경로 (user인 경우 기본값 images/user-avatar.png)
 * @param {string} params.id - 고유 ID
 * @returns {string} HTML String
 */
window.renderAvatar = function ({ size = 'medium', type = 'user', src = '', id = '' }) {
    const avatarSrc = src || (type === 'AI' ? './icons/ai/logo-gradient.svg' : './images/user-avatar.png');
    const typeClass = type.toLowerCase();

    return `
        <div class="avatar ${size} ${typeClass}" id="${id}">
            <img src="${avatarSrc}" alt="${type} avatar" />
        </div>
    `.trim();
};
