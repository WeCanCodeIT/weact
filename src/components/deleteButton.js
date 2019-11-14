const Weact = require("../libs/weact");
const Button = require("./Button");
const appContainer = document.querySelector(".app");


async function deleteItem(artistId, artistName){
    try{
        const path = `http://localhost:3000/artists/`+artistId;
    await fetch(path, {
      method: "DELETE"})
       let artistDed =  document.getElementById(artistId);
       let sectionDelete = document.getElementById(artistName);
       artistDed.parentNode.removeChild(artistDed);
       sectionDelete.parentNode.removeChild(sectionDelete);
   
       document.getElementById(artistId).remove();
    }catch(err){
        console.log(err)
    }
}

module.exports = deleteItem;
