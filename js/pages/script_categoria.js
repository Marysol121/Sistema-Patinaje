document.addEventListener('DOMContentLoaded', function() {
    cargarDatosInicialesCategorias();
    const formularioCategoria = document.getElementById('formularioCategoria');
    formularioCategoria.addEventListener('submit', agregarCategoria);
});

let listaCategorias = [];

function cargarDatosInicialesCategorias() {
    fetch('/data/data_categorias.json')
        .then(response => response.json())
        .then(data => {
            listaCategorias = data.dataCategorias;
            actualizarTablaCategorias();
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

function agregarCategoria(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombreCategoriaInput').value;
    const descripcion = document.getElementById('descripcionCategoriaInput').value;
    const fecha = document.getElementById('fechaInicioInput').value;
    const edades = document.getElementById('edadInput').value;
    const sexo = document.getElementById('sexoInput').value;


    if (nombre === '' || descripcion === '') {
        showModal('Categoria - Por favor, complete todos los campos.');
        return;
    }

    // if (!isValidDate(fecha)){
    //     showModal('Fecha no válida. Formato esperado: yyyy-mm-dd');
    //     return;
    // }

    // if(!isValidEdad(edades)){
    //     showModal('Edad no válida.')
    //     return;
    // }

    const nuevaCategoria = {

        nombre: nombre,
        descripcion: descripcion,
        fecha: fecha,
        edades: edades,
        sexo: sexo
    };

    listaCategorias.push(nuevaCategoria);
    actualizarTablaCategorias();

    //Limpiar formulario
    document.getElementById('nombreCategoriaInput').value = '';
    document.getElementById('descripcionCategoriaInput').value = '';
    document.getElementById('fechaInicioInput').value = '';
    document.getElementById('edadInput').value = '';
    document.getElementById('sexoInput').value = '';
}

function actualizarTablaCategorias() {
    const tablaCategoria = document.getElementById('tabla-categorias').querySelector('tbody');
    tablaCategoria.innerHTML = '';
    listaCategorias.forEach(function(script_categoria, index) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${script_categoria.nombre}</td>
            <td>${script_categoria.descripcion}</td>
            <td>${script_categoria.fecha}</td>
            <td>${script_categoria.edades}</td>
            <td>${script_categoria.sexo}</td>
            <td>
                <a href="#editCategoria" class="edit" style="color: black">
                    <i class="bi bi-pencil-square bi-4x"></i>
                </a>
                <a href="#deleteCategoria" class="delete" style="color: black">
                    <i class="bi bi-file-earmark-x bi-4x"></i>
                </a>
            </td>
        `;
        tablaCategoria.appendChild(fila);
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



