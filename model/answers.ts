export default class AnswersModel {
  #value: string;
  #right: boolean;
  #revealed: boolean;

  constructor(value: string, right: boolean, revealed = false) {
    this.#value = value
    this.#right = right
    this.#revealed = revealed
  }

  static correct(value: string) {
    return new AnswersModel(value, true)
  }

  static incorrect(value: string) {
    return new AnswersModel(value, false)
  }

  get value() {
    return this.#value
  }

  get right() {
    return this.#right
  }

  get revealed() {
    return this.#revealed
  }
}