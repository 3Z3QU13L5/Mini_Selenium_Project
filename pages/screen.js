const {Builder, By, Key, until, WebDriverWait} = require("selenium-webdriver");
var {assert} = require("chai")

module.exports = {
    
    click_on: async function (driver, selector) {
        let element = await driver.findElement(By.css(selector));
        await element.click();
    },

    go_to: async function  (driver, url, selector) {

        // access login page
        await driver.get(url);
        await this.wait_by_css(driver, selector);
        
        let title = await driver.getTitle();
        return title
    },

    type_into: async function (driver, selector, input) {
        let element = await driver.findElement(By.css(selector));
        await element.sendKeys(input);
    },

    wait_by_id: async function (driver, selector) {
        await driver.wait(until.elementLocated(By.id(selector)));
    },

    wait_by_css: async function (driver, selector) {
        await driver.wait(until.elementLocated(By.css(selector)));
    },

    wait_load: async function (driver, selector) {
        // get url
        let url = await driver.getCurrentUrl();

        // wait for home page to load on twitter
        url.includes('twitter') ?
            await this.wait_by_css(driver, selector):
            await this.wait_by_css(driver, selector);
    }
    
}