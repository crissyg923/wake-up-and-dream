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
    var todayDate=dayjs().format('MMM DD, YYYY');

    var entryText = entryInput.value.trim();
    var date=function(){
      var dateNow=dayjs();
      var todayDate=document.createElement('p');
      todayDate.textContent= dateNow.format('MMM D, YYYY');
      
    }
     
  var date=todayDate.value;
    if (entryText === "") {
    return;
    }
  var myEntry=entryText+date(todayDate);
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

