const Weact = require("../libs/weact");
const button = require("./button");
const wavbar = require("./wavbar");

function MainHeader () {
    return Weact.cweate(
        "header", {
            style: `background-color: #4B0082; 
                    display: flex;
                    justify-content: space-between;
                    padding: 2rem;`
        },
        [
            wavbar({} [button()] )
        ]
    );
}
module.exports = MainHeader;