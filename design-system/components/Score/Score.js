/**
 * Render a Score / Rating component
 * @param {Object} options
 * @param {number} options.value - 0 to 5 numeric
 * @param {number} options.count - Count (e.g. 999)
 * @param {string} options.type - default | simple
 * @param {string} options.size - medium | small
 * @param {boolean} options.leadingText - Show leading score?
 * @param {boolean} options.trailingText - Show trailing count?
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
window.renderScore = function renderScore({
    value = 5.0,
    count = 999,
    type = 'default',
    size = 'medium',
    leadingText = true,
    trailingText = true,
    className = ''
} = {}) {
    const container = document.createElement('div');
    container.className = `score score-${type} score-size-${size} ${className}`.trim();

    if (leadingText) {
        const lead = document.createElement('div');
        lead.className = 'score-text score-leading';
        lead.textContent = value.toFixed(1);
        container.appendChild(lead);
    }

    const starGroup = document.createElement('div');
    starGroup.className = 'score-stars';

    if (type === 'default') {
        const fullStars = Math.floor(value);
        const hasHalf = value % 1 >= 0.5;
        for (let i = 1; i <= 5; i++) {
            let iconName = 'star-empty';
            let variant = 'outline';
            if (i <= fullStars) {
                iconName = 'star-full';
                variant = 'solid';
            } else if (i === fullStars + 1 && hasHalf) {
                iconName = 'star-half';
                variant = 'solid';
            }
            if (typeof renderIcon === 'function') {
                const icon = renderIcon({ category: 'common', name: iconName, variant: variant, size: size === 'small' ? 16 : 20 });
                starGroup.appendChild(icon);
            }
        }
    } else {
        if (typeof renderIcon === 'function') {
            starGroup.appendChild(renderIcon({ category: 'common', name: 'star-full', variant: 'solid', size: size === 'small' ? 16 : 20 }));
        }
    }
    container.appendChild(starGroup);

    if (trailingText && count > 0) {
        const trail = document.createElement('div');
        trail.className = 'score-text score-trailing';
        trail.textContent = `(${count})`;
        container.appendChild(trail);
    }

    return container;
}
