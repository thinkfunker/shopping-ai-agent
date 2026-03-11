import React from 'react';
import './BottomSheet.css';
import Icon from '../../components/Icon';

/**
 * Bottom Sheet Template
 * 
 * @param {string} type - default | header only
 * @param {string} headerTitle - Title to display in header
 * @param {boolean} showLeftIcon - Show back icon (chevron-left)
 * @param {string} leftButtonLabel - Label for left ghost button
 * @param {string} rightButtonLabel - Label for right ghost button
 * @param {boolean} showRightIcon - Show close icon (cross)
 * @param {boolean} showBottomButton - Show the primary action button at bottom
 * @param {string} bottomButtonLabel - Label for the bottom primary button
 * @param {React.ReactNode} children - Content of the bottom sheet
 * @param {boolean} isOpen - Control visibility
 * @param {function} onClose - Callback for closing
 */
const BottomSheet = ({
    type = 'default',
    headerTitle = 'Title',
    showLeftIcon = false,
    leftButtonLabel = '',
    rightButtonLabel = '',
    showRightIcon = true,
    showBottomButton = true,
    bottomButtonLabel = 'Label',
    children,
    isOpen = true,
    onClose,
    className = ''
}) => {
    if (!isOpen) return null;

    const isDefault = type === 'default';

    return (
        <div className="bottom-sheet-overlay" onClick={onClose}>
            <div
                className={`bottom-sheet-template type-${type} ${className}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Section */}
                <div className="bottom-sheet-header-container">
                    <div className="bottom-sheet-draggable-handle">
                        <div className="bottom-sheet-handle" />
                    </div>

                    <div className="bottom-sheet-header-content">
                        <div className="bottom-sheet-side-area left">
                            {showLeftIcon && (
                                <button className="bottom-sheet-icon-btn" type="button">
                                    <Icon name="chevron-left" size={24} />
                                </button>
                            )}
                            {leftButtonLabel && (
                                <button className="bottom-sheet-ghost-btn secondary" type="button">
                                    {leftButtonLabel}
                                </button>
                            )}
                        </div>

                        <div className="bottom-sheet-title-container">
                            <h2 className="bottom-sheet-title">{headerTitle}</h2>
                        </div>

                        <div className="bottom-sheet-side-area right">
                            {rightButtonLabel && (
                                <button className="bottom-sheet-ghost-btn primary" type="button">
                                    {rightButtonLabel}
                                </button>
                            )}
                            {showRightIcon && (
                                <button className="bottom-sheet-icon-btn" type="button" onClick={onClose}>
                                    <Icon name="cross" size={24} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                {isDefault && (
                    <div className="bottom-sheet-content">
                        {children || <div style={{ height: '296px' }} />}
                    </div>
                )}

                {/* Footer Section */}
                {isDefault && (
                    <footer className="bottom-sheet-footer">
                        {showBottomButton && (
                            <div className="bottom-sheet-button-area">
                                <button className="bottom-sheet-primary-btn" type="button">
                                    {bottomButtonLabel}
                                </button>
                            </div>
                        )}
                        <div className="bottom-sheet-home-indicator">
                            <div className="bottom-sheet-home-bar" />
                        </div>
                    </footer>
                )}
            </div>
        </div>
    );
};

export default BottomSheet;
