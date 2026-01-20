/*
1. IF, ELSE, ELSE IF

2. SWITCH

*/

let dia = parseInt(prompt("Introduzca el número de día de la semana"));
//1 = Lunes, 3 = Miércoles, 5 = Viernes, 7 = Domingo

switch(dia){
    case 1: //En el caso en el que dia=1
        alert("Lunes");
        break;
    case 2:
        alert("Martes");
        break;
    case 3:
        alert("Miércoles");
        break;
    case 4:
        alert("Jueves");
        break;
    case 5:
        alert("Viernes");
        break;
    case 6:
        alert("Sábado");
        break;
    case 7:
        alert("Domingo");
        break;
    default:
        alert("No se cumple ningun caso");


}