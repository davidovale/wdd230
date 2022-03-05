const requestURL = 'https://run.mocky.io/v3/d92fd359-0312-46f1-ae6e-187e9211041e';
const companies = document.querySelector('.companies');

  function displayCompanies(company) {
    // Create elements to add to the document
    let section = document.createElement('section');
    let name = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('h3');
    let tel = document.createElement('h3');
    let site = document.createElement('a');


    logo.setAttribute('src',company.imageurl);
    logo.setAttribute('alt', company.name);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('title', company.name);

    site.setAttribute('href', company.site);
    site.setAttribute('target', 'blank');
/*
    
    h3Birth.setAttribute('class', "birth");
    h3Death.setAttribute('class', "death");
*/  
    name.textContent = company.name;
    address.textContent = company.address;
    tel.textContent = company.phone;
    site.textContent = company.site;

    section.appendChild(logo);
    section.appendChild(address);
    section.appendChild(tel);
    section.appendChild(site);

    //section.appendChild(name);

//    card.appendChild(h3Birth);
//    card.appendChild(h3Death);
//    card.appendChild(h3Local);
//    card.appendChild(portrait);
    
    companies.appendChild(section);
    
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
  

  