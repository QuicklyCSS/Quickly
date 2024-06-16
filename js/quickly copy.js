
/////////////////////////////////////////////////////////
/* CUT TEXT */
// Función pra cortar texto 
function recortarTexto() {
  // Obtener todos los elementos con clase 'text-cut-150'
  const elementos150 = document.querySelectorAll('.text-cut-150');
  const elementos200 = document.querySelectorAll('.text-cut-200');
  const elementos250 = document.querySelectorAll('.text-cut-250');
  const elementos300 = document.querySelectorAll('.text-cut-300');
  const elementos350 = document.querySelectorAll('.text-cut-350');
  const elementos400 = document.querySelectorAll('.text-cut-400');

  // Recorrer elementos con clase 'text-cut-150'
  elementos150.forEach(elemento => {
    let texto = elemento.textContent;
    if (texto.length > 150) {
      elemento.textContent = texto.slice(0, 150) + '...'; // Recortar texto y agregar tres puntos
    }
  });

  // Recorrer elementos con clase 'text-cut-200'
  elementos200.forEach(elemento => {
    let texto = elemento.textContent;
    if (texto.length > 200) {
      elemento.textContent = texto.slice(0, 200) + '...'; // Recortar texto y agregar tres puntos
    }
  });

  // Recorrer elementos con clase 'text-cut-250'
  elementos250.forEach(elemento => {
    let texto = elemento.textContent;
    if (texto.length > 250) {
      elemento.textContent = texto.slice(0, 250) + '...'; // Recortar texto y agregar tres puntos
    }
  });
    // Recorrer elementos con clase 'text-cut-300'
    elementos300.forEach(elemento => {
      let texto = elemento.textContent;
      if (texto.length > 300) {
        elemento.textContent = texto.slice(0, 300) + '...'; // Recortar texto y agregar tres puntos
      }
    });
    // Recorrer elementos con clase 'text-cut-350'
    elementos350.forEach(elemento => {
      let texto = elemento.textContent;
      if (texto.length > 350) {
        elemento.textContent = texto.slice(0, 350) + '...'; // Recortar texto y agregar tres puntos
      }
    });    
    // Recorrer elementos con clase 'text-cut-400'
    elementos400.forEach(elemento => {
      let texto = elemento.textContent;
      if (texto.length > 400) {
        elemento.textContent = texto.slice(0, 400) + '...'; // Recortar texto y agregar tres puntos
      }
    });        
}
// Llamar a la función al cargar la página
window.onload = recortarTexto;

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
  const carouselContainer = document.getElementById("carousel-container");
  const carousel = document.getElementById("carouselId");
  const buttonLeft = document.getElementById("button-left");
  const buttonRight = document.getElementById("button-right");
  const carouselItem = document.querySelectorAll(".carousel_item");
  const rootStyles = document.documentElement.style;
  let carouselCounter = 0;
  let isInTransition = false;
  const DIRECTION = {
    RIGHT: "RIGHT",
    LEFT: "LEFT",
  };

  const getTransformValue = () =>
    Number(rootStyles.getPropertyValue("--carousel-transform").replace("px", ""));
  const reorderCarosuel = () => {
    const transformValue = getTransformValue();
    rootStyles.setProperty("--transition", "none");
    if (carouselCounter === carouselItem.length - 1) {
      carousel.appendChild(carousel.firstElementChild);
      rootStyles.setProperty(
        "--carousel-transform",
        `${transformValue + carouselItem[carouselCounter].scrollWidth}px`
      );
      carouselCounter--;
    } else if (carouselCounter === 0) {
      carousel.prepend(carousel.lastElementChild);
      rootStyles.setProperty(
        "--carousel-transform",
        `${transformValue - carouselItem[carouselCounter].scrollWidth}px`
      );
      carouselCounter++;
    }
    isInTransition = false;
  };

  const moveCarousel = (direction) => {
    if (isInTransition) return;
    const transformValue = getTransformValue();
    rootStyles.setProperty("--transition", "transform 1s");
    isInTransition = true;
    if (direction === DIRECTION.LEFT) {
      rootStyles.setProperty(
        "--carousel-transform",
        `${transformValue + carouselItem[carouselCounter].scrollWidth}px`
      );
      carouselCounter--;
    } else if (direction === DIRECTION.RIGHT) {
      rootStyles.setProperty(
        "--carousel-transform",
        `${transformValue - carouselItem[carouselCounter].scrollWidth}px`
      );
      carouselCounter++;
    }
  };

  buttonRight.addEventListener("click", () => moveCarousel(DIRECTION.RIGHT));
  buttonLeft.addEventListener("click", () => moveCarousel(DIRECTION.LEFT));
  carousel.addEventListener("transitionend", reorderCarosuel);
  reorderCarosuel();

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
  const toastContent = document.querySelector('.toast-content');
  btnToast.addEventListener("click", function() {
      if (toastContent) {
          toastContent.classList.add("toast-show");
          setTimeout(function() {
              toastContent.classList.remove("toast-show");
          }, 40000); // 40 segundos
      } 
  });

  if (toastContent) {
      const closeBtnToast = toastContent.querySelector(".toast-close");
      closeBtnToast.addEventListener("click", function() {
          toastContent.classList.remove("toast-show");
      });
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









/////////////////////////////////////////////////////////
/* VALIDACION DE FORMULARIO */

// Función para validar el contenido del campo de texto en tiempo real
function validarTexto(input) {
  var textoRegex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{3,}$/;
  var isValid = textoRegex.test(input.value.trim());
  var parent = input.parentElement;
  var validFeedback = parent.querySelector('.valid-feedback');
  var invalidFeedback = parent.querySelector('.invalid-feedback');

  if (input.value.trim() === '') {
      input.classList.remove('is-valid', 'is-invalid');
      validFeedback.style.display = 'none';
      invalidFeedback.style.display = 'none';
  } else if (isValid) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      validFeedback.style.display = 'block';
      invalidFeedback.style.display = 'none';
  } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
      validFeedback.style.display = 'none';
      invalidFeedback.style.display = 'block';
  }
}

