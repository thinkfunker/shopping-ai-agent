import React from 'react';
import './Modal.css';
import Scrim from '../Scrim/Scrim';
import Button from '../Button/Button';
import Icon from '../Icon';

/**
 * Modal Component
 * 
 * @param {boolean} isOpen - Whether the modal is visible
 * @param {Function} onClose - Callback to close the modal
 * @param {string} os - 'mobile' | 'pc'
 * @param {string} buttonLayout - 'horizontal' | 'vertical'
 * @param {string} title - Modal title
 * @param {string} description - Modal description
 * @param {React.ReactNode} children - Custom content
 * @param {Object} primaryAction - { label, onClick }
 * @param {Object} secondaryAction - { label, onClick }
 * @param {boolean} showCloseIcon - Whether to show the top-right close icon (PC layout)
 */
const Modal = ({
    isOpen = false,
    onClose,
    os = 'mobile',
    buttonLayout = 'vertical',
    title = 'Title',
    description = 'Description Here',
    children,
    primaryAction,
    secondaryAction,
    showCloseIcon = true
}) => {
    if (!isOpen) return null;

    const isPc = os === 'pc';
    const isVertical = buttonLayout === 'vertical';

    return (
        <div className="modal-overlay">
            <Scrim onClick={onClose} />
            <div className={`modal-container modal-${os}`}>
                <div className="modal-header">
                    <div className="modal-title-group">
                        <h2 className="modal-title">{title}</h2>
                        <p className="modal-description">{description}</p>
                    </div>
                    {isPc && showCloseIcon && (
                        <button className="modal-close-btn" onClick={onClose}>
                            <Icon name="cross-outline" size={24} />
                        </button>
                    )}
                </div>

                <div className="modal-body">
                    {children}
                </div>

                <div className={`modal-footer modal-btn-${buttonLayout}`}>
                    {primaryAction && (
                        <Button
                            label={primaryAction.label}
                            priority="solid-primary"
                            size={isPc ? 'large' : 'xlarge'}
                            onClick={primaryAction.onClick}
                            className="modal-btn-fill"
                        />
                    )}
                    {secondaryAction && (
                        <Button
                            label={secondaryAction.label}
                            priority="outline-primary"
                            size={isPc ? 'large' : 'xlarge'}
                            onClick={secondaryAction.onClick}
                            className="modal-btn-fill"
                        />
                    )}
                    {!isPc && (
                        <Button
                            label="Close"
                            priority="ghost-secondary"
                            size="xlarge"
                            onClick={onClose}
                            className="modal-btn-fill"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
