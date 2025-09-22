# React Secret Word

Um jogo simples de adivinhação de palavra feito com React + Vite. O objetivo é descobrir a palavra secreta antes de cometer muitos erros.

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Como executar](#-como-executar)
- [Configuração](#-configuração)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## 🔍 Visão Geral

Este projeto é um jogo de _palavra secreta_, no estilo “forca/adivinhação”. O jogador tenta adivinhar letras ou a palavra completa, recebendo feedback visual sobre acertos e erros.

Usei React + Vite para fazer um frontend reativo e leve.

---

## ✅ Funcionalidades

Algumas possíveis funcionalidades que já estão implementadas ou que podem ser implementadas:

- Escolha aleatória da palavra secreta
- Entrada de letras ou palavra completa
- Feedback visual de letras acertadas e erradas
- Número limitado de tentativas
- Estado de vitória ou derrota

---

## 🛠 Tecnologias

- React
- Vite
- ESLint (configuração customizada)
- JavaScript
- HTML / CSS

---

## 🚀 Como executar

Estes passos assumem que você tem **Node.js** instalado no sistema.

1. Clone este repositório:

   ```bash
   git clone https://github.com/LuizColombo/react-secret-word.git

   ```

2. Entre na pasta do projeto:

   ```bash
   cd react-secret-word

   ```

3. Instale as dependências:

   ```bash
   npm install

   ```

4. Rode o projeto:

   ```bash
   npm start

   ```

5. Abra o navegador em http://localhost:3000 (ou porta que o Vite indicar) para ver o projeto funcionando.

---

⚙️ Configuração

- Se quiser mudar ou adicionar funcionalidades:
- Altere as palavras secretas (por exemplo, manter uma lista de palavras externas ou API)
- Ajuste o número máximo de tentativas
- Personalize o estilo visual

---

📂 Estrutura de Pastas

Uma visão geral das pastas do projeto:

```text
react-secret-word/
│
├── public/              # arquivos estáticos
├── src/                 # código fonte
│   ├── components/      # componentes React
│   ├── assets/          # imagens, css, etc
│   ├── App.jsx          # componente raiz
│   └── index.jsx        # ponto de entrada
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```
