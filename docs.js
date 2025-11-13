let meno = document.querySelector(".menu")
let abrir = document.querySelector("#abre")
let fechar = document.querySelector("#fecha")

function ope() {
    meno.style.display="block"
    abrir.style.display="none"
    fechar.style.display="block"
}
function clos() {
    meno.style.display="none"
    abrir.style.display="block"
    fechar.style.display="none"
}