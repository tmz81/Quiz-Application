import styles from '../styles/Quest.module.css';
import QuestionModel from "../model/question"
import Enunciate from './Enunciate';
import Answer from './Answer';
import Timer from './Timer';

interface QuestProps {
  value: QuestionModel;
  timeOfAnswer?: number;
  answerProvid: (indexOfQuestion: number) => void;
  timesUp: () => void;
}

const letters = [
  { value: 'A', color: '#F2C866' },
  { value: 'B', color: '#F266BA' },
  { value: 'C', color: '#85D4F2' },
  { value: 'D', color: '#BCE596' },
]

export default function Quest(props: QuestProps) {
  const quest = props.value

  function renderAnswer() {
    return quest.answers.map((answer, i) => {
      return (<Answer
        key={`${quest.id}-${i}`}
        value={answer} 
        indexOfQuestion={i} 
        letter={letters[i].value} 
        colorLetter={letters[i].color}
        respostaFornecida={props.answerProvid}
      />
    )})
  }
 
  return (
    <div className={styles.quest}>
      <Enunciate text={quest.enunciate}/>
      <Timer 
        key={quest.id} 
        duration={props.timeOfAnswer ?? 20}
        timesUp={props.timesUp}
        />
      {renderAnswer()}
    </div>
  )
}