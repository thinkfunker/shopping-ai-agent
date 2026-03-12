/**
 * Render a Top Navigation component
 * @param {Object} options
 * @param {string} options.os - mobile | pc
 * @param {string} options.titleAlign - left | center
 * @param {string} options.headerTitle - Title text
 * @param {boolean} options.showLeftIcon - Show back button
 * @param {boolean} options.showAvatar - Show user avatar
 * @param {boolean} options.showDivider - Show bottom divider
 * @param {Array<string>} options.rightIcons - List of icon names
 * @param {Array<string>} options.textButtons - List of text labels (PC only)
 * @returns {HTMLElement}
 */
window.renderTopNavigation = function ({
    os = 'mobile',
    titleAlign = 'center',
    headerTitle = 'Title text',
    showLeftIcon = true,
    showAvatar = false,
    showDivider = true,
    rightIcons = ['bars-solid'],
    textButtons = []
} = {}) {
    const isMobile = os === 'mobile';
    const isPC = os === 'pc';
    const align = isPC ? 'left' : titleAlign;

    const nav = document.createElement('nav');
    nav.className = `top-navigation top-navigation-${os} align-${align}${!showDivider ? ' no-divider' : ''}`;

    // Status bar removed as per request
    /*
    if (isMobile && typeof renderStatusBar === 'function') {
        nav.appendChild(renderStatusBar());
    }
    */

    const header = document.createElement('div');
    header.className = 'top-navigation-header';

    // Left Area
    const leftArea = document.createElement('div');
    leftArea.className = 'top-navigation-left';

    if (isMobile && showLeftIcon) {
        const backBtn = document.createElement('button');
        backBtn.className = 'top-navigation-icon-btn';
        backBtn.type = 'button';
        if (typeof renderIcon === 'function') {
            backBtn.appendChild(renderIcon({
                category: 'common',
                name: 'chevron-left',
                variant: 'outline',
                size: 24
            }));
        }
        else {
            backBtn.textContent = '←';
        }
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
        btn.type = 'button';
        if (typeof renderIcon === 'function') {
            // Check if iconName has a variant suffix like -solid or -outline
            let name = iconName;
            let variant = null;
            if (iconName.includes('-')) {
                const parts = iconName.split('-');
                const possibleVariant = parts[parts.length - 1];
                if (['solid', 'outline', 'gradient'].includes(possibleVariant)) {
                    variant = possibleVariant;
                    name = parts.slice(0, parts.length - 1).join('-');
                }
            }
            btn.appendChild(renderIcon({ name: name, variant: variant, size: 24 }));
        } else {
            btn.textContent = '☰';
        }
        rightArea.appendChild(btn);
    });

    if (showAvatar) {
        if (typeof renderAvatar === 'function') {
            rightArea.appendChild(renderAvatar({ size: 'small', type: 'user' }));
        }
    }
    header.appendChild(rightArea);

    nav.appendChild(header);
    return nav;
}
