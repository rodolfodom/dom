const d = document;


export function sortear(idBtn, participantes, divOpciones) {
    const $opciones = d.querySelector(divOpciones),
    $lista = d.createElement("ul");
    participantes.forEach(el =>{
        let item = d.createElement("li");
        item.textContent = el;
        $lista.appendChild(item);
    });
    $opciones.insertAdjacentElement('afterbegin', $lista);
    d.addEventListener("click", e =>{
        if(e.target.matches(idBtn)){
            let random = Math.floor((Math.random())*participantes.length);
            alert(`El ganador es ${participantes[random]}`);
        }
    });    
}