export default class Kartya {
  /* ADATTAGOK */
  #obj = {};
  #szuloElem;
  kepElem;

  /* KONSTRUKTOR */
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.kepKiir();
    this.kepElem = $(".kep:last");
    console.log(this.#obj);
    this.esemenykezelo();
  }

  /* TAGFUGGVENYEK */

  kepKiir() {
    this.#szuloElem.append(`
            <div class="card col-lg-3 col-md-4 col-sm-6 row">
                <img src="${
                  this.#obj.url
                }" class="card-img-top kep col-lg-12 img-responsive" alt="${
      this.#obj.cim
    }">
            </div>
            `);
  }

  esemenykezelo() {
    this.kepElem.on("click", () => {
      // console.log(this);

      const e = new CustomEvent("kivalaszt", { detail: this.#obj });
      window.dispatchEvent(e);
    });
  }
}
