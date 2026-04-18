# 🧮 Bot Calculator - Projeto Profissional

Este projeto é uma calculadora web avançada, refatorada para seguir os melhores padrões da indústria, utilizando **Arquitetura de Separação de Responsabilidades** e automação completa de testes.

## 🏗️ Por que mudamos a estrutura?
Para garantir que o projeto seja escalável e fácil de manter, aplicamos a separação de lógica e interface:
- **Lógica (JS):** A matemática pura (`calculos.js`) está isolada, permitindo testes rápidos e precisos.
- **Interface (UI):** O arquivo `ui.js` gerencia apenas a interação com o usuário (DOM).
- **Segurança:** Implementamos uma suíte de testes que impede que novas atualizações quebrem funcionalidades antigas.

---

## 📁 Estrutura de Pastas

```text
/
├── public/                 # Pasta de distribuição
│   └── index.html          # Arquivo principal (Skeleton da aplicação)
├── src/                    # Código-fonte (Source)
│   ├── css/
│   │   └── style.css       # Estilização e design responsivo
│   └── js/
│       ├── calculos.js     # Lógica matemática pura (Soma, Sub, etc.)
│       └── ui.js           # Gerenciamento de eventos e manipulação de tela
├── tests/                  # Testes Unitários
│   └── calculos.test.js    # Validação da lógica no terminal (Jest)
├── cypress/                # Testes de Ponta a Ponta (E2E)
│   └── e2e/
│       └── spec.cy.js      # Roteiro que o robô segue para testar a interface
├── package.json            # Configurações de scripts e dependências
├── .gitignore              # Bloqueio de arquivos desnecessários no Git
└── README.md               # Documentação oficial (Este arquivo)
```

---

## 🚀 Como Executar o Projeto

1.  Instale as dependências necessárias:
    ```bash
    npm install
    ```
2.  Inicie a aplicação utilizando a extensão **Live Server** do VS Code no arquivo `public/index.html` (Porta padrão: 5500).

---

## 🧪 Suíte de Testes (Qualidade de Software)

### 1. Testes de Lógica (Jest)
Focados na precisão dos cálculos.
* `npm test` - Roda os testes unitários básicos.
* `npm run test:detalhado` - Lista cada operação com checks individuais ✅.
* `npm run test:cobertura` - Exibe a tabela detalhada de % de código protegido.

### 2. Automação de Interface (Cypress)
Robôs que testam a experiência real do usuário.
* `npx cypress open` - Abre o navegador para visualização em tempo real do robô.
* `npm run cypress:terminal` - **(Recomendado)** Roda o robô em segundo plano e entrega um relatório executivo com checks ✅ e resumo final no terminal.
* "cypress:terminal": "cypress run --reporter spec"
---
```

### 💡 Dica importante sobre a falha:
Se o comando `npm run cypress:terminal` der erro de "Failing", certifique-se de que o **Live Server** está ligado no navegador. Se o site não estiver aberto no endereço configurado, o robô não consegue "entrar" na calculadora para testar e acaba falhando.

**Agora é só salvar, commitar e fazer o Push!** O seu projeto está com uma documentação digna de um desenvolvedor profissional. 🚀

---
##Autores:

Kaio Richard Amaral Lisboa

Tomás Ernesto Carvalho

Alex Neves 
