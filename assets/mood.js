var displayColor= function() {
    console.log ("pink-box");
    location.assign('./journal.html?&pink');
}
document.getElementById("pink-box").addEventListener("click", displayColor);

var displayColor= function() {
    console.log ("blue-box");
    location.assign('./journal.html?&blue');
}
document.getElementById("blue-box").addEventListener("click", displayColor);

var displayColor= function() {
    console.log ("green-box");
    location.assign('./journal.html?&green');
}
document.getElementById("green-box").addEventListener("click", displayColor);

var displayColor= function() {
    console.log ("yellow-box");
    location.assign('./journal.html?&yellow');
}
document.getElementById("yellow-box").addEventListener("click", displayColor);

var displayColor= function() {
    console.log ("orange-box");
    location.assign('./journal.html?&orange');
}
document.getElementById("orange-box").addEventListener("click", displayColor);

var displayColor= function() {
    console.log ("red-box");
    location.assign('./journal.html?&red');
}
document.getElementById("red-box").addEventListener("click", displayColor);

var getParameters= function (){
    searchParams=document.location.search.split('&');
    var moodToday=searchParams[0].split('=').pop();
  }