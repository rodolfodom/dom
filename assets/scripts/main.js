import hamburguerMenuActive from "./modules/burgerMenu.js";
import { activarReloj, alarma } from "./modules/relojAl.js";
import {shortCuts, moveBall} from "./modules/keyboardEvents.js";
import { coundown } from "./modules/countdown.js";
import { btnUp } from "./modules/buttonUp.js";
import { darkMode } from "./modules/darkMode.js";
import { ModeStorage, setValStorage } from "./modules/storage.js";
import { embedResp } from "./modules/resposive.js";
import { tester } from "./modules/responsiveTester.js";
import { userAgt } from "./modules/userAgent.js";
import { red } from "./modules/red.js";


const d = document,
w = window,
fechaL = new Date(2020, 11, 5, 20, 11, 0),
desktopVideo = '<iframe width="650" height="315" src="https://www.youtube.com/embed/PdBemFos7QM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
mobileVideo = '<a href = "https://www.youtube.com/watch?v=PdBemFos7QM">Ver vídeo </a>',
desktopMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30108.844035633563!2d-99.11186453935711!3d19.386226992843582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1607269225499!5m2!1ses!2smx" width="650" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
mobileMap = '<a href = "https://www.youtube.com/watch?v=PdBemFos7QM">Ver mapa</a>';

d.addEventListener("DOMContentLoaded", (e)=>{;
    setValStorage(".darkBtn");
    hamburguerMenuActive(".hamburger", ".menu", "is-active", ".menu a");
    activarReloj("#activarR", "#desactivarR", "#reloj");
    alarma("#activarA", "#desactivarA", "#alarma");
    coundown(fechaL, "#countdown", "Es hoy, es hoy");
    btnUp(".upBtn");
    darkMode(".darkBtn");
    ModeStorage(".darkBtn");
    embedResp("youtube", "(min-width: 960px)", desktopVideo, mobileVideo);  
    embedResp("gmap", "(min-width: 960px)", desktopMap, mobileMap);
    tester("testerForm");
    userAgt("UserAgent");
    red("#conection");
});

d.addEventListener("keydown", (e)=>{
    shortCuts(e);
    moveBall(e, "#bolita", ".tablero"); 
});






/*
******* mo respiuesta respnsive*******

w.addEventListener("load", () => {
    videosRespLoad("#embebido");
});

w.addEventListener("resize", () => {
    videosRespLoad("#embebido");
});
*/
