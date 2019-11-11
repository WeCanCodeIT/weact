const Weact = require("./libs/weact");
const MainHeader = require("./components/MainHeader");
const Button = require("./components/Button");
const appContainer = document.querySelector(".app");
const adCreator = require("./components/Ad");
const ArtistForm = require("./components/forms/ArtistForm");
const footer = document.createElement("footer");
const queenBee = document.createElement("img");



//ARTIST BUTTON AREA DOMAIN AREA PART
const artistButton = Button(
  { class: "button", onclick: renderForm },
  "artists"
);
const albumButton = Button({ class: "button", onclick: renderForm }, "albums");
const songButton = Button({ class: "button", onclick: renderForm }, "songs");

Weact.wender(appContainer, artistButton);
Weact.wender(appContainer, albumButton);
Weact.wender(appContainer, songButton);

function renderForm() {
  Weact.wender(appContainer, ArtistForm());
}


const header = Weact.cweate(
  "h2",
  {},
  "Hola Mundo, vamos a prometir nuestrue vida a la Reyna Beyonce"
);
const wavbar = Weact.cweate(
  "nav",
  {
    style: "color: white",
    classname: "navbar",
    onmouseover: "onHoverBeyonce()"
  },
  "Awo yo, we got a wav bar wow witches"
);

let container = Weact.cweate("section", { class: "container" }, "");

const Ad = adCreator({ classname: "add" }, "Programer hate this one trick");

// wavbar.classList.add("navbar");
footer.classList.add("footer");
queenBee.src = "./img/hiclipart.com-id_qnvkp.png";
queenBee.classList.add("queen");

Weact.wender(appContainer, wavbar);
Weact.wender(wavbar, header);
Weact.wender(appContainer, footer);
Weact.wender(appContainer, Ad);
Weact.wender(appContainer, container);
Weact.wender(appContainer, queenBee);

wavbar.onmouseover = function onHoverBeyonce() {
  queenBee.src = "./img/beyonce-happy.png";
};
wavbar.onmouseout = function onOutBeyonce() {
  queenBee.src = "./img/hiclipart.com-id_qnvkp.png";
};
