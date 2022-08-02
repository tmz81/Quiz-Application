/* eslint-disable import/no-anonymous-default-export */
import questions from "../dbQuestions"

export default (req, res) => {
  res.status(200).json(questions[0])
}
