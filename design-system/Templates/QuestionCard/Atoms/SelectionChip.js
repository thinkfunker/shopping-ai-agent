/**
 * SelectionChip - Atomic Variant
 */
window.renderSelectionChip = function ({ text, size = 'medium', selected = false, onClick }) {
    const chip = document.createElement('div');
    chip.className = `selection-chip ${size} ${selected ? 'selected' : ''}`;
    chip.textContent = text;

    chip.onclick = (e) => {
        if (onClick) onClick(text);
        e.stopPropagation();
    };

    return chip;
};
