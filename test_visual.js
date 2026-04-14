(async () => {

    const calc = await import('./calculos.js');

    const tela = document.getElementById("testes");

    let total = 0;
    let erros = 0;

    function mostrar(msg, tipo = "ok") {
        const p = document.createElement("p");
        p.textContent = msg;
        p.className = tipo;
        tela.appendChild(p);
    }

    function testar(nome, fn) {
        total++;

        try {
            fn(); // tenta executar o teste
            mostrar(`✔ ${nome}`);
        } catch (e) {
            erros++;
            mostrar(`❌ ${nome} → ${e.message}`, "erro");
        }
    }

    mostrar("Iniciando testes...", "info");

    // 🔹 Testes normais
    testar("Soma", () => {
        if (calc.soma(2,3) !== 5) {
            throw new Error("Resultado incorreto");
        }
    });

    testar("Subtração", () => {
        if (calc.subtracao(5,3) !== 2) {
            throw new Error("Resultado incorreto");
        }
    });

    testar("Multiplicação", () => {
        if (calc.multiplicacao(2,3) !== 6) {
            throw new Error("Resultado incorreto");
        }
    });

    testar("Divisão", () => {
        if (calc.divisao(6,2) !== 3) {
            throw new Error("Resultado incorreto");
        }
    });

    testar("Exponenciação", () => {
        if (calc.exponenciacao(2) !== 4) {
            throw new Error("Resultado incorreto");
        }
    });

    testar("Fatorial", () => {
        if (calc.fatorial(5) !== 120) {
            throw new Error("Resultado incorreto");
        }
    });

    // 🔥 Testes de comportamento (quebrando função)

    testar("Divisão por zero", () => {
        const r = calc.divisao(5,0);

        if (r !== Infinity) {
            throw new Error("Esperava Infinity");
        }
    });

    testar("Raiz negativa", () => {
        const r = calc.raiz(-4);

        if (!isNaN(r)) {
            throw new Error("Esperava NaN");
        }
    });

    // 🔹 Resultado final
    mostrar("----------------------", "info");

    if (erros === 0) {
        mostrar(`🎉 Todos os ${total} testes passaram!`, "ok");
    } else {
        mostrar(`⚠️ ${erros} de ${total} testes falharam`, "erro");
    }

})();