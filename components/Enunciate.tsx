import styles from '../styles/Enunciate.module.css';

interface EnunciateProps {
  text: string;
}

export default function Enunciate(props : EnunciateProps) {
  return (
    <div className={styles.enunciate}>
      <div className={styles.text}>
        {props.text}
      </div>
    </div>
  )
}