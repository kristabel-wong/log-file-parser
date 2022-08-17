
# The Task

The task is to parse a log file containing HTTP requests and to report on its contents. For a given log file we want to know:
* The number of unique IP addresses 
* The top 3 most visited URLs
* The top 3 most active IP addresses

I have interpreted the second point to read paths, excluding domain name. i.e.

* `http://example.net/faq/`
* `/faq/`

The above are both counted as `/faq/` in my `urlFreq` object. 


Chosen Tech:
* Node.js
* Jest 


## Installation
```
git clone https://github.com/kristabel-wong/log-file-parser.git
cd log-file-parser
npm install 
node main.js   # to run with default filename
npm test       # to run test suite
```

Known issues:
* The entire file currently being loaded into memory. Can be slow when dealing with large files. 