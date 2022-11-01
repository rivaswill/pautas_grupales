// Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
(function () {
    'use strict'
  
    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')
  
    // Bucle sobre ellos y evitar el envío
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            validarContrasena()
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()  


const btnTerm = document.getElementById("btn_terminos");
const check = document.getElementById("terminos"); 
const btnRegistrar = document.getElementById("registrar"); 
const termyserv = document.querySelector(".tys"); 


if (!check.checked) {
    btnRegistrar.addEventListener("click",() => { 
       if (btnTerm.className.indexOf("invalido") < 0) {
   btnTerm.classList.toggle("invalido")
   termyserv.classList.toggle("tys")
}
  }) }


// funcion para chequear y validar contraseña. 
const contrasena2 = document.getElementById("password2");
const contrasena1 = document.getElementById("password1");
  function validarContrasena() {
    if (contrasena2.value === contrasena1.value && contrasena1.checkValidity()) {
      contrasena2.setCustomValidity("");
    } else {
      contrasena2.setCustomValidity('Debe ser igual a "contraseña"');
    }
    contrasena2.reportValidity();
  }

contrasena2.addEventListener('input', validarContrasena);