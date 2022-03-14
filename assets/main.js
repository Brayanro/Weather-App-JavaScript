const API_KEY = `fc22bcf6aad6d0b1e3ff497fc75b9066`;
const DEFAULT_CITY = `Bogota`;
const UNITS = `metric`;
const DAY_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const SEARCH_INPUT = document.getElementById('search-input');
const SEARCH_BUTTON = document.getElementById('search-button');
const DATE = new Date();
let temperatureValue = document.getElementById('temperature-value');
let temperatureDesc = document.getElementById('temperature-desc');
let nameCity = document.getElementById('city');
let currentDate = document.getElementById('current-date');
let icon = document.getElementById('weather-icon');
let feelsLike = document.getElementById('feels');
let windSpeed = document.getElementById('wind');
let humidityPercentage = document.getElementById('humidity');

const fetchData = async (position) => {
    try {
        const { latitude, longitude } = position.coords;
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${UNITS}&appid=${API_KEY}`);
        const data = await res.json();
        let temp = Math.round(data.main.temp);
        temperatureValue.innerHTML = `${temp}&degC`;
        let desc = data.weather[0].description;
        temperatureDesc.textContent = desc.toUpperCase();
        let city = data.name;
        nameCity.textContent = city;
        let day = DAY_WEEK[DATE.getDay()];
        let time = DATE.toLocaleTimeString('en-US');
        currentDate.textContent = `${day}, ${time}`;
        let feels = Math.round(data.main.feels_like);
        feelsLike.innerHTML = `<img class="weather__feels" src="assets/images/temperature.svg" />Feels like: ${feels}&degC`;
        let wind = data.wind.speed;
        let windKilometer = Math.round(wind * 3.6);
        windSpeed.innerHTML = `<img class="weather__wind" src="assets/images/breeze.svg" />Wind: ${windKilometer}km/h`;
        let humidity = data.main.humidity;
        humidityPercentage.innerHTML = `<img class="weather__humidity" src="assets/images/humidity.svg" />Humidity: ${humidity}%`;

        switch (data.weather[0].main) {
            case 'Clear':
                icon.src = 'assets/images/clear.svg'
                break;
            case 'Rain':
                icon.src = 'assets/images/rain.svg'
                break;
            case 'Clouds':
                icon.src = 'assets/images/clouds.svg'
                break;
            case 'Thunderstorm':
                icon.src = 'assets/images/thunderstorm.svg'
                break;
            case 'Haze':
                icon.src = 'assets/images/fog.svg'
                break;
            case 'Mist':
                icon.src = 'assets/images/fog.svg'
                break;
            case 'Drizzle':
                icon.src = 'assets/images/drizzle.svg'
                break;
            case 'Smoke':
                icon.src = 'assets/images/fog.svg'
                break;
            case 'Fog':
                icon.src = 'assets/images/fog.svg'
                break;
            case 'Snow':
                icon.src = 'assets/images/snow.svg'
                break;
        }
    } catch (error) {
        console.log(error);
    }
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}

const weatherDefault = async () => {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${DEFAULT_CITY}&units=${UNITS}&appid=${API_KEY}`);
        const data = await res.json();
        let temp = Math.round(data.main.temp);
        temperatureValue.innerHTML = `${temp}&degC`;
        let desc = data.weather[0].description;
        temperatureDesc.textContent = desc.toUpperCase();
        let city = data.name;
        nameCity.textContent = city;
        let day = DAY_WEEK[DATE.getDay()];
        let time = DATE.toLocaleTimeString('en-US');
        currentDate.textContent = `${day}, ${time}`;
        let feels = Math.round(data.main.feels_like);
        feelsLike.innerHTML = `<img class="weather__feels" src="assets/images/temperature.svg" />Feels like: ${feels}&degC`;
        let wind = data.wind.speed;
        let windKilometer = Math.round(wind * 3.6);
        windSpeed.innerHTML = `<img class="weather__wind" src="assets/images/breeze.svg" />Wind: ${windKilometer}km/h`;
        let humidity = data.main.humidity;
        humidityPercentage.innerHTML = `<img class="weather__humidity" src="assets/images/humidity.svg" />Humidity: ${humidity}%`;

        switch (data.weather[0].main) {
            case 'Clear':
                icon.src = 'assets/images/clear.svg'
                break;
            case 'Rain':
                icon.src = 'assets/images/rain.svg'
                break;
            case 'Clouds':
                icon.src = 'assets/images/clouds.svg'
                break;
            case 'Thunderstorm':
                icon.src = 'assets/images/thunderstorm.svg'
                break;
            case 'Haze':
                icon.src = 'assets/images/fog.svg'
                break;
            case 'Mist':
                icon.src = 'assets/images/fog.svg'
                break;
            case 'Drizzle':
                icon.src = 'assets/images/drizzle.svg'
                break;
            case 'Smoke':
                icon.src = 'assets/images/fog.svg'
                break;
            case 'Fog':
                icon.src = 'assets/images/fog.svg'
                break;
            case 'Snow':
                icon.src = 'assets/images/snow.svg'
                break;
        }
    } catch (error) {
        console.log(error);
    }
}
weatherDefault();

