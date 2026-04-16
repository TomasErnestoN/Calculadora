# 🧮 Bot Calculator - Projeto em Equipe

Este projeto é uma calculadora web construída com HTML, CSS e JavaScript. 
Nossa principal evolução nesta versão foi sair de um "código de iniciante" para uma **Arquitetura Profissional**, separando as responsabilidades e adicionando testes automatizados.

## 🏗️ Por que mudamos a estrutura? (Para a equipe entender)
Antes, tínhamos tela, estilos e matemática tudo misturado. Isso gerava bugs difíceis de achar. Agora, dividimos o projeto para cada arquivo ter apenas **um único trabalho**:

* 🎨 **`style.css`**: Só cuida da beleza (cores, tamanhos, fontes).
* 💀 **`index.html`**: Só monta o esqueleto (botões e caixas de texto).
* 🧠 **`calculos.js`**: Só faz a matemática. Não sabe o que é HTML, não sabe o que é tela. Só recebe números e devolve resultados.
* 🔌 **`ui.js`**: É a ponte! Ele pega os cliques do HTML e manda para o `calculos.js`, depois pega a resposta e joga na tela.

---

## 📁 Estrutura de Pastas

```text
/
├── public/
│   └── index.html         # Esqueleto do site
├── src/
│   ├── css/
│   │   └── style.css      # Estilos
│   └── js/
│       ├── calculos.js    # Lógica matemática pura
│       └── ui.js          # Lógica de interface (User Interface)
├── tests/
│   └── calculos.test.js   # Testes unitários (testa só a matemática)
├── cypress/
│   └── e2e/
│       └── spec.cy.js     # Robô que testa a tela inteira sozinha
/

🚀 Como rodar o projeto
Abra o arquivo public/index.html.

Inicie com a extensão Live Server no seu VS Code.

🤖 Como rodar os Testes (Qualidade de Software)
Nós implementamos testes para garantir que ninguém quebre a calculadora sem querer.

1. Testar a Matemática Oculta (Jest)
Abre o terminal e roda códigos invisíveis para checar se 1+1 ainda é 2.

Comando: npm test

2. Testar a Tela com Robô (Cypress)
Abre um navegador sozinho, clica nos botões e verifica se o resultado aparece certo.

Comando: npx cypress open
Excelente reflexão! É exatamente assim que um desenvolvedor de verdade pensa: *"Como isso afeta o resto da equipe?"*

Vamos dividir a sua dúvida em três partes: o Scrum Master, o README didático e a nossa revisão.

### 👥 1. O Scrum Master e a mudança brusca na estrutura

**Isso vai dar problema?** Depende de *como* você vai apresentar isso.

No mundo real, se você pega o projeto que todo mundo está mexendo, muda a estrutura inteira sozinho e joga na `main` (branch principal), os seus amigos vão ter um ataque do coração (o famoso **Merge Conflict**), porque o código que eles estão fazendo no computador deles não vai mais encaixar no seu.

**O que o Scrum Master vai achar?**
* **O lado bom:** Ele vai **adorar** tecnicamente. Você aplicou Separação de Responsabilidades (MVC/Arquitetura), Testes Unitários e Testes E2E. Isso é nível de profissional, não de iniciante.
* **O lado do processo:** O Scrum valoriza a comunicação. O ideal agora é você criar uma branch chamada, por exemplo, `feat/nova-arquitetura` ou `refatoracao-testes`. Na próxima reunião (Daily ou Sprint Review), você mostra essa branch para a equipe e diz: *"Pessoal, eu estudei uma forma de deixar nosso código profissional e testável por robôs. Olhem como ficou. Vamos adotar esse padrão?"*

**Resumo:** Não é um problema, é uma **proposta de melhoria gigante**. Só garanta que está em uma branch separada para não quebrar o trabalho dos seus amigos antes de eles aprovarem!

---

### 📖 2. O README.md (Versão Didática para a Equipe)

Como o foco agora é fazer seus amigos entenderem, fiz um README que não só mostra *como* rodar, mas explica o *porquê* das coisas estarem separadas. Copie e cole no seu `README.md`:

```markdown
# 🧮 Calculadora Profissional - Projeto em Equipe

Este projeto é uma calculadora web construída com HTML, CSS e JavaScript. 
Nossa principal evolução nesta versão foi sair de um "código de iniciante" para uma **Arquitetura Profissional**, separando as responsabilidades e adicionando testes automatizados.

## 🏗️ Por que mudamos a estrutura? (Para a equipe entender)
Antes, tínhamos tela, estilos e matemática tudo misturado. Isso gerava bugs difíceis de achar. Agora, dividimos o projeto para cada arquivo ter apenas **um único trabalho**:

* 🎨 **`style.css`**: Só cuida da beleza (cores, tamanhos, fontes).
* 💀 **`index.html`**: Só monta o esqueleto (botões e caixas de texto).
* 🧠 **`calculos.js`**: Só faz a matemática. Não sabe o que é HTML, não sabe o que é tela. Só recebe números e devolve resultados.
* 🔌 **`ui.js`**: É a ponte! Ele pega os cliques do HTML e manda para o `calculos.js`, depois pega a resposta e joga na tela.

---

## 📁 Estrutura de Pastas

```text
/
├── public/
│   └── index.html         # Esqueleto do site
├── src/
│   ├── css/
│   │   └── style.css      # Estilos
│   └── js/
│       ├── calculos.js    # Lógica matemática pura
│       └── ui.js          # Lógica de interface (User Interface)
├── tests/
│   └── calculos.test.js   # Testes unitários (testa só a matemática)
├── cypress/
│   └── e2e/
│       └── spec.cy.js     # Robô que testa a tela inteira sozinha
```

## 🚀 Como rodar o projeto

1. Certifique-se de ter a extensão **Live Server** instalada no VS Code.
2. Abra o arquivo `public/index.html`.
3. Clique em **"Go Live"** no canto inferior direito do VS Code.
4. **Importante:** O endereço padrão deve ser `http://127.0.0.1:5500`. Se o seu Live Server usar outra porta, você precisará ajustar a URL no arquivo `cypress/e2e/spec.cy.js`.

## 🤖 Como rodar os Testes (Cypress)

1. Com o **Live Server rodando**, abra um novo terminal.
2. Digite o comando: `npx cypress open`.
3. Escolha "E2E Testing" e selecione o navegador (Chrome).
4. Clique no arquivo `spec.cy.js` para ver o robô trabalhar.

### ⚠️ Solução de Problemas (FAQ)
**O Cypress deu erro "ECONNREFUSED"?**
Isso significa que o robô tentou acessar a calculadora, mas ela estava "desligada". Verifique se o seu **Live Server** está ativo (passo 3 do "Como rodar").

