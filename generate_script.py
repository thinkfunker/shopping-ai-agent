import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Define HTML configurations
game_html = """
<div class="feed-header">
    <h1>Shopping Ai</h1>
    <div class="feed-actions">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C12.1102 18 14.0254 17.1831 15.4532 15.8674L20.2929 20.7071C20.6834 21.0976 21.3166 21.0976 21.7071 20.7071C22.0976 20.3166 22.0976 19.6834 21.7071 19.2929L16.8674 14.4532C18.1831 13.0254 19 11.1102 19 10C19 5.58172 15.4183 2 10 2ZM4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10Z" fill="#17181A"/>
        </svg>
        <img src="images/6cf779209837fe69c1fd4ccbb5d0abc91833f717.png" class="avatar" alt="Avatar"/>
    </div>
</div>
<div class="chip-scroll">
    <button class="feed-chip icon-chip">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16669 8.33333C4.16669 8.33333 4.16668 8.33333 4.16667 8.33333C3.24619 8.33333 2.5 7.58714 2.5 6.66667C2.5 5.74619 3.24619 5 4.16667 5C5.08714 5 5.83333 5.74619 5.83333 6.66667C5.83333 7.58714 5.08714 8.33333 4.16667 8.33333ZM4.16669 8.33333H17.5M15.8333 15C15.8333 15 15.8333 15 15.8333 15C16.7538 15 17.5 14.2538 17.5 13.3333C17.5 12.4129 16.7538 11.6667 15.8333 11.6667C14.9129 11.6667 14.1667 12.4129 14.1667 13.3333C14.1667 14.2538 14.9129 15 15.8333 15ZM15.8333 15H2.5" stroke="#17181A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
    <button class="feed-chip">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        AI Pick
    </button>
    <button class="feed-chip active">게임</button>
    <button class="feed-chip">스포츠</button>
    <button class="feed-chip">패션</button>
    <button class="feed-chip">키친</button>
    <button class="feed-chip">인테리어</button>
</div>

<div class="feed-masonry">
    <div class="masonry-col">
        <div class="feed-card card-blue">
            <span class="badge">PC게임</span>
            <span class="close-x">&times;</span>
            <img class="pc-img" src="images/3af11f3dcf672c9b4903491a082063fc3bbb9287.png" alt="PC" />
            <p class="card-title">승률을 바꾸는<br>PC 세팅</p>
        </div>
        <div class="feed-card card-cyan">
            <span class="badge">게이밍 기어</span>
            <span class="close-x">&times;</span>
            <img class="headset-img" src="images/bdfa442346e670eb4ac457ba91ff00e1eff7aab6.png" alt="Headset" />
            <p class="card-title">사운드<br>플레이의 완성</p>
            <div class="bottom-grad"></div>
        </div>
        <div class="feed-card card-black-friday">
            <img src="images/8d084f9cd61b8af0d9ed50f73076279220ae3dc5.png" alt="Black Friday" />
        </div>
    </div>
    
    <div class="masonry-col">
        <div class="feed-card card-red">
            <span class="badge">휴대용 게임기</span>
            <span class="close-x">&times;</span>
            <img class="switch-img" src="images/f20f8ba4e4f9ffd597b8b791eaa4fafb3b651c75.png" alt="Switch" />
            <p class="card-title">새롭게 출시된 <br>스위치 2지금이 기회</p>
        </div>
        <div class="feed-card card-yt">
            <img class="yt-thumb" src="images/8a8f2c97240b2c25f73107ed67960f33515a8e46.png" alt="Faker" />
            <div class="yt-play">
                <svg viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <span class="yt-time">01:30</span>
            <p class="card-title yt-title">페이커가 직접 꼽은<br>2026 T1 우승템</p>
        </div>
    </div>
</div>

<div class="t1-banner">
    <span class="banner-text">프로게이머 장비 세팅전</span>
    <img class="banner-logo" src="images/dc537cf7ec9578f6e9624ff599e91173d523c8a3.png" alt="T1" />
</div>
"""

