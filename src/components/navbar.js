const Weact = require("../libs/weact");

const wavbar = function(attributes, content) {
  return Weact.cweate("navbar", attributes, content);
};

module.exports = wavbar;
