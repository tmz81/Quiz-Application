import AnswersModel from "../../model/answers";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
  new QuestionModel(201, 'Qual animal transmite a Doença de Chagas?', [
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
  ]),
  new QuestionModel(203, 'Qual é o coletivo de cães?', [
    AnswersModel.incorrect('Manada'),
    AnswersModel.incorrect('Alcateia'),
    AnswersModel.incorrect('Rebanho'),
    AnswersModel.correct('Matilha'),
  ]),
  new QuestionModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
    AnswersModel.incorrect('Equilátero'),
    AnswersModel.incorrect('Isóceles'),
    AnswersModel.incorrect('Trapézio'),
    AnswersModel.correct('Escaleno'),
  ]),
  // new QuestionModel(, 'Qual?', [
  //   AnswersModel.incorrect(''),
  //   AnswersModel.incorrect(''),
  //   AnswersModel.incorrect(''),
  //   AnswersModel.correct(''),
  // ]),
  // new QuestionModel(, 'Qual?', [
  //   AnswersModel.incorrect(''),
  //   AnswersModel.incorrect(''),
  //   AnswersModel.incorrect(''),
  //   AnswersModel.correct(''),
  // ]),
  // new QuestionModel(, 'Qual?', [
  //   AnswersModel.incorrect(''),
  //   AnswersModel.incorrect(''),
  //   AnswersModel.incorrect(''),
  //   AnswersModel.correct(''),
  // ]),
  // new QuestionModel(, 'Qual?', [
  //   AnswersModel.incorrect(''),
  //   AnswersModel.incorrect(''),
  //   AnswersModel.incorrect(''),
  //   AnswersModel.correct(''),
  // ]),
  // new QuestionModel(, 'Qual?', [
  //   AnswersModel.incorrect(''),
  //   AnswersModel.incorrect(''),
  //   AnswersModel.incorrect(''),
  //   AnswersModel.correct(''),
  // ]),
  // new QuestionModel(, 'Qual?', [
  //   AnswersModel.incorrect(''),
  //   AnswersModel.incorrect(''),
  //   AnswersModel.incorrect(''),
  //   AnswersModel.correct(''),
  // ])
]

export default questions