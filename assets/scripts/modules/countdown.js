export function coundown(fecha, selector, mensaje) {
    const $reloj = document.querySelector(selector);
    let  intervalo = setInterval(() => {
        let hoy = new Date(),
        diferencia = fecha - hoy;
        if(diferencia > 0){
            let dias = Math.floor(diferencia / 86400000),
            horas = Math.floor((diferencia % 86400000) / 3600000),
            minutos = Math.floor(((diferencia % 86400000) % 3600000) / 60000),
            segundos = Math.floor((((diferencia % 86400000) % 3600000) % 60000) / 1000);
            $reloj.textContent = `${dias.toString().padStart(2,"0")} días ${horas.toString().padStart(2,"0")} horas ${minutos.toString().padStart(2,"0")} minutos ${segundos.toString().padStart(2,"0")} segundos`;
        }else{
            $reloj.textContent = mensaje;
            clearInterval(mensaje);
        };
        }, 1000);
};   