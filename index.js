function getIMC(){
var peso=parseFloat(document.getElementById("peso").value);
var Altura=parseFloat(document.getElementById)"Altura").value);
var imc=peso/(Altura*Altura)
document.getElementById("imc"),innerHTML=imc;
}
