  let search = document.getElementById('search');
  let city = document.getElementById('city');
  let cityName = document.getElementById('cityName');
  let countryName = document.getElementById('countryName');
  let temp = document.getElementById('temp');
  let wind = document.getElementById('wind');
  let error = document.getElementById('err');

  search.addEventListener('click', function() {
    if(city.value === '') {
      error.innerText = "Please Enter City Name";
    }
    else {
      pinPoint();
    }
  })

  async function getWeather(lat, long, name, country) {
    try {
      error.innerText = '';
      const API_URL2 = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`;
      const output = await fetch(API_URL2);
      const resp = await output.json();
      cityName.innerText = "City: " + name;
      countryName.innerText = "Country: " + country;
      temp.innerText = "Temperature: " + resp.current_weather.temperature + '°C';
      wind.innerText = "Wind Speed: " + resp.current_weather.windspeed + 'KM/H';
    }
    catch(e) {
      error.innerText = 'Error';
    }
  }

  async function pinPoint() {
    try {
      error.innerText = '';
      const API_URL1 = `https://geocoding-api.open-meteo.com/v1/search?name=${city.value}&count=1&language=en&format=json`;
      const output = await fetch(API_URL1);
      const resp = await output.json();
      let lati = resp.results[0].latitude;
      let longi = resp.results[0].longitude;
      let n = resp.results[0].name;
      let c = resp.results[0].country;
      getWeather(lati, longi, n, c);
    }
    catch(e) {
      error.innerText = 'Error';
    }
  }
