import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, formName, popupConfig, formConfig, errorResetCallback, submitCallBack, { normalCaption, activeCaption },
    getterCallBack = null) {
    super(popupSelector, popupConfig);
    this._formName = formName;
    this._inputSelector = formConfig.inputSelector;
    this._submitBtnSelector = formConfig.submitBtnSelector;
    this._submitCallBack = submitCallBack;
    this._getterCallBack = getterCallBack;
    this._formElement = document.forms[this._formName];
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._submitBtn = this._formElement.querySelector(this._submitBtnSelector);
    this._errorResetCallback = errorResetCallback;
    this._normalCaption = normalCaption;
    this._activeCaption = activeCaption;
    this._submitButton = this._formElement.querySelector('.popup__submit');
  }

  _getInputValues = () => {
    const values = {};
    this._inputList.forEach((inputElement) => {
      values[inputElement.id.slice(0, -6)] = inputElement.value;
    });
    return values;
  }

  _setInputValues = (values) => {
    this._inputList.forEach((inputElement) => {
      inputElement.value = values[inputElement.id.slice(0, -6)];
    })
  }

  toggleButtonCaption = (isSaving) => {
    this._submitButton.textContent = isSaving ? this._activeCaption : this._normalCaption;
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(this._getInputValues());
    this._submitCallBack(this._getInputValues(), this.toggleButtonCaption, this.close);
    // this.close();
  }

  setEventListeners = () => {
    super.setEventListeners();
    this._formElement.addEventListener('submit', this._handleSubmit);
  }

  open = () => {
    super.open();
    // console.log("Проверка метода опен класса попапвизформ");
    if (this._getterCallBack) {
      this._setInputValues(this._getterCallBack());
    }
    else {
      this._formElement.reset();
    }
    this._errorResetCallback();

  }

  close = () => {
    super.close();
    this._formElement.reset();
  }
}
