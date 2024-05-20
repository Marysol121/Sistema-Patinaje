document.addEventListener('DOMContentLoaded', function() {
    cargarDatosInicialesClubes();
    const formularioClub = document.getElementById('formularioClub');
    formularioClub.addEventListener('submit', agregarClub);
    const cancelarFormulario = document.getElementById('cancelarFormulario');
    cancelarFormulario.addEventListener('click', limpiarFormulario);
});

let listaClubes = [];

function cargarDatosInicialesClubes() {
    fetch('/data/data_club.json')  // Asegúrate de que la ruta al archivo JSON es correcta
        .then(response => response.json())
        .then(data => {
            listaClubes = data.datosClubes.map(club => ({
                ...club,
                foto: `/img/${club.foto}`  // Ajustar ruta de la foto del club
            }));
            actualizarTablaClubes();
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

function agregarClub(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombreClubInput').value;
    const fechaFundacion = document.getElementById('fechaFundacionInput').value;
    const descripcion = document.getElementById('descripcionInput').value;
    const foto = document.getElementById('fotoClubInput').files[0];

    if (nombre === '' || fechaFundacion === '' || descripcion === '' || !foto) {
        showModal('Por favor, complete todos los campos.');
        return;
    }

    const nuevoClub = {
        id: listaClubes.length + 1,
        nombre: nombre,
        fechaFundacion: fechaFundacion,
        descripcion: descripcion,
        foto: URL.createObjectURL(foto)
    };

    listaClubes.push(nuevoClub);
    actualizarTablaClubes();
    limpiarFormulario();
}

function actualizarTablaClubes() {
    const tablaClubesBody = document.getElementById('tablaClubesBody');
    tablaClubesBody.innerHTML = '';
    listaClubes.forEach(function(club) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${club.nombre}</td>
            <td>${club.fechaFundacion}</td>
            <td>${club.descripcion}</td>
            <td><img src="${club.foto}" alt="Foto del Club" style="width: 50px; height: auto;"></td>
            <td>
                <a href="#editClub" class="edit" style="color: black">
                    <i class="bi bi-pencil-square bi-4x"></i>
                </a>
                <a href="#deleteClub" class="delete" style="color: black">
                    <i class="bi bi-file-earmark-x bi-4x"></i>
                </a>
            </td>
        `;
        tablaClubesBody.appendChild(fila);
    });
}

function limpiarFormulario() {
    document.getElementById('nombreClubInput').value = '';
    document.getElementById('fechaFundacionInput').value = '';
    document.getElementById('descripcionInput').value = '';
    document.getElementById('fotoClubInput').value = '';
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
