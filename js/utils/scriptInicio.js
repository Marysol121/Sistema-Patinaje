/*eventos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
console.log(eventos);*/

import { cargarEventos, cargarNoticias } from "../pages/paginaUsuario.js";

let noticiasC = [];
let eventosC = [];
let campeones = [];

function importarNoticiasEventos() {
  const request = new XMLHttpRequest();
  request.open("GET", "data/data_noticias.json", false);
  request.send();
  noticiasC = JSON.parse(request.responseText);
  console.log(noticiasC);

  request.open("GET", "data/data_eventos_usuario.json", false);
  request.send();
  eventosC = JSON.parse(request.responseText).dataEventos;
  console.log(eventosC);

  request.open("GET", "data/data_campeones.json", false);
  request.send();
  campeones = JSON.parse(request.responseText);
  console.log(campeones);

}

export async function cargarNoticiasCarousel() {
  eventosC.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  noticiasC.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  campeones.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  try {
    const carouselIndicators = document.getElementById("carousel-indicators");
    const carouselInner = document.getElementById("carousel-inner");

    // Limpiar contenido actual
    carouselIndicators.innerHTML = "";
    carouselInner.innerHTML = "";

    // Añadir nuevas imágenes al carrusel
    campeones.forEach((image, index) => {
      // Crear indicador
      const indicator = document.createElement("button");
      indicator.type = "button";
      indicator.setAttribute("data-bs-target", "#carouselExampleIndicators");
      indicator.setAttribute("data-bs-slide-to", index);
      if (index === 0) {
        indicator.classList.add("active");
        indicator.setAttribute("aria-current", "true");
      }
      indicator.setAttribute("aria-label", `Slide ${index + 1}`);
      carouselIndicators.appendChild(indicator);

      // Crear imagen del carrusel
      const carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item");
      if (index === 0) {
        carouselItem.classList.add("active");
      }
      carouselItem.innerHTML = `
            <img src="${image.src}" class="d-block w-100" alt="${image.title}">
            <div class="carousel-caption d-none d-md-block ">
              <h5>${image.title}</h5>
              <p>${image.description}</p>
            </div>
          `;
      carouselInner.appendChild(carouselItem);
    });
  } catch (error) {
    console.error("Error al cargar las imágenes:", error);
  }

  var ultimoEventoNoticia = `
  <div class="col-6 border custom-card pt-5">
    <img src="${noticiasC[0].src}" class="img-fluid" alt="...">
    <h5 class="card-title">${noticiasC[0].title}</h5>
    <p class="card-text">${noticiasC[0].description}</p>
    <button type="button" class="btn btn-danger" id="btnMasNoticias">Mas Noticias</button>
  </div>
  <div class="col-6 border custom-card pt-5">
    <img src="${eventosC[0].img}" class="img-fluid" alt="...">
    <h5 class="card-title">${eventosC[0].nombre}</h5>
    <p class="card-text">${eventosC[0].descripcion}</p>
    <button type="button" class="btn btn-danger" id="btnMasEventos">Mas Eventos</button>
  </div>`;
  document.getElementById("ultimoEventoNoticia").innerHTML = ultimoEventoNoticia;



  document
.getElementById("btnMasNoticias")
.addEventListener("click", function (event) {
  event.preventDefault();
  //cargarNoticias();
  cargarNoticias();
});

document
.getElementById("btnMasEventos")
.addEventListener("click", function (event) {
  event.preventDefault();
  //cargarEventos();
  cargarEventos();
});
}



importarNoticiasEventos();
