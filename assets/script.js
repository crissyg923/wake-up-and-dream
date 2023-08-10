// const successCallback = (position) => {
//     console.log(position);
// };

// const errorCallback = (error) => {
//     console.log(error);
// };
// navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

// var displayQuote= function(result) {
//     console.log(result);
//     var quoteEl = document.getElementById('quote');
//     var quoteText = result[0]['quote'];
//     var quoteAuthor=result[0]['author'];
//     console.log(quoteText);
//     quoteEl.innerHTML= quoteText + "\n ~" + quoteAuthor;
    
// }
// var category = 'happiness'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/quotes?category=inspirational',
//     headers: { 'X-Api-Key': 'XZYgSs1z93SmeyYfHa2DaQ==MUZAq7wM5vAVmY0t'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//         displayQuote(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

var weatherForm=document.querySelector('#weatherform');
// var weatherDOM=document.querySelector('.weatherclass');

var weatherAPI= '809d16a68a370f720312b6969f036c77';

function displayCurrentWeather(dataCurrent) {
    // References div that holds weather form
    
    var weatherBox = document.querySelector('#weatherdisplay');
    
    var tempEl=document.createElement('p');
    var currentTemperature= dataCurrent.main['temp'];
    tempEl.innerHTML= "The current temperature in " + dataCurrent.name + " is " + currentTemperature + "° and it feels like " + dataCurrent.main['feels_like'] + "°.";
    weatherBox.appendChild(tempEl);
    // weatherContainer.appendChild(weatherDiv);
    console.log(dataCurrent);
}
// function displayLaterWeather(dataLater) {
//     var forecast1=document.getElementById('forecast1');
//     var forecast2=document.getElementById('forecast2');
// }

function sendToAPI (cityInputValue) {
    console.log(cityInputValue);
    var requestURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityInputValue + ',US&limit=5&appid=' + weatherAPI;
    fetch(requestURL)
    .then (function (response){
        return response.json();
    })
    .then (function(data){
        // console.log(data);
        var latitude= data[0].lat;
        var longitude=data[0].lon;
        var currentConditionsUrl= "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + weatherAPI + "&units=imperial";
        var laterDayUrl = "http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + weatherAPI + "&units=imperial";
    
    fetch(currentConditionsUrl)
        .then(function(response) {
            return response.json();
    })
        .then (function(dataCurrent) {
            console.log(dataCurrent);
            displayCurrentWeather(dataCurrent);
    })
    fetch(laterDayUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(dataLater){
        console.log(dataLater);
        // displayLaterWeather(dataLater);
    })

})
}


function getParameters(event) {
    event.preventDefault();
    var cityInputValue = document.querySelector('#cityinput').value;
    sendToAPI(cityInputValue);
    
}

weatherForm.addEventListener('submit', getParameters);
