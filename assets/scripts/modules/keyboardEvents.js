const d = document;
let x = 0;
let y = 0;

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


export function moveBall(e, bola, tab){
    const $ball = d.querySelector(bola),
    $tablero = d.querySelector(tab),
    ballLimits = $ball.getBoundingClientRect(),
    tabLimits = $tablero.getBoundingClientRect();
    $ball.style.transform = `translate(${x*10}px, ${y * 10}px)`;

    switch (e.keyCode) {
        case 37:
            if(ballLimits.left > (tabLimits.left)){
                x--;
                break;
            };

        case 38:
            e.preventDefault();
            if(ballLimits.top > tabLimits.top) y--;
            break;
        case 39:
            if(ballLimits.right < tabLimits.right) x++;
            break;
        case 40:
            e.preventDefault();
            if(ballLimits.bottom < tabLimits.bottom) y++;
            break;
    };
}