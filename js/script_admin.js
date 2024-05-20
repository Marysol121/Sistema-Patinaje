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
    const formularioTienda = document.querySelector('#contenedorTienda');
    


    let listaPruebas = [];
    let listaCategorias = [];
    let listaEtapas = [];
    let listaEventos = [];
    let productos = [];

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
<<<<<<< HEAD
        formularioTienda.style.display = 'none';
        //formularioRankingDeportistas.style.display = 'none';
        //formularioRankingClubes.style.display = 'none';
=======
        formularioRankingDeportistas.style.display = 'none';
        formularioRankingClubes.style.display = 'none';
>>>>>>> 6a3fb998a0dd910780bba45a3d7c000e35b887c7

        // Mostrar el formulario deseado
        formulario.style.display = 'block';
    }

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

    // Event listener para el enlace de eventos
    document.querySelector('.sidebar-item a[href="#tienda"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioTienda);
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
