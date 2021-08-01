const {Builder, By, Key, until, WebDriverWait} = require("selenium-webdriver");
const {facebook, twitter} = require("../testData");
const pageObject = require("../pageObject");
var {assert} = require("chai");

module.exports = { 
    succesfulLogin: async function (browser, page, site) {
        let driver = new Builder().forBrowser(browser).build();
        
        let title = await pageObject.go_to (driver, page.url, page.uid_input)
        //assert.equal(title, page.page_title, "Couldn't access to the loging page");

        page.url.includes('facebook') ? 
            await pageObject.login(driver, facebook, page) : 
            await pageObject.login(driver, twitter, page);
        
        // assertion succesful login 0_0" not ready yet
        title = await driver.getTitle();
        assert.equal(title.toLowerCase(), site.toLowerCase(), "Couldn't log in to the Hompage");

        await driver.close(); 
    },
}