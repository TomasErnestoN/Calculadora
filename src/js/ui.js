import { soma, subtracao, multiplicacao, divisao, exponenciacao, raiz, fatorial } from "./calculos.js";

// Função para pegar os valores e o elemento de resultado facilmente
const getValores = () => ({
    n1: Number(document.getElementById("n1").value),
    n2: Number(document.getElementById("n2").value),
    resElement: document.getElementById("resultado")
});

window.limpar = function() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("resultado").innerText = "Aguardando operação...";
};

window.soma = function() {
    const { n1, n2, resElement } = getValores();
    resElement.innerText = `A soma de ${n1} + ${n2} = ${soma(n1, n2)}`;
};

window.subtracao = function() {
    const { n1, n2, resElement } = getValores();
    resElement.innerText = `A subtração de ${n1} - ${n2} = ${subtracao(n1, n2)}`;
};

window.multiplicacao = function() {
    const { n1, n2, resElement } = getValores();
    resElement.innerText = `A multiplicação de ${n1} * ${n2} = ${multiplicacao(n1, n2)}`;
};

window.divisao = function() {
    const { n1, n2, resElement } = getValores();
    if (n2 === 0) {
        resElement.innerText = "Erro: Não é possível dividir por zero!";
        return;
    }
    resElement.innerText = `A divisão de ${n1} / ${n2} = ${divisao(n1, n2)}`;
};

window.exponenciacao = function() {
    const { n1, resElement } = getValores();
    resElement.innerText = `${n1} ao quadrado = ${exponenciacao(n1)}`;
};

window.raiz = function() {
    const { n1, resElement } = getValores();
    if (n1 < 0) {
        resElement.innerText = "Erro: Raiz quadrada de número negativo!";
        return;
    }
    resElement.innerText = `A raiz quadrada de ${n1} = ${raiz(n1)}`;
};

window.fatorial = function() {
    const { n1, resElement } = getValores();
    resElement.innerText = `O fatorial de ${n1}! = ${fatorial(n1)}`;
};