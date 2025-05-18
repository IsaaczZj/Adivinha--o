import styles from "./styles.module.css";

type LetterProps = {
  value?: string;
};
export default function Letter({ value = "" }: LetterProps) {
  return (
    <div className={styles.letter}>
      <span>{value}</span>
    </div>
  );
}
