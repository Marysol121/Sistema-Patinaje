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
        } else if (tipoSeleccionado === 'clubes') {
            contenedorRankingDeportistas.style.display = 'none';
            contenedorRankingClubes.style.display = 'block';
            cargarDatosInicialesCategorias('categoriaRankingInputClubes');
        } else {
            contenedorRankingDeportistas.style.display = 'none';
            contenedorRankingClubes.style.display = 'none';
        }
    });
});

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

function isValidDate(dateString) {
    const regexDate = /^\d{4}-\d{2}-\d{2}$/;
    return regexDate.test(dateString);
}
