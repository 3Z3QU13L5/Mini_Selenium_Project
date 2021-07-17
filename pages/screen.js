const {Builder, By, Key, until, WebDriverWait} = require("selenium-webdriver");

module.exports = {
    accessPage: async function  (driver, expectedTitle, url) {
    
        // access login page
        await driver.get(url);
        
        // assertion correct page 0_0" not ready yet
        let title = await driver.getTitle();
        console.log(title, expectedTitle);
    },
}