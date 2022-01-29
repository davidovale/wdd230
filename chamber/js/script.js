function date(){
    const datefieldUK = document.querySelector("#date");
    const now = new Date();
    const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
    datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
    document.querySelector("#date-footer").innerHTML = "Last Modification: " + document.lastModified;
    document.querySelector("#copy").innerHTML = "&copy;"
    document.querySelector('#year').innerHTML = new Date(Date.now()).getFullYear();
}

