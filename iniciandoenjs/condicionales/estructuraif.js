
//n = 8

// n>3 -> TRUE
// n == 5 -> FALSE
// n != 9 -> TRUE

//Tipos de operadores: >, <, >=, <=, !=, ==, ===, &&, ||

// "8" == 8 -> True
// "8" === 8 -> False

//n = 2

let dia = parseInt(prompt("Introduzca el número de día de la semana"));
//1 = Lunes, 3 = Miércoles, 5 = Viernes, 7 = Domingo

if(dia == 1) {
    alert("Lunes");
}else if(dia == 2){
    alert("Martes");
}else if(dia == 3){
    alert("Miércoles");
}else if(dia == 4){
    alert("Jueves");
}else if(dia == 5){
    alert("Viernes");
}else if(dia == 6){
    alert("Sábado");
}else if(dia == 7){
    alert("Domingo");
}else{
    alert("No coincide ningún día de la semana");
}
