import { Popup } from './Popup.js';

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, popupConfig, submitHandler, { normalCaption, activeCaption }) {
    super(popupSelector, popupConfig);
    this._normalCaption = normalCaption;
    this._activeCaption = activeCaption;
    this._handleSubmit = submitHandler;

    this._formElement = this._popup.querySelector('.popup__form');
    this._submitButton = this._formElement.querySelector('.popup__submit');
  }


_handleFormSubmit = (evt) => {
  evt.preventDefault();
  this._handleSubmit(this._cardId, this._removeCardCallBack, this.toggleButtonCaption, this.close);
}

toggleButtonCaption = (isSaving) => {
  this._submitButton.textContent = isSaving ? this._activeCaption : this._normalCaption;
}

open = (cardId, removeCardCallBack) => {
  this._cardId = cardId;
  this._removeCardCallBack = removeCardCallBack;
  super.open();
}

close = () => {
  super.close();
  this._formElement.reset();
}

setEventListeners = () => {
  super.setEventListeners();
  this._formElement.addEventListener('submit', this._handleFormSubmit);
}
}
