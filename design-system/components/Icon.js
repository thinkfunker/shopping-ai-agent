/**
 * Figma 아이콘 이름과 로컬 자산 파일명 사이의 매핑 테이블
 * 피그마에서 사용하는 논리적 이름을 디자인 시스템 폴더의 실제 파일명과 연결합니다.
 */
const ICON_MAP = {
  // [Figma Name]: { category, name, variant }
  'ai-weather': { category: 'ai', name: 'ai-weather', variant: 'solid' },
  'ai-recipe': { category: 'ai', name: 'ai-check', variant: 'solid' },
  'ai-shopping': { category: 'ai', name: 'ai-shopping', variant: 'solid' },
  'ai-map': { category: 'ai', name: 'ai-map', variant: 'solid' },
  'ai-travel': { category: 'ai', name: 'ai-travel', variant: 'solid' },
  'ai-counseling': { category: 'ai', name: 'ai-messenger', variant: 'solid' },
  'bell': { category: 'common', name: 'bell', variant: 'outline' },
  'menu': { category: 'common', name: 'bars', variant: 'outline' },
  'plus': { category: 'common', name: 'plus', variant: 'outline' },
  'mic': { category: 'common', name: 'microphone', variant: 'outline' },
  'send': { category: 'common', name: 'arrow-up', variant: 'solid' },
  'chevron-left': { category: 'common', name: 'chevron-left', variant: 'outline' }
};

/**
 * Figma 아이콘 시스템을 사용하는 Vanilla JS 아이콘 렌더러
 * 
 * @param {object} params
 * @param {string} params.category - 아이콘 카테고리 (기본값: common)
 * @param {string} params.name - 아이콘 이름 (Figma 이름 또는 실제 파일명)
 * @param {string} params.variant - 상태 (기본값: solid)
 * @param {number} params.size - 크기
 * @param {string} params.className - 클래스
 * @returns {HTMLElement}
 */
window.renderIcon = function ({
  category: manualCategory,
  name,
  variant: manualVariant,
  size = 24,
  className = ''
} = {}) {
  // 1. 매핑 테이블 확인
  const mapped = ICON_MAP[name] || {};

  // 매핑 테이블에 해당 항목이 있으면 매핑된 값을 최우선으로 사용 (Alias 시스템)
  const category = mapped.category || manualCategory || 'common';
  const iconName = mapped.name || name;
  const variant = mapped.variant || manualVariant || 'solid';

  const wrapper = document.createElement('span');
  wrapper.className = `figma-icon-wrapper ${className}`;
  wrapper.style.width = `${size}px`;
  wrapper.style.height = `${size}px`;
  wrapper.style.display = 'inline-flex';
  wrapper.style.alignItems = 'center';
  wrapper.style.justifyContent = 'center';

  // 2. Fallbacks for missing generic icons
  const fallbacks = {
    'star-full': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
    'star-half': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27l6.18 3.73-1.64-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>',
    'star-empty': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'
  };

  if (fallbacks[iconName]) {
    wrapper.innerHTML = fallbacks[iconName];
    const svg = wrapper.querySelector('svg');
    if (svg) {
      svg.style.width = '100%';
      svg.style.height = '100%';
    }
    if (iconName.includes('star')) wrapper.style.color = '#FBBC04';
    return wrapper;
  }

  // 3. Load from local design system folder
  const iconPath = `./design-system/icons/${category}/${iconName}-${variant}.svg`;

  const img = document.createElement('img');
  img.src = iconPath;
  img.alt = iconName;
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.display = 'block';
  img.className = `figma-icon icon-${iconName}`;

  img.onerror = () => {
    console.warn(`Icon not found: ${iconPath}`);
    wrapper.innerHTML = `<span style="font-size: ${size / 2}px; color: #ccc;">?</span>`;
  };

  wrapper.appendChild(img);
  return wrapper;
};
