const Weact = require("../../libs/weact");
const Http = require("../../utils/http");
const Button = require("../Button");
const BACKEND_URL = "http://localhost:3000/"

async function handleSubmit(event) {
event.preventDefault();

    const title = document.querySelector(".album-title").value;
    const genre = document.querySelector(".album-genre").value;
    const year = document.querySelector(".album-year").value;
    const response  = await fetch (`http://localhost:3000/albums`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            genre,
            year
        })
    });
}
async function ArtistDropDown () {
    // Brad WOrking on this, js lawd.
    const artistRes = await fetch(BACKEND_URL+"artists", {
        method: 'GET',
        headers: "Accept: application/json"
    });
    const artists = await artistRes.json();
    console.log(artists);
    const artistResponse = await Http.getRequest(
        "http://localhost:3000/artists",
       async (response) =>{
        const {artistResponse} = await response.artists;
     
        console.log(artistResponse)
        
        const artistOptionElements = await artistResponse.map(artist => {
            return Weact.cweate("option", { value: "artist._id" }, artist.name);
          });
      
          return await Weact.cweate("select", { class: "artist-id" }, await artistOptionElements);
        })
        
      }
    

   
async function AlbumForm() {
    document.querySelector(".container").innerHTML = "";

    return Weact.cweate("form", { onsubmit: handleSubmit}, [
    Weact.cweate(
        
        "input",
        { class: "album-title", 
        placeholder: "Lemonade", 
        type: "text"
        },
        ""
    ),

    Weact.cweate(
        "input", 
        { class: "album-genre", 
        placeholder: "R&B" , 
        type: "text"
        },
        ""
    ),

    Weact.cweate(
     "input", 
        { class: "album-year",
        placeholder: "2016",
        type: "text"
        },
        ""   
    ),
    await ArtistDropDown(),
    Button({ type: "submit" }, "Submit")
]);
}

module.exports = AlbumForm;