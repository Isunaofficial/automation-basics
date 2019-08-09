// This is the object(s)
module.exports = {
    url: ('https://devmountain-qa.github.io/Automation-Basics/build/'),
    elements: {
        eOBtn: '[name="evenOddButton"]',
        obFilBtn: '[name="objectFilterButton"]',
        namFilBtn: '[id="nameFilterButton"]',
        palBtn: '[name="palindromeButton"]',
        sumBtn: '[name="sumButton"]',
        // Another partiton for my brain
        eOIn: '[name="evenOddInput"]',
        oFIn: '[name="objectFilterInput"]',
        nFIn: '[id="nameFilterInput"]',
        pIn: '[name="palindromeInput"]',
        sIn1: '[name="sumInput1"]',
        sIn2: '[name="sumInput2"]',
        // Just a partition for confusion's sake lol
        evenOddButton: {
            selector: '//button[@name="evenOddButton"]',
            locateStrategy: 'xpath'
        },
        objectFilterButton: {
            selector: '//button[@name="objectFilterButton"]',
            locateStrategy: 'xpath'
        },
        nameFilterButton: {
            selector: '//button[@name="nameFilterButton"]',
            locateStrategy: 'xpath'
        },
        palindromeButton: {
            selector: '//button[@name="palindromeButton"]',
            locateStrategy: 'xpath'
        },
        sumButton: {
            selector: '//button[@name="sumButton"]',
            locateStrategy: 'xpath'
        },
        // A partition between buttons and inputs
        evenOddInput: {
            selector: '//input[@name="evenOddInput"]',
            locateStrategy: 'xpath'
        },
        objectFilterInput: {
            selector: '//input[@name="objectFilterInput"]',
            locateStrategy: 'xpath'
        },
        nameFilterInput: {
            selector: '//input[@name="nameFilterInput"]',
            locateStrategy: 'xpath'
        },
        palindromeInput: {
            selector: '//input[@name="palindromeInput"]',
            locateStrategy: 'xpath'
        },
        sumInput1: {
            selector: '//input[@name="sumInput1"]',
            locateStrategy: 'xpath'
        },
        sumInput2: {
            selector: '//input[@name="sumInput2"]',
            locateStrategy: 'xpath'
        }
    }
}