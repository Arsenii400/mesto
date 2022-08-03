export class Section {
  constructor({ renderer }, containerSelector, userId) {
    this._renderer = renderer;
    this._containerSelector = containerSelector;
    this._container = document.querySelector(`.${this._containerSelector}`);
    this._userId = userId;
  }

  addItem(item) {
    this._container.prepend(this._renderer(item));
  }

  renderItems(initialArray) {
    initialArray.forEach(item => {
      if (this._userId === item.owner._id) {
        this._container.prepend(this._renderer(item));
      } else {
        this._container.append(this._renderer(item));
      }
    });
  }
}
