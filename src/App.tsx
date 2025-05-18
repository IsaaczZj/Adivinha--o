import styles from "./App.module.css";
import Button from "./components/Button";
import Guess from "./components/Guess";
import Header from "./components/Header";
import Letter from "./components/Letter";
import LettersUsed from "./components/LettersUsed";
import Tip from "./components/Tip";

function App() {
  function handleRestartGame() {
    alert("Jogo reiniciado");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={7} max={10} onRestart={handleRestartGame} />
        <Tip tip="Linguagem de programacao para Front-End" />
        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="" />
          <Letter value="" />
          <Letter value="C" />
          <Letter value="T" />
        </div>
        <h4>Palpite</h4>
        <div>
          <Guess autoFocus maxLength={1} placeholder="?"/>
          <Button title="Confirmar"/>
        </div>
        <LettersUsed/>
      </main>
    </div>
  );
}

export default App;
