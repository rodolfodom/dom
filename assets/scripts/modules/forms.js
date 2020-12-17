const d = document;

export function formValidation() {
  let $input = d.querySelectorAll("#contacto [required]");
  $input.forEach((el) => {
    let errorMessage = el.title,
      spanError = d.createElement("span");
    spanError.textContent = errorMessage;
    spanError.classList.add("form-error-message", "none");
    spanError.id = el.name;
    el.insertAdjacentElement("afterend", spanError);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches("#contacto [required]")) {
      let pattern = e.target.pattern || e.target.dataset.pattern,
        input = e.target;
      if (pattern && input.value != "") {
        let regexp = new RegExp(pattern);
        return !regexp.exec(input.value)
          ? d.getElementById(input.name).classList.add("show")
          : d.getElementById(input.name).classList.remove("show");
      }

      if (!pattern) {
        return input.value == ""
          ? d.getElementById(input.name).classList.add("show")
          : d.getElementById(input.name).classList.remove("show");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    if (e.target.matches("#contacto")) {
      d.querySelector("succes").classList.remove("none");
      setTimeout(() => d.querySelector("succes").classList.add("none"), 3000);
    }
  });
}
