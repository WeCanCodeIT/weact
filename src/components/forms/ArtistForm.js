const Weact = require("../../libs/weact");
const Http = require("../../utils/http");
const Button = require("../Button");
const artistCard = require("../ArtistCard");
const appContainer = document.querySelector(".app");
const content = document.querySelector(".container");
const deleteButton = require("../deleteButton");

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
  }).then(response => {
    return renderAllArtist();
  });
}

function ArtistForm() {
  document.querySelector(".container").innerHTML = "";

  //Weact.cweate("h2", { class: "artist-title" });
  return Weact.cweate(
    "form",
    { onsubmit: handleSubmit },
    [
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

      Button({ type: "submit" }, "Submit")
    ],
    renderAllArtist()
  );
}
async function renderAllArtist() {
  const artistResponse = await Http.getRequest(
    "http://localhost:3000/artists",
    response => {
      const newArr = response;
      const artistArray = newArr.artists;
      artistArray.forEach(item => {
        Weact.wender(
          document.querySelector(".container"),
          Button(
            {
              class: "button",
              id: item._id,
              onclick: () => deleteButton(item._id, item.name)
            },
            "delete"
          )
        );
        let name = Weact.cweate(
          "section",
          { class: `artist-card__name`, id: item.name },
          item.name
        );
        Weact.wender(document.querySelector(".container"), name);
      });
    }
  );
}
module.exports = ArtistForm;
