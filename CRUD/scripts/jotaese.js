const solicitud = ({nombre,apellido,metodo,id}) => {

    let datos = {
        name: nombre,
        lastname: apellido
    }
    fetch("https://6361aa89af66cc87dc2ff8b7.mockapi.io/user/"+id, {
        method: metodo,
        body: metodo != 'GET' ? JSON.stringify(datos) : null,
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then((response) => response.json()) // convertir a json
      .then((json) => console.log(json)) //imprimir los datos en la consola
      .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores
  };

//get one user -> url:id -> solicitud({metodo:'GET',id:''})
//insert user -> metodo:'POST' -> solicitud({metodo:'POST',id:'',nombre:'Pepe',apellido:'Lopez'})
//modify user -> metodo:'PUT' + url:id -> solicitud({metodo:'PUT',id:''})
//delete user -> metodo:'DELETE' + url:id -> solicitud({metodo:'DELETE',id:''})
