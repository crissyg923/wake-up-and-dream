const myForm = document.querySelector('#journal-form');
const entryInput = document.querySelector('#entry-text');
const dateInput = document.querySelector('#date-today');

var saveEl=document.querySelector("#saveBtn");
var moodColor=document.querySelector("#color-type")
var dreamEl=document.querySelector("#dreamBtn");





  
 
  saveEl.addEventListener("submit", function(event) {
    event.preventDefault();
   

    var entryText = entryInput.value.trim();
     
    if (entryText === "") {
    return;
    }

 getEntries();
    entries.push(entryText);
    entryInput.value = "";
  

    storeEntry();

  });
  

  

 


var getParameters= function (){
  searchParams=document.location.search.split('&');
  var moodToday=searchParams[1]?.split('=').pop();
  var moodColor=document.getElementById('color-type');
var moodColorEl=document.createElement('p');
  moodColorEl.innerHTML=moodToday
  moodColor.appendChild(moodColorEl);
}


getParameters();

