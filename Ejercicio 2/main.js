const edad = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
const nombres = ["Ana", "Luis", "Sofia", "Juan", "Maria", "Carlos", "Lucia", "David", "Elena", "Pedro", "Ana", "Luis", "Sofia", "Juan", "Maria", "Carlos", "Lucia", "David", "Elena", "Pedro"];

console.log(nombres.length);

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
    console.log(edad[i]);

    console.log(`El nombre en el índice ${i} es ${nombres[i]} y su edad es ${edad[i]}`);
}
