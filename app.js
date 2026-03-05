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
},
    , 800);
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
