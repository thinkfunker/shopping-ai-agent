/**
 * Render a Thumbnail component
 * @param {Object} options
 * @param {string} options.src - Image URL
 * @param {string} options.ratio - 1:1 | 4:3 | 3:2 | 16:9
 * @param {string} options.state - image | empty
 * @param {boolean} options.cropped - fill vs fit
 * @param {boolean} options.gradation - bottom shadow
 * @param {boolean} options.outline - border
 * @param {string} options.className
 * @returns {HTMLElement}
 */
window.renderThumbnail = function ({
    src = '',
    ratio = '1:1',
    state = 'image',
    cropped = true,
    gradation = false,
    outline = true,
    className = ''
} = {}) {
    const container = document.createElement('div');
    const ratioClass = ratio.replace(':', '-');
    container.className = `thumbnail thumbnail-ratio-${ratioClass} ${cropped ? 'thumbnail-cropped' : 'thumbnail-not-cropped'} ${gradation ? 'thumbnail-gradation' : ''} ${outline ? 'thumbnail-outline' : ''} ${state === 'empty' ? 'thumbnail-empty' : ''} ${className}`.trim();

    if (state === 'image' && src) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Thumbnail';
        img.className = 'thumbnail-image';
        container.appendChild(img);
    } else {
        const iconBox = document.createElement('div');
        iconBox.className = 'thumbnail-placeholder-icon';
        iconBox.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="currentColor"/>
            </svg>
        `;
        container.appendChild(iconBox);
    }

    return container;
};
