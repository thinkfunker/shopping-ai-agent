const fs = require('fs');
const path = require('fs');

const targetFile = '/Users/jeongkwon.yoon/Documents/MY Work/shopping-ai-agent/index.html';
let content = fs.readFileSync(targetFile, 'utf8');

const gameFeedHtml = \`            } else if (feedKey === 'game') {
                return \\\`<div style="position:relative; height: 850px;">
                <!-- PC Games -->
                <div class="feed-card" style="position: absolute; left: 16px; top: 0px; width: 174px; height: 171px; background: #06b487; border-radius: 16px; overflow: hidden; color: white;">
                    <span class="badge" style="z-index: 5; font-size:11px; font-weight:700; position:absolute; top:16px; left:16px; margin: 0; letter-spacing: 0;">PC GAMES</span>
                    <img src="images/2e6e14fe274dd3a5d72f4e818b67244b75477772.png" style="position:absolute; width:198px; height:198px; left: 41px; top: -13px; object-fit:cover;" />
                    <p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:14px; font-weight:700; line-height:1.2; margin: 0; text-align: left; letter-spacing: -0.3px;">勝率を変える<br>最強セッティング</p>
                </div>

                <!-- Switch 2 -->
                <div class="feed-card" style="position: absolute; left: 200px; top: 0px; width: 174px; height: 171px; background: #f33f3a; border-radius: 16px; overflow: hidden; color: white;">
                    <span class="badge" style="z-index: 5; font-size:11px; font-weight:700; position:absolute; top:16px; left:16px; margin: 0; letter-spacing: 0;">CONSOLES</span>
                    <img src="images/8fcdf51e50bc74f20a8bf744746f49934941ab54.png" style="position:absolute; width:134px; height:158px; left: 63px; top: 33px; object-fit:cover;" />
                    <p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:14px; font-weight:700; line-height:1.2; margin: 0; text-align: left; letter-spacing: -0.3px;">今が買い時の<br>Switch 2</p>
                </div>

                <!-- Gaming Gear -->
                <div class="feed-card" style="position: absolute; left: 16px; top: 181px; width: 174px; height: 171px; background: #765aff; border-radius: 16px; overflow: hidden; color: white;">
                    <span class="badge" style="z-index: 5; font-size:11px; font-weight:700; position:absolute; top:16px; left:16px; margin: 0; letter-spacing: 0;">GAMING GEAR</span>
                    <img src="images/7686cfc5ef0622c0c50bc43195c02652bb497598.png" style="position:absolute; width:180px; height:180px; left: 0px; top: 0px; object-fit:cover;" />
                    <p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:14px; font-weight:700; line-height:1.2; margin: 0; text-align: left; letter-spacing: -0.3px;">プロ仕様<br>ギア特集</p>
                </div>

                <!-- Youtube Mario Kart -->
                <div class="feed-card" style="position: absolute; left: 200px; top: 181px; width: 174px; height: 352px; background: #ffc548; border-radius: 16px; overflow: hidden; color: white;">
                    <img src="images/5753e10bef14c277940bc5ebdf517748b6b6be10.png" style="position:absolute; width:430px; height:467px; left:-133px; top:-167px; object-fit:cover;" />
                    <div style="position:absolute; bottom:0; left:0; right:0; height:100px; background:linear-gradient(to top, rgba(0,0,0,0.4), transparent);"></div>
                    <div class="yt-play" style="top:50%; left:50%; transform:translate(-50%,-50%); width:48px; height:48px; position:absolute; z-index:3;">
                        <svg viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    <span class="yt-time" style="position:absolute; bottom:16px; right:16px; font-size:11px; margin: 0; z-index: 5;">01:30</span>
                    <p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:14px; font-weight:700; line-height:1.2; margin: 0; text-align: left; letter-spacing: -0.3px;">マリオカート<br>新作プレイ動画</p>
                </div>

                <!-- Mouse -->
                <div class="feed-card" style="position: absolute; left: 16px; top: 362px; width: 174px; height: 171px; background: #110d7c; border-radius: 16px; overflow: hidden; color: white;">
                    <img src="images/65db9acac0f16ce048186c710f36372959799f2f.png" style="position:absolute; width:180px; height:180px; left:-3px; top:-1px; object-fit:cover;" />
                    <p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:14px; font-weight:700; line-height:1.2; margin: 0; text-align: left; letter-spacing: -0.3px;">勝率を変える<br>最強セットアップ</p>
                </div>

                <!-- Bottom Horizontal Footer -->
                <div class="feed-card" style="position: absolute; left: 16px; top: 543px; width: 358px; height: 91px; background: #06b487; border-radius: 16px; overflow: hidden; color: white;">
                    <img src="images/fa015611cd7f056c3db15d1825daa13a4ce47ce4.png" style="position:absolute; width:115px; height:58px; right:16px; top:17px; object-fit:cover;" />
                    <p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:14px; font-weight:700; line-height:1.2; margin: 0; text-align: left; letter-spacing: -0.3px;">プロ가使う最強セッティング</p>
                </div>
                </div>\\\`;
\`;

content = content.replace('} else {', gameFeedHtml + '            } else {');

fs.writeFileSync(targetFile, content);
console.log('Game feed added to index.html successfully.');
