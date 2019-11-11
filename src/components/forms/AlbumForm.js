const Weact = require("../../libs/weact");
const Http = require("../../utils/http");
const Button = require("../Button");

async function handleSubmit(event) {
    const title = document.querySelector(".album-title").value;
    const genre = document.querySelector(".album-genre").value;
    const year = document.querySelector(".album-year").value;
    const response  = await fetch (`http://localhost:3000/albums`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            genre,
            year
        })
    });
}

function AlbumForm() {
    document.querySelector(".container").innerHTML = "";
    return Weact.cweate("form",{ onsubmit: handleSubmit},[
    Weact.cweate(
        
        "input",
        { class: "album-title", 
        placeholder: "Lemonade", 
        type: "text"
        },

    ),

    Weact.cweate(
        "input", 
        { class: "album-genre", 
        placeholder: "R&B" , 
        type: "text"
        },
        
    ),

    Weact.cweate(
     "input", 
        { class: "album-year",
        placeholder: "2016",
        type: "text"
    }),

    Button({ type: "submit" }, "Submit")
]);
}

module.exports = AlbumForm;