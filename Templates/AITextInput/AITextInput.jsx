import React, { useState } from 'react';
import './AITextInput.css';
import Icon from '../../components/Icon';
import Button from '../../components/Button/Button';

/**
 * AI Text Input Template
 * 
 * @param {string} type - default | login button | multiline
 * @param {boolean} background - Whether to show white background
 * @param {boolean} showFooter - Show disclaimer footer
 * @param {boolean} showLeftButton - Show left action button (e.g. plus)
 * @param {boolean} showSystem - Show iOS home indicator
 */
const AITextInputTemplate = ({
    type = 'default',
    background = true,
    showFooter = false,
    showLeftButton = true,
    showSystem = true,
    placeholder = "なんでも聞いてください",
    onSend,
    className = ""
}) => {
    const [value, setValue] = useState("");
    const isMultiline = type === 'multiline';
    const hasLogin = type === 'login button';

    const handleSend = () => {
        if (value.trim() && onSend) {
            onSend(value);
            setValue("");
        }
    };

    return (
        <div className={`ai-text-input-template ${background ? 'bg-on' : 'bg-off'} ${className}`}>
            <div className="ai-text-input-template-container">
                {showLeftButton && type === 'default' && (
                    <Button
                        size="xlarge"
                        priority="outline-tertiary"
                        iconOnly={true}
                        icon="plus"
                    />
                )}

                <div className={`ai-text-input-wrapper ${isMultiline ? 'multiline' : ''}`}>
                    {isMultiline ? (
                        <textarea
                            className="ai-text-input-field"
                            placeholder={placeholder}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    ) : (
                        <input
                            type="text"
                            className="ai-text-input-field"
                            placeholder={placeholder}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        />
                    )}

                    <div className="ai-input-controls">
                        {hasLogin && (
                            <button className="ai-login-btn" type="button">
                                ログイン
                            </button>
                        )}
                        {type !== 'login button' && (
                            <button
                                className="ai-send-btn"
                                type="button"
                                onClick={handleSend}
                                disabled={!value.trim()}
                            >
                                <Icon name="arrow-up-solid" size={20} />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {showFooter && (
                <footer className="ai-text-input-footer">
                    <p className="disclaimer-text">
                        AIの回答は不正確な可能性があります。 AIが生成した回答の注意点は
                        <a className="disclaimer-link">ガイドライン</a>
                        をご確認ください
                    </p>
                    <div className="footer-meta-row">
                        <p className="disclaimer-text">
                            参考 : <a className="disclaimer-link">mybest</a>（2024/03/11更新）
                        </p>
                        <div className="footer-info-item">
                            <Icon name="bulb" size={16} />
                            <span className="disclaimer-text">商品情報の注意事項</span>
                        </div>
                    </div>
                </footer>
            )}

            {showSystem && (
                <div className="home-indicator-container">
                    <div className="home-indicator-bar" />
                </div>
            )}
        </div>
    );
};

export default AITextInputTemplate;
