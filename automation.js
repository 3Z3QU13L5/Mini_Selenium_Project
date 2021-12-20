//const {Builder, By, Key, until, WebDriverWait} = require("selenium-webdriver");
const loginPage = require("./pages/loginPage.js");
const homePage = require("./pages/homePage.js");
const screen = require("./pages/screen.js");
const facebook_page = require("./selectors/facebook");
const twitter_page = require("./selectors/twitter");
const testData = require("./testData");

// First working test Successful Log in
// const facebook = new loginTest('firefox', facebook_page);
// facebook.succesfulLogin();
// facebook.unsuccesfulLogin();

// const twitter = new loginTest('firefox', twitter_page);
// twitter.succesfulLogin();
// twitter.unsuccesfulLogin();

// s.log('div[aria-label="What\'s on your mind, Nancy?"]');

// Secong working test Unsuccessful Log in

async function main (page) {
    const login = await new loginPage();
    await login.set_driver('firefox');
    let title = await login.go_to(page.url, page.login.uid_input);
    page.url.includes('facebook') ? 
            await login.valid_login(testData.facebook, page.login) : 
            await login.valid_login2steps(testData.twitter, twitter_page.login);
    const home = await new homePage();
    let driver = await login.get_driver();
    await home.set_newDriver(driver);
    page.url.includes('facebook') ? 
        await home.make_post(testData.facebook, page.homepage):
        await home.make_post(testData.twitter, page.homepage);
};

main(facebook_page);
main(twitter_page);