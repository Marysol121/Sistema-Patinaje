document.addEventListener('DOMContentLoaded', function() {
    // Datos de prueba para "Eventos"
    const eventos = [
        { 
            id: 1, 
            nombre: 'Evento 1', 
            fecha: '2024-05-20', 
            descripcion: 'Descripción del evento 1', 
            numParticipantes: 50, 
            categoria: 'Categoría 1', 
            cedulaOrganizador: '1234567890', 
            nombreOrganizador: 'Organizador 1', 
            apellidosOrganizador: 'Apellido 1' 
        },
        { 
            id: 2, 
            nombre: 'Evento 2', 
            fecha: '2024-05-22', 
            descripcion: 'Descripción del evento 2', 
            numParticipantes: 40, 
            categoria: 'Categoría 2', 
            cedulaOrganizador: '0987654321', 
            nombreOrganizador: 'Organizador 2', 
            apellidosOrganizador: 'Apellido 2' 
        },
        { 
            id: 3, 
            nombre: 'Evento 3', 
            fecha: '2024-05-25', 
            descripcion: 'Descripción del evento 3', 
            numParticipantes: 60, 
            categoria: 'Categoría 3', 
            cedulaOrganizador: '1357924680', 
            nombreOrganizador: 'Organizador 3', 
            apellidosOrganizador: 'Apellido 3' 
        },
    ];

    // Función para cargar datos en la tabla de eventos
    function cargarDatosClubes() {
        const tablaClubesBody = document.querySelector('#tabla-clubes tbody');
        datosClubes.forEach(club => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${club.id}</td>
                <td>${club.nombre}</td>
                <td>${club.fechaFundacion}</td>
                <td>${club.descripcion}</td>
                <td>
                    <button class="btn btn-sm btn-primary">Editar</button>
                    <button class="btn btn-sm btn-danger">Eliminar</button>
                </td>
            `;
            tablaClubesBody.appendChild(fila);
        });
    }
    
    // Llama a esta función para cargar los datos de clubes al iniciar la página
    cargarDatosClubes();
    
});
