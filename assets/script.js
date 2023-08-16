var quoteEl = document.getElementById('quote');
// Displays quote of the day
var displayQuote= function(result) {
    console.log(result);
    // var quoteEl = document.getElementById('quote');
    var quoteText = result[0]['quote'];
    var quoteAuthor=result[0]['author'];
    console.log(quoteText);
    quoteEl.innerHTML= quoteText + "\n ~" + quoteAuthor;
    
}


const lastQuoteShown = JSON.parse(localStorage.getItem('lastQuoteShown'));
const lastQuoteChange = localStorage.getItem('lastQuoteChange'); 

// Pauses fetching new quote unless 24 hours have passed
if (!lastQuoteChange || Date.now() - lastQuoteChange >= 24 * 60 * 60 * 1000) {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=inspirational',
        headers: { 'X-Api-Key': 'XZYgSs1z93SmeyYfHa2DaQ==MUZAq7wM5vAVmY0t'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            localStorage.setItem('lastQuoteChange', Date.now());
            displayQuote(result);
            var quoteText = result[0]['quote'];
            var quoteAuthor=result[0]['author'];
            quoteArray=[quoteText, "\n ~", quoteAuthor];
            localStorage.setItem('lastQuoteShown', JSON.stringify (quoteArray));
            // parsedData=JSON.parse(localStorage.getItem('lastQuoteShown'))
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
  
        
}
else if (localStorage) {
    quoteEl.innerHTML=lastQuoteShown;
}

// References DOM elements that will display weather
var weatherForm=document.querySelector('#weatherform');
var currentDate=document.getElementById('date');
currentDate.innerHTML=dayjs().format('dddd, MMMM D, YYYY');

var weatherAPI= '809d16a68a370f720312b6969f036c77';
var weatherDisplay=document.getElementById('weatherdisplay');
var currentConditions = document.querySelector('#forecast1');
var fullDayForecast = document.querySelector('#forecast2');
var currentMoonPhaseEl = document.querySelector('#moonphase');

// Clears out weather data if new search is inititiated and unhides weather elements
function displayWeatherForecast(weatherData) {
    currentConditions.textContent="";
    fullDayForecast.textContent="";
    currentMoonPhaseEl.textContent="";
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
    currentCityEl.innerHTML=currentCity;

    // Appends current weather conditions to currend conditions card
    currentConditions.appendChild(cardTitle);
    currentConditions.appendChild(currentCityEl);
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
    
    // Sets text content of weather elements
    dailyForecastTitle.innerHTML= "Daily Forecast:    ";
    currentForecastDateEl.innerHTML= dayjs(currentDate).format('M/D/YYYY');
    var futureWeatherIcon= weatherData.forecast['forecastday'][0]['day']['condition']['icon'];
    var futureWeatherIconLink= "https:" + futureWeatherIcon;
    weatherForecastIconEl.setAttribute('src', futureWeatherIconLink);
    tempLowEl.innerHTML="Low Temp: " + weatherData.forecast['forecastday'][0]['day']['mintemp_f'] + "°F";
    tempHighEl.innerHTML="High Temp: " + weatherData.forecast['forecastday'][0]['day']['maxtemp_f'] + "°F";
    chanceOfRain.innerHTML="Precipitation: " + weatherData.forecast['forecastday'][0]['day']['daily_chance_of_rain'] + "%";

    // Appends weather data from API to weather elements
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
const lastImageChange = localStorage.getItem('lastImageChange'); 

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

// Saves last city searched in local storage
var saveLocal = function(cityInputValue) {
localStorage.setItem('lastcitysearched', cityInputValue);
}

var getLocal=function (){
    if(!localStorage) {
        return;
    }
    var citySearchHistory=localStorage.getItem('lastcitysearched'); 
    console.log(citySearchHistory);
    sendToAPI(citySearchHistory);
    
}

// Sends searched zip code to API
function sendToAPI (cityInputValue) {
    console.log(cityInputValue);
    var requestURL="https://api.weatherapi.com/v1/forecast.json?key=2bf9656260f94a3db7141730231008&q=" + cityInputValue;
    
    fetch(requestURL)
    .then (function (response){
        if (!response.ok) {
            throw response.json();
          }
      return response.json();
    })
    .then (function(weatherData){
        console.log(weatherData);
        displayWeatherForecast(weatherData);
})
.catch(function (error) {
    console.error(error);
    });
}

// Grabs value of zip code search
function getParameters(event) {
    event.preventDefault();
    var cityInputValue = document.querySelector('#cityinput').value;
    sendToAPI(cityInputValue);
    saveLocal(cityInputValue);
    
}

// Listens for weather form submission
weatherForm.addEventListener('submit', getParameters);

// Calls function to get last city searched from local storage
getLocal();