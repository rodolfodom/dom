import hamburguerMenuActive from "./modules/burgerMenu.js";
import { activarReloj, alarma } from "./modules/relojAl.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburguerMenuActive(".hamburger", ".menu", "is-active", ".menu a");
    activarReloj("#activarR", "#desactivarR", "#reloj");
    alarma("#activarA", "#desactivarA", "#alarma");
});



