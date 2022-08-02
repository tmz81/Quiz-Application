/* eslint-disable import/no-anonymous-default-export */
import questions from "../dbQuestions"

export default (req, res) => {
  const idSelected = +req.query.id;

  const onlyQuestion = questions.filter(question => question.id === idSelected)

  if(onlyQuestion.length === 1) {
    const questionSelected = onlyQuestion[0].shuffleAnswers()
    res.status(200).json(questionSelected.convertToObject())
  } else {
    res.status(204).send()
  }
}
