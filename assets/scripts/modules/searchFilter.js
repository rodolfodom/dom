const d = document;

export function filtro(selector){
    d.addEventListener("keyup", (e)=>{
        if(e.target.matches(selector)){
            let cards = d.querySelectorAll("figcaption"),
            input = d.querySelector(selector),
            expreg = new RegExp(`${input.value}`, "i");
            cards.forEach(el => {
                expreg.test(el.textContent)? el.parentElement.style.display = "unset": el.parentElement.style.display = "none"; 
            });
        }
    });
};