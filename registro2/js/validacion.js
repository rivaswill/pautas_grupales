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

// btnRegistrar.addEventListener("click",() => { 
//     if (! check.checked) {
//        termyserv.classList.toggle("tys")
//         btnTerm.classList.toggle("invalido")
//     }
// })

// // Si btnTerm tiene la clase invalido, al darle click al check se elimina esa clase 

// check.addEventListener("click",() => { 
//     if (btnTerm.className.indexOf("invalido") >= 0) {
//         btnTerm.classList.toggle("invalido") 
//         termyserv.classList.toggle("tys") 
//     }
// })

if (!check.checked) {
    btnRegistrar.addEventListener("click",() => { 
       if (btnTerm.className.indexOf("invalido") < 0) {
   btnTerm.classList.toggle("invalido")
   termyserv.classList.toggle("tys")
}
)