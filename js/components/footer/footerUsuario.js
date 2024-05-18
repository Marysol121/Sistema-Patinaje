export function crearFootterUsuario() {
  var respuestaHTML = "";
  respuestaHTML += `
  <footer class="footer row row-cols-1 row-cols-sm-2 row-cols-md-5 py-3 my-2 border-top text-light">
    <div class="col my-auto">
        <a class="navbar-brand fs-2" href="#">
            <img src="img/logo.png" alt="Logo" width="200" height="200">

        </a>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
        <h5 class="fs-3">Contactos</h5>
        <ul class="nav flex-column text-center">
            <p class="text-center mb-0">Telefono:</p>
            <p class="text-center mb-0">+593 000 000 000</p>
            <p class="text-center mb-0">Email:</p>
            <p class="text-center mb-0">ejempo@gmail.com</p>
            <p class="text-center mb-0">Dirección:</p>
            <p class="text-center mb-0">Calle 1 y Calle 2</p>
            <p class="text-center mb-0">Cuenca - Ecuador</p>
            <ul class="navbar-nav mx-auto mt-1 mb-2 mb-lg-0">
                <li class="nav-item">
                    <i class="bi bi-instagram fs-5 px-1"></i>
                    <i class="bi bi-facebook fs-5 px-1"></i>
                    <i class="bi bi-whatsapp fs-5 px-1"></i>
                </li>

            </ul>
        </ul>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
        <h5 class="fs-3">Encuentranos</h5>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.7297960760498!2d-79.02338412553983!3d-2.8940308970824424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd22a7ddde6ff3%3A0xc8680dd1b8adccd7!2sFederaci%C3%B3n%20Deportiva%20del%20Azuay!5e0!3m2!1ses-419!2sec!4v1715555650131!5m2!1ses-419!2sec" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</footer>`
    document.getElementById("footer").innerHTML=respuestaHTML;
}
