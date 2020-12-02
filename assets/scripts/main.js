const $burguerMenu = document.querySelector("#burguerMenu"),
$menuDiv = document.querySelector(".menu");

function hamburguerMenu() {
    $menuDiv.classList.remove("animate__fadeOutLeft")
    $menuDiv.classList.add("animate__fadeInLeft")
    $burguerMenu.classList.add("is-active");
    $menuDiv.classList.remove("d-none")
}
function hamburguerMenuActive() {
    $burguerMenu.classList.remove("is-active");
    $menuDiv.classList.remove("animate__fadeInLeft");
    $menuDiv.classList.add("animate__fadeOutLeft")
    setTimeout(() => {
        $menuDiv.classList.add("d-none")    
    }, 1000);
    
}

document.addEventListener("click",(e) => {
    if((e.target.matches(".hamburger")) | (e.target.matches(".hamburger-box")) | (e.target.matches(".hamburger-inner"))){
        if(!$burguerMenu.matches(".is-active")){
            hamburguerMenu();
        }else{
            hamburguerMenuActive();
        }
    }
    if(e.target.matches(".secLink")){
        hamburguerMenuActive()
    }
    
});

const $menuList = document.querySelector(".menu ul");
const $fragmentListSec = document.createDocumentFragment();
let secciones = document.querySelectorAll(".seccion");



secciones.forEach((sec) => {
    let $newSec = document.createElement("li"),
    $enlace = document.createElement("a"),
    referencia = sec.textContent.replace(/\s/g, "_").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    $enlace.textContent = sec.textContent;
    sec.id = referencia; 
    $enlace.href =`#${referencia}`;
    $enlace.classList.add("secLink")                        
    $newSec.appendChild($enlace);
    $fragmentListSec.appendChild($newSec);
})
$menuList.appendChild($fragmentListSec);

