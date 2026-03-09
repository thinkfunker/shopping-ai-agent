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
    <h1>Shopping Ai</h1>
    <div class="feed-actions">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C12.1102 18 14.0254 17.1831 15.4532 15.8674L20.2929 20.7071C20.6834 21.0976 21.3166 21.0976 21.7071 20.7071C22.0976 20.3166 22.0976 19.6834 21.7071 19.2929L16.8674 14.4532C18.1831 13.0254 19 11.1102 19 10C19 5.58172 15.4183 2 10 2ZM4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10Z" fill="#17181A"/>
        </svg>
        <img src="images/6cf779209837fe69c1fd4ccbb5d0abc91833f717.png" class="avatar" style="border:1px solid #ddd; object-fit:cover;" alt="Avatar"/>
    </div>
</div>
<div class="chip-scroll">
    <button class="feed-chip icon-chip">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16669 8.33333C4.16669 8.33333 4.16668 8.33333 4.16667 8.33333C3.24619 8.33333 2.5 7.58714 2.5 6.66667C2.5 5.74619 3.24619 5 4.16667 5C5.08714 5 5.83333 5.74619 5.83333 6.66667C5.83333 7.58714 5.08714 8.33333 4.16667 8.33333ZM4.16669 8.33333H17.5M15.8333 15C15.8333 15 15.8333 15 15.8333 15C16.7538 15 17.5 14.2538 17.5 13.3333C17.5 12.4129 16.7538 11.6667 15.8333 11.6667C14.9129 11.6667 14.1667 12.4129 14.1667 13.3333C14.1667 14.2538 14.9129 15 15.8333 15ZM15.8333 15H2.5" stroke="#17181A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
    <button class="feed-chip" style="color:#17181a;">
        <img src="images/350f5853f65e236ad6dcd3d639b7ac83d1ba6ee8.png" style="width:20px; height:20px;" />
        AI Pick
    </button>
    {chips}
