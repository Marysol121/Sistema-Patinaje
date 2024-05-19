// Archivo scriptsTienda.js

let productos = [];


// Función para agregar un producto al carrito
export function agregarAlCarrito(producto) {
    let carrito =  JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarNumeroCarrito();
}



// Función para actualizar el número de productos en el carrito
export function actualizarNumeroCarrito() {
    let carrito =  JSON.parse(localStorage.getItem('carrito')) || [];
    const numeroCarrito = document.getElementById('numero-carrito');
    if (numeroCarrito) {
        numeroCarrito.textContent = carrito.length;
    }
    localStorage.setItem('numeroCarrito', carrito.length); // Guardar el número de productos en localStorage
}

// Función para asignar eventos a los botones "Agregar al carrito"
function asignarEventos() {
    const botonesAgregar = document.querySelectorAll('.botonAgregar');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', function() {
            const productoDiv = boton.closest('.producto');
            const nombre = productoDiv.querySelector('h3').textContent;
            const precio = parseFloat(productoDiv.querySelector('span').textContent.replace('Precio: $', ''));
            const producto = { nombre, precio };
            agregarAlCarrito(producto);
        });
    });
}

document.addEventListener('DOMContentLoaded', cargarProductos);

// Función para cargar los productos desde el archivo JSON
export function cargarProductos() {
    fetch('productos.json')
        .then(response => response.json())
        .then(data => {
            productos = data;
            mostrarProductos(productos.slice(0, 9)); // Mostrar los primeros 9 productos
        })
        .catch(error => console.error('Error al cargar los productos:', error));
}

// Función para truncar la descripción del producto y agregar puntos suspensivos
function truncarDescripcion(texto, longitudMaxima) {
    if (texto.length > longitudMaxima) {
        return texto.slice(0, longitudMaxima) + '...';
    }
    return texto;
}

// Función para mostrar los productos en la página HTML
function mostrarProductos(productos) {
    const contenedorProductos = document.getElementById('productos');
    contenedorProductos.innerHTML = ""; // Limpiar el contenedor antes de agregar productos

    productos.forEach(producto => {
        const descripcion = truncarDescripcion(producto.descripcion, 150);

        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100px; height: 100px;">
            <h3>${producto.nombre}</h3>
            <p>${descripcion}</p>
            <stock>Stock disponible: ${producto.stock}</stock>
            <span>Precio: $${producto.precio}</span>
            <button class="botonAgregar">Agregar al carrito</button>
        `;
        contenedorProductos.appendChild(productoDiv);
    });

    // Asignar eventos a los botones "Agregar al carrito" después de que los productos hayan sido añadidos al DOM
    asignarEventos();
}

// Función para limpiar los productos actuales
function limpiarProductos() {
    const contenedorProductos = document.getElementById('productos');
    if (contenedorProductos) {
        contenedorProductos.innerHTML = '';
    }
}

// Función para filtrar los productos por etiqueta
export function filtrarProductos(etiqueta) {
    limpiarProductos();

    const productosFiltrados = productos.filter(producto => producto.etiquetas.includes(etiqueta));
    mostrarProductos(productosFiltrados);
}



/*
// Llamar a la función cargarProductos cuando la página se cargue completamente
document.addEventListener('DOMContentLoaded', () => {

    cargarProductos(); // Cargar los productos al cargar la página

    // Agregar eventos a las subcategorías
    const subcategorias = document.querySelectorAll('.subcategoria');
    subcategorias.forEach(subcategoria => {
        subcategoria.addEventListener('click', (event) => {
            event.preventDefault();
            const etiqueta = subcategoria.getAttribute('data-etiqueta');
            filtrarProductos(etiqueta); // Filtrar productos por etiqueta
        });
    });
});*/
