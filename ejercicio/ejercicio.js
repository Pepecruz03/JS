function edad (){
var edad = prompt("Por favor escribe tu edad");

if (edad >= 0 && edad <= 5) {
  alert("Eres un bebe");
} else if (edad >= 6 && edad <= 11) {
  alert("Eres un nino");
} else if (edad >= 12 && edad <= 18) {
  alert("Eres un adolescente");
} else if (edad >= 19 && edad <= 30) {
  alert("Eres un joven");
} else if (edad >= 31 && edad <= 64) {
  alert("Eres un adulto");
} else if (edad >= 65 && edad <= 120) {
  alert("Eres un adulto mayor");
} else {
  alert("La edad no es valida (Eres una imposibilidad en este mundo)");
}
}

function dia (){
var dia = prompt("ingresa un dia y te notificare si es de la semana o del fin");

if(dia == "lunes" || dia == "martes" || dia == "miercoles" || dia =="jueves" || dia == "viernes") {
    alert("Es un dia de la semana")
} else if (dia == "sabado" || dia == "domingo") {
    alert("Es un fin de semana") 
} else {
    alert("Por favor ingrese un dia de la semana valido") ;
}
}
function parImpar (){
var numero = prompt(" Buenas por favor ingrese un numero");

if (numero>0 && (numero % 2 > 0)) {
    alert(`Hola, el numero ${numero} es impar`);
} else {
    alert(`Hola, el numero ${numero} es par`);
}
}

function nombre (){
var nombre = prompt("ingresa tu nombre");
var edad = prompt(`Muy bien ${nombre} por favor ingresa tu edad`);

if (nombre == "juan" && edad == 20){
    alert ("Bienvenido Juan, gracias por confiar en nosotros")
    } else {
    alert (`Esto es vergonzoso ${nombre} pero lamentablemente no puedes ingresar`)
    }
  }   