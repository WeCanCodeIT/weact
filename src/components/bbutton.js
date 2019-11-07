const Weact = require("../libs/weact");

const Button = function(attributes, content) {
    return Weact.cweate("Button", attributes, content);
  };
  
  module.exports = Button;