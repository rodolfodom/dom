import hamburguerMenuActive from "./modules/burgerMenu.js";
import { activarReloj, alarma } from "./modules/relojAl.js";
import {shortCuts, moveBall} from "./modules/keyboardEvents.js";
import { coundown } from "./modules/countdown.js";
import { btnUp } from "./modules/buttonUp.js";
import { darkMode } from "./modules/darkMode.js";
import { ModeStorage, setValStorage } from "./modules/storage.js";


const d = document,
fechaL = new Date(2020, 11, 5, 20, 11, 0);


d.addEventListener("DOMContentLoaded", (e)=>{;
    setValStorage(".darkBtn");
    hamburguerMenuActive(".hamburger", ".menu", "is-active", ".menu a");
    activarReloj("#activarR", "#desactivarR", "#reloj");
    alarma("#activarA", "#desactivarA", "#alarma");
    coundown(fechaL, "#countdown", "Es hoy, es hoy");
    btnUp(".upBtn");
    darkMode(".darkBtn");
    ModeStorage(".darkBtn");  
});

d.addEventListener("keydown", (e)=>{
    shortCuts(e);
    moveBall(e, "#bolita", ".tablero"); 
});