// Función para validar el contenido del campo de correo electrónico en tiempo real
function validarEmail(input) {
  var emailRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,}$/;
  var isValid = emailRegex.test(input.value.trim());
  var parent = input.parentElement;
  var validFeedback = parent.querySelector('.valid-feedback');
  var invalidFeedback = parent.querySelector('.invalid-feedback');
  
  if (input.value.trim() === '') {
      input.classList.remove('is-valid', 'is-invalid');
      validFeedback.style.display = 'none';
      invalidFeedback.style.display = 'none';
  } else if (isValid) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      validFeedback.style.display = 'block';
      invalidFeedback.style.display = 'none';
  } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
      validFeedback.style.display = 'none';
      invalidFeedback.style.display = 'block';
  }
}

// Función para validar el contenido del campo de teléfono en tiempo real
function validarTelefono(input) {
  var telefonoRegex = /^\d{8,}$/;
  var isValid = telefonoRegex.test(input.value.trim());
  var parent = input.parentElement;
  var validFeedback = parent.querySelector('.valid-feedback');
  var invalidFeedback = parent.querySelector('.invalid-feedback');

  if (input.value.trim() === '') {
      input.classList.remove('is-valid', 'is-invalid');
      validFeedback.style.display = 'none';
      invalidFeedback.style.display = 'none';
  } else if (isValid) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      validFeedback.style.display = 'block';
      invalidFeedback.style.display = 'none';
  } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
      validFeedback.style.display = 'none';
      invalidFeedback.style.display = 'block';
  }
}

// Función para validar el select
function validarSelect(select) {
  var isValid = select.checkValidity();
  var parent = select.parentElement;
  var validFeedback = parent.querySelector('.valid-feedback');
  var invalidFeedback = parent.querySelector('.invalid-feedback');
  var selectedOption = select.options[select.selectedIndex];

  if (selectedOption.value === '') {
      select.classList.remove('is-valid', 'is-invalid');
      validFeedback.style.display = 'none';
      invalidFeedback.style.display = 'none';
  } else if (isValid) {
      select.classList.remove('is-invalid');
      select.classList.add('is-valid');
      validFeedback.style.display = 'block';
      invalidFeedback.style.display = 'none';
  } else {
      select.classList.remove('is-valid');
      select.classList.add('is-invalid');
      validFeedback.style.display = 'none';
      invalidFeedback.style.display = 'block';
  }
}

// Función para validar el textArea
function validarTextArea(textarea) {
  var textareaValue = textarea.value.trim();
  var isValid = textareaValue.length >= 20;
  var parent = textarea.parentElement;
  var validFeedback = parent.querySelector('.valid-feedback');
  var invalidFeedback = parent.querySelector('.invalid-feedback');

  if (textareaValue === '') {
      textarea.classList.remove('is-valid', 'is-invalid');
      validFeedback.style.display = 'none';
      invalidFeedback.style.display = 'none';
  } else if (isValid) {
      textarea.classList.remove('is-invalid');
      textarea.classList.add('is-valid');
      validFeedback.style.display = 'block';
      invalidFeedback.style.display = 'none';
  } else {
      textarea.classList.remove('is-valid');
      textarea.classList.add('is-invalid');
      validFeedback.style.display = 'none';
      invalidFeedback.style.display = 'block';
  }

}

// Función para validar checkbox y range
function validarCheckboxRange(input) {
  var parent = input.parentElement;
  var validFeedback = parent.querySelector('.valid-feedback');
  var invalidFeedback = parent.querySelector('.invalid-feedback');

  if (input.checkValidity()) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    validFeedback.style.display = 'block';
    invalidFeedback.style.display = 'none';
  } else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    validFeedback.style.display = 'none';
    invalidFeedback.style.display = 'block';
  }
}




