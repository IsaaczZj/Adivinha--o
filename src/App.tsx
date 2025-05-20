import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Button from "./components/Button";
import Guess from "./components/Guess";
import Header from "./components/Header";
import Letter from "./components/Letter";
import LettersUsed, { type UsedLetter } from "./components/LettersUsed";
import Tip from "./components/Tip";
import { WORDS, type Challenge } from "./utils/words";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [score, setScore] = useState(0);
  const [challange, setChallenge] = useState<Challenge | null>(null);
  const [letter, setLetter] = useState("");
  const [usedLetter, setUsedLetter] = useState<UsedLetter[]>([]);

  function handleRestartGame() {
    toast(({ closeToast }) => (
      <span className={styles.containerButton}>
        Tem certeza que deseja reiniciar o jogo?
        <div>
          <button
            className={styles.toastButton}
            onClick={() => {
              startGame();
              if (closeToast) closeToast();
            }}
          >
            Sim
          </button>
          <button
            className={`${styles.toastButton} ${styles.decline}`}
            onClick={() => {
              if (closeToast) closeToast();
            }}
          >
            Não
          </button>
        </div>
      </span>
    ));
  }
  //Escolhe a challange(PALAVRA A SER DESCOBERTA) aleatoriamente
  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randonWord = WORDS[index];
    setChallenge(randonWord);
    setScore(0);
    setLetter("");
    setUsedLetter([]);
  }

  function handleConfirm() {
    if (!challange) return;
    if ((!letter.trim() && letter.length === 0) || letter === " ") {
      return toast.error("Digite uma letra!");
    }
    const value = letter.toUpperCase();
    const exists = usedLetter.find(
      (letter) => letter.value.toUpperCase() === value
    );
    if (exists) {
      setLetter("");
      return toast.info("Você já utilizou a letra " + value);
    }
    const hits = challange.word
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length;

    const correct = hits > 0;
    const currentScore = score + hits;

    setUsedLetter([...usedLetter, { value, isCorrect: correct }]);
    setScore(currentScore);
    setLetter("");
  }

  function endGame(msg: string, lost?: boolean) {
    if (lost) {
      toast.warn(msg);
    } else {
      toast.info(msg);
    }
    setTimeout(() => {
      return startGame();
    }, 2000);
  }

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (!challange) return;

    setTimeout(() => {
      if (score === challange.word.length) {
        endGame("Parabens, voce descobriu a palavra");
        return;
      }
      if (usedLetter.length === challange.word.length + 5) {
        return endGame("Que pena, voce usou todas as tentativas", true);
      }
    }, 500);
  }, [score, usedLetter.length]);

  if (!challange) return;
  return (
    <div className={styles.container}>
      <main>
        <Header
          current={usedLetter.length}
          max={challange.word.length + 5}
          onRestart={handleRestartGame}
        />
        <Tip tip={challange?.tip} />
        <div className={styles.word}>
          {challange.word.split("").map((letter, index) => {
            const correctLetter = usedLetter.find(
              (currentLetter) =>
                currentLetter.value.toUpperCase() === letter.toUpperCase()
            );

            return (
              <Letter
                key={index}
                value={correctLetter?.value}
                color={correctLetter?.isCorrect ? "correct" : "default"}
              />
            );
          })}
        </div>
        <h4>Palpite</h4>

        <div>
          <Guess
            autoFocus
            maxLength={1}
            placeholder="?"
            onChange={({ target }) => setLetter(target.value)}
            value={letter}
          />
          <Button title="Confirmar" onClick={handleConfirm} />
        </div>
        <LettersUsed data={usedLetter} />
        <ToastContainer
          position="top-center"
          theme="colored"
          className={styles.toast}
        />
      </main>
    </div>
  );
}

export default App;
