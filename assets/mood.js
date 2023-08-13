var displayColor= function(event) {
    event.preventDefault();
    console.log ("pink-box");
    location.assign('./journal.html?&happy');

}
document.getElementById("pink-box").addEventListener("click", displayColor);

var displayColor= function(event) {
    event.preventDefault();
    console.log ("blue-box");
    location.assign('./journal.html?&sad');
}
document.getElementById("blue-box").addEventListener("click", displayColor);

var displayColor= function(event) {
    event.preventDefault();
    console.log ("green-box");
    location.assign('./journal.html?&motivated');
}
document.getElementById("green-box").addEventListener("click", displayColor);

var displayColor= function(event) {
    event.preventDefault();
    console.log ("yellow-box");
    location.assign('./journal.html?&tired');
}
document.getElementById("yellow-box").addEventListener("click", displayColor);

var displayColor= function(event) {
    event.preventDefault();
    console.log ("orange-box");
    location.assign('./journal.html?&normal');
}
document.getElementById("orange-box").addEventListener("click", displayColor);

var displayColor= function(event) {
    event.preventDefault();
    console.log ("red-box");
    location.assign('./journal.html?&angry');
}
document.getElementById("red-box").addEventListener("click", displayColor);

var getParameters= function (){
    searchParams=document.location.search.split('&');
    var moodToday=searchParams[0].split('=').pop();
  }