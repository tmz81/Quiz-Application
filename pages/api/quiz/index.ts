/* eslint-disable import/no-anonymous-default-export */
import { Shuffle } from "../../../function/arrays"
import questions from "../dbQuestions"

export default (req, res) => {
  const IdsOfQuestions = questions.map(question => question.id)
  res.status(200).json(Shuffle(IdsOfQuestions))    
}