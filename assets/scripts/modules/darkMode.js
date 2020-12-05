const d = document;

export function darkMode(btn) {
    const $icon = d.querySelector(`${btn} i`),
    $body = d.querySelector("body");

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            $icon.classList.toggle("fa-moon");
            $icon.classList.toggle("fa-sun");
            $body.classList.toggle("darkMode");
        }
    });
};

