const {Builder, By, Key, until, WebDriverWait} = require("selenium-webdriver");

module.exports = {
    
    login: async function (driver, data, page, successful = true) {
        // web elements
        let uidInput = await driver.findElement(By.id(page.uid_input))
        let passwordInput = await driver.findElement(By.id(page.password_input));
        let loginButton = await driver.findElement(By.name(page.login_button));
        
        // actions on web elements
        await uidInput.sendKeys(data.email);
        await passwordInput.sendKeys(successful? data.password:'wrongPassword');
        await loginButton.click();
    }
}