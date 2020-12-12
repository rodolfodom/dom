const d = document;


export function slideChage(){
    const $btnPrev = d.getElementById("prv"),
    $btnNext = d.getElementById("nex"),
    slides = d.querySelectorAll(".slide");
    let i = 0;
    d.addEventListener("click", (e)=>{
        if(e.target == $btnPrev){
            slides[i].classList.remove("active");
            i--;
            if(i < 0) i = slides.length - 1;
            slides[i].classList.add("active"); 
        };
        if(e.target == $btnNext){
            slides[i].classList.remove("active");
            i++;
            if(i > slides.length-1) i = 0;
            slides[i].classList.add("active");
        };
    });
};