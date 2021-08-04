//const {Builder, By, Key, until, WebDriverWait} = require("selenium-webdriver");
const loginTest = require("./tests/loginTest");
const facebook_page = require("./selectors/facebook");
const twitter_page = require("./selectors/twitter");

// First working test Successful Log in
const facebook = new loginTest('firefox', facebook_page);
facebook.succesfulLogin();

// const twitter = new loginTest('firefox', twitter_page);
// twitter.succesfulLogin();

// Secong working test Unsuccessful Log in