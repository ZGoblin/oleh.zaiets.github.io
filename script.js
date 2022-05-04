const selectEl = document.getElementById("select");
const selectSpeed = document.getElementById("select-speed");
const choosenSpeed = document.getElementById("choosen-speed");
const registrationImage = document.getElementById("planet-img");

selectEl.addEventListener("change", function () {
  registrationImage.src = "./Assets/" + this.value + ".svg"
});

selectSpeed.addEventListener("change", function () {
  choosenSpeed.innerText = selectSpeed.value + " Gb";
});
