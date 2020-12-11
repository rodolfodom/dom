const d = document,
n = navigator;


export function location(id) {
    const $divLoc = d.getElementById(id),
    option = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    },
    succes = pos => {
        $divLoc.innerHTML = `<p>La información de ubicación es:
        <ul>
        <li>latitud: ${pos.coords.latitude}</li>
        <li>longitude: ${pos.coords.longitude}</li>
        <li>precisión: ${pos.coords.accuracy}</li>
        </ul>
        <a href="https://www.google.com/maps/@${pos.coords.latitude},${pos.coords.longitude},20z,rel="noopener">Ver en google maps</a>
        </p>`;
    },
    fail = err => {
        $divLoc.innerHTML = `<p>Error: ${err.code} <mark>${err.message}</mark></p>`;
    };
    n.geolocation.getCurrentPosition(succes, fail, option);
};