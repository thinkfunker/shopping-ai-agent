import React from 'react';
import './BottomButton.css';

/**
 * Bottom Button Template
 * 
 * @param {string} layout - single | horizontal | vertical-2 | vertical-3
 * @param {Array} actions - List of button configs: { label, type: 'primary'|'secondary', onClick }
 * @param {boolean} showHomeIndicator - Whether to show the iOS home bar
 * @param {string} className - Extra classes
 */
const BottomButton = ({
    layout = 'single',
    actions = [],
    showHomeIndicator = true,
    className = '',
    ...props
}) => {
    // Determine layout class
    const layoutMap = {
        'single': 'layout-single',
        'horizontal': 'layout-horizontal',
        'vertical-2': 'layout-vertical',
        'vertical-3': 'layout-vertical'
    };

    const classNames = [
        'bottom-button-template',
        layoutMap[layout] || 'layout-single',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classNames} {...props}>
            <div className="button-area">
                {actions.map((action, idx) => (
                    <button
                        key={idx}
                        className={`template-btn ${action.type || 'primary'}`}
                        onClick={action.onClick}
                        type="button"
                    >
                        {action.label}
                    </button>
                ))}
            </div>

            {showHomeIndicator && (
                <div className="home-indicator-container">
                    <div className="home-indicator-bar" />
                </div>
            )}
        </div>
    );
};

export default BottomButton;
