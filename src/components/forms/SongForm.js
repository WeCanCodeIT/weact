const Weact = require("../../libs/weact");
const Http = require("../../utils/http");
const Button = require("../Button");

async function handleSubmit(event) {
  const title = document.querySelector(".song-title").value;
  const duration = document.querySelector(".song-duration").value;
  const link = document.querySelector(".song-link").value;
  event.preventDefault();

  const response = await fetch(`http://localhost:3000/songs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      duration,
      link
    })
  });
}

function SongForm() {
  document.querySelector(".container").innerHTML = "";
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
      { class: "song-link", placeholder: "Link to Song", type: "text" },
      ""
    ),

    Button({ type: "submit" }, "Submit")
  ]);
}

module.exports = SongForm;
