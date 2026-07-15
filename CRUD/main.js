let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
let posicion = -1;

mostrar();

function guardar() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    if (nombre === "" || edad === "") {
        alert("Complete todos los datos");
        return;
    }

    estudiantes.push({
        nombre: nombre,
        edad: edad
    });

    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
    limpiar();
    mostrar();
}

function mostrar() {
    let tabla = "";

    for (let i = 0; i < estudiantes.length; i++) {
        tabla += `
        <tr>
            <td>${i + 1}</td>
            <td>${estudiantes[i].nombre}</td>
            <td>${estudiantes[i].edad}</td>
            <td>
                <button onclick="editar(${i})">Editar</button>
                <button onclick="eliminar(${i})">Eliminar</button>
            </td>
        </tr>
        `;
    }

    document.getElementById("tabla").innerHTML = tabla;
}

function editar(i) {
    document.getElementById("nombre").value = estudiantes[i].nombre;
    document.getElementById("edad").value = estudiantes[i].edad;
    posicion = i;
}

function actualizar() {
    if (posicion === -1) {
        alert("Seleccione un registro");
        return;
    }

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    if (nombre === "" || edad === "") {
        alert("Complete todos los datos antes de actualizar");
        return;
    }

    estudiantes[posicion].nombre = nombre;
    estudiantes[posicion].edad = edad;

    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
    limpiar();
    mostrar();
    posicion = -1;
}

function eliminar(i) {
    if (confirm("¿Desea eliminar?")) {
        estudiantes.splice(i, 1);
        localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

        if (posicion === i) {
            posicion = -1;
            limpiar();
        }

        mostrar();
    }
}

function limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
}