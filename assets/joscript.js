
var myForm = document.querySelector('#journal-form');
const entryInput = document.querySelector('#entry-text');
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
    entries.push(entryText);
    entryInput.value = "";
  

    storeEntry();
    printEntries();
  });
  

  init()

 
function fetchMoodChoice () {
  var moodURL="file:///C:/Users/Kitana/bootcamp/mydreams/mood.html";
 
  fetch(moodURL)
  .then (function (response){
      return response.text();
  })
  .then (function(data){
      console.log(data);
      printMood(data);
})
}

$(function () {
  var moodColors = [
    'Pink',
    'Blue',
    'Green',
    'Yellow',
    'Orange',
    'Red',
  ];
  $('#mood-name').autocomplete({
    source: moodColors,
  });
});

var getParameters= function (){
  searchParams=document.location.search.split('&');
  var moodToday=searchParams[1].split('=').pop();
  var moodColor=document.getElementById('color-type');
var moodColorEl=document.createElement('p');
  moodColorEl.innerHTML=moodToday
  moodColor.appendChild(moodColorEl);
}

getParameters();

//button and on click event listener.



