/////////////////////////////////////////////////////////
/* CUT TEXT */
function recortarTexto(maxLongitud, clase) {
  const elementos = document.querySelectorAll(clase);
  const puntosSuspensivos = '...';
  const longitudRecorte = maxLongitud - puntosSuspensivos.length;
  elementos.forEach(elemento => {
    let texto = elemento.textContent.trim();
    if (texto.length > maxLongitud) {
      elemento.textContent = texto.slice(0, longitudRecorte) + puntosSuspensivos;
    }
  });
}
window.onload = () => {
  recortarTexto(150, '.text-cut-150');
  recortarTexto(200, '.text-cut-200');
  recortarTexto(250, '.text-cut-250');
  recortarTexto(300, '.text-cut-300');
  recortarTexto(350, '.text-cut-350');
  recortarTexto(400, '.text-cut-400');
  recortarTexto(450, '.text-cut-450'); // Nueva llamada añadida
};

/////////////////////////////////////////////////////////
/* ACORDION */
document.addEventListener("DOMContentLoaded", function() {
  const acordBlock  = document.querySelectorAll('.accordion-block')
  const acordHeader = document.querySelectorAll('.accordion-header')
  acordHeader.forEach( ( header , i )=>{
      acordHeader[i].addEventListener('click', ()=>{
          acordBlock.forEach( ( block , i )=>{
              acordBlock[i].classList.remove('active')
          })
          acordBlock[i].classList.add('active')
      })
  })
});
/////////////////////////////////////////////////////////
/* TABS */
document.addEventListener("DOMContentLoaded", function() {
  const tabsButtom  = document.querySelectorAll('.tabs-buttom')
  const tabsBlock   = document.querySelectorAll('.tabs-block')
  tabsButtom.forEach( ( buttom , i )=>{
      tabsButtom[i].addEventListener('click',()=>{
        tabsButtom.forEach( ( buttom , i )=>{
              tabsButtom[i].classList.remove('activo')
              tabsBlock[i].classList.remove('activo')
          })
          tabsButtom[i].classList.add('activo')
          tabsBlock[i].classList.add('activo')
      })
  })
});

