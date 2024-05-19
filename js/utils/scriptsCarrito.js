

export function mostrarCarrito() {
    const carrito =  JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedorCarrito = document.getElementById('contenedor-carrito');

    if (!contenedorCarrito) {
        console.error('Error: El contenedor del carrito no existe en el DOM.');
        return;
    }

    contenedorCarrito.innerHTML = ""; // Limpiar el contenedor antes de agregar productos

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = "<p>El carrito está vacío</p>";
        return;
    }

    carrito.forEach((producto, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto-carrito');
        productoDiv.innerHTML = `
            <div class="producto-info">
                <h3>${producto.nombre}</h3>
                <span>Precio: $${producto.precio}</span>
            </div>
            <button class="eliminar-producto" data-index="${index}">&times;</button>
        `;
        contenedorCarrito.appendChild(productoDiv);
    });

    // Mostrar el total del carrito
    const totalCarrito = carrito.reduce((total, producto) => total + producto.precio, 0).toFixed(2);
    const totalDiv = document.createElement('div');
    totalDiv.classList.add('total-carrito');
    totalDiv.innerHTML = `<h3 class="labelTotal">Total: $${totalCarrito}</h3>`;
    contenedorCarrito.appendChild(totalDiv);

    // Asignar evento a los botones de eliminación
    const botonesEliminar = document.querySelectorAll('.eliminar-producto');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', function() {
            const index = boton.getAttribute('data-index');
            eliminarProductoDelCarrito(index);
            // Actualizar el número de productos en el carrito
            actualizarNumeroCarrito();
        });
    });

    
}

function eliminarProductoDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito(); // Actualizar la vista del carrito
}
function actualizarNumeroCarrito() {
    const carrito =  JSON.parse(localStorage.getItem('carrito')) || [];
    const numeroCarrito = carrito.length;
    localStorage.setItem('numeroCarrito', numeroCarrito); // Guardar el número de productos en localStorage
}