</div>
'''

def card_html(x, y, w, h, bg, badge, text, img_src=None, img_style='', extras='', yt=False, cross=True, color='white'):
    top = y - 146
    card_str = f'''<div class="feed-card" style="position: absolute; left: {x}px; top: {top}px; width: {w}px; height: {h}px; background: {bg}; border-radius: 16px; overflow: hidden; color: {color};">'''
    if badge:
        card_str += f'<span class="badge" style="z-index: 5; font-size:11px; font-weight:700; position:absolute; top:16px; left:16px;">{badge}</span>'
    if cross:
        card_str += f'<span class="close-x" style="z-index: 5; position:absolute; top:14px; right:14px; cursor:pointer;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="{color}" stroke-opacity="0.4" stroke-width="1.5" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>'
    if img_src:
        card_str += f'<img src="{img_src}" style="{img_style}" />'
    if extras:
        card_str += extras
    if yt:
        card_str += f'''<div style="background: rgba(0,0,0,0.4); position:absolute; inset:0;"></div>'''
        card_str += f'''<div class="yt-play" style="top:50%; left:50%; transform:translate(-50%,-50%); width:48px; height:48px; position:absolute; z-index:3;">
                <svg viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg></div>
                <span class="yt-time" style="position:absolute; top:calc(50% + 30px); right:10px; font-size:11px; z-index: 5;">01:30</span>'''
    if text:
        card_str += f'<p class="card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:14px; font-weight:700; line-height:1.2; text-shadow:0 2px 4px rgba(0,0,0,0.2);">{text}</p>'
    card_str += '</div>'
    return card_str

game_cards = [
    card_html(16, 175, 174, 171, '#282e8b', 'PC게임', '승률을 바꾸는<br>PC 세팅', 'images/3af11f3dcf672c9b4903491a082063fc3bbb9287.png', 'position:absolute; left: 85px; top: 49px; width:110px; height:auto; object-fit:contain; opacity:0.9;'),
    card_html(200, 175, 174, 171, '#e70012', '휴대용 게임기', '새롭게 출시된<br>스위치 2지금이 기회', 'images/f20f8ba4e4f9ffd597b8b791eaa4fafb3b651c75.png', 'position:absolute; right:-60px; bottom:-30px; width:190px;'),
    card_html(16, 356, 174, 171, '#4c7df9', '게이밍 기어', '사운드<br>플레이의 완성', 'images/bdfa442346e670eb4ac457ba91ff00e1eff7aab6.png', 'position:absolute; right: -25px; bottom: -20px; width:123px; transform: scaleX(-1);'),
    card_html(200, 356, 174, 352, '#010212', '', '페이커가 직접 꼽은<br>2026 T1 우승템', 'images/8a8f2c97240b2c25f73107ed67960f33515a8e46.png', 'position:absolute; width: 616px; left:-190px; top:-44px; max-width: none; opacity:0.6;', None, True, False),
    card_html(16, 537, 174, 171, '#202020', '', '', 'images/8d084f9cd61b8af0d9ed50f73076279220ae3dc5.png', 'position:absolute; width:119px; height:80px; object-fit:contain; bottom:15px; left: 27.5px;', "", False, False),
    card_html(16, 718, 358, 91, '#010c18', '', '프로게이머 장비 세팅전', 'images/dc537cf7ec9578f6e9624ff599e91173d523c8a3.png', 'position:absolute; top: 18px; left: 220px; width: 104px; height:53px; object-fit:contain;', None, False, False)
]
game_html = get_header("게임") + '<div style="position:relative; height: 680px;">' + ''.join(game_cards) + '</div>'

sports_cards = [
    card_html(16, 175, 174, 171, '#222138', 'TENNIS', '테니스<br>시작해볼까요', 'images/1b270d270fdb35cee2e2c97d12427e158ca2bc85.png', 'position:absolute; width:131px; height:142px; left: 70px; top: 48px; object-fit:cover;'),
    card_html(200, 175, 174, 171, '#213828', 'GOLF', '비거리 200야드<br>신소재 드라이버', 'images/fe3e8dc892ca1b216b02fb2f38e33ebcb3e34789.png', 'position:absolute; width:163px; height:204px; left:42px; top:-17px; object-fit:cover;', '<div style="position:absolute; bottom:0; left:0; right:0; height:114px; background:linear-gradient(to top, rgba(0,0,0,0.6), transparent);"></div>'),
    card_html(16, 356, 174, 171, '#97b9b8', 'RUNNING', '2026년 목표를 향한<br>러닝화', 'images/3939934e844e19c0205dbacae2d94d4d564bfc52.png', 'position:absolute; width:200px; height:200px; right:-50px; top:-5px; transform: scaleX(-1); object-fit:cover;', '<div style="position:absolute; bottom:0; left:0; right:0; height:95px; background:linear-gradient(to top, rgba(0,0,0,0.4), transparent);"></div>'),
    card_html(200, 356, 174, 352, '#010212', '', 'Naomi Osaka식<br>강타의 비결', 'images/397b8016f4fb3986abc42562d50bb175a946167a.png', 'position:absolute; width:357px; height:421px; left:-68px; top:31px; object-fit:cover; opacity: 0.8', '<div style="position:absolute; bottom:0; left:0; right:0; height:100px; background:linear-gradient(to top, rgba(0,0,0,0.4), transparent);"></div>', True, False),
    card_html(16, 537, 174, 171, '#f49caa', '', '', None, '', '<div style="position:absolute; top:40px; left:0; right:0; text-align:center;"><p style="font-size:32px; font-weight:900; color:rgba(255,255,255,0.4); margin:0;">SPRING</p><p style="font-size:32px; font-weight:900; color:white; margin:-10px 0; line-height:1.2;">20% OFF</p></div>', False, False),
    card_html(16, 718, 358, 91, '#466136', '', '초보자에게 인기있는<br>라켓 TOP5', 'images/1b2d9139889a6fced8b130e89b1707ea16f75a80.png', 'position:absolute; width:147px; height:221px; left:211px; top:-61px; object-fit:cover;', None, False, False)
]
sports_html = get_header("스포츠") + '<div style="position:relative; height: 680px;">' + ''.join(sports_cards) + '</div>'

fashion_cards = [
    card_html(16, 175, 174, 352, '#eaeaea', 'バッグ', '포터 x 르메르<br><span style="font-weight: normal; color:rgba(255,255,255,0.8);">레더 컬렉션 공개</span>', 'images/0a480fd69ed6b7d0470ca4942ba25022b6b4663e.png', 'position:absolute; width: 327px; height:440px; left:-124px; top:-82px; mix-blend-mode:multiply; object-fit:cover;', '', False, True, 'black'),
    card_html(200, 175, 174, 171, '#bdbebf', 'Stüssy', '2026 Spring', 'images/4ee4d3be59f0a707ea21a5ab5c2cb0ccfb0ec86c.png', 'position:absolute; width:174px; height:171px; left:0px; top:0px; object-fit:cover;', '', False, True),
    card_html(200, 356, 174, 171, '#25242c', 'COUPON', '', None, '', '<div style="position:absolute; top:70px; left:0; right:0; text-align:center;"><p style="font-size:24px; font-weight:900; color:white; margin:0;">30% OFF</p></div>', False, True),
    card_html(16, 537, 358, 91, '#355375', '', '#한정판<br>프라그먼트 x 나이키 북 2 공개', 'images/60377435440851c08f633eba2e9569cb74fa0248.png', 'position:absolute; width:364px; height:114px; left:-1px; top:-10px; object-fit:cover; mix-blend-mode: color-dodge;', None, False, True),
    card_html(16, 638, 174, 171, '#000', 'BEAMS', '2026年春の<br>리바이스 x 빔스<br>협업 컬렉션 출시', 'images/b47e35420a10978c1b796b1cbccd74d623b5c0fc.png', 'position:absolute; width:174px; height:171px; left:0px; top:0px; object-fit:cover; opacity:0.8;', '<div style="position:absolute; bottom:0; left:0; right:0; height:80px; background:linear-gradient(to top, rgba(0,0,0,0.8), transparent);"></div>', False, True),
    card_html(200, 638, 174, 171, '#000', 'アクセサリー', '클래시 드 까르띠에 컬렉션<br>옐로 골드 공개', 'images/ba5cbf5b981ef84560b765b0de11fbafe00cb268.png', 'position:absolute; width:174px; height:171px; left:0px; top:0px; object-fit:cover; opacity:0.9;', '<div style="position:absolute; bottom:0; left:0; right:0; height:80px; background:linear-gradient(to top, rgba(0,0,0,0.7), transparent);"></div>', False, True)
]
fashion_html = get_header("패션") + '<div style="position:relative; height: 680px;">' + ''.join(fashion_cards) + '</div>'

kitchen_cards = [
    card_html(16, 175, 174, 171, '#222138', '냄비', '2026 트렌드<br>키친웨어 모음', 'images/1baeb382aafba0a98c721a8ed94425e35305704e.png', 'position:absolute; width:107px; height:102px; left: 96px; top: 48px; object-fit:cover;'),
    card_html(200, 175, 174, 171, '#622121', '후라이팬', '스테이크를 이븐하게<br>굽는 후라이팬', 'images/a7f9f1718fc5ecf987d89908fdffebac9d6f5371.png', 'position:absolute; width:157px; height:74px; left: 63px; top: 47px; object-fit:cover;', '<div style="position:absolute; bottom:0; left:0; right:0; height:80px; background:linear-gradient(to top, rgba(0,0,0,0.4), transparent);"></div>'),
    card_html(16, 356, 174, 171, '#97b9b8', '멀티쿠커', '퇴근 후<br>가장 빠른 미식(美食)', 'images/3540db8dba331fe503fc44d0065db853f9283497.png', 'position:absolute; width:117px; height:117px; left: 57px; top: 19px; object-fit:cover;', '<div style="position:absolute; bottom:0; left:0; right:0; height:95px; background:linear-gradient(to top, rgba(0,0,0,0.4), transparent);"></div>'),
    card_html(200, 356, 174, 352, '#1f353f', '', '그랑메종 도쿄의<br>화제가 된 주방 아이템', 'images/a958eefb1b6f856c272750b696159d3806e2096f.png', 'position:absolute; width:574px; height:323px; left:-1px; top:30px; object-fit:cover;', '<div style="position:absolute; bottom:0; left:0; right:0; height:114px; background:linear-gradient(to top, rgba(0,0,0,0.6), transparent);"></div>', True, False),
    card_html(16, 537, 174, 171, '#2c3132', '', '', None, '', '<div style="position:absolute; top:40px; left:0; right:0; text-align:center;"><p style="font-size:32px; font-weight:900; color:rgba(255,255,255,0.4); margin:0;">SPRING</p><p style="font-size:32px; font-weight:900; color:white; margin:-10px 0; line-height:1.2;">20% OFF</p></div>', False, False),
    card_html(16, 718, 358, 91, '#0032be', '', '58만 인플루언서 까사림 콜라보!', 'images/fd795b966d00d7e719e8c157aec2458123b40761.png', 'position:absolute; width:108px; height:39px; right:12px; top:26px; object-fit:cover;', None, False, False)
]
kitchen_html = get_header("키친") + '<div style="position:relative; height: 680px;">' + ''.join(kitchen_cards) + '</div>'

js_function = f"""
        function getRecommendedCategory() {{
            const opts = selectedOptions.join(" ");
            if (opts.includes("top_spin") || opts.includes("casual_sports")) return "sports";
            if (opts.includes("classic_formal") || opts.includes("design_mood") || opts.includes("straight_drink") || opts.includes("sweet_soft")) return "fashion";
            if (opts.includes("function_practicality")) return "kitchen";
            return "game";
        }}

        function showResult() {{
            document.getElementById('header-container').style.display = 'none';
            const progressContainer = document.querySelector('.progress-bar-container');
            if (progressContainer) progressContainer.style.display = 'none';

            const main = document.getElementById('main-content');
            main.className = 'main-content fade-in feed-mode scroll-hide';
            
            // Allow vertical scrolling inside main since cards are absolute
            main.style.overflowY = 'auto';

            const targetCategory = getRecommendedCategory();
            let htmlContent = '';
            
            if (targetCategory === 'sports') {{
                htmlContent = `{sports_html}`;
            }} else if (targetCategory === 'fashion') {{
                htmlContent = `{fashion_html}`;
            }} else if (targetCategory === 'kitchen') {{
                htmlContent = `{kitchen_html}`;
            }} else {{
                htmlContent = `{game_html}`;
            }}

            main.innerHTML = htmlContent + `
                <button class="floating-ai" onclick="location.reload()" style="position: fixed; bottom: 20px; right: 20px; z-index: 1000; border: none; background: transparent; padding: 0; cursor:pointer;">
                    <video autoPlay loop muted playsInline style="width: 52px; height: 49px; border-radius: 12px; transform: scale(1.1); pointer-events:none;">
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
                <button class="floating-ai" onclick="location.reload()" style="position: fixed; bottom: 20px; right: 20px; z-index: 1000; border: none; background: transparent; padding: 0; cursor:pointer;">
                    <video autoPlay loop muted playsInline style="width: 52px; height: 49px; border-radius: 12px; transform: scale(1.1); pointer-events:none;">
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
