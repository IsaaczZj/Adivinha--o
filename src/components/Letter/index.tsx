import styles from "./styles.module.css";

type LetterProps = {
  value?: string;
  size?: "small" | 'default';
  color?:'default' | 'correct' | 'wrong'
};
export default function Letter({ value = "", size = "default", color = 'default'}: LetterProps) {
  return (
    <div className={` ${styles.letter} ${size === 'small' && styles.small} ${color === 'correct' && styles.correct} ${color === 'wrong' && styles.wrong}`}>
      <span>{value}</span>
    </div>
  );
}
