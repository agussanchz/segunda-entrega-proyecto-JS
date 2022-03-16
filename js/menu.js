
const boton = document.querySelector(".boton-menu");

const menu = document.querySelector(".menu");

const paginas = document.querySelector(".paginas");


const moverMenu = () => {
    menu.classList.toggle("hidden");
    paginas.classList.toggle("appear");
}
 

boton.addEventListener("click", moverMenu);
menu.addEventListener("click", moverMenu);