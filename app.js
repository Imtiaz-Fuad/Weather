const APIurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const APIkey = "822935b8cd28641ff6901d1908386fdb";

const searchBox = document.querySelector("input");

const search = document.querySelector("#search-icon");

const Weather = document.querySelector("#weather-icon");

async function CheckWeather(city){
    const response = await fetch(APIurl + `&appid=${APIkey}` + `&q=${city}`);
    var data = await response.json();
    console.log(data);

    document.querySelector("h1").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector("h2").innerHTML =  data.name;
    document.querySelector(".upH").innerHTML = data.main.humidity + "%";
    document.querySelector(".upW").innerHTML = data.wind.speed + "Km/h";

    let weatherCondition = data.weather[0].main.toLowerCase();
    Weather.src = `images/${weatherCondition}.png`
}
search.addEventListener("click",()=>{
    CheckWeather(searchBox.value);
})
