export function soma(n1, n2){
    return n1 + n2
}

export function subtracao(n1, n2){
    return n1 - n2
}

export function multiplicacao(n1, n2){
    return n1 * n2
}

export function divisao(n1, n2){
    return n1 / n2
}


export function exponenciacao(n1){
    return n1 ** 2
}

export function raiz(n1){
    return Math.sqrt(n1)
}

export function fatorial(n){

if (n < 0) {
    return "Erro: número negativo"
}

if (!Number.isInteger(n)) {
    return "Erro: use inteiro"
}

let resultado = 1

for(let i = 1; i <= n; i++){
    resultado *= i
}

return resultado

}