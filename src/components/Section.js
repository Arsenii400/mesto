// export class Section {
//   constructor({ items, renderer }, containerSelector) {
//     this._initialArray = items;
//     this._renderer = renderer;
//     this._containerSelector = containerSelector;
//     this._container = document.querySelector(`.${this._containerSelector}`);
//   }

//   addItem(item) {
//     this._container.prepend(this._renderer(item));
//   }

//   renderItems() {
//     this._initialArray.forEach(item => {
//       this.addItem(item);
//     });
//   }
// }

export class Section {
  constructor({ renderer } , containerSelector) {
    this._renderer = renderer;
    this._containerSelector = containerSelector;
    this._container = document.querySelector(`.${this._containerSelector}`);
  }

  addItem(item) {
    this._container.prepend(this._renderer(item));
  }

  renderItems(initialArray) {
    initialArray.forEach(item => {
      this.addItem(item);
    });
  }
}
