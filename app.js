const uiTranslations = { "subtitle": { "ko": "당신의 고유한 취향을 발견합니다.", "ja": "あなたの独自の好みをはっけんします。" }, "quiz_instruction": { "ko": "직관적으로 끌리는 쪽을 선택하세요", "ja": "直感的に惹かれる方を選択してください" }, "analyzing_msg": { "ko": "선택하신 이미지를 AI가 분석 중입니다.", "ja": "選択した画像をAIが分析中です。" }, "result_subtitle": { "ko": "당신의 취향을 반영한 큐레이션입니다.", "ja": "あなたの好みを反映したキュレーションです。" }, "return_btn": { "ko": "RETURN HOME", "ja": "RETURN HOME" }, "shop_now": { "ko": "SHOP NOW", "ja": "SHOP NOW" }, "find_alt": { "ko": "상품이 없나요? 비슷한 제품 찾기", "ja": "商品がないですか？代わりを探す" } };
let uiLang = 'ko'; // default

// app.js - Logic for the Taste Finder App

let previousScreen = 'screen-home';
let currentScreen = 'screen-home';

window.toggleLanguage = function () {
        uiLang = (uiLang === 'ko') ? 'ja' : 'ko';

        // Update button text
        const btn = document.getElementById('lang-btn');
        if (btn) btn.innerText = uiLang.toUpperCase();

        applyTranslations();

        // If we are on the result screen, refresh the final result
        if (currentScreen === 'screen-result') {
                displayFinalResult();
        }
};

window.applyTranslations = function () {
        for (const key in uiTranslations) {
                const el = document.getElementById('t-' + key);
                if (el) {
                        el.innerText = uiTranslations[key][uiLang];
                }
        }

        // Also re-render if we are in quiz stage for analyzing messages, though it's transient
        if (currentScreen === 'screen-analyzing') {
                const el = document.getElementById('t-analyze-msg');
                if (el) el.innerText = uiTranslations['analyzing_msg'][uiLang];
        }
};


window.showScreen = function (screenId) {
        if (currentScreen === screenId) return;

        previousScreen = currentScreen;
        currentScreen = screenId;

        // Hide all screens
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

        // Show target screen
        const target = document.getElementById(screenId);
        if (target) {
                target.classList.add('active');

                // Scroll to top when changing screens
                document.getElementById('mainContent').scrollTop = 0;
        }
};

window.goBack = function () {
        if (currentScreen === 'screen-home') return;
        if (currentScreen === 'screen-quiz') {
                showScreen('screen-home');
        } else if (currentScreen === 'screen-result') {
                showScreen('screen-home');
        } else {
                showScreen(previousScreen);
        }
};