/////////////////////////////////////////////////////////
/* CAROUSEL 1 */
document.addEventListener("DOMContentLoaded", function() {
  // Obtener los elementos del carrusel
  const carouselContainer = document.getElementById("carousel-container");
  const carousel = document.getElementById("carouselId");
  const buttonLeft = document.getElementById("button-left");
  const buttonRight = document.getElementById("button-right");
  const carouselItems = document.querySelectorAll(".carousel_item");
  const containerStyles = carouselContainer.style;
  let carouselCounter = 0;
  let isInTransition = false;
  const DIRECTION = {
      RIGHT: "RIGHT",
      LEFT: "LEFT",
  };

  // Verificar si el carrusel y los botones existen antes de continuar
  if (!carousel || !buttonLeft || !buttonRight || !carouselItems || carouselItems.length < 2) {
      return;
  }

  const getTransformValue = () =>
      Number(containerStyles.getPropertyValue("--carousel-transform").replace("px", ""));
  
  const reorderCarousel = () => {
      const transformValue = getTransformValue();
      containerStyles.setProperty("--transition", "none");
      if (carouselCounter === carouselItems.length - 1) {
          carousel.appendChild(carousel.firstElementChild);
          containerStyles.setProperty(
              "--carousel-transform",
              `${transformValue + carouselItems[carouselCounter].scrollWidth}px`
          );
          carouselCounter--;
      } else if (carouselCounter === 0) {
          carousel.prepend(carousel.lastElementChild);
          containerStyles.setProperty(
              "--carousel-transform",
              `${transformValue - carouselItems[carouselCounter].scrollWidth}px`
          );
          carouselCounter++;
      }
      isInTransition = false;
  };

  const moveCarousel = (direction) => {
      if (isInTransition) return;
      const transformValue = getTransformValue();
      containerStyles.setProperty("--transition", "transform 1s");
      isInTransition = true;
      if (direction === DIRECTION.LEFT) {
          containerStyles.setProperty(
              "--carousel-transform",
              `${transformValue + carouselItems[carouselCounter].scrollWidth}px`
          );
          carouselCounter--;
      } else if (direction === DIRECTION.RIGHT) {
          containerStyles.setProperty(
              "--carousel-transform",
              `${transformValue - carouselItems[carouselCounter].scrollWidth}px`
          );
          carouselCounter++;
      }
  };

  buttonRight.addEventListener("click", () => moveCarousel(DIRECTION.RIGHT));
  buttonLeft.addEventListener("click", () => moveCarousel(DIRECTION.LEFT));
  carousel.addEventListener("transitionend", reorderCarousel);

  // Si hay menos de 3 elementos, desactivar el reordenamiento
  if (carouselItems.length >= 3) {
      reorderCarousel();
  }

  const initCarouselAutoPlay = () => {
      const isAutoPlay = carouselContainer.classList.contains("auto-play");
      let autoplayInterval;
      if (isAutoPlay) {
          autoplayInterval = setInterval(() => {
              moveCarousel(DIRECTION.RIGHT);
          }, 3000); // Ajusta el valor según la velocidad de reproducción deseada

          // Agrega un listener para suspender la reproducción automática cuando se pone el cursor sobre el contenedor del carrusel
          carouselContainer.addEventListener("mouseenter", () => {
              clearInterval(autoplayInterval);
          });
          // Agrega un listener para reanudar la reproducción automática cuando se retira el cursor del contenedor del carrusel
          carouselContainer.addEventListener("mouseleave", () => {
              autoplayInterval = setInterval(() => {
                  moveCarousel(DIRECTION.RIGHT);
              }, 3000); // Restablece el intervalo al salir del contenedor
          });
      }
  };

  // Llama a la función para iniciar la reproducción automática si se detecta la clase 'auto-play'
  initCarouselAutoPlay();
});







/////////////////////////////////////////////////////////
/* DROPDOWN */
document.addEventListener("DOMContentLoaded", function() {
  // Selecciona todos los botones de dropdown
  const dropdownToggleButtons = document.querySelectorAll('[data-Qy-toggle="dropdown"]');

  // Itera sobre cada botón de dropdown
  dropdownToggleButtons.forEach(function(button) {
    // Agrega un event listener para el evento de clic
    button.addEventListener("click", function(event) {
      // Encuentra el menú desplegable asociado al botón clickeado
      const dropdownMenu = button.nextElementSibling;
      
      // Muestra u oculta el menú desplegable cambiando la clase "show"
      dropdownMenu.classList.toggle("dropdown-show");
    });
  });

  // Cierra el menú desplegable si el usuario hace clic fuera de él
  document.addEventListener("click", function(event) {
    dropdownToggleButtons.forEach(function(button) {
      const dropdownMenu = button.nextElementSibling;
      // Verifica si el clic no ocurrió dentro del botón ni dentro del menú desplegable
      if (!button.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("dropdown-show");
      }
    });
  });

});

