// Archivo scripts.js

document.getElementById('formularioInicioSesion').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    const mensajeError = document.getElementById('mensajeError');

    if (usuario === 'usuario' && contrasena === 'contraseña') {
        alert('Inicio de sesión exitoso!');
        // Redirigir a la página principal o realizar otras acciones necesarias
    } else {
        mensajeError.style.display = 'block';
        mensajeError.textContent = 'Usuario o contraseña incorrectos';
    }
});
