const API_KEY = "57ae1a70bc563f8c9c21217208a398b4"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    console.log("You live it", lat, log)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    fetch(url).then(res => res.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`
    });

}

function onGeoError() {
    alert("Can't find you. No weather for you")
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);