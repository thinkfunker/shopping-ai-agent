import React from 'react';
import './MessageActionBar.css';
import Icon from '../Icon';

/**
 * Message Action Bar component (usually below AI messages)
 * 
 * @param {string} type - full | feedback
 * @param {Object} feedback - { good: boolean, bad: boolean } selected states
 * @param {Function} onAction - (actionKey) callback
 * @param {string} className - Extra classes
 */
const MessageActionBar = ({
    type = 'full',
    feedback = { good: false, bad: false },
    onAction,
    className = '',
    ...props
}) => {
    const isFull = type === 'full';

    const handleAction = (action) => {
        if (onAction) onAction(action);
    };

    return (
        <div className={`message-action-bar ${className}`} {...props}>
            <div className="message-action-bar-container">
                {/* Like Button */}
                <button
                    className={`message-action-btn ${feedback.good ? 'selected' : ''}`}
                    onClick={() => handleAction('good')}
                    title="Good"
                >
                    <Icon name={feedback.good ? "thumb-up-solid" : "thumb-up-outline"} size={20} />
                </button>

                <div className="message-action-divider" />

                {/* Dislike Button */}
                <button
                    className={`message-action-btn bad-icon ${feedback.bad ? 'selected' : ''}`}
                    onClick={() => handleAction('bad')}
                    title="Bad"
                >
                    <Icon name={feedback.bad ? "thumb-up-solid" : "thumb-up-outline"} size={20} />
                </button>

                {isFull && (
                    <>
                        <div className="message-action-divider" />
                        {/* Redo Button */}
                        <button
                            className="message-action-btn"
                            onClick={() => handleAction('redo')}
                            title="Redo"
                        >
                            <Icon name="redo-outline" size={20} />
                        </button>

                        <div className="message-action-divider" />

                        {/* Copy Button */}
                        <button
                            className="message-action-btn"
                            onClick={() => handleAction('copy')}
                            title="Copy"
                        >
                            <Icon name="squares-outline" size={20} />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default MessageActionBar;
