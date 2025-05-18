import styles from "./styles.module.css";

type InputProps = React.ComponentProps<"input"> & {};
export default function Guess({ ...props }: InputProps) {
  return <input type="text" className={styles.guess} {...props} />;
}
