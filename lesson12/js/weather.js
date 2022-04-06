const requestURLW = 'https://api.openweathermap.org/data/2.5/weather?id=4348599&appid=70d99af3e605450038d66d76ee240672';
const requestURLW2 = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.980671&lon=-77.100258&exclude=current,hourly,minutely&appid=2776b0619ca272f3d43719a8df7e1262';
const divweather = document.querySelector('.weather');
const divweatherF = document.querySelector('.weatherDays');
const divweatherAlert = document.querySelector('#weatherAlert');
const yellowAlert = [300,500,501,600,601];
const redAlert = [200,201,202,210,211,212,221,230,231,232,301,302,310,311,312,313,314,321,502,503,504,511,520,521,522,531,602,611,612,613,615,616,620,621,622];
let windchill = "";
let auxDaily = 0;
const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let climateAlert = "";

function closeAlert(){
  document.getElementById('weatherAlert').style.display="none";
}

function takeWeek (value){
  let day = new Date();

  return week[day.getDay()+value];
}

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

function displayForecast(varForecast){
  if(auxDaily > 0 && auxDaily < 4){
    let sectionF = document.createElement('section')
    let dayWeek = document.createElement('h2');
    let desc = document.createElement('h3');
    let imgF = document.createElement('img');
    let tempF = document.createElement('p');

    desc.textContent = capitalize(varForecast.weather[0].description);
    auxImg = `http://openweathermap.org/img/wn/${varForecast.weather[0].icon}@2x.png`;
    imgF.setAttribute('src', auxImg);
    imgF.setAttribute('alt', varForecast.weather[0].description);
    tempF.textContent = `${((varForecast.temp.day - 273.15) * (9/5) +32).toFixed(1)} ºF`;
    tempF.setAttribute('class', 'negrito');
    dayWeek.textContent = takeWeek(auxDaily);

    sectionF.appendChild(dayWeek);
    sectionF.appendChild(desc);
    sectionF.appendChild(imgF);
    sectionF.appendChild(tempF);
    divweatherF.appendChild(sectionF);
  }
  auxDaily += 1;
}

  function displayWeather(varWeather) {

    let city = document.createElement('h2');
    let icon = document.createElement('img');
    let temp = document.createElement('p');
    let currentTemp = document.createElement('span');
    let condition = document.createElement('p');
    let humidity = document.createElement('p');

    auxImage = `http://openweathermap.org/img/wn/${varWeather.weather[0].icon}@2x.png`;

    //<input type="button" value="X" onclick="closeAlert()">
    //auxYAlert = ""+varWeather.weather[0].id;
    if (yellowAlert.indexOf(varWeather.weather[0].id) > -1){
      divweatherAlert.setAttribute('class', 'yellowAlert');
      let yh2 = document.createElement('h2');
      yh2.textContent = "Be careful, today we'll have "+varWeather.weather[0].description;
      let yBtn = document.createElement('button');
      yBtn.setAttribute('onclick', 'closeAlert()');
      yBtn.textContent = "Close Alert";
      yBtn.setAttribute('class', 'btnAlert');
      let yImg = document.createElement('img');
      yImg.setAttribute('src','images/alert.png');
      yImg.setAttribute('alt', 'Alert');

      divweatherAlert.appendChild(yh2);
      divweatherAlert.appendChild(yImg);
      divweatherAlert.appendChild(yBtn);
    }else if (redAlert.indexOf(varWeather.weather[0].id) > -1){
      divweatherAlert.setAttribute('class', 'redAlert');
      let rh2 = document.createElement('h2');
      rh2.textContent = "DANGEROUS!!! Stay at home. Today we'll have "+varWeather.weather[0].description;
      let rBtn = document.createElement('button');
      rBtn.setAttribute('onclick', 'closeAlert()');
      rBtn.textContent = "Close Alert";
      rBtn.setAttribute('class', 'btnAlert');
      let rImg = document.createElement('img');
      rImg.setAttribute('src','images/forbidden.png');
      rImg.setAttribute('alt', 'Forbidden');

      divweatherAlert.appendChild(rh2);
      divweatherAlert.appendChild(rImg);
      divweatherAlert.appendChild(rBtn);
    }
    
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

  fetch(requestURLW2)
  .then(function (response2) {
    return response2.json();
  })
  .then(function (jsonObject2) {
    console.table(jsonObject2);  
    const comp2 = jsonObject2['daily'];
    comp2.forEach(displayForecast);
  });