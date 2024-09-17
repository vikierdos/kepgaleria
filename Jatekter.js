import Kartya from "./Kartya.js";

export default class Jatekter {
  #lista = [];
  #taroloElem;

  constructor(lista, taroloElem) {
    this.#lista = lista;
    this.#taroloElem = taroloElem;
    this.#taroloElem.empty();
    this.kepKiir();
  }

  kepKiir() {
    this.#lista.forEach((elem) => {
      console.log(elem);
      new Kartya(elem, this.#taroloElem);
    });
  }
}
