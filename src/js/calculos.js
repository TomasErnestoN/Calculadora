export function soma(a, b) {
    return a + b;
}

export function subtracao(a, b) {
    return a - b;
}

export function multiplicacao(a, b) {
    return a * b;
}

export function divisao(a, b) {
    return a / b;
}

export function exponenciacao(a) {
    return a * a;
}

export function raiz(a) {
    return Math.sqrt(a);
}

export function fatorial(n) {
    if (n < 0) return NaN;
    let r = 1;
    for (let i = 1; i <= n; i++) {
        r *= i;
    }
    return r;
}