/* //////////////////////////////////////////////////   FALTAN ESTOS */
// Función para validar radio buttons
function validarRadio(radio) {
  // Obtener el grupo de radio buttons
  var grupoRadio = document.querySelectorAll('input[type="radio"][name="' + radio.getAttribute('name') + '"]');
  
  // Iterar sobre el grupo de radio buttons y validar cada uno
  grupoRadio.forEach(function(radio) {
      var parent = radio.parentElement;
      var validFeedback = parent.querySelector('.valid-feedback');
      var invalidFeedback = parent.querySelector('.invalid-feedback');

      if (radio.checkValidity()) {
          radio.classList.remove('is-invalid');
          radio.classList.add('is-valid');
          validFeedback.style.display = 'block';
          invalidFeedback.style.display = 'none';
      } else {
          radio.classList.remove('is-valid');
          radio.classList.add('is-invalid');
          validFeedback.style.display = 'none';
          invalidFeedback.style.display = 'block';
      }
  });
}
/* ////////////////////////////////////////////////// HASTA AQUI */



// Obtener todos los campos requeridos
var camposRequeridos = document.querySelectorAll('[required]');

// Iterar sobre cada campo requerido
camposRequeridos.forEach(function(campo) {
// Obtener el tipo de campo
var tipoCampo = campo.tagName.toLowerCase(); // Obtenemos el nombre de la etiqueta HTML en minúsculas
// Asignar el evento correspondiente y la función de validación según el tipo de campo
    switch (tipoCampo) {
      case 'input':
          var inputType = campo.getAttribute('type');
          switch (inputType) {
              case 'text':
                  campo.addEventListener('input', function() {
                      validarTexto(this);
                  });
                  break;
              case 'tel':
                  campo.addEventListener('input', function() {
                      validarTelefono(this);
                  });
                  break;
              case 'email':
                  campo.addEventListener('input', function() {
                      validarEmail(this);
                  });
                  break;
          }
          break;
      case 'select':
          campo.addEventListener('change', function() {
            validarSelect(this);
          });
          break;
      case 'textarea':
          campo.addEventListener('input', function() { // Cambiado 'textarea' por 'input'
            validarTextArea(this); // Cambiado 'input' por 'this'
          });
          break;       
      case 'checkbox':
          campo.addEventListener('input', function() {
            validarCheckboxRange(this);
          }); 
          break;                                   
    }
});

// Función RESET
function resetearValidacionFormulario() {
  var formulario = document.getElementById('form');
  var validFeedbacks = formulario.querySelectorAll('.valid-feedback');
  var invalidFeedbacks = formulario.querySelectorAll('.invalid-feedback');
  var campos = formulario.querySelectorAll('.form-control');

  validFeedbacks.forEach(function(element) {
      element.style.display = 'none';
  });

  invalidFeedbacks.forEach(function(element) {
      element.style.display = 'none';
  });

  campos.forEach(function(campo) {
      campo.classList.remove('is-valid', 'is-invalid');
  });

  // Deshabilitar el botón de enviar al restablecer el formulario
  var botonEnviar = document.querySelector('button[type="submit"]');
  botonEnviar.classList.remove('enabled');
  botonEnviar.classList.add('disabled');
  botonEnviar.disabled = true;
}
document.querySelector('button[type="reset"]').addEventListener('click', resetearValidacionFormulario);


// Función HABILITAR BOTON ENVIAR
function habilitarBotonEnviar() {
  var camposRequeridos = document.querySelectorAll('[required]');
  var botonEnviar = document.querySelector('button[type="submit"]');
  var todosLlenos = true;

  camposRequeridos.forEach(function(campo) {
      // Verificar si el campo es un textarea y validar su contenido
      if (campo.tagName.toLowerCase() === 'textarea') {
          if (campo.value.trim().length < 20) {
              todosLlenos = false;
          }
      } else {
          // Para otros tipos de campos, verificar si están vacíos o inválidos
          if (campo.value.trim() === '' || campo.classList.contains('is-invalid')) {
              todosLlenos = false;
          }
      }
    });
      // Habilitar o deshabilitar el botón de enviar según el estado de todos los campos
      if (todosLlenos) {
          botonEnviar.classList.remove('disabled');
          botonEnviar.classList.add('enabled');
          botonEnviar.disabled = false;
      } else {
          botonEnviar.classList.remove('enabled');
          botonEnviar.classList.add('disabled');
          botonEnviar.disabled = true;
      }
  }
// Adjuntar evento de cambio a todos los campos requeridos
document.querySelectorAll('[required]').forEach(function(campo) {
  campo.addEventListener('input', habilitarBotonEnviar);
});






// Función para desactivar la validación si el formulario tiene el atributo novalidate

function desactivarValidacion() {
  var formulario = document.querySelector('form');
  var botonEnviar = document.querySelector('button[type="submit"]');

  if (formulario.hasAttribute('novalidate')) {
      botonEnviar.classList.remove('disabled');
      botonEnviar.classList.add('enabled');
      botonEnviar.disabled = false;

      var camposRequeridos = document.querySelectorAll('[required]');
      camposRequeridos.forEach(function(campo) {
          campo.removeEventListener('input', habilitarBotonEnviar);
      });
  } else {
      habilitarBotonEnviar(); // Ejecutar la validación inicial
  }
}
// Verificar y desactivar la validación si es necesario
document.addEventListener('DOMContentLoaded', function() {
  desactivarValidacion();
});











