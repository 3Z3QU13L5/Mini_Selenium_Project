const {Builder, By, Key, until, WebDriverWait} = require("selenium-webdriver");
const {facebook, twitter} = require("../testData");
//const pageObject = require("../pageObject");
var {assert, expect} = require("chai");
const login = require("../pages/loginPage");

module.exports = class loginTest extends login {
    constructor(browser, page) {
        super();
        this.browser = browser;
        this.page = page;
    }
    
    async succesfulLogin () {

        await this.set_driver(this.browser)
        
        let title = await this.go_to (this.page.url, this.page.login.uid_input)
        expect(this.page.login.page_title).to.include(title, "Couldn't access to the loging page");
        //assert.equal(title, this.page.login.page_title, );

        this.page.url.includes('facebook') ? 
            await this.valid_login(facebook, this.page.login) : 
            await this.valid_login(twitter, this.page.login);
        

        // waiting for page to loadd
        await this.wait_load(this.page.login.waiting_element);

        // assertion succesful login 0_0" not ready yet
        title = await driver.getTitle();
        let expectedTitle = this.page.homepage.page_title;
        
        //assert.equal(title.toLowerCase(), expectedTitle.toLowerCase(), "Couldn't login to the Hompage");
        expect(expectedTitle).to.include(title, "Couldn't login to the Hompage");

        await driver.close(); 
    }
}