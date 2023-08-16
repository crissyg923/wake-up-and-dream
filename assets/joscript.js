document.addEventListener("DOMContentLoaded", function () {
  var entryTextArea = document.querySelector("#entry-text");

  var entries = [];

  function getEntries() {
    var storedEntries = JSON.parse(localStorage.getItem("entries"));

    if (storedEntries !== null) {
      entries = storedEntries;
    }
  }

  function storeEntry(entry) {
    entries.push(entry);
    localStorage.setItem("entries", JSON.stringify(entries));
  }

  function init() {
    getEntries();
  }

  var form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var newEntry = entryTextArea.value.trim();

    if (newEntry !== "") {
      storeEntry(newEntry);
      entryTextArea.value = "";
    }
  });

  init();
});

var getParameters = function () {
  if (document.location.search.length !== 0) {
    searchParams = document.location.search.split("&");
    var moodToday = searchParams[1].split("=").pop();
    var moodColor = document.getElementById("color-type");
    var moodColorEl = document.createElement("p");
    moodColorEl.innerHTML = moodToday;
    moodColor.appendChild(moodColorEl);
  }
};

getParameters();

