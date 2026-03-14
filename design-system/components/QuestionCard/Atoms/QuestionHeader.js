/**
 * QuestionHeader - Atomic Variant
 */
window.renderQuestionHeader = function ({ question, completion = 'incomplete' }) {
    const isCompleted = completion === 'completed';
    const header = document.createElement('div');
    header.className = `question-header ${isCompleted ? 'completed' : ''}`;

    const title = document.createElement('p');
    title.className = 'question-title';
    title.textContent = question;
    header.appendChild(title);

    if (isCompleted && window.renderIcon) {
        const iconWrap = document.createElement('div');
        iconWrap.className = 'check-icon-wrap';
        iconWrap.appendChild(window.renderIcon({ name: 'check-circle-solid', size: 20 }));
        header.appendChild(iconWrap);
    }

    return header;
};
