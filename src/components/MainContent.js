const Weact = require('../libs/weact.js');
const Container = require('./Container'); // < - Still Needed
const ContentCard = require('./ContentCard'); // < - Needs Created

function MainContent() {
    return Weact.cweate(
        "div", 
        { class: "main__content"},
         )
}

module.exports = MainContent;
