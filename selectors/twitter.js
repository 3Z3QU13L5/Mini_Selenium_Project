const loginPage = require("./Twitter/loginpage");
const homepage = require("./Twitter/homepage")

module.exports = {
    url: 'https://twitter.com/login',
    login: {...loginPage},
    homepage: {...homepage}
}