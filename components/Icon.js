/**
 * Figma 아이콘 시스템을 사용하는 Vanilla JS 아이콘 렌더러
 * 
 * @param {object} params
 * @param {string} params.category - 아이콘 카테고리 (common, ai, service, map)
 * @param {string} params.name - 아이콘 이름
 * @param {string} params.variant - 상태 (solid, outline, gradient)
 * @param {number} params.size - 크기
 * @param {string} params.className - 클래스
 * @returns {string} HTML String
 */
window.renderIcon = function ({
    category = 'common',
    name,
    variant = 'solid',
    size = 24,
    className = ''
}) {
    const iconPath = `./icons/${category}/${name}-${variant}.svg`;

    return `
    <img 
      src="${iconPath}" 
      alt="${name}" 
      style="width: ${size}px; height: ${size}px; display: inline-block; vertical-align: middle;"
      class="figma-icon icon-${name} ${className}"
    />
  `.trim();
};
