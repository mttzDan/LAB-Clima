async function fetchWeatherData( latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(data.elevation);
    console.log(data.current_weather);
    console.log(data.current_weather.temperature);
    return data.current_weather;
}
// fetchWeatherData( 25.666815, -100.28233);
async function handleFetchClick(){
    console.log("Boton fetch clickeado");
    const latitude = document.getElementById("latitude-input").value;
    const longitude = document.getElementById("longitude-input").value;

    const windDisplay = document.getElementById("wind-display");
    const currentTemperature = document.getElementById("temp-display");
    const weatherBox = document.getElementById("weather-result");

    const currentWeather = await fetchWeatherData(latitude, longitude);
    
    currentTemperature.textContent = currentWeather.temperature;
    windDisplay.textContent = currentWeather.windspeed;

    weatherBox.classList.remove("hidden");

}