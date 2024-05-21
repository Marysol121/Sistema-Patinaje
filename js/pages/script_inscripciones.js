document.addEventListener('DOMContentLoaded', function() {
    cargarDatosInicialesCategorias('categoriasInscripciones');
    cargarDatosInicialesEventos('eventosInscripciones');
    cargarDatosInicialesPruebas('pruebasInscripciones');
    cargarDatosInicialesInscripciones();
    const formularioInscripciones = document.getElementById('formularioInscripciones');
    formularioInscripciones.addEventListener('submit', agregarInscripcion);
});

//Cargar eventos
function cargarDatosInicialesEventos(eventosInscripciones) {
    const selectEvento = document.getElementById(eventosInscripciones);

    fetch('/data/data_eventos.json')
        .then(response => response.json())
        .then(data => {
            const listaEventosA = data.dataEventos;

            // Limpiar el contenido actual del select
            selectEvento.innerHTML = '';

            // Agregar la opción inicial
            const optionInicial = document.createElement('option');
            optionInicial.value = '';
            optionInicial.textContent = 'Seleccione un evento';
            selectEvento.appendChild(optionInicial);

            // Agregar opciones desde el JSON
            listaEventosA.forEach(i => {
                const option = document.createElement('option');
                option.value = i.nombre;
                option.textContent = i.nombre;
                selectEvento.appendChild(option);
            });
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

//Cargar Datos iniciales de Categorias
function cargarDatosInicialesCategorias(nombreSelec) {
    const selectCategoria = document.getElementById(nombreSelec);

    fetch('/data/data_categorias.json')
        .then(response => response.json())
        .then(data => {
            const listaCategoriasA = data.dataCategorias;

            // Limpiar el contenido actual del select
            selectCategoria.innerHTML = '';

            // Agregar la opción inicial
            const optionInicial = document.createElement('option');
            optionInicial.value = '';
            optionInicial.textContent = 'Seleccione una categoría';
            selectCategoria.appendChild(optionInicial);

            // Agregar opciones desde el JSON
            listaCategoriasA.forEach(i => {
                const option = document.createElement('option');
                option.value = i.nombre;
                option.textContent = i.nombre;
                selectCategoria.appendChild(option);
            });
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

// Cargar pruebas
function cargarDatosInicialesPruebas(nombreSelec) {
    const selectPrueba = document.getElementById(nombreSelec);

    fetch('/data/data_pruebas.json')
        .then(response => response.json())
        .then(data => {
            const listaPruebas = data.dataPruebas;

            // Limpiar el contenido actual del select
            selectPrueba.innerHTML = '';

            // Agregar la opción inicial
            const optionInicial = document.createElement('option');
            optionInicial.value = '';
            optionInicial.textContent = 'Seleccione una prueba';
            selectPrueba.appendChild(optionInicial);

            // Agregar opciones desde el JSON
            listaPruebas.forEach(prueba => {
                const option = document.createElement('option');
                option.value = prueba.nombre;
                option.textContent = prueba.nombre;
                selectPrueba.appendChild(option);
            });
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

//Agregar Datos
let listaIncripciones = [];

function agregarInscripcion(event) {
    event.preventDefault();

    const cedula = document.getElementById('cedulaDeportistaInscripciones').value;
    const evento = document.getElementById('eventosInscripciones').value; // Obtener valor seleccionado del evento
    const categoria = document.getElementById('categoriasInscripciones').value; // Obtener valor seleccionado de la categoría
    const pruebas = document.getElementById('pruebasInscripciones').value; // Obtener valor seleccionado de la prueba

    if (!isValidCedula(cedula)) {
        showModal('Cédula no válida.');
        return;
    }

    const nuevaInscripcion = {
        id: listaIncripciones.length + 1,
        cedula: cedula,
        evento: evento,
        categoria: categoria,
        pruebas: pruebas
    };

    listaIncripciones.push(nuevaInscripcion);
    actualizarTablaInscripciones();

    // Limpiar formulario
    document.getElementById('formularioInscripciones').reset();
}

function actualizarTablaInscripciones() {
    const tablaInscripciones = document.getElementById('tablaInscripcionesBody');
    tablaInscripciones.innerHTML = '';
    listaIncripciones.forEach(function(inscripcion, index) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${inscripcion.cedula}</td>
            <td>${inscripcion.evento}</td>
            <td>${inscripcion.categoria}</td>
            <td>${inscripcion.pruebas}</td>
            <td>
                <a href="#editInscripciones" class="edit" style="color: black">
                    <i class="bi bi-pencil-square bi-4x"></i>
                </a>
                <a href="#deleteInscripciones" class="delete" style="color: black">
                    <i class="bi bi-file-earmark-x bi-4x"></i>
                </a>
            </td>
        `;
        tablaInscripciones.appendChild(fila);
    });
}

// Función para cargar datos iniciales de inscripciones
function cargarDatosInicialesInscripciones() {
    fetch('/data/data_inscripciones.json')
        .then(response => response.json())
        .then(data => {
            listaIncripciones = data.inscripciones; // Asigna las inscripciones al arreglo global listaIncripciones
            actualizarTablaInscripciones(); // Actualiza la tabla de inscripciones con los datos cargados
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

// Event listener para el formulario
document.getElementById('formularioInscripciones').addEventListener('submit', agregarInscripcion);


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

function showModal(message) {
    const modal = document.getElementById('myModal');
    const modalMessage = document.getElementById('modalMessage');
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