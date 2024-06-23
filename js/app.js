// Función para cargar el contenido de header.html y menu.html
function cargarContenido() {
    var headerUrl = "header.html";
    fetch(headerUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById('headerContent').innerHTML = data;
        })
        .catch(error => {});
    var menuUrl = "menu.html";
    fetch(menuUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById('menuContent').innerHTML = data;
            marcarMenu();
            setupButton();
        })
        .catch(error => {});

    var footerUrl = "footer.html";

    fetch(footerUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById('footerContent').innerHTML = data;
        })
        .catch(error => {});
}

// Función para marcar el menú activo
function marcarMenu() {
    var currentPage = window.currentPage;
    var menuLinks = document.querySelectorAll('.nav-v a');
    menuLinks.forEach(function (link) {
        var menuUrl = link.getAttribute('href');
        if (menuUrl === currentPage + '.html') {
            link.classList.add('active');
        }
    });
}

// Llamar a la función para marcar el menú activo cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    cargarContenido();
    marcarMenu();
});

// Funcion para controlar el estado del botón menú
function setupButton() {
    const btnMenuH = document.getElementById('btnMenuH');
    const btnMenuC = document.getElementById('btnMenuC');
    const aside = document.getElementById('menuContent');

    if (btnMenuH && btnMenuC && aside) {
        btnMenuH.addEventListener('click', function() {
            toggleButtons();
            toggleAside();
        });

        btnMenuC.addEventListener('click', function() {
            toggleButtons();
            toggleAside();
        });
    }

    function toggleButtons() {
        btnMenuH.parentNode.style.display = btnMenuH.parentNode.style.display === 'none' ? 'block' : 'none';
        btnMenuC.parentNode.style.display = btnMenuC.parentNode.style.display === 'none' ? 'block' : 'none';
    }

    function toggleAside() {
        aside.classList.toggle('visible');
        if (aside.classList.contains('visible')) {
            aside.style.left = '0';
        } else {
            aside.style.left = '-100%';
        }
    }
}