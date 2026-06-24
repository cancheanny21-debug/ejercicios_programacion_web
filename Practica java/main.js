var main = document.getElementById("main_id");

var text_numero1 = document.getElementById("numero_1");
var text_numero2 = document.getElementById("numero_2");
var text_bt_mostar = document.getElementById("bt_mostrar");
bt_mostar.addEventListener("click", function () {

    main.textContent = parseInt(text_numero1.value) + parseInt(text_numero2.value);


})

