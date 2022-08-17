// READING THE FILE

const logAnalysis = {

    stats: {
        uniqueIP: {},
        uniqueIPCount: 0,
        urlFreq: {},
    },

    loadFile: function (file) {
        const fs = require('fs'); // Next Steps: use streams for reading large files
    
        const data = fs.readFileSync(file, {encoding:'utf8', flag:'r'})

        this.fileContents = data.split(/\r?\n/); // make an array element for every new line/enter
        
        this.fileContents.forEach( line => {
            this.processIPs(line);
            this.processPathData(line);
        });

    },

    fileContents: [],
    
    processIPs: function ( currentLine ) {
        
        if (currentLine !== undefined) {
            // building an array of IP addresses 
            let address = currentLine.substring(0, currentLine.indexOf(" "));

            if (address in this.stats.uniqueIP) {
                this.stats.uniqueIP[address] += 1 // increment instance
            } else if (address !== "") {
                this.stats.uniqueIP[address] = 1; // create an instance
                this.stats.uniqueIPCount++; // not using Object.keys to avoid looping again
            }
        }
        
    }, 

    processPathData: function ( currentLine ) {
        const fullURL = currentLine.substring(currentLine.indexOf("GET ") + 4, currentLine.indexOf(" HTTP"))

        let path = "";

        if (fullURL.startsWith('http')) {
            const url = new URL(fullURL)
            path = url.pathname; 
        } else {
            path = fullURL;
        }
               

        if ( path in this.stats.urlFreq) {
            this.stats.urlFreq[ path ] += 1; // increment instance
        } else if ( path !== "" ){
            this.stats.urlFreq[ path ] = 1; // create an instance
        }
    },
    
    getUniqueIPs: function () {
        return this.stats.uniqueIPCount;
    },
    
    sortData: function ( data ) {

        const info = Object.entries( data );
        
        info.sort( function(a, b) {
            return b[1] - a[1];
        });

        return info;
    },

    getTopIPs: function (count) {

        const arrayOfEntries =  this.sortData(this.stats.uniqueIP);

        return arrayOfEntries.slice(0, count);
    }, 

    

    getMostVisitedURLs: function (count) {

        const sortURLs = this.sortData( this.stats.urlFreq);

        return sortURLs.slice(0, count)
    },

}

module.exports = logAnalysis;


