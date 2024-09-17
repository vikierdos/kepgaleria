import Jatekter from "./view/Jatekter.js";
import { kepLista } from "./model/adatok.js";
import NagyKartya from "./view/NagyKartya.js";
import Model from "./model/model.js";

const jatekterElem = $(".jatekter");
const kivElem = $(".nagykep");


const model = new Model(kepLista,0);
let index = model.getIndex();
new NagyKartya(kepLista[index], kivElem);
new Jatekter(kepLista, jatekterElem);

$(window).on("kivalaszt", (event) => {
  console.log(event.detail);
  kivElem.empty();
  model.setIndex(event.detail.index);
  new NagyKartya(event.detail, kivElem);
});
$(window).on("jobb", (event) => {
    console.log(event.detail);
    let index = model.leptetJobb();
    kivElem.empty();
  new NagyKartya(kepLista[index], kivElem);
});
$(window).on("bal", (event) => {
    console.log(event.detail);
    let index = model.leptetBal();
    kivElem.empty();
  new NagyKartya(kepLista[index], kivElem);
});
