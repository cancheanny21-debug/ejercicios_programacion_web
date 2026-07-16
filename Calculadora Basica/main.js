
function agregar(valor) {
    document.getElementById("calculadora").value += valor;
}


function calcular() {

    let operacion = document.getElementById("calculadora").value;

    try {
        document.getElementById("calculadora").value = eval(operacion);
    } catch {
        document.getElementById("calculadora").value = "Error";
    }

}


function borrarTodo() {
    document.getElementById("calculadora").value = "";
}