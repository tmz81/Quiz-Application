/* eslint-disable import/no-anonymous-default-export */
import questions from "../dbQuestions"

export default (req, res) => {
  const idSelected = +req.query.id;
  const questionSelected = questions.filter(questions => questions.id === idSelected)

  if(questionSelected.length === 1) {
    const onlyQuestion = questionSelected[0]
    res.status(200).json(onlyQuestion.convertToObject())
  } else {
    res.status(204).send()
  }
}
