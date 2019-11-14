const Weact = require("../libs/weact");
const Http = require("../utils/http");
const Button = require("./Button");

const appContainer = document.querySelector(".app");
const deleteButton = require("./deleteButton");
const updateButton = require("./updateButton");

async function renderAllArtist(){
    document.querySelector(".container").innerHTML = "";
    const artistResponse = await Http.getRequest(
      "http://localhost:3000/artists",
     (response) =>{
       
      const newArr = response;
      const artistArray = newArr.artists;
      artistArray.forEach(item =>{
        const container = document.querySelector(".container")
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
       Weact.wender(container,section)
      })
    })
  }




 

  module.exports = renderAllArtist;