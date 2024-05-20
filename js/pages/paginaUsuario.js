import { crearEventos } from '../components/eventos/componentesEventos.js';
import { crearFootterUsuario } from '../components/footer/footerUsuario.js';
import { crearNavUsuario } from '../components/nav/navUsuario.js';
import { crearNoticias } from '../components/noticias/componentesNoticias.js';
import { crearTienda } from '../components/tienda/componentesTienda.js';
import { crearCarrito} from '../components/tienda/componentesCarrito.js';
import { crearInicio } from '../components/inicio/componentesInicio.js';


export function cargarPagina(){
    crearNavUsuario();
    crearInicio();
    crearFootterUsuario();
}



export function cargarTienda() {  
    crearTienda();
}

export function cargarCarrito() {  
    crearCarrito();
}

export function cargarEventos(){
    crearEventos();
}

export function cargarNoticias(){
    crearNoticias();

}




