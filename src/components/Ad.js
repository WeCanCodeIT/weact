const Weact = require('../libs/weact')


const Ad = function(attributes, content) {
    return Weact.cweate("span", attributes, content) 
}

module.exports = Ad;