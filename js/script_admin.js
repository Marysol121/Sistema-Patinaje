import { isValidDate, isValidEdad, isValidCedula } from '../js/validaciones.js';

document.addEventListener('DOMContentLoaded', function() {
    const hamBurger = document.querySelector(".toggle-btn");
    const formularioPrueba = document.querySelector('#contenedorPrueba');
    const formularioDeportista = document.querySelector('#contenedorDeportistas');
    const formularioCategoria = document.querySelector('#contenedorCategoria');
    const formularioClub = document.querySelector('#contenedorClubes');
    const formularioRanking = document.querySelector('#contenedorRanking');
    const formularioEvento = document.querySelector('#contenedorEvento');
    const formularioEtapa = document.querySelector('#contenedorEtapa');


    let listaPruebas = [];
    let listaCategorias = [];
    let listaEtapas = [];
    let listaEventos = [];

    hamBurger.addEventListener("click", function () {
        document.querySelector("#sidebar").classList.toggle("expand");
    });

    function mostrarFormulario(formulario) {
        // Ocultar todos los formularios
        formularioPrueba.style.display = 'none';
        formularioDeportista.style.display = 'none';
        formularioCategoria.style.display = 'none'
        formularioClub.style.display= 'none';
        formularioRanking.style.display= 'none';
        formularioEvento.style.display= 'none';
        formularioEtapa.style.display = 'none';
        //formularioRankingDeportistas.style.display = 'none';
        //formularioRankingClubes.style.display = 'none';

        // Mostrar el formulario deseado
        formulario.style.display = 'block';
    }

   /* function agregarPrueba() {
        const nombre = document.getElementById('nombrePruebaInput').value;
        const descripcion = document.getElementById('descripcionPruebaInput').value;

        if (nombre === '' || descripcion === '') {
            showModal('Por favor, complete todos los campos.');
            return;
        }

        const nuevaPrueba = {
            nombre: nombre,
            descripcion: descripcion
        };

        listaPruebas.push(nuevaPrueba);
        actualizarTablaPruebas();
        formularioPrueba.reset();
    }*/

    /*function agregarCategoria() {
        const nombre = document.getElementById('nombreCategoriaInput').value;
        const descripcion = document.getElementById('descripcionCategoriaInput').value;
        const fecha = document.getElementById('fechaInicioInput').value;
        const edades = document.getElementById('edadInput').value;
        const sexo = document.getElementById('sexoInput').value;

        if (nombre === '' || descripcion === '') {
            showModal('Categoria - Por favor, complete todos los campos.');
            return;
        }

        if (!isValidDate(fecha)){
            showModal('Fecha no válida. Formato esperado: yyyy-mm-dd');
            return;
        }

        if(!isValidEdad(edades)){
            showModal('Edad no válida.')
            return;
        }

        const nuevaCategoria = {
            nombre: nombre,
            descripcion: descripcion,
            fecha: fecha,
            edades: edades,
            sexo: sexo
        };

        listaCategorias.push(nuevaCategoria);
        actualizarTablaCategorias();
        formularioCategoria.reset();
    }*/

    /*function agregarEtapa() {
        const nombre = document.getElementById('nombreEatapaInput').value;
        const descripcion = document.getElementById('descripcionEtapaInput').value;

        if (nombre === '' || descripcion === '') {
            showModal('Etapa - Por favor, complete todos los campos.');
            return;
        }

        const nuevaEtapa = {
            nombre: nombre,
            descripcion: descripcion
        };

        listaEtapas.push(nuevaEtapa);
        actualizarTablaEtapas();
        formularioEtapa.reset();
    }*/

    //Agregar Evento
   /* function agregarEventos() {
        const nombre = document.getElementById('nombreEventoInput').value;
        const descripcion = document.getElementById('descripcionEventoInput').value;
        const fecha = document.getElementById('fechaEventoInput').value;
        const numeroParticipantes = document.getElementById('numParticipantesInput').value;
        const categoria = document.getElementById('categoriaSelect').value;
        const prueba = document.getElementById('pruebaSelect').value;
        const nombreOrganizador = document.getElementById('nombreOrganizadorInput').value;
        const apellidosOrganizador = document.getElementById('apellidoOrganizadorInput').value;
        const cedulaOrganizador = document.getElementById('cedulaOrganizadorInput').value;

        if (nombre === '' || descripcion === '' || nombreOrganizador === '' || apellidosOrganizador === ''  ) {
            showModal('Evento- Por favor, complete todos los campos.');
            return;
        }

        if (!isValidDate(fecha)){
            showModal('Fecha no válida. Formato esperado: yyyy-mm-dd');
            return;
        }

        if(!isValidEdad(numeroParticipantes)){
            showModal('Número de participantes no válida.')
            return;
        }

        if(!isValidCedula(cedulaOrganizador)){
            showModal('Cedula no válida')
            return;
        }

        const nuevoEvento = {
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
        formularioEvento.reset();
    }

   /* function actualizarTablaPruebas() {
        const tablaPruebas = document.getElementById('tabla-pruebas').querySelector('tbody');
        tablaPruebas.innerHTML = '';
        listaPruebas.forEach(function(prueba, index) {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${index + 1}</td>
                <td>${prueba.nombre}</td>
                <td>${prueba.descripcion}</td>
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
    }*/



    /*function actualizarTablaCategorias() {
        const tablaCategoria = document.getElementById('tabla-categorias').querySelector('tbody');
        tablaCategoria.innerHTML = '';
        listaCategorias.forEach(function(categoria, index) {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${index + 1}</td>
                <td>${categoria.nombre}</td>
                <td>${categoria.descripcion}</td>
                <td>${categoria.fecha}</td>
                <td>${categoria.edades}</td>
                <td>${categoria.sexo}</td>
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
    }*/

    /*function actualizarTablaEtapas() {
        const tablaEtapa = document.getElementById('tabla-etapas').querySelector('tbody');
        tablaEtapa.innerHTML = '';
        listaEtapas.forEach(function(etapa, index) {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${index + 1}</td>
                <td>${etapa.nombre}</td>
                <td>${etapa.descripcion}</td>
                <td>
                    <a href="#editEtapa" class="edit" style="color: black">
                        <i class="bi bi-pencil-square bi-4x"></i>
                    </a>
                    <a href="#deleteEtapa" class="delete" style="color: black">
                        <i class="bi bi-file-earmark-x bi-4x"></i>
                    </a>
                </td>
            `;
            tablaEtapa.appendChild(fila);
        });
    }
*/
    /*function actualizarTablaEvento() {
        const tablaEvento = document.getElementById('tabla-evento').querySelector('tbody');
        tablaEvento.innerHTML = '';
        listaEventos.forEach(function(evento, index) {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${index + 1}</td>
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

    


    document.addEventListener('DOMContentLoaded', function() {
        const tipoRankingSelect = document.getElementById('tipoRankingSelect');
        const formularioRankingDeportistas = document.getElementById('formularioRankingDeportistas');
        const formularioRankingClubes = document.getElementById('formularioRankingClubes');
        cargarDatosIniciales

        tipoRankingSelect.addEventListener('change', function() {
            const selectedValue = this.value;
            if (selectedValue === 'deportistas') {
                formularioRankingDeportistas.style.display = 'block';
                formularioRankingClubes.style.display = 'none';
            } else if (selectedValue === 'clubes') {
                formularioRankingDeportistas.style.display = 'none';
                formularioRankingClubes.style.display = 'block';
            }
        });
    });
    

    //Agregar prueba
   /* formularioPrueba.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarPrueba();
    });*/

    //Agregar Categoria
    /*formularioCategoria.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarCategoria();
    });*/

    //Agregar Etapa
    /*formularioEtapa.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarEtapa();
    });*/

    //Agregar Evento
    /*formularioEvento.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarEventos();
    });*/

    // Event listener para el enlace de Pruebas
    document.querySelector('.sidebar-item a[href="#prueba"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioPrueba);
    });


    // Event listener para el enlace de Deportista
    document.querySelector('.sidebar-item a[href="#deportista"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioDeportista);
    });

    // Event listener para el enlace de Categorias
    document.querySelector('.sidebar-item a[href="#categoria"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioCategoria);
    });

    // Event listener para el enlace de etapas
    document.querySelector('.sidebar-item a[href="#etapas"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioEtapa);
    });

    // Event listener para el enlace de eventos
    document.querySelector('.sidebar-item a[href="#eventos"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioEvento);
    });





    // Event listener para el enlace de Club

    document.querySelector('.sidebar-item a[href="#club"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioClub);
    });





    document.querySelector('.sidebar-item a[href="#ranking"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioRanking);

    


    });










    // Manejo del botón cancelar en el formulario de deportistas
    const cancelarFormularioRankingBtn = formularioClub.querySelector("#cancelarFormulario");
    cancelarFormularioRankingBtn.addEventListener("click", function(event) {
        event.preventDefault();
        formularioRanking.reset();
    });

    // Manejo del envío del formulario de deportistas
    formularioRanking.addEventListener("submit", function(event) {
        event.preventDefault();
        // Aquí puedes agregar la lógica para guardar los datos del deportista y actualizar la tabla
        formularioClub.reset(); // Por ahora, solo reseteamos el formulario
    });

    // Funcionalidad del Modal
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('close')[0];

    function showModal(message) {
        const modalMessage = document.getElementById('modalMessage');
        modalMessage.textContent = message;
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

});
