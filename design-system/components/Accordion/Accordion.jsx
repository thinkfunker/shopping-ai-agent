import React, { useState } from 'react';
import './Accordion.css';
import Icon from '../Icon';

/**
 * React Accordion Component
 */
const Accordion = ({ title, children, defaultOpen = false, className = '' }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={`accordion ${isOpen ? 'open' : ''} ${className}`}>
            <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
                <div className="accordion-title">{title}</div>
                <div className="accordion-icon">
                    <Icon name="chevron-down" variant="solid" size={14} />
                </div>
            </div>
            <div className="accordion-content">
                <div className="accordion-description">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
