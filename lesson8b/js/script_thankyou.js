var query = location.search.slice(1);
var partes = query.split('&');
var data = {};
partes.forEach(function (parte) {
    var chaveValor = parte.split('=');
    var chave = chaveValor[0];
    var valor = chaveValor[1];
    data[chave] = valor;
    
});
const firstName = data['firstName'].replaceAll('+', ' ');
const lastName = data['lastName'].replaceAll('+', ' ');
const email = data['txtEmail'].replace('%40', '@');
let tel = data['tel'].replaceAll('+',' ');
tel = tel.replaceAll('%2B','+');



document.querySelector("#firstName").innerHTML = firstName;
document.querySelector("#lastName").innerHTML = lastName;
document.querySelector("#txtEmail").innerHTML = email;
document.querySelector("#txtTel").innerHTML = tel;