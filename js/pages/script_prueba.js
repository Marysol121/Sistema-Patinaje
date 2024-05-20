document.addEventListener('DOMContentLoaded', function() {
    cargarDatosInicialesPruebas();
    const formularioPrueba = document.getElementById('formularioPrueba');
    formularioPrueba.addEventListener('submit', agregarPrueba);
});

let listaPruebas = [];

function cargarDatosInicialesPruebas() {
    fetch('/data/data_pruebas.json')
        .then(response => response.json())
        .then(data => {
            listaPruebas = data.dataPruebas;
            actualizarTablaPruebas();
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

function agregarPrueba(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombrePruebaInput').value;
    const descripcion = document.getElementById('descripcionPruebaInput').value;

    if (nombre === '' || descripcion === '') {
        showModal('Por favor, complete todos los campos.');
        return;
    }

    const nuevaPrueba = {
        id: listaPruebas.length + 1,
        nombre: nombre,
        descripcion: descripcion
    };

    listaPruebas.push(nuevaPrueba);
    actualizarTablaPruebas();

    // Limpiar formulario
    document.getElementById('nombrePruebaInput').value = '';
    document.getElementById('descripcionPruebaInput').value = '';
}

function actualizarTablaPruebas() {
    const tablaPruebas = document.getElementById('tabla-pruebas').querySelector('tbody');
    tablaPruebas.innerHTML = '';
    listaPruebas.forEach(function(script_prueba, index) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${script_prueba.nombre}</td>
            <td>${script_prueba.descripcion}</td>
            <td>
                <a href="#editPrueba" class="edit" style="color: black">
                    <i class="bi bi-pencil-square bi-4x"></i>
                </a>
                <a href="#deletePrueba" class="delete" style="color: black">
                    <i class="bi bi-file-earmark-x bi-4x"></i>
                </a>
            </td>
        `;
        tablaPruebas.appendChild(fila);
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
