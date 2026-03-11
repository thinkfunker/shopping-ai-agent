import React from 'react';
import './Badge.css';

/**
 * React Badge Component
 */
const Badge = ({
    text = "0",
    type = "number",
    priority = "primary",
    size = "small",
    className = "",
    ...props
}) => {
    return (
        <div
            className={`badge ${type} ${priority} ${size} ${className}`}
            {...props}
        >
            {type === "number" ? text : null}
        </div>
    );
};

export default Badge;
