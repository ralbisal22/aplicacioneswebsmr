
function calcularDolares(){
    let euros = parseInt(document.getElementById("eur").value);

    let dolar = euros / 0.86;

    document.getElementById("resultado").innerText = dolar;

}
