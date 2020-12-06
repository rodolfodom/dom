const w = window,
d = document,
dataInfo = [
    {embed:'<iframe width="650" height="315" src="https://www.youtube.com/embed/PdBemFos7QM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    url: 'https://www.youtube.com/watch?v=PdBemFos7QM',
    elemento: 'video'},
    {embed:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30108.844035633563!2d-99.11186453935711!3d19.386226992843582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1607269225499!5m2!1ses!2smx" width="650" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    url: 'https://goo.gl/maps/r4go2YCgjzVKBezRA',
    elemento: 'mapa'}
];

// ******************************** mi respuesta ********************* //
function videosRespLoad(id) {
    const $container = d.querySelector(id);
    if(w.innerWidth > 960){
        $container.innerHTML = `${dataInfo[0].embed}\n
        ${dataInfo[1].embed}`  
    }else{
        $container.innerHTML = `<a href= "${dataInfo[0].url}"> Ver ${dataInfo[0].elemento}</a>\n
        <a href= "${dataInfo[1].url}"> Ver ${dataInfo[1].elemento}</a>`
    };
};

//***************************************** respuesta del video*************//

export function embedResp(id, MQ, desktopContent, mobileContent) {
    let breakPoint = w.matchMedia(MQ),
    $element = d.getElementById(id);
    
    function responsive(e) {
        if(e.matches){
            $element.innerHTML = desktopContent;
        }else{
            $element.innerHTML = mobileContent;
        };   
    };
    
    breakPoint.addEventListener("change", responsive);
    responsive(breakPoint);
};
