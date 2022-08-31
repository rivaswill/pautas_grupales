const itm = document.querySelector("#item");
const agg = document.querySelector("#agregar");
const cnt = document.querySelector("#contenedor");
const cln = document.querySelector("#limpiar");
let   lst = [];

const lcl = () => {
    lst.push(itm.value);
    localStorage.setItem("list", JSON.stringify(lst));
};
const print =()=>{
    let txt ='';
    lst = JSON.parse(localStorage.getItem('list'))
    if(lst!=''){
        lst.forEach(e=>{
            txt += `<li>${e}</li>`
        })
    }
    cnt.innerHTML = txt;

}

agg.addEventListener("click", () => {
    lcl(); itm.value=''; print();
});
cln.addEventListener("click", () => {
    lst=[]; lcl(); print();
});
