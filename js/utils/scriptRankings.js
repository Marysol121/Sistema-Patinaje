let deportistas = [];
let clubes = [];

fetch("data/data_deportista_puntos.json")
  .then((response) => response.json())
  .then((data) => {
    deportistas = data;
  })
  .catch((error) => console.error("Error al cargar las imágenes:", error));

fetch("data/data_club_puntos.json")
  .then((response) => response.json())
  .then((data) => {
    clubes = data;
  })
  .catch((error) => console.error("Error al cargar las imágenes:", error));


export function mostrarRankingsDeportistas() {
    var primerosLugaresHTML = document.getElementById("primerosLugares");
    primerosLugaresHTML = `<div class="row justify-content-center mb-4">`;
    console.log(deportistas.datosDeportistas)
    deportistas.datosDeportistas.sort((a, b) => b.puntos - a.puntos)

    for (var i = 0; i < 3; i++) {

        primerosLugaresHTML += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${deportistas.datosDeportistas[i].fotoDeportista}" class="card-img-top" alt="${deportistas.datosDeportistas[i].nombre}">
            <div class="card-body">
              <h5 class="card-title">${deportistas.datosDeportistas[i].nombre}</h5>
              <p class="card-text">${deportistas.datosDeportistas[i].puntos}</p>
            </div>
          </div>
        </div>  
        `;
    }

    primerosLugaresHTML += `</div>`;

    document.getElementById("primerosLugares").innerHTML = primerosLugaresHTML;

    var tablaRankings = document.getElementById('tablaRankings').querySelector('tbody');
    tablaRankings.innerHTML = "";
    //.sort((a, b) => b.puntos - a.puntos);
    deportistas.datosDeportistas.forEach((deportista) => {
        var fila = document.createElement('tr');
        fila.innerHTML = `
        <td>${deportista.cedula}</td>
        <td>${deportista.nombre}</td>
        <td>${deportista.puntos}</td>
    `;
    tablaRankings.appendChild(fila);

    });

    
}

export function mostrarRankingsClubes() {
    
    var primerosLugaresHTML = document.getElementById("primerosLugares");
    primerosLugaresHTML = `<div class="row justify-content-center mb-4">`;
    clubes.datosClubes.sort((a, b) => b.puntos - a.puntos)

    for (var i = 0; i < 3; i++) {

        primerosLugaresHTML += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${clubes.datosClubes[i].foto}" class="card-img-top" alt="${clubes.datosClubes[i].nombre}">
            <div class="card-body">
              <h5 class="card-title">${clubes.datosClubes[i].nombre}</h5>
              <p class="card-text">${clubes.datosClubes[i].puntos}</p>
            </div>
          </div>
        </div>  
        `;
    }

    primerosLugaresHTML += `</div>`;

    document.getElementById("primerosLugares").innerHTML = primerosLugaresHTML;

    var tablaRankings = document.getElementById('tablaRankings').querySelector('tbody');
    tablaRankings.innerHTML = "";
    //.sort((a, b) => b.puntos - a.puntos);
    clubes.datosClubes.forEach((club) => {
        var fila = document.createElement('tr');
        fila.innerHTML = `
        <td>${club.id}</td>
        <td>${club.nombre}</td>
        <td>${club.puntos}</td>
    `;
    tablaRankings.appendChild(fila);

    });

}