/////////////////////////////////////////////////////////
/* MODAL */
document.addEventListener("DOMContentLoaded", function() {
  // Obtener los botones para abrir los modales
  const modalToggleButtons = document.querySelectorAll('[data-Qy-toggle^="modal"]');
  
  // Obtener los botones de cierre de los modales
  const closeBlackBtns = document.querySelectorAll('.modal .close');

  // Función para abrir el modal negro
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');
    modalContent.classList.remove('fadeOut'); // Quitar la clase de animación de salida si está presente
    modalContent.classList.add('fadeIn'); // Quitar la clase de animación de entrada si está presente
    modal.style.display = "block";
    // Agregar una breve espera para asegurar que la animación se aplique correctamente
    setTimeout(function() {
        modalContent.classList.add('fadeIn');
    }, 50); // 50ms de espera antes de aplicar la animación
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const modalContent = modal.querySelector('.modal-content');
  modalContent.classList.remove('fadeIn'); // Quitar la clase de animación de entrada
  modalContent.classList.add('fadeOut'); // Agregar la clase de animación de salida
  // Ocultar el modal después de un breve período para permitir que la animación se ejecute
  setTimeout(function() {
      modal.style.display = "none";
  }, 600); // Tiempo en milisegundos, ajusta según la duración de tu animación (aquí asumimos 0.5 segundos)
}

// Event listener para abrir los modales negros
  modalToggleButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          const modalId = this.getAttribute('data-Qy-toggle');
          openModal(modalId);
      });
  });

  // Event listener para el botón de cierre de los modales negros
  closeBlackBtns.forEach(function(closeBtn) {
      closeBtn.addEventListener("click", function() {
          const modalId = this.closest('.modal').id;
          closeModal(modalId);
      });
  });

  // Event listener para cerrar los modales negros haciendo clic fuera de ellos
  window.addEventListener("click", function(event) {
      if (event.target.classList.contains('modal')) {
          const modalId = event.target.id;
          closeModal(modalId);
      }
  });
});

/////////////////////////////////////////////////////////
/* TOAST */
document.addEventListener("DOMContentLoaded", function() {
  const btnToast = document.querySelector('[data-qy-toggle="toastId"]');
  if (btnToast) {
      btnToast.addEventListener("click", function() {
          const toastContent = document.querySelector('.toast-content');
          if (toastContent) {
              toastContent.classList.add("toast-show");
              setTimeout(function() {
                  toastContent.classList.remove("toast-show");
              }, 40000); // 40 segundos
          } 
      });
  }
  const toastContent = document.querySelector('.toast-content');
  if (toastContent) {
      const closeBtnToast = toastContent.querySelector(".toast-close");
      if (closeBtnToast) {
          closeBtnToast.addEventListener("click", function() {
              toastContent.classList.remove("toast-show");
          });
      }
  }
});

/////////////////////////////////////////////////////////
/* OFFCANVAS */
document.addEventListener("DOMContentLoaded", function() {
  // Obtener los botones para abrir los modales
  const offcanvasToggleButtons = document.querySelectorAll('[data-Qy-toggle^="offcanvas"]');
  const offcanvasToggleButtonsR = document.querySelectorAll('[data-Qy-toggle^="offcanvas"]');
  // Obtener los botones de cierre de los modales
  const closeOffcanvasBtns = document.querySelectorAll('.offcanvas .close');
  const closeOffcanvasBtnsR = document.querySelectorAll('.offcanvas .close');

  // Función para abrir el modal negro
  function openOffcanvas(offcanvasId) {
    const offcanvas = document.getElementById(offcanvasId);
    const offcanvasContent = offcanvas.querySelector('.offcanvas-content');
    offcanvasContent.classList.remove('fadeOutOffcanvas'); // Quitar la clase de animación de salida si está presente
    offcanvasContent.classList.add('fadeInOffcanvas'); // Quitar la clase de animación de entrada si está presente
    offcanvas.style.display = "block";
    // Agregar una breve espera para asegurar que la animación se aplique correctamente
    setTimeout(function() {
        offcanvasContent.classList.add('fadeInOffcanvas');
    }, 50); // 50ms de espera antes de aplicar la animación
}

function closeOffcanvas(offcanvasId) {
  const offcanvas = document.getElementById(offcanvasId);
  const offcanvasContent = offcanvas.querySelector('.offcanvas-content');
  offcanvasContent.classList.remove('fadeInOffcanvas'); // Quitar la clase de animación de entrada si está presente
  offcanvasContent.classList.add('fadeOutOffcanvas'); // Añadir la clase de animación de salida
  // Escuchar el evento 'animationend' para la animación de salida
  offcanvasContent.addEventListener('animationend', function() {
    // Ocultar el offcanvas después de que la animación de salida haya terminado
    offcanvas.style.display = "none";
  }, { once: true }); // Usar { once: true } para que el listener se elimine automáticamente después de ejecutarse una vez
}

// Event listener para el botón de cierre de los offcanvases negros
closeOffcanvasBtns.forEach(function(closeBtn) {
  closeBtn.addEventListener("click", function() {
    const offcanvasId = this.closest('.offcanvas').id;
    closeOffcanvas(offcanvasId);
  });
});

// Event listener para abrir los modales negros
  offcanvasToggleButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          const offcanvasId = this.getAttribute('data-Qy-toggle');
          openOffcanvas(offcanvasId);
      });
  });

  // Event listener para cerrar los offcanvas  haciendo clic fuera de ellos
  window.addEventListener("click", function(event) {
      if (event.target.classList.contains('offcanvas')) {
          const offcanvasId = event.target.id;
          closeOffcanvas(offcanvasId);
      }
  });


  // Función derecha
  function openOffcanvasR(offcanvasId) {
    const offcanvas = document.getElementById(offcanvasId);
    const offcanvasContentR = offcanvas.querySelector('.offcanvas-content-r');
    offcanvasContentR.classList.remove('fadeOutOffcanvasR'); 
    offcanvasContentR.classList.add('fadeInOffcanvasR');
    offcanvas.style.display = "block";
    // Agregar una breve espera para asegurar que la animación se aplique correctamente
    setTimeout(function() {
        offcanvasContentR.classList.add('fadeInOffcanvasR');
    }, 50); // 50ms de espera antes de aplicar la animación
}

  // Función derecha
