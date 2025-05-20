
![image](https://github.com/user-attachments/assets/b25d3c7d-dce6-40eb-a783-cc03f24fd70c)

# Jogo da Adivinhação de Palavras

Este é um projeto de um jogo de adivinhação de palavras, onde o jogador tenta descobrir uma palavra secreta com base em dicas e letras fornecidas.

## Funcionalidades

*   Seleção aleatória de uma palavra e sua respectiva dica a cada novo jogo.
*   Interface para o usuário inserir letras como palpite.
*   Exibição das letras corretas na posição correspondente da palavra.
*   Lista de letras já utilizadas, indicando se foram corretas ou incorretas.
*   Contagem de acertos (letras corretas descobertas).
*   Limite de tentativas para adivinhar a palavra.
*   Opção para reiniciar o jogo a qualquer momento.
*   Feedback visual utilizando toasts para:
    *   Alertar sobre letras já utilizadas.
    *   Informar sobre a necessidade de digitar uma letra.
    *   Notificar vitória ou derrota.
*   Revelação da palavra correta caso o jogador esgote as tentativas.
*   Design responsivo (assumindo que o CSS visa isso).

## Tecnologias Utilizadas

*   **React**: Biblioteca principal para construção da interface.
*   **TypeScript**: Superset do JavaScript para tipagem estática.
*   **Vite**: Ferramenta de build rápida para desenvolvimento.
*   **CSS Modules**: Para estilização escopada dos componentes.
*   **React Toastify**: Para exibir notificações (toasts) ao usuário.

## Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone
    cd nome da pasta
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```
    ou se você utiliza Yarn:
    ```bash
    yarn install
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    ou se você utiliza Yarn:
    ```bash
    yarn dev
    ```

4.  Abra o navegador no endereço fornecido (geralmente `http://localhost:5173`).

## Estrutura do Projeto

*   `src/`: Contém todo o código fonte da aplicação.
    *   `App.tsx`: Componente principal que contém a lógica central do jogo e a estrutura da interface.
    *   `App.module.css`: Arquivo de estilos CSS Modules para o componente `App`.
    *   `components/`: Diretório para componentes reutilizáveis da interface.
        *   `Button/`: Componente de botão.
        *   `Guess/`: Componente de input para o palpite da letra.
        *   `Header/`: Componente de cabeçalho, exibindo tentativas e botão de reiniciar.
        *   `Letter/`: Componente para exibir uma letra individual (da palavra secreta ou das letras usadas).
        *   `LettersUsed/`: Componente para listar as letras já utilizadas pelo jogador.
        *   `Tip/`: Componente para exibir a dica da palavra secreta.
    *   `utils/`: Contém arquivos utilitários.
        *   `words.ts`: Define a estrutura `Challenge` e a lista de palavras e dicas (`WORDS`) para o jogo.
*   `public/`: Arquivos estáticos que são servidos diretamente.
*   `index.html`: Arquivo HTML principal da aplicação.
*   `vite.config.ts`: Arquivo de configuração para o Vite.
*   `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json`: Arquivos de configuração do TypeScript.
*   `package.json`: Define as informações do projeto, scripts e dependências.
