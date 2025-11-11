let gmail = document.querySelector("#mail")
let submissao1 = document.querySelector("#sub1")
let prosegue = document.querySelector(".seguinte")
let senha = document.querySelector("#senha")
let confirm_senha = document.querySelector("#confirm_senha")
let res = document.querySelector(".responde")



function cn() {
    submissao1.style.display="none"
    prosegue.style.display="block"
}

if (senha = confirm_senha) {
    res.innerHTML="Palavra passe não conscite"
}else {
    res.innerHTML="valido"
}