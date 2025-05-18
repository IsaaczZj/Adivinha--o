import styles from "./styles.module.css";

type LetterProps = {
  value?: string;
  size?: "small" | 'default';
};
export default function Letter({ value = "", size = "default" }: LetterProps) {
  return (
    <div className={` ${styles.letter} ${size === 'small' && styles.small}`}>
      <span>{value}</span>
    </div>
  );
}
