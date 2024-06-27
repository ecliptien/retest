const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const weatherCard = document.querySelector('.weather-card');
const weatherApiKey = "b38445e313331e1ccbe9d534b2ae461d";

const cityName = document.getElementById('city');
const cloud = document.getElementById('clouds')
const rain = document.getElementById('rain.1h')


searchButton.addEventListener('click', () => {
    if (searchInput.value) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&APPID=${weatherApiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        cityName.innerText = data.name;
        temp.innerText = `${Math.round(data.main.temp)}°`;
    });
    
  }});