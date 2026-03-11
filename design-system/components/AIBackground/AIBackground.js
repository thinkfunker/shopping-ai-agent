/**
 * Render an AI Background component
 * @param {Object} options
 * @param {boolean} options.darkMode - Light or Dark mode
 * @param {string} options.className - Additional classes
 * @returns {HTMLElement}
 */
function renderAIBackground({
    darkMode = false,
    className = ''
} = {}) {
    const container = document.createElement('div');
    container.className = `ai-background ${darkMode ? 'ai-background-dark' : 'ai-background-light'} ${className}`.trim();

    const img = document.createElement('img');
    // Paths relative to where this script would typically be used in a web context
    img.src = darkMode
        ? '../../assets/components/AIBackground/54e50cd0ba2cd08962dc2d6898f736913685e123.png'
        : '../../assets/components/AIBackground/f87ad5e8ecc0d4c8530a5f042f6532b2afb56c6e.png';
    img.className = 'ai-background-image';
    img.setAttribute('aria-hidden', 'true');

    container.appendChild(img);
    return container;
}
