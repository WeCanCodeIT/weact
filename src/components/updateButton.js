const Weact = require("../libs/weact");
const Button = require("./Button");
const appContainer = document.querySelector(".app");



async function updateItem(artistId){
       const updateForm =  Weact.cweate("form", { onsubmit: handleUpdateSubmit }, [
          Weact.cweate(
            "input",
            { class: "update-name", placeholder: "New Name", type: "text" },
            ""
          ),
          Weact.cweate(
            "input",
            { class: "update-image-link", placeholder: " New Image Url", type: "text" },
            ""
          ),
          Button({ type: "submit" }, "Update"),
        ]); 
       return Weact.wender(appContainer, updateForm)
}

async function handleUpdateSubmit(event, artistId) {
    event.preventDefault();

    const name = document.querySelector(".update-name").value;
    const imageUrl = document.querySelector(".update-image-link").value;
    const path = `http://localhost:3000/artists/`+artistId
    let response  = await fetch(path, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl
    }).then(data=>{
        console.log(data)
    })
  }).then(response =>{
      console.log(response)
  })

}



module.exports = updateItem;