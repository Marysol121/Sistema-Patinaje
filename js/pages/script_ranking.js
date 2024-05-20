document.addEventListener('DOMContentLoaded', function() {
    const tipoRankingSelect = document.getElementById('tipoRankingSelectPrincipal');
    const contenedorRankingDeportistas = document.getElementById('contenedorRankingDeportistas');
    const contenedorRankingClubes = document.getElementById('contenedorRankingClubes');

    tipoRankingSelect.addEventListener('change', function() {
        const tipoSeleccionado = tipoRankingSelect.value;
        if (tipoSeleccionado === 'deportistas') {
            contenedorRankingDeportistas.style.display = 'block';
            contenedorRankingClubes.style.display = 'none';
            cargarDatosInicialesCategorias('categoriaRankingInputDeportistas');
            const formularioDeportista = document.getElementById('formularioRankingDeportistas');
            formularioDeportista.addEventListener('submit', agregarDeportista);
            cargarDatosRankingDep();
        } else if (tipoSeleccionado === 'clubes') {
            contenedorRankingDeportistas.style.display = 'none';
            contenedorRankingClubes.style.display = 'block';
            cargarDatosInicialesCategorias('categoriaRankingInputClubes');
            const formularioClubs = document.getElementById('formularioRankingClubes');
            formularioClubs.addEventListener('submit', agregarClubs);
            cargarDatosRankingClubs();
        } else {
            contenedorRankingDeportistas.style.display = 'none';
            contenedorRankingClubes.style.display = 'none';
        }
    });
});

//Cargar Datos iniciales de Categorias
function cargarDatosInicialesCategorias(nombreSelec) {
    fetch('/data/data_categorias.json')
        .then(response => response.json())
        .then(data => {
            const listaCategorias = data.dataCategorias;
            const selectCategoria = document.getElementById(nombreSelec);
            
            selectCategoria.innerHTML = '<option value="" disabled selected>Seleccione una categoría</option>';
            
            listaCategorias.forEach(categoria => {
                const option = document.createElement('option');
                option.value = categoria.nombre;
                option.textContent = categoria.nombre;
                selectCategoria.appendChild(option);
            });
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

//Agregar el ranking de los deportistas
let listaRankingDep = [];

function agregarDeportista(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombreRankingInputDeportistas').value;
    const descripcion = document.getElementById('descripcionRankingInputDeportistas').value;
    const categoria = document.getElementById('categoriaRankingInputDeportistas').value;
    const anio = document.getElementById('añoRankingInputDeportistas').value;
    const fecha = document.getElementById('fechaInicioRankingInputDeportistas').value;

    if (nombre === '' || descripcion === '' || anio === '') {
        showModal('Por favor, complete todos los campos.');
        return;
    }

    if (!isValidDate(fecha)) {
        showModal('Fecha no válida. Formato esperado: yyyy-mm-dd');
        return;
    }

    const nuevoRankingDeportista = {
        id: listaRankingDep.length + 1,
        nombre: nombre,
        descripcion: descripcion,
        categoria: categoria,
        anio: anio,
        fecha: fecha
    };

    listaRankingDep.push(nuevoRankingDeportista);
    actualizarTablaRankingDep();

    document.getElementById('formularioRankingDeportistas').reset();
}

function actualizarTablaRankingDep() {
    const tbodyRankingDeportistas = document.getElementById('tbodyRankingDeportistas');
    tbodyRankingDeportistas.innerHTML = '';
    listaRankingDep.forEach(function(rankDep) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${rankDep.id}</td>
            <td>${rankDep.nombre}</td>
            <td>${rankDep.descripcion}</td>
            <td>${rankDep.categoria}</td>
            <td>${rankDep.anio}</td>
            <td>${rankDep.fecha}</td>
            <td>
                <a href="#editRankDep" class="edit" style="color: black">
                    <i class="bi bi-pencil-square bi-4x"></i>
                </a>
                <a href="#deleteRankDep" class="delete" style="color: black">
                    <i class="bi bi-file-earmark-x bi-4x"></i>
                </a>
            </td>
        `;
        tbodyRankingDeportistas.appendChild(fila);
    });
}

//Agregar Ranking de los clubs
let listaRankingClubs = [];

function agregarClubs(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombreRankingInputClubes').value;
    const descripcion = document.getElementById('descripcionRankingInputClubes').value;
    const categoria = document.getElementById('categoriaRankingInputClubes').value;
    const anio = document.getElementById('añoRankingInputClubes').value;
    const fechaInicio = document.getElementById('fechaInicioRankingInputClubes').value;
    const fechaFin = document.getElementById('fechaFinRankingInputClubes').value;

    if (nombre === '' || descripcion === '' || anio === '') {
        showModal('Por favor, complete todos los campos.');
        return;
    }

    if (!isValidDate(fechaInicio)) {
        showModal('Fecha Inicial no válida. Formato esperado: yyyy-mm-dd');
        return;
    }

    if (!isValidDate(fechaFin)) {
        showModal('Fecha Final no válida. Formato esperado: yyyy-mm-dd');
        return;
    }

    const nuevoRankingClub = {
        id: listaRankingClubs.length + 1,
        nombre: nombre,
        descripcion: descripcion,
        categoria: categoria,
        anio: anio,
        fechaInicio: fechaInicio,
        fechaFin: fechaFin
    };

    listaRankingClubs.push(nuevoRankingClub);
    actualizarTablaRankingClub();
    document.getElementById('formularioRankingClubes').reset();
}

function actualizarTablaRankingClub() {
    const tbodyRankingClub = document.getElementById('tbodyRankingClubs');
    tbodyRankingClub.innerHTML = '';
    listaRankingClubs.forEach(function(rankClub) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${rankClub.id}</td>
            <td>${rankClub.nombre}</td>
            <td>${rankClub.descripcion}</td>
            <td>${rankClub.categoria}</td>
            <td>${rankClub.anio}</td>
            <td>${rankClub.fechaInicio}</td>
            <td>${rankClub.fechaFin}</td>
            <td>
                <a href="#editRankClub" class="edit" style="color: black">
                    <i class="bi bi-pencil-square bi-4x"></i>
                </a>
                <a href="#deleteRankClub" class="delete" style="color: black">
                    <i class="bi bi-file-earmark-x bi-4x"></i>
                </a>
            </td>
        `;
        tbodyRankingClub.appendChild(fila);
    });
}

//Cargar Datos Iniciales

// Función para cargar los datos del JSON en la tabla de clubs
function cargarDatosRankingClubs() {
    fetch('/data/data_rankingC.json')
        .then(response => response.json())
        .then(data => {
            listaRankingClubs = data.rankingClubes;
            actualizarTablaRankingClub();
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

// Función para cargar los datos del JSON en la tabla de los deportistas
function cargarDatosRankingDep() {
    fetch('/data/data_rankingD.json')
        .then(response => response.json())
        .then(data => {
            listaRankingDep = data.rankingDeportistas;
            actualizarTablaRankingDep();
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

//Validaciones

function isValidDate(dateString) {
    const regexDate = /^\d{4}-\d{2}-\d{2}$/;
    return regexDate.test(dateString);
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
