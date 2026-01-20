function sumar(){
   let num1 = parseInt(document.getElementById("num1").value);
   let num2 = parseInt(document.getElementById("num2").value);
   let suma = num1 + num2;
   document.getElementById("resultado").innerText = suma; 
}

function restar(){
   let num1 = parseInt(document.getElementById("num1").value);
   let num2 = parseInt(document.getElementById("num2").value);
   let resta = num1 - num2;
   document.getElementById("resultado").innerText = resta; 
}

function multiplicar(){
   let num1 = parseInt(document.getElementById("num1").value);
   let num2 = parseInt(document.getElementById("num2").value);
   let multi = num1 * num2;
   document.getElementById("resultado").innerText = multi; 
}

function dividir(){
   let num1 = parseInt(document.getElementById("num1").value);
   let num2 = parseInt(document.getElementById("num2").value);
   let divi = num1 / num2;
   document.getElementById("resultado").innerText = divi; 
}

/* % */


