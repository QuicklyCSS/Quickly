function validarTexto(input){var textoRegex=/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{3,}$/;var isValid=textoRegex.test(input.value.trim());var parent=input.parentElement;var validFeedback=parent.querySelector('.valid-feedback');var invalidFeedback=parent.querySelector('.invalid-feedback');if(input.value.trim()===''){input.classList.remove('is-valid','is-invalid');validFeedback.style.display='none';invalidFeedback.style.display='none'}else if(isValid){input.classList.remove('is-invalid');input.classList.add('is-valid');validFeedback.style.display='block';invalidFeedback.style.display='none'}else{input.classList.remove('is-valid');input.classList.add('is-invalid');validFeedback.style.display='none';invalidFeedback.style.display='block'}}
function validarEmail(input){var emailRegex=/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,}$/;var isValid=emailRegex.test(input.value.trim());var parent=input.parentElement;var validFeedback=parent.querySelector('.valid-feedback');var invalidFeedback=parent.querySelector('.invalid-feedback');if(input.value.trim()===''){input.classList.remove('is-valid','is-invalid');validFeedback.style.display='none';invalidFeedback.style.display='none'}else if(isValid){input.classList.remove('is-invalid');input.classList.add('is-valid');validFeedback.style.display='block';invalidFeedback.style.display='none'}else{input.classList.remove('is-valid');input.classList.add('is-invalid');validFeedback.style.display='none';invalidFeedback.style.display='block'}}
function validarTelefono(input){var telefonoRegex=/^\d{8,}$/;var isValid=telefonoRegex.test(input.value.trim());var parent=input.parentElement;var validFeedback=parent.querySelector('.valid-feedback');var invalidFeedback=parent.querySelector('.invalid-feedback');if(input.value.trim()===''){input.classList.remove('is-valid','is-invalid');validFeedback.style.display='none';invalidFeedback.style.display='none'}else if(isValid){input.classList.remove('is-invalid');input.classList.add('is-valid');validFeedback.style.display='block';invalidFeedback.style.display='none'}else{input.classList.remove('is-valid');input.classList.add('is-invalid');validFeedback.style.display='none';invalidFeedback.style.display='block'}}
function validarSelect(select){var isValid=select.checkValidity();var parent=select.parentElement;var validFeedback=parent.querySelector('.valid-feedback');var invalidFeedback=parent.querySelector('.invalid-feedback');var selectedOption=select.options[select.selectedIndex];if(selectedOption.value===''){select.classList.remove('is-valid','is-invalid');validFeedback.style.display='none';invalidFeedback.style.display='none'}else if(isValid){select.classList.remove('is-invalid');select.classList.add('is-valid');validFeedback.style.display='block';invalidFeedback.style.display='none'}else{select.classList.remove('is-valid');select.classList.add('is-invalid');validFeedback.style.display='none';invalidFeedback.style.display='block'}}
function validarTextArea(textarea){var textareaValue=textarea.value.trim();var isValid=textareaValue.length>=20;var parent=textarea.parentElement;var validFeedback=parent.querySelector('.valid-feedback');var invalidFeedback=parent.querySelector('.invalid-feedback');if(textareaValue===''){textarea.classList.remove('is-valid','is-invalid');validFeedback.style.display='none';invalidFeedback.style.display='none'}else if(isValid){textarea.classList.remove('is-invalid');textarea.classList.add('is-valid');validFeedback.style.display='block';invalidFeedback.style.display='none'}else{textarea.classList.remove('is-valid');textarea.classList.add('is-invalid');validFeedback.style.display='none';invalidFeedback.style.display='block'}}
document.querySelectorAll('input[type="checkbox"]').forEach(function(input){function validarCheckbox(input,parent){var validFeedback=parent.querySelector('.valid-feedback');var invalidFeedback=parent.querySelector('.invalid-feedback');var fieldset=parent.querySelector('fieldset');if(input.type==='checkbox'){if(input.required&&!input.checked){input.classList.add('is-invalid');input.classList.remove('is-valid');if(validFeedback)validFeedback.style.display='none';if(invalidFeedback)invalidFeedback.style.display='block';if(fieldset)fieldset.classList.remove('is-valid');if(invalidFeedback&&fieldset)fieldset.classList.add('is-invalid');}else{input.classList.remove('is-invalid');input.classList.add('is-valid');if(validFeedback)validFeedback.style.display='block';if(invalidFeedback)invalidFeedback.style.display='none';if(input.required&&fieldset)fieldset.classList.add('is-valid');if(invalidFeedback&&fieldset)fieldset.classList.remove('is-invalid');}}
if(input.type==='checkbox'&&!input.required){if(validFeedback)validFeedback.style.display='none';if(invalidFeedback)invalidFeedback.style.display='none'}}
input.addEventListener('change',function(){var parent=this.closest('.form-group');validarCheckbox(this,parent)})});document.querySelectorAll('input[type="radio"]').forEach(function(input){function validarRadio(input,parent){var validFeedback=parent.querySelector('.valid-feedback');var invalidFeedback=parent.querySelector('.invalid-feedback');var fieldset=parent.querySelector('fieldset');if(input.type==='radio'&&input.hasAttribute('required')){var grupoRadio=parent.querySelectorAll('input[type="radio"][name="'+input.getAttribute('name')+'"]');var isChecked=!1;grupoRadio.forEach(function(radio){if(radio.checked){isChecked=!0}});if(isChecked){grupoRadio.forEach(function(radio){radio.classList.remove('is-invalid');radio.classList.add('is-valid')});if(validFeedback)validFeedback.style.display='block';if(invalidFeedback)invalidFeedback.style.display='none';if(fieldset)fieldset.classList.add('is-valid');if(invalidFeedback&&fieldset)fieldset.classList.remove('is-invalid');}else{grupoRadio.forEach(function(radio){radio.classList.remove('is-valid');radio.classList.add('is-invalid')});if(validFeedback)validFeedback.style.display='none';if(invalidFeedback)invalidFeedback.style.display='block';if(fieldset)fieldset.classList.remove('is-valid');if(invalidFeedback&&fieldset)fieldset.classList.add('is-invalid');}}else{if(validFeedback)validFeedback.style.display='none';if(invalidFeedback)invalidFeedback.style.display='none'}}
input.addEventListener('change',function(){var parent=this.closest('.form-group');validarRadio(this,parent)})});function validarNumero(input){var numberRegex=/^-?\d+(\.\d+)?$/;var isValid=numberRegex.test(input.value.trim());var parent=input.parentElement;var validFeedback=parent.querySelector('.valid-feedback');var invalidFeedback=parent.querySelector('.invalid-feedback');if(input.value.trim()===''){input.classList.remove('is-valid');input.classList.add('is-invalid');if(validFeedback)validFeedback.style.display='none';if(invalidFeedback)invalidFeedback.style.display='block'}else if(isValid){input.classList.remove('is-invalid');input.classList.add('is-valid');if(validFeedback)validFeedback.style.display='block';if(invalidFeedback)invalidFeedback.style.display='none'}else{input.classList.remove('is-valid');input.classList.add('is-invalid');if(validFeedback)validFeedback.style.display='none';if(invalidFeedback)invalidFeedback.style.display='block'}}
function validarFecha(input){var isValid=!isNaN(Date.parse(input.value));var parent=input.parentElement;var validFeedback=parent.querySelector('.valid-feedback');var invalidFeedback=parent.querySelector('.invalid-feedback');if(input.value.trim()===''){input.classList.remove('is-valid');input.classList.add('is-invalid');validFeedback.style.display='none';invalidFeedback.style.display='block'}else if(isValid){input.classList.remove('is-invalid');input.classList.add('is-valid');validFeedback.style.display='block';invalidFeedback.style.display='none'}else{input.classList.remove('is-valid');input.classList.add('is-invalid');validFeedback.style.display='none';invalidFeedback.style.display='block'}}
document.addEventListener('DOMContentLoaded',function(){var fileInput=document.getElementById('fileInput');if(fileInput){fileInput.addEventListener('change',function(){validarArchivo(this)})}else{console.warn('El elemento fileInput no está presente en el DOM.')}
function validarArchivo(input){if(!input){console.warn('El input pasado a validarArchivo es nulo o indefinido.');return}
var isValidFile=input.files.length>0;var formGroup=input.closest('.form-group');var fieldset=input.closest('fieldset');var validFeedback=formGroup.querySelector('.valid-feedback');var invalidFeedback=formGroup.querySelector('.invalid-feedback');if(!fieldset){console.warn('El elemento fieldset no está presente en el DOM.');return}
if(!isValidFile){fieldset.classList.remove('is-valid');fieldset.classList.add('is-invalid');if(validFeedback)validFeedback.style.display='none';if(invalidFeedback)invalidFeedback.style.display='block'}else{fieldset.classList.remove('is-invalid');fieldset.classList.add('is-valid');if(validFeedback)validFeedback.style.display='block';if(invalidFeedback)invalidFeedback.style.display='none'}}});var camposRequeridos=document.querySelectorAll('[required]');camposRequeridos.forEach(function(campo){var tipoCampo=campo.tagName.toLowerCase();switch(tipoCampo){case 'input':var inputType=campo.getAttribute('type');switch(inputType){case 'text':campo.addEventListener('input',function(){validarTexto(this)});break;case 'tel':campo.addEventListener('input',function(){validarTelefono(this)});break;case 'email':campo.addEventListener('input',function(){validarEmail(this)});break;case 'radio':campo.addEventListener('input',function(){validarRadio(this)});break;case 'checkbox':campo.addEventListener('input',function(){validarCheckbox(this)});break;case 'number':campo.addEventListener('input',function(){validarNumero(this)});break;case 'date':campo.addEventListener('input',function(){validarFecha(this)});break;case 'file':campo.addEventListener('change',function(){validarArchivo(this)});break}
break;case 'select':campo.addEventListener('change',function(){validarSelect(this)});break;case 'textarea':campo.addEventListener('input',function(){validarTextArea(this)});break}});function resetearValidacionFormulario(){var formulario=document.querySelector('form');var validFeedbacks=formulario.querySelectorAll('.valid-feedback');var invalidFeedbacks=formulario.querySelectorAll('.invalid-feedback');var campos=formulario.querySelectorAll('.form-control');function resetearClasesNumber(){var inputsNumber=document.querySelectorAll('input[type="number"]');inputsNumber.forEach(function(input){input.classList.remove('is-valid','is-invalid')})}
validFeedbacks.forEach(function(element){element.style.display='none'});invalidFeedbacks.forEach(function(element){element.style.display='none'});campos.forEach(function(campo){campo.classList.remove('is-valid','is-invalid')});var fieldsets=formulario.querySelectorAll('fieldset');fieldsets.forEach(function(fieldset){fieldset.classList.remove('is-valid','is-invalid')});var botonEnviar=document.querySelector('button[type="submit"]');if(botonEnviar){botonEnviar.classList.remove('enabled');botonEnviar.classList.add('disabled');botonEnviar.disabled=!0}
resetearClasesNumber()}
document.addEventListener('DOMContentLoaded',function(){const resetButton=document.querySelector('button[type="reset"]');const form=document.querySelector('form');if(resetButton&&form){resetButton.addEventListener('click',function(event){event.preventDefault();form.reset();resetearValidacionFormulario()})}else{console.warn('No se encontró el botón de tipo "reset" o el formulario en el DOM.')}
function desactivarValidacion(){var formulario=document.querySelector('form');var botonEnviar=formulario.querySelector('button[type="submit"]');if(formulario&&botonEnviar&&formulario.hasAttribute('novalidate')){botonEnviar.classList.remove('disabled');botonEnviar.classList.add('enabled');botonEnviar.disabled=!1;var camposRequeridos=formulario.querySelectorAll('[required], input[type="checkbox"], select, textarea');camposRequeridos.forEach(function(campo){if(campo.type==='checkbox'||campo.tagName.toLowerCase()==='select'||campo.tagName.toLowerCase()==='textarea'){campo.removeEventListener('change',habilitarBotonEnviar);campo.removeEventListener('input',habilitarBotonEnviar)}else{campo.removeEventListener('input',habilitarBotonEnviar)}
var parent=campo.closest('.form-group');if(parent){var validFeedback=parent.querySelector('.valid-feedback');var invalidFeedback=parent.querySelector('.invalid-feedback');if(validFeedback)validFeedback.style.display='none';if(invalidFeedback)invalidFeedback.style.display='none'}})}else{habilitarBotonEnviar();var camposRequeridos=formulario.querySelectorAll('[required], input[type="checkbox"], select, textarea');camposRequeridos.forEach(function(campo){if(campo.type==='checkbox'||campo.tagName.toLowerCase()==='select'||campo.tagName.toLowerCase()==='textarea'){campo.addEventListener('change',habilitarBotonEnviar);campo.addEventListener('input',habilitarBotonEnviar)}else{campo.addEventListener('input',habilitarBotonEnviar)}})}}
desactivarValidacion()});function habilitarBotonEnviar(){var formulario=document.querySelector('form');var botonEnviar=document.querySelector('button[type="submit"]');if(!formulario||!botonEnviar){console.warn('No se encontró el formulario o el botón de enviar en el DOM.');return}
if(formulario.hasAttribute('novalidate')){botonEnviar.classList.remove('disabled');botonEnviar.classList.add('enabled');botonEnviar.disabled=!1;return}
var camposVisibles=document.querySelectorAll('input:not([type="hidden"]), select:not([type="hidden"]), textarea:not([type="hidden"]), [required]:not([type="hidden"])');var todosLlenos=!0;camposVisibles.forEach(function(campo){if(campo.tagName.toLowerCase()==='textarea'){if(campo.value.trim().length<20){todosLlenos=!1}}else if(campo.type==='checkbox'){if(!campo.checked||campo.classList.contains('is-invalid')){todosLlenos=!1}}else if(campo.type==='radio'){var grupoRadio=document.querySelectorAll('input[type="radio"][name="'+campo.getAttribute('name')+'"]');var algunoSeleccionado=Array.from(grupoRadio).some(function(radio){return radio.checked});if(!algunoSeleccionado){todosLlenos=!1}}else if(campo.tagName.toLowerCase()==='select'){if(campo.value.trim()===''||campo.classList.contains('is-invalid')){todosLlenos=!1}}else if(campo.type==='number'){if(campo.value.trim()===''||campo.classList.contains('is-invalid')){todosLlenos=!1}}else if(campo.type==='file'){var isValidFile=campo.files.length>0;if(!isValidFile||campo.classList.contains('is-invalid')){todosLlenos=!1}}else{if(campo.value.trim()===''||campo.classList.contains('is-invalid')){todosLlenos=!1}}});if(todosLlenos){botonEnviar.classList.remove('disabled');botonEnviar.classList.add('enabled');botonEnviar.disabled=!1}else{botonEnviar.classList.remove('enabled');botonEnviar.classList.add('disabled');botonEnviar.disabled=!0}}
document.addEventListener('DOMContentLoaded',function(){document.querySelectorAll('[required], input[type="checkbox"], select, textarea, input[type="file"]').forEach(function(campo){campo.addEventListener('input',habilitarBotonEnviar);campo.addEventListener('change',habilitarBotonEnviar)});habilitarBotonEnviar()})