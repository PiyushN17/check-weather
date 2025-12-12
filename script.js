let search = document.getElementById('search');
let city = document.getElementById('city');
let cityName = document.getElementById('cityName');
let err = document.getElementById('err');
let container = document.getElementById('container');
let icon = document.getElementById('icon');
let dateAndDay = document.getElementById('dateAndDay');
let temp = document.getElementById('temp');
let weatherDescription = document.getElementById('weatherDescription');
let minAndMax = document.getElementById('minAndMax');
let updation = document.getElementById('updation');
let feelsAndHumidity = document.getElementById('feelsAndHumidity');
let pressureAndWind = document.getElementById('pressureAndWind');

let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 

let live = new Date();

async function callAPI() {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=13660680d54f64f76512920e5368ba37&units=metric`;
  let output = await fetch(API_URL);
  let response = await output.json();
  if(response.message) {
    err.innerText = 'City Not Found!'
  }
  else {
    err.innerText = '';
    let iconCode = response.weather[0].icon;
    let ICON_URL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    container.hidden = false;
    icon.hidden = false;
    cityName.innerText = `${response.name}, ${response.sys.country}`;
    dateAndDay.innerText = `${live.getDate()} ${month[live.getMonth()]} (${day[live.getDay()]}), ${live.getFullYear()}`;
    temp.innerText = `${Math.floor(response.main.temp)}°C`;
    weatherDescription.innerText = response.weather[0].main;
    icon.setAttribute('src', ICON_URL);
    minAndMax.innerText = `${Math.floor(response.main.temp_min)}°C (Min) / ${Math.ceil(response.main.temp_max)}°C (Max)`;
    updation.innerText = `Updated as of ${live.getHours()}:${live.getMinutes()}`;
    feelsAndHumidity.innerText = `Feels like ${response.main.feels_like}°C | Humidity: ${response.main.humidity}%`;
    pressureAndWind.innerText = `Pressure: ${response.main.pressure}mb | Wind Speed: ${response.wind.speed}KM/H`;
  }
}

search.addEventListener('click', function() {
  if(city.value === '') {
    err.innerText = 'Please enter a city name!';
  }
  else {
    err.innerText = '';
    callAPI();
  }
});
