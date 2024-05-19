document.addEventListener('DOMContentLoaded', function() {
    // Datos de prueba para "Categorías"
    const categorias = [
        { id: 1, nombre: 'Categoria 1', descripcion: 'Descripción de la categoría 1', fecha: '2024-05-18', edades: '18-30', sexo: 'masculino' },
        { id: 2, nombre: 'Categoria 2', descripcion: 'Descripción de la categoría 2', fecha: '2024-05-19', edades: '25-40', sexo: 'femenino' },
        { id: 3, nombre: 'Categoria 3', descripcion: 'Descripción de la categoría 3', fecha: '2024-05-20', edades: '30-50', sexo: 'masculino' },
    ];

    // Función para cargar datos en la tabla de categorías
    function cargarDatosCategorias() {
        const tablaCategoriasBody = document.querySelector('#tabla-categorias tbody');
        categorias.forEach(categoria => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${categoria.id}</td>
                <td>${categoria.nombre}</td>
                <td>${categoria.descripcion}</td>
                <td>${categoria.fecha}</td>
                <td>${categoria.edades}</td>
                <td>${categoria.sexo}</td>
                <td>
                    <button class="btn btn-sm btn-primary">Editar</button>
                    <button class="btn btn-sm btn-danger">Eliminar</button>
                </td>
            `;
            tablaCategoriasBody.appendChild(fila);
        });
    }

    // Cargar los datos al iniciar la página
    cargarDatosCategorias();
});