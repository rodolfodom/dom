const d = document,
w = window,
n = navigator;

export function videoWebcam(id) {
    const $muestra = d.getElementById(id);
    n.mediaDevices.getUserMedia({
        audio: false,
        video: true
    })
    .then(stream => {
         $muestra.srcObject = stream;
         $muestra.play();
    }) 
    .catch(err =>{
        console.log(`${err.name}: ${err.message}`);
    });
};