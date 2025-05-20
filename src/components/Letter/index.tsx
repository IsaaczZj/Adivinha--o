import styles from "./styles.module.css";

type LetterProps = {
  value?: string;
  size?: "small" | 'default';
  color?:'default' | 'correct' | 'wrong' | 'showWord'
};
export default function Letter({ value = "", size = "default", color = 'default'}: LetterProps) {
  return (
    <div className={` ${styles.letter} ${size === 'small' && styles.small} ${color === 'correct' && styles.correct} ${color === 'wrong' && styles.wrong} ${color === 'showWord' && styles.showWord}`}>
      <span>{value}</span>
    </div>
  );
}
