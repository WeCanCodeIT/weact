const Weact = require("../../libs/weact");
const Http = require("../../utils/http");
const Button = require("../Button");

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
      return response.json();
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
}

module.exports = ArtistForm;
