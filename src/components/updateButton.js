const Weact = require("../libs/weact");
const Button = require("./Button");
const appContainer = document.querySelector(".app");
const ArtistForm = require("./components/forms/ArtistForm");

async function updateItem(artistId, artistName, updates){
    try{
       let artistDed =  document.getElementById(artistId);
       let artistNameDel=  document.getElementById(artistName);
       artistDed.parentNode.removeChild(artistDed);
       artistName.parentNode.removeChild(artistNameDel);
       ArtistForm();
       const path = `http://localhost:3000/artists/`+artistId;
    await fetch(path, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        updates
      })
    }).then(response =>{
        return renderAllArtist()
    })


    }catch(err){
        console.log(err)
    }
}

module.exports = updateItem;