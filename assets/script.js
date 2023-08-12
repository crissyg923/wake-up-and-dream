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
var currentDate=document.getElementById('date');
currentDate.innerHTML=dayjs().format('dddd, MMMM D, YYYY');

var weatherAPI= '809d16a68a370f720312b6969f036c77';
var weatherDisplay=document.getElementById('weatherdisplay');
var currentConditions = document.querySelector('#forecast1');
var fullDayForecast = document.querySelector('#forecast2');
var currentMoonPhaseEl = document.querySelector('#moonphase');

function displayWeatherForecast(weatherData) {
    currentConditions.textContent="";
    fullDayForecast.textContent="";
    currentMoonPhaseEl.textContent="";
    // References DOM elements displaying weather.
    // weatherDisplay.textContent="";
    // var currentConditions = document.querySelector('#forecast1');
    // var fullDayForecast = document.querySelector('#forecast2');
    // var currentMoonPhaseEl = document.querySelector('#moonphase');
    //Unhides DOM elements upon weather search submission to display forecast
    currentConditions.style.display="block";
    fullDayForecast.style.display="block";
    currentMoonPhaseEl.style.display="block";

    // Creates elements to display current weather temp, icon, etc
    var cardTitle=document.createElement('h2');
    var currentDateEl=document.createElement('h3');
    var currentCityEl=document.createElement('p');
    var weatherIconEl=document.createElement('img');
    var tempEl=document.createElement('p');
    var feelsLikeEl=document.createElement('p');

    // References specific pieces of data in API
    var currentDate=weatherData.forecast['forecastday'][0]['date'];
    var  currentCity=weatherData.location['name'];
    var weatherIconLink= 'http:' + weatherData.current['condition']['icon'];
    weatherIconEl.setAttribute('src', weatherIconLink);
    
    var feelsLike = weatherData.current['feelslike_f'];
    var currentTemperature= weatherData.current['temp_f'];
    currentDateEl.innerHTML= dayjs(currentDate).format('M/D/YYYY');
    cardTitle.innerHTML= "Current Weather:";
    tempEl.innerHTML= "Current temp: " + currentTemperature + "°";
    feelsLikeEl.innerHTML="Feels like: " + feelsLike + "°";

    // Appends current weather conditions to currend conditions card
    currentConditions.appendChild(cardTitle);
    currentConditions.appendChild(currentDateEl)
    currentConditions.appendChild(weatherIconEl);
    currentConditions.appendChild(tempEl);
    currentConditions.appendChild(feelsLikeEl);
    
    // Creates Elements needed to display forecast for rest of the day
    var dailyForecastTitle=document.createElement('h2');
    var currentForecastDateEl=document.createElement('h3');

    // var currentForecastCityEl=document.createElement('p');
    var weatherForecastIconEl=document.createElement('img');
    var tempLowEl=document.createElement('p');
    var tempHighEl=document.createElement('p');
    var chanceOfRain=document.createElement('p');
    

    dailyForecastTitle.innerHTML= "Daily Forecast:    ";
    currentForecastDateEl.innerHTML= dayjs(currentDate).format('M/D/YYYY');
    var futureWeatherIcon= weatherData.forecast['forecastday'][0]['day']['condition']['icon'];
    var futureWeatherIconLink= "http:" + futureWeatherIcon;
    weatherForecastIconEl.setAttribute('src', futureWeatherIconLink);
    tempLowEl.innerHTML="Low Temp: " + weatherData.forecast['forecastday'][0]['day']['mintemp_f'] + "°";
    tempHighEl.innerHTML="High Temp: " + weatherData.forecast['forecastday'][0]['day']['maxtemp_f'] + "°";
    chanceOfRain.innerHTML="Precipitation: " + weatherData.forecast['forecastday'][0]['day']['daily_chance_of_rain'] + "%";

    fullDayForecast.appendChild(dailyForecastTitle);
    fullDayForecast.appendChild(currentForecastDateEl);
    fullDayForecast.appendChild(weatherForecastIconEl);
    fullDayForecast.appendChild(tempLowEl);
    fullDayForecast.appendChild(tempHighEl);
    fullDayForecast.appendChild(chanceOfRain);

    var moonTitle=document.createElement('h2');
    var moonPhaseEl=document.createElement('p');
    moonTitle.innerHTML= "Current Moon Phase: "
    
    var moonphasedata=weatherData.forecast['forecastday'][0]['astro']['moon_phase'];
    moonPhaseEl.innerHTML= moonphasedata;

    currentMoonPhaseEl.appendChild(moonTitle);
    currentMoonPhaseEl.appendChild(moonPhaseEl);

}


var imageHolderEl=document.querySelector('.imageholder');
function getImageTwo(photoArray) {
    var randomIndex = Math.floor(Math.random() * photoArray.length);
    console.log(randomIndex);
    var photoSource=photoArray[randomIndex]['src']['medium'];
    // var randomPhotoURL = photoSource[randomIndex];
    imageHolderEl.src = photoSource;
    localStorage.setItem('lastImageShown', photoSource);
  }


function getImage(data) {
    console.log(data);
var photoArray=data.photos;
// var photoSource=photoArray[i].src.medium;
getImageTwo(photoArray);
    
}


var headers = {'Authorization': 'Z50bd6r1sVnst9KueR7gxIM0rt33qNk3oa3wIuwwJj95XXGo997RC0iR'};


// Checks for a saved timestamp and previously shown image
const lastImageShown = localStorage.getItem('lastImageShown');
const lastImageChange = localStorage.getItem('lastImageChange'); // You can also use cookies

// If nothing in local storage or if 24 hours have passed, fetch a new image
if (!lastImageChange || Date.now() - lastImageChange >= 24 * 60 * 60 * 1000) {
    fetch('https://api.pexels.com/v1/search?query=abstract&orientation=landscape&size=medium&per_page=76&color=pink', {headers})
        .then(response => response.json())
        .then(data => {
               
            // Store the current timestamp in local storage
            localStorage.setItem('lastImageChange', Date.now()); 
            // Grab new photo from data fetched from API
            getImage(data);
        })
        .catch(error => {
            console.error('Error fetching image:', error);
        });
  
        
}
else if (localStorage) {
    imageHolderEl.src=lastImageShown;
}

function sendToAPI (cityInputValue) {
    console.log(cityInputValue);
    var requestURL="http://api.weatherapi.com/v1/forecast.json?key=2bf9656260f94a3db7141730231008&q=" + cityInputValue;
    // var requestURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityInputValue + ',US&limit=5&appid=' + weatherAPI;
    fetch(requestURL)
    .then (function (response){
        return response.json();
    })
    .then (function(weatherData){
        console.log(weatherData);
        displayWeatherForecast(weatherData);
})
}


function getParameters(event) {
    event.preventDefault();
    var cityInputValue = document.querySelector('#cityinput').value;
    sendToAPI(cityInputValue);
    
}

weatherForm.addEventListener('submit', getParameters);
