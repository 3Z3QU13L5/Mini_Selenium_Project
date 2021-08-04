const {Builder, By, Key, until, WebDriverWait} = require("selenium-webdriver");
const basepage = require("./screen");

module.exports = class login extends basepage {
    constructor () {
        super();
    }

    async valid_login (data, page) {
        
        // wait for a web element to be located
        await this.wait_by_css(page.uid_input);
        
        // actions on web elements
        await this.type_into(page.uid_input, data.email);
        await this.type_into(page.password_input, data.password);
        await this.click_on(page.login_button);
    }

    async invalid_login (data, page) {
        
        // wait for a web element to be located
        await this.wait_by_css(page.uid_input);
        
        // actions on web elements
        await this.type_into(page.uid_input, data.email);
        await this.type_into(page.password_input, "wrongpassword");
        await this.click_on(page.login_button);
    }
}