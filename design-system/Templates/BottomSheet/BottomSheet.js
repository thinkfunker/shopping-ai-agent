/**
 * Render Bottom Sheet Template
 * @param {Object} options
 * @param {string} options.type - default | header only
 * @param {string} options.headerTitle
 * @param {boolean} options.showLeftIcon
 * @param {string} options.leftButtonLabel
 * @param {string} options.rightButtonLabel
 * @param {boolean} options.showRightIcon
 * @param {boolean} options.showBottomButton
 * @param {string} options.bottomButtonLabel
 * @param {HTMLElement} options.content
 * @param {function} options.onClose
 * @returns {HTMLElement}
 */
function renderBottomSheet({
    type = 'default',
    headerTitle = 'Title',
    showLeftIcon = false,
    leftButtonLabel = '',
    rightButtonLabel = '',
    showRightIcon = true,
    showBottomButton = true,
    bottomButtonLabel = 'Label',
    content = null,
    onClose = null
} = {}) {
    const overlay = document.createElement('div');
    overlay.className = 'bottom-sheet-overlay';
    overlay.onclick = onClose;

    const sheet = document.createElement('div');
    sheet.className = `bottom-sheet-template type-${type}`;
    sheet.onclick = (e) => e.stopPropagation();

    // Header Handlebar
    const headerContainer = document.createElement('div');
    headerContainer.className = 'bottom-sheet-header-container';

    const handleArea = document.createElement('div');
    handleArea.className = 'bottom-sheet-draggable-handle';
    handleArea.innerHTML = '<div class="bottom-sheet-handle"></div>';
    headerContainer.appendChild(handleArea);

    const headerContent = document.createElement('div');
    headerContent.className = 'bottom-sheet-header-content';

    // Left area
    const leftArea = document.createElement('div');
    leftArea.className = 'bottom-sheet-side-area left';
    if (showLeftIcon) {
        leftArea.innerHTML += '<button class="bottom-sheet-icon-btn">←</button>';
    }
    if (leftButtonLabel) {
        const btn = document.createElement('button');
        btn.className = 'bottom-sheet-ghost-btn secondary';
        btn.textContent = leftButtonLabel;
        leftArea.appendChild(btn);
    }
    headerContent.appendChild(leftArea);

    // Title
    const titleContainer = document.createElement('div');
    titleContainer.className = 'bottom-sheet-title-container';
    titleContainer.innerHTML = `<h2 class="bottom-sheet-title">${headerTitle}</h2>`;
    headerContent.appendChild(titleContainer);

    // Right area
    const rightArea = document.createElement('div');
    rightArea.className = 'bottom-sheet-side-area right';
    if (rightButtonLabel) {
        const btn = document.createElement('button');
        btn.className = 'bottom-sheet-ghost-btn primary';
        btn.textContent = rightButtonLabel;
        rightArea.appendChild(btn);
    }
    if (showRightIcon) {
        const closeBtn = document.createElement('button');
        closeBtn.className = 'bottom-sheet-icon-btn';
        closeBtn.innerHTML = '✕';
        closeBtn.onclick = onClose;
        rightArea.appendChild(closeBtn);
    }
    headerContent.appendChild(rightArea);

    headerContainer.appendChild(headerContent);
    sheet.appendChild(headerContainer);

    // Content
    if (type === 'default') {
        const contentArea = document.createElement('div');
        contentArea.className = 'bottom-sheet-content';
        if (content) {
            contentArea.appendChild(content);
        } else {
            contentArea.style.height = '296px';
        }
        sheet.appendChild(contentArea);

        // Footer
        const footer = document.createElement('footer');
        footer.className = 'bottom-sheet-footer';

        if (showBottomButton) {
            const btnArea = document.createElement('div');
            btnArea.className = 'bottom-sheet-button-area';
            btnArea.innerHTML = `<button class="bottom-sheet-primary-btn">${bottomButtonLabel}</button>`;
            footer.appendChild(btnArea);
        }

        const indicator = document.createElement('div');
        indicator.className = 'bottom-sheet-home-indicator';
        indicator.innerHTML = '<div class="bottom-sheet-home-bar"></div>';
        footer.appendChild(indicator);

        sheet.appendChild(footer);
    }

    overlay.appendChild(sheet);
    return overlay;
}
