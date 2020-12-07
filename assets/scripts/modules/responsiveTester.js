const d = document,
w = window;
export function tester(openButton, closeButton, urlInp, widthInp, heightInp) {
    let newWindow;
    const $close = d.querySelector(closeButton),
    $open = d.querySelector(openButton);
    d.addEventListener("click", (e)=>{

        if(e.target.matches(openButton)){
            let url = d.querySelector(urlInp).value,
            width = d.querySelector(widthInp).value,
            height = d.querySelector(heightInp).value;
            newWindow = w.open(url, "_blank", `width = ${width}, height = ${height}`);
            $close.disabled = false;
            $open.disabled = true;
        };
    
        if(e.target.matches(closeButton)){
            newWindow.close();
            $close.disabled = true;
            $open.disabled = false;
        };

    });

};

export function testerClose(params) {
    
}