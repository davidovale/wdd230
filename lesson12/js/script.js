const requestURL = 'data/data.json';
const temples = document.querySelector('.temples');
let choice = "";
let auxTime = 0;
let auxSelect = 0;
const selectTemple = document.querySelector('.temple-list');

  function displayTemples(temple) {
    // Create elements to add to the document
    let section = document.createElement('section');
    let sectionPlus = document.createElement('div');
    let sectionHistory = document.createElement('div');
    let name = document.createElement('h2');
    let image = document.createElement('img');
    let address = document.createElement('p');
    let address1 = document.createElement('p');
    let tel = document.createElement('p');
    let email = document.createElement('a');
    let history = document.createElement('span');
    let closure = document.createElement('span');
    let lblServices = document.createElement('p');
    let lblBaptism = document.createElement('p');
    let lblEndowment = document.createElement('p');
    let lblSealment = document.createElement('p');
    let lblClosure = document.createElement('p');
    let lblHistory = document.createElement('p');
    let btnPlus = document.createElement('button');
    let btnLess = document.createElement('button');
    let btnLike = document.createElement('img');
    const auxSectionPlus = "plus" + temple.id;
    const auxHistory = "history" + temple.id;
    const auxBtnPlus = "btnPlus" + temple.id;
    const auxBtnLess = "btnLess" + temple.id;
    
    
    image.setAttribute('src',temple.imageurl);
    image.setAttribute('alt', temple.name);
    image.setAttribute('class', 'temple-images');
    image.setAttribute('loading', 'lazy');
    sectionPlus.setAttribute('class', 'section-plus');
    sectionHistory.setAttribute('class', 'section-history');
    sectionPlus.setAttribute('id', auxSectionPlus);
    sectionHistory.setAttribute('id', auxHistory);
    lblServices.setAttribute('class', 'negrito');
    lblBaptism.setAttribute('class', 'negrito');
    lblEndowment.setAttribute('class', 'negrito');
    lblSealment.setAttribute('class', 'negrito');
    lblClosure.setAttribute('class', 'negrito');
    lblHistory.setAttribute('class', 'negrito');
    history.setAttribute('class', 'items');
    email.setAttribute('class', "txtEmail");
    
    btnPlus.setAttribute('id', auxBtnPlus);
    btnPlus.setAttribute('value', '+');
    btnPlus.setAttribute('class', 'btnPL');
    const auxFunctionPlus = 'btnPlus("'+temple.id+'")';
    btnPlus.setAttribute('onclick', auxFunctionPlus);
    btnPlus.textContent = "+";

    btnLess.setAttribute('id', auxBtnLess);
    btnLess.setAttribute('value', '+');
    btnLess.setAttribute('class', 'btnPL');
    const auxFunctionLess = 'btnLess("'+temple.id+'")';
    btnLess.setAttribute('onclick', auxFunctionLess);
    btnLess.textContent = "-";
    
    let auxBtnLike = "like"+temple.id;
    btnLike.setAttribute('id', auxBtnLike);
    btnLike.setAttribute('alt', temple.id);
    btnLike.setAttribute('class', 'btn-like');

    let valueLike = getLike(temple.id);
    if(valueLike == "yes"){
      btnLike.setAttribute('src', 'images/like_yes.png');
      
    }else{
      btnLike.setAttribute('src', 'images/like_no.png');
    }
    
    const setLikeFunction = 'setLike("'+temple.id+'")';
    btnLike.setAttribute('onclick', setLikeFunction);

    createLikes(temple.id);
     

    name.textContent = temple.name;
    address.textContent = temple.address;
    tel.textContent = temple.phone;
    email.textContent = temple.email;
    closure.textContent = temple.closure;
    history.textContent = temple.history;
    lblServices.textContent = "Services";
    lblBaptism.textContent = "Baptism";
    lblEndowment.textContent = "Endowment";
    lblSealment.textContent = "Sealment";
    lblClosure.textContent = "Closure";
    lblHistory.textContent = "History";

    createSelect(temple.name);

    sectionPlus.appendChild(lblServices);

  temple.services.forEach((templeServices) => {
      let serviceElement = document.createElement('li');
      serviceElement.textContent = templeServices;

      sectionPlus.appendChild(serviceElement);
  });

  sectionPlus.appendChild(lblBaptism);
    temple.baptism.forEach((templeBaptism) => {
      let baptismElement = document.createElement('span');
      baptismElement.setAttribute('class', 'items');
      baptismElement.textContent = templeBaptism;


      sectionPlus.appendChild(baptismElement);
  });
  sectionPlus.appendChild(lblEndowment);
    temple.endowment.forEach((templeEndowment) => {
      let endowmentElement = document.createElement('span');
      endowmentElement.setAttribute('class', 'items');
      endowmentElement.textContent = templeEndowment;


      sectionPlus.appendChild(endowmentElement);
  });
  sectionPlus.appendChild(lblSealment);
    temple.sealment.forEach((templeSealment) => {
      let sealmentElement = document.createElement('span');
      sealmentElement.setAttribute('class', 'items');
      sealmentElement.textContent = templeSealment;
      sectionPlus.appendChild(sealmentElement);
  });
  closure.setAttribute('class', 'items');
  sectionPlus.appendChild(lblClosure);
  sectionPlus.appendChild(closure);
  sectionHistory.appendChild(lblHistory);
  

    section.appendChild(name);
    section.appendChild(image);
    section.appendChild(address);
    section.appendChild(tel);
    section.appendChild(email);
    section.appendChild(btnPlus);
    section.appendChild(btnLess);
    section.appendChild(btnLike);
    
    section.appendChild(sectionPlus);
    sectionHistory.appendChild(history);
    section.appendChild(sectionHistory);

    temples.appendChild(section);
    hide(temple.id);
    
    //templesList.appendChild(optionTemple);
  }

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const data = jsonObject['temples'];
    data.forEach(displayTemples);
  });


function date(){
    const datefieldUK = document.querySelector("#date");
    const now = new Date();
    const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
    if (now.getDay() == 1 || now.getDay() == 2){
        datefieldUK.innerHTML = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
    }else{
        datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
    }
    
   // document.querySelector("#date-footer").innerHTML = "Last Modification: " + document.lastModified;
    document.querySelector("#copy").innerHTML = "&copy;"
    document.querySelector('#year').innerHTML = new Date(Date.now()).getFullYear();
}

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburguerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburguerBtn");
x.onclick = toggleMenu;

// initialize display elements
//const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let auxLast = "";
let auxToday = "";
let lastModified = "";

Modification();
// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}


// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);


function currentDate(){
    const time = new Date()
    let dia = String(time.getDate()).padStart(2, '0');
    let mes = String(time.getMonth() + 1).padStart(2, '0');
    let ano = time.getFullYear();
    dataAtual = mes + '/' + dia + '/' + ano;

    return dataAtual;
}

function calculateDate(today, last){
    let d1 = new Date(today);
    let d2 = new Date(last);
    const diffTime = Math.abs(d1 - d2);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    //console.log(diffTime + " milliseconds");
    //console.log(diffDays + " days");

    return `${diffDays} day(s)`;
}

function Modification(){
    lastModified = document.lastModified
    document.querySelector(".lastModification").innerHTML = "Last Update: " + lastModified;
  }
  
let lista = document.getElementById('templesList');
function createSelect(value){
  
    var opt = document.createElement('option');
    opt.value = auxSelect;
    opt.innerHTML = value;
    lista.appendChild(opt);
    auxSelect += 1;
}