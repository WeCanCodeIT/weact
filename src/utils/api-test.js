const dropDownAlbum = async (event) => {
    const albums = await fetch(API_URL + "albums", {
      method: "GET",
      cache: "no-cache"
    })
    return albums;
}


module.exports = dropDownAlbum;

