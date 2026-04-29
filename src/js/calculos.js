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

export function exponenciacao(a, b) {
    return a ** b; // O operador ** faz a potência em JavaScript
}


export function raiz(x, y) {
    // Se y for vazio, 0 ou não definido, assume 2 (raiz quadrada)
    const indice = (y === undefined || y === 0 || y === "") ? 2 : y;
    return x ** (1 / indice);
}


export function fatorial(n) {
    let r = 1;
    let limite = Math.abs(n); // Transforma -5 em 5
    for (let i = 1; i <= limite; i++) {
        r *= i;
    }
    // Se quiser que o resultado de número negativo seja negativo:
    return n < 0 ? -r : r; 
}
