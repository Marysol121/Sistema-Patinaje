document.addEventListener('DOMContentLoaded', function() {
    const tipoRankingSelect = document.getElementById('tipoRankingSelect');
    const contenedorRankingDeportistas = document.getElementById('contenedorRankingDeportistas');
    const contenedorRankingClubes = document.getElementById('contenedorRankingClubes');
    const formularioRankingDeportistas = document.getElementById('formularioRankingDeportistas');
    const formularioRankingClubes = document.getElementById('formularioRankingClubes');

    tipoRankingSelect.addEventListener('change', function() {
        const tipoSeleccionado = tipoRankingSelect.value;
        if (tipoSeleccionado === 'deportistas') {
            formularioRankingDeportistas.classList.remove('oculto');
            formularioRankingClubes.classList.add('oculto');
            contenedorRankingDeportistas.classList.remove('oculto');
            contenedorRankingClubes.classList.add('oculto');
            cargarDatosInicialesRankingDeportistas();
        } else if (tipoSeleccionado === 'clubes') {
            formularioRankingDeportistas.classList.add('oculto');
            formularioRankingClubes.classList.remove('oculto');
            contenedorRankingDeportistas.classList.add('oculto');
            contenedorRankingClubes.classList.remove('oculto');
            cargarDatosInicialesRankingClubes();
        } else {
            formularioRankingDeportistas.classList.add('oculto');
            formularioRankingClubes.classList.add('oculto');
            contenedorRankingDeportistas.classList.add('oculto');
            contenedorRankingClubes.classList.add('oculto');
        }
    });

    formularioRankingDeportistas.addEventListener('submit', agregarRankingDeportistas);
    formularioRankingClubes.addEventListener('submit', agregarRankingClubes);
});

let listaRankingDeportistas = [];
let listaCategorias = [];
let listaRankingClubes = [];

function cargarDatosInicialesRankingDeportistas() {
    fetch('/data/data_rankingD.json')
        .then(response => response.json())
        .then(data => {
            listaRankingDeportistas = data.rankingDeportistas;
            actualizarTablaRankingDeportistas();
        })
        .catch(error => console.error('Error al cargar los datos del ranking de deportistas:', error));

    fetch('/data/data_categorias.json')
        .then(response => response.json())
        .then(data => {
            listaCategorias = data.dataCategorias;
            actualizarSelectCategorias('categoriaRankingInput');
        })
        .catch(error => console.error('Error al cargar los datos de las categorías:', error));
}

function cargarDatosInicialesRankingClubes() {
    fetch('/data/data_rankingC.json')
        .then(response => response.json())
        .then(data => {
            listaRankingClubes = data.rankingClubes;
            actualizarTablaRankingClubes();
        })
        .catch(error => console.error('Error al cargar los datos del ranking de clubes:', error));

    fetch('/data/data_categorias.json')
        .then(response => response.json())
        .then(data => {
            listaCategorias = data.dataCategorias;
            actualizarSelectCategorias('categoriaRankingInputClub');
        })
        .catch(error => console.error('Error al cargar los datos de las categorías:', error));
}

function actualizarSelectCategorias(selectId) {
    const categoriaSelect = document.getElementById(selectId);
    categoriaSelect.innerHTML = '<option value="" disabled selected>Seleccione la categoría</option>';
    listaCategorias.forEach(categoria => {
        const opcion = document.createElement('option');
        opcion.value = categoria;
        opcion.textContent = categoria;
        categoriaSelect.appendChild(opcion);
    });
}

function actualizarTablaRankingDeportistas() {
    const tablaDeportistasBody = document.getElementById('tablaDeportistasBody');
    tablaDeportistasBody.innerHTML = '';
    listaRankingDeportistas.forEach(function(ranking) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${ranking.id}</td>
            <td>${ranking.nombre}</td>
            <td>${ranking.descripcion}</td>
            <td>${ranking.categoría}</td>
            <td>${ranking.año}</td>
            <td>${ranking.fechaInicio}</td>
            <td>${ranking.fechaFin}</td>
            <td>
                <a href="#editRankingDeportista" class="edit" style="color: black">
                    <i class="bi bi-pencil-square bi-4x"></i>
                </a>
                <a href="#deleteRankingDeportista" class="delete" style="color: black">
                    <i class="bi bi-file-earmark-x bi-4x"></i>
                </a>
            </td>
        `;
        tablaDeportistasBody.appendChild(fila);
    });
}

function actualizarTablaRankingClubes() {
    const tablaClubesBody = document.getElementById('tablaClubesBody');
    tablaClubesBody.innerHTML = '';
    listaRankingClubes.forEach(function(ranking) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${ranking.id}</td>
            <td>${ranking.nombre}</td>
            <td>${ranking.descripcion}</td>
            <td>${ranking.categoría}</td>
            <td>${ranking.año}</td>
            <td>${ranking.fechaInicio}</td>
            <td>${ranking.fechaFin}</td>
            <td>
                <a href="#editRankingClub" class="edit" style="color: black">
                    <i class="bi bi-pencil-square bi-4x"></i>
                </a>
                <a href="#deleteRankingClub" class="delete" style="color: black">
                    <i class="bi bi-file-earmark-x bi-4x"></i>
                </a>
            </td>
        `;
        tablaClubesBody.appendChild(fila);
    });
}

function agregarRankingDeportistas(event) {
    event.preventDefault();
    const nuevoRanking = {
        id: listaRankingDeportistas.length + 1,
        nombre: document.getElementById('nombreRankingInput').value,
        descripcion: document.getElementById('descripcionRankingInput').value,
        categoría: document.getElementById('categoriaRankingInput').value,
        año: document.getElementById('añoRankingInput').value,
        fechaInicio: document.getElementById('fechaInicioRankingInput').value,
        fechaFin: document.getElementById('fechaFinRankingInput').value,
    };
    listaRankingDeportistas.push(nuevoRanking);
    actualizarTablaRankingDeportistas();
    formularioRankingDeportistas.reset();
}

function agregarRankingClubes(event) {
    event.preventDefault();
    const nuevoRanking = {
        id: listaRankingClubes.length + 1,
        nombre: document.getElementById('nombreRankingInputClub').value,
        descripcion: document.getElementById('descripcionRankingInputClub').value,
        categoría: document.getElementById('categoriaRankingInputClub').value,
        año: document.getElementById('añoRankingInputClub').value,
        fechaInicio: document.getElementById('fechaInicioRankingInputClub').value,
        fechaFin: document.getElementById('fechaFinRankingInputClub').value,
    };
    listaRankingClubes.push(nuevoRanking);
    actualizarTablaRankingClubes();
    formularioRankingClubes.reset();
}
