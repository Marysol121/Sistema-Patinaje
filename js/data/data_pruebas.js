document.addEventListener('DOMContentLoaded', function() {
    // Datos de prueba para "Pruebas"
    const pruebas = [
        { id: 1, nombre: 'Prueba 1', descripcion: 'Descripción de la prueba 1' },
        { id: 2, nombre: 'Prueba 2', descripcion: 'Descripción de la prueba 2' },
        { id: 3, nombre: 'Prueba 3', descripcion: 'Descripción de la prueba 3' },
    ];

    // Función para cargar datos en la tabla de pruebas
    function cargarDatosPruebas() {
        const tablaPruebasBody = document.querySelector('#tabla-pruebas tbody');
        pruebas.forEach(prueba => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${prueba.id}</td>
                <td>${prueba.nombre}</td>
                <td>${prueba.descripcion}</td>
                <td>
                    <button class="btn btn-sm btn-primary">Editar</button>
                    <button class="btn btn-sm btn-danger">Eliminar</button>
                </td>
            `;
            tablaPruebasBody.appendChild(fila);
        });
    }

    // Cargar los datos al iniciar la página
    cargarDatosPruebas();
});