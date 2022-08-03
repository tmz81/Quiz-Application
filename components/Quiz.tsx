import styles from '../styles/Quiz.module.css';
import Quest from './Quest';
import Button from './Button';
import QuestionModel from '../model/question';

interface QuizProps {
  quest: QuestionModel;
  questionAnswered: (quest: QuestionModel) => void;
  nextQuest: () => void;
  lastQuest: boolean;
}

export default function QuizProps(props: QuizProps) {
  function answerProvider(index: number) {
    if(props.quest.notAnswer) {
      props.questionAnswered(props.quest.responseWith(index))
    }
  }
  
  return (
    <div className={styles.quiz}>
      {props.quest ? 
        <Quest 
          value={props.quest}
          timeOfAnswer={6}
          answerProvider={answerProvider}
          timesUp={props.nextQuest} />
        : false
      }
      <Button 
        onClick={props.nextQuest}
        text={props.lastQuest ? 'Finalizar' : 'Próxima'}  
      />
    </div>
  )
}