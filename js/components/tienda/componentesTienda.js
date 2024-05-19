import { cargarProductos, filtrarProductos } from "../../utils/scriptsTienda.js";

export function crearTienda() {
    var respuestaHTML = `
        <h1 id="titulo">TIENDA</h1>
        <div id="categorias">
            <div class="submenu">
                <button>HOMBRE</button>
                <div class="submenu-content">
                    <a href="#" class="subcategoria" data-etiqueta="hombreRopaDeportiva">ROPA</a>
                    <a href="#" class="subcategoria" data-etiqueta="hombreCalzado">CALZADO</a>
                    <a href="#" class="subcategoria" data-etiqueta="hombreAccesorios">ACCESORIOS</a>
                </div>
            </div>
            <div class="submenu">
                <button>MUJER</button>
                <div class="submenu-content">
                    <a href="#" class="subcategoria" data-etiqueta="mujerRopaDeportiva">ROPA</a>
                    <a href="#" class="subcategoria" data-etiqueta="mujerCalzado">CALZADO</a>
                    <a href="#" class="subcategoria" data-etiqueta="mujerAccesorios">ACCESORIOS</a>
                </div>
            </div>
            <div class="submenu">
                <button>NIÑO</button>
                <div class="submenu-content">
                    <a href="#" class="subcategoria" data-etiqueta="ninoRopaDeportiva">ROPA</a>
                    <a href="#" class="subcategoria" data-etiqueta="ninoCalzado">CALZADO</a>
                    <a href="#" class="subcategoria" data-etiqueta="ninoAccesorios">ACCESORIOS</a>
                </div>
            </div>
        </div>
        <div id="productos"></div>
        <div id="carrito-icono">
            <a href="carrito.html">
                <img src="../img/carrito.png" >
                <span id="numero-carrito">0</span>
            </a>
        </div>
    `;

    document.getElementById("contenedor").innerHTML = respuestaHTML;

    cargarProductos();

    const subcategorias = document.querySelectorAll('.subcategoria');
    subcategorias.forEach(subcategoria => {
        subcategoria.addEventListener('click', (event) => {
            event.preventDefault();
            const etiqueta = subcategoria.getAttribute('data-etiqueta');
            filtrarProductos(etiqueta);
        });
    });
}
