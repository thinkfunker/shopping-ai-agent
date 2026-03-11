import React from 'react';
import './TopNavigation.css';
import Icon from '../Icon';
import StatusBar from '../StatusBar/StatusBar';

/**
 * Top Navigation Component
 * 
 * @param {string} os - mobile (default) | pc
 * @param {string} titleAlign - center (default for mobile) | left
 * @param {string} headerTitle - Title text to display
 * @param {boolean} showLeftIcon - Show back button (chevron-left)
 * @param {boolean} showAvatar - Show user avatar
 * @param {Array} rightIcons - List of icon names to show on the right
 * @param {Array} textButtons - (PC only) List of text labels for nav links
 * @param {string} className - Additional CSS classes
 */
const TopNavigation = ({
    os = 'mobile',
    titleAlign = 'center',
    headerTitle = 'Title text',
    showLeftIcon = true,
    showAvatar = false,
    rightIcons = ['bars-solid'], // default burger menu
    textButtons = [],
    className = '',
    ...props
}) => {
    const isMobile = os === 'mobile';
    const isPC = os === 'pc';

    // Normalize alignment for PC (usually left)
    const effectiveAlign = isPC ? 'left' : titleAlign;

    const classNames = [
        'top-navigation',
        `top-navigation-${os}`,
        `align-${effectiveAlign}`,
        className
    ].filter(Boolean).join(' ');

    return (
        <nav className={classNames} {...props}>
            {isMobile && <StatusBar />}
            <div className="top-navigation-header">
                {/* Mobile: Left area (Back button / Title if left-aligned) */}
                {isMobile && (
                    <div className="top-navigation-left">
                        {showLeftIcon && (
                            <button className="top-navigation-icon-btn" type="button">
                                <Icon name="chevron-left-outline" size={24} />
                            </button>
                        )}
                        {effectiveAlign === 'left' && (
                            <h1 className="top-navigation-title">{headerTitle}</h1>
                        )}
                    </div>
                )}

                {/* Mobile: Center area (Title if center-aligned) */}
                {isMobile && effectiveAlign === 'center' && (
                    <div className="top-navigation-center" style={{ textAlign: 'center' }}>
                        <h1 className="top-navigation-title">{headerTitle}</h1>
                    </div>
                )}

                {/* PC: Left/Content area (Title + Nav links) */}
                {isPC && (
                    <div className="top-navigation-left">
                        <h1 className="top-navigation-title">{headerTitle}</h1>
                        {textButtons.length > 0 && (
                            <div className="top-navigation-text-buttons">
                                {textButtons.map((btn, idx) => (
                                    <button key={idx} className="top-navigation-text-btn" type="button">
                                        {btn}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Right area for both OS */}
                <div className="top-navigation-right">
                    {rightIcons.map((icon, idx) => (
                        <button key={idx} className="top-navigation-icon-btn" type="button">
                            <Icon name={icon} size={24} />
                        </button>
                    ))}
                    {showAvatar && (
                        <div className="top-navigation-avatar">
                            <img src="../../assets/components/TopNavigation/6cf779209837fe69c1fd4ccbb5d0abc91833f717.png" alt="User" />
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default TopNavigation;
