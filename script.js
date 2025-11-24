console.log("Hola api clima");

async function fetchWeatherData( latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(data.elevation);
    console.log(data.current_weather);
    console.log(data.current_weather.temperature);
    console.log(data.current_weather.windspeed);
    return data.current_weather;

}
//fetchWeatherData( 25.666815, -100.28233);
async function handleFetchClick(){
    console.log ("Botón fetch clickeado");
    const latitude = document.getElementById("latitude-input").value;
    const longitude = document.getElementById("longitude-input").value;
    const currentTemperature= document.getElementById ("temp-display")
    const currentWindSpeed = document.getElementById ("wind-display");

    const currentWeather= await fetchWeatherData(latitude, longitude);
    currentTemperature.textContent = currentWeather.temperature;
    currentWindSpeed.textContent = currentWindSpeed.windspeed;

}