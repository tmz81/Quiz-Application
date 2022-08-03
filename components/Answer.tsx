import styles from '../styles/Answer.module.css';
import AnswersModel from "../model/answers";

interface AnswerProps {
  value: AnswersModel;
  index: number;
  letter: string;
  colorLetter: string;
  answerProvider: (index: number) => void;
}

export default function Answer(props: AnswerProps) {
  const answer = props.value;
  const answerRevealed = answer.revealed ? styles.answerCorrect : '';
   
  return (
    <div 
      className={styles.answer}
      onClick={() => props.answerProvider(props.index)}  
    >
      <div className={styles.contentAnswer}>
        <div className={`${answerRevealed} ${styles.answerContent}`}>
          <div 
            style={{backgroundColor: props.colorLetter}}
            className={styles.letter}>
            {props.letter}
          </div>
          <div className={styles.value}>
            {answer.value}
          </div>
        </div>
        <div className={styles.back}>
          {answer.right ? (
            <div className={styles.correct}>
              <div>A resposta correta é...</div>
              <div className={styles.value}>{answer.value}</div>
            </div>
          ) : (
            <div className={styles.incorrect}>
              <div>A resposta está errada...</div>
              <div className={styles.value}>{answer.value}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}