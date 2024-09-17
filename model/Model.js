export default class Model {
  #lista = [];
  #index;

  constructor(lista) {
    this.#lista = lista;
    this.#index = 0;
  }

  getIndex() {
    return this.#index;
  }

  setIndex(index){
    this.#index = index;
  }

  leptetBal() {
    this.#index--;
    if (this.#index < 0) {
      this.#index = this.#lista.length - 1;
    }
    return this.#index;
  }

  leptetJobb() {
    this.#index++;
    if (this.#index === this.#lista.length) {
      this.#index = 0;
    }
    return this.#index;
  }
}
