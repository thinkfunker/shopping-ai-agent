import React, { useState } from 'react';
import './ShoppingAgent.css';

// 1. Precise Design System Component Imports
import TopNavigation from '../design-system/components/TopNavigation/TopNavigation';
import MessageList from '../design-system/components/Message/MessageList';
import Message from '../design-system/components/Message/Message';
import Carousel from '../design-system/components/Carousel/Carousel';
import MediaCard from '../design-system/Templates/MediaCard/MediaCard';
import AiSuggestionList from '../design-system/components/Carousel/AiSuggestionList';
import AITextInput from '../design-system/components/AITextInput/AITextInput';
import ImagePreview from '../design-system/components/ImagePreview/ImagePreview';

/**
 * [PROTECTED] ShoppingAgent Page Component
 * Refactored for 100% adherence to Design System Foundation and Rules.
 */
const ShoppingAgent = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="sa-page-root">
            {/* Header: Fixed Top Navigation with StatusBar */}
            <div className="sa-header-area">
                <TopNavigation
                    os="mobile"
                    headerTitle="Shopping AI Agent"
                    rightIcons={['magnifying-glass-solid', 'cart-shopping-solid']}
                    showAvatar={true}
                    titleAlign="center"
                />
            </div>

            {/* Content: Foundation-compliant Message List */}
            <div className="sa-chat-area">
                <MessageList>
                    <Message
                        role="AI"
                        agentName="Shopping Bot"
                        content="안녕하세요! 오늘은 어떤 스타일을 찾아볼까요? 원하시는 브랜드나 아이템을 말씀해주세요."
                    />

                    <Message
                        role="user"
                        content="나이키 조던 시리즈 최신 모델 보여줘"
                    />

                    <Message
                        role="AI"
                        agentName="Shopping Bot"
                        content="고객님의 취항과 트렌드를 분석하여 나이키 에어 조던 시리즈 중 가장 어울리는 모델들을 추천합니다."
                    />

                    {/* AI Match Core: Use MediaCard for 100% Spec adherence */}
                    <Carousel type="media">
                        <MediaCard
                            title="Air Jordan 1 Retro"
                            subtitle="Classic high-top silhouette in iconic colorways."
                            metaText={['Nike', 'Performance', '₩249,000']}
                            rating={4.9}
                            reviewCount={120}
                            score={98}
                            imageUrl="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=300"
                            onClick={() => setSelectedProduct({
                                title: "Air Jordan 1 Retro",
                                image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=300",
                                rating: 4.9,
                                count: 120
                            })}
                        />
                        <MediaCard
                            title="Jordan 4 Military Blue"
                            subtitle="Timeless design with premium materials."
                            metaText={['Nike', 'Sports', '₩299,000']}
                            rating={5.0}
                            reviewCount={85}
                            score={92}
                            imageUrl="https://images.unsplash.com/photo-1597043530272-bc882ff38289?w=300"
                            onClick={() => setSelectedProduct({
                                title: "Jordan 4 Military Blue",
                                image: "https://images.unsplash.com/photo-1597043530272-bc882ff38289?w=300",
                                rating: 5.0,
                                count: 85
                            })}
                        />
                    </Carousel>

                    {/* Suggestion Patterns: Section 41.2 */}
                    <AiSuggestionList
                        title="AI 추가 추천"
                        suggestions={["다른 색상도 있어?", "내 사이즈 재고 확인", "함께 코디할 바지"]}
                    />
                </MessageList>
            </div>

            {/* Input: Section 26.1 AITextInput */}
            <div className="sa-input-area">
                <AITextInput
                    placeholder="찾고 싶은 아이템이 더 있으신가요?"
                />
            </div>

            {/* Overlay: Section 42 Image Preview */}
            <ImagePreview
                isOpen={!!selectedProduct}
                imageSrc={selectedProduct?.image}
                title={selectedProduct?.title}
                score={selectedProduct?.rating}
                reviewCount={selectedProduct?.count}
                serviceName="Nike Official Store"
                tags={["Limited", "Special Edition"]}
                onClose={() => setSelectedProduct(null)}
            />
        </div>
    );
};

export default ShoppingAgent;
