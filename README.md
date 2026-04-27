# Bot Calculator - Projeto Profissional

Este projeto é uma calculadora web avançada, refatorada para seguir os melhores padrões da indústria, utilizando **Arquitetura de Separação de Responsabilidades** e automação completa de testes e esteiras de integração (CI/CD).
---

## 🎯 Objetivo e Resumo do Projeto
O objetivo principal deste projeto foi elevar o nível de uma aplicação web simples, aplicando práticas reais do mercado de Engenharia de Software. 

Resumidamente, o projeto focou em três grandes pilares:
- **Arquitetura Limpa:** O código foi refatorado para separar a lógica matemática pura (`calculos.js`) da manipulação de tela (`ui.js`). Isso torna o projeto escalável e fácil de manter.
- **Garantia de Qualidade (QA):** Implementamos uma suíte de proteção com testes unitários (**Jest**) e testes automatizados de interface (**Cypress**), garantindo que o site funcione perfeitamente para o usuário final.
- **Cultura DevOps (CI/CD):** Criamos "robôs" usando o GitHub Actions. Agora, o projeto testa o próprio código, gera pacotes oficiais de lançamento (`.zip`) e publica o site ao vivo automaticamente.
---

## 📁 Estrutura de Pastas

```
    Calculadora
    /
    ├── .github/workflows/      # Robôs de automação (CI/CD)
    │   ├── auto_release.yml    # Gera pacotes .zip de versão oficial
    │   ├── deploy.yml          # Publica o site no GitHub Pages
    │   └── main.yml            # Roda os testes a cada atualização
    ├── public/                 # Pasta de distribuição
    │   └── index.html          # Arquivo principal (Skeleton da aplicação)
    ├── src/                    # Código-fonte (Source)
    │   ├── css/
    │   │   └── style.css       # Estilização e design responsivo
    │   └── js/
    │       ├── calculos.js     # Lógica matemática pura (Soma, Sub, etc.)
    │       └── ui.js           # Gerenciamento de eventos e manipulação de tela
    ├── tests/                  # Testes Unitários
    │   ├── calculos.test.js    # Validação da lógica no terminal (Jest)
    │   └── ui.test.js          # Validação das funções de interface
    ├── cypress/                # Testes de Ponta a Ponta (E2E)
    │   └── e2e/
    │       └── spec.cy.js      # Roteiro que o robô segue para testar a interface
    ├── babel.config.js         # Configuração de compatibilidade do JavaScript
    ├── cypress.config.js       # Configurações do robô de testes Cypress
    ├── package.json            # Configurações de scripts e dependências
    ├── .gitignore              # Bloqueio de arquivos desnecessários no Git
    └── README.md               # Documentação oficial (Este arquivo)

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

## 🤖 Automações (GitHub Actions)

CI-Pipeline (main.yml): Valida a qualidade do código rodando os testes a cada Pull Request.

Auto Release (auto_release.yml): Empacota o código em um .zip oficial na aba "Releases" a cada merge na main.

Deploy Pages (deploy.yml): Publica a pasta public/ automaticamente no GitHub Pages, deixando o site online ao vivo!

---
##Autores:

Kaio Richard Amaral Lisboa

Tomás Ernesto Carvalho

Alex Neves 
