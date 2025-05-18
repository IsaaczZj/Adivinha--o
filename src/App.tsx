import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Button from "./components/Button";
import Guess from "./components/Guess";
import Header from "./components/Header";
import Letter from "./components/Letter";
import LettersUsed from "./components/LettersUsed";
import Tip from "./components/Tip";
import { WORDS, type Challenge } from "./utils/words";

function App() {
  const[challange, setChallenge] = useState<Challenge | null>(null)
  const[attempts, setAttempts] = useState(0)
  const[letter, setLetter] = useState('')
  function handleRestartGame() {
    alert("Jogo reiniciado");
  }
  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randonWord = WORDS[index]
    setChallenge(randonWord)
    setAttempts(0)
    setLetter('')
  }
  

  useEffect(() => {
    startGame();
    
  });

  if(!challange) return
  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />
        <Tip tip={challange?.tip} />
        <div className={styles.word}>
          {challange.word.split('').map(() => <Letter/>)}

          
        </div>
        <h4>Palpite</h4>
        <div>
          <Guess autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar" />
        </div>
        <LettersUsed />
      </main>
    </div>
  );
}

export default App;
