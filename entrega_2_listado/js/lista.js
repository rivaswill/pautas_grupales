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

    descripcion.value='';
    titulo.value ='';
}

imprimirLS =()=>{
    let l_t = JSON.parse(localStorage.getItem('titulo'));
    let l_d = JSON.parse(localStorage.getItem('descripcion'));
    let contenido = '';
    l_t.forEach((e, i) => {
        contenido += `
        <div class="card cnt tareas${i}">
        <div class="card-body">
            <div class="row justify-content-center">
                <div class="col-7">
                    <h2>${l_t[i]}</h2>
                    <p>${l_d[i]}</p>
                </div>
                <div class="col-1">
                    <ul class="list-group col-sm-0">
                      <li class="list-group-item btn editar" onclick="editar(${i})"><i class="bi bi-pencil-square"></i></li>
                      <li class="list-group-item btn completar" onclick="cambiarColor('completar',${i})"><i class="bi bi-check-square"></i></li>
                      <li class="list-group-item btn importante" onclick="cambiarColor('importante',${i})"><i class="bi bi-exclamation-square"></i></li>
                      <li class="list-group-item btn eliminar" onclick="eliminar(${i})"><i class="bi bi-x-square"></i></li>
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


//aca quiero hacer la funcion que cambie de color
const cambiarColor =(color,i)=>{
    if(color == 'completar'){
        document.querySelector(`.tareas${i}`).style.backgroundColor = 'lightgreen'
    }else if(color == 'importante'){
        document.querySelector(`.tareas${i}`).style.backgroundColor = 'lightyellow'
    }

}
//eliminar
const eliminar =(i)=>{
    listaTitulos = listaTitulos.filter((elem,ind)=>ind!=i);
    listaDescript = listaDescript.filter((elem,ind)=>ind!=i);
    
    let l_t = JSON.stringify(listaTitulos);
    let l_d = JSON.stringify(listaDescript);
    
    localStorage.setItem('titulo',l_t);
    localStorage.setItem('descripcion',l_d);
    
    imprimirLS();
}

agg.addEventListener('click', ()=>{
    insertarLS();
    imprimirLS();
})

