const Weact = require("../../libs/weact");
const Http = require("../../utils/http");
const Button = require("../Button");
const BACKEND_URL = "http://localhost:3000/"



async function getArtists() {
    const artistsResponse = await fetch(
      "http://localhost:3000/artists", {
        mode: "cors",
        method: "GET",
        headers: {"Accept": "application/json"}
        })

        const allArtists = await artistsResponse.json();
        return allArtists
        }

async function ArtistDropDown() {

    const allArtists = await getArtists();
    console.log(allArtists.artists[0].name)

    const artistOptionElements = allArtists.artists.map(artist => {
        return Weact.cweate("option", { value: artist._id }, artist.name);
        });
    
        return Weact.cweate("select", { class: "artist-id" }, artistOptionElements);
        }
        

async function AlbumForm() {
   async function handleSubmit(event) {
        event.preventDefault();
        
            const title = document.querySelector(".album-title").value;
            const genre = document.querySelector(".album-genre").value;
            const year = document.querySelector(".album-year").value;
            const artistId = document.querySelector(".artist-id").value;
        
            const response  = await fetch (`http://localhost:3000/albums`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    genre,
                    year,
                    artistId
                })
            })
            .then(response => {
                console.log(response)
                document.querySelector(".container").innerHTML = "";
                return response.json();
            })
            
        }
    document.querySelector(".container").innerHTML = "";

    return Weact.cweate("form", { onsubmit: handleSubmit}, [
    Weact.cweate(
        "input",
        { class: "album-title", 
        placeholder: "Album Title", 
        type: "text"
        },
        ""
    ),

    Weact.cweate(
        "input", 
        { class: "album-genre", 
        placeholder: "Genre" , 
        type: "text"
        },
        ""
    ),

    Weact.cweate(
     "input", 
        { class: "album-year",
        placeholder: "Year Released",
        type: "text"
        },
        ""   
    ),
    
    await ArtistDropDown(),
    Button({ type: "submit" }, "Submit")
]);
}

module.exports = AlbumForm;