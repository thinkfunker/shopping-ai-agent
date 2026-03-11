import React from 'react';
import './StatusBar.css';

/**
 * StatusBar Component
 * A mobile-style status bar showing time and system levels.
 * 
 * @param {string} mode - 'light' | 'dark'
 * @param {string} time - Time string (default '9:41')
 * @param {number} battery - Battery level percentage (0-100)
 */
const StatusBar = ({
    mode = 'light',
    time = '9:41',
    battery = 85
}) => {
    return (
        <div className={`status-bar status-bar-${mode}`}>
            <div className="status-bar-time">{time}</div>
            <div className="status-bar-levels">
                <div className="status-bar-icon status-bar-cellular">
                    {/* Simplified Cellular icon */}
                    <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="7" width="3" height="3" rx="1" fill="currentColor" />
                        <rect x="4.5" y="5" width="3" height="5" rx="1" fill="currentColor" />
                        <rect x="8.5" y="2" width="3" height="8" rx="1" fill="currentColor" />
                        <rect x="12.5" y="0" width="3" height="10" rx="1" fill="currentColor" fillOpacity="0.3" />
                    </svg>
                </div>
                <div className="status-bar-icon status-bar-wifi">
                    {/* Simplified Wifi icon */}
                    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 12C10.5 12 12 11 13 10L8.5 5.5L4 10C5 11 6.5 12 8.5 12Z" fill="currentColor" />
                    </svg>
                </div>
                <div className="status-bar-battery">
                    <div
                        className="status-bar-battery-level"
                        style={{ width: `${Math.min(100, Math.max(0, battery))}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default StatusBar;
