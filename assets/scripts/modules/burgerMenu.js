export default function hamburguerMenuActive(button, menu, claseAct, enlaceMenu) {
    const d = document;
    d.addEventListener("click", (e)=>{
        if(e.target.matches(button) || e.target.matches(`${button} *`)){
            d.querySelector(button).classList.toggle(claseAct);
            d.querySelector(menu).classList.toggle(claseAct);
        }
        if(e.target.matches(enlaceMenu)){
            d.querySelector(button).classList.remove(claseAct);
            d.querySelector(menu).classList.remove(claseAct);
        }
    });
};