//const {Builder, By, Key, until, WebDriverWait} = require("selenium-webdriver");
const loginTest = require("./tests/loginTest");
const facebook_page = require("./selectors/facebook");
const twitter_page = require("./selectors/twitter");

loginTest.succesfulLogin('firefox', twitter_page, 'twitter');
loginTest.succesfulLogin('firefox', facebook_page, 'facebook');