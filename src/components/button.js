const Weact = require("../libs/weact");

const button = function(attributes, content) {
    return Weact.cweate("button", attributes, content);
  };
  
  module.exports = button;