sports_html = """
<div class="feed-header">
    <h1>Shopping Ai</h1>
    <div class="feed-actions">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C12.1102 18 14.0254 17.1831 15.4532 15.8674L20.2929 20.7071C20.6834 21.0976 21.3166 21.0976 21.7071 20.7071C22.0976 20.3166 22.0976 19.6834 21.7071 19.2929L16.8674 14.4532C18.1831 13.0254 19 11.1102 19 10C19 5.58172 15.4183 2 10 2ZM4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10Z" fill="#17181A"/>
        </svg>
        <img src="images/6cf779209837fe69c1fd4ccbb5d0abc91833f717.png" class="avatar" alt="Avatar"/>
    </div>
</div>
<div class="chip-scroll">
    <button class="feed-chip icon-chip">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16669 8.33333C4.16669 8.33333 4.16668 8.33333 4.16667 8.33333C3.24619 8.33333 2.5 7.58714 2.5 6.66667C2.5 5.74619 3.24619 5 4.16667 5C5.08714 5 5.83333 5.74619 5.83333 6.66667C5.83333 7.58714 5.08714 8.33333 4.16667 8.33333ZM4.16669 8.33333H17.5M15.8333 15C15.8333 15 15.8333 15 15.8333 15C16.7538 15 17.5 14.2538 17.5 13.3333C17.5 12.4129 16.7538 11.6667 15.8333 11.6667C14.9129 11.6667 14.1667 12.4129 14.1667 13.3333C14.1667 14.2538 14.9129 15 15.8333 15ZM15.8333 15H2.5" stroke="#17181A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
    <button class="feed-chip">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        AI Pick
    </button>
    <button class="feed-chip">게임</button>
    <button class="feed-chip active">스포츠</button>
    <button class="feed-chip">패션</button>
    <button class="feed-chip">키친</button>
    <button class="feed-chip">인테리어</button>
</div>

<div class="feed-masonry">
    <div class="masonry-col">
        <div class="feed-card" style="background:#222138; height:171px;">
            <span class="badge">TENNIS</span>
            <span class="close-x">&times;</span>
            <img src="images/1b270d270fdb35cee2e2c97d12427e158ca2bc85.png" style="position:absolute; width:131px; height:142px; right:-20px; bottom:-10px; object-fit:cover;">
            <p class="card-title">테니스<br>시작해볼까요</p>
        </div>
        <div class="feed-card" style="background:#97b9b8; height:171px;">
            <span class="badge">RUNNING</span>
            <span class="close-x">&times;</span>
            <img src="images/3939934e844e19c0205dbacae2d94d4d564bfc52.png" style="position:absolute; width:200px; right:-50px; bottom:-10px; transform: scaleX(-1);">
            <p class="card-title">2026년 목표를 향한<br>러닝화</p>
        </div>
        <div class="feed-card card-yt" style="background:#466136; height:91px;">
            <img src="images/1b2d9139889a6fced8b130e89b1707ea16f75a80.png" style="position:absolute; width:147px; right:-20px; top:-20px; object-fit:cover;">
            <p class="card-title yt-title" style="top:50%; transform:translateY(-50%); bottom:auto; line-height:1.2;">초보자에게 인기있는 <br>라켓 TOP5</p>
        </div>
    </div>
    
    <div class="masonry-col">
        <div class="feed-card" style="background:#213828; height:171px;">
            <span class="badge">GOLF</span>
            <span class="close-x">&times;</span>
            <img src="images/fe3e8dc892ca1b216b02fb2f38e33ebcb3e34789.png" style="position:absolute; width:163px; right:-20px; height: 100%; object-fit:cover;">
            <p class="card-title" style="z-index:10;">비거리 200야드<br>신소재 드라이버</p>
            <div class="bottom-grad" style="background: linear-gradient(to top, rgba(0,0,0,0.6), transparent); position:absolute; bottom:0; padding:40px; width:100%; height:80px; z-index:5;"></div>
        </div>
        <div class="feed-card card-yt" style="background:#010212; height:352px;">
            <img src="images/397b8016f4fb3986abc42562d50bb175a946167a.png" style="position:absolute; width:357px; left:-68px; top:31px; object-fit:cover;">
            <div class="yt-play" style="top:50%; left:50%; transform:translate(-50%,-50%); width:48px; height:48px; position:absolute; z-index:3;">
                <svg viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <span class="yt-time" style="top:154px; right:10px;">01:30</span>
            <p class="card-title yt-title" style="bottom: 30px;">Naomi Osaka식<br>강타의 비결</p>
            <div class="bottom-grad" style="background: linear-gradient(to top, rgba(0,0,0,0.4), transparent); position:absolute; bottom:0; padding:40px; width:100%; height:80px; z-index:2;"></div>
        </div>
    </div>
</div>

<div class="t1-banner" style="background:#f49caa; height:171px; display:flex; align-items:center; justify-content:center; flex-direction:column; margin:16px; border-radius:16px;">
    <span style="font-size:32px; font-weight:900; color:white;">20% OFF</span>
    <span style="font-size:32px; font-weight:900; color:rgba(255,255,255,0.4); margin-top:-10px;">SPRING</span>
</div>
"""

