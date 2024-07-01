const lat = document.getElementById('searchInput1');
const lon = document.getElementById('searchInput2');
const searchButton = document.getElementById('searchButton');
const weatherCard = document.querySelector('.weather-card');
const weatherApiKey = "b38445e313331e1ccbe9d534b2ae461d";

const clouds = document.getElementById('clouds')
const rain = document.getElementById('rain')


searchButton.addEventListener('click', () => {
    if (lat.value & lon.value) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat.value}&lon=${lon.value}&APPID=${weatherApiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
                
        cloud.innerText = `${Math.round(data.nuagePluie.clouds)}`;
        
        weather.innerText = data.weather[0].main;
        if (data.rain) {
          rain.innerText = data.rain['1h'];
        }
        weatherCard.classList.remove('hidden');
    });
    
  }});