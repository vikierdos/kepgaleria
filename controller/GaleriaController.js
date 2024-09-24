import Jatekter from "../view/Jatekter.js";
import { kepLista } from "../model/adatok.js";
import NagyKartya from "../view/NagyKartya.js";
import Model from "../model/model.js";

export default class GaleriaController{

    constructor(){
    this.jatekterElem = $(".jatekter");
    this.kivElem = $(".nagykep");
    this.model = new Model(kepLista);
    this.index = this.model.getIndex();
    new NagyKartya(kepLista[this.index], this.kivElem);
    new Jatekter(kepLista, this.jatekterElem);

    this.kivEsemenykezelo();
    this.balEsemenyKezelo();
    this.jobbEsemenyKezelo();
    }


    kivEsemenykezelo(){
        $(window).on("kivalaszt", (event) => {
          console.log(event.detail);
          this.kivElem.empty();
          this.model.setIndex(event.detail.index);
          new NagyKartya(event.detail, this.kivElem);
        });

    }
    
    balEsemenyKezelo(){
        $(window).on("bal", (event) => {
            console.log(event.detail);
            let index = this.model.leptetBal();
            this.kivElem.empty();
          new NagyKartya(kepLista[index], this.kivElem);
        });

    }
    jobbEsemenyKezelo(){
        $(window).on("jobb", (event) => {
            console.log(event.detail);
            let index = this.model.leptetJobb();
            this.kivElem.empty();
          new NagyKartya(kepLista[index], this.kivElem);
        });

    }
}