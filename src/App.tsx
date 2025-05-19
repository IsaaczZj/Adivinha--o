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
    alert("Jogo reiniciado");
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

  useEffect(() => {
    startGame();
  }, []);

  if (!challange) return;
  return (
    <div className={styles.container}>
      <main>
        <Header current={score} max={10} onRestart={handleRestartGame} />
        <Tip tip={challange?.tip} />
        <div className={styles.word}>
          {challange.word.split("").map((letter, index) => {
            const correctLetter = usedLetter.find(
              (currentLetter) => currentLetter.value.toUpperCase() === letter.toUpperCase()
            );

            return <Letter key={index} value={correctLetter?.value} color={correctLetter?.isCorrect ? 'correct' : 'default'}/>;
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
