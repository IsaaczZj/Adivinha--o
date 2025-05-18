import Letter from "../Letter";
import styles from "./styles.module.css";

export default function LettersUsed() {
  return (
    <div className={styles.letters}>
      <h5>Letras utilizadas</h5>
      <div>
        <Letter value="x" size="small"/>
        <Letter value="x" size="small" color="wrong"/>
        <Letter value="x" size="small" color="correct"/>
      </div>
    </div>
  );
}
