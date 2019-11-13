const Weact = require('../libs/weact.js');
const Container = require('./Container'); // < - Still Needed
const ContentCard = require('./ContentCard');

function MainContent() {
    return Weact.cweate(
        "div", 
        { class: "main-content"},
         ""
    )
}

module.exports = MainContent;