// Quiz Data
// Quiz Data (Expanded to 10 Questions, UI Tree logic based on selected dimensions)
const quizData = {
brand: {
        "questions": [
                {
                        "a": "images/quiz_brand_q1_a.jpg",
                        "b": "images/quiz_brand_q1_b.jpg"
                },
                {
                        "a": "images/quiz_brand_q2_a.jpg",
                        "b": "images/quiz_brand_q2_b.jpg"
                },
                {
                        "a": "images/quiz_brand_q3_a.jpg",
                        "b": "images/quiz_brand_q3_b.jpg"
                },
                {
                        "a": "images/quiz_brand_q4_a.jpg",
                        "b": "images/quiz_brand_q4_b.jpg"
                },
                {
                        "a": "images/quiz_brand_q5_a.jpg",
                        "b": "images/quiz_brand_q5_b.jpg"
                },
                {
                        "a": "images/quiz_brand_q6_a.jpg",
                        "b": "images/quiz_brand_q6_b.jpg"
                },
                {
                        "a": "images/quiz_brand_q7_a.jpg",
                        "b": "images/quiz_brand_q7_b.jpg"
                },
                {
                        "a": "images/quiz_brand_q8_a.jpg",
                        "b": "images/quiz_brand_q8_b.jpg"
                },
                {
                        "a": "images/quiz_brand_q9_a.jpg",
                        "b": "images/quiz_brand_q9_b.jpg"
                },
                {
                        "a": "images/quiz_brand_q10_a.jpg",
                        "b": "images/quiz_brand_q10_b.jpg"
                }
        ],
        "results": {"type_A_A": {"ko": {"title": "애티튜드 & 하이스트릿", "desc": "과감한 사이즈와 강렬한 브랜드 아이덴티티! 트렌디한 스트릿 감성의 하이엔드 브랜드를 사랑합니다.", "products": [{"productName": "발렌시아가", "productDesc": "전위적인 실루엣의 스트릿 하이엔드", "price": "-", "match": "99%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%90%E3%83%AC%E3%83%B3%E3%82%B7%E3%82%A2%E3%82%AC", "productImg": "images/brand_prod_발렌시아가.jpg"}, {"productName": "오프화이트", "productDesc": "스트릿과 럭셔리의 경계를 허무는 디자인", "price": "-", "match": "94%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%AA%E3%83%95%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88", "productImg": "images/brand_prod_오프화이트.jpg"}, {"productName": "구찌", "productDesc": "맥시멀리즘의 정수를 보여주는 아이코닉 스타일", "price": "-", "match": "89%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B0%E3%83%83%E3%83%81", "productImg": "images/brand_prod_구찌.jpg"}, {"productName": "지방시", "productDesc": "다크하고 고딕한 무드의 하이엔드 스트릿", "price": "-", "match": "84%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B8%E3%83%90%E3%83%B3%E3%82%B7%E3%82%A3", "productImg": "images/brand_prod_지방시.jpg"}, {"productName": "베트멍", "productDesc": "해체주의적이고 도발적인 실루엣", "price": "-", "match": "80%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%B4%E3%82%A7%E3%83%88%E3%83%A2%E3%83%B3", "productImg": "images/brand_prod_베트멍.jpg"}]}, "ja": {"title": "アティチュード＆ハイストリート", "desc": "大胆なサイズと強烈なブランドアイデンティティ！トレンディなストリート感性を持つハイエンドブランドを愛します。", "products": [{"productName": "バレンシアガ", "productDesc": "前衛的なシルエットのストリートハイエンド", "price": "-", "match": "99%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%90%E3%83%AC%E3%83%B3%E3%82%B7%E3%82%A2%E3%82%AC", "productImg": "images/brand_prod_발렌시아가.jpg"}, {"productName": "オフホワイト", "productDesc": "ストリートとラグジュアリーの境界を崩すデザイン", "price": "-", "match": "94%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%AA%E3%83%95%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88", "productImg": "images/brand_prod_오프화이트.jpg"}, {"productName": "グッチ", "productDesc": "マキシマリズムの真髄を見せるアイコニックスタイル", "price": "-", "match": "89%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B0%E3%83%83%E3%83%81", "productImg": "images/brand_prod_구찌.jpg"}, {"productName": "ジバンシィ", "productDesc": "ダークでゴシックなムードのハイエンドストリート", "price": "-", "match": "84%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B8%E3%83%90%E3%83%B3%E3%82%B7%E3%82%A3", "productImg": "images/brand_prod_지방시.jpg"}, {"productName": "ヴェトモン", "productDesc": "脱構築的で挑発的なシルエット", "price": "-", "match": "80%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%B4%E3%82%A7%E3%83%88%E3%83%A2%E3%83%B3", "productImg": "images/brand_prod_베트멍.jpg"}]}}, "type_A_B": {"ko": {"title": "럭셔리 & 글래머러스", "desc": "화려한 패턴과 황금빛 디테일. 시대를 초월하는 클래식한 럭셔리의 정수를 추구합니다.", "products": [{"productName": "베르사체", "productDesc": "화려한 메두사 로고와 관능적인 글래머", "price": "-", "match": "98%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%B4%E3%82%A7%E3%83%AB%E3%82%B5%E3%83%BC%E3%83%81%E3%82%A7", "productImg": "images/brand_prod_베르사체.jpg"}, {"productName": "돌체 앤 가바나", "productDesc": "이탈리안 럭셔리의 관능미와 화려함", "price": "-", "match": "93%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%89%E3%83%AB%E3%83%81%E3%82%A7%EF%BC%86%E3%82%AC%E3%83%83%E3%83%90%E3%83%BC%E3%83%8A", "productImg": "images/brand_prod_돌체_앤_가바나.jpg"}, {"productName": "루이비통", "productDesc": "시대를 초월하는 모노그램 클래식", "price": "-", "match": "88%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%AB%E3%82%A4%E3%83%BB%E3%83%B4%E3%82%A3%E3%83%88%E3%83%B3", "productImg": "images/brand_prod_루이비통.jpg"}, {"productName": "디올", "productDesc": "우아하고 섬세한 오뜨 꾸뛰르의 정수", "price": "-", "match": "85%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%87%E3%82%A3%E3%82%AA%E3%83%BC%E3%83%AB", "productImg": "images/brand_prod_디올.jpg"}, {"productName": "생 로랑", "productDesc": "파리지앵의 시크함과 관능적인 테일러링", "price": "-", "match": "81%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B5%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%B3", "productImg": "images/brand_prod_생_로랑.jpg"}]}, "ja": {"title": "ラグジュアリー＆グラマラス", "desc": "華やかなパターンと黄金のディテール。時代を超えるクラシックなラグジュアリーのエッセンスを追求します。", "products": [{"productName": "ヴェルサーチェ", "productDesc": "華やかなメデューサロゴと官能的なグラマー", "price": "-", "match": "98%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%B4%E3%82%A7%E3%83%AB%E3%82%B5%E3%83%BC%E3%83%81%E3%82%A7", "productImg": "images/brand_prod_베르사체.jpg"}, {"productName": "ドルチェ＆ガッバーナ", "productDesc": "イタリアンラグジュアリーの官能美と華やかさ", "price": "-", "match": "93%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%89%E3%83%AB%E3%83%81%E3%82%A7%EF%BC%86%E3%82%AC%E3%83%83%E3%83%90%E3%83%BC%E3%83%8A", "productImg": "images/brand_prod_돌체_앤_가바나.jpg"}, {"productName": "ルイ・ヴィトン", "productDesc": "時代を超えるモノグラムクラシック", "price": "-", "match": "88%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%AB%E3%82%A4%E3%83%BB%E3%83%B4%E3%82%A3%E3%83%88%E3%83%B3", "productImg": "images/brand_prod_루이비통.jpg"}, {"productName": "ディオール", "productDesc": "優雅で繊細なオートクチュールの真髄", "price": "-", "match": "85%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%87%E3%82%A3%E3%82%AA%E3%83%BC%E3%83%AB", "productImg": "images/brand_prod_디올.jpg"}, {"productName": "サンローラン", "productDesc": "パリジャンのシックさと官能的なテーラリング", "price": "-", "match": "81%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B5%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%B3", "productImg": "images/brand_prod_생_로랑.jpg"}]}}, "type_B_A": {"ko": {"title": "모던 아방가르드", "desc": "로고플레이 없이 구조적인 실루엣으로 승부. 당신은 차가운 미니멀리즘 브랜드를 선호합니다.", "products": [{"productName": "질 샌더", "productDesc": "순백의 간결함과 미니멀 럭셔리", "price": "-", "match": "97%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B8%E3%83%AB%E3%83%BB%E3%82%B5%E3%83%B3%E3%83%80%E3%83%BC", "productImg": "images/brand_prod_질_샌더.jpg"}, {"productName": "르메르", "productDesc": "여유로운 핏감과 모던한 프렌치 시크", "price": "-", "match": "92%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%AB%E3%83%A1%E3%83%BC%E3%83%AB", "productImg": "images/brand_prod_르메르.jpg"}, {"productName": "아크네 스튜디오", "productDesc": "파스텔 톤과 북유럽의 차가운 미니멀리즘", "price": "-", "match": "87%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%A2%E3%82%AF%E3%83%8D%20%E3%82%B9%E3%83%88%E3%82%A5%E3%83%87%E3%82%A3%E3%82%AA%E3%82%BA", "productImg": "images/brand_prod_아크네_스튜디오.jpg"}, {"productName": "마르니", "productDesc": "실용주의와 모던 아트의 절묘한 만남", "price": "-", "match": "82%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%9E%E3%83%AB%E3%83%8B", "productImg": "images/brand_prod_마르니.jpg"}, {"productName": "요지 야마모토", "productDesc": "블랙과 아방가르드 구조미의 극치", "price": "-", "match": "78%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%A8%E3%82%A6%E3%82%B8%E3%83%A4%E3%83%9E%E3%83%A2%E3%83%88", "productImg": "images/brand_prod_요지_야마모토.jpg"}]}, "ja": {"title": "モダン・アバンギャルド", "desc": "ロゴプレイなしで構造的なシルエットで勝負。あなたは冷たいミニマリズムブランドを好みます。", "products": [{"productName": "ジル・サンダー", "productDesc": "純白の簡潔さとミニマルラグジュアリー", "price": "-", "match": "97%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B8%E3%83%AB%E3%83%BB%E3%82%B5%E3%83%B3%E3%83%80%E3%83%BC", "productImg": "images/brand_prod_질_샌더.jpg"}, {"productName": "ルメール", "productDesc": "ゆったりとしたフィット感とモダンなフレンチシック", "price": "-", "match": "92%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%AB%E3%83%A1%E3%83%BC%E3%83%AB", "productImg": "images/brand_prod_르메르.jpg"}, {"productName": "アクネ ストゥディオズ", "productDesc": "パステルトーンと北欧の冷たいミニマリズム", "price": "-", "match": "87%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%A2%E3%82%AF%E3%83%8D%20%E3%82%B9%E3%83%88%E3%82%A5%E3%83%87%E3%82%A3%E3%82%AA%E3%82%BA", "productImg": "images/brand_prod_아크네_스튜디오.jpg"}, {"productName": "マルニ", "productDesc": "実用主義とモダンアートの絶妙な出会い", "price": "-", "match": "82%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%9E%E3%83%AB%E3%83%8B", "productImg": "images/brand_prod_마르니.jpg"}, {"productName": "ヨウジヤマモト", "productDesc": "ブラックとアバンギャルド構造美の極致", "price": "-", "match": "78%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%A8%E3%82%A6%E3%82%B8%E3%83%A4%E3%83%9E%E3%83%A2%E3%83%88", "productImg": "images/brand_prod_요지_야마모토.jpg"}]}}, "type_B_B": {"ko": {"title": "콰이어트 럭셔리", "desc": "최고급 소재와 우아한 테일러링. 은은하게 빛나는 '올드머니 룩' 브랜드를 추구합니다.", "products": [{"productName": "더 로우", "productDesc": "극강의 소재감, 궁극의 콰이어트 럭셔리", "price": "-", "match": "99%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B6%E3%83%BB%E3%83%AD%E3%82%A6", "productImg": "images/brand_prod_더_로우.jpg"}, {"productName": "에르메스", "productDesc": "타협하지 않는 최고급 장인 정신의 상징", "price": "-", "match": "94%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%A8%E3%83%AB%E3%83%A1%E3%82%B9", "productImg": "images/brand_prod_에르메스.jpg"}, {"productName": "보테가 베네타", "productDesc": "로고가 필요 없는 인트레치아토 가죽 공예", "price": "-", "match": "90%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%9C%E3%83%83%E3%83%86%E3%82%AC%E3%83%BB%E3%83%B4%E3%82%A7%E3%83%8D%E3%82%BF", "productImg": "images/brand_prod_보테가_베네타.jpg"}, {"productName": "브루넬로 쿠치넬리", "productDesc": "최상급 캐시미어와 이탈리안 올드머니", "price": "-", "match": "85%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%96%E3%83%AB%E3%83%8D%E3%83%AD%20%E3%82%AF%E3%83%81%E3%83%8D%E3%83%AA", "productImg": "images/brand_prod_브루넬로_쿠치넬리.jpg"}, {"productName": "로로피아나", "productDesc": "자연을 담은 최상급 텍스타일 럭셔리", "price": "-", "match": "81%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%AD%E3%83%AD%E3%83%BB%E3%83%94%E3%82%A2%E3%83%BC%E3%83%8A", "productImg": "images/brand_prod_로로피아나.jpg"}]}, "ja": {"title": "クワイエット・ラグジュアリー", "desc": "最高級の素材と優雅なテーラリング。ほのかに輝くエフォートレスなオールドマネールックブランドを追求します。", "products": [{"productName": "ザ・ロウ", "productDesc": "究極の素材感、究極のクワイエットラグジュアリー", "price": "-", "match": "99%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B6%E3%83%BB%E3%83%AD%E3%82%A6", "productImg": "images/brand_prod_더_로우.jpg"}, {"productName": "エルメス", "productDesc": "妥協しない最高級の職人精神の象徴", "price": "-", "match": "94%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%A8%E3%83%AB%E3%83%A1%E3%82%B9", "productImg": "images/brand_prod_에르메스.jpg"}, {"productName": "ボッテガ・ヴェネタ", "productDesc": "ロゴを必要としないイントレチャート革工芸", "price": "-", "match": "90%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%9C%E3%83%83%E3%83%86%E3%82%AC%E3%83%BB%E3%83%B4%E3%82%A7%E3%83%8D%E3%82%BF", "productImg": "images/brand_prod_보테가_베네타.jpg"}, {"productName": "ブルネロ クチネリ", "productDesc": "最上級のカシミヤとイタリアンオールドマネー", "price": "-", "match": "85%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%96%E3%83%AB%E3%83%8D%E3%83%AD%20%E3%82%AF%E3%83%81%E3%83%8D%E3%83%AA", "productImg": "images/brand_prod_브루넬로_쿠치넬리.jpg"}, {"productName": "ロロ・ピアーナ", "productDesc": "自然を込めた最上級テキスタイルラグジュアリー", "price": "-", "match": "81%", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%AD%E3%83%AD%E3%83%BB%E3%83%94%E3%82%A2%E3%83%BC%E3%83%8A", "productImg": "images/brand_prod_로로피아나.jpg"}]}}}
},

    sneakers: {
        questions: [
            { a: "images/quiz_sneakers_q1_a.jpg", b: "images/quiz_sneakers_q1_b.jpg" },
            { a: "images/quiz_sneakers_q2_a.jpg", b: "images/quiz_sneakers_q2_b.jpg" },
            { a: "images/quiz_sneakers_q3_a.jpg", b: "images/quiz_sneakers_q3_b.jpg" },
            { a: "images/quiz_sneakers_q4_a.jpg", b: "images/quiz_sneakers_q4_b.jpg" },
            { a: "images/quiz_sneakers_q5_a.jpg", b: "images/quiz_sneakers_q5_b.jpg" },
            { a: "images/quiz_sneakers_q6_a.jpg", b: "images/quiz_sneakers_q6_b.jpg" },
            { a: "images/quiz_sneakers_q7_a.jpg", b: "images/quiz_sneakers_q7_b.jpg" },
            { a: "images/quiz_sneakers_q8_a.jpg", b: "images/quiz_sneakers_q8_b.jpg" },
            { a: "images/quiz_sneakers_q9_a.jpg", b: "images/quiz_sneakers_q9_b.jpg" },
            { a: "images/quiz_sneakers_q10_a.jpg", b: "images/quiz_sneakers_q10_b.jpg" }
        ],
        results: { "type_A_A": { "ko": { "title": "아방가르드 & 스트릿", "desc": "평범함을 거부하는 당신, 독특한 실루엣과 실험적인 질감이 만난 퓨처리스틱 스니커즈 라인업입니다.", "products": [{ "productName": "발렌시아가 트리플 S", "productDesc": "오버사이즈 청키 실루엣의 대명사", "price": "1,350,000원", "match": "99%", "productImg": "https://image.production.fruitsfamily.com/public/product/resized@width1125/HJtYnQJ8y-CEB2FE2C-BFC6-4456-AD2A-EA16240F8ACE-transformed.jpeg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%90%E3%83%AC%E3%83%B3%E3%82%B7%E3%82%A2%E3%82%AC%20%E3%83%88%E3%83%AA%E3%83%97%E3%83%ABS" }, { "productName": "릭 오웬스 지오바스켓", "productDesc": "구조적이고 아방가르드한 레더 하이탑", "price": "1,680,000원", "match": "94%", "productImg": "https://cdn-images.farfetch-contents.com/19/40/14/86/19401486_44581622_480.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%AA%E3%83%83%E3%82%AF%E3%83%BB%E3%82%AA%E3%82%A6%E3%82%A8%E3%83%B3%E3%82%B9%20%E3%82%B8%E3%82%AA%E3%83%90%E3%82%B9%E3%82%B1%E3%83%83%E3%83%88" }, { "productName": "메종 마르지엘라 레플리카", "productDesc": "독특한 페인트 드롭 디테일", "price": "890,000원", "match": "90%", "productImg": "https://kream-phinf.pstatic.net/MjAyMTAzMzBfNjUg/MDAxNjE3MDc5NzAxMTM3.PQpvTI7S1ZeeMVp20tSOpZBWJIufK0IsMfTjIZVCbN4g.PQspUjZ7ERxL4ksr3zURpIW0SDcvWzUicyZ4qQGJcGAg.PNG/p_bde84f1dec524281a47611f7d9fcc04b.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%A1%E3%82%BE%E3%83%B3%20%E3%83%9E%E3%83%AB%E3%82%B8%E3%82%A7%E3%83%A9%20%E3%83%AC%E3%83%97%E3%83%AA%E3%82%AB" }, { "productName": "살로몬 XT-6 어드밴스드", "productDesc": "스트릿과 고프코어의 완벽한 믹스", "price": "260,000원", "match": "86%", "productImg": "https://image.production.fruitsfamily.com/public/product/resized@width1125/mjbOJ3wY2-D649627C-76C8-431C-95A9-C24D1EB989E3.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B5%E3%83%AD%E3%83%A2%E3%83%B3%20XT-6%20%E3%82%A2%E3%83%89%E3%83%90%E3%83%B3%E3%82%B9%E3%83%89" }, { "productName": "아식스 젤-카야노 14", "productDesc": "레트로 빈티지와 아방가르드의 만남", "price": "169,000원", "match": "81%", "productImg": "https://static.shoeprize.com/open_raffle/main_carousel/None/1201A019-108-shoeprize-ASICS-GEL-KAYANO-14-CREAM-BLACK-114564-1685067671975.jpeg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%A2%E3%82%B7%E3%83%83%E3%82%AF%E3%82%B9%20%E3%82%B2%E3%83%AB%E3%82%AB%E3%83%A4%E3%83%8E%2014" }] }, "ja": { "title": "アバンギャルド & ストリート", "desc": "平凡を拒むあなた。ユニークなシルエットと実験的な質感が融合したフューチャリスティックスニーカーのラインナップです。", "products": [{ "productName": "バレンシアガ トリプルS", "productDesc": "オーバーサイズチャンキーシルエットの代名詞", "price": "¥135,000", "match": "99%", "productImg": "https://image.production.fruitsfamily.com/public/product/resized@width1125/HJtYnQJ8y-CEB2FE2C-BFC6-4456-AD2A-EA16240F8ACE-transformed.jpeg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%90%E3%83%AC%E3%83%B3%E3%82%B7%E3%82%A2%E3%82%AC%20%E3%83%88%E3%83%AA%E3%83%97%E3%83%ABS" }, { "productName": "リック・オウエンス ジオバスケット", "productDesc": "構造的でアバンギャルドなレザーハイカット", "price": "¥168,000", "match": "94%", "productImg": "https://cdn-images.farfetch-contents.com/19/40/14/86/19401486_44581622_480.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%AA%E3%83%83%E3%82%AF%E3%83%BB%E3%82%AA%E3%82%A6%E3%82%A8%E3%83%B3%E3%82%B9%20%E3%82%B8%E3%82%AA%E3%83%90%E3%82%B9%E3%82%B1%E3%83%83%E3%83%88" }, { "productName": "メゾン マルジェラ レプリカ", "productDesc": "ユニークなペイントドロップディテール", "price": "¥89,000", "match": "90%", "productImg": "https://kream-phinf.pstatic.net/MjAyMTAzMzBfNjUg/MDAxNjE3MDc5NzAxMTM3.PQpvTI7S1ZeeMVp20tSOpZBWJIufK0IsMfTjIZVCbN4g.PQspUjZ7ERxL4ksr3zURpIW0SDcvWzUicyZ4qQGJcGAg.PNG/p_bde84f1dec524281a47611f7d9fcc04b.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%A1%E3%82%BE%E3%83%B3%20%E3%83%9E%E3%83%AB%E3%82%B8%E3%82%A7%E3%83%A9%20%E3%83%AC%E3%83%97%E3%83%AA%E3%82%AB" }, { "productName": "サロモン XT-6 アドバンスド", "productDesc": "ストリートとゴープコアの完璧なミックス", "price": "¥26,000", "match": "86%", "productImg": "https://image.production.fruitsfamily.com/public/product/resized@width1125/mjbOJ3wY2-D649627C-76C8-431C-95A9-C24D1EB989E3.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B5%E3%83%AD%E3%83%A2%E3%83%B3%20XT-6%20%E3%82%A2%E3%83%89%E3%83%90%E3%83%B3%E3%82%B9%E3%83%89" }, { "productName": "アシックス ゲルカヤノ 14", "productDesc": "レトロビンテージとアバンギャルドの出会い", "price": "¥16,900", "match": "81%", "productImg": "https://static.shoeprize.com/open_raffle/main_carousel/None/1201A019-108-shoeprize-ASICS-GEL-KAYANO-14-CREAM-BLACK-114564-1685067671975.jpeg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%A2%E3%82%B7%E3%83%83%E3%82%AF%E3%82%B9%20%E3%82%B2%E3%83%AB%E3%82%AB%E3%83%A4%E3%83%8E%2014" }] } }, "type_A_B": { "ko": { "title": "에센셜 미니멀리스트", "desc": "군더더기 없는 완벽한 실루엣을 추구하는 당신. 절제미가 돋보이는 모노톤 스니커즈 컬렉션입니다.", "products": [{ "productName": "커먼프로젝트 아킬레스 로우", "productDesc": "화이트 스니커즈의 궁극적인 에센셜", "price": "540,000원", "match": "98%", "productImg": "https://kream-phinf.pstatic.net/MjAyMzA3MTNfMTA2/MDAxNjg5MjE0Njk5Njk1.PM5yboF4y6WBgusHmOo3HdI4tFRwIcsd5GxOib9F8Vcg.1_85mUvAYx9kvvuBb5fT3RbWFCI8rq7U1nw83dXXEqYg.PNG/a_e388684ef36b4a2092f73888717f2ec1.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B3%E3%83%A2%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%20%E3%82%A2%E3%82%AD%E3%83%AC%E3%82%B9%20%E3%83%AD%E3%83%BC" }, { "productName": "나이키 에어포스 1 '07", "productDesc": "클래식하고 깔끔한 화이트 바디", "price": "139,000원", "match": "93%", "productImg": "https://static.nike.com/a/images/t_default/803a76aa-8f95-41a3-96c8-45d45aa46386/AIR+FORCE+1+'07.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%8A%E3%82%A4%E3%82%AD%20%E3%82%A8%E3%82%A2%E3%83%95%E3%82%A9%E3%83%BC%E3%82%B9%201%20%2707" }, { "productName": "오트리 메달리스트", "productDesc": "군더더기 없는 빈티지 디자인", "price": "258,000원", "match": "89%", "productImg": "https://kream-phinf.pstatic.net/MjAyMTEyMzBfMjA3/MDAxNjQwODI3OTk5OTk4.GSWaSHrYqDZw_0W9q-u9B-w_JGt2BAoF56l1XzcIwt8g.IP-ZOL1p3BWj5JIZB0EhvuUJFC15XAh8IIKyaJ--GEog.PNG/a_908447220056483f93dac30bd322b9f7.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%AA%E3%83%BC%E3%83%88%E3%83%AA%E3%83%BC%20%E3%83%A1%E3%83%80%E3%83%AA%E3%82%B9%E3%83%88" }, { "productName": "아디다스 스탠스미스", "productDesc": "완벽한 스탠다드 로우탑", "price": "119,000원", "match": "85%", "productImg": "https://imgb.a-bly.com/data/goods/864f4ef06e2de36477cf2d2240d7c1ce.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%A2%E3%83%87%E3%82%A3%E3%83%80%E3%82%B9%20%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E3%83%9F%E3%82%B9" }, { "productName": "뉴발란스 574 코어", "productDesc": "부드럽고 둥근 미니멀 실루엣", "price": "109,000원", "match": "80%", "productImg": "https://static.shoeprize.com/Raffle/thumb/U574HSK-shoeprize-NEW-BALANCE-574-HERITAGE-NAVY-404167-1709857912103.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%90%E3%83%A9%E3%83%B3%E3%82%B9%20574%20%E3%82%B3%E3%82%A2" }] }, "ja": { "title": "エッセンシャル・ミニマリスト", "desc": "無駄のない完璧なシルエットを追求するあなた。節制美が際立つモノトーンスニーカーコレクションです。", "products": [{ "productName": "コモンプロジェクト アキレス ロー", "productDesc": "ホワイトスニーカーの究極のエッセンシャル", "price": "¥54,000", "match": "98%", "productImg": "https://kream-phinf.pstatic.net/MjAyMzA3MTNfMTA2/MDAxNjg5MjE0Njk5Njk1.PM5yboF4y6WBgusHmOo3HdI4tFRwIcsd5GxOib9F8Vcg.1_85mUvAYx9kvvuBb5fT3RbWFCI8rq7U1nw83dXXEqYg.PNG/a_e388684ef36b4a2092f73888717f2ec1.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B3%E3%83%A2%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%20%E3%82%A2%E3%82%AD%E3%83%AC%E3%82%B9%20%E3%83%AD%E3%83%BC" }, { "productName": "ナイキ エアフォース 1 '07", "productDesc": "クラシックでクリーンなホワイトボディ", "price": "¥13,900", "match": "93%", "productImg": "https://static.nike.com/a/images/t_default/803a76aa-8f95-41a3-96c8-45d45aa46386/AIR+FORCE+1+'07.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%8A%E3%82%A4%E3%82%AD%20%E3%82%A8%E3%82%A2%E3%83%95%E3%82%A9%E3%83%BC%E3%82%B9%201%20%2707" }, { "productName": "オートリー メダリスト", "productDesc": "無駄のないビンテージデザイン", "price": "¥25,800", "match": "89%", "productImg": "https://kream-phinf.pstatic.net/MjAyMTEyMzBfMjA3/MDAxNjQwODI3OTk5OTk4.GSWaSHrYqDZw_0W9q-u9B-w_JGt2BAoF56l1XzcIwt8g.IP-ZOL1p3BWj5JIZB0EhvuUJFC15XAh8IIKyaJ--GEog.PNG/a_908447220056483f93dac30bd322b9f7.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%AA%E3%83%BC%E3%83%88%E3%83%AA%E3%83%BC%20%E3%83%A1%E3%83%80%E3%83%AA%E3%82%B9%E3%83%88" }, { "productName": "アディダス スタンスミス", "productDesc": "完璧なスタンダードローカット", "price": "¥11,900", "match": "85%", "productImg": "https://imgb.a-bly.com/data/goods/864f4ef06e2de36477cf2d2240d7c1ce.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%A2%E3%83%87%E3%82%A3%E3%83%80%E3%82%B9%20%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E3%83%9F%E3%82%B9" }, { "productName": "ニューバランス 574 コア", "productDesc": "柔らかく丸みのあるミニマルシルエット", "price": "¥10,900", "match": "80%", "productImg": "https://static.shoeprize.com/Raffle/thumb/U574HSK-shoeprize-NEW-BALANCE-574-HERITAGE-NAVY-404167-1709857912103.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%90%E3%83%A9%E3%83%B3%E3%82%B9%20574%20%E3%82%B3%E3%82%A2" }] } }, "type_B_A": { "ko": { "title": "하이테크 고프코어", "desc": "실용성과 트렌디함을 잃지 않는 기능성 중심의 컬렉션입니다. 어떤 지형에서도 자유롭습니다.", "products": [{ "productName": "살로몬 스피드크로스 6", "productDesc": "거친 지형을 마스터하는 강력한 그립", "price": "188,000원", "match": "97%", "productImg": "https://billion-log.com/wp/wp-content/uploads/2023/08/img104212_001.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B5%E3%83%AD%E3%83%A2%E3%83%B3%20%E3%82%B9%E3%83%94%E3%83%BC%E3%83%89%E3%82%AF%E3%83%AD%E3%82%B9%206" }, { "productName": "호카 오네오네 본디 8", "productDesc": "극강의 쿠셔닝과 청키 아웃솔", "price": "219,000원", "match": "92%", "productImg": "https://i.ytimg.com/vi/lTLjD8MpW8s/maxresdefault.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%9B%E3%82%AB%E3%82%AA%E3%83%8D%E3%82%AA%E3%83%8D%20%E3%83%9C%E3%83%B3%E3%83%80%E3%82%A4%208" }, { "productName": "아크테릭스 에어리어스 FL", "productDesc": "완벽한 방수와 경량 아웃도어 성능", "price": "260,000원", "match": "88%", "productImg": "https://ddable.com/wp-content/uploads/2024/02/IMG_7100-scaled.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%A2%E3%83%BC%E3%82%AF%E3%83%86%E3%83%AA%E3%82%AF%E3%82%B9%20%E3%82%A8%E3%82%A2%E3%83%AA%E3%82%AA%E3%82%B9%20FL" }, { "productName": "나이키 ACG 마운틴 플라이 2", "productDesc": "도시와 자연을 넘나드는 고어텍스", "price": "189,000원", "match": "84%", "productImg": "https://www.fullress.com/wp-content/uploads/2023/06/i8dsidshgg9i-4.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%8A%E3%82%A4%E3%82%AD%20ACG%20%E3%83%9E%E3%82%A6%E3%83%B3%E3%83%86%E3%83%B3%E3%83%95%E3%83%A9%E3%82%A4%202" }, { "productName": "머렐 모압 3 고어텍스", "productDesc": "타협 없는 내구성과 편안함", "price": "149,000원", "match": "81%", "productImg": "https://kream-phinf.pstatic.net/MjAyNDA5MDVfMTkw/MDAxNzI1NTEyMjczNzM1.6JMHpfeT06DkvIgRrnZ4IybyhZRcD-zU908j_vBDPgIg.K45ai4WyfAONSrz7k1e5eskoZnT3NnfFGJ3JtfiJXvYg.PNG/p_1eea45ebb97a4382bd099ca66ab39cdc.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%A1%E3%83%AC%E3%83%AB%20%E3%83%A2%E3%82%A2%E3%83%96%203%20%E3%82%B4%E3%82%A2%E3%83%86%E3%83%83%E3%82%AF%E3%82%B9" }] }, "ja": { "title": "ハイテク・ゴープコア", "desc": "実用性とトレンド感を失わない機能性中心のコレクションです。どんな地形でも自由です。", "products": [{ "productName": "サロモン スピードクロス 6", "productDesc": "過酷な地形をマスターする強力なグリップ", "price": "¥18,800", "match": "97%", "productImg": "https://billion-log.com/wp/wp-content/uploads/2023/08/img104212_001.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B5%E3%83%AD%E3%83%A2%E3%83%B3%20%E3%82%B9%E3%83%94%E3%83%BC%E3%83%89%E3%82%AF%E3%83%AD%E3%82%B9%206" }, { "productName": "ホカオネオネ ボンダイ 8", "productDesc": "究極のクッショニングとチャンキーアウトソール", "price": "¥21,900", "match": "92%", "productImg": "https://i.ytimg.com/vi/lTLjD8MpW8s/maxresdefault.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%9B%E3%82%AB%E3%82%AA%E3%83%8D%E3%82%AA%E3%83%8D%20%E3%83%9C%E3%83%B3%E3%83%80%E3%82%A4%208" }, { "productName": "アークテリクス エアリオス FL", "productDesc": "完璧な防水と軽量アウトドア性能", "price": "¥26,000", "match": "88%", "productImg": "https://ddable.com/wp-content/uploads/2024/02/IMG_7100-scaled.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%A2%E3%83%BC%E3%82%AF%E3%83%86%E3%83%AA%E3%82%AF%E3%82%B9%20%E3%82%A8%E3%82%A2%E3%83%AA%E3%82%AA%E3%82%B9%20FL" }, { "productName": "ナイキ ACG マウンテンフライ 2", "productDesc": "都市と自然を行き来するゴアテックス", "price": "¥18,900", "match": "84%", "productImg": "https://www.fullress.com/wp-content/uploads/2023/06/i8dsidshgg9i-4.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%8A%E3%82%A4%E3%82%AD%20ACG%20%E3%83%9E%E3%82%A6%E3%83%B3%E3%83%86%E3%83%B3%E3%83%95%E3%83%A9%E3%82%A4%202" }, { "productName": "メレル モアブ 3 ゴアテックス", "productDesc": "妥協のない耐久性と快適さ", "price": "¥14,900", "match": "81%", "productImg": "https://kream-phinf.pstatic.net/MjAyNDA5MDVfMTkw/MDAxNzI1NTEyMjczNzM1.6JMHpfeT06DkvIgRrnZ4IybyhZRcD-zU908j_vBDPgIg.K45ai4WyfAONSrz7k1e5eskoZnT3NnfFGJ3JtfiJXvYg.PNG/p_1eea45ebb97a4382bd099ca66ab39cdc.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%A1%E3%83%AC%E3%83%AB%20%E3%83%A2%E3%82%A2%E3%83%96%203%20%E3%82%B4%E3%82%A2%E3%83%86%E3%83%83%E3%82%AF%E3%82%B9" }] } }, "type_B_B": { "ko": { "title": "클래식 실루엣", "desc": "시간이 흘러도 변하지 않는 가치, 단정하고 캐주얼한 클래식 스니커즈 라인업이 당신께 어울립니다.", "products": [{ "productName": "컨버스 척테일러 1970s", "productDesc": "세대 불문 영원한 아카이브", "price": "99,000원", "match": "99%", "productImg": "https://i.ytimg.com/vi/u8NuLognwYs/maxresdefault.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B3%E3%83%B3%E3%83%90%E3%83%BC%E3%82%B9%20%E3%83%81%E3%83%A3%E3%83%83%E3%82%AF%E3%83%86%E3%82%A4%E3%83%A9%E3%83%BC%201970s" }, { "productName": "반스 올드스쿨", "productDesc": "스케이트보드 컬처의 유산", "price": "89,000원", "match": "94%", "productImg": "https://kream-phinf.pstatic.net/MjAyMjA4MThfMjk5/MDAxNjYwODA2NTk2NjQz.cYaa9TMovOf-H41TrQRiDdgx0PxJcFEcx9zxD9fVtz8g.lzRY-jeqWvpYU1kPoT-odEQXBtcfV3W4VpU3Ic8x3mgg.PNG/a_557ff17303f941b5a642951934bdff85.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%90%E3%83%B3%E3%82%BA%20%E3%82%AA%E3%83%BC%E3%83%AB%E3%83%89%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB" }, { "productName": "푸마 스웨이드 클래식", "productDesc": "부드러운 스웨이드와 아이코닉 폼스트립", "price": "109,000원", "match": "87%", "productImg": "https://kream-phinf.pstatic.net/MjAyMTEyMjlfNDEg/MDAxNjQwNzUzNzM1Nzg1.x_D5lvG3rHkc4dbzs8tAxfbFAbmJl-XIXsUzBKMlY0kg.qELNFMksG_wWeZQcUtHTT42xaBbrKiiZmFkwKsF-uTUg.PNG/a_d6257abc2aed4389a01b8c0f4c608dd7.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%97%E3%83%BC%E3%83%9E%20%E3%82%B9%E3%82%A6%E3%82%A7%E3%83%BC%E3%83%89%20%E3%82%AF%E3%83%A9%E3%82%B7%E3%83%83%E3%82%AF" }, { "productName": "오니츠카타이거 멕시코 66", "productDesc": "슬림하고 빈티지한 아웃라인", "price": "160,000원", "match": "83%", "productImg": "https://www.rakulife333.com/wp-content/uploads/2024/08/20240831053533.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%AA%E3%83%8B%E3%83%84%E3%82%AB%E3%82%BF%E3%82%A4%E3%82%AC%E3%83%BC%20%E3%83%A1%E3%82%AD%E3%82%B7%E3%82%B3%2066" }, { "productName": "리복 클럽 C 85 빈티지", "productDesc": "80년대 테니스화의 영감", "price": "109,000원", "match": "79%", "productImg": "https://static.shoeprize.com/open_raffle/main_carousel/None/ID9262-shoeprize-REEBOK-CLUB-C-85-VINTAGE-CREAM-BLACK-359675-1707234171899.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%AA%E3%83%BC%E3%83%9C%E3%83%83%E3%82%AF%20%E3%82%AF%E3%83%A9%E3%83%96C%2085%20%E3%83%93%E3%83%B3%E3%83%86%E3%83%BC%E3%82%B8" }] }, "ja": { "title": "クラシック・シルエット", "desc": "時間が経っても変わらない価値、端正でカジュアルなクラシックスニーカーのラインナップがあなたにお似合いです。", "products": [{ "productName": "コンバース チャックテイラー 1970s", "productDesc": "世代を問わない永遠のアーカイブ", "price": "¥9,900", "match": "99%", "productImg": "https://i.ytimg.com/vi/u8NuLognwYs/maxresdefault.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B3%E3%83%B3%E3%83%90%E3%83%BC%E3%82%B9%20%E3%83%81%E3%83%A3%E3%83%83%E3%82%AF%E3%83%86%E3%82%A4%E3%83%A9%E3%83%BC%201970s" }, { "productName": "バンズ オールドスクール", "productDesc": "スケートボードカルチャーの遺産", "price": "¥8,900", "match": "94%", "productImg": "https://kream-phinf.pstatic.net/MjAyMjA4MThfMjk5/MDAxNjYwODA2NTk2NjQz.cYaa9TMovOf-H41TrQRiDdgx0PxJcFEcx9zxD9fVtz8g.lzRY-jeqWvpYU1kPoT-odEQXBtcfV3W4VpU3Ic8x3mgg.PNG/a_557ff17303f941b5a642951934bdff85.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%90%E3%83%B3%E3%82%BA%20%E3%82%AA%E3%83%BC%E3%83%AB%E3%83%89%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB" }, { "productName": "プーマ スウェード クラシック", "productDesc": "柔らかなスエードとアイコニックなフォームストリップ", "price": "¥10,900", "match": "87%", "productImg": "https://kream-phinf.pstatic.net/MjAyMTEyMjlfNDEg/MDAxNjQwNzUzNzM1Nzg1.x_D5lvG3rHkc4dbzs8tAxfbFAbmJl-XIXsUzBKMlY0kg.qELNFMksG_wWeZQcUtHTT42xaBbrKiiZmFkwKsF-uTUg.PNG/a_d6257abc2aed4389a01b8c0f4c608dd7.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%97%E3%83%BC%E3%83%9E%20%E3%82%B9%E3%82%A6%E3%82%A7%E3%83%BC%E3%83%89%20%E3%82%AF%E3%83%A9%E3%82%B7%E3%83%83%E3%82%AF" }, { "productName": "オニツカタイガー メキシコ 66", "productDesc": "スリムでビンテージなアウトライン", "price": "¥16,000", "match": "83%", "productImg": "https://www.rakulife333.com/wp-content/uploads/2024/08/20240831053533.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%AA%E3%83%8B%E3%83%84%E3%82%AB%E3%82%BF%E3%82%A4%E3%82%AC%E3%83%BC%20%E3%83%A1%E3%82%AD%E3%82%B7%E3%82%B3%2066" }, { "productName": "リーボック クラブC 85 ビンテージ", "productDesc": "80年代のテニスシューズのインスピレーション", "price": "¥10,900", "match": "79%", "productImg": "https://static.shoeprize.com/open_raffle/main_carousel/None/ID9262-shoeprize-REEBOK-CLUB-C-85-VINTAGE-CREAM-BLACK-359675-1707234171899.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%AA%E3%83%BC%E3%83%9C%E3%83%83%E3%82%AF%20%E3%82%AF%E3%83%A9%E3%83%96C%2085%20%E3%83%93%E3%83%B3%E3%83%86%E3%83%BC%E3%82%B8" }] } } }
    },
    appliances: {
        questions: [
            { a: "images/quiz_appliances_q1_a.jpg", b: "images/quiz_appliances_q1_b.jpg" },
            { a: "images/quiz_appliances_q2_a.jpg", b: "images/quiz_appliances_q2_b.jpg" },
            { a: "images/quiz_appliances_q3_a.jpg", b: "images/quiz_appliances_q3_b.jpg" },
            { a: "images/quiz_appliances_q4_a.jpg", b: "images/quiz_appliances_q4_b.jpg" },
            { a: "images/quiz_appliances_q5_a.jpg", b: "images/quiz_appliances_q5_b.jpg" },
            { a: "images/quiz_appliances_q6_a.jpg", b: "images/quiz_appliances_q6_b.jpg" },
            { a: "images/quiz_appliances_q7_a.jpg", b: "images/quiz_appliances_q7_b.jpg" },
            { a: "images/quiz_appliances_q8_a.jpg", b: "images/quiz_appliances_q8_b.jpg" },
            { a: "images/quiz_appliances_q9_a.jpg", b: "images/quiz_appliances_q9_b.jpg" },
            { a: "images/quiz_appliances_q10_a.jpg", b: "images/quiz_appliances_q10_b.jpg" }
        ],
        results: { "type_A_A": { "ko": { "title": "모던 메탈로닉", "desc": "차가운 선형 디자인에서 하이엔드를 느끼는 당신. 메탈릭 감성의 스페이스 가전 리스트입니다.", "products": [{ "productName": "브레빌 바리스타 익스프레스", "productDesc": "풀 스테인리스로 마감된 프로페셔널 머신", "price": "1,080,000원", "match": "98%", "productImg": "https://i.ytimg.com/vi/LkQLSTWdgZM/maxresdefault.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%96%E3%83%AC%E3%83%93%E3%83%AB%20%E3%83%90%E3%83%AA%E3%82%B9%E3%82%BF%20%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%97%E3%83%AC%E3%82%B9" }, { "productName": "다이슨 V15 디텍트", "productDesc": "공학적인 메탈릭 바디와 파워", "price": "1,290,000원", "match": "92%", "productImg": "https://auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0404/users/16d8c83c1f991e58b9c785ed3d9f8ac3145029e8/i-img800x600-1680770565fynqvg400412.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%80%E3%82%A4%E3%82%BD%E3%83%B3%20V15%20%E3%83%87%E3%82%A3%E3%83%86%E3%82%AF%E3%83%88" }, { "productName": "LG 시그니처 냉장고", "productDesc": "노크온 미러글라스와 리얼 스테인리스", "price": "8,500,000원", "match": "88%", "productImg": "https://live.lge.co.kr/wp-content/uploads/2022/12/1.lg_-17.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=LG%20%E3%82%B7%E3%82%B0%E3%83%8D%E3%83%81%E3%83%A3%E3%83%BC%20%E5%86%B7%E8%94%B5%E5%BA%AB" }, { "productName": "삼성 비스포크 인덕션 (블랙글라스)", "productDesc": "미니멀하고 단단한 글라스 핏", "price": "1,450,000원", "match": "83%", "productImg": "https://i.ytimg.com/vi/IVHB9wRkzOQ/maxresdefault.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B5%E3%83%A0%E3%82%B9%E3%83%B3%20%E3%83%93%E3%82%B9%E3%83%9D%E3%83%BC%E3%82%AF%20IH%20%28%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF%E3%82%AC%E3%83%A9%E3%82%B9%29" }, { "productName": "스메그 전기포트 스틸", "productDesc": "메탈 고유의 광택을 살린 레트로 쉐입", "price": "240,000원", "match": "80%", "productImg": "https://i.pinimg.com/736x/a3/82/72/a38272a9fc1c981ff8c339209f5de635.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B9%E3%83%A1%E3%83%83%E3%82%B0%20%E9%9B%BB%E6%B0%97%E3%82%B1%E3%83%88%E3%83%AB%20%E3%82%B9%E3%83%81%E3%83%BC%E3%83%AB" }] }, "ja": { "title": "モダン・メタロニック", "desc": "冷たい線形デザインにハイエンドを感じるあなた。メタリックな感性のスペース家電リストです。", "products": [{ "productName": "ブレビル バリスタ エクスプレス", "productDesc": "フルステンレス仕上げのプロフェッショナルマシン", "price": "¥108,000", "match": "98%", "productImg": "https://i.ytimg.com/vi/LkQLSTWdgZM/maxresdefault.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%96%E3%83%AC%E3%83%93%E3%83%AB%20%E3%83%90%E3%83%AA%E3%82%B9%E3%82%BF%20%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%97%E3%83%AC%E3%82%B9" }, { "productName": "ダイソン V15 ディテクト", "productDesc": "工学的なメタリックボディとパワー", "price": "¥129,000", "match": "92%", "productImg": "https://auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0404/users/16d8c83c1f991e58b9c785ed3d9f8ac3145029e8/i-img800x600-1680770565fynqvg400412.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%80%E3%82%A4%E3%82%BD%E3%83%B3%20V15%20%E3%83%87%E3%82%A3%E3%83%86%E3%82%AF%E3%83%88" }, { "productName": "LG シグネチャー 冷蔵庫", "productDesc": "ノックオン・ミラーグラスとリアルステンレス", "price": "¥850,000", "match": "88%", "productImg": "https://live.lge.co.kr/wp-content/uploads/2022/12/1.lg_-17.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=LG%20%E3%82%B7%E3%82%B0%E3%83%8D%E3%83%81%E3%83%A3%E3%83%BC%20%E5%86%B7%E8%94%B5%E5%BA%AB" }, { "productName": "サムスン ビスポーク IH (ブラックガラス)", "productDesc": "ミニマルで堅牢なガラスフィット", "price": "¥145,000", "match": "83%", "productImg": "https://i.ytimg.com/vi/IVHB9wRkzOQ/maxresdefault.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B5%E3%83%A0%E3%82%B9%E3%83%B3%20%E3%83%93%E3%82%B9%E3%83%9D%E3%83%BC%E3%82%AF%20IH%20%28%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF%E3%82%AC%E3%83%A9%E3%82%B9%29" }, { "productName": "スメッグ 電気ケトル スチール", "productDesc": "メタルの輝きを活かしたレトロシェイプ", "price": "¥24,000", "match": "80%", "productImg": "https://i.pinimg.com/736x/a3/82/72/a38272a9fc1c981ff8c339209f5de635.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B9%E3%83%A1%E3%83%83%E3%82%B0%20%E9%9B%BB%E6%B0%97%E3%82%B1%E3%83%88%E3%83%AB%20%E3%82%B9%E3%83%81%E3%83%BC%E3%83%AB" }] } }, "type_A_B": { "ko": { "title": "시크 인비저블", "desc": "있는 듯 없는 듯, 공간과 일치되는 가전을 선호합니다. 노출을 최소화한 슬림형 컬렉션입니다.", "products": [{ "productName": "LG 오브제컬렉션 냉장고", "productDesc": "주방 벽과 하나 되는 완벽한 플랫 디자인", "price": "2,850,000원", "match": "97%", "productImg": "https://yoitda.com/content/images/size/w1200/2024/06/----------_-089.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=LG%20%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%B3%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%20%E5%86%B7%E8%94%B5%E5%BA%AB" }, { "productName": "삼성 비스포크 에어드레서", "productDesc": "거울을 스며든 미니멀 의류관리기", "price": "1,650,000원", "match": "91%", "productImg": "https://i.ytimg.com/vi/b0iNcPFb4M0/maxresdefault.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B5%E3%83%A0%E3%82%B9%E3%83%B3%20%E3%83%93%E3%82%B9%E3%83%9D%E3%83%BC%E3%82%AF%20%E3%82%A8%E3%82%A2%E3%83%89%E3%83%AC%E3%83%83%E3%82%B5%E3%83%BC" }, { "productName": "LG 트롬 워시타워", "productDesc": "하나의 바디로 이어진 세탁 건조 풀 빌트인", "price": "3,400,000원", "match": "87%", "productImg": "https://live.lge.co.kr/wp-content/uploads/2023/03/1.lg_-10.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=LG%20%E3%83%88%E3%83%AD%E3%83%A0%20%E3%82%A6%E3%82%A9%E3%83%83%E3%82%B7%E3%83%A5%E3%82%BF%E3%83%AF%E3%83%BC" }, { "productName": "삼성 더 프레임 TV", "productDesc": "꺼져 있을 때 완벽한 아트 액자", "price": "1,890,000원", "match": "83%", "productImg": "https://img.kr.news.samsung.com/kr/wp-content/uploads/2019/10/1020-pr-theframe-3.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B5%E3%83%A0%E3%82%B9%E3%83%B3%20%E3%82%B6%E3%83%BB%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%20TV" }, { "productName": "코웨이 아이콘 정수기", "productDesc": "공간을 차지하지 않는 초소형 슬림 디자인", "price": "890,000원", "match": "79%", "productImg": "https://i.ytimg.com/vi/sPg8s-FpuJo/maxresdefault.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B3%E3%83%BC%E3%82%A6%E3%82%A7%E3%82%A4%20%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%20%E6%B5%84%E6%B0%B4%E5%99%A8" }] }, "ja": { "title": "シック・インビジブル", "desc": "存在感を消し、空間と一体化する家電を好みます。露出を最小限に抑えたスリムなコレクションです。", "products": [{ "productName": "LG オブジェコレクション 冷蔵庫", "productDesc": "キッチンの壁と一体化する完璧なフラットデザイン", "price": "¥285,000", "match": "97%", "productImg": "https://yoitda.com/content/images/size/w1200/2024/06/----------_-089.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=LG%20%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%B3%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%20%E5%86%B7%E8%94%B5%E5%BA%AB" }, { "productName": "サムスン ビスポーク エアドレッサー", "productDesc": "鏡に溶け込むミニマル衣類ケア機", "price": "¥165,000", "match": "91%", "productImg": "https://i.ytimg.com/vi/b0iNcPFb4M0/maxresdefault.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B5%E3%83%A0%E3%82%B9%E3%83%B3%20%E3%83%93%E3%82%B9%E3%83%9D%E3%83%BC%E3%82%AF%20%E3%82%A8%E3%82%A2%E3%83%89%E3%83%AC%E3%83%83%E3%82%B5%E3%83%BC" }, { "productName": "LG トロム ウォッシュタワー", "productDesc": "ひとつのボディで繋がる洗濯乾燥ビルトイン", "price": "¥340,000", "match": "87%", "productImg": "https://live.lge.co.kr/wp-content/uploads/2023/03/1.lg_-10.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=LG%20%E3%83%88%E3%83%AD%E3%83%A0%20%E3%82%A6%E3%82%A9%E3%83%83%E3%82%B7%E3%83%A5%E3%82%BF%E3%83%AF%E3%83%BC" }, { "productName": "サムスン ザ・フレーム TV", "productDesc": "消した時は完璧なアートフレーム", "price": "¥189,000", "match": "83%", "productImg": "https://img.kr.news.samsung.com/kr/wp-content/uploads/2019/10/1020-pr-theframe-3.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B5%E3%83%A0%E3%82%B9%E3%83%B3%20%E3%82%B6%E3%83%BB%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%20TV" }, { "productName": "コーウェイ アイコン 浄水器", "productDesc": "空間を取らない超小型スリムデザイン", "price": "¥89,000", "match": "79%", "productImg": "https://i.ytimg.com/vi/sPg8s-FpuJo/maxresdefault.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B3%E3%83%BC%E3%82%A6%E3%82%A7%E3%82%A4%20%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%20%E6%B5%84%E6%B0%B4%E5%99%A8" }] } }, "type_B_A": { "ko": { "title": "레트로 팝", "desc": "가전도 매력적인 인테리어 포인트입니다. 볼드한 쉐입과 컬러를 지닌 레트로 가전이 잘 어울려요.", "products": [{ "productName": "스메그(SMEG) 2구 토스터", "productDesc": "이탈리안 50s 레트로 스타일", "price": "230,000원", "match": "96%", "productImg": "https://m.media-amazon.com/images/I/51+qvJNHbRL._AC_SL1500_.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B9%E3%83%A1%E3%83%83%E3%82%B0%28SMEG%29%202%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88%20%E3%83%88%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC" }, { "productName": "발뮤다 더 브루", "productDesc": "아날로그 다이얼과 따뜻한 추출 빛", "price": "569,000원", "match": "92%", "productImg": "https://s3.balmuda.com/jp/news/wp-content/uploads/2023/04/20132730/MicrosoftTeams-image-285.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%90%E3%83%AB%E3%83%9F%E3%83%A5%E3%83%BC%E3%83%80%20%E3%82%B6%E3%83%BB%E3%83%96%E3%83%AA%E3%83%A5%E3%83%BC" }, { "productName": "드롱기 아이코나 빈티지", "productDesc": "아름다운 곡선과 올리브 그린 컬러", "price": "349,000원", "match": "87%", "productImg": "https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/459a/cf6e66b94a0e4d2a9a7cc487fbfb99b13323ecfda7a1badcbd105642efc1.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%87%E3%83%AD%E3%83%B3%E3%82%AE%20%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%8A%20%E3%83%93%E3%83%B3%E3%83%86%E3%83%BC%E3%82%B8" }, { "productName": "마샬 스탠모어 III", "productDesc": "상징적인 골드 로고와 가죽 텍스처", "price": "650,000원", "match": "82%", "productImg": "https://azaudio.vn/wp-content/uploads/2023/12/stanmore-iii-black-01.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%9E%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%AB%20%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%A2%E3%82%A2%20III" }, { "productName": "키친에이드 아티잔 믹서", "productDesc": "미국 가정집 감성의 클래식 스탠드 믹서", "price": "850,000원", "match": "78%", "productImg": "http://coresos.phinf.naver.net/a/348f7g/i_dhbUd018svc1g1j3g9mvg9v1_ja7dmz.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%AD%E3%83%83%E3%83%81%E3%83%B3%E3%82%A8%E3%82%A4%E3%83%89%20%E3%82%A2%E3%83%AB%E3%83%81%E3%82%B6%E3%83%B3%20%E3%83%9F%E3%82%AD%E3%82%B5%E3%83%BC" }] }, "ja": { "title": "レトロ・ポップ", "desc": "家電も魅力的なインテリアのポイントです。大胆な形と色を持ったレトロ家電がよく似合います。", "products": [{ "productName": "スメッグ(SMEG) 2スロット トースター", "productDesc": "イタリアン 50s レトロスタイル", "price": "¥23,000", "match": "96%", "productImg": "https://m.media-amazon.com/images/I/51+qvJNHbRL._AC_SL1500_.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B9%E3%83%A1%E3%83%83%E3%82%B0%28SMEG%29%202%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88%20%E3%83%88%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC" }, { "productName": "バルミューダ ザ・ブリュー", "productDesc": "アナログダイヤルと温かい抽出の光", "price": "¥56,900", "match": "92%", "productImg": "https://s3.balmuda.com/jp/news/wp-content/uploads/2023/04/20132730/MicrosoftTeams-image-285.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%90%E3%83%AB%E3%83%9F%E3%83%A5%E3%83%BC%E3%83%80%20%E3%82%B6%E3%83%BB%E3%83%96%E3%83%AA%E3%83%A5%E3%83%BC" }, { "productName": "デロンギ アイコナ ビンテージ", "productDesc": "美しい曲線とオリーブグリーンカラー", "price": "¥34,900", "match": "87%", "productImg": "https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/459a/cf6e66b94a0e4d2a9a7cc487fbfb99b13323ecfda7a1badcbd105642efc1.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%87%E3%83%AD%E3%83%B3%E3%82%AE%20%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%8A%20%E3%83%93%E3%83%B3%E3%83%86%E3%83%BC%E3%82%B8" }, { "productName": "マーシャル スタンモア III", "productDesc": "象徴的なゴールドロゴとレザーテクスチャー", "price": "¥65,000", "match": "82%", "productImg": "https://azaudio.vn/wp-content/uploads/2023/12/stanmore-iii-black-01.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%9E%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%AB%20%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%A2%E3%82%A2%20III" }, { "productName": "キッチンエイド アルチザン ミキサー", "productDesc": "アメリカ家庭の感性のクラシックスタンドミキサー", "price": "¥85,000", "match": "78%", "productImg": "http://coresos.phinf.naver.net/a/348f7g/i_dhbUd018svc1g1j3g9mvg9v1_ja7dmz.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%AD%E3%83%83%E3%83%81%E3%83%B3%E3%82%A8%E3%82%A4%E3%83%89%20%E3%82%A2%E3%83%AB%E3%83%81%E3%82%B6%E3%83%B3%20%E3%83%9F%E3%82%AD%E3%82%B5%E3%83%BC" }] } }, "type_B_B": { "ko": { "title": "따스한 오가닉 톤", "desc": "편안하고 아늑한 분위기를 중시하는 당신. 공간을 포근하게 만들어주는 무광의 부드러운 가전입니다.", "products": [{ "productName": "발뮤다 더 토스터", "productDesc": "어디에나 어울리는 매트 화이트 & 베이지", "price": "319,000원", "match": "99%", "productImg": "https://mikotomoki.com/wp-content/uploads/2022/11/1669733617_maxresdefault-1493342.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%90%E3%83%AB%E3%83%9F%E3%83%A5%E3%83%BC%E3%83%80%20%E3%82%B6%E3%83%BB%E3%83%88%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC" }, { "productName": "LG 스탠바이미", "productDesc": "부드러운 패브릭 마감과 우드 톤의 무선 스크린", "price": "1,040,000원", "match": "93%", "productImg": "https://blog.kakaocdn.net/dn/byuP8c/btrqBHClCkk/wkuIDqYHhN9DdtNtTD2KJ1/img.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=LG%20%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%90%E3%82%A4%E3%83%9F%E3%83%BC" }, { "productName": "삼성 비스포크 큐브 에어", "productDesc": "강아지 털까지 케어하는 무광 펫 청정기", "price": "790,000원", "match": "88%", "productImg": "https://i.ytimg.com/vi/G_3336ksgnQ/maxresdefault.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B5%E3%83%A0%E3%82%B9%E3%83%B3%20%E3%83%93%E3%82%B9%E3%83%9D%E3%83%BC%E3%82%AF%20%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%96%20%E3%82%A8%E3%82%A2" }, { "productName": "LG 디오스 오브제 광파오븐", "productDesc": "주방가구에 스며드는 네이처 컬러 마감", "price": "640,000원", "match": "84%", "productImg": "http://live.lge.co.kr/wp-content/uploads/2019/11/사진4-1.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=LG%20%E3%83%87%E3%82%A3%E3%82%AA%E3%82%B9%20%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%20%E3%82%AA%E3%83%BC%E3%83%96%E3%83%B3%E3%83%AC%E3%82%B9" }, { "productName": "네스프레소 버츄오 팝", "productDesc": "둥글둥글 귀엽고 따스한 실루엣", "price": "189,000원", "match": "80%", "productImg": "https://i.ytimg.com/vi/W0_JTFiE57M/maxresdefault.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%8D%E3%82%B9%E3%83%97%E3%83%AC%E3%83%83%E3%82%BD%20%E3%83%B4%E3%82%A1%E3%83%BC%E3%83%81%E3%83%A5%E3%82%AA%20%E3%83%9D%E3%83%83%E3%83%97" }] }, "ja": { "title": "暖かいオーガニックトーン", "desc": "快適で居心地の良い雰囲気を重視するあなた。空間を暖かくしてくれるマットで柔らかい家電です。", "products": [{ "productName": "バルミューダ ザ・トースター", "productDesc": "どこにでも似合うマットホワイト＆ベージュ", "price": "¥31,900", "match": "99%", "productImg": "https://mikotomoki.com/wp-content/uploads/2022/11/1669733617_maxresdefault-1493342.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%90%E3%83%AB%E3%83%9F%E3%83%A5%E3%83%BC%E3%83%80%20%E3%82%B6%E3%83%BB%E3%83%88%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC" }, { "productName": "LG スタンバイミー", "productDesc": "柔らかいファブリック仕上げとウッドトーンのワイヤレススクリーン", "price": "¥104,000", "match": "93%", "productImg": "https://blog.kakaocdn.net/dn/byuP8c/btrqBHClCkk/wkuIDqYHhN9DdtNtTD2KJ1/img.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=LG%20%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%90%E3%82%A4%E3%83%9F%E3%83%BC" }, { "productName": "サムスン ビスポーク キューブ エア", "productDesc": "犬の毛までケアするマットペット空気清浄機", "price": "¥79,000", "match": "88%", "productImg": "https://i.ytimg.com/vi/G_3336ksgnQ/maxresdefault.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B5%E3%83%A0%E3%82%B9%E3%83%B3%20%E3%83%93%E3%82%B9%E3%83%9D%E3%83%BC%E3%82%AF%20%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%96%20%E3%82%A8%E3%82%A2" }, { "productName": "LG ディオス オブジェ オーブンレス", "productDesc": "キッチン家具に溶け込むネイチャーカラー仕上げ", "price": "¥64,000", "match": "84%", "productImg": "http://live.lge.co.kr/wp-content/uploads/2019/11/사진4-1.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=LG%20%E3%83%87%E3%82%A3%E3%82%AA%E3%82%B9%20%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%20%E3%82%AA%E3%83%BC%E3%83%96%E3%83%B3%E3%83%AC%E3%82%B9" }, { "productName": "ネスプレッソ ヴァーチュオ ポップ", "productDesc": "丸々として可愛らしく暖かいシルエット", "price": "¥18,900", "match": "80%", "productImg": "https://i.ytimg.com/vi/W0_JTFiE57M/maxresdefault.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%8D%E3%82%B9%E3%83%97%E3%83%AC%E3%83%83%E3%82%BD%20%E3%83%B4%E3%82%A1%E3%83%BC%E3%83%81%E3%83%A5%E3%82%AA%20%E3%83%9D%E3%83%83%E3%83%97" }] } } }
    },
    tableware: {
        questions: [
            { a: "images/quiz_tableware_q1_a.jpg", b: "images/quiz_tableware_q1_b.jpg" },
            { a: "images/quiz_tableware_q2_a.jpg", b: "images/quiz_tableware_q2_b.jpg" },
            { a: "images/quiz_tableware_q3_a.jpg", b: "images/quiz_tableware_q3_b.jpg" },
            { a: "images/quiz_tableware_q4_a.jpg", b: "images/quiz_tableware_q4_b.jpg" },
            { a: "images/quiz_tableware_q5_a.jpg", b: "images/quiz_tableware_q5_b.jpg" },
            { a: "images/quiz_tableware_q6_a.jpg", b: "images/quiz_tableware_q6_b.jpg" },
            { a: "images/quiz_tableware_q7_a.jpg", b: "images/quiz_tableware_q7_b.jpg" },
            { a: "images/quiz_tableware_q8_a.jpg", b: "images/quiz_tableware_q8_b.jpg" },
            { a: "images/quiz_tableware_q9_a.jpg", b: "images/quiz_tableware_q9_b.jpg" },
            { a: "images/quiz_tableware_q10_a.jpg", b: "images/quiz_tableware_q10_b.jpg" }
        ],
        results: { "type_A_A": { "ko": { "title": "스톤 터치 아방가르드", "desc": "거친 질감의 플레이트에서 예술적인 음식을 꿈꾸는 당신. 텍스처가 매력적인 테이블웨어를 제안합니다.", "products": [{ "productName": "오덴세(odense) 시슬리 볼", "productDesc": "자연석을 그대로 깎은 듯한 러프한 텍스처", "price": "45,000원", "match": "97%", "productImg": "https://www.kishispo.net/ex/worldcup/ball/img/ball_1982.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%AA%E3%83%87%E3%83%B3%E3%82%BB%28odense%29%20%E3%82%B7%E3%82%B9%E3%83%AC%E3%83%BC%20%E3%83%9C%E3%82%A6%E3%83%AB" }, { "productName": "빌레로이앤보흐 매뉴팩처 락", "productDesc": "슬레이트 원석의 느낌을 구현한 블랙 접시", "price": "62,000원", "match": "91%", "productImg": "https://tsurumai-hobby.jp/images/item/super7/4580714143676.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%93%E3%83%AC%E3%83%AD%E3%82%A4%EF%BC%86%E3%83%9C%E3%83%83%E3%83%9B%20%E3%83%9E%E3%83%8B%E3%83%A5%E3%83%95%E3%82%A1%E3%82%AF%E3%83%81%E3%83%A3%E3%83%BC%20%E3%83%AD%E3%83%83%E3%82%AF" }, { "productName": "덴비 헤일로 디너 플레이트", "productDesc": "유약이 흘러내린 듯한 파격적 글레이즈 효과", "price": "55,000원", "match": "86%", "productImg": "http://cdn.image.buzzni.com/2024/03/21/tZr7I8V7.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%87%E3%83%B3%E3%83%93%E3%83%BC%20%E3%83%98%E3%82%A4%E3%83%AD%E3%83%BC%20%E3%83%87%E3%82%A3%E3%83%8A%E3%83%BC%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88" }, { "productName": "광주요 화요 무광 세트", "productDesc": "전통 가마의 불길이 만든 비정형의 미", "price": "120,000원", "match": "82%", "productImg": "https://i.ytimg.com/vi/5cvTFFYnPNM/maxresdefault.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%AF%E3%82%A1%E3%83%B3%E3%82%B8%E3%83%A5%E3%83%A8%20%E3%83%95%E3%82%A1%E3%83%A8%20%E3%81%A4%E3%82%84%E6%B6%88%E3%81%97%E3%82%BB%E3%83%83%E3%83%88" }, { "productName": "자주(JAJU) 스톤 터치 플레이트", "productDesc": "묵직하고 거친 무광의 모던 그릇", "price": "18,000원", "match": "77%", "productImg": "https://prs.ohou.se/apne2/commerce/uploads/brands/cover_images/v1-342917728714880.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=JAJU%20%E3%82%B9%E3%83%88%E3%83%BC%E3%83%B3%E3%82%BF%E3%83%83%E3%83%81%20%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88" }] }, "ja": { "title": "ストーンタッチ・アバンギャルド", "desc": "粗い質感のプレートで芸術的な料理を夢見るあなた。テクスチャーが魅力的なテーブルウェアをご提案します。", "products": [{ "productName": "オデンセ(odense) シスレー ボウル", "productDesc": "自然石をそのまま削ったようなラフなテクスチャー", "price": "¥4,500", "match": "97%", "productImg": "https://www.kishispo.net/ex/worldcup/ball/img/ball_1982.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%AA%E3%83%87%E3%83%B3%E3%82%BB%28odense%29%20%E3%82%B7%E3%82%B9%E3%83%AC%E3%83%BC%20%E3%83%9C%E3%82%A6%E3%83%AB" }, { "productName": "ビレロイ＆ボッホ マニュファクチャー ロック", "productDesc": "スレート原石の感じを具現したブラックプレート", "price": "¥6,200", "match": "91%", "productImg": "https://tsurumai-hobby.jp/images/item/super7/4580714143676.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%93%E3%83%AC%E3%83%AD%E3%82%A4%EF%BC%86%E3%83%9C%E3%83%83%E3%83%9B%20%E3%83%9E%E3%83%8B%E3%83%A5%E3%83%95%E3%82%A1%E3%82%AF%E3%83%81%E3%83%A3%E3%83%BC%20%E3%83%AD%E3%83%83%E3%82%AF" }, { "productName": "デンビー ヘイロー ディナープレート", "productDesc": "釉薬が流れ落ちたような破格的なグレーズ効果", "price": "¥5,500", "match": "86%", "productImg": "http://cdn.image.buzzni.com/2024/03/21/tZr7I8V7.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%87%E3%83%B3%E3%83%93%E3%83%BC%20%E3%83%98%E3%82%A4%E3%83%AD%E3%83%BC%20%E3%83%87%E3%82%A3%E3%83%8A%E3%83%BC%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88" }, { "productName": "クァンジュヨ ファヨ つや消しセット", "productDesc": "伝統窯の炎が作り出した非定型の美", "price": "¥12,000", "match": "82%", "productImg": "https://i.ytimg.com/vi/5cvTFFYnPNM/maxresdefault.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%AF%E3%82%A1%E3%83%B3%E3%82%B8%E3%83%A5%E3%83%A8%20%E3%83%95%E3%82%A1%E3%83%A8%20%E3%81%A4%E3%82%84%E6%B6%88%E3%81%97%E3%82%BB%E3%83%83%E3%83%88" }, { "productName": "JAJU ストーンタッチ プレート", "productDesc": "重厚で粗いつや消しのモダンな器", "price": "¥1,800", "match": "77%", "productImg": "https://prs.ohou.se/apne2/commerce/uploads/brands/cover_images/v1-342917728714880.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=JAJU%20%E3%82%B9%E3%83%88%E3%83%BC%E3%83%B3%E3%82%BF%E3%83%83%E3%83%81%20%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88" }] } }, "type_A_B": { "ko": { "title": "젠(Zen) 모던", "desc": "비워냄으로써 채워지는 아름다움. 정갈하고 선이 고운 테이블웨어 큐레이션입니다.", "products": [{ "productName": "로얄코펜하겐 화이트 플루티드", "productDesc": "순백의 자기에 미세한 세로 주름의 기품", "price": "89,000원", "match": "98%", "productImg": "https://files.bcart.jp/fareast-co/uploads/picture_item/ROYAL_COPENHAGEN/018102.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%AD%E3%82%A4%E3%83%A4%E3%83%AB%E3%82%B3%E3%83%9A%E3%83%B3%E3%83%8F%E3%83%BC%E3%82%B2%E3%83%B3%20%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%83%95%E3%83%AB%E3%83%BC%E3%83%86%E3%83%83%E3%83%89" }, { "productName": "이딸라(Iittala) 띠마 플레이트", "productDesc": "장식 없는 스칸디나비아 미니멀리즘", "price": "45,000원", "match": "94%", "productImg": "https://image.rakuten.co.jp/kobe-select/cabinet/imgrc0090993931.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%A4%E3%83%83%E3%82%BF%E3%83%A9%28Iittala%29%20%E3%83%86%E3%82%A3%E3%83%BC%E3%83%9E%20%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88" }, { "productName": "무인양품 백자 플레인 볼", "productDesc": "완벽하게 기본에 충실한 무지 스타일", "price": "15,000원", "match": "89%", "productImg": "https://gi.esmplus.com/maison4402/01_MAISON/55_bunzlau/03_sd_dish_l/detail/01.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E7%84%A1%E5%8D%B0%E8%89%AF%E5%93%81%20%E7%99%BD%E7%A3%81%20%E3%83%97%E3%83%AC%E3%83%BC%E3%83%B3%E3%83%9C%E3%82%A6%E3%83%AB" }, { "productName": "광주요 백합 시리즈", "productDesc": "선을 우아하게 다듬은 한국적 모던 식기", "price": "48,000원", "match": "85%", "productImg": "https://i.pinimg.com/originals/f4/29/e8/f429e847a17d7daf793ec06b5151e4d5.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%AF%E3%82%A1%E3%83%B3%E3%82%B8%E3%83%A5%E3%83%A8%20%E7%99%BE%E5%90%88%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA" }, { "productName": "자주(JAJU) 화이트 본차이나", "productDesc": "얇고 가벼우며 투명한 질감의 실용성", "price": "22,000원", "match": "81%", "productImg": "https://media.timeout.com/images/102310847/image.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=JAJU%20%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%83%9C%E3%83%BC%E3%83%B3%E3%83%81%E3%83%A3%E3%82%A4%E3%83%8A" }] }, "ja": { "title": "禅(Zen) モダン", "desc": "空にすることで満たされる美しさ。整然として線が美しいテーブルウェアのキュレーションです。", "products": [{ "productName": "ロイヤルコペンハーゲン ホワイトフルーテッド", "productDesc": "純白の磁器に細かい縦シワの気品", "price": "¥8,900", "match": "98%", "productImg": "https://files.bcart.jp/fareast-co/uploads/picture_item/ROYAL_COPENHAGEN/018102.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%AD%E3%82%A4%E3%83%A4%E3%83%AB%E3%82%B3%E3%83%9A%E3%83%B3%E3%83%8F%E3%83%BC%E3%82%B2%E3%83%B3%20%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%83%95%E3%83%AB%E3%83%BC%E3%83%86%E3%83%83%E3%83%89" }, { "productName": "イッタラ(Iittala) ティーマ プレート", "productDesc": "飾りのないスカンジナビア・ミニマリズム", "price": "¥4,500", "match": "94%", "productImg": "https://image.rakuten.co.jp/kobe-select/cabinet/imgrc0090993931.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%A4%E3%83%83%E3%82%BF%E3%83%A9%28Iittala%29%20%E3%83%86%E3%82%A3%E3%83%BC%E3%83%9E%20%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88" }, { "productName": "無印良品 白磁 プレーンボウル", "productDesc": "完璧に基本に忠実な無地スタイル", "price": "¥1,500", "match": "89%", "productImg": "https://gi.esmplus.com/maison4402/01_MAISON/55_bunzlau/03_sd_dish_l/detail/01.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E7%84%A1%E5%8D%B0%E8%89%AF%E5%93%81%20%E7%99%BD%E7%A3%81%20%E3%83%97%E3%83%AC%E3%83%BC%E3%83%B3%E3%83%9C%E3%82%A6%E3%83%AB" }, { "productName": "クァンジュヨ 百合シリーズ", "productDesc": "線を優雅に整えた韓国モダン食器", "price": "¥4,800", "match": "85%", "productImg": "https://i.pinimg.com/originals/f4/29/e8/f429e847a17d7daf793ec06b5151e4d5.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%AF%E3%82%A1%E3%83%B3%E3%82%B8%E3%83%A5%E3%83%A8%20%E7%99%BE%E5%90%88%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA" }, { "productName": "JAJU ホワイトボーンチャイナ", "productDesc": "薄くて軽く透明な質感の実用性", "price": "¥2,200", "match": "81%", "productImg": "https://media.timeout.com/images/102310847/image.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=JAJU%20%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%83%9C%E3%83%BC%E3%83%B3%E3%83%81%E3%83%A3%E3%82%A4%E3%83%8A" }] } }, "type_B_A": { "ko": { "title": "맥시멀 화려함", "desc": "화려한 문양과 우아한 골드 디테일! 테이블의 분위기를 확 살려줄 클래식한 식기가 어울려요.", "products": [{ "productName": "로얄알버트 올드컨트리 로즈", "productDesc": "장미 문양과 황금빛 테두리의 클래식 찻잔", "price": "129,000원", "match": "99%", "productImg": "https://store.heykorean.com/market/product/2021/06/15/4bsGKN6S.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%AD%E3%82%A4%E3%83%A4%E3%83%AB%E3%82%A2%E3%83%AB%E3%83%90%E3%83%BC%E3%83%88%20%E3%82%AA%E3%83%BC%E3%83%AB%E3%83%89%E3%82%AB%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC%E3%83%AD%E3%83%BC%E3%82%BA" }, { "productName": "웨지우드 와일드 스트로베리", "productDesc": "영국 왕실의 기품을 담은 화려한 테이블웨어", "price": "210,000원", "match": "92%", "productImg": "https://contents.lotteon.com/itemimage/_v103552/LE/12/00/14/74/45/_1/04/80/19/09/3/LE1200147445_1048019093_1.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%A6%E3%82%A7%E3%83%83%E3%82%B8%E3%82%A6%E3%83%83%E3%83%89%20%E3%83%AF%E3%82%A4%E3%83%AB%E3%83%89%E3%82%B9%E3%83%88%E3%83%AD%E3%83%99%E3%83%AA%E3%83%BC" }, { "productName": "빌레로이앤보흐 아우든", "productDesc": "노란빛과 정교한 농장 풍경 드로잉", "price": "98,000원", "match": "88%", "productImg": "https://liverpool.tokyo/wp/wp-content/uploads/2024/02/GGAiotYWkAA3IkX.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%93%E3%83%AC%E3%83%AD%E3%82%A4%EF%BC%86%E3%83%9C%E3%83%83%E3%83%9B%20%E3%82%AA%E3%83%BC%E3%83%89%E3%83%B3" }, { "productName": "에르메스 모자이크 오 뱅크 플레이트", "productDesc": "기하학적 금빛 모자이크 패턴의 럭셔리", "price": "345,000원", "match": "83%", "productImg": "https://kream-phinf.pstatic.net/MjAyNTA3MzBfNjYg/MDAxNzUzODY1NDA0MTg2.uXV63vugCvtbIPYtUtnJy7PuQFrJxsMkdV_x6HL1xMgg.xK3KmgPp9k_qDrJT8EoqTd_-G1tzfh8UjqdIR_490IYg.PNG/a_db015b9a0e15417f996b20da13a4be20.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%A8%E3%83%AB%E3%83%A1%E3%82%B9%20%E3%83%A2%E3%82%B6%E3%82%A4%E3%82%AF%20%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%AD%E3%83%A3%E3%83%88%E3%83%AB%20%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88" }, { "productName": "베르사체 메두사 플레이트", "productDesc": "강렬한 골드와 메두사 로고의 압도적 비주얼", "price": "420,000원", "match": "79%", "productImg": "https://img.aucfree.com/w1141713067.1.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%B4%E3%82%A7%E3%83%AB%E3%82%B5%E3%83%BC%E3%83%81%20%E3%83%A1%E3%83%87%E3%83%A5%E3%83%BC%E3%82%B5%20%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88" }] }, "ja": { "title": "マキシマル・ゴージャス", "desc": "華やかな模様と優雅なゴールドディテール！テーブルの雰囲気をパッと明るくするクラシックな食器がお似合いです。", "products": [{ "productName": "ロイヤルアルバート オールドカントリーローズ", "productDesc": "薔薇の模様と黄金の縁取りのクラシックなティーカップ", "price": "¥12,900", "match": "99%", "productImg": "https://store.heykorean.com/market/product/2021/06/15/4bsGKN6S.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%AD%E3%82%A4%E3%83%A4%E3%83%AB%E3%82%A2%E3%83%AB%E3%83%90%E3%83%BC%E3%83%88%20%E3%82%AA%E3%83%BC%E3%83%AB%E3%83%89%E3%82%AB%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC%E3%83%AD%E3%83%BC%E3%82%BA" }, { "productName": "ウェッジウッド ワイルドストロベリー", "productDesc": "英国王室の気品を込めた華やかなテーブルウェア", "price": "¥21,000", "match": "92%", "productImg": "https://contents.lotteon.com/itemimage/_v103552/LE/12/00/14/74/45/_1/04/80/19/09/3/LE1200147445_1048019093_1.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%A6%E3%82%A7%E3%83%83%E3%82%B8%E3%82%A6%E3%83%83%E3%83%89%20%E3%83%AF%E3%82%A4%E3%83%AB%E3%83%89%E3%82%B9%E3%83%88%E3%83%AD%E3%83%99%E3%83%AA%E3%83%BC" }, { "productName": "ビレロイ＆ボッホ オードン", "productDesc": "黄色味と精巧な農場の風景ドローイング", "price": "¥9,800", "match": "88%", "productImg": "https://liverpool.tokyo/wp/wp-content/uploads/2024/02/GGAiotYWkAA3IkX.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%93%E3%83%AC%E3%83%AD%E3%82%A4%EF%BC%86%E3%83%9C%E3%83%83%E3%83%9B%20%E3%82%AA%E3%83%BC%E3%83%89%E3%83%B3" }, { "productName": "エルメス モザイク ヴァンキャトル プレート", "productDesc": "幾何学的な金色のモザイクパターンのラグジュアリー", "price": "¥34,500", "match": "83%", "productImg": "https://kream-phinf.pstatic.net/MjAyNTA3MzBfNjYg/MDAxNzUzODY1NDA0MTg2.uXV63vugCvtbIPYtUtnJy7PuQFrJxsMkdV_x6HL1xMgg.xK3KmgPp9k_qDrJT8EoqTd_-G1tzfh8UjqdIR_490IYg.PNG/a_db015b9a0e15417f996b20da13a4be20.png", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%A8%E3%83%AB%E3%83%A1%E3%82%B9%20%E3%83%A2%E3%82%B6%E3%82%A4%E3%82%AF%20%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%AD%E3%83%A3%E3%83%88%E3%83%AB%20%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88" }, { "productName": "ヴェルサーチ メデューサ プレート", "productDesc": "強烈なゴールドとメデューサロゴの圧倒的ビジュアル", "price": "¥42,000", "match": "79%", "productImg": "https://img.aucfree.com/w1141713067.1.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%B4%E3%82%A7%E3%83%AB%E3%82%B5%E3%83%BC%E3%83%81%20%E3%83%A1%E3%83%87%E3%83%A5%E3%83%BC%E3%82%B5%20%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88" }] } }, "type_B_B": { "ko": { "title": "네이처 뉴트럴", "desc": "무심하게 툭 얹어도 편안하고, 따스한 우드 톤의 다이닝 환경을 좋아하는 당신입니다.", "products": [{ "productName": "빌레로이앤보흐 아르테사노 우드 보드", "productDesc": "따뜻한 나무 질감을 살린 트레이", "price": "72,000원", "match": "95%", "productImg": "https://auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0503/users/3604ad7ba23c6e136eff053b6e70dae043499ccd/i-img600x450-17107493739fxiv636358.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%93%E3%83%AC%E3%83%AD%E3%82%A4%EF%BC%86%E3%83%9C%E3%83%83%E3%83%9B%20%E3%82%A2%E3%83%AB%E3%83%86%E3%82%B5%E3%83%BC%E3%83%8E%20%E3%82%A6%E3%83%83%E3%83%89%E3%83%9C%E3%83%BC%E3%83%89" }, { "productName": "사바티에 올리브 우드 도마", "productDesc": "올리브 나무 특유의 무늬가 살아있는 플레이트", "price": "125,000원", "match": "90%", "productImg": "http://www.st-sakane-tatami.com/wp-content/uploads/2019/01/top-8.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B5%E3%83%90%E3%83%86%E3%82%A3%E3%82%A8%20%E3%82%AA%E3%83%AA%E3%83%BC%E3%83%96%E3%82%A6%E3%83%83%E3%83%89%20%E3%81%BE%E3%81%AA%E6%9D%BF" }, { "productName": "차바트리 우드 볼", "productDesc": "태국산 리얼 티크 우드의 둥근 감성", "price": "48,000원", "match": "86%", "productImg": "https://66.media.tumblr.com/e13e081337a44a8fe193195747ec17c5/tumblr_mz4ct4nmho1r6cuafo1_1280.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%81%E3%83%A3%E3%83%90%E3%83%84%E3%83%AA%E3%83%BC%20%E3%82%A6%E3%83%83%E3%83%89%E3%83%9C%E3%82%A6%E3%83%AB" }, { "productName": "오덴세 레고트 원목 쟁반", "productDesc": "결이 부드럽고 튼튼한 무광 우드 플래터", "price": "65,000원", "match": "81%", "productImg": "https://image.rakuten.co.jp/kilims/cabinet/07a/retb078-1.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%AA%E3%83%87%E3%83%B3%E3%82%BB%20%E3%83%AC%E3%82%B4%E3%83%BC%E3%83%88%20%E6%9C%A8%E8%A3%BD%E3%83%88%E3%83%AC%E3%82%A4" }, { "productName": "무스크 티크우드 커트러리 세트", "productDesc": "손에 쥘 때마다 따뜻한 나무 식기", "price": "34,000원", "match": "76%", "productImg": "https://www.toylure.com/img/57/W-1198-5.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%A0%E3%82%B9%E3%82%AF%20%E3%83%81%E3%83%BC%E3%82%AF%E3%82%A6%E3%83%83%E3%83%89%20%E3%82%AB%E3%83%88%E3%83%A9%E3%83%AA%E3%83%BC%E3%82%BB%E3%83%83%E3%83%88" }] }, "ja": { "title": "ネイチャー・ニュートラル", "desc": "何気なく置いてもリラックスでき、温かいウッドトーンのダイニング環境が好きなあなたです。", "products": [{ "productName": "ビレロイ＆ボッホ アルテサーノ ウッドボード", "productDesc": "温かい木の質感を活かしたトレイ", "price": "¥7,200", "match": "95%", "productImg": "https://auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0503/users/3604ad7ba23c6e136eff053b6e70dae043499ccd/i-img600x450-17107493739fxiv636358.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%93%E3%83%AC%E3%83%AD%E3%82%A4%EF%BC%86%E3%83%9C%E3%83%83%E3%83%9B%20%E3%82%A2%E3%83%AB%E3%83%86%E3%82%B5%E3%83%BC%E3%83%8E%20%E3%82%A6%E3%83%83%E3%83%89%E3%83%9C%E3%83%BC%E3%83%89" }, { "productName": "サバティエ オリーブウッド まな板", "productDesc": "オリーブの木特有の模様が生きているプレート", "price": "¥12,500", "match": "90%", "productImg": "http://www.st-sakane-tatami.com/wp-content/uploads/2019/01/top-8.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%B5%E3%83%90%E3%83%86%E3%82%A3%E3%82%A8%20%E3%82%AA%E3%83%AA%E3%83%BC%E3%83%96%E3%82%A6%E3%83%83%E3%83%89%20%E3%81%BE%E3%81%AA%E6%9D%BF" }, { "productName": "チャバツリー ウッドボウル", "productDesc": "タイ産のリアルチークウッドの丸い感性", "price": "¥4,800", "match": "86%", "productImg": "https://66.media.tumblr.com/e13e081337a44a8fe193195747ec17c5/tumblr_mz4ct4nmho1r6cuafo1_1280.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%81%E3%83%A3%E3%83%90%E3%83%84%E3%83%AA%E3%83%BC%20%E3%82%A6%E3%83%83%E3%83%89%E3%83%9C%E3%82%A6%E3%83%AB" }, { "productName": "オデンセ レゴート 木製トレイ", "productDesc": "滑らかな木目と丈夫なつや消しウッドプラッター", "price": "¥6,500", "match": "81%", "productImg": "https://image.rakuten.co.jp/kilims/cabinet/07a/retb078-1.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%82%AA%E3%83%87%E3%83%B3%E3%82%BB%20%E3%83%AC%E3%82%B4%E3%83%BC%E3%83%88%20%E6%9C%A8%E8%A3%BD%E3%83%88%E3%83%AC%E3%82%A4" }, { "productName": "ムスク チークウッド カトラリーセット", "productDesc": "手にするたびに温かい木の食器", "price": "¥3,400", "match": "76%", "productImg": "https://www.toylure.com/img/57/W-1198-5.jpg", "buyLink": "https://shopping.yahoo.co.jp/search?p=%E3%83%A0%E3%82%B9%E3%82%AF%20%E3%83%81%E3%83%BC%E3%82%AF%E3%82%A6%E3%83%83%E3%83%89%20%E3%82%AB%E3%83%88%E3%83%A9%E3%83%AA%E3%83%BC%E3%82%BB%E3%83%83%E3%83%88" }] } } }
    },
brand_golf: {
                "questions": [
                        {
                                "a": "images/quiz_brand_golf_q1_a.jpg",
                                "b": "images/quiz_brand_golf_q1_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_golf_q2_a.jpg",
                                "b": "images/quiz_brand_golf_q2_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_golf_q3_a.jpg",
                                "b": "images/quiz_brand_golf_q3_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_golf_q4_a.jpg",
                                "b": "images/quiz_brand_golf_q4_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_golf_q5_a.jpg",
                                "b": "images/quiz_brand_golf_q5_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_golf_q6_a.jpg",
                                "b": "images/quiz_brand_golf_q6_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_golf_q7_a.jpg",
                                "b": "images/quiz_brand_golf_q7_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_golf_q8_a.jpg",
                                "b": "images/quiz_brand_golf_q8_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_golf_q9_a.jpg",
                                "b": "images/quiz_brand_golf_q9_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_golf_q10_a.jpg",
                                "b": "images/quiz_brand_golf_q10_b.jpg"
                        }
                ],
                "results": {
                        "type_A_A": {
                                "ko": {
                                        "title": "프로페셔널 퍼포먼스",
                                        "desc": "승리를 위한 타협 없는 기술력. 정통 성능 중심의 프리미엄 골프 브랜드를 추천합니다.",
                                        "products": [
                                                {
                                                        "productName": "타이틀리스트",
                                                        "productDesc": "최고의 퍼포먼스를 위한 정통 골프 브랜드",
                                                        "price": "-",
                                                        "match": "99%",
                                                        "productImg": "images/prod_brand_golf_타이틀리스트.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%83%80%EC%9D%B4%ED%8B%80%EB%A6%AC%EC%8A%A4%ED%8A%B8"
                                                },
                                                {
                                                        "productName": "PXG",
                                                        "productDesc": "타협 없는 하이엔드 테크놀로지",
                                                        "price": "-",
                                                        "match": "95%",
                                                        "productImg": "images/prod_brand_golf_PXG.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=PXG"
                                                },
                                                {
                                                        "productName": "테일러메이드",
                                                        "productDesc": "혁신적인 기술력의 글로벌 리더",
                                                        "price": "-",
                                                        "match": "91%",
                                                        "productImg": "images/prod_brand_golf_테일러메이드.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%85%8C%EC%9D%BC%EB%9F%AC%EB%A9%94%EC%9D%B4%EB%93%9C"
                                                },
                                                {
                                                        "productName": "캘러웨이",
                                                        "productDesc": "프로들이 선택하는 압도적 관용성",
                                                        "price": "-",
                                                        "match": "86%",
                                                        "productImg": "images/prod_brand_golf_캘러웨이.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%BA%98%EB%9F%AC%EC%9B%A8%EC%9D%B4"
                                                },
                                                {
                                                        "productName": "데상트 골프",
                                                        "productDesc": "인체공학적 핏과 스포티 무드",
                                                        "price": "-",
                                                        "match": "82%",
                                                        "productImg": "images/prod_brand_golf_데상트_골프.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%8D%B0%EC%83%81%ED%8A%B8%20%EA%B3%A8%ED%94%84"
                                                }
                                        ]
                                },
                                "ja": {
                                        "title": "プロフェッショナル・パフォーマンス",
                                        "desc": "勝利のための妥協なき技術力。正統派で優れたパフォーマンスを誇るプレミアムゴルフブランド。",
                                        "products": [
                                                {
                                                        "productName": "タイトリスト",
                                                        "productDesc": "최고의 퍼포먼스를 위한 정통 골프 브랜드",
                                                        "price": "-",
                                                        "match": "99%",
                                                        "productImg": "images/prod_brand_golf_타이틀리스트.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%83%80%EC%9D%B4%ED%8B%80%EB%A6%AC%EC%8A%A4%ED%8A%B8"
                                                },
                                                {
                                                        "productName": "PXG",
                                                        "productDesc": "타협 없는 하이엔드 테크놀로지",
                                                        "price": "-",
                                                        "match": "95%",
                                                        "productImg": "images/prod_brand_golf_PXG.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=PXG"
                                                },
                                                {
                                                        "productName": "テーラーメイド",
                                                        "productDesc": "혁신적인 기술력의 글로벌 리더",
                                                        "price": "-",
                                                        "match": "91%",
                                                        "productImg": "images/prod_brand_golf_테일러메이드.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%85%8C%EC%9D%BC%EB%9F%AC%EB%A9%94%EC%9D%B4%EB%93%9C"
                                                },
                                                {
                                                        "productName": "キャロウェイ",
                                                        "productDesc": "프로들이 선택하는 압도적 관용성",
                                                        "price": "-",
                                                        "match": "86%",
                                                        "productImg": "images/prod_brand_golf_캘러웨이.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%BA%98%EB%9F%AC%EC%9B%A8%EC%9D%B4"
                                                },
                                                {
                                                        "productName": "デサントゴルフ",
                                                        "productDesc": "인체공학적 핏과 스포티 무드",
                                                        "price": "-",
                                                        "match": "82%",
                                                        "productImg": "images/prod_brand_golf_데상트_골프.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%8D%B0%EC%83%81%ED%8A%B8%20%EA%B3%A8%ED%94%84"
                                                }
                                        ]
                                }
                        },
                        "type_A_B": {
                                "ko": {
                                        "title": "럭셔리 팝 & 하이엔드",
                                        "desc": "과감한 패턴과 고급스러운 디테일! 필드 위에서 가장 빛나는 럭셔리 골프웨어입니다.",
                                        "products": [
                                                {
                                                        "productName": "마크앤로나",
                                                        "productDesc": "럭셔리와 스트릿이 결합된 하이엔드 골프웨어",
                                                        "price": "-",
                                                        "match": "99%",
                                                        "productImg": "images/prod_brand_golf_마크앤로나.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%A7%88%ED%81%AC%EC%95%A4%EB%A1%9C%EB%82%98"
                                                },
                                                {
                                                        "productName": "지포어",
                                                        "productDesc": "파격적인 컬러와 아이코닉한 디자인",
                                                        "price": "-",
                                                        "match": "94%",
                                                        "productImg": "images/prod_brand_golf_지포어.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%A7%80%ED%8F%AC%EC%96%B4"
                                                },
                                                {
                                                        "productName": "제이린드버그",
                                                        "productDesc": "북유럽 감성의 세련된 실루엣",
                                                        "price": "-",
                                                        "match": "89%",
                                                        "productImg": "images/prod_brand_golf_제이린드버그.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%A0%9C%EC%9D%B4%EB%A6%B0%EB%93%9C%EB%B2%84%EA%B7%B8"
                                                },
                                                {
                                                        "productName": "파리게이츠",
                                                        "productDesc": "럭셔리하고 유니크한 팝 감성",
                                                        "price": "-",
                                                        "match": "84%",
                                                        "productImg": "images/prod_brand_golf_파리게이츠.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%8C%8C%EB%A6%AC%EA%B2%8C%EC%9D%B4%EC%B8%A0"
                                                },
                                                {
                                                        "productName": "사우스케이프",
                                                        "productDesc": "하이엔드 리조트 감성의 우아함",
                                                        "price": "-",
                                                        "match": "79%",
                                                        "productImg": "images/prod_brand_golf_사우스케이프.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%82%AC%EC%9A%B0%EC%8A%A4%EC%BC%80%EC%9D%B4%ED%94%84"
                                                }
                                        ]
                                },
                                "ja": {
                                        "title": "ラグジュアリーポップ＆ハイエンド",
                                        "desc": "大胆なパターンと高級感あるディテール！フィールド上で最も輝くラグジュアリーゴルフウェア。",
                                        "products": [
                                                {
                                                        "productName": "マークアンドロナ",
                                                        "productDesc": "럭셔리와 스트릿이 결합된 하이엔드 골프웨어",
                                                        "price": "-",
                                                        "match": "99%",
                                                        "productImg": "images/prod_brand_golf_마크앤로나.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%A7%88%ED%81%AC%EC%95%A4%EB%A1%9C%EB%82%98"
                                                },
                                                {
                                                        "productName": "G/FORE",
                                                        "productDesc": "파격적인 컬러와 아이코닉한 디자인",
                                                        "price": "-",
                                                        "match": "94%",
                                                        "productImg": "images/prod_brand_golf_지포어.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%A7%80%ED%8F%AC%EC%96%B4"
                                                },
                                                {
                                                        "productName": "Jリンドバーグ",
                                                        "productDesc": "북유럽 감성의 세련된 실루엣",
                                                        "price": "-",
                                                        "match": "89%",
                                                        "productImg": "images/prod_brand_golf_제이린드버그.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%A0%9C%EC%9D%B4%EB%A6%B0%EB%93%9C%EB%B2%84%EA%B7%B8"
                                                },
                                                {
                                                        "productName": "パーリーゲイツ",
                                                        "productDesc": "럭셔리하고 유니크한 팝 감성",
                                                        "price": "-",
                                                        "match": "84%",
                                                        "productImg": "images/prod_brand_golf_파리게이츠.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%8C%8C%EB%A6%AC%EA%B2%8C%EC%9D%B4%EC%B8%A0"
                                                },
                                                {
                                                        "productName": "サウスケープ",
                                                        "productDesc": "하이엔드 리조트 감성의 우아함",
                                                        "price": "-",
                                                        "match": "79%",
                                                        "productImg": "images/prod_brand_golf_사우스케이프.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%82%AC%EC%9A%B0%EC%8A%A4%EC%BC%80%EC%9D%B4%ED%94%84"
                                                }
                                        ]
                                }
                        },
                        "type_B_A": {
                                "ko": {
                                        "title": "스트릿 & 트렌디 골프",
                                        "desc": "형식에 얽매이지 않는 힙한 에너지. 일상과 필드의 경계가 없는 스트릿 골프 브랜드입니다.",
                                        "products": [
                                                {
                                                        "productName": "말본 골프",
                                                        "productDesc": "골프와 스트릿 컬처의 트렌디한 만남",
                                                        "price": "-",
                                                        "match": "98%",
                                                        "productImg": "images/prod_brand_golf_말본_골프.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%A7%90%EB%B3%B8%20%EA%B3%A8%ED%94%84"
                                                },
                                                {
                                                        "productName": "나이키 골프",
                                                        "productDesc": "스포티함과 스트릿 감성의 조화",
                                                        "price": "-",
                                                        "match": "94%",
                                                        "productImg": "images/prod_brand_golf_나이키_골프.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%82%98%EC%9D%B4%ED%82%A4%20%EA%B3%A8%ED%94%84"
                                                },
                                                {
                                                        "productName": "보기보이즈",
                                                        "productDesc": "레트로하고 힙한 스타일의 골프웨어",
                                                        "price": "-",
                                                        "match": "89%",
                                                        "productImg": "images/prod_brand_golf_보기보이즈.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%B3%B4%EA%B8%B0%EB%B3%B4%EC%9D%B4%EC%A6%88"
                                                },
                                                {
                                                        "productName": "존스 골프",
                                                        "productDesc": "클래식과 스트릿을 오가는 올드스쿨 매력",
                                                        "price": "-",
                                                        "match": "85%",
                                                        "productImg": "images/prod_brand_golf_존스_골프.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%A1%B4%EC%8A%A4%20%EA%B3%A8%ED%94%84"
                                                },
                                                {
                                                        "productName": "클럽하우스",
                                                        "productDesc": "위트 있는 언더그라운드 골프 씬",
                                                        "price": "-",
                                                        "match": "80%",
                                                        "productImg": "images/prod_brand_golf_클럽하우스.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%81%B4%EB%9F%BD%ED%95%98%EC%9A%B0%EC%8A%A4"
                                                }
                                        ]
                                },
                                "ja": {
                                        "title": "ストリート＆トレンディゴルフ",
                                        "desc": "形式にとらわれないヒップなエネルギー。日常とフィールドの境界がないストリートゴルフブランド。",
                                        "products": [
                                                {
                                                        "productName": "マルボンゴルフ",
                                                        "productDesc": "골프와 스트릿 컬처의 트렌디한 만남",
                                                        "price": "-",
                                                        "match": "98%",
                                                        "productImg": "images/prod_brand_golf_말본_골프.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%A7%90%EB%B3%B8%20%EA%B3%A8%ED%94%84"
                                                },
                                                {
                                                        "productName": "ナイキゴルフ",
                                                        "productDesc": "스포티함과 스트릿 감성의 조화",
                                                        "price": "-",
                                                        "match": "94%",
                                                        "productImg": "images/prod_brand_golf_나이키_골프.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%82%98%EC%9D%B4%ED%82%A4%20%EA%B3%A8%ED%94%84"
                                                },
                                                {
                                                        "productName": "ボギーボーイズ",
                                                        "productDesc": "레트로하고 힙한 스타일의 골프웨어",
                                                        "price": "-",
                                                        "match": "89%",
                                                        "productImg": "images/prod_brand_golf_보기보이즈.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%B3%B4%EA%B8%B0%EB%B3%B4%EC%9D%B4%EC%A6%88"
                                                },
                                                {
                                                        "productName": "ジョーンズゴルフ",
                                                        "productDesc": "클래식과 스트릿을 오가는 올드스쿨 매력",
                                                        "price": "-",
                                                        "match": "85%",
                                                        "productImg": "images/prod_brand_golf_존스_골프.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%A1%B4%EC%8A%A4%20%EA%B3%A8%ED%94%84"
                                                },
                                                {
                                                        "productName": "クラブハウス",
                                                        "productDesc": "위트 있는 언더그라운드 골프 씬",
                                                        "price": "-",
                                                        "match": "80%",
                                                        "productImg": "images/prod_brand_golf_클럽하우스.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%81%B4%EB%9F%BD%ED%95%98%EC%9A%B0%EC%8A%A4"
                                                }
                                        ]
                                }
                        },
                        "type_B_B": {
                                "ko": {
                                        "title": "헤리티지 클래식",
                                        "desc": "시간이 흘러도 변치 않는 가치. 다듬어진 기품과 전통을 자랑하는 클래식 골프웨어입니다.",
                                        "products": [
                                                {
                                                        "productName": "풋조이",
                                                        "productDesc": "전통과 헤리티지를 자랑하는 골프화의 명가",
                                                        "price": "-",
                                                        "match": "97%",
                                                        "productImg": "images/prod_brand_golf_풋조이.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%92%8B%EC%A1%B0%EC%9D%B4"
                                                },
                                                {
                                                        "productName": "폴로 골프",
                                                        "productDesc": "아메리칸 트래디셔널 프레피 룩",
                                                        "price": "-",
                                                        "match": "93%",
                                                        "productImg": "images/prod_brand_golf_폴로_골프.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%8F%B4%EB%A1%9C%20%EA%B3%A8%ED%94%84"
                                                },
                                                {
                                                        "productName": "피터 밀러",
                                                        "productDesc": "고급스럽고 클래식한 컨템포러리 감성",
                                                        "price": "-",
                                                        "match": "88%",
                                                        "productImg": "images/prod_brand_golf_피터_밀러.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%94%BC%ED%84%B0%20%EB%B0%80%EB%9F%AC"
                                                },
                                                {
                                                        "productName": "RLX 랄프로렌",
                                                        "productDesc": "클래식 로고라인 고기능성 웨어",
                                                        "price": "-",
                                                        "match": "84%",
                                                        "productImg": "images/prod_brand_golf_RLX_랄프로렌.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=RLX%20%EB%9E%84%ED%94%84%EB%A1%9C%EB%A0%8C"
                                                },
                                                {
                                                        "productName": "스카티 카메론",
                                                        "productDesc": "장인정신이 깃든 콰이어트 명품 라인",
                                                        "price": "-",
                                                        "match": "80%",
                                                        "productImg": "images/prod_brand_golf_스카티_카메론.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%8A%A4%EC%B9%B4%ED%8B%B0%20%EC%B9%B4%EB%A9%94%EB%A1%A0"
                                                }
                                        ]
                                },
                                "ja": {
                                        "title": "ヘリテージ・クラシック",
                                        "desc": "時間が経っても変わらない価値。洗練された気品と伝統を誇るクラシックゴルフウェア。",
                                        "products": [
                                                {
                                                        "productName": "フットジョイ",
                                                        "productDesc": "전통과 헤리티지를 자랑하는 골프화의 명가",
                                                        "price": "-",
                                                        "match": "97%",
                                                        "productImg": "images/prod_brand_golf_풋조이.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%92%8B%EC%A1%B0%EC%9D%B4"
                                                },
                                                {
                                                        "productName": "ポロゴルフ",
                                                        "productDesc": "아메리칸 트래디셔널 프레피 룩",
                                                        "price": "-",
                                                        "match": "93%",
                                                        "productImg": "images/prod_brand_golf_폴로_골프.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%8F%B4%EB%A1%9C%20%EA%B3%A8%ED%94%84"
                                                },
                                                {
                                                        "productName": "ピーター・ミラー",
                                                        "productDesc": "고급스럽고 클래식한 컨템포러리 감성",
                                                        "price": "-",
                                                        "match": "88%",
                                                        "productImg": "images/prod_brand_golf_피터_밀러.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%94%BC%ED%84%B0%20%EB%B0%80%EB%9F%AC"
                                                },
                                                {
                                                        "productName": "RLX ラルフローレン",
                                                        "productDesc": "클래식 로고라인 고기능성 웨어",
                                                        "price": "-",
                                                        "match": "84%",
                                                        "productImg": "images/prod_brand_golf_RLX_랄프로렌.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=RLX%20%EB%9E%84%ED%94%84%EB%A1%9C%EB%A0%8C"
                                                },
                                                {
                                                        "productName": "スコッティ・キャメロン",
                                                        "productDesc": "장인정신이 깃든 콰이어트 명품 라인",
                                                        "price": "-",
                                                        "match": "80%",
                                                        "productImg": "images/prod_brand_golf_스카티_카메론.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%8A%A4%EC%B9%B4%ED%8B%B0%20%EC%B9%B4%EB%A9%94%EB%A1%A0"
                                                }
                                        ]
                                }
                        }
                }
        },
        brand_acc: {
                "questions": [
                        {
                                "a": "images/quiz_brand_acc_q1_a.jpg",
                                "b": "images/quiz_brand_acc_q1_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_acc_q2_a.jpg",
                                "b": "images/quiz_brand_acc_q2_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_acc_q3_a.jpg",
                                "b": "images/quiz_brand_acc_q3_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_acc_q4_a.jpg",
                                "b": "images/quiz_brand_acc_q4_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_acc_q5_a.jpg",
                                "b": "images/quiz_brand_acc_q5_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_acc_q6_a.jpg",
                                "b": "images/quiz_brand_acc_q6_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_acc_q7_a.jpg",
                                "b": "images/quiz_brand_acc_q7_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_acc_q8_a.jpg",
                                "b": "images/quiz_brand_acc_q8_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_acc_q9_a.jpg",
                                "b": "images/quiz_brand_acc_q9_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_acc_q10_a.jpg",
                                "b": "images/quiz_brand_acc_q10_b.jpg"
                        }
                ],
                "results": {
                        "type_A_A": {
                                "ko": {
                                        "title": "하이엔드 스태터스",
                                        "desc": "품격을 상징하는 최고급 워치와 하이주얼리. 영원히 변치않는 가치를 지향합니다.",
                                        "products": [
                                                {
                                                        "productName": "롤렉스",
                                                        "productDesc": "성공과 품격의 상징적인 타임피스",
                                                        "price": "-",
                                                        "match": "99%",
                                                        "productImg": "images/prod_brand_acc_롤렉스.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%A1%A4%EB%A0%89%EC%8A%A4"
                                                },
                                                {
                                                        "productName": "까르띠에",
                                                        "productDesc": "우아한 디자인과 불멸의 헤리티지",
                                                        "price": "-",
                                                        "match": "94%",
                                                        "productImg": "images/prod_brand_acc_까르띠에.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EA%B9%8C%EB%A5%B4%EB%9D%A0%EC%97%90"
                                                },
                                                {
                                                        "productName": "불가리",
                                                        "productDesc": "이탈리안 럭셔리의 관능적인 아름다움",
                                                        "price": "-",
                                                        "match": "89%",
                                                        "productImg": "images/prod_brand_acc_불가리.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%B6%88%EA%B0%80%EB%A6%AC"
                                                },
                                                {
                                                        "productName": "티파니앤코",
                                                        "productDesc": "시대를 초월하는 아메리칸 하이주얼리",
                                                        "price": "-",
                                                        "match": "85%",
                                                        "productImg": "images/prod_brand_acc_티파니앤코.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%8B%B0%ED%8C%8C%EB%8B%88%EC%95%A4%EC%BD%94"
                                                },
                                                {
                                                        "productName": "반클리프 아펠",
                                                        "productDesc": "동화처럼 아름다운 곡선과 세공력",
                                                        "price": "-",
                                                        "match": "80%",
                                                        "productImg": "images/prod_brand_acc_반클리프_아펠.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%B0%98%ED%81%B4%EB%A6%AC%ED%94%84%20%EC%95%84%ED%8E%A0"
                                                }
                                        ]
                                },
                                "ja": {
                                        "title": "ハイエンド・ステータス",
                                        "desc": "品格を象徴する最高級ウォッチとハイジュエリー。永遠に変わらない価値を目指します。",
                                        "products": [
                                                {
                                                        "productName": "ロレックス",
                                                        "productDesc": "성공과 품격의 상징적인 타임피스",
                                                        "price": "-",
                                                        "match": "99%",
                                                        "productImg": "images/prod_brand_acc_롤렉스.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%A1%A4%EB%A0%89%EC%8A%A4"
                                                },
                                                {
                                                        "productName": "カルティエ",
                                                        "productDesc": "우아한 디자인과 불멸의 헤리티지",
                                                        "price": "-",
                                                        "match": "94%",
                                                        "productImg": "images/prod_brand_acc_까르띠에.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EA%B9%8C%EB%A5%B4%EB%9D%A0%EC%97%90"
                                                },
                                                {
                                                        "productName": "ブルガリ",
                                                        "productDesc": "이탈리안 럭셔리의 관능적인 아름다움",
                                                        "price": "-",
                                                        "match": "89%",
                                                        "productImg": "images/prod_brand_acc_불가리.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%B6%88%EA%B0%80%EB%A6%AC"
                                                },
                                                {
                                                        "productName": "ティファニー",
                                                        "productDesc": "시대를 초월하는 아메리칸 하이주얼리",
                                                        "price": "-",
                                                        "match": "85%",
                                                        "productImg": "images/prod_brand_acc_티파니앤코.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%8B%B0%ED%8C%8C%EB%8B%88%EC%95%A4%EC%BD%94"
                                                },
                                                {
                                                        "productName": "ヴァンクリーフ＆アーペル",
                                                        "productDesc": "동화처럼 아름다운 곡선과 세공력",
                                                        "price": "-",
                                                        "match": "80%",
                                                        "productImg": "images/prod_brand_acc_반클리프_아펠.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%B0%98%ED%81%B4%EB%A6%AC%ED%94%84%20%EC%95%84%ED%8E%A0"
                                                }
                                        ]
                                }
                        },
                        "type_A_B": {
                                "ko": {
                                        "title": "트렌디 럭셔리",
                                        "desc": "독창적이고 힙한 감성! 대담한 디자인으로 주목받는 패셔너블 잡화 라인업입니다.",
                                        "products": [
                                                {
                                                        "productName": "젠틀몬스터",
                                                        "productDesc": "퓨처리스틱하고 아방가르드한 아이웨어",
                                                        "price": "-",
                                                        "match": "98%",
                                                        "productImg": "images/prod_brand_acc_젠틀몬스터.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%A0%A0%ED%8B%80%EB%AA%AC%EC%8A%A4%ED%84%B0"
                                                },
                                                {
                                                        "productName": "크롬하츠",
                                                        "productDesc": "강렬하고 반항적인 하이엔드 실버 주얼리",
                                                        "price": "-",
                                                        "match": "94%",
                                                        "productImg": "images/prod_brand_acc_크롬하츠.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%81%AC%EB%A1%AC%ED%95%98%EC%B8%A0"
                                                },
                                                {
                                                        "productName": "비비안 웨스트우드",
                                                        "productDesc": "펑크와 로맨틱 요소가 결합된 아이코닉 디자인",
                                                        "price": "-",
                                                        "match": "89%",
                                                        "productImg": "images/prod_brand_acc_비비안_웨스트우드.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%B9%84%EB%B9%84%EC%95%88%20%EC%9B%A8%EC%8A%A4%ED%8A%B8%EC%9A%B0%EB%93%9C"
                                                },
                                                {
                                                        "productName": "보테가 베네타",
                                                        "productDesc": "로고를 지운 인트레치아토 가죽의 세련됨",
                                                        "price": "-",
                                                        "match": "84%",
                                                        "productImg": "images/prod_brand_acc_보테가_베네타.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%B3%B4%ED%85%8C%EA%B0%80%20%EB%B2%A0%EB%84%A4%ED%83%80"
                                                },
                                                {
                                                        "productName": "마르지엘라",
                                                        "productDesc": "스티치 디테일과 해체주의적 감성",
                                                        "price": "-",
                                                        "match": "79%",
                                                        "productImg": "images/prod_brand_acc_마르지엘라.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%A7%88%EB%A5%B4%EC%A7%80%EC%97%98%EB%9D%BC"
                                                }
                                        ]
                                },
                                "ja": {
                                        "title": "トレンディ・ラグジュアリー",
                                        "desc": "独創的でヒップな感性！大胆なデザインで注目されるファッショナブルな雑貨ラインナップです。",
                                        "products": [
                                                {
                                                        "productName": "ジェントルモンスター",
                                                        "productDesc": "퓨처리스틱하고 아방가르드한 아이웨어",
                                                        "price": "-",
                                                        "match": "98%",
                                                        "productImg": "images/prod_brand_acc_젠틀몬스터.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%A0%A0%ED%8B%80%EB%AA%AC%EC%8A%A4%ED%84%B0"
                                                },
                                                {
                                                        "productName": "クロムハーツ",
                                                        "productDesc": "강렬하고 반항적인 하이엔드 실버 주얼리",
                                                        "price": "-",
                                                        "match": "94%",
                                                        "productImg": "images/prod_brand_acc_크롬하츠.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%81%AC%EB%A1%AC%ED%95%98%EC%B8%A0"
                                                },
                                                {
                                                        "productName": "ヴィヴィアン・ウエストウッド",
                                                        "productDesc": "펑크와 로맨틱 요소가 결합된 아이코닉 디자인",
                                                        "price": "-",
                                                        "match": "89%",
                                                        "productImg": "images/prod_brand_acc_비비안_웨스트우드.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%B9%84%EB%B9%84%EC%95%88%20%EC%9B%A8%EC%8A%A4%ED%8A%B8%EC%9A%B0%EB%93%9C"
                                                },
                                                {
                                                        "productName": "ボッテガ・ヴェネタ",
                                                        "productDesc": "로고를 지운 인트레치아토 가죽의 세련됨",
                                                        "price": "-",
                                                        "match": "84%",
                                                        "productImg": "images/prod_brand_acc_보테가_베네타.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%B3%B4%ED%85%8C%EA%B0%80%20%EB%B2%A0%EB%84%A4%ED%83%80"
                                                },
                                                {
                                                        "productName": "メゾン・マルジェラ",
                                                        "productDesc": "스티치 디테일과 해체주의적 감성",
                                                        "price": "-",
                                                        "match": "79%",
                                                        "productImg": "images/prod_brand_acc_마르지엘라.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%A7%88%EB%A5%B4%EC%A7%80%EC%97%98%EB%9D%BC"
                                                }
                                        ]
                                }
                        },
                        "type_B_A": {
                                "ko": {
                                        "title": "기능성 테크놀로지",
                                        "desc": "가볍고 질기며 완벽한 수납! 비즈니스와 일상을 빈틈없이 서포트하는 기능성 브랜드입니다.",
                                        "products": [
                                                {
                                                        "productName": "투미",
                                                        "productDesc": "압도적 내구성과 완벽한 비즈니스 스펙",
                                                        "price": "-",
                                                        "match": "97%",
                                                        "productImg": "images/prod_brand_acc_투미.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%88%AC%EB%AF%B8"
                                                },
                                                {
                                                        "productName": "샘소나이트",
                                                        "productDesc": "안정적이고 실용적인 여행의 동반자",
                                                        "price": "-",
                                                        "match": "93%",
                                                        "productImg": "images/prod_brand_acc_샘소나이트.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%83%98%EC%86%8C%EB%82%98%EC%9D%B4%ED%8A%B8"
                                                },
                                                {
                                                        "productName": "포터",
                                                        "productDesc": "장인정신과 군사적 실용성, 캐주얼 나일론",
                                                        "price": "-",
                                                        "match": "88%",
                                                        "productImg": "images/prod_brand_acc_포터.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%8F%AC%ED%84%B0"
                                                },
                                                {
                                                        "productName": "매킨토시",
                                                        "productDesc": "브리티시 클래식 방수/방풍의 미학",
                                                        "price": "-",
                                                        "match": "84%",
                                                        "productImg": "images/prod_brand_acc_매킨토시.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%A7%A4%ED%82%A8%ED%86%A0%EC%8B%9C"
                                                },
                                                {
                                                        "productName": "아크테릭스",
                                                        "productDesc": "절제된 디자인과 극강의 고프코어 테크",
                                                        "price": "-",
                                                        "match": "80%",
                                                        "productImg": "images/prod_brand_acc_아크테릭스.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%95%84%ED%81%AC%ED%85%8C%EB%A6%AD%EC%8A%A4"
                                                }
                                        ]
                                },
                                "ja": {
                                        "title": "機能性テクノロジー",
                                        "desc": "軽快で丈夫、完璧な収納！ビジネスと日常を支える機能性ブランドです。",
                                        "products": [
                                                {
                                                        "productName": "トゥミ",
                                                        "productDesc": "압도적 내구성과 완벽한 비즈니스 스펙",
                                                        "price": "-",
                                                        "match": "97%",
                                                        "productImg": "images/prod_brand_acc_투미.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%88%AC%EB%AF%B8"
                                                },
                                                {
                                                        "productName": "サムソナイト",
                                                        "productDesc": "안정적이고 실용적인 여행의 동반자",
                                                        "price": "-",
                                                        "match": "93%",
                                                        "productImg": "images/prod_brand_acc_샘소나이트.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%83%98%EC%86%8C%EB%82%98%EC%9D%B4%ED%8A%B8"
                                                },
                                                {
                                                        "productName": "ポーター",
                                                        "productDesc": "장인정신과 군사적 실용성, 캐주얼 나일론",
                                                        "price": "-",
                                                        "match": "88%",
                                                        "productImg": "images/prod_brand_acc_포터.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%8F%AC%ED%84%B0"
                                                },
                                                {
                                                        "productName": "マッキントッシュ",
                                                        "productDesc": "브리티시 클래식 방수/방풍의 미학",
                                                        "price": "-",
                                                        "match": "84%",
                                                        "productImg": "images/prod_brand_acc_매킨토시.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%A7%A4%ED%82%A8%ED%86%A0%EC%8B%9C"
                                                },
                                                {
                                                        "productName": "アークテリクス",
                                                        "productDesc": "절제된 디자인과 극강의 고프코어 테크",
                                                        "price": "-",
                                                        "match": "80%",
                                                        "productImg": "images/prod_brand_acc_아크테릭스.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%95%84%ED%81%AC%ED%85%8C%EB%A6%AD%EC%8A%A4"
                                                }
                                        ]
                                }
                        },
                        "type_B_B": {
                                "ko": {
                                        "title": "에코 & 스트릿",
                                        "desc": "재사용 소재, 오가닉 라이프, 그리고 자유로운 스트릿 무드를 담은 데일리 악세서리입니다.",
                                        "products": [
                                                {
                                                        "productName": "프라이탁",
                                                        "productDesc": "재활용 방수천으로 만든 세상에 하나뿐인 가방",
                                                        "price": "-",
                                                        "match": "98%",
                                                        "productImg": "images/prod_brand_acc_프라이탁.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%94%84%EB%9D%BC%EC%9D%B4%ED%83%81"
                                                },
                                                {
                                                        "productName": "슈프림",
                                                        "productDesc": "스트릿 컬쳐를 상징하는 강력한 박스로고",
                                                        "price": "-",
                                                        "match": "93%",
                                                        "productImg": "images/prod_brand_acc_슈프림.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%8A%88%ED%94%84%EB%A6%BC"
                                                },
                                                {
                                                        "productName": "파타고니아",
                                                        "productDesc": "자연을 사랑하는 오가닉 라이프스타일",
                                                        "price": "-",
                                                        "match": "89%",
                                                        "productImg": "images/prod_brand_acc_파타고니아.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%8C%8C%ED%83%80%EA%B3%A0%EB%8B%88%EC%95%84"
                                                },
                                                {
                                                        "productName": "메종 키츠네",
                                                        "productDesc": "파리지앵 무드의 여유로운 캔버스 백",
                                                        "price": "-",
                                                        "match": "84%",
                                                        "productImg": "images/prod_brand_acc_메종_키츠네.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%A9%94%EC%A2%85%20%ED%82%A4%EC%B8%A0%EB%84%A4"
                                                },
                                                {
                                                        "productName": "스탠리",
                                                        "productDesc": "지속가능성과 트렌드를 모두 잡은 텀블러",
                                                        "price": "-",
                                                        "match": "80%",
                                                        "productImg": "images/prod_brand_acc_스탠리.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%8A%A4%ED%83%A0%EB%A6%AC"
                                                }
                                        ]
                                },
                                "ja": {
                                        "title": "エコ＆ストリート",
                                        "desc": "リサイクル素材やオーガニックライフ、自由なストリートの雰囲気を持ったデイリーアクセサリーです。",
                                        "products": [
                                                {
                                                        "productName": "フライターグ",
                                                        "productDesc": "재활용 방수천으로 만든 세상에 하나뿐인 가방",
                                                        "price": "-",
                                                        "match": "98%",
                                                        "productImg": "images/prod_brand_acc_프라이탁.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%94%84%EB%9D%BC%EC%9D%B4%ED%83%81"
                                                },
                                                {
                                                        "productName": "シュプリーム",
                                                        "productDesc": "스트릿 컬쳐를 상징하는 강력한 박스로고",
                                                        "price": "-",
                                                        "match": "93%",
                                                        "productImg": "images/prod_brand_acc_슈프림.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%8A%88%ED%94%84%EB%A6%BC"
                                                },
                                                {
                                                        "productName": "パタゴニア",
                                                        "productDesc": "자연을 사랑하는 오가닉 라이프스타일",
                                                        "price": "-",
                                                        "match": "89%",
                                                        "productImg": "images/prod_brand_acc_파타고니아.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%8C%8C%ED%83%80%EA%B3%A0%EB%8B%88%EC%95%84"
                                                },
                                                {
                                                        "productName": "メゾンキツネ",
                                                        "productDesc": "파리지앵 무드의 여유로운 캔버스 백",
                                                        "price": "-",
                                                        "match": "84%",
                                                        "productImg": "images/prod_brand_acc_메종_키츠네.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%A9%94%EC%A2%85%20%ED%82%A4%EC%B8%A0%EB%84%A4"
                                                },
                                                {
                                                        "productName": "スタンレー",
                                                        "productDesc": "지속가능성과 트렌드를 모두 잡은 텀블러",
                                                        "price": "-",
                                                        "match": "80%",
                                                        "productImg": "images/prod_brand_acc_스탠리.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%8A%A4%ED%83%A0%EB%A6%AC"
                                                }
                                        ]
                                }
                        }
                }
        },
        brand_casual: {
                "questions": [
                        {
                                "a": "images/quiz_brand_casual_q1_a.jpg",
                                "b": "images/quiz_brand_casual_q1_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_casual_q2_a.jpg",
                                "b": "images/quiz_brand_casual_q2_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_casual_q3_a.jpg",
                                "b": "images/quiz_brand_casual_q3_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_casual_q4_a.jpg",
                                "b": "images/quiz_brand_casual_q4_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_casual_q5_a.jpg",
                                "b": "images/quiz_brand_casual_q5_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_casual_q6_a.jpg",
                                "b": "images/quiz_brand_casual_q6_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_casual_q7_a.jpg",
                                "b": "images/quiz_brand_casual_q7_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_casual_q8_a.jpg",
                                "b": "images/quiz_brand_casual_q8_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_casual_q9_a.jpg",
                                "b": "images/quiz_brand_casual_q9_b.jpg"
                        },
                        {
                                "a": "images/quiz_brand_casual_q10_a.jpg",
                                "b": "images/quiz_brand_casual_q10_b.jpg"
                        }
                ],
                "results": {
                        "type_A_A": {
                                "ko": {
                                        "title": "하드코어 스트릿",
                                        "desc": "스케이트보드와 언더그라운드 컬처. 거칠고 자유로운 분위기의 메가 히트 스트릿 브랜드.",
                                        "products": [
                                                {
                                                        "productName": "스투시",
                                                        "productDesc": "스케이트보드와 서퍼가 낳은 스트릿 제왕",
                                                        "price": "-",
                                                        "match": "99%",
                                                        "productImg": "images/prod_brand_casual_스투시.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%8A%A4%ED%88%AC%EC%8B%9C"
                                                },
                                                {
                                                        "productName": "슈프림",
                                                        "productDesc": "대체 불가능한 하입과 팬덤의 상징",
                                                        "price": "-",
                                                        "match": "95%",
                                                        "productImg": "images/prod_brand_casual_슈프림.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%8A%88%ED%94%84%EB%A6%BC"
                                                },
                                                {
                                                        "productName": "팔라스",
                                                        "productDesc": "영국판 슈프림, 자유롭고 위트 넘치는 스트릿",
                                                        "price": "-",
                                                        "match": "90%",
                                                        "productImg": "images/prod_brand_casual_팔라스.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%8C%94%EB%9D%BC%EC%8A%A4"
                                                },
                                                {
                                                        "productName": "칼하트 WIP",
                                                        "productDesc": "워크웨어 기반의 견고한 빈티지 스트릿",
                                                        "price": "-",
                                                        "match": "86%",
                                                        "productImg": "images/prod_brand_casual_칼하트_WIP.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%B9%BC%ED%95%98%ED%8A%B8%20WIP"
                                                },
                                                {
                                                        "productName": "베이프",
                                                        "productDesc": "화려한 카모플라쥬와 일본 우라하라 감성",
                                                        "price": "-",
                                                        "match": "81%",
                                                        "productImg": "images/prod_brand_casual_베이프.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%B2%A0%EC%9D%B4%ED%94%84"
                                                }
                                        ]
                                },
                                "ja": {
                                        "title": "ハードコア・ストリート",
                                        "desc": "スケートボードとアンダーグラウンドカルチャー。ワイルドで自由な雰囲気を持つメガヒットストリートブランド。",
                                        "products": [
                                                {
                                                        "productName": "ステューシー",
                                                        "productDesc": "스케이트보드와 서퍼가 낳은 스트릿 제왕",
                                                        "price": "-",
                                                        "match": "99%",
                                                        "productImg": "images/prod_brand_casual_스투시.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%8A%A4%ED%88%AC%EC%8B%9C"
                                                },
                                                {
                                                        "productName": "シュプリーム",
                                                        "productDesc": "대체 불가능한 하입과 팬덤의 상징",
                                                        "price": "-",
                                                        "match": "95%",
                                                        "productImg": "images/prod_brand_casual_슈프림.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%8A%88%ED%94%84%EB%A6%BC"
                                                },
                                                {
                                                        "productName": "パレス",
                                                        "productDesc": "영국판 슈프림, 자유롭고 위트 넘치는 스트릿",
                                                        "price": "-",
                                                        "match": "90%",
                                                        "productImg": "images/prod_brand_casual_팔라스.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%8C%94%EB%9D%BC%EC%8A%A4"
                                                },
                                                {
                                                        "productName": "カーハート WIP",
                                                        "productDesc": "워크웨어 기반의 견고한 빈티지 스트릿",
                                                        "price": "-",
                                                        "match": "86%",
                                                        "productImg": "images/prod_brand_casual_칼하트_WIP.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%B9%BC%ED%95%98%ED%8A%B8%20WIP"
                                                },
                                                {
                                                        "productName": "A BATHING APE",
                                                        "productDesc": "화려한 카모플라쥬와 일본 우라하라 감성",
                                                        "price": "-",
                                                        "match": "81%",
                                                        "productImg": "images/prod_brand_casual_베이프.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%B2%A0%EC%9D%B4%ED%94%84"
                                                }
                                        ]
                                }
                        },
                        "type_A_B": {
                                "ko": {
                                        "title": "애슬레저 & 스포티",
                                        "desc": "편안함이 최고의 멋! 활동성과 실용성을 겸비한 스포티 데일리 룩입니다.",
                                        "products": [
                                                {
                                                        "productName": "나이키",
                                                        "productDesc": "스포츠를 넘어선 일상의 강력한 존재감",
                                                        "price": "-",
                                                        "match": "98%",
                                                        "productImg": "images/prod_brand_casual_나이키.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%82%98%EC%9D%B4%ED%82%A4"
                                                },
                                                {
                                                        "productName": "아디다스",
                                                        "productDesc": "오리지널 트레포일 로고의 레트로 매력",
                                                        "price": "-",
                                                        "match": "94%",
                                                        "productImg": "images/prod_brand_casual_아디다스.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%95%84%EB%94%94%EB%8B%A4%EC%8A%A4"
                                                },
                                                {
                                                        "productName": "뉴발란스",
                                                        "productDesc": "편안한 착용감의 미니멀 데일리 애슬레저",
                                                        "price": "-",
                                                        "match": "89%",
                                                        "productImg": "images/prod_brand_casual_뉴발란스.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%89%B4%EB%B0%9C%EB%9E%80%EC%8A%A4"
                                                },
                                                {
                                                        "productName": "룰루레몬",
                                                        "productDesc": "몸을 감싸는 프리미엄 애슬레저 룩",
                                                        "price": "-",
                                                        "match": "85%",
                                                        "productImg": "images/prod_brand_casual_룰루레몬.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%A3%B0%EB%A3%A8%EB%A0%88%EB%AA%AC"
                                                },
                                                {
                                                        "productName": "챔피온",
                                                        "productDesc": "원조 스웻셔츠가 주는 묵직한 오리지널리티",
                                                        "price": "-",
                                                        "match": "80%",
                                                        "productImg": "images/prod_brand_casual_챔피온.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%B1%94%ED%94%BC%EC%98%A8"
                                                }
                                        ]
                                },
                                "ja": {
                                        "title": "アスレジャー＆スポーティ",
                                        "desc": "快適さこそ最高のオシャレ！活動性と実用性を兼ね備えたスポーティなデイリールックです。",
                                        "products": [
                                                {
                                                        "productName": "ナイキ",
                                                        "productDesc": "스포츠를 넘어선 일상의 강력한 존재감",
                                                        "price": "-",
                                                        "match": "98%",
                                                        "productImg": "images/prod_brand_casual_나이키.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%82%98%EC%9D%B4%ED%82%A4"
                                                },
                                                {
                                                        "productName": "アディダス",
                                                        "productDesc": "오리지널 트레포일 로고의 레트로 매력",
                                                        "price": "-",
                                                        "match": "94%",
                                                        "productImg": "images/prod_brand_casual_아디다스.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%95%84%EB%94%94%EB%8B%A4%EC%8A%A4"
                                                },
                                                {
                                                        "productName": "ニューバランス",
                                                        "productDesc": "편안한 착용감의 미니멀 데일리 애슬레저",
                                                        "price": "-",
                                                        "match": "89%",
                                                        "productImg": "images/prod_brand_casual_뉴발란스.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%89%B4%EB%B0%9C%EB%9E%80%EC%8A%A4"
                                                },
                                                {
                                                        "productName": "ルルレモン",
                                                        "productDesc": "몸을 감싸는 프리미엄 애슬레저 룩",
                                                        "price": "-",
                                                        "match": "85%",
                                                        "productImg": "images/prod_brand_casual_룰루레몬.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%A3%B0%EB%A3%A8%EB%A0%88%EB%AA%AC"
                                                },
                                                {
                                                        "productName": "チャンピオン",
                                                        "productDesc": "원조 스웻셔츠가 주는 묵직한 오리지널리티",
                                                        "price": "-",
                                                        "match": "80%",
                                                        "productImg": "images/prod_brand_casual_챔피온.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%B1%94%ED%94%BC%EC%98%A8"
                                                }
                                        ]
                                }
                        },
                        "type_B_A": {
                                "ko": {
                                        "title": "클래식 프레피",
                                        "desc": "단정함 속의 여유. 유행을 타지 않고 늘 깔끔한 아메리칸 또는 프렌치 캐주얼입니다.",
                                        "products": [
                                                {
                                                        "productName": "폴로 랄프 로렌",
                                                        "productDesc": "영원한 아메리칸 클래식 프레피의 정석",
                                                        "price": "-",
                                                        "match": "99%",
                                                        "productImg": "images/prod_brand_casual_폴로_랄프_로렌.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%8F%B4%EB%A1%9C%20%EB%9E%84%ED%94%84%20%EB%A1%9C%EB%A0%8C"
                                                },
                                                {
                                                        "productName": "타미 힐피거",
                                                        "productDesc": "밝고 쿨한 아메리칸 캐주얼 라이프",
                                                        "price": "-",
                                                        "match": "94%",
                                                        "productImg": "images/prod_brand_casual_타미_힐피거.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%83%80%EB%AF%B8%20%ED%9E%90%ED%94%BC%EA%B1%B0"
                                                },
                                                {
                                                        "productName": "라코스테",
                                                        "productDesc": "우아하고 깨끗한 핏의 프렌치 스포티 캐주얼",
                                                        "price": "-",
                                                        "match": "89%",
                                                        "productImg": "images/prod_brand_casual_라코스테.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%9D%BC%EC%BD%94%EC%8A%A4%ED%85%8C"
                                                },
                                                {
                                                        "productName": "브룩스 브라더스",
                                                        "productDesc": "전통과 포멀함을 유지하는 단정한 옷장",
                                                        "price": "-",
                                                        "match": "84%",
                                                        "productImg": "images/prod_brand_casual_브룩스_브라더스.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%B8%8C%EB%A3%A9%EC%8A%A4%20%EB%B8%8C%EB%9D%BC%EB%8D%94%EC%8A%A4"
                                                },
                                                {
                                                        "productName": "메종 키츠네",
                                                        "productDesc": "여우 로고로 완성하는 깔끔한 프렌치 데일리",
                                                        "price": "-",
                                                        "match": "80%",
                                                        "productImg": "images/prod_brand_casual_메종_키츠네.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%A9%94%EC%A2%85%20%ED%82%A4%EC%B8%A0%EB%84%A4"
                                                }
                                        ]
                                },
                                "ja": {
                                        "title": "クラシック・プレッピー",
                                        "desc": "端正さの中の余裕。流行に左右されず、常にクリーンなアメリカンやフレンチカジュアルです。",
                                        "products": [
                                                {
                                                        "productName": "ポロ ラルフローレン",
                                                        "productDesc": "영원한 아메리칸 클래식 프레피의 정석",
                                                        "price": "-",
                                                        "match": "99%",
                                                        "productImg": "images/prod_brand_casual_폴로_랄프_로렌.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%8F%B4%EB%A1%9C%20%EB%9E%84%ED%94%84%20%EB%A1%9C%EB%A0%8C"
                                                },
                                                {
                                                        "productName": "トミーヒルフィガー",
                                                        "productDesc": "밝고 쿨한 아메리칸 캐주얼 라이프",
                                                        "price": "-",
                                                        "match": "94%",
                                                        "productImg": "images/prod_brand_casual_타미_힐피거.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%83%80%EB%AF%B8%20%ED%9E%90%ED%94%BC%EA%B1%B0"
                                                },
                                                {
                                                        "productName": "ラコステ",
                                                        "productDesc": "우아하고 깨끗한 핏의 프렌치 스포티 캐주얼",
                                                        "price": "-",
                                                        "match": "89%",
                                                        "productImg": "images/prod_brand_casual_라코스테.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%9D%BC%EC%BD%94%EC%8A%A4%ED%85%8C"
                                                },
                                                {
                                                        "productName": "ブルックス ブラザーズ",
                                                        "productDesc": "전통과 포멀함을 유지하는 단정한 옷장",
                                                        "price": "-",
                                                        "match": "84%",
                                                        "productImg": "images/prod_brand_casual_브룩스_브라더스.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%B8%8C%EB%A3%A9%EC%8A%A4%20%EB%B8%8C%EB%9D%BC%EB%8D%94%EC%8A%A4"
                                                },
                                                {
                                                        "productName": "メゾンキツネ",
                                                        "productDesc": "여우 로고로 완성하는 깔끔한 프렌치 데일리",
                                                        "price": "-",
                                                        "match": "80%",
                                                        "productImg": "images/prod_brand_casual_메종_키츠네.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%A9%94%EC%A2%85%20%ED%82%A4%EC%B8%A0%EB%84%A4"
                                                }
                                        ]
                                }
                        },
                        "type_B_B": {
                                "ko": {
                                        "title": "아웃도어 고프코어",
                                        "desc": "자연을 탐험하는 기술력으로 도심을 점령한 멋진 아ウト도어 베이스업 어패럴.",
                                        "products": [
                                                {
                                                        "productName": "파타고니아",
                                                        "productDesc": "지구를 구하기 위해 옷을 만드는 브랜드",
                                                        "price": "-",
                                                        "match": "98%",
                                                        "productImg": "images/prod_brand_casual_파타고니아.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%8C%8C%ED%83%80%EA%B3%A0%EB%8B%88%EC%95%84"
                                                },
                                                {
                                                        "productName": "노스페이스",
                                                        "productDesc": "도시와 산을 모두 덮은 강력한 방한복",
                                                        "price": "-",
                                                        "match": "94%",
                                                        "productImg": "images/prod_brand_casual_노스페이스.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%85%B8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4"
                                                },
                                                {
                                                        "productName": "아크테릭스",
                                                        "productDesc": "극한 성능과 도심형 고프코어의 최정점",
                                                        "price": "-",
                                                        "match": "90%",
                                                        "productImg": "images/prod_brand_casual_아크테릭스.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%95%84%ED%81%AC%ED%85%8C%EB%A6%AD%EC%8A%A4"
                                                },
                                                {
                                                        "productName": "스노우피크",
                                                        "productDesc": "캠핑의 안락함을 옷으로 구현한 어패럴",
                                                        "price": "-",
                                                        "match": "85%",
                                                        "productImg": "images/prod_brand_casual_스노우피크.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%8A%A4%EB%85%B8%EC%9A%B0%ED%94%BC%ED%81%AC"
                                                },
                                                {
                                                        "productName": "살로몬",
                                                        "productDesc": "트레일 러닝 기술을 이식한 고프코어 필수품",
                                                        "price": "-",
                                                        "match": "81%",
                                                        "productImg": "images/prod_brand_casual_살로몬.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%82%B4%EB%A1%9C%EB%AA%AC"
                                                }
                                        ]
                                },
                                "ja": {
                                        "title": "アウトドア・ゴープコア",
                                        "desc": "自然を探求する技術力で都市を占拠したかっこいいアウトドアベースのウェア。",
                                        "products": [
                                                {
                                                        "productName": "パタゴニア",
                                                        "productDesc": "지구를 구하기 위해 옷을 만드는 브랜드",
                                                        "price": "-",
                                                        "match": "98%",
                                                        "productImg": "images/prod_brand_casual_파타고니아.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%ED%8C%8C%ED%83%80%EA%B3%A0%EB%8B%88%EC%95%84"
                                                },
                                                {
                                                        "productName": "ザ・ノース・フェイス",
                                                        "productDesc": "도시와 산을 모두 덮은 강력한 방한복",
                                                        "price": "-",
                                                        "match": "94%",
                                                        "productImg": "images/prod_brand_casual_노스페이스.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EB%85%B8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4"
                                                },
                                                {
                                                        "productName": "アークテリクス",
                                                        "productDesc": "극한 성능과 도심형 고프코어의 최정점",
                                                        "price": "-",
                                                        "match": "90%",
                                                        "productImg": "images/prod_brand_casual_아크테릭스.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%95%84%ED%81%AC%ED%85%8C%EB%A6%AD%EC%8A%A4"
                                                },
                                                {
                                                        "productName": "スノーピーク",
                                                        "productDesc": "캠핑의 안락함을 옷으로 구현한 어패럴",
                                                        "price": "-",
                                                        "match": "85%",
                                                        "productImg": "images/prod_brand_casual_스노우피크.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%8A%A4%EB%85%B8%EC%9A%B0%ED%94%BC%ED%81%AC"
                                                },
                                                {
                                                        "productName": "サロモン",
                                                        "productDesc": "트레일 러닝 기술을 이식한 고프코어 필수품",
                                                        "price": "-",
                                                        "match": "81%",
                                                        "productImg": "images/prod_brand_casual_살로몬.jpg",
                                                        "buyLink": "https://shopping.yahoo.co.jp/search?p=%EC%82%B4%EB%A1%9C%EB%AA%AC"
                                                }
                                        ]
                                }
                        }
                }
        }
};
// Quiz Navigation Logic
let currentCategory = '';
let currentQuestionIndex = 0;
let userAnswers = [];

window.startQuiz = function (category) {
        currentCategory = category;
        currentQuestionIndex = 0;
        userAnswers = [];
        updateQuizUI();
        showScreen('screen-quiz');
};

function updateQuizUI() {
        const categoryData = quizData[currentCategory];
        const totalQuestions = categoryData.questions.length;

        document.getElementById('quiz-progress').innerText = `${currentQuestionIndex + 1} / ${totalQuestions}`;

        const q = categoryData.questions[currentQuestionIndex];

        // Add fade out/in effect
        const container = document.querySelector('.ab-test-container');
        container.style.opacity = '0.5';

        setTimeout(() => {
                document.getElementById('img-option-a').src = q.a;
                document.getElementById('img-option-b').src = q.b;
                container.style.opacity = '1';
        }, 150);
}

window.selectOption = function (option) {
        userAnswers.push(option);
        const categoryData = quizData[currentCategory];

        if (currentQuestionIndex < categoryData.questions.length - 1) {
                currentQuestionIndex++;
                updateQuizUI();
        } else {
                showResult();
        }
};

window.showResult = function () {
        // Go to Analyzing screen
        showScreen('screen-analyzing');

        const analyzeMsgs = {
                ko: [
                        "선택하신 10가지 성향을 분석 중입니다...",
                        "디자인 요소를 추출하고 있습니다...",
                        "취향 큐레이션 알고리즘을 가동 중입니다...",
                        "결과를 생성했습니다."
                ],
                ja: [
                        "選択された10の傾向を分析中です...",
                        "デザイン要素を抽出しています...",
                        "好みのキュレーションアルゴリズムが稼働中です...",
                        "結果を生成しました。"
                ]
        };
        let msgIndex = 0;
        const msgEl = document.getElementById('t-analyze-msg');
        if (msgEl) msgEl.innerText = analyzeMsgs[uiLang][0];

        const interval = setInterval(() => {
                msgIndex++;
                if (msgIndex < analyzeMsgs[uiLang].length) {
                        if (msgEl) msgEl.innerText = analyzeMsgs[uiLang][msgIndex];
                } else {
                        clearInterval(interval);
                        displayFinalResult();
                }
        }, 800);
};

function displayFinalResult() {
        const categoryData = quizData[currentCategory];

        // --- AI Tree Logic ---
        // 10개의 문항을 크게 2가지 축(Dimension)으로 나눠 분석합니다.
        // 축 1 (형태 및 텍스처 선호도: 1~5번 문항)
        const attr1_A_count = userAnswers.slice(0, 5).filter(ans => ans === 'A').length;
        // 축 2 (기능성 및 분위기 선호도: 6~10번 문항)
        const attr2_A_count = userAnswers.slice(5, 10).filter(ans => ans === 'A').length;

        const isA1 = attr1_A_count >= 3;
        const isA2 = attr2_A_count >= 3;

        // Tree Navigation: 총 4가지 형태의 조합 결과 도출 
        let resultKey = "type_B_B";
        if (isA1 && isA2) resultKey = "type_A_A";
        else if (isA1 && !isA2) resultKey = "type_A_B";
        else if (!isA1 && isA2) resultKey = "type_B_A";

        const res = categoryData.results[resultKey][uiLang];

        const productsHTML = res.products.map(p => `
            <div class="product-card-vertical">
                <img src="${p.productImg}" class="product-img" alt="${p.productName}">
                <div class="product-card-info">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                        <div>
                            <h3>${p.productName}</h3>
                            <p class="desc">${p.productDesc}</p>
                        </div>
                        <span class="badge-black">MATCH ${p.match}</span>
                    </div>
                    <div class="price-row" style="display:flex; justify-content:space-between; align-items:center; margin-top:12px;">
                        <span class="price">${p.price}</span>
                        <a href="${p.buyLink}" target="_blank" class="btn-black-small" style="padding: 6px 14px; background-color: #000; color: #fff; font-size: 11px; text-decoration: none; border-radius: 4px; font-weight: 500; display: inline-block; white-space: nowrap;">
                            ${uiTranslations['shop_now'][uiLang] || 'SHOP NOW'}
                        </a>
                    </div>
                    <div style="margin-top: 8px; text-align: right;">
                        <a href="https://shopping.yahoo.co.jp/search?p=${encodeURIComponent(res.title)}" target="_blank" style="font-size: 11px; color: #666; text-decoration: underline;">
                            ${uiTranslations['find_alt'] ? uiTranslations['find_alt'][uiLang] : 'Find Alternatives'}
                        </a>
                    </div>
                </div>
            </div>
        `).join('');

        const resultContent = document.getElementById('result-content');
        resultContent.innerHTML = `
            <div class="buying-point-card">
                <h3><i data-feather="check"></i> ${res.title}</h3>
                <p>${res.desc}</p>
            </div>
            ${productsHTML}
        `;
        feather.replace();
        showScreen('screen-result');
}
