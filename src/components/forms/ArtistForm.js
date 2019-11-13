const Weact = require("../../libs/weact");
const Http = require("../../utils/http");
const Button = require("../Button");
const artistCard = require("../ArtistCard");
const appContainer = document.querySelector(".app");
const deleteButton = require("../deleteButton");
const updateButton = require("../updateButton");


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
   
}

function ArtistForm() {
  document.querySelector(".container").innerHTML = "";
  
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
async function renderAllArtist(){
  
  const artistResponse = await Http.getRequest(
    "http://localhost:3000/artists",
   (response) =>{
     
    const newArr = response;
    const artistArray = newArr.artists;
    artistArray.forEach(item =>{
      const section = Weact.cweate( "section",
  { class: item._id, placeholder: "Artist Name", type: "text" },
 ""
)
      Weact.wender(section, Button( {class: "button", id: item._id, onclick:()=> deleteButton(item._id, item.name)},
      "delete"))
      Weact.wender(section, Button( {class: "button", id: item._id, onclick:()=> updateButton(item._id)},
      "update"))
     let name = Weact.cweate("section", {class:item.name, id : item.name},item.name)
     Weact.wender(section,name )
     Weact.wender(appContainer,section)
    })
  })
}
module.exports = ArtistForm;
