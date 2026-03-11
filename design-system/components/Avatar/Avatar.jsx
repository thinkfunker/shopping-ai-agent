import React from 'react';
import './Avatar.css';

/**
 * React Avatar Component
 */
const Avatar = ({ size = 'medium', type = 'user', src, className = '', ...props }) => {
    const avatarSrc = src || (type === 'AI' ? './icons/ai/logo-gradient.svg' : './images/user-avatar.png');

    return (
        <div className={`avatar ${size} ${type.toLowerCase()} ${className}`} {...props}>
            <img src={avatarSrc} alt={`${type} avatar`} />
        </div>
    );
};

export default Avatar;
