
import styles from './styles.module.css'
type ButtonProps = React.ComponentProps<'button'> & {
  title:string
}
export default function Button({title, ...props}:ButtonProps){
  return (
    <button className={styles.button} {...props}>{title}</button>
  )
}