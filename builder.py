import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

def get_header(active_tab):
    tabs = ['게임', '스포츠', '패션', '키친', '인테리어']
    chips = ''
    for t in tabs:
        if t == active_tab:
            chips += f'<button class="feed-chip active" onclick="switchTab(\'{t}\')">{t}</button>'
        else:
            chips += f'<button class="feed-chip" onclick="switchTab(\'{t}\')">{t}</button>'
            
    return f'''
<div class="feed-header">
    <h1 class="header-logo">Shopping Ai</h1>
    <div class="feed-actions">
        <svg width="24" height="24" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="search_solid" fill-rule="evenodd" clip-rule="evenodd" d="M14.512 7.257C14.512 8.897 13.958 10.407 13.037 11.623L18.057 16.643L16.643 18.057L11.623 13.037C10.406 13.959 8.897 14.513 7.256 14.513C3.255 14.513 0 11.258 0 7.257C0 3.256 3.255 0 7.256 0C11.257 0 14.512 3.256 14.512 7.257ZM7.256 2C4.358 2 2 4.358 2 7.257C2 10.155 4.358 12.513 7.256 12.513C10.154 12.513 12.512 10.155 12.512 7.257C12.512 4.358 10.154 2 7.256 2Z" fill="#17181A"/>
        </svg>
        <img src="images/6cf779209837fe69c1fd4ccbb5d0abc91833f717.png" class="avatar" style="border:1px solid #ddd; object-fit:cover;" alt="Avatar"/>
    </div>
</div>
<div class="chip-scroll">
    <button class="feed-chip icon-chip">
        <svg width="20" height="20" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="sliders-horizonal_solid" fill-rule="evenodd" clip-rule="evenodd" d="M7.50667 0C8.325 0 9.01833 0.519167 9.29 1.24333H11.4V2.57583H9.29C9.01833 3.30083 8.325 3.82 7.50667 3.82C6.68833 3.82 5.995 3.30083 5.72333 2.57583H0V1.24333H5.72333C5.995 0.519167 6.68833 0 7.50667 0ZM7.50667 2.48667C7.18833 2.48667 6.93 2.2275 6.93 1.91C6.93 1.59167 7.18833 1.3325 7.50667 1.3325C7.825 1.3325 8.08333 1.59167 8.08333 1.91C8.08333 2.2275 7.825 2.48667 7.50667 2.48667ZM0 7.16617H11.4V5.83283H0V7.16617ZM3.89333 11.6663C3.575 11.6663 3.31667 11.4072 3.31667 11.0897C3.31667 10.7713 3.575 10.5122 3.89333 10.5122C4.21167 10.5122 4.47 10.7713 4.47 11.0897C4.47 11.4072 4.21167 11.6663 3.89333 11.6663ZM2.11 10.423C2.38167 9.69883 3.075 9.17967 3.89333 9.17967C4.71167 9.17967 5.405 9.69883 5.67667 10.423H11.4V11.7555H5.67667C5.405 12.4805 4.71167 12.9997 3.89333 12.9997C3.075 12.9997 2.38167 12.4805 2.11 11.7555H0V10.423H2.11Z" fill="#17181A"/>
        </svg>
    </button>
    <button class="feed-chip" style="color:#17181a; background: #F6F6F6;">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4035 6.16392C15.0646 5.72745 14.4549 5.6527 14.0311 5.99994L9.15383 10.1596C9.05496 10.2392 8.91843 10.2392 8.82191 10.1548L6.09581 8.08826C5.68386 7.73379 5.08357 7.7579 4.69986 8.14614C4.48329 8.36316 4.375 8.65494 4.375 8.94672C4.375 9.19509 4.45268 9.44347 4.61276 9.64844L8.36758 13.8707C8.77012 14.3241 9.45045 14.3361 9.86711 13.8973L15.3353 7.5553C15.6931 7.17912 15.7237 6.57386 15.4035 6.16392Z" fill="#17181A"/></svg>
        AI Pick
    </button>
    {chips}
</div>
'''

