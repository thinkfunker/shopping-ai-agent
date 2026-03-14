/**
 * Question Card - Atomic Orchestrator
 */
window.renderQuestionCard = function ({
    question = 'Which category are you looking for?',
    completion = 'incomplete',
    expanded = true,
    selectionType = 'chip grid', // 'chip grid', 'chip horizontal', 'list default', 'none'
    options = [],
    onSelect = null
} = {}) {
    const template = document.createElement('div');
    template.className = 'question-card-template';

    // 1. Header Atom
    if (window.renderQuestionHeader) {
        template.appendChild(window.renderQuestionHeader({ question, completion }));
    }

    // 2. Selection Area (if expanded)
    if (expanded && selectionType !== 'none' && options.length > 0) {
        const selectionArea = document.createElement('div');
        selectionArea.className = 'selection-area-template';

        if (selectionType === 'chip horizontal') {
            selectionArea.classList.add('horizontal');
        } else if (selectionType === 'chip grid') {
            selectionArea.classList.add('grid');
        }

        options.forEach(opt => {
            const data = typeof opt === 'string' ? { text: opt } : opt;

            if (selectionType.includes('chip')) {
                if (window.renderSelectionChip) {
                    selectionArea.appendChild(window.renderSelectionChip({
                        ...data,
                        size: selectionType === 'chip horizontal' ? 'large' : 'medium',
                        onClick: onSelect
                    }));
                }
            } else if (selectionType === 'list default') {
                if (window.renderSelectionCardAtom) {
                    selectionArea.appendChild(window.renderSelectionCardAtom({
                        ...data,
                        onClick: onSelect
                    }));
                }
            }
        });

        template.appendChild(selectionArea);
    }

    return template;
};
