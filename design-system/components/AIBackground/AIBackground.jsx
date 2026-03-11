import React from 'react';
import './AIBackground.css';

// Asset paths from Figma
const imgDarkModeOff = '../../assets/components/AIBackground/f87ad5e8ecc0d4c8530a5f042f6532b2afb56c6e.png';
const imgDarkModeOn = '../../assets/components/AIBackground/54e50cd0ba2cd08962dc2d6898f736913685e123.png';

/**
 * AI Background Component
 * 
 * @param {boolean} darkMode - Toggle between light and dark backgrounds
 * @param {string} className - Additional CSS classes
 */
const AIBackground = ({
    darkMode = false,
    className = '',
    ...props
}) => {
    return (
        <div
            className={`ai-background ${darkMode ? 'ai-background-dark' : 'ai-background-light'} ${className}`}
            {...props}
        >
            <img
                src={darkMode ? imgDarkModeOn : imgDarkModeOff}
                alt=""
                className="ai-background-image"
                aria-hidden="true"
            />
        </div>
    );
};

export default AIBackground;
