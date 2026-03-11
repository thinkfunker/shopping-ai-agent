import React from 'react';
import './InteractionCard.css';
import Icon from '../../components/Icon';
import Chip from '../../components/Chip/Chip';
import Button from '../../components/Button/Button';
import ResultPattern from './ResultPattern';

/**
 * Choice Result Card Template
 * 
 * @param {string} display - 'choice' | 'result' | 'both'
 * @param {Array} questions - List of question objects { id, text, choices: [], subOptions: { label, choices: [] } }
 * @param {Object} result - { count, items: [] } (items are data for MediaCard)
 * @param {Function} onChoiceSelect - Callback for chip selection
 * @param {Function} onSearchClick - Callback for the search/confirm button
 */
const ChoiceResultCard = ({
    display = 'choice', // choice, result, both
    questions = [],
    result = { count: 0, items: [], type: 'carousel', mediaSize: 'medium' },
    onChoiceSelect,
    onSearchClick,
    className = ''
}) => {
    const isBoth = display === 'both';
    const isChoiceVisible = display === 'choice' || isBoth;
    const isResultVisible = display === 'result' || isBoth;

    return (
        <div className={`interaction-card choice-result-card ${isBoth ? 'display-both' : ''} ${className}`}>
            {/* Questions / Choices Section */}
            {isChoiceVisible && questions.map((q, qIdx) => (
                <div key={q.id || qIdx} className="interaction-section">
                    <div className="interaction-header">
                        <Icon name="question-text-circle" size={24} color="var(--content-primary)" />
                        <h4 className="interaction-title">{q.text}</h4>
                    </div>

                    <div className="interaction-chip-group">
                        {q.choices?.map((choice, cIdx) => (
                            <Chip
                                key={cIdx}
                                label={choice.label}
                                selected={choice.selected}
                                size="large"
                                onClick={() => onChoiceSelect && onChoiceSelect(q.id, choice)}
                            />
                        ))}
                    </div>

                    {q.subOptions && (
                        <div className="interaction-sub-section">
                            <span className="interaction-sub-label">{q.subOptions.label}</span>
                            <div className="interaction-chip-group-mini">
                                {q.subOptions.choices?.map((sChoice, scIdx) => (
                                    <Chip
                                        key={scIdx}
                                        label={sChoice.label}
                                        selected={sChoice.selected}
                                        size="medium"
                                        onClick={() => onChoiceSelect && onChoiceSelect(q.id, sChoice, true)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {/* Action Button for 'choice' mode */}
            {display === 'choice' && (
                <div className="interaction-footer">
                    <Button
                        label="搜索 (Search)"
                        type="outline"
                        size="large"
                        fullWidth
                        onClick={onSearchClick}
                    />
                </div>
            )}

            {/* Results Section */}
            {isResultVisible && (
                <div className="interaction-result-section">
                    <div className="interaction-result-header">
                        <Icon name="ai-check" size={24} />
                        <div className="interaction-result-text">
                            <span className="interaction-result-count">{result.count}</span>
                            <span className="interaction-result-unit">건</span>
                            <span className="interaction-sub-label">의 결과가 발견되었습니다.</span>
                        </div>
                    </div>

                    <ResultPattern
                        type={result.type}
                        mediaSize={result.mediaSize}
                        items={result.items}
                    />
                </div>
            )}
        </div>
    );
};

export default ChoiceResultCard;
