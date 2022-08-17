const logAnalysis = require('../logAnalysis');

const expectedTopIPs = [
    [ '168.41.191.40', 4 ],
    [ '177.71.128.21', 3 ],
    [ '50.112.00.11', 3 ]
];

const expectedTopURLs = [
    [ '/faq/', 2 ],
    [ '/docs/manage-websites/', 2 ],
    [ '/intranet-analytics/', 1 ]
];

describe('logAnalysis', () => {

    test('readTheFile should read the file contents', () => {
        logAnalysis.loadFile('programming-task-example-data_(1).log');
        expect(logAnalysis.fileContents.length).toBe(24);
    });

    describe('IP related stats', () => {
        test('getUniqueIPs should return correct count', () => {
            expect(logAnalysis.getUniqueIPs()).toBe(11);
        });
    
        test('getTopIPs should return a sorted array of entries of requested size', () => {
            const top3 = logAnalysis.getTopIPs(3);
            expect(top3.length).toBe(3);
            expect(top3).toEqual(expectedTopIPs);
        });

    }); // end of IP related stats testing

    describe('URL related stats', () => {
        test('getMostVisitedURLs should return a sorted array of entries of requested size', () => {
            const top3 = logAnalysis.getMostVisitedURLs(3);
            expect(top3.length).toBe(3);
            expect(top3).toEqual(expectedTopURLs);
        });

    }); // end of URL related stats testing

}); // end Describe logAnalysis