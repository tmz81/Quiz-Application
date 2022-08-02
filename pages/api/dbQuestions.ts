import AnswersModel from "../../model/answers";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
  new QuestionModel(306, 'Qual animal transmite a Doença de Chagas?', [
    AnswersModel.incorrect('Abelha'),
    AnswersModel.incorrect('Barata'),
    AnswersModel.incorrect('Rato'),
    AnswersModel.correct('Barbeiro'),
  ]),
  new QuestionModel(202, 'Qual alimento é conhecido no Norte & Nordeste pelo nome de Jerimum', [
    AnswersModel.incorrect('Abacaxi'),
    AnswersModel.incorrect('Caju'),
    AnswersModel.incorrect('Chuchu'),
    AnswersModel.correct('Abóbora'),
  ])
]

export default questions