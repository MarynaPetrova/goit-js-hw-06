const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  if (
    input.value.length === Number(input.dataset.length) &&
    input.value.length !== 0
  ) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});