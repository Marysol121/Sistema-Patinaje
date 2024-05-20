import { mostrarCarrito } from "../../utils/scriptsCarrito.js";
import { configurarPayPal } from "../../utils/scriptsCarrito.js";

export function crearCarrito() {
    var respuestaHTML = `
    <h1 id="titulo">CARRITO DE COMPRAS</h1>
    <div id="contenedor-principal">
        <div id="contenedor-carrito"></div>
        <div id="contenedor-formulario">
            <form id="formulario-envio">
                <h2>Información de Envío</h2>
                <label for="nombre">Nombre Completo:</label>
                <input type="text" id="nombre" name="nombre" required>
                
                <label for="direccion">Dirección:</label>
                <input type="text" id="direccion" name="direccion" required>
                
                <label for="ciudad">Ciudad:</label>
                <input type="text" id="ciudad" name="ciudad" required>
                
                <label for="telefono">Teléfono:</label>
                <input type="tel" id="telefono" name="telefono" required>
                
                <label for="correo">Correo Electrónico:</label>
                <input type="email" id="correo" name="correo" required>
                
                <label for="codigo-postal">Código Postal:</label>
                <input type="text" id="codigo-postal" name="codigo-postal" required>    
            </form>

            <h2>Medio de Pago</h2>



            <!-- Contenedor para los botones de PayPal -->
            <div id="paypal-button-container"></div>
        </div>
        <!-- Contenedor para el popup -->
        
    </div>
    
    `;

    document.getElementById("contenedor").innerHTML = respuestaHTML;
    mostrarCarrito()

    

    // Llamada a la función para configurar los botones de PayPal
    configurarPayPal();
    
}
