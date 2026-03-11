/**
 * Render Modal Component
 * 
 * @param {Object} options
 * @param {boolean} options.isOpen - Whether the modal is visible
 * @param {Function} options.onClose - Callback to close the modal
 * @param {string} options.os - 'mobile' | 'pc'
 * @param {string} options.buttonLayout - 'horizontal' | 'vertical'
 * @param {string} options.title - Modal title
 * @param {string} options.description - Modal description
 * @param {HTMLElement} options.content - Custom content
 * @param {Object} options.primaryAction - { label, onClick }
 * @param {Object} options.secondaryAction - { label, onClick }
 * @returns {HTMLElement|null}
 */
function renderModal({
    isOpen = false,
    onClose = null,
    os = 'mobile',
    buttonLayout = 'vertical',
    title = 'Title',
    description = 'Description Here',
    content = null,
    primaryAction = null,
    secondaryAction = null
} = {}) {
    if (!isOpen) return null;

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    // Scrim
    if (typeof renderScrim === 'function') {
        overlay.appendChild(renderScrim({ onClick: onClose }));
    }

    const container = document.createElement('div');
    container.className = `modal-container modal-${os}`;

    // Header
    const header = document.createElement('div');
    header.className = 'modal-header';

    const titleGroup = document.createElement('div');
    titleGroup.className = 'modal-title-group';

    const h2 = document.createElement('h2');
    h2.className = 'modal-title';
    h2.textContent = title;

    const p = document.createElement('p');
    p.className = 'modal-description';
    p.textContent = description;

    titleGroup.appendChild(h2);
    titleGroup.appendChild(p);
    header.appendChild(titleGroup);

    if (os === 'pc') {
        const closeBtn = document.createElement('button');
        closeBtn.className = 'modal-close-btn';
        if (typeof renderIcon === 'function') {
            closeBtn.appendChild(renderIcon('cross-outline', '24px'));
        }
        closeBtn.addEventListener('click', onClose);
        header.appendChild(closeBtn);
    }

    container.appendChild(header);

    // Body
    if (content) {
        const body = document.createElement('div');
        body.className = 'modal-body';
        body.appendChild(content);
        container.appendChild(body);
    }

    // Footer
    const footer = document.createElement('div');
    footer.className = `modal-footer modal-btn-${buttonLayout}`;

    if (primaryAction && typeof renderButton === 'function') {
        footer.appendChild(renderButton({
            label: primaryAction.label,
            priority: 'solid-primary',
            size: os === 'pc' ? 'large' : 'xlarge',
            onClick: primaryAction.onClick,
            className: 'modal-btn-fill'
        }));
    }

    if (secondaryAction && typeof renderButton === 'function') {
        footer.appendChild(renderButton({
            label: secondaryAction.label,
            priority: 'outline-primary',
            size: os === 'pc' ? 'large' : 'xlarge',
            onClick: secondaryAction.onClick,
            className: 'modal-btn-fill'
        }));
    }

    if (os === 'mobile' && typeof renderButton === 'function') {
        footer.appendChild(renderButton({
            label: 'Close',
            priority: 'ghost-secondary',
            size: 'xlarge',
            onClick: onClose,
            className: 'modal-btn-fill'
        }));
    }

    container.appendChild(footer);
    overlay.appendChild(container);

    return overlay;
}
