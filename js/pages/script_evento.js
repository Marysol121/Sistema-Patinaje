document.addEventListener('DOMContentLoaded', function() {
    cargarDatosInicialesEventos();
    const formularioEvento = document.getElementById('formularioEvento');
    formularioEvento.addEventListener('submit', agregarEventos);
});

let listaEventos = [];

function cargarDatosInicialesEventos() {
    fetch('/data/data_eventos.json')
        .then(response => response.json())
        .then(data => {
            listaEventos = data.dataEventos;
            actualizarTablaEvento();
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

function agregarEventos(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombreEventoInput').value;
        const descripcion = document.getElementById('descripcionEventoInput').value;
        const fecha = document.getElementById('fechaEventoInput').value;
        const numeroParticipantes = document.getElementById('numParticipantesInput').value;
        const categoria = document.getElementById('categoriaSelect').value;
        const prueba = document.getElementById('pruebaSelect').value;
        const nombreOrganizador = document.getElementById('nombreOrganizadorInput').value;
        const apellidosOrganizador = document.getElementById('apellidoOrganizadorInput').value;
        const cedulaOrganizador = document.getElementById('cedulaOrganizadorInput').value;

    if (nombre === '' || descripcion === '') {
        showModal('Por favor, complete todos los campos.');
        return;
    }

    const nuevoEvento = {
        nombre: nombre,
        fecha: fecha,
        descripcion: descripcion,
        numeroParticipantes: numeroParticipantes,
        categoria: categoria,
        prueba: prueba,
        cedulaOrganizador: cedulaOrganizador,
        nombreOrganizador: nombreOrganizador,
        apellidosOrganizador: apellidosOrganizador
    };

    listaEventos.push(nuevoEvento);
    actualizarTablaEvento();

    // Limpiar formulario
    document.getElementById('nombreEventoInput').value = '';
    document.getElementById('fechaEventoInput').value = '';
    document.getElementById('descripcionEventoInput').value='';
    document.getElementById('numParticipantesInput').value = '';
    document.getElementById('categoriaSelect').value = '';
    document.getElementById('pruebaSelect').value = '';
    document.getElementById('cedulaOrganizadorInput').value = '';
    document.getElementById('nombreOrganizadorInput').value = '';
    document.getElementById('apellidoOrganizadorInput').value = '';

}

function actualizarTablaEvento() {
    const tablaEvento = document.getElementById('tabla-evento').querySelector('tbody');
    tablaEvento.innerHTML = '';
    listaEventos.forEach(function(script_evento, index) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${script_evento.nombre}</td>
            <td>${script_evento.fecha}</td>
            <td>${script_evento.descripcion}</td>
            <td>${script_evento.numeroParticipantes}</td>
            <td>${script_evento.categoria}</td>
            <td>${script_evento.prueba}</td>
            <td>${script_evento.cedulaOrganizador}</td>
            <td>${script_evento.nombreOrganizador}</td>
            <td>${script_evento.apellidosOrganizador}</td>
            <td>
                <a href="#editEvento" class="edit" style="color: black">
                    <i class="bi bi-pencil-square bi-4x"></i>
                </a>
                <a href="#deleteEvento" class="delete" style="color: black">
                    <i class="bi bi-file-earmark-x bi-4x"></i>
                </a>
            </td>
        `;
        tablaEvento.appendChild(fila);
    });
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
