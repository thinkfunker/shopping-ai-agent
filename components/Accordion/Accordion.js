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
window.renderAccordion = function ({ title, content, isOpen = false, id = '' }) {
    const openClass = isOpen ? 'open' : '';
    const icon = window.renderIcon ? renderIcon({ name: 'chevron-down', variant: 'solid', size: 14 }) : '';

    return `
        <div class="accordion ${openClass}" id="${id}" onclick="this.classList.toggle('open')">
            <div class="accordion-header">
                <div class="accordion-title">${title}</div>
                <div class="accordion-icon">${icon}</div>
            </div>
            <div class="accordion-content">
                <div class="accordion-description">${content}</div>
            </div>
        </div>
    `.trim();
};
