const Weact = require("../libs/weact");

const imageUrl = document.querySelector(".artist-image-url").value;

function ArtistCard(artist) {
    return Weact.cweate("section", {class: `artist-card`}, artist.name),
    Weact.cweate (
        "img",
        {class: `artist-card__avatar`, src: artist.imageUrl},
        ""
    ),
    Weact.cweate("section", {class: `artist-card__album`}, artist.album)
}

module.exports = ArtistCard;