document.addEventListener('DOMContentLoaded', function() {
    const hamBurger = document.querySelector(".toggle-btn");
    const formularioPrueba = document.querySelector('#contenedorPrueba');
    const formularioDeportista = document.querySelector('#contenedorDeportistas');
<<<<<<< HEAD
    const formularioCategoria = document.querySelector('#contenedorCategoria');
=======
    const formularioClub = document.querySelector('#contenedorClubes');
    const formularioRanking = document.querySelector('#contenedorRanking');

    
>>>>>>> 66abab64bf1aea4b6774710598770b8d603f5ec1
    let listaPruebas = [];
    let listaCategorias = [];

    hamBurger.addEventListener("click", function () {
        document.querySelector("#sidebar").classList.toggle("expand");
    });

    function mostrarFormulario(formulario) {
        // Ocultar todos los formularios
        formularioPrueba.style.display = 'none';
        formularioDeportista.style.display = 'none';
<<<<<<< HEAD
        formularioCategoria.style.display = 'none'
=======
        formularioClub.style.display= 'none';

>>>>>>> 66abab64bf1aea4b6774710598770b8d603f5ec1
        // Mostrar el formulario deseado
        formulario.style.display = 'block';
    }

    function agregarPrueba() {
        const id = document.getElementById('pruebaInput').value;
        const nombre = document.getElementById('nombrePruebaInput').value;
        const descripcion = document.getElementById('descripcionPruebaInput').value;

        const nuevaPrueba = {
            id: id,
            nombre: nombre,
            descripcion: descripcion
        };

        listaPruebas.push(nuevaPrueba);
        actualizarTablaPruebas();
        formularioPrueba.reset();
    }

    function agregarCategoria() {
        const id = document.getElementById('categoriaIDInput').value;
        const nombre = document.getElementById('nombreCategoriaInput').value;
        const descripcion = document.getElementById('descripcionCategoriaInput').value;
        const fecha = document.getElementById('fechaInicioInput').value;
        const edades = document.getElementById('edadInput').value;
        const sexo = document.getElementById('sexoInput').value;

        const nuevaCategoria = {
            id: id,
            nombre: nombre,
            descripcion: descripcion,
            fecha: fecha,
            edades: edades,
            sexo: sexo
        };

        listaCategorias.push(nuevaCategoria);
        actualizarTablaCategorias();
        formularioCategoria.reset();
    }

    function actualizarTablaPruebas() {
        const tablaPruebas = document.getElementById('tabla-pruebas').querySelector('tbody');
        tablaPruebas.innerHTML = '';
        listaPruebas.forEach(function(prueba, index) {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${index + 1}</td>
                <td>${prueba.id}</td>
                <td>${prueba.nombre}</td>
                <td>${prueba.descripcion}</td>
                <td>
                    <a href="#editPrueba" class="edit" style="color: black">
                        <i class="bi bi-pencil-square bi-3x"></i>
                    </a>
                    <a href="#deletePrueba" class="delete" style="color: black">
                        <i class="bi bi-file-earmark-x bi-3x"></i>
                    </a>
                </td>
            `;
            tablaPruebas.appendChild(fila);
        });
    }

    function actualizarTablaCategorias() {
        const tablaCategoria = document.getElementById('tabla-categorias').querySelector('tbody');
        tablaCategoria.innerHTML = '';
        listaCategorias.forEach(function(categoria, index) {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${index + 1}</td>
                <td>${categoria.id}</td>
                <td>${categoria.nombre}</td>
                <td>${categoria.descripcion}</td>
                <td>${categoria.fecha}</td>
                <td>${categoria.edades}</td>
                <td>${categoria.sexo}</td>
                <td>
                    <a href="#editCategoria" class="edit" style="color: black">
                        <i class="bi bi-pencil-square bi-3x"></i>
                    </a>
                    <a href="#deleteCategoria" class="delete" style="color: black">
                        <i class="bi bi-file-earmark-x bi-3x"></i>
                    </a>
                </td>
            `;
            tablaCategoria.appendChild(fila);
        });
    }

    formularioPrueba.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarPrueba();
    });

    formularioCategoria.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarCategoria();
    });

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

    // Manejo del botón cancelar en el formulario de deportistas
    const cancelarFormularioDeportistaBtn = formularioDeportista.querySelector("#cancelarFormulario");
    cancelarFormularioDeportistaBtn.addEventListener("click", function(event) {
        event.preventDefault();
        formularioDeportista.reset();
    });

    // Manejo del envío del formulario de deportistas
    formularioDeportista.addEventListener("submit", function(event) {
        event.preventDefault();
        // Aquí puedes agregar la lógica para guardar los datos del deportista y actualizar la tabla
        formularioDeportista.reset(); // Por ahora, solo reseteamos el formulario
    });



    // Event listener para el enlace de Club

    document.querySelector('.sidebar-item a[href="#club"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioClub);
    });

    // Manejo del botón cancelar en el formulario de deportistas
    const cancelarFormularioClubBtn = formularioClub.querySelector("#cancelarFormulario");
    cancelarFormularioClubBtn.addEventListener("click", function(event) {
        event.preventDefault();
        formularioClub.reset();
    });

    // Manejo del envío del formulario de deportistas
    formularioClub.addEventListener("submit", function(event) {
        event.preventDefault();
        // Aquí puedes agregar la lógica para guardar los datos del deportista y actualizar la tabla
        formularioClub.reset(); // Por ahora, solo reseteamos el formulario
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


});
