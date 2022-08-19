// READING THE FILE

const logAnalysis = {

    stats: {
        uniqueIP: {},
        uniqueIPCount: 0,
        urlFreq: {},
    },

    loadFile: function (file) {
        const fs = require('fs'); // Next Steps: use streams for reading large files
    
        const data = fs.readFileSync(file, {encoding:'utf8', flag:'r'}) // async version of readFile

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
        // let path = fullURL;

        if (fullURL.startsWith('http')) {
            const url = new URL(fullURL)
            path = url.pathname; 
        } else {
            path = fullURL;
        }

        // adding http://example.net at the start of each path
        // if (fullURL.startsWith('http://example.net')) { 
        //     path = fullURL; 
        // } else {
        //     path = 'http://example.net' + fullURL;
        // }


        // addin just the first part of the path e.g. /faq or /blog
        // if (fullURL.startsWith('http')) {
        //     const url = new URL(fullURL)
        //     pathnameLong = url.pathname; 
        //     path = pathnameLong.substring(0, pathnameLong.indexOf('/', 1))

        // } else {
        //     path = fullURL.substring(0, fullURL.indexOf('/', 1));
        // }        
        
        

        if ( path in this.stats.urlFreq) {
            this.stats.urlFreq[ path ] += 1; // increment instance
        } else if ( path !== "" ){ // ignores all the spaces at the bottom of the log file
            this.stats.urlFreq[ path ] = 1; // create an instance
        }
    },
    
    getUniqueIPs: function () {
        return this.stats.uniqueIPCount;
    },
    
    sortData: function ( data ) {

        const info = Object.entries( data );
        
        info.sort( function (a, b) {
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