def card_html(x, y, w, h, bg, badge, text, img_src=None, img_style='', extras='', yt=False, cross=True, color='white'):
    top = y - 146
    card_str = f'''<div class="feed-card" style="position: absolute; left: {x}px; top: {top}px; width: {w}px; height: {h}px; background: {bg}; border-radius: 16px; overflow: hidden; color: {color};">'''
    if badge:
        card_str += f'<span class="badge" style="z-index: 5; font-size:11px; font-weight:700; position:absolute; top:16px; left:16px; margin: 0; letter-spacing: 0;">{badge}</span>'
    if cross:
        card_str += f'<span class="close-x" style="z-index: 5; position:absolute; top:16px; right:16px; cursor:pointer; width:20px; height:20px; display:flex; align-items:center; justify-content:center;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6808 1.17833L10.5025 0L5.84083 4.66167L1.17833 0L0 1.17833L4.6625 5.84L0 10.5017L1.17833 11.6808L5.84083 7.01833L10.5025 11.6808L11.6808 10.5017L7.01917 5.84L11.6808 1.17833Z" fill="{color}" fill-opacity="0.4"/></svg></span>'
    if img_src:
        card_str += f'<img src="{img_src}" style="{img_style}" />'
    if extras:
        card_str += extras
    if yt:
        card_str += f'''<div style="background: rgba(0,0,0,0.4); position:absolute; inset:0;"></div>'''
        card_str += f'''<div class="yt-play" style="top:50%; left:50%; transform:translate(-50%,-50%); width:48px; height:48px; position:absolute; z-index:3;">
                <svg viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg></div>
                <span class="yt-time" style="position:absolute; top:calc(50% + 30px); right:10px; font-size:11px; margin: 0; z-index: 5;">01:30</span>'''
    if text:
        card_str += f'<p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:15px; font-weight:800; line-height:1.2; text-shadow:0 2px 4px rgba(0,0,0,0.2); margin: 0; text-align: left; letter-spacing: -0.3px;">{text}</p>'
    card_str += '</div>'
    return card_str

game_cards = [
    card_html(16, 175, 174, 171, '#282e8b', 'PC GAMES', '승률을 바꾸는<br>최강 세팅', 'images/3af11f3dcf672c9b4903491a082063fc3bbb9287.png', 'position:absolute; left: 85px; top: 49px; width:110px; height:auto; object-fit:contain; opacity:0.9;'),
    card_html(200, 175, 174, 171, '#e70012', 'CONSOLES', '지금이 살 때<br>Switch 2', 'images/f20f8ba4e4f9ffd597b8b791eaa4fafb3b651c75.png', 'position:absolute; right:-60px; bottom:-30px; width:190px;'),
    card_html(16, 356, 174, 171, '#4c7df9', 'GAMING GEAR', '프로 사양<br>기어 특집', 'images/bdfa442346e670eb4ac457ba91ff00e1eff7aab6.png', 'position:absolute; right: -25px; bottom: -20px; width:123px; transform: scaleX(-1);'),
    card_html(200, 356, 174, 352, '#010212', '', 'Faker 셀렉트<br>2026 T1 우승템 특집', 'images/8a8f2c97240b2c25f73107ed67960f33515a8e46.png', 'position:absolute; width: 616px; left:-190px; top:-44px; max-width: none; opacity:0.6;', None, True, False),
    card_html(16, 537, 174, 171, '#202020', '', '', 'images/8d084f9cd61b8af0d9ed50f73076279220ae3dc5.png', 'position:absolute; width:119px; height:80px; object-fit:contain; bottom:15px; left: 27.5px;', "", False, False),
    card_html(16, 718, 358, 91, '#010c18', '', '프로가 쓰는 최강 세팅', 'images/dc537cf7ec9578f6e9624ff599e91173d523c8a3.png', 'position:absolute; top: 18px; left: 220px; width: 104px; height:53px; object-fit:contain;', None, False, False)
]
game_html = '<div style="position:relative; height: 680px;">' + ''.join(game_cards) + '</div>'

