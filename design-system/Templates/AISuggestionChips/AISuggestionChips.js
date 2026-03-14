/**
 * AI Suggestion Chips - Atomic Orchestrator
 */
window.renderAISuggestionChips = function ({
    layout = 'carousel', 
    items = [],
    onItemClick = null
} = {}) {
    // Ensure all atoms are available (if not loaded yet, these are defined in the same task)
    const container = document.createElement('div');
    container.className = `ai-suggestion-chips-container layout-${layout}`;
    
    const displayItems = items.length > 0 ? items : [
        { title: '근처 카페 찾아줘', icon: 'cart-outline' },
        { title: '인기 있는 노트북 추천', icon: 'map-marker-outline' },
        { title: '케이크 만드는 법', icon: 'browser-outline' },
        { title: '오늘 쇼핑 제안' },
        { title: '선물 추천' }
    ];

    // Layout Switching Logic
    if (layout === 'list-title') {
        if (window.renderAISuggestionListHeader) {
            container.appendChild(window.renderAISuggestionListHeader({ title: 'Title text' }));
        }
        displayItems.forEach(item => {
            if (window.renderAISuggestionListItem) {
                container.appendChild(window.renderAISuggestionListItem({
                    title: item.title,
                    onClick: () => onItemClick && onItemClick(item)
                }));
            }
        });
    } 
    else if (layout === 'carousel') {
        displayItems.forEach(item => {
            if (window.renderAISuggestionCard) {
                container.appendChild(window.renderAISuggestionCard({
                    title: item.title,
                    icon: item.icon,
                    onClick: () => onItemClick && onItemClick(item)
                }));
            }
        });
    }
    else if (layout === 'list-tag') {
        displayItems.forEach(item => {
            if (window.renderAISuggestionPillTag) {
                container.appendChild(window.renderAISuggestionPillTag({
                    title: item.title,
                    label: 'Label',
                    onClick: () => onItemClick && onItemClick(item)
                }));
            }
        });
    }
    else if (layout === 'group-icon') {
        displayItems.forEach(item => {
            if (window.renderAISuggestionPillGroup) {
                container.appendChild(window.renderAISuggestionPillGroup({
                    title: item.title,
                    icon: item.icon || 'brand-sparkle',
                    onClick: () => onItemClick && onItemClick(item)
                }));
            }
        });
    }

    return container;
};