function closeOffcanvasR(offcanvasId) {
  const offcanvas = document.getElementById(offcanvasId);
  const offcanvasContentR = offcanvas.querySelector('.offcanvas-content-r');
  offcanvasContentR.classList.remove('fadeInOffcanvasR');
  offcanvasContentR.classList.add('fadeOutOffcanvasR'); 
  // Escuchar el evento 'animationend' para la animación de salida
  offcanvasContentR.addEventListener('animationend', function() {
    // Ocultar el offcanvas después de que la animación de salida haya terminado
    offcanvas.style.display = "none";
  }, { once: true }); // Usar { once: true } para que el listener se elimine automáticamente después de ejecutarse una vez
}
// Event listener para el botón de cierre de los offcanvases negros
closeOffcanvasBtnsR.forEach(function(closeBtn) {
  closeBtn.addEventListener("click", function() {
    const offcanvasId = this.closest('.offcanvas').id;
    closeOffcanvasR(offcanvasId);
  });
});

// Event listener para abrir los modales negros
  offcanvasToggleButtonsR.forEach(function(button) {
      button.addEventListener("click", function() {
          const offcanvasId = this.getAttribute('data-Qy-toggle');
         openOffcanvasR(offcanvasId);
      });
  });

  // Event listener para cerrar los offcanvas  haciendo clic fuera de ellos
  window.addEventListener("click", function(event) {
      if (event.target.classList.contains('offcanvas')) {
          const offcanvasId = event.target.id;
         closeOffcanvasR(offcanvasId);
      }
  });
 
});

/////////////////////////////////////////////////////////
/* NAVBAR */
document.addEventListener("DOMContentLoaded", function() {
  const navbarToggles = document.querySelectorAll('.navbar-toggle');
  const navbarContainers = document.querySelectorAll('.navbar-collapse');

  navbarToggles.forEach(function(navbarToggle, index) {
    navbarToggle.addEventListener("click", function() {
      navbarContainers[index].classList.toggle("active");
      navbarContainers[index].classList.remove("close");
    });
  });

  window.addEventListener("click", function(event) {
    const navbar = event.target.closest('.navbar');
    if (!navbar) {
      navbarContainers.forEach(function(navbarCollapse) {
        navbarCollapse.classList.remove("active");
        navbarCollapse.classList.add("close");
      });
    }
  });
});