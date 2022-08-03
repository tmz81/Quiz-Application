import styles from '../styles/Answer.module.css';
import AnswersModel from "../model/answers";

interface AnswerProps {
  value: AnswersModel;
  index: number;
  letter: string;
  colorLetter: string;
}

export default function Answer(props: AnswerProps) {
  const answer = props.value;
  
  return (
    <div className={styles.answer}>
      <div className={styles.contentAnswer}>
        <div className={styles.front}>
          <div className={styles.letter}>
            {props.letter}
          </div>
          <div className={styles.value}>
            {answer.value}
          </div>
        </div>
        <div className={styles.back}>
          
        </div>
      </div>
    </div>
  )
}