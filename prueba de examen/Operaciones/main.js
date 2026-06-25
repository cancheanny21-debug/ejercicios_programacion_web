var main = document.getElementById("main_id");
var text_numero1 = document.getElementById("numero_1");
var text_numero2 = document.getElementById("numero_2");
var select_operacion = document.getElementById("operacion");
var btn_enviar = document.getElementById("enviar");

btn_enviar.addEventListener("click", function (event) {
    event.preventDefault();

    var num1 = parseFloat(text_numero1.value) || 0;
    var num2 = parseFloat(text_numero2.value) || 0;

    // Captura la operación seleccionada
    var operacion = select_operacion.value;
    var resultado = 0;
    var nombreOperacion = "";

    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            nombreOperacion = "Suma";
            break;
        case "resta":
            resultado = num1 - num2;
            nombreOperacion = "Resta";
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            nombreOperacion = "Multiplicación";
            break;
        case "division":
            resultado = num2 !== 0 ? (num1 / num2) : "No se puede dividir entre cero";
            nombreOperacion = "División";
            break;
    }

    // Muestra solo la operación elegida
    main.innerHTML = "<strong>" + nombreOperacion + ":</strong> " + resultado;

    // Hace visible el contenedor
    main.style.display = "block";
});