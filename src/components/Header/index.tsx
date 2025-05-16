import styles from "./styles.module.css";
import logo from "../../assets/logo.png";
import restart from "../../assets/restart.svg";
type HeaderProps = {
  current: number;
  max: number;
  onRestart: () => void
};

export default function Header({ current, max, onRestart }: HeaderProps) {
  return (
    <header className={styles.container}>
      <img src={logo} alt="Logo Adivinhe" />

      <div>
        <span>
          <strong>{current}</strong> de {max} tentativas
        </span>
        <button onClick={onRestart}>
          <img src={restart} alt="icone de reiniciar" />
        </button>
      </div>
    </header>
  );
}
