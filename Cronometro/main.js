const MIN = document.getElementById("minutos");
const SEG = document.getElementById("segundos"); 
const INICIAR = document.getElementById("init");
const PAUSA = document.getElementById("pause");
const REINICIAR = document.getElementById("reset");

let segundos = 58;
let minutos = 0;

SEG.innerText = segundos;
MIN.innerText = minutos; 
let temporizador;
INICIAR.addEventListener("click", ()=> { 

    // setInterval recibe una funcion, tiempo y el tiempo va eb milisegundos 
    temporizador = setInterval(()=> { 
        if (segundos > 59){ 
            minutos ++ 
            segundos = 0
            MIN.innerText = minutos
            SEG.innerText = 0
        }
        SEG.innerText =  segundos++},1000)
}) 
PAUSA.addEventListener("click", ()=> { 
    clearTimeout(temporizador)
    })   
REINICIAR.addEventListener("click", ()=> { 
    segundos = 0
    minutos = 0
    SEG.innerText = segundos
    MIN.innerText = minutos
    
    temporizador = setInterval(()=> SEG.innerText =  segundos++,1000)
}) 
       