const logAnalysis = require('../logAnalysis');

describe('logAnalysis', () => {
    // beforeEach(() => {
    //     // read the file before each test example
    //     logAnalysis.loadFile('programming-task-example-data_(1).log');
    // }); 

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
            expect(top3[0][0]).toBe('168.41.191.40');
            expect(top3[0][1]).toBe(4);
            expect(top3[1][0]).toBe('177.71.128.21');
            expect(top3[1][1]).toBe(3);
            expect(top3[2][0]).toBe('50.112.00.11');
            expect(top3[2][1]).toBe(3);
        });

    }); // end of IP related stats testing

    describe('URL related stats', () => {
        test('getMostVisitedURLs should return a sorted array of entries of requested size', () => {
            const top3 = logAnalysis.getMostVisitedURLs(3);
            expect(top3.length).toBe(3);
            expect(top3[0][0]).toBe('/faq/');
            expect(top3[0][1]).toBe(2); // 8
            expect(top3[1][0]).toBe('/docs/manage-websites/');
            expect(top3[1][1]).toBe(2); // 8
            expect(top3[2][0]).toBe('/intranet-analytics/');
            expect(top3[2][1]).toBe(1);
        });

    }); // end of URL related stats testing

}); // end Describe logAnalysis