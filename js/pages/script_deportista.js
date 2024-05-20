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

    if (nombre === '' || apellidos === '' || !fotoCedula || !fotoDeportista) {
        showModal('Por favor, complete todos los campos.');
        return;
    }

    if(!isValidCedula(cedula)){
        showModal('Cédula no válida.');
        return;
    }

    if(!isValidDate(fechaNacimiento)){
        showModal('Fecha no válida. Formato esperado: yyyy-mm-dd');
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
    document.getElementById('formularioDeportista').reset();
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

// Función para validar el formato de fecha (yyyy-mm-dd)
function isValidDate(dateString) {
    const regexDate = /^\d{4}-\d{2}-\d{2}$/;
    return regexDate.test(dateString);
}

// Función para validar la edad (solo números positivos)
function isValidEdad(edadString) {
    const regexEdad = /^\d+$/;
    return regexEdad.test(edadString);
}

// Función para validar la cédula
function isValidCedula(cedula) {
    if (cedula.length !== 10 || isNaN(cedula)) {
        return false;
    }

    const provincia = parseInt(cedula.substring(0, 2));
    if (provincia < 0 || provincia > 24) {
        return false;
    }

    const tercerDigito = parseInt(cedula.charAt(2));
    if (tercerDigito > 5) {
        return false;
    }

    // Calcular el dígito verificador
    const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    let suma = 0;
    for (let i = 0; i < 9; i++) {
        let valor = parseInt(cedula.charAt(i)) * coeficientes[i];
        if (valor >= 10) {
            valor -= 9;
        }
        suma += valor;
    }
    const digitoVerificador = (10 - (suma % 10)) % 10;

    const ultimoDigito = parseInt(cedula.charAt(9));
    return digitoVerificador === ultimoDigito;
}