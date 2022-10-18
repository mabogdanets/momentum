const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const inputCity = document.querySelector('.city');
const weatherDescription = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity');

async function getWeather() {  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&lang=ru&appid=0a4561eca336a1047d9ead9553a5c3cb&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  windSpeed.textContent = `${Math.round(data.wind.speed)} м/с`;
  humidity.textContent = `${Math.round(data.main.humidity)} %`;
  //console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
  //console.log(inputCity.value);
}
getWeather();

inputCity.addEventListener('change', getWeather);

//export default weather;