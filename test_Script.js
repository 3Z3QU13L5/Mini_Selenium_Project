const loginTest = require("./tests/loginTest");
const facebook_page = require("./selectors/facebook");
const twitter_page = require("./selectors/twitter");

describe('Facebook', function() {
    describe('Log In',  function() {
        it('Should be able to log in successfully to facebook', async function() {
            const facebook = new loginTest('firefox', facebook_page);
            await facebook.succesfulLogin();
        })
    });
});

describe('Twitter', function() {
    describe('Log In',  function() {
        it('Should be able to log in successfully to twitter', async function() {
            const twitter = new loginTest('firefox', twitter_page);
            await twitter.succesfulLogin();
        })
    });
});