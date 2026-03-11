/**
 * Render a Top Navigation component
 * @param {Object} options
 * @param {string} options.os - mobile | pc
 * @param {string} options.titleAlign - left | center
 * @param {string} options.headerTitle - Title text
 * @param {boolean} options.showLeftIcon - Show back button
 * @param {boolean} options.showAvatar - Show user avatar
 * @param {Array<string>} options.rightIcons - List of icon names
 * @param {Array<string>} options.textButtons - List of text labels (PC only)
 * @returns {HTMLElement}
 */
function renderTopNavigation({
    os = 'mobile',
    titleAlign = 'center',
    headerTitle = 'Title text',
    showLeftIcon = true,
    showAvatar = false,
    rightIcons = ['bars-solid'],
    textButtons = []
} = {}) {
    const isMobile = os === 'mobile';
    const isPC = os === 'pc';
    const align = isPC ? 'left' : titleAlign;

    const nav = document.createElement('nav');
    nav.className = `top-navigation top-navigation-${os} align-${align}`;

    if (isMobile && typeof renderStatusBar === 'function') {
        nav.appendChild(renderStatusBar());
    }

    const header = document.createElement('div');
    header.className = 'top-navigation-header';

    // Left Area
    const leftArea = document.createElement('div');
    leftArea.className = 'top-navigation-left';

    if (isMobile && showLeftIcon) {
        const backBtn = document.createElement('button');
        backBtn.className = 'top-navigation-icon-btn';
        backBtn.type = 'button';
        backBtn.innerHTML = '←'; // Simplified for vanilla
        leftArea.appendChild(backBtn);
    }

    if (align === 'left') {
        const title = document.createElement('h1');
        title.className = 'top-navigation-title';
        title.textContent = headerTitle;
        leftArea.appendChild(title);

        if (isPC && textButtons.length > 0) {
            const btnGroup = document.createElement('div');
            btnGroup.className = 'top-navigation-text-buttons';
            textButtons.forEach(txt => {
                const btn = document.createElement('button');
                btn.className = 'top-navigation-text-btn';
                btn.textContent = txt;
                btnGroup.appendChild(btn);
            });
            leftArea.appendChild(btnGroup);
        }
    }
    header.appendChild(leftArea);

    // Center Area (Mobile Center-Align only)
    if (isMobile && align === 'center') {
        const centerArea = document.createElement('div');
        centerArea.className = 'top-navigation-center';
        centerArea.style.textAlign = 'center';
        const title = document.createElement('h1');
        title.className = 'top-navigation-title';
        title.textContent = headerTitle;
        centerArea.appendChild(title);
        header.appendChild(centerArea);
    }

    // Right Area
    const rightArea = document.createElement('div');
    rightArea.className = 'top-navigation-right';

    rightIcons.forEach(iconName => {
        const btn = document.createElement('button');
        btn.className = 'top-navigation-icon-btn';
        btn.innerHTML = '☰'; // Simplified icon
        rightArea.appendChild(btn);
    });

    if (showAvatar) {
        const avatar = document.createElement('div');
        avatar.className = 'top-navigation-avatar';
        avatar.innerHTML = `<img src="../../assets/components/TopNavigation/6cf779209837fe69c1fd4ccbb5d0abc91833f717.png" alt="User">`;
        rightArea.appendChild(avatar);
    }
    header.appendChild(rightArea);

    nav.appendChild(header);
    return nav;
}
