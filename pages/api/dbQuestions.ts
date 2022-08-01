import AnswersModel from "../../model/answers";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
  new QuestionModel(306, 'Qual animal transmite a Doença de Chagas?', [
    new AnswersModel('Abelha', false),
    new AnswersModel('Barata', false),
    new AnswersModel('Rato', false),
    new AnswersModel('Barbeiro', true),
  ])
]

export default questions