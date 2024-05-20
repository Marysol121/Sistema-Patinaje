document.addEventListener('DOMContentLoaded', function() {
    cargarDatosInicialesTienda();
    const formularioTienda = document.getElementById('formularioTienda');
    formularioTienda.addEventListener('submit', agregarProducto);
    const limpiar = document.getElementById('limpiar');
    limpiar.addEventListener('click', limpiarFormulario);
});

let productos = [];
//me quede aqui**********************************************************
function cargarDatosInicialesTienda() {
    console.log("1");
    fetch('../productos.json')
        .then(response => response.json())
        .then(data => {
            // Corrige la función de mapeo de los productos
            productos = data.dataProductos.map(producto => ({
                ...producto,
            }));
            console.log(productos); // Este log se ejecutará después de que los datos hayan sido cargados
            actualizarTablaProductos(); // Mostrar los primeros 9 productos
        })
        .catch(error => console.error('Error al cargar los productos:', error));
    console.log("2");

}

function agregarProducto(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombreProductoInput').value;
    const descripcion = document.getElementById('descripcionInput').value;
    const precio = document.getElementById('precioInput').value;
    const stock = document.getElementById('stockInput').value;
    const imagen = document.getElementById('linkInput').value;
    const etiquetas = document.getElementById('etiquetasInput').value;

    /*if (nombre === '' || descripcion === '' || precio === '' || stock === '' || imagen === '' || etiquetas === '') {
        showModal('Por favor, complete todos los campos.');
        return;
    }*/

    const nuevoProducto = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        stock: stock,
        imagen: imagen,
        etiquetas:etiquetas
    };

    productos.push(nuevoProducto);
    actualizarTablaProductos();
    limpiarFormulario();
}

function actualizarTablaProductos() {
    const tablaTiendaBody = document.getElementById('tablaTiendaBody');
    tablaTiendaBody.innerHTML = '';
    productos.forEach(function(producto, index) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precio}</td>
            <td>${producto.stock}</td>
            <td>${producto.imagen}</td>
            <td>${producto.etiquetas}</td>
            <td>
                <a href="#editDeportista" class="edit" style="color: black">
                    <i class="bi bi-pencil-square bi-4x"></i>
                </a>
                <a href="#deleteDeportista" class="delete" style="color: black">
                    <i class="bi bi-file-earmark-x bi-4x"></i>
                </a>
            </td>
        `;
        tablaTiendaBody.appendChild(fila);
    });
}



function showModal(message) {
    const modal = document.getElementById('myModal'); // Asegúrate de que tienes un modal con este ID
    const modalMessage = document.getElementById('modalMessage'); // Y un elemento para el mensaje
    modalMessage.textContent = message;
    modal.style.display = 'block';

    const span = document.getElementsByClassName('close')[0];
    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}
