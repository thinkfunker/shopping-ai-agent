import React, { useState, useEffect, useRef } from 'react';
import './ShoppingAgentPrototype.css';

// 디자인 시스템 컴포넌트 임포트 (100% 규격 준수)
import TopNavigation from '../design-system/components/TopNavigation/TopNavigation';
import MessageList from '../design-system/components/Message/MessageList';
import Message from '../design-system/components/Message/Message';
import Carousel from '../design-system/components/Carousel/Carousel';
import MediaCard from '../design-system/Templates/MediaCard/MediaCard';
import AiSuggestionList from '../design-system/components/Carousel/AiSuggestionList';
import AITextInput from '../design-system/components/AITextInput/AITextInput';
import ImagePreview from '../design-system/components/ImagePreview/ImagePreview';

const ShoppingAgentPrototype = () => {
    const [history, setHistory] = useState([
        { id: 1, role: 'AI', content: '안녕하세요! 당신의 쇼핑 어시스턴트입니다. 어떤 상품을 찾아드릴까요?', agentName: 'Shopping AI' }
    ]);
    const [isThinking, setIsThinking] = useState(false);
    const [previewItem, setPreviewItem] = useState(null);
    const chatEndRef = useRef(null);

    // 새 메시지 추가 시 자동 스크롤
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history, isThinking]);

    const handleInput = (val) => {
        const userMsg = { id: Date.now(), role: 'user', content: val };
        setHistory(prev => [...prev, userMsg]);

        // AI 분석 프로세스 시작 (Prototype Logic)
        setIsThinking(true);

        setTimeout(() => {
            setIsThinking(false);
            const aiMsg = {
                id: Date.now() + 1,
                role: 'AI',
                agentName: 'Shopping AI',
                content: `요청하신 "${val}"에 대해 가장 적합한 추천 리스트를 준비했습니다.`,
                hasProducts: true
            };
            setHistory(prev => [...prev, aiMsg]);
        }, 1800);
    };

    const jordanProducts = [
        {
            title: "Air Jordan 1 Retro",
            subtitle: "The sneaker that started it all.",
            metaText: ["Nike", "High-Top", "₩249,000"],
            rating: 4.8,
            reviewCount: 310,
            score: 98,
            imageUrl: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500"
        },
        {
            title: "Jordan 4 Military Blue",
            subtitle: "A timeless classic returns iconically.",
            metaText: ["Nike", "Mid-Top", "₩299,000"],
            rating: 5.0,
            reviewCount: 88,
            score: 94,
            imageUrl: "https://images.unsplash.com/photo-1597043530272-bc882ff38289?w=500"
        },
        {
            title: "Jordan 11 Bred",
            subtitle: "Legendary performance meets street style.",
            metaText: ["Nike", "Patent Leather", "₩289,000"],
            rating: 4.9,
            reviewCount: 156,
            score: 91,
            imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500"
        }
    ];

    return (
        <div className="proto-root">
            {/* [Header] Status Bar와 상단 네비게이션 결합 (Section 29.1) */}
            <div className="proto-header">
                <TopNavigation
                    os="mobile"
                    headerTitle="나의 쇼핑 AI"
                    rightIcons={['magnifying-glass-solid', 'cart-shopping-solid']}
                    showAvatar={true}
                />
            </div>

            {/* [Body] 메시지 리스트와 컴포넌트 조립 공간 (Section 41) */}
            <main className="proto-body">
                <MessageList>
                    {history.map(msg => (
                        <div key={msg.id} className="proto-fade-in">
                            <Message
                                role={msg.role}
                                agentName={msg.agentName}
                                content={msg.content}
                            />

                            {msg.hasProducts && (
                                <>
                                    {/* [Carousel] 상품 추천 그리드 (Section 38) */}
                                    <Carousel type="media">
                                        {jordanProducts.map((p, idx) => (
                                            <MediaCard
                                                key={idx}
                                                {...p}
                                                onClick={() => setPreviewItem(p)}
                                            />
                                        ))}
                                    </Carousel>

                                    {/* [Suggestion] 다음 질문 유도 (Section 41.2) */}
                                    <AiSuggestionList
                                        title="더 궁금한 점이 있으신가요?"
                                        suggestions={["다른 컬러 보기", "내 사이즈 재고 확인", "유사 모델 추천"]}
                                        onSuggestionClick={(text) => handleInput(text)}
                                    />
                                </>
                            )}
                        </div>
                    ))}

                    {/* [State] AI 로딩 인디케이터 (Section 41.3) */}
                    {isThinking && (
                        <div className="proto-fade-in">
                            <Message
                                role="AI"
                                state="loading"
                                content="최적의 상품을 분석하고 있습니다..."
                            />
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </MessageList>
            </main>

            {/* [Footer] 텍스트 입력 영역 (Section 26.1) */}
            <footer className="proto-footer">
                <AITextInput
                    placeholder="상품명을 입력해보세요..."
                    onSend={(val) => handleInput(val)}
                />
            </footer>

            {/* [Overlay] 상품 상세 이미지 미리보기 (Section 42) */}
            <ImagePreview
                isOpen={!!previewItem}
                imageSrc={previewItem?.imageUrl}
                title={previewItem?.title}
                score={previewItem?.rating}
                reviewCount={previewItem?.reviewCount}
                serviceName="Nike Official Store"
                tags={["Limited", "Special Edition", "AI Pick"]}
                onClose={() => setPreviewItem(null)}
            />
        </div>
    );
};

export default ShoppingAgentPrototype;
