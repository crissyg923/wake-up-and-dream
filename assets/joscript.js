var formEl = $('#journal-form');
var moodInputEl = $('#mood-name');
var entryInputEl = $('#entry');
var entryListEl = $('#entry-list');

var printEntries = function (name, entry) {
  var listEl = $('<li>');
  var listEnry = name.concat(' on ', entry);
  listEl.addClass('list-group-item').text(listEntry);
  listEl.appendTo(enryListEl);
};

var moodFormSubmit = function (event) {
  event.preventDefault();

  var moodInput = moodInputEl.val();
  var entryInput = entryInputEl.val();


  printSkills(moodInput, entryInput);

  // resets form
  moodInputEl.val('');
  entryInputEl.val('');
};

formEl.on('submit', moodFormSubmit);

// Autocomplete widget
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
  var moodToday=searchParams[0].split('=').pop();
}

//button and on click event listener.

