const {Builder, By, Key, until, WebDriverWait} = require("selenium-webdriver");
const basepage = require("./screen");

module.exports = class homepage extends basepage {
    constructor () {
        super();
    }

    async make_post (data, page) {
        //wait for new post button
        await this.wait_by_css(page.input_placeholder)
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

    async post_isPresent (data, page){
        
        let message = data.message;

        await this.wait_by_css(page.post);

        let {isPresent, isCorrect} = await this.check_element(page.post, message);

        return {isPresent, isCorrect};
    }
    
    async comment_post(data, page){

        let comment = data.comment;

        await this.wait_by_css(page.homepage.comment_input);

        await this.click_on(page.homepage.comment_input);

        await this.type_bySteps(page.homepage.comment_input, comment);
    }
}