const d = document;
export function setValStorage(btn) {
    const $icon = d.querySelector(`${btn} i`),
    $body = d.querySelector("body");
    let classIcon = localStorage.getItem("classIcon"),
    classBody = localStorage.getItem("classBody");

    if(classBody != null && classIcon != null){
        $icon.setAttribute("class", classIcon);
        $body.setAttribute("class", classBody);
    }
};

export function ModeStorage(btn) {
    const $icon = d.querySelector(`${btn} i`),
    $body = d.querySelector("body");
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            localStorage.setItem("classIcon", $icon.classList);
            localStorage.setItem("classBody", $body.classList);
        };
    });
};