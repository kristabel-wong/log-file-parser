// used for console log testing

const logAnalysis = require('./logAnalysis');

const top3 = logAnalysis.getTopIPs(3)

logAnalysis.loadFile('programming-task-example-data_(1).log');
console.log('length',logAnalysis.fileContents.length)
logAnalysis.processIPs();
console.log('stats', logAnalysis.stats)
console.log('getting top 3', typeof logAnalysis.getTopIPs(3), logAnalysis.getTopIPs(3)); // logAnalysis.processIPs()
console.log('getting URL frequency', logAnalysis.stats.urlFreq);
console.log('getting top 3 urls',logAnalysis.getMostVisitedURLs(3));


