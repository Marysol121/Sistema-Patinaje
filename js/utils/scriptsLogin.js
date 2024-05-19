// Archivo scripts.js

document.getElementById('formularioInicioSesion').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    const mensajeError = document.getElementById('mensajeError');

    if (usuario === 'usuario' && contrasena === 'contraseña') {
        
        // Redirigir a la página principal o realizar otras acciones necesarias
        window.location.href = 'admin.html';
    } else {
        mensajeError.style.display = 'block';
        mensajeError.textContent = 'Usuario o contraseña incorrectos';
    }

});
document.getElementById('togglePassword').addEventListener('click', function() {
    const contrasena = document.getElementById('contrasena');
    const tipo = contrasena.getAttribute('type') === 'password' ? 'text' : 'password';
    contrasena.setAttribute('type', tipo);
    this.textContent = tipo === 'password' ? '👁' : '👁‍🗨'; // Cambia el ícono del ojo
});