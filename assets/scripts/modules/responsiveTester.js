const d = document,
w = window;

export function tester(form) {
    let newWindow;
    const $form = d.getElementById(form);

    d.addEventListener("submit", (e)=>{
        if(e.target === $form){
            e.preventDefault();
            let url = $form.url.value,
            ancho = $form.ancho.value,
            alto = $form.alto.value;
            newWindow = w.open(url, "_blank", `
            width = ${ancho},
            height = ${alto}`);
            $form.opener.disabled = true;
            $form.closer.disabled = false;
        };
    });

    d.addEventListener("click", (e)=>{
        if(e.target===$form.closer){
            newWindow.close();
            $form.opener.disabled = false;
            $form.closer.disabled = true;
        };
    });

}