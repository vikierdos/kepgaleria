export default class NagyKartya {
  /* ADATTAGOK */
  #obj = {};
  #szuloElem;
  kepElem;
  jobbElem;
  balElem;

  /* KONSTRUKTOR */
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.kepKiir();

    this.jobbElem = $(".jobb");
    this.jobbElem.on("click", () => {
      this.#esemenyTrigger("jobb");
    });

    this.balElem = $(".bal");
    this.balElem.on("click", () => {
      this.#esemenyTrigger("bal");
    });
  }

  /* TAGFUGGVENYEK */

  kepKiir() {
    this.#szuloElem.append(`
            <button class="bal col-1" ><<</button>
                <div class="card col-10">
                <h3>${this.#obj.cim}</h3>
                <img src="${
                  this.#obj.url
                }" class="card-img-top kep col-lg-12 img-responsive" alt="${
      this.#obj.cim
    }">
            </div>
            <button class="jobb col-1">>></button>
            
            
            `);
  }

  #esemenyTrigger(esemenynev) {
    const e = new CustomEvent(esemenynev);
    window.dispatchEvent(e);
  }
}
