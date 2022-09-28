const MOVIES_JAP = "https://japceibal.github.io/japflix_api/movies-data.json";
const busq = document.querySelector('#inputBuscar');
const btn = document.querySelector('#btnBuscar');
const lista = document.querySelector('#lista')

const getData =async(datos)=>{
    let response = await fetch(datos);
    let data = await response.json();
    return data;
}

const search =()=>{
    let texto = busq.value.toLowerCase();
    return texto;
}

const getHTML =(e)=>{
    let get = `
        <li class="list-group-item mt-3">
          <h2>${e.title}</h2>
          <p>${e.tagline}</p>
          <span>${star(e)}</span>
        </li>
    `
    return get;
}

const star=(e)=>{
    let numStar = Math.floor(e.vote_average);
    let mod = e.vote_average % numStar;
    let star =``;

    for(let i = 1; i<=numStar;i++){
        star += `<i class="fa fa-star checked"></i>`
    }
    if(mod!=0){star += `<i class="bi bi-star-half"></i>`}
    return star;
}

const insertDATA=(e)=>{
    let data = ``
    e.forEach(a => {
        data += getHTML(a);
    });
    lista.innerHTML = data;
}

document.addEventListener('DOMContentLoaded', async()=>{
    const pelis = await getData(MOVIES_JAP);
    console.log(pelis);
    //titulo genero tagline overview

    btn.addEventListener('click',()=>{

        let busPelis = pelis.filter(e =>{
            return  e.title.toLowerCase() == search() ||
                    e.tagline.toLowerCase().includes(search()) ||
                    e.overview.toLowerCase().includes(search()) ||
                    e.genres.map(f=>f.name.toLowerCase()).includes(search());      
        })

        insertDATA(busPelis);
    })
    //titulo tagline votos
})