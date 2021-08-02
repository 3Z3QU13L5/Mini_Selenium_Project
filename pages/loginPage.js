const {Builder, By, Key, until, WebDriverWait} = require("selenium-webdriver");
const basepage = require("./screen");

module.exports = {
    valid_login: async function (driver, data, page) {
        
        // wait for a web element to be located
        await basepage.wait_by_css(driver, page.uid_input);
        
        // actions on web elements
        await basepage.type_into(driver, page.uid_input, data.email);
        await basepage.type_into(driver, page.password_input, data.password);
        await basepage.click_on(driver, page.login_button);
    },

    invalid_login: async function (driver, data, page) {
        
        // wait for a web element to be located
        await basepage.wait_by_css(driver, page.uid_input);
        
        // actions on web elements
        await basepage.type_into(driver, page.uid_input, data.email);
        await basepage.type_into(driver, page.password_input, "wrongpassword");
        await basepage.click_on(driver, page.login_button);
    }
}