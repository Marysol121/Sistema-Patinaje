document.addEventListener('DOMContentLoaded', function() {
    const hamBurger = document.querySelector(".toggle-btn");
    const formularioPrueba = document.querySelector('#contenedorPrueba');
    const formularioDeportista = document.querySelector('#contenedorDeportistas');
    const formularioCategoria = document.querySelector('#contenedorCategoria');
    const formularioClub = document.querySelector('#contenedorClubes');
    const formularioRanking = document.querySelector('#contenedorRanking');
    const formularioEvento = document.querySelector('#contenedorEvento');
    const formularioEtapa = document.querySelector('#contenedorEtapa');
    const formularioRankingDeportistas = document.querySelector('#contenedorRankingDeportistas');
    const formularioRankingClubes = document.querySelector('#contenedorRankingClubes');
    const formularioTienda = document.querySelector('#contenedorTienda');
    const formularioInscripciones = document.querySelector('#contenedorInscripciones');
    const formularioGanadores = document.querySelector('#contenedorGanadores');
    
    hamBurger.addEventListener("click", function () {
        document.querySelector("#sidebar").classList.toggle("expand");
    });

    function mostrarFormulario(formulario) {
        console.log("Mostrando formulario:", formulario);
        formularioPrueba.style.display = 'none';
        formularioDeportista.style.display = 'none';
        formularioCategoria.style.display = 'none';
        formularioClub.style.display= 'none';
        formularioRanking.style.display= 'none';
        formularioEvento.style.display= 'none';
        formularioEtapa.style.display = 'none';
        formularioRankingDeportistas.style.display = 'none';
        formularioRankingClubes.style.display = 'none';
        formularioTienda.style.display = 'none';
        formularioInscripciones.style.display = 'none';
        formularioGanadores.style.display = 'none';

        formulario.style.display = 'block';
        console.log("Formulario mostrado:", formulario);
    }

    document.querySelector('.sidebar-item a[href="#prueba"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioPrueba);
    });

    document.querySelector('.sidebar-item a[href="#deportista"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioDeportista);
    });

    document.querySelector('.sidebar-item a[href="#categoria"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioCategoria);
    });

    document.querySelector('.sidebar-item a[href="#etapas"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioEtapa);
    });

    document.querySelector('.sidebar-item a[href="#eventos"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioEvento);
    });

    document.querySelector('.sidebar-item a[href="#club"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioClub);
    });

    document.querySelector('.sidebar-item a[href="#tienda"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioTienda);
    });

    document.querySelector('.sidebar-item a[href="#inscripciones"]').addEventListener('click', function(event) {
        event.preventDefault();
        console.log("Clic en inscripciones");
        mostrarFormulario(formularioInscripciones);
    });

    document.querySelector('.sidebar-item a[href="#ganadores"]').addEventListener('click', function(event) {
        event.preventDefault();
        console.log("Clic en Ganadores");
        mostrarFormulario(formularioGanadores);
    });

    document.querySelector('.sidebar-item a[href="#ranking"]').addEventListener('click', function(event) {
        event.preventDefault();
        mostrarFormulario(formularioRanking);
    });

    const cancelarFormularioRankingBtn = formularioClub.querySelector("#cancelarFormulario");
    cancelarFormularioRankingBtn.addEventListener("click", function(event) {
        event.preventDefault();
        formularioRanking.reset();
    });

    formularioRanking.addEventListener("submit", function(event) {
        event.preventDefault();
        formularioClub.reset();
    });
});
