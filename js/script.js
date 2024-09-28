
const apiKey = "9be6520e6fdd8c9d8a5ef1209b7ca79a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display ="block"
         document.querySelector(".weather").style.display ="none"
          document.querySelector(".details").style.display ="none"
    }
    var data = await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %<br> Humidity";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h <br> Wind-Speed";

    if (data.weather[0].main == "clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "clear") {
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "rain") {
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "mist") {
        weatherIcon.src = "images/mist.png";
    }
    else if (data.weather[0].main == "snow") {
        weatherIcon.src = "images/snow.png";
    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    
})

