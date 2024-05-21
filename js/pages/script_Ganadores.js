document.addEventListener('DOMContentLoaded', function() {
    cargarDatosInicialesCategorias('categoriasGanadores');
    cargarDatosInicialesEventos('eventosGanadores');
    cargarDatosInicialesPruebas('pruebasGanadores');
    cargarDatosInicialesGanadores();
    const formularioGanadores = document.getElementById('formularioGanadores');
    formularioGanadores.addEventListener('submit', agregarGanador);
});

//Cargar eventos
function cargarDatosInicialesEventos(nombreSelec) {
    const selectEvento = document.getElementById(nombreSelec);

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
let listaGanador = [];

function agregarGanador(event) {
    event.preventDefault();

    const cedula = document.getElementById('cedulaDeportistaGanadores').value;
    const evento = document.getElementById('eventosGanadores').value; // Obtener valor seleccionado del evento
    const categoria = document.getElementById('categoriasGanadores').value; // Obtener valor seleccionado de la categoría
    const pruebas = document.getElementById('pruebasGanadores').value; // Obtener valor seleccionado de la prueba
    const puntos1 = document.getElementById('puntosPrimerGanador').value; // Obtener valor seleccionado de la prueba
    const puntos2 = document.getElementById('puntosSegundoGanador').value; // Obtener valor seleccionado de la prueba
    const puntos3 = document.getElementById('puntosTercerGanador').value; // Obtener valor seleccionado de la prueba

    if (!isValidCedula(cedula)) {
        showModal('Cédula no válida.');
        return;
    }

    const nuevoGanador = {
        id: listaIncripciones.length + 1,
        cedula: cedula,
        evento: evento,
        categoria: categoria,
        pruebas: pruebas,
        puntos1: puntos1,
        puntos2: puntos2,
        puntos3: puntos3
    };

    listaGanador.push(nuevoGanador);
    actualizarTablaGanadores();

    // Limpiar formulario
    document.getElementById('formularioGanadores').reset();
}

function actualizarTablaGanadores() {
    const tablaGanadores = document.getElementById('tablaGanadoresBody');
    tablaGanadores.innerHTML = '';
    listaGanador.forEach(function(ganador, index) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${ganador.cedula}</td>
            <td>${ganador.evento}</td>
            <td>${ganador.categoria}</td>
            <td>${ganador.pruebas}</td>
            <td>${ganador.puntos1}</td>
            <td>${ganador.puntos2}</td>
            <td>${ganador.puntos3}</td>
            <td>
                <a href="#editGanador" class="edit" style="color: black">
                    <i class="bi bi-pencil-square bi-4x"></i>
                </a>
                <a href="#deleteGanador" class="delete" style="color: black">
                    <i class="bi bi-file-earmark-x bi-4x"></i>
                </a>
            </td>
        `;
        tablaGanadores.appendChild(fila);
    });
}

// Función para cargar datos iniciales de ganadores
function cargarDatosInicialesGanadores() {
    fetch('/data/data_ganadores.json')
        .then(response => response.json())
        .then(data => {
            listaGanador = data.ganador; // Asigna los ganadores al arreglo global listaGanadores
            actualizarTablaGanadores(); // Llama a la función para actualizar la tabla con los datos cargados
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

// Event listener para el formulario
document.getElementById('formularioGanadores').addEventListener('submit', agregarGanador);


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