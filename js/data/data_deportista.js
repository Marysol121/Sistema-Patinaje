document.addEventListener('DOMContentLoaded', function() {

const datosDeportistas = [
    {
        nombre: "Juan",
        apellidos: "Pérez González",
        cedula: "123456789",
        fechaNacimiento: "1990-05-15",
        pdfCedula: "pdf_cedula_juan.pdf",
        fotoDeportista: "foto_deportista_juan.jpg"
    },
    {
        nombre: "María",
        apellidos: "López Martínez",
        cedula: "987654321",
        fechaNacimiento: "1992-08-25",
        pdfCedula: "pdf_cedula_maria.pdf",
        fotoDeportista: "foto_deportista_maria.jpg"
    },
    {
        nombre: "Carlos",
        apellidos: "Sánchez Rodríguez",
        cedula: "456123789",
        fechaNacimiento: "1988-11-10",
        pdfCedula: "pdf_cedula_carlos.pdf",
        fotoDeportista: "foto_deportista_carlos.jpg"
    }
];

function cargarDatosDeportistas() {
    const tablaDeportistasBody = document.querySelector('#tabla-deportistas tbody');
    datosDeportistas.forEach(deportista => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${deportista.nombre}</td>
            <td>${deportista.apellidos}</td>
            <td>${deportista.cedula}</td>
            <td>${deportista.fechaNacimiento}</td>
            <td><a href="${deportista.fotoCedulaUrl}" target="_blank">Ver foto</a></td>
            <td><a href="${deportista.fotoDeportistaUrl}" target="_blank">Ver foto</a></td>
            <td>
                <button class="btn btn-sm btn-primary">Editar</button>
                <button class="btn btn-sm btn-danger">Eliminar</button>
            </td>
        `;
        tablaDeportistasBody.appendChild(fila);
    });
}

// Llama a esta función para cargar los datos de deportistas al iniciar la página
cargarDatosDeportistas();
});
// Puedes usar estos datos para agregar deportistas automáticamente al cargar la página o como referencia para probar tu funcionalidad.
