document.getElementById('contador').addEventListener('submit', function (e) {

    e.preventDefault();

    const pantalla = document.getElementById('resultado');

    if (pantalla) {
        pantalla.innerHTML = "";
    }


    for (let i = 1; i <= 10; i++) {

        setTimeout(function () {
            if (pantalla) {
                pantalla.innerHTML += i + " ";
            }
            console.log(i);


            if (i === 10) {

                setTimeout(function () {
                    alert("El contador ha llegado a 10");
                }, 50);
            }
        }, i * 400);
    }

});