/////////////////////////////////////////////////////////
/* FORMULARIO */

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

// Event listener para validar al cambiar el estado del checkbox
document.querySelectorAll('input[type="checkbox"]').forEach(function(input) {
  // Función para validar checkbox
  function validarCheckbox(input, parent) {
    var validFeedback = parent.querySelector('.valid-feedback');
    var invalidFeedback = parent.querySelector('.invalid-feedback');
    var fieldset = parent.querySelector('fieldset'); // Encuentra el fieldset dentro del contenedor

    if (input.type === 'checkbox') {
      if (input.required && !input.checked) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        if (validFeedback) validFeedback.style.display = 'none';
        if (invalidFeedback) invalidFeedback.style.display = 'block';
        if (fieldset) fieldset.classList.remove('is-valid');
        if (invalidFeedback && fieldset) fieldset.classList.add('is-invalid'); // Agrega la clase is-invalid al fieldset si está presente invalid-feedback
      } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        if (validFeedback) validFeedback.style.display = 'block';
        if (invalidFeedback) invalidFeedback.style.display = 'none';
        if (input.required && fieldset) fieldset.classList.add('is-valid');
        if (invalidFeedback && fieldset) fieldset.classList.remove('is-invalid'); // Remueve la clase is-invalid al fieldset si no está presente invalid-feedback
      }
    }

    // Ocultar los mensajes de feedback si el checkbox no es requerido
    if (input.type === 'checkbox' && !input.required) {
      if (validFeedback) validFeedback.style.display = 'none';
      if (invalidFeedback) invalidFeedback.style.display = 'none';
    }
  }
  input.addEventListener('change', function() {
    var parent = this.closest('.form-group'); // Encuentra el contenedor padre del elemento actual
    validarCheckbox(this, parent);
  });
});

// Función para validar radio buttons
// Event listener para validar al cambiar el estado del radio button
document.querySelectorAll('input[type="radio"]').forEach(function(input) {
  function validarRadio(input, parent) {
    var validFeedback = parent.querySelector('.valid-feedback');
    var invalidFeedback = parent.querySelector('.invalid-feedback');
    var fieldset = parent.querySelector('fieldset'); // Encuentra el fieldset dentro del contenedor

    // Si el input es un radio button y tiene el atributo required
    if (input.type === 'radio' && input.hasAttribute('required')) {
      var grupoRadio = parent.querySelectorAll('input[type="radio"][name="' + input.getAttribute('name') + '"]');
      var isChecked = false;

      // Iterar sobre los radio buttons del mismo grupo
      grupoRadio.forEach(function(radio) {
        if (radio.checked) {
          isChecked = true;
        }
      });

      // Aplicar clases y estilos de acuerdo al estado del radio button
      if (isChecked) {
        grupoRadio.forEach(function(radio) {
          radio.classList.remove('is-invalid');
          radio.classList.add('is-valid');
        });
        if (validFeedback) validFeedback.style.display = 'block';
        if (invalidFeedback) invalidFeedback.style.display = 'none';
        if (fieldset) fieldset.classList.add('is-valid');
        if (invalidFeedback && fieldset) fieldset.classList.remove('is-invalid');
      } else {
        grupoRadio.forEach(function(radio) {
          radio.classList.remove('is-valid');
          radio.classList.add('is-invalid');
        });
        if (validFeedback) validFeedback.style.display = 'none';
        if (invalidFeedback) invalidFeedback.style.display = 'block';
        if (fieldset) fieldset.classList.remove('is-valid');
        if (invalidFeedback && fieldset) fieldset.classList.add('is-invalid');
      }
    } else {
      // Si el radio button no es requerido, ocultar los mensajes de feedback
      if (validFeedback) validFeedback.style.display = 'none';
      if (invalidFeedback) invalidFeedback.style.display = 'none';
    }
  }

  input.addEventListener('change', function() {
    var parent = this.closest('.form-group'); // Encuentra el contenedor padre del elemento actual
    validarRadio(this, parent);
  });
});

