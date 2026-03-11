const fs = require('fs');
let data = fs.readFileSync('index.html', 'utf8');

// New AI Pick default feed content based on Figma design
const newDefaultFeed = `<div style="position:relative; height: 680px;">` +
    // Card 1: Top-left - インテリア (174x171, bg #4c7df9)
    `<div class="feed-card" style="position: absolute; left: 16px; top: 29px; width: 174px; height: 171px; background: #4c7df9; border-radius: 16px; overflow: hidden; color: white;">` +
    `<span class="badge" style="z-index: 5; font-size:11px; font-weight:700; position:absolute; top:16px; left:16px; margin: 0; letter-spacing: 0;">インテリア</span>` +
    `<span class="close-x" style="z-index: 5; position:absolute; top:16px; right:16px; cursor:pointer; width:20px; height:20px; display:flex; align-items:center; justify-content:center; opacity:0.4;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6808 1.17833L10.5025 0L5.84083 4.66167L1.17833 0L0 1.17833L4.6625 5.84L0 10.5017L1.17833 11.6808L5.84083 7.01833L10.5025 11.6808L11.6808 10.5017L7.01917 5.84L11.6808 1.17833Z" fill="white" fill-opacity="0.4"/></svg></span>` +
    `<img src="images/9ebd405ca5a5264b4bdf996e7b35fcc2ad138978.png" style="position:absolute; width:87px; height:98px; left: 83px; top: 61px; object-fit:cover;" />` +
    `<div style="position:absolute; bottom:0; left:0; right:0; height:95px; background:linear-gradient(to top, rgba(0,0,0,0.4), transparent);"></div>` +
    `<p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:15px; font-weight:800; line-height:1.2; text-shadow:0 2px 4px rgba(0,0,0,0.2); margin: 0; text-align: left; letter-spacing: -0.3px;">暮らしを彩る<br>光のアクセント</p>` +
    `</div>` +

    // Card 2: Top-right - Suit (174x171, bg #c8c8c8)
    `<div class="feed-card" style="position: absolute; left: 200px; top: 29px; width: 174px; height: 171px; background: #c8c8c8; border-radius: 16px; overflow: hidden; color: white;">` +
    `<img src="images/e314ec66fcca181ed6e3ab25b351cd1cbcf65607.png" style="position:absolute; width:210px; height:206px; left:27px; top:-27px; object-fit:cover;" />` +
    `<div style="position:absolute; bottom:0; left:0; right:0; height:114px; background:linear-gradient(to top, rgba(0,0,0,0.3), transparent);"></div>` +
    `<p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:15px; font-weight:800; line-height:1.2; text-shadow:0 2px 4px rgba(0,0,0,0.2); margin: 0; text-align: left; letter-spacing: -0.3px;">スーツ最新<br>流行特集</p>` +
    `</div>` +

    // Card 3: Mid-left - ウィスキー (174x171, bg #395150)
    `<div class="feed-card" style="position: absolute; left: 16px; top: 210px; width: 174px; height: 171px; background: #395150; border-radius: 16px; overflow: hidden; color: white;">` +
    `<span class="badge" style="z-index: 5; font-size:11px; font-weight:700; position:absolute; top:16px; left:16px; margin: 0; letter-spacing: 0;">ウィスキー</span>` +
    `<span class="close-x" style="z-index: 5; position:absolute; top:16px; right:16px; cursor:pointer; width:20px; height:20px; display:flex; align-items:center; justify-content:center;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6808 1.17833L10.5025 0L5.84083 4.66167L1.17833 0L0 1.17833L4.6625 5.84L0 10.5017L1.17833 11.6808L5.84083 7.01833L10.5025 11.6808L11.6808 10.5017L7.01917 5.84L11.6808 1.17833Z" fill="white" fill-opacity="0.4"/></svg></span>` +
    `<img src="images/a2fbb755be22bc19add8aadfd4ecf6882be6b0f5.png" style="position:absolute; width:151px; height:151px; left:45px; top:10px; object-fit:cover;" />` +
    `<p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:15px; font-weight:800; line-height:1.2; text-shadow:0 2px 4px rgba(0,0,0,0.2); margin: 0; text-align: left; letter-spacing: -0.3px;">好みに合う<br>スモーキーで重厚に</p>` +
    `</div>` +

    // Card 4: Mid-right - Djokovic Video (174x352, bg #010212)
    `<div class="feed-card" style="position: absolute; left: 200px; top: 210px; width: 174px; height: 352px; background: #010212; border-radius: 16px; overflow: hidden; color: white;">` +
    `<img src="images/e2611a4f93a3e4592e70a2d24fbf77713f143334.png" style="position:absolute; width:367px; height:486px; left:-57px; top:-9px; object-fit:cover; opacity: 0.8" />` +
    `<div style="position:absolute; bottom:0; left:0; right:0; height:100px; background:linear-gradient(to top, rgba(0,0,0,0.4), transparent);"></div>` +
    `<div style="background: rgba(0,0,0,0.2); position:absolute; inset:0;"></div>` +
    `<div class="yt-play" style="top:50%; left:50%; transform:translate(-50%,-50%); width:48px; height:48px; position:absolute; z-index:3;">` +
    `<svg viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg></div>` +
    `<span class="yt-time" style="position:absolute; top:calc(50% + 30px); right:10px; font-size:11px; margin: 0; z-index: 5;">01:30</span>` +
    `<p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:15px; font-weight:800; line-height:1.2; text-shadow:0 2px 4px rgba(0,0,0,0.2); margin: 0; text-align: left; letter-spacing: -0.3px;">Djokovic流<br>強打の極意</p>` +
    `</div>` +

    // Card 5: Bottom-left - ゲーム (174x171, bg #778c93)
    `<div class="feed-card" style="position: absolute; left: 16px; top: 391px; width: 174px; height: 171px; background: #778c93; border-radius: 16px; overflow: hidden; color: white;">` +
    `<span class="badge" style="z-index: 5; font-size:11px; font-weight:700; position:absolute; top:16px; left:16px; margin: 0; letter-spacing: 0;">ゲーム</span>` +
    `<img src="images/a0a1c2b877563f540edb8e79d8ce4a1dead0fff2.png" style="position:absolute; width:125px; height:148px; left:65px; top:35px; object-fit:cover;" />` +
    `<div style="position:absolute; bottom:0; left:0; right:0; height:95px; background:linear-gradient(to top, rgba(0,0,0,0.4), transparent);"></div>` +
    `<p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:15px; font-weight:800; line-height:1.2; text-shadow:0 2px 4px rgba(0,0,0,0.2); margin: 0; text-align: left; letter-spacing: -0.3px;">テニス<br>始めましょうか</p>` +
    `</div>` +

    // Card 6: Bottom banner (358x91, bg #466136)
    `<div class="feed-card" style="position: absolute; left: 16px; top: 572px; width: 358px; height: 91px; background: #466136; border-radius: 16px; overflow: hidden; color: white;">` +
    `<img src="images/1b2d9139889a6fced8b130e89b1707ea16f75a80.png" style="position:absolute; width:147px; height:221px; left:211px; top:-61px; object-fit:cover;" />` +
    `<p class="card-title feed-card-title" style="z-index: 5; position:absolute; left:16px; bottom:20px; font-size:15px; font-weight:800; line-height:1.2; text-shadow:0 2px 4px rgba(0,0,0,0.2); margin: 0; text-align: left; letter-spacing: -0.3px;">初級者に人気のラケットTOP5</p>` +
    `</div>` +
    `</div>`;

// Find the else block in getHtmlContentForKey and replace the default content
// The pattern is: } else {\n                return `...`;\n            }
const elseIdx = data.indexOf("} else {", data.indexOf("function getHtmlContentForKey"));
const returnIdx = data.indexOf("return `", elseIdx);
const endOfReturn = data.indexOf("`;", returnIdx);

if (elseIdx > -1 && returnIdx > -1 && endOfReturn > -1) {
    const before = data.substring(0, returnIdx);
    const after = data.substring(endOfReturn + 2);
    data = before + "return `" + newDefaultFeed + "`;" + after;
    fs.writeFileSync('index.html', data, 'utf8');
    console.log('Successfully updated default AI Pick feed content');
} else {
    console.log('ERROR: Could not find the else block in getHtmlContentForKey');
    console.log('elseIdx:', elseIdx, 'returnIdx:', returnIdx, 'endOfReturn:', endOfReturn);
}
