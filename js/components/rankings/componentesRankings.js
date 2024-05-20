import {
  mostrarRankingsClubes,
  mostrarRankingsDeportistas,
} from "../../utils/scriptRankings.js";

var respuestaHTML = "";
export function crearRankings() {
  respuestaHTML = `<h1 id="titulo">Rankings</h1>
  <div class="container ">
    <div class="row justify-content-center mb-3">
      <div class="col-md-6">
        <form class="d-flex justify-content-center mb-3" role="search">
          <button class="btn btn-danger mx-auto px-4" id="btnRankingDeportistas" type="submit">DEPORTISTAS</button>
          <button class="btn btn-danger mx-auto px-5" id="btnRankingClubes" type="submit">CLUBES</button>
        </form>
      </div>
    </div>
    <div class="container mt-5" id="primerosLugares">
      <!-- Galería de imágenes -->
    </div>
    <div class="row justify-content-center mb-3">
    <div class="col-md-8">
        <table class="table mt-3" id="tablaRankings">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Puntos</th>
                </tr>
            </thead>
            <tbody >
                <!-- Aquí se agregarán las filas de la tabla dinámicamente -->
            </tbody>
        </table>
    </div>
  </div>`;
  document.getElementById("contenedor").innerHTML = respuestaHTML;

  // Agregar eventos a los botones
  document
    .getElementById("btnRankingDeportistas")
    .addEventListener("click", (event) => {
      event.preventDefault();
      mostrarRankingsDeportistas();
    });

  document
    .getElementById("btnRankingClubes")
    .addEventListener("click", (event) => {
      event.preventDefault();
      mostrarRankingsClubes();
    });

  mostrarRankingsDeportistas();
}
