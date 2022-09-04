const titulo = document.querySelector('#titulo');
const descripcion = document.querySelector('#descript');
const agg = document.querySelector('#agregar');
const cnt = document.querySelector('#contenedor');
let listaTitulos =[];
let listaDescript =[];

var botonesEditar;
var botonesCompletar;
var botonesImportante;
var botonesEliminar;

insertarLS =()=>{
    listaDescript.push(descripcion.value);
    listaTitulos.push(titulo.value);

    let l_t = JSON.stringify(listaTitulos);
    let l_d = JSON.stringify(listaDescript);

    localStorage.setItem('titulo',l_t);
    localStorage.setItem('descripcion',l_d);
}

imprimirLS =()=>{
    let l_t = JSON.parse(localStorage.getItem('titulo'));
    let l_d = JSON.parse(localStorage.getItem('descripcion'));
    let contenido = '';
    l_t.forEach((e, i) => {
        contenido += `
        <div class="card cnt tareas">
        <div class="card-body">
            <div class="row justify-content-center">
                <div class="col-7">
                    <h2>${l_t[i]}</h2>
                    <p>${l_d[i]}</p>
                </div>
                <div class="col-1">
                    <ul class="list-group col-sm-0">
                      <li class="list-group-item btn editar${i}"><i class="bi bi-pencil-square"></i></li>
                      <li class="list-group-item btn completar${i}"><i class="bi bi-check-square"></i></li>
                      <li class="list-group-item btn importante${i}"><i class="bi bi-exclamation-square"></i></li>
                      <li class="list-group-item btn eliminar${i}"><i class="bi bi-x-square"></i></li>
                    </ul>
                </div>
            </div>
          <hr class="my-4">

        </div>
      </div>                    
        `
    });
    cnt.innerHTML = contenido;
}

// acá agrego los adeventlistener a todos los botones
const escuchadores =(a)=>{
    a.forEach((e,i) => {
        e.addEventListener('click', ()=>{
            console.log('hice click en boton ' + i)
        })
    });
}

//aca quiero hacer la funcion que cambie de color
const cambiarColor =()=>{

}

agg.addEventListener('click', ()=>{
    insertarLS();
    imprimirLS();


    //con esto selecciono todos los botones y les agrego los addeventListener
    botonesEditar = document.querySelectorAll('[class *= "editar"]');
    escuchadores(botonesEditar);

    botonesCompletar = document.querySelectorAll('[class *= "completar"]');
    escuchadores(botonesCompletar);

    botonesImportante = document.querySelectorAll('[class *= "importante"]');
    escuchadores(botonesImportante);

    botonesEliminar = document.querySelectorAll('[class *= "eliminar"]');
    escuchadores(botonesEliminar);
})

