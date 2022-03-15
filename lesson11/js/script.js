


const images = document.querySelectorAll("[data-src]");

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
