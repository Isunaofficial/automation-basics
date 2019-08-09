// This is the actual test
var autoBasics
module.exports = {
    beforeEach: browser => {
        autoBasics = browser.page.pageObjects()
        autoBasics.navigate()
    },
    'Evens and Odds': browser => {
        autoBasics
            .api.useXpath()
        autoBasics
            .setValue('@eOIn', '1, 3, 5, 7, 8, 10, 442')
            .click('@eOBtn')
            .expect.element('//span[@name="evenResults"]').text.to.contain('Evens: [8,10,442]')
        autoBasics
            .expect.element('//span[@name="oddResults"]').text.to.contain('Odds: [1,3,5,7]')
        autoBasics
            .api.pause(1000)
        autoBasics
            .setValue('@oFIn', 'name')
            .click('@obFilBtn')
            .expect.element('//span[@name="objectFilterResults"]').text.to.contain('Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]')
        autoBasics
            .clearValue('@oFIn')
            .setValue('@oFIn', 'title')
            .expect.element('//span[@name="objectFilterResults"]').text.to.contain('Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]')
        autoBasics
            .setValue('@nFIn', 'James')
            .click('@namFilBtn')
            .expect.element('//span[@name="nameFilterResults"]').text.to.contain('Filtered Names: [ "James" ]')
        autoBasics
            .clearValue('@nFIn')
            .api.pause(700)
        autoBasics
            .setValue('@nFIn', 'Jessica')
            .click('@namFilBtn')
            .expect.element('//span[@name="nameFilterResults"]').text.to.contain('Filtered Names: [ "Jessica" ]')
        autoBasics
            .clearValue('@nFIn')
            .api.pause(700)
        autoBasics
            .setValue('@nFIn', 'Melody')
            .click('@namFilBtn')
            .expect.element('//span[@name="nameFilterResults"]').text.to.contain('Filtered Names: [ "Melody" ]')
        autoBasics
            .clearValue('@nFIn')
            .api.pause(700)
        autoBasics
            .setValue('@nFIn', 'Tyler')
            .click('@namFilBtn')
            .expect.element('//span[@name="nameFilterResults"]').text.to.contain('Filtered Names: [ "Tyler" ]')
        autoBasics
            .clearValue('@nFIn')
            .api.pause(700)
        autoBasics
            .setValue('@nFIn', 'Blake')
            .click('@namFilBtn')
            .expect.element('//span[@name="nameFilterResults"]').text.to.contain('Filtered Names: [ "Blake" ]')
        autoBasics
            .clearValue('@nFIn')
            .api.pause(700)
        autoBasics
            .setValue('@nFIn', 'Jennifer')
            .click('@namFilBtn')
            .expect.element('//span[@name="nameFilterResults"]').text.to.contain('Filtered Names: [ "Jennifer" ]')
        autoBasics
            .clearValue('@nFIn')
            .api.pause(700)
        autoBasics
            .setValue('@nFIn', 'Mark')
            .click('@namFilBtn')
            .expect.element('//span[@name="nameFilterResults"]').text.to.contain('Filtered Names: [ "Mark" ]')
        autoBasics
            .clearValue('@nFIn')
            .api.pause(700)
        autoBasics
            .setValue('@nFIn', 'Maddy')
            .click('@namFilBtn')
            .expect.element('//span[@name="nameFilterResults"]').text.to.contain('Filtered Names: [ "Maddy" ]')
        autoBasics
            .setValue('@pIn', 'pooppoophahahpooppoop')
            .click('@palBtn')
            .expect.element('//span[@name="palindromeResults"]').text.to.contain('Palindrome: true')
        autoBasics
            .clearValue('@pIn')
            .setValue('@pIn', 'amanaplanacanalpanama')
            .click('@palBtn')
            .expect.element('//span[@name="palindromeResults"]').text.to.contain('Palindrome: true')
        autoBasics
            .clearValue('@pIn')
            .setValue('@pIn', 'ooooooooooooooooo')
            .click('@palBtn')
            .expect.element('//span[@name="palindromeResults"]').text.to.contain('Palindrome: true')
        autoBasics
            .clearValue('@pIn')
            .setValue('@pIn', 'lmao')
            .click('@palBtn')
            .expect.element('//span[@name="palindromeResults"]').text.to.contain('Palindrome: false')
        autoBasics
            .setValue('@sIn1', '40')
            .click('@sumBtn')
            .expect.element('//span[@name="sumResults"]').text.to.contain('Sum: 40')
        autoBasics
            .setValue('@sIn2', '29')   
            .click('@sumBtn')
            .expect.element('//span[@name="sumResults"]').text.to.contain('69')
        autoBasics
            .clearValue('@sIn1')
            .clearValue('@sIn2')
            .setValue('@sIn1', '419')
            .setValue('@sIn2', '1')
            .click('@sumBtn')
            .expect.element('//span[@name="sumResults"]').text.to.contain('420')
        autoBasics
    }
}