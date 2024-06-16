// Asignamos el active al primer elemento por defecto y lo asignamos al boton que se haga clic
document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll("nav ul li a");
  
    // Agregar la clase "activo" al primer enlace por defecto
    enlaces[0].classList.add("activo");
  
    enlaces.forEach(function (enlace) {
      enlace.addEventListener("click", function (event) {
        // Eliminar la clase "activo" de todos los enlaces
        enlaces.forEach(function (e) {
          e.classList.remove("activo");
        });
  
        // Agregar la clase "activo" al enlace clickeado
        this.classList.add("activo");
      });
    });
  });
  
  /////////////////////////////////////////////////////////
  
  // Función para ajustar la posición del contenido según la altura del header
  function ajustarPosicionContenido() {
    var header = document.querySelector("header");
    var mainElement = document.querySelector("main");
  
    // Verificar si el encabezado tiene la clase "fixed"
    if (header.classList.contains("fixed")) {
      // Obtener la altura del encabezado
      var headerHeight = header.offsetHeight;
  
      // Ajustar el margen superior del contenido
      mainElement.style.marginTop = headerHeight + "px";
    }
  }
  
  // Llamar a la función al cargar la página
  document.addEventListener("DOMContentLoaded", function () {
    ajustarPosicionContenido();
  });
  
  // Llamar a la función cuando la ventana se redimensiona (por si cambia la altura del header)
  window.addEventListener("resize", function () {
    ajustarPosicionContenido();
  });
  
  /////////////////////////////////////////////////////////
  
  // Función para manejar el desplazamiento suave al hacer clic en un enlace
  /*
  function smoothScroll(target) {
    const headerHeight = document.querySelector("header").offsetHeight; 
    const targetElement = document.querySelector(target); 
    const offsetTop = targetElement.offsetTop - headerHeight;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }*/
  
  // Manejar el clic en los enlaces del menú
  /*
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); 
      const target = this.getAttribute("href");
      smoothScroll(target); 
    });
  });*/
  