const d = document,
w = window;
export function red(id){
    const $divConection = d.querySelector(id),
    $divText = d.querySelector(`${id} p`);

    w.addEventListener("offline", (e)=>{
        $divConection.style.backgroundColor = "red";
        $divText.textContent = "Conección pérdida";
        $divConection.classList.remove("hidden");
        setTimeout(() => {
            $divConection.classList.add("hidden");
        }, 2000);
    });

    w.addEventListener("online", (e)=>{
        $divConection.style.backgroundColor = "green";
        $divText.textContent = "Conección reestablecida";
        $divConection.classList.remove("hidden");
        setTimeout(() => {
            $divConection.classList.add("hidden");
        }, 2000);
    })
};
