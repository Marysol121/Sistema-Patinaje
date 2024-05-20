import {
  filtrarNoticias,
  updateGalleryAndPagination,
} from "../../utils/scriptNoticias.js";

var respuestaHTML = "";
export function crearNoticias() {
  respuestaHTML = `<h1 id="titulo">Noticias</h1>
    <div class="container container-fluid">
    <div class="row justify-content-center mb-3">
      <div class="col-md-6">
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar por título" aria-label="Buscar" id="busquedaNoticias">
          <button class="btn btn-danger" id="btnBusquedaNoticias" type="submit">Buscar</button>
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
    .getElementById("btnBusquedaNoticias")
    .addEventListener("click", function (event) {
      event.preventDefault();
      filtrarNoticias();
    });

  updateGalleryAndPagination();


}
