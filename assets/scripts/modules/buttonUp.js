export function btnUp(btn){
    const d = document,
    $button = d.querySelector(btn);
    d.addEventListener("scroll", ()=>{
        if(scrollY > 1000){
            $button.style.opacity = "1";
        }
        if(scrollY < 1000){
            $button.style.opacity = "0";
        }
    });
};