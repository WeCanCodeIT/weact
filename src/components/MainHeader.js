const Weact = require("../libs/weact");
const Button = require("./Button");
const wavbar = require("./navbar");

// *********************************************************** //
// What in the FUCK is This styling doing here?!?!!!? DAfuq!!??
// *********************************************************** //
function MainHeader () {
    return Weact.cweate(
        "header", {
            style: `background-color: #4B0082; 
                    display: flex;
                    justify-content: space-between;
                    padding: 2rem;`
        },
        [
            wavbar({} [Button()] )
        ]
    );
}
// *********************************************************** //

module.exports = MainHeader;