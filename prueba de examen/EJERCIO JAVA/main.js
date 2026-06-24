function validarLogin(event) {
    event.preventDefault();

    const usuarioIngresado = document.getElementById('usuario').value;
    const contrasenaIngresada = document.getElementById('contrasena').value;

    // Solo dejamos la alerta
    alert(`¡Inicio de sesion!\nUsuario: ${usuarioIngresado}\nContraseña: ${contrasenaIngresada}\n¡Bienvenido!`);
}