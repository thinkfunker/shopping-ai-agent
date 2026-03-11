const fs = require('fs');
let data = fs.readFileSync('index.html', 'utf8');

// 1. In renderQuestion, change showResult() to showAnalyzing()
const rqTarget = `            if (currentStep >= questions.length) {
                showResult();
                return;
            }`;
const rqReplacement = `            if (currentStep >= questions.length) {
                showAnalyzing();
                return;
            }`;

if (data.includes(rqTarget)) {
    data = data.replace(rqTarget, rqReplacement);
} else {
    console.log("Could not find the target string in renderQuestion.");
}

// 2. Replace the showAnalyzing function
const startShowAnalyzing = data.indexOf("function showAnalyzing() {");
const endShowAnalyzing = data.indexOf("function showResult() {");

if (startShowAnalyzing > -1 && endShowAnalyzing > -1) {
    const before = data.substring(0, startShowAnalyzing);
    const after = data.substring(endShowAnalyzing);
    const newShowAnalyzing = `function showAnalyzing() {
            // Hide app header and progress bar
            const appHeader = document.querySelector('.app-header');
            if (appHeader) appHeader.style.display = 'none';

            const progressContainer = document.querySelector('.progress-bar-container');
            if (progressContainer) progressContainer.style.display = 'none';

            const main = document.getElementById('main-content');
            main.className = 'main-content analyzing-screen';
            main.style.display = 'flex';
            main.style.flexDirection = 'column';
            main.style.alignItems = 'center';
            main.style.justifyContent = 'center';
            main.style.height = '100vh';
            main.style.backgroundColor = '#ffffff';

            main.innerHTML = \`
                <div style="width: 135px; height: 128px; margin-bottom: 24px;">
                    <video autoPlay loop muted playsInline style="width: 100%; height: 100%; object-fit: cover;">
                        <source src="images/ai_icon.mp4" type="video/mp4" />
                    </video>
                </div>
                <div style="text-align: center; color: black; font-size: 14px; font-family: 'Noto Sans JP', sans-serif; line-height: 22px;">
                    <p style="margin: 0;">あなたの選択とショッピング履歴を元に</p>
                    <p style="margin: 0;">ショッピングカテゴリーを分析しています</p>
                </div>
            \`;

            // Wait 2.5 seconds to simulate analyzing
            setTimeout(() => {
                // Reset styles
                main.style.display = '';
                main.style.flexDirection = '';
                main.style.alignItems = '';
                main.style.justifyContent = '';
                main.style.height = '';
                main.style.backgroundColor = '';
                showResult();
            }, 2500);
        }
        
        `;
    data = before + newShowAnalyzing + after;
    fs.writeFileSync('index.html', data, 'utf8');
    console.log("Successfully updated showAnalyzing and renderQuestion.");
} else {
    console.log("Could not find the showAnalyzing bounds.");
}
