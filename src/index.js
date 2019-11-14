const Weact = require("./libs/weact");
const MainHeader = require("./components/MainHeader");
const Button = require("./components/Button");
const appContainer = document.querySelector(".app");
const adCreator = require("./components/Ad");
const ArtistForm = require("./components/forms/ArtistForm");
const AlbumForm = require("./components/forms/AlbumForm");
const SongForm = require("./components/forms/SongForm");
const footer = document.createElement("footer");
const queenBee = document.createElement("img");

//BUTTON AREA DOMAIN AREA PART
const artistButton = Button(
  { class: "nav-button", onclick: renderArtistForm },
  "Artists"
);
const albumButton = Button(
  { class: "nav-button", onclick: renderAlbumForm },
  "Albums"
);
const songButton = Button(
  { class: "nav-button", onclick: renderArtistForm },
  "Songs"
);

function renderArtistForm() {
  Weact.wender(document.querySelector(".container"), ArtistForm());
}
async function renderAlbumForm() {
  Weact.wender(document.querySelector(".container"), await AlbumForm());
}
async function renderSongForm() {
  Weact.wender(document.querySelector(".container"), await SongForm());
}

//Create Headers
const header = Weact.cweate(
  "h2",
  { class: "header-queen" },
  "Queen Bee Catalog"
);
const wavbar = Weact.cweate(
  "nav",
  { class: "navbar", onmouseover: "onHoverBeyonce()" },
  ""
);
const flavor = Weact.cweate(
  "h3",
  { class: "header-flavor" },
  "Your number one source for the queen"
);

//Create Container

const container = Weact.cweate("section", { class: "container" }, "");

const content = document.querySelector(".container");

queenBee.src = "./img/hiclipart.com-id_qnvkp.png";
queenBee.classList.add("queen");

Weact.wender(appContainer, wavbar);
Weact.wender(wavbar, flavor);
Weact.wender(wavbar, header);
Weact.wender(appContainer, container);
Weact.wender(appContainer, queenBee);

renderArtistForm();

// BUTTONS
Weact.wender(wavbar, artistButton);
Weact.wender(wavbar, albumButton);
Weact.wender(wavbar, songButton);
wavbar.onmouseover = function onHoverBeyonce() {
  queenBee.src = "./img/beyonce-happy.png";
};
wavbar.onmouseout = function onOutBeyonce() {
  queenBee.src = "./img/hiclipart.com-id_qnvkp.png";
};

//Landing Page for Development
