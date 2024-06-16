// Función para cargar el contenido de header.html y menu.html
function cargarContenido() {
    // URL del archivo header.html
    var headerUrl = "header.html";

    // Fetch para obtener el contenido de header.html
    fetch(headerUrl)
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido en el contenedor del header
            document.getElementById('headerContent').innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar el contenido del header:', error);
        });

    // URL del archivo menu.html
    var menuUrl = "menu.html";

    // Fetch para obtener el contenido de menu.html
    fetch(menuUrl)
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido en el contenedor del menú
            document.getElementById('menuContent').innerHTML = data;
            
            // Después de cargar el menú, llamar a la función para marcar el enlace correspondiente como activo
            marcarMenu();
        })
        .catch(error => {
            console.error('Error al cargar el contenido del menú:', error);
        });

    // URL del archivo menu.html
    var footerUrl = "footer.html";

    // Fetch para obtener el contenido de footer.html
    fetch(footerUrl)
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido en el contenedor del menú
            document.getElementById('footerContent').innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar el contenido del footer:', error);
        });

    marcarMenu();
}

// Función para marcar el menú activo
function marcarMenu() {
    // Obtener la variable global que identifica la página actual
    var currentPage = window.currentPage;

    // Obtener todos los enlaces del menú
    var menuLinks = document.querySelectorAll('.nav-v a');

    // Iterar sobre cada enlace del menú
    menuLinks.forEach(function (link) {
        // Obtener la URL del enlace del menú
        var menuUrl = link.getAttribute('href');

        // Verificar si la URL del enlace del menú coincide exactamente con la variable que identifica la página actual
        if (menuUrl === currentPage + '.html') {
            // Agregar la clase "activo" al enlace del menú correspondiente
            link.classList.add('active');
        }
    });
}


// Llamar a la función para marcar el menú activo cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    cargarContenido();
    marcarMenu();
});