import React, { useState } from 'react';
import './TextInput.css';
import Icon from '../Icon';

/**
 * Text Input Component
 * 
 * @param {string} value - Current input value
 * @param {string} placeholder - Placeholder text
 * @param {string} state - enabled | focused | typing | typed | error | disabled
 * @param {Function} onChange - Value change handler
 * @param {boolean} showLeftIcon - Whether to show the pen icon
 * @param {string} className - Additional CSS classes
 */
const TextInput = ({
    value = '',
    placeholder = 'Placeholder',
    state: propState = 'enabled',
    onChange,
    showLeftIcon = true,
    className = '',
    ...props
}) => {
    const [internalState, setInternalState] = useState(propState);
    const [inputValue, setInputValue] = useState(value);

    // Sync prop state if it changes
    React.useEffect(() => {
        setInternalState(propState);
    }, [propState]);

    const handleFocus = () => {
        if (internalState !== 'disabled') {
            setInternalState('focused');
        }
    };

    const handleBlur = () => {
        if (internalState !== 'disabled') {
            setInternalState(inputValue ? 'typed' : 'enabled');
        }
    };

    const handleChange = (e) => {
        const val = e.target.value;
        setInputValue(val);
        if (onChange) onChange(val);

        if (internalState !== 'disabled' && internalState !== 'error') {
            setInternalState(val ? 'typing' : 'focused');
        }
    };

    const handleClear = () => {
        setInputValue('');
        if (onChange) onChange('');
        setInternalState('focused');
    };

    const wrapperClass = [
        'text-input-wrapper',
        `state-${internalState}`,
        className
    ].filter(Boolean).join(' ');

    return (
        <div className="text-input-container">
            <div className={wrapperClass}>
                {showLeftIcon && internalState === 'enabled' && (
                    <div className="text-input-icon-left">
                        <Icon name="pen-solid" size={20} />
                    </div>
                )}

                <input
                    className="text-input"
                    value={inputValue}
                    placeholder={placeholder}
                    disabled={internalState === 'disabled'}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    {...props}
                />

                {internalState === 'typing' && (
                    <div className="text-input-icon-right" onClick={handleClear}>
                        <Icon name="cross-circle-solid" size={24} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TextInput;
