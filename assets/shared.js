
document.addEventListener('DOMContentLoaded', function() {
var entryTextArea = document.querySelector('#entry-text'); // Added a reference to the textarea element

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

// Event listener for the form submission
var form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var newEntry = entryTextArea.value; // Get the value of the textarea
    
    if (newEntry.trim() !== "") { // Only store non-empty entries
        storeEntry(newEntry);
        printEntries();
        entryTextArea.value = ""; // Clear the textarea after storing the entry
    }
    
    // You can add any other actions you want here
    
    window.location.href = "Entry.html";
});

// Call the initialization function
init();



});




