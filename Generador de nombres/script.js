document.getElementById('generar').addEventListener('click', function() {
    // Arrays de nombres
    const primerosNombres = ["Alejandro", "Beatriz", "Carlos", "Diana", "Esteban", "Fabiola"];
    const apellidos = ["García", "Martínez", "López", "González", "Rodríguez", "Pérez"];

    // Función para obtener un elemento aleatorio de un array
    function obtenerAleatorio(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    // Generar nombre aleatorio
    const nombreAleatorio = `${obtenerAleatorio(primerosNombres)} ${obtenerAleatorio(apellidos)}`;

    // Mostrar el nombre en el elemento <p> con id "nombre"
    document.getElementById('nombre').textContent = nombreAleatorio;
});