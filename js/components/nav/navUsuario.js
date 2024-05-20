//ALt + 96

import {
  cargarEventos,
  cargarNoticias,
  cargarTienda,
} from "../../pages/paginaUsuario.js";
import { crearInicio } from "../inicio/componentesInicio.js";
//import { crearRankings } from "../rankings/componentesRankings.js";

export function crearNavUsuario() {
  //var nav = document.getElementById("nav");
  var respuestaHTML = "";
  respuestaHTML = `
  <div class="container-fluid  px-0 ">
    <nav class="navbar navbar-expand-sm first-navbar">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto mb-lg-0 py-0">
                  <li class="nav-item">
                      <a class="link-light" href="#">Inicio Sesion/Registrarse</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link py-0" href="#"><i class="bi bi-instagram fs-5"></i></a>
                    </li>
                  <li class="nav-item">
                    <a class="nav-link py-0" href="#"><i class="bi bi-facebook fs-5"></i></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link py-0" href="#"><i class="bi bi-whatsapp fs-5"></i></a>
                  </li>
                </ul>
            </div>
        </div>         
    </nav>
    <nav class="navbar navbar-expand-lg  bg-light  border-bottom border-4  border-opacity-50">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>    
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto py-0 ">
            <li>
              <a class="navbar-brand fs-2" href="#" id="linkInicio">
                <img src="img/logoTransparente.png" alt="Logo" width="80" height="80" class="d-inline-block align-text">
                  <p class="d-inline-block red-text">ASOCIACION DE PATINAJE</p>
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item fs-4">
              <a class="nav-link active py-0" href="#" id="linkNoticias">Noticias</a>
            </li>
            <li class="nav-item  fs-4">
              <a class="nav-link active py-0" href="#" id="linkEventos">Eventos</a>
            </li>
            <li class="nav-item  fs-4">
              <a class="nav-link active py-0" href="#" id="linkRankings">Rankings</a>
            </li>
            <li class="nav-item  fs-4">
              <a class="nav-link active py-0" href="#" id="linkLineamientos">Lineamientos</a>
            </li>
            <li class="nav-item  fs-4">
              <a class="nav-link active py-0" href="#" id="linkTienda">Tienda</a>
            </li>
            <li class="nav-item mx-2 ">
              <a class="nav-link py-0" href="#" id="linkCarrito"><i class="bi bi-cart fs-4"></i>
            </li>
          </ul>

        </div>
    </nav>
</div>`;
  document.getElementById("nav").innerHTML = respuestaHTML;

  document
    .getElementById("linkInicio")
    .addEventListener("click", function (event) {
      event.preventDefault();
      crearInicio();
    });

  document
    .getElementById("linkTienda")
    .addEventListener("click", function (event) {
      event.preventDefault();
      cargarTienda();
    });

  document
    .getElementById("linkNoticias")
    .addEventListener("click", function (event) {
      event.preventDefault();
      cargarNoticias();
    });

  document
    .getElementById("linkEventos")
    .addEventListener("click", function (event) {
      event.preventDefault();
      cargarEventos();
    });

  document
    .getElementById("linkRankings")
    .addEventListener("click", function (event) {
      event.preventDefault();
      //crearRankings();
    });
}