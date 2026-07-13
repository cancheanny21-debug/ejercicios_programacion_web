MatrizEscalera();

function MatrizEscalera() {
    let table_id = document.getElementById("matriz_id");


    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let colores = ["Rojo", "Funcsia", "Turquesa", "Amarillo", "Negro", "Blanco", "Cian", "Naranja", "Mangenta", "Gris"];
    let nombres = ["David", "Ana", "Luis", "Maria", "Carlos", "Sofia", "Pedro", "Lucia", "Diego", "Elena"];

    let matriz = [];


    let tabla_matriz = `
        <tr> <th>ID / Número</th><th>Color Asignado</th><th>Nombre Persona</th><th>Registro de la Matriz </th></tr>
    `

    for (let i = 0; i < numeros.length; i++) {
        matriz[i] = [];
        for (let j = 0; j < colores.length; j++) {
            matriz[i][j] = [];

            for (let k = 0; k < nombres.length; k++) {

                matriz[i][j][k] = `${nombres[k]} en el campo ${numeros[i]} registró el color ${colores[j]}`;


                tabla_matriz += `
                    <tr>
                        <td>${numeros[i]}</td>
                        <td>${colores[j]}</td>
                        <td>${nombres[k]}</td>
                        <td>${matriz[i][j][k]}</td>
                    </tr>
                `;
            }
        }
    }

    table_id.innerHTML = tabla_matriz;
}


MatrizEscalera();