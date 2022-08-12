function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const inputs =document.querySelectorAll('input');
const terminos = document.getElementById('terminos');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const boton = document.getElementById('regBtn');

boton.addEventListener('click', ()=>{
    let vacio = false;
    let psswd_length = password1.value.length < 6;
    let psswd_equal = password1 != password2;
    let check = terminos.checked == false;
    inputs.forEach((input) =>{
        if (input.value == ''){
            vacio=true;
        }
    })
    if(vacio,psswd_length,psswd_equal,check){
        showAlertError()
    }else{
        showAlertSuccess()
    }
})