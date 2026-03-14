/**
 * SelectionCard - Atomic Variant
 */
window.renderSelectionCardAtom = function ({ text, description, image, selected = false, onClick }) {
    const card = document.createElement('div');
    card.className = `selection-card-atom ${selected ? 'selected' : ''}`;

    if (image) {
        const img = document.createElement('img');
        img.className = 'selection-card-media';
        img.src = image;
        card.appendChild(img);
    }

    const content = document.createElement('div');
    content.className = 'selection-card-content';

    const title = document.createElement('p');
    title.className = 'selection-card-title';
    title.textContent = text;
    content.appendChild(title);

    if (description) {
        const desc = document.createElement('p');
        desc.className = 'selection-card-desc';
        desc.textContent = description;
        content.appendChild(desc);
    }

    card.appendChild(content);

    card.onclick = (e) => {
        if (onClick) onClick(text);
        e.stopPropagation();
    };

    return card;
};
