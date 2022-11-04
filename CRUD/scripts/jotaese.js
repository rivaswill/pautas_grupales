const solicitud = ({ nombre, apellido, metodo, id }) => {
  let datos = {
    name: nombre,
    lastname: apellido,
  };
  return fetch("https://6361aa89af66cc87dc2ff8b7.mockapi.io/user/" + id, {
    method: metodo,
    body: metodo != "GET" ? JSON.stringify(datos) : null,
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => (response.ok ? response.json() : showAlertError())) // convertir a json
    .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores
};

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
  hiddeAlertError();
}

function hiddeAlertError() {
  setTimeout(
    () => document.getElementById("alert-danger").classList.remove("show"),
    3000
  );
}

//get one user -> url:id -> solicitud({metodo:'GET',id:''})
//insert user -> metodo:'POST' -> solicitud({metodo:'POST',id:'',nombre:'',apellido:''})
//modify user -> metodo:'PUT' + url:id -> solicitud({metodo:'PUT',id:'',nombre:'',apellido:''})
//delete user -> metodo:'DELETE' + url:id -> solicitud({metodo:'DELETE',id:''})

const inputGetId = document.querySelector("#inputGet1Id");
const btnGet = document.querySelector("#btnGet1");
const inputPostNombre = document.querySelector("#inputPostNombre");
const inputPostApellido = document.querySelector("#inputPostApellido");
const btnPost = document.querySelector("#btnPost");
const inputPutId = document.querySelector("#inputPutId");
const btnPut = document.querySelector("#btnPut");
const btnSend = document.querySelector("#btnSendChanges");
const inputPutNombre = document.querySelector("#inputPutNombre");
const inputPutApellido = document.querySelector("#inputPutApellido");
const inputDelete = document.querySelector("#inputDelete");
const btnDelete = document.querySelector("#btnDelete");
const results = document.querySelector("#results");

const insertHTML = (dt) => {
  let datos = `
  <li>
      <span>ID</span>
      <span>Nombre</span>
      <span>Apellido</span>
  </li>
  `;
  Array.isArray(dt) //operador ternario: verifica si el dato que ingresa es un array o un objeto
    ? dt.forEach(({ name, lastname, id }) => {
        datos += `
        <li>
          <span>${id}</span>
          <span>${name}</span>
          <span>${lastname}</span>
        </li>`;
      })
    : (datos += `
        <li>
          <span>${dt.id}</span>
          <span>${dt.name}</span>
          <span>${dt.lastname}</span>
        </li>`);

  results.innerHTML = datos;
};

const getHTML = async (metodo, inp) => {
  let info;
  let datos = "";
  switch (inp) {
    case btnGet:
      const valueInputGetId = inputGetId.value;
      info = await solicitud({ metodo: metodo, id: valueInputGetId });
      datos = insertHTML(info);
      break;
    case btnPost:
      const name = inputPostNombre.value;
      const lName = inputPostApellido.value;
      await solicitud({
        metodo: "POST",
        id: "",
        nombre: name,
        apellido: lName,
      });
      info = await solicitud({ metodo: "GET", id: "" });
      datos = insertHTML(info);
      break;
    case btnPut:
      const valueInputPutId = inputPutId.value;
      const put = await solicitud({ metodo: "GET", id: valueInputPutId });
      console.log(put);
      if (put) {
        inputPutNombre.value = put.name;
        inputPutApellido.value = put.lastname;
        btnSend.removeAttribute("disabled");
        myModal.toggle();
      }
      break;
    case btnDelete:
      const valueInputDelete = inputDelete.value;
      await solicitud({
        metodo: "DELETE",
        id: valueInputDelete,
      });
      info = await solicitud({ metodo: "GET", id: "" });
      datos = insertHTML(info);
      break;
  }
};

inputPostApellido.addEventListener("input", () => {
  if (inputPostApellido.value && inputPostNombre.value) {
    btnPost.removeAttribute("disabled");
  } else {
    btnPost.setAttribute("disabled", "");
  }
});
inputPostNombre.addEventListener("input", () => {
  if (inputPostApellido.value && inputPostNombre.value) {
    btnPost.removeAttribute("disabled");
  } else {
    btnPost.setAttribute("disabled", "");
  }
});
inputPutId.addEventListener("input", () => {
  if (inputPutId.value) {
    btnPut.removeAttribute("disabled");
  } else {
    btnPut.setAttribute("disabled", "");
  }
});
inputDelete.addEventListener("input", () => {
  if (inputDelete.value) {
    btnDelete.removeAttribute("disabled");
  } else {
    btnDelete.setAttribute("disabled", "");
  }
});
inputPutApellido.addEventListener("input", () => {
  if (inputPutApellido.value && inputPutNombre.value) {
    btnSend.removeAttribute("disabled");
  } else {
    btnSend.setAttribute("disabled", "");
  }
});
inputPutNombre.addEventListener("input", () => {
  if (inputPutApellido.value && inputPutNombre.value) {
    btnSend.removeAttribute("disabled");
  } else {
    btnSend.setAttribute("disabled", "");
  }
});
btnSend.addEventListener("click", async () => {
  myModal.toggle();
  await solicitud({
    metodo: "PUT",
    id: inputPutId.value,
    nombre: inputPutNombre.value,
    apellido: inputPutApellido.value,
  });
  let info = await solicitud({ metodo: "GET", id: "" });
  insertHTML(info);
});

var myModal = new bootstrap.Modal(document.getElementById("dataModal"), {
  keyboard: false,
});
