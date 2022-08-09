import Quest from '../components/Questao';
import QuestionModel from '../model/questao';
import AnswersModel from '../model/resposta';

export default function Home() {
  const questTest = new QuestionModel(1, 'Best Color?', [
    AnswersModel.incorrect('Green'),
    AnswersModel.incorrect('Red'),
    AnswersModel.incorrect('Blue'),
    AnswersModel.correct('black'),
  ])
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'Center',
      height: '100vh',
    }}>
      <Quest value={questTest}/>

    </div>
  )
}

