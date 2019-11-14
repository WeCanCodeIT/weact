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
      value: artist._id
    },
    artist.name
    ))
  })
  return artistList;
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

function createAlbumMap(artists) {
  const artistMap = {}
  artists.artists.map(artist => {
    artistMap[artist._id] = artist.albums;
  })
  return artistMap;
}

async function renderAlbums(event) {
  const artistId = event.target.value;
  document.querySelector(".selection-albums").innerHTML = "";
  const rawResponse = await fetch(API_URL + "artists/" + artistId, {
    mode: "cors",
    method: "GET",
    headers: {"Accept": "application/json"}
  })
  const artists = await rawResponse.json()
  const albumList = document.querySelector(".selection-albums")
  artists.foundArtist.albums.map(album => {
    const albumItem = Weact.cweate("option", {class: "selection-albums-item", value: album._id, onmouseover: album.year}, album.title)
    albumList.append(albumItem);
  })
}

async function renderSongs(event) {
  const albumId = event.target.value;
  document.querySelector(".selection-songs").innerHTML = "";
  const rawResponse = await fetch(API_URL + "albums/" + albumId, {
    mode: "cors",
    method: "GET",
    headers: {"Accept": "application/json"}
  })
  const albums = await rawResponse.json();
  const songList = document.querySelector(".selection-albums");
  console.log(albums);
  albums.requestedAlbum.songs.map(song => {
    const songItem = Weact.cweate("option", {class: "seleciton-songs-item", value: song._id}, song.title)
    songList.append(songItem);
  })
}

async function SongForm() {
  document.querySelector(".container").innerHTML = "";
  const res = await getArtists();
  const artistList = ArtistDropdown(res);
  const albumMap = createAlbumMap(res)
  return Weact.cweate("div", { class: "form-wrapper"}, [
    Weact.cweate("form", { onsubmit: handleSubmit }, 
      Weact.cweate("select", { class: "selection-artists", onchange: await renderAlbums}, artistList)
    ),
    Weact.cweate("form", { class: "form" },
      Weact.cweate("select", { class: "selection-albums", onchange: await renderSongs}, "")
    ),
    Weact.cweate("form", { class: "form"}, 
      Weact.cweate("select", { class: "selection-songs"}, "")
    )

  ])
}

  

module.exports = SongForm;
