const d = document;

export function btnUp(btn){    
    const $button = d.querySelector(btn);
    d.addEventListener("scroll", (e)=>{
        let scrollTop = d.documentElement.scrollTop;
        if(scrollTop > 1000){
            $button.classList.remove("hidden");                                    
        };
        if(scrollTop < 1000){
            $button.classList.add("hidden");
        };
    });

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            scrollTo({
                behavior:"smooth",
                top: 0,
            });
        };
    });
};