
var myForm = $('#journal-form');
const entryInput = $('#entry-text');
var entryList = $('#entry-list');
var saveEl=$('#saveBtn');
var moodColor=$('#color-type');


function printEntries () {
     entryList.empty();
     var entries=getEntry();
    for (var i = 0; i < entries.length; i+=1) {
      var entry=entries[i];
    var entryDate=dayjs(entry.date);
      var savedEl = $('<tr>');
      var entryEl = $('<td>').text(entry.input);
      var dateEl = $('<td>').text(entryDate.format('MM/DD/YYYY'));
      savedEl.append(entryEl,dateEl);
      entryList.append(savedEl);
  }}


function getEntry() {
    var entries = localStorage.getItem('entries');
    if (entries) {
      entries = JSON.parse(entries);
    } else {
      entries = [];
    }
    return entries;
  }
  
  
  function storeEntry(entries) {
   
    localStorage.setItem('entries', JSON.stringify(entries));
  }
  
 
  
  function KeepandShow (event){
    event.preventDefault();
    var entryText = entryInput.val().trim();
    var dateNow=dayjs();

  var newEntry={
    input:entryText,
date:dateNow,
  }
var entries=getEntry();
    entries.push(newEntry);
    entryInput.val('');
  

  storeEntry(entries);
    printEntries();
  };

  saveEl.addEventListener("click", KeepandShow);

 



var getParameters= function (){
  searchParams=document.location.search.split('&');
  var moodToday=searchParams[1].split('=').pop();
var moodColorEl=document.createElement('p');
  moodColorEl.innerHTML=moodToday
  moodColor.appendChild(moodColorEl);
}


getParameters();
printEntries()

