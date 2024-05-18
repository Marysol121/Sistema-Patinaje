import { crearFootterUsuario } from '../components/footer/footerUsuario.js';
import { crearNavUsuario } from '../components/nav/navUsuario.js';


export function cargarPagina(){
    crearNavUsuario();
    
    crearFootterUsuario();
}

