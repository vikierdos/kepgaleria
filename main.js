import Jatekter from "./Jatekter.js";
import { kepLista } from "./adatok.js";
import NagyKartya from "./NagyKartya.js";

const jatekterElem = $(".jatekter");
const kivElem = $(".nagykep");

let index = 0;
new NagyKartya(kepLista[index], kivElem);
new Jatekter(kepLista, jatekterElem);

$(window).on("kivalaszt", (event) => {
  console.log(event.detail);
  index = event.detail.index;
  kivElem.empty();
  new NagyKartya(event.detail, kivElem);
});
$(window).on("jobb", (event) => {
  index++;
  if (index === kepLista.length) {
    index = 0;
  }
  kivElem.empty();
  new NagyKartya(kepLista[index], kivElem);
});
$(window).on("bal", (event) => {
  index--;
  if (index < 0) {
    index = kepLista.length - 1;
  }
  kivElem.empty();
  new NagyKartya(kepLista[index], kivElem);
});
