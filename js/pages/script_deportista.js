document.addEventListener('DOMContentLoaded', function() {
    cargarDatosInicialesDeportistas();
    const formularioDeportista = document.getElementById('formularioDeportista');
    formularioDeportista.addEventListener('submit', agregarDeportista);
    const cancelarFormulario = document.getElementById('cancelarFormulario');
    cancelarFormulario.addEventListener('click', limpiarFormulario);
});

let listaDeportistas = [];

function cargarDatosInicialesDeportistas() {
    fetch('/data/data_deportista.json')  // Asegúrate de que la ruta al archivo JSON es correcta
        .then(response => response.json())
        .then(data => {
            listaDeportistas = data.dataDeportistas.map(deportista => ({
                ...deportista,
                fotoCedula: `/img/${deportista.fotoCedula}`,  // Ajustar ruta de la foto de cédula
                fotoDeportista: `/img/${deportista.fotoDeportista}`  // Ajustar ruta de la foto del deportista
            }));
            actualizarTablaDeportistas();
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

function agregarDeportista(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombreDeportistaInput').value;
    const apellidos = document.getElementById('apellidosDeportistaInput').value;
    const cedula = document.getElementById('cedulaDeportistaInput').value;
    const fechaNacimiento = document.getElementById('fechaNacimientoInput').value;
    const fotoCedula = document.getElementById('fotoCedulaInput').files[0];
    const fotoDeportista = document.getElementById('fotoDeportistaInput').files[0];

    if (nombre === '' || apellidos === '' || cedula === '' || fechaNacimiento === '' || !fotoCedula || !fotoDeportista) {
        showModal('Por favor, complete todos los campos.');
        return;
    }

    const nuevoDeportista = {
        nombre: nombre,
        apellidos: apellidos,
        cedula: cedula,
        fechaNacimiento: fechaNacimiento,
        fotoCedula: URL.createObjectURL(fotoCedula),
        fotoDeportista: URL.createObjectURL(fotoDeportista)
    };

    listaDeportistas.push(nuevoDeportista);
    actualizarTablaDeportistas();
    limpiarFormulario();
}

function actualizarTablaDeportistas() {
    const tablaDeportistasBody = document.getElementById('tablaDeportistasBody');
    tablaDeportistasBody.innerHTML = '';
    listaDeportistas.forEach(function(deportista, index) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${deportista.nombre}</td>
            <td>${deportista.apellidos}</td>
            <td>${deportista.cedula}</td>
            <td>${deportista.fechaNacimiento}</td>
            <td><img src="${deportista.fotoCedula}" alt="Foto de Cédula" style="width: 50px; height: auto;"></td>
            <td><img src="${deportista.fotoDeportista}" alt="Foto de Deportista" style="width: 50px; height: auto;"></td>
            <td>
                <a href="#editDeportista" class="edit" style="color: black">
                    <i class="bi bi-pencil-square bi-4x"></i>
                </a>
                <a href="#deleteDeportista" class="delete" style="color: black">
                    <i class="bi bi-file-earmark-x bi-4x"></i>
                </a>
            </td>
        `;
        tablaDeportistasBody.appendChild(fila);
    });
}

function limpiarFormulario() {
    document.getElementById('nombreDeportistaInput').value = '';
    document.getElementById('apellidosDeportistaInput').value = '';
    document.getElementById('cedulaDeportistaInput').value = '';
    document.getElementById('fechaNacimientoInput').value = '';
    document.getElementById('fotoCedulaInput').value = '';
    document.getElementById('fotoDeportistaInput').value = '';
}

function showModal(message) {
    const modal = document.getElementById('myModal'); // Asegúrate de que tienes un modal con este ID
    const modalMessage = document.getElementById('modalMessage'); // Y un elemento para el mensaje
    modalMessage.textContent = message;
    modal.style.display = 'block';

    const span = document.getElementsByClassName('close')[0];
    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}
