const itemsPerPage = 3;
let currentPage = 1;
let eventos = [];
let eventosFiltrados = [];

function importarEventos(){
  fetch("data/data_eventos_usuario.json")
  .then((response) => response.json())
  .then((data) => {
    eventos = data.dataEventos;
    eventosFiltrados = [...eventos];
  })
  .catch((error) => console.error("Error al cargar las imágenes:", error));
}


function renderGallery(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const items = eventosFiltrados.slice(start, end);

  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  items.forEach((item) => {
    const col = document.createElement("div");
    col.classList.add("col-md-10", "mb-4");
    col.innerHTML = `
          <div class="card">
            <img src="${item.img}" class="card-img-top" alt="${item.nombre}">
            <div class="card-body">
              <h5 class="card-title">${item.nombre}</h5>
              <p class="card-text">${item.descripcion}</p>
              <p class="card-text">${item.fecha}</p>
            </div>
          </div>
        `;
    gallery.appendChild(col);
  });
}

function renderPagination() {
  const totalPages = Math.ceil(eventosFiltrados.length / itemsPerPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const prevPageItem = document.createElement("li");
  prevPageItem.classList.add("page-item");
  if (currentPage === 1) {
    prevPageItem.classList.add("disabled");
  }
  prevPageItem.innerHTML = `
        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Anterior</a>
      `;
  prevPageItem.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      updateGalleryAndPagination();
    }
  });
  pagination.appendChild(prevPageItem);

  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement("li");
    pageItem.classList.add("page-item");
    if (i === currentPage) {
      pageItem.classList.add("active");
    }
    pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    pageItem.addEventListener("click", function (e) {
      e.preventDefault();
      currentPage = i;
      updateGalleryAndPagination();
    });
    pagination.appendChild(pageItem);
  }

  const nextPageItem = document.createElement("li");
  nextPageItem.classList.add("page-item");
  if (currentPage === totalPages) {
    nextPageItem.classList.add("disabled");
  }
  nextPageItem.innerHTML = `
        <a class="page-link" href="#">Siguiente</a>
      `;
  nextPageItem.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      updateGalleryAndPagination();
    }
  });
  pagination.appendChild(nextPageItem);
}

export function filtrarEventos() {
  const query = document.getElementById("busquedaEventos").value.toLowerCase();
  eventosFiltrados = eventos.filter((evento) =>
    evento.nombre.toLowerCase().includes(query));
  currentPage = 1;
  updateGalleryAndPagination();
}

export function updateGalleryAndPagination() {
  //importarEventos();
  renderGallery(currentPage);
  renderPagination();
}

importarEventos();
