import styles from "./App.module.css";
import Header from "./components/Header";
import Letter from "./components/Letter";
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
      </main>
    </div>
  );
}

export default App;
