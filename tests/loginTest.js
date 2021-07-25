const {Builder, By, Key, until, WebDriverWait} = require("selenium-webdriver");
const {facebook, twitter} = require("../testData");
const pageObject = require("../pageObject");

module.exports = { 
    succesfulLogin: async function (browser, page, site) {
        
        let driver = new Builder().forBrowser(browser).build();
        
        await pageObject.accessPage (driver, page.page_title, page.url)
        
        site == 'facebook' ? await pageObject.login(driver, facebook, page) : await pageObject.login_attributes(driver, twitter, page);
        
        // assertion succesful login 0_0" not ready yet
        title = await driver.getTitle();
        console.log(title);

        // 
        await driver.close(); 
    },
}