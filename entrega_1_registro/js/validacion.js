const success = document.getElementById("alert-success");
const danger = document.getElementById("alert-danger");
const success_btn = document.querySelector("#alert-success>.btn-close");
const danger_btn = document.querySelector("#alert-danger>.btn-close");

function showAlertSuccess() {
    success.classList.add("show");
};
function showAlertError() {
    danger.classList.add("show");
};

danger_btn.addEventListener('click',()=>{
    danger.classList.remove("show");
});
success_btn.addEventListener('click',()=>{
    success.classList.remove("show");
});


const inputs =document.querySelectorAll('.form-control');
const terminos = document.getElementById('terminos');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const boton = document.getElementById('regBtn');

boton.addEventListener('click', ()=>{
    let vacio = false;
    let psswd_length = password1.value.length < 6;
    let psswd_equal = password1.value != password2.value;
    let check = terminos.checked == false;
    inputs.forEach((input) =>{
        if (input.value == ''){
            vacio=true;
        }
    })
    if(vacio||psswd_length||psswd_equal||check){
        showAlertError();
    }else{
        showAlertSuccess();
    }
})

