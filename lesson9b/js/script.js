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
    logo.setAttribute('title', company.name);

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
  