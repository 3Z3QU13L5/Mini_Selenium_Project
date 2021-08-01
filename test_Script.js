const {Builder, By, Key, until, WebDriverWait} = require("selenium-webdriver");
const loginTest = require("./tests/loginTest");
const facebook_page = require("./selectors/facebook");
const twitter_page = require("./selectors/twitter");
var { assert } = require("chai");

describe('Facebook', function() {
    describe('Log In',  function() {
        it('Should be able to log in successfully to facebook', async function() {
            await loginTest.succesfulLogin('firefox', facebook_page, 'facebook');
        })
    });
});

describe('Twitter', function() {
    describe('Log In',  function() {
        it('Should be able to log in successfully to twitter', async function() {
            await loginTest.succesfulLogin('firefox', twitter_page, 'twitter');
        })
    });
});

//loginTest.succesfulLogin('firefox', twitter_page, 'twitter');
//loginTest.succesfulLogin('firefox', facebook_page, 'facebook');