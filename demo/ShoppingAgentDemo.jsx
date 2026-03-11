import React, { useState, useEffect } from 'react';
import './ShoppingAgentDemo.css';
import TopNavigation from '../design-system/components/TopNavigation/TopNavigation';
import MessageList from '../design-system/components/Message/MessageList';
import Message from '../design-system/components/Message/Message';
import Carousel from '../design-system/components/Carousel/Carousel';
import Card from '../design-system/Templates/Card/Card';
import AiSuggestionList from '../design-system/components/Carousel/AiSuggestionList';
import AITextInput from '../design-system/components/AITextInput/AITextInput';
import ImagePreview from '../design-system/components/ImagePreview/ImagePreview';

const ShoppingAgentDemo = () => {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [inputText, setInputText] = useState('');
    const [previewItem, setPreviewItem] = useState(null);

    // Initial Welcome Message
    useEffect(() => {
        setMessages([
            {
                id: 1,
                role: 'AI',
                content: '안녕하세요! 당신의 개인 쇼핑 어시스턴트입니다. 찾으시는 상품이나 브랜드가 있으신가요?',
                agentName: 'Shopping AI'
            }
        ]);
    }, []);

    const handleSend = (text) => {
        const query = text || inputText;
        if (!query.trim()) return;

        // Add User Message
        const userMsg = {
            id: Date.now(),
            role: 'user',
            content: query
        };
        setMessages(prev => [...prev, userMsg]);
        setInputText('');
        setIsLoading(true);

        // Simulate AI Logic
        setTimeout(() => {
            setIsLoading(false);
            const aiMsg = {
                id: Date.now() + 1,
                role: 'AI',
                content: '네, 요청하신 Converse 블랙 스니커즈 중에서 가장 인기 있는 아이템들을 추천해 드립니다.',
                agentName: 'Shopping AI',
                hasResults: true
            };
            setMessages(prev => [...prev, aiMsg]);
        }, 1500);
    };

    const suggestions = [
        "Converse 블랙 스니커즈 보여줘",
        "세일 중인 상품이 있어?",
        "인기 있는 브랜드 추천해줘"
    ];

    const products = [
        {
            title: "Chuck Taylor All Star",
            price: "₩55,000",
            image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=300",
            score: 4.8,
            reviews: 1240
        },
        {
            title: "Chuck 70 Classic",
            price: "₩95,000",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300",
            score: 4.9,
            reviews: 850
        },
        {
            title: "One Star Pro",
            price: "₩89,000",
            image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=300",
            score: 4.7,
            reviews: 420
        }
    ];

    return (
        <div className="demo-app-container">
            <TopNavigation
                headerTitle="Shopping AI"
                rightIcons={['magnifying-glass-solid', 'cart-shopping-solid']}
                showAvatar={true}
            />

            <div className="demo-content-area">
                <MessageList>
                    {messages.map(msg => (
                        <div key={msg.id}>
                            <Message
                                role={msg.role}
                                content={msg.content}
                                agentName={msg.agentName}
                            />
                            {msg.hasResults && (
                                <>
                                    <Carousel type="media">
                                        {products.map((p, i) => (
                                            <Card
                                                key={i}
                                                type="media"
                                                title={p.title}
                                                price={p.price}
                                                imageSrc={p.image}
                                                score={p.score}
                                                reviewCount={p.reviews}
                                                onClick={() => setPreviewItem(p)}
                                            />
                                        ))}
                                    </Carousel>
                                    <AiSuggestionList
                                        suggestions={["다른 색상은?", "사이즈 추천해줘", "비슷한 브랜드"]}
                                        onSuggestionClick={(text) => handleSend(text)}
                                    />
                                </>
                            )}
                        </div>
                    ))}
                    {isLoading && (
                        <Message
                            role="AI"
                            state="loading"
                            content="상품 정보를 불러오는 중입니다..."
                        />
                    )}
                </MessageList>
            </div>

            <div className="demo-footer">
                <div className="demo-input-container">
                    <AITextInput
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onSend={() => handleSend()}
                        placeholder="찾으시는 상품을 입력하세요..."
                    />
                </div>
            </div>

            <ImagePreview
                isOpen={!!previewItem}
                imageSrc={previewItem?.image}
                title={previewItem?.title}
                score={previewItem?.score}
                reviewCount={previewItem?.reviews}
                tags={["인기상품", "신상품"]}
                serviceName="Converse Official Store"
                onClose={() => setPreviewItem(null)}
            />
        </div>
    );
};

export default ShoppingAgentDemo;
