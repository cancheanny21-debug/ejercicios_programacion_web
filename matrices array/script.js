const nombres = ["Ana", "Luis", "Sofia", "Juan", "Maria", "Carlos", "Lucia", "David", "Elena", "Pedro", "Ana", "Maria", "Carlos", "Lucia", "David", "Elena", "Pedro"];
const edad = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];
const carrera = ["INGENIERIA EN SISTEMAS", "INGENIERIA EN SISTEMAS", "INGENIERIA EN SISTEMAS", "INGENIERIA EN SISTEMAS", "INGENIERIA EN SISTEMAS", "INGENIERIA EN SISTEMAS", "INGENIERIA EN SISTEMAS", "INGENIERIA EN SISTEMAS", "INGENIERIA EN SISTEMAS", "INGENIERIA EN SISTEMAS", "INGENIERIA EN SISTEMAS", "INGENIERIA EN SISTEMAS", "INGENIERIA EN SISTEMAS", "INGENIERIA EN SISTEMAS", "INGENIERIA EN SISTEMAS", "INGENIERIA EN SISTEMAS", "INGENIERIA EN SISTEMAS"];

const tabla = document.getElementById("nombres");
console.log(nombres.length);

let tables = "";
nombres.forEach((element, index) => {
    console.log("El estudiante " + index + " es: " + element);
    tables += ' <tr><td>' + index + '</td><td>' + element + '</td><td>' + edad[index] + '</td><td>' + carrera[index] + '</td></tr>';


});


tabla.innerHTML = "<tr><th>Indice</th><th>Nombre</th><th>Edad</th><th>Carrera</th></tr> " + tables;