const date = document.getElementById("date");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const ampmElement = document.getElementById("ampm"); // <--- Seleccionamos el nuevo elemento

function clock() {
    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const dayNames = [
        "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
    ];

    const today = new Date();

    // Formato de la fecha
    const dayName = dayNames[today.getDay()];
    const dayNum = String(today.getDate()).padStart(2, '0');
    const monthName = monthNames[today.getMonth()];
    const year = today.getFullYear();

    date.textContent = `${dayName}, ${dayNum} de ${monthName} del ${year}`;

    // Formato de la hora
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    const ampmText = h >= 12 ? "PM" : "AM";

    // Convertir formato de 24 horas a 12 horas
    h = h % 12;
    h = h ? h : 12; // el 0 se convierte en 12

    // Añadir ceros a la izquierda para números menores a 10
    h = String(h).padStart(2, '0');
    m = String(m).padStart(2, '0');
    s = String(s).padStart(2, '0');

    hour.textContent = h;
    minute.textContent = m;
    second.textContent = s;
    ampmElement.textContent = ampmText;
}

// Inicializar el reloj inmediatamente
clock();

// Actualizar el reloj cada segundo
setInterval(clock, 1000);
