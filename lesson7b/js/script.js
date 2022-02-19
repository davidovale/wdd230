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

/* -------------------------------------------------- */

// initialize display elements
//const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");
const daysDisplay = document.querySelector(".last-day");

// >>>>>>>>>>>>>>>>>>>>>TEST BY UNCOMMENTING THE LINE BELOW<<<<<<<<<<<<<<<<<<<<<<<<<
//localStorage.setItem("lastDay-ls", "01/15/2022");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastDay = window.localStorage.getItem("lastDay-ls");
let numDays = Number(window.localStorage.getItem("visitDay"));
let auxLast = "";
let auxToday = "";

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

if(lastDay==0){
    daysDisplay.textContent = currentDate(); //show the value on the page
    localStorage.setItem("lastDay-ls", currentDate()); //store the value
}else{
    alert(lastDay);
    auxLast = lastDay;
    auxToday = currentDate();
    const result = calculateDate(auxToday, auxLast);
    daysDisplay.textContent = result;
    localStorage.setItem("lastDay-ls", currentDate());
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

