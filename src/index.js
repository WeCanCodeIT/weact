const Weact = require("./libs/weact");
const MainHeader = require("./components/MainHeader")
// const wavbar = require("./components/navbar");

const appContainer = document.querySelector(".app");
const footer = document.createElement("footer");
const queenBee = document.createElement("img");
const beeButton = document.createElement("button");


const header = Weact.cweate(
  "h2",
  { },
  "Hola Mundo, vamos a prometir nuestrue vida a la Reina Beyonce"
);
const wavbar = Weact.cweate(
  "nav",
  { style: "color: white", classname: "navbar" },
  "Awo yo, we got a wav bar wow witches"
);
wavbar.classList.add("navbar");
footer.classList.add("footer");
queenBee.src = "./img/hiclipart.com-id_qnvkp.png";
queenBee.classList.add("queen");
beeButton.textContent = "Hail to the Queen";

Weact.wender(appContainer, wavbar);
Weact.wender(wavbar, header);
Weact.wender(appContainer, footer);
Weact.wender(appContainer, queenBee);
Weact.wender(appContainer, beeButton);
