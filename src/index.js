const Weact = require("./libs/weact");
const MainHeader = require("./components/MainHeader")
const adCreator = require("./components/Ad")
const appContainer = document.querySelector(".app");
const footer = document.createElement("footer");
const queenBee = document.createElement("img");
const beeButton = document.createElement("button");


const header = Weact.cweate(
  "h2",
  {},
  "Hola Mundo, vamos a prometir nuestrue vida a la Reyna Beyonce"
);
const wavbar = Weact.cweate(
  "nav",
  { style: "color: white", classname: "navbar", onmouseover: "onHoverBeyonce()" },
  "Awo yo, we got a wav bar wow witches"
);

const Ad = adCreator( {classname: "add"}, "Programer hate this one trick");

// wavbar.classList.add("navbar");
footer.classList.add("footer");
queenBee.src = "./img/hiclipart.com-id_qnvkp.png";
queenBee.classList.add("queen");
beeButton.textContent = "Hail to the Queen";


Weact.wender(appContainer, wavbar);
Weact.wender(wavbar, header);
Weact.wender(appContainer, footer);
Weact.wender(appContainer, Ad);
Weact.wender(appContainer, queenBee);
Weact.wender(appContainer, beeButton);

wavbar.onmouseover = function onHoverBeyonce() {
  queenBee.src = "./img/53-535753_unflattering-beyonce.png"};
wavbar.onmouseout = function onOutBeyonce() {
  queenBee.src = "./img/hiclipart.com-id_qnvkp.png"};
