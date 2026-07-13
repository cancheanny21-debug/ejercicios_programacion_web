function MatrizEscalera() {

    let table_id = document.getElementById("matriz_id");
    let matriz = [];
    let tabla_matriz = "";

    for (let i = 0; i < 5; i++) {

        matriz[i] = [];

        for (let j = 0; j <= 5; j++) {

            matriz[i][j] = [];

            for (let k = 0; k <= 5; k++) {

                matriz[i][j][k] = "Jose en el campo: " + i +
                    " registro " + j +
                    " su valor es: " + k;

                tabla_matriz += `
                <tr>
                    <td>${i}</td>
                    <td>${j}</td>
                    <td>${k}</td>
                    <td>${matriz[i][j][k]}</td>
                </tr>`;
            }
        }
    }

    table_id.innerHTML = `
        <tr>
            <th>i</th>
            <th>j</th>
            <th>k</th>
            <th>Dato</th>
        </tr>
        ${tabla_matriz}
    `;
}

MatrizEscalera();