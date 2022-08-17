function sum(a, b) {
    return a + b;
}

module.exports = sum;


const logAnalysis = require('./logAnalysis');

const top3 = logAnalysis.getTopIPs(3)

logAnalysis.loadFile('programming-task-example-data_(1).log');
console.log('length',logAnalysis.fileContents.length)
logAnalysis.processIPs();
console.log('stats', logAnalysis.stats)
console.log('getting top 3', typeof logAnalysis.getTopIPs(3), logAnalysis.getTopIPs(3)); // logAnalysis.processIPs()
// console.log('getting URL frequency', logAnalysis.stats.urlFreq);
console.log('getting top 3 urls',logAnalysis.getMostVisitedURLs(3));


// const fs = require('fs'); // use streams for reading large files

// fs.readFile('programming-task-example-data_(1).log', 'utf8', function(err, data) {
    
//     if (err) throw err;
    
//     let array = data.split(/\r?\n/); // array elements from each new line
    
//     // getting IP addresses 
//     const uniqueIP = {}; 
    
//     array.forEach(element => {

//         // building an array of IP addresses 
//         let address = element.substring(0, element.indexOf(" "));
//         if (address in uniqueIP) {
//             uniqueIP[address] += 1
//         } else if (address !== "") {
//             uniqueIP[address] = 1;
//         }


//         // getting URL
//         const fullURL = element.substring(element.indexOf("GET ") + 4, element.indexOf(" HTTP"))

//         const url = fullURL.match(/\/[a-zA-Z0-9.-/]+\//g)

//         // if ( url in urlFreq) {
//         //     urlFreq[ url ] += 1; // increment instance
//         // } else {
//         //     urlFreq[ url ] = 1; // create an instance
//         // }
        
//         // console.log(url)
        

//     })

//     const arrayOfEntries = Object.entries( uniqueIP ); 
//     // .sort only works on an array, so need to turn object into array of entries
//         arrayOfEntries.sort( function(a, b){ 
//         return b[1] - a[1]; 
//     });
  
  
        
//     // console.log(arrayOfEntries)

//     // The number of unique IP addresses
//     console.log(Object.keys(arrayOfEntries).length)


//     // top three visited URLs



//     // top three IP addresses
//     console.log(arrayOfEntries.slice(0,3)) 

  

    
// })


