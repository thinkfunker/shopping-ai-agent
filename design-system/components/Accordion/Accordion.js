/**
 * Vanilla JS Accordion Component
 * 
 * @param {object} params
 * @param {string} params.title - 제목
 * @param {string} params.content - 내용
 * @param {boolean} params.isOpen - 초기 오픈 여부
 * @param {string} params.id - 고유 ID
 * @returns {string} HTML String
 */
window.renderAccordion = function ({ title, content, isOpen = false, id = '' } = {}) {
    const container = document.createElement('div');
    if (id) container.id = id;
    container.className = `accordion ${isOpen ? 'open' : ''}`;
    container.onclick = (e) => {
        container.classList.toggle('open');
    };

    const header = document.createElement('div');
    header.className = 'accordion-header';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'accordion-title';
    titleDiv.textContent = title;
    header.appendChild(titleDiv);

    const iconDiv = document.createElement('div');
    iconDiv.className = 'accordion-icon';
    if (window.renderIcon) {
        iconDiv.appendChild(renderIcon({ name: 'chevron-down', size: 14 }));
    }
    header.appendChild(iconDiv);

    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'accordion-content';

    const description = document.createElement('div');
    description.className = 'accordion-description';
    description.innerHTML = content;
    contentWrapper.appendChild(description);

    container.appendChild(header);
    container.appendChild(contentWrapper);

    return container;
};
