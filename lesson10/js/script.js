const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=3458449&appid=70d99af3e605450038d66d76ee240672';
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

let choice = "";

  function displayWeather(varWeather) {

    let city = document.createElement('h2');
    let icon = document.createElement('img');
    let temp = document.createElement('p');
    let currentTemp = document.createElement('span');
    let condition = document.createElement('p');
    let speed = document.createElement('p');
    let spanSpeed = document.createElement('span');
    let pWindChill = document.createElement('p');
    let spanWindChill = document.createElement('span');

    auxImage = `http://openweathermap.org/img/wn/${varWeather.weather[0].icon}@2x.png`;

    //(308 K − 273,15) × 9/5 + 32 = ºF
    //<p>Wind Chill:<span id="wind"></span></p>
    
    
    icon.setAttribute('src', auxImage);
    icon.setAttribute('alt', varWeather.main)
    temp.setAttribute('class', 'negrito');
    currentTemp.setAttribute('id', 'temperature');
    currentTemp.textContent = `${((varWeather['main'].temp - 273.15) * (9/5) +32).toFixed(1)} ºF`;
    condition.textContent = capitalize(varWeather.weather[0].description);
    condition.setAttribute('id', 'condition');
    spanSpeed.setAttribute('id', 'speed');
    spanSpeed.textContent = `${varWeather.wind['speed']} Km/h`;
    spanWindChill.setAttribute('id', 'wind');
    condition.setAttribute('class', 'negrito');
    city.textContent = `${varWeather.name} (${((varWeather['main'].temp - 273.15) * (9/5) +32).toFixed(1)} ºF)`;

    speed.textContent = 'Wind Speed: ';
    pWindChill.textContent = 'Wind Chill: ';
    speed.setAttribute('id', 'pspeed');
    pWindChill.setAttribute('id', 'pWindChill');
    spanWindChill.textContent = calcWindChill(((varWeather['main'].temp - 273.15) * (9/5) +32).toFixed(1), varWeather.wind[speed]);
    //temp.appendChild(currentTemp);
    speed.appendChild(spanSpeed);
    pWindChill.appendChild(spanWindChill);

    divweather.appendChild(city);
    divweather.appendChild(icon);
    divweather.appendChild(temp);
    divweather.appendChild(condition);
    divweather.appendChild(speed);
    divweather.appendChild(pWindChill);
    
  }

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const comp = jsonObject;
    displayWeather(comp);
  });
  
function view(option){
  if (option == "large"){
    document.getElementById("companies").style.display="";
    document.getElementById("companiesList").style.display="none";
  }else if (option == "small"){
    document.getElementById("companiesList").style.display="";
    document.getElementById("companies").style.display="none";
  }
}



function date(){
    const datefieldUK = document.querySelector("#date");
    const now = new Date();
    const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
    if (now.getDay() == 1 || now.getDay() == 2){
        datefieldUK.innerHTML = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
    }else{
        datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
    }
    
    document.querySelector("#date-footer").innerHTML = "Last Modification: " + document.lastModified;
    document.querySelector("#copy").innerHTML = "&copy;"
    document.querySelector('#year').innerHTML = new Date(Date.now()).getFullYear();
}

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburguerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburguerBtn");
x.onclick = toggleMenu;
