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
window.renderAvatar = function ({ size = 'medium', type = 'user', src = '', id = '' } = {}) {
    const avatarSrc = src || (type === 'AI' ? './design-system/icons/ai/logo-gradient.svg' : './design-system/assets/components/TopNavigation/6cf779209837fe69c1fd4ccbb5d0abc91833f717.png');

    const container = document.createElement('div');
    if (id) container.id = id;
    container.className = `avatar ${size} ${type.toLowerCase()}`;

    const img = document.createElement('img');
    img.src = avatarSrc;
    img.alt = `${type} avatar`;
    if (type === 'AI') {
        img.className = 'avatar-ai-logo';
    }

    container.appendChild(img);
    return container;
};
