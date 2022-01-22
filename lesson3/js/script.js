function teste(){
    document.querySelector("#date").innerHTML = "Last Updated: " + document.lastModified;
    document.querySelector("#copy").innerHTML = "&copy;"
    document.querySelector('#year').innerHTML = new Date(Date.now()).getFullYear();
  }
  
  