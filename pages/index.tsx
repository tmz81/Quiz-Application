import Quest from '../components/Quest';
import QuestionModel from '../model/question';
import AnswersModel from '../model/answers';

export default function Home() {
  const questTest = new QuestionModel(1, 'Best Color?', [
    AnswersModel.incorrect('Green'),
    AnswersModel.incorrect('Red'),
    AnswersModel.incorrect('Blue'),
    AnswersModel.correct('black'),
  ])
  
  return (
    <Quest value={questTest}/>
  )
}

