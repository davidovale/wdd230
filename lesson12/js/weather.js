const requestURLW = 'https://api.openweathermap.org/data/2.5/weather?id=4348599&appid=70d99af3e605450038d66d76ee240672';
const requestURLW2 = 'https://api.openweathermap.org/data/2.5/forecast?id=4348599&units=imperial&appid=2776b0619ca272f3d43719a8df7e1262';
const divweather = document.querySelector('.weather');
let windchill = "";

function calcWindChill(t, s){
  if (t <= 50 && s > 3) {
    windchill = windChill(t, s);
    windchill = `${windchill} ºF`;
  } else {
    windchill = "N/A";
  }
  // output
  //document.querySelector("#wind").innerHTML = windchill;
  return windchill;
}

function windChill(temp, speed) {
    const result = 35.74+0.6215*(temp)-35.75*(Math.pow(speed, 0.16))+0.4275*(temp)*(Math.pow(speed, 0.16));
  return result.toFixed(1);
  
}


function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}


  function displayWeather(varWeather) {

    let city = document.createElement('h2');
    let icon = document.createElement('img');
    let temp = document.createElement('p');
    let currentTemp = document.createElement('span');
    let condition = document.createElement('p');
    let humidity = document.createElement('p');

    auxImage = `http://openweathermap.org/img/wn/${varWeather.weather[0].icon}@2x.png`;

    //(308 K − 273,15) × 9/5 + 32 = ºF
    //<p>Wind Chill:<span id="wind"></span></p>
    
    
    icon.setAttribute('src', auxImage);
    icon.setAttribute('alt', varWeather.main)
    temp.setAttribute('class', 'negrito');
    currentTemp.setAttribute('id', 'temperature');
    currentTemp.textContent = `${((varWeather['main'].temp - 273.15) * (9/5) +32).toFixed(1)} ºF`;
    condition.textContent = capitalize(varWeather.weather[0].description);
    let auxHumidity = "Humidity: "+ varWeather['main'].humidity+"%";
    humidity.textContent = auxHumidity;
    condition.setAttribute('class', 'negrito');
    humidity.setAttribute('class', 'negrito');
    city.textContent = `${varWeather.name} (${((varWeather['main'].temp - 273.15) * (9/5) +32).toFixed(1)} ºF)`;

    divweather.appendChild(city);
    divweather.appendChild(icon);
    divweather.appendChild(temp);
    divweather.appendChild(condition);
    divweather.appendChild(humidity);
    
  }

  fetch(requestURLW)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const comp = jsonObject;
    displayWeather(comp);
  });