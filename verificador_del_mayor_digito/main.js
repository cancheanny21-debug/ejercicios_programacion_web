var enviar = document.getElementById("enviar");
var numero_1 = document.getElementById("numero_1");
var numero_2 = document.getElementById("numero_2");

enviar.addEventListener("click", function (e) {
    e.preventDefault();

    var n1 = parseInt(numero_1.value);
    var n2 = parseInt(numero_2.value);



    if (n1 > n2) {
        alert(n1 + " es mayor que " + n2);
    }
    else if (n1 < n2) {
        alert(n1 + " es menor que " + n2);
    }
    else if (n1 === n2) {
        alert(n1 + " y " + n2 + " son iguales");
    }

});