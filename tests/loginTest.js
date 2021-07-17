const {Builder, By, Key, until, WebDriverWait} = require("selenium-webdriver");
const testData = require("../testData");
const pageObject = require("../pageObject");

module.exports = { 
    succesfulLogin: async function (browser, page) {
        
        let driver = new Builder().forBrowser(browser).build();
        
        await pageObject.accessPage (driver, page.page_title, page.url)
        await pageObject.login(driver, testData, page);
        
        // assertion succesful login 0_0" not ready yet
        title = await driver.getTitle();
        console.log(title);

        // 
        await driver.close(); 
    },
}