//const requestURL = 'https://run.mocky.io/v3/d92fd359-0312-46f1-ae6e-187e9211041e';
// I usually use https://designer.mocky.io/design, but you said to create the file.
const requestURL = 'data/data.json';
const companies = document.querySelector('.companies');
const companiesList = document.querySelector('.companiesList');
let choice = "";

  function displayCompanies(company) {
    // Create elements to add to the document
    let section = document.createElement('section');
    let sectionList = document.createElement('section');
    let name = document.createElement('p');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let address1 = document.createElement('p');
    let tel = document.createElement('p');
    let tel1 = document.createElement('p');
    let site = document.createElement('a');
    let site1 = document.createElement('a');


    logo.setAttribute('src',company.imageurl);
    logo.setAttribute('alt', company.name);
    logo.setAttribute('loading', 'lazy');
    //logo.setAttribute('title', company.name);

    site.setAttribute('href', company.site);
    site.setAttribute('target', 'blank');

    name.textContent = company.name;
    address.textContent = company.address;
    address1.textContent = company.address;
    tel.textContent = company.phone;
    tel1.textContent = company.phone;
    site.textContent = company.site;
    site1.textContent = company.site;

    section.appendChild(logo);
    section.appendChild(address1);
    section.appendChild(tel1);
    section.appendChild(site1);

    sectionList.appendChild(name);
    sectionList.appendChild(address);
    sectionList.appendChild(tel);
    sectionList.appendChild(site);

    companies.appendChild(section);
    companiesList.appendChild(sectionList);
    
  }

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const comp = jsonObject['companies'];
    comp.forEach(displayCompanies);
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

  const hour    = String(now.getHours()).padStart(2, '0');          // 0-23
  const min     = String(now.getMinutes()).padStart(2, '0');         // 0-59
  const sec     = String(now.getSeconds()).padStart(2, '0');         // 0-59
  const date_current = currentDate();
  const str_hora = hour + ':' + min + ':' + sec;
  const datetime = date_current + " "+str_hora;
  document.querySelector("#dateTime").value = datetime;

}

function toggleMenu(){
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburguerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburguerBtn");
x.onclick = toggleMenu;