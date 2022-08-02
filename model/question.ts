import AnswersModel from "./answers";

export default class QuestionModel {
  #id: number;
  #enunciate: string;
  #answers: AnswersModel[];
  #right: boolean;
  // private answered: boolean;

  constructor(id: number, enunciate: string, answers: AnswersModel[], right = false) {
    this.#id = id
    this.#enunciate = enunciate
    this.#answers = answers
    this.#right = right
  }

  get id() {
    return this.id
  }

  get enunciate() {
    return this.enunciate
  }

  get answers() {
    return this.answers
  }

  get right() {
    return this.right
  }

  get answered() {
    for(let answer of this.#answers) {
      if(answer.revealed) return true
    }
    
    return false
  }

  convertToObject() {
    return {
      id: this.#id,
      enunciate: this.#enunciate,
      answers: this.#answers.map(res => res.convertToObject()),
      right: this.#right
    }
  }
}