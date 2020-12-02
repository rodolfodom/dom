import hamburguerMenuActive from "./modules/burgerMenu.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburguerMenuActive(".hamburger", ".menu", "is-active", ".menu a");
})



