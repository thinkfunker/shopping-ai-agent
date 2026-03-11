import React from 'react';
import './Message.css';
import Avatar from '../Avatar/Avatar';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';

/**
 * Message Component
 * 
 * @param {string} role - user | AI
 * @param {string} content - Message text content
 * @param {string} agentName - Name of the AI agent
 * @param {boolean} background - Whether to show bubble background (default: false)
 * @param {string} type - text (default) | image
 * @param {string} imageSrc - URL for image type
 * @param {string} os - pc | mobile (default)
 * @param {string} state - enabled (default) | loading
 * @param {string} className - Extra classes
 * @param {React.ReactNode} children - Support for custom content (lists, titles etc)
 */
const Message = ({
    role = 'user',
    content = '',
    agentName = 'Agent Name',
    background = false,
    type = 'text',
    imageSrc = null,
    os = 'mobile',
    state = 'enabled',
    className = '',
    children,
    ...props
}) => {
    const classNames = [
        'message',
        `message-role-${role}`,
        `message-os-${os}`,
        background ? 'message-background-on' : 'message-background-off',
        className
    ].filter(Boolean).join(' ');

    if (state === 'loading') {
        return (
            <div className={classNames} {...props}>
                <div className="message-loading">
                    <ProgressIndicator type="circle" size="small" />
                    <div className="message-loading-text">{content || 'AI Message'}</div>
                </div>
            </div>
        );
    }

    if (role === 'AI') {
        return (
            <div className={classNames} {...props}>
                <div className={background ? 'message-bubble' : 'message-ai-layout'}>
                    {!background && (
                        <div className="message-ai-header">
                            <Avatar type="AI" size="medium" />
                            <div className="message-ai-name">{agentName}</div>
                        </div>
                    )}
                    <div className="message-ai-body">
                        {content && <p className="message-ai-text">{content}</p>}
                        {children}
                    </div>
                </div>
            </div>
        );
    }

    // Role: User
    return (
        <div className={classNames} {...props}>
            <div className={background ? 'message-bubble' : 'message-user-layout'}>
                {type === 'image' && imageSrc && (
                    <div className="message-image-container">
                        <img src={imageSrc} alt="User upload" />
                    </div>
                )}

                {type === 'text' && (
                    <>
                        {!background && <Avatar type="user" size="medium" />}
                        <div className="message-user-content">
                            {content}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Message;
