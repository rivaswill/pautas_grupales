const opes = document.querySelectorAll('.oper');
const pantalla = document.querySelector('.result');
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');

let x;
let ope;

const getBtn=(e)=>{
    pantalla.innerText += e.innerText
}
const getOpes=(e)=>{
    ope=e.classList[2]
    x=parseFloat(pantalla.innerText)
    item2.innerText = pantalla.innerText
    pantalla.innerText = '' 
    switch (ope) {
        case "mas":
          item1.innerText = '+'
          break;
        case "menos":
            item1.innerText = '-'
          break;
        case "mult":
            item1.innerText = 'x'
          break;
        case "div":
            item1.innerText = '/'
          break;
      }
}
const igual=()=>{
    switch (ope) {
        case "mas":
          x += parseFloat(pantalla.innerText)
          break;
        case "menos":
            x -= parseFloat(pantalla.innerText)
          break;
        case "mult":
            x *= parseFloat(pantalla.innerText)
          break;
        case "div":
            x /= parseFloat(pantalla.innerText)
          break;
      }
    pantalla.innerText = x.toFixed(5)
    item2.innerText = ''
    item1.innerText = ''
    ope = ''
}
const borrar=()=>{
   pantalla.innerText = '' 
}