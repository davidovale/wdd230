var query = location.search.slice(1);
var partes = query.split('&');
var data = {};
partes.forEach(function (parte) {
    var chaveValor = parte.split('=');
    var chave = chaveValor[0];
    var valor = chaveValor[1];
    data[chave] = valor;
    
});
const firstName = data['firstName'].split("+");
const lastName = data['lastName'].split("+");
let auxFirst = "";
for (i in firstName){
    auxFirst += firstName[i]+" ";
}
let auxLast = "";
for (i in lastName){
    auxLast += lastName[i]+" ";
}
const email = data['txtEmail'].replace('%40', '@');
let tel = data['tel'].replace('%2B','-');
tel = tel.replace(/[^0-9]/g, ' ');


document.querySelector("#firstName").innerHTML = auxFirst;
document.querySelector("#lastName").innerHTML = auxLast;
document.querySelector("#txtEmail").innerHTML = email;
document.querySelector("#txtTel").innerHTML = tel;