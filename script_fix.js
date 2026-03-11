const fs = require('fs');

const data = fs.readFileSync('/Users/jeongkwon.yoon/Documents/MY Work/shopping-ai-agent/index.html', 'utf8');

const regex = /function getRecommendedCategory\(\) \{(?:.|\n)*?\}/g;
const modifiedData = data.replace(regex, '');

fs.writeFileSync('/Users/jeongkwon.yoon/Documents/MY Work/shopping-ai-agent/index.html', modifiedData, 'utf8');
