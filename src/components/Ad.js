const Weact = require('../libs/weact')

const Ad = function(attributes, content) {
    return Weact.wender("span", attributes, content)
}

module.exports = Ad;