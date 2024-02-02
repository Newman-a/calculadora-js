function agregar(valor) {
    document.getElementById("pantalla").value += valor;
}

function borrar() {
    document.getElementById("pantalla").value = ''
}

function calcular() {
    const valor = document.getElementById("pantalla").value
    const resultado = eval(valor);
    document.getElementById("pantalla").value = resultado;
}