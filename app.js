const apiKey = '87b9289da4c9c1ae3a5ab9fd9dff956b';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(res => res.json())
        .then(data => updateUI(data))
}

const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputLocation = document.getElementById('location').value;
    getWeatherData(inputLocation)
})

const updateUI = data => {
    document.getElementById('city').innerText = data.name || "Unknown Location!";
    document.getElementById('show_temperature').innerText = data.main.temp;
    document.getElementById('weather_status').innerText = data.weather[0].main;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('location').value = "";
}

getWeatherData('Dhaka');