const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const weatherCard = document.querySelector('.weather-card');
const weatherApiKey = "b38445e313331e1ccbe9d534b2ae461d";


const temp = document.getElementById('temp');
const icon = document.getElementById('icon');


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
        temp.innerText = `${Math.round(data.main.temp)}°`;
        if (data.weather.length) {
          icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        } else {
          icon.src = `https://openweathermap.org/img/wn/02d@2x.png`;
        }
  
        weatherCard.classList.remove('hidden');
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  });