fashion_html = """
<div class="feed-header">
    <h1>Shopping Ai</h1>
    <div class="feed-actions">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C12.1102 18 14.0254 17.1831 15.4532 15.8674L20.2929 20.7071C20.6834 21.0976 21.3166 21.0976 21.7071 20.7071C22.0976 20.3166 22.0976 19.6834 21.7071 19.2929L16.8674 14.4532C18.1831 13.0254 19 11.1102 19 10C19 5.58172 15.4183 2 10 2ZM4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10Z" fill="#17181A"/>
        </svg>
        <img src="images/6cf779209837fe69c1fd4ccbb5d0abc91833f717.png" class="avatar" alt="Avatar"/>
    </div>
</div>
<div class="chip-scroll">
    <button class="feed-chip icon-chip">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16669 8.33333C4.16669 8.33333 4.16668 8.33333 4.16667 8.33333C3.24619 8.33333 2.5 7.58714 2.5 6.66667C2.5 5.74619 3.24619 5 4.16667 5C5.08714 5 5.83333 5.74619 5.83333 6.66667C5.83333 7.58714 5.08714 8.33333 4.16667 8.33333ZM4.16669 8.33333H17.5M15.8333 15C15.8333 15 15.8333 15 15.8333 15C16.7538 15 17.5 14.2538 17.5 13.3333C17.5 12.4129 16.7538 11.6667 15.8333 11.6667C14.9129 11.6667 14.1667 12.4129 14.1667 13.3333C14.1667 14.2538 14.9129 15 15.8333 15ZM15.8333 15H2.5" stroke="#17181A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
    <button class="feed-chip">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        AI Pick
    </button>
    <button class="feed-chip">게임</button>
    <button class="feed-chip">스포츠</button>
    <button class="feed-chip active">패션</button>
    <button class="feed-chip">키친</button>
    <button class="feed-chip">인테리어</button>
</div>

<div class="feed-masonry">
    <div class="masonry-col">
        <div class="feed-card" style="background:#eaeaea; height:352px;">
            <span class="badge" style="color:black">가방</span>
            <span class="close-x" style="color:black">&times;</span>
            <img src="images/9172aea095e2f924a262a74a08f921811251b5ca.png" style="position:absolute; width:100%; height:100%; object-fit:cover; mix-blend-mode:multiply; right:-40px; transform: scaleX(-1);">
            <img src="images/0a480fd69ed6b7d0470ca4942ba25022b6b4663e.png" style="position:absolute; width:100%; height:100%; object-fit:cover; z-index:1; opacity:0.15">
            <p class="card-title" style="color:black; bottom: 30px; z-index:5;">포터 x 르메르<br>레더 컬렉션 공개</p>
        </div>
        <div class="feed-card" style="background:#bdbebf; height:171px;">
            <span class="badge" style="color:black">Stüssy</span>
            <span class="close-x" style="color:black">&times;</span>
            <img src="images/4ee4d3be59f0a707ea21a5ab5c2cb0ccfb0ec86c.png" style="position:absolute; width:100%; height:100%; object-fit:cover;">
            <p class="card-title" style="bottom: 10px;">2026 Spring</p>
        </div>
    </div>
    
    <div class="masonry-col">
        <div class="feed-card" style="background:#000; height:171px;">
            <span class="badge" style="color:white">BEAMS</span>
            <span class="close-x">&times;</span>
            <img src="images/b47e35420a10978c1b796b1cbccd74d623b5c0fc.png" style="position:absolute; width:100%; height:100%; object-fit:cover; opacity:0.8">
            <p class="card-title" style="bottom:20px; z-index:5;">2026년 봄의<br>리바이스 x 빔스<br>협업 컬렉션 출시</p>
             <div class="bottom-grad" style="background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); position:absolute; bottom:0; width:100%; height:80px; z-index:3;"></div>
        </div>
        <div class="feed-card" style="background:#000; height:171px;">
            <span class="badge" style="color:white">악세사리</span>
            <span class="close-x">&times;</span>
            <img src="images/ba5cbf5b981ef84560b765b0de11fbafe00cb268.png" style="position:absolute; width:100%; height:100%; object-fit:cover; opacity:0.9">
            <p class="card-title" style="bottom: 20px; z-index:5;">클래쉬 드 까르띠에<br>옐로 골드 공개</p>
            <div class="bottom-grad" style="background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); position:absolute; bottom:0; width:100%; height:80px; z-index:3;"></div>
        </div>
        <div class="feed-card" style="background:#25242c; height:171px; display:flex; align-items:center; justify-content:center; flex-direction:column;">
            <span class="badge">COUPON</span>
            <span class="close-x">&times;</span>
            <span style="font-size:24px; font-weight:900; color:white;">30% OFF</span>
        </div>
    </div>
</div>

<div class="t1-banner" style="background:#b4b5a7; height:91px; margin:16px; border-radius:16px; overflow:hidden;">
    <img src="images/60377435440851c08f633eba2e9569cb74fa0248.png" style="position:absolute; width:100%; height:100%; object-fit:cover; opacity:0.7">
    <span style="font-size:11px; font-weight:bold; color:white; position:absolute; left:16px; top:16px;">#한정판</span>
    <span style="font-size:14px; font-weight:bold; color:white; position:absolute; left:16px; top:36px;">프라그먼트 x 나이키 북 2 공개</span>
</div>
"""

