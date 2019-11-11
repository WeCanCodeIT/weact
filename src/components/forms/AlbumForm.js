const Weact = require("../../libs/weact");
const Http = require("../../utils/http");
const Button = require("../Button");

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
    const artistResponse = await Http.getRequest(
        "http://localhost:3000/artists",
       (response) =>{
        const newArr = response;
        const artistArray = newArr.artists;
        const artistNames = artistArray.names;
        console.log(artistArray)
        // artistArray.forEach(item =>{
        //   Weact.wender(appContainer, Button( {class: "button", id: item._id, onclick:()=> deleteButton(item._id, item.name)},
        //   "delete"))
        //  let name = Weact.cweate("section", {class: `artist-card__name`, id : item.name},item.name)
        //  Weact.wender(appContainer,name )
        // })
      })
    }

        // return Weact.cweate("select", { class: "artist-id" }, artistOptionElements);
  
        
        // (response)=>{
        //     const artists = response.artists
        //     artists.forEach(artist =>{
        //         console.log(artist)      
        //         return Weact.cweate("option", { value: artist._id }, artist.name);
        //     })
    //     }
    //     ); 
    // };

   



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