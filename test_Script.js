const loginTest = require("./tests/loginTest");
const facebook_page = require("./selectors/facebook");
const twitter_page = require("./selectors/twitter");

describe('Facebook', function() {
    describe('Log In',  function() {
        const facebook = new loginTest('firefox', facebook_page);
        it('Should be able to log in successfully to facebook', async function() {
            await facebook.succesfulLogin();
        })
        it('Should not be able to log in successfully to facebook', async function() {
            await facebook.unsuccesfulLogin();
        })
    });
});

describe('Twitter', function() {
    describe('Log In',  function() {
        const twitter = new loginTest('firefox', twitter_page);
        it('Should be able to log in successfully to twitter', async function() {
            await twitter.succesfulLogin();
        })
        it('Should not be able to log in successfully to twitter', async function() {
            await twitter.unsuccesfulLogin();
        })
    });
});