SEARCH_BUTTON.addEventListener('click', (e) => {
    e.preventDefault();
    let city = SEARCH_INPUT.value;
    getWeather(city);
    SEARCH_INPUT.value = '';
});

const getWeather = async (city) => {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${UNITS}&appid=${API_KEY}`);
        const data = await res.json();
        let temp = Math.round(data.main.temp);
        temperatureValue.innerHTML = `${temp}&degC`;
        let desc = data.weather[0].description;
        temperatureDesc.textContent = desc.toUpperCase();
        let cityName = data.name;
        nameCity.textContent = cityName;
        let day = DAY_WEEK[DATE.getDay()];
        let time = DATE.toLocaleTimeString('en-US');
        currentDate.textContent = `${day}, ${time}`;
        let feels = Math.round(data.main.feels_like);
        feelsLike.innerHTML = `<img class="weather__feels" src="assets/images/temperature.svg" />Feels like: ${feels}&degC`;
        let wind = data.wind.speed;
        let windKilometer = Math.round(wind * 3.6);
        windSpeed.innerHTML = `<img class="weather__wind" src="assets/images/breeze.svg" />Wind: ${windKilometer}km/h`;
        let humidity = data.main.humidity;
        humidityPercentage.innerHTML = `<img class="weather__humidity" src="assets/images/humidity.svg" />Humidity: ${humidity}%`;

        switch (data.weather[0].main) {
            case 'Clear':
                icon.src = 'assets/images/clear.svg'
                break;
            case 'Rain':
                icon.src = 'assets/images/rain.svg'
                break;
            case 'Clouds':
                icon.src = 'assets/images/clouds.svg'
                break;
            case 'Thunderstorm':
                icon.src = 'assets/images/thunderstorm.svg'
                break;
            case 'Haze':
                icon.src = 'assets/images/fog.svg'
                break;
            case 'Mist':
                icon.src = 'assets/images/fog.svg'
                break;
            case 'Drizzle':
                icon.src = 'assets/images/drizzle.svg'
                break;
            case 'Smoke':
                icon.src = 'assets/images/fog.svg'
                break;
            case 'Fog':
                icon.src = 'assets/images/fog.svg'
                break;
            case 'Snow':
                icon.src = 'assets/images/snow.svg'
                break;
        }
    } catch (error) {
        if (city === '') {
            Swal.fire({
                icon: 'error',
                text: 'Enter the name of the city',
                background: '#f9f9ff',
                confirmButtonColor: '#71aed3'
            });
        } else {
            Swal.fire({
                icon: 'warning',
                text: 'City not found',
                background: '#f9f9ff',
                confirmButtonColor: '#71aed3'
            });
        }
    }
}