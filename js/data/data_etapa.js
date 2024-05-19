document.addEventListener('DOMContentLoaded', function() {
    // Datos de prueba para "Etapas"
    const etapas = [
        { id: 1, nombre: 'Etapa 1', descripcion: 'Descripción de la etapa 1' },
        { id: 2, nombre: 'Etapa 2', descripcion: 'Descripción de la etapa 2' },
        { id: 3, nombre: 'Etapa 3', descripcion: 'Descripción de la etapa 3' },
    ];

    // Función para cargar datos en la tabla de etapas
    function cargarDatosEtapas() {
        const tablaEtapasBody = document.querySelector('#tabla-etapas tbody');
        etapas.forEach(etapa => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${etapa.id}</td>
                <td>${etapa.nombre}</td>
                <td>${etapa.descripcion}</td>
                <td>
                    <button class="btn btn-sm btn-primary">Editar</button>
                    <button class="btn btn-sm btn-danger">Eliminar</button>
                </td>
            `;
            tablaEtapasBody.appendChild(fila);
        });
    }

    // Cargar los datos al iniciar la página
    cargarDatosEtapas();
});
