const requestURL2 = 'data/data.json';
const companies = document.querySelector('.spotlight');
const images = document.querySelectorAll("[data-src]");
let count_spot = 0;
let auxSpot = 0;
let numeros = []

function preloadImage(img){
    const src = img.getAttribute("data-src")
    if(!src){
        return;
    }
    img.src = src;
}

const imgOptions = {
    threshold: 1,
    rootMargin: "150px 0px 150px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
            
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});

function displaySpotlight(company){
    if (company.membership == "silver" || company.membership == "gold"){
            let div = document.createElement('div')
            let h2 = document.createElement('h2')
            let img = document.createElement('img')
            let phrase = document.createElement('p')
            let site = document.createElement('a')

            phrase.textContent = company.phrase
            site.textContent = company.site

            div.setAttribute('class', "spotlight-1")
            div.setAttribute('id', "spotlight-"+count_spot)

            img.setAttribute('src',company.imageurl);
            img.setAttribute('alt', company.name);
            img.setAttribute('loading', 'lazy');

            site.setAttribute('href', company.site);
            site.setAttribute('target', 'blank');

            div.appendChild(img);
            div.appendChild(phrase);
            div.appendChild(site);

            companies.appendChild(div);
            count_spot += 1;        
    }
    

}

fetch(requestURL2)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const comp = jsonObject['companies'];
    comp.forEach(displaySpotlight);
    sort();
    
  });

  function sort(){
    let random = "";

    for (j=0; j<count_spot; j++){
        document.getElementById('spotlight-'+j).style.display="none";
    }

        sorteado(count_spot, 3)
    
  }

  function sorteado(max,quant) {
    
    let auxR = 0;
    while (numeros.length < quant) {
        auxR = 0;
        e = Math.floor(Math.random() * max);
        for (a=0; a<numeros.length; a++){
            if(numeros[a] == e){
                auxR = 1;
            }
        }
      
      if (auxR == 0) {
        numeros.push(e)
      }
      document.getElementById('spotlight-'+e).style.display="";
    }
   
}

  
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
