const SEARCH_TEXT = document.querySelector('#inputBuscar');
const SEARCH_BUTTON = document.querySelector('#btnBuscar');
const CNT = document.querySelector('#contenedor');

async function getData(datos){
    let response = await fetch(datos);
    let data = await response.json();
    return data;
    }

    insertHTML=(datos)=>{
        let html = ''
        
        datos.forEach((e,i) => {
            if (e.links !== undefined && e.data[0].description_508 !== undefined){

                html += `
                <div class="card col-6" style="width: 18rem;">
                    <h5 class="card-title">${e.data[0].title}</h5>
                    <img class="card-img-top" src="${e.links[0].href}" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">${e.data[0].description_508}</p>
                    </div>
                </div>
                    `
            }

        });
        
        CNT.innerHTML = html;
    }

    const SEARCHING=( )=>{
        let txt = SEARCH_TEXT.value.toLowerCase();
        return txt;
    }

document.addEventListener('DOMContentLoaded', async function(){
    
    SEARCH_BUTTON.addEventListener('click',async function(){
        let SEARCH_VALUE = SEARCHING()
        const link = `https://images-api.nasa.gov/search?q=${SEARCH_VALUE}`;
        const datos = await getData(link);
        insertHTML(datos.collection.items);
    })
})