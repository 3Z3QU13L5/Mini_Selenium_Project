const {Builder, By, Key, until, WebDriverWait} = require("selenium-webdriver");
const basepage = require("./screen");

module.exports = class homepage extends basepage {
    constructor () {
        super();
    }

    async make_post (data, page) {
        //click new post button
        await this.click_on(page.input_placeholder);
        //construct selector
        let selector = await this.create_selector(page.text_input, data.Name.split(" ", 1));
        //wait for module
        await this.wait_by_css(selector);
        //click text area
        await this.click_on(selector);
        //type post
        await this.type_into(selector, data.message);
        //publish post
        await this.click_on(page.post_button);
    }
    
}