import React from 'react';
import './InteractionCard.css';
import Icon from '../../components/Icon';
import Chip from '../../components/Chip/Chip';

/**
 * Question Card Template
 * 
 * @param {boolean} expanded - Whether the card is open for input
 * @param {string} completion - 'incomplete' | 'completed'
 * @param {string} question - The question text
 * @param {string} selectionType - 'chip horizontal' | 'chip default' | 'list default'
 * @param {Array} choices - List of choice objects { label, selected }
 */
const QuestionCard = ({
    expanded = true,
    completion = 'incomplete',
    question = 'Question Text',
    selectionType = 'chip default',
    choices = [],
    onToggle,
    onSelect,
    className = ''
}) => {
    return (
        <div className={`interaction-card question-card ${expanded ? 'expanded' : 'collapsed'} status-${completion} ${className}`} onClick={!expanded ? onToggle : undefined}>
            {/* Header Area (Always visible) */}
            <div className="interaction-header" style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    {completion === 'completed' ? (
                        <Icon name="check-circle" size={24} color="var(--status-success)" />
                    ) : (
                        <Icon name="question-circle" size={24} color="var(--content-tertiary)" />
                    )}
                    <h4 className="interaction-title" style={{ fontSize: expanded ? '16px' : '14px' }}>{question}</h4>
                </div>
                {!expanded && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {/* Summary of selection if completed */}
                        {completion === 'completed' && (
                            <span className="interaction-sub-label" style={{ color: 'var(--content-key)' }}>
                                {choices.find(c => c.selected)?.label || 'Selected'}
                            </span>
                        )}
                        <Icon name="chevron-down" size={20} />
                    </div>
                )}
            </div>

            {/* Body Area (Visible when expanded) */}
            {expanded && (
                <div className="interaction-section">
                    {selectionType.includes('chip') && (
                        <div className={`interaction-chip-group ${selectionType === 'chip horizontal' ? 'horizontal-scroll' : ''}`}>
                            {choices.map((choice, idx) => (
                                <Chip
                                    key={idx}
                                    label={choice.label}
                                    selected={choice.selected}
                                    size="large"
                                    onClick={() => onSelect && onSelect(choice)}
                                />
                            ))}
                        </div>
                    )}

                    {selectionType === 'list default' && (
                        <div className="interaction-list-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {choices.map((choice, idx) => (
                                <div
                                    key={idx}
                                    className={`list-item ${choice.selected ? 'selected' : ''}`}
                                    style={{
                                        padding: '12px',
                                        borderRadius: '8px',
                                        border: '1px solid var(--border-elevated-1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        cursor: 'pointer',
                                        backgroundColor: choice.selected ? 'var(--background-selection-secondary)' : 'transparent'
                                    }}
                                    onClick={() => onSelect && onSelect(choice)}
                                >
                                    <div style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        border: '2px solid var(--border-elevated-1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {choice.selected && <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--content-key)' }} />}
                                    </div>
                                    <span>{choice.label}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default QuestionCard;
