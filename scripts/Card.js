export class Card {

  constructor(data, cardSelector, handleCardClick) {
    this._heading = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._popupPhotoHeading = document.querySelector('.popup__heading-image');
    this._popupPhoto = document.querySelector('.popup__photo');
  };

  _getCard = () => {
    const newCard = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return newCard;
  };

  _handleLikeClick = () => {
    this._likeButton.classList.toggle('element__like_type_active');
  };

  _handleRemoveCard = () => {
    this._element.remove();
  };

  _setEventListeners = () => {
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._handleRemoveCard();
    });
    this._element.querySelector('.element__img').addEventListener('click', () => {
      this._handleCardClick(this._heading, this._image);
    });
  };

  generateCard = () => {
    this._element = this._getCard();
    this._setEventListeners();

    this._likeButton = this._element.querySelector('.element__like');

    this._element.querySelector('.element__img').src = this._image;
    this._element.querySelector('.element__img').alt = this._heading;
    this._element.querySelector('.element__heading').textContent = this._heading;

    return this._element;
  };
};


