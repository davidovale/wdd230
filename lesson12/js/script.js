const requestURL = 'data/data.json';
const temples = document.querySelector('.temples');
const templesList = document.querySelector('.templesList');
let choice = "";
let serv = [];
let auxTime = 0;

  function displayTemples(temple) {
    // Create elements to add to the document
    let section = document.createElement('section');
    let sectionList = document.createElement('section');
    let sectionPlus = document.createElement('div');
    let sectionHistory = document.createElement('div');
    let name = document.createElement('p');
    let image = document.createElement('img');
    let address = document.createElement('p');
    let address1 = document.createElement('p');
    let tel = document.createElement('p');
    let tel1 = document.createElement('p');
    let email = document.createElement('a');
    let email1 = document.createElement('a');
    let services = document.createElement('p')
    let services1 = document.createElement('p')
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
    const auxSectionPlus = "plus" + temple.id;
    const auxHistory = "history" + temple.id;
    const auxBtnPlus = "btnPlus" + temple.id;
    const auxBtnLess = "btnLess" + temple.id;
    
    
    image.setAttribute('src',temple.imageurl);
    image.setAttribute('alt', temple.name);
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
    email1.setAttribute('class', "txtEmail")
    
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
    
    //image.setAttribute('onclick', 'newPopup()')

    name.textContent = temple.name;
    address.textContent = temple.address;
    address1.textContent = temple.address;
    tel.textContent = temple.phone;
    tel1.textContent = temple.phone;
    email.textContent = temple.email;
    email1.textContent = temple.email;
    closure.textContent = temple.closure;
    history.textContent = temple.history;
    lblServices.textContent = "Services";
    lblBaptism.textContent = "Baptism";
    lblEndowment.textContent = "Endowment";
    lblSealment.textContent = "Sealment";
    lblClosure.textContent = "Closure";
    lblHistory.textContent = "History";

    

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
  


    section.appendChild(image);
    section.appendChild(address1);
    section.appendChild(tel1);
    section.appendChild(email1);
    section.appendChild(btnPlus);
    section.appendChild(btnLess);
    
    section.appendChild(sectionPlus);
    sectionHistory.appendChild(history);
    section.appendChild(sectionHistory);

    sectionList.appendChild(name);
    sectionList.appendChild(address);
    sectionList.appendChild(tel);
    sectionList.appendChild(email);

    temples.appendChild(section);
    templesList.appendChild(sectionList);
    hide(temple.id);
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
  
function view(option){
  if (option == "large"){
    document.getElementById("temples").style.display="";
    document.getElementById("templesList").style.display="none";
  }else if (option == "small"){
    document.getElementById("templesList").style.display="";
    document.getElementById("temples").style.display="none";
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

function newPopup(){
    varWindow = window.open (
    'popupRio.html',
    'pagina',
    "width=350, height=255, top=100, left=110, scrollbars=no " );
    }



function hide(id){
  document.getElementById("plus"+id).style.display="none";
  document.getElementById("history"+id).style.display="none";
} 

function btnPlus(id){
  document.getElementById("plus"+id).style.display="";
  document.getElementById("history"+id).style.display="";

}

function btnLess(id){
  document.getElementById("plus"+id).style.display="none";
  document.getElementById("history"+id).style.display="none";
}

