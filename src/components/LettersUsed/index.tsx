import Letter from "../Letter";
import styles from "./styles.module.css";

export type UsedLetter = {
  value: string;
  isCorrect: boolean;
};

type LettersUsedProps = {
  data: UsedLetter[];
};
export default function LettersUsed({ data }: LettersUsedProps) {
  return (
    <div className={styles.letters}>
      <h5>Letras utilizadas</h5>
      <div>
        {data.map(({value, isCorrect}) => (
          <Letter value={value} size="small" color={isCorrect ? 'correct': 'wrong'}/>
        ))}

        
      </div>
    </div>
  );
}
