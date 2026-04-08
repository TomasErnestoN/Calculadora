alert("ui carregou")



import {soma, subtracao, multiplicacao, divisao, exponenciacao, raiz, fatorial} from "./calculos.js"


window.soma = function(){

let n1 = Number(document.getElementById("n1").value)
let n2 = Number(document.getElementById("n2").value)

let r = soma(n1,n2)

document.getElementById("resultado").innerText = r

}


window.subtracao = function(){

let n1 = Number(document.getElementById("n1").value)
let n2 = Number(document.getElementById("n2").value)

let r = subtracao(n1,n2)

document.getElementById("resultado").innerText = r

}


window.multiplicacao = function(){

let n1 = Number(document.getElementById("n1").value)
let n2 = Number(document.getElementById("n2").value)

let r = multiplicacao(n1,n2)

document.getElementById("resultado").innerText = r

}


window.divisao = function(){

let n1 = Number(document.getElementById("n1").value)
let n2 = Number(document.getElementById("n2").value)

let r = divisao(n1,n2)

document.getElementById("resultado").innerText = r

}


window.exponenciacao = function(){

let n1 = Number(document.getElementById("n1").value)

let r = exponenciacao(n1)

document.getElementById("resultado").innerText = r

}


window.raiz = function(){

let n1 = Number(document.getElementById("n1").value)

let r = raiz(n1)

document.getElementById("resultado").innerText = r

}


window.fatorial = function(){

let n1 = Number(document.getElementById("n1").value)

let r = fatorial(n1)

document.getElementById("resultado").innerText = r

}
