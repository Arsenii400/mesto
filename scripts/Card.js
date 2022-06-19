import { openPopup, popupImage } from "./index.js";

  const popupPhotoHeading = document.querySelector('.popup__heading-image');
  const popupPhoto = document.querySelector('.popup__photo');

  export class Card {

  constructor(data, cardSelector) {
    this._heading = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
  };

  _getCard() {
    const newCard = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return newCard;
  };

  generateCard() {
    this._element = this._getCard();
    this._setEventListeners();

    this._element.querySelector('.element__img').src = this._image;
    this._element.querySelector('.element__heading').textContent = this._heading;

    return this._element;
  };

  _handleLikeClick() {
    this._element.querySelector('.element__like').classList.toggle('element__like_type_active');
  };

  _handleRemoveCard() {
    this._element.remove();
  };

  _handleOpenFullPhoto() {
    popupPhoto.src = this._image;
    popupPhoto.alt = this._heading;
    popupPhotoHeading.textContent = this._heading;
    openPopup(popupImage);
  };

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._handleRemoveCard();
    });
    this._element.querySelector('.element__img').addEventListener('click', () => {
      this._handleOpenFullPhoto();
    });
  };
};


