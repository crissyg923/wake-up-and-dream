var entryList = document.querySelector('data');

var entries = [];
function getEntries() {
    var storedEntry = JSON.parse(localStorage.getItem("entries"));

    if (storedEntry !== null) {
        entries = storedEntry;
    }
}
function storeEntry() {
    localStorage.setItem("entries", JSON.stringify(entries));
}
function printEntries() {
    entryList.innerHTML = "";
    for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];

        var li = document.createElement("li");

        li.textContent = entry;

        entryList.appendChild(li);


    }
}

function init() {
    getEntries();
    printEntries();
}

