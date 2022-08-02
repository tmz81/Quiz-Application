import styles from '../styles/Quest.module.css';
import QuestionModel from "../model/question"

interface QuestProps {
  value: QuestionModel
}

export default function Quest(props: QuestProps) {
  const quest = props.value

  return (
    <div className={styles.quest}>
      <h1>Question Component</h1>
    </div>
  )
}