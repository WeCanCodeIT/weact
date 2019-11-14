const Weact = require("../../libs/weact");
const Http = require("../../utils/http");
const Button = require("../Button");
const artistCard = require("../ArtistCard");
const appContainer = document.querySelector(".app");
const deleteButton = require("../deleteButton");
const updateButton = require("../updateButton");
const renderAll = require("../renderAll");

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
      return renderAll()
    })
   
}

function ArtistForm() {
  document.querySelector(".container").innerHTML = "";
  renderAll();
  return Weact.cweate("form", { onsubmit: handleSubmit }, [
    Weact.cweate(
      "input",
      { class: "artist-name", placeholder: "Artist Name", type: "text" },
      ""
    ),

    Weact.cweate(
      "input",
      { class: "artist-image-link", placeholder: "Image Url", type: "text" },
      ""
    ),
  

    Button({ type: "submit" }, "Submit"),
    
    
  ]);
 
}


module.exports = ArtistForm;