// Función para validar number
function validarNumero(input) {
  // Expresión regular para permitir números enteros, decimales, negativos y positivos
  var numberRegex = /^-?\d+(\.\d+)?$/;
  // Verificar si el valor del input cumple con la expresión regular
  var isValid = numberRegex.test(input.value.trim());
  // Obtener el elemento padre del input
  var parent = input.parentElement;
  // Obtener los elementos de retroalimentación
  var validFeedback = parent.querySelector('.valid-feedback');
  var invalidFeedback = parent.querySelector('.invalid-feedback');

  // Si el input está vacío, mostrar invalid-feedback
  if (input.value.trim() === '') {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    if (validFeedback) validFeedback.style.display = 'none';
    if (invalidFeedback) invalidFeedback.style.display = 'block';
  } 
  // Si el input es válido
  else if (isValid) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    if (validFeedback) validFeedback.style.display = 'block';
    if (invalidFeedback) invalidFeedback.style.display = 'none';
  } 
  // Si el input es inválido
  else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    if (validFeedback) validFeedback.style.display = 'none';
    if (invalidFeedback) invalidFeedback.style.display = 'block';
  }
}

// Función para validar fecha
function validarFecha(input) {
  var isValid = !isNaN(Date.parse(input.value));
  var parent = input.parentElement;
  var validFeedback = parent.querySelector('.valid-feedback');
  var invalidFeedback = parent.querySelector('.invalid-feedback');

  if (input.value.trim() === '') {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
      validFeedback.style.display = 'none';
      invalidFeedback.style.display = 'block';
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

// Función para validar file
document.addEventListener('DOMContentLoaded', function() {
  // Obtener el elemento fileInput
  var fileInput = document.getElementById('fileInput');

  // Verificar si el elemento fileInput existe antes de agregar el evento change
  if (fileInput) {
      fileInput.addEventListener('change', function() {
          validarArchivo(this);
      });
  } else {
      console.warn('El elemento fileInput no está presente en el DOM.');
  }

  // Función para validar el archivo seleccionado
  function validarArchivo(input) {
      // Verificar si input es null o undefined
      if (!input) {
          console.warn('El input pasado a validarArchivo es nulo o indefinido.');
          return;
      }

      var isValidFile = input.files.length > 0; // Verificar si se ha seleccionado algún archivo
      var formGroup = input.closest('.form-group'); // Obtener el contenedor .form-group más cercano al input
      var fieldset = input.closest('fieldset'); // Obtener el elemento fieldset más cercano al input
      var validFeedback = formGroup.querySelector('.valid-feedback'); // Buscar el elemento con la clase valid-feedback dentro del contenedor
      var invalidFeedback = formGroup.querySelector('.invalid-feedback'); // Buscar el elemento con la clase invalid-feedback dentro del contenedor

      if (!fieldset) {
          console.warn('El elemento fieldset no está presente en el DOM.');
          return;
      }

      if (!isValidFile) {
          fieldset.classList.remove('is-valid');
          fieldset.classList.add('is-invalid');
          if (validFeedback) validFeedback.style.display = 'none'; // Ocultar el mensaje de retroalimentación positiva si existe
          if (invalidFeedback) invalidFeedback.style.display = 'block'; // Mostrar el mensaje de retroalimentación negativa si existe
      } else {
          fieldset.classList.remove('is-invalid');
          fieldset.classList.add('is-valid');
          if (validFeedback) validFeedback.style.display = 'block'; // Mostrar el mensaje de retroalimentación positiva si existe
          if (invalidFeedback) invalidFeedback.style.display = 'none'; // Ocultar el mensaje de retroalimentación negativa si existe
      }
  }
});

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
                    case 'radio':
                        campo.addEventListener('input', function() {
                            validarRadio(this);
                        });
                        break;              
                    case 'checkbox':
                        campo.addEventListener('input', function() {
                          validarCheckbox(this);
                        });
                        break;
                    case 'number':
                        campo.addEventListener('input', function() {
                            validarNumero(this);
                        });
                        break;     
                    case 'date':
                        campo.addEventListener('input', function() {
                            validarFecha(this);
                        });
                        break;   
                    case 'file':
                        campo.addEventListener('change', function() {
                            validarArchivo(this);
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
                campo.addEventListener('input', function() {
                    validarTextArea(this);
                });
                break;
        }
});

// Función RESET quitar las clases is-valid is-invalid
function resetearValidacionFormulario() {
  var formulario = document.querySelector('form');
  var validFeedbacks = formulario.querySelectorAll('.valid-feedback');
  var invalidFeedbacks = formulario.querySelectorAll('.invalid-feedback');
  var campos = formulario.querySelectorAll('.form-control');

  // Función para resetear clases is-valid e is-invalid de inputs tipo number
  function resetearClasesNumber() {
    var inputsNumber = document.querySelectorAll('input[type="number"]');
    inputsNumber.forEach(function(input) {
      input.classList.remove('is-valid', 'is-invalid');
    });
  }

  validFeedbacks.forEach(function(element) {
    element.style.display = 'none';
  });

  invalidFeedbacks.forEach(function(element) {
    element.style.display = 'none';
  });

  campos.forEach(function(campo) {
    campo.classList.remove('is-valid', 'is-invalid');
  });

  // Resetear los fieldset que pudieran tener las clases is-valid o is-invalid
  var fieldsets = formulario.querySelectorAll('fieldset');
  fieldsets.forEach(function(fieldset) {
    fieldset.classList.remove('is-valid', 'is-invalid');
  });

  // Deshabilitar el botón de enviar al restablecer el formulario
  var botonEnviar = document.querySelector('button[type="submit"]');
  if (botonEnviar) {
    botonEnviar.classList.remove('enabled');
    botonEnviar.classList.add('disabled');
    botonEnviar.disabled = true;
  }

  resetearClasesNumber(); // Llama a la función para resetear clases de inputs number
}

document.addEventListener('DOMContentLoaded', function() {
  // Verificar si el botón de reset y el formulario están presentes antes de agregar el listener
  const resetButton = document.querySelector('button[type="reset"]');
  //const form = document.getElementById('form');
  const form = document.querySelector('form');

  if (resetButton && form) {
      resetButton.addEventListener('click', function(event) {
          event.preventDefault();
          form.reset();
          resetearValidacionFormulario();
      });
  } else {
      console.warn('No se encontró el botón de tipo "reset" o el formulario en el DOM.');
  }

  // Función para desactivar la validación si el formulario tiene el atributo novalidate
  function desactivarValidacion() {
    
      //var formulario = document.getElementById('form');
      var formulario = document.querySelector('form');
      var botonEnviar = formulario.querySelector('button[type="submit"]');

      if (formulario && botonEnviar && formulario.hasAttribute('novalidate')) {
          botonEnviar.classList.remove('disabled');
          botonEnviar.classList.add('enabled');
          botonEnviar.disabled = false;
          var camposRequeridos = formulario.querySelectorAll('[required], input[type="checkbox"], select, textarea');
          camposRequeridos.forEach(function(campo) {
              if (campo.type === 'checkbox' || campo.tagName.toLowerCase() === 'select' || campo.tagName.toLowerCase() === 'textarea') {
                  campo.removeEventListener('change', habilitarBotonEnviar);
                  campo.removeEventListener('input', habilitarBotonEnviar);
              } else {
                  campo.removeEventListener('input', habilitarBotonEnviar);
              }

              var parent = campo.closest('.form-group');
              if (parent) {
                  var validFeedback = parent.querySelector('.valid-feedback');
                  var invalidFeedback = parent.querySelector('.invalid-feedback');
                  if (validFeedback) validFeedback.style.display = 'none';
                  if (invalidFeedback) invalidFeedback.style.display = 'none';
              }
          });
      } else {
          habilitarBotonEnviar(); // Ejecutar la validación inicial
          var camposRequeridos = formulario.querySelectorAll('[required], input[type="checkbox"], select, textarea');
          camposRequeridos.forEach(function(campo) {
              if (campo.type === 'checkbox' || campo.tagName.toLowerCase() === 'select' || campo.tagName.toLowerCase() === 'textarea') {
                  campo.addEventListener('change', habilitarBotonEnviar);
                  campo.addEventListener('input', habilitarBotonEnviar);
              } else {
                  campo.addEventListener('input', habilitarBotonEnviar);
              }
          });
      }
  }

  // Llamada inicial a la función desactivarValidacion al cargar el DOM
  desactivarValidacion();

});

// Función para habilitar el botón de enviar
function habilitarBotonEnviar() {
  var formulario = document.querySelector('form');
  var botonEnviar = document.querySelector('button[type="submit"]');
  
  // Verificar si el formulario y el botón de enviar están presentes
  if (!formulario || !botonEnviar) {
      console.warn('No se encontró el formulario o el botón de enviar en el DOM.');
      return;
  }
  
  // Verificar si el formulario tiene el atributo 'novalidate'
  if (formulario.hasAttribute('novalidate')) {
      botonEnviar.classList.remove('disabled');
      botonEnviar.classList.add('enabled');
      botonEnviar.disabled = false;
      return;
  }

  // Obtener todos los campos visibles y disponibles
  var camposVisibles = document.querySelectorAll('input:not([type="hidden"]), select:not([type="hidden"]), textarea:not([type="hidden"]), [required]:not([type="hidden"])');      
  var todosLlenos = true;
  camposVisibles.forEach(function(campo) {
      // Validación específica para cada tipo de campo
      if (campo.tagName.toLowerCase() === 'textarea') {
          if (campo.value.trim().length < 20) {
              todosLlenos = false;
          }
      } else if (campo.type === 'checkbox') {
          if (!campo.checked || campo.classList.contains('is-invalid')) {
              todosLlenos = false;
          }
      } else if (campo.type === 'radio') {
          var grupoRadio = document.querySelectorAll('input[type="radio"][name="' + campo.getAttribute('name') + '"]');
          var algunoSeleccionado = Array.from(grupoRadio).some(function(radio) {
              return radio.checked;
          });
          if (!algunoSeleccionado) {
              todosLlenos = false;
          }
      } else if (campo.tagName.toLowerCase() === 'select') {
          if (campo.value.trim() === '' || campo.classList.contains('is-invalid')) {
              todosLlenos = false;
          }
      } else if (campo.type === 'number') {
          if (campo.value.trim() === '' || campo.classList.contains('is-invalid')) {
              todosLlenos = false;
          }
      } else if (campo.type === 'file') {
          var isValidFile = campo.files.length > 0;
          if (!isValidFile || campo.classList.contains('is-invalid')) {
              todosLlenos = false;
          }
      } else {
          if (campo.value.trim() === '' || campo.classList.contains('is-invalid')) {
              todosLlenos = false;
          }
      }
  });

  // Habilitar o deshabilitar el botón de enviar según la validación
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

// Función HABILITAR BOTON ENVIAR
document.addEventListener('DOMContentLoaded', function() {
  // Adjuntar evento de cambio a todos los campos requeridos
  document.querySelectorAll('[required], input[type="checkbox"], select, textarea, input[type="file"]').forEach(function(campo) {
      campo.addEventListener('input', habilitarBotonEnviar);
      campo.addEventListener('change', habilitarBotonEnviar);
  });

  habilitarBotonEnviar(); // Ejecutar una vez para verificar el estado inicial
});
















