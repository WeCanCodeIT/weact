const Weact = require("../../libs/weact");
const Http = require("../../utils/http");
const Button = require("../Button");
const API_URL = "http://localhost:3000/";

async function getArtists() {
  const artistRes = await fetch(API_URL + "artists", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Accept": "application/json"
    }
  })
  const artists = await artistRes.json();
  return artists;
}
function ArtistDropdown(artists) {
  const artistList = []
  artists.artists.map(artist => {
    artistList.push(Weact.cweate("option", {
      class: "artist-option",
      value: artist._id,
      onselect: () => {AlbumDropdown}
    },
    artist.name
    ))
  })
  return artistList;
}

async function getAlbums(artists) {
  const albumRes = await fetch(API_URL + "albums", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Accept": "application/json"
    }
  })
  const albums = await albumRes.json();
  const songs = albums.songs;
  console.log(albums, songs);
  return albums;
}

async function handleSubmit(event) {
  const title = document.querySelector(".song-title").value;
  const duration = document.querySelector(".song-duration").value;
  const link = document.querySelector(".song-link").value;
  event.preventDefault();

  const response = await fetch(`http://localhost:3000/songs`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Accept": "application/json"
    },
    body: JSON.stringify({
      title,
      duration,
      link
    })
  });
}


async function SongForm() {
  document.querySelector(".container").innerHTML = "";
  const res = await getArtists();
  const artistList = ArtistDropdown(res);
  return Weact.cweate("form", { onsubmit: handleSubmit }, 
    Weact.cweate("select", { class: "selection"}, artistList)
  )

  console.log(res)
  

  

  return Weact.cweate("form", { onsubmit: handleSubmit }, [
    Weact.cweate(
      "input",
      { class: "song-title", placeholder: "Say My Name", type: "text" },
      ""
    ),
    Weact.cweate(
      "input",
      {
        class: "song-duration",
        placeholder: "Song Length (mm:ss)",
        type: "text"
      },
      ""
    ),

    Weact.cweate(
      "input",
      { class: "song-link", onchange: "Link to Song", type: "text" },
      ""
    ),

    Button({ type: "submit" }, "Submit")
  ]);

}

module.exports = SongForm;