kitchen_html = """
<div class="feed-header">
    <h1>Shopping Ai</h1>
    <div class="feed-actions">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C12.1102 18 14.0254 17.1831 15.4532 15.8674L20.2929 20.7071C20.6834 21.0976 21.3166 21.0976 21.7071 20.7071C22.0976 20.3166 22.0976 19.6834 21.7071 19.2929L16.8674 14.4532C18.1831 13.0254 19 11.1102 19 10C19 5.58172 15.4183 2 10 2ZM4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10Z" fill="#17181A"/>
        </svg>
        <img src="images/6cf779209837fe69c1fd4ccbb5d0abc91833f717.png" class="avatar" alt="Avatar"/>
    </div>
</div>
<div class="chip-scroll">
    <button class="feed-chip icon-chip">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16669 8.33333C4.16669 8.33333 4.16668 8.33333 4.16667 8.33333C3.24619 8.33333 2.5 7.58714 2.5 6.66667C2.5 5.74619 3.24619 5 4.16667 5C5.08714 5 5.83333 5.74619 5.83333 6.66667C5.83333 7.58714 5.08714 8.33333 4.16667 8.33333ZM4.16669 8.33333H17.5M15.8333 15C15.8333 15 15.8333 15 15.8333 15C16.7538 15 17.5 14.2538 17.5 13.3333C17.5 12.4129 16.7538 11.6667 15.8333 11.6667C14.9129 11.6667 14.1667 12.4129 14.1667 13.3333C14.1667 14.2538 14.9129 15 15.8333 15ZM15.8333 15H2.5" stroke="#17181A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
    <button class="feed-chip">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        AI Pick
    </button>
    <button class="feed-chip">게임</button>
    <button class="feed-chip">스포츠</button>
    <button class="feed-chip">패션</button>
    <button class="feed-chip active">키친</button>
    <button class="feed-chip">인테리어</button>
</div>

<div class="feed-masonry">
    <div class="masonry-col">
        <div class="feed-card" style="background:#222138; height:171px;">
            <span class="badge">냄비</span>
            <span class="close-x">&times;</span>
            <img src="images/1baeb382aafba0a98c721a8ed94425e35305704e.png" style="position:absolute; width:130px; right:10px; bottom:10px;">
            <p class="card-title">2026 트렌드<br>키친웨어 모음</p>
        </div>
        <div class="feed-card" style="background:#97b9b8; height:171px;">
            <span class="badge">멀티쿠커</span>
            <span class="close-x">&times;</span>
            <img src="images/3540db8dba331fe503fc44d0065db853f9283497.png" style="position:absolute; width:120px; right:-20px; bottom:-20px;">
            <p class="card-title">퇴근 후<br>가장 빠른 미식(美食)</p>
        </div>
        
        <div class="feed-card" style="background:#2a3235; height:171px; display:flex; align-items:center; justify-content:center; flex-direction:column;">
            <span style="font-size:32px; font-weight:900; color:white;">20% OFF</span>
            <span style="font-size:32px; font-weight:900; color:rgba(255,255,255,0.4); margin-top:-10px;">SPRING</span>
        </div>
    </div>
    
    <div class="masonry-col">
        <div class="feed-card" style="background:#622121; height:171px;">
            <span class="badge">후라이팬</span>
            <span class="close-x">&times;</span>
            <img src="images/a7f9f1718fc5ecf987d89908fdffebac9d6f5371.png" style="position:absolute; width:157px; right:-20px; bottom:20px;">
            <p class="card-title">스테이크를 이븐하게<br>굽는 후라이팬</p>
        </div>
        <div class="feed-card card-yt" style="background: linear-gradient(#102131, #1f353f); height:352px;">
            <img src="images/a958eefb1b6f856c272750b696159d3806e2096f.png" style="position:absolute; width:574px; left:-180px; top:30px; object-fit:cover;">
            <div class="yt-play" style="top:50%; left:50%; transform:translate(-50%,-50%); width:48px; height:48px; position:absolute; z-index:3;">
                <svg viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <p class="card-title" style="bottom: 30px; z-index:5;">그랑메종 도쿄의<br>화제가 된 주방 아이템</p>
            <div class="bottom-grad" style="background: linear-gradient(to top, rgba(0,0,0,0.6), transparent); position:absolute; bottom:0; height: 120px; width:100%; z-index:3;"></div>
        </div>
    </div>
</div>

<div class="t1-banner" style="background:#0032be; height:91px; margin:16px; border-radius:16px; position:relative;">
    <span style="font-size:14px; font-weight:bold; color:white; position:absolute; left:16px; top:50%; transform: translateY(-50%); z-index: 2;">58만 인플루언서<br>까사림 콜라보!</span>
    <img src="images/fd795b966d00d7e719e8c157aec2458123b40761.png" style="position:absolute; width:108px; right:10px; top:10px; opacity:0.9">
</div>
"""

js_function = f"""
        function getRecommendedCategory() {{
            const opts = selectedOptions.join(" ");
            
            // Analyze selected images logic:
            if (opts.includes("top_spin") || opts.includes("casual_sports")) return "sports";
            if (opts.includes("classic_formal") || opts.includes("design_mood")) return "fashion";
            if (opts.includes("sweet_soft") || opts.includes("function_practicality")) return "kitchen";
            return "game";
        }}

        function showResult() {{
            document.getElementById('header-container').style.display = 'none';
            const progressContainer = document.querySelector('.progress-bar-container');
            progressContainer.style.display = 'none';

            const main = document.getElementById('main-content');
            main.className = 'main-content scroll-hide fade-in feed-mode';

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
                <button class="floating-ai" onclick="location.reload()">
                    <video autoPlay loop muted playsInline>
                        <source src="images/ai_icon.mp4" type="video/mp4" />
                    </video>
                </button>
            `;
        }}
"""

regex_pattern = r'function showResult\(\) \{[\s\S]*?\}\n\s*// Init'

if re.search(regex_pattern, content):
    new_content = re.sub(regex_pattern, js_function.replace('\\', '\\\\') + '\n        // Init', content)
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Updated successfully")
else:
    print("Could not find function to replace")
