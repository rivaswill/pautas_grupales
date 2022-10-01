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
    <li class="list-group-item mt-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
        <h2>${e.title}</h2>
        <p>${e.tagline}</p>
        <span>${star(e)}</span>
    </li>

    <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasTopLabel">${e.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <p>${e.overview}</p>
            <p>${e.genres.map(f=>f.name)}</p>
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              more...
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><button class="dropdown-item">Year: ${e.release_date.substring(0,4)}</button></li>
              <li><button class="dropdown-item">Runtime: ${e.runtime} mins</button></li>
              <li><button class="dropdown-item">Budget: $${e.budget}</button></li>
              <li><button class="dropdown-item">Revenues: $${e.revenue}</button></li>
            </ul>
          </div>
    </div>
    `
    return get;
}

const star=(e)=>{
    let numStar = Math.floor(e.vote_average);
    let mod = e.vote_average % numStar;
    let star =``;

    for(let i = 1; i<=numStar;i++){
        star += `<i class="bi bi-star-fill"></i>`
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

    btn.addEventListener('click',()=>{

        let busPelis = pelis.filter(e =>{
            return  e.title.toLowerCase() == search() ||
                    e.tagline.toLowerCase().includes(search()) ||
                    e.overview.toLowerCase().includes(search()) ||
                    e.genres.map(f=>f.name.toLowerCase()).includes(search());      
        })

        insertDATA(busPelis);
    })
    
})