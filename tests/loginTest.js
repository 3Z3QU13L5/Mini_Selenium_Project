const {Builder, By, Key, until, WebDriverWait} = require("selenium-webdriver");
const {facebook, twitter} = require("../testData");
const pageObject = require("../pageObject");
var {assert} = require("chai");

module.exports = { 
    succesfulLogin: async function (browser, page, site) {
        
        let driver = new Builder().forBrowser(browser).build();
        
        let title = await pageObject.go_to (driver, page.url, page.login.uid_input)
        assert.equal(title, page.login.page_title, "Couldn't access to the loging page");

        page.url.includes('facebook') ? 
            await pageObject.valid_login(driver, facebook, page.login) : 
            await pageObject.valid_login(driver, twitter, page.login);
        

        // waiting for page to loadd
        await pageObject.wait_load(driver, page.login.waiting_element);

        // assertion succesful login 0_0" not ready yet
        title = await driver.getTitle();
        let expectedTitle = page.homepage.page_title;
        
        assert.equal(title.toLowerCase(), expectedTitle.toLowerCase(), "Couldn't log in to the Hompage");

        await driver.close(); 
    },
}