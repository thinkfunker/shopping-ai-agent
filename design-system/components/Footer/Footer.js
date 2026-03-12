/**
 * Render a Footer component
 * @param {Object} options
 * @param {Array} options.links - Array of { label, href }
 * @param {string} options.copyright - Copyright text
 * @param {string} options.os - PC | Mobile
 * @param {string} options.className - Extra classes
 * @returns {HTMLElement}
 */
window.renderFooter = function renderFooter({
    links = [
        { label: 'ヘルプ', href: '#' },
        { label: '規約', href: '#' },
        { label: 'プライバシー', href: '#' }
    ],
    copyright = '© LY Corporation',
    os = 'PC',
    className = ''
} = {}) {
    const isMobile = os.toLowerCase() === 'mobile';
    const footer = document.createElement('footer');
    footer.className = `footer ${isMobile ? 'footer-mobile' : 'footer-pc'} ${className}`.trim();

    if (!isMobile) {
        const cp = document.createElement('p');
        cp.className = 'footer-copyright';
        cp.textContent = copyright;
        footer.appendChild(cp);
    }

    const linksContainer = document.createElement('div');
    linksContainer.className = 'footer-links';

    links.forEach((link, index) => {
        const a = document.createElement('a');
        a.href = link.href || '#';
        a.className = 'footer-link';
        a.textContent = link.label;
        linksContainer.appendChild(a);

        if (index < links.length - 1) {
            const separator = document.createElement('div');
            separator.className = 'footer-divider';
            separator.setAttribute('aria-hidden', 'true');
            linksContainer.appendChild(separator);
        }
    });

    footer.appendChild(linksContainer);

    if (isMobile) {
        const cp = document.createElement('p');
        cp.className = 'footer-copyright';
        cp.textContent = copyright;
        footer.appendChild(cp);
    }

    return footer;
}