sports_cards = [
    card_html(16, 175, 174, 171, '#222138', 'TENNIS', '테니스<br>시작해볼까요', 'images/1b270d270fdb35cee2e2c97d12427e158ca2bc85.png', 'position:absolute; width:131px; height:142px; left: 70px; top: 48px; object-fit:cover;'),
    card_html(200, 175, 174, 171, '#213828', 'GOLF', '비거리 200야드<br>신소재 드라이버', 'images/fe3e8dc892ca1b216b02fb2f38e33ebcb3e34789.png', 'position:absolute; width:163px; height:204px; left:42px; top:-17px; object-fit:cover;', '<div style="position:absolute; bottom:0; left:0; right:0; height:114px; background:linear-gradient(to top, rgba(0,0,0,0.6), transparent);"></div>'),
    card_html(16, 356, 174, 171, '#97b9b8', 'RUNNING', '2026년 목표를 향한<br>러닝화', 'images/3939934e844e19c0205dbacae2d94d4d564bfc52.png', 'position:absolute; width:200px; height:200px; right:-50px; top:-5px; transform: scaleX(-1); object-fit:cover;', '<div style="position:absolute; bottom:0; left:0; right:0; height:95px; background:linear-gradient(to top, rgba(0,0,0,0.4), transparent);"></div>'),
    card_html(200, 356, 174, 352, '#010212', '', 'Naomi Osaka식<br>강타의 비결', 'images/397b8016f4fb3986abc42562d50bb175a946167a.png', 'position:absolute; width:357px; height:421px; left:-68px; top:31px; object-fit:cover; opacity: 0.8', '<div style="position:absolute; bottom:0; left:0; right:0; height:100px; background:linear-gradient(to top, rgba(0,0,0,0.4), transparent);"></div>', True, False),
    card_html(16, 537, 174, 171, '#f49caa', '', '', None, '', '<div style="position:absolute; top:40px; left:0; right:0; text-align:center;"><p style="font-size:32px; font-weight:900; color:rgba(255,255,255,0.4); margin:0;">SPRING</p><p style="font-size:32px; font-weight:900; color:white; margin:-10px 0; line-height:1.2;">20% OFF</p></div>', False, False),
    card_html(16, 718, 358, 91, '#466136', '', '초보자에게 인기있는<br>라켓 TOP5', 'images/1b2d9139889a6fced8b130e89b1707ea16f75a80.png', 'position:absolute; width:147px; height:221px; left:211px; top:-61px; object-fit:cover;', None, False, False)
]
sports_html = '<div style="position:relative; height: 680px;">' + ''.join(sports_cards) + '</div>'

fashion_cards = [
    card_html(16, 175, 174, 352, '#eaeaea', 'バッグ', '포터 x 르메르<br><span style="font-weight: normal; color:rgba(255,255,255,0.8);">레더 컬렉션 공개</span>', 'images/0a480fd69ed6b7d0470ca4942ba25022b6b4663e.png', 'position:absolute; width: 327px; height:440px; left:-124px; top:-82px; mix-blend-mode:multiply; object-fit:cover;', '', False, True, 'black'),
    card_html(200, 175, 174, 171, '#bdbebf', 'Stüssy', '2026 Spring', 'images/4ee4d3be59f0a707ea21a5ab5c2cb0ccfb0ec86c.png', 'position:absolute; width:174px; height:171px; left:0px; top:0px; object-fit:cover;', '', False, True),
    card_html(200, 356, 174, 171, '#25242c', 'COUPON', '', None, '', '<div style="position:absolute; top:70px; left:0; right:0; text-align:center;"><p style="font-size:24px; font-weight:900; color:white; margin:0;">30% OFF</p></div>', False, True),
    card_html(16, 537, 358, 91, '#355375', '', '#한정판<br>프라그먼트 x 나이키 북 2 공개', 'images/60377435440851c08f633eba2e9569cb74fa0248.png', 'position:absolute; width:364px; height:114px; left:-1px; top:-10px; object-fit:cover; mix-blend-mode: color-dodge;', None, False, True),
    card_html(16, 638, 174, 171, '#000', 'BEAMS', '2026年春の<br>리바이스 x 빔스<br>협업 컬렉션 출시', 'images/b47e35420a10978c1b796b1cbccd74d623b5c0fc.png', 'position:absolute; width:174px; height:171px; left:0px; top:0px; object-fit:cover; opacity:0.8;', '<div style="position:absolute; bottom:0; left:0; right:0; height:80px; background:linear-gradient(to top, rgba(0,0,0,0.8), transparent);"></div>', False, True),
    card_html(200, 638, 174, 171, '#000', 'アクセサリー', '클래시 드 까르띠에 컬렉션<br>옐로 골드 공개', 'images/ba5cbf5b981ef84560b765b0de11fbafe00cb268.png', 'position:absolute; width:174px; height:171px; left:0px; top:0px; object-fit:cover; opacity:0.9;', '<div style="position:absolute; bottom:0; left:0; right:0; height:80px; background:linear-gradient(to top, rgba(0,0,0,0.7), transparent);"></div>', False, True)
]
fashion_html = '<div style="position:relative; height: 680px;">' + ''.join(fashion_cards) + '</div>'

