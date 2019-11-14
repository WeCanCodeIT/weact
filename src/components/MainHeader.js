const Weact = require("../libs/weact");
const Button = require("./Button");
const Navbar = require("./navbar");

function MainHeader () {
    return Weact.cweate(
        "header", {
            class: "header"
        },
        [
            Navbar({} [Button()] )
        ]
    );
}

module.exports = MainHeader;