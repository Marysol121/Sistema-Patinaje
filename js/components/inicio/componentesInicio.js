import { cargarEventos, cargarNoticias } from "../../pages/paginaUsuario.js";
import { cargarNoticiasCarousel } from "../../utils/scriptInicio.js";

var respuestaHTML = "";




export function crearInicio(){

    respuestaHTML = ` 
    <div class="row border container-fluid mx-0">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators" id="carousel-indicators">
            </div>
            <div class="carousel-inner" id="carousel-inner">
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>  
    <div class="container-fluid text-center">
        <div class="row justify-content-around" id="ultimoEventoNoticia" >
    
        </div>
    </div>`
document.getElementById("contenedor").innerHTML = respuestaHTML;


cargarNoticiasCarousel();


}