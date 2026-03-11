import React from 'react';
import './AiSuggestionList.css';
import Icon from '../Icon';

/**
 * AiSuggestionList Component
 * A vertical list of AI suggestion chips with a header.
 * 
 * @param {string} title - Header title
 * @param {Array<string>} suggestions - List of suggestion strings
 * @param {Function} onSuggestionClick - Callback when a suggestion is clicked
 */
const AiSuggestionList = ({
    title = 'AIに追加の質問',
    suggestions = [],
    onSuggestionClick
}) => {
    return (
        <div className="ai-suggestion-list">
            <div className="ai-suggestion-header">
                <div className="ai-suggestion-header-icon">
                    <Icon name="ai-stars" size={20} />
                </div>
                <h3 className="ai-suggestion-header-title">{title}</h3>
            </div>
            {suggestions.map((text, index) => (
                <div
                    key={index}
                    className="ai-suggestion-item"
                    onClick={() => onSuggestionClick && onSuggestionClick(text)}
                >
                    <div className="ai-suggestion-text">{text}</div>
                    <div className="ai-suggestion-btn">
                        <Icon name="arrow-up-solid" size={20} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AiSuggestionList;
