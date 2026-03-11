import React from 'react';
import './Score.css';
import Icon from '../Icon';

/**
 * Score / Rating component
 * 
 * @param {number} value - Numerical score (0-5)
 * @param {number} count - Count text (e.g. 999)
 * @param {string} type - default (5 stars) | simple (1 star)
 * @param {string} size - medium | small
 * @param {boolean} leadingText - Whether to show the numeric score leading
 * @param {boolean} trailingText - Whether to show the count trailing
 * @param {string} className - Additional classes
 */
const Score = ({
    value = 5.0,
    count = 999,
    type = 'default',
    size = 'medium',
    leadingText = true,
    trailingText = true,
    className = '',
    ...props
}) => {
    const classNames = [
        'score',
        `score-${type}`,
        `score-size-${size}`,
        className
    ].filter(Boolean).join(' ');

    const stars = [];
    if (type === 'default') {
        for (let i = 1; i <= 5; i++) {
            if (value >= i) {
                stars.push(<Icon key={i} name="star-full-solid" size={size === 'medium' ? 20 : 16} className="score-star" />);
            } else if (value >= i - 0.5) {
                stars.push(<Icon key={i} name="star-half-solid" size={size === 'medium' ? 20 : 16} className="score-star" />);
            } else {
                stars.push(<Icon key={i} name="star-empty-outline" size={size === 'medium' ? 20 : 16} className="score-star" />);
            }
        }
    } else {
        // Simple type: usually just one star
        stars.push(<Icon key="simple" name="star-full-solid" size={size === 'medium' ? 20 : 16} className="score-star" />);
    }

    return (
        <div className={classNames} {...props}>
            {leadingText && (
                <div className="score-text score-leading">
                    {value.toFixed(1)}
                </div>
            )}

            <div className="score-stars">
                {stars}
            </div>

            {trailingText && count > 0 && (
                <div className="score-text score-trailing">
                    ({count})
                </div>
            )}
        </div>
    );
};

export default Score;
