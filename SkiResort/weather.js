function renderWeather(weather) {
    console.log(weather);

    document.getElementById("degree").textContent = weather.main.temp.toFixed(1) + "°C";

    document.getElementById("navDesc").textContent = weather.main.temp.toFixed(1) + "°C";

    document.getElementById("feelLike").textContent = weather.main.feels_like.toFixed(1) + "°C";

    document.getElementById("humidity").textContent = weather.main.humidity + "%";

    document.getElementById("wind").textContent = weather.wind.speed + "mph";

    document.getElementById("visibility").textContent = (weather.visibility / 1000).toFixed(1) + "km";

    // 累積雨、雪的量
    if (weather.snow) {
        var snow = document.createElement("h6");
        snow.textContent = "Snow 1h : " + weather.snow["1h"] + "cm";
        document.querySelector("#descSub").appendChild(snow);

    } else if (weather.rain) {
        var rain = document.createElement("h6");
        rain.textContent = "Rain 1h : " + weather.rain["1h"] + "mm";
        document.querySelector("#descSub").appendChild(rain);
    }

    // 氣象描述
    var weatherDetails = weather.weather[0]
    if (weatherDetails && weatherDetails.description) {
        var description = document.createElement("h4");
        description.textContent = weatherDetails.description;
        document.querySelector("#desc").appendChild(description);
    }

    // 及時icon
    var icon = weather.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png";

    var iconImg = document.querySelector("#weather-icon");
    iconImg.setAttribute("src", iconUrl);

    // 取得太陽升起的時間
    var sunrise = new Date(weather.sys.sunrise * 1000); // 將秒數轉換成毫秒數
    sunrise = sunrise.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'America/Vancouver' });
    document.getElementById("sunRise").textContent = sunrise;

    // 取得太陽降落的時間
    var sunset = new Date(weather.sys.sunset * 1000); // 將秒數轉換成毫秒數
    sunset = sunset.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'America/Vancouver' });
    document.getElementById("sunSet").textContent = sunset;

}


function fetchWeather() {
    var url = "https://api.openweathermap.org/data/2.5/weather?zip=V7G,ca&appid=bb4fcb7c0acd6868581252da5057cfe4&units=metric";

    fetch(url)
        .then((response) => response.json())
        .then((data) => renderWeather(data));
}

fetchWeather();

//北溫天氣資訊
//https://api.openweathermap.org/data/2.5/weather?zip=V7G,ca&appid=bb4fcb7c0acd6868581252da5057cfe4&units=metric