const fs = require('fs');
const path = require('path');

const targetFile = '/Users/jeongkwon.yoon/Documents/MY Work/shopping-ai-agent/index.html';
let content = fs.readFileSync(targetFile, 'utf8');

const aiPickHtml = `            } else {
                return \`<div style="position:relative; height: 850px;">
                <!-- Steak Pan -->
                <div class="feed-card" style="position: absolute; left: 16px; top: 0px; width: 174px; height: 171px; background: #b89e89; border-radius: 16px; overflow: hidden; color: white;">
                    <span class="badge" style="z-index: 5; font-size:11px; font-weight:700; position:absolute; top:16px; left:16px; margin: 0; letter-spacing: 0;">キッチン</span>
                    <span class="close-x" style="z-index: 5; position:absolute; top:16px; right:16px; cursor:pointer; width:20px; height:20px; display:flex; align-items:center; justify-content:center; opacity:0.7;">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6808 1.17833L10.5025 0L5.84083 4.66167L1.17833 0L0 1.17833L4.6625 5.84L0 10.5017L1.17833 11.6808L5.84083 7.01833L10.5025 11.6808L11.6808 10.5017L7.01917 5.84L11.6808 1.17833Z" fill="white" /></svg>
                    </span>
                    <img src="images/3a7f92eb82356c73b69fcacc4448b2dc15ff6207.png" style="position:absolute; width:105px; height:159px; left: 89px; top: 37px; object-fit:cover;" />
                    <div style="position:absolute; bottom:0; left:0; right:0; height:95px; background:linear-gradient(to top, rgba(0,0,0,0.3), transparent);"></div>
                    <p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:14px; font-weight:700; line-height:1.2; margin: 0; text-align: left; letter-spacing: -0.3px;">ステー키を<br>焼くフライパン</p>
                </div>

                <!-- Suit -->
                <div class="feed-card" style="position: absolute; left: 200px; top: 0px; width: 174px; height: 171px; background: #c8c8c8; border-radius: 16px; overflow: hidden; color: white;">
                    <img src="images/e314ec66fcca181ed6e3ab25b351cd1cbcf65607.png" style="position:absolute; width:210px; height:206px; left:-27px; top:-27px; object-fit:cover;" />
                    <div style="position:absolute; bottom:0; left:0; right:0; height:114px; background:linear-gradient(to top, rgba(0,0,0,0.3), transparent);"></div>
                    <p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:14px; font-weight:700; line-height:1.2; margin: 0; text-align: left; letter-spacing: -0.3px;">スーツ最新<br>流行特集</p>
                </div>

                <!-- Whiskey -->
                <div class="feed-card" style="position: absolute; left: 16px; top: 181px; width: 174px; height: 171px; background: #395150; border-radius: 16px; overflow: hidden; color: white;">
                    <span class="badge" style="z-index: 5; font-size:11px; font-weight:700; position:absolute; top:16px; left:16px; margin: 0; letter-spacing: 0;">ウィスキー</span>
                    <img src="images/a2fbb755be22bc19add8aadfd4ecf6882be6b0f5.png" style="position:absolute; width:151px; height:151px; left:45px; top:10px; object-fit:cover;" />
                    <p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:14px; font-weight:700; line-height:1.2; margin: 0; text-align: left; letter-spacing: -0.3px;">好みに合う<br>スモーキーで重厚に</p>
                </div>

                <!-- Youtube Djokovic -->
                <div class="feed-card" style="position: absolute; left: 200px; top: 181px; width: 174px; height: 352px; background: #010212; border-radius: 16px; overflow: hidden; color: white;">
                    <img src="images/e2611a4f93a3e4592e70a2d24fbf77713f143334.png" style="position:absolute; width:367px; height:486px; left:-57px; top:-9px; object-fit:cover; opacity: 0.8" />
                    <div style="position:absolute; bottom:0; left:0; right:0; height:100px; background:linear-gradient(to top, rgba(0,0,0,0.4), transparent);"></div>
                    <div style="background: rgba(0,0,0,0.2); position:absolute; inset:0;"></div>
                    <div class="yt-play" style="top:50%; left:50%; transform:translate(-50%,-50%); width:48px; height:48px; position:absolute; z-index:3;">
                        <svg viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    <span class="yt-time" style="position:absolute; bottom:16px; right:16px; font-size:11px; margin: 0; z-index: 5;">01:30</span>
                    <p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:14px; font-weight:700; line-height:1.2; margin: 0; text-align: left; letter-spacing: -0.3px;">Djokovic流<br>強打の極意</p>
                </div>

                <!-- Tennis -->
                <div class="feed-card" style="position: absolute; left: 16px; top: 362px; width: 174px; height: 171px; background: #778c93; border-radius: 16px; overflow: hidden; color: white;">
                    <span class="badge" style="z-index: 5; font-size:11px; font-weight:700; position:absolute; top:16px; left:16px; margin: 0; letter-spacing: 0;">ゲーム</span>
                    <img src="images/a0a1c2b877563f540edb8e79d8ce4a1dead0fff2.png" style="position:absolute; width:125px; height:148px; left:65px; top:35px; object-fit:cover;" />
                    <div style="position:absolute; bottom:0; left:0; right:0; height:95px; background:linear-gradient(to top, rgba(0,0,0,0.4), transparent);"></div>
                    <p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:14px; font-weight:700; line-height:1.2; margin: 0; text-align: left; letter-spacing: -0.3px;">テニス<br>始めましょうか</p>
                </div>

                <!-- Bottom Horizontal Rackets -->
                <div class="feed-card" style="position: absolute; left: 16px; top: 543px; width: 358px; height: 91px; background: #466136; border-radius: 16px; overflow: hidden; color: white;">
                    <img src="images/1b2d9139889a6fced8b130e89b1707ea16f75a80.png" style="position:absolute; width:147px; height:221px; left:211px; top:-61px; object-fit:cover;" />
                    <p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:14px; font-weight:700; line-height:1.2; margin: 0; text-align: left; letter-spacing: -0.3px;">初級者に人気のラケットTOP5</p>
                </div>
                </div>\`;
            }`;

const startMarker = '} else {';
const endMarker = '            }'; // This is tricky as there are multiple }

// Use a more specific replacement
content = content.replace(/\} else \{\s+return \`<div style="position:relative; height: 680px;">[\s\S]*?<\/div>\`;\s+\}/, aiPickHtml);

fs.writeFileSync(targetFile, content);
console.log('index.html updated successfully.');