kitchen_cards = [
    card_html(16, 175, 174, 171, '#222138', '냄비', '2026 트렌드<br>키친웨어 모음', 'images/1baeb382aafba0a98c721a8ed94425e35305704e.png', 'position:absolute; width:107px; height:102px; left: 96px; top: 48px; object-fit:cover;'),
    card_html(200, 175, 174, 171, '#622121', '후라이팬', '스테이크를 이븐하게<br>굽는 후라이팬', 'images/a7f9f1718fc5ecf987d89908fdffebac9d6f5371.png', 'position:absolute; width:157px; height:74px; left: 63px; top: 47px; object-fit:cover;', '<div style="position:absolute; bottom:0; left:0; right:0; height:80px; background:linear-gradient(to top, rgba(0,0,0,0.4), transparent);"></div>'),
    card_html(16, 356, 174, 171, '#97b9b8', '멀티쿠커', '퇴근 후<br>가장 빠른 미식(美食)', 'images/3540db8dba331fe503fc44d0065db853f9283497.png', 'position:absolute; width:117px; height:117px; left: 57px; top: 19px; object-fit:cover;', '<div style="position:absolute; bottom:0; left:0; right:0; height:95px; background:linear-gradient(to top, rgba(0,0,0,0.4), transparent);"></div>'),
    card_html(200, 356, 174, 352, '#1f353f', '', '그랑메종 도쿄의<br>화제가 된 주방 아이템', 'images/a958eefb1b6f856c272750b696159d3806e2096f.png', 'position:absolute; width:574px; height:323px; left:-1px; top:30px; object-fit:cover;', '<div style="position:absolute; bottom:0; left:0; right:0; height:114px; background:linear-gradient(to top, rgba(0,0,0,0.6), transparent);"></div>', True, False),
    card_html(16, 537, 174, 171, '#2c3132', '', '', None, '', '<div style="position:absolute; top:40px; left:0; right:0; text-align:center;"><p style="font-size:32px; font-weight:900; color:rgba(255,255,255,0.4); margin:0;">SPRING</p><p style="font-size:32px; font-weight:900; color:white; margin:-10px 0; line-height:1.2;">20% OFF</p></div>', False, False),
    card_html(16, 718, 358, 91, '#0032be', '', '58만 인플루언서 까사림 콜라보!', 'images/fd795b966d00d7e719e8c157aec2458123b40761.png', 'position:absolute; width:108px; height:39px; right:12px; top:26px; object-fit:cover;', None, False, False)
]
kitchen_html = '<div style="position:relative; height: 680px;">' + ''.join(kitchen_cards) + '</div>'

