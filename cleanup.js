const fs = require('fs');
let lines = fs.readFileSync('index.html', 'utf8').split('\n');
lines = lines.filter(l => !l.trim().startsWith('// getRecommendedCategory replaced by'));
fs.writeFileSync('index.html', lines.join('\n'), 'utf8');
console.log('Done. Total lines:', lines.length);
