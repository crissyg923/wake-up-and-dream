
var formEl = document.querySelector('#journal-form');
var moodInputEl = document.querySelector$('#mood-name');
var entryInputEl = document.querySelector$('#entry');
var entryListEl = document.querySelector$('#entry-list');

var entries=[]

function printEntries () {
  entryListEl.innerHTML="";
  entryInputEl.textContent=entries.length;
  for (var i = 0; i < todos.length; i++) {
    var entry = entries[i];

    var li = document.createElement("li");
    li.textContent = entry;
    li.setAttribute("data-index", i);

    entryListEl.appendChild(li);
  }
  
    }



function init() {
    var storedEntry = JSON.parse(localStorage.getItem("entries"));
  
    
    if (storedEntry !== null) {
      entries = storedEntry;
    }

    printEntries();
  }
  
  function storeEntry() {
   
    localStorage.setItem("entries", JSON.stringify(entries));
  }
  
 
  formEl.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var entryText = formEl.value.trim();
  
    if (entryText === "") {
      return;
    }
    entries.push(entryText);
    formEl.value = "";
  

    storeEntry();
    printEntries();
  });
  


  init()
  
