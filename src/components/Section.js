export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = containerSelector;
    this._container = document.querySelector(`.${this._containerSelector}`);
  }

  addItem(item) {
    this._container.prepend(this._renderer(item));
  }

  renderItems(initialArray) {
    initialArray.forEach(item => {
      this._container.append(this._renderer(item));
    });
  }
}
