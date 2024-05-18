import { crearEventos } from '../components/eventos/componentesEventos.js';
import { crearFootterUsuario } from '../components/footer/footerUsuario.js';
import { crearNavUsuario } from '../components/nav/navUsuario.js';
import { crearNoticias } from '../components/noticias/componentesNoticias.js';
import { crearTienda } from '../components/tienda/componentesTienda.js';


export function cargarPagina(){
    crearNavUsuario();
    
    crearFootterUsuario();
}


export function cargarInicio(){
    crearInicio();
}


export function cargarTienda() {  
    crearTienda();
}

export function cargarEventos(){
    crearEventos();
}

export function cargarNoticias(){
    crearNoticias();

}

export function cargarRankings(){

}



