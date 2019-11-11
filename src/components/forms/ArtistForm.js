const Weact = require("../../libs/weact");
const Http = require("../../utils/http");
const Button = require("../Button");
const artistCard = require("../ArtistCard")

async function handleSubmit(event) {
  event.preventDefault();

  const name = document.querySelector(".artist-name").value;
  const imageUrl = document.querySelector(".artist-image-link").value;

  const response = await fetch(`http://localhost:3000/artists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl
    })
  })
    .then(response => {
      return renderAllArtist()
    })
    .then(artist => {
      console.log(artist);
    });
}

function ArtistForm() {
  document.querySelector(".container").innerHTML = "";
  
  return Weact.cweate("form", { onsubmit: handleSubmit }, [
    Weact.cweate(
      "input",
      { class: "artist-name", placeholder: "Name", type: "text" },
      ""
    ),

    Weact.cweate(
      "input",
      { class: "artist-image-link", placeholder: "Image Url", type: "text" },
      ""
    ),

    Button({ type: "submit" }, "Submit")
  ]);
  async function renderAllArtist(){
    const artistResponse = await Http.getRequest(
      "http://localhost:3000/artists"
    )
    const responseArtists = await artistResponse.artists.map(artist => {
       console.log(artist)})
    return responseArtists;
    }
}





module.exports = ArtistForm;
