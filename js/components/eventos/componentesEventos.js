import {
  filtrarEventos,
  updateGalleryAndPagination,
} from "../../utils/scriptEventos.js";

var respuestaHTML = "";
export function crearEventos() {
  respuestaHTML = `<h1 id="titulo">Eventos</h1>
  <div class="container">
    <div class="row justify-content-center mb-3">
      <div class="col-md-6">
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar por título" aria-label="Buscar" id="busquedaEventos">
          <button class="btn btn-danger" id ="btnBusquedaEventos" type="submit">Buscar</button>
        </form>
      </div>
    </div>
      <!-- Galería de imágenes -->
    <div class="row justify-content-center mb-4" id="gallery">
        <!-- Las imágenes se cargarán aquí dinámicamente -->
    </div>

    <!-- Paginación -->
    <nav aria-label="Page navigation example" class="mt-4">
      <ul class="pagination justify-content-center" id="pagination">
        <li class="page-item disabled" id="prevPage">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Anterior</a>
        </li>
        <!-- Los números de página se generarán dinámicamente aquí -->
        <li class="page-item" id="nextPage">
          <a class="page-link" href="#">Siguiente</a>
        </li>
      </ul>
    </nav>
  </div>`;
  document.getElementById("contenedor").innerHTML = respuestaHTML;

  document
    .getElementById("btnBusquedaEventos")
    .addEventListener("click", function (e) {
      e.preventDefault();
      filtrarEventos();
    });
  updateGalleryAndPagination();
}
