const {Builder, By, Key, until, WebDriverWait} = require("selenium-webdriver");
var {assert} = require("chai")

module.exports = {
    accessPage: async function  (driver, expectedTitle, url) {
    
        // access login page
        await driver.get(url);
        
        await driver.wait(until.elementLocated(By.id(page.uid_input)));

        // assertion correct page 0_0" not ready yet
        let title = await driver.getTitle();
        assert.equal(title, expectedTitle, "Couldn't access to the loging page");
    },

    go_to: async function  (driver, url, selector) {
    
        // access login page
        await driver.get(url);
        
        this.wait_by_css(driver, selector);
        
        let title = await driver.getTitle();
        
        return title
    },

    wait_by_id: async function (driver, selector) {
        await driver.wait(until.elementLocated(By.id(selector)));
    },

    wait_by_css: async function (driver, selector) {
        await driver.wait(until.elementLocated(By.css(selector)));
    },
}