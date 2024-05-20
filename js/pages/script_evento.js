document.addEventListener('DOMContentLoaded', function() {
    cargarDatosInicialesEventos();
    cargarDatosInicialesCategorias();
    cargarDatosInicialesPruebas();

    const formularioEvento = document.getElementById('formularioEvento');
    formularioEvento.addEventListener('submit', agregarEventos);
});

let listaEventos = [];

function cargarDatosInicialesCategorias() {
    fetch('/data/data_categorias.json')
        .then(response => response.json())
        .then(data => {
            const listaCategorias = data.dataCategorias;
            const selectCategoria = document.getElementById('categoriaSelect');
            
            selectCategoria.innerHTML = '<option value="" disabled selected>Seleccione una categoría</option>';
            
            listaCategorias.forEach(categoria => {
                const option = document.createElement('option');
                option.value = categoria.nombre; // Usar nombre de la categoría como valor
                option.textContent = categoria.nombre;
                selectCategoria.appendChild(option);
            });
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

function cargarDatosInicialesPruebas() {
    fetch('/data/data_pruebas.json')
        .then(response => response.json())
        .then(data => {
            const listaPruebas = data.dataPruebas;
            const selectPrueba = document.getElementById('pruebaSelect');
            
            selectPrueba.innerHTML = '<option value="" disabled selected>Seleccione una prueba</option>';
            
            listaPruebas.forEach(prueba => {
                const option = document.createElement('option');
                option.value = prueba.nombre; // Usar nombre de la prueba como valor
                option.textContent = prueba.nombre;
                selectPrueba.appendChild(option);
            });
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

function cargarDatosInicialesEventos() {
    fetch('/data/data_eventos.json')
        .then(response => response.json())
        .then(data => {
            listaEventos = data.dataEventos;
            actualizarTablaEvento();
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

function agregarEventos(event) {
    event.preventDefault();
    const foto = document.getElementById('fotoEventoInput').files[0];
    const nombre = document.getElementById('nombreEventoInput').value;
    const descripcion = document.getElementById('descripcionEventoInput').value;
    const fecha = document.getElementById('fechaEventoInput').value;
    const numeroParticipantes = document.getElementById('numParticipantesInput').value;
    const categoria = document.getElementById('categoriaSelect').value;
    const prueba = document.getElementById('pruebaSelect').value;
    const nombreOrganizador = document.getElementById('nombreOrganizadorInput').value;
    const apellidosOrganizador = document.getElementById('apellidoOrganizadorInput').value;
    const cedulaOrganizador = document.getElementById('cedulaOrganizadorInput').value;

    if (nombre === '' || descripcion === '') {
        showModal('Por favor, complete todos los campos.');
        return;
    }
    if(!isValidCedula(cedulaOrganizador)){
        showModal('Cédula no válida.');
        return;
    }
    if(!isValidDate(fecha)){
        showModal('Fecha no válida. Formato esperado: yyyy-mm-dd');
        return;
    }
    if(!isValidEdad(numeroParticipantes)){
        showModal('Número de participantes no válido.');
        return;
    }

    const nuevoEvento = {
        foto: URL.createObjectURL(foto),
        nombre: nombre,
        fecha: fecha,
        descripcion: descripcion,
        numeroParticipantes: numeroParticipantes,
        categoria: categoria,
        prueba: prueba,
        cedulaOrganizador: cedulaOrganizador,
        nombreOrganizador: nombreOrganizador,
        apellidosOrganizador: apellidosOrganizador
    };

    listaEventos.push(nuevoEvento);
    actualizarTablaEvento();
    document.getElementById('formularioEvento').reset();
}

function actualizarTablaEvento() {
    const tablaEvento = document.getElementById('tabla-evento').querySelector('tbody');
    tablaEvento.innerHTML = '';
    listaEventos.forEach(function(evento, index) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="${evento.foto}" alt="Foto del evento" style="width: 50px; height: auto;"></td>
            <td>${evento.nombre}</td>
            <td>${evento.fecha}</td>
            <td>${evento.descripcion}</td>
            <td>${evento.numeroParticipantes}</td>
            <td>${evento.categoria}</td>
            <td>${evento.prueba}</td>
            <td>${evento.cedulaOrganizador}</td>
            <td>${evento.nombreOrganizador}</td>
            <td>${evento.apellidosOrganizador}</td>
            <td>
                <a href="#editEvento" class="edit" style="color: black">
                    <i class="bi bi-pencil-square bi-4x"></i>
                </a>
                <a href="#deleteEvento" class="delete" style="color: black">
                    <i class="bi bi-file-earmark-x bi-4x"></i>
                </a>
            </td>
        `;
        tablaEvento.appendChild(fila);
    });
}

function showModal(message) {
    alert(message); // Reemplaza esto con tu modal
}

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

function isValidDate(dateString) {
    const regexDate = /^\d{4}-\d{2}-\d{2}$/;
    return regexDate.test(dateString);
}

function isValidEdad(edadString) {
    const regexEdad = /^\d+$/;
    return regexEdad.test(edadString);
}