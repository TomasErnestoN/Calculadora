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
    const { n1, n2, resElement } = getValores();
    const resultado = exponenciacao(n1, n2);
    resElement.innerText = `${n1} elevado a ${n2} = ${resultado}`;
};


window.raiz = function() {
    const { n1, n2, resElement } = getValores();
    const resultado = raiz(n1, n2);
    
    // Se o usuário não digitou n2, mostra mensagem de raiz quadrada
    if (!n2 || n2 === 0) {
        resElement.innerText = `A raiz quadrada de ${n1} = ${resultado}`;
    } else {
        resElement.innerText = `A raiz de índice ${n2} de ${n1} = ${resultado}`;
    }
};


window.fatorial = function() {
    const { n1, resElement } = getValores();
    const resultado = fatorial(n1);
    
    if (isNaN(resultado)) {
        resElement.innerText = `O fatorial de ${n1} não é definido.`;
    } else {
        resElement.innerText = `O fatorial de ${n1}! = ${resultado}`;
    }
};
