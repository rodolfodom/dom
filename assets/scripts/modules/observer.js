const d = document;

export function scrollspy() {
    const options = {
        threshold: 0.5
    },
    callback = (entries)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                let id = entry.target.getAttribute("id"),
                enlace = d.querySelector(`[href="#${id}"]`);
                enlace.parentElement.classList.add("itemActive");
            }else{
                let id = entry.target.getAttribute("id"),
                enlace = d.querySelector(`[href="#${id}"]`);
                enlace.parentElement.classList.remove("itemActive");
            };
        });
    };
    
    let observer = new IntersectionObserver(callback, options);
    d.querySelectorAll(".seccion").forEach((sec)=> observer.observe(sec));
};