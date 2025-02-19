const Weact = require("../libs/weact");
const imageUrl = document.querySelector(".content-image-url").value;
const contentClasses = {
    "artist": "main-content__artist",
    "album": "main-content__album",
    "song": "main-content__song",
    }

function ContentCard(artist) {
    return Weact.cweate("section", {class: `content-card`}, artist.name),
    Weact.cweate (
        "img",
        {class: `content-card__avatar`, src: artist.imageUrl} 
    ),
    Weact.cweate("section", {class: `content-card__album`}, artist.album)
}

module.exports = ContentCard;