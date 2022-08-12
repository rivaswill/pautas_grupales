/* sprite name stats */

/* 
let jason = fetch(peticion_link)
	.then(response => {
		if(response.ok){
			var jason_data = response.json();
			console.log(jason_data);
		}
	});
*/
let contenedor = document.querySelector('.col>.row');

async function getData(){
    let response = await fetch('https://gist.githubusercontent.com/gabiito/b4fc1eea26154919d29d14f936a67428/raw/a990d9fa46336a5738a02a9f52051c0b9bfe47f2/pokedata.json');
    let data = await response.json();
    return data;
    }

document.addEventListener('DOMContentLoaded', async function(){
    let datos = await getData();
    datos.forEach(pokemon => {
        contenedor.innerHTML += printCard(pokemon)
    });
    // contenedor.innerHTML = printCard(datos[0])
    
})

printCard = (pokemon) =>{
    let card = `
    <div class="card" style="width: 18rem;">
              <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${pokemon.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">tipo:${pokemon.types[0].type.name} ${pokemon.types[1].type.name}</h6>
                `
    for (let index = 0; index < pokemon.stats.length; index++) {
        card += `<p class="card-text">${pokemon.stats[index].stat.name}:${pokemon.stats[index].base_stat}</p>`        
    }
    card+=`
    </div>
    </div>
    `
    return card;
}

//  consulta
// funcionasincrona().then().catch();

// await funcionasincrona();
// se recomienda el await
    
// async function getData(){
//     let respuesta = await fetch();
//}