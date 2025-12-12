# City Weather Lookup Widget – README

**Requirements**
- A modern web browser (Chrome, Firefox, Edge, Safari)  
- Active internet connection to fetch live weather data  
- A valid **OpenWeatherMap API key** (replace the placeholder key in `script.js`)  
- Basic understanding of HTML and JavaScript for customization or extension  
- (Optional) A local static server for smoother testing and avoiding CORS issues  

**Technologies Used**
- **HTML** for creating the user interface layout  
- **Vanilla JavaScript** for handling user events, fetching data, and updating the UI  
- **Fetch API** to send asynchronous requests to the OpenWeatherMap service  
- **OpenWeatherMap API** as the data provider for temperature, humidity, wind speed, pressure, and weather icons  
- **JavaScript Date Object** for generating the current date, day, and update timestamp  

**About the API**
- The project uses the **OpenWeatherMap Current Weather Data API**  
- The API request is made in real time, using the endpoint:  
  `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric`  
- The API returns detailed weather information including:  
  - Temperature (current, minimum, maximum)  
  - Weather conditions and description  
  - City and country  
  - Humidity, pressure, wind speed  
  - Icon code for rendering weather images  
- The icon is loaded separately using:  
  `https://openweathermap.org/img/wn/{iconCode}@2x.png`  
- If the city is invalid, the API responds with an error message, which is displayed to the user  

**Features Implemented**
- User can search weather by entering any city name  
- Displays city name, country, live temperature, and weather description  
- Shows weather icon based on real-time conditions  
- Displays minimum/maximum temperatures, humidity, pressure, and wind speed  
- Shows formatted date, day of the week, and last updated time  
- Error handling for empty input or invalid city name  
- Weather info panel becomes visible only after a successful search  
