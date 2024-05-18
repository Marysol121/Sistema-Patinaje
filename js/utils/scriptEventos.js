
    const eventos = [
      { src: 'img/imagenAdminNav.jpg', title: 'Título de la Imagen 1', description: 'Descripción de la Imagen 1...' },
      { src: 'https://via.placeholder.com/300', title: 'Título de la Imagen 2', description: 'Descripción de la Imagen 2...' },
      { src: 'https://via.placeholder.com/300', title: 'Título de la Imagen 3', description: 'Descripción de la Imagen 3...' },
      { src: 'https://via.placeholder.com/300', title: 'Título de la Imagen 4', description: 'Descripción de la Imagen 4...' },
      { src: 'https://via.placeholder.com/300', title: 'Título de la Imagen 5', description: 'Descripción de la Imagen 5...' },
      { src: 'https://via.placeholder.com/300', title: 'Título de la Imagen 6', description: 'Descripción de la Imagen 6...' },
      // Añadir más imágenes según sea necesario
    ];

    const itemsPerPage = 3;
    let currentPage = 1;

    function renderGallery(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const items = eventos.slice(start, end);

      const gallery = document.getElementById("gallery");
      gallery.innerHTML = "";
      items.forEach(item => {
        const col = document.createElement('div');
        col.classList.add('col-md-10', 'mb-4');
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
      const totalPages = Math.ceil(eventos.length / itemsPerPage);
      const pagination = document.getElementById('pagination');
      pagination.innerHTML = '';

      const prevPageItem = document.createElement('li');
      prevPageItem.classList.add('page-item');
      if (currentPage === 1) {
        prevPageItem.classList.add('disabled');
      }
      prevPageItem.innerHTML = `
        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Anterior</a>
      `;
      prevPageItem.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage > 1) {
          currentPage--;
          updateGalleryAndPagination();
        }
      });
      pagination.appendChild(prevPageItem);

      for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.classList.add('page-item');
        if (i === currentPage) {
          pageItem.classList.add('active');
        }
        pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        pageItem.addEventListener('click', function(e) {
          e.preventDefault();
          currentPage = i;
          updateGalleryAndPagination();
        });
        pagination.appendChild(pageItem);
      }

      const nextPageItem = document.createElement('li');
      nextPageItem.classList.add('page-item');
      if (currentPage === totalPages) {
        nextPageItem.classList.add('disabled');
      }
      nextPageItem.innerHTML = `
        <a class="page-link" href="#">Siguiente</a>
      `;
      nextPageItem.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage < totalPages) {
          currentPage++;
          updateGalleryAndPagination();
        }
      });
      pagination.appendChild(nextPageItem);
    }

    export function updateGalleryAndPagination() {
      renderGallery(currentPage);
      renderPagination();
    }

  

