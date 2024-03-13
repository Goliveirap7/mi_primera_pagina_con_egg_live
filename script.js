//console.warn("Hola este es mi Javascript")

//let nombre = "Giovanni";
//nombre = "Giovanni";

//var nombre1 ="Giovanni";

//const nombre2 ="Giovanni";
//nombre2 = "Giovanni";

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

let nombre = "Goku";
let ciudad = "Planeto Veggito";
let gusto = "celulares";

let parrafo = document.querySelector(".parrafo-2");

function nombredelafuncion() {

};

function cambiarTexto(nombre, ciudad, gusto) {
    let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Lima. Me gustan los ${gusto} y escuchar música. Me encantará aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`

    return contenido;
}

parrafo.innerText = cambiarTexto(nombre, ciudad, gusto)

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};
