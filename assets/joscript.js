var myForm = document.querySelector('#journal-form');
const entryInput = document.querySelector('#entry-text');
const dateInput = document.querySelector('#date-today');
var entryList = document.querySelector('#entry-list');
var entries =[];
var saveEl=document.querySelector("#saveBtn");
var moodInputEl = $('#mood-name');


function printEntries () {
     entryList.innerHTML="";
    for (var i = 0; i < entries.length; i++) {

  var entry=entries[i]
    var li = document.createElement("li");

    li.textContent = entry;
    entryList.appendChild(li);

    var date=document.createElement("p")
    date.textContent=dateInput.value;
    li.appendChild(date);
    li.setAttribute("data-index", i);
    
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
  
 
  saveEl.addEventListener("click", function(event) {
    event.preventDefault();
    

    var entryText = entryInput.value.trim();
     
    if (entryText === "") {
    return;
    }

  var myEntry=entryText+dateText;
    entries.push(myEntry);
    entryInput.value = "";
  

    storeEntry();
    printEntries();
  });
  

  init()

 



var getParameters= function (){
  searchParams=document.location.search.split('&');
  var moodToday=searchParams[1].split('=').pop();
  var moodColor=document.getElementById('color-type');
  var moodColorEl=document.createElement('p');
  moodColorEl.innerHTML=moodToday
  moodColor.appendChild(moodColorEl);
}


getParameters();

