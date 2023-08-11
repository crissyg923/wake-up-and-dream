var formEl = $('#journal-form');
var moodInputEl = $('#mood-name');
var entryInputEl = $('#entry');
var entryListEl = $('#entry-list');

var entries=[]

var printEntries = function () {
  var listEl = $('<li>');
  var listEntry = moodInputEl.concat(entryInputEl);
  listEl.addClass('list-group-item').text(listEntry);
  listEl.appendTo(entryListEl);
    }


formEl.addEventListener('submit', function(event){
  event.preventDefault();

  var moodInput = moodInputEl.value.trim();
  var entryText = entryInputEl.value.trim();
 entries.push(moodInput);
 entries.push(entryText);
 moodInput.value = "";
 entryText.value = "";

printEntries();
storeEntry();
});

function init () {
    var storedEntry=Json.parse(localStorage.getIteam("entries"));
    if (storedEntry !== null) {
        todos = storedEntry;
      }
    printEntries();
}
function storeEntry() {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem("entries", JSON.stringify(entries));
  }

init()

