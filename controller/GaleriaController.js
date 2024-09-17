import Jatekter from "./view/Jatekter.js";
import { kepLista } from "./model/adatok.js";
import NagyKartya from "./view/NagyKartya.js";
import Model from "./model/model.js";

export default class GaleriaController{

    constructor(){
    this.jatekterElem = $(".jatekter");
    this.kivElem = $(".nagykep");
    this.model = new Model(kepLista,0);
    this.index = model.getIndex();
    new NagyKartya(kepLista[index], kivElem);
    new Jatekter(kepLista, jatekterElem);

    this.kivEsemenykezelo();
    this.balEsemenyKezelo();
    this.jobbEsemenyKezelo();
    }


    kivEsemenykezelo(){
        $(window).on("kivalaszt", (event) => {
          console.log(event.detail);
          kivElem.empty();
          model.setIndex(event.detail.index);
          new NagyKartya(event.detail, kivElem);
        });

    }

    jobbEsemenyKezelo(){
        $(window).on("jobb", (event) => {
            console.log(event.detail);
            let index = model.leptetJobb();
            kivElem.empty();
          new NagyKartya(kepLista[index], kivElem);
        });

    }
    balEsemenyKezelo(){
        $(window).on("bal", (event) => {
            console.log(event.detail);
            let index = model.leptetBal();
            kivElem.empty();
          new NagyKartya(kepLista[index], kivElem);
        });

    }
}