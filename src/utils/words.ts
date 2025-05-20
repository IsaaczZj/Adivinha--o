export type Challenge = {
  id: number;
  word: string;
  tip: string;
};

export const WORDS: Challenge[] = [
  { id: 1, word: "CSS", tip: "Linguagem de estilos" },
  { id: 2, word: "REACT", tip: "Biblioteca para criar interfaces Web" },
  { id: 3, word: "HTML", tip: "Linguagem de Marcação" },
  {
    id: 4,
    word: "JAVASCRIPT",
    tip: "Uma das linguagens de programação mais utilizadas no mundo",
  },
  {
    id: 5,
    word: "TYPESCRIPT",
    tip: "Superset JavaScript que adiciona tipagem",
  },
  { id: 6, word: "TAILWINDCSS", tip: "Framework mais popular de CSS" },
  { id: 7, word: "NODEJS", tip: "Ambiente de execução JavaScript no servidor" },
  { id: 8, word: "PYTHON", tip: "Linguagem de programação perfeita para dados" },
  {
    id: 9,
    word: "ANGULAR",
    tip: "Framework de desenvolvimento front-end mantido pelo Google",
  },
  {
    id: 10,
    word: "NEXTJS",
    tip: "Framework React para produção com renderização no servidor",
  },
  {
    id: 11,
    word: "DOCKER",
    tip: "Plataforma para desenvolver, enviar e executar aplicativos em contêineres",
  },
  {
    id: 12,
    word: "KUBERNETES",
    tip: "Sistema de orquestração de contêineres de código aberto",
  },
  { id: 13, word: "GIT", tip: "Sistema de controle de versão distribuído" },
  { id: 14, word: "API", tip: "Interface de Programação de Aplicativos" },
];
