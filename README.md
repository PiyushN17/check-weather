# City Weather Lookup Widget – README

**Requirements**
- A modern web browser (Chrome, Firefox, Edge, Safari)  
- Active internet connection for fetching live weather and location data  
- A valid **OpenWeatherMap API key** configured inside `script.js`  
- Basic understanding of HTML and JavaScript for extending the project  
- (Optional) A local static server for smoother testing and to avoid `file://` limitations  

**Technologies Used**
- **HTML** for structuring the weather widget interface  
- **Vanilla JavaScript** for DOM manipulation, event handling, and async logic  
- **Fetch API** for making HTTP requests to external services  
- **Browser Geolocation API** to detect the user’s current latitude and longitude  
- **JavaScript Date object** to display formatted date, day, and update time  

**About the APIs**
- **OpenWeatherMap Current Weather API**
  - Used to fetch real-time weather data based on city name  
  - Example endpoint:  
    `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric`
  - Provides temperature, min/max values, weather condition, humidity, pressure, wind speed, country, and icon code  
  - Weather icons are loaded using:  
    `https://openweathermap.org/img/wn/{iconCode}@2x.png`
- **Nominatim (OpenStreetMap) Reverse Geocoding API**
  - Converts detected latitude and longitude into a human-readable city name  
  - Example endpoint:  
    `https://nominatim.openstreetmap.org/reverse?lat={lat}&lon={lon}&format=json`
  - The app selects the best available city-like field (city, town, village, municipality, county, or state)

**Features Implemented**
- Search weather by manually entering a city name  
- Detect current location using browser geolocation and automatically fetch weather  
- Loading spinner (loader) displayed while API requests are in progress  
- Displays city name, country, date, day, and last updated time  
- Shows current temperature, weather description, and icon  
- Displays minimum/maximum temperature, feels-like temperature, humidity, pressure, and wind speed  
- Error handling for:
  - Empty city input  
  - Invalid city names  
  - API errors  
  - Geolocation permission denial, timeout, or unavailability  
- Weather container remains hidden until valid data is successfully fetched  

**Application Flow**
- User clicks **Get Weather** → loader appears → weather data is fetched by city name  
- User clicks **Detect My Location** → browser requests permission → coordinates are reverse-geocoded → weather is fetched for detected city  
- Loader hides automatically once data is loaded or an error occurs  
- Errors are displayed clearly without breaking the UI  

**Notes**
- Avoid exposing real API keys in public repositories  
- Nominatim is a shared public service; avoid excessive requests in production  
- Reverse geocoding results may vary by region, so city detection is best-effort  
- This project is ideal for learning async JavaScript, API integration, and browser APIs  

**Possible Enhancements**
- Add debounce to search input  
- Cache recent searches to reduce API calls  
- Support unit switching (°C / °F)  
- Add auto-refresh for live weather updates  
