const apiKey = 'f80c45a071955f4b4196f7a03bca2788'; // Replace with your OpenWeatherMap API key
const city = 'Buenos Aires'; // Replace with the city you want to get the weather for

function calculateWindChill(temp, windSpeed) {
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16))).toFixed(2);
}

function displayWeatherData(temperatureCelsius, windSpeedKmh, conditions) {
    const windChill = temperatureCelsius <= 10 && windSpeedKmh > 4.8 ? calculateWindChill(temperatureCelsius, windSpeedKmh) : "N/A";
    document.getElementById("temperature").textContent = `${temperatureCelsius} °C`;
    document.getElementById("conditions").textContent = conditions;
    document.getElementById("wind").textContent = `${windSpeedKmh} km/h`;
    document.getElementById("windchill").textContent = windChill === "N/A" ? "N/A" : `${windChill} °C`;
}

function fetchWeatherData() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=<span class="math-inline">\{city\}&units\=metric&appid\=</span>{apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperatureCelsius = data.main.temp;
            const windSpeedKmh = data.wind.speed * 3.6;
            const conditions = data.weather[0].description;
            displayWeatherData(temperatureCelsius, windSpeedKmh, conditions);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById("windchill").textContent = "Wind Chill: N/A";
        });
}

fetchWeatherData();



//Time
document.getElementById("year").textContent = new Date().getFullYear();
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById("lastModified").textContent = dateTimeString;
}
// Update Time Function Call
updateDateTime();
