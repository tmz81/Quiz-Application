import styles from '../styles/Quest.module.css';
import QuestionModel from "../model/question"
import Enunciate from './Enunciate';
import Answer from './Answer';

interface QuestProps {
  value: QuestionModel
}

export default function Quest(props: QuestProps) {
  const quest = props.value

  function renderAnswer() {
    return quest.answers.map((answer, i) => {
      return (<Answer
        key={i}
        value={answer} 
        index={i} 
        letter={'a'} 
        colorLetter={'F2C866'}
      />
    )})
  }
 
  return (
    <div className={styles.quest}>
      <Enunciate text={quest.enunciate}/>
      {renderAnswer()}
    </div>
  )
}