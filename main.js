// used for console log testing

const logAnalysis = require('./logAnalysis');

const top3 = logAnalysis.getTopIPs(3)

logAnalysis.loadFile('programming-task-example-data_(1).log');
// console.log('length',logAnalysis.fileContents.length);
logAnalysis.processIPs();
console.log('Log Statistics\n', logAnalysis.stats)
console.log('Getting Top 3 most active IPs\n', logAnalysis.getTopIPs(3)); // logAnalysis.processIPs()
// console.log('getting URL frequency', logAnalysis.stats.urlFreq);
console.log('Getting Top 3 most visited URLs\n',logAnalysis.getMostVisitedURLs(3));


