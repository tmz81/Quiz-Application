import styles from '../styles/Answer.module.css';
import AnswersModel from "../model/answers";

interface AnswerProps {
  value: AnswersModel;
  questionIndex: number;
  alternativeLetter: string;
  alternativeLetterColor: string;
  userProvidedResponse: (indexUserProvidedResponse : number) => void;
}

export default function Answer(props: AnswerProps) {
  const answer = props.value;
  const answerRevealed = answer.revealed ? styles.answerCorrect : '';
   
  return (
    <div 
      className={styles.answer}
      onClick={() => props.userProvidedResponse(props.indexUserProvidedResponse)}  
    >
      <div className={styles.contentAnswer}>
        <div className={`${answerRevealed} ${styles.answerContent}`}>
          <div 
            style={{backgroundColor: props.alternativeLetterColor}}
            className={styles.letter}>
            {props.alternativeLetter}
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