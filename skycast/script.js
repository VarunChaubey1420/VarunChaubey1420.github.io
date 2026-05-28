const apiKey = "https://api.open-meteo.com/v1/forecast";
const searchBtn = document.getElementById("search");
const resultDiv = document.getElementById("result");

searchBtn.addEventListener("click", getWeather);
document.getElementById("city")
.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        getWeather();
    }

});

async function getWeather() {
    const city = document.getElementById("city").value.trim();
    if (!city) {
        showMessage("Please enter a city name.");
        return;
    }
    saveSearch(city);

    showMessage("Fetching weather... ⏳");

    try {
        // 1. GET city coordinates from geocoding API
        const geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
        const geoResponse = await fetch(geoURL);
        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            showMessage("City not found ❌");
            return;
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        // 2. Fetch weather using coordinates
        const weatherURL =
            `${apiKey}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

        const weatherResponse = await fetch(weatherURL);
        const weatherData = await weatherResponse.json();

        const weather = weatherData.current_weather;
        changeBackground(weather.weathercode);

        // 3. Show Weather
        resultDiv.innerHTML = `
            <h2>${name}, ${country}</h2>
            <div class="weather-hero">
                ${getWeatherEmoji(weather.weathercode)}
            </div>
            <div class="weather-grid">
                <div class="weather-item">
                    <h3>🌡 Temperature</h3>
                    <p>${weather.temperature}°C</p>
                </div>

                <div class="weather-item">
                    <h3>💨 Wind</h3>
                    <p>${weather.windspeed} km/h</p>
                </div>

                <div class="weather-item">
                    <h3>☁ Condition</h3>
                    <p>${getWeatherCondition(weather.weathercode)}</p>
                </div>

                <div class="weather-item">
                    <h3>🕒 Updated</h3>
                    <p>${weather.time}</p>
                </div>
            </div>
        `;
    } catch (error) {
        showMessage("Something went wrong. Try again ❗");
        console.log(error);
    }
}

function showMessage(msg) {
    resultDiv.innerHTML = `<p class="hint">${msg}</p>`;
}

function getWeatherCondition(code) {

    code = Number(code);

    if (code === 0) {
        return "☀ Clear Sky";
    }

    else if (code >= 1 && code <= 3) {
        return "⛅ Partly Cloudy";
    }

    else if (code >= 45 && code <= 48) {
        return "🌫 Foggy";
    }

    else if (code >= 51 && code <= 67) {
        return "🌦 Rainy";
    }

    else if (code >= 71 && code <= 77) {
        return "❄ Snowy";
    }

    else if (code >= 80 && code <= 82) {
        return "🌧 Rain Showers";
    }

    else if (code >= 95 && code <= 99) {
        return "⛈ Thunderstorm";
    }

    else {
        return "🌍 Unknown";
    }
}

function changeBackground(code) {

    const body = document.getElementById("body");

    body.className = "";

    if (code === 0) {
        body.classList.add("sunny");
    }

    else if (code >= 1 && code <= 3) {
        body.classList.add("cloudy");
    }

    else if (code >= 51 && code <= 82) {
        body.classList.add("rainy");
    }

    else if (code >= 95 && code <= 99) {
        body.classList.add("stormy");
    }
}

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    minutes = minutes < 10 ? "0" + minutes : minutes;

    const time = `${hours}:${minutes}`;

    document.getElementById("clock").innerText = time;

    let greeting = "";

    if (hours >= 0 && hours < 5) {
        greeting = "Late Night Vibes 🌌";
    }

    else if (hours < 12) {
        greeting = "Fresh Morning Energy 🌤";
    }

    else if (hours < 18) {
        greeting = "Afternoon Chill ☀";
    }

    else {
        greeting = "Evening Glow 🌆";
    }

    document.getElementById("greeting").innerText = greeting;
}

updateClock();

setInterval(updateClock, 1000);

function getWeatherEmoji(code) {

    code = Number(code);

    if (code === 0) {
        return "☀";
    }

    else if (code >= 1 && code <= 3) {
        return "☁";
    }

    else if (code >= 45 && code <= 48) {
        return "🌫";
    }

    else if (code >= 51 && code <= 82) {
        return "🌧";
    }

    else if (code >= 95 && code <= 99) {
        return "⛈";
    }

    else {
        return "🌍";
    }
}

function saveSearch(city) {

    let searches = JSON.parse(localStorage.getItem("weatherHistory")) || [];

    if (!searches.includes(city)) {

        searches.unshift(city);

        if (searches.length > 5) {
            searches.pop();
        }

        localStorage.setItem(
            "weatherHistory",
            JSON.stringify(searches)
        );
    }

    displayHistory();
}

function displayHistory() {

    const historyDiv = document.getElementById("history");

    let searches = JSON.parse(localStorage.getItem("weatherHistory")) || [];

    historyDiv.innerHTML = searches.map(city => `
    
        <button class="history-btn"
            onclick="searchFromHistory('${city}')">
            ${city}
        </button>
    
    `).join("");
}

function searchFromHistory(city) {

    document.getElementById("city").value = city;

    getWeather();
}

displayHistory();