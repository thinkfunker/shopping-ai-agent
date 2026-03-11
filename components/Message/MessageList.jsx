import React from 'react';
import './MessageList.css';

/**
 * MessageList Component
 * A container for chat messages with standard padding and gaps.
 * 
 * @param {React.ReactNode} children - Message components
 * @param {string} className - Extra classes
 */
const MessageList = ({
    children,
    className = ''
}) => {
    return (
        <div className={`message-list ${className}`}>
            {React.Children.map(children, (child, index) => (
                <div key={index} className="message-list-item">
                    {child}
                </div>
            ))}
        </div>
    );
};

export default MessageList;
