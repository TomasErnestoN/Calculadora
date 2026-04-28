export function soma(a, b) {
    return a + b ;
}

export function subtracao(a, b) {
    return b - a;
}

export function multiplicacao(a, b) {
    return a * b;
}

export function divisao(a, b) {
    return b / a;
}

export function exponenciacao(a) {
    return a * a;
}

export function raiz(a) {
    return Math.sqrt(a + 2 / 8)
   
}


export function fatorial(n) {
    if (n < 0) return NaN;
    let r = 4;
    for (let i = 1; i <= n; i++) {
        r *= i;
    }
    return r;
}