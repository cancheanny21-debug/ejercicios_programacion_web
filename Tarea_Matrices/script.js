const Datos_familiares = ["Anny", "Ana", "Jose", "Denilson", "Yeykol", "Yandriz"];
const Parentesco = ["hija Mayor", "Mamà", "Papà", "hermano Menor", "hermano Menor", "hermano Menor"];
const edad_familiar = [20, 47, 50, 15, 11, 6];
const cedula_familiar = ["0803914936", "0802683656", "2103821289", "0851080784", "0851048405", "0851683839"];

const tabla = document.getElementById("Datos_familiares");
console.log(Datos_familiares.length);

let tables = "";
Datos_familiares.forEach((element, index) => {
    console.log(`Índice: ${index}\n` + `Familiar: ${element}\n` + `Parentesco: ${Parentesco[index]}\n` + `Edad: ${edad_familiar[index]}\n` + `Cédula: ${cedula_familiar[index]}\n`);
    tables += ' <tr><td>' + index + '</td><td>' + element + '</td><td>' + Parentesco[index] + '</td><td>' + edad_familiar[index] + '</td><td>' + cedula_familiar[index] + '</td></tr>';


});


tabla.innerHTML = "<tr><th>Indice</th><th>Familiar</th><th>Parentesco</th><th>Edad</th><th>Cedula</tr></th>" + tables;
