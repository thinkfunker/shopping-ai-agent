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
window.renderBottomSheet = function ({
    type = 'header only',
    headerTitle = 'Title',
    showLeftIcon = false,
    showLeftButton = true,
    leftButtonLabel = 'Label',
    showRightIcon = false,
    showRightButton = true,
    rightButtonLabel = 'Label',
    showTitleText = true,
    showBottomButton = true,
    bottomButtonLabel = 'Label',
    content = null,
    onClose = null
} = {}) {
    const overlay = document.createElement('div');
    overlay.className = 'bottom-sheet-overlay';
    overlay.onclick = onClose;

    const sheet = document.createElement('div');
    const typeClass = type === 'header only' ? 'type-header-only' : `type-${type}`;
    sheet.className = `bottom-sheet-template ${typeClass}`;
    sheet.onclick = (e) => e.stopPropagation(); // Keep existing stopPropagation for the sheet itself

    // Header Handlebar Area
    const handlebarArea = document.createElement('div');
    handlebarArea.className = 'bottom-sheet-header-handlebar';

    const handlebarDrag = document.createElement('div');
    handlebarDrag.className = 'bottom-sheet-draggable-handle';
    const handle = document.createElement('div');
    handle.className = 'handle';
    handlebarDrag.appendChild(handle);
    handlebarArea.appendChild(handlebarDrag);

    // Header Container
    const headerContainer = document.createElement('div');
    headerContainer.className = 'bottom-sheet-header-container';

    // Left Area
    const leftArea = document.createElement('div');
    leftArea.className = 'bottom-sheet-header-left';

    if (showLeftIcon) {
        const leftIcon = document.createElement('div');
        leftIcon.className = 'header-icon';
        if (window.renderIcon) {
            leftIcon.appendChild(window.renderIcon('common/chevron-left-outline.svg'));
        }
        leftArea.appendChild(leftIcon);
    }

    if (showLeftButton && leftButtonLabel) {
        const leftBtn = document.createElement('button');
        leftBtn.className = 'bottom-sheet-ghost-btn secondary';
        leftBtn.textContent = leftButtonLabel;
        leftArea.appendChild(leftBtn);
    }
    headerContainer.appendChild(leftArea);

    // Center Area (Title)
    const centerArea = document.createElement('div');
    centerArea.className = 'bottom-sheet-header-center';
    if (showTitleText) {
        const title = document.createElement('span');
        title.className = 'bottom-sheet-title';
        title.textContent = headerTitle;
        centerArea.appendChild(title);
    }
    headerContainer.appendChild(centerArea);

    // Right Area
    const rightArea = document.createElement('div');
    rightArea.className = 'bottom-sheet-header-right';

    if (showRightButton && rightButtonLabel) {
        const rightBtn = document.createElement('button');
        rightBtn.className = 'bottom-sheet-ghost-btn primary';
        rightBtn.textContent = rightButtonLabel;
        rightArea.appendChild(rightBtn);
    }

    if (showRightIcon) {
        const rightIcon = document.createElement('div');
        rightIcon.className = 'header-icon';
        if (window.renderIcon) {
            rightIcon.appendChild(window.renderIcon('common/cross-outline.svg'));
        }
        rightIcon.onclick = (e) => {
            e.stopPropagation();
            if (onClose) onClose();
        };
        rightArea.appendChild(rightIcon);
    }
    headerContainer.appendChild(rightArea);

    sheet.appendChild(handlebarArea);
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
