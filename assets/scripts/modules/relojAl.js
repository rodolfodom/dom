
export function activarReloj(btnAR, btnDR, reloj) {
    const d = document;
    let intervalo;
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnAR)){
            intervalo = setInterval(() => {
                 let fecha = new Date();
                 let tiempo = fecha.toLocaleTimeString();
                 d.querySelector(reloj).textContent = tiempo;   
            }, 1000); 
            d.querySelector(btnAR).disabled = true;
            d.querySelector(btnDR).disabled = false;
            d.querySelector(reloj).textContent = new Date().toLocaleTimeString();
            d.querySelector(reloj).style.display = "block";
        };
        if(e.target.matches(btnDR)){
            clearInterval(intervalo);
            d.querySelector(reloj).textContent = null;
            d.querySelector(btnAR).disabled = false;
            d.querySelector(btnDR).disabled = true;
            
        };
    });
};

export function alarma(btnAA, btnDA, alarma){
    const d = document;
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnAA)){
            d.querySelector(alarma).play();
            d.querySelector(btnAA).disabled = true;
            d.querySelector(btnDA).disabled = false;
        };
        if(e.target.matches(btnDA)){
            d.querySelector(alarma).pause();
            d.querySelector(btnAA).disabled = false;
            d.querySelector(btnDA).disabled = true;
        };
    });
    
};
