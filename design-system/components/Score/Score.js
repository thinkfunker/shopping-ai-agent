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
function renderScore({
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
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('span');
            star.className = 'score-star';
            if (value >= i) star.textContent = '★';
            else if (value >= i - 0.5) star.textContent = '☆'; // Simplified for vanilla
            else star.textContent = '☆';
            starGroup.appendChild(star);
        }
    } else {
        const star = document.createElement('span');
        star.className = 'score-star';
        star.textContent = '★';
        starGroup.appendChild(star);
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
