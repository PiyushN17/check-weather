# City Weather Lookup Widget – README

**Requirements**
- A modern web browser (Chrome, Firefox, Edge, Safari)  
- Active internet connection to fetch live weather and reverse-geocode data  
- A valid **OpenWeatherMap API key** (replace the key inside `script.js`)  
- Basic understanding of HTML and JavaScript for customization or extension  
- (Optional) A local static server for smoother testing and to avoid CORS issues when opening files via `file://`  

**Technologies Used**
- **HTML** for the user interface structure (inputs, buttons, display elements)  
- **Vanilla JavaScript** for DOM selection, user interaction handling, and UI updates  
- **Fetch API** for making asynchronous HTTP requests to external services  
- **JavaScript Date object** to format and display current date/time information  
- **Browser Geolocation API** to obtain the user’s latitude/longitude when using the "Detect My Location" feature  

**About the APIs**
- **OpenWeatherMap Current Weather Data API**  
  - Endpoint used (example): `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric`  
  - Returns current weather details such as temperature (current/min/max), weather condition and icon code, humidity, pressure, wind speed, and location name/country.  
  - Weather icons are loaded from `https://openweathermap.org/img/wn/{iconCode}@2x.png`.  
  - Make sure to keep your API key secure; do not commit a production key to public repos.
- **Nominatim (OpenStreetMap) Reverse Geocoding API**  
  - Endpoint used (example): `https://nominatim.openstreetmap.org/reverse?lat={lat}&lon={lon}&format=json`  
  - Converts coordinates into address components. The app extracts a best-effort city name from fields such as `city`, `town`, `village`, `municipality`, `county`, `state_district`, or `state`.  
  - Nominatim has usage policies and rate limits — respect their terms and avoid excessive automated requests.

**Features Implemented**
- Search weather by entering any city name and clicking **Get Weather**  
- Detect current city using the **Detect My Location** button (uses browser Geolocation + Nominatim reverse geocoding)  
- Displays: city name & country, formatted date & day, current temperature, weather description and icon, min/max temperatures, "feels like" temperature, humidity, pressure, and wind speed  
- Graceful error handling for: empty input, invalid city responses from OpenWeatherMap, geolocation permission denied, position unavailable, and request timeouts  
- Reveals the weather info panel only after a successful data fetch  
- Uses a shared function to populate UI from OpenWeatherMap response (both manual search and detected-location flows)

**Usage**
1. Open the project in a browser (or serve it via a local static server).  
2. Enter a city name and click **Get Weather** — or click **Detect My Location** to auto-detect and fetch weather for your current place.  
3. If detection is used, the browser will prompt for location permission. Granting permission will trigger reverse geocoding to obtain a city name, then fetch weather for that city.  
4. Read weather details displayed in the info panel. Errors or messages appear in the `#err` element.

**Installation / Running Locally**
1. Clone or download the repository.  
2. Replace the OpenWeatherMap API key placeholder inside `script.js` with your own API key.  
3. (Recommended) Run a simple local server (for example with `npx serve` or `python -m http.server`) and open `index.html` in the browser to avoid `file://` limitations.  
4. Test the search and detect functionality.

**Notes & Best Practices**
- Do not expose your production OpenWeatherMap API key in a public repository. For public demos use a restricted key or server-side proxy to hide the key.  
- Nominatim is a shared public service — avoid heavy automated reverse-geocoding and consider caching results or using your own geocoding solution for production.  
- The app picks the first available address field as the "city" (`city`, `town`, `village`, `municipality`, `county`, etc.). Reverse geocoding results can vary by region — handle edge cases if you need stricter accuracy.  
- Consider adding rate limiting, retries with exponential backoff, and user-friendly loading states for a smoother UX.

**Error Handling Summary**
- Empty search input → shows `Please enter a city name!`  
- OpenWeatherMap returns an error (e.g., city not found) → shows `City Not Found!`  
- Geolocation permission denied → shows `User denied permission`  
- Geolocation unavailable → shows `Position Unavailable`  
- Geolocation timeout → shows `Request Timed Out.`  
- Unexpected geolocation error → shows `Unknown error occurred`

**Extensibility Ideas**
- Add caching of recent successful city results to reduce API calls.  
- Switch to server-side proxy for API requests to keep the API key secret.  
- Add internationalization for date formatting and units (metric/imperial toggle).  
- Improve UI with loading spinners and clearer feedback for slow networks.
