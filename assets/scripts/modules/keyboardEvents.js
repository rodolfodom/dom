export function shortCuts(e) {
    if(e.altKey){
        if(e.key == "a"){
            alert("Hola, has lanzado una alerta, el evento funciona")
        }
        if(e.key == "c"){
            confirm("Hola, has lanzado una confirmación, el evento funciona");
        }
        if(e.key == "p"){
            prompt("Hola, has lanzado un input, el evento funciona")
        }
    }
};

