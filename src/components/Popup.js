export class Popup {
  constructor(popupSelector, popupConfig) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._activeModifier = popupConfig.activeModifier;
    this._closeBtnSelector = popupConfig.closeBtnSelector;
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleCloseBtnClick = () => {
    this.close();
  }

  _handleCloseOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', this._handleCloseOverlayClick);
    this._closeBtn = this._popup.querySelector(this._closeBtnSelector);
    this._closeBtn.addEventListener('click', this._handleCloseBtnClick);
  }

  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.classList.add(this._activeModifier);
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.classList.remove(this._activeModifier);
  }
}
