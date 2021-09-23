const loginPage = require("./Facebook/loginpage");
const homepage = require("./Facebook/homepage");

module.exports = {
    url: 'https://www.facebook.com',
    login: {...loginPage},
    homepage: {...homepage},
}