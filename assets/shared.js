var entryList = document.querySelector('#entry-list');

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
        //var myMood=document.createElement("h4");
        //myMood.textContent=moodColor.("p");
        // li.appendChild(myMood)

        entryList.appendChild(li);


        var date = document.createElement("p")
        date.textContent = dateInput.value;
        li.appendChild(date);

        li.setAttribute("data-index", i);

    }
}

function init() {
    getEntries();
    printEntries();
}

