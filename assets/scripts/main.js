import hamburguerMenuActive from "./modules/burgerMenu.js";
import { activarReloj, alarma } from "./modules/relojAl.js";
import {shortCuts, moveBall} from "./modules/keyboardEvents.js";
const d = document;


d.addEventListener("DOMContentLoaded", (e)=>{
    hamburguerMenuActive(".hamburger", ".menu", "is-active", ".menu a");
    activarReloj("#activarR", "#desactivarR", "#reloj");
    alarma("#activarA", "#desactivarA", "#alarma");
});



d.addEventListener("keydown", (e)=>{
    shortCuts(e);
    moveBall(e, "#bolita", ".tablero");
});

