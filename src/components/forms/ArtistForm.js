const Weact = require('../../libs/weact');
const Http = require('../../utils/http');
const Button = require('../Button');

function handleSubmit(event) {
    event.preventDefault();
}

function ArtistForm() {
    document.querySelector(".container").innerHTML = "";
    return Weact.cweate ("form", { onsubmit: handleSubmit }, [
        Weact.cweate(
        "input", 
        {class:"artist-name", name: "Name", type: "text"},
        ""),
        
        Weact.cweate(
        "input", 
        {class: "artist-image-link", placeholder: "Image Url", type: "text" }, 
        ""),

        Button({type:"submit"}, "Submit",)
    ])
}

module.exports = ArtistForm;