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
];