js_function = f"""
        function getRecommendedCategory() {{
            const opts = selectedOptions.join(" ");
            if (opts.includes("top_spin") || opts.includes("casual_sports")) return "sports";
            if (opts.includes("classic_formal") || opts.includes("design_mood") || opts.includes("straight_drink") || opts.includes("sweet_soft")) return "fashion";
            if (opts.includes("function_practicality")) return "kitchen";
            return "game";
        }}

        function showResult() {{
            const appHeader = document.querySelector('.app-header');
            if (appHeader) appHeader.style.display = 'none';
            
            const progressContainer = document.querySelector('.progress-bar-container');
            if (progressContainer) progressContainer.style.display = 'none';

            const main = document.getElementById('main-content');
            main.className = 'main-content fade-in feed-mode scroll-hide';
            
            // Allow vertical scrolling inside main since cards are absolute
            main.style.overflowY = 'auto';

            const targetCategory = getRecommendedCategory();
            let categoryName = '';
            let htmlContent = '';
            
            if (targetCategory === 'sports') {{
                categoryName = '스포츠';
                htmlContent = `{sports_html}`;
            }} else if (targetCategory === 'fashion') {{
                categoryName = '패션';
                htmlContent = `{fashion_html}`;
            }} else if (targetCategory === 'kitchen') {{
                categoryName = '키친';
                htmlContent = `{kitchen_html}`;
            }} else {{
                categoryName = '게임';
                htmlContent = `{game_html}`;
            }}

            const feedHeader = document.getElementById('feed-header-container');
            if (feedHeader) {{
                feedHeader.style.display = 'block';
                const headers = {{
                    "스포츠": `{get_header("스포츠")}`,
                    "패션": `{get_header("패션")}`,
                    "키친": `{get_header("키친")}`,
                    "게임": `{get_header("게임")}`
                }};
                feedHeader.innerHTML = headers[categoryName];
            }}

            main.innerHTML = htmlContent + `
                <button class="floating-ai" onclick="location.reload()" style="position: fixed; bottom: 24px; right: 20px; z-index: 1000; border: none; background: #FFF; width: 68px; height: 68px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0px 4px 20px rgba(0,0,0,0.18); cursor:pointer; overflow:hidden; padding:0;">
                    <video autoPlay loop muted playsInline style="width: 68px; height: 68px; border-radius: 50%; object-fit: cover; pointer-events:none;">
                        <source src="images/ai_icon.mp4" type="video/mp4" />
                    </video>
                </button>
            `;
            
            const tabs = document.querySelector('.chip-scroll');
            if (tabs) {{
                const active = tabs.querySelector('.active');
                if (active) {{
                    tabs.scrollLeft = active.offsetLeft - 80;
                }}
            }}
        }}

        function switchTab(category) {{
            const main = document.getElementById('main-content');
            const feedHeader = document.getElementById('feed-header-container');
            
            if (feedHeader) {{
                const headers = {{
                    "스포츠": `{get_header("스포츠")}`,
                    "패션": `{get_header("패션")}`,
                    "키친": `{get_header("키친")}`,
                    "게임": `{get_header("게임")}`
                }};
                feedHeader.innerHTML = headers[category];
            }}

            let htmlContent = '';
            
            if (category === '스포츠') {{
                htmlContent = `{sports_html}`;
            }} else if (category === '패션') {{
                htmlContent = `{fashion_html}`;
            }} else if (category === '키친') {{
                htmlContent = `{kitchen_html}`;
            }} else {{
                htmlContent = `{game_html}`;
            }}

            main.innerHTML = htmlContent;

            // Maintain the AI character overlapping button
            main.innerHTML += `
                <button class="floating-ai" onclick="location.reload()" style="position: fixed; bottom: 24px; right: 20px; z-index: 1000; border: none; background: #FFF; width: 68px; height: 68px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0px 4px 20px rgba(0,0,0,0.18); cursor:pointer; overflow:hidden; padding:0;">
                    <video autoPlay loop muted playsInline style="width: 68px; height: 68px; border-radius: 50%; object-fit: cover; pointer-events:none;">
                        <source src="images/ai_icon.mp4" type="video/mp4" />
                    </video>
                </button>
            `;
            
            // Adjust scroll for tabs
            const tabs = document.querySelector('.chip-scroll');
            if (tabs) {{
                const active = tabs.querySelector('.active');
                if (active) {{
                    tabs.scrollLeft = active.offsetLeft - 80;
                }}
            }}
        }}
"""

regex_pattern = r'function showResult\(\) \{[\s\S]*?\}\n\s*// Init'

if re.search(regex_pattern, content):
    new_content = re.sub(regex_pattern, js_function.replace('\\\\', '\\\\\\\\') + '\n        // Init', content)
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Updated index.html successfully")
else:
    print("Could not find function to replace in index.html")
    print(content[:500])
