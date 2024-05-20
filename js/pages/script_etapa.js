document.addEventListener('DOMContentLoaded', function() {
    cargarDatosInicialesEtapas();
    const formularioEtapa = document.getElementById('formularioEtapa');
    formularioEtapa.addEventListener('submit', agregarEtapa);
});

let listaEtapas = [];

function cargarDatosInicialesEtapas() {
    fetch('/data/data_etapa.json')
        .then(response => response.json())
        .then(data => {
            listaEtapas = data.dataEtapa;
            actualizarTablaEtapas();
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

function agregarEtapa(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombreEtapaInput').value;
    const descripcion = document.getElementById('descripcionEtapaInput').value;

    if (nombre === '' || descripcion === '') {
        showModal('Por favor, complete todos los campos.');
        return;
    }

    const nuevaEtapa = {
        nombre: nombre,
        descripcion: descripcion
    };

    listaEtapas.push(nuevaEtapa);
    actualizarTablaEtapas();

    // Limpiar formulario
    document.getElementById('nombreEtapaInput').value = '';
    document.getElementById('descripcionEtapaInput').value = '';
}

function actualizarTablaEtapas() {
    const tablaEtapa = document.getElementById('tabla-etapas').querySelector('tbody');
    tablaEtapa.innerHTML = '';
    listaEtapas.forEach(function(script_etapa, index) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${script_etapa.nombre}</td>
            <td>${script_etapa.descripcion}</td>
            <td>
                <a href="#editEtapa" class="edit" style="color: black">
                    <i class="bi bi-pencil-square bi-4x"></i>
                </a>
                <a href="#deleteEtapa" class="delete" style="color: black">
                    <i class="bi bi-file-earmark-x bi-4x"></i>
                </a>
            </td>
        `;
        tablaEtapa.appendChild(fila);
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
