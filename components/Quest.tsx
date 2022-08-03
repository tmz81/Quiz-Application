import styles from '../styles/Quest.module.css';
import QuestionModel from "../model/question"
import Enunciate from './Enunciate';

interface QuestProps {
  value: QuestionModel
}

export default function Quest(props: QuestProps) {
  const quest = props.value

  return (
    <div className={styles.quest}>
      <Enunciate text={quest.enunciate}/>
    </div>
  )
}