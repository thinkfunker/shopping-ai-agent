import React, { useState } from 'react';
import './AITextInput.css';
import Icon from '../Icon';

/**
 * React AI Text Input Component
 */
const AITextInput = ({
    placeholder = "なん데모 키이테 쿠다사이",
    type = "simple",
    showLeftIcon = true,
    disabled = false,
    onSend,
    className = ""
}) => {
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleSend = () => {
        if (value.trim() && onSend) {
            onSend(value);
            setValue("");
        }
    };

    return (
        <div className={`ai-text-input-container ${type} ${isFocused ? 'focused' : ''} ${disabled ? 'disabled' : ''} ${className}`}>
            {showLeftIcon && (
                <div className="ai-left-btn">
                    <Icon name="plus" variant="outline" size={20} />
                </div>
            )}
            <div className="ai-input-wrapper">
                {type === "multiple" ? (
                    <textarea
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        disabled={disabled}
                    />
                ) : (
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        disabled={disabled}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    />
                )}
            </div>
            <div className="ai-input-controls">
                <button className="ai-input-btn voice" disabled={disabled}>
                    <Icon name="microphone" variant="outline" size={20} />
                </button>
                <button
                    className="ai-input-btn send"
                    onClick={handleSend}
                    disabled={disabled || !value.trim()}
                >
                    <Icon name="arrow-up" variant="solid" size={20} />
                </button>
            </div>
        </div>
    );
};

export default AITextInput;
