import { mostrarCarrito } from "../../utils/scriptsCarrito.js";

export function crearCarrito() {
    var respuestaHTML = `
        <h1 id="titulo">CARRITO DE COMPRAS</h1>
        <div id="contenedor-carrito"></div>
    `;

    document.getElementById("contenedor").innerHTML = respuestaHTML;
    mostrarCarrito()
    
}
