export class FormValidator {
  constructor (config, formElement) {
    this._formSelector = config.formSelector,
    this._inputSelector = config.inputSelector,
    this._submitButtonSelector = config.submitButtonSelector,
    this._inactiveButtonClass = config.inactiveButtonClass,
    this._inputErrorClass = config.inputErrorClass,
    this._errorClass = config.errorClass,
    this._formElement = formElement
  };
  _showInputError(formInput, errorMessage) {
    const formError = this._formElement.querySelector(`.${formInput.id}-error`);
    formInput.classList.add(this._inputErrorClass);
    console.log(this._inputErrorClass);
    formError.textContent = errorMessage;
    console.log(formError.textContent);
    formError.classList.add(this._errorClass);
  };

  _hideInputError(formInput) {
    const formError = this._formElement.querySelector(`.${formInput.id}-error`);
    formInput.classList.remove(this._inputErrorClass);
    formError.classList.remove(this._errorClass);
    formError.textContent = '';
  };

  _isValid(formInput) {
    if (!formInput.validity.valid) {
      const errorMessage = formInput.validationMessage;
      this._showInputError(formInput, errorMessage);
    }
    else {
      this._hideInputError(formInput);
    }
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((formInput) => {
      return !formInput.validity.valid;
    })
  };

  _toggleButtonState = (inputList, buttonElement) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    }
    else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };

  enableValidation() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    inputList.forEach((formInput) => {
      formInput.addEventListener('input', () => {
        this._isValid(formInput);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
    this._toggleButtonState(inputList, buttonElement);
  }};