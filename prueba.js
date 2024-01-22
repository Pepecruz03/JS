var edad = prompt ("escribe tu edad");

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


var dia = "dosdasdm";

if(dia == "lunes" || dia == "martes" || dia == "miercoles" || dia =="jueves" || dia == "viernes") {
    console.log("Es un dia de la semana")
} else if (dia == "sabado" || "domingo") {
    console.log("Es un fin de semana") 
} else {
    console.log("Por favor ingrese un dia de la semana valido") ;
}