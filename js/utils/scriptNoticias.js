const itemsPerPage = 3;
let currentPage = 1;
let noticias = [];
let noticiasFiltradas = [];

function importarNoticias(){
  fetch("data/data_noticias.json")
  .then((response) => response.json())
  .then((data) => {
    noticias = data;
    noticiasFiltradas = [...noticias];
    
    //sppWizard.init(optionsAssistant);
  })
  .catch((error) => console.error("Error al cargar las imágenes:", error));
}


function renderGallery(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const items = noticiasFiltradas.slice(start, end);

  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  items.forEach((item) => {
    const col = document.createElement("div");
    col.classList.add("col-md-10", "mb-4");
    col.innerHTML = `
        <div class="card">
          <img src="${item.src}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      `;
    gallery.appendChild(col);
  });
}

function renderPagination() {
  const totalPages = Math.ceil(noticiasFiltradas.length / itemsPerPage);
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

export function filtrarNoticias() {
  const search = document.getElementById("busquedaNoticias").value.toLowerCase();
  noticiasFiltradas = noticias.filter((noticia) =>
    noticia.title.toLowerCase().includes(search)
  );
  currentPage = 1;
  updateGalleryAndPagination();
}


export function updateGalleryAndPagination() {
  renderGallery(currentPage);
  renderPagination();
}

export function cargarNoticiasCarousel() {
  var noticiasCarousel = "" ;

  console.log(noticias);
  for(let i = 0; i <3; i++) {
    noticiasCarousel += `     
    <div class="carousel-item">
          <img src="${noticias[i].src}" class="d-block w-100" alt="${noticias[i].title}">
          <div class="carousel-caption d-none d-md-block text-black">
              <h5>${noticias[i].title}</h5>
              <p>${noticias[i].description}</p>
          </div>
      </div>
      `;
  }
  noticias.forEach((noticia) => {
      
 
  });
  document.getElementById("noticiasCarousel").innerHTML = noticiasCarousel;
}
/*
async function loadJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}
*/

importarNoticias();