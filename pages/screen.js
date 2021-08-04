const {Builder, By, Key, until, WebDriverWait} = require("selenium-webdriver");
var {assert} = require("chai")

module.exports = class basepage {
    constructor () {
        global.driver; 
    }

    async click_on (selector) {
        let element = await driver.findElement(By.css(selector));
        await element.click();
    }

    async go_to (url, selector) {

        // access login page
        await driver.get(url);
        await this.wait_by_css(selector);
        
        let title = await driver.getTitle();
        return title
    }

    async type_into (selector, input) {
        let element = await driver.findElement(By.css(selector));
        await element.sendKeys(input);
    }

    async wait_by_id (selector) {
        await driver.wait(until.elementLocated(By.id(selector)));
    }

    async wait_by_css (selector) {
        await driver.wait(until.elementLocated(By.css(selector)));
    }

    async wait_load (selector) {
        // get url
        let url = await driver.getCurrentUrl();

        // wait for home page to load on twitter
        url.includes('twitter') ?
            await this.wait_by_css(selector):
            await this.wait_by_css(selector);
    }

    async set_driver (browser) {
        global.driver = new Builder().forBrowser(browser).build();
    }

    async check_element (selector, text = '') {
        
        let element = await driver.findElement(By.css(selector));
        let inText = await element.getText();
        let isPresent = await element.isDisplayed();
        let isCorrect = true;

        if (text) {
            isCorrect = text.includes(inText);
        }

        return {isPresent, isCorrect}
    }
}